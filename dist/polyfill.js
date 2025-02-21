/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["polyfill"] = factory();
	else
		root["polyfill"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _arrayLikeToArray; }\n/* harmony export */ });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n  return arr2;\n}\n\n//# sourceURL=webpack://html-tag-js/./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _arrayWithoutHoles; }\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}\n\n//# sourceURL=webpack://html-tag-js/./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _iterableToArray; }\n/* harmony export */ });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n\n//# sourceURL=webpack://html-tag-js/./node_modules/@babel/runtime/helpers/esm/iterableToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _nonIterableSpread; }\n/* harmony export */ });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://html-tag-js/./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _toConsumableArray; }\n/* harmony export */ });\n/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}\n\n//# sourceURL=webpack://html-tag-js/./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _typeof; }\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n//# sourceURL=webpack://html-tag-js/./node_modules/@babel/runtime/helpers/esm/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _unsupportedIterableToArray; }\n/* harmony export */ });\n/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}\n\n//# sourceURL=webpack://html-tag-js/./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./src/polyfill.js":
/*!*************************!*\
  !*** ./src/polyfill.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag */ \"./src/tag.js\");\nif(!('includes'in Array.prototype)){Object.defineProperty(Array.prototype,'includes',{value:function value(searchElement,fromIndex){if(this==null){throw new TypeError('\"this\" is null or not defined');}var o=Object(this);var len=o.length>>>0;if(len===0){return false;}var n=fromIndex|0;var k=Math.max(n>=0?n:len-Math.abs(n),0);while(k<len){if(o[k]===searchElement){return true;}k++;}return false;},configurable:true,writable:true});}if(!('flat'in Array.prototype)){Object.defineProperty(Array.prototype,'flat',{value:function value(){var depth=arguments.length>0&&arguments[0]!==undefined?arguments[0]:1;// Default depth changed to 1 (spec compliance)\nvar _flatten=function flatten(arr,currentDepth){return arr.reduce(function(acc,val){if(Array.isArray(val)&&currentDepth>0){return acc.concat(_flatten(val,currentDepth-1));}else{return acc.concat(val);}},[]);};return _flatten(this,depth);},writable:true,configurable:true});}if(!('isConnected'in Node.prototype)){Object.defineProperty(Node.prototype,'isConnected',{get:function get(){return!this.ownerDocument||!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED);}});}if(!('get'in HTMLElement.prototype)){Object.defineProperty(HTMLElement.prototype,'get',{value:function value(selector){return this.querySelector(selector);}});}if(!('getAll'in HTMLElement.prototype)){Object.defineProperty(HTMLElement.prototype,'getAll',{value:function value(selector){return this.querySelectorAll(selector);}});}if(!('content'in HTMLElement.prototype)){Object.defineProperty(HTMLElement.prototype,'content',{set:function set(value){this.innerHTML='';(0,_tag__WEBPACK_IMPORTED_MODULE_1__.addChildren)(this,value);},get:function get(){var children=(0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.children);if(children.length===0){return null;}if(children.length===1){return children[0];}return children;}});}[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(item){if(!item.hasOwnProperty('remove')){Object.defineProperty(item,'remove',{configurable:true,enumerable:true,writable:true,value:function remove(){if(this.parentNode===null){return;}this.parentNode.removeChild(this);}});}if(!item.hasOwnProperty('append')){Object.defineProperty(item,'append',{configurable:true,enumerable:true,writable:true,value:function append(){var argArr=Array.prototype.slice.call(arguments),docFrag=document.createDocumentFragment();argArr.forEach(function(argItem){var isNode=argItem instanceof Node;docFrag.appendChild(isNode?argItem:document.createTextNode(String(argItem)));});this.appendChild(docFrag);}});}if(!item.hasOwnProperty('after')){Object.defineProperty(item,'after',{configurable:true,enumerable:true,writable:true,value:function after(){if(this.parentNode===null){return;}var argArr=Array.prototype.slice.call(arguments),docFrag=document.createDocumentFragment();argArr.forEach(function(argItem){var isNode=argItem instanceof Node;docFrag.appendChild(isNode?argItem:document.createTextNode(String(argItem)));});this.parentNode.insertBefore(docFrag,this.nextSibling);}});}});\n\n//# sourceURL=webpack://html-tag-js/./src/polyfill.js?");

/***/ }),

/***/ "./src/tag.js":
/*!********************!*\
  !*** ./src/tag.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addChildren: function() { return /* binding */ addChildren; },\n/* harmony export */   \"default\": function() { return /* binding */ tag; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\nfunction _createForOfIteratorHelper(r,e){var t=\"undefined\"!=typeof Symbol&&r[Symbol.iterator]||r[\"@@iterator\"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&\"number\"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]};},e:function e(r){throw r;},f:F};}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var o,a=!0,u=!1;return{s:function s(){t=t.call(r);},n:function n(){var r=t.next();return a=r.done,r;},e:function e(r){u=!0,o=r;},f:function f(){try{a||null==t[\"return\"]||t[\"return\"]();}finally{if(u)throw o;}}};}function _unsupportedIterableToArray(r,a){if(r){if(\"string\"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return\"Object\"===t&&r.constructor&&(t=r.constructor.name),\"Map\"===t||\"Set\"===t?Array.from(r):\"Arguments\"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0;}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n;}/**\r\n * Creates an HTML element with the specified tag name, options, and children.\r\n * @param {string|function|Node} tagName \r\n * @param {object} options \r\n * @param {Array} children \r\n * @returns \r\n */function tag(tagName){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var children=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];if(typeof options==='string'){options={innerHTML:options};}return create(tagName,options,children);}/**\r\n * Creates an HTML element with the specified tag name, options, and children.\r\n *\r\n * @param {string|function|Node} tagName - The tag name of the element to create. It can be a string, a function, or a Node object.\r\n * @param {Object} [options={}] - The options for the element.\r\n * @param {Array} [children=[]] - The children of the element.\r\n * @returns {Node} The created HTML element.\r\n * @throws {Error} If the tag name is invalid.\r\n */function create(tagName){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var children=arguments.length>2&&arguments[2]!==undefined?arguments[2]:[];var $el;if(Array.isArray(options)){children=options;options={};}if(typeof tagName==='function'){return tagName(options,children);}else if(tagName instanceof Node){$el=tagName;}else if(typeof tagName==='string'){$el=document.createElement(tagName);}else{throw new Error('Invalid tag, ',(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tagName));}var ref=options.ref;delete options.ref;Object.keys(options).forEach(function(prop){var option=options[prop];if(option===undefined)return;switch(prop){case'child':addChildren($el,[option]);break;case'children':if(!Array.isArray(option)){throw new Error('children must be an array of Nodes');}addChildren($el,option.flat());break;case'attr':Object.keys(option).forEach(function(attr){var value=option[attr];if(value===undefined)return;$el.setAttribute(attr,value);});break;case'style':case'dataset':Object.keys(option).forEach(function(key){var value=option[key];if(value===undefined)return;$el[prop][key]=value;});break;case'on':Object.keys(option).forEach(function(event){var handlers=option[event];if(handlers===undefined)return;handlers.forEach(function(handler){$el.addEventListener(event,handler);});});break;default:$el[prop]=option;break;}});if(ref&&ref.instanceOfRef){ref.el=$el;}return $el;}/**\r\n * Add children to an element\r\n * @param {HTMLElement} $el \r\n * @param {Array<HTMLElement|Promise>} children \r\n */function addChildren($el,children){var _iterator=_createForOfIteratorHelper(children),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var child=_step.value;if(Array.isArray(child)){addChildren($el,child.flat());continue;}child=getChild(child);if(child){$el.appendChild(child);}}}catch(err){_iterator.e(err);}finally{_iterator.f();}}/**\r\n * Processes a given child element and returns a valid DOM Node.\r\n * \r\n * @param {any} child - The child element to process. It can be of various types including function, Node, string, number, bigint, symbol, undefined, or Promise.\r\n * @returns {Node|null} - Returns a valid DOM Node or null if the child cannot be processed.\r\n */function getChild(child){if(typeof child==='function'){return getChild(child());}if(child instanceof Promise){var $placeholder=document.createTextNode('');child.then(function(child){if(Array.isArray(child)){child=child.flat();child.forEach(function(child){child=getChild(child);if(child){$placeholder.before(child);}});$placeholder.remove();return;}child=getChild(child);if(child){$placeholder.replaceWith(child);}else{$placeholder.remove();}});child=$placeholder;}else if(child instanceof Text){if('clone'in child){child=child.clone();}}else if(!(child instanceof Node)){var type=(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(child);if(!['number','bigint','string'].includes(type))return null;if(type==='string'&&!child)return null;child=tag.text(\"\".concat(child));}return child;}if(window&&!window.tag){window.tag=tag;}Object.defineProperties(tag,{get:{value:function value(selector){return document.querySelector(selector);}},getAll:{value:function value(selector){var $els=document.querySelectorAll(selector);return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($els);}},text:{value:function value(text){return document.createTextNode(text);}},use:{value:function value(){var arg=arguments.length>0&&arguments[0]!==undefined?arguments[0]:'';var el=document.createTextNode(arg);el.clones=[el];el.shouldClone=false;el._value=arg;Object.defineProperty(el,'value',{set:function set(val){el._value=val;el.clones.forEach(function(clone){clone.textContent=val;});if(typeof el.onChange==='function'){el.onChange.call(el,val);}},get:function get(){return el._value;}});Object.defineProperty(el,'toString',{value:function value(){return el._value;}});Object.defineProperty(el,'clone',{value:function value(){if(!el.shouldClone){el.shouldClone=true;return el;}var clone=el.cloneNode();el.clones.push(clone);return clone;}});return el;}}});\n\n//# sourceURL=webpack://html-tag-js/./src/tag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/polyfill.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});