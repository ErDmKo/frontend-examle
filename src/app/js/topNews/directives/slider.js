class SliderController {
    constructor() {
        this.items = [];
        this.slide = 0;
        this._scrollPosition = 0;
        this.setSlide = ()=>{};
        this.moveToSlideTimeout = null;
    }
    set scrollPosition(val){
        this.slide = this.items.reduce((outIndex, item, index)=>{
            let center = val + item.elemInfo.offsetWidth;
            if (item.elemInfo.setActive) {
                item.elemInfo.setActive(val - item.elemInfo.offsetLeft);
            }
            if(item.elemInfo.center < center) {
                outIndex = index;
            }
            return outIndex;
        }, 0);
        this._scrollPosition = val;
        this.setSlide(this.slide);
    }
    moveToSlide(position){
        clearTimeout(this.moveToSlideTimeout);
        this.moveToSlideTimeout = setTimeout(()=>{
            this.scrollHandler(this.items[position].elemInfo.offsetLeft, true);
        }, 1);
    }
    addItem(item) {
        let index = this.items.push(item) - 1;
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
        if (next >= this.items.length) {
            next = 0;
        } else if(next < 0) {
            next = this.items.length - 1;
        }
        this.slide = next;
        this.moveToSlide(this.slide);
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
        this.controller = SliderController.factory;
    }
}
export class SliderContent {

    /*@ngInject*/
    constructor(easingAnimator) {
        this.easingAnimator = easingAnimator
        this.easingAnimator.callBack = this.animate.bind(this);
        this.require = '^sliderMain';
        this.restrict = 'A';
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
                this.easingAnimator.easeProp({
                    left: this.element.scrollLeft
                }, {
                    left: val
                })
            }
        });
        element.on('scroll', ()=>{
            sliderMain.scrollPosition = this.element.scrollLeft;
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
            elemInfo: this.getElemInfo(index)
        });
        window.addEventListener('resize', ()=>{
            handler(this.getElemInfo(index));
        });
    }
}
export class UniSliderItem extends SliderItem {
    getElemInfo(index) {
        if (document.body.offsetWidth < 800) {
            return super.getElemInfo(index);
        }
        let element = this.elems[index];
        return {
            offsetLeft: !index? 0:
                element.offsetLeft - this.elems[0].offsetLeft,
            center: !index? element.offsetLeft + element.offsetWidth/2 :
                this.elems[index-1].offsetLeft + this.elems[index-1].offsetWidth/2
                 + element.offsetWidth,
            offsetWidth: element.offsetWidth,
            setActive: (delta)=>{
                element.style.opacity = Math.max(0, 1.2-Math.abs(delta/element.offsetWidth));
                if (Math.abs(element.style.opacity - 1) > 0.3) {
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
