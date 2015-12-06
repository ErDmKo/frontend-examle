class MestoCustomSelectController {
    constructor(){
        var setPlaceholder = (text)=>{};

        this.toggleOpen =  ()=>{};
        this.setPlaceholder = (fu)=>{
            setPlaceholder = fu;
        }
        this.setToggleOpen = (fu)=>{
            this.toggleOpen = fu;
        }
        
        this.selectOption = (text)=>{
            setPlaceholder(text);
        }
    }
    static factory(...args) {
        MestoCustomSelectController.instance = new MestoCustomSelectController(...args);
        return MestoCustomSelectController.instance;
    }
}
export class MestoCustomSelect {

    /*@ngInject*/
	constructor($document){
		this.restrict = 'A';
        this.controller = MestoCustomSelectController.factory;
        this.$document = $document;
    }
    
    link ($scope, element, attrs, controller){
        let clickHandler = (e) => {
            let target = angular.element(e.target);
            if (!(target.is(element) || target.closest(element).length)) {
                element.removeClass('open');
            }
        };
        controller.setToggleOpen(()=>{
            element.toggleClass('open');
            if(element.hasClass('open')) {
                angular.element(this.$document).on('click', clickHandler);
            } else {
                angular.element(this.$document).off('click', clickHandler);
            }
        })
    }
}
export class MestoCustomSelectPlaceholder {
	constructor(){
		this.restrict = 'A';
		this.require = '^mestoCustomSelect';
    }
    link ($scope, element, attrs, customSelectController) {
        element.on('click', function(){
            customSelectController.toggleOpen();
        });
        customSelectController.setPlaceholder((text) => {
            element.text(text);
            element.parent().removeClass('open');
        });
    }
}
export class MestoCustomSelectItem {
	constructor() {
		this.restrict = 'A';
		this.require = '^mestoCustomSelect';
    }
    link($scope, element, attrs, customSelectController){
        element.on('click', function(){
            customSelectController.selectOption(element.text())
        })
    }
}
