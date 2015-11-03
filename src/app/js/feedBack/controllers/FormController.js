export class FeedbackFormController { 
    /*@ngInject*/
    constructor($scope, feedbackResource) {
        this.feedbackResource = feedbackResource;
        this.formData = {};
        this.errors = '';
        this.success = false;
    }
    submit(form){
        if (form.$invalid) {
            form.$setDirty();
        } else {
            let feedback = new this.feedbackResource(this.formData);
            feedback.$save()
                .then(() =>{
                    this.success = true;
                })
                .catch((response) => {
                    this.error = response;
                })
        }
    }
}
