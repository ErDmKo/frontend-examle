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

var _utilsRegister = require('./utils/register');

var _feedBackDirectivesFeedBack = require('./feedBack/directives/feedBack');

var _clickFadeDirectivesClickFade = require('./clickFade/directives/clickFade');

var _feedBackServicesPopUpService = require('./feedBack/services/popUpService');

var _feedBackServicesFeedbackResource = require('./feedBack/services/feedbackResource');

var _feedBackControllersFormController = require('./feedBack/controllers/FormController');

var app = angular.module('mesto', ['ngResource']);

(0, _utilsRegister.register)('mesto').directive('sliderMain', _topNewsDirectivesSlider.SliderMain).directive('sliderControll', _topNewsDirectivesSlider.SliderControll).directive('sliderContent', _topNewsDirectivesSlider.SliderContent).directive('sliderItem', _topNewsDirectivesSlider.SliderItem).directive('draggController', _topNewsDirectivesDraggController.DraggController).directive('mestoFeedbackItem', _feedBackDirectivesFeedBack.MestoFeedbackItem).directive('mestoFeedbackToggle', _feedBackDirectivesFeedBack.MestoFeedbackToggle).directive('mestoFeedbackClose', _feedBackDirectivesFeedBack.MestoFeedbackClose).directive('mestoFeedbackContanier', _feedBackDirectivesFeedBack.MestoFeedbackContnier).service('popUpSerivice', _feedBackServicesPopUpService.PopUpService).service('feedbackResource', _feedBackServicesFeedbackResource.FeedbackResource).controller('feedbackFormController', _feedBackControllersFormController.FeedbackFormController).directive('mestoClickFade', _clickFadeDirectivesClickFade.MestoClickFade);

app.config(["$resourceProvider", "$httpProvider", function ($resourceProvider, $httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
angular.element(document).ready(angular.bootstrap.bind(angular, document, ['mesto']));

},{"./clickFade/directives/clickFade":1,"./feedBack/controllers/FormController":2,"./feedBack/directives/feedBack":3,"./feedBack/services/feedbackResource":4,"./feedBack/services/popUpService":5,"./topNews/directives/draggController":7,"./topNews/directives/slider":8,"./utils/register":9}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2suanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZS5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvbWFpbi5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9kaXJlY3RpdmVzL2RyYWdnQ29udHJvbGxlci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdG9wTmV3cy9kaXJlY3RpdmVzL3NsaWRlci5qcyIsIi9Vc2Vycy9lcmRta28vQXBwbGljYXRpb25zL21lc3RvL3NyYy9hcHAvanMvdXRpbHMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQWEsY0FBYzthQUFkLGNBQWM7OEJBQWQsY0FBYzs7O2lCQUFkLGNBQWM7O2VBT25CLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUU7QUFD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OztBQUdoQyxvQkFBWSxDQUFDLElBQUksQ0FBQyxZQUFhOzhDQUFULElBQUk7QUFBSixvQkFBSTs7OztBQUV0QixnQkFBSSxRQUFRLG9CQUFPLGFBQWEsZ0JBQUksSUFBSSxLQUFDLENBQUM7QUFDMUMsaUJBQUssSUFBSSxHQUFHLElBQUksUUFBUSxFQUFFO0FBQ3RCLHdCQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDO0FBQ0QsbUJBQU8sUUFBUSxDQUFDO1NBQ25CLENBQUMsQ0FBQzs7QUFFSCxlQUFPLFlBQVksQ0FBQztLQUN2Qjs7Ozs7OztBQU9ELGFBQVMsY0FBYyxDQUFDLFFBQVEsRUFBRTtBQUM5QixlQUFPLFlBQVc7QUFDZCxtQkFBTyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMxQyxDQUFDO0tBQ0w7Ozs7Ozs7O0FBUUQsYUFBUyxTQUFTLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUU7QUFDN0MsY0FBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQTtLQUNwRDtDQUVKIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBjbGFzcyBNZXN0b0NsaWNrRmFkZSB7XG4gICAgc3RhdGljIGdldCBUSU1FT1VUKCkge1xuICAgICAgICByZXR1cm4gMjAwO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0IEZBREVfQ0xBU1MoKSB7XG4gICAgICAgIHJldHVybiAnZmFkZSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoTWVzdG9DbGlja0ZhZGUuRkFERV9DTEFTUylcbiAgICAgICAgfSwgTWVzdG9DbGlja0ZhZGUuVElNRU9VVCk7XG4gICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgIC5hZGRDbGFzcyhNZXN0b0NsaWNrRmFkZS5GQURFX0NMQVNTKVxuICAgICAgICAgICAgLmZpbmQoJ2EuZmFkZUFuaW1hdG9yX19hbmNvcicpXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgbGV0IGhyZWYgPSB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hZGRDbGFzcyhNZXN0b0NsaWNrRmFkZS5GQURFX0NMQVNTKVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRmVlZGJhY2tGb3JtQ29udHJvbGxlciB7IFxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGZlZWRiYWNrUmVzb3VyY2UpIHtcbiAgICAgICAgdGhpcy5mZWVkYmFja1Jlc291cmNlID0gZmVlZGJhY2tSZXNvdXJjZTtcbiAgICAgICAgdGhpcy5mb3JtRGF0YSA9IHt9O1xuICAgICAgICB0aGlzLmVycm9ycyA9ICcnO1xuICAgICAgICB0aGlzLnN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB9XG4gICAgc3VibWl0KGZvcm0pe1xuICAgICAgICBpZiAoZm9ybS4kaW52YWxpZCkge1xuICAgICAgICAgICAgZm9ybS4kc2V0RGlydHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBmZWVkYmFjayA9IG5ldyB0aGlzLmZlZWRiYWNrUmVzb3VyY2UodGhpcy5mb3JtRGF0YSk7XG4gICAgICAgICAgICBmZWVkYmFjay4kc2F2ZSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3VjY2VzcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE1lc3RvRmVlZGJhY2tUb2dnbGUge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcihwb3BVcFNlcml2aWNlKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZSA9IHBvcFVwU2VyaXZpY2U7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gdGhpcy5wb3BVcFNlcml2aWNlXG4gICAgICAgICAgICAuYWRkVG9nZ2xlcihhdHRycy5tZXN0b0ZlZWRiYWNrVG9nZ2xlKTtcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBoYW5kbGVyLmJpbmQodGhpcy5wb3BVcFNlcml2aWNlKSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lc3RvRmVlZGJhY2tDb250bmllciB7XG4gICAgc3RhdGljIGdldCBUT0dHTEVfQ0xBU1MoKSB7XG4gICAgICAgIHJldHVybiAnZml4ZWRQb3BVcCc7IFxuICAgIH1cblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcihwb3BVcFNlcml2aWNlKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZSA9IHBvcFVwU2VyaXZpY2U7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC50b2dnbGVDbGFzcyhNZXN0b0ZlZWRiYWNrQ29udG5pZXIuVE9HR0xFX0NMQVNTKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2VcbiAgICAgICAgICAgIC5hZGRDb250YW5pZXIoYXR0cnMubWVzdG9GZWVkYmFja0NvbnRhbmllciwgaGFuZGxlcik7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lc3RvRmVlZGJhY2tDbG9zZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKHBvcFVwU2VyaXZpY2UpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlID0gcG9wVXBTZXJpdmljZTtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSB0aGlzLnBvcFVwU2VyaXZpY2UuY2xvc2UoYXR0cnMubWVzdG9GZWVkYmFja0Nsb3NlKTtcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBoYW5kbGVyLmJpbmQodGhpcy5wb3BVcFNlcml2aWNlKSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lc3RvRmVlZGJhY2tJdGVtIHtcbiAgICBzdGF0aWMgZ2V0IFRPR0dMRV9DTEFTUygpIHtcbiAgICAgICAgcmV0dXJuICdhY3RpdmUnO1xuICAgIH1cblxuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcihwb3BVcFNlcml2aWNlKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZSA9IHBvcFVwU2VyaXZpY2U7XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRvZ2dsZUNsYXNzKE1lc3RvRmVlZGJhY2tJdGVtLlRPR0dMRV9DTEFTUyk7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZEl0ZW0oYXR0cnMubWVzdG9GZWVkYmFja0l0ZW0sIHRoaXMudG9nZ2xlLmJpbmQodGhpcykpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGZWVkYmFja1Jlc291cmNlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHJlc291cmNlKSB7XG4gICAgICAgIHJldHVybiAkcmVzb3VyY2UoQ09ORklHLnVybHMuZmVlZGJhY2tGb3JtKTtcbiAgICB9XG59XG4iLCJjbGFzcyBQb3BVcCB7XG4gICAgY29uc3RydWN0b3IoaXRlbUhhbmRsZXIpe1xuICAgICAgICB0aGlzLml0ZW1IYW5kbGVyID0gaXRlbUhhbmRsZXI7XG4gICAgfVxuICAgIHRvZ2dsZUl0ZW0oKSB7XG4gICAgICAgIGlmIChQb3BVcC5jb250YW5pZXJIYW5kbGVyKSB7XG4gICAgICAgICAgICBQb3BVcC5jb250YW5pZXJIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pdGVtSGFuZGxlcigpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQb3BVcFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvcFVwcyA9IHt9O1xuICAgIH1cbiAgICBhZGRJdGVtKGl0ZW1OYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMucG9wVXBzW2l0ZW1OYW1lXSA9IG5ldyBQb3BVcChoYW5kbGVyKTtcbiAgICB9XG4gICAgY2xvc2UoaXRlbU5hbWUpIHtcbiAgICAgICAgaWYgKCFpdGVtTmFtZSkge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wb3BVcHMpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgICAgICB0aGlzLnBvcFVwc1trZXldLnRvZ2dsZUl0ZW0oKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgICAgICBsZXQgcG9wVXAgPSB0aGlzLnBvcFVwc1tpdGVtTmFtZV1cbiAgICAgICAgICAgIGlmIChwb3BVcCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBwb3BVcC50b2dnbGVJdGVtKClcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQ29udGFuaWVyKHBvcFVwTmFtZSwgaGFuZGVyKSB7XG4gICAgICAgIFBvcFVwLmNvbnRhbmllckhhbmRsZXIgPSBoYW5kZXI7XG4gICAgfVxuICAgIGFkZFRvZ2dsZXIocG9wVXBOYW1lKSB7XG4gICAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgKFt0aGlzLnBvcFVwc1twb3BVcE5hbWVdXSB8fCBbXSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaCgocG9wVXApPT57XG4gICAgICAgICAgICAgICAgICAgcG9wVXAudG9nZ2xlSXRlbSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTbGlkZXJNYWluLCBTbGlkZXJDb250ZW50LCBTbGlkZXJDb250cm9sbCwgU2xpZGVySXRlbSB9IGZyb20gJy4vdG9wTmV3cy9kaXJlY3RpdmVzL3NsaWRlcic7XG5pbXBvcnQgeyBEcmFnZ0NvbnRyb2xsZXIgfSBmcm9tICcuL3RvcE5ld3MvZGlyZWN0aXZlcy9kcmFnZ0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICcuL3V0aWxzL3JlZ2lzdGVyJztcbmltcG9ydCB7IFxuICAgIE1lc3RvRmVlZGJhY2tJdGVtLFxuICAgIE1lc3RvRmVlZGJhY2tUb2dnbGUsXG4gICAgTWVzdG9GZWVkYmFja0Nsb3NlLFxuICAgIE1lc3RvRmVlZGJhY2tDb250bmllclxufSBmcm9tICcuL2ZlZWRCYWNrL2RpcmVjdGl2ZXMvZmVlZEJhY2snO1xuaW1wb3J0IHsgTWVzdG9DbGlja0ZhZGUgfSBmcm9tICcuL2NsaWNrRmFkZS9kaXJlY3RpdmVzL2NsaWNrRmFkZSc7XG5pbXBvcnQgeyBQb3BVcFNlcnZpY2UgfSBmcm9tICcuL2ZlZWRCYWNrL3NlcnZpY2VzL3BvcFVwU2VydmljZSc7XG5pbXBvcnQgeyBGZWVkYmFja1Jlc291cmNlIH0gZnJvbSAnLi9mZWVkQmFjay9zZXJ2aWNlcy9mZWVkYmFja1Jlc291cmNlJztcbmltcG9ydCB7IEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIgfSBmcm9tICcuL2ZlZWRCYWNrL2NvbnRyb2xsZXJzL0Zvcm1Db250cm9sbGVyJztcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnbWVzdG8nLCBbJ25nUmVzb3VyY2UnXSk7XG5cbnJlZ2lzdGVyKCdtZXN0bycpXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyTWFpbicsIFNsaWRlck1haW4pXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyQ29udHJvbGwnLCBTbGlkZXJDb250cm9sbClcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJDb250ZW50JywgU2xpZGVyQ29udGVudClcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJJdGVtJywgU2xpZGVySXRlbSlcbiAgICAuZGlyZWN0aXZlKCdkcmFnZ0NvbnRyb2xsZXInLCBEcmFnZ0NvbnRyb2xsZXIpXG5cbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrSXRlbScsIE1lc3RvRmVlZGJhY2tJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tUb2dnbGUnLCBNZXN0b0ZlZWRiYWNrVG9nZ2xlKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tDbG9zZScsIE1lc3RvRmVlZGJhY2tDbG9zZSlcbiAgICAuZGlyZWN0aXZlKCdtZXN0b0ZlZWRiYWNrQ29udGFuaWVyJywgTWVzdG9GZWVkYmFja0NvbnRuaWVyKVxuICAgIC5zZXJ2aWNlKCdwb3BVcFNlcml2aWNlJywgUG9wVXBTZXJ2aWNlKVxuXG4gICAgLnNlcnZpY2UoJ2ZlZWRiYWNrUmVzb3VyY2UnLCBGZWVkYmFja1Jlc291cmNlKVxuICAgIC5jb250cm9sbGVyKCdmZWVkYmFja0Zvcm1Db250cm9sbGVyJywgRmVlZGJhY2tGb3JtQ29udHJvbGxlcilcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvQ2xpY2tGYWRlJywgTWVzdG9DbGlja0ZhZGUpXG5cbmFwcC5jb25maWcoKCRyZXNvdXJjZVByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyKT0+IHtcbiAgICAkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLnhzcmZDb29raWVOYW1lID0gJ2NzcmZ0b2tlbic7XG4gICAgJGh0dHBQcm92aWRlci5kZWZhdWx0cy54c3JmSGVhZGVyTmFtZSA9ICdYLUNTUkZUb2tlbic7XG4gICAgJHJlc291cmNlUHJvdmlkZXIuZGVmYXVsdHMuc3RyaXBUcmFpbGluZ1NsYXNoZXMgPSBmYWxzZTtcbn0pXG5hbmd1bGFyXG4gICAgLmVsZW1lbnQoZG9jdW1lbnQpXG4gICAgLnJlYWR5KGFuZ3VsYXIuYm9vdHN0cmFwLmJpbmQoYW5ndWxhciwgZG9jdW1lbnQsIFsnbWVzdG8nXSkpO1xuIiwiZXhwb3J0IGNsYXNzIERyYWdnQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ14/c2xpZGVyTWFpbic7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIHZhciBkZWx0YV9pbmZvID0gMCxcbiAgICAgICAgICAgIHN0YXJ0X2luZm8gPSAwLFxuICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgIC5vbigndG91Y2hzdGFydCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBkZWx0YV9pbmZvID0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICBzdGFydF9pbmZvID0gZGVsdGFfaW5mbztcbiAgICAgICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ3RvdWNobW92ZScsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHRvdWNoID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgICAgICAgICAgICBpZiAoZGVsdGFfaW5mbyAhPSB0b3VjaC5zY3JlZW5YKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1bW0gKz0gZGVsdGFfaW5mbyAtIHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCd0b3VjaGVuZCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHN1bW0pID4gMTAwICYmIHNsaWRlck1haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJNYWluLm5leHQoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJNYWluLm5leHQoLTEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiY2xhc3MgU2xpZGVyQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5zbGlkZSA9IDA7XG4gICAgfVxuICAgIG1vdmVUb1NsaWRlKHBvc2l0aW9uKXtcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyKHRoaXMuaXRlbXNbcG9zaXRpb25dLmVsZW0ub2Zmc2V0TGVmdCk7XG4gICAgfVxuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSlcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZVRvU2xpZGUodGhpcy5zbGlkZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQ29udGVudChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxuICAgIG5leHQoZGVsdGEpIHtcbiAgICAgICAgbGV0IG5leHQgPSB0aGlzLnNsaWRlICsgZGVsdGE7XG4gICAgICAgIGlmIChuZXh0ID49IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBuZXh0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmKG5leHQgPCAwKSB7XG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2xpZGUgPSBuZXh0O1xuICAgICAgICB0aGlzLm1vdmVUb1NsaWRlKHRoaXMuc2xpZGUpO1xuICAgIH1cbiAgICBhZGRDb250cm9sbGVyKGRlbHRhKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV4dChkZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuICAgIHN0YXRpYyBmYWN0b3J5KC4uLmFyZ3MpIHtcbiAgICAgICAgU2xpZGVyQ29udHJvbGxlci5pbnN0YW5jZSA9IG5ldyBTbGlkZXJDb250cm9sbGVyKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gU2xpZGVyQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IFNsaWRlckNvbnRyb2xsZXIuZmFjdG9yeTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyQ29udGVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIHNsaWRlck1haW4uYWRkQ29udGVudCgodmFsKT0+e1xuICAgICAgICAgICAgZWxlbWVudFswXS5zY3JvbGxMZWZ0ID0gdmFsXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2xpZGVySXRlbSB7XG5cbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93KSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9IGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KTtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBzbGlkZXJNYWluLmFkZEl0ZW0oe1xuICAgICAgICAgICAgZWxlbTogZWxlbWVudFswXVxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5vbigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5iaW5kKHNsaWRlck1haW4pXG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlci5iaW5kKHNsaWRlck1haW4pKTtcbiAgICB9XG59XG4gICAgXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29udHJvbGwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXnNsaWRlck1haW4nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHNsaWRlck1haW4uYWRkQ29udHJvbGxlcigrYXR0cnMuc2xpZGVyQ29udHJvbGwpXG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHNsaWRlck1haW4pKVxuICAgIH1cbn1cbiIsIi8qKlxuICogQSBoZWxwZXIgY2xhc3MgdG8gc2ltcGxpZnkgcmVnaXN0ZXJpbmcgQW5ndWxhciBjb21wb25lbnRzIGFuZCBwcm92aWRlIGEgY29uc2lzdGVudCBzeW50YXggZm9yIGRvaW5nIHNvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIoYXBwTmFtZSkge1xuXG4gICAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKGFwcE5hbWUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlyZWN0aXZlOiBkaXJlY3RpdmUsXG4gICAgICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gICAgICAgIHNlcnZpY2U6IHNlcnZpY2UsXG4gICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcbiAgICAgICAgZmFjdG9yeTogZmFjdG9yeVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgY29uc3RydWN0b3JGbikge1xuXG4gICAgICAgIGNvbnN0cnVjdG9yRm4gPSBfbm9ybWFsaXplQ29uc3RydWN0b3IoY29uc3RydWN0b3JGbik7XG5cbiAgICAgICAgaWYgKCFjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5jb21waWxlKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gZW1wdHkgY29tcGlsZSBmdW5jdGlvbiBpZiBub25lIHdhcyBkZWZpbmVkLlxuICAgICAgICAgICAgY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSA9ICgpID0+IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9yaWdpbmFsQ29tcGlsZUZuID0gX2Nsb25lRnVuY3Rpb24oY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSk7XG5cbiAgICAgICAgLy8gRGVjb3JhdGUgdGhlIGNvbXBpbGUgbWV0aG9kIHRvIGF1dG9tYXRpY2FsbHkgcmV0dXJuIHRoZSBsaW5rIG1ldGhvZCAoaWYgaXQgZXhpc3RzKVxuICAgICAgICAvLyBhbmQgYmluZCBpdCB0byB0aGUgY29udGV4dCBvZiB0aGUgY29uc3RydWN0b3IgKHNvIGB0aGlzYCB3b3JrcyBjb3JyZWN0bHkpLlxuICAgICAgICAvLyBUaGlzIGdldHMgYXJvdW5kIHRoZSBwcm9ibGVtIG9mIGEgbm9uLWxleGljYWwgXCJ0aGlzXCIgd2hpY2ggb2NjdXJzIHdoZW4gdGhlIGRpcmVjdGl2ZSBjbGFzcyBpdHNlbGZcbiAgICAgICAgLy8gcmV0dXJucyBgdGhpcy5saW5rYCBmcm9tIHdpdGhpbiB0aGUgY29tcGlsZSBmdW5jdGlvbi5cbiAgICAgICAgX292ZXJyaWRlKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLCAnY29tcGlsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxDb21waWxlRm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5saW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5saW5rLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGZhY3RvcnlBcnJheSA9IF9jcmVhdGVGYWN0b3J5QXJyYXkoY29uc3RydWN0b3JGbik7XG5cbiAgICAgICAgYXBwLmRpcmVjdGl2ZShuYW1lLCBmYWN0b3J5QXJyYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250cm9sbGVyKG5hbWUsIGNvbnRydWN0b3JGbikge1xuICAgICAgICBhcHAuY29udHJvbGxlcihuYW1lLCBjb250cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXJ2aWNlKG5hbWUsIGNvbnRydWN0b3JGbikge1xuICAgICAgICBhcHAuc2VydmljZShuYW1lLCBjb250cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm92aWRlcihuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIGFwcC5wcm92aWRlcihuYW1lLCBjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmFjdG9yeShuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIGNvbnN0cnVjdG9yRm4gPSBfbm9ybWFsaXplQ29uc3RydWN0b3IoY29uc3RydWN0b3JGbik7XG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICBhcHAuZmFjdG9yeShuYW1lLCBmYWN0b3J5QXJyYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgY29uc3RydWN0b3JGbiBpcyBhbiBhcnJheSBvZiB0eXBlIFsnZGVwMScsICdkZXAyJywgLi4uLCBjb25zdHJ1Y3RvcigpIHt9XVxuICAgICAqIHdlIG5lZWQgdG8gcHVsbCBvdXQgdGhlIGFycmF5IG9mIGRlcGVuZGVuY2llcyBhbmQgYWRkIGl0IGFzIGFuICRpbmplY3QgcHJvcGVydHkgb2YgdGhlXG4gICAgICogYWN0dWFsIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSBpbnB1dFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvckZuO1xuXG4gICAgICAgIGlmIChpbnB1dC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB2YXIgaW5qZWN0ZWQgPSBpbnB1dC5zbGljZSgwLCBpbnB1dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4gPSBpbnB1dFtpbnB1dC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4uJGluamVjdCA9IGluamVjdGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JGbiA9IGlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGludG8gYSBmYWN0b3J5IGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhhdFxuICAgICAqIGNvbnN0cnVjdG9yLCB3aXRoIHRoZSBjb3JyZWN0IGRlcGVuZGVuY2llcyBhdXRvbWF0aWNhbGx5IGluamVjdGVkIGFzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEluIG9yZGVyIHRvIGluamVjdCB0aGUgZGVwZW5kZW5jaWVzLCB0aGV5IG11c3QgYmUgYXR0YWNoZWQgdG8gdGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHdpdGggdGhlXG4gICAgICogYCRpbmplY3RgIHByb3BlcnR5IGFubm90YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uc3RydWN0b3JGblxuICAgICAqIEByZXR1cm5zIHtBcnJheS48VD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBhcnJheSBvZiBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgbmVlZGVkIGJ5IHRoaXMgY29tcG9uZW50IChhcyBjb250YWluZWQgaW4gdGhlIGAkaW5qZWN0YCBhcnJheSlcbiAgICAgICAgdmFyIGFyZ3MgPSBjb25zdHJ1Y3RvckZuLiRpbmplY3QgfHwgW107XG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBhcmdzLnNsaWNlKCk7IC8vIGNyZWF0ZSBhIGNvcHkgb2YgdGhlIGFycmF5XG4gICAgICAgIC8vIFRoZSBmYWN0b3J5QXJyYXkgdXNlcyBBbmd1bGFyJ3MgYXJyYXkgbm90YXRpb24gd2hlcmVieSBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IGlzIHRoZSBuYW1lIG9mIGFcbiAgICAgICAgLy8gZGVwZW5kZW5jeSwgYW5kIHRoZSBmaW5hbCBpdGVtIGlzIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICAgICAgZmFjdG9yeUFycmF5LnB1c2goKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIC8vcmV0dXJuIG5ldyBjb25zdHJ1Y3RvckZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yRm4oLi4uYXJncyk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZVtrZXldID0gaW5zdGFuY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZhY3RvcnlBcnJheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZSBhIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIG9yaWdpbmFsXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jbG9uZUZ1bmN0aW9uKG9yaWdpbmFsKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIGFuIG9iamVjdCdzIG1ldGhvZCB3aXRoIGEgbmV3IG9uZSBzcGVjaWZpZWQgYnkgYGNhbGxiYWNrYC5cbiAgICAgKiBAcGFyYW0gb2JqZWN0XG4gICAgICogQHBhcmFtIG1ldGhvZE5hbWVcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfb3ZlcnJpZGUob2JqZWN0LCBtZXRob2ROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBvYmplY3RbbWV0aG9kTmFtZV0gPSBjYWxsYmFjayhvYmplY3RbbWV0aG9kTmFtZV0pXG4gICAgfVxuXG59XG4iXX0=
