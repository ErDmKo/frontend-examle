export class MestoFeedbackToggle {
    /*@ngInject*/
    constructor(popUpSerivice) {
        this.restrict = 'A';
        this.popUpSerivice = popUpSerivice;
    }
    link(scope, element, attrs) {
        let handler = this.popUpSerivice
            .addToggler(attrs.mestoFeedbackToggle);
        element.on('click', handler.bind(this.popUpSerivice));
    }
}
export class MestoFeedbackContnier {
    static get TOGGLE_CLASS() {
        return 'fixedPopUp'; 
    }

    /*@ngInject*/
    constructor(popUpSerivice) {
        this.restrict = 'A';
        this.popUpSerivice = popUpSerivice;
    }
    link(scope, element, attrs) {
        let handler = (name) => {
            element.toggleClass(MestoFeedbackContnier.TOGGLE_CLASS);
        }
        this.popUpSerivice
            .addContanier(attrs.mestoFeedbackContanier, handler);
    }
}
export class MestoFeedbackClose {
    /*@ngInject*/
    constructor(popUpSerivice) {
        this.restrict = 'A';
        this.popUpSerivice = popUpSerivice;
    }
    link(scope, element, attrs) {
        let handler = this.popUpSerivice.close(attrs.mestoFeedbackClose);
        element.on('click', handler.bind(this.popUpSerivice));
    }
}
export class MestoFeedbackItem {
    static get TOGGLE_CLASS() {
        return 'active';
    }

    /*@ngInject*/
    constructor(popUpSerivice) {
        this.restrict = 'A';
        this.popUpSerivice = popUpSerivice;
    }
    toggle(element) {
        element.toggleClass(MestoFeedbackItem.TOGGLE_CLASS);
    }
    link(scope, element, attrs) {
        this.element = element;
        this.popUpSerivice
            .addItem(attrs.mestoFeedbackItem, this.toggle.bind(this, element));
    }
}
