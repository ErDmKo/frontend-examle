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
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShowsFilterController = (function () {

    /*@ngInject*/

    function ShowsFilterController($window) {
        _classCallCheck(this, ShowsFilterController);

        this.$window = $window;
        this.select = {};
    }
    ShowsFilterController.$inject = ["$window"];

    _createClass(ShowsFilterController, [{
        key: "search",
        value: function search() {
            console.log(this.select);
            window.location.href = CONFIG.urls.showFiltes + "?" + jQuery.param(this.select);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2suanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpbi5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpblBhZ2UvZGlyZWN0aXZlcy9sb2dvRGlyZWN0aXZlcy5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbW92aWVTaG93L2NvbnRyb2xsZXJzL3BsYXlTaG93LmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9tb3ZpZVNob3cvY29udHJvbGxlcnMvc2hvd3NGaWx0ZXJDb250cm9sbGVyLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9tb3ZpZVNob3cvZGlyZWN0aXZlcy9jdXN0b21TZWxlY3QuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9kcmFnZ0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9ob3Jpem9udGFsU2Nyb2xsLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL2RpcmVjdGl2ZXMvc2xpZGVyLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL3NlcnZpY2VzL2Vhc2luZ0FuaW1hdG9yLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy91dGlscy9yZWdpc3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBYSxjQUFjO2FBQWQsY0FBYzs4QkFBZCxjQUFjOzs7aUJBQWQsY0FBYzs7ZUFPbkIsY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN4QixzQkFBVSxDQUFDLFlBQUk7QUFDWCx1QkFBTyxDQUNGLFdBQVcsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7YUFDOUMsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDM0IsbUJBQU8sQ0FDRixRQUFRLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUNuQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FDN0IsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFTLENBQUMsRUFBQztBQUNwQixpQkFBQyxDQUFDLGNBQWMsRUFBRSxDQUFBO0FBQ2xCLG9CQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3BDLHVCQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUMzQywwQkFBVSxDQUFDLFlBQUk7QUFDWCwwQkFB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UUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0tBQ3BEO0NBRUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNsYXNzIE1lc3RvQ2xpY2tGYWRlIHtcbiAgICBzdGF0aWMgZ2V0IFRJTUVPVVQoKSB7XG4gICAgICAgIHJldHVybiAyMDA7XG4gICAgfVxuICAgIHN0YXRpYyBnZXQgRkFERV9DTEFTUygpIHtcbiAgICAgICAgcmV0dXJuICdmYWRlJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhNZXN0b0NsaWNrRmFkZS5GQURFX0NMQVNTKVxuICAgICAgICB9LCBNZXN0b0NsaWNrRmFkZS5USU1FT1VUKTtcbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLmFkZENsYXNzKE1lc3RvQ2xpY2tGYWRlLkZBREVfQ0xBU1MpXG4gICAgICAgICAgICAuZmluZCgnYS5mYWRlQW5pbWF0b3JfX2FuY29yJylcbiAgICAgICAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICBsZXQgaHJlZiA9IHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJylcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKE1lc3RvQ2xpY2tGYWRlLkZBREVfQ0xBU1MpXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGZWVkYmFja0Zvcm1Db250cm9sbGVyIHsgXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgZmVlZGJhY2tSZXNvdXJjZSkge1xuICAgICAgICB0aGlzLmZlZWRiYWNrUmVzb3VyY2UgPSBmZWVkYmFja1Jlc291cmNlO1xuICAgICAgICB0aGlzLmZvcm1EYXRhID0ge307XG4gICAgICAgIHRoaXMuZXJyb3JzID0gJyc7XG4gICAgICAgIHRoaXMuc3VjY2VzcyA9IGZhbHNlO1xuICAgIH1cbiAgICBzdWJtaXQoZm9ybSl7XG4gICAgICAgIGlmIChmb3JtLiRpbnZhbGlkKSB7XG4gICAgICAgICAgICBmb3JtLiRzZXREaXJ0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGZlZWRiYWNrID0gbmV3IHRoaXMuZmVlZGJhY2tSZXNvdXJjZSh0aGlzLmZvcm1EYXRhKTtcbiAgICAgICAgICAgIGZlZWRiYWNrLiRzYXZlKClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdWNjZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja1RvZ2dsZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKHBvcFVwU2VyaXZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlID0gcG9wVXBTZXJpdmljZTtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSB0aGlzLnBvcFVwU2VyaXZpY2VcbiAgICAgICAgICAgIC5hZGRUb2dnbGVyKGF0dHJzLm1lc3RvRmVlZGJhY2tUb2dnbGUpO1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZCh0aGlzLnBvcFVwU2VyaXZpY2UpKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0NvbnRuaWVyIHtcbiAgICBzdGF0aWMgZ2V0IFRPR0dMRV9DTEFTUygpIHtcbiAgICAgICAgcmV0dXJuICdmaXhlZFBvcFVwJzsgXG4gICAgfVxuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKHBvcFVwU2VyaXZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlID0gcG9wVXBTZXJpdmljZTtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnRvZ2dsZUNsYXNzKE1lc3RvRmVlZGJhY2tDb250bmllci5UT0dHTEVfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZENvbnRhbmllcihhdHRycy5tZXN0b0ZlZWRiYWNrQ29udGFuaWVyLCBoYW5kbGVyKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0Nsb3NlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMucG9wVXBTZXJpdmljZS5jbG9zZShhdHRycy5tZXN0b0ZlZWRiYWNrQ2xvc2UpO1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZCh0aGlzLnBvcFVwU2VyaXZpY2UpKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0l0ZW0ge1xuICAgIHN0YXRpYyBnZXQgVE9HR0xFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgfVxuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKHBvcFVwU2VyaXZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlID0gcG9wVXBTZXJpdmljZTtcbiAgICB9XG4gICAgdG9nZ2xlKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcyhNZXN0b0ZlZWRiYWNrSXRlbS5UT0dHTEVfQ0xBU1MpO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2VcbiAgICAgICAgICAgIC5hZGRJdGVtKGF0dHJzLm1lc3RvRmVlZGJhY2tJdGVtLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIGVsZW1lbnQpKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRmVlZGJhY2tSZXNvdXJjZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gJHJlc291cmNlKENPTkZJRy51cmxzLmZlZWRiYWNrRm9ybSk7XG4gICAgfVxufVxuIiwiY2xhc3MgUG9wVXAge1xuICAgIGNvbnN0cnVjdG9yKGl0ZW1IYW5kbGVyLCBuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pdGVtSGFuZGxlciA9IGl0ZW1IYW5kbGVyO1xuICAgIH1cbiAgICB0b2dnbGVJdGVtKCkge1xuICAgICAgICBpZiAoUG9wVXAuY29udGFuaWVySGFuZGxlcikge1xuICAgICAgICAgICAgUG9wVXAuY29udGFuaWVySGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbUhhbmRsZXIoKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUG9wVXBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3BVcHMgPSB7fTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtTmFtZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnBvcFVwc1tpdGVtTmFtZV0gPSBuZXcgUG9wVXAoaGFuZGxlciwgaXRlbU5hbWUpO1xuICAgIH1cbiAgICBjbG9zZShpdGVtTmFtZSkge1xuICAgICAgICBpZiAoIWl0ZW1OYW1lKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBvcFVwcykuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgICAgIHRoaXMucG9wVXBzW2tleV0udG9nZ2xlSXRlbSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3BVcCA9IHRoaXMucG9wVXBzW2l0ZW1OYW1lXVxuICAgICAgICAgICAgaWYgKHBvcFVwKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBvcFVwLnRvZ2dsZUl0ZW0oKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDb250YW5pZXIocG9wVXBOYW1lLCBoYW5kZXIpIHtcbiAgICAgICAgUG9wVXAuY29udGFuaWVySGFuZGxlciA9IGhhbmRlcjtcbiAgICB9XG4gICAgYWRkVG9nZ2xlcihwb3BVcE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAoW3RoaXMucG9wVXBzW3BvcFVwTmFtZV1dIHx8IFtdKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChwb3BVcCk9PntcbiAgICAgICAgICAgICAgICAgICAgcG9wVXAudG9nZ2xlSXRlbSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJy4vdXRpbHMvcmVnaXN0ZXInO1xuXG5pbXBvcnQgeyBcbiAgICBTbGlkZXJNYWluLFxuICAgIFNsaWRlckNvbnRlbnQsXG4gICAgU2xpZGVyQ29udHJvbGwsXG4gICAgU2xpZGVyQ291bnRlcixcbiAgICBTbGlkZXJJdGVtLFxuICAgIFNtYWxsU2xpZGVySXRlbVxufSBmcm9tICcuL3RvcE5ld3MvZGlyZWN0aXZlcy9zbGlkZXInO1xuaW1wb3J0IHsgRWFzaW5nQW5pbWF0b3IgfSBmcm9tICcuL3RvcE5ld3Mvc2VydmljZXMvZWFzaW5nQW5pbWF0b3InO1xuaW1wb3J0IHsgRHJhZ2dDb250cm9sbGVyIH0gZnJvbSAnLi90b3BOZXdzL2RpcmVjdGl2ZXMvZHJhZ2dDb250cm9sbGVyJztcbmltcG9ydCB7IEhvcml6b250YWxTY3JvbGwgfSBmcm9tICcuL3RvcE5ld3MvZGlyZWN0aXZlcy9ob3Jpem9udGFsU2Nyb2xsJztcblxuaW1wb3J0IHsgTWVzdG9DbGlja0ZhZGUgfSBmcm9tICcuL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZSc7XG5cbmltcG9ydCB7IFBvcFVwU2VydmljZSB9IGZyb20gJy4vZmVlZEJhY2svc2VydmljZXMvcG9wVXBTZXJ2aWNlJztcbmltcG9ydCB7IEZlZWRiYWNrUmVzb3VyY2UgfSBmcm9tICcuL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UnO1xuaW1wb3J0IHsgRmVlZGJhY2tGb3JtQ29udHJvbGxlciB9IGZyb20gJy4vZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXInO1xuaW1wb3J0IHsgXG4gICAgTWVzdG9GZWVkYmFja0l0ZW0sXG4gICAgTWVzdG9GZWVkYmFja1RvZ2dsZSxcbiAgICBNZXN0b0ZlZWRiYWNrQ2xvc2UsXG4gICAgTWVzdG9GZWVkYmFja0NvbnRuaWVyXG59IGZyb20gJy4vZmVlZEJhY2svZGlyZWN0aXZlcy9mZWVkQmFjayc7XG5cbmltcG9ydCB7IFxuICAgIFNWR0xvZ29Ib3ZlcixcbiAgICBTVkdMb2dvSXRlbSxcbiAgICBTVkdMb2dvQ29udGFuaWVyLFxuICAgIFNWR0xvZ29CYWNrZ3JvdW5kXG59IGZyb20gJy4vbWFpblBhZ2UvZGlyZWN0aXZlcy9sb2dvRGlyZWN0aXZlcyc7XG5cbmltcG9ydCB7IFNob3dNb3ZpZUNvbnRyb2xsZXIgfSBmcm9tICcuL21vdmllU2hvdy9jb250cm9sbGVycy9wbGF5U2hvdy5qcydcblxuaW1wb3J0IHsgXG4gICAgTWVzdG9DdXN0b21TZWxlY3QsXG4gICAgTWVzdG9DdXN0b21TZWxlY3RJdGVtLFxuICAgIE1lc3RvQ3VzdG9tU2VsZWN0UGxhY2Vob2xkZXJcbn0gZnJvbSAnLi9tb3ZpZVNob3cvZGlyZWN0aXZlcy9jdXN0b21TZWxlY3QuanMnXG5cbmltcG9ydCB7IFNob3dzRmlsdGVyQ29udHJvbGxlciB9IGZyb20gJy4vbW92aWVTaG93L2NvbnRyb2xsZXJzL3Nob3dzRmlsdGVyQ29udHJvbGxlci5qcycgXG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnbWVzdG8nLCBbJ25nUmVzb3VyY2UnLCAneW91dHViZS1lbWJlZCddKTtcblxucmVnaXN0ZXIoJ21lc3RvJylcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJNYWluJywgU2xpZGVyTWFpbilcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJDb250cm9sbCcsIFNsaWRlckNvbnRyb2xsKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckNvbnRlbnQnLCBTbGlkZXJDb250ZW50KVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckl0ZW0nLCBTbGlkZXJJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ3NtYWxsU2xpZGVySXRlbScsIFNtYWxsU2xpZGVySXRlbSlcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJDb3VudGVyJywgU2xpZGVyQ291bnRlcilcbiAgICAuZGlyZWN0aXZlKCdkcmFnZ0NvbnRyb2xsZXInLCBEcmFnZ0NvbnRyb2xsZXIpXG4gICAgLmRpcmVjdGl2ZSgnaG9yaXpvbnRhbFNjcm9sbCcsIEhvcml6b250YWxTY3JvbGwpXG4gICAgLmZhY3RvcnkoJ2Vhc2luZ0FuaW1hdG9yJywgRWFzaW5nQW5pbWF0b3IpXG5cbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrSXRlbScsIE1lc3RvRmVlZGJhY2tJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tUb2dnbGUnLCBNZXN0b0ZlZWRiYWNrVG9nZ2xlKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tDbG9zZScsIE1lc3RvRmVlZGJhY2tDbG9zZSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrQ29udGFuaWVyJywgTWVzdG9GZWVkYmFja0NvbnRuaWVyKVxuICAgIC5zZXJ2aWNlKCdwb3BVcFNlcml2aWNlJywgUG9wVXBTZXJ2aWNlKVxuXG4gICAgLnNlcnZpY2UoJ2ZlZWRiYWNrUmVzb3VyY2UnLCBGZWVkYmFja1Jlc291cmNlKVxuICAgIC5jb250cm9sbGVyKCdmZWVkYmFja0Zvcm1Db250cm9sbGVyJywgRmVlZGJhY2tGb3JtQ29udHJvbGxlcilcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvQ2xpY2tGYWRlJywgTWVzdG9DbGlja0ZhZGUpXG5cbiAgICAuZGlyZWN0aXZlKCdtZXN0b0xvZ29Ib3ZlcicsIFNWR0xvZ29Ib3ZlcilcbiAgICAuZGlyZWN0aXZlKCdtZXN0b1N2Z0l0ZW0nLCBTVkdMb2dvSXRlbSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b1N2Z0xvZ28nLCBTVkdMb2dvQ29udGFuaWVyKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvU3ZnQmFja2dyb3VuZCcsIFNWR0xvZ29CYWNrZ3JvdW5kKVxuXG4gICAgLmNvbnRyb2xsZXIoJ3Nob3dNb3ZpZUNvbnRyb2xsZXInLCBTaG93TW92aWVDb250cm9sbGVyKVxuXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9DdXN0b21TZWxlY3QnLCBNZXN0b0N1c3RvbVNlbGVjdClcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0N1c3RvbVNlbGVjdEl0ZW0nLCBNZXN0b0N1c3RvbVNlbGVjdEl0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9DdXN0b21TZWxlY3RQbGFjZWhvbGRlcicsIE1lc3RvQ3VzdG9tU2VsZWN0UGxhY2Vob2xkZXIpXG5cbiAgICAuY29udHJvbGxlcignc2hvd3NGaWx0ZXJDb250cm9sbGVyJywgU2hvd3NGaWx0ZXJDb250cm9sbGVyKVxuXG5hcHAuY29uZmlnKCgkcmVzb3VyY2VQcm92aWRlciwgJGh0dHBQcm92aWRlcik9PiB7XG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdjc3JmdG9rZW4nO1xuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nO1xuICAgICRyZXNvdXJjZVByb3ZpZGVyLmRlZmF1bHRzLnN0cmlwVHJhaWxpbmdTbGFzaGVzID0gZmFsc2U7XG59KVxuYW5ndWxhclxuICAgIC5lbGVtZW50KGRvY3VtZW50KVxuICAgIC5yZWFkeShhbmd1bGFyLmJvb3RzdHJhcC5iaW5kKGFuZ3VsYXIsIGRvY3VtZW50LCBbJ21lc3RvJ10pKTtcbiIsImNsYXNzIExvZ29Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgICAgICB0aGlzLmltZ1VybHMgPSB7fTtcbiAgICB9XG4gICAgYWRkSW1hZ2UobmFtZSwgdXJsKSB7XG4gICAgICAgIHRoaXMuaW1nVXJsc1tuYW1lXSA9IHVybDtcbiAgICB9XG4gICAgYWRkSXRlbShuYW1lLCBpbmZvKSB7XG4gICAgICAgIHRoaXMuaXRlbXNbbmFtZV0gPSBpbmZvO1xuICAgIH1cbiAgICBhZGRCYWNrZ3JvdW5kKHNob3csIGhpZGUpe1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSB7XG4gICAgICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICAgICAgaGlkZTogaGlkZVxuICAgICAgICB9XG4gICAgfVxuICAgIHVuaG92ZXIoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaXRlbXMpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIHRoaXMuaXRlbXNba2V5XS5kaXNhYmxlZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhpZGUoKTtcbiAgICB9XG4gICAgaG92ZXIobmFtZSkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuc2hvdyh0aGlzLmltZ1VybHNbbmFtZV0pO1xuICAgICAgICB0aGlzLml0ZW1zW25hbWVdLmFjdGl2ZSgpO1xuICAgIH1cbiAgICBjYWxsKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pdGVtc1tuYW1lXS5jbGljaygpO1xuICAgIH1cbiAgICBzdGF0aWMgZmFjdG9yeSguLi5hcmdzKSB7XG4gICAgICAgIExvZ29Db250cm9sbGVyLmluc3RhbmNlID0gbmV3IExvZ29Db250cm9sbGVyKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gTG9nb0NvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29Db250YW5pZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IExvZ29Db250cm9sbGVyLmZhY3Rvcnk7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29CYWNrZ3JvdW5kIHtcbiAgICBzdGF0aWMgZ2V0IEFDVElWRV9DTEFTUygpe1xuICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgfSBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15tZXN0b1N2Z0xvZ28nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLmFkZEJhY2tncm91bmQoKHVybCk9PntcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgdXJsID8gYHVybCgke3VybH0pYCA6ICdub25lJyk7XG4gICAgICAgIH0sICgpPT57XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvSG92ZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdebWVzdG9TdmdMb2dvJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIpIHtcbiAgICAgICAgZWxlbWVudC5vbignbW91c2VlbnRlcicsICgpPT57XG4gICAgICAgICAgICBjb250cm9sbGVyLmhvdmVyKGF0dHJzLm1lc3RvTG9nb0hvdmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci51bmhvdmVyKGF0dHJzLm1lc3RvTG9nb0hvdmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2FsbChhdHRycy5tZXN0b0xvZ29Ib3Zlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvSXRlbSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15tZXN0b1N2Z0xvZ28nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLmFkZEl0ZW0oYXR0cnMubWVzdG9TdmdJdGVtLCB7XG4gICAgICAgICAgICBjbGljazogKCk9PntcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGF0dHJzLmhyZWY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZlOiAoKT0+e1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXNhYmxlZDogKCk9PntcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWF0dHJzLmltZ1VybCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGRJbWFnZShhdHRycy5tZXN0b1N2Z0l0ZW0sIGF0dHJzLmltZ1VybCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcuc3JjID0gYXR0cnMuaW1nVXJsO1xuICAgICAgICBpZihpbWcuY29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkSW1hZ2UoYXR0cnMubWVzdG9TdmdJdGVtLCBhdHRycy5pbWdVcmwpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY2xhc3MgU2hvd01vdmllQ29udHJvbGxlciB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJHRpbWVvdXQpe1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLnZpZGVvID0ge307XG4gICAgICAgICRzY29wZS4kb24oJ3lvdXR1YmUucGxheWVyLnBsYXlpbmcnLCAoJGV2ZW50LCBwbGF5ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCB2aWRlb09iaiA9IHRoaXMuZ2V0VmlkZW9PYmoocGxheWVyKTtcbiAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgdmlkZW9PYmouYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICAkc2NvcGUuJG9uKCd5b3V0dWJlLnBsYXllci5lbmRlZCcsICgkZXZlbnQsIHBsYXllcikgPT4ge1xuICAgICAgICAgICAgbGV0IHZpZGVvT2JqID0gdGhpcy5nZXRWaWRlb09iaihwbGF5ZXIpO1xuICAgICAgICAgICAgdmlkZW9PYmouYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRWaWRlb09iaihwbGF5ZXIpe1xuICAgICAgICBsZXQgdmlkZW9JZCA9IHBsYXllci5nZXRWaWRlb0RhdGEoKS52aWRlb19pZDtcbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvW3ZpZGVvSWRdKSB7XG4gICAgICAgICAgICB0aGlzLnZpZGVvW3ZpZGVvSWRdID0ge31cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52aWRlb1t2aWRlb0lkXTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hvd3NGaWx0ZXJDb250cm9sbGVyIHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93KSB7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0ge307XG4gICAgfVxuICAgIHNlYXJjaCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3QpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke0NPTkZJRy51cmxzLnNob3dGaWx0ZXN9PyR7alF1ZXJ5LnBhcmFtKHRoaXMuc2VsZWN0KX1gO1xuICAgIH1cbn1cbiIsImNsYXNzIE1lc3RvQ3VzdG9tU2VsZWN0Q29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdmFyIHNldFBsYWNlaG9sZGVyID0gKHRleHQpPT57fTtcblxuICAgICAgICB0aGlzLnRvZ2dsZU9wZW4gPSAgKCk9Pnt9O1xuICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyID0gKGZ1KT0+e1xuICAgICAgICAgICAgc2V0UGxhY2Vob2xkZXIgPSBmdTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFRvZ2dsZU9wZW4gPSAoZnUpPT57XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZU9wZW4gPSBmdTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWxlY3RPcHRpb24gPSAodGV4dCk9PntcbiAgICAgICAgICAgIHNldFBsYWNlaG9sZGVyKHRleHQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBmYWN0b3J5KC4uLmFyZ3MpIHtcbiAgICAgICAgTWVzdG9DdXN0b21TZWxlY3RDb250cm9sbGVyLmluc3RhbmNlID0gbmV3IE1lc3RvQ3VzdG9tU2VsZWN0Q29udHJvbGxlciguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIE1lc3RvQ3VzdG9tU2VsZWN0Q29udHJvbGxlci5pbnN0YW5jZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9DdXN0b21TZWxlY3Qge1xuXG4gICAgLypAbmdJbmplY3QqL1xuXHRjb25zdHJ1Y3RvcigkZG9jdW1lbnQpe1xuXHRcdHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IE1lc3RvQ3VzdG9tU2VsZWN0Q29udHJvbGxlci5mYWN0b3J5O1xuICAgICAgICB0aGlzLiRkb2N1bWVudCA9ICRkb2N1bWVudDtcbiAgICB9XG4gICAgXG4gICAgbGluayAoJHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcil7XG4gICAgICAgIGxldCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGFuZ3VsYXIuZWxlbWVudChlLnRhcmdldCk7XG4gICAgICAgICAgICBpZiAoISh0YXJnZXQuaXMoZWxlbWVudCkgfHwgdGFyZ2V0LmNsb3Nlc3QoZWxlbWVudCkubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29udHJvbGxlci5zZXRUb2dnbGVPcGVuKCgpPT57XG4gICAgICAgICAgICBlbGVtZW50LnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBpZihlbGVtZW50Lmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQodGhpcy4kZG9jdW1lbnQpLm9uKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudCh0aGlzLiRkb2N1bWVudCkub2ZmKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lc3RvQ3VzdG9tU2VsZWN0UGxhY2Vob2xkZXIge1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHRoaXMucmVzdHJpY3QgPSAnQSc7XG5cdFx0dGhpcy5yZXF1aXJlID0gJ15tZXN0b0N1c3RvbVNlbGVjdCc7XG4gICAgfVxuICAgIGxpbmsgKCRzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN1c3RvbVNlbGVjdENvbnRyb2xsZXIpIHtcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY3VzdG9tU2VsZWN0Q29udHJvbGxlci50b2dnbGVPcGVuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjdXN0b21TZWxlY3RDb250cm9sbGVyLnNldFBsYWNlaG9sZGVyKCh0ZXh0KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnRleHQodGV4dCk7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0N1c3RvbVNlbGVjdEl0ZW0ge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuXHRcdHRoaXMucmVxdWlyZSA9ICdebWVzdG9DdXN0b21TZWxlY3QnO1xuICAgIH1cbiAgICBsaW5rKCRzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN1c3RvbVNlbGVjdENvbnRyb2xsZXIpe1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjdXN0b21TZWxlY3RDb250cm9sbGVyLnNlbGVjdE9wdGlvbihlbGVtZW50LnRleHQoKSlcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRHJhZ2dDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXj9zbGlkZXJNYWluJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgdmFyIGRlbHRhX2luZm8gPSAwLFxuICAgICAgICAgICAgc3RhcnRfaW5mbyA9IDAsXG4gICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLm9uKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIHN0YXJ0X2luZm8gPSBkZWx0YV9pbmZvO1xuICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChkZWx0YV9pbmZvICE9IHRvdWNoLnNjcmVlblgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtbSArPSBkZWx0YV9pbmZvIC0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfaW5mbyA9IHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3VtbSkgPiAxMDAgJiYgc2xpZGVyTWFpbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3VtbSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlck1haW4ubmV4dCgxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlck1haW4ubmV4dCgtMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgZGVsdGFfaW5mbyA9IHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgSG9yaXpvbnRhbFNjcm9sbCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJ1xuICAgIH1cbiAgICBsaW5rKCRzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgdmFyIHRpbWVvdXQsXG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudFswXSxcbiAgICAgICAgICAgIGRlbHRhX3N1bSA9IDAsXG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIEhhbXN0ZXIoZWxlbWVudCkud2hlZWwoKGUsIGRlbHRhLCBkZWx0YVgsIGRlbHRhWSk9PntcbiAgICAgICAgICAgIGlmIChkZWx0YVggJiYgIWRlbHRhWSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBkZWx0YV9zdW0gPSAwO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkZWx0YV9zdW0gKz0gZGVsdGFZKjggfHwgMDtcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmICgvTWFjaW50b3NoLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCAtIGRlbHRhX3N1bTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQgLSBkZWx0YV9zdW0qMTU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbHRhX3N1bSA9IDA7XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgfSwgMSk7XG5cbiAgICAgICAgfSkgICAgXG4gICAgfVxufVxuIiwiY2xhc3MgU2xpZGVyQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5zbGlkZSA9IDA7XG4gICAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy5zZXRTbGlkZSA9ICgpPT57fTtcbiAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZVRpbWVvdXQgPSBudWxsO1xuICAgIH1cbiAgICBzZXQgc2Nyb2xsUG9zaXRpb24odmFsKXtcbiAgICAgICAgdGhpcy5zbGlkZSA9IHRoaXMuaXRlbXMucmVkdWNlKChvdXRJbmRleCwgaXRlbSwgaW5kZXgpPT57XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW0uZWxlbUluZm8ub2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHZhbCArIGl0ZW0uZWxlbUluZm8ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBpZihpdGVtLmVsZW1JbmZvLmNlbnRlciA8IGNlbnRlcikge1xuICAgICAgICAgICAgICAgIG91dEluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0SW5kZXg7XG4gICAgICAgIH0sIDApO1xuICAgICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IHZhbDtcbiAgICAgICAgdGhpcy5zZXRTbGlkZSh0aGlzLnNsaWRlKTtcbiAgICB9XG4gICAgbW92ZVRvU2xpZGUocG9zaXRpb24pe1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5tb3ZlVG9TbGlkZVRpbWVvdXQpO1xuICAgICAgICB0aGlzLm1vdmVUb1NsaWRlVGltZW91dCA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlcih0aGlzLml0ZW1zW3Bvc2l0aW9uXS5lbGVtSW5mby5vZmZzZXRMZWZ0LCB0cnVlKTtcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLml0ZW1zLnB1c2goaXRlbSkgLSAxO1xuICAgICAgICByZXR1cm4gKG5ld0luZm8pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdLmVsZW1JbmZvID0gbmV3SW5mbztcbiAgICAgICAgICAgIHRoaXMubW92ZVRvU2xpZGUodGhpcy5zbGlkZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQ29udGVudChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxuICAgIG5leHQoZGVsdGEpIHtcbiAgICAgICAgbGV0IG5leHQgPSB0aGlzLnNsaWRlICsgZGVsdGE7XG4gICAgICAgIGlmIChuZXh0ID49IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBuZXh0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmKG5leHQgPCAwKSB7XG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2xpZGUgPSBuZXh0O1xuICAgICAgICB0aGlzLm1vdmVUb1NsaWRlKHRoaXMuc2xpZGUpO1xuICAgIH1cbiAgICBhZGRDb250cm9sbGVyKGRlbHRhKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV4dChkZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuICAgIHNldENvdW50ZXIoaGFuZGxlcikge1xuICAgICAgICB0aGlzLnNldFNsaWRlID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy5zY3JvbGxQb3NpdGlvbiA9IDA7XG4gICAgfVxuICAgIHN0YXRpYyBmYWN0b3J5KC4uLmFyZ3MpIHtcbiAgICAgICAgU2xpZGVyQ29udHJvbGxlci5pbnN0YW5jZSA9IG5ldyBTbGlkZXJDb250cm9sbGVyKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gU2xpZGVyQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IFNsaWRlckNvbnRyb2xsZXIuZmFjdG9yeTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyQ29udGVudCB7XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoZWFzaW5nQW5pbWF0b3IpIHtcbiAgICAgICAgdGhpcy5lYXNpbmdBbmltYXRvciA9IGVhc2luZ0FuaW1hdG9yXG4gICAgICAgIHRoaXMuZWFzaW5nQW5pbWF0b3IuY2FsbEJhY2sgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgYW5pbWF0ZShpbmZvKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0ID0gaW5mby5sZWZ0O1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50WzBdO1xuICAgICAgICBzbGlkZXJNYWluLmFkZENvbnRlbnQoKHZhbCwgYW5pbWF0ZSk9PntcbiAgICAgICAgICAgIGlmICghYW5pbWF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0ID0gdmFsXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWFzaW5nQW5pbWF0b3IuZWFzZVByb3Aoe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdmFsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ3Njcm9sbCcsICgpPT57XG4gICAgICAgICAgICBzbGlkZXJNYWluLnNjcm9sbFBvc2l0aW9uID0gdGhpcy5lbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNsaWRlckNvdW50ZXIge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3RvcigkdGltZW91dCkge1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoJHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICBzbGlkZXJNYWluLnNldENvdW50ZXIoKHZhbCk9PntcbiAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRTbGlkZSA9ICgxZTQrdmFsKzErXCJcIikuc2xpY2UoLTIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVySXRlbSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCR3aW5kb3cpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy4kd2luZG93ID0gYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpO1xuICAgICAgICB0aGlzLmVsZW1zID0gW107XG4gICAgfVxuICAgIGdldEVsZW1JbmZvKGluZGV4KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtc1tpbmRleF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZzZXRMZWZ0OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgICAgICAgICBjZW50ZXI6IGVsZW1lbnQub2Zmc2V0TGVmdCArIGVsZW1lbnQub2Zmc2V0V2lkdGgvMixcbiAgICAgICAgICAgIG9mZnNldFdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZWxlbXMucHVzaChlbGVtZW50WzBdKSAtIDE7XG4gICAgICAgIGxldCBoYW5kbGVyID0gc2xpZGVyTWFpbi5hZGRJdGVtKHtcbiAgICAgICAgICAgIGVsZW06IHRoaXMuZWxlbXNbaW5kZXhdLFxuICAgICAgICAgICAgZWxlbUluZm86IHRoaXMuZ2V0RWxlbUluZm8oaW5kZXgpXG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCk9PntcbiAgICAgICAgICAgIGhhbmRsZXIodGhpcy5nZXRFbGVtSW5mbyhpbmRleCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU21hbGxTbGlkZXJJdGVtIGV4dGVuZHMgU2xpZGVySXRlbSB7XG4gICAgXG4gICAgZ2V0RWxlbUluZm8oaW5kZXgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggPCA4MDApIHtcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5nZXRFbGVtSW5mbyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1zW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZnNldExlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdCAtIGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBjZW50ZXI6IGVsZW1lbnQub2Zmc2V0TGVmdCAtIGVsZW1lbnQub2Zmc2V0V2lkdGgvMixcbiAgICAgICAgICAgIG9mZnNldFdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgIH1cbiAgICB9XG59XG4gICAgXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29udHJvbGwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXnNsaWRlck1haW4nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHNsaWRlck1haW4uYWRkQ29udHJvbGxlcigrYXR0cnMuc2xpZGVyQ29udHJvbGwpXG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHNsaWRlck1haW4pKVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBFYXNpbmdBbmltYXRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHQpe1xuICAgICAgICB2YXIgb3B0ID0ge307XG4gICAgICAgIHRoaXMuZWFzaW5nSW50ZXJ2YWwgPSBvcHQuZWFzaW5nSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBvcHQuZHVyYXRpb24gfHwgMTAwMDtcbiAgICAgICAgdGhpcy5zdGVwID0gb3B0LnN0ZXAgfHwgNTA7XG4gICAgICAgIHRoaXMuZWFzaW5nRm4gPSAodCwgYiwgYywgZCkgPT57XG4gICAgICAgICAgICBpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0KnQgKyBiO1xuICAgICAgICAgICAgcmV0dXJuIC1jLzIgKiAoKHQtPTIpKnQqdCp0IC0gMikgKyBiO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVhc2luZ0ZuID0gb3B0LmVhc2luZ0ZuIHx8IHRoaXMuZWFzaW5nRm47XG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBvcHQuY2FsbEJhY2sgfHwgKCk9Pnt9O1xuICAgIH1cbiAgICBtYWtlRnJvbUNhbGxiYWNrIChjYWxsQmFjaykge1xuICAgICAgICBjb25zb2xlLmxvZyhjYWxsQmFjaylcbiAgICAgICAgcmV0dXJuIG5ldyBFYXNpbmdBbmltYXRvcih7XG4gICAgICAgICAgICBjYWxsQmFjazogY2FsbEJhY2tcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVhc2VQcm9wIChvYmosIHByb3BEaWN0KSB7XG4gICAgICAgIHByb3BEaWN0ID0gcHJvcERpY3QgfHwge307XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIHQgPSAwLFxuICAgICAgICAgICAgb3V0X3ZhbHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZWFzaW5nSW50ZXJ2YWwpO1xuICAgICAgICBzZWxmLmVhc2luZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgIHQrPSB0aGlzLnN0ZXA7XG4gICAgICAgICAgICBpZiAodCA+PSB0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmVhc2luZ0ludGVydmFsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrKHByb3BEaWN0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcGVyY2VudCA9IHRoaXMuZWFzaW5nRm4odCwgMCwgMSwgdGhpcy5kdXJhdGlvbik7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wRGljdCkuZm9yRWFjaCgoa2V5LCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG9sZF92YWwgPSBvYmpba2V5XTtcbiAgICAgICAgICAgICAgICBvdXRfdmFsc1trZXldID0gb2xkX3ZhbCAtIHBlcmNlbnQqKG9sZF92YWwgLSBwcm9wRGljdFtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhvdXRfdmFscyk7XG4gICAgICAgIH0sIHRoaXMuc3RlcCk7XG4gICAgfVxufTtcbiIsIi8qKlxuICogQSBoZWxwZXIgY2xhc3MgdG8gc2ltcGxpZnkgcmVnaXN0ZXJpbmcgQW5ndWxhciBjb21wb25lbnRzIGFuZCBwcm92aWRlIGEgY29uc2lzdGVudCBzeW50YXggZm9yIGRvaW5nIHNvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIoYXBwTmFtZSkge1xuXG4gICAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKGFwcE5hbWUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlyZWN0aXZlOiBkaXJlY3RpdmUsXG4gICAgICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gICAgICAgIHNlcnZpY2U6IHNlcnZpY2UsXG4gICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcbiAgICAgICAgZmFjdG9yeTogZmFjdG9yeVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgY29uc3RydWN0b3JGbikge1xuXG4gICAgICAgIGNvbnN0cnVjdG9yRm4gPSBfbm9ybWFsaXplQ29uc3RydWN0b3IoY29uc3RydWN0b3JGbik7XG5cbiAgICAgICAgaWYgKCFjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5jb21waWxlKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gZW1wdHkgY29tcGlsZSBmdW5jdGlvbiBpZiBub25lIHdhcyBkZWZpbmVkLlxuICAgICAgICAgICAgY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSA9ICgpID0+IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9yaWdpbmFsQ29tcGlsZUZuID0gX2Nsb25lRnVuY3Rpb24oY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSk7XG5cbiAgICAgICAgLy8gRGVjb3JhdGUgdGhlIGNvbXBpbGUgbWV0aG9kIHRvIGF1dG9tYXRpY2FsbHkgcmV0dXJuIHRoZSBsaW5rIG1ldGhvZCAoaWYgaXQgZXhpc3RzKVxuICAgICAgICAvLyBhbmQgYmluZCBpdCB0byB0aGUgY29udGV4dCBvZiB0aGUgY29uc3RydWN0b3IgKHNvIGB0aGlzYCB3b3JrcyBjb3JyZWN0bHkpLlxuICAgICAgICAvLyBUaGlzIGdldHMgYXJvdW5kIHRoZSBwcm9ibGVtIG9mIGEgbm9uLWxleGljYWwgXCJ0aGlzXCIgd2hpY2ggb2NjdXJzIHdoZW4gdGhlIGRpcmVjdGl2ZSBjbGFzcyBpdHNlbGZcbiAgICAgICAgLy8gcmV0dXJucyBgdGhpcy5saW5rYCBmcm9tIHdpdGhpbiB0aGUgY29tcGlsZSBmdW5jdGlvbi5cbiAgICAgICAgX292ZXJyaWRlKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLCAnY29tcGlsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxDb21waWxlRm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5saW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5saW5rLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGZhY3RvcnlBcnJheSA9IF9jcmVhdGVGYWN0b3J5QXJyYXkoY29uc3RydWN0b3JGbik7XG5cbiAgICAgICAgYXBwLmRpcmVjdGl2ZShuYW1lLCBmYWN0b3J5QXJyYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250cm9sbGVyKG5hbWUsIGNvbnRydWN0b3JGbikge1xuICAgICAgICBhcHAuY29udHJvbGxlcihuYW1lLCBjb250cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXJ2aWNlKG5hbWUsIGNvbnRydWN0b3JGbikge1xuICAgICAgICBhcHAuc2VydmljZShuYW1lLCBjb250cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm92aWRlcihuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIGFwcC5wcm92aWRlcihuYW1lLCBjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmFjdG9yeShuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIGNvbnN0cnVjdG9yRm4gPSBfbm9ybWFsaXplQ29uc3RydWN0b3IoY29uc3RydWN0b3JGbik7XG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICBhcHAuZmFjdG9yeShuYW1lLCBmYWN0b3J5QXJyYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgY29uc3RydWN0b3JGbiBpcyBhbiBhcnJheSBvZiB0eXBlIFsnZGVwMScsICdkZXAyJywgLi4uLCBjb25zdHJ1Y3RvcigpIHt9XVxuICAgICAqIHdlIG5lZWQgdG8gcHVsbCBvdXQgdGhlIGFycmF5IG9mIGRlcGVuZGVuY2llcyBhbmQgYWRkIGl0IGFzIGFuICRpbmplY3QgcHJvcGVydHkgb2YgdGhlXG4gICAgICogYWN0dWFsIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSBpbnB1dFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvckZuO1xuXG4gICAgICAgIGlmIChpbnB1dC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB2YXIgaW5qZWN0ZWQgPSBpbnB1dC5zbGljZSgwLCBpbnB1dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4gPSBpbnB1dFtpbnB1dC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4uJGluamVjdCA9IGluamVjdGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JGbiA9IGlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGludG8gYSBmYWN0b3J5IGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhhdFxuICAgICAqIGNvbnN0cnVjdG9yLCB3aXRoIHRoZSBjb3JyZWN0IGRlcGVuZGVuY2llcyBhdXRvbWF0aWNhbGx5IGluamVjdGVkIGFzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEluIG9yZGVyIHRvIGluamVjdCB0aGUgZGVwZW5kZW5jaWVzLCB0aGV5IG11c3QgYmUgYXR0YWNoZWQgdG8gdGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHdpdGggdGhlXG4gICAgICogYCRpbmplY3RgIHByb3BlcnR5IGFubm90YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uc3RydWN0b3JGblxuICAgICAqIEByZXR1cm5zIHtBcnJheS48VD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBhcnJheSBvZiBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgbmVlZGVkIGJ5IHRoaXMgY29tcG9uZW50IChhcyBjb250YWluZWQgaW4gdGhlIGAkaW5qZWN0YCBhcnJheSlcbiAgICAgICAgdmFyIGFyZ3MgPSBjb25zdHJ1Y3RvckZuLiRpbmplY3QgfHwgW107XG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBhcmdzLnNsaWNlKCk7IC8vIGNyZWF0ZSBhIGNvcHkgb2YgdGhlIGFycmF5XG4gICAgICAgIC8vIFRoZSBmYWN0b3J5QXJyYXkgdXNlcyBBbmd1bGFyJ3MgYXJyYXkgbm90YXRpb24gd2hlcmVieSBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IGlzIHRoZSBuYW1lIG9mIGFcbiAgICAgICAgLy8gZGVwZW5kZW5jeSwgYW5kIHRoZSBmaW5hbCBpdGVtIGlzIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICAgICAgZmFjdG9yeUFycmF5LnB1c2goKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIC8vcmV0dXJuIG5ldyBjb25zdHJ1Y3RvckZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yRm4oLi4uYXJncyk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZVtrZXldID0gaW5zdGFuY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZhY3RvcnlBcnJheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZSBhIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIG9yaWdpbmFsXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jbG9uZUZ1bmN0aW9uKG9yaWdpbmFsKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIGFuIG9iamVjdCdzIG1ldGhvZCB3aXRoIGEgbmV3IG9uZSBzcGVjaWZpZWQgYnkgYGNhbGxiYWNrYC5cbiAgICAgKiBAcGFyYW0gb2JqZWN0XG4gICAgICogQHBhcmFtIG1ldGhvZE5hbWVcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfb3ZlcnJpZGUob2JqZWN0LCBtZXRob2ROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBvYmplY3RbbWV0aG9kTmFtZV0gPSBjYWxsYmFjayhvYmplY3RbbWV0aG9kTmFtZV0pXG4gICAgfVxuXG59XG4iXX0=
