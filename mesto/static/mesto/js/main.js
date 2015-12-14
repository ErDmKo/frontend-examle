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
            var handler = function handler(name) {
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
        value: function toggle(element) {
            element.toggleClass(MestoFeedbackItem.TOGGLE_CLASS);
        }
    }, {
        key: 'link',
        value: function link(scope, element, attrs) {
            this.element = element;
            this.popUpSerivice.addItem(attrs.mestoFeedbackItem, this.toggle.bind(this, element));
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
    function PopUp(itemHandler, name) {
        _classCallCheck(this, PopUp);

        this.name = name;
        this.itemHandler = itemHandler;
    }

    _createClass(PopUp, [{
        key: "toggleItem",
        value: function toggleItem() {
            if (PopUp.contanierHandler[this.name]) {
                PopUp.contanierHandler[this.name]();
            }
            this.itemHandler();
        }
    }]);

    return PopUp;
})();

PopUp.contanierHandler = {};

var PopUpService = (function () {
    function PopUpService() {
        _classCallCheck(this, PopUpService);

        this.popUps = {};
    }

    _createClass(PopUpService, [{
        key: "addItem",
        value: function addItem(itemName, handler) {
            this.popUps[itemName] = new PopUp(handler, itemName);
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
        value: function addContanier(popUpName, hander, index) {
            PopUp.contanierHandler[popUpName] = hander;
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

var _movieShowControllersPlayShowJs = require('./movieShow/controllers/playShow.js');

var _movieShowDirectivesCustomSelectJs = require('./movieShow/directives/customSelect.js');

var _movieShowControllersShowsFilterControllerJs = require('./movieShow/controllers/showsFilterController.js');

var app = angular.module('mesto', ['ngResource', 'youtube-embed']);

(0, _utilsRegister.register)('mesto').directive('sliderMain', _topNewsDirectivesSlider.SliderMain).directive('sliderControll', _topNewsDirectivesSlider.SliderControll).directive('sliderContent', _topNewsDirectivesSlider.SliderContent).directive('sliderItem', _topNewsDirectivesSlider.SliderItem).directive('smallSliderItem', _topNewsDirectivesSlider.SmallSliderItem).directive('uniSliderItem', _topNewsDirectivesSlider.UniSliderItem).directive('sliderCounter', _topNewsDirectivesSlider.SliderCounter).directive('draggController', _topNewsDirectivesDraggController.DraggController).directive('horizontalScroll', _topNewsDirectivesHorizontalScroll.HorizontalScroll).factory('easingAnimator', _topNewsServicesEasingAnimator.EasingAnimator).directive('mestoFeedbackItem', _feedBackDirectivesFeedBack.MestoFeedbackItem).directive('mestoFeedbackToggle', _feedBackDirectivesFeedBack.MestoFeedbackToggle).directive('mestoFeedbackClose', _feedBackDirectivesFeedBack.MestoFeedbackClose).directive('mestoFeedbackContanier', _feedBackDirectivesFeedBack.MestoFeedbackContnier).service('popUpSerivice', _feedBackServicesPopUpService.PopUpService).service('feedbackResource', _feedBackServicesFeedbackResource.FeedbackResource).controller('feedbackFormController', _feedBackControllersFormController.FeedbackFormController).directive('mestoClickFade', _clickFadeDirectivesClickFade.MestoClickFade).directive('mestoLogoHover', _mainPageDirectivesLogoDirectives.SVGLogoHover).directive('mestoSvgItem', _mainPageDirectivesLogoDirectives.SVGLogoItem).directive('mestoSvgLogo', _mainPageDirectivesLogoDirectives.SVGLogoContanier).directive('mestoSvgBackground', _mainPageDirectivesLogoDirectives.SVGLogoBackground).controller('showMovieController', _movieShowControllersPlayShowJs.ShowMovieController).directive('mestoCustomSelect', _movieShowDirectivesCustomSelectJs.MestoCustomSelect).directive('mestoCustomSelectItem', _movieShowDirectivesCustomSelectJs.MestoCustomSelectItem).directive('mestoCustomSelectPlaceholder', _movieShowDirectivesCustomSelectJs.MestoCustomSelectPlaceholder).controller('showsFilterController', _movieShowControllersShowsFilterControllerJs.ShowsFilterController);

app.config(["$resourceProvider", "$httpProvider", function ($resourceProvider, $httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
angular.element(document).ready(angular.bootstrap.bind(angular, document, ['mesto']));

},{"./clickFade/directives/clickFade":1,"./feedBack/controllers/FormController":2,"./feedBack/directives/feedBack":3,"./feedBack/services/feedbackResource":4,"./feedBack/services/popUpService":5,"./mainPage/directives/logoDirectives":7,"./movieShow/controllers/playShow.js":8,"./movieShow/controllers/showsFilterController.js":9,"./movieShow/directives/customSelect.js":10,"./topNews/directives/draggController":11,"./topNews/directives/horizontalScroll":12,"./topNews/directives/slider":13,"./topNews/services/easingAnimator":14,"./utils/register":15}],7:[function(require,module,exports){
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

var ShowMovieController = (function () {

    /*@ngInject*/

    function ShowMovieController($scope, $timeout) {
        var _this = this;

        _classCallCheck(this, ShowMovieController);

        this.$scope = $scope;
        this.$timeout = $timeout;
        this.video = {};
        $scope.$on('youtube.player.playing', function ($event, player) {
            var videoObj = _this.getVideoObj(player);
            _this.$timeout(function () {
                videoObj.active = true;
            });
        });
        $scope.$on('youtube.player.ended', function ($event, player) {
            var videoObj = _this.getVideoObj(player);
            videoObj.active = false;
        });
    }
    ShowMovieController.$inject = ["$scope", "$timeout"];

    _createClass(ShowMovieController, [{
        key: 'getVideoObj',
        value: function getVideoObj(player) {
            var videoId = player.getVideoData().video_id;
            if (!this.video[videoId]) {
                this.video[videoId] = {
                    active: false,
                    load: false
                };
            }
            return this.video[videoId];
        }
    }]);

    return ShowMovieController;
})();

exports.ShowMovieController = ShowMovieController;

},{}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ShowsFilterController = (function () {

    /*@ngInject*/

    function ShowsFilterController($window) {
        _classCallCheck(this, ShowsFilterController);

        this.$window = $window;
        this.select = {};
    }
    ShowsFilterController.$inject = ["$window"];

    _createClass(ShowsFilterController, [{
        key: 'search',
        value: function search() {
            window.location.href = window.location.href.split('?')[0] + '?' + jQuery.param(this.select);
        }
    }]);

    return ShowsFilterController;
})();

exports.ShowsFilterController = ShowsFilterController;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var _bind = Function.prototype.bind;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MestoCustomSelectController = (function () {
    function MestoCustomSelectController() {
        var _this = this;

        _classCallCheck(this, MestoCustomSelectController);

        var setPlaceholder = function setPlaceholder(text) {};

        this.toggleOpen = function () {};
        this.setPlaceholder = function (fu) {
            setPlaceholder = fu;
        };
        this.setToggleOpen = function (fu) {
            _this.toggleOpen = fu;
        };

        this.selectOption = function (text) {
            setPlaceholder(text);
        };
    }

    _createClass(MestoCustomSelectController, null, [{
        key: 'factory',
        value: function factory() {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            MestoCustomSelectController.instance = new (_bind.apply(MestoCustomSelectController, [null].concat(args)))();
            return MestoCustomSelectController.instance;
        }
    }]);

    return MestoCustomSelectController;
})();

var MestoCustomSelect = (function () {

    /*@ngInject*/

    function MestoCustomSelect($document) {
        _classCallCheck(this, MestoCustomSelect);

        this.restrict = 'A';
        this.controller = MestoCustomSelectController.factory;
        this.$document = $document;
    }
    MestoCustomSelect.$inject = ["$document"];

    _createClass(MestoCustomSelect, [{
        key: 'link',
        value: function link($scope, element, attrs, controller) {
            var _this2 = this;

            var clickHandler = function clickHandler(e) {
                var target = angular.element(e.target);
                if (!(target.is(element) || target.closest(element).length)) {
                    element.removeClass('open');
                }
            };
            controller.setToggleOpen(function () {
                element.toggleClass('open');
                if (element.hasClass('open')) {
                    angular.element(_this2.$document).on('click', clickHandler);
                } else {
                    angular.element(_this2.$document).off('click', clickHandler);
                }
            });
        }
    }]);

    return MestoCustomSelect;
})();

exports.MestoCustomSelect = MestoCustomSelect;

var MestoCustomSelectPlaceholder = (function () {
    function MestoCustomSelectPlaceholder() {
        _classCallCheck(this, MestoCustomSelectPlaceholder);

        this.restrict = 'A';
        this.require = '^mestoCustomSelect';
    }

    _createClass(MestoCustomSelectPlaceholder, [{
        key: 'link',
        value: function link($scope, element, attrs, customSelectController) {
            element.on('click', function () {
                customSelectController.toggleOpen();
            });
            customSelectController.setPlaceholder(function (text) {
                element.text(text);
                element.parent().removeClass('open');
            });
        }
    }]);

    return MestoCustomSelectPlaceholder;
})();

exports.MestoCustomSelectPlaceholder = MestoCustomSelectPlaceholder;

var MestoCustomSelectItem = (function () {
    function MestoCustomSelectItem() {
        _classCallCheck(this, MestoCustomSelectItem);

        this.restrict = 'A';
        this.require = '^mestoCustomSelect';
    }

    _createClass(MestoCustomSelectItem, [{
        key: 'link',
        value: function link($scope, element, attrs, customSelectController) {
            element.on('click', function () {
                customSelectController.selectOption(element.text());
            });
        }
    }]);

    return MestoCustomSelectItem;
})();

exports.MestoCustomSelectItem = MestoCustomSelectItem;

},{}],11:[function(require,module,exports){
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

},{}],12:[function(require,module,exports){
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
                delta_sum += deltaY * 8 || 0;
                count += 1;
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    if (/Macintosh/.test(navigator.userAgent)) {
                        element.scrollLeft = element.scrollLeft - delta_sum;
                    } else {
                        element.scrollLeft = element.scrollLeft - delta_sum * 15;
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

},{}],13:[function(require,module,exports){
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
        this.moveToSlideTimeout = null;
    }

    _createClass(SliderController, [{
        key: 'moveToSlide',
        value: function moveToSlide(position) {
            var _this = this;

            clearTimeout(this.moveToSlideTimeout);
            this.moveToSlideTimeout = setTimeout(function () {
                _this.scrollHandler(_this.items[position].elemInfo.offsetLeft, true);
            }, 1);
        }
    }, {
        key: 'addItem',
        value: function addItem(item) {
            var _this2 = this;

            var index = this.items.push(item) - 1;
            return function (newInfo) {
                _this2.items[index].elemInfo = newInfo;
                _this2.moveToSlide(_this2.slide);
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
            var _this3 = this;

            var handler = function handler(e) {
                _this3.next(delta);
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
                var center = val + item.elemInfo.offsetWidth;
                if (item.elemInfo.setActive) {
                    item.elemInfo.setActive(val - item.elemInfo.offsetLeft);
                }
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
            var _this4 = this;

            this.element = element[0];
            sliderMain.addContent(function (val, animate) {
                if (!animate) {
                    _this4.element.scrollLeft = val;
                } else {
                    _this4.easingAnimator.easeProp({
                        left: _this4.element.scrollLeft
                    }, {
                        left: val
                    });
                }
            });
            element.on('scroll', function () {
                sliderMain.scrollPosition = _this4.element.scrollLeft;
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
            var _this5 = this;

            sliderMain.setCounter(function (val) {
                _this5.$timeout(function () {
                    $scope.selectedSlide = (1e4 + val + 1 + "").slice(-2);
                });
            });
        }
    }]);

    return SliderCounter;
})();

exports.SliderCounter = SliderCounter;

var SliderItem = (function () {
    /*@ngInject*/

    function SliderItem($window) {
        _classCallCheck(this, SliderItem);

        this.require = '^sliderMain';
        this.restrict = 'A';
        this.$window = angular.element($window);
        this.elems = [];
    }
    SliderItem.$inject = ["$window"];

    _createClass(SliderItem, [{
        key: 'getElemInfo',
        value: function getElemInfo(index) {
            var element = this.elems[index];
            return {
                offsetLeft: element.offsetLeft,
                center: element.offsetLeft + element.offsetWidth / 2,
                offsetWidth: element.offsetWidth
            };
        }
    }, {
        key: 'link',
        value: function link(scope, element, attrs, sliderMain) {
            var _this6 = this;

            var index = this.elems.push(element[0]) - 1;
            var handler = sliderMain.addItem({
                elem: this.elems[index],
                elemInfo: this.getElemInfo(index)
            });
            window.addEventListener('resize', function () {
                handler(_this6.getElemInfo(index));
            });
        }
    }]);

    return SliderItem;
})();

exports.SliderItem = SliderItem;

var UniSliderItem = (function (_SliderItem) {
    _inherits(UniSliderItem, _SliderItem);

    function UniSliderItem() {
        _classCallCheck(this, UniSliderItem);

        _get(Object.getPrototypeOf(UniSliderItem.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(UniSliderItem, [{
        key: 'getElemInfo',
        value: function getElemInfo(index) {
            if (document.body.offsetWidth < 800) {
                return _get(Object.getPrototypeOf(UniSliderItem.prototype), 'getElemInfo', this).call(this, index);
            }
            var element = this.elems[index];
            return {
                offsetLeft: !index ? 0 : element.offsetLeft - this.elems[0].offsetLeft,
                center: !index ? element.offsetLeft + element.offsetWidth / 2 : this.elems[index - 1].offsetLeft + this.elems[index - 1].offsetWidth / 2 + element.offsetWidth,
                offsetWidth: element.offsetWidth,
                setActive: function setActive(delta) {
                    element.style.opacity = Math.max(0, 1.2 - Math.abs(delta / element.offsetWidth));
                    if (Math.abs(element.style.opacity - 1) > 0.2) {
                        element.classList.remove('active');
                    } else {
                        element.classList.add('active');
                    }
                }
            };
        }
    }]);

    return UniSliderItem;
})(SliderItem);

exports.UniSliderItem = UniSliderItem;

var SmallSliderItem = (function (_SliderItem2) {
    _inherits(SmallSliderItem, _SliderItem2);

    function SmallSliderItem() {
        _classCallCheck(this, SmallSliderItem);

        _get(Object.getPrototypeOf(SmallSliderItem.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(SmallSliderItem, [{
        key: 'getElemInfo',
        value: function getElemInfo(index) {
            if (document.body.offsetWidth < 800) {
                return _get(Object.getPrototypeOf(SmallSliderItem.prototype), 'getElemInfo', this).call(this, index);
            }
            var element = this.elems[index];
            return {
                offsetLeft: element.offsetLeft - element.offsetWidth,
                center: element.offsetLeft - element.offsetWidth / 2,
                offsetWidth: element.offsetWidth
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2suanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpbi5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpblBhZ2UvZGlyZWN0aXZlcy9sb2dvRGlyZWN0aXZlcy5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbW92aWVTaG93L2NvbnRyb2xsZXJzL3BsYXlTaG93LmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9tb3ZpZVNob3cvY29udHJvbGxlcnMvc2hvd3NGaWx0ZXJDb250cm9sbGVyLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9tb3ZpZVNob3cvZGlyZWN0aXZlcy9jdXN0b21TZWxlY3QuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9kcmFnZ0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9ob3Jpem9udGFsU2Nyb2xsLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL2RpcmVjdGl2ZXMvc2xpZGVyLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL3NlcnZpY2VzL2Vhc2luZ0FuaW1hdG9yLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy91dGlscy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBYSxjQUFjO2FBQWQsY0FBYzs4QkFBZCxjQUFjOzs7aUJBQWQsY0FBYzs7ZUFPbkIsY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN4QixzQkFBVSxDQUFDLFlBQUk7QUFDWCx1QkFBTyxDQUNGLFdBQVcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7YUFDOUMsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0IsbUJBQU8sQ0FDRixRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUNuQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FDN0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUMsRUFBQztBQUNwQixpQkFBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO0FBQ2xCLG9CQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3BDLHVCQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUMzQywwQkFBVSxDQUFDLFlBQUk7QUFDWCwwQkFB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O0FBQUosb0JBQUk7Ozs7QUFFdEIsZ0JBQUksUUFBUSxvQkFBTyxhQUFhLGdCQUFJLElBQUksS0FBQyxDQUFDO0FBQzFDLGlCQUFLLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtBQUN0Qix3QkFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQztBQUNELG1CQUFPLFFBQVEsQ0FBQztTQUNuQixDQUFDLENBQUM7O0FBRUgsZUFBTyxZQUFZLENBQUM7S0FDdkI7Ozs7Ozs7QUFPRCxhQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUU7QUFDOUIsZUFBTyxZQUFXO0FBQ2QsbUJBQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDMUMsQ0FBQztLQUNMOzs7Ozs7OztBQVFELGFBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO0FBQzdDLGNBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7S0FDcEQ7Q0FFSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgY2xhc3MgTWVzdG9DbGlja0ZhZGUge1xuICAgIHN0YXRpYyBnZXQgVElNRU9VVCgpIHtcbiAgICAgICAgcmV0dXJuIDIwMDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBGQURFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2ZhZGUnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKE1lc3RvQ2xpY2tGYWRlLkZBREVfQ0xBU1MpXG4gICAgICAgIH0sIE1lc3RvQ2xpY2tGYWRlLlRJTUVPVVQpO1xuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAuYWRkQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgICAgIC5maW5kKCdhLmZhZGVBbmltYXRvcl9fYW5jb3InKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGxldCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIgeyBcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBmZWVkYmFja1Jlc291cmNlKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tSZXNvdXJjZSA9IGZlZWRiYWNrUmVzb3VyY2U7XG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSAnJztcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XG4gICAgfVxuICAgIHN1Ym1pdChmb3JtKXtcbiAgICAgICAgaWYgKGZvcm0uJGludmFsaWQpIHtcbiAgICAgICAgICAgIGZvcm0uJHNldERpcnR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZmVlZGJhY2sgPSBuZXcgdGhpcy5mZWVkYmFja1Jlc291cmNlKHRoaXMuZm9ybURhdGEpO1xuICAgICAgICAgICAgZmVlZGJhY2suJHNhdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrVG9nZ2xlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZFRvZ2dsZXIoYXR0cnMubWVzdG9GZWVkYmFja1RvZ2dsZSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHRoaXMucG9wVXBTZXJpdmljZSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrQ29udG5pZXIge1xuICAgIHN0YXRpYyBnZXQgVE9HR0xFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2ZpeGVkUG9wVXAnOyBcbiAgICB9XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IChuYW1lKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnRvZ2dsZUNsYXNzKE1lc3RvRmVlZGJhY2tDb250bmllci5UT0dHTEVfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZENvbnRhbmllcihhdHRycy5tZXN0b0ZlZWRiYWNrQ29udGFuaWVyLCBoYW5kbGVyKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0Nsb3NlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMucG9wVXBTZXJpdmljZS5jbG9zZShhdHRycy5tZXN0b0ZlZWRiYWNrQ2xvc2UpO1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZCh0aGlzLnBvcFVwU2VyaXZpY2UpKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0l0ZW0ge1xuICAgIHN0YXRpYyBnZXQgVE9HR0xFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgfVxuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKHBvcFVwU2VyaXZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlID0gcG9wVXBTZXJpdmljZTtcbiAgICB9XG4gICAgdG9nZ2xlKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcyhNZXN0b0ZlZWRiYWNrSXRlbS5UT0dHTEVfQ0xBU1MpO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2VcbiAgICAgICAgICAgIC5hZGRJdGVtKGF0dHJzLm1lc3RvRmVlZGJhY2tJdGVtLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIGVsZW1lbnQpKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRmVlZGJhY2tSZXNvdXJjZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gJHJlc291cmNlKENPTkZJRy51cmxzLmZlZWRiYWNrRm9ybSk7XG4gICAgfVxufVxuIiwiY2xhc3MgUG9wVXAge1xuICAgIGNvbnN0cnVjdG9yKGl0ZW1IYW5kbGVyLCBuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pdGVtSGFuZGxlciA9IGl0ZW1IYW5kbGVyO1xuICAgIH1cbiAgICB0b2dnbGVJdGVtKCkge1xuICAgICAgICBpZiAoUG9wVXAuY29udGFuaWVySGFuZGxlclt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBQb3BVcC5jb250YW5pZXJIYW5kbGVyW3RoaXMubmFtZV0oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1IYW5kbGVyKCk7XG4gICAgfVxufVxuUG9wVXAuY29udGFuaWVySGFuZGxlciA9IHt9O1xuXG5leHBvcnQgY2xhc3MgUG9wVXBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3BVcHMgPSB7fTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtTmFtZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnBvcFVwc1tpdGVtTmFtZV0gPSBuZXcgUG9wVXAoaGFuZGxlciwgaXRlbU5hbWUpO1xuICAgIH1cbiAgICBjbG9zZShpdGVtTmFtZSkge1xuICAgICAgICBpZiAoIWl0ZW1OYW1lKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBvcFVwcykuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgICAgIHRoaXMucG9wVXBzW2tleV0udG9nZ2xlSXRlbSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3BVcCA9IHRoaXMucG9wVXBzW2l0ZW1OYW1lXVxuICAgICAgICAgICAgaWYgKHBvcFVwKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBvcFVwLnRvZ2dsZUl0ZW0oKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDb250YW5pZXIocG9wVXBOYW1lLCBoYW5kZXIsIGluZGV4KSB7XG4gICAgICAgIFBvcFVwLmNvbnRhbmllckhhbmRsZXJbcG9wVXBOYW1lXSA9IGhhbmRlcjtcbiAgICB9XG4gICAgYWRkVG9nZ2xlcihwb3BVcE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAoW3RoaXMucG9wVXBzW3BvcFVwTmFtZV1dIHx8IFtdKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChwb3BVcCk9PntcbiAgICAgICAgICAgICAgICAgICAgcG9wVXAudG9nZ2xlSXRlbSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJy4vdXRpbHMvcmVnaXN0ZXInO1xuXG5pbXBvcnQgeyBcbiAgICBTbGlkZXJNYWluLFxuICAgIFNsaWRlckNvbnRlbnQsXG4gICAgU2xpZGVyQ29udHJvbGwsXG4gICAgU2xpZGVyQ291bnRlcixcbiAgICBTbGlkZXJJdGVtLFxuICAgIFNtYWxsU2xpZGVySXRlbSxcbiAgICBVbmlTbGlkZXJJdGVtXG59IGZyb20gJy4vdG9wTmV3cy9kaXJlY3RpdmVzL3NsaWRlcic7XG5pbXBvcnQgeyBFYXNpbmdBbmltYXRvciB9IGZyb20gJy4vdG9wTmV3cy9zZXJ2aWNlcy9lYXNpbmdBbmltYXRvcic7XG5pbXBvcnQgeyBEcmFnZ0NvbnRyb2xsZXIgfSBmcm9tICcuL3RvcE5ld3MvZGlyZWN0aXZlcy9kcmFnZ0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgSG9yaXpvbnRhbFNjcm9sbCB9IGZyb20gJy4vdG9wTmV3cy9kaXJlY3RpdmVzL2hvcml6b250YWxTY3JvbGwnO1xuXG5pbXBvcnQgeyBNZXN0b0NsaWNrRmFkZSB9IGZyb20gJy4vY2xpY2tGYWRlL2RpcmVjdGl2ZXMvY2xpY2tGYWRlJztcblxuaW1wb3J0IHsgUG9wVXBTZXJ2aWNlIH0gZnJvbSAnLi9mZWVkQmFjay9zZXJ2aWNlcy9wb3BVcFNlcnZpY2UnO1xuaW1wb3J0IHsgRmVlZGJhY2tSZXNvdXJjZSB9IGZyb20gJy4vZmVlZEJhY2svc2VydmljZXMvZmVlZGJhY2tSZXNvdXJjZSc7XG5pbXBvcnQgeyBGZWVkYmFja0Zvcm1Db250cm9sbGVyIH0gZnJvbSAnLi9mZWVkQmFjay9jb250cm9sbGVycy9Gb3JtQ29udHJvbGxlcic7XG5pbXBvcnQgeyBcbiAgICBNZXN0b0ZlZWRiYWNrSXRlbSxcbiAgICBNZXN0b0ZlZWRiYWNrVG9nZ2xlLFxuICAgIE1lc3RvRmVlZGJhY2tDbG9zZSxcbiAgICBNZXN0b0ZlZWRiYWNrQ29udG5pZXJcbn0gZnJvbSAnLi9mZWVkQmFjay9kaXJlY3RpdmVzL2ZlZWRCYWNrJztcblxuaW1wb3J0IHsgXG4gICAgU1ZHTG9nb0hvdmVyLFxuICAgIFNWR0xvZ29JdGVtLFxuICAgIFNWR0xvZ29Db250YW5pZXIsXG4gICAgU1ZHTG9nb0JhY2tncm91bmRcbn0gZnJvbSAnLi9tYWluUGFnZS9kaXJlY3RpdmVzL2xvZ29EaXJlY3RpdmVzJztcblxuaW1wb3J0IHsgU2hvd01vdmllQ29udHJvbGxlciB9IGZyb20gJy4vbW92aWVTaG93L2NvbnRyb2xsZXJzL3BsYXlTaG93LmpzJ1xuXG5pbXBvcnQgeyBcbiAgICBNZXN0b0N1c3RvbVNlbGVjdCxcbiAgICBNZXN0b0N1c3RvbVNlbGVjdEl0ZW0sXG4gICAgTWVzdG9DdXN0b21TZWxlY3RQbGFjZWhvbGRlclxufSBmcm9tICcuL21vdmllU2hvdy9kaXJlY3RpdmVzL2N1c3RvbVNlbGVjdC5qcydcblxuaW1wb3J0IHsgU2hvd3NGaWx0ZXJDb250cm9sbGVyIH0gZnJvbSAnLi9tb3ZpZVNob3cvY29udHJvbGxlcnMvc2hvd3NGaWx0ZXJDb250cm9sbGVyLmpzJyBcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdtZXN0bycsIFsnbmdSZXNvdXJjZScsICd5b3V0dWJlLWVtYmVkJ10pO1xuXG5yZWdpc3RlcignbWVzdG8nKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlck1haW4nLCBTbGlkZXJNYWluKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckNvbnRyb2xsJywgU2xpZGVyQ29udHJvbGwpXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyQ29udGVudCcsIFNsaWRlckNvbnRlbnQpXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVySXRlbScsIFNsaWRlckl0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnc21hbGxTbGlkZXJJdGVtJywgU21hbGxTbGlkZXJJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ3VuaVNsaWRlckl0ZW0nLCBVbmlTbGlkZXJJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckNvdW50ZXInLCBTbGlkZXJDb3VudGVyKVxuICAgIC5kaXJlY3RpdmUoJ2RyYWdnQ29udHJvbGxlcicsIERyYWdnQ29udHJvbGxlcilcbiAgICAuZGlyZWN0aXZlKCdob3Jpem9udGFsU2Nyb2xsJywgSG9yaXpvbnRhbFNjcm9sbClcbiAgICAuZmFjdG9yeSgnZWFzaW5nQW5pbWF0b3InLCBFYXNpbmdBbmltYXRvcilcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tJdGVtJywgTWVzdG9GZWVkYmFja0l0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja1RvZ2dsZScsIE1lc3RvRmVlZGJhY2tUb2dnbGUpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja0Nsb3NlJywgTWVzdG9GZWVkYmFja0Nsb3NlKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tDb250YW5pZXInLCBNZXN0b0ZlZWRiYWNrQ29udG5pZXIpXG4gICAgLnNlcnZpY2UoJ3BvcFVwU2VyaXZpY2UnLCBQb3BVcFNlcnZpY2UpXG5cbiAgICAuc2VydmljZSgnZmVlZGJhY2tSZXNvdXJjZScsIEZlZWRiYWNrUmVzb3VyY2UpXG4gICAgLmNvbnRyb2xsZXIoJ2ZlZWRiYWNrRm9ybUNvbnRyb2xsZXInLCBGZWVkYmFja0Zvcm1Db250cm9sbGVyKVxuXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9DbGlja0ZhZGUnLCBNZXN0b0NsaWNrRmFkZSlcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvTG9nb0hvdmVyJywgU1ZHTG9nb0hvdmVyKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvU3ZnSXRlbScsIFNWR0xvZ29JdGVtKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvU3ZnTG9nbycsIFNWR0xvZ29Db250YW5pZXIpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9TdmdCYWNrZ3JvdW5kJywgU1ZHTG9nb0JhY2tncm91bmQpXG5cbiAgICAuY29udHJvbGxlcignc2hvd01vdmllQ29udHJvbGxlcicsIFNob3dNb3ZpZUNvbnRyb2xsZXIpXG5cbiAgICAuZGlyZWN0aXZlKCdtZXN0b0N1c3RvbVNlbGVjdCcsIE1lc3RvQ3VzdG9tU2VsZWN0KVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvQ3VzdG9tU2VsZWN0SXRlbScsIE1lc3RvQ3VzdG9tU2VsZWN0SXRlbSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0N1c3RvbVNlbGVjdFBsYWNlaG9sZGVyJywgTWVzdG9DdXN0b21TZWxlY3RQbGFjZWhvbGRlcilcblxuICAgIC5jb250cm9sbGVyKCdzaG93c0ZpbHRlckNvbnRyb2xsZXInLCBTaG93c0ZpbHRlckNvbnRyb2xsZXIpXG5cbmFwcC5jb25maWcoKCRyZXNvdXJjZVByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyKT0+IHtcbiAgICAkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ2NzcmZ0b2tlbic7XG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9ICdYLUNTUkZUb2tlbic7XG4gICAgJHJlc291cmNlUHJvdmlkZXIuZGVmYXVsdHMuc3RyaXBUcmFpbGluZ1NsYXNoZXMgPSBmYWxzZTtcbn0pXG5hbmd1bGFyXG4gICAgLmVsZW1lbnQoZG9jdW1lbnQpXG4gICAgLnJlYWR5KGFuZ3VsYXIuYm9vdHN0cmFwLmJpbmQoYW5ndWxhciwgZG9jdW1lbnQsIFsnbWVzdG8nXSkpO1xuIiwiY2xhc3MgTG9nb0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0ge307XG4gICAgICAgIHRoaXMuaW1nVXJscyA9IHt9O1xuICAgIH1cbiAgICBhZGRJbWFnZShuYW1lLCB1cmwpIHtcbiAgICAgICAgdGhpcy5pbWdVcmxzW25hbWVdID0gdXJsO1xuICAgIH1cbiAgICBhZGRJdGVtKG5hbWUsIGluZm8pIHtcbiAgICAgICAgdGhpcy5pdGVtc1tuYW1lXSA9IGluZm87XG4gICAgfVxuICAgIGFkZEJhY2tncm91bmQoc2hvdywgaGlkZSl7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHtcbiAgICAgICAgICAgIHNob3c6IHNob3csXG4gICAgICAgICAgICBoaWRlOiBoaWRlXG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5ob3ZlcigpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5pdGVtcykuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgdGhpcy5pdGVtc1trZXldLmRpc2FibGVkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuaGlkZSgpO1xuICAgIH1cbiAgICBob3ZlcihuYW1lKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5zaG93KHRoaXMuaW1nVXJsc1tuYW1lXSk7XG4gICAgICAgIHRoaXMuaXRlbXNbbmFtZV0uYWN0aXZlKCk7XG4gICAgfVxuICAgIGNhbGwobmFtZSkge1xuICAgICAgICB0aGlzLml0ZW1zW25hbWVdLmNsaWNrKCk7XG4gICAgfVxuICAgIHN0YXRpYyBmYWN0b3J5KC4uLmFyZ3MpIHtcbiAgICAgICAgTG9nb0NvbnRyb2xsZXIuaW5zdGFuY2UgPSBuZXcgTG9nb0NvbnRyb2xsZXIoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiBMb2dvQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU1ZHTG9nb0NvbnRhbmllciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gTG9nb0NvbnRyb2xsZXIuZmFjdG9yeTtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU1ZHTG9nb0JhY2tncm91bmQge1xuICAgIHN0YXRpYyBnZXQgQUNUSVZFX0NMQVNTKCl7XG4gICAgICAgIHJldHVybiAnYWN0aXZlJztcbiAgICB9IFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXm1lc3RvU3ZnTG9nbyc7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuYWRkQmFja2dyb3VuZCgodXJsKT0+e1xuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhTVkdMb2dvQmFja2dyb3VuZC5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCB1cmwgPyBgdXJsKCR7dXJsfSlgIDogJ25vbmUnKTtcbiAgICAgICAgfSwgKCk9PntcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29Ib3ZlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15tZXN0b1N2Z0xvZ28nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgICBlbGVtZW50Lm9uKCdtb3VzZWVudGVyJywgKCk9PntcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaG92ZXIoYXR0cnMubWVzdG9Mb2dvSG92ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5vbignbW91c2VsZWF2ZScsICgpPT57XG4gICAgICAgICAgICBjb250cm9sbGVyLnVuaG92ZXIoYXR0cnMubWVzdG9Mb2dvSG92ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci5jYWxsKGF0dHJzLm1lc3RvTG9nb0hvdmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29JdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXm1lc3RvU3ZnTG9nbyc7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuYWRkSXRlbShhdHRycy5tZXN0b1N2Z0l0ZW0sIHtcbiAgICAgICAgICAgIGNsaWNrOiAoKT0+e1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXR0cnMuaHJlZjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmU6ICgpPT57XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhTVkdMb2dvQmFja2dyb3VuZC5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc2FibGVkOiAoKT0+e1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghYXR0cnMuaW1nVXJsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG4gICAgICAgICAgICBjb250cm9sbGVyLmFkZEltYWdlKGF0dHJzLm1lc3RvU3ZnSXRlbSwgYXR0cnMuaW1nVXJsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltZy5zcmMgPSBhdHRycy5pbWdVcmw7XG4gICAgICAgIGlmKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGRJbWFnZShhdHRycy5tZXN0b1N2Z0l0ZW0sIGF0dHJzLmltZ1VybCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjbGFzcyBTaG93TW92aWVDb250cm9sbGVyIHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICR0aW1lb3V0KXtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcbiAgICAgICAgdGhpcy52aWRlbyA9IHt9O1xuICAgICAgICAkc2NvcGUuJG9uKCd5b3V0dWJlLnBsYXllci5wbGF5aW5nJywgKCRldmVudCwgcGxheWVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlkZW9PYmogPSB0aGlzLmdldFZpZGVvT2JqKHBsYXllcik7XG4gICAgICAgICAgICB0aGlzLiR0aW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgIHZpZGVvT2JqLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgJHNjb3BlLiRvbigneW91dHViZS5wbGF5ZXIuZW5kZWQnLCAoJGV2ZW50LCBwbGF5ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCB2aWRlb09iaiA9IHRoaXMuZ2V0VmlkZW9PYmoocGxheWVyKTtcbiAgICAgICAgICAgIHZpZGVvT2JqLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0VmlkZW9PYmoocGxheWVyKXtcbiAgICAgICAgbGV0IHZpZGVvSWQgPSBwbGF5ZXIuZ2V0VmlkZW9EYXRhKCkudmlkZW9faWQ7XG4gICAgICAgIGlmICghdGhpcy52aWRlb1t2aWRlb0lkXSkge1xuICAgICAgICAgICAgdGhpcy52aWRlb1t2aWRlb0lkXSA9IHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvYWQ6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9bdmlkZW9JZF07XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNob3dzRmlsdGVyQ29udHJvbGxlciB7XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHdpbmRvdykge1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgICAgICB0aGlzLnNlbGVjdCA9IHt9O1xuICAgIH1cbiAgICBzZWFyY2goKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7d2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXX0/JHtqUXVlcnkucGFyYW0odGhpcy5zZWxlY3QpfWA7XG4gICAgfVxufVxuIiwiY2xhc3MgTWVzdG9DdXN0b21TZWxlY3RDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB2YXIgc2V0UGxhY2Vob2xkZXIgPSAodGV4dCk9Pnt9O1xuXG4gICAgICAgIHRoaXMudG9nZ2xlT3BlbiA9ICAoKT0+e307XG4gICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIgPSAoZnUpPT57XG4gICAgICAgICAgICBzZXRQbGFjZWhvbGRlciA9IGZ1O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0VG9nZ2xlT3BlbiA9IChmdSk9PntcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlT3BlbiA9IGZ1O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNlbGVjdE9wdGlvbiA9ICh0ZXh0KT0+e1xuICAgICAgICAgICAgc2V0UGxhY2Vob2xkZXIodGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGZhY3RvcnkoLi4uYXJncykge1xuICAgICAgICBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIuaW5zdGFuY2UgPSBuZXcgTWVzdG9DdXN0b21TZWxlY3RDb250cm9sbGVyKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gTWVzdG9DdXN0b21TZWxlY3RDb250cm9sbGVyLmluc3RhbmNlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0N1c3RvbVNlbGVjdCB7XG5cbiAgICAvKkBuZ0luamVjdCovXG5cdGNvbnN0cnVjdG9yKCRkb2N1bWVudCl7XG5cdFx0dGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gTWVzdG9DdXN0b21TZWxlY3RDb250cm9sbGVyLmZhY3Rvcnk7XG4gICAgICAgIHRoaXMuJGRvY3VtZW50ID0gJGRvY3VtZW50O1xuICAgIH1cbiAgICBcbiAgICBsaW5rICgkc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjb250cm9sbGVyKXtcbiAgICAgICAgbGV0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gYW5ndWxhci5lbGVtZW50KGUudGFyZ2V0KTtcbiAgICAgICAgICAgIGlmICghKHRhcmdldC5pcyhlbGVtZW50KSB8fCB0YXJnZXQuY2xvc2VzdChlbGVtZW50KS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb250cm9sbGVyLnNldFRvZ2dsZU9wZW4oKCk9PntcbiAgICAgICAgICAgIGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudCh0aGlzLiRkb2N1bWVudCkub24oJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KHRoaXMuJGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9DdXN0b21TZWxlY3RQbGFjZWhvbGRlciB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5yZXN0cmljdCA9ICdBJztcblx0XHR0aGlzLnJlcXVpcmUgPSAnXm1lc3RvQ3VzdG9tU2VsZWN0JztcbiAgICB9XG4gICAgbGluayAoJHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3VzdG9tU2VsZWN0Q29udHJvbGxlcikge1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjdXN0b21TZWxlY3RDb250cm9sbGVyLnRvZ2dsZU9wZW4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbVNlbGVjdENvbnRyb2xsZXIuc2V0UGxhY2Vob2xkZXIoKHRleHQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dCh0ZXh0KTtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lc3RvQ3VzdG9tU2VsZWN0SXRlbSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMucmVzdHJpY3QgPSAnQSc7XG5cdFx0dGhpcy5yZXF1aXJlID0gJ15tZXN0b0N1c3RvbVNlbGVjdCc7XG4gICAgfVxuICAgIGxpbmsoJHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3VzdG9tU2VsZWN0Q29udHJvbGxlcil7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGN1c3RvbVNlbGVjdENvbnRyb2xsZXIuc2VsZWN0T3B0aW9uKGVsZW1lbnQudGV4dCgpKVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBEcmFnZ0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdeP3NsaWRlck1haW4nO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICB2YXIgZGVsdGFfaW5mbyA9IDAsXG4gICAgICAgICAgICBzdGFydF9pbmZvID0gMCxcbiAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAub24oJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgZGVsdGFfaW5mbyA9IHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgc3RhcnRfaW5mbyA9IGRlbHRhX2luZm87XG4gICAgICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhX2luZm8gIT0gdG91Y2guc2NyZWVuWCkge1xuICAgICAgICAgICAgICAgICAgICBzdW1tICs9IGRlbHRhX2luZm8gLSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgICAgICBkZWx0YV9pbmZvID0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzdW1tKSA+IDEwMCAmJiBzbGlkZXJNYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdW1tID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyTWFpbi5uZXh0KDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyTWFpbi5uZXh0KC0xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBkZWx0YV9pbmZvID0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBIb3Jpem9udGFsU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnXG4gICAgfVxuICAgIGxpbmsoJHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICB2YXIgdGltZW91dCxcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50WzBdLFxuICAgICAgICAgICAgZGVsdGFfc3VtID0gMCxcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgSGFtc3RlcihlbGVtZW50KS53aGVlbCgoZSwgZGVsdGEsIGRlbHRhWCwgZGVsdGFZKT0+e1xuICAgICAgICAgICAgaWYgKGRlbHRhWCAmJiAhZGVsdGFZKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIGRlbHRhX3N1bSA9IDA7XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRlbHRhX3N1bSArPSBkZWx0YVkqOCB8fCAwO1xuICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKC9NYWNpbnRvc2gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0IC0gZGVsdGFfc3VtO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCAtIGRlbHRhX3N1bSoxNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVsdGFfc3VtID0gMDtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICB9LCAxKTtcblxuICAgICAgICB9KSAgICBcbiAgICB9XG59XG4iLCJjbGFzcyBTbGlkZXJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLnNsaWRlID0gMDtcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLnNldFNsaWRlID0gKCk9Pnt9O1xuICAgICAgICB0aGlzLm1vdmVUb1NsaWRlVGltZW91dCA9IG51bGw7XG4gICAgfVxuICAgIHNldCBzY3JvbGxQb3NpdGlvbih2YWwpe1xuICAgICAgICB0aGlzLnNsaWRlID0gdGhpcy5pdGVtcy5yZWR1Y2UoKG91dEluZGV4LCBpdGVtLCBpbmRleCk9PntcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSB2YWwgKyBpdGVtLmVsZW1JbmZvLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgaWYgKGl0ZW0uZWxlbUluZm8uc2V0QWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5lbGVtSW5mby5zZXRBY3RpdmUodmFsIC0gaXRlbS5lbGVtSW5mby5vZmZzZXRMZWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGl0ZW0uZWxlbUluZm8uY2VudGVyIDwgY2VudGVyKSB7XG4gICAgICAgICAgICAgICAgb3V0SW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvdXRJbmRleDtcbiAgICAgICAgfSwgMCk7XG4gICAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gdmFsO1xuICAgICAgICB0aGlzLnNldFNsaWRlKHRoaXMuc2xpZGUpO1xuICAgIH1cbiAgICBtb3ZlVG9TbGlkZShwb3NpdGlvbil7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1vdmVUb1NsaWRlVGltZW91dCk7XG4gICAgICAgIHRoaXMubW92ZVRvU2xpZGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyKHRoaXMuaXRlbXNbcG9zaXRpb25dLmVsZW1JbmZvLm9mZnNldExlZnQsIHRydWUpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuaXRlbXMucHVzaChpdGVtKSAtIDE7XG4gICAgICAgIHJldHVybiAobmV3SW5mbykgPT4ge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0uZWxlbUluZm8gPSBuZXdJbmZvO1xuICAgICAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZSh0aGlzLnNsaWRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDb250ZW50KGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9XG4gICAgbmV4dChkZWx0YSkge1xuICAgICAgICBsZXQgbmV4dCA9IHRoaXMuc2xpZGUgKyBkZWx0YTtcbiAgICAgICAgaWYgKG5leHQgPj0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5leHQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYobmV4dCA8IDApIHtcbiAgICAgICAgICAgIG5leHQgPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbGlkZSA9IG5leHQ7XG4gICAgICAgIHRoaXMubW92ZVRvU2xpZGUodGhpcy5zbGlkZSk7XG4gICAgfVxuICAgIGFkZENvbnRyb2xsZXIoZGVsdGEpIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0KGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlcjtcbiAgICB9XG4gICAgc2V0Q291bnRlcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U2xpZGUgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uID0gMDtcbiAgICB9XG4gICAgc3RhdGljIGZhY3RvcnkoLi4uYXJncykge1xuICAgICAgICBTbGlkZXJDb250cm9sbGVyLmluc3RhbmNlID0gbmV3IFNsaWRlckNvbnRyb2xsZXIoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiBTbGlkZXJDb250cm9sbGVyLmluc3RhbmNlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXJNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gU2xpZGVyQ29udHJvbGxlci5mYWN0b3J5O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb250ZW50IHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3RvcihlYXNpbmdBbmltYXRvcikge1xuICAgICAgICB0aGlzLmVhc2luZ0FuaW1hdG9yID0gZWFzaW5nQW5pbWF0b3JcbiAgICAgICAgdGhpcy5lYXNpbmdBbmltYXRvci5jYWxsQmFjayA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXnNsaWRlck1haW4nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBhbmltYXRlKGluZm8pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNjcm9sbExlZnQgPSBpbmZvLmxlZnQ7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRbMF07XG4gICAgICAgIHNsaWRlck1haW4uYWRkQ29udGVudCgodmFsLCBhbmltYXRlKT0+e1xuICAgICAgICAgICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNjcm9sbExlZnQgPSB2YWxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lYXNpbmdBbmltYXRvci5lYXNlUHJvcCh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB2YWxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5vbignc2Nyb2xsJywgKCk9PntcbiAgICAgICAgICAgIHNsaWRlck1haW4uc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2xpZGVyQ291bnRlciB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCR0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluaygkc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIHNsaWRlck1haW4uc2V0Q291bnRlcigodmFsKT0+e1xuICAgICAgICAgICAgdGhpcy4kdGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICRzY29wZS5zZWxlY3RlZFNsaWRlID0gKDFlNCt2YWwrMStcIlwiKS5zbGljZSgtMik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXJJdGVtIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHdpbmRvdykge1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXnNsaWRlck1haW4nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdyk7XG4gICAgICAgIHRoaXMuZWxlbXMgPSBbXTtcbiAgICB9XG4gICAgZ2V0RWxlbUluZm8oaW5kZXgpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1zW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZnNldExlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIGNlbnRlcjogZWxlbWVudC5vZmZzZXRMZWZ0ICsgZWxlbWVudC5vZmZzZXRXaWR0aC8yLFxuICAgICAgICAgICAgb2Zmc2V0V2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5lbGVtcy5wdXNoKGVsZW1lbnRbMF0pIC0gMTtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBzbGlkZXJNYWluLmFkZEl0ZW0oe1xuICAgICAgICAgICAgZWxlbTogdGhpcy5lbGVtc1tpbmRleF0sXG4gICAgICAgICAgICBlbGVtSW5mbzogdGhpcy5nZXRFbGVtSW5mbyhpbmRleClcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKT0+e1xuICAgICAgICAgICAgaGFuZGxlcih0aGlzLmdldEVsZW1JbmZvKGluZGV4KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBVbmlTbGlkZXJJdGVtIGV4dGVuZHMgU2xpZGVySXRlbSB7XG4gICAgZ2V0RWxlbUluZm8oaW5kZXgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggPCA4MDApIHtcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5nZXRFbGVtSW5mbyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1zW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZnNldExlZnQ6ICFpbmRleD8gMDpcbiAgICAgICAgICAgICAgICBlbGVtZW50Lm9mZnNldExlZnQgLSB0aGlzLmVsZW1zWzBdLm9mZnNldExlZnQsXG4gICAgICAgICAgICBjZW50ZXI6ICFpbmRleD8gZWxlbWVudC5vZmZzZXRMZWZ0ICsgZWxlbWVudC5vZmZzZXRXaWR0aC8yIDpcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1zW2luZGV4LTFdLm9mZnNldExlZnQgKyB0aGlzLmVsZW1zW2luZGV4LTFdLm9mZnNldFdpZHRoLzJcbiAgICAgICAgICAgICAgICAgKyBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgb2Zmc2V0V2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBzZXRBY3RpdmU6IChkZWx0YSk9PntcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBNYXRoLm1heCgwLCAxLjItTWF0aC5hYnMoZGVsdGEvZWxlbWVudC5vZmZzZXRXaWR0aCkpO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhlbGVtZW50LnN0eWxlLm9wYWNpdHkgLSAxKSA+IDAuMikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbWFsbFNsaWRlckl0ZW0gZXh0ZW5kcyBTbGlkZXJJdGVtIHtcbiAgICBcbiAgICBnZXRFbGVtSW5mbyhpbmRleCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCA8IDgwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmdldEVsZW1JbmZvKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbXNbaW5kZXhdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2Zmc2V0TGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0IC0gZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIGNlbnRlcjogZWxlbWVudC5vZmZzZXRMZWZ0IC0gZWxlbWVudC5vZmZzZXRXaWR0aC8yLFxuICAgICAgICAgICAgb2Zmc2V0V2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICAgICAgfVxuICAgIH1cbn1cbiAgICBcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb250cm9sbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gc2xpZGVyTWFpbi5hZGRDb250cm9sbGVyKCthdHRycy5zbGlkZXJDb250cm9sbClcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBoYW5kbGVyLmJpbmQoc2xpZGVyTWFpbikpXG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEVhc2luZ0FuaW1hdG9yIHtcblxuICAgIGNvbnN0cnVjdG9yKG9wdCl7XG4gICAgICAgIHZhciBvcHQgPSB7fTtcbiAgICAgICAgdGhpcy5lYXNpbmdJbnRlcnZhbCA9IG9wdC5lYXNpbmdJbnRlcnZhbDtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IG9wdC5kdXJhdGlvbiB8fCAxMDAwO1xuICAgICAgICB0aGlzLnN0ZXAgPSBvcHQuc3RlcCB8fCA1MDtcbiAgICAgICAgdGhpcy5lYXNpbmdGbiA9ICh0LCBiLCBjLCBkKSA9PntcbiAgICAgICAgICAgIGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCArIGI7XG4gICAgICAgICAgICByZXR1cm4gLWMvMiAqICgodC09MikqdCp0KnQgLSAyKSArIGI7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZWFzaW5nRm4gPSBvcHQuZWFzaW5nRm4gfHwgdGhpcy5lYXNpbmdGbjtcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IG9wdC5jYWxsQmFjayB8fCAoKT0+e307XG4gICAgfVxuICAgIG1ha2VGcm9tQ2FsbGJhY2sgKGNhbGxCYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhbGxCYWNrKVxuICAgICAgICByZXR1cm4gbmV3IEVhc2luZ0FuaW1hdG9yKHtcbiAgICAgICAgICAgIGNhbGxCYWNrOiBjYWxsQmFja1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWFzZVByb3AgKG9iaiwgcHJvcERpY3QpIHtcbiAgICAgICAgcHJvcERpY3QgPSBwcm9wRGljdCB8fCB7fTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgdCA9IDAsXG4gICAgICAgICAgICBvdXRfdmFscyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5lYXNpbmdJbnRlcnZhbCk7XG4gICAgICAgIHNlbGYuZWFzaW5nSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKT0+e1xuICAgICAgICAgICAgdCs9IHRoaXMuc3RlcDtcbiAgICAgICAgICAgIGlmICh0ID49IHRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZWFzaW5nSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbEJhY2socHJvcERpY3QpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBwZXJjZW50ID0gdGhpcy5lYXNpbmdGbih0LCAwLCAxLCB0aGlzLmR1cmF0aW9uKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByb3BEaWN0KS5mb3JFYWNoKChrZXksIGkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgb2xkX3ZhbCA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgIG91dF92YWxzW2tleV0gPSBvbGRfdmFsIC0gcGVyY2VudCoob2xkX3ZhbCAtIHByb3BEaWN0W2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNhbGxCYWNrKG91dF92YWxzKTtcbiAgICAgICAgfSwgdGhpcy5zdGVwKTtcbiAgICB9XG59O1xuIiwiLyoqXG4gKiBBIGhlbHBlciBjbGFzcyB0byBzaW1wbGlmeSByZWdpc3RlcmluZyBBbmd1bGFyIGNvbXBvbmVudHMgYW5kIHByb3ZpZGUgYSBjb25zaXN0ZW50IHN5bnRheCBmb3IgZG9pbmcgc28uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlcihhcHBOYW1lKSB7XG5cbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoYXBwTmFtZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXJlY3RpdmU6IGRpcmVjdGl2ZSxcbiAgICAgICAgY29udHJvbGxlcjogY29udHJvbGxlcixcbiAgICAgICAgc2VydmljZTogc2VydmljZSxcbiAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLFxuICAgICAgICBmYWN0b3J5OiBmYWN0b3J5XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRpcmVjdGl2ZShuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG5cbiAgICAgICAgY29uc3RydWN0b3JGbiA9IF9ub3JtYWxpemVDb25zdHJ1Y3Rvcihjb25zdHJ1Y3RvckZuKTtcblxuICAgICAgICBpZiAoIWNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBlbXB0eSBjb21waWxlIGZ1bmN0aW9uIGlmIG5vbmUgd2FzIGRlZmluZWQuXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5jb21waWxlID0gKCkgPT4ge307XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3JpZ2luYWxDb21waWxlRm4gPSBfY2xvbmVGdW5jdGlvbihjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5jb21waWxlKTtcblxuICAgICAgICAvLyBEZWNvcmF0ZSB0aGUgY29tcGlsZSBtZXRob2QgdG8gYXV0b21hdGljYWxseSByZXR1cm4gdGhlIGxpbmsgbWV0aG9kIChpZiBpdCBleGlzdHMpXG4gICAgICAgIC8vIGFuZCBiaW5kIGl0IHRvIHRoZSBjb250ZXh0IG9mIHRoZSBjb25zdHJ1Y3RvciAoc28gYHRoaXNgIHdvcmtzIGNvcnJlY3RseSkuXG4gICAgICAgIC8vIFRoaXMgZ2V0cyBhcm91bmQgdGhlIHByb2JsZW0gb2YgYSBub24tbGV4aWNhbCBcInRoaXNcIiB3aGljaCBvY2N1cnMgd2hlbiB0aGUgZGlyZWN0aXZlIGNsYXNzIGl0c2VsZlxuICAgICAgICAvLyByZXR1cm5zIGB0aGlzLmxpbmtgIGZyb20gd2l0aGluIHRoZSBjb21waWxlIGZ1bmN0aW9uLlxuICAgICAgICBfb3ZlcnJpZGUoY29uc3RydWN0b3JGbi5wcm90b3R5cGUsICdjb21waWxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbENvbXBpbGVGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmxpbmsuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKTtcblxuICAgICAgICBhcHAuZGlyZWN0aXZlKG5hbWUsIGZhY3RvcnlBcnJheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnRyb2xsZXIobmFtZSwgY29udHJ1Y3RvckZuKSB7XG4gICAgICAgIGFwcC5jb250cm9sbGVyKG5hbWUsIGNvbnRydWN0b3JGbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlcnZpY2UobmFtZSwgY29udHJ1Y3RvckZuKSB7XG4gICAgICAgIGFwcC5zZXJ2aWNlKG5hbWUsIGNvbnRydWN0b3JGbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb3ZpZGVyKG5hbWUsIGNvbnN0cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLnByb3ZpZGVyKG5hbWUsIGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWN0b3J5KG5hbWUsIGNvbnN0cnVjdG9yRm4pIHtcbiAgICAgICAgY29uc3RydWN0b3JGbiA9IF9ub3JtYWxpemVDb25zdHJ1Y3Rvcihjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgdmFyIGZhY3RvcnlBcnJheSA9IF9jcmVhdGVGYWN0b3J5QXJyYXkoY29uc3RydWN0b3JGbik7XG4gICAgICAgIGFwcC5mYWN0b3J5KG5hbWUsIGZhY3RvcnlBcnJheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBjb25zdHJ1Y3RvckZuIGlzIGFuIGFycmF5IG9mIHR5cGUgWydkZXAxJywgJ2RlcDInLCAuLi4sIGNvbnN0cnVjdG9yKCkge31dXG4gICAgICogd2UgbmVlZCB0byBwdWxsIG91dCB0aGUgYXJyYXkgb2YgZGVwZW5kZW5jaWVzIGFuZCBhZGQgaXQgYXMgYW4gJGluamVjdCBwcm9wZXJ0eSBvZiB0aGVcbiAgICAgKiBhY3R1YWwgY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfbm9ybWFsaXplQ29uc3RydWN0b3IoaW5wdXQpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yRm47XG5cbiAgICAgICAgaWYgKGlucHV0LmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHZhciBpbmplY3RlZCA9IGlucHV0LnNsaWNlKDAsIGlucHV0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgY29uc3RydWN0b3JGbiA9IGlucHV0W2lucHV0Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgY29uc3RydWN0b3JGbi4kaW5qZWN0ID0gaW5qZWN0ZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuID0gaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JGbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgY29uc3RydWN0b3IgZnVuY3Rpb24gaW50byBhIGZhY3RvcnkgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIG5ldyBpbnN0YW5jZSBvZiB0aGF0XG4gICAgICogY29uc3RydWN0b3IsIHdpdGggdGhlIGNvcnJlY3QgZGVwZW5kZW5jaWVzIGF1dG9tYXRpY2FsbHkgaW5qZWN0ZWQgYXMgYXJndW1lbnRzLlxuICAgICAqXG4gICAgICogSW4gb3JkZXIgdG8gaW5qZWN0IHRoZSBkZXBlbmRlbmNpZXMsIHRoZXkgbXVzdCBiZSBhdHRhY2hlZCB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24gd2l0aCB0aGVcbiAgICAgKiBgJGluamVjdGAgcHJvcGVydHkgYW5ub3RhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25zdHJ1Y3RvckZuXG4gICAgICogQHJldHVybnMge0FycmF5LjxUPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jcmVhdGVGYWN0b3J5QXJyYXkoY29uc3RydWN0b3JGbikge1xuICAgICAgICAvLyBnZXQgdGhlIGFycmF5IG9mIGRlcGVuZGVuY2llcyB0aGF0IGFyZSBuZWVkZWQgYnkgdGhpcyBjb21wb25lbnQgKGFzIGNvbnRhaW5lZCBpbiB0aGUgYCRpbmplY3RgIGFycmF5KVxuICAgICAgICB2YXIgYXJncyA9IGNvbnN0cnVjdG9yRm4uJGluamVjdCB8fCBbXTtcbiAgICAgICAgdmFyIGZhY3RvcnlBcnJheSA9IGFyZ3Muc2xpY2UoKTsgLy8gY3JlYXRlIGEgY29weSBvZiB0aGUgYXJyYXlcbiAgICAgICAgLy8gVGhlIGZhY3RvcnlBcnJheSB1c2VzIEFuZ3VsYXIncyBhcnJheSBub3RhdGlvbiB3aGVyZWJ5IGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXkgaXMgdGhlIG5hbWUgb2YgYVxuICAgICAgICAvLyBkZXBlbmRlbmN5LCBhbmQgdGhlIGZpbmFsIGl0ZW0gaXMgdGhlIGZhY3RvcnkgZnVuY3Rpb24gaXRzZWxmLlxuICAgICAgICBmYWN0b3J5QXJyYXkucHVzaCgoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgLy9yZXR1cm4gbmV3IGNvbnN0cnVjdG9yRm4oLi4uYXJncyk7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3JGbiguLi5hcmdzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlW2tleV0gPSBpbnN0YW5jZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmFjdG9yeUFycmF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb25lIGEgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gb3JpZ2luYWxcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2Nsb25lRnVuY3Rpb24ob3JpZ2luYWwpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgYW4gb2JqZWN0J3MgbWV0aG9kIHdpdGggYSBuZXcgb25lIHNwZWNpZmllZCBieSBgY2FsbGJhY2tgLlxuICAgICAqIEBwYXJhbSBvYmplY3RcbiAgICAgKiBAcGFyYW0gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9vdmVycmlkZShvYmplY3QsIG1ldGhvZE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIG9iamVjdFttZXRob2ROYW1lXSA9IGNhbGxiYWNrKG9iamVjdFttZXRob2ROYW1lXSlcbiAgICB9XG5cbn1cbiJdfQ==
