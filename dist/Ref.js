!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Ref=e():t.Ref=e()}(this,(function(){return function(){"use strict";var t={284:function(t,e,n){function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}n.d(e,{A:function(){return i}})},506:function(t,e,n){function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,{A:function(){return r}})},994:function(t,e,n){n.d(e,{j:function(){return a}});var i=n(506),r=n(284);function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function u(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof e&&(e={innerHTML:e}),function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(Array.isArray(n)&&(i=n,n={}),"function"==typeof t)return t(n,i);if(t instanceof Node)e=t;else{if("string"!=typeof t)throw new Error("Invalid tag, ",(0,r.A)(t));e=document.createElement(t)}!n.children&&Array.isArray(i)&&i.length&&(n.children=i);var o=n.ref;return delete n.ref,Object.keys(n).forEach((function(t){var i=n[t];if(void 0!==i)switch(t){case"child":a(e,[i]);break;case"children":if(!Array.isArray(i))throw new Error("children must be an array of Nodes");a(e,i.flat());break;case"attr":Object.keys(i).forEach((function(t){var n=i[t];void 0!==n&&e.setAttribute(t,n)}));break;case"style":case"dataset":Object.keys(i).forEach((function(n){var r=i[n];void 0!==r&&(e[t][n]=r)}));break;case"on":Object.keys(i).forEach((function(t){var n=i[t];void 0!==n&&n.forEach((function(n){e.addEventListener(t,n)}))}));break;default:e[t]=i}})),o&&o.instanceOfRef&&(o.el=e),e}(t,e,arguments.length>2&&void 0!==arguments[2]?arguments[2]:[])}function a(t,e){var n,i=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return o(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,u=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw u}}}}(e);try{for(i.s();!(n=i.n()).done;){var r=n.value;Array.isArray(r)?a(t,r.flat()):(r=s(r))&&t.appendChild(r)}}catch(t){i.e(t)}finally{i.f()}}function s(t){if("function"==typeof t)return s(t());if(t instanceof Promise){var e=document.createTextNode("");t.then((function(t){if(Array.isArray(t))return(t=t.flat()).forEach((function(t){(t=s(t))&&e.before(t)})),void e.remove();(t=s(t))?e.replaceWith(t):e.remove()})),t=e}else if(t instanceof Text)"clone"in t&&(t=t.clone());else if(!(t instanceof Node)){var n=(0,r.A)(t);if(!["number","bigint","string"].includes(n))return null;if("string"===n&&!t)return null;t=u.text("".concat(t))}return t}window&&!window.tag&&(window.tag=u),Object.defineProperties(u,{get:{value:function(t){return document.querySelector(t)}},getAll:{value:function(t){var e=document.querySelectorAll(t);return(0,i.A)(e)}},text:{value:function(t){return document.createTextNode(t)}}})}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var i={};n.d(i,{default:function(){return H}});var r=n(506);function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=n(284);function a(t){var e=function(t){if("object"!=(0,u.A)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=(0,u.A)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==(0,u.A)(e)?e:e+""}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,a(i.key),i)}}function l(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var f=n(994);function c(t,e,n){h(t,e),e.set(t,n)}function h(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function v(t,e){return t.get(y(t,e))}function d(t,e,n){return t.set(y(t,e),n),n}function y(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}var p=new WeakMap,b=new WeakMap,m=new WeakMap,g=new WeakMap,k=new WeakMap,w=new WeakMap,A=new WeakMap,j=new WeakMap,E=new WeakMap,M=new WeakMap,x=new WeakMap,O=new WeakMap,S=new WeakMap,T=new WeakMap,W=new WeakSet,P=function(){return l((function t(e){var n,i,r,u,s=this;if(o(this,t),h(this,n=W),n.add(this),i=this,u=!0,(r=a(r="instanceOfRef"))in i?Object.defineProperty(i,r,{value:u,enumerable:!0,configurable:!0,writable:!0}):i[r]=u,c(this,p,void 0),c(this,b,void 0),c(this,m,void 0),c(this,g,void 0),c(this,k,void 0),c(this,w,void 0),c(this,A,void 0),c(this,j,new N),c(this,E,new I),c(this,M,{}),c(this,x,[]),c(this,O,{}),c(this,S,{ref:[function(t){"function"==typeof s.onref&&s.onref.call(s,t)}]}),c(this,T,void 0),e){if("function"!=typeof e)throw new Error("onref must be a function");d(T,this,e)}}),[{key:"append",value:function(){var t,e;v(p,this)?(t=v(p,this)).append.apply(t,arguments):(e=v(x,this)).push.apply(e,arguments)}},{key:"attr",value:function(t,e){return t||e?v(p,this)?(e&&v(p,this).setAttribute(t,e),v(p,this).getAttribute(t)):e?void(v(O,this)[t]=e):v(O,this)[t]:null}},{key:"get",value:function(t){var e;return null===(e=v(p,this))||void 0===e?void 0:e.get(t)}},{key:"getAll",value:function(t){var e;return null===(e=v(p,this))||void 0===e?void 0:e.getAll(t)}},{key:"on",value:function(t,e){var n;null===(n=v(S,this)[t])||void 0===n||n.push(e),"ref"===t&&v(p,this)&&y(W,this,L).call(this,t,v(p,this))}},{key:"off",value:function(t,e){v(S,this)[t]&&(v(S,this)[t]=v(S,this)[t].filter((function(t){return t!==e})))}},{key:"onref",get:function(){return v(T,this)},set:function(t){d(T,this,t),v(p,this)&&y(W,this,L).call(this,"ref",v(p,this))}},{key:"el",get:function(){return v(p,this)},set:function(t){var e=this;d(p,this,t),v(b,this)&&(this.value=v(b,this),d(b,this,null)),v(m,this)&&(this.innerHTML=v(m,this),d(m,this,null)),v(g,this)&&(this.textContent=v(g,this),d(g,this,null)),v(k,this)&&(this.innerText=v(k,this),d(k,this,null)),v(w,this)&&(this.id=v(w,this),d(w,this,null)),v(A,this)&&(this.className=v(A,this),d(A,this,null)),v(j,this).length&&(v(j,this).forEach((function(t){return e.classList.add(t)})),v(j,this).length=0),v(x,this).length&&(this.append.apply(this,(0,r.A)(v(x,this))),v(x,this).length=0);var n=Object.keys(v(O,this));n.length&&(n.forEach((function(t){return e.attr(t,v(O,e)[t])})),d(O,this,{}));var i=Object.keys(v(E,this));i.length&&(i.forEach((function(t){return e.style[t]=v(E,e)[t]})),d(E,this,{}));var o=Object.keys(v(M,this));o.length&&(o.forEach((function(t){return e.dataset[t]=v(M,e)[t]})),d(M,this,{})),y(W,this,L).call(this,"ref",t)}},{key:"textContent",get:function(){var t,e;return null!==(t=null===(e=v(p,this))||void 0===e?void 0:e.textContent)&&void 0!==t?t:v(g,this)},set:function(t){v(p,this)?v(p,this).textContent=t:d(g,this,t)}},{key:"innerText",get:function(){var t,e;return null!==(t=null===(e=v(p,this))||void 0===e?void 0:e.innerText)&&void 0!==t?t:v(k,this)},set:function(t){v(p,this)?v(p,this).innerText=t:d(k,this,t)}},{key:"innerHTML",get:function(){var t,e;return null!==(t=null===(e=v(p,this))||void 0===e?void 0:e.innerHTML)&&void 0!==t?t:v(m,this)},set:function(t){v(p,this)?v(p,this).innerHTML=t:d(m,this,t)}},{key:"value",get:function(){var t,e;return null!==(t=null===(e=v(p,this))||void 0===e?void 0:e.value)&&void 0!==t?t:v(b,this)},set:function(t){v(p,this)?v(p,this).value=t:d(b,this,t)}},{key:"classList",get:function(){var t,e;return null!==(t=null===(e=v(p,this))||void 0===e?void 0:e.classList)&&void 0!==t?t:v(j,this)}},{key:"id",get:function(){var t,e;return null!==(t=null===(e=v(p,this))||void 0===e?void 0:e.id)&&void 0!==t?t:v(w,this)},set:function(t){v(p,this)?v(p,this).id=t:d(w,this,t)}},{key:"className",get:function(){var t,e;return null!==(t=null===(e=v(p,this))||void 0===e?void 0:e.className)&&void 0!==t?t:v(A,this)},set:function(t){v(p,this)?v(p,this).className=t:d(A,this,t)}},{key:"style",get:function(){var t,e;return null!==(t=null===(e=v(p,this))||void 0===e?void 0:e.style)&&void 0!==t?t:v(E,this)}},{key:"dataset",get:function(){var t,e;return null!==(t=null===(e=v(p,this))||void 0===e?void 0:e.dataset)&&void 0!==t?t:v(M,this)}},{key:"content",get:function(){if(!v(p,this))throw new Error("Element is not yet created");var t=(0,r.A)(this.el.children);return 0===t.length?null:1===t.length?t[0]:t},set:function(t){if(!v(p,this))throw new Error("Element is not yet created");this.innerHTML="",Array.isArray(t)?(0,f.j)(v(p,this),t):v(p,this).append(t)}},{key:"remove",value:function(){v(p,this).remove()}}])}();function L(t){for(var e,n=this,i=arguments.length,r=new Array(i>1?i-1:0),o=1;o<i;o++)r[o-1]=arguments[o];null===(e=v(S,this)[t])||void 0===e||e.forEach((function(t){return t.call.apply(t,[n].concat(r))}))}var C=new WeakMap,N=function(){return l((function t(){o(this,t),c(this,C,[])}),[{key:"length",get:function(){return v(C,this).length},set:function(t){v(C,this).length=t}},{key:"add",value:function(){var t;(t=v(C,this)).push.apply(t,arguments)}},{key:"remove",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];d(C,this,v(C,this).filter((function(t){return!e.includes(t)})))}},{key:"contains",value:function(t){return v(C,this).includes(t)}},{key:"toggle",value:function(t){this.contains(t)?this.remove(t):this.add(t)}},{key:"replace",value:function(t,e){this.remove(t),this.add(e)}},{key:"entries",value:function(){return v(C,this).entries()}},{key:"forEach",value:function(t){return v(C,this).forEach(t)}},{key:"keys",value:function(){return v(C,this).keys()}},{key:"values",value:function(){return v(C,this).values()}}])}(),I=function(){return l((function t(){o(this,t)}),[{key:"item",value:function(t){Object.keys(this)[t]}},{key:"removeProperty",value:function(t){delete this[Object.keys(this)[t]]}},{key:"setProperty",value:function(t,e){this[t]=e}}])}();function H(t){return new P(t)}return H.isRef=function(t){return t instanceof P},i.default}()}));