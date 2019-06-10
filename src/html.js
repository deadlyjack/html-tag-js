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
 * @typedef {Object} elementCustromProps
 * @property {function(string|string[]|null):void} assignEvents remove event listeners from the element
 * @property {function(string|string[]|null):void} removeRemovedEvents assigns the removed event listeners to the element
 * @property {function():void} remove Removes the element from DOM.
 * @property {function(parentElement|null):void} restore Restores the element to the DOM.
 */

/**
 * 
 * @param {tagNames|HTMLElement} tagName A string that specifies the type of element to be created. The nodeName of the created element is initialized with the value of tagName. Don't use qualified names (like "html:a") with this method. When called on an HTML document, createElement() converts tagName to lower case before creating the element. In Firefox, Opera, and Chrome, createElement(null) works like createElement("null").
 * @param {elementProperties} options HTMLElment properties and attributes
 * @returns {HTMLElement & elementCustromProps}
 */

export default function tag(tagName, options = {}) {
  const instanceofHtmlElement = tagName instanceof HTMLElement;
  if (!instanceofHtmlElement && typeof tagName !== 'string') throw new Error(`{tag} is invalid value of tag`);
  const el = instanceofHtmlElement ? tagName : document.createElement(tagName);
  el.oldEventListener = el.addEventListener.bind(el);

  el.addEventListener = addEventListener.bind(el);
  el.assignRemovedEvents = assignRemovedEvents.bind(el);
  el.append = append.bind(el);
  el.get = get.bind(el);
  el.getAll = getAll.bind(el);
  el.removeEvents = removeEvents.bind(el);
  el.remove = remove.bind(el);
  el.restore = restore.bind(el);

  for (let prop in options) {

    if (options[prop] === undefined) {
      continue;
    }

    if (prop === 'child') {
      let el = options[prop];
      if (el instanceof Node) el.append(el);
    } else if (prop == 'children' && Array.isArray(options[prop])) {
      const els = options[prop];
      for (let htmlel of els) {
        el.append(htmlel);
      }
    } else if (prop == 'attr') {
      for (let p in options[prop]) {
        el.setAttribute(p, options[prop][p]);
      }
    } else if (options[prop].constructor.name === 'Object') {
      for (let p in options[prop]) {
        el[prop][p] = options[prop][p];
      }
    } else el[prop] = options[prop];
  }

  return el;

  /**
   * 
   * @param {String|String[]|null} eventType 
   */
  function removeEvents(eventType) {
    const eventFunctions = this.eventFunctions;
    if (!eventFunctions) return;
    if (eventType) {
      for (let event of eventFunctions) {
        if (Array.isArray(eventType) && eventType.indexOf(event.type)) {
          this.removeEventListener(event.type, event.listener);
        } else if (typeof eventType === 'string' && event.type === eventType) {
          this.removeEventListener(event.type, event.listener);
        }
      }

      return;
    }
    for (let event of eventFunctions) {
      el.removeEventListener(event.type, event.listener);
    }
  }

  /**
   * 
   * @param {String|String[]|null} eventType
   */
  function assignRemovedEvents(eventType) {
    const eventFunctions = this.eventFunctions;
    if (!eventFunctions) return;
    if (eventType) {
      for (let event of eventFunctions) {
        if (Array.isArray(eventType) && eventType.indexOf(event.type)) {
          this.oldEventListener(event.type, event.listener, event.options);
        } else if (typeof eventType === 'string' && event.type === eventType) {
          this.oldEventListener(event.type, event.listener, event.options);
        }
      }

      return;
    }
    for (let event of eventFunctions) {
      this.oldEventListener(event.type, event.listener);
    }
  }

  function addEventListener(type, listener, options) {
    if (!this.eventFunctions) this.eventFunctions = [];
    this.eventFunctions[this.eventFunctions.length] = {
      type,
      listener,
      options
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
   * @param {HTMLElement} parentElement
   */
  function restore(parentElement) {
    parentElement = parentElement || this.oldParentelement || null;
    if (parentElement && !this.parentElement) {
      this.assignEvents();
      parentElement.appendChild(this);
    }
  }

  /**
   * @param {Node} ...nodes
   */

  function append(...nodes) {
    nodes.map(node => {
      if (node instanceof Node) {
        this.appendChild(node);
        if (node instanceof HTMLElement && node.id)
          el[node.id] = node;
      }
    })
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