import { SliderMain, SliderContent, SliderControll, SliderItem } from './topNews/directives/slider';
import { register } from './utils/register';
var app = angular.module('mesto', []);

register('mesto')
    .directive('sliderMain', SliderMain)
    .directive('sliderControll', SliderControll)
    .directive('sliderContent', SliderContent)
    .directive('sliderItem', SliderItem)

angular
    .element(document)
    .ready(angular.bootstrap.bind(angular, document, ['mesto']));
