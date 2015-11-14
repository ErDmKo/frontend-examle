import { register } from './utils/register';

import { 
    SliderMain,
    SliderContent,
    SliderControll,
    SliderCounter,
    SliderItem
} from './topNews/directives/slider';
import { EasingAnimator } from './topNews/services/easingAnimator';
import { DraggController } from './topNews/directives/draggController';
import { HorizontalScroll } from './topNews/directives/horizontalScroll';

import { MestoClickFade } from './clickFade/directives/clickFade';

import { PopUpService } from './feedBack/services/popUpService';
import { FeedbackResource } from './feedBack/services/feedbackResource';
import { FeedbackFormController } from './feedBack/controllers/FormController';
import { 
    MestoFeedbackItem,
    MestoFeedbackToggle,
    MestoFeedbackClose,
    MestoFeedbackContnier
} from './feedBack/directives/feedBack';

import { 
    SVGLogoHover,
    SVGLogoItem,
    SVGLogoContanier,
    SVGLogoBackground
} from './mainPage/directives/logoDirectives';

var app = angular.module('mesto', ['ngResource']);

register('mesto')
    .directive('sliderMain', SliderMain)
    .directive('sliderControll', SliderControll)
    .directive('sliderContent', SliderContent)
    .directive('sliderItem', SliderItem)
    .directive('sliderCounter', SliderCounter)
    .directive('draggController', DraggController)
    .directive('horizontalScroll', HorizontalScroll)
    .factory('easingAnimator', EasingAnimator)

    .directive('mestoFeedbackItem', MestoFeedbackItem)
    .directive('mestoFeedbackToggle', MestoFeedbackToggle)
    .directive('mestoFeedbackClose', MestoFeedbackClose)
    .directive('mestoFeedbackContanier', MestoFeedbackContnier)
    .service('popUpSerivice', PopUpService)

    .service('feedbackResource', FeedbackResource)
    .controller('feedbackFormController', FeedbackFormController)

    .directive('mestoClickFade', MestoClickFade)

    .directive('mestoLogoHover', SVGLogoHover)
    .directive('mestoSvgItem', SVGLogoItem)
    .directive('mestoSvgLogo', SVGLogoContanier)
    .directive('mestoSvgBackground', SVGLogoBackground)

app.config(($resourceProvider, $httpProvider)=> {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $resourceProvider.defaults.stripTrailingSlashes = false;
})
angular
    .element(document)
    .ready(angular.bootstrap.bind(angular, document, ['mesto']));
