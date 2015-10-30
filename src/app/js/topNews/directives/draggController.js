export class DraggController {
    constructor(){
        this.restrict = 'A';
        this.require = '^?sliderMain';
    }
    link(scope, element, attrs, sliderMain) {
        var delta_info = 0,
            start_info = 0,
            summ = 0;
        element
            .on('touchstart', (e) => {
                let touch = e.changedTouches[0];
                delta_info = touch.screenX;
                start_info = delta_info;
                summ = 0;
            })
            .on('touchmove', (e) => {
                let touch = e.changedTouches[0];
                if (delta_info != touch.screenX) {
                    summ += delta_info - touch.screenX;
                    delta_info = touch.screenX;
                };
            })
            .on('touchend', (e) => {
                if (Math.abs(summ) > 100 && sliderMain) {
                    if (summ > 0) {
                        sliderMain.next(1);
                    }
                    else {
                        sliderMain.next(-1);
                    }
                    summ = 0;
                }
                let touch = e.changedTouches[0];
                delta_info = touch.screenX;
                summ = 0;
            });
    }
}
