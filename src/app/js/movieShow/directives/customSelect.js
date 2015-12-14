class MestoCustomSelectController {

    constructor(){
        var setPlaceholder = (text)=>{};

        this.models = {};
        this.setPlaceholder = (fu)=>{
            setPlaceholder = fu;
        }

        this.selectOption = (text)=>{
            setPlaceholder(text);
        }
    };

    addModel(modelCall) {
    	modelCall((result)=>{
    		this.models[result.value] = result;
    	});
    }
    selectModel(modelValue) {
        this.selectOption(this.models[modelValue].name)
    }
    setToggleOpen (fu){
        this.toggleOpen = fu;
    }
    toggleOpen(){};

    static factory(...args) {
        MestoCustomSelectController.instance = new MestoCustomSelectController(...args);
        return MestoCustomSelectController.instance;
    }
}
export class MestoCustomSelect {

    /*@ngInject*/
	constructor($timeout, $document){
        this.$timeout = $timeout;
		this.restrict = 'A';
        this.controller = MestoCustomSelectController.factory;
        this.$document = $document;
    }
    
    link ($scope, element, attrs, controller){
        let modelValue = $scope.$eval(attrs.mestoCustomSelect);
        if (modelValue) {
            this.$timeout(() => {
                controller.selectModel(modelValue);
            }, 200);
        }
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
    /*@ngInject*/
	constructor($timeout) {
		this.$timeout = $timeout;
		this.restrict = 'A';
		this.require = '^mestoCustomSelect';
    }
    link($scope, element, attrs, customSelectController){
        customSelectController.addModel((callBack)=> {
        	this.$timeout(()=>{
				callBack({
					name: element.find('label').text(),
					value: element.find('input').val()
				})
        	});
        });
        element.on('click', function(){
            customSelectController.selectOption(element.text())
        })
    }
}
