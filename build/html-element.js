(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["html"] = factory();
	else
		root["html"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xprt", function() { return xprt; });
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _rangeSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _comboBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _toggler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);






var exprt = {
  rangeSlider: _rangeSlider__WEBPACK_IMPORTED_MODULE_2__["default"],
  toolTip: _tooltip__WEBPACK_IMPORTED_MODULE_4__["default"],
  toggler: _toggler__WEBPACK_IMPORTED_MODULE_5__["default"],
  comboBox: _comboBox__WEBPACK_IMPORTED_MODULE_3__["default"],
  tag: _html__WEBPACK_IMPORTED_MODULE_1__["default"]
};
var xprt = exprt;
/* harmony default export */ __webpack_exports__["default"] = (exprt);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, ".bubble {\n  position: absolute;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, .3);\n}\n\n.bubble.animate {\n  -webkit-animation: grow 600ms ease 1;\n          animation: grow 600ms ease 1;\n}\n\n.bubbling {\n  position: relative;\n  overflow: hidden;\n}\n\n.toggler-wrapper {\n  position: relative;\n  display: block;\n  height: 30px;\n  width: 60px;\n  border-radius: 15px;\n  background-color: #99f;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.toggler-wrapper *:focus {\n  outline: none !important;\n}\n\n.toggler-wrapper > span {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #f99;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease;\n  margin: 0 !important;\n}\n\n.toggler-wrapper > input[type=checkbox]:checked + span.toggler_btn {\n  background-color: #7dda85;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n\n.rangeSlider-wrapper {\n  position: relative;\n  height: 4px;\n  background-color: #99f;\n  margin: 13px 5px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.rangeSlider-wrapper *:focus, .rangeSlider-wrapper:focus {\n  outline: none !important;\n}\n\n.rangeSlider-wrapper > span {\n  position: absolute;\n  top: -5.5px;\n  left: -7.5px;\n  display: block;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: #f99;\n}\n\n.rangeSlider-wrapper > span::after {\n  font-family: Arial, Helvetica, sans-serif;\n  position: absolute;\n  top: 6px;\n  left: 5px;\n  height: 38px;\n  width: 38px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  content: attr(data-value);\n  font-size: 12.8px;\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: white;\n  -webkit-transform: translate(-50%, -50%) scale(0);\n          transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  -webkit-transition: all 300ms ease-out;\n  transition: all 300ms ease-out;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n}\n\n.rangeSlider-wrapper.active > span::after, .rangeSlider-wrapper:active > span::after {\n  background-color: inherit;\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n\n.rangeSlider-wrapper.small {\n  height: 2px;\n  margin: 18px 5px;\n}\n\n.rangeSlider-wrapper.small > span {\n  top: -5px;\n  left: -6px;\n  height: 12px;\n  width: 12px;\n}\n\n.__toolTip {\n  position: fixed !important;\n  margin: 0 !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #7474d1;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .2);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .2);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 5px;\n  border-radius: 4px;\n  width: fit-content;\n  max-width: 220px;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  white-space: pre;\n  -webkit-transition: all 100ms ease;\n  transition: all 100ms ease;\n  -webkit-transform: scale(1) rotate(0deg);\n          transform: scale(1) rotate(0deg);\n  pointer-events: none;\n  z-index: 999;\n  font-size: 13.6px;\n  font-size: 0.85rem;\n  opacity: 0;\n}\n\n.__toolTip.__visible {\n  opacity: 1;\n  -webkit-transform: scale(1) rotate(0deg);\n          transform: scale(1) rotate(0deg);\n  -webkit-animation: spring 100ms ease 1;\n          animation: spring 100ms ease 1;\n}\n\n.__toolTip::before {\n  content: '';\n  z-index: -1;\n  position: absolute;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  height: 12px;\n  width: 12px;\n  background-color: inherit;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.__toolTip.left::before {\n  right: -6px;\n}\n\n.__toolTip.right::before {\n  left: -6px;\n}\n\n.__toolTip.top::before {\n  bottom: -6px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n}\n\n.__toolTip.bottom::before {\n  top: -6px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n}\n\n@-webkit-keyframes spring {\n  0% {\n    -webkit-transform: scale(0.8) rotate(0deg);\n            transform: scale(0.8) rotate(0deg);\n  }\n  80% {\n    -webkit-transform: scale(1.2) rotate(0deg);\n            transform: scale(1.2) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg);\n  }\n}\n\n@keyframes spring {\n  0% {\n    -webkit-transform: scale(0.8) rotate(0deg);\n            transform: scale(0.8) rotate(0deg);\n  }\n  80% {\n    -webkit-transform: scale(1.2) rotate(0deg);\n            transform: scale(1.2) rotate(0deg);\n  }\n  100% {\n    -webkit-transform: scale(1) rotate(0deg);\n            transform: scale(1) rotate(0deg);\n  }\n}\n\n@-webkit-keyframes grow {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate3d(0, 0, 0);\n            transform: scale(0) translate3d(0, 0, 0);\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.2) translate3d(0, 0, 0);\n            transform: scale(1.2) translate3d(0, 0, 0);\n  }\n}\n\n@keyframes grow {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate3d(0, 0, 0);\n            transform: scale(0) translate3d(0, 0, 0);\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.2) translate3d(0, 0, 0);\n            transform: scale(1.2) translate3d(0, 0, 0);\n  }\n}\n\n.__select {\n  position: relative;\n  height: 40px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  border-bottom: solid 2px #666;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.__select:hover {\n  background-color: #eef;\n}\n\n.__select > .__placeholder {\n  content: attr(data-text);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 2px;\n  font-size: 0.95em;\n  text-transform: none;\n}\n\n.__select > .__placeholder::after {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 100%;\n  font-size: 0.65em;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  content: '\\25BC';\n  margin-left: auto;\n  color: #666;\n}\n\nbody > .__mask {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  z-index: 9999;\n  top: 0;\n  left: 0;\n}\n\nbody > .__options {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 !important;\n  display: block;\n  position: fixed;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 30, .6);\n          box-shadow: 0 0 8px rgba(0, 0, 30, .6);\n  top: 0;\n  left: 0;\n  background-color: white;\n  overflow: hidden;\n  z-index: 9999;\n}\n\nbody > .__options > .__option {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: default;\n  padding: 0 5px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  white-space: pre-wrap;\n}\n\nbody > .__options > .__option.__selected, body > .__options > .__option.__selected:hover {\n  background-color: #96f;\n  color: white;\n}\n\nbody > .__options > .__option:hover {\n  background-color: #fcf;\n}", ""]);



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tag; });
/**
 * @typedef {('a'| 'abbr'| 'address'| 'applet'| 'area'| 'article'| 'aside'| 'audio'| 'b'| 'base'| 'basefont'| 'bdi'| 'bdo'| 'blockquote'| 'body'| 'br'| 'button'| 'canvas'| 'caption'| 'cite'| 'code'| 'col'| 'colgroup'| 'data'| 'datalist'| 'dd'| 'del'| 'details'| 'dfn'| 'dialog'| 'dir'| 'div'| 'dl'| 'dt'| 'em'| 'embed'| 'fieldset'| 'figcaption'| 'figure'| 'font'| 'footer'| 'form'| 'frame'| 'frameset'| 'h1'| 'h2'| 'h3'| 'h4'| 'h5'| 'h6'| 'head'| 'header'| 'hgroup'| 'hr'| 'html'| 'i'| 'iframe'| 'img'| 'input'| 'ins'| 'kbd'| 'label'| 'legend'| 'li'| 'link'| 'main'| 'map'| 'mark'| 'marquee'| 'menu'| 'meta'| 'meter'| 'nav'| 'noscript'| 'object'| 'ol'| 'optgroup'| 'option'| 'output'| 'p'| 'param'| 'picture'| 'pre'| 'progress'| 'q'| 'rp'| 'rt'| 'ruby'| 's'| 'samp'| 'script'| 'section'| 'select'| 'slot'| 'small'| 'source'| 'span'| 'strong'| 'style'| 'sub'| 'summary'| 'sup'| 'table'| 'tbody'| 'td'| 'template'| 'textarea'| 'tfoot'| 'th'| 'thead'| 'time'| 'title'| 'tr'| 'track'| 'u'| 'ul'| 'var'| 'video'| 'wbr')} tagNames
 */

/**
 * @typedef {Object} elementProperties
 * @property {string} accessKey
 * @property {string} autocapitalize
 * @property {string} className Returns the value of element's class content attribute. Can be set to change it.
 * @property {string} contentEditable where a value of "true" means the element is editable and a value of "false" means it isn't.
 * @property {Node} child child of this element.
 * @property {Node[]} children children of the this element.
 * @property {function():void} click
 * @property {string} dir text content direction
 * @property {boolean} draggable
 * @property {boolean} hidden
 * @property {string} id Returns the value of element's id content attribute. Can be set to change it.
 * @property {string} innerText
 * @property {string} lang
 * @property {boolean} noModule Is a Boolean indicating whether an import script can be executed in user agents that support module scripts.
 * @property {string} nodeValue
 * @property {function(Event):void} onfullscreenchange
 * @property {function(Event):void} onfullscreenerror
 * @property {string} outerHTML
 * @property {number} scrollLeft
 * @property {number} scrollTop
 * @property {boolean} spellcheck
 * @property {boolean} translate
 * @property {string} slot Returns the value of element's slot content attribute. Can be set to chnage it.
 * @property {CSSStyleDeclation} style An object representing the declarations of an element's style attributes.
 * @property {number} tabIndex Position of the element in the tabbing order.
 * @property {string} textContent
 */

/**
 * @typedef {Object} elementCustomProps
 * @property {function(string|string[]|null):void} assignRemovedEvents remove event listeners from the element
 * @property {function(string|string[]|null):void} removeRemovedEvents assigns the removed event listeners to the element
 * @property {function():void} remove Removes the element from DOM.
 * @property {function(parentElement|null):void} restore Restores the element to the DOM.
 */

/**
 * 
 * @param {tagNames|HTMLElement} tagName A string that specifies the type of element to be created. The nodeName of the created element is initialized with the value of tagName. Don't use qualified names (like "html:a") with this method. When called on an HTML document, createElement() converts tagName to lower case before creating the element. In Firefox, Opera, and Chrome, createElement(null) works like createElement("null").
 * @param {elementProperties} options HTMLElment properties and attributes
 * @returns {HTMLElement & elementCustomProps}
 */
function tag(tagName) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var instanceofHtmlElement = tagName instanceof HTMLElement;
  if (!instanceofHtmlElement && typeof tagName !== 'string') throw new Error("{tag} is invalid value of tag");
  var el = instanceofHtmlElement ? tagName : document.createElement(tagName);
  el.oldEventListener = el.addEventListener.bind(el);
  el.addEventListener = addEventListener.bind(el);
  el.assignRemovedEvents = assignRemovedEvents.bind(el);
  el.append = append.bind(el);
  el.get = get.bind(el);
  el.getAll = getAll.bind(el);
  el.removeEvents = removeEvents.bind(el);
  el.remove = remove.bind(el);
  el.restore = restore.bind(el);

  for (var prop in options) {
    if (options[prop] === undefined) {
      continue;
    }

    if (prop === 'child') {
      var child = options[prop];
      if (el instanceof Node) el.append(child);
    } else if (prop == 'children' && Array.isArray(options[prop])) {
      var els = options[prop];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = els[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var htmlel = _step.value;
          el.append(htmlel);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    } else if (prop == 'attr') {
      for (var p in options[prop]) {
        el.setAttribute(p, options[prop][p]);
      }
    } else if (options[prop].constructor.name === 'Object') {
      for (var _p in options[prop]) {
        el[prop][_p] = options[prop][_p];
      }
    } else el[prop] = options[prop];
  }

  return el;
  /**
   * 
   * @param {String|String[]|null} eventType 
   */

  function removeEvents(eventType) {
    var eventFunctions = this.eventFunctions;
    if (!eventFunctions) return;

    if (eventType) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = eventFunctions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var event = _step2.value;

          if (Array.isArray(eventType) && eventType.indexOf(event.type)) {
            this.removeEventListener(event.type, event.listener);
          } else if (typeof eventType === 'string' && event.type === eventType) {
            this.removeEventListener(event.type, event.listener);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
            _iterator2["return"]();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return;
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = eventFunctions[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _event = _step3.value;
        el.removeEventListener(_event.type, _event.listener);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }
  /**
   * 
   * @param {String|String[]|null} eventType
   */


  function assignRemovedEvents(eventType) {
    var eventFunctions = this.eventFunctions;
    if (!eventFunctions) return;

    if (eventType) {
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = eventFunctions[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var event = _step4.value;

          if (Array.isArray(eventType) && eventType.indexOf(event.type)) {
            this.oldEventListener(event.type, event.listener, event.options);
          } else if (typeof eventType === 'string' && event.type === eventType) {
            this.oldEventListener(event.type, event.listener, event.options);
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return;
    }

    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = eventFunctions[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var _event2 = _step5.value;
        this.oldEventListener(_event2.type, _event2.listener);
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
          _iterator5["return"]();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }
  }

  function addEventListener(type, listener, options) {
    if (!this.eventFunctions) this.eventFunctions = [];
    this.eventFunctions[this.eventFunctions.length] = {
      type: type,
      listener: listener,
      options: options
    };
    this.oldEventListener(type, listener, options);
  }

  function remove() {
    if (this.parentElement) {
      this.removeEvents();
      this.oldParentelement = this.parentElement;
      this.parentElement.removeChild(this);
    }
  }
  /**
   * 
   * @param {HTMLElement} parentElement
   */


  function restore(parentElement) {
    parentElement = parentElement || this.oldParentelement || null;

    if (parentElement && !this.parentElement) {
      this.assignRemovedEvents();
      parentElement.appendChild(this);
    }
  }
  /**
   * @param {Node} ...nodes
   */


  function append() {
    var _this = this;

    for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
      nodes[_key] = arguments[_key];
    }

    nodes.map(function (node) {
      if (node instanceof Node) {
        _this.appendChild(node);

        if (node instanceof HTMLElement && node.id) el[node.id] = node;
      }
    });
    return this;
  }
  /**
   * get first mathing element from DOM
   * @param {String} selector CSS selector 
   * @returns {HTMLElement}
   */


  function get(selector) {
    return this.querySelector(selector);
  }
  /**
   * get first mathing element from DOM
   * @param {String} selector CSS selector 
   * @returns {HTMLElement}
   */


  function getAll(selector) {
    return this.querySelectorAll(selector);
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rangeSlider; });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

/**
 * @callback onchange
 * @param {Number} value 
 */

/**
 * 
 * @typedef slider
 * @property {onchange} onchange 
 * @property {function():Number} value 
 * @property {function(Number):void} setvalue 
 */

/**
 * 
 * @param {Object} params 
 * @param {Number} params.min 
 * @param {Number} params.max 
 * @param {Number} [params.step] 
 * @param {Number} [params.value ]
 * @param {onchange} [params.onchange] 
 * @param {string} [params.size] 
 * @returns {slider & HTMLElement}
 */

function rangeSlider() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var mainWrapper = Object(_html__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    role: 'input',
    tabIndex: 0,
    className: 'rangeSlider-wrapper',
    attr: {
      'data-value': 0
    }
  });
  var btn = Object(_html__WEBPACK_IMPORTED_MODULE_0__["default"])('span', {
    className: 'rangeSlider-button'
  });
  var min = params.min || 0;
  var max = params.max || 100;
  var step = params.step || 1;
  var diff = max - min;
  var width = 0;
  var tmout = null;

  var length = function calcLength() {
    var l = step + '';
    var lar = l.split('.');

    if (lar.length > 1) {
      var _l = lar[1].length;
      return _l > 2 ? 2 : _l;
    } else {
      return 0;
    }
  }();

  mainWrapper.value = params.value || min;

  if (params.size) {
    mainWrapper.classList.add(params.size);
  }

  if (params.value) {
    setTimeout(function () {
      setvalue(params.value);
    }, 0);
  }

  mainWrapper.addEventListener('mousedown', onmousedown);
  mainWrapper.addEventListener('focus', makeActive);
  mainWrapper.addEventListener('touchstart', onmousedown);

  function makeActive() {
    mainWrapper.classList.add('active');
    mainWrapper.onblur = removeActive;
  }

  function removeActive() {
    mainWrapper.classList.remove('active');
    mainWrapper.onblur = null;
  }
  /**
   * 
   * @param {MouseEvent} e 
   */


  function onmousedown(e) {
    mainWrapper.focus();
    document.onmousemove = document.ontouchmove = onmousemove;
    document.onmouseup = document.ontouchend = onmouseup;
    onmousemove(e);
  }
  /**
   * 
   * @param {MouseEvent | TouchEvent} e 
   */


  function onmousemove(e) {
    var x = e.clientX || e.touches[0].clientX;
    var wrapperX = mainWrapper.getBoundingClientRect().x;
    width = mainWrapper.offsetWidth;
    x -= wrapperX;

    if (x <= width && x >= 0) {
      calculateValue(x);
    } else if (x > width && mainWrapper.value !== max) {
      setvalue(max);
    } else if (x < 0 && mainWrapper.value !== min) {
      setvalue(min);
    }
  }

  function onmouseup() {
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchmove = null;
    document.ontouchend = null;
  }
  /**
   * 
   * @param {Number} x 
   */


  function calculateValue(x) {
    var value = x / width * diff;
    value += min;
    setvalue(value);
  }
  /**
   * 
   * @param {Number} value 
   */


  function setvalue(value) {
    value = length === 0 ? parseInt(value) : parseFloat(value);

    if (value >= max) {
      value = max;
    } else if (value <= min) {
      value = min;
    }

    if (tmout) clearTimeout(tmout);
    makeActive();
    width = mainWrapper.offsetWidth;
    var remainder = value / step;
    remainder %= 1;
    remainder *= step;

    if (remainder >= step / 2) {
      var tmp = value;
      tmp += step - remainder;

      if (tmp > max) {
        value -= remainder;
      } else {
        value = tmp;
      }
    } else {
      value -= remainder;
    }

    var val = value + '';
    var l = length;
    val = val.split('.');

    if (l > 0 && val.length > 1) {
      val = val[0] + '.' + val[1].substr(0, l);
    } else {
      val = val[0];
    }

    mainWrapper.setAttribute('data-value', val);
    btn.setAttribute('data-value', val);
    val = length ? parseFloat(val) : parseInt(val);

    if (mainWrapper.onchange) {
      mainWrapper.onchange(val);
    }

    if (params.onchange) {
      params.onchange(val);
    }

    mainWrapper.value = val;
    var x = (value - min) / diff;
    x *= width;
    btn.style.transform = "translate3d(".concat(x, "px, 0, 0)");
    tmout = setTimeout(function () {
      removeActive();
    }, 1000);
  }

  mainWrapper.setvalue = setvalue;
  mainWrapper.appendChild(btn);
  return mainWrapper;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return comboBox; });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

/**
 * 
 * @param {Object} [opts]
 * @param {HTMLSelectElement} [opts.select] 
 * @param {Number} [opts.height]
 * @param {Number} [opts.maxheight]
 * @param {Number} [opts.width]
 * @param {Number} [opts.spead]
 */

function comboBox() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var div = Object(_html__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    className: '__select',
    tabIndex: 0
  });
  var placeholder = Object(_html__WEBPACK_IMPORTED_MODULE_0__["default"])('span', {
    className: '__placeholder'
  });
  var optionsContainer = Object(_html__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    className: '__options'
  });
  var mask = Object(_html__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    className: '__mask',
    onclick: hide
  });
  var scrollbarWidth = getScrollbarWidth();
  var containerHeight = 0;
  var height = opts.height || 40;
  var width = opts.width;
  var speed = opts.spead || 1;
  var obj = {};
  /**
   * @type {Element}
   */

  var selectOption;
  var moveTop = false;

  (function init() {
    opts.maxheight = opts.maxheight || 600;

    if (opts.select) {
      obj.select = opts.select;
      var options = opts.select.options;
      opts.select.style.display = 'none';
      opts.select.parentElement.insertBefore(div, opts.element);

      var _loop = function _loop(i) {
        addOption(options[i], undefined, true);

        if (options[i].selected) {
          setTimeout(function () {
            setvalue(null, i);
          }, 5);
        }
      };

      for (var i = 0; i < options.length; ++i) {
        _loop(i);
      }

      if (!div.getAttribute('data-value')) {
        setvalue(null, 0);
      }
    } else {
      obj.select = div;
    }

    div.appendChild(placeholder);
    placeholder.style.height = height + 'px';

    if (width) {
      placeholder.style.width = width + 'px';
      optionsContainer.style.width = width + 'px';
    }

    obj.onchange = function () {};

    placeholder.onclick = show;
    div.addEventListener('focus', onfocus);

    function onfocus() {
      this.onkeyup = onkeypress;
    }
    /**
     * 
     * @param {KeyboardEvent} e 
     */


    function onkeypress(e) {
      var id;

      if (e.which === 38) {
        var option = selectOption.previousElementSibling;

        if (option) {
          id = option.getAttribute('data-id');
        } else {
          id = selectOption.parentElement.lastElementChild.getAttribute('data-id');
        }
      } else if (e.which === 40) {
        var _option2 = selectOption.nextElementSibling;

        if (_option2) {
          id = _option2.getAttribute('data-id');
        } else {
          id = selectOption.parentElement.firstElementChild.getAttribute('data-id');
        }
      } else if (e.which === 13) {
        toggle();
      }

      if (id) {
        setvalue(null, id);
      }
    }
  })();

  function toggle() {
    mask.parentElement ? hide() : show();
  }

  function show() {
    mask.restore(document.body);
    optionsContainer.restore(document.body);
    var divClient = div.getBoundingClientRect();

    var _height = optionsContainer.children.length * height;

    var scroll = false;
    var logicalHeight = _height > opts.maxheight ? opts.maxheight : _height;
    optionsContainer.style.top = divClient.top + 'px';
    optionsContainer.style.left = divClient.left + 'px';
    optionsContainer.style.width = divClient.width + 'px';
    optionsContainer.style.height = '0';
    var tmpHeightBottom = window.innerHeight - divClient.bottom;
    var tmpHeightTop = divClient.height + divClient.top;
    optionsContainer.style.removeProperty('transform');

    if (divClient.bottom + logicalHeight > window.innerHeight) {
      //checks if height of options container crosses bottom
      if (divClient.bottom - logicalHeight < 0) {
        //checks if height of options container cross top
        if (tmpHeightTop > tmpHeightBottom) {
          if (tmpHeightTop > logicalHeight) {
            _height = logicalHeight;
          } else {
            _height = tmpHeightTop;
          }

          moveTop = true;
        } else {
          _height = tmpHeightBottom > logicalHeight ? logicalHeight : tmpHeightBottom;
        }
      } else {
        if (_height > logicalHeight) {
          _height = logicalHeight;
          scroll = true;
          optionsContainer.style.width = divClient.width + scrollbarWidth + 'px';
        }

        moveTop = true;
      }

      if (_height !== logicalHeight) {
        if (_height > logicalHeight) {
          _height = logicalHeight;
        }

        scroll = true;
        optionsContainer.style.width = divClient.width + scrollbarWidth + 'px';
      }
    } else if (_height <= opts.maxheight) {
      optionsContainer.style.width = divClient.width + 'px';
      optionsContainer.style.removeProperty('overflow-y');
    } else {
      optionsContainer.style.width = divClient.width + scrollbarWidth + 'px';
      _height = opts.maxheight;
      scroll = true;
    }

    containerHeight = _height;
    var current_height = 0;
    var inc_factor = 1;
    var opacity = 0;

    function animateHeight() {
      if (current_height >= _height) {
        scroll && (optionsContainer.style.overflowY = 'scroll');
        return;
      }

      opacity += inc_factor / _height;
      opacity = opacity < 1 ? opacity : 1;
      current_height += inc_factor;
      inc_factor += speed;
      var calcHeight = current_height < _height ? current_height : _height;
      optionsContainer.style.height = calcHeight + 'px';
      optionsContainer.style.opacity = opacity;
      if (moveTop) optionsContainer.style.transform = "translate(0, ".concat(-(calcHeight - height), "px)");
      requestAnimationFrame(animateHeight);
    }

    var selected = optionsContainer.querySelector('.__selected');
    if (selected) scrollIntoView(selected);
    animateHeight();
  }

  function hide() {
    optionsContainer.style.removeProperty('overflow-y');
    var current_height = containerHeight;
    var inc_factor = 1;
    var opacity = 1;

    function animateHeight() {
      if (current_height <= 0) {
        mask.remove();
        optionsContainer.remove();
        moveTop = false;
        return;
      }

      opacity -= inc_factor / containerHeight;
      opacity = opacity > 0 ? opacity : 0;
      current_height -= inc_factor;
      inc_factor += speed;
      var calcHeight = current_height > 0 ? current_height : 0;
      optionsContainer.style.height = current_height + 'px';
      optionsContainer.style.opacity = opacity;

      if (moveTop) {
        optionsContainer.style.transform = "translate(0, ".concat(-(calcHeight - height), "px)");
      }

      requestAnimationFrame(animateHeight);
    }

    animateHeight();
  }

  function optionOnselect() {
    /**
     * @type {HTMLSpanElement}
     */
    var el = this;
    var id = el.getAttribute('data-id');
    setvalue(null, id);
    hide();
  }
  /**
   * 
   * @param {HTMLSpanElement|HTMLOptionElement|String} option 
   * @param {String|Number} [value] 
   */


  function addOption(option) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var preventAddingOption = arguments.length > 2 ? arguments[2] : undefined;

    if (typeof option !== 'string') {
      value = value || option.value || option.getAttribute('data-value') || '';
      option = option.textContent;
    }

    if (opts.select && !preventAddingOption) {
      var op = Object(_html__WEBPACK_IMPORTED_MODULE_0__["default"])('option', {
        textContent: option,
        attr: {
          value: value
        }
      });
      opts.select.appendChild(op);
    }

    option = Object(_html__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
      className: '__option',
      attr: {
        "data-value": value,
        "data-id": optionsContainer.childElementCount
      },
      textContent: option,
      style: {
        height: height ? height + 'px' : 'fit-content'
      }
    });

    if (placeholder.textContent === '') {
      placeholder.textContent = option.textContent;
      if (opts.select) opts.select.value = value;
      div.setAttribute('data-value', value);
    }

    option.addEventListener('click', optionOnselect);
    optionsContainer.appendChild(option);
    var removeContainer = false;

    if (!optionsContainer.parentElement) {
      document.body.appendChild(optionsContainer);
      removeContainer = true;
    }

    var client = optionsContainer.getBoundingClientRect();
    placeholder.style.width = client.width + 'px';

    if (removeContainer) {
      document.body.removeChild(optionsContainer);
    }
  }

  function removeOption(option) {
    var _option = optionsContainer.querySelector("[data-value='".concat(option, "']"));

    if (_option) {
      _option.parentElement.removeChild(_option);

      return true;
    }

    return false;
  }

  function value() {
    return div.getAttribute('data-value');
  }

  function setvalue(value) {
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var option;

    if (!value) {
      option = optionsContainer.querySelector("[data-id='".concat(id, "']"));
    } else {
      option = optionsContainer.querySelector("[data-value='".concat(value, "']"));
    }

    if (!option) return;
    value = option.getAttribute('data-value');
    if (opts.select) opts.select.value = value;
    var selected = optionsContainer.querySelector('.__selected');
    if (selected) selected.classList.remove('__selected');
    option.classList.add('__selected');
    div.setAttribute('data-value', value);
    placeholder.textContent = option.textContent;
    obj.onchange(value);
    selectOption = option;
    if (opts.select) opts.select.value = value;

    if (!isInView(option)) {
      scrollIntoView(option);
    }
  }

  function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);
    var widthNoScroll = outer.offsetWidth; // force scrollbars

    outer.style.overflow = "scroll"; // add innerdiv

    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);
    var widthWithScroll = inner.offsetWidth; // remove divs

    outer.parentNode.removeChild(outer);
    return widthNoScroll - widthWithScroll;
  }
  /**
   * 
   * @param {Element} el 
   */


  function scrollIntoView(el) {
    var parent = el.parentElement;
    parent.scrollTop = el.offsetTop;
  }
  /**
   * 
   * @param {Element} el 
   */


  function isInView(el) {
    var parent = el.parentElement;
    var parentClient = parent.getBoundingClientRect();
    var elClient = el.getBoundingClientRect();

    if (parentClient.bottom <= elClient.top || parentClient.top >= elClient.bottom) {
      return false;
    }

    return true;
  }

  obj.customSelect = optionsContainer;
  obj.addOption = addOption;
  obj.value = value;
  obj.setvalue = setvalue;
  obj.removeOption = removeOption;
  return obj;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/**
 * 
 * @param {HTMLElement} element 
 * @param {Object} opts 
 * @param {String} opts.title 
 * @param {String} opts.direction 
 * @param {Boolean} opts.watchChange
 */

function toolTip(element) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!element) return console.error('element is undefined');
  var title = opts.title || element.getAttribute('title') || element.getAttribute('data-title') || '';
  var directions = ['auto', 'top', 'right', 'bottom', 'left'];
  var toolTip = Object(_html__WEBPACK_IMPORTED_MODULE_0__["default"])('div', {
    className: '__toolTip',
    textContent: title
  });
  var direction = opts.direction || element.getAttribute('data-direction') || 'auto';
  direction = directions.indexOf(direction) > -1 ? direction : 'auto';

  function show() {
    if (toolTip.enabled) return;
    toolTip.enabled = true;
    toolTip.restore(document.body);
    var elementClient = element.getBoundingClientRect();
    var toolTipClient = toolTip.getBoundingClientRect();
    setPosition(direction);

    function setPosition(direction) {
      toolTip.className = '__toolTip ' + direction;

      switch (direction) {
        case 'left':
          toolTip.style.top = center('v') + 'px';
          toolTip.style.left = calc(direction) + 'px';
          break;

        case 'right':
          toolTip.style.top = center('v') + 'px';
          toolTip.style.left = calc(direction) + 'px';
          break;

        case 'top':
          toolTip.style.top = calc(direction) + 'px';
          toolTip.style.left = center() + 'px';
          break;

        case 'bottom':
          toolTip.style.top = calc(direction) + 'px';
          toolTip.style.left = center() + 'px';
          break;

        default:
          if (check('left')) setPosition('left');else if (check('right')) setPosition('right');else if (check('top')) setPosition('top');else if (check('bottom')) setPosition('bottom');else hide();
          break;
      }
    }

    toolTip.classList.add('__visible');

    function check(direction) {
      switch (direction) {
        case 'left':
          if (calc('left') < 0) return false;
          return true;

        case 'right':
          if (calc('right') + toolTipClient.width > innerWidth) return false;
          return true;

        case 'top':
          if (calc('top') < 0) return false;
          return true;

        case 'bottom':
          if (calc('bottom') + toolTipClient.height > innerHeight) return false;
          return true;
      }
    }

    function calc(direction) {
      var pointerDim = 8;

      switch (direction) {
        case 'left':
          return elementClient.left - toolTipClient.width - pointerDim;

        case 'right':
          return elementClient.right + pointerDim;

        case 'top':
          return elementClient.top - toolTipClient.height - pointerDim;

        case 'bottom':
          return elementClient.bottom + pointerDim;
      }
    }

    function center(axis) {
      if (axis) return elementClient.top + elementClient.height / 2 - toolTipClient.height / 2;
      return elementClient.left + elementClient.width / 2 - toolTipClient.width / 2;
    }
  }

  function hide() {
    toolTip.classList.remove('__visible');
    setTimeout(function () {
      toolTip.remove();
      toolTip.enabled = false;
    }, 100);
  }

  element.addEventListener('mouseover', show);
  element.addEventListener('mouseout', hide);
}

toolTip.init = function () {
  var allElements = document.querySelectorAll('[data-title]');

  _toConsumableArray(allElements).map(function (el) {
    return toolTip(el);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (toolTip);

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toggler; });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

/**
 * @callback onchange
 * @param {Boolean} value 
 */

/**
 * 
 * @typedef toggler
 * @property {onchange} onchange 
 * @property {function():Boolean} value 
 * @property {function(Boolean):void} setvalue 
 */

/**
 * 
 * @param {Object} params 
 * @param {Boolean} [params.value] 
 * @param {onchange} [params.onchange] 
 * @param {Number} [params.size]
 * @param {string} [params.valType='bool'] possible value 'bool' or ''on/off'
 * @returns {toggler & HTMLElement}
 */

function toggler() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var checkbox = Object(_html__WEBPACK_IMPORTED_MODULE_0__["default"])('input', {
    type: 'checkbox',
    style: {
      display: 'none'
    }
  });
  var btn = Object(_html__WEBPACK_IMPORTED_MODULE_0__["default"])('span', {
    className: 'toggler_btn'
  });
  var mainWrapper = Object(_html__WEBPACK_IMPORTED_MODULE_0__["default"])('label', {
    tabIndex: 0,
    role: 'input',
    className: 'toggler-wrapper',
    children: [checkbox, btn]
  });

  if (params.onchange) {
    mainWrapper.onchange = params.onchange;
  }

  if (params.value !== undefined) {
    if (params.value === true || params.value === 'on') {
      checkbox.checked = true;
    }
  }

  if (params.size) {
    var h = params.size;
    var w = h * 2;
    mainWrapper.style.width = w + 'px';
    mainWrapper.style.height = h + 'px';
    mainWrapper.style.borderRadius = h / 2 + 'px';
    btn.style.height = h + 'px';
    btn.style.width = h + 'px';
  }

  checkbox.onchange = function () {
    if (params.valType === 'on/off') {
      if (checkbox.checked) {
        mainWrapper.value = 'on';
      } else {
        mainWrapper.value = 'off';
      }
    } else {
      mainWrapper.value = checkbox.checked;
    }
  };

  mainWrapper.setvalue = function (value) {
    value = !!value;
    checkbox.checked = value;
  };

  return mainWrapper;
}

/***/ })
/******/ ])["default"];
});