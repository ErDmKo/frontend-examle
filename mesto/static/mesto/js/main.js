(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var FeedbackFormController = (function () {
    /*@ngInject*/

    function FeedbackFormController($scope, feedbackResource, popUpSerivice) {
        _classCallCheck(this, FeedbackFormController);

        this.feedbackResource = feedbackResource;
        this.popUpSerivice = popUpSerivice;
        this.formData = {};
        this.errors = '';
    }
    FeedbackFormController.$inject = ["$scope", "feedbackResource", "popUpSerivice"];

    _createClass(FeedbackFormController, [{
        key: 'submit',
        value: function submit(form) {
            var _this = this;

            if (form.$invalid) {
                form.$setDirty();
            } else {
                var feedback = new this.feedbackResource(this.formData);
                feedback.$save().then(function () {
                    _this.popUpSerivice.close();
                })['catch'](function (response) {
                    _this.error = response;
                });
            }
        }
    }]);

    return FeedbackFormController;
})();

exports.FeedbackFormController = FeedbackFormController;

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

var _topNewsDirectivesSlider = require('./topNews/directives/slider');

var _topNewsDirectivesDraggController = require('./topNews/directives/draggController');

var _utilsRegister = require('./utils/register');

var _feedBackDirectivesFeedBack = require('./feedBack/directives/feedBack');

var _feedBackServicesPopUpService = require('./feedBack/services/popUpService');

var _feedBackServicesFeedbackResource = require('./feedBack/services/feedbackResource');

var _feedBackControllersFormController = require('./feedBack/controllers/FormController');

var app = angular.module('mesto', ['ngResource']);

(0, _utilsRegister.register)('mesto').directive('sliderMain', _topNewsDirectivesSlider.SliderMain).directive('sliderControll', _topNewsDirectivesSlider.SliderControll).directive('sliderContent', _topNewsDirectivesSlider.SliderContent).directive('sliderItem', _topNewsDirectivesSlider.SliderItem).directive('draggController', _topNewsDirectivesDraggController.DraggController).directive('mestoFeedbackItem', _feedBackDirectivesFeedBack.MestoFeedbackItem).directive('mestoFeedbackToggle', _feedBackDirectivesFeedBack.MestoFeedbackToggle).directive('mestoFeedbackClose', _feedBackDirectivesFeedBack.MestoFeedbackClose).directive('mestoFeedbackContanier', _feedBackDirectivesFeedBack.MestoFeedbackContnier).service('popUpSerivice', _feedBackServicesPopUpService.PopUpService).service('feedbackResource', _feedBackServicesFeedbackResource.FeedbackResource).controller('feedbackFormController', _feedBackControllersFormController.FeedbackFormController);
app.config(["$resourceProvider", "$httpProvider", function ($resourceProvider, $httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
angular.element(document).ready(angular.bootstrap.bind(angular, document, ['mesto']));

},{"./feedBack/controllers/FormController":1,"./feedBack/directives/feedBack":2,"./feedBack/services/feedbackResource":3,"./feedBack/services/popUpService":4,"./topNews/directives/draggController":6,"./topNews/directives/slider":7,"./utils/register":8}],6:[function(require,module,exports){
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

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL2ZlZWRCYWNrL2NvbnRyb2xsZXJzL0Zvcm1Db250cm9sbGVyLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9mZWVkQmFjay9kaXJlY3RpdmVzL2ZlZWRCYWNrLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9mZWVkQmFjay9zZXJ2aWNlcy9mZWVkYmFja1Jlc291cmNlLmpzIiwiL1VzZXJzL2VyZG1rby9BcHBsaWNhdGlvbnMvbWVzdG8vc3JjL2FwcC9qcy9mZWVkQmFjay9zZXJ2aWNlcy9wb3BVcFNlcnZpY2UuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL21haW4uanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9kcmFnZ0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9zbGlkZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3V0aWxzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQ0FhLHNCQUFzQjs7O0FBRXBCLGFBRkYsc0JBQXNCLENBRW5CLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUU7OEJBRjVDLHNCQUFzQjs7QUFHM0IsWUFBSSxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO0FBQ3pDLFlBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ25DLFlB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Q0FBQyxhQUFhLEVBQUU7O0FBRXhDLFlBQUksSUFBSSxHQUFHLGFBQWEsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ3ZDLFlBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7O0FBR2hDLG9CQUFZLENBQUMsSUFBSSxDQUFDLFlBQWE7OENBQVQsSUFBSTtBQUFKLG9CQUFJOzs7O0FBRXRCLGdCQUFJLFFBQVEsb0JBQU8sYUFBYSxnQkFBSSxJQUFJLEtBQUMsQ0FBQztBQUMxQyxpQkFBSyxJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUU7QUFDdEIsd0JBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDakM7QUFDRCxtQkFBTyxRQUFRLENBQUM7U0FDbkIsQ0FBQyxDQUFDOztBQUVILGVBQU8sWUFBWSxDQUFDO0tBQ3ZCOzs7Ozs7O0FBT0QsYUFBUyxjQUFjLENBQUMsUUFBUSxFQUFFO0FBQzlCLGVBQU8sWUFBVztBQUNkLG1CQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzFDLENBQUM7S0FDTDs7Ozs7Ozs7QUFRRCxhQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRTtBQUM3QyxjQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0tBQ3BEO0NBRUoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGNsYXNzIEZlZWRiYWNrRm9ybUNvbnRyb2xsZXIgeyBcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IoJHNjb3BlLCBmZWVkYmFja1Jlc291cmNlLCBwb3BVcFNlcml2aWNlKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tSZXNvdXJjZSA9IGZlZWRiYWNrUmVzb3VyY2U7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZSA9IHBvcFVwU2VyaXZpY2U7XG4gICAgICAgIHRoaXMuZm9ybURhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSAnJztcbiAgICB9XG4gICAgc3VibWl0KGZvcm0pe1xuICAgICAgICBpZiAoZm9ybS4kaW52YWxpZCkge1xuICAgICAgICAgICAgZm9ybS4kc2V0RGlydHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBmZWVkYmFjayA9IG5ldyB0aGlzLmZlZWRiYWNrUmVzb3VyY2UodGhpcy5mb3JtRGF0YSk7XG4gICAgICAgICAgICBmZWVkYmFjay4kc2F2ZSgpXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wVXBTZXJpdmljZS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrVG9nZ2xlIHtcbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMucG9wVXBTZXJpdmljZVxuICAgICAgICAgICAgLmFkZFRvZ2dsZXIoYXR0cnMubWVzdG9GZWVkYmFja1RvZ2dsZSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHRoaXMucG9wVXBTZXJpdmljZSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrQ29udG5pZXIge1xuICAgIHN0YXRpYyBnZXQgVE9HR0xFX0NMQVNTKCkge1xuICAgICAgICByZXR1cm4gJ2ZpeGVkUG9wVXAnOyBcbiAgICB9XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICBsZXQgaGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQudG9nZ2xlQ2xhc3MoTWVzdG9GZWVkYmFja0NvbnRuaWVyLlRPR0dMRV9DTEFTUyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wb3BVcFNlcml2aWNlXG4gICAgICAgICAgICAuYWRkQ29udGFuaWVyKGF0dHJzLm1lc3RvRmVlZGJhY2tDb250YW5pZXIsIGhhbmRsZXIpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrQ2xvc2Uge1xuICAgIC8qQG5nSW5qZWN0Ki9cbiAgICBjb25zdHJ1Y3Rvcihwb3BVcFNlcml2aWNlKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMucG9wVXBTZXJpdmljZSA9IHBvcFVwU2VyaXZpY2U7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gdGhpcy5wb3BVcFNlcml2aWNlLmNsb3NlKGF0dHJzLm1lc3RvRmVlZGJhY2tDbG9zZSk7XG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHRoaXMucG9wVXBTZXJpdmljZSkpO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBNZXN0b0ZlZWRiYWNrSXRlbSB7XG4gICAgc3RhdGljIGdldCBUT0dHTEVfQ0xBU1MoKSB7XG4gICAgICAgIHJldHVybiAnYWN0aXZlJztcbiAgICB9XG5cbiAgICAvKkBuZ0luamVjdCovXG4gICAgY29uc3RydWN0b3IocG9wVXBTZXJpdmljZSkge1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2UgPSBwb3BVcFNlcml2aWNlO1xuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC50b2dnbGVDbGFzcyhNZXN0b0ZlZWRiYWNrSXRlbS5UT0dHTEVfQ0xBU1MpO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnBvcFVwU2VyaXZpY2VcbiAgICAgICAgICAgIC5hZGRJdGVtKGF0dHJzLm1lc3RvRmVlZGJhY2tJdGVtLCB0aGlzLnRvZ2dsZS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRmVlZGJhY2tSZXNvdXJjZSB7XG4gICAgLypAbmdJbmplY3QqL1xuICAgIGNvbnN0cnVjdG9yKCRyZXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gJHJlc291cmNlKENPTkZJRy51cmxzLmZlZWRiYWNrRm9ybSk7XG4gICAgfVxufVxuIiwiY2xhc3MgUG9wVXAge1xuICAgIGNvbnN0cnVjdG9yKGl0ZW1IYW5kbGVyKXtcbiAgICAgICAgdGhpcy5pdGVtSGFuZGxlciA9IGl0ZW1IYW5kbGVyO1xuICAgIH1cbiAgICB0b2dnbGVJdGVtKCkge1xuICAgICAgICBpZiAoUG9wVXAuY29udGFuaWVySGFuZGxlcikge1xuICAgICAgICAgICAgUG9wVXAuY29udGFuaWVySGFuZGxlcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXRlbUhhbmRsZXIoKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUG9wVXBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3BVcHMgPSB7fTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtTmFtZSwgaGFuZGxlcikge1xuICAgICAgICB0aGlzLnBvcFVwc1tpdGVtTmFtZV0gPSBuZXcgUG9wVXAoaGFuZGxlcik7XG4gICAgfVxuICAgIGNsb3NlKGl0ZW1OYW1lKSB7XG4gICAgICAgIGlmICghaXRlbU5hbWUpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMucG9wVXBzKS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5wb3BVcHNba2V5XS50b2dnbGVJdGVtKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHBvcFVwID0gdGhpcy5wb3BVcHNbaXRlbU5hbWVdXG4gICAgICAgICAgICBpZiAocG9wVXApIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcG9wVXAudG9nZ2xlSXRlbSgpXG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZENvbnRhbmllcihwb3BVcE5hbWUsIGhhbmRlcikge1xuICAgICAgICBQb3BVcC5jb250YW5pZXJIYW5kbGVyID0gaGFuZGVyO1xuICAgIH1cbiAgICBhZGRUb2dnbGVyKHBvcFVwTmFtZSkge1xuICAgICAgICByZXR1cm4gKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIChbdGhpcy5wb3BVcHNbcG9wVXBOYW1lXV0gfHwgW10pXG4gICAgICAgICAgICAgICAgLmZvckVhY2goKHBvcFVwKT0+e1xuICAgICAgICAgICAgICAgICAgIHBvcFVwLnRvZ2dsZUl0ZW0oKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2xpZGVyTWFpbiwgU2xpZGVyQ29udGVudCwgU2xpZGVyQ29udHJvbGwsIFNsaWRlckl0ZW0gfSBmcm9tICcuL3RvcE5ld3MvZGlyZWN0aXZlcy9zbGlkZXInO1xuaW1wb3J0IHsgRHJhZ2dDb250cm9sbGVyIH0gZnJvbSAnLi90b3BOZXdzL2RpcmVjdGl2ZXMvZHJhZ2dDb250cm9sbGVyJztcbmltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAnLi91dGlscy9yZWdpc3Rlcic7XG5pbXBvcnQgeyBcbiAgICBNZXN0b0ZlZWRiYWNrSXRlbSxcbiAgICBNZXN0b0ZlZWRiYWNrVG9nZ2xlLFxuICAgIE1lc3RvRmVlZGJhY2tDbG9zZSxcbiAgICBNZXN0b0ZlZWRiYWNrQ29udG5pZXJcbn0gZnJvbSAnLi9mZWVkQmFjay9kaXJlY3RpdmVzL2ZlZWRCYWNrJztcbmltcG9ydCB7IFBvcFVwU2VydmljZSB9IGZyb20gJy4vZmVlZEJhY2svc2VydmljZXMvcG9wVXBTZXJ2aWNlJztcbmltcG9ydCB7IEZlZWRiYWNrUmVzb3VyY2UgfSBmcm9tICcuL2ZlZWRCYWNrL3NlcnZpY2VzL2ZlZWRiYWNrUmVzb3VyY2UnO1xuaW1wb3J0IHsgRmVlZGJhY2tGb3JtQ29udHJvbGxlciB9IGZyb20gJy4vZmVlZEJhY2svY29udHJvbGxlcnMvRm9ybUNvbnRyb2xsZXInO1xudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdtZXN0bycsIFsnbmdSZXNvdXJjZSddKTtcblxucmVnaXN0ZXIoJ21lc3RvJylcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJNYWluJywgU2xpZGVyTWFpbilcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJDb250cm9sbCcsIFNsaWRlckNvbnRyb2xsKVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckNvbnRlbnQnLCBTbGlkZXJDb250ZW50KVxuICAgIC5kaXJlY3RpdmUoJ3NsaWRlckl0ZW0nLCBTbGlkZXJJdGVtKVxuICAgIC5kaXJlY3RpdmUoJ2RyYWdnQ29udHJvbGxlcicsIERyYWdnQ29udHJvbGxlcilcblxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tJdGVtJywgTWVzdG9GZWVkYmFja0l0ZW0pXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja1RvZ2dsZScsIE1lc3RvRmVlZGJhY2tUb2dnbGUpXG4gICAgLmRpcmVjdGl2ZSgnbWVzdG9GZWVkYmFja0Nsb3NlJywgTWVzdG9GZWVkYmFja0Nsb3NlKVxuICAgIC5kaXJlY3RpdmUoJ21lc3RvRmVlZGJhY2tDb250YW5pZXInLCBNZXN0b0ZlZWRiYWNrQ29udG5pZXIpXG4gICAgLnNlcnZpY2UoJ3BvcFVwU2VyaXZpY2UnLCBQb3BVcFNlcnZpY2UpXG5cbiAgICAuc2VydmljZSgnZmVlZGJhY2tSZXNvdXJjZScsIEZlZWRiYWNrUmVzb3VyY2UpXG4gICAgLmNvbnRyb2xsZXIoJ2ZlZWRiYWNrRm9ybUNvbnRyb2xsZXInLCBGZWVkYmFja0Zvcm1Db250cm9sbGVyKVxuYXBwLmNvbmZpZygoJHJlc291cmNlUHJvdmlkZXIsICRodHRwUHJvdmlkZXIpPT4ge1xuICAgICRodHRwUHJvdmlkZXIuZGVmYXVsdHMueHNyZkNvb2tpZU5hbWUgPSAnY3NyZnRva2VuJztcbiAgICAkaHR0cFByb3ZpZGVyLmRlZmF1bHRzLnhzcmZIZWFkZXJOYW1lID0gJ1gtQ1NSRlRva2VuJztcbiAgICAkcmVzb3VyY2VQcm92aWRlci5kZWZhdWx0cy5zdHJpcFRyYWlsaW5nU2xhc2hlcyA9IGZhbHNlO1xufSlcbmFuZ3VsYXJcbiAgICAuZWxlbWVudChkb2N1bWVudClcbiAgICAucmVhZHkoYW5ndWxhci5ib290c3RyYXAuYmluZChhbmd1bGFyLCBkb2N1bWVudCwgWydtZXN0byddKSk7XG4iLCJleHBvcnQgY2xhc3MgRHJhZ2dDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXj9zbGlkZXJNYWluJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgdmFyIGRlbHRhX2luZm8gPSAwLFxuICAgICAgICAgICAgc3RhcnRfaW5mbyA9IDAsXG4gICAgICAgICAgICBzdW1tID0gMDtcbiAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLm9uKCd0b3VjaHN0YXJ0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIHN0YXJ0X2luZm8gPSBkZWx0YV9pbmZvO1xuICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGlmIChkZWx0YV9pbmZvICE9IHRvdWNoLnNjcmVlblgpIHtcbiAgICAgICAgICAgICAgICAgICAgc3VtbSArPSBkZWx0YV9pbmZvIC0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGFfaW5mbyA9IHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ3RvdWNoZW5kJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoc3VtbSkgPiAxMDAgJiYgc2xpZGVyTWFpbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3VtbSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlck1haW4ubmV4dCgxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlck1haW4ubmV4dCgtMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgZGVsdGFfaW5mbyA9IHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJjbGFzcyBTbGlkZXJDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLnNsaWRlID0gMDtcbiAgICB9XG4gICAgbW92ZVRvU2xpZGUocG9zaXRpb24pe1xuICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIodGhpcy5pdGVtc1twb3NpdGlvbl0uZWxlbS5vZmZzZXRMZWZ0KTtcbiAgICB9XG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKVxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb3ZlVG9TbGlkZSh0aGlzLnNsaWRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDb250ZW50KGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gaGFuZGxlcjtcbiAgICB9XG4gICAgbmV4dChkZWx0YSkge1xuICAgICAgICBsZXQgbmV4dCA9IHRoaXMuc2xpZGUgKyBkZWx0YTtcbiAgICAgICAgaWYgKG5leHQgPj0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5leHQgPSAwO1xuICAgICAgICB9IGVsc2UgaWYobmV4dCA8IDApIHtcbiAgICAgICAgICAgIG5leHQgPSB0aGlzLml0ZW1zLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zbGlkZSA9IG5leHQ7XG4gICAgICAgIHRoaXMubW92ZVRvU2xpZGUodGhpcy5zbGlkZSk7XG4gICAgfVxuICAgIGFkZENvbnRyb2xsZXIoZGVsdGEpIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5uZXh0KGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlcjtcbiAgICB9XG4gICAgc3RhdGljIGZhY3RvcnkoLi4uYXJncykge1xuICAgICAgICBTbGlkZXJDb250cm9sbGVyLmluc3RhbmNlID0gbmV3IFNsaWRlckNvbnRyb2xsZXIoLi4uYXJncyk7XG4gICAgICAgIHJldHVybiBTbGlkZXJDb250cm9sbGVyLmluc3RhbmNlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXJNYWluIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5jb250cm9sbGVyID0gU2xpZGVyQ29udHJvbGxlci5mYWN0b3J5O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTbGlkZXJDb250ZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgc2xpZGVyTWFpbi5hZGRDb250ZW50KCh2YWwpPT57XG4gICAgICAgICAgICBlbGVtZW50WzBdLnNjcm9sbExlZnQgPSB2YWxcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTbGlkZXJJdGVtIHtcblxuICAgIGNvbnN0cnVjdG9yKCR3aW5kb3cpIHtcbiAgICAgICAgdGhpcy5yZXF1aXJlID0gJ15zbGlkZXJNYWluJztcbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy4kd2luZG93ID0gYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHNsaWRlck1haW4uYWRkSXRlbSh7XG4gICAgICAgICAgICBlbGVtOiBlbGVtZW50WzBdXG4gICAgICAgIH0pO1xuICAgICAgICBlbGVtZW50Lm9uKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVyLmJpbmQoc2xpZGVyTWFpbilcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyLmJpbmQoc2xpZGVyTWFpbikpO1xuICAgIH1cbn1cbiAgICBcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb250cm9sbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gc2xpZGVyTWFpbi5hZGRDb250cm9sbGVyKCthdHRycy5zbGlkZXJDb250cm9sbClcbiAgICAgICAgZWxlbWVudC5vbignY2xpY2snLCBoYW5kbGVyLmJpbmQoc2xpZGVyTWFpbikpXG4gICAgfVxufVxuIiwiLyoqXG4gKiBBIGhlbHBlciBjbGFzcyB0byBzaW1wbGlmeSByZWdpc3RlcmluZyBBbmd1bGFyIGNvbXBvbmVudHMgYW5kIHByb3ZpZGUgYSBjb25zaXN0ZW50IHN5bnRheCBmb3IgZG9pbmcgc28uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlcihhcHBOYW1lKSB7XG5cbiAgICB2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoYXBwTmFtZSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXJlY3RpdmU6IGRpcmVjdGl2ZSxcbiAgICAgICAgY29udHJvbGxlcjogY29udHJvbGxlcixcbiAgICAgICAgc2VydmljZTogc2VydmljZSxcbiAgICAgICAgcHJvdmlkZXI6IHByb3ZpZGVyLFxuICAgICAgICBmYWN0b3J5OiBmYWN0b3J5XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGRpcmVjdGl2ZShuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG5cbiAgICAgICAgY29uc3RydWN0b3JGbiA9IF9ub3JtYWxpemVDb25zdHJ1Y3Rvcihjb25zdHJ1Y3RvckZuKTtcblxuICAgICAgICBpZiAoIWNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmNvbXBpbGUpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBlbXB0eSBjb21waWxlIGZ1bmN0aW9uIGlmIG5vbmUgd2FzIGRlZmluZWQuXG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5jb21waWxlID0gKCkgPT4ge307XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3JpZ2luYWxDb21waWxlRm4gPSBfY2xvbmVGdW5jdGlvbihjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5jb21waWxlKTtcblxuICAgICAgICAvLyBEZWNvcmF0ZSB0aGUgY29tcGlsZSBtZXRob2QgdG8gYXV0b21hdGljYWxseSByZXR1cm4gdGhlIGxpbmsgbWV0aG9kIChpZiBpdCBleGlzdHMpXG4gICAgICAgIC8vIGFuZCBiaW5kIGl0IHRvIHRoZSBjb250ZXh0IG9mIHRoZSBjb25zdHJ1Y3RvciAoc28gYHRoaXNgIHdvcmtzIGNvcnJlY3RseSkuXG4gICAgICAgIC8vIFRoaXMgZ2V0cyBhcm91bmQgdGhlIHByb2JsZW0gb2YgYSBub24tbGV4aWNhbCBcInRoaXNcIiB3aGljaCBvY2N1cnMgd2hlbiB0aGUgZGlyZWN0aXZlIGNsYXNzIGl0c2VsZlxuICAgICAgICAvLyByZXR1cm5zIGB0aGlzLmxpbmtgIGZyb20gd2l0aGluIHRoZSBjb21waWxlIGZ1bmN0aW9uLlxuICAgICAgICBfb3ZlcnJpZGUoY29uc3RydWN0b3JGbi5wcm90b3R5cGUsICdjb21waWxlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbENvbXBpbGVGbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLmxpbmsuYmluZCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZmFjdG9yeUFycmF5ID0gX2NyZWF0ZUZhY3RvcnlBcnJheShjb25zdHJ1Y3RvckZuKTtcblxuICAgICAgICBhcHAuZGlyZWN0aXZlKG5hbWUsIGZhY3RvcnlBcnJheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbnRyb2xsZXIobmFtZSwgY29udHJ1Y3RvckZuKSB7XG4gICAgICAgIGFwcC5jb250cm9sbGVyKG5hbWUsIGNvbnRydWN0b3JGbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlcnZpY2UobmFtZSwgY29udHJ1Y3RvckZuKSB7XG4gICAgICAgIGFwcC5zZXJ2aWNlKG5hbWUsIGNvbnRydWN0b3JGbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb3ZpZGVyKG5hbWUsIGNvbnN0cnVjdG9yRm4pIHtcbiAgICAgICAgYXBwLnByb3ZpZGVyKG5hbWUsIGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmYWN0b3J5KG5hbWUsIGNvbnN0cnVjdG9yRm4pIHtcbiAgICAgICAgY29uc3RydWN0b3JGbiA9IF9ub3JtYWxpemVDb25zdHJ1Y3Rvcihjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgdmFyIGZhY3RvcnlBcnJheSA9IF9jcmVhdGVGYWN0b3J5QXJyYXkoY29uc3RydWN0b3JGbik7XG4gICAgICAgIGFwcC5mYWN0b3J5KG5hbWUsIGZhY3RvcnlBcnJheSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBjb25zdHJ1Y3RvckZuIGlzIGFuIGFycmF5IG9mIHR5cGUgWydkZXAxJywgJ2RlcDInLCAuLi4sIGNvbnN0cnVjdG9yKCkge31dXG4gICAgICogd2UgbmVlZCB0byBwdWxsIG91dCB0aGUgYXJyYXkgb2YgZGVwZW5kZW5jaWVzIGFuZCBhZGQgaXQgYXMgYW4gJGluamVjdCBwcm9wZXJ0eSBvZiB0aGVcbiAgICAgKiBhY3R1YWwgY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gICAgICogQHBhcmFtIGlucHV0XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfbm9ybWFsaXplQ29uc3RydWN0b3IoaW5wdXQpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yRm47XG5cbiAgICAgICAgaWYgKGlucHV0LmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIHZhciBpbmplY3RlZCA9IGlucHV0LnNsaWNlKDAsIGlucHV0Lmxlbmd0aCAtIDEpO1xuICAgICAgICAgICAgY29uc3RydWN0b3JGbiA9IGlucHV0W2lucHV0Lmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgY29uc3RydWN0b3JGbi4kaW5qZWN0ID0gaW5qZWN0ZWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvckZuID0gaW5wdXQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JGbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IGEgY29uc3RydWN0b3IgZnVuY3Rpb24gaW50byBhIGZhY3RvcnkgZnVuY3Rpb24gd2hpY2ggcmV0dXJucyBhIG5ldyBpbnN0YW5jZSBvZiB0aGF0XG4gICAgICogY29uc3RydWN0b3IsIHdpdGggdGhlIGNvcnJlY3QgZGVwZW5kZW5jaWVzIGF1dG9tYXRpY2FsbHkgaW5qZWN0ZWQgYXMgYXJndW1lbnRzLlxuICAgICAqXG4gICAgICogSW4gb3JkZXIgdG8gaW5qZWN0IHRoZSBkZXBlbmRlbmNpZXMsIHRoZXkgbXVzdCBiZSBhdHRhY2hlZCB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24gd2l0aCB0aGVcbiAgICAgKiBgJGluamVjdGAgcHJvcGVydHkgYW5ub3RhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25zdHJ1Y3RvckZuXG4gICAgICogQHJldHVybnMge0FycmF5LjxUPn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jcmVhdGVGYWN0b3J5QXJyYXkoY29uc3RydWN0b3JGbikge1xuICAgICAgICAvLyBnZXQgdGhlIGFycmF5IG9mIGRlcGVuZGVuY2llcyB0aGF0IGFyZSBuZWVkZWQgYnkgdGhpcyBjb21wb25lbnQgKGFzIGNvbnRhaW5lZCBpbiB0aGUgYCRpbmplY3RgIGFycmF5KVxuICAgICAgICB2YXIgYXJncyA9IGNvbnN0cnVjdG9yRm4uJGluamVjdCB8fCBbXTtcbiAgICAgICAgdmFyIGZhY3RvcnlBcnJheSA9IGFyZ3Muc2xpY2UoKTsgLy8gY3JlYXRlIGEgY29weSBvZiB0aGUgYXJyYXlcbiAgICAgICAgLy8gVGhlIGZhY3RvcnlBcnJheSB1c2VzIEFuZ3VsYXIncyBhcnJheSBub3RhdGlvbiB3aGVyZWJ5IGVhY2ggZWxlbWVudCBvZiB0aGUgYXJyYXkgaXMgdGhlIG5hbWUgb2YgYVxuICAgICAgICAvLyBkZXBlbmRlbmN5LCBhbmQgdGhlIGZpbmFsIGl0ZW0gaXMgdGhlIGZhY3RvcnkgZnVuY3Rpb24gaXRzZWxmLlxuICAgICAgICBmYWN0b3J5QXJyYXkucHVzaCgoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgLy9yZXR1cm4gbmV3IGNvbnN0cnVjdG9yRm4oLi4uYXJncyk7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgY29uc3RydWN0b3JGbiguLi5hcmdzKTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBpbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlW2tleV0gPSBpbnN0YW5jZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmFjdG9yeUFycmF5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb25lIGEgZnVuY3Rpb25cbiAgICAgKiBAcGFyYW0gb3JpZ2luYWxcbiAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2Nsb25lRnVuY3Rpb24ob3JpZ2luYWwpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgYW4gb2JqZWN0J3MgbWV0aG9kIHdpdGggYSBuZXcgb25lIHNwZWNpZmllZCBieSBgY2FsbGJhY2tgLlxuICAgICAqIEBwYXJhbSBvYmplY3RcbiAgICAgKiBAcGFyYW0gbWV0aG9kTmFtZVxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9vdmVycmlkZShvYmplY3QsIG1ldGhvZE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIG9iamVjdFttZXRob2ROYW1lXSA9IGNhbGxiYWNrKG9iamVjdFttZXRob2ROYW1lXSlcbiAgICB9XG5cbn1cbiJdfQ==
