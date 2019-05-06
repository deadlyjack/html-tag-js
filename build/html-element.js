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
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _rangeSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _custom_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _toggler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // import {
//   a,
//   bubble,
//   button,
//   create,
//   div,
//   get,
//   getAll,
//   img,
//   input,
//   span
// } from './html';






var exprt = _objectSpread({}, _html__WEBPACK_IMPORTED_MODULE_1__, {
  rangeSlider: _rangeSlider__WEBPACK_IMPORTED_MODULE_2__["rangeSlider"],
  toolTip: _tooltip__WEBPACK_IMPORTED_MODULE_4__["toolTip"],
  toggler: _toggler__WEBPACK_IMPORTED_MODULE_5__["toggler"],
  select: _custom_select__WEBPACK_IMPORTED_MODULE_3__["select"]
});

/* harmony default export */ __webpack_exports__["default"] = (exprt); // export {
//   a,
//   bubble,
//   button,
//   create,
//   div,
//   get,
//   getAll,
//   img,
//   input,
//   rangeSlider,
//   span,
//   toolTip
// }

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
exports.push([module.i, ".bubble {\n  position: absolute;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, .3);\n}\n\n.bubble.animate {\n  -webkit-animation: grow 600ms ease 1;\n          animation: grow 600ms ease 1;\n}\n\n.bubbling {\n  position: relative;\n  overflow: hidden;\n}\n\n.toggler-wrapper {\n  position: relative;\n  display: block;\n  height: 30px;\n  width: 60px;\n  border-radius: 15px;\n  background-color: #99f;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.toggler-wrapper *:focus {\n  outline: none !important;\n}\n\n.toggler-wrapper > span {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  background-color: #f99;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease;\n  margin: 0 !important;\n}\n\n.toggler-wrapper > input[type=checkbox]:checked + span.toggler_btn {\n  background-color: #7dda85;\n  -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n}\n\n.rangeSlider-wrapper {\n  position: relative;\n  height: 4px;\n  background-color: #99f;\n  margin: 13px 5px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.rangeSlider-wrapper *:focus, .rangeSlider-wrapper:focus {\n  outline: none !important;\n}\n\n.rangeSlider-wrapper > span {\n  position: absolute;\n  top: -5.5px;\n  left: -7.5px;\n  display: block;\n  height: 15px;\n  width: 15px;\n  border-radius: 50%;\n  background-color: #f99;\n}\n\n.rangeSlider-wrapper > span::after {\n  font-family: Arial, Helvetica, sans-serif;\n  position: absolute;\n  top: 6px;\n  left: 5px;\n  height: 38px;\n  width: 38px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  content: attr(data-value);\n  font-size: 12.8px;\n  font-size: 0.8rem;\n  font-weight: bold;\n  color: white;\n  -webkit-transform: translate(-50%, -50%) scale(0);\n          transform: translate(-50%, -50%) scale(0);\n  opacity: 0;\n  -webkit-transition: all 300ms ease-out;\n  transition: all 300ms ease-out;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n}\n\n.rangeSlider-wrapper.active > span::after, .rangeSlider-wrapper:active > span::after {\n  background-color: inherit;\n  -webkit-transform: translate(-50%, -50%) scale(1);\n          transform: translate(-50%, -50%) scale(1);\n  opacity: 1;\n}\n\n.rangeSlider-wrapper.small {\n  height: 2px;\n  margin: 18px 5px;\n}\n\n.rangeSlider-wrapper.small > span {\n  top: -5px;\n  left: -6px;\n  height: 12px;\n  width: 12px;\n}\n\n.toolTip-wrapper {\n  position: fixed;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  pointer-events: none;\n  z-index: 999;\n}\n\n.toolTip-wrapper .toolTip {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  background-color: #99f;\n  -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, .2);\n          box-shadow: 0 0 8px rgba(0, 0, 0, .2);\n  padding: 10px;\n  border-radius: 4px;\n  -webkit-animation: spring 100ms ease 1;\n          animation: spring 100ms ease 1;\n  width: fit-content;\n  max-width: 220px;\n}\n\n.toolTip-wrapper .toolTip > .text {\n  z-index: 1;\n  display: block;\n  color: white;\n  font-family: Arial, Helvetica, sans-serif;\n  white-space: pre-line;\n}\n\n.toolTip-wrapper .toolTip > .toolTip-pointer {\n  z-index: -1;\n  position: absolute;\n  -webkit-transform-origin: center;\n          transform-origin: center;\n  height: 15px;\n  width: 15px;\n  background-color: #99f;\n}\n\n@-webkit-keyframes spring {\n  0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n  80% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@keyframes spring {\n  0% {\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n  80% {\n    -webkit-transform: scale(1.2);\n            transform: scale(1.2);\n  }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n}\n\n@-webkit-keyframes grow {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate3d(0, 0, 0);\n            transform: scale(0) translate3d(0, 0, 0);\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.2) translate3d(0, 0, 0);\n            transform: scale(1.2) translate3d(0, 0, 0);\n  }\n}\n\n@keyframes grow {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0) translate3d(0, 0, 0);\n            transform: scale(0) translate3d(0, 0, 0);\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform: scale(1.2) translate3d(0, 0, 0);\n            transform: scale(1.2) translate3d(0, 0, 0);\n  }\n}\n\n.__select {\n  position: relative;\n  height: 40px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n  border-bottom: solid 2px #666;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.__select:hover {\n  background-color: #eef;\n}\n\n.__select > .__placeholder {\n  content: attr(data-text);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0 2px;\n  font-size: 0.95em;\n  text-transform: none;\n}\n\n.__select > .__placeholder::after {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  height: 100%;\n  font-size: 0.65em;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  content: '\\25BC';\n  margin-left: auto;\n  color: #666;\n}\n\nbody > .__mask {\n  position: fixed;\n  height: 100vh;\n  width: 100vw;\n  z-index: 9999;\n}\n\nbody > .__options {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 !important;\n  display: block;\n  position: fixed;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, .2);\n          box-shadow: 0 0 4px rgba(0, 0, 0, .2);\n  top: 0;\n  left: 0;\n  background-color: white;\n  overflow: hidden;\n  z-index: 9999;\n}\n\nbody > .__options > .__option {\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  cursor: default;\n  padding: 0 5px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  white-space: pre-wrap;\n}\n\nbody > .__options > .__option.__selected, body > .__options > .__option.__selected:hover {\n  background-color: #96f;\n  color: white;\n}\n\nbody > .__options > .__option:hover {\n  background-color: #fcf;\n}", ""]);



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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bubble", function() { return bubble; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "div", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "img", function() { return img; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "input", function() { return input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "span", function() { return span; });
/**
 * @typedef {Object} elementExtended
 * @property {function(eventList):void} removeEvents removes all events added to element
 * @property {function():void} assignEvents reassign all events that are removed from element
 * @property {function():void} bubble add bubble effect on click
 */

/**
 * @typedef {Object} createOptions
 * @property {HTMLElement[] | HTMLAllCollection} children
 * @property {Object} attr calls HTMLElement.setAttribute(String: name, String: value);
 */

/**
 * @typedef {Object} inputNumber
 * @property {Number|String} min Returns / Sets the min value of input.
 * @property {Number|String} max Returns / Sets the max value of input.
 * @property {String|Number} step Returns / Sets the increment and decrement step of input.
 */

/**
 * @typedef {Object} inputCheckbox
 * @property {Boolean} checked Returns / Sets the current state of the element when type is checkbox or radio.
 * @property {Boolean} defaultChecked Returns / Sets the default state of a radio button or checkbox as originally 
 * specified in HTML that created this object.
 * @property {Boolean} indeterminate Returns whether the checkbox or radio button is in indeterminate state. For checkboxes, 
 * the effect is that the appearance of the checkbox is obscured/greyed in some way as to indicate its state is indeterminate 
 * (not checked but not unchecked). Does not affect the value of the checked attribute, and clicking the checkbox will set the value to false.
 */

/**
 * @typedef {Object} inputImage
 * @property {String} alt Returns / Sets the element's alt attribute, containing alternative text to use when type is image.
 * @property {String} height  Returns / Sets the element's height attribute, which defines the height of the image displayed for the button, 
 * if the value of type is image.
 * @property {String} src Returns / Sets the element's src attribute, which specifies a URI for the location of an 
 * image to display on the graphical submit button, if the value of type is image; otherwise it is ignored.
 * @property {String} width Returns / Sets the document's width attribute, which defines the width of the image displayed for the button, 
 * if the value of type is image.
 */

/**
 * @typedef {Object} inputFile
 * @property {String} accept Returns / Sets the element's accept attribute, containing comma-separated list of file types accepted by the 
 * server when type is file.
 * @property {FileList} files Returns/accepts a FileList object, which contains a list of File objects representing the files selected for upload.
 */

/**
 * Create new HTML tag
 * @param {String} tag HTMl element tag name 
 * @param {HTMLElement & createOptions} props
 * @returns {HTMLElement & elementExtended}
 */
function create() {
  var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var html = this;
  var el = document.createElement(tag);
  var eventFunctions = [];
  var oldEventListener = el.addEventListener.bind(el);
  /**@override addEventListener of page */

  el.addEventListener = addEventListener;
  /**@property */

  el.assignEvents = assignEvents;
  /**@property */

  el.removeEvents = removeEvents;
  /**
   * removes all event from page.
   * @param {String[]|String} events
   * @returns {void}
   */

  function removeEvents(events) {
    if (events) {
      for (var _i = 0, _eventFunctions = eventFunctions; _i < _eventFunctions.length; _i++) {
        var event = _eventFunctions[_i];

        if (Array.isArray(events) && events.indexOf(event.type)) {
          el.removeEventListener(event.type, event.listener);
        } else if (typeof events === 'string' && event.type === events) {
          el.removeEventListener(event.type, event.listener);
        }
      }

      return;
    }

    for (var _i2 = 0, _eventFunctions2 = eventFunctions; _i2 < _eventFunctions2.length; _i2++) {
      var _event = _eventFunctions2[_i2];
      el.removeEventListener(_event.type, _event.listener);
    }
  }
  /**
   * assign all event that were removed from page
   * @returns {void}
   */


  function assignEvents() {
    for (var _i3 = 0, _eventFunctions3 = eventFunctions; _i3 < _eventFunctions3.length; _i3++) {
      var event = _eventFunctions3[_i3];
      oldEventListener(event.type, event.listener, event.options);
    }
  }
  /**
   * 
   * @param {String} type A case-sensitive string representing the event type to listen for.
   * @param {CallableFunction} listener The object which receives a notification 
   * (an object that implements the Event interface) when an event of the specified type occurs. 
   * This must be an object implementing the EventListener interface, or a JavaScript function. 
   * See The event listener callback for details on the callback itself.
   * @param {Object} [options] An options object that specifies characteristics about the event listener.
   * @param {Boolean} [options.capture] A Boolean indicating that events of this type will be dispatched 
   * to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
   * @param {Boolean} [options.once] A Boolean indicating that the listener should be invoked at most 
   * once after being added. If true, the listener would be automatically removed when invoked.
   * @param {Boolean} [options.passive] A Boolean which, if true, indicates that the function specified 
   * by listener will never call preventDefault(). If a passive listener does call preventDefault(), 
   * the user agent will do nothing other than generate a console warning. See Improving scrolling 
   * performance with passive listeners to learn more.
   * @param {Boolean} [options.mozSystemGroup] "experimental" A Boolean indicating that the listener 
   * should be added to the system group. Available only in code running in XBL or in the chrome of the 
   * Firefox browser.
   * @returns {void}
   */


  function addEventListener(type, listener, options) {
    eventFunctions[eventFunctions.length] = {
      type: type,
      listener: listener,
      options: options
    };
    oldEventListener(type, listener, options);
  }

  for (var prop in props) {
    if (props[prop] === undefined) {
      return console.error("invalid value of \"".concat(prop, "\""));
    }

    if (prop == 'children' && Array.isArray(props[prop])) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = props[prop][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var htmlel = _step.value;
          el.appendChild(htmlel);
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
      for (var p in props[prop]) {
        el.setAttribute(p, props[prop][p]);
      }
    } else if (props[prop].constructor.name === 'Object') {
      for (var _p in props[prop]) {
        el[prop][_p] = props[prop][_p];
      }
    } else el[prop] = props[prop];
  }
  /**
   * @function
   * @param {HTMLElement | HTMLAllCollection | HTMLElement[]} nodes
   */


  el.append = function (nodes) {
    nodes = Array.isArray(nodes) ? nodes : [nodes];

    for (var i = 0; i < nodes.length; ++i) {
      el.appendChild(nodes[i]);
    }
  };

  if (props.children) {
    el.append(props.children);
  }

  el.bubble = function createBubble() {
    bubble(el);
  };

  return el;
}
/**
 * get first mathing element from DOM
 * @param {String} selector CSS selector 
 * @returns {HTMLElement}
 */


function get(selector) {
  return document.querySelector(selector);
}
/**
 * get all matching element from DOM
 * @param {String} selector CSS selector
 * @returns {HTMLElement[]}
 */


function getAll(selector) {
  return document.querySelectorAll(selector);
}
/**
 * 
 * @param {element} el 
 */


function bubble(el) {
  var bubble = create('i', {
    className: 'bubble'
  });
  el.addEventListener('click', bubbles);

  function bubbles(e) {
    var elClient = el.getBoundingClientRect();
    bubble.classList.add('animate');
    el.classList.add('bubbling');
    bubble.style.height = elClient.width + 'px';
    bubble.style.width = elClient.width + 'px';
    bubble.style.top = e.clientY - elClient.top - elClient.width / 2 + 'px';
    bubble.style.left = e.clientX - elClient.left - elClient.width / 2 + 'px';
    setTimeout(function assignProps() {
      el.removeEvents();
      el.appendChild(bubble);
    }, 0);
    setTimeout(function removeBubble() {
      bubble.classList.remove('animate');
      el.classList.remove('bubbling');
      el.assignEvents();
      el.removeChild(bubble);
    }, 580);
  }
}
/**
 * 
 * @param {HTMLInputElement} props 
 * @returns {HTMLInputElement}
 */


function input() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!props.type) props.type = 'text';
  return create('input', props);
}
/**
 * 
 * @param {HTMLSpanElement} props 
 * @returns {HTMLSpanElement} 
 */


function span() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return create('span', props);
}
/**
 * 
 * @param {String} text 
 * @param {HTMLButtonElement} [props] 
 * @returns {HTMLButtonElement} 
 */


function button() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (text) {
    props.textContent = text;
  }

  var button = create('button', props);
  button.bubble();
  return button;
}
/**
 * 
 * @param {HTMLDivElement} props 
 * @returns {HTMLDivElement} 
 */


function div() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return create('div', props);
}
/**
 * 
 * @param {String} src 
 * @param {String} alt 
 * @param {HTMLImageElement} props 
 * @returns {HTMLImageElement} 
 */


function img() {
  var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var alt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  props.src = src;
  props.alt = alt;
  return create('img', props);
}
/**
 * 
 * @param {String} href 
 * @param {Node} child 
 * @param {HTMLAnchorElement} props 
 * @returns {HTMLAnchorElement} 
 */


function a() {
  var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  props.href = href;

  if (child) {
    props.children = [child];
  }

  return create('a', props);
}



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rangeSlider", function() { return rangeSlider; });
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
  var mainWrapper = _html__WEBPACK_IMPORTED_MODULE_0__["div"]({
    role: 'input',
    tabIndex: 0,
    className: 'rangeSlider-wrapper',
    attr: {
      'data-value': 0
    }
  });
  var btn = _html__WEBPACK_IMPORTED_MODULE_0__["span"]({
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
  };

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
    } else if (mainWrapper.value !== max && x > width) {
      setvalue(max);
    } else if (mainWrapper.value !== min && x < 0) {
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
    if (value > max) {
      value = max;
    } else if (value < min) {
      value = min;
    }

    value = parseFloat(value);
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

    if (mainWrapper.onchange) {
      mainWrapper.value = value;
      mainWrapper.onchange(value);
    }

    mainWrapper.value = value;
    var val = value + '';
    var l = length();
    val = val.split('.');

    if (l > 0 && val.length > 1) {
      val = val[0] + '.' + val[1].substr(0, l);
    } else {
      val = val[0];
    }

    btn.setAttribute('data-value', val);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

/**
 * 
 * @param {Object} [opts]
 * @param {HTMLSelectElement} [opts.select] 
 * @param {Number} [opts.height]
 * @param {Number} [opts.width]
 * @param {Number} [opts.spead]
 */

function select() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var div = _html__WEBPACK_IMPORTED_MODULE_0__["div"]({
    className: '__select'
  });
  var placeholder = _html__WEBPACK_IMPORTED_MODULE_0__["span"]({
    className: '__placeholder'
  });
  var optionsContainer = _html__WEBPACK_IMPORTED_MODULE_0__["div"]({
    className: '__options'
  });
  var mask = _html__WEBPACK_IMPORTED_MODULE_0__["div"]({
    className: '__mask',
    onclick: hide
  });
  var scrollbarWidth = getScrollbarWidth();
  var containerHeight = 0;
  var height = opts.height;
  var width = opts.width;
  var spead = opts.spead || 1;
  var obj = {};

  if (opts.select) {
    obj.select = opts.select;
    var options = opts.select.options;
    opts.select.style.display = 'none';
    opts.select.parentElement.insertBefore(div, opts.element);

    for (var i = 0; i < options.length; ++i) {
      var option = _html__WEBPACK_IMPORTED_MODULE_0__["div"]({
        className: '__option',
        attr: {
          "data-value": options[i].value
        },
        textContent: options[i].textContent,
        style: {
          height: height + 'px'
        }
      });
      option.addEventListener('click', optionOnselect);

      if (options[i].selected) {
        div.setAttribute('data-value', options[i].value);
        placeholder.textContent = options[i].textContent;
      }

      optionsContainer.appendChild(option);
    }

    if (!div.getAttribute('data-value')) {
      div.setAttribute('data-value', options[0].value);
      placeholder.textContent = options[0].textContent;
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

  function show() {
    document.body.appendChild(mask);
    document.body.appendChild(optionsContainer);
    var divClient = div.getBoundingClientRect();

    var _height = optionsContainer.children.length * (height || 40);

    optionsContainer.style.top = divClient.top + 'px';
    optionsContainer.style.left = divClient.left + 'px';
    optionsContainer.style.width = divClient.width + 'px';
    optionsContainer.style.height = '0';

    if (divClient.bottom + _height > window.innerHeight) {
      optionsContainer.style.transform = 'translate(0, -100%)';

      if (divClient.bottom - _height < 0) {
        var tmpHeight = _height;
        tmpHeight -= _height + divClient.bottom + 20 - window.innerHeight;

        if (tmpHeight < 300) {
          _height += divClient.top - _height - 20;
        } else {
          _height = tmpHeight;
          optionsContainer.style.removeProperty('transform');
        }

        optionsContainer.style.overflowY = 'scroll';
        optionsContainer.style.width = divClient.width + scrollbarWidth + 'px';
      }
    } else {
      optionsContainer.style.removeProperty('overflow-y');
    }

    containerHeight = _height;
    var current_height = 0;
    var inc_factor = 1;

    function animateHeight() {
      if (current_height + inc_factor > _height) {
        optionsContainer.style.height = _height + 'px';
      } else if (current_height < _height) {
        current_height += inc_factor;
        inc_factor += spead;
        optionsContainer.style.height = current_height + 'px';
        requestAnimationFrame(animateHeight);
      }
    }

    animateHeight();
  }

  placeholder.onclick = show;

  function hide() {
    optionsContainer.style.removeProperty('overflow-y');
    var current_height = containerHeight;
    var inc_factor = 1;

    function animateHeight() {
      if (current_height - inc_factor < 0) {
        optionsContainer.style.height = '0';
        document.body.removeChild(mask);
        document.body.removeChild(optionsContainer);
      } else if (current_height > 0) {
        current_height -= inc_factor;
        inc_factor += spead;
        optionsContainer.style.height = current_height + 'px';
        requestAnimationFrame(animateHeight);
      } else {
        document.body.removeChild(mask);
        document.body.removeChild(optionsContainer);
      }
    }

    animateHeight();
  }

  function optionOnselect() {
    /**
     * @type {HTMLSpanElement}
     */
    var el = this;
    var value = el.getAttribute('data-value');
    var text = el.textContent;
    var selected = optionsContainer.querySelector('.__selected');
    if (selected) selected.classList.remove('__selected');
    el.classList.add('__selected');
    div.setAttribute('data-value', value);
    placeholder.textContent = text;
    obj.onchange(value);
    if (opts.select) opts.select.value = value;
    hide();
  }
  /**
   * 
   * @param {HTMLSpanElement|HTMLOptionElement|String} option 
   * @param {String|Number} [value] 
   */


  function addOption(option) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (typeof option !== 'string') {
      value = value || option.value || option.getAttribute('data-value') || '';
      option = option.textContent;
    }

    if (opts.select) {
      var op = _html__WEBPACK_IMPORTED_MODULE_0__["create"]('option', {
        textContent: option,
        attr: {
          value: value
        }
      });
      opts.select.appendChild(op);
    }

    option = _html__WEBPACK_IMPORTED_MODULE_0__["div"]({
      className: '__option',
      attr: {
        "data-value": value
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
    document.body.appendChild(optionsContainer);
    var client = optionsContainer.getBoundingClientRect();
    placeholder.style.width = client.width + 'px';
    document.body.removeChild(optionsContainer);
  }

  function value() {
    return div.getAttribute('data-value');
  }

  function setvalue(value) {
    if (opts.select) opts.select.value = value;
    var selected = optionsContainer.querySelector('.__selected');
    if (selected) selected.classList.remove('__selected');
    var allOptions = optionsContainer.children;

    for (var _i = 0; _i < allOptions; ++_i) {
      if (allOptions[_i].getAttribute('data-value') === value) {
        allOptions[_i].classList.add('__selected');

        placeholder.textContent = allOptions[_i].textContent;
        break;
      }
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

  obj.customSelect = optionsContainer;
  obj.addOption = addOption;
  obj.value = value;
  obj.setvalue = setvalue;
  return obj;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolTip", function() { return toolTip; });
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

/**
 * 
 * @param {Object} opts 
 * @param {String} opts.title 
 * @param {element} opts.element 
 * @param {String} opts.direction 
 * @param {Boolean} opts.watchChange
 */

function toolTip(opts) {
  if (!opts.element) return console.error('element is undefined');
  if (!opts.direction) opts.direction = 'left';
  var title = opts.title || opts.element.getAttribute('title') || opts.element.getAttribute('data-title') || '';
  var toolTip = _html__WEBPACK_IMPORTED_MODULE_0__["create"]('div', {
    className: 'toolTip'
  });
  var toolTipPointer = _html__WEBPACK_IMPORTED_MODULE_0__["create"]('span', {
    className: 'toolTip-pointer'
  });
  var wrapper = _html__WEBPACK_IMPORTED_MODULE_0__["create"]('div', {
    className: 'toolTip-wrapper',
    attr: {
      "data-direction": opts.direction
    }
  });
  var text = _html__WEBPACK_IMPORTED_MODULE_0__["create"]('span', {
    textContent: title,
    className: 'text'
  });
  /**
   * @type {MutationObserver}
   */

  var observer;
  toolTip.appendChild(toolTipPointer);
  toolTip.appendChild(text);
  wrapper.appendChild(toolTip);
  opts.element.onmouseenter = mouseEnter;
  opts.element.onmouseleave = mouseLeave;

  function mouseEnter() {
    var elClient = opts.element.getBoundingClientRect();

    if (opts.direction) {
      if (opts.direction === 'left') {
        wrapper.style.left = elClient.left + 'px';
        wrapper.style.top = elClient.top + elClient.height / 2 + 'px';
        toolTipPointer.style.right = "0";
        toolTipPointer.style.top = "50%";
        toolTipPointer.style.transform = 'translate3d(50%, -50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(-100%, -50%, 0px)';
      }

      if (opts.direction === 'right') {
        wrapper.style.left = elClient.right + 'px';
        wrapper.style.top = elClient.top + elClient.height / 2 + 'px';
        toolTipPointer.style.left = "0";
        toolTipPointer.style.top = "50%";
        toolTipPointer.style.transform = 'translate3d(-50%, -50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(0%, -50%, 0px)';
      }

      if (opts.direction === 'top') {
        wrapper.style.left = elClient.left + elClient.width / 2 + 'px';
        wrapper.style.top = elClient.top + 'px';
        toolTipPointer.style.left = "50%";
        toolTipPointer.style.bottom = "0";
        toolTipPointer.style.transform = 'translate3d(-50%, 50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(-50%, -100%, 0px)';
      }

      if (opts.direction === 'bottom') {
        wrapper.style.left = elClient.left + elClient.width / 2 + 'px';
        wrapper.style.top = elClient.bottom + 'px';
        toolTipPointer.style.left = "50%";
        toolTipPointer.style.top = "0";
        toolTipPointer.style.transform = 'translate3d(-50%, -50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(-50%, 0%, 0px)';
      }
    }

    if (opts.watchChange) {
      observer = new MutationObserver(function (changes, observer) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = changes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var change = _step.value;

            if (change.type === 'attributes') {
              text.textContent = opts.element.getAttribute('title') || opts.element.getAttribute('data-title');
            }
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
      });
      observer.observe(opts.element, {
        attributes: true
      });
    }

    document.body.appendChild(wrapper);
  }

  function mouseLeave() {
    if (!toolTip.parentElement) return;
    document.body.removeChild(wrapper);

    if (opts.watchChange && observer) {
      observer.disconnect;
    }
  }

  opts.element.removeAttribute('title');
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggler", function() { return toggler; });
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
  var checkbox = _html__WEBPACK_IMPORTED_MODULE_0__["input"]({
    type: 'checkbox',
    style: {
      display: 'none'
    }
  });
  var btn = _html__WEBPACK_IMPORTED_MODULE_0__["span"]({
    className: 'toggler_btn'
  });
  var mainWrapper = _html__WEBPACK_IMPORTED_MODULE_0__["create"]('label', {
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