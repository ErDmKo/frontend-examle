export class ShowsFilterController {

    /*@ngInject*/
    constructor($scope, $window) {
        this.$window = $window;
        this.pathArray = window.location.href.split('?')
        this.select = this.pathArray.length > 1? this.pathArray[1]
            .split('&')
            .reduce((dict, val)=>{
                let [key, value] = val.split('=');
                if (value) {
                    dict[key] = value;
                }
                return dict;
            }, {}) : {};
    }
    change() {
        this.search()
    }
    search() {
        window.location.href = `${this.pathArray[0]}?${jQuery.param(this.select)}`;
    }
}
