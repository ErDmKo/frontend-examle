class SliderController {
    constructor() {
        this.items = [];
        this.slide = 0;
        this._scrollPosition = 0;
        this.setSlide = ()=>{};
        this.moveToSlideTimeout = null;
        this.typeName = "next";
        this.ready = new Promise((resolve, reject) => {
            this.allItemReady = (length)=> {
                resolve(length);
            }
        });
        this.clones = {
            start: '',
            end: ''
        }
    }
    setType(typeName){
        if (document.body.offsetWidth < 800) {
            return;
        }
        this.typeName = typeName;
        this.ready.then((length)=>{
            if (this.typeName == "switch" && length >= 2) {
                this.clones.start = this.items[this.items.length-1].elem.cloneNode(1);
                this.clones.start.classList.add('clone');
                this.items[0].elem.parentNode
                    .insertBefore(
                        this.clones.start,
                        this.items[0].elem
                    )
                this.clones.end = this.items[0].elem.cloneNode(1);
                this.clones.end.classList.add('clone');
                this.items[0].elem.parentNode
                    .appendChild(
                        this.clones.end
                    )
                this.moveToSlide(this.slide, false);
                window.dispatchEvent(new Event('resize'));
            }
        })
    }
    set scrollPosition(val){
        this.slide = this.items.map((item, index)=>{
            let elemInfo = item.getElemInfo();
            let center = val + elemInfo.offsetWidth;
            if (elemInfo.setActive) {
                elemInfo.setActive(val - elemInfo.offsetLeft);
            }
            return {
                diff: Math.abs(elemInfo.center - center),
                index: index
            };
        }).reduce((min, delta)=>{
            if (min.diff > delta.diff) {
                min = delta
            }
            return min;
        }, {diff: 99999, index: -1}).index;
        this._scrollPosition = val;
        this.setSlide(this.slide);
    }
    switch(from, to) {
        let parentNode = this.items[0].elem.parentNode;
        let nodeList = Array.prototype.slice
            .call(parentNode.children)
        //parentNode.insertBefore(to === null ? to : nodeList[to], nodeList[from]);
    }
    moveToSlide(position, animate){
        animate = animate === undefined ? true: animate;
        clearTimeout(this.moveToSlideTimeout);
        this.moveToSlideTimeout = setTimeout(()=>{
            this.scrollHandler(this.items[position].getElemInfo().offsetLeft, animate);
        }, 0);   
    }
    addItem(item) {
        let index = this.items.push(item) - 1;
        if (index == item.elem.parentNode.children.length - 1) {
            this.allItemReady(index);
        }
        return (newInfo) => {
            this.items[index].elemInfo = newInfo;
            this.moveToSlide(this.slide);
        }
    }
    addContent(handler) {
        this.scrollHandler = handler;
    }
    next(delta) {
        let next = this.slide + delta;
        if (this.typeName == "switch") {
            let elementInfo = this.items[this.slide].getElemInfo();
            let promise;
            if (next >= this.items.length) {
                next = 0;
                this.clones.end.classList.add('show');
                promise = this.scrollHandler(
                    elementInfo.offsetLeft+elementInfo.offsetWidth,
                    true
                );
            } else if (next < 0) {
                next = this.items.length - 1;
                this.clones.start.classList.add('show');
                promise = this.scrollHandler(
                    elementInfo.offsetLeft-elementInfo.offsetWidth,
                    true);
            } else {
                promise = this.scrollHandler(this.items[next].getElemInfo().offsetLeft, true);
            }
            
            promise.then(()=> {
                let elementInfo = this.items[next].getElemInfo();
                this.clones.start.classList.remove('show');
                this.clones.end.classList.remove('show');
                this.scrollHandler(
                elementInfo.offsetLeft,
                false);
            })
            this.slide = next;
            return;
        }
        if (next >= this.items.length) {
            next = 0;
        } else if(next < 0) {
            next = this.items.length - 1;
        }
        this.moveToSlide(next);
        this.slide = next;
    }
    addController(delta) {
        let handler = (e) => {
            this.next(delta);
        }
        return handler;
    }
    setCounter(handler) {
        this.setSlide = handler;
        this.scrollPosition = 0;
    }
    static factory(...args) {
        SliderController.instance = new SliderController(...args);
        return SliderController.instance;
    }
}
export class SliderMain {
    constructor() {
        this.restrict = 'A';
        this.require = 'sliderMain';
        this.controller = SliderController.factory;
    }
    link(scope, element, attrs, sliderMain) {
        sliderMain.setType(attrs.sliderMain);
    }
}
export class SliderContent {

    /*@ngInject*/
    constructor(easingAnimator) {
        this.easingAnimator = easingAnimator
        this.easingAnimator.callBack = this.animate.bind(this);
        this.require = '^sliderMain';
        this.restrict = 'A';
        this.timeout;
    }
    animate(info) {
        this.element.scrollLeft = info.left;
    }
    link(scope, element, attrs, sliderMain) {
        this.element = element[0];
        sliderMain.addContent((val, animate)=>{
            if (!animate) {
                this.element.scrollLeft = val
            } else {
                return this.easingAnimator.easeProp({
                    left: this.element.scrollLeft
                }, {
                    left: val
                })
            }
        });
        element.on('scroll', ()=>{
            clearTimeout(this.timeout);
            this.timeout = setTimeout(()=>{
               sliderMain.scrollPosition = this.element.scrollLeft;  
            }, 1);
        });
    }
}

export class SliderCounter {
    /*@ngInject*/
    constructor($timeout) {
        this.$timeout = $timeout;
        this.require = '^sliderMain';
        this.restrict = 'A';
    }
    link($scope, element, attrs, sliderMain) {
        sliderMain.setCounter((val)=>{
            this.$timeout(()=>{
                $scope.selectedSlide = (1e4+val+1+"").slice(-2);
            })
        })
    }
}
export class SliderItem {
    /*@ngInject*/
    constructor($window) {
        this.require = '^sliderMain';
        this.restrict = 'A';
        this.$window = angular.element($window);
        this.elems = [];
        this.timeout;
    }
    getElemInfo(index) {
        let element = this.elems[index];
        return {
            offsetLeft: element.offsetLeft,
            center: element.offsetLeft + element.offsetWidth/2,
            offsetWidth: element.offsetWidth
        };
    }
    link(scope, element, attrs, sliderMain) {
        let index = this.elems.push(element[0]) - 1;
        let handler = sliderMain.addItem({
            elem: this.elems[index],
            elemInfo: this.getElemInfo(index),
            getElemInfo: (function(index) {
                return this.getElemInfo(index);
            }).bind(this, index)
        });
        window.addEventListener('resize', ()=>{
            clearTimeout(this.timeout);
            this.timeout = setTimeout(()=>{
               handler(this.getElemInfo(index)); 
            }, 10);
        });
    }
}
export class UniSliderItem extends SliderItem {
    getElemInfo(index) {
        if (document.body.offsetWidth < 800) {
            return super.getElemInfo(index);
        }
        let element = this.elems[index];
        let domElems =  Array.prototype.slice
            .call(element.parentNode.children);
        let domIndex =domElems
            .indexOf(element);
        return {
            domIndex: domIndex,
            offsetLeft: !domIndex? 0:
                element.offsetLeft - domElems[0].offsetLeft,
            center: !domIndex? element.offsetLeft + element.offsetWidth/2 :
                domElems[domIndex-1].offsetLeft + domElems[domIndex-1].offsetWidth/2
                 + element.offsetWidth,
            offsetWidth: element.offsetWidth,
            setActive: (delta)=>{
                element.style.opacity = Math.max(0, 1.2-Math.abs(delta/element.offsetWidth));
                if (Math.abs(element.style.opacity - 1) > 0.2) {
                    element.classList.remove('active')
                } else {
                    element.classList.add('active')
                }
            }
        }
    }
}
export class SmallSliderItem extends SliderItem {
    
    getElemInfo(index) {
        if (document.body.offsetWidth < 800) {
            return super.getElemInfo(index);
        }
        let element = this.elems[index];
        return {
            offsetLeft: element.offsetLeft - element.offsetWidth,
            center: element.offsetLeft - element.offsetWidth/2,
            offsetWidth: element.offsetWidth
        }
    }
}
    
export class SliderControll {
    constructor() {
        this.require = '^sliderMain';
        this.restrict = 'A';
    }
    link(scope, element, attrs, sliderMain) {
        let handler = sliderMain.addController(+attrs.sliderControll)
        element.on('click', handler.bind(sliderMain))
    }
}
