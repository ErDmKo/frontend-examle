'use strict';

export class ShowDetail {

    /*@ngInject*/
    constructor($scope, $window) {
        this.$window = $window;
        this.pathArray = window.location.href.split('?')
        if (this.pathArray.length > 1){
            this.pathArray = this.pathArray[1].split("#")[0]
                .split('&')
                .reduce((dict, val)=>{
                    let [key, value] = val.split('=');
                    if (value) {
                        dict[key] = decodeURIComponent(value);
                    }
                    return dict;
                }, {});
            $scope.selectDate = this.pathArray.date;
        }
    }
}
