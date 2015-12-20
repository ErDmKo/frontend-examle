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
            if (attrs.horizontalScroll > 0 && attrs.horizontalScroll < window.innerWidth) {
                return;
            }
            e.preventDefault();
            delta_sum += deltaY*8 || 0;
            count += 1;
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                if (/Macintosh/.test(navigator.userAgent)) {
                    element.scrollLeft = element.scrollLeft - delta_sum;
                } else {
                    element.scrollLeft = element.scrollLeft - delta_sum*15;
                }
                delta_sum = 0;
                count = 0;
            }, 1);

        })    
    }
}
