export class FeedbackResource {
    /*@ngInject*/
    constructor($resource) {
        return $resource(CONFIG.urls.feedbackForm);
    }
}
