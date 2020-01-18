(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tag"] = factory();
	else
		root["tag"] = factory();
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tag", function() { return tag; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function tag(tagName) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isNode = tagName instanceof Node;
  if (!isNode && typeof tagName !== 'string') throw new Error("{tag} is invalid value of tag");
  var el = isNode ? tagName : document.createElement(tagName);
  el.on = on.bind(el);
  el.off = off.bind(el);
  el.append = append.bind(el);
  el.get = get.bind(el);
  el.getAll = getAll.bind(el);
  el.removeEvents = removeEvents.bind(el);
  el.destroy = destroy.bind(el);

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

  function on(type, listener, options) {
    this.addEventListener(type, listener, options);
  }

  function off(type, listener, options) {
    this.removeEventListener(type, listener, options);
  }

  function append() {
    var _this = this;

    for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
      nodes[_key] = arguments[_key];
    }

    nodes.map(function (node) {
      if (node instanceof Node) {
        _this.appendChild(tag(node));

        if (node.id && !el[node.id]) el[node.id] = node;
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

tag.get = function (selector) {
  var el = document.querySelector(selector);
  if (!el) return null;
  return tag(el);
};

tag.getAll = function (selector) {
  var all = document.querySelectorAll(selector);

  var allAr = _toConsumableArray(all);

  allAr.map(function (el) {
    tag(el);
  });
  return allAr;
};

tag.parse = function (html) {
  var div = tag('div');
  div.innerHTML = html;

  if (div.childElementCount === 1) {
    return tag(div.firstElementChild);
  } else {
    return _toConsumableArray(div.children);
  }
};

tag.template = function (html, values) {
  if (values) {
    for (var key in values) {
      if (!/^[a-z_][a-z0-9_\-]*$/.test(key)) continue;
      html = html.replace(new RegExp("{{".concat(key, "}}"), 'g'), values[key]);
    }
  }

  html = html.replace(/{{[a-z_][a-z0-9_\-]*}}/g, '');
  return html;
};

/***/ })
/******/ ])["tag"];
});