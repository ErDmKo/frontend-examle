class SliderController {
    constructor() {
        this.items = [];
        this.slide = 0;
    }
    moveToSlide(position){
        this.scrollHandler(this.items[position].elem.offsetLeft);
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
    addController(delta) {
        let handler = (e) => {
            let next = this.slide + delta;
            if (next >= this.items.length) {
                next = 0;
            } else if(next < 0) {
                next = this.items.length - 1;
            }
            this.slide = next;
            this.moveToSlide(this.slide);
        }
        return handler;
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
    constructor() {
        this.require = '^sliderMain';
        this.restrict = 'A';
    }
    link(scope, element, attrs, sliderMain) {
        sliderMain.addContent((val)=>{
            element[0].scrollLeft = val
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
