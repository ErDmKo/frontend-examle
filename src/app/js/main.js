import { SliderMain, SliderContent, SliderControll, SliderItem } from './topNews/directives/slider';
import { DraggController } from './topNews/directives/draggController';
import { register } from './utils/register';
import { 
    MestoFeedbackItem,
    MestoFeedbackToggle,
    MestoFeedbackClose,
    MestoFeedbackContnier
} from './feedBack/directives/feedBack';
import { MestoClickFade } from './clickFade/directives/clickFade';
import { PopUpService } from './feedBack/services/popUpService';
import { FeedbackResource } from './feedBack/services/feedbackResource';
import { FeedbackFormController } from './feedBack/controllers/FormController';
var app = angular.module('mesto', ['ngResource']);

register('mesto')
    .directive('sliderMain', SliderMain)
    .directive('sliderControll', SliderControll)
    .directive('sliderContent', SliderContent)
    .directive('sliderItem', SliderItem)
    .directive('draggController', DraggController)

    .directive('mestoFeedbackItem', MestoFeedbackItem)
    .directive('mestoFeedbackToggle', MestoFeedbackToggle)
    .directive('mestoFeedbackClose', MestoFeedbackClose)
    .directive('mestoFeedbackContanier', MestoFeedbackContnier)
    .service('popUpSerivice', PopUpService)

    .service('feedbackResource', FeedbackResource)
    .controller('feedbackFormController', FeedbackFormController)

    .directive('mestoClickFade', MestoClickFade)

app.config(($resourceProvider, $httpProvider)=> {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
angular
    .element(document)
    .ready(angular.bootstrap.bind(angular, document, ['mesto']));
