export class HorizontalScroll {
    constructor(){
        this.restrict = 'A'
    }
    link($scope, element, attrs) {
        var timeout,
            element = element[0],
            delta_sum = 0,
            count = 0;
        Hamster(element).wheel((e, delta, deltaX, deltaY)=>{
            if (deltaX && !deltaY) {
                clearTimeout(timeout);
                delta_sum = 0;
                count = 0;
                return;
            }
            e.preventDefault();
            delta_sum += deltaY*12 || 0;
            count += 1;
            console.log([delta, deltaX, deltaY]);
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                if (/Macintosh/.test(navigator.userAgent)) {
                    element.scrollLeft = element.scrollLeft - delta_sum;
                } else {
                    element.scrollLeft = element.scrollLeft - delta_sum*20;
                }
                delta_sum = 0;
                count = 0;
            }, 1);

        })    
    }
}
