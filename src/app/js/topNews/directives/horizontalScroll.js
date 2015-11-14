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
            clearTimeout(timeout);
            timeout = setTimeout(function(){
                if (count > 1) {
                element.scrollLeft = element.scrollLeft - delta_sum/count;
                delta_sum = 0;
                count = 0;
                }
            }, 1);

        })    
    }
}
