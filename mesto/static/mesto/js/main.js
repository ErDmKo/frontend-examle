(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _topNewsDirectivesSlider = require('./topNews/directives/slider');

var _topNewsDirectivesDraggController = require('./topNews/directives/draggController');

var _utilsRegister = require('./utils/register');

var app = angular.module('mesto', []);

(0, _utilsRegister.register)('mesto').directive('sliderMain', _topNewsDirectivesSlider.SliderMain).directive('sliderControll', _topNewsDirectivesSlider.SliderControll).directive('sliderContent', _topNewsDirectivesSlider.SliderContent).directive('sliderItem', _topNewsDirectivesSlider.SliderItem).directive('draggController', _topNewsDirectivesDraggController.DraggController);

angular.element(document).ready(angular.bootstrap.bind(angular, document, ['mesto']));

},{"./topNews/directives/draggController":2,"./topNews/directives/slider":3,"./utils/register":4}],2:[function(require,module,exports){
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
        this.require = '^sliderMain';
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
                if (Math.abs(summ) > 100) {
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

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL21haW4uanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9kcmFnZ0NvbnRyb2xsZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3RvcE5ld3MvZGlyZWN0aXZlcy9zbGlkZXIuanMiLCIvVXNlcnMvZXJkbWtvL0FwcGxpY2F0aW9ucy9tZXN0by9zcmMvYXBwL2pzL3V0aWxzL3JlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7dUNDQXNFLDZCQUE2Qjs7Z0RBQ25FLHNDQUFzQzs7NkJBQzdDLGtCQUFrQjs7QUFDM0MsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7O0FBRXRDLDZCQUFTLE9BQU8sQ0FBQyxDQUNaLFNBQVMsQ0FBQyxZQUFZLHNDQUFhLENBQ25DLFNBQVMsQ0FBQyxnQkFBZ0IsMENBQWlCLENBQzNDLFNBQVMsQ0FBQyxlQUFlLHlDQUFnQixDQUN6QyxTQUFTLENBQUMsWUFBWSxzQ0FBYSxDQUNuQyxTQUFTLENBQUMsaUJBQWlCLG9EQUFrQixDQUFBOztBQUVsRCxPQUFPLENBQ0YsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUNqQixLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ2RwRCxlQUFlO0FBQ2IsYUFERixlQUFlLEdBQ1g7OEJBREosZUFBZTs7QUFFcEIsWUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7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SSxJQUFJLEdBQUcsYUFBYSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDdkMsWUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDOzs7QUFHaEMsb0JBQVksQ0FBQyxJQUFJLENBQUMsWUFBYTs4Q0FBVCxJQUFJO0FBQUosb0JBQUk7Ozs7QUFFdEIsZ0JBQUksUUFBUSxvQkFBTyxhQUFhLGdCQUFJLElBQUksS0FBQyxDQUFDO0FBQzFDLGlCQUFLLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtBQUN0Qix3QkFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNqQztBQUNELG1CQUFPLFFBQVEsQ0FBQztTQUNuQixDQUFDLENBQUM7O0FBRUgsZUFBTyxZQUFZLENBQUM7S0FDdkI7Ozs7Ozs7QUFPRCxhQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUU7QUFDOUIsZUFBTyxZQUFXO0FBQ2QsbUJBQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDMUMsQ0FBQztLQUNMOzs7Ozs7OztBQVFELGFBQVMsU0FBUyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFO0FBQzdDLGNBQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7S0FDcEQ7Q0FFSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyBTbGlkZXJNYWluLCBTbGlkZXJDb250ZW50LCBTbGlkZXJDb250cm9sbCwgU2xpZGVySXRlbSB9IGZyb20gJy4vdG9wTmV3cy9kaXJlY3RpdmVzL3NsaWRlcic7XG5pbXBvcnQgeyBEcmFnZ0NvbnRyb2xsZXIgfSBmcm9tICcuL3RvcE5ld3MvZGlyZWN0aXZlcy9kcmFnZ0NvbnRyb2xsZXInO1xuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICcuL3V0aWxzL3JlZ2lzdGVyJztcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnbWVzdG8nLCBbXSk7XG5cbnJlZ2lzdGVyKCdtZXN0bycpXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyTWFpbicsIFNsaWRlck1haW4pXG4gICAgLmRpcmVjdGl2ZSgnc2xpZGVyQ29udHJvbGwnLCBTbGlkZXJDb250cm9sbClcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJDb250ZW50JywgU2xpZGVyQ29udGVudClcbiAgICAuZGlyZWN0aXZlKCdzbGlkZXJJdGVtJywgU2xpZGVySXRlbSlcbiAgICAuZGlyZWN0aXZlKCdkcmFnZ0NvbnRyb2xsZXInLCBEcmFnZ0NvbnRyb2xsZXIpXG5cbmFuZ3VsYXJcbiAgICAuZWxlbWVudChkb2N1bWVudClcbiAgICAucmVhZHkoYW5ndWxhci5ib290c3RyYXAuYmluZChhbmd1bGFyLCBkb2N1bWVudCwgWydtZXN0byddKSk7XG4iLCJleHBvcnQgY2xhc3MgRHJhZ2dDb250cm9sbGVyIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXnNsaWRlck1haW4nO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICB2YXIgZGVsdGFfaW5mbyA9IDAsXG4gICAgICAgICAgICBzdGFydF9pbmZvID0gMCxcbiAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAub24oJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgZGVsdGFfaW5mbyA9IHRvdWNoLnNjcmVlblg7XG4gICAgICAgICAgICAgICAgc3RhcnRfaW5mbyA9IGRlbHRhX2luZm87XG4gICAgICAgICAgICAgICAgc3VtbSA9IDA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCd0b3VjaG1vdmUnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCB0b3VjaCA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgICAgICAgICAgaWYgKGRlbHRhX2luZm8gIT0gdG91Y2guc2NyZWVuWCkge1xuICAgICAgICAgICAgICAgICAgICBzdW1tICs9IGRlbHRhX2luZm8gLSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgICAgICBkZWx0YV9pbmZvID0gdG91Y2guc2NyZWVuWDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbigndG91Y2hlbmQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhzdW1tKSA+IDEwMCApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1bW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJNYWluLm5leHQoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXJNYWluLm5leHQoLTEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgdG91Y2ggPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICAgICAgICAgIGRlbHRhX2luZm8gPSB0b3VjaC5zY3JlZW5YO1xuICAgICAgICAgICAgICAgIHN1bW0gPSAwO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiY2xhc3MgU2xpZGVyQ29udHJvbGxlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5zbGlkZSA9IDA7XG4gICAgfVxuICAgIG1vdmVUb1NsaWRlKHBvc2l0aW9uKXtcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyKHRoaXMuaXRlbXNbcG9zaXRpb25dLmVsZW0ub2Zmc2V0TGVmdCk7XG4gICAgfVxuICAgIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSlcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW92ZVRvU2xpZGUodGhpcy5zbGlkZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQ29udGVudChoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxuICAgIG5leHQoZGVsdGEpIHtcbiAgICAgICAgbGV0IG5leHQgPSB0aGlzLnNsaWRlICsgZGVsdGE7XG4gICAgICAgIGlmIChuZXh0ID49IHRoaXMuaXRlbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBuZXh0ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmKG5leHQgPCAwKSB7XG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2xpZGUgPSBuZXh0O1xuICAgICAgICB0aGlzLm1vdmVUb1NsaWRlKHRoaXMuc2xpZGUpO1xuICAgIH1cbiAgICBhZGRDb250cm9sbGVyKGRlbHRhKSB7XG4gICAgICAgIGxldCBoYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmV4dChkZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXI7XG4gICAgfVxuICAgIHN0YXRpYyBmYWN0b3J5KC4uLmFyZ3MpIHtcbiAgICAgICAgU2xpZGVyQ29udHJvbGxlci5pbnN0YW5jZSA9IG5ldyBTbGlkZXJDb250cm9sbGVyKC4uLmFyZ3MpO1xuICAgICAgICByZXR1cm4gU2xpZGVyQ29udHJvbGxlci5pbnN0YW5jZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyTWFpbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuY29udHJvbGxlciA9IFNsaWRlckNvbnRyb2xsZXIuZmFjdG9yeTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU2xpZGVyQ29udGVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgfVxuICAgIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBzbGlkZXJNYWluKSB7XG4gICAgICAgIHNsaWRlck1haW4uYWRkQ29udGVudCgodmFsKT0+e1xuICAgICAgICAgICAgZWxlbWVudFswXS5zY3JvbGxMZWZ0ID0gdmFsXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2xpZGVySXRlbSB7XG5cbiAgICBjb25zdHJ1Y3Rvcigkd2luZG93KSB7XG4gICAgICAgIHRoaXMucmVxdWlyZSA9ICdec2xpZGVyTWFpbic7XG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XG4gICAgICAgIHRoaXMuJHdpbmRvdyA9IGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KTtcbiAgICB9XG4gICAgbGluayhzY29wZSwgZWxlbWVudCwgYXR0cnMsIHNsaWRlck1haW4pIHtcbiAgICAgICAgbGV0IGhhbmRsZXIgPSBzbGlkZXJNYWluLmFkZEl0ZW0oe1xuICAgICAgICAgICAgZWxlbTogZWxlbWVudFswXVxuICAgICAgICB9KTtcbiAgICAgICAgZWxlbWVudC5vbigncmVzaXplJywgKCkgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5iaW5kKHNsaWRlck1haW4pXG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlci5iaW5kKHNsaWRlck1haW4pKTtcbiAgICB9XG59XG4gICAgXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29udHJvbGwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnJlcXVpcmUgPSAnXnNsaWRlck1haW4nO1xuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xuICAgIH1cbiAgICBsaW5rKHNjb3BlLCBlbGVtZW50LCBhdHRycywgc2xpZGVyTWFpbikge1xuICAgICAgICBsZXQgaGFuZGxlciA9IHNsaWRlck1haW4uYWRkQ29udHJvbGxlcigrYXR0cnMuc2xpZGVyQ29udHJvbGwpXG4gICAgICAgIGVsZW1lbnQub24oJ2NsaWNrJywgaGFuZGxlci5iaW5kKHNsaWRlck1haW4pKVxuICAgIH1cbn1cbiIsIi8qKlxuICogQSBoZWxwZXIgY2xhc3MgdG8gc2ltcGxpZnkgcmVnaXN0ZXJpbmcgQW5ndWxhciBjb21wb25lbnRzIGFuZCBwcm92aWRlIGEgY29uc2lzdGVudCBzeW50YXggZm9yIGRvaW5nIHNvLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXIoYXBwTmFtZSkge1xuXG4gICAgdmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKGFwcE5hbWUpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlyZWN0aXZlOiBkaXJlY3RpdmUsXG4gICAgICAgIGNvbnRyb2xsZXI6IGNvbnRyb2xsZXIsXG4gICAgICAgIHNlcnZpY2U6IHNlcnZpY2UsXG4gICAgICAgIHByb3ZpZGVyOiBwcm92aWRlcixcbiAgICAgICAgZmFjdG9yeTogZmFjdG9yeVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgY29uc3RydWN0b3JGbikge1xuXG4gICAgICAgIGNvbnN0cnVjdG9yRm4gPSBfbm9ybWFsaXplQ29uc3RydWN0b3IoY29uc3RydWN0b3JGbik7XG5cbiAgICAgICAgaWYgKCFjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5jb21waWxlKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYW4gZW1wdHkgY29tcGlsZSBmdW5jdGlvbiBpZiBub25lIHdhcyBkZWZpbmVkLlxuICAgICAgICAgICAgY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSA9ICgpID0+IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9yaWdpbmFsQ29tcGlsZUZuID0gX2Nsb25lRnVuY3Rpb24oY29uc3RydWN0b3JGbi5wcm90b3R5cGUuY29tcGlsZSk7XG5cbiAgICAgICAgLy8gRGVjb3JhdGUgdGhlIGNvbXBpbGUgbWV0aG9kIHRvIGF1dG9tYXRpY2FsbHkgcmV0dXJuIHRoZSBsaW5rIG1ldGhvZCAoaWYgaXQgZXhpc3RzKVxuICAgICAgICAvLyBhbmQgYmluZCBpdCB0byB0aGUgY29udGV4dCBvZiB0aGUgY29uc3RydWN0b3IgKHNvIGB0aGlzYCB3b3JrcyBjb3JyZWN0bHkpLlxuICAgICAgICAvLyBUaGlzIGdldHMgYXJvdW5kIHRoZSBwcm9ibGVtIG9mIGEgbm9uLWxleGljYWwgXCJ0aGlzXCIgd2hpY2ggb2NjdXJzIHdoZW4gdGhlIGRpcmVjdGl2ZSBjbGFzcyBpdHNlbGZcbiAgICAgICAgLy8gcmV0dXJucyBgdGhpcy5saW5rYCBmcm9tIHdpdGhpbiB0aGUgY29tcGlsZSBmdW5jdGlvbi5cbiAgICAgICAgX292ZXJyaWRlKGNvbnN0cnVjdG9yRm4ucHJvdG90eXBlLCAnY29tcGlsZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxDb21waWxlRm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5saW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvckZuLnByb3RvdHlwZS5saW5rLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGZhY3RvcnlBcnJheSA9IF9jcmVhdGVGYWN0b3J5QXJyYXkoY29uc3RydWN0b3JGbik7XG5cbiAgICAgICAgYXBwLmRpcmVjdGl2ZShuYW1lLCBmYWN0b3J5QXJyYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb250cm9sbGVyKG5hbWUsIGNvbnRydWN0b3JGbikge1xuICAgICAgICBhcHAuY29udHJvbGxlcihuYW1lLCBjb250cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXJ2aWNlKG5hbWUsIGNvbnRydWN0b3JGbikge1xuICAgICAgICBhcHAuc2VydmljZShuYW1lLCBjb250cnVjdG9yRm4pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm92aWRlcihuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIGFwcC5wcm92aWRlcihuYW1lLCBjb25zdHJ1Y3RvckZuKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmFjdG9yeShuYW1lLCBjb25zdHJ1Y3RvckZuKSB7XG4gICAgICAgIGNvbnN0cnVjdG9yRm4gPSBfbm9ybWFsaXplQ29uc3RydWN0b3IoY29uc3RydWN0b3JGbik7XG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pO1xuICAgICAgICBhcHAuZmFjdG9yeShuYW1lLCBmYWN0b3J5QXJyYXkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiB0aGUgY29uc3RydWN0b3JGbiBpcyBhbiBhcnJheSBvZiB0eXBlIFsnZGVwMScsICdkZXAyJywgLi4uLCBjb25zdHJ1Y3RvcigpIHt9XVxuICAgICAqIHdlIG5lZWQgdG8gcHVsbCBvdXQgdGhlIGFycmF5IG9mIGRlcGVuZGVuY2llcyBhbmQgYWRkIGl0IGFzIGFuICRpbmplY3QgcHJvcGVydHkgb2YgdGhlXG4gICAgICogYWN0dWFsIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSBpbnB1dFxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gX25vcm1hbGl6ZUNvbnN0cnVjdG9yKGlucHV0KSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvckZuO1xuXG4gICAgICAgIGlmIChpbnB1dC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB2YXIgaW5qZWN0ZWQgPSBpbnB1dC5zbGljZSgwLCBpbnB1dC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4gPSBpbnB1dFtpbnB1dC5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yRm4uJGluamVjdCA9IGluamVjdGVkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JGbiA9IGlucHV0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yRm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGludG8gYSBmYWN0b3J5IGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgYSBuZXcgaW5zdGFuY2Ugb2YgdGhhdFxuICAgICAqIGNvbnN0cnVjdG9yLCB3aXRoIHRoZSBjb3JyZWN0IGRlcGVuZGVuY2llcyBhdXRvbWF0aWNhbGx5IGluamVjdGVkIGFzIGFyZ3VtZW50cy5cbiAgICAgKlxuICAgICAqIEluIG9yZGVyIHRvIGluamVjdCB0aGUgZGVwZW5kZW5jaWVzLCB0aGV5IG11c3QgYmUgYXR0YWNoZWQgdG8gdGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHdpdGggdGhlXG4gICAgICogYCRpbmplY3RgIHByb3BlcnR5IGFubm90YXRpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uc3RydWN0b3JGblxuICAgICAqIEByZXR1cm5zIHtBcnJheS48VD59XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY3JlYXRlRmFjdG9yeUFycmF5KGNvbnN0cnVjdG9yRm4pIHtcbiAgICAgICAgLy8gZ2V0IHRoZSBhcnJheSBvZiBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgbmVlZGVkIGJ5IHRoaXMgY29tcG9uZW50IChhcyBjb250YWluZWQgaW4gdGhlIGAkaW5qZWN0YCBhcnJheSlcbiAgICAgICAgdmFyIGFyZ3MgPSBjb25zdHJ1Y3RvckZuLiRpbmplY3QgfHwgW107XG4gICAgICAgIHZhciBmYWN0b3J5QXJyYXkgPSBhcmdzLnNsaWNlKCk7IC8vIGNyZWF0ZSBhIGNvcHkgb2YgdGhlIGFycmF5XG4gICAgICAgIC8vIFRoZSBmYWN0b3J5QXJyYXkgdXNlcyBBbmd1bGFyJ3MgYXJyYXkgbm90YXRpb24gd2hlcmVieSBlYWNoIGVsZW1lbnQgb2YgdGhlIGFycmF5IGlzIHRoZSBuYW1lIG9mIGFcbiAgICAgICAgLy8gZGVwZW5kZW5jeSwgYW5kIHRoZSBmaW5hbCBpdGVtIGlzIHRoZSBmYWN0b3J5IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICAgICAgZmFjdG9yeUFycmF5LnB1c2goKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIC8vcmV0dXJuIG5ldyBjb25zdHJ1Y3RvckZuKC4uLmFyZ3MpO1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IGNvbnN0cnVjdG9yRm4oLi4uYXJncyk7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZVtrZXldID0gaW5zdGFuY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZhY3RvcnlBcnJheTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9uZSBhIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIG9yaWdpbmFsXG4gICAgICogQHJldHVybnMge0Z1bmN0aW9ufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9jbG9uZUZ1bmN0aW9uKG9yaWdpbmFsKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIGFuIG9iamVjdCdzIG1ldGhvZCB3aXRoIGEgbmV3IG9uZSBzcGVjaWZpZWQgYnkgYGNhbGxiYWNrYC5cbiAgICAgKiBAcGFyYW0gb2JqZWN0XG4gICAgICogQHBhcmFtIG1ldGhvZE5hbWVcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfb3ZlcnJpZGUob2JqZWN0LCBtZXRob2ROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBvYmplY3RbbWV0aG9kTmFtZV0gPSBjYWxsYmFjayhvYmplY3RbbWV0aG9kTmFtZV0pXG4gICAgfVxuXG59XG4iXX0=
