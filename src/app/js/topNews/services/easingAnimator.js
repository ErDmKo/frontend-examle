export class EasingAnimator {

    constructor(opt){
        var opt = {};
        this.easingInterval = opt.easingInterval;
        this.duration = opt.duration || 500;
        this.step = opt.step || 50;
        this.easingFn = (t, b, c, d) =>{
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        };
        this.easingFn = opt.easingFn || this.easingFn;
        this.callBack = opt.callBack || ()=>{};
    }
    makeFromCallback (callBack) {
        console.log(callBack)
        return new EasingAnimator({
            callBack: callBack
        });
    }
    easeProp (obj, propDict) {
        propDict = propDict || {};
        var self = this,
            t = 0,
            out_vals = JSON.parse(JSON.stringify(obj));
        clearInterval(this.easingInterval);
        return new Promise((resolve, reject) => {
            self.easingInterval = setInterval(()=>{
                t+= this.step;
                if (t >= this.duration) {
                    clearInterval(this.easingInterval);
                    this.callBack(propDict);
                    resolve();
                    return;
                }
                var percent = this.easingFn(t, 0, 1, this.duration);
                Object.keys(propDict).forEach((key, i) => {
                    let old_val = obj[key];
                    out_vals[key] = old_val - percent*(old_val - propDict[key]);
                });
                this.callBack(out_vals);
            }, this.step);
        })
    }
};
