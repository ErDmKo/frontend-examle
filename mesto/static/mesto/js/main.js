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

var _movieShowControllersShowDetailJs = require('./movieShow/controllers/showDetail.js');

var app = angular.module('mesto', ['ngResource', 'duScroll', 'youtube-embed']);

(0, _utilsRegister.register)('mesto').directive('sliderMain', _topNewsDirectivesSlider.SliderMain).directive('sliderControll', _topNewsDirectivesSlider.SliderControll).directive('sliderContent', _topNewsDirectivesSlider.SliderContent).directive('sliderItem', _topNewsDirectivesSlider.SliderItem).directive('smallSliderItem', _topNewsDirectivesSlider.SmallSliderItem).directive('uniSliderItem', _topNewsDirectivesSlider.UniSliderItem).directive('sliderCounter', _topNewsDirectivesSlider.SliderCounter).directive('draggController', _topNewsDirectivesDraggController.DraggController).directive('horizontalScroll', _topNewsDirectivesHorizontalScroll.HorizontalScroll).factory('easingAnimator', _topNewsServicesEasingAnimator.EasingAnimator).directive('mestoFeedbackItem', _feedBackDirectivesFeedBack.MestoFeedbackItem).directive('mestoFeedbackToggle', _feedBackDirectivesFeedBack.MestoFeedbackToggle).directive('mestoFeedbackClose', _feedBackDirectivesFeedBack.MestoFeedbackClose).directive('mestoFeedbackContanier', _feedBackDirectivesFeedBack.MestoFeedbackContnier).service('popUpSerivice', _feedBackServicesPopUpService.PopUpService).service('feedbackResource', _feedBackServicesFeedbackResource.FeedbackResource).controller('feedbackFormController', _feedBackControllersFormController.FeedbackFormController).directive('mestoClickFade', _clickFadeDirectivesClickFade.MestoClickFade).directive('mestoLogoHover', _mainPageDirectivesLogoDirectives.SVGLogoHover).directive('mestoSvgItem', _mainPageDirectivesLogoDirectives.SVGLogoItem).directive('mestoSvgLogo', _mainPageDirectivesLogoDirectives.SVGLogoContanier).directive('mestoSvgBackground', _mainPageDirectivesLogoDirectives.SVGLogoBackground).controller('showMovieController', _movieShowControllersPlayShowJs.ShowMovieController).directive('mestoCustomSelect', _movieShowDirectivesCustomSelectJs.MestoCustomSelect).directive('mestoCustomSelectItem', _movieShowDirectivesCustomSelectJs.MestoCustomSelectItem).directive('mestoCustomSelectPlaceholder', _movieShowDirectivesCustomSelectJs.MestoCustomSelectPlaceholder).controller('showsFilterController', _movieShowControllersShowsFilterControllerJs.ShowsFilterController).controller('showDetail', _movieShowControllersShowDetailJs.ShowDetail);

app.config(["$resourceProvider", "$httpProvider", function ($resourceProvider, $httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
angular.element(document).ready(angular.bootstrap.bind(angular, document, ['mesto']));

},{"./clickFade/directives/clickFade":1,"./feedBack/controllers/FormController":2,"./feedBack/directives/feedBack":3,"./feedBack/services/feedbackResource":4,"./feedBack/services/popUpService":5,"./mainPage/directives/logoDirectives":7,"./movieShow/controllers/playShow.js":8,"./movieShow/controllers/showDetail.js":9,"./movieShow/controllers/showsFilterController.js":10,"./movieShow/directives/customSelect.js":11,"./topNews/directives/draggController":12,"./topNews/directives/horizontalScroll":13,"./topNews/directives/slider":14,"./topNews/services/easingAnimator":15,"./utils/register":16}],7:[function(require,module,exports){
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

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ShowDetail =

/*@ngInject*/
["$scope", "$window", function ShowDetail($scope, $window) {
    _classCallCheck(this, ShowDetail);

    this.$window = $window;
    this.pathArray = window.location.href.split('?');
    if (this.pathArray.length > 1) {
        this.pathArray = this.pathArray[1].split("#")[0].split('&').reduce(function (dict, val) {
            var _val$split = val.split('=');

            var _val$split2 = _slicedToArray(_val$split, 2);

            var key = _val$split2[0];
            var value = _val$split2[1];

            if (value) {
                dict[key] = decodeURIComponent(value);
            }
            return dict;
        }, {});
        $scope.selectDate = this.pathArray.date;
    }
}];

exports.ShowDetail = ShowDetail;

},{}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ShowsFilterController = (function () {

    /*@ngInject*/

    function ShowsFilterController($scope, $window) {
        _classCallCheck(this, ShowsFilterController);

        this.$window = $window;
        this.pathArray = window.location.href.split('#')[0].split('?');
        this.select = this.pathArray.length > 1 ? this.pathArray[1].split('&').reduce(function (dict, val) {
            var _val$split = val.split('=');

            var _val$split2 = _slicedToArray(_val$split, 2);

            var key = _val$split2[0];
            var value = _val$split2[1];

            if (value) {
                dict[key] = value;
            }
            return dict;
        }, {}) : {};
    }
    ShowsFilterController.$inject = ["$scope", "$window"];

    _createClass(ShowsFilterController, [{
        key: 'change',
        value: function change() {
            this.search();
        }
    }, {
        key: 'search',
        value: function search() {
            window.location.href = this.pathArray[0] + '?' + jQuery.param(this.select);
        }
    }]);

    return ShowsFilterController;
})();

exports.ShowsFilterController = ShowsFilterController;

},{}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
var _bind = Function.prototype.bind;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var MestoCustomSelectController = (function () {
    function MestoCustomSelectController() {
        _classCallCheck(this, MestoCustomSelectController);

        var setPlaceholder = function setPlaceholder(text) {};

        this.models = {};
        this.setPlaceholder = function (fu) {
            setPlaceholder = fu;
        };

        this.selectOption = function (text) {
            setPlaceholder(text);
        };
    }

    _createClass(MestoCustomSelectController, [{
        key: 'addModel',
        value: function addModel(modelCall) {
            var _this = this;

            modelCall(function (result) {
                _this.models[result.value] = result;
            });
        }
    }, {
        key: 'selectModel',
        value: function selectModel(modelValue) {
            this.selectOption(this.models[modelValue].name);
        }
    }, {
        key: 'setToggleOpen',
        value: function setToggleOpen(fu) {
            this.toggleOpen = fu;
        }
    }, {
        key: 'toggleOpen',
        value: function toggleOpen() {}
    }], [{
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

    function MestoCustomSelect($timeout, $document) {
        _classCallCheck(this, MestoCustomSelect);

        this.$timeout = $timeout;
        this.restrict = 'A';
        this.controller = MestoCustomSelectController.factory;
        this.$document = $document;
    }
    MestoCustomSelect.$inject = ["$timeout", "$document"];

    _createClass(MestoCustomSelect, [{
        key: 'link',
        value: function link($scope, element, attrs, controller) {
            var _this2 = this;

            var modelValue = $scope.$eval(attrs.mestoCustomSelect);
            if (modelValue) {
                this.$timeout(function () {
                    controller.selectModel(modelValue);
                }, 200);
            }
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
    /*@ngInject*/

    function MestoCustomSelectItem($timeout) {
        _classCallCheck(this, MestoCustomSelectItem);

        this.$timeout = $timeout;
        this.restrict = 'A';
        this.require = '^mestoCustomSelect';
    }
    MestoCustomSelectItem.$inject = ["$timeout"];

    _createClass(MestoCustomSelectItem, [{
        key: 'link',
        value: function link($scope, element, attrs, customSelectController) {
            var _this3 = this;

            customSelectController.addModel(function (callBack) {
                _this3.$timeout(function () {
                    callBack({
                        name: element.find('label').text(),
                        value: element.find('input').val()
                    });
                });
            });
            element.on('click', function () {
                customSelectController.selectOption(element.text());
            });
        }
    }]);

    return MestoCustomSelectItem;
})();

exports.MestoCustomSelectItem = MestoCustomSelectItem;

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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
                if (attrs.horizontalScroll > 0 && attrs.horizontalScroll < window.innerWidth) {
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2suanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpbi5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpblBhZ2UvZGlyZWN0aXZlcy9sb2dvRGlyZWN0aXZlcy5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbW92aWVTaG93L2NvbnRyb2xsZXJzL3BsYXlTaG93LmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9tb3ZpZVNob3cvY29udHJvbGxlcnMvc2hvd0RldGFpbC5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbW92aWVTaG93L2NvbnRyb2xsZXJzL3Nob3dzRmlsdGVyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbW92aWVTaG93L2RpcmVjdGl2ZXMvY3VzdG9tU2VsZWN0LmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL2RpcmVjdGl2ZXMvZHJhZ2dDb250cm9sbGVyLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL2RpcmVjdGl2ZXMvaG9yaXpvbnRhbFNjcm9sbC5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9kaXJlY3RpdmVzL3NsaWRlci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9zZXJ2aWNlcy9lYXNpbmdBbmltYXRvci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdXRpbHMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQWEsY0FBYzthQUFkLGNBQWM7OEJBQWQsY0FBYzs7O2lCQUFkLGNBQWM7O2VBT25CLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDeEIsc0JBQVUsQ0FBQyxZQUFJO0FBQ1gsdUJBQU8sQ0FDRixXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQzlDLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLG1CQUFPLENBQ0YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FDbkMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQzdCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDLEVBQUM7QUFDcEIsaUJBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtBQUNsQixvQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNwQyx1QkFBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDM0MsMEJBQVUsQ0FBQyxZQUFJO0FBQ1gsMEJBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztpQkFDL0IsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNYLENBQUMsQ0FBQztTQUNWOzs7YUF0QmlCLGVBQUc7QUFDakIsbUJBQU8sR0FBRyxDQUFDO1NBQ2Q7OzthQUNvQixlQUFHO0FBQ3BCLG1CQUFPLE1BQU0sQ0FBQztTQUNqQjs7O1dBTlEsY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztJQ0FkLHNCQUFzQjs7O0FBRXBCLGFBRkYsc0JBQXNCLENBRW5CLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRTs4QkFGN0Isc0JBQXNCOztBQUczQixZQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDekMsWUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsWUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakIsWUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDeEI7O2lCQVBRLHNCQUFzQjs7ZUFRekIsZ0JBQUMsSUFBSSxFQUFDOzs7QUFDUixnQkFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2Ysb0JBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQixNQUFNO0FBQ0gsb0JBQUksUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4RCx3QkFBUSxDQUFDLEtBQUssRUFBRSxDQUNYLElBQUksQ0FBQyxZQUFLO0FBQ1AsMEJBQUssT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDdkIsQ0FBQyxTQUNJLENBQUMsVUFBQyxRQUFRLEVBQUs7QUFDakIsMEJBQUssS0FBSyxHQUFHLFFBQVEsQ0FBQztpQkFDekIsQ0FBQyxDQUFBO2FBQ1Q7U0FDSjs7O1dBckJRLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7OztJQ0F0QixtQkFBbUI7OztBQUVqQixhQUZGLG1CQUFtQixDQUVoQixhQUFhLEVBQUU7OEJBRmxCLG1CQUFtQjs7QUFHeEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDcEIsWUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7S0FDdEM7O2lCQUxRLG1CQUFtQjs7ZUFNeEIsY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN4QixnQkFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDM0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzNDLG1CQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBQ3pEOzs7V0FWUSxtQkFBbUI7Ozs7O0lBWW5CLHFCQUFxQjtpQkFBckIscUJBQXFCOzthQUNQLGVBQUc7QUFDdEIsbUJBQU8sWUFBWSxDQUFDO1NBQ3ZCOzs7OztBQUdVLGFBTkYscUJBQXFCLENBTWxCLGFBQWEsRUFBRTs4QkFObEIscUJBQXFCOztBQU8xQixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztLQUN0Qzs7aUJBVFEscUJBQXFCOztlQVUxQixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3hCLGdCQUFJLE9BQU8sR0FBRyxTQUFWLE9BQU8sQ0FBSSxJQUFJLEVBQUs7QUFDcEIsdUJBQU8sQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0QsQ0FBQTtBQUNELGdCQUFJLENBQUMsYUFBYSxDQUNiLFlBQVksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDNUQ7OztXQWhCUSxxQkFBcUI7Ozs7O0lBa0JyQixrQkFBa0I7OztBQUVoQixhQUZGLGtCQUFrQixDQUVmLGFBQWEsRUFBRTs4QkFGbEIsa0JBQWtCOztBQUd2QixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztLQUN0Qzs7aUJBTFEsa0JBQWtCOztlQU12QixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3hCLGdCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNqRSxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztTQUN6RDs7O1dBVFEsa0JBQWtCOzs7OztJQVdsQixpQkFBaUI7aUJBQWpCLGlCQUFpQjs7YUFDSCxlQUFHO0FBQ3RCLG1CQUFPLFFBQVEsQ0FBQztTQUNuQjs7Ozs7QUFHVSxhQU5GLGlCQUFpQixDQU1kLGFBQWEsRUFBRTs4QkFObEIsaUJBQWlCOztBQU90QixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztLQUN0Qzs7aUJBVFEsaUJBQWlCOztlQVVwQixnQkFBQyxPQUFPLEVBQUU7QUFDWixtQkFBTyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RDs7O2VBQ0csY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN4QixnQkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsZ0JBQUksQ0FBQyxhQUFhLENBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUMxRTs7O1dBakJRLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7SUN6Q2pCLGdCQUFnQjs7QUFFZCxTQUZGLGdCQUFnQixDQUViLFNBQVMsRUFBRTswQkFGZCxnQkFBZ0I7O0FBR3JCLFdBQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Q0FDOUM7Ozs7Ozs7Ozs7Ozs7OztJQ0pDLEtBQUs7QUFDSSxhQURULEtBQUssQ0FDSyxXQUFXLEVBQUUsSUFBSSxFQUFDOzhCQUQ1QixLQUFLOztBQUVILFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQ2xDOztpQkFKQyxLQUFLOztlQUtHLHNCQUFHO0FBQ1QsZ0JBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNuQyxxQkFBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ3ZDO0FBQ0QsZ0JBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0Qjs7O1dBVkMsS0FBSzs7O0FBWVgsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQzs7SUFFZixZQUFZO0FBQ1YsYUFERixZQUFZLEdBQ1A7OEJBREwsWUFBWTs7QUFFakIsWUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7S0FDcEI7O2lCQUhRLFlBQVk7O2VBSWQsaUJBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUN2QixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDeEQ7OztlQUNJLGVBQUMsUUFBUSxFQUFFOzs7QUFDWixnQkFBSSxDQUFDLFFBQVEsRUFBRTtBQUNYLHNCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUc7QUFDcEMsMEJBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNqQyxDQUFDLENBQUE7QUFDRix1QkFBTzthQUNWO0FBQ0QsbUJBQU8sVUFBQyxDQUFDLEVBQUs7QUFDVixvQkFBSSxLQUFLLEdBQUcsTUFBSyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDakMsb0JBQUksS0FBSyxFQUFFO0FBQ1AscUJBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQix5QkFBSyxDQUFDLFVBQVUsRUFBRSxDQUFBO2lCQUNyQjthQUNKLENBQUE7U0FDSjs7O2VBQ1csc0JBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDbkMsaUJBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDOUM7OztlQUNTLG9CQUFDLFNBQVMsRUFBRTs7O0FBQ2xCLG1CQUFPLFVBQUMsQ0FBQyxFQUFLO0FBQ1YsaUJBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQixpQkFBQyxDQUFDLE9BQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBLENBQzFCLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRztBQUNkLHlCQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ3RCLENBQUMsQ0FBQTthQUNULENBQUE7U0FDSjs7O1dBakNRLFlBQVk7Ozs7Ozs7OzZCQ2RBLGtCQUFrQjs7dUNBVXBDLDZCQUE2Qjs7NkNBQ0wsbUNBQW1DOztnREFDbEMsc0NBQXNDOztpREFDckMsdUNBQXVDOzs0Q0FFekMsa0NBQWtDOzs0Q0FFcEMsa0NBQWtDOztnREFDOUIsc0NBQXNDOztpREFDaEMsdUNBQXVDOzswQ0FNdkUsZ0NBQWdDOztnREFPaEMsc0NBQXNDOzs4Q0FFVCxxQ0FBcUM7O2lEQU1sRSx3Q0FBd0M7OzJEQUVULGtEQUFrRDs7Z0RBQzdELHVDQUF1Qzs7QUFFbEUsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FDOUIsWUFBWSxFQUNaLFVBQVUsRUFDVixlQUFlLENBQ2xCLENBQUMsQ0FBQzs7QUFFSCw2QkFBUyxPQUFPLENBQUMsQ0FDWixTQUFTLENBQUMsWUFBWSxzQ0FBYSxDQUNuQyxTQUFTLENBQUMsZ0JBQWdCLDBDQUFpQixDQUMzQyxTQUFTLENBQUMsZUFBZSx5Q0FBZ0IsQ0FDekMsU0FBUyxDQUFDLFlBQVksc0NBQWEsQ0FDbkMsU0FBUyxDQUFDLGlCQUFpQiwyQ0FBa0IsQ0FDN0MsU0FBUyxDQUFDLGVBQWUseUNBQWdCLENBQ3pDLFNBQVMsQ0FBQyxlQUFlLHlDQUFnQixDQUN6QyxTQUFTLENBQUMsaUJBQWlCLG9EQUFrQixDQUM3QyxTQUFTLENBQUMsa0JBQWtCLHNEQUFtQixDQUMvQyxPQUFPLENBQUMsZ0JBQWdCLGdEQUFpQixDQUV6QyxTQUFTLENBQUMsbUJBQW1CLGdEQUFvQixDQUNqRCxTQUFTLENBQUMscUJBQXFCLGtEQUFzQixDQUNyRCxTQUFTLENBQUMsb0JBQW9CLGlEQUFxQixDQUNuRCxTQUFTLENBQUMsd0JBQXdCLG9EQUF3QixDQUMxRCxPQUFPLENBQUMsZUFBZSw2Q0FBZSxDQUV0QyxPQUFPLENBQUMsa0JBQWtCLHFEQUFtQixDQUM3QyxVQUFVLENBQUMsd0JBQXdCLDREQUF5QixDQUU1RCxTQUFTLENBQUMsZ0JBQWdCLCtDQUFpQixDQUUzQyxTQUFTLENBQUMsZ0JBQWdCLGlEQUFlLENBQ3pDLFNBQVMsQ0FBQyxjQUFjLGdEQUFjLENBQ3RDLFNBQVMsQ0FBQyxjQUFjLHFEQUFtQixDQUMzQyxTQUFTLENBQUMsb0JBQW9CLHNEQUFvQixDQUVsRCxVQUFVLENBQUMscUJBQXFCLHNEQUFzQixDQUV0RCxTQUFTLENBQUMsbUJBQW1CLHVEQUFvQixDQUNqRCxTQUFTLENBQUMsdUJBQXVCLDJEQUF3QixDQUN6RCxTQUFTLENBQUMsOEJBQThCLGtFQUErQixDQUV2RSxVQUFVLENBQUMsdUJBQXVCLHFFQUF3QixDQUMxRCxVQUFVLENBQUMsWUFBWSwrQ0FBYSxDQUFBOztBQUV6QyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQUMsaUJBQWlCLEVBQUUsYUFBYSxFQUFJO0FBQzVDLGlCQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUM7QUFDcEQsaUJBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztBQUN0RCxxQkFBaUIsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0NBQzNELENBQUMsQ0FBQTtBQUNGLE9BQU8sQ0FDRixPQUFPLENBQUMsUUFBUSxDQUFDLENBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztJQy9GM0QsY0FBYztBQUNMLGFBRFQsY0FBYyxHQUNGOzhCQURaLGNBQWM7O0FBRVosWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsWUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7S0FDckI7O2lCQUpDLGNBQWM7O2VBS1Isa0JBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNoQixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDNUI7OztlQUNNLGlCQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDaEIsZ0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzNCOzs7ZUFDWSx1QkFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDO0FBQ3JCLGdCQUFJLENBQUMsVUFBVSxHQUFHO0FBQ2Qsb0JBQUksRUFBRSxJQUFJO0FBQ1Ysb0JBQUksRUFBRSxJQUFJO2FBQ2IsQ0FBQTtTQUNKOzs7ZUFDTSxtQkFBRzs7O0FBQ04sa0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRztBQUNuQyxzQkFBSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDOUIsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDMUI7OztlQUNJLGVBQUMsSUFBSSxFQUFFO0FBQ1IsZ0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN6QyxnQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM3Qjs7O2VBQ0csY0FBQyxJQUFJLEVBQUU7QUFDUCxnQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1Qjs7O2VBQ2EsbUJBQVU7OENBQU4sSUFBSTtBQUFKLG9CQUFJOzs7QUFDbEIsMEJBQWMsQ0FBQyxRQUFRLG9CQUFPLGNBQWMsZ0JBQUksSUFBSSxLQUFDLENBQUM7QUFDdEQsbUJBQU8sY0FBYyxDQUFDLFFBQVEsQ0FBQztTQUNsQzs7O1dBakNDLGNBQWM7OztJQW1DUCxnQkFBZ0IsR0FDZCxTQURGLGdCQUFnQixHQUNaOzBCQURKLGdCQUFnQjs7QUFFckIsUUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQ3pDLFFBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0NBQ3ZCOzs7O0lBRVEsaUJBQWlCO2lCQUFqQixpQkFBaUI7O2FBQ0gsZUFBRTtBQUNyQixtQkFBTyxRQUFRLENBQUM7U0FDbkI7OztBQUNVLGFBSkYsaUJBQWlCLEdBSVo7OEJBSkwsaUJBQWlCOztBQUt0QixZQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztBQUMvQixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztLQUN2Qjs7aUJBUFEsaUJBQWlCOztlQVF0QixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUNwQyxzQkFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFDLEdBQUcsRUFBRztBQUM1Qix1QkFBTyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNqRCx1QkFBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLFlBQVUsR0FBRyxTQUFNLE1BQU0sQ0FBQyxDQUFDO2FBQ2pFLEVBQUUsWUFBSTtBQUNILHVCQUFPLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3ZELENBQUMsQ0FBQztTQUNOOzs7V0FmUSxpQkFBaUI7Ozs7O0lBaUJqQixZQUFZO0FBQ1YsYUFERixZQUFZLEdBQ1I7OEJBREosWUFBWTs7QUFFakIsWUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDL0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7S0FDdkI7O2lCQUpRLFlBQVk7O2VBS2pCLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0FBQ3BDLG1CQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFJO0FBQ3pCLDBCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUMxQyxDQUFDLENBQUM7QUFDSCxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBSTtBQUN6QiwwQkFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDNUMsQ0FBQyxDQUFDO0FBQ0gsbUJBQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQUk7QUFDcEIsMEJBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3pDLENBQUMsQ0FBQztTQUNOOzs7V0FmUSxZQUFZOzs7OztJQWlCWixXQUFXO0FBQ1QsYUFERixXQUFXLEdBQ1A7OEJBREosV0FBVzs7QUFFaEIsWUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDL0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7S0FDdkI7O2lCQUpRLFdBQVc7O2VBS2hCLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0FBQ3BDLHNCQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7QUFDbkMscUJBQUssRUFBRSxpQkFBSTtBQUNQLDBCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUNyQztBQUNELHNCQUFNLEVBQUUsa0JBQUk7QUFDUiwyQkFBTyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDcEQ7QUFDRCx3QkFBUSxFQUFFLG9CQUFJO0FBQ1YsMkJBQU8sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3ZEO2FBQ0osQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU87O0FBRTFCLGdCQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ3RCLGVBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBSTtBQUM3QiwwQkFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6RCxDQUFDLENBQUM7QUFDSCxlQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDdkIsZ0JBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRTtBQUNiLDBCQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7OztXQTNCUSxXQUFXOzs7Ozs7QUMzRXhCLFlBQVksQ0FBQzs7Ozs7Ozs7OztJQUVBLG1CQUFtQjs7OztBQUdqQixhQUhGLG1CQUFtQixDQUdoQixNQUFNLEVBQUUsUUFBUSxFQUFDOzs7OEJBSHBCLG1CQUFtQjs7QUFJeEIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsY0FBTSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxVQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUs7QUFDckQsZ0JBQUksUUFBUSxHQUFHLE1BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLGtCQUFLLFFBQVEsQ0FBQyxZQUFJO0FBQ2hCLHdCQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUN4QixDQUFDLENBQUE7U0FDTCxDQUFDLENBQUM7QUFDSCxjQUFNLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLFVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBSztBQUNuRCxnQkFBSSxRQUFRLEdBQUcsTUFBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEMsb0JBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzNCLENBQUMsQ0FBQztLQUNOOztpQkFqQlEsbUJBQW1COztlQWtCakIscUJBQUMsTUFBTSxFQUFDO0FBQ2YsZ0JBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDN0MsZ0JBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ3RCLG9CQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHO0FBQ2xCLDBCQUFNLEVBQUUsS0FBSztBQUNiLHdCQUFJLEVBQUUsS0FBSztpQkFDZCxDQUFBO2FBQ0o7QUFDRCxtQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCOzs7V0EzQlEsbUJBQW1COzs7Ozs7QUNGaEMsWUFBWSxDQUFDOzs7Ozs7Ozs7O0lBRUEsVUFBVTs7O0FBR1IsU0FIRixVQUFVLENBR1AsTUFBTSxFQUFFLE9BQU8sRUFBRTswQkFIcEIsVUFBVTs7QUFJZixRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixRQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNoRCxRQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztBQUMxQixZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ1YsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRzs2QkFDRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7OztnQkFBNUIsR0FBRztnQkFBRSxLQUFLOztBQUNmLGdCQUFJLEtBQUssRUFBRTtBQUNQLG9CQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekM7QUFDRCxtQkFBTyxJQUFJLENBQUM7U0FDZixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1gsY0FBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztLQUMzQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztJQ3BCUSxxQkFBcUI7Ozs7QUFHbkIsYUFIRixxQkFBcUIsQ0FHbEIsTUFBTSxFQUFFLE9BQU8sRUFBRTs4QkFIcEIscUJBQXFCOztBQUkxQixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixZQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDOUQsWUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FDckQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNWLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxHQUFHLEVBQUc7NkJBQ0UsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Ozs7Z0JBQTVCLEdBQUc7Z0JBQUUsS0FBSzs7QUFDZixnQkFBSSxLQUFLLEVBQUU7QUFDUCxvQkFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUNyQjtBQUNELG1CQUFPLElBQUksQ0FBQztTQUNmLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ25COztpQkFmUSxxQkFBcUI7O2VBZ0J4QixrQkFBRztBQUNMLGdCQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7U0FDaEI7OztlQUNLLGtCQUFHO0FBQ0wsa0JBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEFBQUUsQ0FBQztTQUM5RTs7O1dBckJRLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBNUIsMkJBQTJCO0FBRWxCLGFBRlQsMkJBQTJCLEdBRWhCOzhCQUZYLDJCQUEyQjs7QUFHekIsWUFBSSxjQUFjLEdBQUcsd0JBQUMsSUFBSSxFQUFHLEVBQUUsQ0FBQzs7QUFFaEMsWUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakIsWUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFDLEVBQUUsRUFBRztBQUN4QiwwQkFBYyxHQUFHLEVBQUUsQ0FBQztTQUN2QixDQUFBOztBQUVELFlBQUksQ0FBQyxZQUFZLEdBQUcsVUFBQyxJQUFJLEVBQUc7QUFDeEIsMEJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QixDQUFBO0tBQ0o7O2lCQWJDLDJCQUEyQjs7ZUFlckIsa0JBQUMsU0FBUyxFQUFFOzs7QUFDbkIscUJBQVMsQ0FBQyxVQUFDLE1BQU0sRUFBRztBQUNuQixzQkFBSyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUNuQyxDQUFDLENBQUM7U0FDSDs7O2VBQ1UscUJBQUMsVUFBVSxFQUFFO0FBQ3BCLGdCQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDbEQ7OztlQUNhLHVCQUFDLEVBQUUsRUFBQztBQUNkLGdCQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUN4Qjs7O2VBQ1Msc0JBQUUsRUFBRTs7O2VBRUEsbUJBQVU7OENBQU4sSUFBSTtBQUFKLG9CQUFJOzs7QUFDbEIsdUNBQTJCLENBQUMsUUFBUSxvQkFBTywyQkFBMkIsZ0JBQUksSUFBSSxLQUFDLENBQUM7QUFDaEYsbUJBQU8sMkJBQTJCLENBQUMsUUFBUSxDQUFDO1NBQy9DOzs7V0EvQkMsMkJBQTJCOzs7SUFpQ3BCLGlCQUFpQjs7OztBQUdsQixhQUhDLGlCQUFpQixDQUdqQixRQUFRLEVBQUUsU0FBUyxFQUFDOzhCQUhwQixpQkFBaUI7O0FBSXRCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQy9CLFlBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ2QsWUFBSSxDQUFDLFVBQVUsR0FBRywyQkFBMkIsQ0FBQyxPQUFPLENBQUM7QUFDdEQsWUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7S0FDOUI7O2lCQVJRLGlCQUFpQjs7ZUFVckIsY0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUM7OztBQUNyQyxnQkFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN2RCxnQkFBSSxVQUFVLEVBQUU7QUFDWixvQkFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFNO0FBQ2hCLDhCQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUN0QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1g7QUFDRCxnQkFBSSxZQUFZLEdBQUcsU0FBZixZQUFZLENBQUksQ0FBQyxFQUFLO0FBQ3RCLG9CQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QyxvQkFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUEsQUFBQyxFQUFFO0FBQ3pELDJCQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMvQjthQUNKLENBQUM7QUFDRixzQkFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFJO0FBQ3pCLHVCQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLG9CQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDekIsMkJBQU8sQ0FBQyxPQUFPLENBQUMsT0FBSyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO2lCQUM3RCxNQUFNO0FBQ0gsMkJBQU8sQ0FBQyxPQUFPLENBQUMsT0FBSyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO2lCQUM5RDthQUNKLENBQUMsQ0FBQTtTQUNMOzs7V0EvQlEsaUJBQWlCOzs7OztJQWlDakIsNEJBQTRCO0FBQzdCLGFBREMsNEJBQTRCLEdBQzNCOzhCQURELDRCQUE0Qjs7QUFFdkMsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDcEIsWUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztLQUNqQzs7aUJBSlEsNEJBQTRCOztlQUtoQyxjQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFO0FBQ2xELG1CQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFVO0FBQzFCLHNDQUFzQixDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztBQUNILGtDQUFzQixDQUFDLGNBQWMsQ0FBQyxVQUFDLElBQUksRUFBSztBQUM1Qyx1QkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQix1QkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4QyxDQUFDLENBQUM7U0FDTjs7O1dBYlEsNEJBQTRCOzs7OztJQWU1QixxQkFBcUI7OztBQUV0QixhQUZDLHFCQUFxQixDQUVyQixRQUFRLEVBQUU7OEJBRlYscUJBQXFCOztBQUdoQyxZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDO0tBQ2pDOztpQkFOUSxxQkFBcUI7O2VBTzFCLGNBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUM7OztBQUNoRCxrQ0FBc0IsQ0FBQyxRQUFRLENBQUMsVUFBQyxRQUFRLEVBQUk7QUFDNUMsdUJBQUssUUFBUSxDQUFDLFlBQUk7QUFDdkIsNEJBQVEsQ0FBQztBQUNSLDRCQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDbEMsNkJBQUssRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRTtxQkFDbEMsQ0FBQyxDQUFBO2lCQUNJLENBQUMsQ0FBQzthQUNILENBQUMsQ0FBQztBQUNILG1CQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFVO0FBQzFCLHNDQUFzQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTthQUN0RCxDQUFDLENBQUE7U0FDTDs7O1dBbkJRLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7OztJQ2pGckIsZUFBZTtBQUNiLGFBREYsZUFBZSxHQUNYOzhCQURKLGVBQWU7O0FBRXBCLFlBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ3BCLFlBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0tBQ2pDOztpQkFKUSxlQUFlOztlQUtwQixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUNwQyxnQkFBSSxVQUFVLEdBQUcsQ0FBQztnQkFDZCxVQUFVLEdBQUcsQ0FBQztnQkFDZCxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ2IsbUJBQU8sQ0FDRixFQUFFLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQ3JCLG9CQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLDBCQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUMzQiwwQkFBVSxHQUFHLFVBQVUsQ0FBQztBQUN4QixvQkFBSSxHQUFHLENBQUMsQ0FBQzthQUNaLENBQUMsQ0FDRCxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQ3BCLG9CQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLG9CQUFJLFVBQVUsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQzdCLHdCQUFJLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDbkMsOEJBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUM5QixDQUFDO2FBQ0wsQ0FBQyxDQUNELEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDLEVBQUs7QUFDbkIsb0JBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxFQUFFO0FBQ3BDLHdCQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7QUFDVixrQ0FBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdEIsTUFDSTtBQUNELGtDQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZCO0FBQ0Qsd0JBQUksR0FBRyxDQUFDLENBQUM7aUJBQ1o7QUFDRCxvQkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQywwQkFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDM0Isb0JBQUksR0FBRyxDQUFDLENBQUM7YUFDWixDQUFDLENBQUM7U0FDVjs7O1dBckNRLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBZixnQkFBZ0I7QUFDZCxhQURGLGdCQUFnQixHQUNaOzhCQURKLGdCQUFnQjs7QUFFckIsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUE7S0FDdEI7O2lCQUhRLGdCQUFnQjs7ZUFJckIsY0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN6QixnQkFBSSxPQUFPO2dCQUNQLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixTQUFTLEdBQUcsQ0FBQztnQkFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsbUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUc7QUFDL0Msb0JBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ25CLGdDQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEIsNkJBQVMsR0FBRyxDQUFDLENBQUM7QUFDZCx5QkFBSyxHQUFHLENBQUMsQ0FBQztBQUNWLDJCQUFPO2lCQUNWO0FBQ0Qsb0JBQUksS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRTtBQUMxRSwyQkFBTztpQkFDVjtBQUNELGlCQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIseUJBQVMsSUFBSSxNQUFNLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQixxQkFBSyxJQUFJLENBQUMsQ0FBQztBQUNYLDRCQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEIsdUJBQU8sR0FBRyxVQUFVLENBQUMsWUFBVTtBQUMzQix3QkFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUN2QywrQkFBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztxQkFDdkQsTUFBTTtBQUNILCtCQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFDLEVBQUUsQ0FBQztxQkFDMUQ7QUFDRCw2QkFBUyxHQUFHLENBQUMsQ0FBQztBQUNkLHlCQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUNiLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFFVCxDQUFDLENBQUE7U0FDTDs7O1dBbENRLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQXZCLGdCQUFnQjtBQUNQLGFBRFQsZ0JBQWdCLEdBQ0o7OEJBRFosZ0JBQWdCOztBQUVkLFlBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hCLFlBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2YsWUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7QUFDekIsWUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFJLEVBQUUsQ0FBQztBQUN2QixZQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0tBQ2xDOztpQkFQQyxnQkFBZ0I7O2VBc0JQLHFCQUFDLFFBQVEsRUFBQzs7O0FBQ2pCLHdCQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDdEMsZ0JBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsWUFBSTtBQUNyQyxzQkFBSyxhQUFhLENBQUMsTUFBSyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUN0RSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7OztlQUNNLGlCQUFDLElBQUksRUFBRTs7O0FBQ1YsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QyxtQkFBTyxVQUFDLE9BQU8sRUFBSztBQUNoQix1QkFBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUNyQyx1QkFBSyxXQUFXLENBQUMsT0FBSyxLQUFLLENBQUMsQ0FBQzthQUNoQyxDQUFBO1NBQ0o7OztlQUNTLG9CQUFDLE9BQU8sRUFBRTtBQUNoQixnQkFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7U0FDaEM7OztlQUNHLGNBQUMsS0FBSyxFQUFFO0FBQ1IsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQzlCLGdCQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUMzQixvQkFBSSxHQUFHLENBQUMsQ0FBQzthQUNaLE1BQU0sSUFBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFO0FBQ2hCLG9CQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDO0FBQ0QsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLGdCQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQzs7O2VBQ1ksdUJBQUMsS0FBSyxFQUFFOzs7QUFDakIsZ0JBQUksT0FBTyxHQUFHLFNBQVYsT0FBTyxDQUFJLENBQUMsRUFBSztBQUNqQix1QkFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEIsQ0FBQTtBQUNELG1CQUFPLE9BQU8sQ0FBQztTQUNsQjs7O2VBQ1Msb0JBQUMsT0FBTyxFQUFFO0FBQ2hCLGdCQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUN4QixnQkFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDM0I7OzthQWpEaUIsYUFBQyxHQUFHLEVBQUM7QUFDbkIsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRztBQUNwRCxvQkFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDO0FBQzdDLG9CQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFO0FBQ3pCLHdCQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztpQkFDM0Q7QUFDRCxvQkFBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxNQUFNLEVBQUU7QUFDOUIsNEJBQVEsR0FBRyxLQUFLLENBQUM7aUJBQ3BCO0FBQ0QsdUJBQU8sUUFBUSxDQUFDO2FBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDTixnQkFBSSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7QUFDM0IsZ0JBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdCOzs7ZUFxQ2EsbUJBQVU7OENBQU4sSUFBSTtBQUFKLG9CQUFJOzs7QUFDbEIsNEJBQWdCLENBQUMsUUFBUSxvQkFBTyxnQkFBZ0IsZ0JBQUksSUFBSSxLQUFDLENBQUM7QUFDMUQsbUJBQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDO1NBQ3BDOzs7V0E3REMsZ0JBQWdCOzs7SUErRFQsVUFBVSxHQUNSLFNBREYsVUFBVSxHQUNMOzBCQURMLFVBQVU7O0FBRWYsUUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDcEIsUUFBSSxDQUFDLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7Q0FDOUM7Ozs7SUFFUSxhQUFhOzs7O0FBR1gsYUFIRixhQUFhLENBR1YsY0FBYyxFQUFFOzhCQUhuQixhQUFhOztBQUlsQixZQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQTtBQUNwQyxZQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2RCxZQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUM3QixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztLQUN2Qjs7aUJBUlEsYUFBYTs7ZUFTZixpQkFBQyxJQUFJLEVBQUU7QUFDVixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUN2Qzs7O2VBQ0csY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7OztBQUNwQyxnQkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUIsc0JBQVUsQ0FBQyxVQUFVLENBQUMsVUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFHO0FBQ2xDLG9CQUFJLENBQUMsT0FBTyxFQUFFO0FBQ1YsMkJBQUssT0FBTyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUE7aUJBQ2hDLE1BQU07QUFDSCwyQkFBSyxjQUFjLENBQUMsUUFBUSxDQUFDO0FBQ3pCLDRCQUFJLEVBQUUsT0FBSyxPQUFPLENBQUMsVUFBVTtxQkFDaEMsRUFBRTtBQUNDLDRCQUFJLEVBQUUsR0FBRztxQkFDWixDQUFDLENBQUE7aUJBQ0w7YUFDSixDQUFDLENBQUM7QUFDSCxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBSTtBQUNyQiwwQkFBVSxDQUFDLGNBQWMsR0FBRyxPQUFLLE9BQU8sQ0FBQyxVQUFVLENBQUM7YUFDdkQsQ0FBQyxDQUFDO1NBQ047OztXQTVCUSxhQUFhOzs7OztJQStCYixhQUFhOzs7QUFFWCxhQUZGLGFBQWEsQ0FFVixRQUFRLEVBQUU7OEJBRmIsYUFBYTs7QUFHbEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsWUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7QUFDN0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7S0FDdkI7O2lCQU5RLGFBQWE7O2VBT2xCLGNBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFOzs7QUFDckMsc0JBQVUsQ0FBQyxVQUFVLENBQUMsVUFBQyxHQUFHLEVBQUc7QUFDekIsdUJBQUssUUFBUSxDQUFDLFlBQUk7QUFDZCwwQkFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQSxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuRCxDQUFDLENBQUE7YUFDTCxDQUFDLENBQUE7U0FDTDs7O1dBYlEsYUFBYTs7Ozs7SUFlYixVQUFVOzs7QUFFUixhQUZGLFVBQVUsQ0FFUCxPQUFPLEVBQUU7OEJBRlosVUFBVTs7QUFHZixZQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUM3QixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEMsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7S0FDbkI7O2lCQVBRLFVBQVU7O2VBUVIscUJBQUMsS0FBSyxFQUFFO0FBQ2YsZ0JBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsbUJBQU87QUFDSCwwQkFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVO0FBQzlCLHNCQUFNLEVBQUUsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsV0FBVyxHQUFDLENBQUM7QUFDbEQsMkJBQVcsRUFBRSxPQUFPLENBQUMsV0FBVzthQUNuQyxDQUFDO1NBQ0w7OztlQUNHLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFOzs7QUFDcEMsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QyxnQkFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztBQUM3QixvQkFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0FBQ3ZCLHdCQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7YUFDcEMsQ0FBQyxDQUFDO0FBQ0gsa0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBSTtBQUNsQyx1QkFBTyxDQUFDLE9BQUssV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDcEMsQ0FBQyxDQUFDO1NBQ047OztXQXpCUSxVQUFVOzs7OztJQTJCVixhQUFhO2NBQWIsYUFBYTs7YUFBYixhQUFhOzhCQUFiLGFBQWE7O21DQUFiLGFBQWE7OztpQkFBYixhQUFhOztlQUNYLHFCQUFDLEtBQUssRUFBRTtBQUNmLGdCQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRTtBQUNqQyxrREFIQyxhQUFhLDZDQUdXLEtBQUssRUFBRTthQUNuQztBQUNELGdCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLG1CQUFPO0FBQ0gsMEJBQVUsRUFBRSxDQUFDLEtBQUssR0FBRSxDQUFDLEdBQ2pCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVO0FBQ2pELHNCQUFNLEVBQUUsQ0FBQyxLQUFLLEdBQUUsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsV0FBVyxHQUFDLENBQUMsR0FDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyxDQUFDLEdBQy9ELE9BQU8sQ0FBQyxXQUFXO0FBQzFCLDJCQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7QUFDaEMseUJBQVMsRUFBRSxtQkFBQyxLQUFLLEVBQUc7QUFDaEIsMkJBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUM3RSx3QkFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtBQUMzQywrQkFBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7cUJBQ3JDLE1BQU07QUFDSCwrQkFBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7cUJBQ2xDO2lCQUNKO2FBQ0osQ0FBQTtTQUNKOzs7V0F0QlEsYUFBYTtHQUFTLFVBQVU7Ozs7SUF3QmhDLGVBQWU7Y0FBZixlQUFlOzthQUFmLGVBQWU7OEJBQWYsZUFBZTs7bUNBQWYsZUFBZTs7O2lCQUFmLGVBQWU7O2VBRWIscUJBQUMsS0FBSyxFQUFFO0FBQ2YsZ0JBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFO0FBQ2pDLGtEQUpDLGVBQWUsNkNBSVMsS0FBSyxFQUFFO2FBQ25DO0FBQ0QsZ0JBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsbUJBQU87QUFDSCwwQkFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVc7QUFDcEQsc0JBQU0sRUFBRSxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUMsQ0FBQztBQUNsRCwyQkFBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2FBQ25DLENBQUE7U0FDSjs7O1dBWlEsZUFBZTtHQUFTLFVBQVU7Ozs7SUFlbEMsY0FBYztBQUNaLGFBREYsY0FBYyxHQUNUOzhCQURMLGNBQWM7O0FBRW5CLFlBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO0FBQzdCLFlBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0tBQ3ZCOztpQkFKUSxjQUFjOztlQUtuQixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUNwQyxnQkFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUM3RCxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1NBQ2hEOzs7V0FSUSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0lDckxkLGNBQWM7QUFFWixhQUZGLGNBQWMsQ0FFWCxHQUFHLEVBQUM7OEJBRlAsY0FBYzs7QUFHbkIsWUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsWUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDO0FBQ3pDLFlBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7QUFDckMsWUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMzQixZQUFJLENBQUMsUUFBUSxHQUFHLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFJO0FBQzNCLGdCQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsR0FBQyxDQUFDLENBQUEsR0FBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsbUJBQU8sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQSxHQUFFLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxBQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDLENBQUM7QUFDRixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUM5QyxZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLElBQUksWUFBSSxFQUFFLENBQUM7S0FDMUM7O2lCQWJRLGNBQWM7O2VBY04sMEJBQUMsUUFBUSxFQUFFO0FBQ3hCLG1CQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3JCLG1CQUFPLElBQUksY0FBYyxDQUFDO0FBQ3RCLHdCQUFRLEVBQUUsUUFBUTthQUNyQixDQUFDLENBQUM7U0FDTjs7O2VBQ1Esa0JBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRTs7O0FBQ3JCLG9CQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMxQixnQkFBSSxJQUFJLEdBQUcsSUFBSTtnQkFDWCxDQUFDLEdBQUcsQ0FBQztnQkFDTCxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0MseUJBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDbkMsZ0JBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLFlBQUk7QUFDbEMsaUJBQUMsSUFBRyxNQUFLLElBQUksQ0FBQztBQUNkLG9CQUFJLENBQUMsSUFBSSxNQUFLLFFBQVEsRUFBRTtBQUNwQixpQ0FBYSxDQUFDLE1BQUssY0FBYyxDQUFDLENBQUM7QUFDbkMsMEJBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hCLDJCQUFPO2lCQUNWO0FBQ0Qsb0JBQUksT0FBTyxHQUFHLE1BQUssUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQUssUUFBUSxDQUFDLENBQUM7QUFDcEQsc0JBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLENBQUMsRUFBSztBQUN0Qyx3QkFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZCLDRCQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxHQUFHLE9BQU8sSUFBRSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBLEFBQUMsQ0FBQztpQkFDL0QsQ0FBQyxDQUFDO0FBQ0gsc0JBQUssUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzNCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2pCOzs7V0F4Q1EsY0FBYzs7OztBQXlDMUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0ssU0FBUyxRQUFRLENBQUMsT0FBTyxFQUFFOztBQUU5QixRQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVsQyxXQUFPO0FBQ0gsaUJBQVMsRUFBRSxTQUFTO0FBQ3BCLGtCQUFVLEVBQUUsVUFBVTtBQUN0QixlQUFPLEVBQUUsT0FBTztBQUNoQixnQkFBUSxFQUFFLFFBQVE7QUFDbEIsZUFBTyxFQUFFLE9BQU87S0FDbkIsQ0FBQzs7QUFFRixhQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFOztBQUVwQyxxQkFBYSxHQUFHLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDOztBQUVyRCxZQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUU7O0FBRWxDLHlCQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxZQUFNLEVBQUUsQ0FBQztTQUM5Qzs7QUFFRCxZQUFJLGlCQUFpQixHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7Ozs7QUFNeEUsaUJBQVMsQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxZQUFZO0FBQ3RELG1CQUFPLFlBQVk7QUFDZixpQ0FBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDOztBQUV6QyxvQkFBSSxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRTtBQUM5QiwyQkFBTyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ2xEO2FBQ0osQ0FBQztTQUNMLENBQUMsQ0FBQzs7QUFFSCxZQUFJLFlBQVksR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFdEQsV0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDbEMsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFFRCxhQUFTLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO0FBQ3BDLFdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ25DLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBRUQsYUFBUyxPQUFPLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtBQUNqQyxXQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNoQyxlQUFPLElBQUksQ0FBQztLQUNmOztBQUVELGFBQVMsUUFBUSxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7QUFDbkMsV0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDbEMsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFFRCxhQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFO0FBQ2xDLHFCQUFhLEdBQUcscUJBQXFCLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDckQsWUFBSSxZQUFZLEdBQUcsbUJBQW1CLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdEQsV0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDaEMsZUFBTyxJQUFJLENBQUM7S0FDZjs7Ozs7Ozs7OztBQVVELGFBQVMscUJBQXFCLENBQUMsS0FBSyxFQUFFO0FBQ2xDLFlBQUksYUFBYSxDQUFDOztBQUVsQixZQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssS0FBSyxFQUFFOztBQUU3QixnQkFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoRCx5QkFBYSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLHlCQUFhLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztTQUNwQyxNQUFNO0FBQ0gseUJBQWEsR0FBRyxLQUFLLENBQUM7U0FDekI7O0FBRUQsZUFBTyxhQUFhLENBQUM7S0FDeEI7Ozs7Ozs7Ozs7Ozs7QUFhRCxhQUFTLG1CQUFtQixDQUFDLGFBQWEsRUFBRTs7QUFFeEMsWUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDdkMsWUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7QUFHaEMsb0JBQVksQ0FBQyxJQUFJLENBQUMsWUFBYTs4Q0FBVCxJQUFJO0FBQUosb0JBQUk7Ozs7QUFFdEIsZ0JBQUksUUFBUSxvQkFBTyxhQUFhLGdCQUFJLElBQUksS0FBQyxDQUFDO0FBQzFDLGlCQUFLLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtBQUN0Qix3QkFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQztBQUNELG1CQUFPLFFBQVEsQ0FBQztTQUNuQixDQUFDLENBQUM7O0FBRUgsZUFBTyxZQUFZLENBQUM7S0FDdkI7Ozs7Ozs7QUFPRCxhQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUU7QUFDOUIsZUFBTyxZQUFXO0FBQ2QsbUJBQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDMUMsQ0FBQztLQUNMOzs7Ozs7OztBQVFELGFBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO0FBQzdDLGNBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7S0FDcEQ7Q0FFSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgY2xhc3MgTWVzdG9DbGlja0ZhZGUge1xuICAgIHN0YXRpYyBnZXQgVElNRU9VVCgpIHtcbiAgICAgICAgcmV0dXJuIDIwMDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBGQURFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2ZhZGUnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKE1lc3RvQ2xpY2tGYWRlLkZBREVfQ0xBU1MpXG4gICAgICAgIH0sIE1lc3RvQ2xpY2tGYWRlLlRJTUVPVVQpO1xuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAuYWRkQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgICAgIC5maW5kKCdhLmZhZGVBbmltYXRvcl9fYW5jb3InKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGxldCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIgeyBcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBmZWVkYmFja1Jlc291cmNlKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tSZXNvdXJjZSA9IGZlZWRiYWNrUmVzb3VyY2U7XG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSAnJztcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XG4gICAgfVxuICAgIHN1Ym1pdChmb3JtKXtcbiAgICAgICAgaWYgKGZvcm0uJGludmFsaWQpIHtcbiAgICAgICAgICAgIGZvcm0uJHNldERpcnR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZmVlZGJhY2sgPSBuZXcgdGhpcy5mZWVkYmFja1Jlc291cmNlKHRoaXMuZm9ybURhdGEpO1xuICAgICAgICAgICAgZmVlZGJhY2suJHNhdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrVG9nZ2xlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZFRvZ2dsZXIoYXR0cnMubWVzdG9GZWVkYmFja1RvZ2dsZSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHRoaXMucG9wVXBTZXJpdmljZSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrQ29udG5pZXIge1xuICAgIHN0YXRpYyBnZXQgVE9HR0xFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2ZpeGVkUG9wVXAnOyBcbiAgICB9XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IChuYW1lKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnRvZ2dsZUNsYXNzKE1lc3RvRmVlZGJhY2tDb250bmllci5UT0dHTEVfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZENvbnRhbmllcihhdHRycy5tZXN0b0ZlZWRiYWNrQ29udGFuaWVyLCBoYW5kbGVyKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0Nsb3NlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMucG9wVXBTZXJpdmljZS5jbG9zZShhdHRycy5tZXN0b0ZlZWRiYWNrQ2xvc2UpO1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZCh0aGlzLnBvcFVwU2VyaXZpY2UpKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0l0ZW0ge1xuICAgIHN0YXRpYyBnZXQgVE9HR0xFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgfVxuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKHBvcFVwU2VyaXZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlID0gcG9wVXBTZXJpdmljZTtcbiAgICB9XG4gICAgdG9nZ2xlKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcyhNZXN0b0ZlZWRiYWNrSXRlbS5UT0dHTEVfQ0xBU1MpO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2VcbiAgICAgICAgICAgIC5hZGRJdGVtKGF0dHJzLm1lc3RvRmVlZGJhY2tJdGVtLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIGVsZW1lbnQpKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRmVlZGJhY2tSZXNvdXJjZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gJHJlc291cmNlKENPTkZJRy51cmxzLmZlZWRiYWNrRm9ybSk7XG4gICAgfVxufVxuIiwiY2xhc3MgUG9wVXAge1xuICAgIGNvbnN0cnVjdG9yKGl0ZW1IYW5kbGVyLCBuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pdGVtSGFuZGxlciA9IGl0ZW1IYW5kbGVyO1xuICAgIH1cbiAgICB0b2dnbGVJdGVtKCkge1xuICAgICAgICBpZiAoUG9wVXAuY29udGFuaWVySGFuZGxlclt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBQb3BVcC5jb250YW5pZXJIYW5kbGVyW3RoaXMubmFtZV0oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1IYW5kbGVyKCk7XG4gICAgfVxufVxuUG9wVXAuY29udGFuaWVySGFuZGxlciA9IHt9O1xuXG5leHBvcnQgY2xhc3MgUG9wVXBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3BVcHMgPSB7fTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtTmFtZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnBvcFVwc1tpdGVtTmFtZV0gPSBuZXcgUG9wVXAoaGFuZGxlciwgaXRlbU5hbWUpO1xuICAgIH1cbiAgICBjbG9zZShpdGVtTmFtZSkge1xuICAgICAgICBpZiAoIWl0ZW1OYW1lKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBvcFVwcykuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgICAgIHRoaXMucG9wVXBzW2tleV0udG9nZ2xlSXRlbSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3BVcCA9IHRoaXMucG9wVXBzW2l0ZW1OYW1lXVxuICAgICAgICAgICAgaWYgKHBvcFVwKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBvcFVwLnRvZ2dsZUl0ZW0oKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDb250YW5pZXIocG9wVXBOYW1lLCBoYW5kZXIsIGluZGV4KSB7XG4gICAgICAgIFBvcFVwLmNvbnRhbmllckhhbmRsZXJbcG9wVXBOYW1lXSA9IGhhbmRlcjtcbiAgICB9XG4gICAgYWRkVG9nZ2xlcihwb3BVcE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAoW3RoaXMucG9wVXBzW3BvcFVwTmFtZV1dIHx8IFtdKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChwb3BVcCk9PntcbiAgICAgICAgICAgICAgICAgICAgcG9wVXAudG9nZ2xlSXRlbSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJy4vdXRpbHMvcmVnaXN0ZXInO1xuXG5pbXBvcnQgeyBcbiAgICBTbGlkZXJNYWluLFxuICAgIFNsaWRlckNvbnRlbnQsXG4gICAgU2xpZGVyQ29udHJvbGwsXG4gICAgU2xpZGVyQ291bnRlcixcbiAgICBTbGlkZXJJdGVtLFxuICAgIFNtYWxsU2xpZGVySXRlbSxcbiAgICBVbmlTbGlkZXJJdGVtXG59IGZyb20gJy4vdG9wTmV3cy9kaXJlY3RpdmVzL3NsaWRlcic7XG5pbXBvcnQgeyBFYXNpbmdBbmltYXRvciB9IGZyb20gJy4vdG9wTmV3cy9zZXJ2aWNlcy9lYXNpbmdBbmltYXRvcic7XG5pbXBvcnQgeyBEcmFnZ0NvbnRyb2xsZXIgfSBmcm9tICcuL3RvcE5ld3MvZGlyZWN0aXZlcy9kcmFnZ0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgSG9yaXpvbnRhbFNjcm9sbCB9IGZyb20gJy4vdG9wTmV3cy9kaXJlY3RpdmVzL2hvcml6b250YWxTY3JvbGwnO1xuXG5pbXBvcnQgeyBNZXN0b0NsaWNrRmFkZSB9IGZyb20gJy4vY2xpY2tGYWRlL2RpcmVjdGl2ZXMvY2xpY2tGYWRlJztcblxuaW1wb3J0IHsgUG9wVXBTZXJ2aWNlIH0gZnJvbSAnLi9mZWVkQmFjay9zZXJ2aWNlcy9wb3BVcFNlcnZpY2UnO1xuaW1wb3J0IHsgRmVlZGJhY2tSZXNvdXJjZSB9IGZyb20gJy4vZmVlZEJhY2svc2VydmljZXMvZmVlZGJhY2tSZXNvdXJjZSc7XG5pbXBvcnQgeyBGZWVkYmFja0Zvcm1Db250cm9sbGVyIH0gZnJvbSAnLi9mZWVkQmFjay9jb250cm9sbGVycy9Gb3JtQ29udHJvbGxlcic7XG5pbXBvcnQgeyBcbiAgICBNZXN0b0ZlZWRiYWNrSXRlbSxcbiAgICBNZXN0b0ZlZWRiYWNrVG9nZ2xlLFxuICAgIE1lc3RvRmVlZGJhY2tDbG9zZSxcbiAgICBNZXN0b0ZlZWRiYWNrQ29udG5pZXJcbn0gZnJvbSAnLi9mZWVkQmFjay9kaXJlY3RpdmVzL2ZlZWRCYWNrJztcblxuaW1wb3J0IHsgXG4gICAgU1ZHTG9nb0hvdmVyLFxuICAgIFNWR0xvZ29JdGVtLFxuICAgIFNWR0xvZ29Db250YW5pZXIsXG4gICAgU1ZHTG9nb0JhY2tncm91bmRcbn0gZnJvbSAnLi9tYWluUGFnZS9kaXJlY3RpdmVzL2xvZ29EaXJlY3RpdmVzJztcblxuaW1wb3J0IHsgU2hvd01vdmllQ29udHJvbGxlciB9IGZyb20gJy4vbW92aWVTaG93L2NvbnRyb2xsZXJzL3BsYXlTaG93LmpzJ1xuXG5pbXBvcnQgeyBcbiAgICBNZXN0b0N1c3RvbVNlbGVjdCxcbiAgICBNZXN0b0N1c3RvbVNlbGVjdEl0ZW0sXG4gICAgTWVzdG9DdXN0b21TZWxlY3RQbGFjZWhvbGRlclxufSBmcm9tICcuL21vdmllU2hvdy9kaXJlY3RpdmVzL2N1c3RvbVNlbGVjdC5qcydcblxuaW1wb3J0IHsgU2hvd3NGaWx0ZXJDb250cm9sbGVyIH0gZnJvbSAnLi9tb3ZpZVNob3cvY29udHJvbGxlcnMvc2hvd3NGaWx0ZXJDb250cm9sbGVyLmpzJyBcbmltcG9ydCB7IFNob3dEZXRhaWwgfSBmcm9tICcuL21vdmllU2hvdy9jb250cm9sbGVycy9zaG93RGV0YWlsLmpzJyBcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdtZXN0bycsIFtcbiAgICAnbmdSZXNvdXJjZScsXG4gICAgJ2R1U2Nyb2xsJyxcbiAgICAneW91dHViZS1lbWJlZCdcbl0pO1xuXG5yZWdpc3RlcignbWVzdG8nKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlck1haW4nLCBTbGlkZXJNYWluKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckNvbnRyb2xsJywgU2xpZGVyQ29udHJvbGwpXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyQ29udGVudCcsIFNsaWRlckNvbnRlbnQpXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVySXRlbScsIFNsaWRlckl0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnc21hbGxTbGlkZXJJdGVtJywgU21hbGxTbGlkZXJJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ3VuaVNsaWRlckl0ZW0nLCBVbmlTbGlkZXJJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckNvdW50ZXInLCBTbGlkZXJDb3VudGVyKVxuICAgIC5kaXJlY3RpdmUoJ2RyYWdnQ29udHJvbGxlcicsIERyYWdnQ29udHJvbGxlcilcbiAgICAuZGlyZWN0aXZlKCdob3Jpem9udGFsU2Nyb2xsJywgSG9yaXpvbnRhbFNjcm9sbClcbiAgICAuZmFjdG9yeSgnZWFzaW5nQW5pbWF0b3InLCBFYXNpbmdBbmltYXRvcilcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tJdGVtJywgTWVzdG9GZWVkYmFja0l0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja1RvZ2dsZScsIE1lc3RvRmVlZGJhY2tUb2dnbGUpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja0Nsb3NlJywgTWVzdG9GZWVkYmFja0Nsb3NlKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tDb250YW5pZXInLCBNZXN0b0ZlZWRiYWNrQ29udG5pZXIpXG4gICAgLnNlcnZpY2UoJ3BvcFVwU2VyaXZpY2UnLCBQb3BVcFNlcnZpY2UpXG5cbiAgICAuc2VydmljZSgnZmVlZGJhY2tSZXNvdXJjZScsIEZlZWRiYWNrUmVzb3VyY2UpXG4gICAgLmNvbnRyb2xsZXIoJ2ZlZWRiYWNrRm9ybUNvbnRyb2xsZXInLCBGZWVkYmFja0Zvcm1Db250cm9sbGVyKVxuXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9DbGlja0ZhZGUnLCBNZXN0b0NsaWNrRmFkZSlcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvTG9nb0hvdmVyJywgU1ZHTG9nb0hvdmVyKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvU3ZnSXRlbScsIFNWR0xvZ29JdGVtKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvU3ZnTG9nbycsIFNWR0xvZ29Db250YW5pZXIpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9TdmdCYWNrZ3JvdW5kJywgU1ZHTG9nb0JhY2tncm91bmQpXG5cbiAgICAuY29udHJvbGxlcignc2hvd01vdmllQ29udHJvbGxlcicsIFNob3dNb3ZpZUNvbnRyb2xsZXIpXG5cbiAgICAuZGlyZWN0aXZlKCdtZXN0b0N1c3RvbVNlbGVjdCcsIE1lc3RvQ3VzdG9tU2VsZWN0KVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvQ3VzdG9tU2VsZWN0SXRlbScsIE1lc3RvQ3VzdG9tU2VsZWN0SXRlbSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0N1c3RvbVNlbGVjdFBsYWNlaG9sZGVyJywgTWVzdG9DdXN0b21TZWxlY3RQbGFjZWhvbGRlcilcblxuICAgIC5jb250cm9sbGVyKCdzaG93c0ZpbHRlckNvbnRyb2xsZXInLCBTaG93c0ZpbHRlckNvbnRyb2xsZXIpXG4gICAgLmNvbnRyb2xsZXIoJ3Nob3dEZXRhaWwnLCBTaG93RGV0YWlsKVxuXG5hcHAuY29uZmlnKCgkcmVzb3VyY2VQcm92aWRlciwgJGh0dHBQcm92aWRlcik9PiB7XG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdjc3JmdG9rZW4nO1xuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nO1xuICAgICRyZXNvdXJjZVByb3ZpZGVyLmRlZmF1bHRzLnN0cmlwVHJhaWxpbmdTbGFzaGVzID0gZmFsc2U7XG59KVxuYW5ndWxhclxuICAgIC5lbGVtZW50KGRvY3VtZW50KVxuICAgIC5yZWFkeShhbmd1bGFyLmJvb3RzdHJhcC5iaW5kKGFuZ3VsYXIsIGRvY3VtZW50LCBbJ21lc3RvJ10pKTtcbiIsImNsYXNzIExvZ29Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgICAgICB0aGlzLmltZ1VybHMgPSB7fTtcbiAgICB9XG4gICAgYWRkSW1hZ2UobmFtZSwgdXJsKSB7XG4gICAgICAgIHRoaXMuaW1nVXJsc1tuYW1lXSA9IHVybDtcbiAgICB9XG4gICAgYWRkSXRlbShuYW1lLCBpbmZvKSB7XG4gICAgICAgIHRoaXMuaXRlbXNbbmFtZV0gPSBpbmZvO1xuICAgIH1cbiAgICBhZGRCYWNrZ3JvdW5kKHNob3csIGhpZGUpe1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSB7XG4gICAgICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICAgICAgaGlkZTogaGlkZVxuICAgICAgICB9XG4gICAgfVxuICAgIHVuaG92ZXIoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaXRlbXMpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIHRoaXMuaXRlbXNba2V5XS5kaXNhYmxlZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhpZGUoKTtcbiAgICB9XG4gICAgaG92ZXIobmFtZSkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuc2hvdyh0aGlzLmltZ1VybHNbbmFtZV0pO1xuICAgICAgICB0aGlzLml0ZW1zW25hbWVdLmFjdGl2ZSgpO1xuICAgIH1cbiAgICBjYWxsKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pdGVtc1tuYW1lXS5jbGljaygpO1xuICAgIH1cbiAgICBzdGF0aWMgZmFjdG9yeSguLi5hcmdzKSB7XG4gICAgICAgIExvZ29Db250cm9sbGVyLmluc3RhbmNlID0gbmV3IExvZ29Db250cm9sbGVyKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gTG9nb0NvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29Db250YW5pZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IExvZ29Db250cm9sbGVyLmZhY3Rvcnk7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29CYWNrZ3JvdW5kIHtcbiAgICBzdGF0aWMgZ2V0IEFDVElWRV9DTEFTUygpe1xuICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgfSBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15tZXN0b1N2Z0xvZ28nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLmFkZEJhY2tncm91bmQoKHVybCk9PntcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgdXJsID8gYHVybCgke3VybH0pYCA6ICdub25lJyk7XG4gICAgICAgIH0sICgpPT57XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvSG92ZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdebWVzdG9TdmdMb2dvJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIpIHtcbiAgICAgICAgZWxlbWVudC5vbignbW91c2VlbnRlcicsICgpPT57XG4gICAgICAgICAgICBjb250cm9sbGVyLmhvdmVyKGF0dHJzLm1lc3RvTG9nb0hvdmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci51bmhvdmVyKGF0dHJzLm1lc3RvTG9nb0hvdmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2FsbChhdHRycy5tZXN0b0xvZ29Ib3Zlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvSXRlbSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15tZXN0b1N2Z0xvZ28nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLmFkZEl0ZW0oYXR0cnMubWVzdG9TdmdJdGVtLCB7XG4gICAgICAgICAgICBjbGljazogKCk9PntcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGF0dHJzLmhyZWY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZlOiAoKT0+e1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXNhYmxlZDogKCk9PntcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWF0dHJzLmltZ1VybCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGRJbWFnZShhdHRycy5tZXN0b1N2Z0l0ZW0sIGF0dHJzLmltZ1VybCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcuc3JjID0gYXR0cnMuaW1nVXJsO1xuICAgICAgICBpZihpbWcuY29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkSW1hZ2UoYXR0cnMubWVzdG9TdmdJdGVtLCBhdHRycy5pbWdVcmwpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY2xhc3MgU2hvd01vdmllQ29udHJvbGxlciB7XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkdGltZW91dCl7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgICAgIHRoaXMudmlkZW8gPSB7fTtcbiAgICAgICAgJHNjb3BlLiRvbigneW91dHViZS5wbGF5ZXIucGxheWluZycsICgkZXZlbnQsIHBsYXllcikgPT4ge1xuICAgICAgICAgICAgbGV0IHZpZGVvT2JqID0gdGhpcy5nZXRWaWRlb09iaihwbGF5ZXIpO1xuICAgICAgICAgICAgdGhpcy4kdGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICB2aWRlb09iai5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgICRzY29wZS4kb24oJ3lvdXR1YmUucGxheWVyLmVuZGVkJywgKCRldmVudCwgcGxheWVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlkZW9PYmogPSB0aGlzLmdldFZpZGVvT2JqKHBsYXllcik7XG4gICAgICAgICAgICB2aWRlb09iai5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldFZpZGVvT2JqKHBsYXllcil7XG4gICAgICAgIGxldCB2aWRlb0lkID0gcGxheWVyLmdldFZpZGVvRGF0YSgpLnZpZGVvX2lkO1xuICAgICAgICBpZiAoIXRoaXMudmlkZW9bdmlkZW9JZF0pIHtcbiAgICAgICAgICAgIHRoaXMudmlkZW9bdmlkZW9JZF0gPSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2FkOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnZpZGVvW3ZpZGVvSWRdO1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGNsYXNzIFNob3dEZXRhaWwge1xuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJHdpbmRvdykge1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgICAgICB0aGlzLnBhdGhBcnJheSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylcbiAgICAgICAgaWYgKHRoaXMucGF0aEFycmF5Lmxlbmd0aCA+IDEpe1xuICAgICAgICAgICAgdGhpcy5wYXRoQXJyYXkgPSB0aGlzLnBhdGhBcnJheVsxXS5zcGxpdChcIiNcIilbMF1cbiAgICAgICAgICAgICAgICAuc3BsaXQoJyYnKVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKGRpY3QsIHZhbCk9PntcbiAgICAgICAgICAgICAgICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IHZhbC5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpY3Rba2V5XSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpY3Q7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuICAgICAgICAgICAgJHNjb3BlLnNlbGVjdERhdGUgPSB0aGlzLnBhdGhBcnJheS5kYXRlO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFNob3dzRmlsdGVyQ29udHJvbGxlciB7XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkd2luZG93KSB7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIHRoaXMucGF0aEFycmF5ID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXS5zcGxpdCgnPycpXG4gICAgICAgIHRoaXMuc2VsZWN0ID0gdGhpcy5wYXRoQXJyYXkubGVuZ3RoID4gMT8gdGhpcy5wYXRoQXJyYXlbMV1cbiAgICAgICAgICAgIC5zcGxpdCgnJicpXG4gICAgICAgICAgICAucmVkdWNlKChkaWN0LCB2YWwpPT57XG4gICAgICAgICAgICAgICAgbGV0IFtrZXksIHZhbHVlXSA9IHZhbC5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBkaWN0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRpY3Q7XG4gICAgICAgICAgICB9LCB7fSkgOiB7fTtcbiAgICB9XG4gICAgY2hhbmdlKCkge1xuICAgICAgICB0aGlzLnNlYXJjaCgpXG4gICAgfVxuICAgIHNlYXJjaCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt0aGlzLnBhdGhBcnJheVswXX0/JHtqUXVlcnkucGFyYW0odGhpcy5zZWxlY3QpfWA7XG4gICAgfVxufVxuIiwiY2xhc3MgTWVzdG9DdXN0b21TZWxlY3RDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHZhciBzZXRQbGFjZWhvbGRlciA9ICh0ZXh0KT0+e307XG5cbiAgICAgICAgdGhpcy5tb2RlbHMgPSB7fTtcbiAgICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlciA9IChmdSk9PntcbiAgICAgICAgICAgIHNldFBsYWNlaG9sZGVyID0gZnU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNlbGVjdE9wdGlvbiA9ICh0ZXh0KT0+e1xuICAgICAgICAgICAgc2V0UGxhY2Vob2xkZXIodGV4dCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYWRkTW9kZWwobW9kZWxDYWxsKSB7XG4gICAgXHRtb2RlbENhbGwoKHJlc3VsdCk9PntcbiAgICBcdFx0dGhpcy5tb2RlbHNbcmVzdWx0LnZhbHVlXSA9IHJlc3VsdDtcbiAgICBcdH0pO1xuICAgIH1cbiAgICBzZWxlY3RNb2RlbChtb2RlbFZhbHVlKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0T3B0aW9uKHRoaXMubW9kZWxzW21vZGVsVmFsdWVdLm5hbWUpXG4gICAgfVxuICAgIHNldFRvZ2dsZU9wZW4gKGZ1KXtcbiAgICAgICAgdGhpcy50b2dnbGVPcGVuID0gZnU7XG4gICAgfVxuICAgIHRvZ2dsZU9wZW4oKXt9O1xuXG4gICAgc3RhdGljIGZhY3RvcnkoLi4uYXJncykge1xuICAgICAgICBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIuaW5zdGFuY2UgPSBuZXcgTWVzdG9DdXN0b21TZWxlY3RDb250cm9sbGVyKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gTWVzdG9DdXN0b21TZWxlY3RDb250cm9sbGVyLmluc3RhbmNlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0N1c3RvbVNlbGVjdCB7XG5cbiAgICAvKkBuZ0luamVjdCovXG5cdGNvbnN0cnVjdG9yKCR0aW1lb3V0LCAkZG9jdW1lbnQpe1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG5cdFx0dGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gTWVzdG9DdXN0b21TZWxlY3RDb250cm9sbGVyLmZhY3Rvcnk7XG4gICAgICAgIHRoaXMuJGRvY3VtZW50ID0gJGRvY3VtZW50O1xuICAgIH1cbiAgICBcbiAgICBsaW5rICgkc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjb250cm9sbGVyKXtcbiAgICAgICAgbGV0IG1vZGVsVmFsdWUgPSAkc2NvcGUuJGV2YWwoYXR0cnMubWVzdG9DdXN0b21TZWxlY3QpO1xuICAgICAgICBpZiAobW9kZWxWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy4kdGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlci5zZWxlY3RNb2RlbChtb2RlbFZhbHVlKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNsaWNrSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gYW5ndWxhci5lbGVtZW50KGUudGFyZ2V0KTtcbiAgICAgICAgICAgIGlmICghKHRhcmdldC5pcyhlbGVtZW50KSB8fCB0YXJnZXQuY2xvc2VzdChlbGVtZW50KS5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb250cm9sbGVyLnNldFRvZ2dsZU9wZW4oKCk9PntcbiAgICAgICAgICAgIGVsZW1lbnQudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIGlmKGVsZW1lbnQuaGFzQ2xhc3MoJ29wZW4nKSkge1xuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudCh0aGlzLiRkb2N1bWVudCkub24oJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KHRoaXMuJGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9DdXN0b21TZWxlY3RQbGFjZWhvbGRlciB7XG5cdGNvbnN0cnVjdG9yKCl7XG5cdFx0dGhpcy5yZXN0cmljdCA9ICdBJztcblx0XHR0aGlzLnJlcXVpcmUgPSAnXm1lc3RvQ3VzdG9tU2VsZWN0JztcbiAgICB9XG4gICAgbGluayAoJHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3VzdG9tU2VsZWN0Q29udHJvbGxlcikge1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjdXN0b21TZWxlY3RDb250cm9sbGVyLnRvZ2dsZU9wZW4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGN1c3RvbVNlbGVjdENvbnRyb2xsZXIuc2V0UGxhY2Vob2xkZXIoKHRleHQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudGV4dCh0ZXh0KTtcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lc3RvQ3VzdG9tU2VsZWN0SXRlbSB7XG4gICAgLypAbmdJbmplY3QqL1xuXHRjb25zdHJ1Y3RvcigkdGltZW91dCkge1xuXHRcdHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcblx0XHR0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuXHRcdHRoaXMucmVxdWlyZSA9ICdebWVzdG9DdXN0b21TZWxlY3QnO1xuICAgIH1cbiAgICBsaW5rKCRzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN1c3RvbVNlbGVjdENvbnRyb2xsZXIpe1xuICAgICAgICBjdXN0b21TZWxlY3RDb250cm9sbGVyLmFkZE1vZGVsKChjYWxsQmFjayk9PiB7XG4gICAgICAgIFx0dGhpcy4kdGltZW91dCgoKT0+e1xuXHRcdFx0XHRjYWxsQmFjayh7XG5cdFx0XHRcdFx0bmFtZTogZWxlbWVudC5maW5kKCdsYWJlbCcpLnRleHQoKSxcblx0XHRcdFx0XHR2YWx1ZTogZWxlbWVudC5maW5kKCdpbnB1dCcpLnZhbCgpXG5cdFx0XHRcdH0pXG4gICAgICAgIFx0fSk7XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjdXN0b21TZWxlY3RDb250cm9sbGVyLnNlbGVjdE9wdGlvbihlbGVtZW50LnRleHQoKSlcbiAgICAgICAgfSlcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRHJhZ2dDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXj9zbGlkZXJNYWluJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgdmFyIGRlbHRhX2luZm8gPSAwLFxuICAgICAgICAgICAgc3RhcnRfaW5mbyA9IDAsXG4gICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLm9uKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIHN0YXJ0X2luZm8gPSBkZWx0YV9pbmZvO1xuICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChkZWx0YV9pbmZvICE9IHRvdWNoLnNjcmVlblgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtbSArPSBkZWx0YV9pbmZvIC0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfaW5mbyA9IHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3VtbSkgPiAxMDAgJiYgc2xpZGVyTWFpbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3VtbSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlck1haW4ubmV4dCgxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlck1haW4ubmV4dCgtMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgZGVsdGFfaW5mbyA9IHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgSG9yaXpvbnRhbFNjcm9sbCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJ1xuICAgIH1cbiAgICBsaW5rKCRzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgdmFyIHRpbWVvdXQsXG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudFswXSxcbiAgICAgICAgICAgIGRlbHRhX3N1bSA9IDAsXG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIEhhbXN0ZXIoZWxlbWVudCkud2hlZWwoKGUsIGRlbHRhLCBkZWx0YVgsIGRlbHRhWSk9PntcbiAgICAgICAgICAgIGlmIChkZWx0YVggJiYgIWRlbHRhWSkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICBkZWx0YV9zdW0gPSAwO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXR0cnMuaG9yaXpvbnRhbFNjcm9sbCA+IDAgJiYgYXR0cnMuaG9yaXpvbnRhbFNjcm9sbCA8IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZGVsdGFfc3VtICs9IGRlbHRhWSo4IHx8IDA7XG4gICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoL01hY2ludG9zaC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQgLSBkZWx0YV9zdW07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0IC0gZGVsdGFfc3VtKjE1O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWx0YV9zdW0gPSAwO1xuICAgICAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICAgIH0sIDEpO1xuXG4gICAgICAgIH0pICAgIFxuICAgIH1cbn1cbiIsImNsYXNzIFNsaWRlckNvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0gW107XG4gICAgICAgIHRoaXMuc2xpZGUgPSAwO1xuICAgICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IDA7XG4gICAgICAgIHRoaXMuc2V0U2xpZGUgPSAoKT0+e307XG4gICAgICAgIHRoaXMubW92ZVRvU2xpZGVUaW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gICAgc2V0IHNjcm9sbFBvc2l0aW9uKHZhbCl7XG4gICAgICAgIHRoaXMuc2xpZGUgPSB0aGlzLml0ZW1zLnJlZHVjZSgob3V0SW5kZXgsIGl0ZW0sIGluZGV4KT0+e1xuICAgICAgICAgICAgbGV0IGNlbnRlciA9IHZhbCArIGl0ZW0uZWxlbUluZm8ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBpZiAoaXRlbS5lbGVtSW5mby5zZXRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBpdGVtLmVsZW1JbmZvLnNldEFjdGl2ZSh2YWwgLSBpdGVtLmVsZW1JbmZvLm9mZnNldExlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaXRlbS5lbGVtSW5mby5jZW50ZXIgPCBjZW50ZXIpIHtcbiAgICAgICAgICAgICAgICBvdXRJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG91dEluZGV4O1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSB2YWw7XG4gICAgICAgIHRoaXMuc2V0U2xpZGUodGhpcy5zbGlkZSk7XG4gICAgfVxuICAgIG1vdmVUb1NsaWRlKHBvc2l0aW9uKXtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubW92ZVRvU2xpZGVUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIodGhpcy5pdGVtc1twb3NpdGlvbl0uZWxlbUluZm8ub2Zmc2V0TGVmdCwgdHJ1ZSk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5wdXNoKGl0ZW0pIC0gMTtcbiAgICAgICAgcmV0dXJuIChuZXdJbmZvKSA9PiB7XG4gICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XS5lbGVtSW5mbyA9IG5ld0luZm87XG4gICAgICAgICAgICB0aGlzLm1vdmVUb1NsaWRlKHRoaXMuc2xpZGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZENvbnRlbnQoaGFuZGxlcikge1xuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIgPSBoYW5kbGVyO1xuICAgIH1cbiAgICBuZXh0KGRlbHRhKSB7XG4gICAgICAgIGxldCBuZXh0ID0gdGhpcy5zbGlkZSArIGRlbHRhO1xuICAgICAgICBpZiAobmV4dCA+PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgbmV4dCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZihuZXh0IDwgMCkge1xuICAgICAgICAgICAgbmV4dCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNsaWRlID0gbmV4dDtcbiAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZSh0aGlzLnNsaWRlKTtcbiAgICB9XG4gICAgYWRkQ29udHJvbGxlcihkZWx0YSkge1xuICAgICAgICBsZXQgaGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHQoZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgIH1cbiAgICBzZXRDb3VudGVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTbGlkZSA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gPSAwO1xuICAgIH1cbiAgICBzdGF0aWMgZmFjdG9yeSguLi5hcmdzKSB7XG4gICAgICAgIFNsaWRlckNvbnRyb2xsZXIuaW5zdGFuY2UgPSBuZXcgU2xpZGVyQ29udHJvbGxlciguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIFNsaWRlckNvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlck1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBTbGlkZXJDb250cm9sbGVyLmZhY3Rvcnk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbnRlbnQge1xuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKGVhc2luZ0FuaW1hdG9yKSB7XG4gICAgICAgIHRoaXMuZWFzaW5nQW5pbWF0b3IgPSBlYXNpbmdBbmltYXRvclxuICAgICAgICB0aGlzLmVhc2luZ0FuaW1hdG9yLmNhbGxCYWNrID0gdGhpcy5hbmltYXRlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGFuaW1hdGUoaW5mbykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdCA9IGluZm8ubGVmdDtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFswXTtcbiAgICAgICAgc2xpZGVyTWFpbi5hZGRDb250ZW50KCh2YWwsIGFuaW1hdGUpPT57XG4gICAgICAgICAgICBpZiAoIWFuaW1hdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdCA9IHZhbFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVhc2luZ0FuaW1hdG9yLmVhc2VQcm9wKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5lbGVtZW50LnNjcm9sbExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHZhbFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50Lm9uKCdzY3JvbGwnLCAoKT0+e1xuICAgICAgICAgICAgc2xpZGVyTWFpbi5zY3JvbGxQb3NpdGlvbiA9IHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0O1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb3VudGVyIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXnNsaWRlck1haW4nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKCRzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgc2xpZGVyTWFpbi5zZXRDb3VudGVyKCh2YWwpPT57XG4gICAgICAgICAgICB0aGlzLiR0aW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkU2xpZGUgPSAoMWU0K3ZhbCsxK1wiXCIpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlckl0ZW0ge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93KSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9IGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KTtcbiAgICAgICAgdGhpcy5lbGVtcyA9IFtdO1xuICAgIH1cbiAgICBnZXRFbGVtSW5mbyhpbmRleCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbXNbaW5kZXhdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2Zmc2V0TGVmdDogZWxlbWVudC5vZmZzZXRMZWZ0LFxuICAgICAgICAgICAgY2VudGVyOiBlbGVtZW50Lm9mZnNldExlZnQgKyBlbGVtZW50Lm9mZnNldFdpZHRoLzIsXG4gICAgICAgICAgICBvZmZzZXRXaWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmVsZW1zLnB1c2goZWxlbWVudFswXSkgLSAxO1xuICAgICAgICBsZXQgaGFuZGxlciA9IHNsaWRlck1haW4uYWRkSXRlbSh7XG4gICAgICAgICAgICBlbGVtOiB0aGlzLmVsZW1zW2luZGV4XSxcbiAgICAgICAgICAgIGVsZW1JbmZvOiB0aGlzLmdldEVsZW1JbmZvKGluZGV4KVxuICAgICAgICB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT57XG4gICAgICAgICAgICBoYW5kbGVyKHRoaXMuZ2V0RWxlbUluZm8oaW5kZXgpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFVuaVNsaWRlckl0ZW0gZXh0ZW5kcyBTbGlkZXJJdGVtIHtcbiAgICBnZXRFbGVtSW5mbyhpbmRleCkge1xuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCA8IDgwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmdldEVsZW1JbmZvKGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbXNbaW5kZXhdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2Zmc2V0TGVmdDogIWluZGV4PyAwOlxuICAgICAgICAgICAgICAgIGVsZW1lbnQub2Zmc2V0TGVmdCAtIHRoaXMuZWxlbXNbMF0ub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIGNlbnRlcjogIWluZGV4PyBlbGVtZW50Lm9mZnNldExlZnQgKyBlbGVtZW50Lm9mZnNldFdpZHRoLzIgOlxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbXNbaW5kZXgtMV0ub2Zmc2V0TGVmdCArIHRoaXMuZWxlbXNbaW5kZXgtMV0ub2Zmc2V0V2lkdGgvMlxuICAgICAgICAgICAgICAgICArIGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBvZmZzZXRXaWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIHNldEFjdGl2ZTogKGRlbHRhKT0+e1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KDAsIDEuMi1NYXRoLmFicyhkZWx0YS9lbGVtZW50Lm9mZnNldFdpZHRoKSk7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVsZW1lbnQuc3R5bGUub3BhY2l0eSAtIDEpID4gMC4yKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNtYWxsU2xpZGVySXRlbSBleHRlbmRzIFNsaWRlckl0ZW0ge1xuICAgIFxuICAgIGdldEVsZW1JbmZvKGluZGV4KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIDwgODAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0RWxlbUluZm8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtc1tpbmRleF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZzZXRMZWZ0OiBlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgY2VudGVyOiBlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50Lm9mZnNldFdpZHRoLzIsXG4gICAgICAgICAgICBvZmZzZXRXaWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICB9XG4gICAgfVxufVxuICAgIFxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbnRyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBzbGlkZXJNYWluLmFkZENvbnRyb2xsZXIoK2F0dHJzLnNsaWRlckNvbnRyb2xsKVxuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZChzbGlkZXJNYWluKSlcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRWFzaW5nQW5pbWF0b3Ige1xuXG4gICAgY29uc3RydWN0b3Iob3B0KXtcbiAgICAgICAgdmFyIG9wdCA9IHt9O1xuICAgICAgICB0aGlzLmVhc2luZ0ludGVydmFsID0gb3B0LmVhc2luZ0ludGVydmFsO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gb3B0LmR1cmF0aW9uIHx8IDEwMDA7XG4gICAgICAgIHRoaXMuc3RlcCA9IG9wdC5zdGVwIHx8IDUwO1xuICAgICAgICB0aGlzLmVhc2luZ0ZuID0gKHQsIGIsIGMsIGQpID0+e1xuICAgICAgICAgICAgaWYgKCh0Lz1kLzIpIDwgMSkgcmV0dXJuIGMvMip0KnQqdCp0ICsgYjtcbiAgICAgICAgICAgIHJldHVybiAtYy8yICogKCh0LT0yKSp0KnQqdCAtIDIpICsgYjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lYXNpbmdGbiA9IG9wdC5lYXNpbmdGbiB8fCB0aGlzLmVhc2luZ0ZuO1xuICAgICAgICB0aGlzLmNhbGxCYWNrID0gb3B0LmNhbGxCYWNrIHx8ICgpPT57fTtcbiAgICB9XG4gICAgbWFrZUZyb21DYWxsYmFjayAoY2FsbEJhY2spIHtcbiAgICAgICAgY29uc29sZS5sb2coY2FsbEJhY2spXG4gICAgICAgIHJldHVybiBuZXcgRWFzaW5nQW5pbWF0b3Ioe1xuICAgICAgICAgICAgY2FsbEJhY2s6IGNhbGxCYWNrXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlYXNlUHJvcCAob2JqLCBwcm9wRGljdCkge1xuICAgICAgICBwcm9wRGljdCA9IHByb3BEaWN0IHx8IHt9O1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICB0ID0gMCxcbiAgICAgICAgICAgIG91dF92YWxzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmVhc2luZ0ludGVydmFsKTtcbiAgICAgICAgc2VsZi5lYXNpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICB0Kz0gdGhpcy5zdGVwO1xuICAgICAgICAgICAgaWYgKHQgPj0gdGhpcy5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5lYXNpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhwcm9wRGljdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSB0aGlzLmVhc2luZ0ZuKHQsIDAsIDEsIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcERpY3QpLmZvckVhY2goKGtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvbGRfdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICAgICAgb3V0X3ZhbHNba2V5XSA9IG9sZF92YWwgLSBwZXJjZW50KihvbGRfdmFsIC0gcHJvcERpY3Rba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2FsbEJhY2sob3V0X3ZhbHMpO1xuICAgICAgICB9LCB0aGlzLnN0ZXApO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIEEgaGVscGVyIGNsYXNzIHRvIHNpbXBsaWZ5IHJlZ2lzdGVyaW5nIEFuZ3VsYXIgY29tcG9uZW50cyBhbmQgcHJvdmlkZSBhIGNvbnNpc3RlbnQgc3ludGF4IGZvciBkb2luZyBzby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGFwcE5hbWUpIHtcblxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShhcHBOYW1lKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpcmVjdGl2ZTogZGlyZWN0aXZlLFxuICAgICAgICBjb250cm9sbGVyOiBjb250cm9sbGVyLFxuICAgICAgICBzZXJ2aWNlOiBzZXJ2aWNlLFxuICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgIGZhY3Rvcnk6IGZhY3RvcnlcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGlyZWN0aXZlKG5hbWUsIGNvbnN0cnVjdG9yRm4pIHtcblxuICAgICAgICBjb25zdHJ1Y3RvckZuID0gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yRm4pO1xuXG4gICAgICAgIGlmICghY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGVtcHR5IGNvbXBpbGUgZnVuY3Rpb24gaWYgbm9uZSB3YXMgZGVmaW5lZC5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUgPSAoKSA9PiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcmlnaW5hbENvbXBpbGVGbiA9IF9jbG9uZUZ1bmN0aW9uKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUpO1xuXG4gICAgICAgIC8vIERlY29yYXRlIHRoZSBjb21waWxlIG1ldGhvZCB0byBhdXRvbWF0aWNhbGx5IHJldHVybiB0aGUgbGluayBtZXRob2QgKGlmIGl0IGV4aXN0cylcbiAgICAgICAgLy8gYW5kIGJpbmQgaXQgdG8gdGhlIGNvbnRleHQgb2YgdGhlIGNvbnN0cnVjdG9yIChzbyBgdGhpc2Agd29ya3MgY29ycmVjdGx5KS5cbiAgICAgICAgLy8gVGhpcyBnZXRzIGFyb3VuZCB0aGUgcHJvYmxlbSBvZiBhIG5vbi1sZXhpY2FsIFwidGhpc1wiIHdoaWNoIG9jY3VycyB3aGVuIHRoZSBkaXJlY3RpdmUgY2xhc3MgaXRzZWxmXG4gICAgICAgIC8vIHJldHVybnMgYHRoaXMubGlua2AgZnJvbSB3aXRoaW4gdGhlIGNvbXBpbGUgZnVuY3Rpb24uXG4gICAgICAgIF9vdmVycmlkZShjb25zdHJ1Y3RvckZuLnByb3RvdHlwZSwgJ2NvbXBpbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29tcGlsZUZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29uc3RydWN0b3JGbi5wcm90b3R5cGUubGluaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3JGbi5wcm90b3R5cGUubGluay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pO1xuXG4gICAgICAgIGFwcC5kaXJlY3RpdmUobmFtZSwgZmFjdG9yeUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udHJvbGxlcihuYW1lLCBjb250cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLmNvbnRyb2xsZXIobmFtZSwgY29udHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VydmljZShuYW1lLCBjb250cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLnNlcnZpY2UobmFtZSwgY29udHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvdmlkZXIobmFtZSwgY29uc3RydWN0b3JGbikge1xuICAgICAgICBhcHAucHJvdmlkZXIobmFtZSwgY29uc3RydWN0b3JGbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZhY3RvcnkobmFtZSwgY29uc3RydWN0b3JGbikge1xuICAgICAgICBjb25zdHJ1Y3RvckZuID0gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgYXBwLmZhY3RvcnkobmFtZSwgZmFjdG9yeUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGNvbnN0cnVjdG9yRm4gaXMgYW4gYXJyYXkgb2YgdHlwZSBbJ2RlcDEnLCAnZGVwMicsIC4uLiwgY29uc3RydWN0b3IoKSB7fV1cbiAgICAgKiB3ZSBuZWVkIHRvIHB1bGwgb3V0IHRoZSBhcnJheSBvZiBkZXBlbmRlbmNpZXMgYW5kIGFkZCBpdCBhcyBhbiAkaW5qZWN0IHByb3BlcnR5IG9mIHRoZVxuICAgICAqIGFjdHVhbCBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gaW5wdXRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9ub3JtYWxpemVDb25zdHJ1Y3RvcihpbnB1dCkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3JGbjtcblxuICAgICAgICBpZiAoaW5wdXQuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgdmFyIGluamVjdGVkID0gaW5wdXQuc2xpY2UoMCwgaW5wdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuID0gaW5wdXRbaW5wdXQubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuLiRpbmplY3QgPSBpbmplY3RlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4gPSBpbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBpbnRvIGEgZmFjdG9yeSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIHRoYXRcbiAgICAgKiBjb25zdHJ1Y3Rvciwgd2l0aCB0aGUgY29ycmVjdCBkZXBlbmRlbmNpZXMgYXV0b21hdGljYWxseSBpbmplY3RlZCBhcyBhcmd1bWVudHMuXG4gICAgICpcbiAgICAgKiBJbiBvcmRlciB0byBpbmplY3QgdGhlIGRlcGVuZGVuY2llcywgdGhleSBtdXN0IGJlIGF0dGFjaGVkIHRvIHRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB3aXRoIHRoZVxuICAgICAqIGAkaW5qZWN0YCBwcm9wZXJ0eSBhbm5vdGF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnN0cnVjdG9yRm5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPFQ+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIC8vIGdldCB0aGUgYXJyYXkgb2YgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIG5lZWRlZCBieSB0aGlzIGNvbXBvbmVudCAoYXMgY29udGFpbmVkIGluIHRoZSBgJGluamVjdGAgYXJyYXkpXG4gICAgICAgIHZhciBhcmdzID0gY29uc3RydWN0b3JGbi4kaW5qZWN0IHx8IFtdO1xuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gYXJncy5zbGljZSgpOyAvLyBjcmVhdGUgYSBjb3B5IG9mIHRoZSBhcnJheVxuICAgICAgICAvLyBUaGUgZmFjdG9yeUFycmF5IHVzZXMgQW5ndWxhcidzIGFycmF5IG5vdGF0aW9uIHdoZXJlYnkgZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSBpcyB0aGUgbmFtZSBvZiBhXG4gICAgICAgIC8vIGRlcGVuZGVuY3ksIGFuZCB0aGUgZmluYWwgaXRlbSBpcyB0aGUgZmFjdG9yeSBmdW5jdGlvbiBpdHNlbGYuXG4gICAgICAgIGZhY3RvcnlBcnJheS5wdXNoKCguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAvL3JldHVybiBuZXcgY29uc3RydWN0b3JGbiguLi5hcmdzKTtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvckZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2Vba2V5XSA9IGluc3RhbmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWN0b3J5QXJyYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvbmUgYSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSBvcmlnaW5hbFxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2xvbmVGdW5jdGlvbihvcmlnaW5hbCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBhbiBvYmplY3QncyBtZXRob2Qgd2l0aCBhIG5ldyBvbmUgc3BlY2lmaWVkIGJ5IGBjYWxsYmFja2AuXG4gICAgICogQHBhcmFtIG9iamVjdFxuICAgICAqIEBwYXJhbSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgZnVuY3Rpb24gX292ZXJyaWRlKG9iamVjdCwgbWV0aG9kTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgb2JqZWN0W21ldGhvZE5hbWVdID0gY2FsbGJhY2sob2JqZWN0W21ldGhvZE5hbWVdKVxuICAgIH1cblxufVxuIl19
