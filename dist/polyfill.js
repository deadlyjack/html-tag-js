!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.tag=t():e.tag=t()}(this,(function(){return e={},Element.prototype,CharacterData.prototype,DocumentType.prototype,"flat"in Array.prototype||Object.defineProperty(Array.prototype,"flat",{value(e=1/0){return e>0?this.reduce(((e,t)=>e.concat(t.flat())),[]):this.slice()}}),"isConnected"in Node.prototype||Object.defineProperty(Node.prototype,"isConnected",{get(){return!(this.ownerDocument&&this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}}),"get"in HTMLElement.prototype||Object.defineProperty(HTMLElement.prototype,"get",{value(e){return this.querySelector(e)}}),"getAll"in HTMLElement.prototype||Object.defineProperty(HTMLElement.prototype,"getAll",{value(e){return this.querySelectorAll(e)}}),"content"in HTMLElement.prototype||Object.defineProperty(HTMLElement.prototype,"content",{set:function(e){this.innerHTML="",Array.isArray(e)?this.append(...e):this.append(e)},get:function(){const e=[...this.children];return 0===e.length?null:1===e.length?e[0]:e}}),[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach((function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}}),e.hasOwnProperty("append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),t=document.createDocumentFragment();e.forEach((function(e){var o=e instanceof Node;t.appendChild(o?e:document.createTextNode(String(e)))})),this.appendChild(t)}})})),e.default;var e}));