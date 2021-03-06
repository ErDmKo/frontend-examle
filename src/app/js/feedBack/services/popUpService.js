class PopUp {
    constructor(itemHandler, name){
        this.name = name;
        this.itemHandler = itemHandler;
    }
    toggleItem() {
        if (PopUp.contanierHandler[this.name]) {
            PopUp.contanierHandler[this.name]();
        }
        this.itemHandler();
    }
}
PopUp.contanierHandler = {};

export class PopUpService {
    constructor() {
        this.popUps = {};
    }
    addItem(itemName, handler) {
        this.popUps[itemName] = new PopUp(handler, itemName);
    }
    close(itemName) {
        if (!itemName) {
            Object.keys(this.popUps).forEach((key)=>{
                this.popUps[key].toggleItem();
            })
            return;
        }
        return (e) => {
            let popUp = this.popUps[itemName]
            if (popUp) {
                e.preventDefault();
                popUp.toggleItem()
            } 
        }
    }
    addContanier(popUpName, hander, index) {
        PopUp.contanierHandler[popUpName] = hander;
    }
    addToggler(popUpName) {
        return (e) => {
            e.preventDefault();
            ([this.popUps[popUpName]] || [])
                .forEach((popUp)=>{
                    popUp.toggleItem();
                })
        }
    }
}
