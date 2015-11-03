export class MestoClickFade {
    static get TIMEOUT() {
        return 200;
    }
    static get FADE_CLASS() {
        return 'fade';
    }
    link(scope, element, attrs) {
        setTimeout(()=>{
            element
                .removeClass(MestoClickFade.FADE_CLASS)
        }, MestoClickFade.TIMEOUT);
        element
            .addClass(MestoClickFade.FADE_CLASS)
            .find('a.fadeAnimator__ancor')
            .on('click', function(e){
                e.preventDefault()
                let href = this.getAttribute('href')
                element.addClass(MestoClickFade.FADE_CLASS)
                setTimeout(()=>{
                    window.location.href = href;
                }, 200);
            });
    }
}
