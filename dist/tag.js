!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.html=t():e.html=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e instanceof HTMLElement;if(!n&&"string"!=typeof e)throw new Error("{tag} is invalid value of tag");var r=n?e:document.createElement(e);for(var i in r.oldEventListener=r.addEventListener.bind(r),r.addEventListener=function(e,t,n){this.eventFunctions||(this.eventFunctions=[]);this.eventFunctions[this.eventFunctions.length]={type:e,listener:t,options:n},this.oldEventListener(e,t,n)}.bind(r),r.assignRemovedEvents=function(e){var t=this.eventFunctions;if(!t)return;if(e){var n=!0,r=!1,i=void 0;try{for(var o,l=t[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var a=o.value;Array.isArray(e)&&e.indexOf(a.type)?this.oldEventListener(a.type,a.listener,a.options):"string"==typeof e&&a.type===e&&this.oldEventListener(a.type,a.listener,a.options)}}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return}var u=!0,f=!1,s=void 0;try{for(var c,d=t[Symbol.iterator]();!(u=(c=d.next()).done);u=!0){var v=c.value;this.oldEventListener(v.type,v.listener)}}catch(e){f=!0,s=e}finally{try{u||null==d.return||d.return()}finally{if(f)throw s}}}.bind(r),r.append=function(){for(var e=this,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];return n.map(function(t){t instanceof Node&&(e.appendChild(t),t instanceof HTMLElement&&t.id&&(r[t.id]=t))}),this}.bind(r),r.get=function(e){return this.querySelector(e)}.bind(r),r.getAll=function(e){return this.querySelectorAll(e)}.bind(r),r.removeEvents=function(e){var t=this.eventFunctions;if(!t)return;if(e){var n=!0,i=!1,o=void 0;try{for(var l,a=t[Symbol.iterator]();!(n=(l=a.next()).done);n=!0){var u=l.value;Array.isArray(e)&&e.indexOf(u.type)?this.removeEventListener(u.type,u.listener):"string"==typeof e&&u.type===e&&this.removeEventListener(u.type,u.listener)}}catch(e){i=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return}var f=!0,s=!1,c=void 0;try{for(var d,v=t[Symbol.iterator]();!(f=(d=v.next()).done);f=!0){var y=d.value;r.removeEventListener(y.type,y.listener)}}catch(e){s=!0,c=e}finally{try{f||null==v.return||v.return()}finally{if(s)throw c}}}.bind(r),r.remove=function(){this.parentElement&&(this.removeEvents(),this.oldParentelement=this.parentElement,this.parentElement.removeChild(this))}.bind(r),r.restore=function(e){(e=e||this.oldParentelement||null)&&!this.parentElement&&(this.assignRemovedEvents(),e.appendChild(this))}.bind(r),t)if(void 0!==t[i])if("child"===i){var o=t[i];r instanceof Node&&r.append(o)}else if("children"==i&&Array.isArray(t[i])){var l=t[i],a=!0,u=!1,f=void 0;try{for(var s,c=l[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var d=s.value;r.append(d)}}catch(e){u=!0,f=e}finally{try{a||null==c.return||c.return()}finally{if(u)throw f}}}else if("attr"==i)for(var v in t[i])r.setAttribute(v,t[i][v]);else if("Object"===t[i].constructor.name)for(var y in t[i])r[i][y]=t[i][y];else r[i]=t[i];return r}n.r(t),i.get=function(e){return i(document.querySelector(e))},i.getAll=function(e){var t=document.querySelectorAll(e);r(t);return t.map(function(e){i(e)}),t},t.default=i}]).default});