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

(0, _utilsRegister.register)('mesto').directive('sliderMain', _topNewsDirectivesSlider.SliderMain).directive('sliderControll', _topNewsDirectivesSlider.SliderControll).directive('sliderContent', _topNewsDirectivesSlider.SliderContent).directive('sliderItem', _topNewsDirectivesSlider.SliderItem).directive('sliderCounter', _topNewsDirectivesSlider.SliderCounter).directive('draggController', _topNewsDirectivesDraggController.DraggController).directive('horizontalScroll', _topNewsDirectivesHorizontalScroll.HorizontalScroll).factory('easingAnimator', _topNewsServicesEasingAnimator.EasingAnimator).directive('mestoFeedbackItem', _feedBackDirectivesFeedBack.MestoFeedbackItem).directive('mestoFeedbackToggle', _feedBackDirectivesFeedBack.MestoFeedbackToggle).directive('mestoFeedbackClose', _feedBackDirectivesFeedBack.MestoFeedbackClose).directive('mestoFeedbackContanier', _feedBackDirectivesFeedBack.MestoFeedbackContnier).service('popUpSerivice', _feedBackServicesPopUpService.PopUpService).service('feedbackResource', _feedBackServicesFeedbackResource.FeedbackResource).controller('feedbackFormController', _feedBackControllersFormController.FeedbackFormController).directive('mestoClickFade', _clickFadeDirectivesClickFade.MestoClickFade).directive('mestoLogoHover', _mainPageDirectivesLogoDirectives.SVGLogoHover).directive('mestoSvgItem', _mainPageDirectivesLogoDirectives.SVGLogoItem).directive('mestoSvgLogo', _mainPageDirectivesLogoDirectives.SVGLogoContanier).directive('mestoSvgBackground', _mainPageDirectivesLogoDirectives.SVGLogoBackground);

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

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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
            this.scrollHandler(this.items[position].elem.offsetLeft, true);
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
                var center = val + item.elem.offsetWidth / 2;
                if (item.elem.offsetLeft < center) {
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
            var handler = sliderMain.addItem({
                elem: element[0]
            });
            element.on('resize', function () {
                handler.bind(sliderMain);
            });
            window.addEventListener('resize', handler.bind(sliderMain));
        }
    }]);

    return SliderItem;
})();

exports.SliderItem = SliderItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2suanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpbi5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpblBhZ2UvZGlyZWN0aXZlcy9sb2dvRGlyZWN0aXZlcy5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9kaXJlY3RpdmVzL2RyYWdnQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9kaXJlY3RpdmVzL2hvcml6b250YWxTY3JvbGwuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9zbGlkZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3Mvc2VydmljZXMvZWFzaW5nQW5pbWF0b3IuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3V0aWxzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQ0FhLGNBQWM7YUFBZCxjQUFjOzhCQUFkLGNBQWM7OztpQkFBZCxjQUFjOztlQU9uQixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3hCLHNCQUFVLENBQUMsWUFBSTtBQUNYLHVCQUFPLENBQ0YsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTthQUM5QyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQixtQkFBTyxDQUNGLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQ25DLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUM3QixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVMsQ0FBQyxFQUFDO0FBQ3BCLGlCQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7QUFDbEIsb0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDcEMsdUJBQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQzNDLDBCQUFVLENBQUMsWUFBSTtBQUNYLDBCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7aUJBQy9CLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDWCxDQUFDLENBQUM7U0FDVjs7O2FBdEJpQixlQUFHO0FBQ2pCLG1CQUFPLEdBQUcsQ0FBQztTQUNkOzs7YUFDb0IsZUFBRztBQUNwQixtQkFBTyxNQUFNLENBQUM7U0FDakI7OztXQU5RLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBZCxzQkFBc0I7OztBQUVwQixhQUZGLHNCQUFzQixDQUVuQixNQUFNLEVBQUUsZ0JBQWdCLEVBQUU7OEJB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QUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQztBQUNELG1CQUFPLFFBQVEsQ0FBQztTQUNuQixDQUFDLENBQUM7O0FBRUgsZUFBTyxZQUFZLENBQUM7S0FDdkI7Ozs7Ozs7QUFPRCxhQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUU7QUFDOUIsZUFBTyxZQUFXO0FBQ2QsbUJBQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDMUMsQ0FBQztLQUNMOzs7Ozs7OztBQVFELGFBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO0FBQzdDLGNBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7S0FDcEQ7Q0FFSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgY2xhc3MgTWVzdG9DbGlja0ZhZGUge1xuICAgIHN0YXRpYyBnZXQgVElNRU9VVCgpIHtcbiAgICAgICAgcmV0dXJuIDIwMDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBGQURFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2ZhZGUnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKE1lc3RvQ2xpY2tGYWRlLkZBREVfQ0xBU1MpXG4gICAgICAgIH0sIE1lc3RvQ2xpY2tGYWRlLlRJTUVPVVQpO1xuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAuYWRkQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgICAgIC5maW5kKCdhLmZhZGVBbmltYXRvcl9fYW5jb3InKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGxldCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIgeyBcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBmZWVkYmFja1Jlc291cmNlKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tSZXNvdXJjZSA9IGZlZWRiYWNrUmVzb3VyY2U7XG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSAnJztcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XG4gICAgfVxuICAgIHN1Ym1pdChmb3JtKXtcbiAgICAgICAgaWYgKGZvcm0uJGludmFsaWQpIHtcbiAgICAgICAgICAgIGZvcm0uJHNldERpcnR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZmVlZGJhY2sgPSBuZXcgdGhpcy5mZWVkYmFja1Jlc291cmNlKHRoaXMuZm9ybURhdGEpO1xuICAgICAgICAgICAgZmVlZGJhY2suJHNhdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrVG9nZ2xlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZFRvZ2dsZXIoYXR0cnMubWVzdG9GZWVkYmFja1RvZ2dsZSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHRoaXMucG9wVXBTZXJpdmljZSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrQ29udG5pZXIge1xuICAgIHN0YXRpYyBnZXQgVE9HR0xFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2ZpeGVkUG9wVXAnOyBcbiAgICB9XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudG9nZ2xlQ2xhc3MoTWVzdG9GZWVkYmFja0NvbnRuaWVyLlRPR0dMRV9DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlXG4gICAgICAgICAgICAuYWRkQ29udGFuaWVyKGF0dHJzLm1lc3RvRmVlZGJhY2tDb250YW5pZXIsIGhhbmRsZXIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrQ2xvc2Uge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcihwb3BVcFNlcml2aWNlKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZSA9IHBvcFVwU2VyaXZpY2U7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gdGhpcy5wb3BVcFNlcml2aWNlLmNsb3NlKGF0dHJzLm1lc3RvRmVlZGJhY2tDbG9zZSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHRoaXMucG9wVXBTZXJpdmljZSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrSXRlbSB7XG4gICAgc3RhdGljIGdldCBUT0dHTEVfQ0xBU1MoKSB7XG4gICAgICAgIHJldHVybiAnYWN0aXZlJztcbiAgICB9XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcyhNZXN0b0ZlZWRiYWNrSXRlbS5UT0dHTEVfQ0xBU1MpO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2VcbiAgICAgICAgICAgIC5hZGRJdGVtKGF0dHJzLm1lc3RvRmVlZGJhY2tJdGVtLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRmVlZGJhY2tSZXNvdXJjZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gJHJlc291cmNlKENPTkZJRy51cmxzLmZlZWRiYWNrRm9ybSk7XG4gICAgfVxufVxuIiwiY2xhc3MgUG9wVXAge1xuICAgIGNvbnN0cnVjdG9yKGl0ZW1IYW5kbGVyKXtcbiAgICAgICAgdGhpcy5pdGVtSGFuZGxlciA9IGl0ZW1IYW5kbGVyO1xuICAgIH1cbiAgICB0b2dnbGVJdGVtKCkge1xuICAgICAgICBpZiAoUG9wVXAuY29udGFuaWVySGFuZGxlcikge1xuICAgICAgICAgICAgUG9wVXAuY29udGFuaWVySGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbUhhbmRsZXIoKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUG9wVXBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3BVcHMgPSB7fTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtTmFtZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnBvcFVwc1tpdGVtTmFtZV0gPSBuZXcgUG9wVXAoaGFuZGxlcik7XG4gICAgfVxuICAgIGNsb3NlKGl0ZW1OYW1lKSB7XG4gICAgICAgIGlmICghaXRlbU5hbWUpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucG9wVXBzKS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BVcHNba2V5XS50b2dnbGVJdGVtKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcFVwID0gdGhpcy5wb3BVcHNbaXRlbU5hbWVdXG4gICAgICAgICAgICBpZiAocG9wVXApIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcG9wVXAudG9nZ2xlSXRlbSgpXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZENvbnRhbmllcihwb3BVcE5hbWUsIGhhbmRlcikge1xuICAgICAgICBQb3BVcC5jb250YW5pZXJIYW5kbGVyID0gaGFuZGVyO1xuICAgIH1cbiAgICBhZGRUb2dnbGVyKHBvcFVwTmFtZSkge1xuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIChbdGhpcy5wb3BVcHNbcG9wVXBOYW1lXV0gfHwgW10pXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHBvcFVwKT0+e1xuICAgICAgICAgICAgICAgICAgIHBvcFVwLnRvZ2dsZUl0ZW0oKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICcuL3V0aWxzL3JlZ2lzdGVyJztcblxuaW1wb3J0IHsgXG4gICAgU2xpZGVyTWFpbixcbiAgICBTbGlkZXJDb250ZW50LFxuICAgIFNsaWRlckNvbnRyb2xsLFxuICAgIFNsaWRlckNvdW50ZXIsXG4gICAgU2xpZGVySXRlbVxufSBmcm9tICcuL3RvcE5ld3MvZGlyZWN0aXZlcy9zbGlkZXInO1xuaW1wb3J0IHsgRWFzaW5nQW5pbWF0b3IgfSBmcm9tICcuL3RvcE5ld3Mvc2VydmljZXMvZWFzaW5nQW5pbWF0b3InO1xuaW1wb3J0IHsgRHJhZ2dDb250cm9sbGVyIH0gZnJvbSAnLi90b3BOZXdzL2RpcmVjdGl2ZXMvZHJhZ2dDb250cm9sbGVyJztcbmltcG9ydCB7IEhvcml6b250YWxTY3JvbGwgfSBmcm9tICcuL3RvcE5ld3MvZGlyZWN0aXZlcy9ob3Jpem9udGFsU2Nyb2xsJztcblxuaW1wb3J0IHsgTWVzdG9DbGlja0ZhZGUgfSBmcm9tICcuL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZSc7XG5cbmltcG9ydCB7IFBvcFVwU2VydmljZSB9IGZyb20gJy4vZmVlZEJhY2svc2VydmljZXMvcG9wVXBTZXJ2aWNlJztcbmltcG9ydCB7IEZlZWRiYWNrUmVzb3VyY2UgfSBmcm9tICcuL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UnO1xuaW1wb3J0IHsgRmVlZGJhY2tGb3JtQ29udHJvbGxlciB9IGZyb20gJy4vZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgXG4gICAgTWVzdG9GZWVkYmFja0l0ZW0sXG4gICAgTWVzdG9GZWVkYmFja1RvZ2dsZSxcbiAgICBNZXN0b0ZlZWRiYWNrQ2xvc2UsXG4gICAgTWVzdG9GZWVkYmFja0NvbnRuaWVyXG59IGZyb20gJy4vZmVlZEJhY2svZGlyZWN0aXZlcy9mZWVkQmFjayc7XG5cbmltcG9ydCB7IFxuICAgIFNWR0xvZ29Ib3ZlcixcbiAgICBTVkdMb2dvSXRlbSxcbiAgICBTVkdMb2dvQ29udGFuaWVyLFxuICAgIFNWR0xvZ29CYWNrZ3JvdW5kXG59IGZyb20gJy4vbWFpblBhZ2UvZGlyZWN0aXZlcy9sb2dvRGlyZWN0aXZlcyc7XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnbWVzdG8nLCBbJ25nUmVzb3VyY2UnXSk7XG5cbnJlZ2lzdGVyKCdtZXN0bycpXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyTWFpbicsIFNsaWRlck1haW4pXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyQ29udHJvbGwnLCBTbGlkZXJDb250cm9sbClcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJDb250ZW50JywgU2xpZGVyQ29udGVudClcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJJdGVtJywgU2xpZGVySXRlbSlcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJDb3VudGVyJywgU2xpZGVyQ291bnRlcilcbiAgICAuZGlyZWN0aXZlKCdkcmFnZ0NvbnRyb2xsZXInLCBEcmFnZ0NvbnRyb2xsZXIpXG4gICAgLmRpcmVjdGl2ZSgnaG9yaXpvbnRhbFNjcm9sbCcsIEhvcml6b250YWxTY3JvbGwpXG4gICAgLmZhY3RvcnkoJ2Vhc2luZ0FuaW1hdG9yJywgRWFzaW5nQW5pbWF0b3IpXG5cbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrSXRlbScsIE1lc3RvRmVlZGJhY2tJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tUb2dnbGUnLCBNZXN0b0ZlZWRiYWNrVG9nZ2xlKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tDbG9zZScsIE1lc3RvRmVlZGJhY2tDbG9zZSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrQ29udGFuaWVyJywgTWVzdG9GZWVkYmFja0NvbnRuaWVyKVxuICAgIC5zZXJ2aWNlKCdwb3BVcFNlcml2aWNlJywgUG9wVXBTZXJ2aWNlKVxuXG4gICAgLnNlcnZpY2UoJ2ZlZWRiYWNrUmVzb3VyY2UnLCBGZWVkYmFja1Jlc291cmNlKVxuICAgIC5jb250cm9sbGVyKCdmZWVkYmFja0Zvcm1Db250cm9sbGVyJywgRmVlZGJhY2tGb3JtQ29udHJvbGxlcilcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvQ2xpY2tGYWRlJywgTWVzdG9DbGlja0ZhZGUpXG5cbiAgICAuZGlyZWN0aXZlKCdtZXN0b0xvZ29Ib3ZlcicsIFNWR0xvZ29Ib3ZlcilcbiAgICAuZGlyZWN0aXZlKCdtZXN0b1N2Z0l0ZW0nLCBTVkdMb2dvSXRlbSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b1N2Z0xvZ28nLCBTVkdMb2dvQ29udGFuaWVyKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvU3ZnQmFja2dyb3VuZCcsIFNWR0xvZ29CYWNrZ3JvdW5kKVxuXG5hcHAuY29uZmlnKCgkcmVzb3VyY2VQcm92aWRlciwgJGh0dHBQcm92aWRlcik9PiB7XG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdjc3JmdG9rZW4nO1xuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nO1xuICAgICRyZXNvdXJjZVByb3ZpZGVyLmRlZmF1bHRzLnN0cmlwVHJhaWxpbmdTbGFzaGVzID0gZmFsc2U7XG59KVxuYW5ndWxhclxuICAgIC5lbGVtZW50KGRvY3VtZW50KVxuICAgIC5yZWFkeShhbmd1bGFyLmJvb3RzdHJhcC5iaW5kKGFuZ3VsYXIsIGRvY3VtZW50LCBbJ21lc3RvJ10pKTtcbiIsImNsYXNzIExvZ29Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgICAgICB0aGlzLmltZ1VybHMgPSB7fTtcbiAgICB9XG4gICAgYWRkSW1hZ2UobmFtZSwgdXJsKSB7XG4gICAgICAgIHRoaXMuaW1nVXJsc1tuYW1lXSA9IHVybDtcbiAgICB9XG4gICAgYWRkSXRlbShuYW1lLCBpbmZvKSB7XG4gICAgICAgIHRoaXMuaXRlbXNbbmFtZV0gPSBpbmZvO1xuICAgIH1cbiAgICBhZGRCYWNrZ3JvdW5kKHNob3csIGhpZGUpe1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSB7XG4gICAgICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICAgICAgaGlkZTogaGlkZVxuICAgICAgICB9XG4gICAgfVxuICAgIHVuaG92ZXIoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaXRlbXMpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIHRoaXMuaXRlbXNba2V5XS5kaXNhYmxlZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhpZGUoKTtcbiAgICB9XG4gICAgaG92ZXIobmFtZSkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuc2hvdyh0aGlzLmltZ1VybHNbbmFtZV0pO1xuICAgICAgICB0aGlzLml0ZW1zW25hbWVdLmFjdGl2ZSgpO1xuICAgIH1cbiAgICBjYWxsKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pdGVtc1tuYW1lXS5jbGljaygpO1xuICAgIH1cbiAgICBzdGF0aWMgZmFjdG9yeSguLi5hcmdzKSB7XG4gICAgICAgIExvZ29Db250cm9sbGVyLmluc3RhbmNlID0gbmV3IExvZ29Db250cm9sbGVyKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gTG9nb0NvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29Db250YW5pZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IExvZ29Db250cm9sbGVyLmZhY3Rvcnk7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29CYWNrZ3JvdW5kIHtcbiAgICBzdGF0aWMgZ2V0IEFDVElWRV9DTEFTUygpe1xuICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgfSBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15tZXN0b1N2Z0xvZ28nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLmFkZEJhY2tncm91bmQoKHVybCk9PntcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgdXJsID8gYHVybCgke3VybH0pYCA6ICdub25lJyk7XG4gICAgICAgIH0sICgpPT57XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvSG92ZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdebWVzdG9TdmdMb2dvJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIpIHtcbiAgICAgICAgZWxlbWVudC5vbignbW91c2VlbnRlcicsICgpPT57XG4gICAgICAgICAgICBjb250cm9sbGVyLmhvdmVyKGF0dHJzLm1lc3RvTG9nb0hvdmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci51bmhvdmVyKGF0dHJzLm1lc3RvTG9nb0hvdmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2FsbChhdHRycy5tZXN0b0xvZ29Ib3Zlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvSXRlbSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15tZXN0b1N2Z0xvZ28nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLmFkZEl0ZW0oYXR0cnMubWVzdG9TdmdJdGVtLCB7XG4gICAgICAgICAgICBjbGljazogKCk9PntcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGF0dHJzLmhyZWY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZlOiAoKT0+e1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXNhYmxlZDogKCk9PntcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWF0dHJzLmltZ1VybCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGRJbWFnZShhdHRycy5tZXN0b1N2Z0l0ZW0sIGF0dHJzLmltZ1VybCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcuc3JjID0gYXR0cnMuaW1nVXJsO1xuICAgICAgICBpZihpbWcuY29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkSW1hZ2UoYXR0cnMubWVzdG9TdmdJdGVtLCBhdHRycy5pbWdVcmwpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERyYWdnQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ14/c2xpZGVyTWFpbic7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIHZhciBkZWx0YV9pbmZvID0gMCxcbiAgICAgICAgICAgIHN0YXJ0X2luZm8gPSAwLFxuICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgIC5vbigndG91Y2hzdGFydCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBkZWx0YV9pbmZvID0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICBzdGFydF9pbmZvID0gZGVsdGFfaW5mbztcbiAgICAgICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ3RvdWNobW92ZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoZGVsdGFfaW5mbyAhPSB0b3VjaC5zY3JlZW5YKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bW0gKz0gZGVsdGFfaW5mbyAtIHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCd0b3VjaGVuZCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHN1bW0pID4gMTAwICYmIHNsaWRlck1haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJNYWluLm5leHQoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJNYWluLm5leHQoLTEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEhvcml6b250YWxTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSdcbiAgICB9XG4gICAgbGluaygkc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHZhciB0aW1lb3V0LFxuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRbMF0sXG4gICAgICAgICAgICBkZWx0YV9zdW0gPSAwLFxuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICBIYW1zdGVyKGVsZW1lbnQpLndoZWVsKChlLCBkZWx0YSwgZGVsdGFYLCBkZWx0YVkpPT57XG4gICAgICAgICAgICBpZiAoZGVsdGFYICYmICFkZWx0YVkpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgZGVsdGFfc3VtID0gMDtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZGVsdGFfc3VtICs9IGRlbHRhWSoxMiB8fCAwO1xuICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKC9NYWNpbnRvc2gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0IC0gZGVsdGFfc3VtO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCAtIGRlbHRhX3N1bSoyMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVsdGFfc3VtID0gMDtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICB9LCAxKTtcblxuICAgICAgICB9KSAgICBcbiAgICB9XG59XG4iLCJjbGFzcyBTbGlkZXJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLnNsaWRlID0gMDtcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLnNldFNsaWRlID0gKCk9Pnt9O1xuICAgIH1cbiAgICBzZXQgc2Nyb2xsUG9zaXRpb24odmFsKXtcbiAgICAgICAgdGhpcy5zbGlkZSA9IHRoaXMuaXRlbXMucmVkdWNlKChvdXRJbmRleCwgaXRlbSwgaW5kZXgpPT57XG4gICAgICAgICAgICBsZXQgY2VudGVyID0gdmFsICsgaXRlbS5lbGVtLm9mZnNldFdpZHRoLzI7XG4gICAgICAgICAgICBpZihpdGVtLmVsZW0ub2Zmc2V0TGVmdCA8IGNlbnRlcikge1xuICAgICAgICAgICAgICAgIG91dEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0SW5kZXg7XG4gICAgICAgIH0sIDApO1xuICAgICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IHZhbDtcbiAgICAgICAgdGhpcy5zZXRTbGlkZSh0aGlzLnNsaWRlKTtcbiAgICB9XG4gICAgbW92ZVRvU2xpZGUocG9zaXRpb24pe1xuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIodGhpcy5pdGVtc1twb3NpdGlvbl0uZWxlbS5vZmZzZXRMZWZ0LCB0cnVlKTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZSh0aGlzLnNsaWRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDb250ZW50KGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9XG4gICAgbmV4dChkZWx0YSkge1xuICAgICAgICBsZXQgbmV4dCA9IHRoaXMuc2xpZGUgKyBkZWx0YTtcbiAgICAgICAgaWYgKG5leHQgPj0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5leHQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYobmV4dCA8IDApIHtcbiAgICAgICAgICAgIG5leHQgPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbGlkZSA9IG5leHQ7XG4gICAgICAgIHRoaXMubW92ZVRvU2xpZGUodGhpcy5zbGlkZSk7XG4gICAgfVxuICAgIGFkZENvbnRyb2xsZXIoZGVsdGEpIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0KGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlcjtcbiAgICB9XG4gICAgc2V0Q291bnRlcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U2xpZGUgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uID0gMDtcbiAgICB9XG4gICAgc3RhdGljIGZhY3RvcnkoLi4uYXJncykge1xuICAgICAgICBTbGlkZXJDb250cm9sbGVyLmluc3RhbmNlID0gbmV3IFNsaWRlckNvbnRyb2xsZXIoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiBTbGlkZXJDb250cm9sbGVyLmluc3RhbmNlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXJNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gU2xpZGVyQ29udHJvbGxlci5mYWN0b3J5O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb250ZW50IHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3RvcihlYXNpbmdBbmltYXRvcikge1xuICAgICAgICB0aGlzLmVhc2luZ0FuaW1hdG9yID0gZWFzaW5nQW5pbWF0b3JcbiAgICAgICAgdGhpcy5lYXNpbmdBbmltYXRvci5jYWxsQmFjayA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXnNsaWRlck1haW4nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBhbmltYXRlKGluZm8pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNjcm9sbExlZnQgPSBpbmZvLmxlZnQ7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRbMF07XG4gICAgICAgIHNsaWRlck1haW4uYWRkQ29udGVudCgodmFsLCBhbmltYXRlKT0+e1xuICAgICAgICAgICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNjcm9sbExlZnQgPSB2YWxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lYXNpbmdBbmltYXRvci5lYXNlUHJvcCh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB2YWxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5vbignc2Nyb2xsJywgKCk9PntcbiAgICAgICAgICAgIHNsaWRlck1haW4uc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2xpZGVyQ291bnRlciB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluaygkc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIHNsaWRlck1haW4uc2V0Q291bnRlcigodmFsKT0+e1xuICAgICAgICAgICAgdGhpcy4kdGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZFNsaWRlID0gKDFlNCt2YWwrMStcIlwiKS5zbGljZSgtMik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXJJdGVtIHtcblxuICAgIGNvbnN0cnVjdG9yKCR3aW5kb3cpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy4kd2luZG93ID0gYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHNsaWRlck1haW4uYWRkSXRlbSh7XG4gICAgICAgICAgICBlbGVtOiBlbGVtZW50WzBdXG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50Lm9uKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVyLmJpbmQoc2xpZGVyTWFpbilcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyLmJpbmQoc2xpZGVyTWFpbikpO1xuICAgIH1cbn1cbiAgICBcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb250cm9sbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gc2xpZGVyTWFpbi5hZGRDb250cm9sbGVyKCthdHRycy5zbGlkZXJDb250cm9sbClcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBoYW5kbGVyLmJpbmQoc2xpZGVyTWFpbikpXG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEVhc2luZ0FuaW1hdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdCl7XG4gICAgICAgIHZhciBvcHQgPSB7fTtcbiAgICAgICAgdGhpcy5lYXNpbmdJbnRlcnZhbCA9IG9wdC5lYXNpbmdJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IG9wdC5kdXJhdGlvbiB8fCAxMDAwO1xuICAgICAgICB0aGlzLnN0ZXAgPSBvcHQuc3RlcCB8fCA1MDtcbiAgICAgICAgdGhpcy5lYXNpbmdGbiA9ICh0LCBiLCBjLCBkKSA9PntcbiAgICAgICAgICAgIGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCArIGI7XG4gICAgICAgICAgICByZXR1cm4gLWMvMiAqICgodC09MikqdCp0KnQgLSAyKSArIGI7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZWFzaW5nRm4gPSBvcHQuZWFzaW5nRm4gfHwgdGhpcy5lYXNpbmdGbjtcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IG9wdC5jYWxsQmFjayB8fCAoKT0+e307XG4gICAgfVxuICAgIG1ha2VGcm9tQ2FsbGJhY2sgKGNhbGxCYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhbGxCYWNrKVxuICAgICAgICByZXR1cm4gbmV3IEVhc2luZ0FuaW1hdG9yKHtcbiAgICAgICAgICAgIGNhbGxCYWNrOiBjYWxsQmFja1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWFzZVByb3AgKG9iaiwgcHJvcERpY3QpIHtcbiAgICAgICAgcHJvcERpY3QgPSBwcm9wRGljdCB8fCB7fTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgdCA9IDAsXG4gICAgICAgICAgICBvdXRfdmFscyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5lYXNpbmdJbnRlcnZhbCk7XG4gICAgICAgIHNlbGYuZWFzaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgdCs9IHRoaXMuc3RlcDtcbiAgICAgICAgICAgIGlmICh0ID49IHRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZWFzaW5nSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJhY2socHJvcERpY3QpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwZXJjZW50ID0gdGhpcy5lYXNpbmdGbih0LCAwLCAxLCB0aGlzLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BEaWN0KS5mb3JFYWNoKChrZXksIGkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb2xkX3ZhbCA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgIG91dF92YWxzW2tleV0gPSBvbGRfdmFsIC0gcGVyY2VudCoob2xkX3ZhbCAtIHByb3BEaWN0W2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNhbGxCYWNrKG91dF92YWxzKTtcbiAgICAgICAgfSwgdGhpcy5zdGVwKTtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBBIGhlbHBlciBjbGFzcyB0byBzaW1wbGlmeSByZWdpc3RlcmluZyBBbmd1bGFyIGNvbXBvbmVudHMgYW5kIHByb3ZpZGUgYSBjb25zaXN0ZW50IHN5bnRheCBmb3IgZG9pbmcgc28uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlcihhcHBOYW1lKSB7XG5cbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoYXBwTmFtZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXJlY3RpdmU6IGRpcmVjdGl2ZSxcbiAgICAgICAgY29udHJvbGxlcjogY29udHJvbGxlcixcbiAgICAgICAgc2VydmljZTogc2VydmljZSxcbiAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLFxuICAgICAgICBmYWN0b3J5OiBmYWN0b3J5XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRpcmVjdGl2ZShuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG5cbiAgICAgICAgY29uc3RydWN0b3JGbiA9IF9ub3JtYWxpemVDb25zdHJ1Y3Rvcihjb25zdHJ1Y3RvckZuKTtcblxuICAgICAgICBpZiAoIWNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBlbXB0eSBjb21waWxlIGZ1bmN0aW9uIGlmIG5vbmUgd2FzIGRlZmluZWQuXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5jb21waWxlID0gKCkgPT4ge307XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3JpZ2luYWxDb21waWxlRm4gPSBfY2xvbmVGdW5jdGlvbihjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5jb21waWxlKTtcblxuICAgICAgICAvLyBEZWNvcmF0ZSB0aGUgY29tcGlsZSBtZXRob2QgdG8gYXV0b21hdGljYWxseSByZXR1cm4gdGhlIGxpbmsgbWV0aG9kIChpZiBpdCBleGlzdHMpXG4gICAgICAgIC8vIGFuZCBiaW5kIGl0IHRvIHRoZSBjb250ZXh0IG9mIHRoZSBjb25zdHJ1Y3RvciAoc28gYHRoaXNgIHdvcmtzIGNvcnJlY3RseSkuXG4gICAgICAgIC8vIFRoaXMgZ2V0cyBhcm91bmQgdGhlIHByb2JsZW0gb2YgYSBub24tbGV4aWNhbCBcInRoaXNcIiB3aGljaCBvY2N1cnMgd2hlbiB0aGUgZGlyZWN0aXZlIGNsYXNzIGl0c2VsZlxuICAgICAgICAvLyByZXR1cm5zIGB0aGlzLmxpbmtgIGZyb20gd2l0aGluIHRoZSBjb21waWxlIGZ1bmN0aW9uLlxuICAgICAgICBfb3ZlcnJpZGUoY29uc3RydWN0b3JGbi5wcm90b3R5cGUsICdjb21waWxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbENvbXBpbGVGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmxpbmsuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKTtcblxuICAgICAgICBhcHAuZGlyZWN0aXZlKG5hbWUsIGZhY3RvcnlBcnJheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnRyb2xsZXIobmFtZSwgY29udHJ1Y3RvckZuKSB7XG4gICAgICAgIGFwcC5jb250cm9sbGVyKG5hbWUsIGNvbnRydWN0b3JGbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlcnZpY2UobmFtZSwgY29udHJ1Y3RvckZuKSB7XG4gICAgICAgIGFwcC5zZXJ2aWNlKG5hbWUsIGNvbnRydWN0b3JGbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb3ZpZGVyKG5hbWUsIGNvbnN0cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLnByb3ZpZGVyKG5hbWUsIGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWN0b3J5KG5hbWUsIGNvbnN0cnVjdG9yRm4pIHtcbiAgICAgICAgY29uc3RydWN0b3JGbiA9IF9ub3JtYWxpemVDb25zdHJ1Y3Rvcihjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgdmFyIGZhY3RvcnlBcnJheSA9IF9jcmVhdGVGYWN0b3J5QXJyYXkoY29uc3RydWN0b3JGbik7XG4gICAgICAgIGFwcC5mYWN0b3J5KG5hbWUsIGZhY3RvcnlBcnJheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBjb25zdHJ1Y3RvckZuIGlzIGFuIGFycmF5IG9mIHR5cGUgWydkZXAxJywgJ2RlcDInLCAuLi4sIGNvbnN0cnVjdG9yKCkge31dXG4gICAgICogd2UgbmVlZCB0byBwdWxsIG91dCB0aGUgYXJyYXkgb2YgZGVwZW5kZW5jaWVzIGFuZCBhZGQgaXQgYXMgYW4gJGluamVjdCBwcm9wZXJ0eSBvZiB0aGVcbiAgICAgKiBhY3R1YWwgY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfbm9ybWFsaXplQ29uc3RydWN0b3IoaW5wdXQpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yRm47XG5cbiAgICAgICAgaWYgKGlucHV0LmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHZhciBpbmplY3RlZCA9IGlucHV0LnNsaWNlKDAsIGlucHV0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgY29uc3RydWN0b3JGbiA9IGlucHV0W2lucHV0Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgY29uc3RydWN0b3JGbi4kaW5qZWN0ID0gaW5qZWN0ZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuID0gaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JGbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgY29uc3RydWN0b3IgZnVuY3Rpb24gaW50byBhIGZhY3RvcnkgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIG5ldyBpbnN0YW5jZSBvZiB0aGF0XG4gICAgICogY29uc3RydWN0b3IsIHdpdGggdGhlIGNvcnJlY3QgZGVwZW5kZW5jaWVzIGF1dG9tYXRpY2FsbHkgaW5qZWN0ZWQgYXMgYXJndW1lbnRzLlxuICAgICAqXG4gICAgICogSW4gb3JkZXIgdG8gaW5qZWN0IHRoZSBkZXBlbmRlbmNpZXMsIHRoZXkgbXVzdCBiZSBhdHRhY2hlZCB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24gd2l0aCB0aGVcbiAgICAgKiBgJGluamVjdGAgcHJvcGVydHkgYW5ub3RhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25zdHJ1Y3RvckZuXG4gICAgICogQHJldHVybnMge0FycmF5LjxUPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jcmVhdGVGYWN0b3J5QXJyYXkoY29uc3RydWN0b3JGbikge1xuICAgICAgICAvLyBnZXQgdGhlIGFycmF5IG9mIGRlcGVuZGVuY2llcyB0aGF0IGFyZSBuZWVkZWQgYnkgdGhpcyBjb21wb25lbnQgKGFzIGNvbnRhaW5lZCBpbiB0aGUgYCRpbmplY3RgIGFycmF5KVxuICAgICAgICB2YXIgYXJncyA9IGNvbnN0cnVjdG9yRm4uJGluamVjdCB8fCBbXTtcbiAgICAgICAgdmFyIGZhY3RvcnlBcnJheSA9IGFyZ3Muc2xpY2UoKTsgLy8gY3JlYXRlIGEgY29weSBvZiB0aGUgYXJyYXlcbiAgICAgICAgLy8gVGhlIGZhY3RvcnlBcnJheSB1c2VzIEFuZ3VsYXIncyBhcnJheSBub3RhdGlvbiB3aGVyZWJ5IGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXkgaXMgdGhlIG5hbWUgb2YgYVxuICAgICAgICAvLyBkZXBlbmRlbmN5LCBhbmQgdGhlIGZpbmFsIGl0ZW0gaXMgdGhlIGZhY3RvcnkgZnVuY3Rpb24gaXRzZWxmLlxuICAgICAgICBmYWN0b3J5QXJyYXkucHVzaCgoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgLy9yZXR1cm4gbmV3IGNvbnN0cnVjdG9yRm4oLi4uYXJncyk7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3JGbiguLi5hcmdzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlW2tleV0gPSBpbnN0YW5jZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmFjdG9yeUFycmF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb25lIGEgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gb3JpZ2luYWxcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2Nsb25lRnVuY3Rpb24ob3JpZ2luYWwpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgYW4gb2JqZWN0J3MgbWV0aG9kIHdpdGggYSBuZXcgb25lIHNwZWNpZmllZCBieSBgY2FsbGJhY2tgLlxuICAgICAqIEBwYXJhbSBvYmplY3RcbiAgICAgKiBAcGFyYW0gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9vdmVycmlkZShvYmplY3QsIG1ldGhvZE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIG9iamVjdFttZXRob2ROYW1lXSA9IGNhbGxiYWNrKG9iamVjdFttZXRob2ROYW1lXSlcbiAgICB9XG5cbn1cbiJdfQ==
