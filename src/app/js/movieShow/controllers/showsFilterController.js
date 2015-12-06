export class ShowsFilterController {

    /*@ngInject*/
    constructor($window) {
        this.$window = $window;
        this.select = {};
    }
    search() {
        console.log(this.select);
        window.location.href = `${CONFIG.urls.showFiltes}?${jQuery.param(this.select)}`;
    }
}
