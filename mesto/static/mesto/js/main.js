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

(0, _utilsRegister.register)('mesto').directive('sliderMain', _topNewsDirectivesSlider.SliderMain).directive('sliderControll', _topNewsDirectivesSlider.SliderControll).directive('sliderContent', _topNewsDirectivesSlider.SliderContent).directive('sliderItem', _topNewsDirectivesSlider.SliderItem).directive('smallSliderItem', _topNewsDirectivesSlider.SmallSliderItem).directive('sliderCounter', _topNewsDirectivesSlider.SliderCounter).directive('draggController', _topNewsDirectivesDraggController.DraggController).directive('horizontalScroll', _topNewsDirectivesHorizontalScroll.HorizontalScroll).factory('easingAnimator', _topNewsServicesEasingAnimator.EasingAnimator).directive('mestoFeedbackItem', _feedBackDirectivesFeedBack.MestoFeedbackItem).directive('mestoFeedbackToggle', _feedBackDirectivesFeedBack.MestoFeedbackToggle).directive('mestoFeedbackClose', _feedBackDirectivesFeedBack.MestoFeedbackClose).directive('mestoFeedbackContanier', _feedBackDirectivesFeedBack.MestoFeedbackContnier).service('popUpSerivice', _feedBackServicesPopUpService.PopUpService).service('feedbackResource', _feedBackServicesFeedbackResource.FeedbackResource).controller('feedbackFormController', _feedBackControllersFormController.FeedbackFormController).directive('mestoClickFade', _clickFadeDirectivesClickFade.MestoClickFade).directive('mestoLogoHover', _mainPageDirectivesLogoDirectives.SVGLogoHover).directive('mestoSvgItem', _mainPageDirectivesLogoDirectives.SVGLogoItem).directive('mestoSvgLogo', _mainPageDirectivesLogoDirectives.SVGLogoContanier).directive('mestoSvgBackground', _mainPageDirectivesLogoDirectives.SVGLogoBackground).controller('showMovieController', _movieShowControllersPlayShowJs.ShowMovieController).directive('mestoCustomSelect', _movieShowDirectivesCustomSelectJs.MestoCustomSelect).directive('mestoCustomSelectItem', _movieShowDirectivesCustomSelectJs.MestoCustomSelectItem).directive('mestoCustomSelectPlaceholder', _movieShowDirectivesCustomSelectJs.MestoCustomSelectPlaceholder).controller('showsFilterController', _movieShowControllersShowsFilterControllerJs.ShowsFilterController);

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
                this.video[videoId] = {};
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
                //console.log(item.elemInfo.offsetWidth);
                var center = val + item.elemInfo.offsetWidth;
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

var SmallSliderItem = (function (_SliderItem) {
    _inherits(SmallSliderItem, _SliderItem);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2suanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpbi5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpblBhZ2UvZGlyZWN0aXZlcy9sb2dvRGlyZWN0aXZlcy5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbW92aWVTaG93L2NvbnRyb2xsZXJzL3BsYXlTaG93LmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9tb3ZpZVNob3cvY29udHJvbGxlcnMvc2hvd3NGaWx0ZXJDb250cm9sbGVyLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9tb3ZpZVNob3cvZGlyZWN0aXZlcy9jdXN0b21TZWxlY3QuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9kcmFnZ0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9ob3Jpem9udGFsU2Nyb2xsLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL2RpcmVjdGl2ZXMvc2xpZGVyLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL3NlcnZpY2VzL2Vhc2luZ0FuaW1hdG9yLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy91dGlscy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBYSxjQUFjO2FBQWQsY0FBYzs4QkFBZCxjQUFjOzs7aUJBQWQsY0FBYzs7ZUFPbkIsY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN4QixzQkFBVSxDQUFDLFlBQUk7QUFDWCx1QkFBTyxDQUNGLFdBQVcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7YUFDOUMsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0IsbUJBQU8sQ0FDRixRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUNuQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FDN0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUMsRUFBQztBQUNwQixpQkFBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO0FBQ2xCLG9CQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3BDLHVCQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUMzQywwQkFBVSxDQUFDLFlBQUk7QUFDWCwwQkFB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QU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0tBQ3BEO0NBRUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNsYXNzIE1lc3RvQ2xpY2tGYWRlIHtcbiAgICBzdGF0aWMgZ2V0IFRJTUVPVVQoKSB7XG4gICAgICAgIHJldHVybiAyMDA7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRkFERV9DTEFTUygpIHtcbiAgICAgICAgcmV0dXJuICdmYWRlJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhNZXN0b0NsaWNrRmFkZS5GQURFX0NMQVNTKVxuICAgICAgICB9LCBNZXN0b0NsaWNrRmFkZS5USU1FT1VUKTtcbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLmFkZENsYXNzKE1lc3RvQ2xpY2tGYWRlLkZBREVfQ0xBU1MpXG4gICAgICAgICAgICAuZmluZCgnYS5mYWRlQW5pbWF0b3JfX2FuY29yJylcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBsZXQgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKE1lc3RvQ2xpY2tGYWRlLkZBREVfQ0xBU1MpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGZWVkYmFja0Zvcm1Db250cm9sbGVyIHsgXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgZmVlZGJhY2tSZXNvdXJjZSkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrUmVzb3VyY2UgPSBmZWVkYmFja1Jlc291cmNlO1xuICAgICAgICB0aGlzLmZvcm1EYXRhID0ge307XG4gICAgICAgIHRoaXMuZXJyb3JzID0gJyc7XG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlO1xuICAgIH1cbiAgICBzdWJtaXQoZm9ybSl7XG4gICAgICAgIGlmIChmb3JtLiRpbnZhbGlkKSB7XG4gICAgICAgICAgICBmb3JtLiRzZXREaXJ0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZlZWRiYWNrID0gbmV3IHRoaXMuZmVlZGJhY2tSZXNvdXJjZSh0aGlzLmZvcm1EYXRhKTtcbiAgICAgICAgICAgIGZlZWRiYWNrLiRzYXZlKClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja1RvZ2dsZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKHBvcFVwU2VyaXZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlID0gcG9wVXBTZXJpdmljZTtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSB0aGlzLnBvcFVwU2VyaXZpY2VcbiAgICAgICAgICAgIC5hZGRUb2dnbGVyKGF0dHJzLm1lc3RvRmVlZGJhY2tUb2dnbGUpO1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZCh0aGlzLnBvcFVwU2VyaXZpY2UpKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0NvbnRuaWVyIHtcbiAgICBzdGF0aWMgZ2V0IFRPR0dMRV9DTEFTUygpIHtcbiAgICAgICAgcmV0dXJuICdmaXhlZFBvcFVwJzsgXG4gICAgfVxuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKHBvcFVwU2VyaXZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlID0gcG9wVXBTZXJpdmljZTtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnRvZ2dsZUNsYXNzKE1lc3RvRmVlZGJhY2tDb250bmllci5UT0dHTEVfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZENvbnRhbmllcihhdHRycy5tZXN0b0ZlZWRiYWNrQ29udGFuaWVyLCBoYW5kbGVyKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0Nsb3NlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMucG9wVXBTZXJpdmljZS5jbG9zZShhdHRycy5tZXN0b0ZlZWRiYWNrQ2xvc2UpO1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZCh0aGlzLnBvcFVwU2VyaXZpY2UpKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0l0ZW0ge1xuICAgIHN0YXRpYyBnZXQgVE9HR0xFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgfVxuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKHBvcFVwU2VyaXZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlID0gcG9wVXBTZXJpdmljZTtcbiAgICB9XG4gICAgdG9nZ2xlKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcyhNZXN0b0ZlZWRiYWNrSXRlbS5UT0dHTEVfQ0xBU1MpO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2VcbiAgICAgICAgICAgIC5hZGRJdGVtKGF0dHJzLm1lc3RvRmVlZGJhY2tJdGVtLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIGVsZW1lbnQpKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRmVlZGJhY2tSZXNvdXJjZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gJHJlc291cmNlKENPTkZJRy51cmxzLmZlZWRiYWNrRm9ybSk7XG4gICAgfVxufVxuIiwiY2xhc3MgUG9wVXAge1xuICAgIGNvbnN0cnVjdG9yKGl0ZW1IYW5kbGVyLCBuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pdGVtSGFuZGxlciA9IGl0ZW1IYW5kbGVyO1xuICAgIH1cbiAgICB0b2dnbGVJdGVtKCkge1xuICAgICAgICBpZiAoUG9wVXAuY29udGFuaWVySGFuZGxlcikge1xuICAgICAgICAgICAgUG9wVXAuY29udGFuaWVySGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbUhhbmRsZXIoKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUG9wVXBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3BVcHMgPSB7fTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtTmFtZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnBvcFVwc1tpdGVtTmFtZV0gPSBuZXcgUG9wVXAoaGFuZGxlciwgaXRlbU5hbWUpO1xuICAgIH1cbiAgICBjbG9zZShpdGVtTmFtZSkge1xuICAgICAgICBpZiAoIWl0ZW1OYW1lKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBvcFVwcykuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgICAgIHRoaXMucG9wVXBzW2tleV0udG9nZ2xlSXRlbSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3BVcCA9IHRoaXMucG9wVXBzW2l0ZW1OYW1lXVxuICAgICAgICAgICAgaWYgKHBvcFVwKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBvcFVwLnRvZ2dsZUl0ZW0oKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDb250YW5pZXIocG9wVXBOYW1lLCBoYW5kZXIpIHtcbiAgICAgICAgUG9wVXAuY29udGFuaWVySGFuZGxlciA9IGhhbmRlcjtcbiAgICB9XG4gICAgYWRkVG9nZ2xlcihwb3BVcE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAoW3RoaXMucG9wVXBzW3BvcFVwTmFtZV1dIHx8IFtdKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChwb3BVcCk9PntcbiAgICAgICAgICAgICAgICAgICAgcG9wVXAudG9nZ2xlSXRlbSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJy4vdXRpbHMvcmVnaXN0ZXInO1xuXG5pbXBvcnQgeyBcbiAgICBTbGlkZXJNYWluLFxuICAgIFNsaWRlckNvbnRlbnQsXG4gICAgU2xpZGVyQ29udHJvbGwsXG4gICAgU2xpZGVyQ291bnRlcixcbiAgICBTbGlkZXJJdGVtLFxuICAgIFNtYWxsU2xpZGVySXRlbVxufSBmcm9tICcuL3RvcE5ld3MvZGlyZWN0aXZlcy9zbGlkZXInO1xuaW1wb3J0IHsgRWFzaW5nQW5pbWF0b3IgfSBmcm9tICcuL3RvcE5ld3Mvc2VydmljZXMvZWFzaW5nQW5pbWF0b3InO1xuaW1wb3J0IHsgRHJhZ2dDb250cm9sbGVyIH0gZnJvbSAnLi90b3BOZXdzL2RpcmVjdGl2ZXMvZHJhZ2dDb250cm9sbGVyJztcbmltcG9ydCB7IEhvcml6b250YWxTY3JvbGwgfSBmcm9tICcuL3RvcE5ld3MvZGlyZWN0aXZlcy9ob3Jpem9udGFsU2Nyb2xsJztcblxuaW1wb3J0IHsgTWVzdG9DbGlja0ZhZGUgfSBmcm9tICcuL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZSc7XG5cbmltcG9ydCB7IFBvcFVwU2VydmljZSB9IGZyb20gJy4vZmVlZEJhY2svc2VydmljZXMvcG9wVXBTZXJ2aWNlJztcbmltcG9ydCB7IEZlZWRiYWNrUmVzb3VyY2UgfSBmcm9tICcuL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UnO1xuaW1wb3J0IHsgRmVlZGJhY2tGb3JtQ29udHJvbGxlciB9IGZyb20gJy4vZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgXG4gICAgTWVzdG9GZWVkYmFja0l0ZW0sXG4gICAgTWVzdG9GZWVkYmFja1RvZ2dsZSxcbiAgICBNZXN0b0ZlZWRiYWNrQ2xvc2UsXG4gICAgTWVzdG9GZWVkYmFja0NvbnRuaWVyXG59IGZyb20gJy4vZmVlZEJhY2svZGlyZWN0aXZlcy9mZWVkQmFjayc7XG5cbmltcG9ydCB7IFxuICAgIFNWR0xvZ29Ib3ZlcixcbiAgICBTVkdMb2dvSXRlbSxcbiAgICBTVkdMb2dvQ29udGFuaWVyLFxuICAgIFNWR0xvZ29CYWNrZ3JvdW5kXG59IGZyb20gJy4vbWFpblBhZ2UvZGlyZWN0aXZlcy9sb2dvRGlyZWN0aXZlcyc7XG5cbmltcG9ydCB7IFNob3dNb3ZpZUNvbnRyb2xsZXIgfSBmcm9tICcuL21vdmllU2hvdy9jb250cm9sbGVycy9wbGF5U2hvdy5qcydcblxuaW1wb3J0IHsgXG4gICAgTWVzdG9DdXN0b21TZWxlY3QsXG4gICAgTWVzdG9DdXN0b21TZWxlY3RJdGVtLFxuICAgIE1lc3RvQ3VzdG9tU2VsZWN0UGxhY2Vob2xkZXJcbn0gZnJvbSAnLi9tb3ZpZVNob3cvZGlyZWN0aXZlcy9jdXN0b21TZWxlY3QuanMnXG5cbmltcG9ydCB7IFNob3dzRmlsdGVyQ29udHJvbGxlciB9IGZyb20gJy4vbW92aWVTaG93L2NvbnRyb2xsZXJzL3Nob3dzRmlsdGVyQ29udHJvbGxlci5qcycgXG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnbWVzdG8nLCBbJ25nUmVzb3VyY2UnLCAneW91dHViZS1lbWJlZCddKTtcblxucmVnaXN0ZXIoJ21lc3RvJylcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJNYWluJywgU2xpZGVyTWFpbilcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJDb250cm9sbCcsIFNsaWRlckNvbnRyb2xsKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckNvbnRlbnQnLCBTbGlkZXJDb250ZW50KVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckl0ZW0nLCBTbGlkZXJJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ3NtYWxsU2xpZGVySXRlbScsIFNtYWxsU2xpZGVySXRlbSlcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJDb3VudGVyJywgU2xpZGVyQ291bnRlcilcbiAgICAuZGlyZWN0aXZlKCdkcmFnZ0NvbnRyb2xsZXInLCBEcmFnZ0NvbnRyb2xsZXIpXG4gICAgLmRpcmVjdGl2ZSgnaG9yaXpvbnRhbFNjcm9sbCcsIEhvcml6b250YWxTY3JvbGwpXG4gICAgLmZhY3RvcnkoJ2Vhc2luZ0FuaW1hdG9yJywgRWFzaW5nQW5pbWF0b3IpXG5cbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrSXRlbScsIE1lc3RvRmVlZGJhY2tJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tUb2dnbGUnLCBNZXN0b0ZlZWRiYWNrVG9nZ2xlKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tDbG9zZScsIE1lc3RvRmVlZGJhY2tDbG9zZSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrQ29udGFuaWVyJywgTWVzdG9GZWVkYmFja0NvbnRuaWVyKVxuICAgIC5zZXJ2aWNlKCdwb3BVcFNlcml2aWNlJywgUG9wVXBTZXJ2aWNlKVxuXG4gICAgLnNlcnZpY2UoJ2ZlZWRiYWNrUmVzb3VyY2UnLCBGZWVkYmFja1Jlc291cmNlKVxuICAgIC5jb250cm9sbGVyKCdmZWVkYmFja0Zvcm1Db250cm9sbGVyJywgRmVlZGJhY2tGb3JtQ29udHJvbGxlcilcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvQ2xpY2tGYWRlJywgTWVzdG9DbGlja0ZhZGUpXG5cbiAgICAuZGlyZWN0aXZlKCdtZXN0b0xvZ29Ib3ZlcicsIFNWR0xvZ29Ib3ZlcilcbiAgICAuZGlyZWN0aXZlKCdtZXN0b1N2Z0l0ZW0nLCBTVkdMb2dvSXRlbSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b1N2Z0xvZ28nLCBTVkdMb2dvQ29udGFuaWVyKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvU3ZnQmFja2dyb3VuZCcsIFNWR0xvZ29CYWNrZ3JvdW5kKVxuXG4gICAgLmNvbnRyb2xsZXIoJ3Nob3dNb3ZpZUNvbnRyb2xsZXInLCBTaG93TW92aWVDb250cm9sbGVyKVxuXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9DdXN0b21TZWxlY3QnLCBNZXN0b0N1c3RvbVNlbGVjdClcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0N1c3RvbVNlbGVjdEl0ZW0nLCBNZXN0b0N1c3RvbVNlbGVjdEl0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9DdXN0b21TZWxlY3RQbGFjZWhvbGRlcicsIE1lc3RvQ3VzdG9tU2VsZWN0UGxhY2Vob2xkZXIpXG5cbiAgICAuY29udHJvbGxlcignc2hvd3NGaWx0ZXJDb250cm9sbGVyJywgU2hvd3NGaWx0ZXJDb250cm9sbGVyKVxuXG5hcHAuY29uZmlnKCgkcmVzb3VyY2VQcm92aWRlciwgJGh0dHBQcm92aWRlcik9PiB7XG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdjc3JmdG9rZW4nO1xuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nO1xuICAgICRyZXNvdXJjZVByb3ZpZGVyLmRlZmF1bHRzLnN0cmlwVHJhaWxpbmdTbGFzaGVzID0gZmFsc2U7XG59KVxuYW5ndWxhclxuICAgIC5lbGVtZW50KGRvY3VtZW50KVxuICAgIC5yZWFkeShhbmd1bGFyLmJvb3RzdHJhcC5iaW5kKGFuZ3VsYXIsIGRvY3VtZW50LCBbJ21lc3RvJ10pKTtcbiIsImNsYXNzIExvZ29Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgICAgICB0aGlzLmltZ1VybHMgPSB7fTtcbiAgICB9XG4gICAgYWRkSW1hZ2UobmFtZSwgdXJsKSB7XG4gICAgICAgIHRoaXMuaW1nVXJsc1tuYW1lXSA9IHVybDtcbiAgICB9XG4gICAgYWRkSXRlbShuYW1lLCBpbmZvKSB7XG4gICAgICAgIHRoaXMuaXRlbXNbbmFtZV0gPSBpbmZvO1xuICAgIH1cbiAgICBhZGRCYWNrZ3JvdW5kKHNob3csIGhpZGUpe1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSB7XG4gICAgICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICAgICAgaGlkZTogaGlkZVxuICAgICAgICB9XG4gICAgfVxuICAgIHVuaG92ZXIoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaXRlbXMpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIHRoaXMuaXRlbXNba2V5XS5kaXNhYmxlZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhpZGUoKTtcbiAgICB9XG4gICAgaG92ZXIobmFtZSkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuc2hvdyh0aGlzLmltZ1VybHNbbmFtZV0pO1xuICAgICAgICB0aGlzLml0ZW1zW25hbWVdLmFjdGl2ZSgpO1xuICAgIH1cbiAgICBjYWxsKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pdGVtc1tuYW1lXS5jbGljaygpO1xuICAgIH1cbiAgICBzdGF0aWMgZmFjdG9yeSguLi5hcmdzKSB7XG4gICAgICAgIExvZ29Db250cm9sbGVyLmluc3RhbmNlID0gbmV3IExvZ29Db250cm9sbGVyKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gTG9nb0NvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29Db250YW5pZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IExvZ29Db250cm9sbGVyLmZhY3Rvcnk7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29CYWNrZ3JvdW5kIHtcbiAgICBzdGF0aWMgZ2V0IEFDVElWRV9DTEFTUygpe1xuICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgfSBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15tZXN0b1N2Z0xvZ28nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLmFkZEJhY2tncm91bmQoKHVybCk9PntcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgdXJsID8gYHVybCgke3VybH0pYCA6ICdub25lJyk7XG4gICAgICAgIH0sICgpPT57XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvSG92ZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdebWVzdG9TdmdMb2dvJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIpIHtcbiAgICAgICAgZWxlbWVudC5vbignbW91c2VlbnRlcicsICgpPT57XG4gICAgICAgICAgICBjb250cm9sbGVyLmhvdmVyKGF0dHJzLm1lc3RvTG9nb0hvdmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci51bmhvdmVyKGF0dHJzLm1lc3RvTG9nb0hvdmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2FsbChhdHRycy5tZXN0b0xvZ29Ib3Zlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvSXRlbSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15tZXN0b1N2Z0xvZ28nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLmFkZEl0ZW0oYXR0cnMubWVzdG9TdmdJdGVtLCB7XG4gICAgICAgICAgICBjbGljazogKCk9PntcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGF0dHJzLmhyZWY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZlOiAoKT0+e1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXNhYmxlZDogKCk9PntcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWF0dHJzLmltZ1VybCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGRJbWFnZShhdHRycy5tZXN0b1N2Z0l0ZW0sIGF0dHJzLmltZ1VybCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcuc3JjID0gYXR0cnMuaW1nVXJsO1xuICAgICAgICBpZihpbWcuY29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkSW1hZ2UoYXR0cnMubWVzdG9TdmdJdGVtLCBhdHRycy5pbWdVcmwpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY2xhc3MgU2hvd01vdmllQ29udHJvbGxlciB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJHRpbWVvdXQpe1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLnZpZGVvID0ge307XG4gICAgICAgICRzY29wZS4kb24oJ3lvdXR1YmUucGxheWVyLnBsYXlpbmcnLCAoJGV2ZW50LCBwbGF5ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCB2aWRlb09iaiA9IHRoaXMuZ2V0VmlkZW9PYmoocGxheWVyKTtcbiAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgdmlkZW9PYmouYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICAkc2NvcGUuJG9uKCd5b3V0dWJlLnBsYXllci5lbmRlZCcsICgkZXZlbnQsIHBsYXllcikgPT4ge1xuICAgICAgICAgICAgbGV0IHZpZGVvT2JqID0gdGhpcy5nZXRWaWRlb09iaihwbGF5ZXIpO1xuICAgICAgICAgICAgdmlkZW9PYmouYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRWaWRlb09iaihwbGF5ZXIpe1xuICAgICAgICBsZXQgdmlkZW9JZCA9IHBsYXllci5nZXRWaWRlb0RhdGEoKS52aWRlb19pZDtcbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvW3ZpZGVvSWRdKSB7XG4gICAgICAgICAgICB0aGlzLnZpZGVvW3ZpZGVvSWRdID0ge31cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52aWRlb1t2aWRlb0lkXTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hvd3NGaWx0ZXJDb250cm9sbGVyIHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93KSB7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0ge307XG4gICAgfVxuICAgIHNlYXJjaCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdfT8ke2pRdWVyeS5wYXJhbSh0aGlzLnNlbGVjdCl9YDtcbiAgICB9XG59XG4iLCJjbGFzcyBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHZhciBzZXRQbGFjZWhvbGRlciA9ICh0ZXh0KT0+e307XG5cbiAgICAgICAgdGhpcy50b2dnbGVPcGVuID0gICgpPT57fTtcbiAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlciA9IChmdSk9PntcbiAgICAgICAgICAgIHNldFBsYWNlaG9sZGVyID0gZnU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRUb2dnbGVPcGVuID0gKGZ1KT0+e1xuICAgICAgICAgICAgdGhpcy50b2dnbGVPcGVuID0gZnU7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2VsZWN0T3B0aW9uID0gKHRleHQpPT57XG4gICAgICAgICAgICBzZXRQbGFjZWhvbGRlcih0ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgZmFjdG9yeSguLi5hcmdzKSB7XG4gICAgICAgIE1lc3RvQ3VzdG9tU2VsZWN0Q29udHJvbGxlci5pbnN0YW5jZSA9IG5ldyBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lc3RvQ3VzdG9tU2VsZWN0IHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cblx0Y29uc3RydWN0b3IoJGRvY3VtZW50KXtcblx0XHR0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIuZmFjdG9yeTtcbiAgICAgICAgdGhpcy4kZG9jdW1lbnQgPSAkZG9jdW1lbnQ7XG4gICAgfVxuICAgIFxuICAgIGxpbmsgKCRzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIpe1xuICAgICAgICBsZXQgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBhbmd1bGFyLmVsZW1lbnQoZS50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKCEodGFyZ2V0LmlzKGVsZW1lbnQpIHx8IHRhcmdldC5jbG9zZXN0KGVsZW1lbnQpLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnRyb2xsZXIuc2V0VG9nZ2xlT3BlbigoKT0+e1xuICAgICAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgaWYoZWxlbWVudC5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KHRoaXMuJGRvY3VtZW50KS5vbignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQodGhpcy4kZG9jdW1lbnQpLm9mZignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0N1c3RvbVNlbGVjdFBsYWNlaG9sZGVyIHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHR0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuXHRcdHRoaXMucmVxdWlyZSA9ICdebWVzdG9DdXN0b21TZWxlY3QnO1xuICAgIH1cbiAgICBsaW5rICgkc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdXN0b21TZWxlY3RDb250cm9sbGVyKSB7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGN1c3RvbVNlbGVjdENvbnRyb2xsZXIudG9nZ2xlT3BlbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgY3VzdG9tU2VsZWN0Q29udHJvbGxlci5zZXRQbGFjZWhvbGRlcigodGV4dCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0KHRleHQpO1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9DdXN0b21TZWxlY3RJdGVtIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5yZXN0cmljdCA9ICdBJztcblx0XHR0aGlzLnJlcXVpcmUgPSAnXm1lc3RvQ3VzdG9tU2VsZWN0JztcbiAgICB9XG4gICAgbGluaygkc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdXN0b21TZWxlY3RDb250cm9sbGVyKXtcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY3VzdG9tU2VsZWN0Q29udHJvbGxlci5zZWxlY3RPcHRpb24oZWxlbWVudC50ZXh0KCkpXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERyYWdnQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ14/c2xpZGVyTWFpbic7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIHZhciBkZWx0YV9pbmZvID0gMCxcbiAgICAgICAgICAgIHN0YXJ0X2luZm8gPSAwLFxuICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgIC5vbigndG91Y2hzdGFydCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBkZWx0YV9pbmZvID0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICBzdGFydF9pbmZvID0gZGVsdGFfaW5mbztcbiAgICAgICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ3RvdWNobW92ZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoZGVsdGFfaW5mbyAhPSB0b3VjaC5zY3JlZW5YKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bW0gKz0gZGVsdGFfaW5mbyAtIHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCd0b3VjaGVuZCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHN1bW0pID4gMTAwICYmIHNsaWRlck1haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJNYWluLm5leHQoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJNYWluLm5leHQoLTEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEhvcml6b250YWxTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSdcbiAgICB9XG4gICAgbGluaygkc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHZhciB0aW1lb3V0LFxuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRbMF0sXG4gICAgICAgICAgICBkZWx0YV9zdW0gPSAwLFxuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICBIYW1zdGVyKGVsZW1lbnQpLndoZWVsKChlLCBkZWx0YSwgZGVsdGFYLCBkZWx0YVkpPT57XG4gICAgICAgICAgICBpZiAoZGVsdGFYICYmICFkZWx0YVkpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgZGVsdGFfc3VtID0gMDtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZGVsdGFfc3VtICs9IGRlbHRhWSo4IHx8IDA7XG4gICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoL01hY2ludG9zaC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQgLSBkZWx0YV9zdW07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0IC0gZGVsdGFfc3VtKjE1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWx0YV9zdW0gPSAwO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIH0sIDEpO1xuXG4gICAgICAgIH0pICAgIFxuICAgIH1cbn1cbiIsImNsYXNzIFNsaWRlckNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuc2xpZGUgPSAwO1xuICAgICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuc2V0U2xpZGUgPSAoKT0+e307XG4gICAgICAgIHRoaXMubW92ZVRvU2xpZGVUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gICAgc2V0IHNjcm9sbFBvc2l0aW9uKHZhbCl7XG4gICAgICAgIHRoaXMuc2xpZGUgPSB0aGlzLml0ZW1zLnJlZHVjZSgob3V0SW5kZXgsIGl0ZW0sIGluZGV4KT0+e1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtLmVsZW1JbmZvLm9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSB2YWwgKyBpdGVtLmVsZW1JbmZvLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgaWYoaXRlbS5lbGVtSW5mby5jZW50ZXIgPCBjZW50ZXIpIHtcbiAgICAgICAgICAgICAgICBvdXRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dEluZGV4O1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSB2YWw7XG4gICAgICAgIHRoaXMuc2V0U2xpZGUodGhpcy5zbGlkZSk7XG4gICAgfVxuICAgIG1vdmVUb1NsaWRlKHBvc2l0aW9uKXtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubW92ZVRvU2xpZGVUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIodGhpcy5pdGVtc1twb3NpdGlvbl0uZWxlbUluZm8ub2Zmc2V0TGVmdCwgdHJ1ZSk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5wdXNoKGl0ZW0pIC0gMTtcbiAgICAgICAgcmV0dXJuIChuZXdJbmZvKSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XS5lbGVtSW5mbyA9IG5ld0luZm87XG4gICAgICAgICAgICB0aGlzLm1vdmVUb1NsaWRlKHRoaXMuc2xpZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZENvbnRlbnQoaGFuZGxlcikge1xuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH1cbiAgICBuZXh0KGRlbHRhKSB7XG4gICAgICAgIGxldCBuZXh0ID0gdGhpcy5zbGlkZSArIGRlbHRhO1xuICAgICAgICBpZiAobmV4dCA+PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgbmV4dCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZihuZXh0IDwgMCkge1xuICAgICAgICAgICAgbmV4dCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNsaWRlID0gbmV4dDtcbiAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZSh0aGlzLnNsaWRlKTtcbiAgICB9XG4gICAgYWRkQ29udHJvbGxlcihkZWx0YSkge1xuICAgICAgICBsZXQgaGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHQoZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgIH1cbiAgICBzZXRDb3VudGVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTbGlkZSA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gPSAwO1xuICAgIH1cbiAgICBzdGF0aWMgZmFjdG9yeSguLi5hcmdzKSB7XG4gICAgICAgIFNsaWRlckNvbnRyb2xsZXIuaW5zdGFuY2UgPSBuZXcgU2xpZGVyQ29udHJvbGxlciguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIFNsaWRlckNvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlck1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBTbGlkZXJDb250cm9sbGVyLmZhY3Rvcnk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbnRlbnQge1xuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKGVhc2luZ0FuaW1hdG9yKSB7XG4gICAgICAgIHRoaXMuZWFzaW5nQW5pbWF0b3IgPSBlYXNpbmdBbmltYXRvclxuICAgICAgICB0aGlzLmVhc2luZ0FuaW1hdG9yLmNhbGxCYWNrID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGFuaW1hdGUoaW5mbykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdCA9IGluZm8ubGVmdDtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFswXTtcbiAgICAgICAgc2xpZGVyTWFpbi5hZGRDb250ZW50KCh2YWwsIGFuaW1hdGUpPT57XG4gICAgICAgICAgICBpZiAoIWFuaW1hdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdCA9IHZhbFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVhc2luZ0FuaW1hdG9yLmVhc2VQcm9wKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5lbGVtZW50LnNjcm9sbExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHZhbFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50Lm9uKCdzY3JvbGwnLCAoKT0+e1xuICAgICAgICAgICAgc2xpZGVyTWFpbi5zY3JvbGxQb3NpdGlvbiA9IHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb3VudGVyIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXnNsaWRlck1haW4nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKCRzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgc2xpZGVyTWFpbi5zZXRDb3VudGVyKCh2YWwpPT57XG4gICAgICAgICAgICB0aGlzLiR0aW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkU2xpZGUgPSAoMWU0K3ZhbCsxK1wiXCIpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlckl0ZW0ge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93KSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9IGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KTtcbiAgICAgICAgdGhpcy5lbGVtcyA9IFtdO1xuICAgIH1cbiAgICBnZXRFbGVtSW5mbyhpbmRleCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbXNbaW5kZXhdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2Zmc2V0TGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgY2VudGVyOiBlbGVtZW50Lm9mZnNldExlZnQgKyBlbGVtZW50Lm9mZnNldFdpZHRoLzIsXG4gICAgICAgICAgICBvZmZzZXRXaWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmVsZW1zLnB1c2goZWxlbWVudFswXSkgLSAxO1xuICAgICAgICBsZXQgaGFuZGxlciA9IHNsaWRlck1haW4uYWRkSXRlbSh7XG4gICAgICAgICAgICBlbGVtOiB0aGlzLmVsZW1zW2luZGV4XSxcbiAgICAgICAgICAgIGVsZW1JbmZvOiB0aGlzLmdldEVsZW1JbmZvKGluZGV4KVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT57XG4gICAgICAgICAgICBoYW5kbGVyKHRoaXMuZ2V0RWxlbUluZm8oaW5kZXgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNtYWxsU2xpZGVySXRlbSBleHRlbmRzIFNsaWRlckl0ZW0ge1xuICAgIFxuICAgIGdldEVsZW1JbmZvKGluZGV4KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIDwgODAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0RWxlbUluZm8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtc1tpbmRleF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZzZXRMZWZ0OiBlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgY2VudGVyOiBlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50Lm9mZnNldFdpZHRoLzIsXG4gICAgICAgICAgICBvZmZzZXRXaWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICB9XG4gICAgfVxufVxuICAgIFxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbnRyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBzbGlkZXJNYWluLmFkZENvbnRyb2xsZXIoK2F0dHJzLnNsaWRlckNvbnRyb2xsKVxuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZChzbGlkZXJNYWluKSlcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRWFzaW5nQW5pbWF0b3Ige1xuXG4gICAgY29uc3RydWN0b3Iob3B0KXtcbiAgICAgICAgdmFyIG9wdCA9IHt9O1xuICAgICAgICB0aGlzLmVhc2luZ0ludGVydmFsID0gb3B0LmVhc2luZ0ludGVydmFsO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gb3B0LmR1cmF0aW9uIHx8IDEwMDA7XG4gICAgICAgIHRoaXMuc3RlcCA9IG9wdC5zdGVwIHx8IDUwO1xuICAgICAgICB0aGlzLmVhc2luZ0ZuID0gKHQsIGIsIGMsIGQpID0+e1xuICAgICAgICAgICAgaWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCp0ICsgYjtcbiAgICAgICAgICAgIHJldHVybiAtYy8yICogKCh0LT0yKSp0KnQqdCAtIDIpICsgYjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lYXNpbmdGbiA9IG9wdC5lYXNpbmdGbiB8fCB0aGlzLmVhc2luZ0ZuO1xuICAgICAgICB0aGlzLmNhbGxCYWNrID0gb3B0LmNhbGxCYWNrIHx8ICgpPT57fTtcbiAgICB9XG4gICAgbWFrZUZyb21DYWxsYmFjayAoY2FsbEJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coY2FsbEJhY2spXG4gICAgICAgIHJldHVybiBuZXcgRWFzaW5nQW5pbWF0b3Ioe1xuICAgICAgICAgICAgY2FsbEJhY2s6IGNhbGxCYWNrXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlYXNlUHJvcCAob2JqLCBwcm9wRGljdCkge1xuICAgICAgICBwcm9wRGljdCA9IHByb3BEaWN0IHx8IHt9O1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICB0ID0gMCxcbiAgICAgICAgICAgIG91dF92YWxzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmVhc2luZ0ludGVydmFsKTtcbiAgICAgICAgc2VsZi5lYXNpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICB0Kz0gdGhpcy5zdGVwO1xuICAgICAgICAgICAgaWYgKHQgPj0gdGhpcy5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5lYXNpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhwcm9wRGljdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSB0aGlzLmVhc2luZ0ZuKHQsIDAsIDEsIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcERpY3QpLmZvckVhY2goKGtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvbGRfdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICAgICAgb3V0X3ZhbHNba2V5XSA9IG9sZF92YWwgLSBwZXJjZW50KihvbGRfdmFsIC0gcHJvcERpY3Rba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2FsbEJhY2sob3V0X3ZhbHMpO1xuICAgICAgICB9LCB0aGlzLnN0ZXApO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIEEgaGVscGVyIGNsYXNzIHRvIHNpbXBsaWZ5IHJlZ2lzdGVyaW5nIEFuZ3VsYXIgY29tcG9uZW50cyBhbmQgcHJvdmlkZSBhIGNvbnNpc3RlbnQgc3ludGF4IGZvciBkb2luZyBzby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGFwcE5hbWUpIHtcblxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShhcHBOYW1lKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpcmVjdGl2ZTogZGlyZWN0aXZlLFxuICAgICAgICBjb250cm9sbGVyOiBjb250cm9sbGVyLFxuICAgICAgICBzZXJ2aWNlOiBzZXJ2aWNlLFxuICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgIGZhY3Rvcnk6IGZhY3RvcnlcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGlyZWN0aXZlKG5hbWUsIGNvbnN0cnVjdG9yRm4pIHtcblxuICAgICAgICBjb25zdHJ1Y3RvckZuID0gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yRm4pO1xuXG4gICAgICAgIGlmICghY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGVtcHR5IGNvbXBpbGUgZnVuY3Rpb24gaWYgbm9uZSB3YXMgZGVmaW5lZC5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUgPSAoKSA9PiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcmlnaW5hbENvbXBpbGVGbiA9IF9jbG9uZUZ1bmN0aW9uKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUpO1xuXG4gICAgICAgIC8vIERlY29yYXRlIHRoZSBjb21waWxlIG1ldGhvZCB0byBhdXRvbWF0aWNhbGx5IHJldHVybiB0aGUgbGluayBtZXRob2QgKGlmIGl0IGV4aXN0cylcbiAgICAgICAgLy8gYW5kIGJpbmQgaXQgdG8gdGhlIGNvbnRleHQgb2YgdGhlIGNvbnN0cnVjdG9yIChzbyBgdGhpc2Agd29ya3MgY29ycmVjdGx5KS5cbiAgICAgICAgLy8gVGhpcyBnZXRzIGFyb3VuZCB0aGUgcHJvYmxlbSBvZiBhIG5vbi1sZXhpY2FsIFwidGhpc1wiIHdoaWNoIG9jY3VycyB3aGVuIHRoZSBkaXJlY3RpdmUgY2xhc3MgaXRzZWxmXG4gICAgICAgIC8vIHJldHVybnMgYHRoaXMubGlua2AgZnJvbSB3aXRoaW4gdGhlIGNvbXBpbGUgZnVuY3Rpb24uXG4gICAgICAgIF9vdmVycmlkZShjb25zdHJ1Y3RvckZuLnByb3RvdHlwZSwgJ2NvbXBpbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29tcGlsZUZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29uc3RydWN0b3JGbi5wcm90b3R5cGUubGluaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3JGbi5wcm90b3R5cGUubGluay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pO1xuXG4gICAgICAgIGFwcC5kaXJlY3RpdmUobmFtZSwgZmFjdG9yeUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udHJvbGxlcihuYW1lLCBjb250cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLmNvbnRyb2xsZXIobmFtZSwgY29udHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VydmljZShuYW1lLCBjb250cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLnNlcnZpY2UobmFtZSwgY29udHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvdmlkZXIobmFtZSwgY29uc3RydWN0b3JGbikge1xuICAgICAgICBhcHAucHJvdmlkZXIobmFtZSwgY29uc3RydWN0b3JGbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZhY3RvcnkobmFtZSwgY29uc3RydWN0b3JGbikge1xuICAgICAgICBjb25zdHJ1Y3RvckZuID0gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgYXBwLmZhY3RvcnkobmFtZSwgZmFjdG9yeUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGNvbnN0cnVjdG9yRm4gaXMgYW4gYXJyYXkgb2YgdHlwZSBbJ2RlcDEnLCAnZGVwMicsIC4uLiwgY29uc3RydWN0b3IoKSB7fV1cbiAgICAgKiB3ZSBuZWVkIHRvIHB1bGwgb3V0IHRoZSBhcnJheSBvZiBkZXBlbmRlbmNpZXMgYW5kIGFkZCBpdCBhcyBhbiAkaW5qZWN0IHByb3BlcnR5IG9mIHRoZVxuICAgICAqIGFjdHVhbCBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gaW5wdXRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9ub3JtYWxpemVDb25zdHJ1Y3RvcihpbnB1dCkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3JGbjtcblxuICAgICAgICBpZiAoaW5wdXQuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgdmFyIGluamVjdGVkID0gaW5wdXQuc2xpY2UoMCwgaW5wdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuID0gaW5wdXRbaW5wdXQubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuLiRpbmplY3QgPSBpbmplY3RlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4gPSBpbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBpbnRvIGEgZmFjdG9yeSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIHRoYXRcbiAgICAgKiBjb25zdHJ1Y3Rvciwgd2l0aCB0aGUgY29ycmVjdCBkZXBlbmRlbmNpZXMgYXV0b21hdGljYWxseSBpbmplY3RlZCBhcyBhcmd1bWVudHMuXG4gICAgICpcbiAgICAgKiBJbiBvcmRlciB0byBpbmplY3QgdGhlIGRlcGVuZGVuY2llcywgdGhleSBtdXN0IGJlIGF0dGFjaGVkIHRvIHRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB3aXRoIHRoZVxuICAgICAqIGAkaW5qZWN0YCBwcm9wZXJ0eSBhbm5vdGF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnN0cnVjdG9yRm5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPFQ+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIC8vIGdldCB0aGUgYXJyYXkgb2YgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIG5lZWRlZCBieSB0aGlzIGNvbXBvbmVudCAoYXMgY29udGFpbmVkIGluIHRoZSBgJGluamVjdGAgYXJyYXkpXG4gICAgICAgIHZhciBhcmdzID0gY29uc3RydWN0b3JGbi4kaW5qZWN0IHx8IFtdO1xuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gYXJncy5zbGljZSgpOyAvLyBjcmVhdGUgYSBjb3B5IG9mIHRoZSBhcnJheVxuICAgICAgICAvLyBUaGUgZmFjdG9yeUFycmF5IHVzZXMgQW5ndWxhcidzIGFycmF5IG5vdGF0aW9uIHdoZXJlYnkgZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSBpcyB0aGUgbmFtZSBvZiBhXG4gICAgICAgIC8vIGRlcGVuZGVuY3ksIGFuZCB0aGUgZmluYWwgaXRlbSBpcyB0aGUgZmFjdG9yeSBmdW5jdGlvbiBpdHNlbGYuXG4gICAgICAgIGZhY3RvcnlBcnJheS5wdXNoKCguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAvL3JldHVybiBuZXcgY29uc3RydWN0b3JGbiguLi5hcmdzKTtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvckZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2Vba2V5XSA9IGluc3RhbmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWN0b3J5QXJyYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvbmUgYSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSBvcmlnaW5hbFxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2xvbmVGdW5jdGlvbihvcmlnaW5hbCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBhbiBvYmplY3QncyBtZXRob2Qgd2l0aCBhIG5ldyBvbmUgc3BlY2lmaWVkIGJ5IGBjYWxsYmFja2AuXG4gICAgICogQHBhcmFtIG9iamVjdFxuICAgICAqIEBwYXJhbSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgZnVuY3Rpb24gX292ZXJyaWRlKG9iamVjdCwgbWV0aG9kTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgb2JqZWN0W21ldGhvZE5hbWVdID0gY2FsbGJhY2sob2JqZWN0W21ldGhvZE5hbWVdKVxuICAgIH1cblxufVxuIl19
