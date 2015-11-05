class LogoController {
    constructor() {
        this.items = {};
        this.imgUrls = {};
    }
    addImage(name, url) {
        this.imgUrls[name] = url;
    }
    addItem(name, info) {
        this.items[name] = info;
    }
    addBackground(show, hide){
        this.background = {
            show: show,
            hide: hide
        }
    }
    unhover() {
        Object.keys(this.items).forEach((key)=>{
            this.items[key].disabled();
        });
        this.background.hide();
    }
    hover(name) {
        this.background.show(this.imgUrls[name]);
        this.items[name].active();
    }
    call(name) {
        this.items[name].click();
    }
    static factory(...args) {
        LogoController.instance = new LogoController(...args);
        return LogoController.instance;
    }
}
export class SVGLogoContanier {
    constructor(){
        this.controller = LogoController.factory;
        this.restrict = 'A';
    }
}
export class SVGLogoBackground {
    static get ACTIVE_CLASS(){
        return 'active';
    } 
    constructor() {
        this.require = '^mestoSvgLogo';
        this.restrict = 'A';
    }
    link(scope, element, attrs, controller) {
        controller.addBackground((url)=>{
            element.addClass(SVGLogoBackground.ACTIVE_CLASS);
            element.css('background-image', url ? `url(${url})` : 'none');
        }, ()=>{
            element.removeClass(SVGLogoBackground.ACTIVE_CLASS);
        });
    }
}
export class SVGLogoHover {
    constructor(){
        this.require = '^mestoSvgLogo';
        this.restrict = 'A';
    }
    link(scope, element, attrs, controller) {
        element.on('mouseenter', ()=>{
            controller.hover(attrs.mestoLogoHover);
        });
        element.on('mouseleave', ()=>{
            controller.unhover(attrs.mestoLogoHover);
        });
        element.on('click', ()=>{
            controller.call(attrs.mestoLogoHover);
        });
    }
}
export class SVGLogoItem {
    constructor(){
        this.require = '^mestoSvgLogo';
        this.restrict = 'A';
    }
    link(scope, element, attrs, controller) {
        controller.addItem(attrs.mestoSvgItem, {
            click: ()=>{
                window.location.href = attrs.href;
            },
            active: ()=>{
                element.addClass(SVGLogoBackground.ACTIVE_CLASS);
            },
            disabled: ()=>{
                element.removeClass(SVGLogoBackground.ACTIVE_CLASS);
            }
        });
        if (!attrs.imgUrl) return;

        let img = new Image();
        img.addEventListener('load', ()=>{
            controller.addImage(attrs.mestoSvgItem, attrs.imgUrl);
        });
        img.src = attrs.imgUrl;
        if(img.complete) {
            controller.addImage(attrs.mestoSvgItem, attrs.imgUrl);
        }
    }
}
