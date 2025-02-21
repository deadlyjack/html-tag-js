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
		exports["Ref"] = factory();
	else
		root["Ref"] = factory();
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

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _classCallCheck; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://html-tag-js/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _createClass; }\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(descriptor.key), descriptor);\n  }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  Object.defineProperty(Constructor, \"prototype\", {\n    writable: false\n  });\n  return Constructor;\n}\n\n//# sourceURL=webpack://html-tag-js/./node_modules/@babel/runtime/helpers/esm/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _defineProperty; }\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperty(obj, key, value) {\n  key = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(key);\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n  return obj;\n}\n\n//# sourceURL=webpack://html-tag-js/./node_modules/@babel/runtime/helpers/esm/defineProperty.js?");

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

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ toPrimitive; }\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction toPrimitive(t, r) {\n  if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n\n//# sourceURL=webpack://html-tag-js/./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ toPropertyKey; }\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction toPropertyKey(t) {\n  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t, \"string\");\n  return \"symbol\" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i) ? i : i + \"\";\n}\n\n//# sourceURL=webpack://html-tag-js/./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?");

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

/***/ "./src/ref.js":
/*!********************!*\
  !*** ./src/ref.js ***!
  \********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Ref; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\nfunction _classPrivateMethodInitSpec(e,a){_checkPrivateRedeclaration(e,a),a.add(e);}function _classPrivateFieldInitSpec(e,t,a){_checkPrivateRedeclaration(e,t),t.set(e,a);}function _checkPrivateRedeclaration(e,t){if(t.has(e))throw new TypeError(\"Cannot initialize the same private elements twice on an object\");}function _classPrivateFieldSet(s,a,r){return s.set(_assertClassBrand(s,a),r),r;}function _classPrivateFieldGet(s,a){return s.get(_assertClassBrand(s,a));}function _assertClassBrand(e,t,n){if(\"function\"==typeof e?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError(\"Private element is not present on this object\");}var _el=/*#__PURE__*/new WeakMap();var _value=/*#__PURE__*/new WeakMap();var _innerHTML=/*#__PURE__*/new WeakMap();var _textContent=/*#__PURE__*/new WeakMap();var _innerText=/*#__PURE__*/new WeakMap();var _id=/*#__PURE__*/new WeakMap();var _className=/*#__PURE__*/new WeakMap();var _classList=/*#__PURE__*/new WeakMap();var _style=/*#__PURE__*/new WeakMap();var _dataset=/*#__PURE__*/new WeakMap();var _children=/*#__PURE__*/new WeakMap();var _attr=/*#__PURE__*/new WeakMap();var _on=/*#__PURE__*/new WeakMap();var _onref=/*#__PURE__*/new WeakMap();var _Ref_brand=/*#__PURE__*/new WeakSet();var Ref=/*#__PURE__*/function(){function Ref(){var _this=this;(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this,Ref);/**\n   * Emits an event\n   * @param {'ref'} event Event name\n   * @param  {...any} args Arguments to pass to the callback\n   */_classPrivateMethodInitSpec(this,_Ref_brand);(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this,\"instanceOfRef\",true);/**@type {HTMLElement} */_classPrivateFieldInitSpec(this,_el,void 0);_classPrivateFieldInitSpec(this,_value,void 0);_classPrivateFieldInitSpec(this,_innerHTML,void 0);_classPrivateFieldInitSpec(this,_textContent,void 0);_classPrivateFieldInitSpec(this,_innerText,void 0);_classPrivateFieldInitSpec(this,_id,void 0);_classPrivateFieldInitSpec(this,_className,void 0);_classPrivateFieldInitSpec(this,_classList,new ClassList());_classPrivateFieldInitSpec(this,_style,new CSSStyle());_classPrivateFieldInitSpec(this,_dataset,{});_classPrivateFieldInitSpec(this,_children,[]);_classPrivateFieldInitSpec(this,_attr,{});_classPrivateFieldInitSpec(this,_on,{ref:[function(el){if(typeof _this.onref==='function')_this.onref.call(_this,el);}]});_classPrivateFieldInitSpec(this,_onref,void 0);}return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Ref,[{key:\"append\",value:/**\n   * Append children to the element\n   * If the element is not yet created, store the children and apply them when the element is created\n   * @param  {...Node} children \n   */function append(){var _classPrivateFieldGet2,_classPrivateFieldGet3;if(_classPrivateFieldGet(_el,this))(_classPrivateFieldGet2=_classPrivateFieldGet(_el,this)).append.apply(_classPrivateFieldGet2,arguments);else(_classPrivateFieldGet3=_classPrivateFieldGet(_children,this)).push.apply(_classPrivateFieldGet3,arguments);}/**\n   * Set or get an attribute\n   * If the element is not yet created, store the value and apply it when the element is created\n   * @param {string} name  attribute name\n   * @param {string|number|boolean} value attribute value \n   * @returns \n   */},{key:\"attr\",value:function attr(name,value){if(!name&&!value)return null;if(!_classPrivateFieldGet(_el,this)){if(value){_classPrivateFieldGet(_attr,this)[name]=value;return;}return _classPrivateFieldGet(_attr,this)[name];}if(value){_classPrivateFieldGet(_el,this).setAttribute(name,value);}return _classPrivateFieldGet(_el,this).getAttribute(name);}/**\n   * Get a single element by query selector\n   * @param {string} query \n   * @returns {HTMLElement}\n   */},{key:\"get\",value:function get(query){var _classPrivateFieldGet4;return(_classPrivateFieldGet4=_classPrivateFieldGet(_el,this))===null||_classPrivateFieldGet4===void 0?void 0:_classPrivateFieldGet4.get(query);}/**\n   * Get all elements by query selector\n   * @param {string} query \n   * @returns \n   */},{key:\"getAll\",value:function getAll(query){var _classPrivateFieldGet5;return(_classPrivateFieldGet5=_classPrivateFieldGet(_el,this))===null||_classPrivateFieldGet5===void 0?void 0:_classPrivateFieldGet5.getAll(query);}/**\n   * Attach an event listener\n   * @param {'ref'} event\n   * @param {(this:Ref, ref:Ref)=>void} callback\n   */},{key:\"on\",value:function on(event,callback){var _classPrivateFieldGet6;(_classPrivateFieldGet6=_classPrivateFieldGet(_on,this)[event])===null||_classPrivateFieldGet6===void 0||_classPrivateFieldGet6.push(callback);if(event==='ref'&&_classPrivateFieldGet(_el,this)){_assertClassBrand(_Ref_brand,this,_emit).call(this,event,_classPrivateFieldGet(_el,this));}}/**\n   * Remove an event listener\n   * @param {'ref'} event\n   * @param {(this:Ref, ref:Ref)=>void} callback\n   */},{key:\"off\",value:function off(event,callback){if(!_classPrivateFieldGet(_on,this)[event])return;_classPrivateFieldGet(_on,this)[event]=_classPrivateFieldGet(_on,this)[event].filter(function(c){return c!==callback;});}},{key:\"onref\",get:function get(){return _classPrivateFieldGet(_onref,this);},set:function set(callback){_classPrivateFieldSet(_onref,this,callback);if(_classPrivateFieldGet(_el,this))_assertClassBrand(_Ref_brand,this,_emit).call(this,'ref',_classPrivateFieldGet(_el,this));}/**\n   * Gets the reference to the element\n   */},{key:\"el\",get:function get(){return _classPrivateFieldGet(_el,this);}/**\n   * Set the reference to the element\n   */,set:function set(el){var _this2=this;_classPrivateFieldSet(_el,this,el);if(_classPrivateFieldGet(_value,this)){this.value=_classPrivateFieldGet(_value,this);_classPrivateFieldSet(_value,this,null);}if(_classPrivateFieldGet(_innerHTML,this)){this.innerHTML=_classPrivateFieldGet(_innerHTML,this);_classPrivateFieldSet(_innerHTML,this,null);}if(_classPrivateFieldGet(_textContent,this)){this.textContent=_classPrivateFieldGet(_textContent,this);_classPrivateFieldSet(_textContent,this,null);}if(_classPrivateFieldGet(_innerText,this)){this.innerText=_classPrivateFieldGet(_innerText,this);_classPrivateFieldSet(_innerText,this,null);}if(_classPrivateFieldGet(_id,this)){this.id=_classPrivateFieldGet(_id,this);_classPrivateFieldSet(_id,this,null);}if(_classPrivateFieldGet(_className,this)){this.className=_classPrivateFieldGet(_className,this);_classPrivateFieldSet(_className,this,null);}if(_classPrivateFieldGet(_classList,this).length){_classPrivateFieldGet(_classList,this).forEach(function(c){return _this2.classList.add(c);});_classPrivateFieldGet(_classList,this).length=0;}if(_classPrivateFieldGet(_children,this).length){this.append.apply(this,(0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_classPrivateFieldGet(_children,this)));_classPrivateFieldGet(_children,this).length=0;}var attrProps=Object.keys(_classPrivateFieldGet(_attr,this));if(attrProps.length){attrProps.forEach(function(p){return _this2.attr(p,_classPrivateFieldGet(_attr,_this2)[p]);});_classPrivateFieldSet(_attr,this,{});}var styleProps=Object.keys(_classPrivateFieldGet(_style,this));if(styleProps.length){styleProps.forEach(function(p){return _this2.style[p]=_classPrivateFieldGet(_style,_this2)[p];});_classPrivateFieldSet(_style,this,{});}var datasetProps=Object.keys(_classPrivateFieldGet(_dataset,this));if(datasetProps.length){datasetProps.forEach(function(p){return _this2.dataset[p]=_classPrivateFieldGet(_dataset,_this2)[p];});_classPrivateFieldSet(_dataset,this,{});}_assertClassBrand(_Ref_brand,this,_emit).call(this,'ref',el);}/**\n   * Get the textContent\n   * If the element is not yet created, return the stored value\n   */},{key:\"textContent\",get:function get(){var _classPrivateFieldGet7,_classPrivateFieldGet8;return(_classPrivateFieldGet7=(_classPrivateFieldGet8=_classPrivateFieldGet(_el,this))===null||_classPrivateFieldGet8===void 0?void 0:_classPrivateFieldGet8.textContent)!==null&&_classPrivateFieldGet7!==void 0?_classPrivateFieldGet7:_classPrivateFieldGet(_textContent,this);}/**\n   * Set the textContent\n   * If the element is not yet created, store the value and apply it when the element is created\n   */,set:function set(text){if(_classPrivateFieldGet(_el,this))_classPrivateFieldGet(_el,this).textContent=text;else _classPrivateFieldSet(_textContent,this,text);}/**\n   * Get the innerText\n   * If the element is not yet created, return the stored value\n   */},{key:\"innerText\",get:function get(){var _classPrivateFieldGet9,_classPrivateFieldGet10;return(_classPrivateFieldGet9=(_classPrivateFieldGet10=_classPrivateFieldGet(_el,this))===null||_classPrivateFieldGet10===void 0?void 0:_classPrivateFieldGet10.innerText)!==null&&_classPrivateFieldGet9!==void 0?_classPrivateFieldGet9:_classPrivateFieldGet(_innerText,this);}/**\n   * Set the innerText\n   * If the element is not yet created, store the value and apply it when the element is created\n   */,set:function set(text){if(_classPrivateFieldGet(_el,this))_classPrivateFieldGet(_el,this).innerText=text;else _classPrivateFieldSet(_innerText,this,text);}/**\n   * Get the innerHTML\n   * If the element is not yet created, return the stored value\n   */},{key:\"innerHTML\",get:function get(){var _classPrivateFieldGet11,_classPrivateFieldGet12;return(_classPrivateFieldGet11=(_classPrivateFieldGet12=_classPrivateFieldGet(_el,this))===null||_classPrivateFieldGet12===void 0?void 0:_classPrivateFieldGet12.innerHTML)!==null&&_classPrivateFieldGet11!==void 0?_classPrivateFieldGet11:_classPrivateFieldGet(_innerHTML,this);}/**\n   * Set the innerHTML\n   * If the element is not yet created, store the value and apply it when the element is created\n   */,set:function set(html){if(_classPrivateFieldGet(_el,this))_classPrivateFieldGet(_el,this).innerHTML=html;else _classPrivateFieldSet(_innerHTML,this,html);}/**\n   * Get the value\n   * If the element is not yet created, return the stored value\n   */},{key:\"value\",get:function get(){var _classPrivateFieldGet13,_classPrivateFieldGet14;return(_classPrivateFieldGet13=(_classPrivateFieldGet14=_classPrivateFieldGet(_el,this))===null||_classPrivateFieldGet14===void 0?void 0:_classPrivateFieldGet14.value)!==null&&_classPrivateFieldGet13!==void 0?_classPrivateFieldGet13:_classPrivateFieldGet(_value,this);}/**\n   * Set the value\n   * If the element is not yet created, store the value and apply it when the element is created\n   */,set:function set(val){if(_classPrivateFieldGet(_el,this))_classPrivateFieldGet(_el,this).value=val;else _classPrivateFieldSet(_value,this,val);}/**\n   * Get the class list\n   * If the element is not yet created, return a proxy object that will be applied when the element is created\n   */},{key:\"classList\",get:function get(){var _classPrivateFieldGet15,_classPrivateFieldGet16;return(_classPrivateFieldGet15=(_classPrivateFieldGet16=_classPrivateFieldGet(_el,this))===null||_classPrivateFieldGet16===void 0?void 0:_classPrivateFieldGet16.classList)!==null&&_classPrivateFieldGet15!==void 0?_classPrivateFieldGet15:_classPrivateFieldGet(_classList,this);}/**\n   * Get the id\n   * If the element is not yet created, return the stored value\n   */},{key:\"id\",get:function get(){var _classPrivateFieldGet17,_classPrivateFieldGet18;return(_classPrivateFieldGet17=(_classPrivateFieldGet18=_classPrivateFieldGet(_el,this))===null||_classPrivateFieldGet18===void 0?void 0:_classPrivateFieldGet18.id)!==null&&_classPrivateFieldGet17!==void 0?_classPrivateFieldGet17:_classPrivateFieldGet(_id,this);}/**\n   * Set the id\n   * If the element is not yet created, store the value and apply it when the element is created\n   */,set:function set(id){if(_classPrivateFieldGet(_el,this))_classPrivateFieldGet(_el,this).id=id;else _classPrivateFieldSet(_id,this,id);}/**\n   * Get the class name\n   * If the element is not yet created, return the stored value\n   */},{key:\"className\",get:function get(){var _classPrivateFieldGet19,_classPrivateFieldGet20;return(_classPrivateFieldGet19=(_classPrivateFieldGet20=_classPrivateFieldGet(_el,this))===null||_classPrivateFieldGet20===void 0?void 0:_classPrivateFieldGet20.className)!==null&&_classPrivateFieldGet19!==void 0?_classPrivateFieldGet19:_classPrivateFieldGet(_className,this);}/**\n   * Set the class name\n   * If the element is not yet created, store the value and apply it when the element is created\n   */,set:function set(className){if(_classPrivateFieldGet(_el,this))_classPrivateFieldGet(_el,this).className=className;else _classPrivateFieldSet(_className,this,className);}/**\n   * Get the style object\n   * If the element is not yet created, return a proxy object that will be applied when the element is created\n   */},{key:\"style\",get:function get(){var _classPrivateFieldGet21,_classPrivateFieldGet22;return(_classPrivateFieldGet21=(_classPrivateFieldGet22=_classPrivateFieldGet(_el,this))===null||_classPrivateFieldGet22===void 0?void 0:_classPrivateFieldGet22.style)!==null&&_classPrivateFieldGet21!==void 0?_classPrivateFieldGet21:_classPrivateFieldGet(_style,this);}/**\n   * Get the dataset object\n   * If the element is not yet created, return a proxy object that will be applied when the element is created\n   */},{key:\"dataset\",get:function get(){var _classPrivateFieldGet23,_classPrivateFieldGet24;return(_classPrivateFieldGet23=(_classPrivateFieldGet24=_classPrivateFieldGet(_el,this))===null||_classPrivateFieldGet24===void 0?void 0:_classPrivateFieldGet24.dataset)!==null&&_classPrivateFieldGet23!==void 0?_classPrivateFieldGet23:_classPrivateFieldGet(_dataset,this);}/**\n   * Remove the element from the DOM\n   */},{key:\"remove\",value:function remove(){_classPrivateFieldGet(_el,this).remove();}}]);}();function _emit(event){var _classPrivateFieldGet25,_this3=this;for(var _len=arguments.length,args=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];}(_classPrivateFieldGet25=_classPrivateFieldGet(_on,this)[event])===null||_classPrivateFieldGet25===void 0||_classPrivateFieldGet25.forEach(function(c){return c.call.apply(c,[_this3].concat(args));});}var _list=/*#__PURE__*/new WeakMap();var ClassList=/*#__PURE__*/function(){function ClassList(){(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this,ClassList);_classPrivateFieldInitSpec(this,_list,[]);}return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(ClassList,[{key:\"length\",get:function get(){return _classPrivateFieldGet(_list,this).length;},set:function set(length){_classPrivateFieldGet(_list,this).length=length;}},{key:\"add\",value:function add(){var _classPrivateFieldGet26;(_classPrivateFieldGet26=_classPrivateFieldGet(_list,this)).push.apply(_classPrivateFieldGet26,arguments);}},{key:\"remove\",value:function remove(){for(var _len2=arguments.length,classes=new Array(_len2),_key2=0;_key2<_len2;_key2++){classes[_key2]=arguments[_key2];}_classPrivateFieldSet(_list,this,_classPrivateFieldGet(_list,this).filter(function(c){return!classes.includes(c);}));}},{key:\"contains\",value:function contains(className){return _classPrivateFieldGet(_list,this).includes(className);}},{key:\"toggle\",value:function toggle(className){if(this.contains(className)){this.remove(className);}else{this.add(className);}}},{key:\"replace\",value:function replace(oldClass,newClass){this.remove(oldClass);this.add(newClass);}},{key:\"entries\",value:function entries(){return _classPrivateFieldGet(_list,this).entries();}},{key:\"forEach\",value:function forEach(callback){return _classPrivateFieldGet(_list,this).forEach(callback);}},{key:\"keys\",value:function keys(){return _classPrivateFieldGet(_list,this).keys();}},{key:\"values\",value:function values(){return _classPrivateFieldGet(_list,this).values();}}]);}();var CSSStyle=/*#__PURE__*/function(){function CSSStyle(){(0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this,CSSStyle);}return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(CSSStyle,[{key:\"item\",value:function item(index){Object.keys(this)[index];}},{key:\"removeProperty\",value:function removeProperty(index){var key=Object.keys(this)[index];delete this[key];}},{key:\"setProperty\",value:function setProperty(name,value){this[name]=value;}}]);}();\n\n//# sourceURL=webpack://html-tag-js/./src/ref.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ref.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});