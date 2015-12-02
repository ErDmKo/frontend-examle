'use strict';

export class ShowMovieController {
    /*@ngInject*/
    constructor($scope, $timeout){
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
            videoObj.active = true;
        });
    }
    getVideoObj(player){
        let videoId = player.getVideoData().video_id;
        if (!this.video[videoId]) {
            this.video[videoId] = {}
        }
        return this.video[videoId];
    }
}
