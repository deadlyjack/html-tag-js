!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tag=t():e.tag=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e instanceof Element;if(!r&&"string"!=typeof e)throw new Error("".concat(e," is invalid value of tag"));var o=r?e:document.createElement(e);for(var i in t)if(void 0!==t[i])if("child"===i){var u=t[i];o instanceof Node&&o.append(u)}else if("children"==i&&Array.isArray(t[i]))o.append.apply(o,n(t[i]));else if("attr"==i)for(var a in t[i])o.setAttribute(a,t[i][a]);else if("Object"===t[i].constructor.name)for(var f in t[i])o[i][f]=t[i][f];else o[i]=t[i];return o}r.r(t),r.d(t,"tag",(function(){return i})),i.get=function(e){var t=document.querySelector(e);return t?i(t):null},i.getAll=function(e){var t=n(document.querySelectorAll(e));return t.map((function(e){i(e)})),t},i.parse=function(e){var t=i("div");return t.innerHTML=e,1===t.childElementCount?i(t.firstElementChild):n(t.children)},i.template=function(e,t){if(t)for(var r in t)/^[a-z_][a-z0-9_\-]*$/.test(r)&&(e=e.replace(new RegExp("{{".concat(r,"}}"),"g"),t[r]));return e=e.replace(/{{[a-z_][a-z0-9_\-]*}}/g,"")}}]).tag}));