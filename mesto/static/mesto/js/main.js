(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MestoClickFade = (function () {
    function MestoClickFade() {
        _classCallCheck(this, MestoClickFade);
    }

    _createClass(MestoClickFade, [{
        key: 'link',
        value: function link(scope, element, attrs) {
            setTimeout(function () {
                element.removeClass(MestoClickFade.FADE_CLASS);
            }, MestoClickFade.TIMEOUT);
            element.addClass(MestoClickFade.FADE_CLASS).find('a.fadeAnimator__ancor').on('click', function (e) {
                e.preventDefault();
                var href = this.getAttribute('href');
                element.addClass(MestoClickFade.FADE_CLASS);
                setTimeout(function () {
                    window.location.href = href;
                }, 200);
            });
        }
    }], [{
        key: 'TIMEOUT',
        get: function get() {
            return 200;
        }
    }, {
        key: 'FADE_CLASS',
        get: function get() {
            return 'fade';
        }
    }]);

    return MestoClickFade;
})();

exports.MestoClickFade = MestoClickFade;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FeedbackFormController = (function () {
    /*@ngInject*/

    function FeedbackFormController($scope, feedbackResource) {
        _classCallCheck(this, FeedbackFormController);

        this.feedbackResource = feedbackResource;
        this.formData = {};
        this.errors = '';
        this.success = false;
    }
    FeedbackFormController.$inject = ["$scope", "feedbackResource"];

    _createClass(FeedbackFormController, [{
        key: 'submit',
        value: function submit(form) {
            var _this = this;

            if (form.$invalid) {
                form.$setDirty();
            } else {
                var feedback = new this.feedbackResource(this.formData);
                feedback.$save().then(function () {
                    _this.success = true;
                })['catch'](function (response) {
                    _this.error = response;
                });
            }
        }
    }]);

    return FeedbackFormController;
})();

exports.FeedbackFormController = FeedbackFormController;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MestoFeedbackToggle = (function () {
    /*@ngInject*/

    function MestoFeedbackToggle(popUpSerivice) {
        _classCallCheck(this, MestoFeedbackToggle);

        this.restrict = 'A';
        this.popUpSerivice = popUpSerivice;
    }
    MestoFeedbackToggle.$inject = ["popUpSerivice"];

    _createClass(MestoFeedbackToggle, [{
        key: 'link',
        value: function link(scope, element, attrs) {
            var handler = this.popUpSerivice.addToggler(attrs.mestoFeedbackToggle);
            element.on('click', handler.bind(this.popUpSerivice));
        }
    }]);

    return MestoFeedbackToggle;
})();

exports.MestoFeedbackToggle = MestoFeedbackToggle;

var MestoFeedbackContnier = (function () {
    _createClass(MestoFeedbackContnier, null, [{
        key: 'TOGGLE_CLASS',
        get: function get() {
            return 'fixedPopUp';
        }

        /*@ngInject*/
    }]);

    function MestoFeedbackContnier(popUpSerivice) {
        _classCallCheck(this, MestoFeedbackContnier);

        this.restrict = 'A';
        this.popUpSerivice = popUpSerivice;
    }
    MestoFeedbackContnier.$inject = ["popUpSerivice"];

    _createClass(MestoFeedbackContnier, [{
        key: 'link',
        value: function link(scope, element, attrs) {
            var handler = function handler() {
                element.toggleClass(MestoFeedbackContnier.TOGGLE_CLASS);
            };
            this.popUpSerivice.addContanier(attrs.mestoFeedbackContanier, handler);
        }
    }]);

    return MestoFeedbackContnier;
})();

exports.MestoFeedbackContnier = MestoFeedbackContnier;

var MestoFeedbackClose = (function () {
    /*@ngInject*/

    function MestoFeedbackClose(popUpSerivice) {
        _classCallCheck(this, MestoFeedbackClose);

        this.restrict = 'A';
        this.popUpSerivice = popUpSerivice;
    }
    MestoFeedbackClose.$inject = ["popUpSerivice"];

    _createClass(MestoFeedbackClose, [{
        key: 'link',
        value: function link(scope, element, attrs) {
            var handler = this.popUpSerivice.close(attrs.mestoFeedbackClose);
            element.on('click', handler.bind(this.popUpSerivice));
        }
    }]);

    return MestoFeedbackClose;
})();

exports.MestoFeedbackClose = MestoFeedbackClose;

var MestoFeedbackItem = (function () {
    _createClass(MestoFeedbackItem, null, [{
        key: 'TOGGLE_CLASS',
        get: function get() {
            return 'active';
        }

        /*@ngInject*/
    }]);

    function MestoFeedbackItem(popUpSerivice) {
        _classCallCheck(this, MestoFeedbackItem);

        this.restrict = 'A';
        this.popUpSerivice = popUpSerivice;
    }
    MestoFeedbackItem.$inject = ["popUpSerivice"];

    _createClass(MestoFeedbackItem, [{
        key: 'toggle',
        value: function toggle() {
            this.element.toggleClass(MestoFeedbackItem.TOGGLE_CLASS);
        }
    }, {
        key: 'link',
        value: function link(scope, element, attrs) {
            this.element = element;
            this.popUpSerivice.addItem(attrs.mestoFeedbackItem, this.toggle.bind(this));
        }
    }]);

    return MestoFeedbackItem;
})();

exports.MestoFeedbackItem = MestoFeedbackItem;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FeedbackResource =
/*@ngInject*/
["$resource", function FeedbackResource($resource) {
    _classCallCheck(this, FeedbackResource);

    return $resource(CONFIG.urls.feedbackForm);
}];

exports.FeedbackResource = FeedbackResource;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopUp = (function () {
    function PopUp(itemHandler) {
        _classCallCheck(this, PopUp);

        this.itemHandler = itemHandler;
    }

    _createClass(PopUp, [{
        key: "toggleItem",
        value: function toggleItem() {
            if (PopUp.contanierHandler) {
                PopUp.contanierHandler();
            }
            this.itemHandler();
        }
    }]);

    return PopUp;
})();

var PopUpService = (function () {
    function PopUpService() {
        _classCallCheck(this, PopUpService);

        this.popUps = {};
    }

    _createClass(PopUpService, [{
        key: "addItem",
        value: function addItem(itemName, handler) {
            this.popUps[itemName] = new PopUp(handler);
        }
    }, {
        key: "close",
        value: function close(itemName) {
            var _this = this;

            if (!itemName) {
                Object.keys(this.popUps).forEach(function (key) {
                    _this.popUps[key].toggleItem();
                });
                return;
            }
            return function (e) {
                var popUp = _this.popUps[itemName];
                if (popUp) {
                    e.preventDefault();
                    popUp.toggleItem();
                }
            };
        }
    }, {
        key: "addContanier",
        value: function addContanier(popUpName, hander) {
            PopUp.contanierHandler = hander;
        }
    }, {
        key: "addToggler",
        value: function addToggler(popUpName) {
            var _this2 = this;

            return function (e) {
                e.preventDefault();
                ([_this2.popUps[popUpName]] || []).forEach(function (popUp) {
                    popUp.toggleItem();
                });
            };
        }
    }]);

    return PopUpService;
})();

exports.PopUpService = PopUpService;

},{}],6:[function(require,module,exports){
'use strict';

var _utilsRegister = require('./utils/register');

var _topNewsDirectivesSlider = require('./topNews/directives/slider');

var _topNewsServicesEasingAnimator = require('./topNews/services/easingAnimator');

var _topNewsDirectivesDraggController = require('./topNews/directives/draggController');

var _topNewsDirectivesHorizontalScroll = require('./topNews/directives/horizontalScroll');

var _clickFadeDirectivesClickFade = require('./clickFade/directives/clickFade');

var _feedBackServicesPopUpService = require('./feedBack/services/popUpService');

var _feedBackServicesFeedbackResource = require('./feedBack/services/feedbackResource');

var _feedBackControllersFormController = require('./feedBack/controllers/FormController');

var _feedBackDirectivesFeedBack = require('./feedBack/directives/feedBack');

var _mainPageDirectivesLogoDirectives = require('./mainPage/directives/logoDirectives');

var app = angular.module('mesto', ['ngResource']);

(0, _utilsRegister.register)('mesto').directive('sliderMain', _topNewsDirectivesSlider.SliderMain).directive('sliderControll', _topNewsDirectivesSlider.SliderControll).directive('sliderContent', _topNewsDirectivesSlider.SliderContent).directive('sliderItem', _topNewsDirectivesSlider.SliderItem).directive('smallSliderItem', _topNewsDirectivesSlider.SmallSliderItem).directive('sliderCounter', _topNewsDirectivesSlider.SliderCounter).directive('draggController', _topNewsDirectivesDraggController.DraggController).directive('horizontalScroll', _topNewsDirectivesHorizontalScroll.HorizontalScroll).factory('easingAnimator', _topNewsServicesEasingAnimator.EasingAnimator).directive('mestoFeedbackItem', _feedBackDirectivesFeedBack.MestoFeedbackItem).directive('mestoFeedbackToggle', _feedBackDirectivesFeedBack.MestoFeedbackToggle).directive('mestoFeedbackClose', _feedBackDirectivesFeedBack.MestoFeedbackClose).directive('mestoFeedbackContanier', _feedBackDirectivesFeedBack.MestoFeedbackContnier).service('popUpSerivice', _feedBackServicesPopUpService.PopUpService).service('feedbackResource', _feedBackServicesFeedbackResource.FeedbackResource).controller('feedbackFormController', _feedBackControllersFormController.FeedbackFormController).directive('mestoClickFade', _clickFadeDirectivesClickFade.MestoClickFade).directive('mestoLogoHover', _mainPageDirectivesLogoDirectives.SVGLogoHover).directive('mestoSvgItem', _mainPageDirectivesLogoDirectives.SVGLogoItem).directive('mestoSvgLogo', _mainPageDirectivesLogoDirectives.SVGLogoContanier).directive('mestoSvgBackground', _mainPageDirectivesLogoDirectives.SVGLogoBackground);

app.config(["$resourceProvider", "$httpProvider", function ($resourceProvider, $httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
angular.element(document).ready(angular.bootstrap.bind(angular, document, ['mesto']));

},{"./clickFade/directives/clickFade":1,"./feedBack/controllers/FormController":2,"./feedBack/directives/feedBack":3,"./feedBack/services/feedbackResource":4,"./feedBack/services/popUpService":5,"./mainPage/directives/logoDirectives":7,"./topNews/directives/draggController":8,"./topNews/directives/horizontalScroll":9,"./topNews/directives/slider":10,"./topNews/services/easingAnimator":11,"./utils/register":12}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var _bind = Function.prototype.bind;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var LogoController = (function () {
    function LogoController() {
        _classCallCheck(this, LogoController);

        this.items = {};
        this.imgUrls = {};
    }

    _createClass(LogoController, [{
        key: 'addImage',
        value: function addImage(name, url) {
            this.imgUrls[name] = url;
        }
    }, {
        key: 'addItem',
        value: function addItem(name, info) {
            this.items[name] = info;
        }
    }, {
        key: 'addBackground',
        value: function addBackground(show, hide) {
            this.background = {
                show: show,
                hide: hide
            };
        }
    }, {
        key: 'unhover',
        value: function unhover() {
            var _this = this;

            Object.keys(this.items).forEach(function (key) {
                _this.items[key].disabled();
            });
            this.background.hide();
        }
    }, {
        key: 'hover',
        value: function hover(name) {
            this.background.show(this.imgUrls[name]);
            this.items[name].active();
        }
    }, {
        key: 'call',
        value: function call(name) {
            this.items[name].click();
        }
    }], [{
        key: 'factory',
        value: function factory() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            LogoController.instance = new (_bind.apply(LogoController, [null].concat(args)))();
            return LogoController.instance;
        }
    }]);

    return LogoController;
})();

var SVGLogoContanier = function SVGLogoContanier() {
    _classCallCheck(this, SVGLogoContanier);

    this.controller = LogoController.factory;
    this.restrict = 'A';
};

exports.SVGLogoContanier = SVGLogoContanier;

var SVGLogoBackground = (function () {
    _createClass(SVGLogoBackground, null, [{
        key: 'ACTIVE_CLASS',
        get: function get() {
            return 'active';
        }
    }]);

    function SVGLogoBackground() {
        _classCallCheck(this, SVGLogoBackground);

        this.require = '^mestoSvgLogo';
        this.restrict = 'A';
    }

    _createClass(SVGLogoBackground, [{
        key: 'link',
        value: function link(scope, element, attrs, controller) {
            controller.addBackground(function (url) {
                element.addClass(SVGLogoBackground.ACTIVE_CLASS);
                element.css('background-image', url ? 'url(' + url + ')' : 'none');
            }, function () {
                element.removeClass(SVGLogoBackground.ACTIVE_CLASS);
            });
        }
    }]);

    return SVGLogoBackground;
})();

exports.SVGLogoBackground = SVGLogoBackground;

var SVGLogoHover = (function () {
    function SVGLogoHover() {
        _classCallCheck(this, SVGLogoHover);

        this.require = '^mestoSvgLogo';
        this.restrict = 'A';
    }

    _createClass(SVGLogoHover, [{
        key: 'link',
        value: function link(scope, element, attrs, controller) {
            element.on('mouseenter', function () {
                controller.hover(attrs.mestoLogoHover);
            });
            element.on('mouseleave', function () {
                controller.unhover(attrs.mestoLogoHover);
            });
            element.on('click', function () {
                controller.call(attrs.mestoLogoHover);
            });
        }
    }]);

    return SVGLogoHover;
})();

exports.SVGLogoHover = SVGLogoHover;

var SVGLogoItem = (function () {
    function SVGLogoItem() {
        _classCallCheck(this, SVGLogoItem);

        this.require = '^mestoSvgLogo';
        this.restrict = 'A';
    }

    _createClass(SVGLogoItem, [{
        key: 'link',
        value: function link(scope, element, attrs, controller) {
            controller.addItem(attrs.mestoSvgItem, {
                click: function click() {
                    window.location.href = attrs.href;
                },
                active: function active() {
                    element.addClass(SVGLogoBackground.ACTIVE_CLASS);
                },
                disabled: function disabled() {
                    element.removeClass(SVGLogoBackground.ACTIVE_CLASS);
                }
            });
            if (!attrs.imgUrl) return;

            var img = new Image();
            img.addEventListener('load', function () {
                controller.addImage(attrs.mestoSvgItem, attrs.imgUrl);
            });
            img.src = attrs.imgUrl;
            if (img.complete) {
                controller.addImage(attrs.mestoSvgItem, attrs.imgUrl);
            }
        }
    }]);

    return SVGLogoItem;
})();

exports.SVGLogoItem = SVGLogoItem;

},{}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var DraggController = (function () {
    function DraggController() {
        _classCallCheck(this, DraggController);

        this.restrict = 'A';
        this.require = '^?sliderMain';
    }

    _createClass(DraggController, [{
        key: 'link',
        value: function link(scope, element, attrs, sliderMain) {
            var delta_info = 0,
                start_info = 0,
                summ = 0;
            element.on('touchstart', function (e) {
                var touch = e.changedTouches[0];
                delta_info = touch.screenX;
                start_info = delta_info;
                summ = 0;
            }).on('touchmove', function (e) {
                var touch = e.changedTouches[0];
                if (delta_info != touch.screenX) {
                    summ += delta_info - touch.screenX;
                    delta_info = touch.screenX;
                };
            }).on('touchend', function (e) {
                if (Math.abs(summ) > 100 && sliderMain) {
                    if (summ > 0) {
                        sliderMain.next(1);
                    } else {
                        sliderMain.next(-1);
                    }
                    summ = 0;
                }
                var touch = e.changedTouches[0];
                delta_info = touch.screenX;
                summ = 0;
            });
        }
    }]);

    return DraggController;
})();

exports.DraggController = DraggController;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var HorizontalScroll = (function () {
    function HorizontalScroll() {
        _classCallCheck(this, HorizontalScroll);

        this.restrict = 'A';
    }

    _createClass(HorizontalScroll, [{
        key: 'link',
        value: function link($scope, element, attrs) {
            var timeout,
                element = element[0],
                delta_sum = 0,
                count = 0;
            Hamster(element).wheel(function (e, delta, deltaX, deltaY) {
                if (deltaX && !deltaY) {
                    clearTimeout(timeout);
                    delta_sum = 0;
                    count = 0;
                    return;
                }
                e.preventDefault();
                delta_sum += deltaY * 12 || 0;
                count += 1;
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    if (/Macintosh/.test(navigator.userAgent)) {
                        element.scrollLeft = element.scrollLeft - delta_sum;
                    } else {
                        element.scrollLeft = element.scrollLeft - delta_sum * 20;
                    }
                    delta_sum = 0;
                    count = 0;
                }, 1);
            });
        }
    }]);

    return HorizontalScroll;
})();

exports.HorizontalScroll = HorizontalScroll;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var _bind = Function.prototype.bind;

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SliderController = (function () {
    function SliderController() {
        _classCallCheck(this, SliderController);

        this.items = [];
        this.slide = 0;
        this._scrollPosition = 0;
        this.setSlide = function () {};
    }

    _createClass(SliderController, [{
        key: 'moveToSlide',
        value: function moveToSlide(position) {
            this.scrollHandler(this.items[position].elemInfo.offsetLeft, true);
        }
    }, {
        key: 'addItem',
        value: function addItem(item) {
            var _this = this;

            this.items.push(item);
            return function () {
                _this.moveToSlide(_this.slide);
            };
        }
    }, {
        key: 'addContent',
        value: function addContent(handler) {
            this.scrollHandler = handler;
        }
    }, {
        key: 'next',
        value: function next(delta) {
            var next = this.slide + delta;
            if (next >= this.items.length) {
                next = 0;
            } else if (next < 0) {
                next = this.items.length - 1;
            }
            this.slide = next;
            this.moveToSlide(this.slide);
        }
    }, {
        key: 'addController',
        value: function addController(delta) {
            var _this2 = this;

            var handler = function handler(e) {
                _this2.next(delta);
            };
            return handler;
        }
    }, {
        key: 'setCounter',
        value: function setCounter(handler) {
            this.setSlide = handler;
            this.scrollPosition = 0;
        }
    }, {
        key: 'scrollPosition',
        set: function set(val) {
            this.slide = this.items.reduce(function (outIndex, item, index) {
                var center = val + item.elem.offsetWidth;
                if (item.elemInfo.center < center) {
                    outIndex = index;
                }
                return outIndex;
            }, 0);
            this._scrollPosition = val;
            this.setSlide(this.slide);
        }
    }], [{
        key: 'factory',
        value: function factory() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            SliderController.instance = new (_bind.apply(SliderController, [null].concat(args)))();
            return SliderController.instance;
        }
    }]);

    return SliderController;
})();

var SliderMain = function SliderMain() {
    _classCallCheck(this, SliderMain);

    this.restrict = 'A';
    this.controller = SliderController.factory;
};

exports.SliderMain = SliderMain;

var SliderContent = (function () {

    /*@ngInject*/

    function SliderContent(easingAnimator) {
        _classCallCheck(this, SliderContent);

        this.easingAnimator = easingAnimator;
        this.easingAnimator.callBack = this.animate.bind(this);
        this.require = '^sliderMain';
        this.restrict = 'A';
    }
    SliderContent.$inject = ["easingAnimator"];

    _createClass(SliderContent, [{
        key: 'animate',
        value: function animate(info) {
            this.element.scrollLeft = info.left;
        }
    }, {
        key: 'link',
        value: function link(scope, element, attrs, sliderMain) {
            var _this3 = this;

            this.element = element[0];
            sliderMain.addContent(function (val, animate) {
                if (!animate) {
                    _this3.element.scrollLeft = val;
                } else {
                    _this3.easingAnimator.easeProp({
                        left: _this3.element.scrollLeft
                    }, {
                        left: val
                    });
                }
            });
            element.on('scroll', function () {
                sliderMain.scrollPosition = _this3.element.scrollLeft;
            });
        }
    }]);

    return SliderContent;
})();

exports.SliderContent = SliderContent;

var SliderCounter = (function () {
    /*@ngInject*/

    function SliderCounter($timeout) {
        _classCallCheck(this, SliderCounter);

        this.$timeout = $timeout;
        this.require = '^sliderMain';
        this.restrict = 'A';
    }
    SliderCounter.$inject = ["$timeout"];

    _createClass(SliderCounter, [{
        key: 'link',
        value: function link($scope, element, attrs, sliderMain) {
            var _this4 = this;

            sliderMain.setCounter(function (val) {
                _this4.$timeout(function () {
                    $scope.selectedSlide = (1e4 + val + 1 + "").slice(-2);
                });
            });
        }
    }]);

    return SliderCounter;
})();

exports.SliderCounter = SliderCounter;

var SliderItem = (function () {
    function SliderItem($window) {
        _classCallCheck(this, SliderItem);

        this.require = '^sliderMain';
        this.restrict = 'A';
        this.$window = angular.element($window);
    }

    _createClass(SliderItem, [{
        key: 'link',
        value: function link(scope, element, attrs, sliderMain) {
            this.elem = element[0];
            var handler = sliderMain.addItem({
                elem: this.elem,
                elemInfo: this.elemInfo
            });
            element.on('resize', function () {
                handler.bind(sliderMain);
            });
            window.addEventListener('resize', handler.bind(sliderMain));
        }
    }, {
        key: 'elemInfo',
        get: function get() {
            return {
                offsetLeft: this.elem.offsetLeft,
                center: this.elem.offsetLeft + this.elem.offsetWidth / 2
            };
        }
    }]);

    return SliderItem;
})();

exports.SliderItem = SliderItem;

var SmallSliderItem = (function (_SliderItem) {
    _inherits(SmallSliderItem, _SliderItem);

    function SmallSliderItem() {
        _classCallCheck(this, SmallSliderItem);

        _get(Object.getPrototypeOf(SmallSliderItem.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(SmallSliderItem, [{
        key: 'elemInfo',
        get: function get() {
            return {
                offsetLeft: this.elem.offsetLeft - this.elem.offsetWidth,
                center: this.elem.offsetLeft - this.elem.offsetWidth / 2
            };
        }
    }]);

    return SmallSliderItem;
})(SliderItem);

exports.SmallSliderItem = SmallSliderItem;

var SliderControll = (function () {
    function SliderControll() {
        _classCallCheck(this, SliderControll);

        this.require = '^sliderMain';
        this.restrict = 'A';
    }

    _createClass(SliderControll, [{
        key: 'link',
        value: function link(scope, element, attrs, sliderMain) {
            var handler = sliderMain.addController(+attrs.sliderControll);
            element.on('click', handler.bind(sliderMain));
        }
    }]);

    return SliderControll;
})();

exports.SliderControll = SliderControll;

},{}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EasingAnimator = (function () {
    function EasingAnimator(opt) {
        _classCallCheck(this, EasingAnimator);

        var opt = {};
        this.easingInterval = opt.easingInterval;
        this.duration = opt.duration || 1000;
        this.step = opt.step || 50;
        this.easingFn = function (t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        };
        this.easingFn = opt.easingFn || this.easingFn;
        this.callBack = opt.callBack || function () {};
    }

    _createClass(EasingAnimator, [{
        key: "makeFromCallback",
        value: function makeFromCallback(callBack) {
            console.log(callBack);
            return new EasingAnimator({
                callBack: callBack
            });
        }
    }, {
        key: "easeProp",
        value: function easeProp(obj, propDict) {
            var _this = this;

            propDict = propDict || {};
            var self = this,
                t = 0,
                out_vals = JSON.parse(JSON.stringify(obj));
            clearInterval(this.easingInterval);
            self.easingInterval = setInterval(function () {
                t += _this.step;
                if (t >= _this.duration) {
                    clearInterval(_this.easingInterval);
                    _this.callBack(propDict);
                    return;
                }
                var percent = _this.easingFn(t, 0, 1, _this.duration);
                Object.keys(propDict).forEach(function (key, i) {
                    var old_val = obj[key];
                    out_vals[key] = old_val - percent * (old_val - propDict[key]);
                });
                _this.callBack(out_vals);
            }, this.step);
        }
    }]);

    return EasingAnimator;
})();

exports.EasingAnimator = EasingAnimator;
;

},{}],12:[function(require,module,exports){
/**
 * A helper class to simplify registering Angular components and provide a consistent syntax for doing so.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var _bind = Function.prototype.bind;
exports.register = register;

function register(appName) {

    var app = angular.module(appName);

    return {
        directive: directive,
        controller: controller,
        service: service,
        provider: provider,
        factory: factory
    };

    function directive(name, constructorFn) {

        constructorFn = _normalizeConstructor(constructorFn);

        if (!constructorFn.prototype.compile) {
            // create an empty compile function if none was defined.
            constructorFn.prototype.compile = function () {};
        }

        var originalCompileFn = _cloneFunction(constructorFn.prototype.compile);

        // Decorate the compile method to automatically return the link method (if it exists)
        // and bind it to the context of the constructor (so `this` works correctly).
        // This gets around the problem of a non-lexical "this" which occurs when the directive class itself
        // returns `this.link` from within the compile function.
        _override(constructorFn.prototype, 'compile', function () {
            return function () {
                originalCompileFn.apply(this, arguments);

                if (constructorFn.prototype.link) {
                    return constructorFn.prototype.link.bind(this);
                }
            };
        });

        var factoryArray = _createFactoryArray(constructorFn);

        app.directive(name, factoryArray);
        return this;
    }

    function controller(name, contructorFn) {
        app.controller(name, contructorFn);
        return this;
    }

    function service(name, contructorFn) {
        app.service(name, contructorFn);
        return this;
    }

    function provider(name, constructorFn) {
        app.provider(name, constructorFn);
        return this;
    }

    function factory(name, constructorFn) {
        constructorFn = _normalizeConstructor(constructorFn);
        var factoryArray = _createFactoryArray(constructorFn);
        app.factory(name, factoryArray);
        return this;
    }

    /**
     * If the constructorFn is an array of type ['dep1', 'dep2', ..., constructor() {}]
     * we need to pull out the array of dependencies and add it as an $inject property of the
     * actual constructor function.
     * @param input
     * @returns {*}
     * @private
     */
    function _normalizeConstructor(input) {
        var constructorFn;

        if (input.constructor === Array) {
            //
            var injected = input.slice(0, input.length - 1);
            constructorFn = input[input.length - 1];
            constructorFn.$inject = injected;
        } else {
            constructorFn = input;
        }

        return constructorFn;
    }

    /**
     * Convert a constructor function into a factory function which returns a new instance of that
     * constructor, with the correct dependencies automatically injected as arguments.
     *
     * In order to inject the dependencies, they must be attached to the constructor function with the
     * `$inject` property annotation.
     *
     * @param constructorFn
     * @returns {Array.<T>}
     * @private
     */
    function _createFactoryArray(constructorFn) {
        // get the array of dependencies that are needed by this component (as contained in the `$inject` array)
        var args = constructorFn.$inject || [];
        var factoryArray = args.slice(); // create a copy of the array
        // The factoryArray uses Angular's array notation whereby each element of the array is the name of a
        // dependency, and the final item is the factory function itself.
        factoryArray.push(function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            //return new constructorFn(...args);
            var instance = new (_bind.apply(constructorFn, [null].concat(args)))();
            for (var key in instance) {
                instance[key] = instance[key];
            }
            return instance;
        });

        return factoryArray;
    }

    /**
     * Clone a function
     * @param original
     * @returns {Function}
     */
    function _cloneFunction(original) {
        return function () {
            return original.apply(this, arguments);
        };
    }

    /**
     * Override an object's method with a new one specified by `callback`.
     * @param object
     * @param methodName
     * @param callback
     */
    function _override(object, methodName, callback) {
        object[methodName] = callback(object[methodName]);
    }
}

},{}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2suanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpbi5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpblBhZ2UvZGlyZWN0aXZlcy9sb2dvRGlyZWN0aXZlcy5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9kaXJlY3RpdmVzL2RyYWdnQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9kaXJlY3RpdmVzL2hvcml6b250YWxTY3JvbGwuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9zbGlkZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3Mvc2VydmljZXMvZWFzaW5nQW5pbWF0b3IuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3V0aWxzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQ0FhLGNBQWM7YUFBZCxjQUFjOzhCQUFkLGNBQWM7OztpQkFBZCxjQUFjOztlQU9uQixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3hCLHNCQUFVLENBQUMsWUFBSTtBQUNYLHVCQUFPLENBQ0YsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTthQUM5QyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQixtQkFBTyxDQUNGLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQ25DLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUM3QixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVMsQ0FBQyxFQUFDO0FBQ3BCLGlCQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7QUFDbEIsb0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDcEMsdUJBQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQzNDLDBCQUFVLENBQUMsWUFBSTtBQUNYLDBCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7aUJBQy9CLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDWCxDQUFDLENBQUM7U0FDVjs7O2FBdEJpQixlQUFHO0FBQ2pCLG1CQUFPLEdBQUcsQ0FBQztTQUNkOzs7YUFDb0IsZUFBRztBQUNwQixtQkFBTyxNQUFNLENBQUM7U0FDakI7OztXQU5RLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBZCxzQkFBc0I7OztBQUVwQixhQUZGLHNCQUFzQixDQUVuQixNQUFNLEVBQUUsZ0JBQWdCLEVBQUU7OEJB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Q0FBQyxDQUFDLENBQUE7S0FDcEQ7Q0FFSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgY2xhc3MgTWVzdG9DbGlja0ZhZGUge1xuICAgIHN0YXRpYyBnZXQgVElNRU9VVCgpIHtcbiAgICAgICAgcmV0dXJuIDIwMDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBGQURFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2ZhZGUnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKE1lc3RvQ2xpY2tGYWRlLkZBREVfQ0xBU1MpXG4gICAgICAgIH0sIE1lc3RvQ2xpY2tGYWRlLlRJTUVPVVQpO1xuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAuYWRkQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgICAgIC5maW5kKCdhLmZhZGVBbmltYXRvcl9fYW5jb3InKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGxldCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIgeyBcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBmZWVkYmFja1Jlc291cmNlKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tSZXNvdXJjZSA9IGZlZWRiYWNrUmVzb3VyY2U7XG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSAnJztcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XG4gICAgfVxuICAgIHN1Ym1pdChmb3JtKXtcbiAgICAgICAgaWYgKGZvcm0uJGludmFsaWQpIHtcbiAgICAgICAgICAgIGZvcm0uJHNldERpcnR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZmVlZGJhY2sgPSBuZXcgdGhpcy5mZWVkYmFja1Jlc291cmNlKHRoaXMuZm9ybURhdGEpO1xuICAgICAgICAgICAgZmVlZGJhY2suJHNhdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrVG9nZ2xlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZFRvZ2dsZXIoYXR0cnMubWVzdG9GZWVkYmFja1RvZ2dsZSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHRoaXMucG9wVXBTZXJpdmljZSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrQ29udG5pZXIge1xuICAgIHN0YXRpYyBnZXQgVE9HR0xFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2ZpeGVkUG9wVXAnOyBcbiAgICB9XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudG9nZ2xlQ2xhc3MoTWVzdG9GZWVkYmFja0NvbnRuaWVyLlRPR0dMRV9DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlXG4gICAgICAgICAgICAuYWRkQ29udGFuaWVyKGF0dHJzLm1lc3RvRmVlZGJhY2tDb250YW5pZXIsIGhhbmRsZXIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrQ2xvc2Uge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcihwb3BVcFNlcml2aWNlKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZSA9IHBvcFVwU2VyaXZpY2U7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gdGhpcy5wb3BVcFNlcml2aWNlLmNsb3NlKGF0dHJzLm1lc3RvRmVlZGJhY2tDbG9zZSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHRoaXMucG9wVXBTZXJpdmljZSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrSXRlbSB7XG4gICAgc3RhdGljIGdldCBUT0dHTEVfQ0xBU1MoKSB7XG4gICAgICAgIHJldHVybiAnYWN0aXZlJztcbiAgICB9XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcyhNZXN0b0ZlZWRiYWNrSXRlbS5UT0dHTEVfQ0xBU1MpO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2VcbiAgICAgICAgICAgIC5hZGRJdGVtKGF0dHJzLm1lc3RvRmVlZGJhY2tJdGVtLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRmVlZGJhY2tSZXNvdXJjZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gJHJlc291cmNlKENPTkZJRy51cmxzLmZlZWRiYWNrRm9ybSk7XG4gICAgfVxufVxuIiwiY2xhc3MgUG9wVXAge1xuICAgIGNvbnN0cnVjdG9yKGl0ZW1IYW5kbGVyKXtcbiAgICAgICAgdGhpcy5pdGVtSGFuZGxlciA9IGl0ZW1IYW5kbGVyO1xuICAgIH1cbiAgICB0b2dnbGVJdGVtKCkge1xuICAgICAgICBpZiAoUG9wVXAuY29udGFuaWVySGFuZGxlcikge1xuICAgICAgICAgICAgUG9wVXAuY29udGFuaWVySGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbUhhbmRsZXIoKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUG9wVXBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3BVcHMgPSB7fTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtTmFtZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnBvcFVwc1tpdGVtTmFtZV0gPSBuZXcgUG9wVXAoaGFuZGxlcik7XG4gICAgfVxuICAgIGNsb3NlKGl0ZW1OYW1lKSB7XG4gICAgICAgIGlmICghaXRlbU5hbWUpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucG9wVXBzKS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BVcHNba2V5XS50b2dnbGVJdGVtKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcFVwID0gdGhpcy5wb3BVcHNbaXRlbU5hbWVdXG4gICAgICAgICAgICBpZiAocG9wVXApIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcG9wVXAudG9nZ2xlSXRlbSgpXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZENvbnRhbmllcihwb3BVcE5hbWUsIGhhbmRlcikge1xuICAgICAgICBQb3BVcC5jb250YW5pZXJIYW5kbGVyID0gaGFuZGVyO1xuICAgIH1cbiAgICBhZGRUb2dnbGVyKHBvcFVwTmFtZSkge1xuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIChbdGhpcy5wb3BVcHNbcG9wVXBOYW1lXV0gfHwgW10pXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHBvcFVwKT0+e1xuICAgICAgICAgICAgICAgICAgIHBvcFVwLnRvZ2dsZUl0ZW0oKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICcuL3V0aWxzL3JlZ2lzdGVyJztcblxuaW1wb3J0IHsgXG4gICAgU2xpZGVyTWFpbixcbiAgICBTbGlkZXJDb250ZW50LFxuICAgIFNsaWRlckNvbnRyb2xsLFxuICAgIFNsaWRlckNvdW50ZXIsXG4gICAgU2xpZGVySXRlbSxcbiAgICBTbWFsbFNsaWRlckl0ZW1cbn0gZnJvbSAnLi90b3BOZXdzL2RpcmVjdGl2ZXMvc2xpZGVyJztcbmltcG9ydCB7IEVhc2luZ0FuaW1hdG9yIH0gZnJvbSAnLi90b3BOZXdzL3NlcnZpY2VzL2Vhc2luZ0FuaW1hdG9yJztcbmltcG9ydCB7IERyYWdnQ29udHJvbGxlciB9IGZyb20gJy4vdG9wTmV3cy9kaXJlY3RpdmVzL2RyYWdnQ29udHJvbGxlcic7XG5pbXBvcnQgeyBIb3Jpem9udGFsU2Nyb2xsIH0gZnJvbSAnLi90b3BOZXdzL2RpcmVjdGl2ZXMvaG9yaXpvbnRhbFNjcm9sbCc7XG5cbmltcG9ydCB7IE1lc3RvQ2xpY2tGYWRlIH0gZnJvbSAnLi9jbGlja0ZhZGUvZGlyZWN0aXZlcy9jbGlja0ZhZGUnO1xuXG5pbXBvcnQgeyBQb3BVcFNlcnZpY2UgfSBmcm9tICcuL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZSc7XG5pbXBvcnQgeyBGZWVkYmFja1Jlc291cmNlIH0gZnJvbSAnLi9mZWVkQmFjay9zZXJ2aWNlcy9mZWVkYmFja1Jlc291cmNlJztcbmltcG9ydCB7IEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIgfSBmcm9tICcuL2ZlZWRCYWNrL2NvbnRyb2xsZXJzL0Zvcm1Db250cm9sbGVyJztcbmltcG9ydCB7IFxuICAgIE1lc3RvRmVlZGJhY2tJdGVtLFxuICAgIE1lc3RvRmVlZGJhY2tUb2dnbGUsXG4gICAgTWVzdG9GZWVkYmFja0Nsb3NlLFxuICAgIE1lc3RvRmVlZGJhY2tDb250bmllclxufSBmcm9tICcuL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2snO1xuXG5pbXBvcnQgeyBcbiAgICBTVkdMb2dvSG92ZXIsXG4gICAgU1ZHTG9nb0l0ZW0sXG4gICAgU1ZHTG9nb0NvbnRhbmllcixcbiAgICBTVkdMb2dvQmFja2dyb3VuZFxufSBmcm9tICcuL21haW5QYWdlL2RpcmVjdGl2ZXMvbG9nb0RpcmVjdGl2ZXMnO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ21lc3RvJywgWyduZ1Jlc291cmNlJ10pO1xuXG5yZWdpc3RlcignbWVzdG8nKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlck1haW4nLCBTbGlkZXJNYWluKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckNvbnRyb2xsJywgU2xpZGVyQ29udHJvbGwpXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyQ29udGVudCcsIFNsaWRlckNvbnRlbnQpXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVySXRlbScsIFNsaWRlckl0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnc21hbGxTbGlkZXJJdGVtJywgU21hbGxTbGlkZXJJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckNvdW50ZXInLCBTbGlkZXJDb3VudGVyKVxuICAgIC5kaXJlY3RpdmUoJ2RyYWdnQ29udHJvbGxlcicsIERyYWdnQ29udHJvbGxlcilcbiAgICAuZGlyZWN0aXZlKCdob3Jpem9udGFsU2Nyb2xsJywgSG9yaXpvbnRhbFNjcm9sbClcbiAgICAuZmFjdG9yeSgnZWFzaW5nQW5pbWF0b3InLCBFYXNpbmdBbmltYXRvcilcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tJdGVtJywgTWVzdG9GZWVkYmFja0l0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja1RvZ2dsZScsIE1lc3RvRmVlZGJhY2tUb2dnbGUpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja0Nsb3NlJywgTWVzdG9GZWVkYmFja0Nsb3NlKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tDb250YW5pZXInLCBNZXN0b0ZlZWRiYWNrQ29udG5pZXIpXG4gICAgLnNlcnZpY2UoJ3BvcFVwU2VyaXZpY2UnLCBQb3BVcFNlcnZpY2UpXG5cbiAgICAuc2VydmljZSgnZmVlZGJhY2tSZXNvdXJjZScsIEZlZWRiYWNrUmVzb3VyY2UpXG4gICAgLmNvbnRyb2xsZXIoJ2ZlZWRiYWNrRm9ybUNvbnRyb2xsZXInLCBGZWVkYmFja0Zvcm1Db250cm9sbGVyKVxuXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9DbGlja0ZhZGUnLCBNZXN0b0NsaWNrRmFkZSlcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvTG9nb0hvdmVyJywgU1ZHTG9nb0hvdmVyKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvU3ZnSXRlbScsIFNWR0xvZ29JdGVtKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvU3ZnTG9nbycsIFNWR0xvZ29Db250YW5pZXIpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9TdmdCYWNrZ3JvdW5kJywgU1ZHTG9nb0JhY2tncm91bmQpXG5cbmFwcC5jb25maWcoKCRyZXNvdXJjZVByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyKT0+IHtcbiAgICAkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ2NzcmZ0b2tlbic7XG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9ICdYLUNTUkZUb2tlbic7XG4gICAgJHJlc291cmNlUHJvdmlkZXIuZGVmYXVsdHMuc3RyaXBUcmFpbGluZ1NsYXNoZXMgPSBmYWxzZTtcbn0pXG5hbmd1bGFyXG4gICAgLmVsZW1lbnQoZG9jdW1lbnQpXG4gICAgLnJlYWR5KGFuZ3VsYXIuYm9vdHN0cmFwLmJpbmQoYW5ndWxhciwgZG9jdW1lbnQsIFsnbWVzdG8nXSkpO1xuIiwiY2xhc3MgTG9nb0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0ge307XG4gICAgICAgIHRoaXMuaW1nVXJscyA9IHt9O1xuICAgIH1cbiAgICBhZGRJbWFnZShuYW1lLCB1cmwpIHtcbiAgICAgICAgdGhpcy5pbWdVcmxzW25hbWVdID0gdXJsO1xuICAgIH1cbiAgICBhZGRJdGVtKG5hbWUsIGluZm8pIHtcbiAgICAgICAgdGhpcy5pdGVtc1tuYW1lXSA9IGluZm87XG4gICAgfVxuICAgIGFkZEJhY2tncm91bmQoc2hvdywgaGlkZSl7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHtcbiAgICAgICAgICAgIHNob3c6IHNob3csXG4gICAgICAgICAgICBoaWRlOiBoaWRlXG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5ob3ZlcigpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5pdGVtcykuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgdGhpcy5pdGVtc1trZXldLmRpc2FibGVkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuaGlkZSgpO1xuICAgIH1cbiAgICBob3ZlcihuYW1lKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5zaG93KHRoaXMuaW1nVXJsc1tuYW1lXSk7XG4gICAgICAgIHRoaXMuaXRlbXNbbmFtZV0uYWN0aXZlKCk7XG4gICAgfVxuICAgIGNhbGwobmFtZSkge1xuICAgICAgICB0aGlzLml0ZW1zW25hbWVdLmNsaWNrKCk7XG4gICAgfVxuICAgIHN0YXRpYyBmYWN0b3J5KC4uLmFyZ3MpIHtcbiAgICAgICAgTG9nb0NvbnRyb2xsZXIuaW5zdGFuY2UgPSBuZXcgTG9nb0NvbnRyb2xsZXIoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiBMb2dvQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU1ZHTG9nb0NvbnRhbmllciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gTG9nb0NvbnRyb2xsZXIuZmFjdG9yeTtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU1ZHTG9nb0JhY2tncm91bmQge1xuICAgIHN0YXRpYyBnZXQgQUNUSVZFX0NMQVNTKCl7XG4gICAgICAgIHJldHVybiAnYWN0aXZlJztcbiAgICB9IFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXm1lc3RvU3ZnTG9nbyc7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuYWRkQmFja2dyb3VuZCgodXJsKT0+e1xuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhTVkdMb2dvQmFja2dyb3VuZC5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCB1cmwgPyBgdXJsKCR7dXJsfSlgIDogJ25vbmUnKTtcbiAgICAgICAgfSwgKCk9PntcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29Ib3ZlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15tZXN0b1N2Z0xvZ28nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgICBlbGVtZW50Lm9uKCdtb3VzZWVudGVyJywgKCk9PntcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaG92ZXIoYXR0cnMubWVzdG9Mb2dvSG92ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5vbignbW91c2VsZWF2ZScsICgpPT57XG4gICAgICAgICAgICBjb250cm9sbGVyLnVuaG92ZXIoYXR0cnMubWVzdG9Mb2dvSG92ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci5jYWxsKGF0dHJzLm1lc3RvTG9nb0hvdmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29JdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXm1lc3RvU3ZnTG9nbyc7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuYWRkSXRlbShhdHRycy5tZXN0b1N2Z0l0ZW0sIHtcbiAgICAgICAgICAgIGNsaWNrOiAoKT0+e1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXR0cnMuaHJlZjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmU6ICgpPT57XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhTVkdMb2dvQmFja2dyb3VuZC5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc2FibGVkOiAoKT0+e1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghYXR0cnMuaW1nVXJsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG4gICAgICAgICAgICBjb250cm9sbGVyLmFkZEltYWdlKGF0dHJzLm1lc3RvU3ZnSXRlbSwgYXR0cnMuaW1nVXJsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltZy5zcmMgPSBhdHRycy5pbWdVcmw7XG4gICAgICAgIGlmKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGRJbWFnZShhdHRycy5tZXN0b1N2Z0l0ZW0sIGF0dHJzLmltZ1VybCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRHJhZ2dDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXj9zbGlkZXJNYWluJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgdmFyIGRlbHRhX2luZm8gPSAwLFxuICAgICAgICAgICAgc3RhcnRfaW5mbyA9IDAsXG4gICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLm9uKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIHN0YXJ0X2luZm8gPSBkZWx0YV9pbmZvO1xuICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChkZWx0YV9pbmZvICE9IHRvdWNoLnNjcmVlblgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtbSArPSBkZWx0YV9pbmZvIC0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfaW5mbyA9IHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3VtbSkgPiAxMDAgJiYgc2xpZGVyTWFpbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3VtbSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlck1haW4ubmV4dCgxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlck1haW4ubmV4dCgtMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgZGVsdGFfaW5mbyA9IHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgSG9yaXpvbnRhbFNjcm9sbCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJ1xuICAgIH1cbiAgICBsaW5rKCRzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgdmFyIHRpbWVvdXQsXG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudFswXSxcbiAgICAgICAgICAgIGRlbHRhX3N1bSA9IDAsXG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIEhhbXN0ZXIoZWxlbWVudCkud2hlZWwoKGUsIGRlbHRhLCBkZWx0YVgsIGRlbHRhWSk9PntcbiAgICAgICAgICAgIGlmIChkZWx0YVggJiYgIWRlbHRhWSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBkZWx0YV9zdW0gPSAwO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkZWx0YV9zdW0gKz0gZGVsdGFZKjEyIHx8IDA7XG4gICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoL01hY2ludG9zaC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQgLSBkZWx0YV9zdW07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0IC0gZGVsdGFfc3VtKjIwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWx0YV9zdW0gPSAwO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIH0sIDEpO1xuXG4gICAgICAgIH0pICAgIFxuICAgIH1cbn1cbiIsImNsYXNzIFNsaWRlckNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuc2xpZGUgPSAwO1xuICAgICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuc2V0U2xpZGUgPSAoKT0+e307XG4gICAgfVxuICAgIHNldCBzY3JvbGxQb3NpdGlvbih2YWwpe1xuICAgICAgICB0aGlzLnNsaWRlID0gdGhpcy5pdGVtcy5yZWR1Y2UoKG91dEluZGV4LCBpdGVtLCBpbmRleCk9PntcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSB2YWwgKyBpdGVtLmVsZW0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBpZihpdGVtLmVsZW1JbmZvLmNlbnRlciA8IGNlbnRlcikge1xuICAgICAgICAgICAgICAgIG91dEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0SW5kZXg7XG4gICAgICAgIH0sIDApO1xuICAgICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IHZhbDtcbiAgICAgICAgdGhpcy5zZXRTbGlkZSh0aGlzLnNsaWRlKTtcbiAgICB9XG4gICAgbW92ZVRvU2xpZGUocG9zaXRpb24pe1xuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIodGhpcy5pdGVtc1twb3NpdGlvbl0uZWxlbUluZm8ub2Zmc2V0TGVmdCwgdHJ1ZSk7XG4gICAgfVxuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSlcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZVRvU2xpZGUodGhpcy5zbGlkZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQ29udGVudChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxuICAgIG5leHQoZGVsdGEpIHtcbiAgICAgICAgbGV0IG5leHQgPSB0aGlzLnNsaWRlICsgZGVsdGE7XG4gICAgICAgIGlmIChuZXh0ID49IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBuZXh0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmKG5leHQgPCAwKSB7XG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2xpZGUgPSBuZXh0O1xuICAgICAgICB0aGlzLm1vdmVUb1NsaWRlKHRoaXMuc2xpZGUpO1xuICAgIH1cbiAgICBhZGRDb250cm9sbGVyKGRlbHRhKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV4dChkZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuICAgIHNldENvdW50ZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLnNldFNsaWRlID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IDA7XG4gICAgfVxuICAgIHN0YXRpYyBmYWN0b3J5KC4uLmFyZ3MpIHtcbiAgICAgICAgU2xpZGVyQ29udHJvbGxlci5pbnN0YW5jZSA9IG5ldyBTbGlkZXJDb250cm9sbGVyKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gU2xpZGVyQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IFNsaWRlckNvbnRyb2xsZXIuZmFjdG9yeTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyQ29udGVudCB7XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoZWFzaW5nQW5pbWF0b3IpIHtcbiAgICAgICAgdGhpcy5lYXNpbmdBbmltYXRvciA9IGVhc2luZ0FuaW1hdG9yXG4gICAgICAgIHRoaXMuZWFzaW5nQW5pbWF0b3IuY2FsbEJhY2sgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgYW5pbWF0ZShpbmZvKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0ID0gaW5mby5sZWZ0O1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50WzBdO1xuICAgICAgICBzbGlkZXJNYWluLmFkZENvbnRlbnQoKHZhbCwgYW5pbWF0ZSk9PntcbiAgICAgICAgICAgIGlmICghYW5pbWF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0ID0gdmFsXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWFzaW5nQW5pbWF0b3IuZWFzZVByb3Aoe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdmFsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ3Njcm9sbCcsICgpPT57XG4gICAgICAgICAgICBzbGlkZXJNYWluLnNjcm9sbFBvc2l0aW9uID0gdGhpcy5lbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNsaWRlckNvdW50ZXIge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3RvcigkdGltZW91dCkge1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoJHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICBzbGlkZXJNYWluLnNldENvdW50ZXIoKHZhbCk9PntcbiAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRTbGlkZSA9ICgxZTQrdmFsKzErXCJcIikuc2xpY2UoLTIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVySXRlbSB7XG5cbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93KSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9IGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KTtcbiAgICB9XG4gICAgZ2V0IGVsZW1JbmZvKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2Zmc2V0TGVmdDogdGhpcy5lbGVtLm9mZnNldExlZnQsXG4gICAgICAgICAgICBjZW50ZXI6IHRoaXMuZWxlbS5vZmZzZXRMZWZ0ICsgdGhpcy5lbGVtLm9mZnNldFdpZHRoLzJcbiAgICAgICAgfVxuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICB0aGlzLmVsZW0gPSBlbGVtZW50WzBdO1xuICAgICAgICBsZXQgaGFuZGxlciA9IHNsaWRlck1haW4uYWRkSXRlbSh7XG4gICAgICAgICAgICBlbGVtOiB0aGlzLmVsZW0sXG4gICAgICAgICAgICBlbGVtSW5mbzogdGhpcy5lbGVtSW5mb1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5vbigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5iaW5kKHNsaWRlck1haW4pXG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlci5iaW5kKHNsaWRlck1haW4pKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU21hbGxTbGlkZXJJdGVtIGV4dGVuZHMgU2xpZGVySXRlbSB7XG5cbiAgICBnZXQgZWxlbUluZm8oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZzZXRMZWZ0OiB0aGlzLmVsZW0ub2Zmc2V0TGVmdCAtIHRoaXMuZWxlbS5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIGNlbnRlcjogdGhpcy5lbGVtLm9mZnNldExlZnQgLSB0aGlzLmVsZW0ub2Zmc2V0V2lkdGgvMlxuICAgICAgICB9XG4gICAgfVxufVxuICAgIFxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbnRyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBzbGlkZXJNYWluLmFkZENvbnRyb2xsZXIoK2F0dHJzLnNsaWRlckNvbnRyb2xsKVxuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZChzbGlkZXJNYWluKSlcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRWFzaW5nQW5pbWF0b3Ige1xuXG4gICAgY29uc3RydWN0b3Iob3B0KXtcbiAgICAgICAgdmFyIG9wdCA9IHt9O1xuICAgICAgICB0aGlzLmVhc2luZ0ludGVydmFsID0gb3B0LmVhc2luZ0ludGVydmFsO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gb3B0LmR1cmF0aW9uIHx8IDEwMDA7XG4gICAgICAgIHRoaXMuc3RlcCA9IG9wdC5zdGVwIHx8IDUwO1xuICAgICAgICB0aGlzLmVhc2luZ0ZuID0gKHQsIGIsIGMsIGQpID0+e1xuICAgICAgICAgICAgaWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCp0ICsgYjtcbiAgICAgICAgICAgIHJldHVybiAtYy8yICogKCh0LT0yKSp0KnQqdCAtIDIpICsgYjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lYXNpbmdGbiA9IG9wdC5lYXNpbmdGbiB8fCB0aGlzLmVhc2luZ0ZuO1xuICAgICAgICB0aGlzLmNhbGxCYWNrID0gb3B0LmNhbGxCYWNrIHx8ICgpPT57fTtcbiAgICB9XG4gICAgbWFrZUZyb21DYWxsYmFjayAoY2FsbEJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coY2FsbEJhY2spXG4gICAgICAgIHJldHVybiBuZXcgRWFzaW5nQW5pbWF0b3Ioe1xuICAgICAgICAgICAgY2FsbEJhY2s6IGNhbGxCYWNrXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlYXNlUHJvcCAob2JqLCBwcm9wRGljdCkge1xuICAgICAgICBwcm9wRGljdCA9IHByb3BEaWN0IHx8IHt9O1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICB0ID0gMCxcbiAgICAgICAgICAgIG91dF92YWxzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmVhc2luZ0ludGVydmFsKTtcbiAgICAgICAgc2VsZi5lYXNpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICB0Kz0gdGhpcy5zdGVwO1xuICAgICAgICAgICAgaWYgKHQgPj0gdGhpcy5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5lYXNpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhwcm9wRGljdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSB0aGlzLmVhc2luZ0ZuKHQsIDAsIDEsIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcERpY3QpLmZvckVhY2goKGtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvbGRfdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICAgICAgb3V0X3ZhbHNba2V5XSA9IG9sZF92YWwgLSBwZXJjZW50KihvbGRfdmFsIC0gcHJvcERpY3Rba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2FsbEJhY2sob3V0X3ZhbHMpO1xuICAgICAgICB9LCB0aGlzLnN0ZXApO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIEEgaGVscGVyIGNsYXNzIHRvIHNpbXBsaWZ5IHJlZ2lzdGVyaW5nIEFuZ3VsYXIgY29tcG9uZW50cyBhbmQgcHJvdmlkZSBhIGNvbnNpc3RlbnQgc3ludGF4IGZvciBkb2luZyBzby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGFwcE5hbWUpIHtcblxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShhcHBOYW1lKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpcmVjdGl2ZTogZGlyZWN0aXZlLFxuICAgICAgICBjb250cm9sbGVyOiBjb250cm9sbGVyLFxuICAgICAgICBzZXJ2aWNlOiBzZXJ2aWNlLFxuICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgIGZhY3Rvcnk6IGZhY3RvcnlcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGlyZWN0aXZlKG5hbWUsIGNvbnN0cnVjdG9yRm4pIHtcblxuICAgICAgICBjb25zdHJ1Y3RvckZuID0gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yRm4pO1xuXG4gICAgICAgIGlmICghY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGVtcHR5IGNvbXBpbGUgZnVuY3Rpb24gaWYgbm9uZSB3YXMgZGVmaW5lZC5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUgPSAoKSA9PiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcmlnaW5hbENvbXBpbGVGbiA9IF9jbG9uZUZ1bmN0aW9uKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUpO1xuXG4gICAgICAgIC8vIERlY29yYXRlIHRoZSBjb21waWxlIG1ldGhvZCB0byBhdXRvbWF0aWNhbGx5IHJldHVybiB0aGUgbGluayBtZXRob2QgKGlmIGl0IGV4aXN0cylcbiAgICAgICAgLy8gYW5kIGJpbmQgaXQgdG8gdGhlIGNvbnRleHQgb2YgdGhlIGNvbnN0cnVjdG9yIChzbyBgdGhpc2Agd29ya3MgY29ycmVjdGx5KS5cbiAgICAgICAgLy8gVGhpcyBnZXRzIGFyb3VuZCB0aGUgcHJvYmxlbSBvZiBhIG5vbi1sZXhpY2FsIFwidGhpc1wiIHdoaWNoIG9jY3VycyB3aGVuIHRoZSBkaXJlY3RpdmUgY2xhc3MgaXRzZWxmXG4gICAgICAgIC8vIHJldHVybnMgYHRoaXMubGlua2AgZnJvbSB3aXRoaW4gdGhlIGNvbXBpbGUgZnVuY3Rpb24uXG4gICAgICAgIF9vdmVycmlkZShjb25zdHJ1Y3RvckZuLnByb3RvdHlwZSwgJ2NvbXBpbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29tcGlsZUZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29uc3RydWN0b3JGbi5wcm90b3R5cGUubGluaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3JGbi5wcm90b3R5cGUubGluay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pO1xuXG4gICAgICAgIGFwcC5kaXJlY3RpdmUobmFtZSwgZmFjdG9yeUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udHJvbGxlcihuYW1lLCBjb250cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLmNvbnRyb2xsZXIobmFtZSwgY29udHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VydmljZShuYW1lLCBjb250cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLnNlcnZpY2UobmFtZSwgY29udHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvdmlkZXIobmFtZSwgY29uc3RydWN0b3JGbikge1xuICAgICAgICBhcHAucHJvdmlkZXIobmFtZSwgY29uc3RydWN0b3JGbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZhY3RvcnkobmFtZSwgY29uc3RydWN0b3JGbikge1xuICAgICAgICBjb25zdHJ1Y3RvckZuID0gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgYXBwLmZhY3RvcnkobmFtZSwgZmFjdG9yeUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGNvbnN0cnVjdG9yRm4gaXMgYW4gYXJyYXkgb2YgdHlwZSBbJ2RlcDEnLCAnZGVwMicsIC4uLiwgY29uc3RydWN0b3IoKSB7fV1cbiAgICAgKiB3ZSBuZWVkIHRvIHB1bGwgb3V0IHRoZSBhcnJheSBvZiBkZXBlbmRlbmNpZXMgYW5kIGFkZCBpdCBhcyBhbiAkaW5qZWN0IHByb3BlcnR5IG9mIHRoZVxuICAgICAqIGFjdHVhbCBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gaW5wdXRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9ub3JtYWxpemVDb25zdHJ1Y3RvcihpbnB1dCkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3JGbjtcblxuICAgICAgICBpZiAoaW5wdXQuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgdmFyIGluamVjdGVkID0gaW5wdXQuc2xpY2UoMCwgaW5wdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuID0gaW5wdXRbaW5wdXQubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuLiRpbmplY3QgPSBpbmplY3RlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4gPSBpbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBpbnRvIGEgZmFjdG9yeSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIHRoYXRcbiAgICAgKiBjb25zdHJ1Y3Rvciwgd2l0aCB0aGUgY29ycmVjdCBkZXBlbmRlbmNpZXMgYXV0b21hdGljYWxseSBpbmplY3RlZCBhcyBhcmd1bWVudHMuXG4gICAgICpcbiAgICAgKiBJbiBvcmRlciB0byBpbmplY3QgdGhlIGRlcGVuZGVuY2llcywgdGhleSBtdXN0IGJlIGF0dGFjaGVkIHRvIHRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB3aXRoIHRoZVxuICAgICAqIGAkaW5qZWN0YCBwcm9wZXJ0eSBhbm5vdGF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnN0cnVjdG9yRm5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPFQ+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIC8vIGdldCB0aGUgYXJyYXkgb2YgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIG5lZWRlZCBieSB0aGlzIGNvbXBvbmVudCAoYXMgY29udGFpbmVkIGluIHRoZSBgJGluamVjdGAgYXJyYXkpXG4gICAgICAgIHZhciBhcmdzID0gY29uc3RydWN0b3JGbi4kaW5qZWN0IHx8IFtdO1xuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gYXJncy5zbGljZSgpOyAvLyBjcmVhdGUgYSBjb3B5IG9mIHRoZSBhcnJheVxuICAgICAgICAvLyBUaGUgZmFjdG9yeUFycmF5IHVzZXMgQW5ndWxhcidzIGFycmF5IG5vdGF0aW9uIHdoZXJlYnkgZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSBpcyB0aGUgbmFtZSBvZiBhXG4gICAgICAgIC8vIGRlcGVuZGVuY3ksIGFuZCB0aGUgZmluYWwgaXRlbSBpcyB0aGUgZmFjdG9yeSBmdW5jdGlvbiBpdHNlbGYuXG4gICAgICAgIGZhY3RvcnlBcnJheS5wdXNoKCguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAvL3JldHVybiBuZXcgY29uc3RydWN0b3JGbiguLi5hcmdzKTtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvckZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2Vba2V5XSA9IGluc3RhbmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWN0b3J5QXJyYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvbmUgYSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSBvcmlnaW5hbFxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2xvbmVGdW5jdGlvbihvcmlnaW5hbCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBhbiBvYmplY3QncyBtZXRob2Qgd2l0aCBhIG5ldyBvbmUgc3BlY2lmaWVkIGJ5IGBjYWxsYmFja2AuXG4gICAgICogQHBhcmFtIG9iamVjdFxuICAgICAqIEBwYXJhbSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgZnVuY3Rpb24gX292ZXJyaWRlKG9iamVjdCwgbWV0aG9kTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgb2JqZWN0W21ldGhvZE5hbWVdID0gY2FsbGJhY2sob2JqZWN0W21ldGhvZE5hbWVdKVxuICAgIH1cblxufVxuIl19
