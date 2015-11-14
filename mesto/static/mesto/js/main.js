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

var _topNewsDirectivesSlider = require('./topNews/directives/slider');

var _topNewsDirectivesDraggController = require('./topNews/directives/draggController');

var _topNewsDirectivesHorizontalScroll = require('./topNews/directives/horizontalScroll');

var _utilsRegister = require('./utils/register');

var _feedBackDirectivesFeedBack = require('./feedBack/directives/feedBack');

var _clickFadeDirectivesClickFade = require('./clickFade/directives/clickFade');

var _feedBackServicesPopUpService = require('./feedBack/services/popUpService');

var _feedBackServicesFeedbackResource = require('./feedBack/services/feedbackResource');

var _feedBackControllersFormController = require('./feedBack/controllers/FormController');

var _mainPageDirectivesLogoDirectives = require('./mainPage/directives/logoDirectives');

var app = angular.module('mesto', ['ngResource']);

(0, _utilsRegister.register)('mesto').directive('sliderMain', _topNewsDirectivesSlider.SliderMain).directive('sliderControll', _topNewsDirectivesSlider.SliderControll).directive('sliderContent', _topNewsDirectivesSlider.SliderContent).directive('sliderItem', _topNewsDirectivesSlider.SliderItem).directive('draggController', _topNewsDirectivesDraggController.DraggController).directive('horizontalScroll', _topNewsDirectivesHorizontalScroll.HorizontalScroll).directive('mestoFeedbackItem', _feedBackDirectivesFeedBack.MestoFeedbackItem).directive('mestoFeedbackToggle', _feedBackDirectivesFeedBack.MestoFeedbackToggle).directive('mestoFeedbackClose', _feedBackDirectivesFeedBack.MestoFeedbackClose).directive('mestoFeedbackContanier', _feedBackDirectivesFeedBack.MestoFeedbackContnier).service('popUpSerivice', _feedBackServicesPopUpService.PopUpService).service('feedbackResource', _feedBackServicesFeedbackResource.FeedbackResource).controller('feedbackFormController', _feedBackControllersFormController.FeedbackFormController).directive('mestoClickFade', _clickFadeDirectivesClickFade.MestoClickFade).directive('mestoLogoHover', _mainPageDirectivesLogoDirectives.SVGLogoHover).directive('mestoSvgItem', _mainPageDirectivesLogoDirectives.SVGLogoItem).directive('mestoSvgLogo', _mainPageDirectivesLogoDirectives.SVGLogoContanier).directive('mestoSvgBackground', _mainPageDirectivesLogoDirectives.SVGLogoBackground);

app.config(["$resourceProvider", "$httpProvider", function ($resourceProvider, $httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
angular.element(document).ready(angular.bootstrap.bind(angular, document, ['mesto']));

},{"./clickFade/directives/clickFade":1,"./feedBack/controllers/FormController":2,"./feedBack/directives/feedBack":3,"./feedBack/services/feedbackResource":4,"./feedBack/services/popUpService":5,"./mainPage/directives/logoDirectives":7,"./topNews/directives/draggController":8,"./topNews/directives/horizontalScroll":9,"./topNews/directives/slider":10,"./utils/register":11}],7:[function(require,module,exports){
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
                console.log([delta, deltaX, deltaY]);
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    if (count > 1) {
                        element.scrollLeft = element.scrollLeft - delta_sum / count;
                    } else {
                        element.scrollLeft = element.scrollLeft - delta_sum * count;
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
    }

    _createClass(SliderController, [{
        key: 'moveToSlide',
        value: function moveToSlide(position) {
            this.scrollHandler(this.items[position].elem.offsetLeft);
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
    function SliderContent() {
        _classCallCheck(this, SliderContent);

        this.require = '^sliderMain';
        this.restrict = 'A';
    }

    _createClass(SliderContent, [{
        key: 'link',
        value: function link(scope, element, attrs, sliderMain) {
            sliderMain.addContent(function (val) {
                element[0].scrollLeft = val;
            });
        }
    }]);

    return SliderContent;
})();

exports.SliderContent = SliderContent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2suanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpbi5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpblBhZ2UvZGlyZWN0aXZlcy9sb2dvRGlyZWN0aXZlcy5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9kaXJlY3RpdmVzL2RyYWdnQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9kaXJlY3RpdmVzL2hvcml6b250YWxTY3JvbGwuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9zbGlkZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3V0aWxzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQ0FhLGNBQWM7YUFBZCxjQUFjOzhCQUFkLGNBQWM7OztpQkFBZCxjQUFjOztlQU9uQixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3hCLHNCQUFVLENBQUMsWUFBSTtBQUNYLHVCQUFPLENBQ0YsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTthQUM5QyxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQixtQkFBTyxDQUNGLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQ25DLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUM3QixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQVMsQ0FBQyxFQUFDO0FBQ3BCLGlCQUFDLENBQUMsY0FBYyxFQUFFLENBQUE7QUFDbEIsb0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDcEMsdUJBQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQzNDLDBCQUFVLENBQUMsWUFBSTtBQUNYLDBCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7aUJBQy9CLEVBQUUsR0FBRyxDQUFDLENBQUM7YUFDWCxDQUFDLENBQUM7U0FDVjs7O2FBdEJpQixlQUFHO0FBQ2pCLG1CQUFPLEdBQUcsQ0FBQztTQUNkOzs7YUFDb0IsZUFBRztBQUNwQixtQkFBTyxNQUFNLENBQUM7U0FDakI7OztXQU5RLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBZCxzQkFBc0I7OztBQUVwQixhQUZGLHNCQUFzQixDQUVuQixNQUFNLEVBQUUsZ0JBQWdCLEVBQUU7OEJBRjdCLHNCQUFzQjs7QUFHM0IsWUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0FBQ3pDLFlBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ25CLFlBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3hCOztpQkFQUSxzQkFBc0I7O2VBUXpCLGdCQUFDLElBQUksRUFBQzs7O0FBQ1IsZ0JBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNmLG9CQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDcEIsTUFBTTtBQUNILG9CQUFJLFFBQVEsR0FBRyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEQsd0JBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FDWCxJQUFJLENBQUMsWUFBSztBQUNQLDBCQUFLLE9BQU8sR0FBRyxJQUFJLENBQUM7aUJBQ3ZCLENBQUMsU0FDSSxDQUFDLFVBQUMsUUFBUSxFQUFLO0FBQ2pCLDBCQUFLLEtBQUssR0FBRyxRQUFRLENBQUM7aUJBQ3pCLENBQUMsQ0FBQTthQUNUO1NBQ0o7OztXQXJCUSxzQkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBdEIsbUJBQW1COzs7QUFFakIsYUFGRixtQkFBbUIsQ0FFaEIsYUFBYSxFQUFFOzhCQUZsQixtQkFBbUI7O0FBR3hCLFlBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ3BCLFlBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0tBQ3RDOztpQkFMUSxtQkFBbUI7O2VBTXhCLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDeEIsZ0JBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQzNCLFVBQVUsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUMzQyxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztTQUN6RDs7O1dBVlEsbUJBQW1COzs7OztJQVluQixxQkFBcUI7aUJBQXJCLHFCQUFxQjs7YUFDUCxlQUFHO0FBQ3RCLG1CQUFPLFlBQVksQ0FBQztTQUN2Qjs7Ozs7QUFHVSxhQU5GLHFCQUFxQixDQU1sQixhQUFhLEVBQUU7OEJBTmxCLHFCQUFxQjs7QUFPMUIsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDcEIsWUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7S0FDdEM7O2lCQVRRLHFCQUFxQjs7ZUFVMUIsY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN4QixnQkFBSSxPQUFPLEdBQUcsU0FBVixPQUFPLEdBQVM7QUFDaEIsdUJBQU8sQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0QsQ0FBQTtBQUNELGdCQUFJLENBQUMsYUFBYSxDQUNiLFlBQVksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDNUQ7OztXQWhCUSxxQkFBcUI7Ozs7O0lBa0JyQixrQkFBa0I7OztBQUVoQixhQUZGLGtCQUFrQixDQUVmLGFBQWEsRUFBRTs4QkFGbEIsa0JBQWtCOztBQUd2QixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztLQUN0Qzs7aUJBTFEsa0JBQWtCOztlQU12QixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3hCLGdCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNqRSxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztTQUN6RDs7O1dBVFEsa0JBQWtCOzs7OztJQVdsQixpQkFBaUI7aUJBQWpCLGlCQUFpQjs7YUFDSCxlQUFHO0FBQ3RCLG1CQUFPLFFBQVEsQ0FBQztTQUNuQjs7Ozs7QUFHVSxhQU5GLGlCQUFpQixDQU1kLGFBQWEsRUFBRTs4QkFObEIsaUJBQWlCOztBQU90QixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztLQUN0Qzs7aUJBVFEsaUJBQWlCOztlQVVwQixrQkFBRztBQUNMLGdCQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM1RDs7O2VBQ0csY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN4QixnQkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsZ0JBQUksQ0FBQyxhQUFhLENBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2pFOzs7V0FqQlEsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztJQ3pDakIsZ0JBQWdCOztBQUVkLFNBRkYsZ0JBQWdCLENBRWIsU0FBUyxFQUFFOzBCQUZkLGdCQUFnQjs7QUFHckIsV0FBTyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztDQUM5Qzs7Ozs7Ozs7Ozs7Ozs7O0lDSkMsS0FBSztBQUNJLGFBRFQsS0FBSyxDQUNLLFdBQVcsRUFBQzs4QkFEdEIsS0FBSzs7QUFFSCxZQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztLQUNsQzs7aUJBSEMsS0FBSzs7ZUFJRyxzQkFBRztBQUNULGdCQUFJLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTtBQUN4QixxQkFBSyxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDNUI7QUFDRCxnQkFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCOzs7V0FUQyxLQUFLOzs7SUFXRSxZQUFZO0FBQ1YsYUFERixZQUFZLEdBQ1A7OEJBREwsWUFBWTs7QUFFakIsWUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7S0FDcEI7O2lCQUhRLFlBQVk7O2VBSWQsaUJBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUN2QixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5Qzs7O2VBQ0ksZUFBQyxRQUFRLEVBQUU7OztBQUNaLGdCQUFJLENBQUMsUUFBUSxFQUFFO0FBQ1gsc0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRztBQUNwQywwQkFBSyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ2pDLENBQUMsQ0FBQTtBQUNGLHVCQUFPO2FBQ1Y7QUFDRCxtQkFBTyxVQUFDLENBQUMsRUFBSztBQUNWLG9CQUFJLEtBQUssR0FBRyxNQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUNqQyxvQkFBSSxLQUFLLEVBQUU7QUFDUCxxQkFBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLHlCQUFLLENBQUMsVUFBVSxFQUFFLENBQUE7aUJBQ3JCO2FBQ0osQ0FBQTtTQUNKOzs7ZUFDVyxzQkFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFO0FBQzVCLGlCQUFLLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDO1NBQ25DOzs7ZUFDUyxvQkFBQyxTQUFTLEVBQUU7OztBQUNsQixtQkFBTyxVQUFDLENBQUMsRUFBSztBQUNWLGlCQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsaUJBQUMsQ0FBQyxPQUFLLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQSxDQUMxQixPQUFPLENBQUMsVUFBQyxLQUFLLEVBQUc7QUFDZix5QkFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNyQixDQUFDLENBQUE7YUFDVCxDQUFBO1NBQ0o7OztXQWpDUSxZQUFZOzs7Ozs7Ozt1Q0NObEIsNkJBQTZCOztnREFDSixzQ0FBc0M7O2lEQUNyQyx1Q0FBdUM7OzZCQUMvQyxrQkFBa0I7OzBDQU1wQyxnQ0FBZ0M7OzRDQUNSLGtDQUFrQzs7NENBQ3BDLGtDQUFrQzs7Z0RBQzlCLHNDQUFzQzs7aURBQ2hDLHVDQUF1Qzs7Z0RBT3ZFLHNDQUFzQzs7QUFFN0MsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDOztBQUVsRCw2QkFBUyxPQUFPLENBQUMsQ0FDWixTQUFTLENBQUMsWUFBWSxzQ0FBYSxDQUNuQyxTQUFTLENBQUMsZ0JBQWdCLDBDQUFpQixDQUMzQyxTQUFTLENBQUMsZUFBZSx5Q0FBZ0IsQ0FDekMsU0FBUyxDQUFDLFlBQVksc0NBQWEsQ0FDbkMsU0FBUyxDQUFDLGlCQUFpQixvREFBa0IsQ0FFN0MsU0FBUyxDQUFDLGtCQUFrQixzREFBbUIsQ0FFL0MsU0FBUyxDQUFDLG1CQUFtQixnREFBb0IsQ0FDakQsU0FBUyxDQUFDLHFCQUFxQixrREFBc0IsQ0FDckQsU0FBUyxDQUFDLG9CQUFvQixpREFBcUIsQ0FDbkQsU0FBUyxDQUFDLHdCQUF3QixvREFBd0IsQ0FDMUQsT0FBTyxDQUFDLGVBQWUsNkNBQWUsQ0FFdEMsT0FBTyxDQUFDLGtCQUFrQixxREFBbUIsQ0FDN0MsVUFBVSxDQUFDLHdCQUF3Qiw0REFBeUIsQ0FFNUQsU0FBUyxDQUFDLGdCQUFnQiwrQ0FBaUIsQ0FFM0MsU0FBUyxDQUFDLGdCQUFnQixpREFBZSxDQUN6QyxTQUFTLENBQUMsY0FBYyxnREFBYyxDQUN0QyxTQUFTLENBQUMsY0FBYyxxREFBbUIsQ0FDM0MsU0FBUyxDQUFDLG9CQUFvQixzREFBb0IsQ0FBQTs7QUFFdkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFDLGlCQUFpQixFQUFFLGFBQWEsRUFBSTtBQUM1QyxpQkFBYSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO0FBQ3BELGlCQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7QUFDdEQscUJBQWlCLENBQUMsUUFBUSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztDQUMzRCxDQUFDLENBQUE7QUFDRixPQUFPLENBQ0YsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUM3RDNELGNBQWM7QUFDTCxhQURULGNBQWMsR0FDRjs4QkFEWixjQUFjOztBQUVaLFlBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFlBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOztpQkFKQyxjQUFjOztlQUtSLGtCQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDaEIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDO1NBQzVCOzs7ZUFDTSxpQkFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ2hCLGdCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMzQjs7O2VBQ1ksdUJBQUMsSUFBSSxFQUFFLElBQUksRUFBQztBQUNyQixnQkFBSSxDQUFDLFVBQVUsR0FBRztBQUNkLG9CQUFJLEVBQUUsSUFBSTtBQUNWLG9CQUFJLEVBQUUsSUFBSTthQUNiLENBQUE7U0FDSjs7O2VBQ00sbUJBQUc7OztBQUNOLGtCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUc7QUFDbkMsc0JBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQzlCLENBQUMsQ0FBQztBQUNILGdCQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzFCOzs7ZUFDSSxlQUFDLElBQUksRUFBRTtBQUNSLGdCQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDekMsZ0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDN0I7OztlQUNHLGNBQUMsSUFBSSxFQUFFO0FBQ1AsZ0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDNUI7OztlQUNhLG1CQUFVOzhDQUFOLElBQUk7QUFBSixvQkFBSTs7O0FBQ2xCLDBCQUFjLENBQUMsUUFBUSxvQkFBTyxjQUFjLGdCQUFJLElBQUksS0FBQyxDQUFDO0FBQ3RELG1CQUFPLGNBQWMsQ0FBQyxRQUFRLENBQUM7U0FDbEM7OztXQWpDQyxjQUFjOzs7SUFtQ1AsZ0JBQWdCLEdBQ2QsU0FERixnQkFBZ0IsR0FDWjswQkFESixnQkFBZ0I7O0FBRXJCLFFBQUksQ0FBQyxVQUFVLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQztBQUN6QyxRQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztDQUN2Qjs7OztJQUVRLGlCQUFpQjtpQkFBakIsaUJBQWlCOzthQUNILGVBQUU7QUFDckIsbUJBQU8sUUFBUSxDQUFDO1NBQ25COzs7QUFDVSxhQUpGLGlCQUFpQixHQUlaOzhCQUpMLGlCQUFpQjs7QUFLdEIsWUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDL0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7S0FDdkI7O2lCQVBRLGlCQUFpQjs7ZUFRdEIsY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7QUFDcEMsc0JBQVUsQ0FBQyxhQUFhLENBQUMsVUFBQyxHQUFHLEVBQUc7QUFDNUIsdUJBQU8sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDakQsdUJBQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxZQUFVLEdBQUcsU0FBTSxNQUFNLENBQUMsQ0FBQzthQUNqRSxFQUFFLFlBQUk7QUFDSCx1QkFBTyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUN2RCxDQUFDLENBQUM7U0FDTjs7O1dBZlEsaUJBQWlCOzs7OztJQWlCakIsWUFBWTtBQUNWLGFBREYsWUFBWSxHQUNSOzhCQURKLFlBQVk7O0FBRWpCLFlBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO0FBQy9CLFlBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0tBQ3ZCOztpQkFKUSxZQUFZOztlQUtqQixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUNwQyxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBSTtBQUN6QiwwQkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDMUMsQ0FBQyxDQUFDO0FBQ0gsbUJBQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQUk7QUFDekIsMEJBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzVDLENBQUMsQ0FBQztBQUNILG1CQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFJO0FBQ3BCLDBCQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUN6QyxDQUFDLENBQUM7U0FDTjs7O1dBZlEsWUFBWTs7Ozs7SUFpQlosV0FBVztBQUNULGFBREYsV0FBVyxHQUNQOzhCQURKLFdBQVc7O0FBRWhCLFlBQUksQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO0FBQy9CLFlBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0tBQ3ZCOztpQkFKUSxXQUFXOztlQUtoQixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUNwQyxzQkFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFO0FBQ25DLHFCQUFLLEVBQUUsaUJBQUk7QUFDUCwwQkFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDckM7QUFDRCxzQkFBTSxFQUFFLGtCQUFJO0FBQ1IsMkJBQU8sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3BEO0FBQ0Qsd0JBQVEsRUFBRSxvQkFBSTtBQUNWLDJCQUFPLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUN2RDthQUNKLENBQUMsQ0FBQztBQUNILGdCQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPOztBQUUxQixnQkFBSSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUN0QixlQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFlBQUk7QUFDN0IsMEJBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDekQsQ0FBQyxDQUFDO0FBQ0gsZUFBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ3ZCLGdCQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUU7QUFDYiwwQkFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6RDtTQUNKOzs7V0EzQlEsV0FBVzs7Ozs7Ozs7Ozs7Ozs7OztJQzNFWCxlQUFlO0FBQ2IsYUFERixlQUFlLEdBQ1g7OEJBREosZUFBZTs7QUFFcEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDcEIsWUFBSSxDQUFDLE9BQU8sR0FBRyxjQUFjLENBQUM7S0FDakM7O2lCQUpRLGVBQWU7O2VBS3BCLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0FBQ3BDLGdCQUFJLFVBQVUsR0FBRyxDQUFDO2dCQUNkLFVBQVUsR0FBRyxDQUFDO2dCQUNkLElBQUksR0FBRyxDQUFDLENBQUM7QUFDYixtQkFBTyxDQUNGLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBQyxDQUFDLEVBQUs7QUFDckIsb0JBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsMEJBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO0FBQzNCLDBCQUFVLEdBQUcsVUFBVSxDQUFDO0FBQ3hCLG9CQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQ1osQ0FBQyxDQUNELEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxDQUFDLEVBQUs7QUFDcEIsb0JBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEMsb0JBQUksVUFBVSxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7QUFDN0Isd0JBQUksSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUNuQyw4QkFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBQzlCLENBQUM7YUFDTCxDQUFDLENBQ0QsRUFBRSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUMsRUFBSztBQUNuQixvQkFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxVQUFVLEVBQUU7QUFDcEMsd0JBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtBQUNWLGtDQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN0QixNQUNJO0FBQ0Qsa0NBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdkI7QUFDRCx3QkFBSSxHQUFHLENBQUMsQ0FBQztpQkFDWjtBQUNELG9CQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLDBCQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUMzQixvQkFBSSxHQUFHLENBQUMsQ0FBQzthQUNaLENBQUMsQ0FBQztTQUNWOzs7V0FyQ1EsZUFBZTs7Ozs7Ozs7Ozs7Ozs7OztJQ0FmLGdCQUFnQjtBQUNkLGFBREYsZ0JBQWdCLEdBQ1o7OEJBREosZ0JBQWdCOztBQUVyQixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQTtLQUN0Qjs7aUJBSFEsZ0JBQWdCOztlQUlyQixjQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3pCLGdCQUFJLE9BQU87Z0JBQ1AsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLFNBQVMsR0FBRyxDQUFDO2dCQUNiLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxtQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRztBQUMvQyxvQkFBSSxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDbkIsZ0NBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0Qiw2QkFBUyxHQUFHLENBQUMsQ0FBQztBQUNkLHlCQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsMkJBQU87aUJBQ1Y7QUFDRCxpQkFBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLHlCQUFTLElBQUksTUFBTSxHQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDNUIscUJBQUssSUFBSSxDQUFDLENBQUM7QUFDWCx1QkFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUNyQyw0QkFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3RCLHVCQUFPLEdBQUcsVUFBVSxDQUFDLFlBQVU7QUFDM0Isd0JBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtBQUNYLCtCQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFDLEtBQUssQ0FBQztxQkFDN0QsTUFBTTtBQUNILCtCQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFDLEtBQUssQ0FBQztxQkFDN0Q7QUFDRCw2QkFBUyxHQUFHLENBQUMsQ0FBQztBQUNkLHlCQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUNiLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFFVCxDQUFDLENBQUE7U0FDTDs7O1dBaENRLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBdkIsZ0JBQWdCO0FBQ1AsYUFEVCxnQkFBZ0IsR0FDSjs4QkFEWixnQkFBZ0I7O0FBRWQsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsWUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7S0FDbEI7O2lCQUpDLGdCQUFnQjs7ZUFLUCxxQkFBQyxRQUFRLEVBQUM7QUFDakIsZ0JBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDNUQ7OztlQUNNLGlCQUFDLElBQUksRUFBRTs7O0FBQ1YsZ0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3JCLG1CQUFPLFlBQU07QUFDVCxzQkFBSyxXQUFXLENBQUMsTUFBSyxLQUFLLENBQUMsQ0FBQzthQUNoQyxDQUFBO1NBQ0o7OztlQUNTLG9CQUFDLE9BQU8sRUFBRTtBQUNoQixnQkFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7U0FDaEM7OztlQUNHLGNBQUMsS0FBSyxFQUFFO0FBQ1IsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzlCLGdCQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUMzQixvQkFBSSxHQUFHLENBQUMsQ0FBQzthQUNaLE1BQU0sSUFBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFO0FBQ2hCLG9CQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDO0FBQ0QsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLGdCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQzs7O2VBQ1ksdUJBQUMsS0FBSyxFQUFFOzs7QUFDakIsZ0JBQUksT0FBTyxHQUFHLFNBQVYsT0FBTyxDQUFJLENBQUMsRUFBSztBQUNqQix1QkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEIsQ0FBQTtBQUNELG1CQUFPLE9BQU8sQ0FBQztTQUNsQjs7O2VBQ2EsbUJBQVU7OENBQU4sSUFBSTtBQUFKLG9CQUFJOzs7QUFDbEIsNEJBQWdCLENBQUMsUUFBUSxvQkFBTyxnQkFBZ0IsZ0JBQUksSUFBSSxLQUFDLENBQUM7QUFDMUQsbUJBQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1NBQ3BDOzs7V0FwQ0MsZ0JBQWdCOzs7SUFzQ1QsVUFBVSxHQUNSLFNBREYsVUFBVSxHQUNMOzBCQURMLFVBQVU7O0FBRWYsUUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDcEIsUUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7Q0FDOUM7Ozs7SUFFUSxhQUFhO0FBQ1gsYUFERixhQUFhLEdBQ1I7OEJBREwsYUFBYTs7QUFFbEIsWUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7QUFDN0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7S0FDdkI7O2lCQUpRLGFBQWE7O2VBS2xCLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0FBQ3BDLHNCQUFVLENBQUMsVUFBVSxDQUFDLFVBQUMsR0FBRyxFQUFHO0FBQ3pCLHVCQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTthQUM5QixDQUFDLENBQUE7U0FDTDs7O1dBVFEsYUFBYTs7Ozs7SUFZYixVQUFVO0FBRVIsYUFGRixVQUFVLENBRVAsT0FBTyxFQUFFOzhCQUZaLFVBQVU7O0FBR2YsWUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7QUFDN0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDcEIsWUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzNDOztpQkFOUSxVQUFVOztlQU9mLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0FBQ3BDLGdCQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO0FBQzdCLG9CQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUNuQixDQUFDLENBQUM7QUFDSCxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBTTtBQUN2Qix1QkFBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTthQUMzQixDQUFDLENBQUM7QUFDSCxrQkFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7OztXQWZRLFVBQVU7Ozs7O0lBa0JWLGNBQWM7QUFDWixhQURGLGNBQWMsR0FDVDs4QkFETCxjQUFjOztBQUVuQixZQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUM3QixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztLQUN2Qjs7aUJBSlEsY0FBYzs7ZUFLbkIsY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7QUFDcEMsZ0JBQUksT0FBTyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDN0QsbUJBQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtTQUNoRDs7O1dBUlEsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RXBCLFNBQVMsUUFBUSxDQUFDLE9BQU8sRUFBRTs7QUFFOUIsUUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFbEMsV0FBTztBQUNILGlCQUFTLEVBQUUsU0FBUztBQUNwQixrQkFBVSxFQUFFLFVBQVU7QUFDdEIsZUFBTyxFQUFFLE9BQU87QUFDaEIsZ0JBQVEsRUFBRSxRQUFRO0FBQ2xCLGVBQU8sRUFBRSxPQUFPO0tBQ25CLENBQUM7O0FBRUYsYUFBUyxTQUFTLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTs7QUFFcEMscUJBQWEsR0FBRyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFckQsWUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFOztBQUVsQyx5QkFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsWUFBTSxFQUFFLENBQUM7U0FDOUM7O0FBRUQsWUFBSSxpQkFBaUIsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7Ozs7O0FBTXhFLGlCQUFTLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsWUFBWTtBQUN0RCxtQkFBTyxZQUFZO0FBQ2YsaUNBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQzs7QUFFekMsb0JBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDOUIsMkJBQU8sYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNsRDthQUNKLENBQUM7U0FDTCxDQUFDLENBQUM7O0FBRUgsWUFBSSxZQUFZLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRXRELFdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2xDLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBRUQsYUFBUyxVQUFVLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtBQUNwQyxXQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNuQyxlQUFPLElBQUksQ0FBQztLQUNmOztBQUVELGFBQVMsT0FBTyxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7QUFDakMsV0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDaEMsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFFRCxhQUFTLFFBQVEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO0FBQ25DLFdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ2xDLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBRUQsYUFBUyxPQUFPLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtBQUNsQyxxQkFBYSxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3JELFlBQUksWUFBWSxHQUFHLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3RELFdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2hDLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7Ozs7Ozs7Ozs7QUFVRCxhQUFTLHFCQUFxQixDQUFDLEtBQUssRUFBRTtBQUNsQyxZQUFJLGFBQWEsQ0FBQzs7QUFFbEIsWUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLEtBQUssRUFBRTs7QUFFN0IsZ0JBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDaEQseUJBQWEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN4Qyx5QkFBYSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7U0FDcEMsTUFBTTtBQUNILHlCQUFhLEdBQUcsS0FBSyxDQUFDO1NBQ3pCOztBQUVELGVBQU8sYUFBYSxDQUFDO0tBQ3hCOzs7Ozs7Ozs7Ozs7O0FBYUQsYUFBUyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUU7O0FBRXhDLFlBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ3ZDLFlBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7O0FBR2hDLG9CQUFZLENBQUMsSUFBSSxDQUFDLFlBQWE7OENBQVQsSUFBSTtBQUFKLG9CQUFJOzs7O0FBRXRCLGdCQUFJLFFBQVEsb0JBQU8sYUFBYSxnQkFBSSxJQUFJLEtBQUMsQ0FBQztBQUMxQyxpQkFBSyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUU7QUFDdEIsd0JBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakM7QUFDRCxtQkFBTyxRQUFRLENBQUM7U0FDbkIsQ0FBQyxDQUFDOztBQUVILGVBQU8sWUFBWSxDQUFDO0tBQ3ZCOzs7Ozs7O0FBT0QsYUFBUyxjQUFjLENBQUMsUUFBUSxFQUFFO0FBQzlCLGVBQU8sWUFBVztBQUNkLG1CQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzFDLENBQUM7S0FDTDs7Ozs7Ozs7QUFRRCxhQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtBQUM3QyxjQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0tBQ3BEO0NBRUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNsYXNzIE1lc3RvQ2xpY2tGYWRlIHtcbiAgICBzdGF0aWMgZ2V0IFRJTUVPVVQoKSB7XG4gICAgICAgIHJldHVybiAyMDA7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRkFERV9DTEFTUygpIHtcbiAgICAgICAgcmV0dXJuICdmYWRlJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhNZXN0b0NsaWNrRmFkZS5GQURFX0NMQVNTKVxuICAgICAgICB9LCBNZXN0b0NsaWNrRmFkZS5USU1FT1VUKTtcbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLmFkZENsYXNzKE1lc3RvQ2xpY2tGYWRlLkZBREVfQ0xBU1MpXG4gICAgICAgICAgICAuZmluZCgnYS5mYWRlQW5pbWF0b3JfX2FuY29yJylcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBsZXQgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKE1lc3RvQ2xpY2tGYWRlLkZBREVfQ0xBU1MpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGZWVkYmFja0Zvcm1Db250cm9sbGVyIHsgXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgZmVlZGJhY2tSZXNvdXJjZSkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrUmVzb3VyY2UgPSBmZWVkYmFja1Jlc291cmNlO1xuICAgICAgICB0aGlzLmZvcm1EYXRhID0ge307XG4gICAgICAgIHRoaXMuZXJyb3JzID0gJyc7XG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlO1xuICAgIH1cbiAgICBzdWJtaXQoZm9ybSl7XG4gICAgICAgIGlmIChmb3JtLiRpbnZhbGlkKSB7XG4gICAgICAgICAgICBmb3JtLiRzZXREaXJ0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZlZWRiYWNrID0gbmV3IHRoaXMuZmVlZGJhY2tSZXNvdXJjZSh0aGlzLmZvcm1EYXRhKTtcbiAgICAgICAgICAgIGZlZWRiYWNrLiRzYXZlKClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja1RvZ2dsZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKHBvcFVwU2VyaXZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlID0gcG9wVXBTZXJpdmljZTtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSB0aGlzLnBvcFVwU2VyaXZpY2VcbiAgICAgICAgICAgIC5hZGRUb2dnbGVyKGF0dHJzLm1lc3RvRmVlZGJhY2tUb2dnbGUpO1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZCh0aGlzLnBvcFVwU2VyaXZpY2UpKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0NvbnRuaWVyIHtcbiAgICBzdGF0aWMgZ2V0IFRPR0dMRV9DTEFTUygpIHtcbiAgICAgICAgcmV0dXJuICdmaXhlZFBvcFVwJzsgXG4gICAgfVxuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKHBvcFVwU2VyaXZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlID0gcG9wVXBTZXJpdmljZTtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnRvZ2dsZUNsYXNzKE1lc3RvRmVlZGJhY2tDb250bmllci5UT0dHTEVfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZENvbnRhbmllcihhdHRycy5tZXN0b0ZlZWRiYWNrQ29udGFuaWVyLCBoYW5kbGVyKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0Nsb3NlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMucG9wVXBTZXJpdmljZS5jbG9zZShhdHRycy5tZXN0b0ZlZWRiYWNrQ2xvc2UpO1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZCh0aGlzLnBvcFVwU2VyaXZpY2UpKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0l0ZW0ge1xuICAgIHN0YXRpYyBnZXQgVE9HR0xFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgfVxuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKHBvcFVwU2VyaXZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlID0gcG9wVXBTZXJpdmljZTtcbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudG9nZ2xlQ2xhc3MoTWVzdG9GZWVkYmFja0l0ZW0uVE9HR0xFX0NMQVNTKTtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlXG4gICAgICAgICAgICAuYWRkSXRlbShhdHRycy5tZXN0b0ZlZWRiYWNrSXRlbSwgdGhpcy50b2dnbGUuYmluZCh0aGlzKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZlZWRiYWNrUmVzb3VyY2Uge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3RvcigkcmVzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuICRyZXNvdXJjZShDT05GSUcudXJscy5mZWVkYmFja0Zvcm0pO1xuICAgIH1cbn1cbiIsImNsYXNzIFBvcFVwIHtcbiAgICBjb25zdHJ1Y3RvcihpdGVtSGFuZGxlcil7XG4gICAgICAgIHRoaXMuaXRlbUhhbmRsZXIgPSBpdGVtSGFuZGxlcjtcbiAgICB9XG4gICAgdG9nZ2xlSXRlbSgpIHtcbiAgICAgICAgaWYgKFBvcFVwLmNvbnRhbmllckhhbmRsZXIpIHtcbiAgICAgICAgICAgIFBvcFVwLmNvbnRhbmllckhhbmRsZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1IYW5kbGVyKCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFBvcFVwU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucG9wVXBzID0ge307XG4gICAgfVxuICAgIGFkZEl0ZW0oaXRlbU5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5wb3BVcHNbaXRlbU5hbWVdID0gbmV3IFBvcFVwKGhhbmRsZXIpO1xuICAgIH1cbiAgICBjbG9zZShpdGVtTmFtZSkge1xuICAgICAgICBpZiAoIWl0ZW1OYW1lKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBvcFVwcykuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgICAgIHRoaXMucG9wVXBzW2tleV0udG9nZ2xlSXRlbSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3BVcCA9IHRoaXMucG9wVXBzW2l0ZW1OYW1lXVxuICAgICAgICAgICAgaWYgKHBvcFVwKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBvcFVwLnRvZ2dsZUl0ZW0oKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDb250YW5pZXIocG9wVXBOYW1lLCBoYW5kZXIpIHtcbiAgICAgICAgUG9wVXAuY29udGFuaWVySGFuZGxlciA9IGhhbmRlcjtcbiAgICB9XG4gICAgYWRkVG9nZ2xlcihwb3BVcE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAoW3RoaXMucG9wVXBzW3BvcFVwTmFtZV1dIHx8IFtdKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChwb3BVcCk9PntcbiAgICAgICAgICAgICAgICAgICBwb3BVcC50b2dnbGVJdGVtKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFxuICAgIFNsaWRlck1haW4sXG4gICAgU2xpZGVyQ29udGVudCxcbiAgICBTbGlkZXJDb250cm9sbCxcbiAgICBTbGlkZXJJdGVtXG59IGZyb20gJy4vdG9wTmV3cy9kaXJlY3RpdmVzL3NsaWRlcic7XG5pbXBvcnQgeyBEcmFnZ0NvbnRyb2xsZXIgfSBmcm9tICcuL3RvcE5ld3MvZGlyZWN0aXZlcy9kcmFnZ0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgSG9yaXpvbnRhbFNjcm9sbCB9IGZyb20gJy4vdG9wTmV3cy9kaXJlY3RpdmVzL2hvcml6b250YWxTY3JvbGwnO1xuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICcuL3V0aWxzL3JlZ2lzdGVyJztcbmltcG9ydCB7IFxuICAgIE1lc3RvRmVlZGJhY2tJdGVtLFxuICAgIE1lc3RvRmVlZGJhY2tUb2dnbGUsXG4gICAgTWVzdG9GZWVkYmFja0Nsb3NlLFxuICAgIE1lc3RvRmVlZGJhY2tDb250bmllclxufSBmcm9tICcuL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2snO1xuaW1wb3J0IHsgTWVzdG9DbGlja0ZhZGUgfSBmcm9tICcuL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZSc7XG5pbXBvcnQgeyBQb3BVcFNlcnZpY2UgfSBmcm9tICcuL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZSc7XG5pbXBvcnQgeyBGZWVkYmFja1Jlc291cmNlIH0gZnJvbSAnLi9mZWVkQmFjay9zZXJ2aWNlcy9mZWVkYmFja1Jlc291cmNlJztcbmltcG9ydCB7IEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIgfSBmcm9tICcuL2ZlZWRCYWNrL2NvbnRyb2xsZXJzL0Zvcm1Db250cm9sbGVyJztcblxuaW1wb3J0IHsgXG4gICAgU1ZHTG9nb0hvdmVyLFxuICAgIFNWR0xvZ29JdGVtLFxuICAgIFNWR0xvZ29Db250YW5pZXIsXG4gICAgU1ZHTG9nb0JhY2tncm91bmRcbn0gZnJvbSAnLi9tYWluUGFnZS9kaXJlY3RpdmVzL2xvZ29EaXJlY3RpdmVzJztcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdtZXN0bycsIFsnbmdSZXNvdXJjZSddKTtcblxucmVnaXN0ZXIoJ21lc3RvJylcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJNYWluJywgU2xpZGVyTWFpbilcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJDb250cm9sbCcsIFNsaWRlckNvbnRyb2xsKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckNvbnRlbnQnLCBTbGlkZXJDb250ZW50KVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckl0ZW0nLCBTbGlkZXJJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ2RyYWdnQ29udHJvbGxlcicsIERyYWdnQ29udHJvbGxlcilcblxuICAgIC5kaXJlY3RpdmUoJ2hvcml6b250YWxTY3JvbGwnLCBIb3Jpem9udGFsU2Nyb2xsKVxuXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja0l0ZW0nLCBNZXN0b0ZlZWRiYWNrSXRlbSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrVG9nZ2xlJywgTWVzdG9GZWVkYmFja1RvZ2dsZSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrQ2xvc2UnLCBNZXN0b0ZlZWRiYWNrQ2xvc2UpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja0NvbnRhbmllcicsIE1lc3RvRmVlZGJhY2tDb250bmllcilcbiAgICAuc2VydmljZSgncG9wVXBTZXJpdmljZScsIFBvcFVwU2VydmljZSlcblxuICAgIC5zZXJ2aWNlKCdmZWVkYmFja1Jlc291cmNlJywgRmVlZGJhY2tSZXNvdXJjZSlcbiAgICAuY29udHJvbGxlcignZmVlZGJhY2tGb3JtQ29udHJvbGxlcicsIEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIpXG5cbiAgICAuZGlyZWN0aXZlKCdtZXN0b0NsaWNrRmFkZScsIE1lc3RvQ2xpY2tGYWRlKVxuXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9Mb2dvSG92ZXInLCBTVkdMb2dvSG92ZXIpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9TdmdJdGVtJywgU1ZHTG9nb0l0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9TdmdMb2dvJywgU1ZHTG9nb0NvbnRhbmllcilcbiAgICAuZGlyZWN0aXZlKCdtZXN0b1N2Z0JhY2tncm91bmQnLCBTVkdMb2dvQmFja2dyb3VuZClcblxuYXBwLmNvbmZpZygoJHJlc291cmNlUHJvdmlkZXIsICRodHRwUHJvdmlkZXIpPT4ge1xuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnY3NyZnRva2VuJztcbiAgICAkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gJ1gtQ1NSRlRva2VuJztcbiAgICAkcmVzb3VyY2VQcm92aWRlci5kZWZhdWx0cy5zdHJpcFRyYWlsaW5nU2xhc2hlcyA9IGZhbHNlO1xufSlcbmFuZ3VsYXJcbiAgICAuZWxlbWVudChkb2N1bWVudClcbiAgICAucmVhZHkoYW5ndWxhci5ib290c3RyYXAuYmluZChhbmd1bGFyLCBkb2N1bWVudCwgWydtZXN0byddKSk7XG4iLCJjbGFzcyBMb2dvQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICAgICAgdGhpcy5pbWdVcmxzID0ge307XG4gICAgfVxuICAgIGFkZEltYWdlKG5hbWUsIHVybCkge1xuICAgICAgICB0aGlzLmltZ1VybHNbbmFtZV0gPSB1cmw7XG4gICAgfVxuICAgIGFkZEl0ZW0obmFtZSwgaW5mbykge1xuICAgICAgICB0aGlzLml0ZW1zW25hbWVdID0gaW5mbztcbiAgICB9XG4gICAgYWRkQmFja2dyb3VuZChzaG93LCBoaWRlKXtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0ge1xuICAgICAgICAgICAgc2hvdzogc2hvdyxcbiAgICAgICAgICAgIGhpZGU6IGhpZGVcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bmhvdmVyKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLml0ZW1zKS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2tleV0uZGlzYWJsZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oaWRlKCk7XG4gICAgfVxuICAgIGhvdmVyKG5hbWUpIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNob3codGhpcy5pbWdVcmxzW25hbWVdKTtcbiAgICAgICAgdGhpcy5pdGVtc1tuYW1lXS5hY3RpdmUoKTtcbiAgICB9XG4gICAgY2FsbChuYW1lKSB7XG4gICAgICAgIHRoaXMuaXRlbXNbbmFtZV0uY2xpY2soKTtcbiAgICB9XG4gICAgc3RhdGljIGZhY3RvcnkoLi4uYXJncykge1xuICAgICAgICBMb2dvQ29udHJvbGxlci5pbnN0YW5jZSA9IG5ldyBMb2dvQ29udHJvbGxlciguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIExvZ29Db250cm9sbGVyLmluc3RhbmNlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvQ29udGFuaWVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBMb2dvQ29udHJvbGxlci5mYWN0b3J5O1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvQmFja2dyb3VuZCB7XG4gICAgc3RhdGljIGdldCBBQ1RJVkVfQ0xBU1MoKXtcbiAgICAgICAgcmV0dXJuICdhY3RpdmUnO1xuICAgIH0gXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdebWVzdG9TdmdMb2dvJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29udHJvbGxlci5hZGRCYWNrZ3JvdW5kKCh1cmwpPT57XG4gICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICBlbGVtZW50LmNzcygnYmFja2dyb3VuZC1pbWFnZScsIHVybCA/IGB1cmwoJHt1cmx9KWAgOiAnbm9uZScpO1xuICAgICAgICB9LCAoKT0+e1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhTVkdMb2dvQmFja2dyb3VuZC5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU1ZHTG9nb0hvdmVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXm1lc3RvU3ZnTG9nbyc7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjb250cm9sbGVyKSB7XG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlZW50ZXInLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci5ob3ZlcihhdHRycy5tZXN0b0xvZ29Ib3Zlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50Lm9uKCdtb3VzZWxlYXZlJywgKCk9PntcbiAgICAgICAgICAgIGNvbnRyb2xsZXIudW5ob3ZlcihhdHRycy5tZXN0b0xvZ29Ib3Zlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBjb250cm9sbGVyLmNhbGwoYXR0cnMubWVzdG9Mb2dvSG92ZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU1ZHTG9nb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdebWVzdG9TdmdMb2dvJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29udHJvbGxlci5hZGRJdGVtKGF0dHJzLm1lc3RvU3ZnSXRlbSwge1xuICAgICAgICAgICAgY2xpY2s6ICgpPT57XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhdHRycy5ocmVmO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGl2ZTogKCk9PntcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICgpPT57XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhTVkdMb2dvQmFja2dyb3VuZC5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFhdHRycy5pbWdVcmwpIHJldHVybjtcblxuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkSW1hZ2UoYXR0cnMubWVzdG9TdmdJdGVtLCBhdHRycy5pbWdVcmwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1nLnNyYyA9IGF0dHJzLmltZ1VybDtcbiAgICAgICAgaWYoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmFkZEltYWdlKGF0dHJzLm1lc3RvU3ZnSXRlbSwgYXR0cnMuaW1nVXJsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBEcmFnZ0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdeP3NsaWRlck1haW4nO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICB2YXIgZGVsdGFfaW5mbyA9IDAsXG4gICAgICAgICAgICBzdGFydF9pbmZvID0gMCxcbiAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAub24oJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgZGVsdGFfaW5mbyA9IHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgc3RhcnRfaW5mbyA9IGRlbHRhX2luZm87XG4gICAgICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhX2luZm8gIT0gdG91Y2guc2NyZWVuWCkge1xuICAgICAgICAgICAgICAgICAgICBzdW1tICs9IGRlbHRhX2luZm8gLSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgICAgICBkZWx0YV9pbmZvID0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzdW1tKSA+IDEwMCAmJiBzbGlkZXJNYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdW1tID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyTWFpbi5uZXh0KDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyTWFpbi5uZXh0KC0xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBkZWx0YV9pbmZvID0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBIb3Jpem9udGFsU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnXG4gICAgfVxuICAgIGxpbmsoJHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICB2YXIgdGltZW91dCxcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50WzBdLFxuICAgICAgICAgICAgZGVsdGFfc3VtID0gMCxcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgSGFtc3RlcihlbGVtZW50KS53aGVlbCgoZSwgZGVsdGEsIGRlbHRhWCwgZGVsdGFZKT0+e1xuICAgICAgICAgICAgaWYgKGRlbHRhWCAmJiAhZGVsdGFZKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIGRlbHRhX3N1bSA9IDA7XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRlbHRhX3N1bSArPSBkZWx0YVkqMTIgfHwgMDtcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhbZGVsdGEsIGRlbHRhWCwgZGVsdGFZXSk7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0IC0gZGVsdGFfc3VtL2NvdW50O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCAtIGRlbHRhX3N1bSpjb3VudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVsdGFfc3VtID0gMDtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICB9LCAxKTtcblxuICAgICAgICB9KSAgICBcbiAgICB9XG59XG4iLCJjbGFzcyBTbGlkZXJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLnNsaWRlID0gMDtcbiAgICB9XG4gICAgbW92ZVRvU2xpZGUocG9zaXRpb24pe1xuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIodGhpcy5pdGVtc1twb3NpdGlvbl0uZWxlbS5vZmZzZXRMZWZ0KTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZSh0aGlzLnNsaWRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDb250ZW50KGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9XG4gICAgbmV4dChkZWx0YSkge1xuICAgICAgICBsZXQgbmV4dCA9IHRoaXMuc2xpZGUgKyBkZWx0YTtcbiAgICAgICAgaWYgKG5leHQgPj0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5leHQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYobmV4dCA8IDApIHtcbiAgICAgICAgICAgIG5leHQgPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbGlkZSA9IG5leHQ7XG4gICAgICAgIHRoaXMubW92ZVRvU2xpZGUodGhpcy5zbGlkZSk7XG4gICAgfVxuICAgIGFkZENvbnRyb2xsZXIoZGVsdGEpIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0KGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlcjtcbiAgICB9XG4gICAgc3RhdGljIGZhY3RvcnkoLi4uYXJncykge1xuICAgICAgICBTbGlkZXJDb250cm9sbGVyLmluc3RhbmNlID0gbmV3IFNsaWRlckNvbnRyb2xsZXIoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiBTbGlkZXJDb250cm9sbGVyLmluc3RhbmNlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXJNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gU2xpZGVyQ29udHJvbGxlci5mYWN0b3J5O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb250ZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgc2xpZGVyTWFpbi5hZGRDb250ZW50KCh2YWwpPT57XG4gICAgICAgICAgICBlbGVtZW50WzBdLnNjcm9sbExlZnQgPSB2YWxcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJJdGVtIHtcblxuICAgIGNvbnN0cnVjdG9yKCR3aW5kb3cpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy4kd2luZG93ID0gYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHNsaWRlck1haW4uYWRkSXRlbSh7XG4gICAgICAgICAgICBlbGVtOiBlbGVtZW50WzBdXG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50Lm9uKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVyLmJpbmQoc2xpZGVyTWFpbilcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyLmJpbmQoc2xpZGVyTWFpbikpO1xuICAgIH1cbn1cbiAgICBcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb250cm9sbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gc2xpZGVyTWFpbi5hZGRDb250cm9sbGVyKCthdHRycy5zbGlkZXJDb250cm9sbClcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBoYW5kbGVyLmJpbmQoc2xpZGVyTWFpbikpXG4gICAgfVxufVxuIiwiLyoqXG4gKiBBIGhlbHBlciBjbGFzcyB0byBzaW1wbGlmeSByZWdpc3RlcmluZyBBbmd1bGFyIGNvbXBvbmVudHMgYW5kIHByb3ZpZGUgYSBjb25zaXN0ZW50IHN5bnRheCBmb3IgZG9pbmcgc28uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlcihhcHBOYW1lKSB7XG5cbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoYXBwTmFtZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXJlY3RpdmU6IGRpcmVjdGl2ZSxcbiAgICAgICAgY29udHJvbGxlcjogY29udHJvbGxlcixcbiAgICAgICAgc2VydmljZTogc2VydmljZSxcbiAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLFxuICAgICAgICBmYWN0b3J5OiBmYWN0b3J5XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRpcmVjdGl2ZShuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG5cbiAgICAgICAgY29uc3RydWN0b3JGbiA9IF9ub3JtYWxpemVDb25zdHJ1Y3Rvcihjb25zdHJ1Y3RvckZuKTtcblxuICAgICAgICBpZiAoIWNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBlbXB0eSBjb21waWxlIGZ1bmN0aW9uIGlmIG5vbmUgd2FzIGRlZmluZWQuXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5jb21waWxlID0gKCkgPT4ge307XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3JpZ2luYWxDb21waWxlRm4gPSBfY2xvbmVGdW5jdGlvbihjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5jb21waWxlKTtcblxuICAgICAgICAvLyBEZWNvcmF0ZSB0aGUgY29tcGlsZSBtZXRob2QgdG8gYXV0b21hdGljYWxseSByZXR1cm4gdGhlIGxpbmsgbWV0aG9kIChpZiBpdCBleGlzdHMpXG4gICAgICAgIC8vIGFuZCBiaW5kIGl0IHRvIHRoZSBjb250ZXh0IG9mIHRoZSBjb25zdHJ1Y3RvciAoc28gYHRoaXNgIHdvcmtzIGNvcnJlY3RseSkuXG4gICAgICAgIC8vIFRoaXMgZ2V0cyBhcm91bmQgdGhlIHByb2JsZW0gb2YgYSBub24tbGV4aWNhbCBcInRoaXNcIiB3aGljaCBvY2N1cnMgd2hlbiB0aGUgZGlyZWN0aXZlIGNsYXNzIGl0c2VsZlxuICAgICAgICAvLyByZXR1cm5zIGB0aGlzLmxpbmtgIGZyb20gd2l0aGluIHRoZSBjb21waWxlIGZ1bmN0aW9uLlxuICAgICAgICBfb3ZlcnJpZGUoY29uc3RydWN0b3JGbi5wcm90b3R5cGUsICdjb21waWxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbENvbXBpbGVGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmxpbmsuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKTtcblxuICAgICAgICBhcHAuZGlyZWN0aXZlKG5hbWUsIGZhY3RvcnlBcnJheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnRyb2xsZXIobmFtZSwgY29udHJ1Y3RvckZuKSB7XG4gICAgICAgIGFwcC5jb250cm9sbGVyKG5hbWUsIGNvbnRydWN0b3JGbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlcnZpY2UobmFtZSwgY29udHJ1Y3RvckZuKSB7XG4gICAgICAgIGFwcC5zZXJ2aWNlKG5hbWUsIGNvbnRydWN0b3JGbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb3ZpZGVyKG5hbWUsIGNvbnN0cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLnByb3ZpZGVyKG5hbWUsIGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWN0b3J5KG5hbWUsIGNvbnN0cnVjdG9yRm4pIHtcbiAgICAgICAgY29uc3RydWN0b3JGbiA9IF9ub3JtYWxpemVDb25zdHJ1Y3Rvcihjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgdmFyIGZhY3RvcnlBcnJheSA9IF9jcmVhdGVGYWN0b3J5QXJyYXkoY29uc3RydWN0b3JGbik7XG4gICAgICAgIGFwcC5mYWN0b3J5KG5hbWUsIGZhY3RvcnlBcnJheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBjb25zdHJ1Y3RvckZuIGlzIGFuIGFycmF5IG9mIHR5cGUgWydkZXAxJywgJ2RlcDInLCAuLi4sIGNvbnN0cnVjdG9yKCkge31dXG4gICAgICogd2UgbmVlZCB0byBwdWxsIG91dCB0aGUgYXJyYXkgb2YgZGVwZW5kZW5jaWVzIGFuZCBhZGQgaXQgYXMgYW4gJGluamVjdCBwcm9wZXJ0eSBvZiB0aGVcbiAgICAgKiBhY3R1YWwgY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfbm9ybWFsaXplQ29uc3RydWN0b3IoaW5wdXQpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yRm47XG5cbiAgICAgICAgaWYgKGlucHV0LmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHZhciBpbmplY3RlZCA9IGlucHV0LnNsaWNlKDAsIGlucHV0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgY29uc3RydWN0b3JGbiA9IGlucHV0W2lucHV0Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgY29uc3RydWN0b3JGbi4kaW5qZWN0ID0gaW5qZWN0ZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuID0gaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JGbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgY29uc3RydWN0b3IgZnVuY3Rpb24gaW50byBhIGZhY3RvcnkgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIG5ldyBpbnN0YW5jZSBvZiB0aGF0XG4gICAgICogY29uc3RydWN0b3IsIHdpdGggdGhlIGNvcnJlY3QgZGVwZW5kZW5jaWVzIGF1dG9tYXRpY2FsbHkgaW5qZWN0ZWQgYXMgYXJndW1lbnRzLlxuICAgICAqXG4gICAgICogSW4gb3JkZXIgdG8gaW5qZWN0IHRoZSBkZXBlbmRlbmNpZXMsIHRoZXkgbXVzdCBiZSBhdHRhY2hlZCB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24gd2l0aCB0aGVcbiAgICAgKiBgJGluamVjdGAgcHJvcGVydHkgYW5ub3RhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25zdHJ1Y3RvckZuXG4gICAgICogQHJldHVybnMge0FycmF5LjxUPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jcmVhdGVGYWN0b3J5QXJyYXkoY29uc3RydWN0b3JGbikge1xuICAgICAgICAvLyBnZXQgdGhlIGFycmF5IG9mIGRlcGVuZGVuY2llcyB0aGF0IGFyZSBuZWVkZWQgYnkgdGhpcyBjb21wb25lbnQgKGFzIGNvbnRhaW5lZCBpbiB0aGUgYCRpbmplY3RgIGFycmF5KVxuICAgICAgICB2YXIgYXJncyA9IGNvbnN0cnVjdG9yRm4uJGluamVjdCB8fCBbXTtcbiAgICAgICAgdmFyIGZhY3RvcnlBcnJheSA9IGFyZ3Muc2xpY2UoKTsgLy8gY3JlYXRlIGEgY29weSBvZiB0aGUgYXJyYXlcbiAgICAgICAgLy8gVGhlIGZhY3RvcnlBcnJheSB1c2VzIEFuZ3VsYXIncyBhcnJheSBub3RhdGlvbiB3aGVyZWJ5IGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXkgaXMgdGhlIG5hbWUgb2YgYVxuICAgICAgICAvLyBkZXBlbmRlbmN5LCBhbmQgdGhlIGZpbmFsIGl0ZW0gaXMgdGhlIGZhY3RvcnkgZnVuY3Rpb24gaXRzZWxmLlxuICAgICAgICBmYWN0b3J5QXJyYXkucHVzaCgoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgLy9yZXR1cm4gbmV3IGNvbnN0cnVjdG9yRm4oLi4uYXJncyk7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3JGbiguLi5hcmdzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlW2tleV0gPSBpbnN0YW5jZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmFjdG9yeUFycmF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb25lIGEgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gb3JpZ2luYWxcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2Nsb25lRnVuY3Rpb24ob3JpZ2luYWwpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgYW4gb2JqZWN0J3MgbWV0aG9kIHdpdGggYSBuZXcgb25lIHNwZWNpZmllZCBieSBgY2FsbGJhY2tgLlxuICAgICAqIEBwYXJhbSBvYmplY3RcbiAgICAgKiBAcGFyYW0gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9vdmVycmlkZShvYmplY3QsIG1ldGhvZE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIG9iamVjdFttZXRob2ROYW1lXSA9IGNhbGxiYWNrKG9iamVjdFttZXRob2ROYW1lXSlcbiAgICB9XG5cbn1cbiJdfQ==
