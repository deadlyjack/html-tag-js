!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tag=t():e.tag=t()}(this,(function(){return function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof t&&(t={innerHTML:t}),function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(Array.isArray(n)&&(o=n,n={}),"function"==typeof e)return e(n,o);if(e instanceof Node)t=e;else{if("string"!=typeof e)throw new Error("Invalid tag, ",r(e));t=document.createElement(e)}var i=n.ref;return delete n.ref,Object.keys(n).forEach((function(e){var r=n[e];if(void 0!==r)switch(e){case"child":a(t,[r]);break;case"children":if(!Array.isArray(r))throw new Error("children must be an array of Nodes");a(t,r.flat());break;case"attr":Object.keys(r).forEach((function(e){var n=r[e];void 0!==n&&t.setAttribute(e,n)}));break;case"style":case"dataset":Object.keys(r).forEach((function(n){var o=r[n];void 0!==o&&(t[e][n]=o)}));break;case"on":Object.keys(r).forEach((function(e){var n=r[e];void 0!==n&&n.forEach((function(n){t.addEventListener(e,n)}))}));break;default:t[e]=r}})),i&&i.instanceOfRef&&(i.el=t),t}(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[])}function a(e,t){var n,r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,f=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){f=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(f)throw a}}}}(t);try{for(r.s();!(n=r.n()).done;){var i=n.value;Array.isArray(i)?a(e,i.flat()):(i=u(i))&&e.appendChild(i)}}catch(e){r.e(e)}finally{r.f()}}function u(e){if("function"==typeof e)return u(e());if(e instanceof Promise){var t=document.createTextNode("");e.then((function(e){if(Array.isArray(e))return(e=e.flat()).forEach((function(e){(e=u(e))&&t.before(e)})),void t.remove();(e=u(e))?t.replaceWith(e):t.remove()})),e=t}else if(e instanceof Text)"clone"in e&&(e=e.clone());else if(!(e instanceof Node)){var n=r(e);if(!["number","bigint","string"].includes(n))return null;if("string"===n&&!e)return null;e=i.text("".concat(e))}return e}return e.d(t,{default:function(){return i}}),window&&!window.tag&&(window.tag=i),Object.defineProperties(i,{get:{value:function(e){return document.querySelector(e)}},getAll:{value:function(e){return function(e){if(Array.isArray(e))return n(e)}(t=document.querySelectorAll(e))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();var t}},text:{value:function(e){return document.createTextNode(e)}},use:{value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=document.createTextNode(e);return t.clones=[t],t.shouldClone=!1,t._value=e,Object.defineProperty(t,"value",{set:function(e){t._value=e,t.clones.forEach((function(t){t.textContent=e})),"function"==typeof t.onChange&&t.onChange.call(t,e)},get:function(){return t._value}}),Object.defineProperty(t,"toString",{value:function(){return t._value}}),Object.defineProperty(t,"clone",{value:function(){if(!t.shouldClone)return t.shouldClone=!0,t;var e=t.cloneNode();return t.clones.push(e),e}}),t}}}),t.default}()}));