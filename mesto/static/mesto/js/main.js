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
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _bind = Function.prototype.bind;

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SliderController = (function () {
    function SliderController() {
        var _this = this;

        _classCallCheck(this, SliderController);

        this.items = [];
        this.slide = 0;
        this._scrollPosition = 0;
        this.setSlide = function () {};
        this.moveToSlideTimeout = null;
        this.typeName = "next";
        this.ready = new Promise(function (resolve, reject) {
            _this.allItemReady = function (length) {
                resolve(length);
            };
        });
    }

    _createClass(SliderController, [{
        key: "setType",
        value: function setType(typeName) {
            var _this2 = this;

            if (document.body.offsetWidth < 800) {
                return;
            }
            this.typeName = typeName;
            this.ready.then(function (length) {
                if (_this2.typeName == "switch" && length >= 2) {
                    _this2["switch"](0, length);
                    window.dispatchEvent(new Event('resize'));
                    _this2.items[0].elem.parentNode.insertBefore(_this2.items[0].elem, _this2.items[0].elem.cloneNode(1));
                }
            });
        }
    }, {
        key: "switch",
        value: function _switch(from, to) {
            var parentNode = this.items[0].elem.parentNode;
            var nodeList = Array.prototype.slice.call(parentNode.children);
            parentNode.insertBefore(to === null ? to : nodeList[to], nodeList[from]);
        }
    }, {
        key: "moveToSlide",
        value: function moveToSlide(position) {
            var _this3 = this;

            clearTimeout(this.moveToSlideTimeout);
            this.moveToSlideTimeout = setTimeout(function () {
                _this3.scrollHandler(_this3.items[position].getElemInfo().offsetLeft, true);
            }, 0);
        }
    }, {
        key: "addItem",
        value: function addItem(item) {
            var _this4 = this;

            var index = this.items.push(item) - 1;
            if (index == item.elem.parentNode.children.length - 1) {
                this.allItemReady(index);
            }
            return function (newInfo) {
                _this4.items[index].elemInfo = newInfo;
                _this4.moveToSlide(_this4.slide);
            };
        }
    }, {
        key: "addContent",
        value: function addContent(handler) {
            this.scrollHandler = handler;
        }
    }, {
        key: "next",
        value: function next(delta) {
            var _this5 = this;

            var next = this.slide + delta;
            if (this.typeName == "switch") {
                if (next == this.items.length) {
                    this["switch"](0, this.items.length - 1);
                    this["switch"](0, this.items.length - 1);
                    next = 0;
                } else if (next < 0) {
                    next = this.items.length - 1;
                    this["switch"](null, 0);
                    this["switch"](null, 0);
                } else if (next == 0) {
                    this["switch"](0, this.items.length - 1);
                } else if (next >= this.items.length - 1) {
                    this["switch"](null, 0);
                } else {
                    this.items.forEach(function (e) {
                        e.elem.parentNode.appendChild(e.elem);
                    });
                }
                setTimeout(function () {
                    _this5.scrollHandler(_this5.items[_this5.slide].getElemInfo().offsetLeft);
                    _this5.moveToSlide(next);
                    _this5.slide = next;
                }, 0);
                return;
            }
            if (next >= this.items.length) {
                next = 0;
            } else if (next < 0) {
                next = this.items.length - 1;
            }
            this.moveToSlide(next);
            this.slide = next;
        }
    }, {
        key: "addController",
        value: function addController(delta) {
            var _this6 = this;

            var handler = function handler(e) {
                _this6.next(delta);
            };
            return handler;
        }
    }, {
        key: "setCounter",
        value: function setCounter(handler) {
            this.setSlide = handler;
            this.scrollPosition = 0;
        }
    }, {
        key: "scrollPosition",
        set: function set(val) {
            this.slide = this.items.map(function (item, index) {
                var elemInfo = item.getElemInfo();
                var center = val + elemInfo.offsetWidth;
                if (elemInfo.setActive) {
                    elemInfo.setActive(val - elemInfo.offsetLeft);
                }
                return {
                    diff: Math.abs(elemInfo.center - center),
                    index: index
                };
            }).reduce(function (min, delta) {
                if (min.diff > delta.diff) {
                    min = delta;
                }
                return min;
            }, { diff: 99999, index: -1 }).index;
            this._scrollPosition = val;
            this.setSlide(this.slide);
        }
    }], [{
        key: "factory",
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

var SliderMain = (function () {
    function SliderMain() {
        _classCallCheck(this, SliderMain);

        this.restrict = 'A';
        this.require = 'sliderMain';
        this.controller = SliderController.factory;
    }

    _createClass(SliderMain, [{
        key: "link",
        value: function link(scope, element, attrs, sliderMain) {
            sliderMain.setType(attrs.sliderMain);
        }
    }]);

    return SliderMain;
})();

exports.SliderMain = SliderMain;

var SliderContent = (function () {

    /*@ngInject*/

    function SliderContent(easingAnimator) {
        _classCallCheck(this, SliderContent);

        this.easingAnimator = easingAnimator;
        this.easingAnimator.callBack = this.animate.bind(this);
        this.require = '^sliderMain';
        this.restrict = 'A';
        this.timeout;
    }
    SliderContent.$inject = ["easingAnimator"];

    _createClass(SliderContent, [{
        key: "animate",
        value: function animate(info) {
            this.element.scrollLeft = info.left;
        }
    }, {
        key: "link",
        value: function link(scope, element, attrs, sliderMain) {
            var _this7 = this;

            this.element = element[0];
            sliderMain.addContent(function (val, animate) {
                if (!animate) {
                    _this7.element.scrollLeft = val;
                } else {
                    _this7.easingAnimator.easeProp({
                        left: _this7.element.scrollLeft
                    }, {
                        left: val
                    });
                }
            });
            element.on('scroll', function () {
                clearTimeout(_this7.timeout);
                _this7.timeout = setTimeout(function () {
                    sliderMain.scrollPosition = _this7.element.scrollLeft;
                }, 1);
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
        key: "link",
        value: function link($scope, element, attrs, sliderMain) {
            var _this8 = this;

            sliderMain.setCounter(function (val) {
                _this8.$timeout(function () {
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
        this.timeout;
    }
    SliderItem.$inject = ["$window"];

    _createClass(SliderItem, [{
        key: "getElemInfo",
        value: function getElemInfo(index) {
            var element = this.elems[index];
            return {
                offsetLeft: element.offsetLeft,
                center: element.offsetLeft + element.offsetWidth / 2,
                offsetWidth: element.offsetWidth
            };
        }
    }, {
        key: "link",
        value: function link(scope, element, attrs, sliderMain) {
            var _this9 = this;

            var index = this.elems.push(element[0]) - 1;
            var handler = sliderMain.addItem({
                elem: this.elems[index],
                elemInfo: this.getElemInfo(index),
                getElemInfo: (function (index) {
                    return this.getElemInfo(index);
                }).bind(this, index)
            });
            window.addEventListener('resize', function () {
                clearTimeout(_this9.timeout);
                _this9.timeout = setTimeout(function () {
                    handler(_this9.getElemInfo(index));
                }, 10);
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

        _get(Object.getPrototypeOf(UniSliderItem.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(UniSliderItem, [{
        key: "getElemInfo",
        value: function getElemInfo(index) {
            if (document.body.offsetWidth < 800) {
                return _get(Object.getPrototypeOf(UniSliderItem.prototype), "getElemInfo", this).call(this, index);
            }
            var element = this.elems[index];
            var domElems = Array.prototype.slice.call(element.parentNode.children);
            var domIndex = domElems.indexOf(element);
            return {
                domIndex: domIndex,
                offsetLeft: !domIndex ? 0 : element.offsetLeft - domElems[0].offsetLeft,
                center: !domIndex ? element.offsetLeft + element.offsetWidth / 2 : domElems[domIndex - 1].offsetLeft + domElems[domIndex - 1].offsetWidth / 2 + element.offsetWidth,
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

        _get(Object.getPrototypeOf(SmallSliderItem.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(SmallSliderItem, [{
        key: "getElemInfo",
        value: function getElemInfo(index) {
            if (document.body.offsetWidth < 800) {
                return _get(Object.getPrototypeOf(SmallSliderItem.prototype), "getElemInfo", this).call(this, index);
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
        key: "link",
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
        this.duration = opt.duration || 500;
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

            console.log(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2suanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpbi5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpblBhZ2UvZGlyZWN0aXZlcy9sb2dvRGlyZWN0aXZlcy5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbW92aWVTaG93L2NvbnRyb2xsZXJzL3BsYXlTaG93LmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9tb3ZpZVNob3cvY29udHJvbGxlcnMvc2hvd0RldGFpbC5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbW92aWVTaG93L2NvbnRyb2xsZXJzL3Nob3dzRmlsdGVyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbW92aWVTaG93L2RpcmVjdGl2ZXMvY3VzdG9tU2VsZWN0LmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL2RpcmVjdGl2ZXMvZHJhZ2dDb250cm9sbGVyLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL2RpcmVjdGl2ZXMvaG9yaXpvbnRhbFNjcm9sbC5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9kaXJlY3RpdmVzL3NsaWRlci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9zZXJ2aWNlcy9lYXNpbmdBbmltYXRvci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdXRpbHMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQWEsY0FBYzthQUFkLGNBQWM7OEJBQWQsY0FBYzs7O2lCQUFkLGNBQWM7O2VBT25CLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDeEIsc0JBQVUsQ0FBQyxZQUFJO0FBQ1gsdUJBQU8sQ0FDRixXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQzlDLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLG1CQUFPLENBQ0YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FDbkMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQzdCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDLEVBQUM7QUFDcEIsaUJBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtBQUNsQixvQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNwQyx1QkFBTyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDM0MsMEJBQVUsQ0FBQyxZQUFJO0FBQ1gsMEJBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztpQkFDL0IsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUNYLENBQUMsQ0FBQztTQUNWOzs7YUF0QmlCLGVBQUc7QUFDakIsbUJBQU8sR0FBRyxDQUFDO1NBQ2Q7OzthQUNvQixlQUFHO0FBQ3BCLG1CQUFPLE1BQU0sQ0FBQztTQUNqQjs7O1dBTlEsY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztJQ0FkLHNCQUFzQjs7O0FBRXBCLGFBRkYsc0JBQXNCLENBRW5CLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRTs4QkFGN0Isc0JBQXNCOztBQUczQixZQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7QUFDekMsWUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7QUFDbkIsWUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakIsWUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7S0FDeEI7O2lCQVBRLHNCQUFzQjs7ZUFRekIsZ0JBQUMsSUFBSSxFQUFDOzs7QUFDUixnQkFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQ2Ysb0JBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNwQixNQUFNO0FBQ0gsb0JBQUksUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN4RCx3QkFBUSxDQUFDLEtBQUssRUFBRSxDQUNYLElBQUksQ0FBQyxZQUFLO0FBQ1AsMEJBQUssT0FBTyxHQUFHLElBQUksQ0FBQztpQkFDdkIsQ0FBQyxTQUNJLENBQUMsVUFBQyxRQUFRLEVBQUs7QUFDakIsMEJBQUssS0FBSyxHQUFHLFFBQVEsQ0FBQztpQkFDekIsQ0FBQyxDQUFBO2FBQ1Q7U0FDSjs7O1dBckJRLHNCQUFzQjs7Ozs7Ozs7Ozs7Ozs7OztJQ0F0QixtQkFBbUI7OztBQUVqQixhQUZGLG1CQUFtQixDQUVoQixhQUFhLEVBQUU7OEJBRmxCLG1CQUFtQjs7QUFHeEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDcEIsWUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7S0FDdEM7O2lCQUxRLG1CQUFtQjs7ZUFNeEIsY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN4QixnQkFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FDM0IsVUFBVSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQzNDLG1CQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1NBQ3pEOzs7V0FWUSxtQkFBbUI7Ozs7O0lBWW5CLHFCQUFxQjtpQkFBckIscUJBQXFCOzthQUNQLGVBQUc7QUFDdEIsbUJBQU8sWUFBWSxDQUFDO1NBQ3ZCOzs7OztBQUdVLGFBTkYscUJBQXFCLENBTWxCLGFBQWEsRUFBRTs4QkFObEIscUJBQXFCOztBQU8xQixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztLQUN0Qzs7aUJBVFEscUJBQXFCOztlQVUxQixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3hCLGdCQUFJLE9BQU8sR0FBRyxTQUFWLE9BQU8sQ0FBSSxJQUFJLEVBQUs7QUFDcEIsdUJBQU8sQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDM0QsQ0FBQTtBQUNELGdCQUFJLENBQUMsYUFBYSxDQUNiLFlBQVksQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDNUQ7OztXQWhCUSxxQkFBcUI7Ozs7O0lBa0JyQixrQkFBa0I7OztBQUVoQixhQUZGLGtCQUFrQixDQUVmLGFBQWEsRUFBRTs4QkFGbEIsa0JBQWtCOztBQUd2QixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztLQUN0Qzs7aUJBTFEsa0JBQWtCOztlQU12QixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFO0FBQ3hCLGdCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNqRSxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztTQUN6RDs7O1dBVFEsa0JBQWtCOzs7OztJQVdsQixpQkFBaUI7aUJBQWpCLGlCQUFpQjs7YUFDSCxlQUFHO0FBQ3RCLG1CQUFPLFFBQVEsQ0FBQztTQUNuQjs7Ozs7QUFHVSxhQU5GLGlCQUFpQixDQU1kLGFBQWEsRUFBRTs4QkFObEIsaUJBQWlCOztBQU90QixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztLQUN0Qzs7aUJBVFEsaUJBQWlCOztlQVVwQixnQkFBQyxPQUFPLEVBQUU7QUFDWixtQkFBTyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2RDs7O2VBQ0csY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN4QixnQkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsZ0JBQUksQ0FBQyxhQUFhLENBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztTQUMxRTs7O1dBakJRLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7SUN6Q2pCLGdCQUFnQjs7QUFFZCxTQUZGLGdCQUFnQixDQUViLFNBQVMsRUFBRTswQkFGZCxnQkFBZ0I7O0FBR3JCLFdBQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Q0FDOUM7Ozs7Ozs7Ozs7Ozs7OztJQ0pDLEtBQUs7QUFDSSxhQURULEtBQUssQ0FDSyxXQUFXLEVBQUUsSUFBSSxFQUFDOzhCQUQ1QixLQUFLOztBQUVILFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO0tBQ2xDOztpQkFKQyxLQUFLOztlQUtHLHNCQUFHO0FBQ1QsZ0JBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtBQUNuQyxxQkFBSyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2FBQ3ZDO0FBQ0QsZ0JBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN0Qjs7O1dBVkMsS0FBSzs7O0FBWVgsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQzs7SUFFZixZQUFZO0FBQ1YsYUFERixZQUFZLEdBQ1A7OEJBREwsWUFBWTs7QUFFakIsWUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7S0FDcEI7O2lCQUhRLFlBQVk7O2VBSWQsaUJBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRTtBQUN2QixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDeEQ7OztlQUNJLGVBQUMsUUFBUSxFQUFFOzs7QUFDWixnQkFBSSxDQUFDLFFBQVEsRUFBRTtBQUNYLHNCQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUc7QUFDcEMsMEJBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO2lCQUNqQyxDQUFDLENBQUE7QUFDRix1QkFBTzthQUNWO0FBQ0QsbUJBQU8sVUFBQyxDQUFDLEVBQUs7QUFDVixvQkFBSSxLQUFLLEdBQUcsTUFBSyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDakMsb0JBQUksS0FBSyxFQUFFO0FBQ1AscUJBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQix5QkFBSyxDQUFDLFVBQVUsRUFBRSxDQUFBO2lCQUNyQjthQUNKLENBQUE7U0FDSjs7O2VBQ1csc0JBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDbkMsaUJBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDOUM7OztlQUNTLG9CQUFDLFNBQVMsRUFBRTs7O0FBQ2xCLG1CQUFPLFVBQUMsQ0FBQyxFQUFLO0FBQ1YsaUJBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUNuQixpQkFBQyxDQUFDLE9BQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFBLENBQzFCLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRztBQUNkLHlCQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7aUJBQ3RCLENBQUMsQ0FBQTthQUNULENBQUE7U0FDSjs7O1dBakNRLFlBQVk7Ozs7Ozs7OzZCQ2RBLGtCQUFrQjs7dUNBVXBDLDZCQUE2Qjs7NkNBQ0wsbUNBQW1DOztnREFDbEMsc0NBQXNDOztpREFDckMsdUNBQXVDOzs0Q0FFekMsa0NBQWtDOzs0Q0FFcEMsa0NBQWtDOztnREFDOUIsc0NBQXNDOztpREFDaEMsdUNBQXVDOzswQ0FNdkUsZ0NBQWdDOztnREFPaEMsc0NBQXNDOzs4Q0FFVCxxQ0FBcUM7O2lEQU1sRSx3Q0FBd0M7OzJEQUVULGtEQUFrRDs7Z0RBQzdELHVDQUF1Qzs7QUFFbEUsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FDOUIsWUFBWSxFQUNaLFVBQVUsRUFDVixlQUFlLENBQ2xCLENBQUMsQ0FBQzs7QUFFSCw2QkFBUyxPQUFPLENBQUMsQ0FDWixTQUFTLENBQUMsWUFBWSxzQ0FBYSxDQUNuQyxTQUFTLENBQUMsZ0JBQWdCLDBDQUFpQixDQUMzQyxTQUFTLENBQUMsZUFBZSx5Q0FBZ0IsQ0FDekMsU0FBUyxDQUFDLFlBQVksc0NBQWEsQ0FDbkMsU0FBUyxDQUFDLGlCQUFpQiwyQ0FBa0IsQ0FDN0MsU0FBUyxDQUFDLGVBQWUseUNBQWdCLENBQ3pDLFNBQVMsQ0FBQyxlQUFlLHlDQUFnQixDQUN6QyxTQUFTLENBQUMsaUJBQWlCLG9EQUFrQixDQUM3QyxTQUFTLENBQUMsa0JBQWtCLHNEQUFtQixDQUMvQyxPQUFPLENBQUMsZ0JBQWdCLGdEQUFpQixDQUV6QyxTQUFTLENBQUMsbUJBQW1CLGdEQUFvQixDQUNqRCxTQUFTLENBQUMscUJBQXFCLGtEQUFzQixDQUNyRCxTQUFTLENBQUMsb0JBQW9CLGlEQUFxQixDQUNuRCxTQUFTLENBQUMsd0JBQXdCLG9EQUF3QixDQUMxRCxPQUFPLENBQUMsZUFBZSw2Q0FBZSxDQUV0QyxPQUFPLENBQUMsa0JBQWtCLHFEQUFtQixDQUM3QyxVQUFVLENBQUMsd0JBQXdCLDREQUF5QixDQUU1RCxTQUFTLENBQUMsZ0JBQWdCLCtDQUFpQixDQUUzQyxTQUFTLENBQUMsZ0JBQWdCLGlEQUFlLENBQ3pDLFNBQVMsQ0FBQyxjQUFjLGdEQUFjLENBQ3RDLFNBQVMsQ0FBQyxjQUFjLHFEQUFtQixDQUMzQyxTQUFTLENBQUMsb0JBQW9CLHNEQUFvQixDQUVsRCxVQUFVLENBQUMscUJBQXFCLHNEQUFzQixDQUV0RCxTQUFTLENBQUMsbUJBQW1CLHVEQUFvQixDQUNqRCxTQUFTLENBQUMsdUJBQXVCLDJEQUF3QixDQUN6RCxTQUFTLENBQUMsOEJBQThCLGtFQUErQixDQUV2RSxVQUFVLENBQUMsdUJBQXVCLHFFQUF3QixDQUMxRCxVQUFVLENBQUMsWUFBWSwrQ0FBYSxDQUFBOztBQUV6QyxHQUFHLENBQUMsTUFBTSxDQUFDLFVBQUMsaUJBQWlCLEVBQUUsYUFBYSxFQUFJO0FBQzVDLGlCQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUM7QUFDcEQsaUJBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQztBQUN0RCxxQkFBaUIsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0NBQzNELENBQUMsQ0FBQTtBQUNGLE9BQU8sQ0FDRixPQUFPLENBQUMsUUFBUSxDQUFDLENBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztJQy9GM0QsY0FBYztBQUNMLGFBRFQsY0FBYyxHQUNGOzhCQURaLGNBQWM7O0FBRVosWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsWUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7S0FDckI7O2lCQUpDLGNBQWM7O2VBS1Isa0JBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNoQixnQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDNUI7OztlQUNNLGlCQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDaEIsZ0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQzNCOzs7ZUFDWSx1QkFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDO0FBQ3JCLGdCQUFJLENBQUMsVUFBVSxHQUFHO0FBQ2Qsb0JBQUksRUFBRSxJQUFJO0FBQ1Ysb0JBQUksRUFBRSxJQUFJO2FBQ2IsQ0FBQTtTQUNKOzs7ZUFDTSxtQkFBRzs7O0FBQ04sa0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsRUFBRztBQUNuQyxzQkFBSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7YUFDOUIsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDMUI7OztlQUNJLGVBQUMsSUFBSSxFQUFFO0FBQ1IsZ0JBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN6QyxnQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM3Qjs7O2VBQ0csY0FBQyxJQUFJLEVBQUU7QUFDUCxnQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUM1Qjs7O2VBQ2EsbUJBQVU7OENBQU4sSUFBSTtBQUFKLG9CQUFJOzs7QUFDbEIsMEJBQWMsQ0FBQyxRQUFRLG9CQUFPLGNBQWMsZ0JBQUksSUFBSSxLQUFDLENBQUM7QUFDdEQsbUJBQU8sY0FBYyxDQUFDLFFBQVEsQ0FBQztTQUNsQzs7O1dBakNDLGNBQWM7OztJQW1DUCxnQkFBZ0IsR0FDZCxTQURGLGdCQUFnQixHQUNaOzBCQURKLGdCQUFnQjs7QUFFckIsUUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQ3pDLFFBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0NBQ3ZCOzs7O0lBRVEsaUJBQWlCO2lCQUFqQixpQkFBaUI7O2FBQ0gsZUFBRTtBQUNyQixtQkFBTyxRQUFRLENBQUM7U0FDbkI7OztBQUNVLGFBSkYsaUJBQWlCLEdBSVo7OEJBSkwsaUJBQWlCOztBQUt0QixZQUFJLENBQUMsT0FBTyxHQUFHLGVBQWUsQ0FBQztBQUMvQixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztLQUN2Qjs7aUJBUFEsaUJBQWlCOztlQVF0QixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUNwQyxzQkFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFDLEdBQUcsRUFBRztBQUM1Qix1QkFBTyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNqRCx1QkFBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLFlBQVUsR0FBRyxTQUFNLE1BQU0sQ0FBQyxDQUFDO2FBQ2pFLEVBQUUsWUFBSTtBQUNILHVCQUFPLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ3ZELENBQUMsQ0FBQztTQUNOOzs7V0FmUSxpQkFBaUI7Ozs7O0lBaUJqQixZQUFZO0FBQ1YsYUFERixZQUFZLEdBQ1I7OEJBREosWUFBWTs7QUFFakIsWUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDL0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7S0FDdkI7O2lCQUpRLFlBQVk7O2VBS2pCLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0FBQ3BDLG1CQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFJO0FBQ3pCLDBCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUMxQyxDQUFDLENBQUM7QUFDSCxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBSTtBQUN6QiwwQkFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7YUFDNUMsQ0FBQyxDQUFDO0FBQ0gsbUJBQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQUk7QUFDcEIsMEJBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3pDLENBQUMsQ0FBQztTQUNOOzs7V0FmUSxZQUFZOzs7OztJQWlCWixXQUFXO0FBQ1QsYUFERixXQUFXLEdBQ1A7OEJBREosV0FBVzs7QUFFaEIsWUFBSSxDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7QUFDL0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7S0FDdkI7O2lCQUpRLFdBQVc7O2VBS2hCLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0FBQ3BDLHNCQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUU7QUFDbkMscUJBQUssRUFBRSxpQkFBSTtBQUNQLDBCQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUNyQztBQUNELHNCQUFNLEVBQUUsa0JBQUk7QUFDUiwyQkFBTyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDcEQ7QUFDRCx3QkFBUSxFQUFFLG9CQUFJO0FBQ1YsMkJBQU8sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3ZEO2FBQ0osQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU87O0FBRTFCLGdCQUFJLEdBQUcsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0FBQ3RCLGVBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsWUFBSTtBQUM3QiwwQkFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN6RCxDQUFDLENBQUM7QUFDSCxlQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7QUFDdkIsZ0JBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRTtBQUNiLDBCQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pEO1NBQ0o7OztXQTNCUSxXQUFXOzs7Ozs7QUMzRXhCLFlBQVksQ0FBQzs7Ozs7Ozs7OztJQUVBLG1CQUFtQjs7OztBQUdqQixhQUhGLG1CQUFtQixDQUdoQixNQUFNLEVBQUUsUUFBUSxFQUFDOzs7OEJBSHBCLG1CQUFtQjs7QUFJeEIsWUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsY0FBTSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsRUFBRSxVQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUs7QUFDckQsZ0JBQUksUUFBUSxHQUFHLE1BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLGtCQUFLLFFBQVEsQ0FBQyxZQUFJO0FBQ2hCLHdCQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUN4QixDQUFDLENBQUE7U0FDTCxDQUFDLENBQUM7QUFDSCxjQUFNLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLFVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBSztBQUNuRCxnQkFBSSxRQUFRLEdBQUcsTUFBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEMsb0JBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzNCLENBQUMsQ0FBQztLQUNOOztpQkFqQlEsbUJBQW1COztlQWtCakIscUJBQUMsTUFBTSxFQUFDO0FBQ2YsZ0JBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFDN0MsZ0JBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ3RCLG9CQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHO0FBQ2xCLDBCQUFNLEVBQUUsS0FBSztBQUNiLHdCQUFJLEVBQUUsS0FBSztpQkFDZCxDQUFBO2FBQ0o7QUFDRCxtQkFBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCOzs7V0EzQlEsbUJBQW1COzs7Ozs7QUNGaEMsWUFBWSxDQUFDOzs7Ozs7Ozs7O0lBRUEsVUFBVTs7O0FBR1IsU0FIRixVQUFVLENBR1AsTUFBTSxFQUFFLE9BQU8sRUFBRTswQkFIcEIsVUFBVTs7QUFJZixRQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixRQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUNoRCxRQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBQztBQUMxQixZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQ1YsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRzs2QkFDRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7OztnQkFBNUIsR0FBRztnQkFBRSxLQUFLOztBQUNmLGdCQUFJLEtBQUssRUFBRTtBQUNQLG9CQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekM7QUFDRCxtQkFBTyxJQUFJLENBQUM7U0FDZixFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ1gsY0FBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztLQUMzQztDQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztJQ3BCUSxxQkFBcUI7Ozs7QUFHbkIsYUFIRixxQkFBcUIsQ0FHbEIsTUFBTSxFQUFFLE9BQU8sRUFBRTs4QkFIcEIscUJBQXFCOztBQUkxQixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixZQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDOUQsWUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FDckQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNWLE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxHQUFHLEVBQUc7NkJBQ0UsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Ozs7Z0JBQTVCLEdBQUc7Z0JBQUUsS0FBSzs7QUFDZixnQkFBSSxLQUFLLEVBQUU7QUFDUCxvQkFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQzthQUNyQjtBQUNELG1CQUFPLElBQUksQ0FBQztTQUNmLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ25COztpQkFmUSxxQkFBcUI7O2VBZ0J4QixrQkFBRztBQUNMLGdCQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7U0FDaEI7OztlQUNLLGtCQUFHO0FBQ0wsa0JBQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEFBQUUsQ0FBQztTQUM5RTs7O1dBckJRLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBNUIsMkJBQTJCO0FBRWxCLGFBRlQsMkJBQTJCLEdBRWhCOzhCQUZYLDJCQUEyQjs7QUFHekIsWUFBSSxjQUFjLEdBQUcsd0JBQUMsSUFBSSxFQUFHLEVBQUUsQ0FBQzs7QUFFaEMsWUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7QUFDakIsWUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFDLEVBQUUsRUFBRztBQUN4QiwwQkFBYyxHQUFHLEVBQUUsQ0FBQztTQUN2QixDQUFBOztBQUVELFlBQUksQ0FBQyxZQUFZLEdBQUcsVUFBQyxJQUFJLEVBQUc7QUFDeEIsMEJBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QixDQUFBO0tBQ0o7O2lCQWJDLDJCQUEyQjs7ZUFlckIsa0JBQUMsU0FBUyxFQUFFOzs7QUFDbkIscUJBQVMsQ0FBQyxVQUFDLE1BQU0sRUFBRztBQUNuQixzQkFBSyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQzthQUNuQyxDQUFDLENBQUM7U0FDSDs7O2VBQ1UscUJBQUMsVUFBVSxFQUFFO0FBQ3BCLGdCQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDbEQ7OztlQUNhLHVCQUFDLEVBQUUsRUFBQztBQUNkLGdCQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztTQUN4Qjs7O2VBQ1Msc0JBQUUsRUFBRTs7O2VBRUEsbUJBQVU7OENBQU4sSUFBSTtBQUFKLG9CQUFJOzs7QUFDbEIsdUNBQTJCLENBQUMsUUFBUSxvQkFBTywyQkFBMkIsZ0JBQUksSUFBSSxLQUFDLENBQUM7QUFDaEYsbUJBQU8sMkJBQTJCLENBQUMsUUFBUSxDQUFDO1NBQy9DOzs7V0EvQkMsMkJBQTJCOzs7SUFpQ3BCLGlCQUFpQjs7OztBQUdsQixhQUhDLGlCQUFpQixDQUdqQixRQUFRLEVBQUUsU0FBUyxFQUFDOzhCQUhwQixpQkFBaUI7O0FBSXRCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQy9CLFlBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ2QsWUFBSSxDQUFDLFVBQVUsR0FBRywyQkFBMkIsQ0FBQyxPQUFPLENBQUM7QUFDdEQsWUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7S0FDOUI7O2lCQVJRLGlCQUFpQjs7ZUFVckIsY0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUM7OztBQUNyQyxnQkFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUN2RCxnQkFBSSxVQUFVLEVBQUU7QUFDWixvQkFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFNO0FBQ2hCLDhCQUFVLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUN0QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQ1g7QUFDRCxnQkFBSSxZQUFZLEdBQUcsU0FBZixZQUFZLENBQUksQ0FBQyxFQUFLO0FBQ3RCLG9CQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN2QyxvQkFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUEsQUFBQyxFQUFFO0FBQ3pELDJCQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMvQjthQUNKLENBQUM7QUFDRixzQkFBVSxDQUFDLGFBQWEsQ0FBQyxZQUFJO0FBQ3pCLHVCQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVCLG9CQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDekIsMkJBQU8sQ0FBQyxPQUFPLENBQUMsT0FBSyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO2lCQUM3RCxNQUFNO0FBQ0gsMkJBQU8sQ0FBQyxPQUFPLENBQUMsT0FBSyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO2lCQUM5RDthQUNKLENBQUMsQ0FBQTtTQUNMOzs7V0EvQlEsaUJBQWlCOzs7OztJQWlDakIsNEJBQTRCO0FBQzdCLGFBREMsNEJBQTRCLEdBQzNCOzhCQURELDRCQUE0Qjs7QUFFdkMsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDcEIsWUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFBb0IsQ0FBQztLQUNqQzs7aUJBSlEsNEJBQTRCOztlQUtoQyxjQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFO0FBQ2xELG1CQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFVO0FBQzFCLHNDQUFzQixDQUFDLFVBQVUsRUFBRSxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztBQUNILGtDQUFzQixDQUFDLGNBQWMsQ0FBQyxVQUFDLElBQUksRUFBSztBQUM1Qyx1QkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQix1QkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4QyxDQUFDLENBQUM7U0FDTjs7O1dBYlEsNEJBQTRCOzs7OztJQWU1QixxQkFBcUI7OztBQUV0QixhQUZDLHFCQUFxQixDQUVyQixRQUFRLEVBQUU7OEJBRlYscUJBQXFCOztBQUdoQyxZQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFvQixDQUFDO0tBQ2pDOztpQkFOUSxxQkFBcUI7O2VBTzFCLGNBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUM7OztBQUNoRCxrQ0FBc0IsQ0FBQyxRQUFRLENBQUMsVUFBQyxRQUFRLEVBQUk7QUFDNUMsdUJBQUssUUFBUSxDQUFDLFlBQUk7QUFDdkIsNEJBQVEsQ0FBQztBQUNSLDRCQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDbEMsNkJBQUssRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRTtxQkFDbEMsQ0FBQyxDQUFBO2lCQUNJLENBQUMsQ0FBQzthQUNILENBQUMsQ0FBQztBQUNILG1CQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFVO0FBQzFCLHNDQUFzQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTthQUN0RCxDQUFDLENBQUE7U0FDTDs7O1dBbkJRLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7OztJQ2pGckIsZUFBZTtBQUNiLGFBREYsZUFBZSxHQUNYOzhCQURKLGVBQWU7O0FBRXBCLFlBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ3BCLFlBQUksQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO0tBQ2pDOztpQkFKUSxlQUFlOztlQUtwQixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUNwQyxnQkFBSSxVQUFVLEdBQUcsQ0FBQztnQkFDZCxVQUFVLEdBQUcsQ0FBQztnQkFDZCxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ2IsbUJBQU8sQ0FDRixFQUFFLENBQUMsWUFBWSxFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQ3JCLG9CQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLDBCQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztBQUMzQiwwQkFBVSxHQUFHLFVBQVUsQ0FBQztBQUN4QixvQkFBSSxHQUFHLENBQUMsQ0FBQzthQUNaLENBQUMsQ0FDRCxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQ3BCLG9CQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hDLG9CQUFJLFVBQVUsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO0FBQzdCLHdCQUFJLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDbkMsOEJBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUM5QixDQUFDO2FBQ0wsQ0FBQyxDQUNELEVBQUUsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFDLEVBQUs7QUFDbkIsb0JBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksVUFBVSxFQUFFO0FBQ3BDLHdCQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7QUFDVixrQ0FBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDdEIsTUFDSTtBQUNELGtDQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3ZCO0FBQ0Qsd0JBQUksR0FBRyxDQUFDLENBQUM7aUJBQ1o7QUFDRCxvQkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQywwQkFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDM0Isb0JBQUksR0FBRyxDQUFDLENBQUM7YUFDWixDQUFDLENBQUM7U0FDVjs7O1dBckNRLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBZixnQkFBZ0I7QUFDZCxhQURGLGdCQUFnQixHQUNaOzhCQURKLGdCQUFnQjs7QUFFckIsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUE7S0FDdEI7O2lCQUhRLGdCQUFnQjs7ZUFJckIsY0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUN6QixnQkFBSSxPQUFPO2dCQUNQLE9BQU8sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixTQUFTLEdBQUcsQ0FBQztnQkFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsbUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUc7QUFDL0Msb0JBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ25CLGdDQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEIsNkJBQVMsR0FBRyxDQUFDLENBQUM7QUFDZCx5QkFBSyxHQUFHLENBQUMsQ0FBQztBQUNWLDJCQUFPO2lCQUNWO0FBQ0Qsb0JBQUksS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRTtBQUMxRSwyQkFBTztpQkFDVjtBQUNELGlCQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIseUJBQVMsSUFBSSxNQUFNLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQixxQkFBSyxJQUFJLENBQUMsQ0FBQztBQUNYLDRCQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEIsdUJBQU8sR0FBRyxVQUFVLENBQUMsWUFBVTtBQUMzQix3QkFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtBQUN2QywrQkFBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztxQkFDdkQsTUFBTTtBQUNILCtCQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLEdBQUcsU0FBUyxHQUFDLEVBQUUsQ0FBQztxQkFDMUQ7QUFDRCw2QkFBUyxHQUFHLENBQUMsQ0FBQztBQUNkLHlCQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUNiLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFFVCxDQUFDLENBQUE7U0FDTDs7O1dBbENRLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQXZCLGdCQUFnQjtBQUNQLGFBRFQsZ0JBQWdCLEdBQ0o7Ozs4QkFEWixnQkFBZ0I7O0FBRWQsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsWUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZixZQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsUUFBUSxHQUFHLFlBQUksRUFBRSxDQUFDO0FBQ3ZCLFlBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7QUFDL0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7QUFDdkIsWUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDMUMsa0JBQUssWUFBWSxHQUFHLFVBQUMsTUFBTSxFQUFJO0FBQzNCLHVCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbkIsQ0FBQTtTQUNKLENBQUMsQ0FBQztLQUNOOztpQkFiQyxnQkFBZ0I7O2VBY1gsaUJBQUMsUUFBUSxFQUFDOzs7QUFDYixnQkFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUU7QUFDakMsdUJBQU87YUFDVjtBQUNELGdCQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixnQkFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNLEVBQUc7QUFDdEIsb0JBQUksT0FBSyxRQUFRLElBQUksUUFBUSxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7QUFDMUMsb0NBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkIsMEJBQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUMxQywyQkFBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE9BQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDbEc7YUFDSixDQUFDLENBQUE7U0FDTDs7O2VBcUJLLGlCQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDYixnQkFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQy9DLGdCQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FDL0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUM5QixzQkFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLEtBQUssSUFBSSxHQUFHLEVBQUUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDNUU7OztlQUNVLHFCQUFDLFFBQVEsRUFBQzs7O0FBQ2pCLHdCQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDdEMsZ0JBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsWUFBSTtBQUNyQyx1QkFBSyxhQUFhLENBQUMsT0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzNFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDVDs7O2VBQ00saUJBQUMsSUFBSSxFQUFFOzs7QUFDVixnQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLGdCQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNuRCxvQkFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1QjtBQUNELG1CQUFPLFVBQUMsT0FBTyxFQUFLO0FBQ2hCLHVCQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBQ3JDLHVCQUFLLFdBQVcsQ0FBQyxPQUFLLEtBQUssQ0FBQyxDQUFDO2FBQ2hDLENBQUE7U0FDSjs7O2VBQ1Msb0JBQUMsT0FBTyxFQUFFO0FBQ2hCLGdCQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztTQUNoQzs7O2VBQ0csY0FBQyxLQUFLLEVBQUU7OztBQUNSLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUM5QixnQkFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLFFBQVEsRUFBRTtBQUMzQixvQkFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7QUFDN0Isd0JBQUksVUFBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUN0Qyx3QkFBSSxVQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLHdCQUFJLEdBQUcsQ0FBQyxDQUFDO2lCQUNWLE1BQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO0FBQ2pCLHdCQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLHdCQUFJLFVBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckIsd0JBQUksVUFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDeEIsTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7QUFDbEIsd0JBQUksVUFBTyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDekMsTUFBTSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDdEMsd0JBQUksVUFBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDeEIsTUFBTTtBQUNILHdCQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUMsRUFBSztBQUN0Qix5QkFBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDekMsQ0FBQyxDQUFBO2lCQUNMO0FBQ0QsMEJBQVUsQ0FBQyxZQUFJO0FBQ1gsMkJBQUssYUFBYSxDQUFDLE9BQUssS0FBSyxDQUFDLE9BQUssS0FBSyxDQUFDLENBQ3hDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQzNCLDJCQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QiwyQkFBSyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNyQixFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ04sdUJBQU87YUFDVjtBQUNELGdCQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtBQUMzQixvQkFBSSxHQUFHLENBQUMsQ0FBQzthQUNaLE1BQU0sSUFBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFO0FBQ2hCLG9CQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ2hDO0FBQ0QsZ0JBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1NBQ3JCOzs7ZUFDWSx1QkFBQyxLQUFLLEVBQUU7OztBQUNqQixnQkFBSSxPQUFPLEdBQUcsU0FBVixPQUFPLENBQUksQ0FBQyxFQUFLO0FBQ2pCLHVCQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwQixDQUFBO0FBQ0QsbUJBQU8sT0FBTyxDQUFDO1NBQ2xCOzs7ZUFDUyxvQkFBQyxPQUFPLEVBQUU7QUFDaEIsZ0JBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBQ3hCLGdCQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUMzQjs7O2FBMUZpQixhQUFDLEdBQUcsRUFBQztBQUNuQixnQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLLEVBQUc7QUFDdkMsb0JBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNsQyxvQkFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7QUFDeEMsb0JBQUksUUFBUSxDQUFDLFNBQVMsRUFBRTtBQUNwQiw0QkFBUSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNqRDtBQUNELHVCQUFPO0FBQ0gsd0JBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3hDLHlCQUFLLEVBQUUsS0FBSztpQkFDZixDQUFDO2FBQ0wsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUc7QUFDcEIsb0JBQUksR0FBRyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ3ZCLHVCQUFHLEdBQUcsS0FBSyxDQUFBO2lCQUNkO0FBQ0QsdUJBQU8sR0FBRyxDQUFDO2FBQ2QsRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDbkMsZ0JBQUksQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO0FBQzNCLGdCQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM3Qjs7O2VBd0VhLG1CQUFVOzhDQUFOLElBQUk7QUFBSixvQkFBSTs7O0FBQ2xCLDRCQUFnQixDQUFDLFFBQVEsb0JBQU8sZ0JBQWdCLGdCQUFJLElBQUksS0FBQyxDQUFDO0FBQzFELG1CQUFPLGdCQUFnQixDQUFDLFFBQVEsQ0FBQztTQUNwQzs7O1dBekhDLGdCQUFnQjs7O0lBMkhULFVBQVU7QUFDUixhQURGLFVBQVUsR0FDTDs4QkFETCxVQUFVOztBQUVmLFlBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ3BCLFlBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxDQUFDO0FBQzVCLFlBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0tBQzlDOztpQkFMUSxVQUFVOztlQU1mLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFO0FBQ3BDLHNCQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN4Qzs7O1dBUlEsVUFBVTs7Ozs7SUFVVixhQUFhOzs7O0FBR1gsYUFIRixhQUFhLENBR1YsY0FBYyxFQUFFOzhCQUhuQixhQUFhOztBQUlsQixZQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQTtBQUNwQyxZQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2RCxZQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUM3QixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLENBQUMsT0FBTyxDQUFDO0tBQ2hCOztpQkFUUSxhQUFhOztlQVVmLGlCQUFDLElBQUksRUFBRTtBQUNWLGdCQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3ZDOzs7ZUFDRyxjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTs7O0FBQ3BDLGdCQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixzQkFBVSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUc7QUFDbEMsb0JBQUksQ0FBQyxPQUFPLEVBQUU7QUFDViwyQkFBSyxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQTtpQkFDaEMsTUFBTTtBQUNILDJCQUFLLGNBQWMsQ0FBQyxRQUFRLENBQUM7QUFDekIsNEJBQUksRUFBRSxPQUFLLE9BQU8sQ0FBQyxVQUFVO3FCQUNoQyxFQUFFO0FBQ0MsNEJBQUksRUFBRSxHQUFHO3FCQUNaLENBQUMsQ0FBQTtpQkFDTDthQUNKLENBQUMsQ0FBQztBQUNILG1CQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFJO0FBQ3JCLDRCQUFZLENBQUMsT0FBSyxPQUFPLENBQUMsQ0FBQztBQUMzQix1QkFBSyxPQUFPLEdBQUcsVUFBVSxDQUFDLFlBQUk7QUFDM0IsOEJBQVUsQ0FBQyxjQUFjLEdBQUcsT0FBSyxPQUFPLENBQUMsVUFBVSxDQUFDO2lCQUN0RCxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ1QsQ0FBQyxDQUFDO1NBQ047OztXQWhDUSxhQUFhOzs7OztJQW1DYixhQUFhOzs7QUFFWCxhQUZGLGFBQWEsQ0FFVixRQUFRLEVBQUU7OEJBRmIsYUFBYTs7QUFHbEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsWUFBSSxDQUFDLE9BQU8sR0FBRyxhQUFhLENBQUM7QUFDN0IsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7S0FDdkI7O2lCQU5RLGFBQWE7O2VBT2xCLGNBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFOzs7QUFDckMsc0JBQVUsQ0FBQyxVQUFVLENBQUMsVUFBQyxHQUFHLEVBQUc7QUFDekIsdUJBQUssUUFBUSxDQUFDLFlBQUk7QUFDZCwwQkFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsR0FBQyxHQUFHLEdBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FBQSxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuRCxDQUFDLENBQUE7YUFDTCxDQUFDLENBQUE7U0FDTDs7O1dBYlEsYUFBYTs7Ozs7SUFlYixVQUFVOzs7QUFFUixhQUZGLFVBQVUsQ0FFUCxPQUFPLEVBQUU7OEJBRlosVUFBVTs7QUFHZixZQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsQ0FBQztBQUM3QixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUNwQixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDeEMsWUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDaEIsWUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNoQjs7aUJBUlEsVUFBVTs7ZUFTUixxQkFBQyxLQUFLLEVBQUU7QUFDZixnQkFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoQyxtQkFBTztBQUNILDBCQUFVLEVBQUUsT0FBTyxDQUFDLFVBQVU7QUFDOUIsc0JBQU0sRUFBRSxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUMsQ0FBQztBQUNsRCwyQkFBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2FBQ25DLENBQUM7U0FDTDs7O2VBQ0csY0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7OztBQUNwQyxnQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzVDLGdCQUFJLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDO0FBQzdCLG9CQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDdkIsd0JBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztBQUNqQywyQkFBVyxFQUFFLENBQUMsVUFBUyxLQUFLLEVBQUU7QUFDMUIsMkJBQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDbEMsQ0FBQSxDQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO2FBQ3ZCLENBQUMsQ0FBQztBQUNILGtCQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFlBQUk7QUFDbEMsNEJBQVksQ0FBQyxPQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLHVCQUFLLE9BQU8sR0FBRyxVQUFVLENBQUMsWUFBSTtBQUMzQiwyQkFBTyxDQUFDLE9BQUssV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ25DLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDVixDQUFDLENBQUM7U0FDTjs7O1dBaENRLFVBQVU7Ozs7O0lBa0NWLGFBQWE7Y0FBYixhQUFhOzthQUFiLGFBQWE7OEJBQWIsYUFBYTs7bUNBQWIsYUFBYTs7O2lCQUFiLGFBQWE7O2VBQ1gscUJBQUMsS0FBSyxFQUFFO0FBQ2YsZ0JBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFO0FBQ2pDLGtEQUhDLGFBQWEsNkNBR1csS0FBSyxFQUFFO2FBQ25DO0FBQ0QsZ0JBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsZ0JBQUksUUFBUSxHQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN2QyxnQkFBSSxRQUFRLEdBQUUsUUFBUSxDQUNqQixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdEIsbUJBQU87QUFDSCx3QkFBUSxFQUFFLFFBQVE7QUFDbEIsMEJBQVUsRUFBRSxDQUFDLFFBQVEsR0FBRSxDQUFDLEdBQ3BCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVU7QUFDL0Msc0JBQU0sRUFBRSxDQUFDLFFBQVEsR0FBRSxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUMsQ0FBQyxHQUN6RCxRQUFRLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsUUFBUSxHQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBQyxDQUFDLEdBQ2pFLE9BQU8sQ0FBQyxXQUFXO0FBQzFCLDJCQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVc7QUFDaEMseUJBQVMsRUFBRSxtQkFBQyxLQUFLLEVBQUc7QUFDaEIsMkJBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUM3RSx3QkFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRTtBQUMzQywrQkFBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7cUJBQ3JDLE1BQU07QUFDSCwrQkFBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7cUJBQ2xDO2lCQUNKO2FBQ0osQ0FBQTtTQUNKOzs7V0EzQlEsYUFBYTtHQUFTLFVBQVU7Ozs7SUE2QmhDLGVBQWU7Y0FBZixlQUFlOzthQUFmLGVBQWU7OEJBQWYsZUFBZTs7bUNBQWYsZUFBZTs7O2lCQUFmLGVBQWU7O2VBRWIscUJBQUMsS0FBSyxFQUFFO0FBQ2YsZ0JBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxFQUFFO0FBQ2pDLGtEQUpDLGVBQWUsNkNBSVMsS0FBSyxFQUFFO2FBQ25DO0FBQ0QsZ0JBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDaEMsbUJBQU87QUFDSCwwQkFBVSxFQUFFLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFdBQVc7QUFDcEQsc0JBQU0sRUFBRSxPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUMsQ0FBQztBQUNsRCwyQkFBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO2FBQ25DLENBQUE7U0FDSjs7O1dBWlEsZUFBZTtHQUFTLFVBQVU7Ozs7SUFlbEMsY0FBYztBQUNaLGFBREYsY0FBYyxHQUNUOzhCQURMLGNBQWM7O0FBRW5CLFlBQUksQ0FBQyxPQUFPLEdBQUcsYUFBYSxDQUFDO0FBQzdCLFlBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0tBQ3ZCOztpQkFKUSxjQUFjOztlQUtuQixjQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUNwQyxnQkFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtBQUM3RCxtQkFBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO1NBQ2hEOzs7V0FSUSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O0lDclFkLGNBQWM7QUFFWixhQUZGLGNBQWMsQ0FFWCxHQUFHLEVBQUM7OEJBRlAsY0FBYzs7QUFHbkIsWUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0FBQ2IsWUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDO0FBQ3pDLFlBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUM7QUFDcEMsWUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUMzQixZQUFJLENBQUMsUUFBUSxHQUFHLFVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFJO0FBQzNCLGdCQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsR0FBQyxDQUFDLENBQUEsR0FBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekMsbUJBQU8sQ0FBQyxDQUFDLEdBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFFLENBQUMsQ0FBQSxHQUFFLENBQUMsR0FBQyxDQUFDLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQSxBQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hDLENBQUM7QUFDRixZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQztBQUM5QyxZQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLElBQUksWUFBSSxFQUFFLENBQUM7S0FDMUM7O2lCQWJRLGNBQWM7O2VBY04sMEJBQUMsUUFBUSxFQUFFO0FBQ3hCLG1CQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQ3JCLG1CQUFPLElBQUksY0FBYyxDQUFDO0FBQ3RCLHdCQUFRLEVBQUUsUUFBUTthQUNyQixDQUFDLENBQUM7U0FDTjs7O2VBQ1Esa0JBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRTs7O0FBQ3JCLG1CQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2Ysb0JBQVEsR0FBRyxRQUFRLElBQUksRUFBRSxDQUFDO0FBQzFCLGdCQUFJLElBQUksR0FBRyxJQUFJO2dCQUNYLENBQUMsR0FBRyxDQUFDO2dCQUNMLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMvQyx5QkFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNuQyxnQkFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsWUFBSTtBQUNsQyxpQkFBQyxJQUFHLE1BQUssSUFBSSxDQUFDO0FBQ2Qsb0JBQUksQ0FBQyxJQUFJLE1BQUssUUFBUSxFQUFFO0FBQ3BCLGlDQUFhLENBQUMsTUFBSyxjQUFjLENBQUMsQ0FBQztBQUNuQywwQkFBSyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEIsMkJBQU87aUJBQ1Y7QUFDRCxvQkFBSSxPQUFPLEdBQUcsTUFBSyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBSyxRQUFRLENBQUMsQ0FBQztBQUNwRCxzQkFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFLO0FBQ3RDLHdCQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsNEJBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsT0FBTyxJQUFFLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUEsQUFBQyxDQUFDO2lCQUMvRCxDQUFDLENBQUM7QUFDSCxzQkFBSyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDM0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7OztXQXpDUSxjQUFjOzs7O0FBMEMxQixDQUFDOzs7Ozs7Ozs7Ozs7OztBQ3ZDSyxTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUU7O0FBRTlCLFFBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRWxDLFdBQU87QUFDSCxpQkFBUyxFQUFFLFNBQVM7QUFDcEIsa0JBQVUsRUFBRSxVQUFVO0FBQ3RCLGVBQU8sRUFBRSxPQUFPO0FBQ2hCLGdCQUFRLEVBQUUsUUFBUTtBQUNsQixlQUFPLEVBQUUsT0FBTztLQUNuQixDQUFDOztBQUVGLGFBQVMsU0FBUyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7O0FBRXBDLHFCQUFhLEdBQUcscUJBQXFCLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRXJELFlBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRTs7QUFFbEMseUJBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFlBQU0sRUFBRSxDQUFDO1NBQzlDOztBQUVELFlBQUksaUJBQWlCLEdBQUcsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7OztBQU14RSxpQkFBUyxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFlBQVk7QUFDdEQsbUJBQU8sWUFBWTtBQUNmLGlDQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7O0FBRXpDLG9CQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFO0FBQzlCLDJCQUFPLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDbEQ7YUFDSixDQUFDO1NBQ0wsQ0FBQyxDQUFDOztBQUVILFlBQUksWUFBWSxHQUFHLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDOztBQUV0RCxXQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNsQyxlQUFPLElBQUksQ0FBQztLQUNmOztBQUVELGFBQVMsVUFBVSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUU7QUFDcEMsV0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDbkMsZUFBTyxJQUFJLENBQUM7S0FDZjs7QUFFRCxhQUFTLE9BQU8sQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFO0FBQ2pDLFdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQ2hDLGVBQU8sSUFBSSxDQUFDO0tBQ2Y7O0FBRUQsYUFBUyxRQUFRLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRTtBQUNuQyxXQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNsQyxlQUFPLElBQUksQ0FBQztLQUNmOztBQUVELGFBQVMsT0FBTyxDQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7QUFDbEMscUJBQWEsR0FBRyxxQkFBcUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNyRCxZQUFJLFlBQVksR0FBRyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN0RCxXQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztBQUNoQyxlQUFPLElBQUksQ0FBQztLQUNmOzs7Ozs7Ozs7O0FBVUQsYUFBUyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUU7QUFDbEMsWUFBSSxhQUFhLENBQUM7O0FBRWxCLFlBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUU7O0FBRTdCLGdCQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2hELHlCQUFhLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDeEMseUJBQWEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO1NBQ3BDLE1BQU07QUFDSCx5QkFBYSxHQUFHLEtBQUssQ0FBQztTQUN6Qjs7QUFFRCxlQUFPLGFBQWEsQ0FBQztLQUN4Qjs7Ozs7Ozs7Ozs7OztBQWFELGFBQVMsbUJBQW1CLENBQUMsYUFBYSxFQUFFOztBQUV4QyxZQUFJLElBQUksR0FBRyxhQUFhLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUN2QyxZQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7OztBQUdoQyxvQkFBWSxDQUFDLElBQUksQ0FBQyxZQUFhOzhDQUFULElBQUk7QUFBSixvQkFBSTs7OztBQUV0QixnQkFBSSxRQUFRLG9CQUFPLGFBQWEsZ0JBQUksSUFBSSxLQUFDLENBQUM7QUFDMUMsaUJBQUssSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFO0FBQ3RCLHdCQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDO0FBQ0QsbUJBQU8sUUFBUSxDQUFDO1NBQ25CLENBQUMsQ0FBQzs7QUFFSCxlQUFPLFlBQVksQ0FBQztLQUN2Qjs7Ozs7OztBQU9ELGFBQVMsY0FBYyxDQUFDLFFBQVEsRUFBRTtBQUM5QixlQUFPLFlBQVc7QUFDZCxtQkFBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMxQyxDQUFDO0tBQ0w7Ozs7Ozs7O0FBUUQsYUFBUyxTQUFTLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7QUFDN0MsY0FBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtLQUNwRDtDQUVKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBjbGFzcyBNZXN0b0NsaWNrRmFkZSB7XG4gICAgc3RhdGljIGdldCBUSU1FT1VUKCkge1xuICAgICAgICByZXR1cm4gMjAwO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IEZBREVfQ0xBU1MoKSB7XG4gICAgICAgIHJldHVybiAnZmFkZSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgfSwgTWVzdG9DbGlja0ZhZGUuVElNRU9VVCk7XG4gICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgIC5hZGRDbGFzcyhNZXN0b0NsaWNrRmFkZS5GQURFX0NMQVNTKVxuICAgICAgICAgICAgLmZpbmQoJ2EuZmFkZUFuaW1hdG9yX19hbmNvcicpXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgbGV0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhNZXN0b0NsaWNrRmFkZS5GQURFX0NMQVNTKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRmVlZGJhY2tGb3JtQ29udHJvbGxlciB7IFxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGZlZWRiYWNrUmVzb3VyY2UpIHtcbiAgICAgICAgdGhpcy5mZWVkYmFja1Jlc291cmNlID0gZmVlZGJhY2tSZXNvdXJjZTtcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xuICAgICAgICB0aGlzLmVycm9ycyA9ICcnO1xuICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG4gICAgc3VibWl0KGZvcm0pe1xuICAgICAgICBpZiAoZm9ybS4kaW52YWxpZCkge1xuICAgICAgICAgICAgZm9ybS4kc2V0RGlydHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBmZWVkYmFjayA9IG5ldyB0aGlzLmZlZWRiYWNrUmVzb3VyY2UodGhpcy5mb3JtRGF0YSk7XG4gICAgICAgICAgICBmZWVkYmFjay4kc2F2ZSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE1lc3RvRmVlZGJhY2tUb2dnbGUge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcihwb3BVcFNlcml2aWNlKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZSA9IHBvcFVwU2VyaXZpY2U7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gdGhpcy5wb3BVcFNlcml2aWNlXG4gICAgICAgICAgICAuYWRkVG9nZ2xlcihhdHRycy5tZXN0b0ZlZWRiYWNrVG9nZ2xlKTtcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBoYW5kbGVyLmJpbmQodGhpcy5wb3BVcFNlcml2aWNlKSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lc3RvRmVlZGJhY2tDb250bmllciB7XG4gICAgc3RhdGljIGdldCBUT0dHTEVfQ0xBU1MoKSB7XG4gICAgICAgIHJldHVybiAnZml4ZWRQb3BVcCc7IFxuICAgIH1cblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcihwb3BVcFNlcml2aWNlKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZSA9IHBvcFVwU2VyaXZpY2U7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gKG5hbWUpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudG9nZ2xlQ2xhc3MoTWVzdG9GZWVkYmFja0NvbnRuaWVyLlRPR0dMRV9DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlXG4gICAgICAgICAgICAuYWRkQ29udGFuaWVyKGF0dHJzLm1lc3RvRmVlZGJhY2tDb250YW5pZXIsIGhhbmRsZXIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrQ2xvc2Uge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcihwb3BVcFNlcml2aWNlKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZSA9IHBvcFVwU2VyaXZpY2U7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gdGhpcy5wb3BVcFNlcml2aWNlLmNsb3NlKGF0dHJzLm1lc3RvRmVlZGJhY2tDbG9zZSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHRoaXMucG9wVXBTZXJpdmljZSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrSXRlbSB7XG4gICAgc3RhdGljIGdldCBUT0dHTEVfQ0xBU1MoKSB7XG4gICAgICAgIHJldHVybiAnYWN0aXZlJztcbiAgICB9XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICB0b2dnbGUoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnRvZ2dsZUNsYXNzKE1lc3RvRmVlZGJhY2tJdGVtLlRPR0dMRV9DTEFTUyk7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZEl0ZW0oYXR0cnMubWVzdG9GZWVkYmFja0l0ZW0sIHRoaXMudG9nZ2xlLmJpbmQodGhpcywgZWxlbWVudCkpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGZWVkYmFja1Jlc291cmNlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHJlc291cmNlKSB7XG4gICAgICAgIHJldHVybiAkcmVzb3VyY2UoQ09ORklHLnVybHMuZmVlZGJhY2tGb3JtKTtcbiAgICB9XG59XG4iLCJjbGFzcyBQb3BVcCB7XG4gICAgY29uc3RydWN0b3IoaXRlbUhhbmRsZXIsIG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLml0ZW1IYW5kbGVyID0gaXRlbUhhbmRsZXI7XG4gICAgfVxuICAgIHRvZ2dsZUl0ZW0oKSB7XG4gICAgICAgIGlmIChQb3BVcC5jb250YW5pZXJIYW5kbGVyW3RoaXMubmFtZV0pIHtcbiAgICAgICAgICAgIFBvcFVwLmNvbnRhbmllckhhbmRsZXJbdGhpcy5uYW1lXSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbUhhbmRsZXIoKTtcbiAgICB9XG59XG5Qb3BVcC5jb250YW5pZXJIYW5kbGVyID0ge307XG5cbmV4cG9ydCBjbGFzcyBQb3BVcFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvcFVwcyA9IHt9O1xuICAgIH1cbiAgICBhZGRJdGVtKGl0ZW1OYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMucG9wVXBzW2l0ZW1OYW1lXSA9IG5ldyBQb3BVcChoYW5kbGVyLCBpdGVtTmFtZSk7XG4gICAgfVxuICAgIGNsb3NlKGl0ZW1OYW1lKSB7XG4gICAgICAgIGlmICghaXRlbU5hbWUpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucG9wVXBzKS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BVcHNba2V5XS50b2dnbGVJdGVtKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcFVwID0gdGhpcy5wb3BVcHNbaXRlbU5hbWVdXG4gICAgICAgICAgICBpZiAocG9wVXApIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcG9wVXAudG9nZ2xlSXRlbSgpXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZENvbnRhbmllcihwb3BVcE5hbWUsIGhhbmRlciwgaW5kZXgpIHtcbiAgICAgICAgUG9wVXAuY29udGFuaWVySGFuZGxlcltwb3BVcE5hbWVdID0gaGFuZGVyO1xuICAgIH1cbiAgICBhZGRUb2dnbGVyKHBvcFVwTmFtZSkge1xuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIChbdGhpcy5wb3BVcHNbcG9wVXBOYW1lXV0gfHwgW10pXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHBvcFVwKT0+e1xuICAgICAgICAgICAgICAgICAgICBwb3BVcC50b2dnbGVJdGVtKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAnLi91dGlscy9yZWdpc3Rlcic7XG5cbmltcG9ydCB7IFxuICAgIFNsaWRlck1haW4sXG4gICAgU2xpZGVyQ29udGVudCxcbiAgICBTbGlkZXJDb250cm9sbCxcbiAgICBTbGlkZXJDb3VudGVyLFxuICAgIFNsaWRlckl0ZW0sXG4gICAgU21hbGxTbGlkZXJJdGVtLFxuICAgIFVuaVNsaWRlckl0ZW1cbn0gZnJvbSAnLi90b3BOZXdzL2RpcmVjdGl2ZXMvc2xpZGVyJztcbmltcG9ydCB7IEVhc2luZ0FuaW1hdG9yIH0gZnJvbSAnLi90b3BOZXdzL3NlcnZpY2VzL2Vhc2luZ0FuaW1hdG9yJztcbmltcG9ydCB7IERyYWdnQ29udHJvbGxlciB9IGZyb20gJy4vdG9wTmV3cy9kaXJlY3RpdmVzL2RyYWdnQ29udHJvbGxlcic7XG5pbXBvcnQgeyBIb3Jpem9udGFsU2Nyb2xsIH0gZnJvbSAnLi90b3BOZXdzL2RpcmVjdGl2ZXMvaG9yaXpvbnRhbFNjcm9sbCc7XG5cbmltcG9ydCB7IE1lc3RvQ2xpY2tGYWRlIH0gZnJvbSAnLi9jbGlja0ZhZGUvZGlyZWN0aXZlcy9jbGlja0ZhZGUnO1xuXG5pbXBvcnQgeyBQb3BVcFNlcnZpY2UgfSBmcm9tICcuL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZSc7XG5pbXBvcnQgeyBGZWVkYmFja1Jlc291cmNlIH0gZnJvbSAnLi9mZWVkQmFjay9zZXJ2aWNlcy9mZWVkYmFja1Jlc291cmNlJztcbmltcG9ydCB7IEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIgfSBmcm9tICcuL2ZlZWRCYWNrL2NvbnRyb2xsZXJzL0Zvcm1Db250cm9sbGVyJztcbmltcG9ydCB7IFxuICAgIE1lc3RvRmVlZGJhY2tJdGVtLFxuICAgIE1lc3RvRmVlZGJhY2tUb2dnbGUsXG4gICAgTWVzdG9GZWVkYmFja0Nsb3NlLFxuICAgIE1lc3RvRmVlZGJhY2tDb250bmllclxufSBmcm9tICcuL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2snO1xuXG5pbXBvcnQgeyBcbiAgICBTVkdMb2dvSG92ZXIsXG4gICAgU1ZHTG9nb0l0ZW0sXG4gICAgU1ZHTG9nb0NvbnRhbmllcixcbiAgICBTVkdMb2dvQmFja2dyb3VuZFxufSBmcm9tICcuL21haW5QYWdlL2RpcmVjdGl2ZXMvbG9nb0RpcmVjdGl2ZXMnO1xuXG5pbXBvcnQgeyBTaG93TW92aWVDb250cm9sbGVyIH0gZnJvbSAnLi9tb3ZpZVNob3cvY29udHJvbGxlcnMvcGxheVNob3cuanMnXG5cbmltcG9ydCB7IFxuICAgIE1lc3RvQ3VzdG9tU2VsZWN0LFxuICAgIE1lc3RvQ3VzdG9tU2VsZWN0SXRlbSxcbiAgICBNZXN0b0N1c3RvbVNlbGVjdFBsYWNlaG9sZGVyXG59IGZyb20gJy4vbW92aWVTaG93L2RpcmVjdGl2ZXMvY3VzdG9tU2VsZWN0LmpzJ1xuXG5pbXBvcnQgeyBTaG93c0ZpbHRlckNvbnRyb2xsZXIgfSBmcm9tICcuL21vdmllU2hvdy9jb250cm9sbGVycy9zaG93c0ZpbHRlckNvbnRyb2xsZXIuanMnIFxuaW1wb3J0IHsgU2hvd0RldGFpbCB9IGZyb20gJy4vbW92aWVTaG93L2NvbnRyb2xsZXJzL3Nob3dEZXRhaWwuanMnIFxuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ21lc3RvJywgW1xuICAgICduZ1Jlc291cmNlJyxcbiAgICAnZHVTY3JvbGwnLFxuICAgICd5b3V0dWJlLWVtYmVkJ1xuXSk7XG5cbnJlZ2lzdGVyKCdtZXN0bycpXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyTWFpbicsIFNsaWRlck1haW4pXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyQ29udHJvbGwnLCBTbGlkZXJDb250cm9sbClcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJDb250ZW50JywgU2xpZGVyQ29udGVudClcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJJdGVtJywgU2xpZGVySXRlbSlcbiAgICAuZGlyZWN0aXZlKCdzbWFsbFNsaWRlckl0ZW0nLCBTbWFsbFNsaWRlckl0ZW0pXG4gICAgLmRpcmVjdGl2ZSgndW5pU2xpZGVySXRlbScsIFVuaVNsaWRlckl0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyQ291bnRlcicsIFNsaWRlckNvdW50ZXIpXG4gICAgLmRpcmVjdGl2ZSgnZHJhZ2dDb250cm9sbGVyJywgRHJhZ2dDb250cm9sbGVyKVxuICAgIC5kaXJlY3RpdmUoJ2hvcml6b250YWxTY3JvbGwnLCBIb3Jpem9udGFsU2Nyb2xsKVxuICAgIC5mYWN0b3J5KCdlYXNpbmdBbmltYXRvcicsIEVhc2luZ0FuaW1hdG9yKVxuXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja0l0ZW0nLCBNZXN0b0ZlZWRiYWNrSXRlbSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrVG9nZ2xlJywgTWVzdG9GZWVkYmFja1RvZ2dsZSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrQ2xvc2UnLCBNZXN0b0ZlZWRiYWNrQ2xvc2UpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja0NvbnRhbmllcicsIE1lc3RvRmVlZGJhY2tDb250bmllcilcbiAgICAuc2VydmljZSgncG9wVXBTZXJpdmljZScsIFBvcFVwU2VydmljZSlcblxuICAgIC5zZXJ2aWNlKCdmZWVkYmFja1Jlc291cmNlJywgRmVlZGJhY2tSZXNvdXJjZSlcbiAgICAuY29udHJvbGxlcignZmVlZGJhY2tGb3JtQ29udHJvbGxlcicsIEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIpXG5cbiAgICAuZGlyZWN0aXZlKCdtZXN0b0NsaWNrRmFkZScsIE1lc3RvQ2xpY2tGYWRlKVxuXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9Mb2dvSG92ZXInLCBTVkdMb2dvSG92ZXIpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9TdmdJdGVtJywgU1ZHTG9nb0l0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9TdmdMb2dvJywgU1ZHTG9nb0NvbnRhbmllcilcbiAgICAuZGlyZWN0aXZlKCdtZXN0b1N2Z0JhY2tncm91bmQnLCBTVkdMb2dvQmFja2dyb3VuZClcblxuICAgIC5jb250cm9sbGVyKCdzaG93TW92aWVDb250cm9sbGVyJywgU2hvd01vdmllQ29udHJvbGxlcilcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvQ3VzdG9tU2VsZWN0JywgTWVzdG9DdXN0b21TZWxlY3QpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9DdXN0b21TZWxlY3RJdGVtJywgTWVzdG9DdXN0b21TZWxlY3RJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvQ3VzdG9tU2VsZWN0UGxhY2Vob2xkZXInLCBNZXN0b0N1c3RvbVNlbGVjdFBsYWNlaG9sZGVyKVxuXG4gICAgLmNvbnRyb2xsZXIoJ3Nob3dzRmlsdGVyQ29udHJvbGxlcicsIFNob3dzRmlsdGVyQ29udHJvbGxlcilcbiAgICAuY29udHJvbGxlcignc2hvd0RldGFpbCcsIFNob3dEZXRhaWwpXG5cbmFwcC5jb25maWcoKCRyZXNvdXJjZVByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyKT0+IHtcbiAgICAkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ2NzcmZ0b2tlbic7XG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9ICdYLUNTUkZUb2tlbic7XG4gICAgJHJlc291cmNlUHJvdmlkZXIuZGVmYXVsdHMuc3RyaXBUcmFpbGluZ1NsYXNoZXMgPSBmYWxzZTtcbn0pXG5hbmd1bGFyXG4gICAgLmVsZW1lbnQoZG9jdW1lbnQpXG4gICAgLnJlYWR5KGFuZ3VsYXIuYm9vdHN0cmFwLmJpbmQoYW5ndWxhciwgZG9jdW1lbnQsIFsnbWVzdG8nXSkpO1xuIiwiY2xhc3MgTG9nb0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLml0ZW1zID0ge307XG4gICAgICAgIHRoaXMuaW1nVXJscyA9IHt9O1xuICAgIH1cbiAgICBhZGRJbWFnZShuYW1lLCB1cmwpIHtcbiAgICAgICAgdGhpcy5pbWdVcmxzW25hbWVdID0gdXJsO1xuICAgIH1cbiAgICBhZGRJdGVtKG5hbWUsIGluZm8pIHtcbiAgICAgICAgdGhpcy5pdGVtc1tuYW1lXSA9IGluZm87XG4gICAgfVxuICAgIGFkZEJhY2tncm91bmQoc2hvdywgaGlkZSl7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHtcbiAgICAgICAgICAgIHNob3c6IHNob3csXG4gICAgICAgICAgICBoaWRlOiBoaWRlXG4gICAgICAgIH1cbiAgICB9XG4gICAgdW5ob3ZlcigpIHtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5pdGVtcykuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgdGhpcy5pdGVtc1trZXldLmRpc2FibGVkKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuaGlkZSgpO1xuICAgIH1cbiAgICBob3ZlcihuYW1lKSB7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZC5zaG93KHRoaXMuaW1nVXJsc1tuYW1lXSk7XG4gICAgICAgIHRoaXMuaXRlbXNbbmFtZV0uYWN0aXZlKCk7XG4gICAgfVxuICAgIGNhbGwobmFtZSkge1xuICAgICAgICB0aGlzLml0ZW1zW25hbWVdLmNsaWNrKCk7XG4gICAgfVxuICAgIHN0YXRpYyBmYWN0b3J5KC4uLmFyZ3MpIHtcbiAgICAgICAgTG9nb0NvbnRyb2xsZXIuaW5zdGFuY2UgPSBuZXcgTG9nb0NvbnRyb2xsZXIoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiBMb2dvQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU1ZHTG9nb0NvbnRhbmllciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gTG9nb0NvbnRyb2xsZXIuZmFjdG9yeTtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU1ZHTG9nb0JhY2tncm91bmQge1xuICAgIHN0YXRpYyBnZXQgQUNUSVZFX0NMQVNTKCl7XG4gICAgICAgIHJldHVybiAnYWN0aXZlJztcbiAgICB9IFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXm1lc3RvU3ZnTG9nbyc7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuYWRkQmFja2dyb3VuZCgodXJsKT0+e1xuICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhTVkdMb2dvQmFja2dyb3VuZC5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgZWxlbWVudC5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnLCB1cmwgPyBgdXJsKCR7dXJsfSlgIDogJ25vbmUnKTtcbiAgICAgICAgfSwgKCk9PntcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29Ib3ZlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15tZXN0b1N2Z0xvZ28nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgICBlbGVtZW50Lm9uKCdtb3VzZWVudGVyJywgKCk9PntcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuaG92ZXIoYXR0cnMubWVzdG9Mb2dvSG92ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5vbignbW91c2VsZWF2ZScsICgpPT57XG4gICAgICAgICAgICBjb250cm9sbGVyLnVuaG92ZXIoYXR0cnMubWVzdG9Mb2dvSG92ZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci5jYWxsKGF0dHJzLm1lc3RvTG9nb0hvdmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29JdGVtIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXm1lc3RvU3ZnTG9nbyc7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjb250cm9sbGVyKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuYWRkSXRlbShhdHRycy5tZXN0b1N2Z0l0ZW0sIHtcbiAgICAgICAgICAgIGNsaWNrOiAoKT0+e1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXR0cnMuaHJlZjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhY3RpdmU6ICgpPT57XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhTVkdMb2dvQmFja2dyb3VuZC5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc2FibGVkOiAoKT0+e1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghYXR0cnMuaW1nVXJsKSByZXR1cm47XG5cbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XG4gICAgICAgICAgICBjb250cm9sbGVyLmFkZEltYWdlKGF0dHJzLm1lc3RvU3ZnSXRlbSwgYXR0cnMuaW1nVXJsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGltZy5zcmMgPSBhdHRycy5pbWdVcmw7XG4gICAgICAgIGlmKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGRJbWFnZShhdHRycy5tZXN0b1N2Z0l0ZW0sIGF0dHJzLmltZ1VybCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjbGFzcyBTaG93TW92aWVDb250cm9sbGVyIHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICR0aW1lb3V0KXtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcbiAgICAgICAgdGhpcy52aWRlbyA9IHt9O1xuICAgICAgICAkc2NvcGUuJG9uKCd5b3V0dWJlLnBsYXllci5wbGF5aW5nJywgKCRldmVudCwgcGxheWVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlkZW9PYmogPSB0aGlzLmdldFZpZGVvT2JqKHBsYXllcik7XG4gICAgICAgICAgICB0aGlzLiR0aW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgIHZpZGVvT2JqLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgJHNjb3BlLiRvbigneW91dHViZS5wbGF5ZXIuZW5kZWQnLCAoJGV2ZW50LCBwbGF5ZXIpID0+IHtcbiAgICAgICAgICAgIGxldCB2aWRlb09iaiA9IHRoaXMuZ2V0VmlkZW9PYmoocGxheWVyKTtcbiAgICAgICAgICAgIHZpZGVvT2JqLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0VmlkZW9PYmoocGxheWVyKXtcbiAgICAgICAgbGV0IHZpZGVvSWQgPSBwbGF5ZXIuZ2V0VmlkZW9EYXRhKCkudmlkZW9faWQ7XG4gICAgICAgIGlmICghdGhpcy52aWRlb1t2aWRlb0lkXSkge1xuICAgICAgICAgICAgdGhpcy52aWRlb1t2aWRlb0lkXSA9IHtcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGxvYWQ6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmlkZW9bdmlkZW9JZF07XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY2xhc3MgU2hvd0RldGFpbCB7XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkd2luZG93KSB7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9ICR3aW5kb3c7XG4gICAgICAgIHRoaXMucGF0aEFycmF5ID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVxuICAgICAgICBpZiAodGhpcy5wYXRoQXJyYXkubGVuZ3RoID4gMSl7XG4gICAgICAgICAgICB0aGlzLnBhdGhBcnJheSA9IHRoaXMucGF0aEFycmF5WzFdLnNwbGl0KFwiI1wiKVswXVxuICAgICAgICAgICAgICAgIC5zcGxpdCgnJicpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgoZGljdCwgdmFsKT0+e1xuICAgICAgICAgICAgICAgICAgICBsZXQgW2tleSwgdmFsdWVdID0gdmFsLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGljdFtrZXldID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGljdDtcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgICAgICAkc2NvcGUuc2VsZWN0RGF0ZSA9IHRoaXMucGF0aEFycmF5LmRhdGU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgU2hvd3NGaWx0ZXJDb250cm9sbGVyIHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICR3aW5kb3cpIHtcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICAgICAgdGhpcy5wYXRoQXJyYXkgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzBdLnNwbGl0KCc/JylcbiAgICAgICAgdGhpcy5zZWxlY3QgPSB0aGlzLnBhdGhBcnJheS5sZW5ndGggPiAxPyB0aGlzLnBhdGhBcnJheVsxXVxuICAgICAgICAgICAgLnNwbGl0KCcmJylcbiAgICAgICAgICAgIC5yZWR1Y2UoKGRpY3QsIHZhbCk9PntcbiAgICAgICAgICAgICAgICBsZXQgW2tleSwgdmFsdWVdID0gdmFsLnNwbGl0KCc9Jyk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpY3Rba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZGljdDtcbiAgICAgICAgICAgIH0sIHt9KSA6IHt9O1xuICAgIH1cbiAgICBjaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoKClcbiAgICB9XG4gICAgc2VhcmNoKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3RoaXMucGF0aEFycmF5WzBdfT8ke2pRdWVyeS5wYXJhbSh0aGlzLnNlbGVjdCl9YDtcbiAgICB9XG59XG4iLCJjbGFzcyBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdmFyIHNldFBsYWNlaG9sZGVyID0gKHRleHQpPT57fTtcblxuICAgICAgICB0aGlzLm1vZGVscyA9IHt9O1xuICAgICAgICB0aGlzLnNldFBsYWNlaG9sZGVyID0gKGZ1KT0+e1xuICAgICAgICAgICAgc2V0UGxhY2Vob2xkZXIgPSBmdTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2VsZWN0T3B0aW9uID0gKHRleHQpPT57XG4gICAgICAgICAgICBzZXRQbGFjZWhvbGRlcih0ZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBhZGRNb2RlbChtb2RlbENhbGwpIHtcbiAgICBcdG1vZGVsQ2FsbCgocmVzdWx0KT0+e1xuICAgIFx0XHR0aGlzLm1vZGVsc1tyZXN1bHQudmFsdWVdID0gcmVzdWx0O1xuICAgIFx0fSk7XG4gICAgfVxuICAgIHNlbGVjdE1vZGVsKG1vZGVsVmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RPcHRpb24odGhpcy5tb2RlbHNbbW9kZWxWYWx1ZV0ubmFtZSlcbiAgICB9XG4gICAgc2V0VG9nZ2xlT3BlbiAoZnUpe1xuICAgICAgICB0aGlzLnRvZ2dsZU9wZW4gPSBmdTtcbiAgICB9XG4gICAgdG9nZ2xlT3Blbigpe307XG5cbiAgICBzdGF0aWMgZmFjdG9yeSguLi5hcmdzKSB7XG4gICAgICAgIE1lc3RvQ3VzdG9tU2VsZWN0Q29udHJvbGxlci5pbnN0YW5jZSA9IG5ldyBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lc3RvQ3VzdG9tU2VsZWN0IHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cblx0Y29uc3RydWN0b3IoJHRpbWVvdXQsICRkb2N1bWVudCl7XG4gICAgICAgIHRoaXMuJHRpbWVvdXQgPSAkdGltZW91dDtcblx0XHR0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBNZXN0b0N1c3RvbVNlbGVjdENvbnRyb2xsZXIuZmFjdG9yeTtcbiAgICAgICAgdGhpcy4kZG9jdW1lbnQgPSAkZG9jdW1lbnQ7XG4gICAgfVxuICAgIFxuICAgIGxpbmsgKCRzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIpe1xuICAgICAgICBsZXQgbW9kZWxWYWx1ZSA9ICRzY29wZS4kZXZhbChhdHRycy5tZXN0b0N1c3RvbVNlbGVjdCk7XG4gICAgICAgIGlmIChtb2RlbFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiR0aW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250cm9sbGVyLnNlbGVjdE1vZGVsKG1vZGVsVmFsdWUpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2xpY2tIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBhbmd1bGFyLmVsZW1lbnQoZS50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKCEodGFyZ2V0LmlzKGVsZW1lbnQpIHx8IHRhcmdldC5jbG9zZXN0KGVsZW1lbnQpLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnRyb2xsZXIuc2V0VG9nZ2xlT3BlbigoKT0+e1xuICAgICAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcygnb3BlbicpO1xuICAgICAgICAgICAgaWYoZWxlbWVudC5oYXNDbGFzcygnb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KHRoaXMuJGRvY3VtZW50KS5vbignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQodGhpcy4kZG9jdW1lbnQpLm9mZignY2xpY2snLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0N1c3RvbVNlbGVjdFBsYWNlaG9sZGVyIHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHR0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuXHRcdHRoaXMucmVxdWlyZSA9ICdebWVzdG9DdXN0b21TZWxlY3QnO1xuICAgIH1cbiAgICBsaW5rICgkc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdXN0b21TZWxlY3RDb250cm9sbGVyKSB7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGN1c3RvbVNlbGVjdENvbnRyb2xsZXIudG9nZ2xlT3BlbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgY3VzdG9tU2VsZWN0Q29udHJvbGxlci5zZXRQbGFjZWhvbGRlcigodGV4dCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC50ZXh0KHRleHQpO1xuICAgICAgICAgICAgZWxlbWVudC5wYXJlbnQoKS5yZW1vdmVDbGFzcygnb3BlbicpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9DdXN0b21TZWxlY3RJdGVtIHtcbiAgICAvKkBuZ0luamVjdCovXG5cdGNvbnN0cnVjdG9yKCR0aW1lb3V0KSB7XG5cdFx0dGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuXHRcdHRoaXMucmVzdHJpY3QgPSAnQSc7XG5cdFx0dGhpcy5yZXF1aXJlID0gJ15tZXN0b0N1c3RvbVNlbGVjdCc7XG4gICAgfVxuICAgIGxpbmsoJHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3VzdG9tU2VsZWN0Q29udHJvbGxlcil7XG4gICAgICAgIGN1c3RvbVNlbGVjdENvbnRyb2xsZXIuYWRkTW9kZWwoKGNhbGxCYWNrKT0+IHtcbiAgICAgICAgXHR0aGlzLiR0aW1lb3V0KCgpPT57XG5cdFx0XHRcdGNhbGxCYWNrKHtcblx0XHRcdFx0XHRuYW1lOiBlbGVtZW50LmZpbmQoJ2xhYmVsJykudGV4dCgpLFxuXHRcdFx0XHRcdHZhbHVlOiBlbGVtZW50LmZpbmQoJ2lucHV0JykudmFsKClcblx0XHRcdFx0fSlcbiAgICAgICAgXHR9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGN1c3RvbVNlbGVjdENvbnRyb2xsZXIuc2VsZWN0T3B0aW9uKGVsZW1lbnQudGV4dCgpKVxuICAgICAgICB9KVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBEcmFnZ0NvbnRyb2xsZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdeP3NsaWRlck1haW4nO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICB2YXIgZGVsdGFfaW5mbyA9IDAsXG4gICAgICAgICAgICBzdGFydF9pbmZvID0gMCxcbiAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAub24oJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgZGVsdGFfaW5mbyA9IHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgc3RhcnRfaW5mbyA9IGRlbHRhX2luZm87XG4gICAgICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhX2luZm8gIT0gdG91Y2guc2NyZWVuWCkge1xuICAgICAgICAgICAgICAgICAgICBzdW1tICs9IGRlbHRhX2luZm8gLSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgICAgICBkZWx0YV9pbmZvID0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzdW1tKSA+IDEwMCAmJiBzbGlkZXJNYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdW1tID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyTWFpbi5uZXh0KDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVyTWFpbi5uZXh0KC0xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBkZWx0YV9pbmZvID0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBIb3Jpem9udGFsU2Nyb2xsIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnXG4gICAgfVxuICAgIGxpbmsoJHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICB2YXIgdGltZW91dCxcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50WzBdLFxuICAgICAgICAgICAgZGVsdGFfc3VtID0gMCxcbiAgICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgSGFtc3RlcihlbGVtZW50KS53aGVlbCgoZSwgZGVsdGEsIGRlbHRhWCwgZGVsdGFZKT0+e1xuICAgICAgICAgICAgaWYgKGRlbHRhWCAmJiAhZGVsdGFZKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIGRlbHRhX3N1bSA9IDA7XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhdHRycy5ob3Jpem9udGFsU2Nyb2xsID4gMCAmJiBhdHRycy5ob3Jpem9udGFsU2Nyb2xsIDwgd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkZWx0YV9zdW0gKz0gZGVsdGFZKjggfHwgMDtcbiAgICAgICAgICAgIGNvdW50ICs9IDE7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmICgvTWFjaW50b3NoLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCAtIGRlbHRhX3N1bTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNjcm9sbExlZnQgPSBlbGVtZW50LnNjcm9sbExlZnQgLSBkZWx0YV9zdW0qMTU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbHRhX3N1bSA9IDA7XG4gICAgICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgICAgfSwgMSk7XG5cbiAgICAgICAgfSkgICAgXG4gICAgfVxufVxuIiwiY2xhc3MgU2xpZGVyQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5zbGlkZSA9IDA7XG4gICAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gMDtcbiAgICAgICAgdGhpcy5zZXRTbGlkZSA9ICgpPT57fTtcbiAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLnR5cGVOYW1lID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMucmVhZHkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFsbEl0ZW1SZWFkeSA9IChsZW5ndGgpPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldFR5cGUodHlwZU5hbWUpe1xuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCA8IDgwMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSB0eXBlTmFtZTtcbiAgICAgICAgdGhpcy5yZWFkeS50aGVuKChsZW5ndGgpPT57XG4gICAgICAgICAgICBpZiAodGhpcy50eXBlTmFtZSA9PSBcInN3aXRjaFwiICYmIGxlbmd0aCA+PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2goMCwgbGVuZ3RoKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zWzBdLmVsZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5pdGVtc1swXS5lbGVtLCB0aGlzLml0ZW1zWzBdLmVsZW0uY2xvbmVOb2RlKDEpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBzZXQgc2Nyb2xsUG9zaXRpb24odmFsKXtcbiAgICAgICAgdGhpcy5zbGlkZSA9IHRoaXMuaXRlbXMubWFwKChpdGVtLCBpbmRleCk9PntcbiAgICAgICAgICAgIGxldCBlbGVtSW5mbyA9IGl0ZW0uZ2V0RWxlbUluZm8oKTtcbiAgICAgICAgICAgIGxldCBjZW50ZXIgPSB2YWwgKyBlbGVtSW5mby5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIGlmIChlbGVtSW5mby5zZXRBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBlbGVtSW5mby5zZXRBY3RpdmUodmFsIC0gZWxlbUluZm8ub2Zmc2V0TGVmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRpZmY6IE1hdGguYWJzKGVsZW1JbmZvLmNlbnRlciAtIGNlbnRlciksXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KS5yZWR1Y2UoKG1pbiwgZGVsdGEpPT57XG4gICAgICAgICAgICBpZiAobWluLmRpZmYgPiBkZWx0YS5kaWZmKSB7XG4gICAgICAgICAgICAgICAgbWluID0gZGVsdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtaW47XG4gICAgICAgIH0sIHtkaWZmOiA5OTk5OSwgaW5kZXg6IC0xfSkuaW5kZXg7XG4gICAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gdmFsO1xuICAgICAgICB0aGlzLnNldFNsaWRlKHRoaXMuc2xpZGUpO1xuICAgIH1cbiAgICBzd2l0Y2goZnJvbSwgdG8pIHtcbiAgICAgICAgbGV0IHBhcmVudE5vZGUgPSB0aGlzLml0ZW1zWzBdLmVsZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgbGV0IG5vZGVMaXN0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgICAgICAgICAuY2FsbChwYXJlbnROb2RlLmNoaWxkcmVuKVxuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZSh0byA9PT0gbnVsbCA/IHRvIDogbm9kZUxpc3RbdG9dLCBub2RlTGlzdFtmcm9tXSk7XG4gICAgfVxuICAgIG1vdmVUb1NsaWRlKHBvc2l0aW9uKXtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubW92ZVRvU2xpZGVUaW1lb3V0KTtcbiAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIodGhpcy5pdGVtc1twb3NpdGlvbl0uZ2V0RWxlbUluZm8oKS5vZmZzZXRMZWZ0LCB0cnVlKTtcbiAgICAgICAgfSwgMCk7ICAgXG4gICAgfVxuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLml0ZW1zLnB1c2goaXRlbSkgLSAxO1xuICAgICAgICBpZiAoaW5kZXggPT0gaXRlbS5lbGVtLnBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdGhpcy5hbGxJdGVtUmVhZHkoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobmV3SW5mbykgPT4ge1xuICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0uZWxlbUluZm8gPSBuZXdJbmZvO1xuICAgICAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZSh0aGlzLnNsaWRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDb250ZW50KGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9XG4gICAgbmV4dChkZWx0YSkge1xuICAgICAgICBsZXQgbmV4dCA9IHRoaXMuc2xpZGUgKyBkZWx0YTtcbiAgICAgICAgaWYgKHRoaXMudHlwZU5hbWUgPT0gXCJzd2l0Y2hcIikge1xuICAgICAgICAgICAgaWYgKG5leHQgPT0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhpcy5zd2l0Y2goMCwgdGhpcy5pdGVtcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgdGhpcy5zd2l0Y2goMCwgdGhpcy5pdGVtcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgbmV4dCA9IDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHQgPCAwKSB7XG4gICAgICAgICAgICAgICAgbmV4dCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaChudWxsLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaChudWxsLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2goMCwgdGhpcy5pdGVtcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dCA+PSB0aGlzLml0ZW1zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaChudWxsLCAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUuZWxlbS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKGUuZWxlbSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIodGhpcy5pdGVtc1t0aGlzLnNsaWRlXVxuICAgICAgICAgICAgICAgIC5nZXRFbGVtSW5mbygpLm9mZnNldExlZnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZVRvU2xpZGUobmV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZSA9IG5leHQ7XG4gICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV4dCA+PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgbmV4dCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZihuZXh0IDwgMCkge1xuICAgICAgICAgICAgbmV4dCA9IHRoaXMuaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1vdmVUb1NsaWRlKG5leHQpO1xuICAgICAgICB0aGlzLnNsaWRlID0gbmV4dDtcbiAgICB9XG4gICAgYWRkQ29udHJvbGxlcihkZWx0YSkge1xuICAgICAgICBsZXQgaGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHQoZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgIH1cbiAgICBzZXRDb3VudGVyKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5zZXRTbGlkZSA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMuc2Nyb2xsUG9zaXRpb24gPSAwO1xuICAgIH1cbiAgICBzdGF0aWMgZmFjdG9yeSguLi5hcmdzKSB7XG4gICAgICAgIFNsaWRlckNvbnRyb2xsZXIuaW5zdGFuY2UgPSBuZXcgU2xpZGVyQ29udHJvbGxlciguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIFNsaWRlckNvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlck1haW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnc2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IFNsaWRlckNvbnRyb2xsZXIuZmFjdG9yeTtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgc2xpZGVyTWFpbi5zZXRUeXBlKGF0dHJzLnNsaWRlck1haW4pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb250ZW50IHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3RvcihlYXNpbmdBbmltYXRvcikge1xuICAgICAgICB0aGlzLmVhc2luZ0FuaW1hdG9yID0gZWFzaW5nQW5pbWF0b3JcbiAgICAgICAgdGhpcy5lYXNpbmdBbmltYXRvci5jYWxsQmFjayA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXnNsaWRlck1haW4nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnRpbWVvdXQ7XG4gICAgfVxuICAgIGFuaW1hdGUoaW5mbykge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdCA9IGluZm8ubGVmdDtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudFswXTtcbiAgICAgICAgc2xpZGVyTWFpbi5hZGRDb250ZW50KCh2YWwsIGFuaW1hdGUpPT57XG4gICAgICAgICAgICBpZiAoIWFuaW1hdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdCA9IHZhbFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVhc2luZ0FuaW1hdG9yLmVhc2VQcm9wKHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5lbGVtZW50LnNjcm9sbExlZnRcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHZhbFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50Lm9uKCdzY3JvbGwnLCAoKT0+e1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICBzbGlkZXJNYWluLnNjcm9sbFBvc2l0aW9uID0gdGhpcy5lbGVtZW50LnNjcm9sbExlZnQ7ICBcbiAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb3VudGVyIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXnNsaWRlck1haW4nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKCRzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgc2xpZGVyTWFpbi5zZXRDb3VudGVyKCh2YWwpPT57XG4gICAgICAgICAgICB0aGlzLiR0aW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgJHNjb3BlLnNlbGVjdGVkU2xpZGUgPSAoMWU0K3ZhbCsxK1wiXCIpLnNsaWNlKC0yKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNsaWRlckl0ZW0ge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93KSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9IGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KTtcbiAgICAgICAgdGhpcy5lbGVtcyA9IFtdO1xuICAgICAgICB0aGlzLnRpbWVvdXQ7XG4gICAgfVxuICAgIGdldEVsZW1JbmZvKGluZGV4KSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtc1tpbmRleF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZzZXRMZWZ0OiBlbGVtZW50Lm9mZnNldExlZnQsXG4gICAgICAgICAgICBjZW50ZXI6IGVsZW1lbnQub2Zmc2V0TGVmdCArIGVsZW1lbnQub2Zmc2V0V2lkdGgvMixcbiAgICAgICAgICAgIG9mZnNldFdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgIH07XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZWxlbXMucHVzaChlbGVtZW50WzBdKSAtIDE7XG4gICAgICAgIGxldCBoYW5kbGVyID0gc2xpZGVyTWFpbi5hZGRJdGVtKHtcbiAgICAgICAgICAgIGVsZW06IHRoaXMuZWxlbXNbaW5kZXhdLFxuICAgICAgICAgICAgZWxlbUluZm86IHRoaXMuZ2V0RWxlbUluZm8oaW5kZXgpLFxuICAgICAgICAgICAgZ2V0RWxlbUluZm86IChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1JbmZvKGluZGV4KTtcbiAgICAgICAgICAgIH0pLmJpbmQodGhpcywgaW5kZXgpXG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCk9PntcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgaGFuZGxlcih0aGlzLmdldEVsZW1JbmZvKGluZGV4KSk7IFxuICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVW5pU2xpZGVySXRlbSBleHRlbmRzIFNsaWRlckl0ZW0ge1xuICAgIGdldEVsZW1JbmZvKGluZGV4KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIDwgODAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0RWxlbUluZm8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtc1tpbmRleF07XG4gICAgICAgIGxldCBkb21FbGVtcyA9ICBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAgICAgICAgIC5jYWxsKGVsZW1lbnQucGFyZW50Tm9kZS5jaGlsZHJlbik7XG4gICAgICAgIGxldCBkb21JbmRleCA9ZG9tRWxlbXNcbiAgICAgICAgICAgIC5pbmRleE9mKGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZG9tSW5kZXg6IGRvbUluZGV4LFxuICAgICAgICAgICAgb2Zmc2V0TGVmdDogIWRvbUluZGV4PyAwOlxuICAgICAgICAgICAgICAgIGVsZW1lbnQub2Zmc2V0TGVmdCAtIGRvbUVsZW1zWzBdLm9mZnNldExlZnQsXG4gICAgICAgICAgICBjZW50ZXI6ICFkb21JbmRleD8gZWxlbWVudC5vZmZzZXRMZWZ0ICsgZWxlbWVudC5vZmZzZXRXaWR0aC8yIDpcbiAgICAgICAgICAgICAgICBkb21FbGVtc1tkb21JbmRleC0xXS5vZmZzZXRMZWZ0ICsgZG9tRWxlbXNbZG9tSW5kZXgtMV0ub2Zmc2V0V2lkdGgvMlxuICAgICAgICAgICAgICAgICArIGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBvZmZzZXRXaWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIHNldEFjdGl2ZTogKGRlbHRhKT0+e1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IE1hdGgubWF4KDAsIDEuMi1NYXRoLmFicyhkZWx0YS9lbGVtZW50Lm9mZnNldFdpZHRoKSk7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGVsZW1lbnQuc3R5bGUub3BhY2l0eSAtIDEpID4gMC4yKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNtYWxsU2xpZGVySXRlbSBleHRlbmRzIFNsaWRlckl0ZW0ge1xuICAgIFxuICAgIGdldEVsZW1JbmZvKGluZGV4KSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIDwgODAwKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0RWxlbUluZm8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtc1tpbmRleF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZzZXRMZWZ0OiBlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgY2VudGVyOiBlbGVtZW50Lm9mZnNldExlZnQgLSBlbGVtZW50Lm9mZnNldFdpZHRoLzIsXG4gICAgICAgICAgICBvZmZzZXRXaWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aFxuICAgICAgICB9XG4gICAgfVxufVxuICAgIFxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbnRyb2xsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBzbGlkZXJNYWluLmFkZENvbnRyb2xsZXIoK2F0dHJzLnNsaWRlckNvbnRyb2xsKVxuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZChzbGlkZXJNYWluKSlcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRWFzaW5nQW5pbWF0b3Ige1xuXG4gICAgY29uc3RydWN0b3Iob3B0KXtcbiAgICAgICAgdmFyIG9wdCA9IHt9O1xuICAgICAgICB0aGlzLmVhc2luZ0ludGVydmFsID0gb3B0LmVhc2luZ0ludGVydmFsO1xuICAgICAgICB0aGlzLmR1cmF0aW9uID0gb3B0LmR1cmF0aW9uIHx8IDUwMDtcbiAgICAgICAgdGhpcy5zdGVwID0gb3B0LnN0ZXAgfHwgNTA7XG4gICAgICAgIHRoaXMuZWFzaW5nRm4gPSAodCwgYiwgYywgZCkgPT57XG4gICAgICAgICAgICBpZiAoKHQvPWQvMikgPCAxKSByZXR1cm4gYy8yKnQqdCp0KnQgKyBiO1xuICAgICAgICAgICAgcmV0dXJuIC1jLzIgKiAoKHQtPTIpKnQqdCp0IC0gMikgKyBiO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVhc2luZ0ZuID0gb3B0LmVhc2luZ0ZuIHx8IHRoaXMuZWFzaW5nRm47XG4gICAgICAgIHRoaXMuY2FsbEJhY2sgPSBvcHQuY2FsbEJhY2sgfHwgKCk9Pnt9O1xuICAgIH1cbiAgICBtYWtlRnJvbUNhbGxiYWNrIChjYWxsQmFjaykge1xuICAgICAgICBjb25zb2xlLmxvZyhjYWxsQmFjaylcbiAgICAgICAgcmV0dXJuIG5ldyBFYXNpbmdBbmltYXRvcih7XG4gICAgICAgICAgICBjYWxsQmFjazogY2FsbEJhY2tcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVhc2VQcm9wIChvYmosIHByb3BEaWN0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKDEpO1xuICAgICAgICBwcm9wRGljdCA9IHByb3BEaWN0IHx8IHt9O1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICB0ID0gMCxcbiAgICAgICAgICAgIG91dF92YWxzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmVhc2luZ0ludGVydmFsKTtcbiAgICAgICAgc2VsZi5lYXNpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XG4gICAgICAgICAgICB0Kz0gdGhpcy5zdGVwO1xuICAgICAgICAgICAgaWYgKHQgPj0gdGhpcy5kdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5lYXNpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhwcm9wRGljdCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHBlcmNlbnQgPSB0aGlzLmVhc2luZ0ZuKHQsIDAsIDEsIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcERpY3QpLmZvckVhY2goKGtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBvbGRfdmFsID0gb2JqW2tleV07XG4gICAgICAgICAgICAgICAgb3V0X3ZhbHNba2V5XSA9IG9sZF92YWwgLSBwZXJjZW50KihvbGRfdmFsIC0gcHJvcERpY3Rba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY2FsbEJhY2sob3V0X3ZhbHMpO1xuICAgICAgICB9LCB0aGlzLnN0ZXApO1xuICAgIH1cbn07XG4iLCIvKipcbiAqIEEgaGVscGVyIGNsYXNzIHRvIHNpbXBsaWZ5IHJlZ2lzdGVyaW5nIEFuZ3VsYXIgY29tcG9uZW50cyBhbmQgcHJvdmlkZSBhIGNvbnNpc3RlbnQgc3ludGF4IGZvciBkb2luZyBzby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyKGFwcE5hbWUpIHtcblxuICAgIHZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZShhcHBOYW1lKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpcmVjdGl2ZTogZGlyZWN0aXZlLFxuICAgICAgICBjb250cm9sbGVyOiBjb250cm9sbGVyLFxuICAgICAgICBzZXJ2aWNlOiBzZXJ2aWNlLFxuICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgIGZhY3Rvcnk6IGZhY3RvcnlcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZGlyZWN0aXZlKG5hbWUsIGNvbnN0cnVjdG9yRm4pIHtcblxuICAgICAgICBjb25zdHJ1Y3RvckZuID0gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yRm4pO1xuXG4gICAgICAgIGlmICghY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGFuIGVtcHR5IGNvbXBpbGUgZnVuY3Rpb24gaWYgbm9uZSB3YXMgZGVmaW5lZC5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUgPSAoKSA9PiB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcmlnaW5hbENvbXBpbGVGbiA9IF9jbG9uZUZ1bmN0aW9uKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUpO1xuXG4gICAgICAgIC8vIERlY29yYXRlIHRoZSBjb21waWxlIG1ldGhvZCB0byBhdXRvbWF0aWNhbGx5IHJldHVybiB0aGUgbGluayBtZXRob2QgKGlmIGl0IGV4aXN0cylcbiAgICAgICAgLy8gYW5kIGJpbmQgaXQgdG8gdGhlIGNvbnRleHQgb2YgdGhlIGNvbnN0cnVjdG9yIChzbyBgdGhpc2Agd29ya3MgY29ycmVjdGx5KS5cbiAgICAgICAgLy8gVGhpcyBnZXRzIGFyb3VuZCB0aGUgcHJvYmxlbSBvZiBhIG5vbi1sZXhpY2FsIFwidGhpc1wiIHdoaWNoIG9jY3VycyB3aGVuIHRoZSBkaXJlY3RpdmUgY2xhc3MgaXRzZWxmXG4gICAgICAgIC8vIHJldHVybnMgYHRoaXMubGlua2AgZnJvbSB3aXRoaW4gdGhlIGNvbXBpbGUgZnVuY3Rpb24uXG4gICAgICAgIF9vdmVycmlkZShjb25zdHJ1Y3RvckZuLnByb3RvdHlwZSwgJ2NvbXBpbGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsQ29tcGlsZUZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29uc3RydWN0b3JGbi5wcm90b3R5cGUubGluaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3JGbi5wcm90b3R5cGUubGluay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pO1xuXG4gICAgICAgIGFwcC5kaXJlY3RpdmUobmFtZSwgZmFjdG9yeUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29udHJvbGxlcihuYW1lLCBjb250cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLmNvbnRyb2xsZXIobmFtZSwgY29udHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VydmljZShuYW1lLCBjb250cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLnNlcnZpY2UobmFtZSwgY29udHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvdmlkZXIobmFtZSwgY29uc3RydWN0b3JGbikge1xuICAgICAgICBhcHAucHJvdmlkZXIobmFtZSwgY29uc3RydWN0b3JGbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZhY3RvcnkobmFtZSwgY29uc3RydWN0b3JGbikge1xuICAgICAgICBjb25zdHJ1Y3RvckZuID0gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgYXBwLmZhY3RvcnkobmFtZSwgZmFjdG9yeUFycmF5KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIGNvbnN0cnVjdG9yRm4gaXMgYW4gYXJyYXkgb2YgdHlwZSBbJ2RlcDEnLCAnZGVwMicsIC4uLiwgY29uc3RydWN0b3IoKSB7fV1cbiAgICAgKiB3ZSBuZWVkIHRvIHB1bGwgb3V0IHRoZSBhcnJheSBvZiBkZXBlbmRlbmNpZXMgYW5kIGFkZCBpdCBhcyBhbiAkaW5qZWN0IHByb3BlcnR5IG9mIHRoZVxuICAgICAqIGFjdHVhbCBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgKiBAcGFyYW0gaW5wdXRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9ub3JtYWxpemVDb25zdHJ1Y3RvcihpbnB1dCkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3JGbjtcblxuICAgICAgICBpZiAoaW5wdXQuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgdmFyIGluamVjdGVkID0gaW5wdXQuc2xpY2UoMCwgaW5wdXQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuID0gaW5wdXRbaW5wdXQubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuLiRpbmplY3QgPSBpbmplY3RlZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4gPSBpbnB1dDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbnZlcnQgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBpbnRvIGEgZmFjdG9yeSBmdW5jdGlvbiB3aGljaCByZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIHRoYXRcbiAgICAgKiBjb25zdHJ1Y3Rvciwgd2l0aCB0aGUgY29ycmVjdCBkZXBlbmRlbmNpZXMgYXV0b21hdGljYWxseSBpbmplY3RlZCBhcyBhcmd1bWVudHMuXG4gICAgICpcbiAgICAgKiBJbiBvcmRlciB0byBpbmplY3QgdGhlIGRlcGVuZGVuY2llcywgdGhleSBtdXN0IGJlIGF0dGFjaGVkIHRvIHRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiB3aXRoIHRoZVxuICAgICAqIGAkaW5qZWN0YCBwcm9wZXJ0eSBhbm5vdGF0aW9uLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbnN0cnVjdG9yRm5cbiAgICAgKiBAcmV0dXJucyB7QXJyYXkuPFQ+fVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIC8vIGdldCB0aGUgYXJyYXkgb2YgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIG5lZWRlZCBieSB0aGlzIGNvbXBvbmVudCAoYXMgY29udGFpbmVkIGluIHRoZSBgJGluamVjdGAgYXJyYXkpXG4gICAgICAgIHZhciBhcmdzID0gY29uc3RydWN0b3JGbi4kaW5qZWN0IHx8IFtdO1xuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gYXJncy5zbGljZSgpOyAvLyBjcmVhdGUgYSBjb3B5IG9mIHRoZSBhcnJheVxuICAgICAgICAvLyBUaGUgZmFjdG9yeUFycmF5IHVzZXMgQW5ndWxhcidzIGFycmF5IG5vdGF0aW9uIHdoZXJlYnkgZWFjaCBlbGVtZW50IG9mIHRoZSBhcnJheSBpcyB0aGUgbmFtZSBvZiBhXG4gICAgICAgIC8vIGRlcGVuZGVuY3ksIGFuZCB0aGUgZmluYWwgaXRlbSBpcyB0aGUgZmFjdG9yeSBmdW5jdGlvbiBpdHNlbGYuXG4gICAgICAgIGZhY3RvcnlBcnJheS5wdXNoKCguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICAvL3JldHVybiBuZXcgY29uc3RydWN0b3JGbiguLi5hcmdzKTtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBjb25zdHJ1Y3RvckZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2Vba2V5XSA9IGluc3RhbmNlW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWN0b3J5QXJyYXk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvbmUgYSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSBvcmlnaW5hbFxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2xvbmVGdW5jdGlvbihvcmlnaW5hbCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gb3JpZ2luYWwuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSBhbiBvYmplY3QncyBtZXRob2Qgd2l0aCBhIG5ldyBvbmUgc3BlY2lmaWVkIGJ5IGBjYWxsYmFja2AuXG4gICAgICogQHBhcmFtIG9iamVjdFxuICAgICAqIEBwYXJhbSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICovXG4gICAgZnVuY3Rpb24gX292ZXJyaWRlKG9iamVjdCwgbWV0aG9kTmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgb2JqZWN0W21ldGhvZE5hbWVdID0gY2FsbGJhY2sob2JqZWN0W21ldGhvZE5hbWVdKVxuICAgIH1cblxufVxuIl19
