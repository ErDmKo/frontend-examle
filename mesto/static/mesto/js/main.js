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
                    if (Math.abs(element.style.opacity - 1) > 0.3) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2suanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpbi5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpblBhZ2UvZGlyZWN0aXZlcy9sb2dvRGlyZWN0aXZlcy5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbW92aWVTaG93L2NvbnRyb2xsZXJzL3BsYXlTaG93LmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9tb3ZpZVNob3cvY29udHJvbGxlcnMvc2hvd3NGaWx0ZXJDb250cm9sbGVyLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9tb3ZpZVNob3cvZGlyZWN0aXZlcy9jdXN0b21TZWxlY3QuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9kcmFnZ0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9ob3Jpem9udGFsU2Nyb2xsLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL2RpcmVjdGl2ZXMvc2xpZGVyLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL3NlcnZpY2VzL2Vhc2luZ0FuaW1hdG9yLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy91dGlscy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBYSxjQUFjO2FBQWQsY0FBYzs4QkFBZCxjQUFjOzs7aUJBQWQsY0FBYzs7ZUFPbkIsY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN4QixzQkFBVSxDQUFDLFlBQUk7QUFDWCx1QkFBTyxDQUNGLFdBQVcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7YUFDOUMsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0IsbUJBQU8sQ0FDRixRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUNuQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FDN0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUMsRUFBQztBQUNwQixpQkFBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO0FBQ2xCLG9CQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3BDLHVCQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUMzQywwQkFBVSxDQUFDLFlBQUk7QUFDWCwwQkFB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Q0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQztBQUNELG1CQUFPLFFBQVEsQ0FBQztTQUNuQixDQUFDLENBQUM7O0FBRUgsZUFBTyxZQUFZLENBQUM7S0FDdkI7Ozs7Ozs7QUFPRCxhQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUU7QUFDOUIsZUFBTyxZQUFXO0FBQ2QsbUJBQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDMUMsQ0FBQztLQUNMOzs7Ozs7OztBQVFELGFBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO0FBQzdDLGNBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7S0FDcEQ7Q0FFSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgY2xhc3MgTWVzdG9DbGlja0ZhZGUge1xuICAgIHN0YXRpYyBnZXQgVElNRU9VVCgpIHtcbiAgICAgICAgcmV0dXJuIDIwMDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBGQURFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2ZhZGUnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKE1lc3RvQ2xpY2tGYWRlLkZBREVfQ0xBU1MpXG4gICAgICAgIH0sIE1lc3RvQ2xpY2tGYWRlLlRJTUVPVVQpO1xuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAuYWRkQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgICAgIC5maW5kKCdhLmZhZGVBbmltYXRvcl9fYW5jb3InKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGxldCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIgeyBcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBmZWVkYmFja1Jlc291cmNlKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tSZXNvdXJjZSA9IGZlZWRiYWNrUmVzb3VyY2U7XG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSAnJztcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XG4gICAgfVxuICAgIHN1Ym1pdChmb3JtKXtcbiAgICAgICAgaWYgKGZvcm0uJGludmFsaWQpIHtcbiAgICAgICAgICAgIGZvcm0uJHNldERpcnR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZmVlZGJhY2sgPSBuZXcgdGhpcy5mZWVkYmFja1Jlc291cmNlKHRoaXMuZm9ybURhdGEpO1xuICAgICAgICAgICAgZmVlZGJhY2suJHNhdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrVG9nZ2xlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZFRvZ2dsZXIoYXR0cnMubWVzdG9GZWVkYmFja1RvZ2dsZSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHRoaXMucG9wVXBTZXJpdmljZSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrQ29udG5pZXIge1xuICAgIHN0YXRpYyBnZXQgVE9HR0xFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2ZpeGVkUG9wVXAnOyBcbiAgICB9XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudG9nZ2xlQ2xhc3MoTWVzdG9GZWVkYmFja0NvbnRuaWVyLlRPR0dMRV9DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlXG4gICAgICAgICAgICAuYWRkQ29udGFuaWVyKGF0dHJzLm1lc3RvRmVlZGJhY2tDb250YW5pZXIsIGhhbmRsZXIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrQ2xvc2Uge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcihwb3BVcFNlcml2aWNlKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZSA9IHBvcFVwU2VyaXZpY2U7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gdGhpcy5wb3BVcFNlcml2aWNlLmNsb3NlKGF0dHJzLm1lc3RvRmVlZGJhY2tDbG9zZSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHRoaXMucG9wVXBTZXJpdmljZSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrSXRlbSB7XG4gICAgc3RhdGljIGdldCBUT0dHTEVfQ0xBU1MoKSB7XG4gICAgICAgIHJldHVybiAnYWN0aXZlJztcbiAgICB9XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICB0b2dnbGUoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnRvZ2dsZUNsYXNzKE1lc3RvRmVlZGJhY2tJdGVtLlRPR0dMRV9DTEFTUyk7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZEl0ZW0oYXR0cnMubWVzdG9GZWVkYmFja0l0ZW0sIHRoaXMudG9nZ2xlLmJpbmQodGhpcywgZWxlbWVudCkpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGZWVkYmFja1Jlc291cmNlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHJlc291cmNlKSB7XG4gICAgICAgIHJldHVybiAkcmVzb3VyY2UoQ09ORklHLnVybHMuZmVlZGJhY2tGb3JtKTtcbiAgICB9XG59XG4iLCJjbGFzcyBQb3BVcCB7XG4gICAgY29uc3RydWN0b3IoaXRlbUhhbmRsZXIsIG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLml0ZW1IYW5kbGVyID0gaXRlbUhhbmRsZXI7XG4gICAgfVxuICAgIHRvZ2dsZUl0ZW0oKSB7XG4gICAgICAgIGlmIChQb3BVcC5jb250YW5pZXJIYW5kbGVyKSB7XG4gICAgICAgICAgICBQb3BVcC5jb250YW5pZXJIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtSGFuZGxlcigpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQb3BVcFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvcFVwcyA9IHt9O1xuICAgIH1cbiAgICBhZGRJdGVtKGl0ZW1OYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMucG9wVXBzW2l0ZW1OYW1lXSA9IG5ldyBQb3BVcChoYW5kbGVyLCBpdGVtTmFtZSk7XG4gICAgfVxuICAgIGNsb3NlKGl0ZW1OYW1lKSB7XG4gICAgICAgIGlmICghaXRlbU5hbWUpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucG9wVXBzKS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BVcHNba2V5XS50b2dnbGVJdGVtKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcFVwID0gdGhpcy5wb3BVcHNbaXRlbU5hbWVdXG4gICAgICAgICAgICBpZiAocG9wVXApIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcG9wVXAudG9nZ2xlSXRlbSgpXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZENvbnRhbmllcihwb3BVcE5hbWUsIGhhbmRlcikge1xuICAgICAgICBQb3BVcC5jb250YW5pZXJIYW5kbGVyID0gaGFuZGVyO1xuICAgIH1cbiAgICBhZGRUb2dnbGVyKHBvcFVwTmFtZSkge1xuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIChbdGhpcy5wb3BVcHNbcG9wVXBOYW1lXV0gfHwgW10pXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHBvcFVwKT0+e1xuICAgICAgICAgICAgICAgICAgICBwb3BVcC50b2dnbGVJdGVtKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAnLi91dGlscy9yZWdpc3Rlcic7XG5cbmltcG9ydCB7IFxuICAgIFNsaWRlck1haW4sXG4gICAgU2xpZGVyQ29udGVudCxcbiAgICBTbGlkZXJDb250cm9sbCxcbiAgICBTbGlkZXJDb3VudGVyLFxuICAgIFNsaWRlckl0ZW0sXG4gICAgU21hbGxTbGlkZXJJdGVtLFxuICAgIFVuaVNsaWRlckl0ZW1cbn0gZnJvbSAnLi90b3BOZXdzL2RpcmVjdGl2ZXMvc2xpZGVyJztcbmltcG9ydCB7IEVhc2luZ0FuaW1hdG9yIH0gZnJvbSAnLi90b3BOZXdzL3NlcnZpY2VzL2Vhc2luZ0FuaW1hdG9yJztcbmltcG9ydCB7IERyYWdnQ29udHJvbGxlciB9IGZyb20gJy4vdG9wTmV3cy9kaXJlY3RpdmVzL2RyYWdnQ29udHJvbGxlcic7XG5pbXBvcnQgeyBIb3Jpem9udGFsU2Nyb2xsIH0gZnJvbSAnLi90b3BOZXdzL2RpcmVjdGl2ZXMvaG9yaXpvbnRhbFNjcm9sbCc7XG5cbmltcG9ydCB7IE1lc3RvQ2xpY2tGYWRlIH0gZnJvbSAnLi9jbGlja0ZhZGUvZGlyZWN0aXZlcy9jbGlja0ZhZGUnO1xuXG5pbXBvcnQgeyBQb3BVcFNlcnZpY2UgfSBmcm9tICcuL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZSc7XG5pbXBvcnQgeyBGZWVkYmFja1Jlc291cmNlIH0gZnJvbSAnLi9mZWVkQmFjay9zZXJ2aWNlcy9mZWVkYmFja1Jlc291cmNlJztcbmltcG9ydCB7IEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIgfSBmcm9tICcuL2ZlZWRCYWNrL2NvbnRyb2xsZXJzL0Zvcm1Db250cm9sbGVyJztcbmltcG9ydCB7IFxuICAgIE1lc3RvRmVlZGJhY2tJdGVtLFxuICAgIE1lc3RvRmVlZGJhY2tUb2dnbGUsXG4gICAgTWVzdG9GZWVkYmFja0Nsb3NlLFxuICAgIE1lc3RvRmVlZGJhY2tDb250bmllclxufSBmcm9tICcuL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2snO1xuXG5pbXBvcnQgeyBcbiAgICBTVkdMb2dvSG92ZXIsXG4gICAgU1ZHTG9nb0l0ZW0sXG4gICAgU1ZHTG9nb0NvbnRhbmllcixcbiAgICBTVkdMb2dvQmFja2dyb3VuZFxufSBmcm9tICcuL21haW5QYWdlL2RpcmVjdGl2ZXMvbG9nb0RpcmVjdGl2ZXMnO1xuXG5pbXBvcnQgeyBTaG93TW92aWVDb250cm9sbGVyIH0gZnJvbSAnLi9tb3ZpZVNob3cvY29udHJvbGxlcnMvcGxheVNob3cuanMnXG5cbmltcG9ydCB7IFxuICAgIE1lc3RvQ3VzdG9tU2VsZWN0LFxuICAgIE1lc3RvQ3VzdG9tU2VsZWN0SXRlbSxcbiAgICBNZXN0b0N1c3RvbVNlbGVjdFBsYWNlaG9sZGVyXG59IGZyb20gJy4vbW92aWVTaG93L2RpcmVjdGl2ZXMvY3VzdG9tU2VsZWN0LmpzJ1xuXG5pbXBvcnQgeyBTaG93c0ZpbHRlckNvbnRyb2xsZXIgfSBmcm9tICcuL21vdmllU2hvdy9jb250cm9sbGVycy9zaG93c0ZpbHRlckNvbnRyb2xsZXIuanMnIFxuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ21lc3RvJywgWyduZ1Jlc291cmNlJywgJ3lvdXR1YmUtZW1iZWQnXSk7XG5cbnJlZ2lzdGVyKCdtZXN0bycpXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyTWFpbicsIFNsaWRlck1haW4pXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyQ29udHJvbGwnLCBTbGlkZXJDb250cm9sbClcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJDb250ZW50JywgU2xpZGVyQ29udGVudClcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJJdGVtJywgU2xpZGVySXRlbSlcbiAgICAuZGlyZWN0aXZlKCdzbWFsbFNsaWRlckl0ZW0nLCBTbWFsbFNsaWRlckl0ZW0pXG4gICAgLmRpcmVjdGl2ZSgndW5pU2xpZGVySXRlbScsIFVuaVNsaWRlckl0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyQ291bnRlcicsIFNsaWRlckNvdW50ZXIpXG4gICAgLmRpcmVjdGl2ZSgnZHJhZ2dDb250cm9sbGVyJywgRHJhZ2dDb250cm9sbGVyKVxuICAgIC5kaXJlY3RpdmUoJ2hvcml6b250YWxTY3JvbGwnLCBIb3Jpem9udGFsU2Nyb2xsKVxuICAgIC5mYWN0b3J5KCdlYXNpbmdBbmltYXRvcicsIEVhc2luZ0FuaW1hdG9yKVxuXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja0l0ZW0nLCBNZXN0b0ZlZWRiYWNrSXRlbSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrVG9nZ2xlJywgTWVzdG9GZWVkYmFja1RvZ2dsZSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrQ2xvc2UnLCBNZXN0b0ZlZWRiYWNrQ2xvc2UpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja0NvbnRhbmllcicsIE1lc3RvRmVlZGJhY2tDb250bmllcilcbiAgICAuc2VydmljZSgncG9wVXBTZXJpdmljZScsIFBvcFVwU2VydmljZSlcblxuICAgIC5zZXJ2aWNlKCdmZWVkYmFja1Jlc291cmNlJywgRmVlZGJhY2tSZXNvdXJjZSlcbiAgICAuY29udHJvbGxlcignZmVlZGJhY2tGb3JtQ29udHJvbGxlcicsIEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIpXG5cbiAgICAuZGlyZWN0aXZlKCdtZXN0b0NsaWNrRmFkZScsIE1lc3RvQ2xpY2tGYWRlKVxuXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9Mb2dvSG92ZXInLCBTVkdMb2dvSG92ZXIpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9TdmdJdGVtJywgU1ZHTG9nb0l0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9TdmdMb2dvJywgU1ZHTG9nb0NvbnRhbmllcilcbiAgICAuZGlyZWN0aXZlKCdtZXN0b1N2Z0JhY2tncm91bmQnLCBTVkdMb2dvQmFja2dyb3VuZClcblxuICAgIC5jb250cm9sbGVyKCdzaG93TW92aWVDb250cm9sbGVyJywgU2hvd01vdmllQ29udHJvbGxlcilcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvQ3VzdG9tU2VsZWN0JywgTWVzdG9DdXN0b21TZWxlY3QpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9DdXN0b21TZWxlY3RJdGVtJywgTWVzdG9DdXN0b21TZWxlY3RJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvQ3VzdG9tU2VsZWN0UGxhY2Vob2xkZXInLCBNZXN0b0N1c3RvbVNlbGVjdFBsYWNlaG9sZGVyKVxuXG4gICAgLmNvbnRyb2xsZXIoJ3Nob3dzRmlsdGVyQ29udHJvbGxlcicsIFNob3dzRmlsdGVyQ29udHJvbGxlcilcblxuYXBwLmNvbmZpZygoJHJlc291cmNlUHJvdmlkZXIsICRodHRwUHJvdmlkZXIpPT4ge1xuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnY3NyZnRva2VuJztcbiAgICAkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gJ1gtQ1NSRlRva2VuJztcbiAgICAkcmVzb3VyY2VQcm92aWRlci5kZWZhdWx0cy5zdHJpcFRyYWlsaW5nU2xhc2hlcyA9IGZhbHNlO1xufSlcbmFuZ3VsYXJcbiAgICAuZWxlbWVudChkb2N1bWVudClcbiAgICAucmVhZHkoYW5ndWxhci5ib290c3RyYXAuYmluZChhbmd1bGFyLCBkb2N1bWVudCwgWydtZXN0byddKSk7XG4iLCJjbGFzcyBMb2dvQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICAgICAgdGhpcy5pbWdVcmxzID0ge307XG4gICAgfVxuICAgIGFkZEltYWdlKG5hbWUsIHVybCkge1xuICAgICAgICB0aGlzLmltZ1VybHNbbmFtZV0gPSB1cmw7XG4gICAgfVxuICAgIGFkZEl0ZW0obmFtZSwgaW5mbykge1xuICAgICAgICB0aGlzLml0ZW1zW25hbWVdID0gaW5mbztcbiAgICB9XG4gICAgYWRkQmFja2dyb3VuZChzaG93LCBoaWRlKXtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0ge1xuICAgICAgICAgICAgc2hvdzogc2hvdyxcbiAgICAgICAgICAgIGhpZGU6IGhpZGVcbiAgICAgICAgfVxuICAgIH1cbiAgICB1bmhvdmVyKCkge1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLml0ZW1zKS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2tleV0uZGlzYWJsZWQoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5oaWRlKCk7XG4gICAgfVxuICAgIGhvdmVyKG5hbWUpIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnNob3codGhpcy5pbWdVcmxzW25hbWVdKTtcbiAgICAgICAgdGhpcy5pdGVtc1tuYW1lXS5hY3RpdmUoKTtcbiAgICB9XG4gICAgY2FsbChuYW1lKSB7XG4gICAgICAgIHRoaXMuaXRlbXNbbmFtZV0uY2xpY2soKTtcbiAgICB9XG4gICAgc3RhdGljIGZhY3RvcnkoLi4uYXJncykge1xuICAgICAgICBMb2dvQ29udHJvbGxlci5pbnN0YW5jZSA9IG5ldyBMb2dvQ29udHJvbGxlciguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIExvZ29Db250cm9sbGVyLmluc3RhbmNlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvQ29udGFuaWVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBMb2dvQ29udHJvbGxlci5mYWN0b3J5O1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvQmFja2dyb3VuZCB7XG4gICAgc3RhdGljIGdldCBBQ1RJVkVfQ0xBU1MoKXtcbiAgICAgICAgcmV0dXJuICdhY3RpdmUnO1xuICAgIH0gXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdebWVzdG9TdmdMb2dvJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29udHJvbGxlci5hZGRCYWNrZ3JvdW5kKCh1cmwpPT57XG4gICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICBlbGVtZW50LmNzcygnYmFja2dyb3VuZC1pbWFnZScsIHVybCA/IGB1cmwoJHt1cmx9KWAgOiAnbm9uZScpO1xuICAgICAgICB9LCAoKT0+e1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhTVkdMb2dvQmFja2dyb3VuZC5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU1ZHTG9nb0hvdmVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXm1lc3RvU3ZnTG9nbyc7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjb250cm9sbGVyKSB7XG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlZW50ZXInLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci5ob3ZlcihhdHRycy5tZXN0b0xvZ29Ib3Zlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50Lm9uKCdtb3VzZWxlYXZlJywgKCk9PntcbiAgICAgICAgICAgIGNvbnRyb2xsZXIudW5ob3ZlcihhdHRycy5tZXN0b0xvZ29Ib3Zlcik7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsICgpPT57XG4gICAgICAgICAgICBjb250cm9sbGVyLmNhbGwoYXR0cnMubWVzdG9Mb2dvSG92ZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU1ZHTG9nb0l0ZW0ge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdebWVzdG9TdmdMb2dvJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY29udHJvbGxlci5hZGRJdGVtKGF0dHJzLm1lc3RvU3ZnSXRlbSwge1xuICAgICAgICAgICAgY2xpY2s6ICgpPT57XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhdHRycy5ocmVmO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFjdGl2ZTogKCk9PntcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICgpPT57XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhTVkdMb2dvQmFja2dyb3VuZC5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFhdHRycy5pbWdVcmwpIHJldHVybjtcblxuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkSW1hZ2UoYXR0cnMubWVzdG9TdmdJdGVtLCBhdHRycy5pbWdVcmwpO1xuICAgICAgICB9KTtcbiAgICAgICAgaW1nLnNyYyA9IGF0dHJzLmltZ1VybDtcbiAgICAgICAgaWYoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICBjb250cm9sbGVyLmFkZEltYWdlKGF0dHJzLm1lc3RvU3ZnSXRlbSwgYXR0cnMuaW1nVXJsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGNsYXNzIFNob3dNb3ZpZUNvbnRyb2xsZXIge1xuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJHRpbWVvdXQpe1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLnZpZGVvID0ge307XG4gICAgICAgICRzY29wZS4kb24oJ3lvdXR1YmUucGxheWVyLnBsYXlpbmcnLCAoJGV2ZW50LCBwbGF5ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCB2aWRlb09iaiA9IHRoaXMuZ2V0VmlkZW9PYmoocGxheWVyKTtcbiAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgdmlkZW9PYmouYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICAkc2NvcGUuJG9uKCd5b3V0dWJlLnBsYXllci5lbmRlZCcsICgkZXZlbnQsIHBsYXllcikgPT4ge1xuICAgICAgICAgICAgbGV0IHZpZGVvT2JqID0gdGhpcy5nZXRWaWRlb09iaihwbGF5ZXIpO1xuICAgICAgICAgICAgdmlkZW9PYmouYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRWaWRlb09iaihwbGF5ZXIpe1xuICAgICAgICBsZXQgdmlkZW9JZCA9IHBsYXllci5nZXRWaWRlb0RhdGEoKS52aWRlb19pZDtcbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvW3ZpZGVvSWRdKSB7XG4gICAgICAgICAgICB0aGlzLnZpZGVvW3ZpZGVvSWRdID0ge1xuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9hZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52aWRlb1t2aWRlb0lkXTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hvd3NGaWx0ZXJDb250cm9sbGVyIHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93KSB7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0ge307XG4gICAgfVxuICAgIHNlYXJjaCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdfT8ke2pRdWVyeS5wYXJhbSh0aGlzLnNlbGVjdCl9YDtcbiAgICB9XG59XG4iLCJjbGFzcyBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHZhciBzZXRQbGFjZWhvbGRlciA9ICh0ZXh0KT0+e307XG5cbiAgICAgICAgdGhpcy50b2dnbGVPcGVuID0gICgpPT57fTtcbiAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlciA9IChmdSk9PntcbiAgICAgICAgICAgIHNldFBsYWNlaG9sZGVyID0gZnU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRUb2dnbGVPcGVuID0gKGZ1KT0+e1xuICAgICAgICAgICAgdGhpcy50b2dnbGVPcGVuID0gZnU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2VsZWN0T3B0aW9uID0gKHRleHQpPT57XG4gICAgICAgICAgICBzZXRQbGFjZWhvbGRlcih0ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZmFjdG9yeSguLi5hcmdzKSB7XG4gICAgICAgIE1lc3RvQ3VzdG9tU2VsZWN0Q29udHJvbGxlci5pbnN0YW5jZSA9IG5ldyBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lc3RvQ3VzdG9tU2VsZWN0IHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cblx0Y29uc3RydWN0b3IoJGRvY3VtZW50KXtcblx0XHR0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIuZmFjdG9yeTtcbiAgICAgICAgdGhpcy4kZG9jdW1lbnQgPSAkZG9jdW1lbnQ7XG4gICAgfVxuICAgIFxuICAgIGxpbmsgKCRzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIpe1xuICAgICAgICBsZXQgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBhbmd1bGFyLmVsZW1lbnQoZS50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKCEodGFyZ2V0LmlzKGVsZW1lbnQpIHx8IHRhcmdldC5jbG9zZXN0KGVsZW1lbnQpLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnRyb2xsZXIuc2V0VG9nZ2xlT3BlbigoKT0+e1xuICAgICAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgaWYoZWxlbWVudC5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KHRoaXMuJGRvY3VtZW50KS5vbignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQodGhpcy4kZG9jdW1lbnQpLm9mZignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0N1c3RvbVNlbGVjdFBsYWNlaG9sZGVyIHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHR0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuXHRcdHRoaXMucmVxdWlyZSA9ICdebWVzdG9DdXN0b21TZWxlY3QnO1xuICAgIH1cbiAgICBsaW5rICgkc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdXN0b21TZWxlY3RDb250cm9sbGVyKSB7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGN1c3RvbVNlbGVjdENvbnRyb2xsZXIudG9nZ2xlT3BlbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgY3VzdG9tU2VsZWN0Q29udHJvbGxlci5zZXRQbGFjZWhvbGRlcigodGV4dCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0KHRleHQpO1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9DdXN0b21TZWxlY3RJdGVtIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yZXN0cmljdCA9ICdBJztcblx0XHR0aGlzLnJlcXVpcmUgPSAnXm1lc3RvQ3VzdG9tU2VsZWN0JztcbiAgICB9XG4gICAgbGluaygkc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdXN0b21TZWxlY3RDb250cm9sbGVyKXtcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY3VzdG9tU2VsZWN0Q29udHJvbGxlci5zZWxlY3RPcHRpb24oZWxlbWVudC50ZXh0KCkpXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERyYWdnQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ14/c2xpZGVyTWFpbic7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIHZhciBkZWx0YV9pbmZvID0gMCxcbiAgICAgICAgICAgIHN0YXJ0X2luZm8gPSAwLFxuICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgIC5vbigndG91Y2hzdGFydCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBkZWx0YV9pbmZvID0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICBzdGFydF9pbmZvID0gZGVsdGFfaW5mbztcbiAgICAgICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ3RvdWNobW92ZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoZGVsdGFfaW5mbyAhPSB0b3VjaC5zY3JlZW5YKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bW0gKz0gZGVsdGFfaW5mbyAtIHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCd0b3VjaGVuZCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHN1bW0pID4gMTAwICYmIHNsaWRlck1haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJNYWluLm5leHQoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJNYWluLm5leHQoLTEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEhvcml6b250YWxTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSdcbiAgICB9XG4gICAgbGluaygkc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHZhciB0aW1lb3V0LFxuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRbMF0sXG4gICAgICAgICAgICBkZWx0YV9zdW0gPSAwLFxuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICBIYW1zdGVyKGVsZW1lbnQpLndoZWVsKChlLCBkZWx0YSwgZGVsdGFYLCBkZWx0YVkpPT57XG4gICAgICAgICAgICBpZiAoZGVsdGFYICYmICFkZWx0YVkpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgZGVsdGFfc3VtID0gMDtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZGVsdGFfc3VtICs9IGRlbHRhWSo4IHx8IDA7XG4gICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoL01hY2ludG9zaC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQgLSBkZWx0YV9zdW07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0IC0gZGVsdGFfc3VtKjE1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWx0YV9zdW0gPSAwO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIH0sIDEpO1xuXG4gICAgICAgIH0pICAgIFxuICAgIH1cbn1cbiIsImNsYXNzIFNsaWRlckNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuc2xpZGUgPSAwO1xuICAgICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuc2V0U2xpZGUgPSAoKT0+e307XG4gICAgICAgIHRoaXMubW92ZVRvU2xpZGVUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gICAgc2V0IHNjcm9sbFBvc2l0aW9uKHZhbCl7XG4gICAgICAgIHRoaXMuc2xpZGUgPSB0aGlzLml0ZW1zLnJlZHVjZSgob3V0SW5kZXgsIGl0ZW0sIGluZGV4KT0+e1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHZhbCArIGl0ZW0uZWxlbUluZm8ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBpZiAoaXRlbS5lbGVtSW5mby5zZXRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmVsZW1JbmZvLnNldEFjdGl2ZSh2YWwgLSBpdGVtLmVsZW1JbmZvLm9mZnNldExlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaXRlbS5lbGVtSW5mby5jZW50ZXIgPCBjZW50ZXIpIHtcbiAgICAgICAgICAgICAgICBvdXRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dEluZGV4O1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSB2YWw7XG4gICAgICAgIHRoaXMuc2V0U2xpZGUodGhpcy5zbGlkZSk7XG4gICAgfVxuICAgIG1vdmVUb1NsaWRlKHBvc2l0aW9uKXtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubW92ZVRvU2xpZGVUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIodGhpcy5pdGVtc1twb3NpdGlvbl0uZWxlbUluZm8ub2Zmc2V0TGVmdCwgdHJ1ZSk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5wdXNoKGl0ZW0pIC0gMTtcbiAgICAgICAgcmV0dXJuIChuZXdJbmZvKSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XS5lbGVtSW5mbyA9IG5ld0luZm87XG4gICAgICAgICAgICB0aGlzLm1vdmVUb1NsaWRlKHRoaXMuc2xpZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZENvbnRlbnQoaGFuZGxlcikge1xuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH1cbiAgICBuZXh0KGRlbHRhKSB7XG4gICAgICAgIGxldCBuZXh0ID0gdGhpcy5zbGlkZSArIGRlbHRhO1xuICAgICAgICBpZiAobmV4dCA+PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgbmV4dCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZihuZXh0IDwgMCkge1xuICAgICAgICAgICAgbmV4dCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNsaWRlID0gbmV4dDtcbiAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZSh0aGlzLnNsaWRlKTtcbiAgICB9XG4gICAgYWRkQ29udHJvbGxlcihkZWx0YSkge1xuICAgICAgICBsZXQgaGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHQoZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgIH1cbiAgICBzZXRDb3VudGVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTbGlkZSA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gPSAwO1xuICAgIH1cbiAgICBzdGF0aWMgZmFjdG9yeSguLi5hcmdzKSB7XG4gICAgICAgIFNsaWRlckNvbnRyb2xsZXIuaW5zdGFuY2UgPSBuZXcgU2xpZGVyQ29udHJvbGxlciguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIFNsaWRlckNvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlck1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBTbGlkZXJDb250cm9sbGVyLmZhY3Rvcnk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbnRlbnQge1xuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKGVhc2luZ0FuaW1hdG9yKSB7XG4gICAgICAgIHRoaXMuZWFzaW5nQW5pbWF0b3IgPSBlYXNpbmdBbmltYXRvclxuICAgICAgICB0aGlzLmVhc2luZ0FuaW1hdG9yLmNhbGxCYWNrID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGFuaW1hdGUoaW5mbykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdCA9IGluZm8ubGVmdDtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFswXTtcbiAgICAgICAgc2xpZGVyTWFpbi5hZGRDb250ZW50KCh2YWwsIGFuaW1hdGUpPT57XG4gICAgICAgICAgICBpZiAoIWFuaW1hdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdCA9IHZhbFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVhc2luZ0FuaW1hdG9yLmVhc2VQcm9wKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5lbGVtZW50LnNjcm9sbExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHZhbFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50Lm9uKCdzY3JvbGwnLCAoKT0+e1xuICAgICAgICAgICAgc2xpZGVyTWFpbi5zY3JvbGxQb3NpdGlvbiA9IHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb3VudGVyIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXnNsaWRlck1haW4nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKCRzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgc2xpZGVyTWFpbi5zZXRDb3VudGVyKCh2YWwpPT57XG4gICAgICAgICAgICB0aGlzLiR0aW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkU2xpZGUgPSAoMWU0K3ZhbCsxK1wiXCIpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlckl0ZW0ge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93KSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9IGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KTtcbiAgICAgICAgdGhpcy5lbGVtcyA9IFtdO1xuICAgIH1cbiAgICBnZXRFbGVtSW5mbyhpbmRleCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbXNbaW5kZXhdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2Zmc2V0TGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgY2VudGVyOiBlbGVtZW50Lm9mZnNldExlZnQgKyBlbGVtZW50Lm9mZnNldFdpZHRoLzIsXG4gICAgICAgICAgICBvZmZzZXRXaWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmVsZW1zLnB1c2goZWxlbWVudFswXSkgLSAxO1xuICAgICAgICBsZXQgaGFuZGxlciA9IHNsaWRlck1haW4uYWRkSXRlbSh7XG4gICAgICAgICAgICBlbGVtOiB0aGlzLmVsZW1zW2luZGV4XSxcbiAgICAgICAgICAgIGVsZW1JbmZvOiB0aGlzLmdldEVsZW1JbmZvKGluZGV4KVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT57XG4gICAgICAgICAgICBoYW5kbGVyKHRoaXMuZ2V0RWxlbUluZm8oaW5kZXgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFVuaVNsaWRlckl0ZW0gZXh0ZW5kcyBTbGlkZXJJdGVtIHtcbiAgICBnZXRFbGVtSW5mbyhpbmRleCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCA8IDgwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmdldEVsZW1JbmZvKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbXNbaW5kZXhdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2Zmc2V0TGVmdDogIWluZGV4PyAwOlxuICAgICAgICAgICAgICAgIGVsZW1lbnQub2Zmc2V0TGVmdCAtIHRoaXMuZWxlbXNbMF0ub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIGNlbnRlcjogIWluZGV4PyBlbGVtZW50Lm9mZnNldExlZnQgKyBlbGVtZW50Lm9mZnNldFdpZHRoLzIgOlxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbXNbaW5kZXgtMV0ub2Zmc2V0TGVmdCArIHRoaXMuZWxlbXNbaW5kZXgtMV0ub2Zmc2V0V2lkdGgvMlxuICAgICAgICAgICAgICAgICArIGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBvZmZzZXRXaWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIHNldEFjdGl2ZTogKGRlbHRhKT0+e1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KDAsIDEuMi1NYXRoLmFicyhkZWx0YS9lbGVtZW50Lm9mZnNldFdpZHRoKSk7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVsZW1lbnQuc3R5bGUub3BhY2l0eSAtIDEpID4gMC4zKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNtYWxsU2xpZGVySXRlbSBleHRlbmRzIFNsaWRlckl0ZW0ge1xuICAgIFxuICAgIGdldEVsZW1JbmZvKGluZGV4KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIDwgODAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0RWxlbUluZm8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtc1tpbmRleF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZzZXRMZWZ0OiBlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgY2VudGVyOiBlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50Lm9mZnNldFdpZHRoLzIsXG4gICAgICAgICAgICBvZmZzZXRXaWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICB9XG4gICAgfVxufVxuICAgIFxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbnRyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBzbGlkZXJNYWluLmFkZENvbnRyb2xsZXIoK2F0dHJzLnNsaWRlckNvbnRyb2xsKVxuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZChzbGlkZXJNYWluKSlcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRWFzaW5nQW5pbWF0b3Ige1xuXG4gICAgY29uc3RydWN0b3Iob3B0KXtcbiAgICAgICAgdmFyIG9wdCA9IHt9O1xuICAgICAgICB0aGlzLmVhc2luZ0ludGVydmFsID0gb3B0LmVhc2luZ0ludGVydmFsO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gb3B0LmR1cmF0aW9uIHx8IDEwMDA7XG4gICAgICAgIHRoaXMuc3RlcCA9IG9wdC5zdGVwIHx8IDUwO1xuICAgICAgICB0aGlzLmVhc2luZ0ZuID0gKHQsIGIsIGMsIGQpID0+e1xuICAgICAgICAgICAgaWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCp0ICsgYjtcbiAgICAgICAgICAgIHJldHVybiAtYy8yICogKCh0LT0yKSp0KnQqdCAtIDIpICsgYjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lYXNpbmdGbiA9IG9wdC5lYXNpbmdGbiB8fCB0aGlzLmVhc2luZ0ZuO1xuICAgICAgICB0aGlzLmNhbGxCYWNrID0gb3B0LmNhbGxCYWNrIHx8ICgpPT57fTtcbiAgICB9XG4gICAgbWFrZUZyb21DYWxsYmFjayAoY2FsbEJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coY2FsbEJhY2spXG4gICAgICAgIHJldHVybiBuZXcgRWFzaW5nQW5pbWF0b3Ioe1xuICAgICAgICAgICAgY2FsbEJhY2s6IGNhbGxCYWNrXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlYXNlUHJvcCAob2JqLCBwcm9wRGljdCkge1xuICAgICAgICBwcm9wRGljdCA9IHByb3BEaWN0IHx8IHt9O1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICB0ID0gMCxcbiAgICAgICAgICAgIG91dF92YWxzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmVhc2luZ0ludGVydmFsKTtcbiAgICAgICAgc2VsZi5lYXNpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICB0Kz0gdGhpcy5zdGVwO1xuICAgICAgICAgICAgaWYgKHQgPj0gdGhpcy5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5lYXNpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhwcm9wRGljdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSB0aGlzLmVhc2luZ0ZuKHQsIDAsIDEsIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcERpY3QpLmZvckVhY2goKGtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvbGRfdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICAgICAgb3V0X3ZhbHNba2V5XSA9IG9sZF92YWwgLSBwZXJjZW50KihvbGRfdmFsIC0gcHJvcERpY3Rba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2FsbEJhY2sob3V0X3ZhbHMpO1xuICAgICAgICB9LCB0aGlzLnN0ZXApO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIEEgaGVscGVyIGNsYXNzIHRvIHNpbXBsaWZ5IHJlZ2lzdGVyaW5nIEFuZ3VsYXIgY29tcG9uZW50cyBhbmQgcHJvdmlkZSBhIGNvbnNpc3RlbnQgc3ludGF4IGZvciBkb2luZyBzby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGFwcE5hbWUpIHtcblxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShhcHBOYW1lKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpcmVjdGl2ZTogZGlyZWN0aXZlLFxuICAgICAgICBjb250cm9sbGVyOiBjb250cm9sbGVyLFxuICAgICAgICBzZXJ2aWNlOiBzZXJ2aWNlLFxuICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgIGZhY3Rvcnk6IGZhY3RvcnlcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGlyZWN0aXZlKG5hbWUsIGNvbnN0cnVjdG9yRm4pIHtcblxuICAgICAgICBjb25zdHJ1Y3RvckZuID0gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yRm4pO1xuXG4gICAgICAgIGlmICghY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGVtcHR5IGNvbXBpbGUgZnVuY3Rpb24gaWYgbm9uZSB3YXMgZGVmaW5lZC5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUgPSAoKSA9PiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcmlnaW5hbENvbXBpbGVGbiA9IF9jbG9uZUZ1bmN0aW9uKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUpO1xuXG4gICAgICAgIC8vIERlY29yYXRlIHRoZSBjb21waWxlIG1ldGhvZCB0byBhdXRvbWF0aWNhbGx5IHJldHVybiB0aGUgbGluayBtZXRob2QgKGlmIGl0IGV4aXN0cylcbiAgICAgICAgLy8gYW5kIGJpbmQgaXQgdG8gdGhlIGNvbnRleHQgb2YgdGhlIGNvbnN0cnVjdG9yIChzbyBgdGhpc2Agd29ya3MgY29ycmVjdGx5KS5cbiAgICAgICAgLy8gVGhpcyBnZXRzIGFyb3VuZCB0aGUgcHJvYmxlbSBvZiBhIG5vbi1sZXhpY2FsIFwidGhpc1wiIHdoaWNoIG9jY3VycyB3aGVuIHRoZSBkaXJlY3RpdmUgY2xhc3MgaXRzZWxmXG4gICAgICAgIC8vIHJldHVybnMgYHRoaXMubGlua2AgZnJvbSB3aXRoaW4gdGhlIGNvbXBpbGUgZnVuY3Rpb24uXG4gICAgICAgIF9vdmVycmlkZShjb25zdHJ1Y3RvckZuLnByb3RvdHlwZSwgJ2NvbXBpbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29tcGlsZUZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29uc3RydWN0b3JGbi5wcm90b3R5cGUubGluaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3JGbi5wcm90b3R5cGUubGluay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pO1xuXG4gICAgICAgIGFwcC5kaXJlY3RpdmUobmFtZSwgZmFjdG9yeUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udHJvbGxlcihuYW1lLCBjb250cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLmNvbnRyb2xsZXIobmFtZSwgY29udHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VydmljZShuYW1lLCBjb250cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLnNlcnZpY2UobmFtZSwgY29udHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvdmlkZXIobmFtZSwgY29uc3RydWN0b3JGbikge1xuICAgICAgICBhcHAucHJvdmlkZXIobmFtZSwgY29uc3RydWN0b3JGbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZhY3RvcnkobmFtZSwgY29uc3RydWN0b3JGbikge1xuICAgICAgICBjb25zdHJ1Y3RvckZuID0gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgYXBwLmZhY3RvcnkobmFtZSwgZmFjdG9yeUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGNvbnN0cnVjdG9yRm4gaXMgYW4gYXJyYXkgb2YgdHlwZSBbJ2RlcDEnLCAnZGVwMicsIC4uLiwgY29uc3RydWN0b3IoKSB7fV1cbiAgICAgKiB3ZSBuZWVkIHRvIHB1bGwgb3V0IHRoZSBhcnJheSBvZiBkZXBlbmRlbmNpZXMgYW5kIGFkZCBpdCBhcyBhbiAkaW5qZWN0IHByb3BlcnR5IG9mIHRoZVxuICAgICAqIGFjdHVhbCBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gaW5wdXRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9ub3JtYWxpemVDb25zdHJ1Y3RvcihpbnB1dCkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3JGbjtcblxuICAgICAgICBpZiAoaW5wdXQuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgdmFyIGluamVjdGVkID0gaW5wdXQuc2xpY2UoMCwgaW5wdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuID0gaW5wdXRbaW5wdXQubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuLiRpbmplY3QgPSBpbmplY3RlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4gPSBpbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBpbnRvIGEgZmFjdG9yeSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIHRoYXRcbiAgICAgKiBjb25zdHJ1Y3Rvciwgd2l0aCB0aGUgY29ycmVjdCBkZXBlbmRlbmNpZXMgYXV0b21hdGljYWxseSBpbmplY3RlZCBhcyBhcmd1bWVudHMuXG4gICAgICpcbiAgICAgKiBJbiBvcmRlciB0byBpbmplY3QgdGhlIGRlcGVuZGVuY2llcywgdGhleSBtdXN0IGJlIGF0dGFjaGVkIHRvIHRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB3aXRoIHRoZVxuICAgICAqIGAkaW5qZWN0YCBwcm9wZXJ0eSBhbm5vdGF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnN0cnVjdG9yRm5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPFQ+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIC8vIGdldCB0aGUgYXJyYXkgb2YgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIG5lZWRlZCBieSB0aGlzIGNvbXBvbmVudCAoYXMgY29udGFpbmVkIGluIHRoZSBgJGluamVjdGAgYXJyYXkpXG4gICAgICAgIHZhciBhcmdzID0gY29uc3RydWN0b3JGbi4kaW5qZWN0IHx8IFtdO1xuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gYXJncy5zbGljZSgpOyAvLyBjcmVhdGUgYSBjb3B5IG9mIHRoZSBhcnJheVxuICAgICAgICAvLyBUaGUgZmFjdG9yeUFycmF5IHVzZXMgQW5ndWxhcidzIGFycmF5IG5vdGF0aW9uIHdoZXJlYnkgZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSBpcyB0aGUgbmFtZSBvZiBhXG4gICAgICAgIC8vIGRlcGVuZGVuY3ksIGFuZCB0aGUgZmluYWwgaXRlbSBpcyB0aGUgZmFjdG9yeSBmdW5jdGlvbiBpdHNlbGYuXG4gICAgICAgIGZhY3RvcnlBcnJheS5wdXNoKCguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAvL3JldHVybiBuZXcgY29uc3RydWN0b3JGbiguLi5hcmdzKTtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvckZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2Vba2V5XSA9IGluc3RhbmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWN0b3J5QXJyYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvbmUgYSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSBvcmlnaW5hbFxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2xvbmVGdW5jdGlvbihvcmlnaW5hbCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBhbiBvYmplY3QncyBtZXRob2Qgd2l0aCBhIG5ldyBvbmUgc3BlY2lmaWVkIGJ5IGBjYWxsYmFja2AuXG4gICAgICogQHBhcmFtIG9iamVjdFxuICAgICAqIEBwYXJhbSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgZnVuY3Rpb24gX292ZXJyaWRlKG9iamVjdCwgbWV0aG9kTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgb2JqZWN0W21ldGhvZE5hbWVdID0gY2FsbGJhY2sob2JqZWN0W21ldGhvZE5hbWVdKVxuICAgIH1cblxufVxuIl19
