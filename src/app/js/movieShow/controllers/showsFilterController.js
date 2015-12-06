export class ShowsFilterController {

    /*@ngInject*/
    constructor($window) {
        this.$window = $window;
        this.select = {};
    }
    search() {
        window.location.href = `${window.location.href.split('?')[0]}?${jQuery.param(this.select)}`;
    }
}
