'use strict';

export class ShowMovieController {

    /*@ngInject*/
    constructor($scope, $timeout, $q){
        this.$q = $q;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.video = {};
        $scope.$on('youtube.player.playing', ($event, player) => {
            let videoObj = this.getVideoObj(player);
            this.$timeout(()=>{
              videoObj.active = true;
            })
        });
        $scope.$on('youtube.player.ended', ($event, player) => {
            let videoObj = this.getVideoObj(player);
            videoObj.active = false;
        });

    }
    addVideo(code, last){
        this.video[code] = {
            active: false,
            load: false
        }
        if (last == 'True') {
            Object.keys(this.video).reduce((p, key)=>{
                return p.then(()=>{
                    return this.$timeout(()=>{
                        console.log(key);
                        this.video[key].load = true;
                    }, 1000);
                })
            }, this.$timeout(()=>{
                this.video[code].load = true;
            }, 3000));
        }
    }
    getVideoObj(player){
        let videoId = player.getVideoData().video_id;
        if (!this.video[videoId]) {
            this.video[videoId] = {
                active: false,
                load: false
            }
        }
        return this.video[videoId];
    }
}
