/**
 * 
 * @param {tagNames|HTMLElement} tagName A string that specifies the type of element to be created. The nodeName of the created element is initialized with the value of tagName. Don't use qualified names (like "html:a") with this method. When called on an HTML document, createElement() converts tagName to lower case before creating the element. In Firefox, Opera, and Chrome, createElement(null) works like createElement("null").
 * @param {elementProperties} options HTMLElment properties and attributes
 * @returns {HTMLElement & elementCustomProps}
 */

function tag(tagName, options = {}) {
  const iofHTML = tagName instanceof HTMLElement;

  if (!iofHTML && typeof tagName !== 'string')
    throw new Error(`{tag} is invalid value of tag`);

  let el = iofHTML ? tagName : document.createElement(tagName);
  el.oldEventListener = el.addEventListener.bind(el);

  el.addEventListener = addEventListener.bind(el);
  el.append = append.bind(el);
  el.get = get.bind(el);
  el.getAll = getAll.bind(el);
  el.removeEvents = removeEvents.bind(el);
  el.destroy = destroy.bind(el);

  for (let prop in options) {

    if (options[prop] === undefined) {
      continue;
    }

    if (prop === 'child') {
      let child = options[prop];
      if (el instanceof Node) el.append(child);
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

  function addEventListener(type, listener, options) {
    if (!this.eventFunctions) this.eventFunctions = [];
    this.eventFunctions[this.eventFunctions.length] = {
      type,
      listener,
      options
    };
    this.oldEventListener(type, listener, options);
  }

  function destroy() {
    if (this.parentElement) {
      this.removeEvents();
      this.parentElement.removeChild(this);
      this.eventFunctions = null;
      el = null;
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
  return tag(document.querySelector(selector));
};

tag.getAll = function (selector) {
  const all = document.querySelectorAll(selector);
  const allAr = [...all];

  allAr.map(el => {
    tag(el);
  });

  return allAr;
};

export default tag;