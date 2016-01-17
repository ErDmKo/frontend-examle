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

    function ShowMovieController($scope, $timeout, $q) {
        var _this = this;

        _classCallCheck(this, ShowMovieController);

        this.$q = $q;
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
    ShowMovieController.$inject = ["$scope", "$timeout", "$q"];

    _createClass(ShowMovieController, [{
        key: 'addVideo',
        value: function addVideo(code, last) {
            var _this2 = this;

            this.video[code] = {
                active: false,
                load: false
            };
            if (last == 'True') {
                Object.keys(this.video).reduce(function (p, key) {
                    return p.then(function () {
                        return _this2.$timeout(function () {
                            console.log(key);
                            _this2.video[key].load = true;
                        }, 1000);
                    });
                }, this.$timeout(function () {
                    _this2.video[code].load = true;
                }, 3000));
            }
        }
    }, {
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
        this.clones = {
            start: '',
            end: ''
        };
    }

    _createClass(SliderController, [{
        key: 'setType',
        value: function setType(typeName) {
            var _this2 = this;

            if (document.body.offsetWidth < 800) {
                return;
            }
            this.typeName = typeName;
            this.ready.then(function (length) {
                if (_this2.typeName == "switch" && length >= 2) {
                    _this2.clones.start = _this2.items[_this2.items.length - 1].elem.cloneNode(1);
                    _this2.clones.start.classList.add('clone');
                    _this2.items[0].elem.parentNode.insertBefore(_this2.clones.start, _this2.items[0].elem);
                    _this2.clones.end = _this2.items[0].elem.cloneNode(1);
                    _this2.clones.end.classList.add('clone');
                    _this2.items[0].elem.parentNode.appendChild(_this2.clones.end);
                    _this2.moveToSlide(_this2.slide, false);
                    window.dispatchEvent(new Event('resize'));
                }
            });
        }
    }, {
        key: 'switch',
        value: function _switch(from, to) {
            var parentNode = this.items[0].elem.parentNode;
            var nodeList = Array.prototype.slice.call(parentNode.children);
            //parentNode.insertBefore(to === null ? to : nodeList[to], nodeList[from]);
        }
    }, {
        key: 'moveToSlide',
        value: function moveToSlide(position, animate) {
            var _this3 = this;

            animate = animate === undefined ? true : animate;
            clearTimeout(this.moveToSlideTimeout);
            this.moveToSlideTimeout = setTimeout(function () {
                _this3.scrollHandler(_this3.items[position].getElemInfo().offsetLeft, animate);
            }, 0);
        }
    }, {
        key: 'addItem',
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
        key: 'addContent',
        value: function addContent(handler) {
            this.scrollHandler = handler;
        }
    }, {
        key: 'next',
        value: function next(delta) {
            var _this5 = this;

            var next = this.slide + delta;
            if (this.typeName == "switch") {
                var elementInfo = this.items[this.slide].getElemInfo();
                var promise = undefined;
                if (next >= this.items.length) {
                    next = 0;
                    this.clones.end.classList.add('show');
                    promise = this.scrollHandler(elementInfo.offsetLeft + elementInfo.offsetWidth, true);
                } else if (next < 0) {
                    next = this.items.length - 1;
                    this.clones.start.classList.add('show');
                    promise = this.scrollHandler(elementInfo.offsetLeft - elementInfo.offsetWidth, true);
                } else {
                    promise = this.scrollHandler(this.items[next].getElemInfo().offsetLeft, true);
                }

                promise.then(function () {
                    var elementInfo = _this5.items[next].getElemInfo();
                    _this5.clones.start.classList.remove('show');
                    _this5.clones.end.classList.remove('show');
                    _this5.scrollHandler(elementInfo.offsetLeft, false);
                });
                this.slide = next;
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
        key: 'addController',
        value: function addController(delta) {
            var _this6 = this;

            var handler = function handler(e) {
                _this6.next(delta);
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

var SliderMain = (function () {
    function SliderMain() {
        _classCallCheck(this, SliderMain);

        this.restrict = 'A';
        this.require = 'sliderMain';
        this.controller = SliderController.factory;
    }

    _createClass(SliderMain, [{
        key: 'link',
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
        key: 'animate',
        value: function animate(info) {
            this.element.scrollLeft = info.left;
        }
    }, {
        key: 'link',
        value: function link(scope, element, attrs, sliderMain) {
            var _this7 = this;

            this.element = element[0];
            sliderMain.addContent(function (val, animate) {
                if (!animate) {
                    _this7.element.scrollLeft = val;
                } else {
                    return _this7.easingAnimator.easeProp({
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
        key: 'link',
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

        _get(Object.getPrototypeOf(UniSliderItem.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(UniSliderItem, [{
        key: 'getElemInfo',
        value: function getElemInfo(index) {
            if (document.body.offsetWidth < 800) {
                return _get(Object.getPrototypeOf(UniSliderItem.prototype), 'getElemInfo', this).call(this, index);
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

            propDict = propDict || {};
            var self = this,
                t = 0,
                out_vals = JSON.parse(JSON.stringify(obj));
            clearInterval(this.easingInterval);
            return new Promise(function (resolve, reject) {
                self.easingInterval = setInterval(function () {
                    t += _this.step;
                    if (t >= _this.duration) {
                        clearInterval(_this.easingInterval);
                        _this.callBack(propDict);
                        resolve();
                        return;
                    }
                    var percent = _this.easingFn(t, 0, 1, _this.duration);
                    Object.keys(propDict).forEach(function (key, i) {
                        var old_val = obj[key];
                        out_vals[key] = old_val - percent * (old_val - propDict[key]);
                    });
                    _this.callBack(out_vals);
                }, _this.step);
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2suanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpbi5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpblBhZ2UvZGlyZWN0aXZlcy9sb2dvRGlyZWN0aXZlcy5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbW92aWVTaG93L2NvbnRyb2xsZXJzL3BsYXlTaG93LmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9tb3ZpZVNob3cvY29udHJvbGxlcnMvc2hvd0RldGFpbC5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbW92aWVTaG93L2NvbnRyb2xsZXJzL3Nob3dzRmlsdGVyQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbW92aWVTaG93L2RpcmVjdGl2ZXMvY3VzdG9tU2VsZWN0LmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL2RpcmVjdGl2ZXMvZHJhZ2dDb250cm9sbGVyLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy90b3BOZXdzL2RpcmVjdGl2ZXMvaG9yaXpvbnRhbFNjcm9sbC5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9kaXJlY3RpdmVzL3NsaWRlci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9zZXJ2aWNlcy9lYXNpbmdBbmltYXRvci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdXRpbHMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQWEsY0FBYzthQUFkLGNBQWM7OEJBQWQsY0FBYzs7O2lCQUFkLGNBQWM7O2VBT25CLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFDeEIsc0JBQVUsQ0FBQyxZQUFJO0FBQ1gsdUJBQU8sQ0FDRixXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQzlDLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLG1CQUFPLENBQ0YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FDbkMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQzdCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBUyxDQUFDLEVBQUM7QUFDcEIsaUJBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtBQUNsQixvQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtB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Q3hDLHlCQUFhLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQztTQUNwQyxNQUFNO0FBQ0gseUJBQWEsR0FBRyxLQUFLLENBQUM7U0FDekI7O0FBRUQsZUFBTyxhQUFhLENBQUM7S0FDeEI7Ozs7Ozs7Ozs7Ozs7QUFhRCxhQUFTLG1CQUFtQixDQUFDLGFBQWEsRUFBRTs7QUFFeEMsWUFBSSxJQUFJLEdBQUcsYUFBYSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDdkMsWUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7QUFHaEMsb0JBQVksQ0FBQyxJQUFJLENBQUMsWUFBYTs4Q0FBVCxJQUFJO0FBQUosb0JBQUk7Ozs7QUFFdEIsZ0JBQUksUUFBUSxvQkFBTyxhQUFhLGdCQUFJLElBQUksS0FBQyxDQUFDO0FBQzFDLGlCQUFLLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtBQUN0Qix3QkFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQztBQUNELG1CQUFPLFFBQVEsQ0FBQztTQUNuQixDQUFDLENBQUM7O0FBRUgsZUFBTyxZQUFZLENBQUM7S0FDdkI7Ozs7Ozs7QUFPRCxhQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUU7QUFDOUIsZUFBTyxZQUFXO0FBQ2QsbUJBQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDMUMsQ0FBQztLQUNMOzs7Ozs7OztBQVFELGFBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO0FBQzdDLGNBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7S0FDcEQ7Q0FFSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgY2xhc3MgTWVzdG9DbGlja0ZhZGUge1xuICAgIHN0YXRpYyBnZXQgVElNRU9VVCgpIHtcbiAgICAgICAgcmV0dXJuIDIwMDtcbiAgICB9XG4gICAgc3RhdGljIGdldCBGQURFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2ZhZGUnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKE1lc3RvQ2xpY2tGYWRlLkZBREVfQ0xBU1MpXG4gICAgICAgIH0sIE1lc3RvQ2xpY2tGYWRlLlRJTUVPVVQpO1xuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAuYWRkQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgICAgIC5maW5kKCdhLmZhZGVBbmltYXRvcl9fYW5jb3InKVxuICAgICAgICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIGxldCBocmVmID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKVxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIgeyBcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBmZWVkYmFja1Jlc291cmNlKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tSZXNvdXJjZSA9IGZlZWRiYWNrUmVzb3VyY2U7XG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSAnJztcbiAgICAgICAgdGhpcy5zdWNjZXNzID0gZmFsc2U7XG4gICAgfVxuICAgIHN1Ym1pdChmb3JtKXtcbiAgICAgICAgaWYgKGZvcm0uJGludmFsaWQpIHtcbiAgICAgICAgICAgIGZvcm0uJHNldERpcnR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgZmVlZGJhY2sgPSBuZXcgdGhpcy5mZWVkYmFja1Jlc291cmNlKHRoaXMuZm9ybURhdGEpO1xuICAgICAgICAgICAgZmVlZGJhY2suJHNhdmUoKVxuICAgICAgICAgICAgICAgIC50aGVuKCgpID0+e1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN1Y2Nlc3MgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrVG9nZ2xlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZFRvZ2dsZXIoYXR0cnMubWVzdG9GZWVkYmFja1RvZ2dsZSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHRoaXMucG9wVXBTZXJpdmljZSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrQ29udG5pZXIge1xuICAgIHN0YXRpYyBnZXQgVE9HR0xFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2ZpeGVkUG9wVXAnOyBcbiAgICB9XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IChuYW1lKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnRvZ2dsZUNsYXNzKE1lc3RvRmVlZGJhY2tDb250bmllci5UT0dHTEVfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZENvbnRhbmllcihhdHRycy5tZXN0b0ZlZWRiYWNrQ29udGFuaWVyLCBoYW5kbGVyKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0Nsb3NlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMucG9wVXBTZXJpdmljZS5jbG9zZShhdHRycy5tZXN0b0ZlZWRiYWNrQ2xvc2UpO1xuICAgICAgICBlbGVtZW50Lm9uKCdjbGljaycsIGhhbmRsZXIuYmluZCh0aGlzLnBvcFVwU2VyaXZpY2UpKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9GZWVkYmFja0l0ZW0ge1xuICAgIHN0YXRpYyBnZXQgVE9HR0xFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgfVxuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKHBvcFVwU2VyaXZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlID0gcG9wVXBTZXJpdmljZTtcbiAgICB9XG4gICAgdG9nZ2xlKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcyhNZXN0b0ZlZWRiYWNrSXRlbS5UT0dHTEVfQ0xBU1MpO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2VcbiAgICAgICAgICAgIC5hZGRJdGVtKGF0dHJzLm1lc3RvRmVlZGJhY2tJdGVtLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMsIGVsZW1lbnQpKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRmVlZGJhY2tSZXNvdXJjZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gJHJlc291cmNlKENPTkZJRy51cmxzLmZlZWRiYWNrRm9ybSk7XG4gICAgfVxufVxuIiwiY2xhc3MgUG9wVXAge1xuICAgIGNvbnN0cnVjdG9yKGl0ZW1IYW5kbGVyLCBuYW1lKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5pdGVtSGFuZGxlciA9IGl0ZW1IYW5kbGVyO1xuICAgIH1cbiAgICB0b2dnbGVJdGVtKCkge1xuICAgICAgICBpZiAoUG9wVXAuY29udGFuaWVySGFuZGxlclt0aGlzLm5hbWVdKSB7XG4gICAgICAgICAgICBQb3BVcC5jb250YW5pZXJIYW5kbGVyW3RoaXMubmFtZV0oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLml0ZW1IYW5kbGVyKCk7XG4gICAgfVxufVxuUG9wVXAuY29udGFuaWVySGFuZGxlciA9IHt9O1xuXG5leHBvcnQgY2xhc3MgUG9wVXBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3BVcHMgPSB7fTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtTmFtZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnBvcFVwc1tpdGVtTmFtZV0gPSBuZXcgUG9wVXAoaGFuZGxlciwgaXRlbU5hbWUpO1xuICAgIH1cbiAgICBjbG9zZShpdGVtTmFtZSkge1xuICAgICAgICBpZiAoIWl0ZW1OYW1lKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnBvcFVwcykuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgICAgIHRoaXMucG9wVXBzW2tleV0udG9nZ2xlSXRlbSgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCBwb3BVcCA9IHRoaXMucG9wVXBzW2l0ZW1OYW1lXVxuICAgICAgICAgICAgaWYgKHBvcFVwKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBvcFVwLnRvZ2dsZUl0ZW0oKVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDb250YW5pZXIocG9wVXBOYW1lLCBoYW5kZXIsIGluZGV4KSB7XG4gICAgICAgIFBvcFVwLmNvbnRhbmllckhhbmRsZXJbcG9wVXBOYW1lXSA9IGhhbmRlcjtcbiAgICB9XG4gICAgYWRkVG9nZ2xlcihwb3BVcE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAoW3RoaXMucG9wVXBzW3BvcFVwTmFtZV1dIHx8IFtdKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKChwb3BVcCk9PntcbiAgICAgICAgICAgICAgICAgICAgcG9wVXAudG9nZ2xlSXRlbSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJy4vdXRpbHMvcmVnaXN0ZXInO1xuXG5pbXBvcnQgeyBcbiAgICBTbGlkZXJNYWluLFxuICAgIFNsaWRlckNvbnRlbnQsXG4gICAgU2xpZGVyQ29udHJvbGwsXG4gICAgU2xpZGVyQ291bnRlcixcbiAgICBTbGlkZXJJdGVtLFxuICAgIFNtYWxsU2xpZGVySXRlbSxcbiAgICBVbmlTbGlkZXJJdGVtXG59IGZyb20gJy4vdG9wTmV3cy9kaXJlY3RpdmVzL3NsaWRlcic7XG5pbXBvcnQgeyBFYXNpbmdBbmltYXRvciB9IGZyb20gJy4vdG9wTmV3cy9zZXJ2aWNlcy9lYXNpbmdBbmltYXRvcic7XG5pbXBvcnQgeyBEcmFnZ0NvbnRyb2xsZXIgfSBmcm9tICcuL3RvcE5ld3MvZGlyZWN0aXZlcy9kcmFnZ0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgSG9yaXpvbnRhbFNjcm9sbCB9IGZyb20gJy4vdG9wTmV3cy9kaXJlY3RpdmVzL2hvcml6b250YWxTY3JvbGwnO1xuXG5pbXBvcnQgeyBNZXN0b0NsaWNrRmFkZSB9IGZyb20gJy4vY2xpY2tGYWRlL2RpcmVjdGl2ZXMvY2xpY2tGYWRlJztcblxuaW1wb3J0IHsgUG9wVXBTZXJ2aWNlIH0gZnJvbSAnLi9mZWVkQmFjay9zZXJ2aWNlcy9wb3BVcFNlcnZpY2UnO1xuaW1wb3J0IHsgRmVlZGJhY2tSZXNvdXJjZSB9IGZyb20gJy4vZmVlZEJhY2svc2VydmljZXMvZmVlZGJhY2tSZXNvdXJjZSc7XG5pbXBvcnQgeyBGZWVkYmFja0Zvcm1Db250cm9sbGVyIH0gZnJvbSAnLi9mZWVkQmFjay9jb250cm9sbGVycy9Gb3JtQ29udHJvbGxlcic7XG5pbXBvcnQgeyBcbiAgICBNZXN0b0ZlZWRiYWNrSXRlbSxcbiAgICBNZXN0b0ZlZWRiYWNrVG9nZ2xlLFxuICAgIE1lc3RvRmVlZGJhY2tDbG9zZSxcbiAgICBNZXN0b0ZlZWRiYWNrQ29udG5pZXJcbn0gZnJvbSAnLi9mZWVkQmFjay9kaXJlY3RpdmVzL2ZlZWRCYWNrJztcblxuaW1wb3J0IHsgXG4gICAgU1ZHTG9nb0hvdmVyLFxuICAgIFNWR0xvZ29JdGVtLFxuICAgIFNWR0xvZ29Db250YW5pZXIsXG4gICAgU1ZHTG9nb0JhY2tncm91bmRcbn0gZnJvbSAnLi9tYWluUGFnZS9kaXJlY3RpdmVzL2xvZ29EaXJlY3RpdmVzJztcblxuaW1wb3J0IHsgU2hvd01vdmllQ29udHJvbGxlciB9IGZyb20gJy4vbW92aWVTaG93L2NvbnRyb2xsZXJzL3BsYXlTaG93LmpzJ1xuXG5pbXBvcnQgeyBcbiAgICBNZXN0b0N1c3RvbVNlbGVjdCxcbiAgICBNZXN0b0N1c3RvbVNlbGVjdEl0ZW0sXG4gICAgTWVzdG9DdXN0b21TZWxlY3RQbGFjZWhvbGRlclxufSBmcm9tICcuL21vdmllU2hvdy9kaXJlY3RpdmVzL2N1c3RvbVNlbGVjdC5qcydcblxuaW1wb3J0IHsgU2hvd3NGaWx0ZXJDb250cm9sbGVyIH0gZnJvbSAnLi9tb3ZpZVNob3cvY29udHJvbGxlcnMvc2hvd3NGaWx0ZXJDb250cm9sbGVyLmpzJyBcbmltcG9ydCB7IFNob3dEZXRhaWwgfSBmcm9tICcuL21vdmllU2hvdy9jb250cm9sbGVycy9zaG93RGV0YWlsLmpzJyBcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdtZXN0bycsIFtcbiAgICAnbmdSZXNvdXJjZScsXG4gICAgJ2R1U2Nyb2xsJyxcbiAgICAneW91dHViZS1lbWJlZCdcbl0pO1xuXG5yZWdpc3RlcignbWVzdG8nKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlck1haW4nLCBTbGlkZXJNYWluKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckNvbnRyb2xsJywgU2xpZGVyQ29udHJvbGwpXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyQ29udGVudCcsIFNsaWRlckNvbnRlbnQpXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVySXRlbScsIFNsaWRlckl0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnc21hbGxTbGlkZXJJdGVtJywgU21hbGxTbGlkZXJJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ3VuaVNsaWRlckl0ZW0nLCBVbmlTbGlkZXJJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckNvdW50ZXInLCBTbGlkZXJDb3VudGVyKVxuICAgIC5kaXJlY3RpdmUoJ2RyYWdnQ29udHJvbGxlcicsIERyYWdnQ29udHJvbGxlcilcbiAgICAuZGlyZWN0aXZlKCdob3Jpem9udGFsU2Nyb2xsJywgSG9yaXpvbnRhbFNjcm9sbClcbiAgICAuZmFjdG9yeSgnZWFzaW5nQW5pbWF0b3InLCBFYXNpbmdBbmltYXRvcilcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tJdGVtJywgTWVzdG9GZWVkYmFja0l0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja1RvZ2dsZScsIE1lc3RvRmVlZGJhY2tUb2dnbGUpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja0Nsb3NlJywgTWVzdG9GZWVkYmFja0Nsb3NlKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tDb250YW5pZXInLCBNZXN0b0ZlZWRiYWNrQ29udG5pZXIpXG4gICAgLnNlcnZpY2UoJ3BvcFVwU2VyaXZpY2UnLCBQb3BVcFNlcnZpY2UpXG5cbiAgICAuc2VydmljZSgnZmVlZGJhY2tSZXNvdXJjZScsIEZlZWRiYWNrUmVzb3VyY2UpXG4gICAgLmNvbnRyb2xsZXIoJ2ZlZWRiYWNrRm9ybUNvbnRyb2xsZXInLCBGZWVkYmFja0Zvcm1Db250cm9sbGVyKVxuXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9DbGlja0ZhZGUnLCBNZXN0b0NsaWNrRmFkZSlcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvTG9nb0hvdmVyJywgU1ZHTG9nb0hvdmVyKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvU3ZnSXRlbScsIFNWR0xvZ29JdGVtKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvU3ZnTG9nbycsIFNWR0xvZ29Db250YW5pZXIpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9TdmdCYWNrZ3JvdW5kJywgU1ZHTG9nb0JhY2tncm91bmQpXG5cbiAgICAuY29udHJvbGxlcignc2hvd01vdmllQ29udHJvbGxlcicsIFNob3dNb3ZpZUNvbnRyb2xsZXIpXG5cbiAgICAuZGlyZWN0aXZlKCdtZXN0b0N1c3RvbVNlbGVjdCcsIE1lc3RvQ3VzdG9tU2VsZWN0KVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvQ3VzdG9tU2VsZWN0SXRlbScsIE1lc3RvQ3VzdG9tU2VsZWN0SXRlbSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0N1c3RvbVNlbGVjdFBsYWNlaG9sZGVyJywgTWVzdG9DdXN0b21TZWxlY3RQbGFjZWhvbGRlcilcblxuICAgIC5jb250cm9sbGVyKCdzaG93c0ZpbHRlckNvbnRyb2xsZXInLCBTaG93c0ZpbHRlckNvbnRyb2xsZXIpXG4gICAgLmNvbnRyb2xsZXIoJ3Nob3dEZXRhaWwnLCBTaG93RGV0YWlsKVxuXG5hcHAuY29uZmlnKCgkcmVzb3VyY2VQcm92aWRlciwgJGh0dHBQcm92aWRlcik9PiB7XG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy54c3JmQ29va2llTmFtZSA9ICdjc3JmdG9rZW4nO1xuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMueHNyZkhlYWRlck5hbWUgPSAnWC1DU1JGVG9rZW4nO1xuICAgICRyZXNvdXJjZVByb3ZpZGVyLmRlZmF1bHRzLnN0cmlwVHJhaWxpbmdTbGFzaGVzID0gZmFsc2U7XG59KVxuYW5ndWxhclxuICAgIC5lbGVtZW50KGRvY3VtZW50KVxuICAgIC5yZWFkeShhbmd1bGFyLmJvb3RzdHJhcC5iaW5kKGFuZ3VsYXIsIGRvY3VtZW50LCBbJ21lc3RvJ10pKTtcbiIsImNsYXNzIExvZ29Db250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgICAgICB0aGlzLmltZ1VybHMgPSB7fTtcbiAgICB9XG4gICAgYWRkSW1hZ2UobmFtZSwgdXJsKSB7XG4gICAgICAgIHRoaXMuaW1nVXJsc1tuYW1lXSA9IHVybDtcbiAgICB9XG4gICAgYWRkSXRlbShuYW1lLCBpbmZvKSB7XG4gICAgICAgIHRoaXMuaXRlbXNbbmFtZV0gPSBpbmZvO1xuICAgIH1cbiAgICBhZGRCYWNrZ3JvdW5kKHNob3csIGhpZGUpe1xuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSB7XG4gICAgICAgICAgICBzaG93OiBzaG93LFxuICAgICAgICAgICAgaGlkZTogaGlkZVxuICAgICAgICB9XG4gICAgfVxuICAgIHVuaG92ZXIoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuaXRlbXMpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIHRoaXMuaXRlbXNba2V5XS5kaXNhYmxlZCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmhpZGUoKTtcbiAgICB9XG4gICAgaG92ZXIobmFtZSkge1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuc2hvdyh0aGlzLmltZ1VybHNbbmFtZV0pO1xuICAgICAgICB0aGlzLml0ZW1zW25hbWVdLmFjdGl2ZSgpO1xuICAgIH1cbiAgICBjYWxsKG5hbWUpIHtcbiAgICAgICAgdGhpcy5pdGVtc1tuYW1lXS5jbGljaygpO1xuICAgIH1cbiAgICBzdGF0aWMgZmFjdG9yeSguLi5hcmdzKSB7XG4gICAgICAgIExvZ29Db250cm9sbGVyLmluc3RhbmNlID0gbmV3IExvZ29Db250cm9sbGVyKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gTG9nb0NvbnRyb2xsZXIuaW5zdGFuY2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29Db250YW5pZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IExvZ29Db250cm9sbGVyLmZhY3Rvcnk7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFNWR0xvZ29CYWNrZ3JvdW5kIHtcbiAgICBzdGF0aWMgZ2V0IEFDVElWRV9DTEFTUygpe1xuICAgICAgICByZXR1cm4gJ2FjdGl2ZSc7XG4gICAgfSBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15tZXN0b1N2Z0xvZ28nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLmFkZEJhY2tncm91bmQoKHVybCk9PntcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgdXJsID8gYHVybCgke3VybH0pYCA6ICdub25lJyk7XG4gICAgICAgIH0sICgpPT57XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvSG92ZXIge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdebWVzdG9TdmdMb2dvJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIGNvbnRyb2xsZXIpIHtcbiAgICAgICAgZWxlbWVudC5vbignbW91c2VlbnRlcicsICgpPT57XG4gICAgICAgICAgICBjb250cm9sbGVyLmhvdmVyKGF0dHJzLm1lc3RvTG9nb0hvdmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ21vdXNlbGVhdmUnLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci51bmhvdmVyKGF0dHJzLm1lc3RvTG9nb0hvdmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgKCk9PntcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuY2FsbChhdHRycy5tZXN0b0xvZ29Ib3Zlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTVkdMb2dvSXRlbSB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15tZXN0b1N2Z0xvZ28nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcikge1xuICAgICAgICBjb250cm9sbGVyLmFkZEl0ZW0oYXR0cnMubWVzdG9TdmdJdGVtLCB7XG4gICAgICAgICAgICBjbGljazogKCk9PntcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGF0dHJzLmhyZWY7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWN0aXZlOiAoKT0+e1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoU1ZHTG9nb0JhY2tncm91bmQuQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkaXNhYmxlZDogKCk9PntcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKFNWR0xvZ29CYWNrZ3JvdW5kLkFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWF0dHJzLmltZ1VybCkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKT0+e1xuICAgICAgICAgICAgY29udHJvbGxlci5hZGRJbWFnZShhdHRycy5tZXN0b1N2Z0l0ZW0sIGF0dHJzLmltZ1VybCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpbWcuc3JjID0gYXR0cnMuaW1nVXJsO1xuICAgICAgICBpZihpbWcuY29tcGxldGUpIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXIuYWRkSW1hZ2UoYXR0cnMubWVzdG9TdmdJdGVtLCBhdHRycy5pbWdVcmwpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgY2xhc3MgU2hvd01vdmllQ29udHJvbGxlciB7XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCAkdGltZW91dCwgJHEpe1xuICAgICAgICB0aGlzLiRxID0gJHE7XG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgICAgIHRoaXMudmlkZW8gPSB7fTtcbiAgICAgICAgJHNjb3BlLiRvbigneW91dHViZS5wbGF5ZXIucGxheWluZycsICgkZXZlbnQsIHBsYXllcikgPT4ge1xuICAgICAgICAgICAgbGV0IHZpZGVvT2JqID0gdGhpcy5nZXRWaWRlb09iaihwbGF5ZXIpO1xuICAgICAgICAgICAgdGhpcy4kdGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICB2aWRlb09iai5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgICRzY29wZS4kb24oJ3lvdXR1YmUucGxheWVyLmVuZGVkJywgKCRldmVudCwgcGxheWVyKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmlkZW9PYmogPSB0aGlzLmdldFZpZGVvT2JqKHBsYXllcik7XG4gICAgICAgICAgICB2aWRlb09iai5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgYWRkVmlkZW8oY29kZSwgbGFzdCl7XG4gICAgICAgIHRoaXMudmlkZW9bY29kZV0gPSB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgbG9hZDogZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdCA9PSAnVHJ1ZScpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMudmlkZW8pLnJlZHVjZSgocCwga2V5KT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBwLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvW2tleV0ubG9hZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCB0aGlzLiR0aW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb1tjb2RlXS5sb2FkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0sIDMwMDApKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRWaWRlb09iaihwbGF5ZXIpe1xuICAgICAgICBsZXQgdmlkZW9JZCA9IHBsYXllci5nZXRWaWRlb0RhdGEoKS52aWRlb19pZDtcbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvW3ZpZGVvSWRdKSB7XG4gICAgICAgICAgICB0aGlzLnZpZGVvW3ZpZGVvSWRdID0ge1xuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbG9hZDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52aWRlb1t2aWRlb0lkXTtcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBjbGFzcyBTaG93RGV0YWlsIHtcblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsICR3aW5kb3cpIHtcbiAgICAgICAgdGhpcy4kd2luZG93ID0gJHdpbmRvdztcbiAgICAgICAgdGhpcy5wYXRoQXJyYXkgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnPycpXG4gICAgICAgIGlmICh0aGlzLnBhdGhBcnJheS5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgIHRoaXMucGF0aEFycmF5ID0gdGhpcy5wYXRoQXJyYXlbMV0uc3BsaXQoXCIjXCIpWzBdXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcmJylcbiAgICAgICAgICAgICAgICAucmVkdWNlKChkaWN0LCB2YWwpPT57XG4gICAgICAgICAgICAgICAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSB2YWwuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaWN0W2tleV0gPSBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaWN0O1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgICAgICRzY29wZS5zZWxlY3REYXRlID0gdGhpcy5wYXRoQXJyYXkuZGF0ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBTaG93c0ZpbHRlckNvbnRyb2xsZXIge1xuXG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgJHdpbmRvdykge1xuICAgICAgICB0aGlzLiR3aW5kb3cgPSAkd2luZG93O1xuICAgICAgICB0aGlzLnBhdGhBcnJheSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF0uc3BsaXQoJz8nKVxuICAgICAgICB0aGlzLnNlbGVjdCA9IHRoaXMucGF0aEFycmF5Lmxlbmd0aCA+IDE/IHRoaXMucGF0aEFycmF5WzFdXG4gICAgICAgICAgICAuc3BsaXQoJyYnKVxuICAgICAgICAgICAgLnJlZHVjZSgoZGljdCwgdmFsKT0+e1xuICAgICAgICAgICAgICAgIGxldCBba2V5LCB2YWx1ZV0gPSB2YWwuc3BsaXQoJz0nKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGljdFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkaWN0O1xuICAgICAgICAgICAgfSwge30pIDoge307XG4gICAgfVxuICAgIGNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5zZWFyY2goKVxuICAgIH1cbiAgICBzZWFyY2goKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dGhpcy5wYXRoQXJyYXlbMF19PyR7alF1ZXJ5LnBhcmFtKHRoaXMuc2VsZWN0KX1gO1xuICAgIH1cbn1cbiIsImNsYXNzIE1lc3RvQ3VzdG9tU2VsZWN0Q29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB2YXIgc2V0UGxhY2Vob2xkZXIgPSAodGV4dCk9Pnt9O1xuXG4gICAgICAgIHRoaXMubW9kZWxzID0ge307XG4gICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIgPSAoZnUpPT57XG4gICAgICAgICAgICBzZXRQbGFjZWhvbGRlciA9IGZ1O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZWxlY3RPcHRpb24gPSAodGV4dCk9PntcbiAgICAgICAgICAgIHNldFBsYWNlaG9sZGVyKHRleHQpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFkZE1vZGVsKG1vZGVsQ2FsbCkge1xuICAgIFx0bW9kZWxDYWxsKChyZXN1bHQpPT57XG4gICAgXHRcdHRoaXMubW9kZWxzW3Jlc3VsdC52YWx1ZV0gPSByZXN1bHQ7XG4gICAgXHR9KTtcbiAgICB9XG4gICAgc2VsZWN0TW9kZWwobW9kZWxWYWx1ZSkge1xuICAgICAgICB0aGlzLnNlbGVjdE9wdGlvbih0aGlzLm1vZGVsc1ttb2RlbFZhbHVlXS5uYW1lKVxuICAgIH1cbiAgICBzZXRUb2dnbGVPcGVuIChmdSl7XG4gICAgICAgIHRoaXMudG9nZ2xlT3BlbiA9IGZ1O1xuICAgIH1cbiAgICB0b2dnbGVPcGVuKCl7fTtcblxuICAgIHN0YXRpYyBmYWN0b3J5KC4uLmFyZ3MpIHtcbiAgICAgICAgTWVzdG9DdXN0b21TZWxlY3RDb250cm9sbGVyLmluc3RhbmNlID0gbmV3IE1lc3RvQ3VzdG9tU2VsZWN0Q29udHJvbGxlciguLi5hcmdzKTtcbiAgICAgICAgcmV0dXJuIE1lc3RvQ3VzdG9tU2VsZWN0Q29udHJvbGxlci5pbnN0YW5jZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgTWVzdG9DdXN0b21TZWxlY3Qge1xuXG4gICAgLypAbmdJbmplY3QqL1xuXHRjb25zdHJ1Y3RvcigkdGltZW91dCwgJGRvY3VtZW50KXtcbiAgICAgICAgdGhpcy4kdGltZW91dCA9ICR0aW1lb3V0O1xuXHRcdHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IE1lc3RvQ3VzdG9tU2VsZWN0Q29udHJvbGxlci5mYWN0b3J5O1xuICAgICAgICB0aGlzLiRkb2N1bWVudCA9ICRkb2N1bWVudDtcbiAgICB9XG4gICAgXG4gICAgbGluayAoJHNjb3BlLCBlbGVtZW50LCBhdHRycywgY29udHJvbGxlcil7XG4gICAgICAgIGxldCBtb2RlbFZhbHVlID0gJHNjb3BlLiRldmFsKGF0dHJzLm1lc3RvQ3VzdG9tU2VsZWN0KTtcbiAgICAgICAgaWYgKG1vZGVsVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuc2VsZWN0TW9kZWwobW9kZWxWYWx1ZSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGFuZ3VsYXIuZWxlbWVudChlLnRhcmdldCk7XG4gICAgICAgICAgICBpZiAoISh0YXJnZXQuaXMoZWxlbWVudCkgfHwgdGFyZ2V0LmNsb3Nlc3QoZWxlbWVudCkubGVuZ3RoKSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29udHJvbGxlci5zZXRUb2dnbGVPcGVuKCgpPT57XG4gICAgICAgICAgICBlbGVtZW50LnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICAgICBpZihlbGVtZW50Lmhhc0NsYXNzKCdvcGVuJykpIHtcbiAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQodGhpcy4kZG9jdW1lbnQpLm9uKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFuZ3VsYXIuZWxlbWVudCh0aGlzLiRkb2N1bWVudCkub2ZmKCdjbGljaycsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lc3RvQ3VzdG9tU2VsZWN0UGxhY2Vob2xkZXIge1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHRoaXMucmVzdHJpY3QgPSAnQSc7XG5cdFx0dGhpcy5yZXF1aXJlID0gJ15tZXN0b0N1c3RvbVNlbGVjdCc7XG4gICAgfVxuICAgIGxpbmsgKCRzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN1c3RvbVNlbGVjdENvbnRyb2xsZXIpIHtcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY3VzdG9tU2VsZWN0Q29udHJvbGxlci50b2dnbGVPcGVuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjdXN0b21TZWxlY3RDb250cm9sbGVyLnNldFBsYWNlaG9sZGVyKCh0ZXh0KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnRleHQodGV4dCk7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudCgpLnJlbW92ZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0N1c3RvbVNlbGVjdEl0ZW0ge1xuICAgIC8qQG5nSW5qZWN0Ki9cblx0Y29uc3RydWN0b3IoJHRpbWVvdXQpIHtcblx0XHR0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG5cdFx0dGhpcy5yZXN0cmljdCA9ICdBJztcblx0XHR0aGlzLnJlcXVpcmUgPSAnXm1lc3RvQ3VzdG9tU2VsZWN0JztcbiAgICB9XG4gICAgbGluaygkc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdXN0b21TZWxlY3RDb250cm9sbGVyKXtcbiAgICAgICAgY3VzdG9tU2VsZWN0Q29udHJvbGxlci5hZGRNb2RlbCgoY2FsbEJhY2spPT4ge1xuICAgICAgICBcdHRoaXMuJHRpbWVvdXQoKCk9Pntcblx0XHRcdFx0Y2FsbEJhY2soe1xuXHRcdFx0XHRcdG5hbWU6IGVsZW1lbnQuZmluZCgnbGFiZWwnKS50ZXh0KCksXG5cdFx0XHRcdFx0dmFsdWU6IGVsZW1lbnQuZmluZCgnaW5wdXQnKS52YWwoKVxuXHRcdFx0XHR9KVxuICAgICAgICBcdH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY3VzdG9tU2VsZWN0Q29udHJvbGxlci5zZWxlY3RPcHRpb24oZWxlbWVudC50ZXh0KCkpXG4gICAgICAgIH0pXG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIERyYWdnQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ14/c2xpZGVyTWFpbic7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIHZhciBkZWx0YV9pbmZvID0gMCxcbiAgICAgICAgICAgIHN0YXJ0X2luZm8gPSAwLFxuICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgIC5vbigndG91Y2hzdGFydCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBkZWx0YV9pbmZvID0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICBzdGFydF9pbmZvID0gZGVsdGFfaW5mbztcbiAgICAgICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ3RvdWNobW92ZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoZGVsdGFfaW5mbyAhPSB0b3VjaC5zY3JlZW5YKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bW0gKz0gZGVsdGFfaW5mbyAtIHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCd0b3VjaGVuZCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHN1bW0pID4gMTAwICYmIHNsaWRlck1haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJNYWluLm5leHQoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJNYWluLm5leHQoLTEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEhvcml6b250YWxTY3JvbGwge1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSdcbiAgICB9XG4gICAgbGluaygkc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHZhciB0aW1lb3V0LFxuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnRbMF0sXG4gICAgICAgICAgICBkZWx0YV9zdW0gPSAwLFxuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICBIYW1zdGVyKGVsZW1lbnQpLndoZWVsKChlLCBkZWx0YSwgZGVsdGFYLCBkZWx0YVkpPT57XG4gICAgICAgICAgICBpZiAoZGVsdGFYICYmICFkZWx0YVkpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgZGVsdGFfc3VtID0gMDtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGF0dHJzLmhvcml6b250YWxTY3JvbGwgPiAwICYmIGF0dHJzLmhvcml6b250YWxTY3JvbGwgPCB3aW5kb3cuaW5uZXJXaWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGRlbHRhX3N1bSArPSBkZWx0YVkqOCB8fCAwO1xuICAgICAgICAgICAgY291bnQgKz0gMTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKC9NYWNpbnRvc2gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zY3JvbGxMZWZ0ID0gZWxlbWVudC5zY3JvbGxMZWZ0IC0gZGVsdGFfc3VtO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCA9IGVsZW1lbnQuc2Nyb2xsTGVmdCAtIGRlbHRhX3N1bSoxNTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVsdGFfc3VtID0gMDtcbiAgICAgICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgICB9LCAxKTtcblxuICAgICAgICB9KSAgICBcbiAgICB9XG59XG4iLCJjbGFzcyBTbGlkZXJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLnNsaWRlID0gMDtcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSAwO1xuICAgICAgICB0aGlzLnNldFNsaWRlID0gKCk9Pnt9O1xuICAgICAgICB0aGlzLm1vdmVUb1NsaWRlVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMudHlwZU5hbWUgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5yZWFkeSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWxsSXRlbVJlYWR5ID0gKGxlbmd0aCk9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShsZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbG9uZXMgPSB7XG4gICAgICAgICAgICBzdGFydDogJycsXG4gICAgICAgICAgICBlbmQ6ICcnXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0VHlwZSh0eXBlTmFtZSl7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIDwgODAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50eXBlTmFtZSA9IHR5cGVOYW1lO1xuICAgICAgICB0aGlzLnJlYWR5LnRoZW4oKGxlbmd0aCk9PntcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGVOYW1lID09IFwic3dpdGNoXCIgJiYgbGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb25lcy5zdGFydCA9IHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGgtMV0uZWxlbS5jbG9uZU5vZGUoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9uZXMuc3RhcnQuY2xhc3NMaXN0LmFkZCgnY2xvbmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zWzBdLmVsZW0ucGFyZW50Tm9kZVxuICAgICAgICAgICAgICAgICAgICAuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9uZXMuc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zWzBdLmVsZW1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIHRoaXMuY2xvbmVzLmVuZCA9IHRoaXMuaXRlbXNbMF0uZWxlbS5jbG9uZU5vZGUoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9uZXMuZW5kLmNsYXNzTGlzdC5hZGQoJ2Nsb25lJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1swXS5lbGVtLnBhcmVudE5vZGVcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZENoaWxkKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9uZXMuZW5kXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVUb1NsaWRlKHRoaXMuc2xpZGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3Jlc2l6ZScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgc2V0IHNjcm9sbFBvc2l0aW9uKHZhbCl7XG4gICAgICAgIHRoaXMuc2xpZGUgPSB0aGlzLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpPT57XG4gICAgICAgICAgICBsZXQgZWxlbUluZm8gPSBpdGVtLmdldEVsZW1JbmZvKCk7XG4gICAgICAgICAgICBsZXQgY2VudGVyID0gdmFsICsgZWxlbUluZm8ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBpZiAoZWxlbUluZm8uc2V0QWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgZWxlbUluZm8uc2V0QWN0aXZlKHZhbCAtIGVsZW1JbmZvLm9mZnNldExlZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBkaWZmOiBNYXRoLmFicyhlbGVtSW5mby5jZW50ZXIgLSBjZW50ZXIpLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkucmVkdWNlKChtaW4sIGRlbHRhKT0+e1xuICAgICAgICAgICAgaWYgKG1pbi5kaWZmID4gZGVsdGEuZGlmZikge1xuICAgICAgICAgICAgICAgIG1pbiA9IGRlbHRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICB9LCB7ZGlmZjogOTk5OTksIGluZGV4OiAtMX0pLmluZGV4O1xuICAgICAgICB0aGlzLl9zY3JvbGxQb3NpdGlvbiA9IHZhbDtcbiAgICAgICAgdGhpcy5zZXRTbGlkZSh0aGlzLnNsaWRlKTtcbiAgICB9XG4gICAgc3dpdGNoKGZyb20sIHRvKSB7XG4gICAgICAgIGxldCBwYXJlbnROb2RlID0gdGhpcy5pdGVtc1swXS5lbGVtLnBhcmVudE5vZGU7XG4gICAgICAgIGxldCBub2RlTGlzdCA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICAgICAgICAgLmNhbGwocGFyZW50Tm9kZS5jaGlsZHJlbilcbiAgICAgICAgLy9wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0byA9PT0gbnVsbCA/IHRvIDogbm9kZUxpc3RbdG9dLCBub2RlTGlzdFtmcm9tXSk7XG4gICAgfVxuICAgIG1vdmVUb1NsaWRlKHBvc2l0aW9uLCBhbmltYXRlKXtcbiAgICAgICAgYW5pbWF0ZSA9IGFuaW1hdGUgPT09IHVuZGVmaW5lZCA/IHRydWU6IGFuaW1hdGU7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLm1vdmVUb1NsaWRlVGltZW91dCk7XG4gICAgICAgIHRoaXMubW92ZVRvU2xpZGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyKHRoaXMuaXRlbXNbcG9zaXRpb25dLmdldEVsZW1JbmZvKCkub2Zmc2V0TGVmdCwgYW5pbWF0ZSk7XG4gICAgICAgIH0sIDApOyAgIFxuICAgIH1cbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5pdGVtcy5wdXNoKGl0ZW0pIC0gMTtcbiAgICAgICAgaWYgKGluZGV4ID09IGl0ZW0uZWxlbS5wYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuYWxsSXRlbVJlYWR5KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG5ld0luZm8pID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdLmVsZW1JbmZvID0gbmV3SW5mbztcbiAgICAgICAgICAgIHRoaXMubW92ZVRvU2xpZGUodGhpcy5zbGlkZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQ29udGVudChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxuICAgIG5leHQoZGVsdGEpIHtcbiAgICAgICAgbGV0IG5leHQgPSB0aGlzLnNsaWRlICsgZGVsdGE7XG4gICAgICAgIGlmICh0aGlzLnR5cGVOYW1lID09IFwic3dpdGNoXCIpIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50SW5mbyA9IHRoaXMuaXRlbXNbdGhpcy5zbGlkZV0uZ2V0RWxlbUluZm8oKTtcbiAgICAgICAgICAgIGxldCBwcm9taXNlO1xuICAgICAgICAgICAgaWYgKG5leHQgPj0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuZXh0ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb25lcy5lbmQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLnNjcm9sbEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRJbmZvLm9mZnNldExlZnQrZWxlbWVudEluZm8ub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0IDwgMCkge1xuICAgICAgICAgICAgICAgIG5leHQgPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9uZXMuc3RhcnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgICAgICAgICAgICAgIHByb21pc2UgPSB0aGlzLnNjcm9sbEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRJbmZvLm9mZnNldExlZnQtZWxlbWVudEluZm8ub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlID0gdGhpcy5zY3JvbGxIYW5kbGVyKHRoaXMuaXRlbXNbbmV4dF0uZ2V0RWxlbUluZm8oKS5vZmZzZXRMZWZ0LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvbWlzZS50aGVuKCgpPT4ge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50SW5mbyA9IHRoaXMuaXRlbXNbbmV4dF0uZ2V0RWxlbUluZm8oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb25lcy5zdGFydC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9uZXMuZW5kLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIoXG4gICAgICAgICAgICAgICAgZWxlbWVudEluZm8ub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgICAgICBmYWxzZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5zbGlkZSA9IG5leHQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHQgPj0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5leHQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYobmV4dCA8IDApIHtcbiAgICAgICAgICAgIG5leHQgPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZShuZXh0KTtcbiAgICAgICAgdGhpcy5zbGlkZSA9IG5leHQ7XG4gICAgfVxuICAgIGFkZENvbnRyb2xsZXIoZGVsdGEpIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0KGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlcjtcbiAgICB9XG4gICAgc2V0Q291bnRlcihoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuc2V0U2xpZGUgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uID0gMDtcbiAgICB9XG4gICAgc3RhdGljIGZhY3RvcnkoLi4uYXJncykge1xuICAgICAgICBTbGlkZXJDb250cm9sbGVyLmluc3RhbmNlID0gbmV3IFNsaWRlckNvbnRyb2xsZXIoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiBTbGlkZXJDb250cm9sbGVyLmluc3RhbmNlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXJNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ3NsaWRlck1haW4nO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXIgPSBTbGlkZXJDb250cm9sbGVyLmZhY3Rvcnk7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIHNsaWRlck1haW4uc2V0VHlwZShhdHRycy5zbGlkZXJNYWluKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyQ29udGVudCB7XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoZWFzaW5nQW5pbWF0b3IpIHtcbiAgICAgICAgdGhpcy5lYXNpbmdBbmltYXRvciA9IGVhc2luZ0FuaW1hdG9yXG4gICAgICAgIHRoaXMuZWFzaW5nQW5pbWF0b3IuY2FsbEJhY2sgPSB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy50aW1lb3V0O1xuICAgIH1cbiAgICBhbmltYXRlKGluZm8pIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNjcm9sbExlZnQgPSBpbmZvLmxlZnQ7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnRbMF07XG4gICAgICAgIHNsaWRlck1haW4uYWRkQ29udGVudCgodmFsLCBhbmltYXRlKT0+e1xuICAgICAgICAgICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNjcm9sbExlZnQgPSB2YWxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFzaW5nQW5pbWF0b3IuZWFzZVByb3Aoe1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdmFsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVsZW1lbnQub24oJ3Njcm9sbCcsICgpPT57XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgIHNsaWRlck1haW4uc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmVsZW1lbnQuc2Nyb2xsTGVmdDsgIFxuICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNsaWRlckNvdW50ZXIge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3RvcigkdGltZW91dCkge1xuICAgICAgICB0aGlzLiR0aW1lb3V0ID0gJHRpbWVvdXQ7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoJHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICBzbGlkZXJNYWluLnNldENvdW50ZXIoKHZhbCk9PntcbiAgICAgICAgICAgIHRoaXMuJHRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAkc2NvcGUuc2VsZWN0ZWRTbGlkZSA9ICgxZTQrdmFsKzErXCJcIikuc2xpY2UoLTIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVySXRlbSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCR3aW5kb3cpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy4kd2luZG93ID0gYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpO1xuICAgICAgICB0aGlzLmVsZW1zID0gW107XG4gICAgICAgIHRoaXMudGltZW91dDtcbiAgICB9XG4gICAgZ2V0RWxlbUluZm8oaW5kZXgpIHtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1zW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZnNldExlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIGNlbnRlcjogZWxlbWVudC5vZmZzZXRMZWZ0ICsgZWxlbWVudC5vZmZzZXRXaWR0aC8yLFxuICAgICAgICAgICAgb2Zmc2V0V2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGhcbiAgICAgICAgfTtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5lbGVtcy5wdXNoKGVsZW1lbnRbMF0pIC0gMTtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBzbGlkZXJNYWluLmFkZEl0ZW0oe1xuICAgICAgICAgICAgZWxlbTogdGhpcy5lbGVtc1tpbmRleF0sXG4gICAgICAgICAgICBlbGVtSW5mbzogdGhpcy5nZXRFbGVtSW5mbyhpbmRleCksXG4gICAgICAgICAgICBnZXRFbGVtSW5mbzogKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbUluZm8oaW5kZXgpO1xuICAgICAgICAgICAgfSkuYmluZCh0aGlzLCBpbmRleClcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKT0+e1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICBoYW5kbGVyKHRoaXMuZ2V0RWxlbUluZm8oaW5kZXgpKTsgXG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBVbmlTbGlkZXJJdGVtIGV4dGVuZHMgU2xpZGVySXRlbSB7XG4gICAgZ2V0RWxlbUluZm8oaW5kZXgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggPCA4MDApIHtcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5nZXRFbGVtSW5mbyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1zW2luZGV4XTtcbiAgICAgICAgbGV0IGRvbUVsZW1zID0gIEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICAgICAgICAgLmNhbGwoZWxlbWVudC5wYXJlbnROb2RlLmNoaWxkcmVuKTtcbiAgICAgICAgbGV0IGRvbUluZGV4ID1kb21FbGVtc1xuICAgICAgICAgICAgLmluZGV4T2YoZWxlbWVudCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb21JbmRleDogZG9tSW5kZXgsXG4gICAgICAgICAgICBvZmZzZXRMZWZ0OiAhZG9tSW5kZXg/IDA6XG4gICAgICAgICAgICAgICAgZWxlbWVudC5vZmZzZXRMZWZ0IC0gZG9tRWxlbXNbMF0ub2Zmc2V0TGVmdCxcbiAgICAgICAgICAgIGNlbnRlcjogIWRvbUluZGV4PyBlbGVtZW50Lm9mZnNldExlZnQgKyBlbGVtZW50Lm9mZnNldFdpZHRoLzIgOlxuICAgICAgICAgICAgICAgIGRvbUVsZW1zW2RvbUluZGV4LTFdLm9mZnNldExlZnQgKyBkb21FbGVtc1tkb21JbmRleC0xXS5vZmZzZXRXaWR0aC8yXG4gICAgICAgICAgICAgICAgICsgZWxlbWVudC5vZmZzZXRXaWR0aCxcbiAgICAgICAgICAgIG9mZnNldFdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgICAgc2V0QWN0aXZlOiAoZGVsdGEpPT57XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gTWF0aC5tYXgoMCwgMS4yLU1hdGguYWJzKGRlbHRhL2VsZW1lbnQub2Zmc2V0V2lkdGgpKTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoZWxlbWVudC5zdHlsZS5vcGFjaXR5IC0gMSkgPiAwLjIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU21hbGxTbGlkZXJJdGVtIGV4dGVuZHMgU2xpZGVySXRlbSB7XG4gICAgXG4gICAgZ2V0RWxlbUluZm8oaW5kZXgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGggPCA4MDApIHtcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5nZXRFbGVtSW5mbyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1zW2luZGV4XTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZnNldExlZnQ6IGVsZW1lbnQub2Zmc2V0TGVmdCAtIGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgICBjZW50ZXI6IGVsZW1lbnQub2Zmc2V0TGVmdCAtIGVsZW1lbnQub2Zmc2V0V2lkdGgvMixcbiAgICAgICAgICAgIG9mZnNldFdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgICAgIH1cbiAgICB9XG59XG4gICAgXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29udHJvbGwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXnNsaWRlck1haW4nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHNsaWRlck1haW4uYWRkQ29udHJvbGxlcigrYXR0cnMuc2xpZGVyQ29udHJvbGwpXG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHNsaWRlck1haW4pKVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBFYXNpbmdBbmltYXRvciB7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHQpe1xuICAgICAgICB2YXIgb3B0ID0ge307XG4gICAgICAgIHRoaXMuZWFzaW5nSW50ZXJ2YWwgPSBvcHQuZWFzaW5nSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBvcHQuZHVyYXRpb24gfHwgNTAwO1xuICAgICAgICB0aGlzLnN0ZXAgPSBvcHQuc3RlcCB8fCA1MDtcbiAgICAgICAgdGhpcy5lYXNpbmdGbiA9ICh0LCBiLCBjLCBkKSA9PntcbiAgICAgICAgICAgIGlmICgodC89ZC8yKSA8IDEpIHJldHVybiBjLzIqdCp0KnQqdCArIGI7XG4gICAgICAgICAgICByZXR1cm4gLWMvMiAqICgodC09MikqdCp0KnQgLSAyKSArIGI7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZWFzaW5nRm4gPSBvcHQuZWFzaW5nRm4gfHwgdGhpcy5lYXNpbmdGbjtcbiAgICAgICAgdGhpcy5jYWxsQmFjayA9IG9wdC5jYWxsQmFjayB8fCAoKT0+e307XG4gICAgfVxuICAgIG1ha2VGcm9tQ2FsbGJhY2sgKGNhbGxCYWNrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNhbGxCYWNrKVxuICAgICAgICByZXR1cm4gbmV3IEVhc2luZ0FuaW1hdG9yKHtcbiAgICAgICAgICAgIGNhbGxCYWNrOiBjYWxsQmFja1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWFzZVByb3AgKG9iaiwgcHJvcERpY3QpIHtcbiAgICAgICAgcHJvcERpY3QgPSBwcm9wRGljdCB8fCB7fTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgdCA9IDAsXG4gICAgICAgICAgICBvdXRfdmFscyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5lYXNpbmdJbnRlcnZhbCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBzZWxmLmVhc2luZ0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCk9PntcbiAgICAgICAgICAgICAgICB0Kz0gdGhpcy5zdGVwO1xuICAgICAgICAgICAgICAgIGlmICh0ID49IHRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmVhc2luZ0ludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjayhwcm9wRGljdCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgcGVyY2VudCA9IHRoaXMuZWFzaW5nRm4odCwgMCwgMSwgdGhpcy5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMocHJvcERpY3QpLmZvckVhY2goKGtleSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkX3ZhbCA9IG9ialtrZXldO1xuICAgICAgICAgICAgICAgICAgICBvdXRfdmFsc1trZXldID0gb2xkX3ZhbCAtIHBlcmNlbnQqKG9sZF92YWwgLSBwcm9wRGljdFtrZXldKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxCYWNrKG91dF92YWxzKTtcbiAgICAgICAgICAgIH0sIHRoaXMuc3RlcCk7XG4gICAgICAgIH0pXG4gICAgfVxufTtcbiIsIi8qKlxuICogQSBoZWxwZXIgY2xhc3MgdG8gc2ltcGxpZnkgcmVnaXN0ZXJpbmcgQW5ndWxhciBjb21wb25lbnRzIGFuZCBwcm92aWRlIGEgY29uc2lzdGVudCBzeW50YXggZm9yIGRvaW5nIHNvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIoYXBwTmFtZSkge1xuXG4gICAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKGFwcE5hbWUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlyZWN0aXZlOiBkaXJlY3RpdmUsXG4gICAgICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gICAgICAgIHNlcnZpY2U6IHNlcnZpY2UsXG4gICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcbiAgICAgICAgZmFjdG9yeTogZmFjdG9yeVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgY29uc3RydWN0b3JGbikge1xuXG4gICAgICAgIGNvbnN0cnVjdG9yRm4gPSBfbm9ybWFsaXplQ29uc3RydWN0b3IoY29uc3RydWN0b3JGbik7XG5cbiAgICAgICAgaWYgKCFjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5jb21waWxlKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gZW1wdHkgY29tcGlsZSBmdW5jdGlvbiBpZiBub25lIHdhcyBkZWZpbmVkLlxuICAgICAgICAgICAgY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSA9ICgpID0+IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9yaWdpbmFsQ29tcGlsZUZuID0gX2Nsb25lRnVuY3Rpb24oY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSk7XG5cbiAgICAgICAgLy8gRGVjb3JhdGUgdGhlIGNvbXBpbGUgbWV0aG9kIHRvIGF1dG9tYXRpY2FsbHkgcmV0dXJuIHRoZSBsaW5rIG1ldGhvZCAoaWYgaXQgZXhpc3RzKVxuICAgICAgICAvLyBhbmQgYmluZCBpdCB0byB0aGUgY29udGV4dCBvZiB0aGUgY29uc3RydWN0b3IgKHNvIGB0aGlzYCB3b3JrcyBjb3JyZWN0bHkpLlxuICAgICAgICAvLyBUaGlzIGdldHMgYXJvdW5kIHRoZSBwcm9ibGVtIG9mIGEgbm9uLWxleGljYWwgXCJ0aGlzXCIgd2hpY2ggb2NjdXJzIHdoZW4gdGhlIGRpcmVjdGl2ZSBjbGFzcyBpdHNlbGZcbiAgICAgICAgLy8gcmV0dXJucyBgdGhpcy5saW5rYCBmcm9tIHdpdGhpbiB0aGUgY29tcGlsZSBmdW5jdGlvbi5cbiAgICAgICAgX292ZXJyaWRlKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLCAnY29tcGlsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxDb21waWxlRm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5saW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5saW5rLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGZhY3RvcnlBcnJheSA9IF9jcmVhdGVGYWN0b3J5QXJyYXkoY29uc3RydWN0b3JGbik7XG5cbiAgICAgICAgYXBwLmRpcmVjdGl2ZShuYW1lLCBmYWN0b3J5QXJyYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250cm9sbGVyKG5hbWUsIGNvbnRydWN0b3JGbikge1xuICAgICAgICBhcHAuY29udHJvbGxlcihuYW1lLCBjb250cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXJ2aWNlKG5hbWUsIGNvbnRydWN0b3JGbikge1xuICAgICAgICBhcHAuc2VydmljZShuYW1lLCBjb250cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm92aWRlcihuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIGFwcC5wcm92aWRlcihuYW1lLCBjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmFjdG9yeShuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIGNvbnN0cnVjdG9yRm4gPSBfbm9ybWFsaXplQ29uc3RydWN0b3IoY29uc3RydWN0b3JGbik7XG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICBhcHAuZmFjdG9yeShuYW1lLCBmYWN0b3J5QXJyYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgY29uc3RydWN0b3JGbiBpcyBhbiBhcnJheSBvZiB0eXBlIFsnZGVwMScsICdkZXAyJywgLi4uLCBjb25zdHJ1Y3RvcigpIHt9XVxuICAgICAqIHdlIG5lZWQgdG8gcHVsbCBvdXQgdGhlIGFycmF5IG9mIGRlcGVuZGVuY2llcyBhbmQgYWRkIGl0IGFzIGFuICRpbmplY3QgcHJvcGVydHkgb2YgdGhlXG4gICAgICogYWN0dWFsIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSBpbnB1dFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvckZuO1xuXG4gICAgICAgIGlmIChpbnB1dC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB2YXIgaW5qZWN0ZWQgPSBpbnB1dC5zbGljZSgwLCBpbnB1dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4gPSBpbnB1dFtpbnB1dC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4uJGluamVjdCA9IGluamVjdGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JGbiA9IGlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGludG8gYSBmYWN0b3J5IGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhhdFxuICAgICAqIGNvbnN0cnVjdG9yLCB3aXRoIHRoZSBjb3JyZWN0IGRlcGVuZGVuY2llcyBhdXRvbWF0aWNhbGx5IGluamVjdGVkIGFzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEluIG9yZGVyIHRvIGluamVjdCB0aGUgZGVwZW5kZW5jaWVzLCB0aGV5IG11c3QgYmUgYXR0YWNoZWQgdG8gdGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHdpdGggdGhlXG4gICAgICogYCRpbmplY3RgIHByb3BlcnR5IGFubm90YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uc3RydWN0b3JGblxuICAgICAqIEByZXR1cm5zIHtBcnJheS48VD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBhcnJheSBvZiBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgbmVlZGVkIGJ5IHRoaXMgY29tcG9uZW50IChhcyBjb250YWluZWQgaW4gdGhlIGAkaW5qZWN0YCBhcnJheSlcbiAgICAgICAgdmFyIGFyZ3MgPSBjb25zdHJ1Y3RvckZuLiRpbmplY3QgfHwgW107XG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBhcmdzLnNsaWNlKCk7IC8vIGNyZWF0ZSBhIGNvcHkgb2YgdGhlIGFycmF5XG4gICAgICAgIC8vIFRoZSBmYWN0b3J5QXJyYXkgdXNlcyBBbmd1bGFyJ3MgYXJyYXkgbm90YXRpb24gd2hlcmVieSBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IGlzIHRoZSBuYW1lIG9mIGFcbiAgICAgICAgLy8gZGVwZW5kZW5jeSwgYW5kIHRoZSBmaW5hbCBpdGVtIGlzIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICAgICAgZmFjdG9yeUFycmF5LnB1c2goKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIC8vcmV0dXJuIG5ldyBjb25zdHJ1Y3RvckZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yRm4oLi4uYXJncyk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZVtrZXldID0gaW5zdGFuY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZhY3RvcnlBcnJheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZSBhIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIG9yaWdpbmFsXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jbG9uZUZ1bmN0aW9uKG9yaWdpbmFsKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIGFuIG9iamVjdCdzIG1ldGhvZCB3aXRoIGEgbmV3IG9uZSBzcGVjaWZpZWQgYnkgYGNhbGxiYWNrYC5cbiAgICAgKiBAcGFyYW0gb2JqZWN0XG4gICAgICogQHBhcmFtIG1ldGhvZE5hbWVcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfb3ZlcnJpZGUob2JqZWN0LCBtZXRob2ROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBvYmplY3RbbWV0aG9kTmFtZV0gPSBjYWxsYmFjayhvYmplY3RbbWV0aG9kTmFtZV0pXG4gICAgfVxuXG59XG4iXX0=
