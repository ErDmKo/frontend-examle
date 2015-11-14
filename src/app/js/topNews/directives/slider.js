class SliderController {
    constructor() {
        this.items = [];
        this.slide = 0;
        this._scrollPosition = 0;
        this.setSlide = ()=>{};
    }
    set scrollPosition(val){
        this.slide = this.items.reduce((outIndex, item, index)=>{
            let center = val + item.elem.offsetWidth/2;
            if(item.elem.offsetLeft < center) {
                outIndex = index;
            }
            return outIndex;
        }, 0);
        this._scrollPosition = val;
        this.setSlide(this.slide);
    }
    moveToSlide(position){
        this.scrollHandler(this.items[position].elem.offsetLeft, true);
    }
    addItem(item) {
        this.items.push(item)
        return () => {
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

    constructor($window) {
        this.require = '^sliderMain';
        this.restrict = 'A';
        this.$window = angular.element($window);
    }
    link(scope, element, attrs, sliderMain) {
        let handler = sliderMain.addItem({
            elem: element[0]
        });
        element.on('resize', () => {
            handler.bind(sliderMain)
        });
        window.addEventListener('resize', handler.bind(sliderMain));
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
