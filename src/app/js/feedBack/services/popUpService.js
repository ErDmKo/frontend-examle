class PopUp {
    constructor(itemHandler){
        this.itemHandler = itemHandler;
    }
    toggleItem() {
        if (PopUp.contanierHandler) {
            PopUp.contanierHandler();
        }
        this.itemHandler();
    }
}
export class PopUpService {
    constructor() {
        this.popUps = {};
    }
    addItem(itemName, handler) {
        this.popUps[itemName] = new PopUp(handler);
    }
    close(itemName) {
        return (e) => {
            let popUp = this.popUps[itemName]
            if (popUp) {
                e.preventDefault();
                popUp.toggleItem()
            } 
        }
    }
    addContanier(popUpName, hander) {
        PopUp.contanierHandler = hander;
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
