export class FeedbackFormController { 
    /*@ngInject*/
    constructor($scope, feedbackResource, popUpSerivice) {
        this.feedbackResource = feedbackResource;
        this.popUpSerivice = popUpSerivice;
        this.formData = {};
        this.errors = '';
    }
    submit(form){
        if (form.$invalid) {
            form.$setDirty();
        } else {
            let feedback = new this.feedbackResource(this.formData);
            feedback.$save()
                .then(() =>{
                    this.popUpSerivice.close();
                })
                .catch((response) => {
                    this.error = response;
                })
        }
    }
}
