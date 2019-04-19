/**
 * @typedef {Object} elementExtended
 * @property {function(eventList):void} removeEvents removes all events added to element
 * @property {function():void} assignEvents reassign all events that are removed from element
 * @property {function():void} bubble add bubble effect on click
 */

/**
 * @typedef {Object} createOptions
 * @property {HTMLElement[] | HTMLAllCollection} children
 * @property {Object} attr calls HTMLElement.setAttribute(String: name, String: value);
 */

/**
 * @typedef {Object} inputNumber
 * @property {Number|String} min Returns / Sets the min value of input.
 * @property {Number|String} max Returns / Sets the max value of input.
 * @property {String|Number} step Returns / Sets the increment and decrement step of input.
 */

/**
 * @typedef {Object} inputCheckbox
 * @property {Boolean} checked Returns / Sets the current state of the element when type is checkbox or radio.
 * @property {Boolean} defaultChecked Returns / Sets the default state of a radio button or checkbox as originally 
 * specified in HTML that created this object.
 * @property {Boolean} indeterminate Returns whether the checkbox or radio button is in indeterminate state. For checkboxes, 
 * the effect is that the appearance of the checkbox is obscured/greyed in some way as to indicate its state is indeterminate 
 * (not checked but not unchecked). Does not affect the value of the checked attribute, and clicking the checkbox will set the value to false.
 */

/**
 * @typedef {Object} inputImage
 * @property {String} alt Returns / Sets the element's alt attribute, containing alternative text to use when type is image.
 * @property {String} height  Returns / Sets the element's height attribute, which defines the height of the image displayed for the button, 
 * if the value of type is image.
 * @property {String} src Returns / Sets the element's src attribute, which specifies a URI for the location of an 
 * image to display on the graphical submit button, if the value of type is image; otherwise it is ignored.
 * @property {String} width Returns / Sets the document's width attribute, which defines the width of the image displayed for the button, 
 * if the value of type is image.
 */

/**
 * @typedef {Object} inputFile
 * @property {String} accept Returns / Sets the element's accept attribute, containing comma-separated list of file types accepted by the 
 * server when type is file.
 * @property {FileList} files Returns/accepts a FileList object, which contains a list of File objects representing the files selected for upload.
 */

/**
 * Create new HTML tag
 * @param {String} tag HTMl element tag name 
 * @param {HTMLElement & createOptions} props
 * @returns {HTMLElement & elementExtended}
 */
function create(tag = 'div', props = {}) {
  let html = this;
  let el = document.createElement(tag);
  let eventFunctions = [];
  let oldEventListener = el.addEventListener.bind(el);

  /**@override addEventListener of page */
  el.addEventListener = addEventListener;

  /**@property */
  el.assignEvents = assignEvents;

  /**@property */
  el.removeEvents = removeEvents;

  /**
   * removes all event from page.
   * @param {String[]|String} events
   * @returns {void}
   */
  function removeEvents(events) {
    if (events) {
      for (let event of eventFunctions) {
        if (Array.isArray(events) && events.indexOf(event.type)) {
          el.removeEventListener(event.type, event.listener);
        } else if (typeof events === 'string' && event.type === events) {
          el.removeEventListener(event.type, event.listener);
        }
      }

      return;
    }
    for (let event of eventFunctions) {
      el.removeEventListener(event.type, event.listener);
    }
  }

  /**
   * assign all event that were removed from page
   * @returns {void}
   */
  function assignEvents() {
    for (let event of eventFunctions) {
      oldEventListener(event.type, event.listener, event.options);
    }
  }

  /**
   * 
   * @param {String} type A case-sensitive string representing the event type to listen for.
   * @param {CallableFunction} listener The object which receives a notification 
   * (an object that implements the Event interface) when an event of the specified type occurs. 
   * This must be an object implementing the EventListener interface, or a JavaScript function. 
   * See The event listener callback for details on the callback itself.
   * @param {Object} [options] An options object that specifies characteristics about the event listener.
   * @param {Boolean} [options.capture] A Boolean indicating that events of this type will be dispatched 
   * to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree.
   * @param {Boolean} [options.once] A Boolean indicating that the listener should be invoked at most 
   * once after being added. If true, the listener would be automatically removed when invoked.
   * @param {Boolean} [options.passive] A Boolean which, if true, indicates that the function specified 
   * by listener will never call preventDefault(). If a passive listener does call preventDefault(), 
   * the user agent will do nothing other than generate a console warning. See Improving scrolling 
   * performance with passive listeners to learn more.
   * @param {Boolean} [options.mozSystemGroup] "experimental" A Boolean indicating that the listener 
   * should be added to the system group. Available only in code running in XBL or in the chrome of the 
   * Firefox browser.
   * @returns {void}
   */
  function addEventListener(type, listener, options) {
    eventFunctions[eventFunctions.length] = {
      type,
      listener,
      options
    };
    oldEventListener(type, listener, options);
  }

  for (let prop in props) {

    if (props[prop] === undefined) {
      return console.error(`invalid value of "${prop}"`);
    }

    if (prop == 'children' && Array.isArray(props[prop])) {
      for (let htmlel of props[prop]) {
        el.appendChild(htmlel);
      }
    } else if (prop == 'attr') {
      for (let p in props[prop]) {
        el.setAttribute(p, props[prop][p]);
      }
    } else if (props[prop].constructor.name === 'Object') {
      for (let p in props[prop]) {
        el[prop][p] = props[prop][p];
      }
    } else el[prop] = props[prop];
  }

  /**
   * @function
   * @param {HTMLElement | HTMLAllCollection | HTMLElement[]} nodes
   */
  el.append = function (nodes) {
    nodes = Array.isArray(nodes) ? nodes : [nodes];
    for (let i = 0; i < nodes.length; ++i) {
      el.appendChild(nodes[i]);
    }
  }

  if (props.children) {
    el.append(props.children);
  }

  el.bubble = function createBubble() {
    bubble(el);
  }

  return el;
}

/**
 * get first mathing element from DOM
 * @param {String} selector CSS selector 
 * @returns {HTMLElement}
 */
function get(selector) {
  return document.querySelector(selector);
}

/**
 * get all matching element from DOM
 * @param {String} selector CSS selector
 * @returns {HTMLElement[]}
 */
function getAll(selector) {
  return document.querySelectorAll(selector);
}

/**
 * 
 * @param {element} el 
 */
function bubble(el) {
  let bubble = create('i', {
    className: 'bubble'
  });

  el.addEventListener('click', bubbles);

  function bubbles(e) {
    let elClient = el.getBoundingClientRect();
    bubble.classList.add('animate');
    el.classList.add('bubbling');
    bubble.style.height = elClient.width + 'px';
    bubble.style.width = elClient.width + 'px';
    bubble.style.top = (e.clientY - elClient.top - elClient.width / 2) + 'px';
    bubble.style.left = (e.clientX - elClient.left - elClient.width / 2) + 'px';

    setTimeout(function assignProps() {
      el.removeEvents();
      el.appendChild(bubble);
    }, 0);


    setTimeout(function removeBubble() {
      bubble.classList.remove('animate');
      el.classList.remove('bubbling');
      el.assignEvents();
      el.removeChild(bubble);
    }, 580);
  }
}

/**
 * 
 * @param {HTMLInputElement} props 
 * @returns {HTMLInputElement}
 */
function input(props = {}) {
  props.type = 'text';
  return create('input', props);
}

/**
 * 
 * @param {HTMLSpanElement} props 
 * @returns {HTMLSpanElement} 
 */
function span(props = {}) {
  return create('span', props);
}

/**
 * 
 * @param {String} text 
 * @param {HTMLButtonElement} [props] 
 * @returns {HTMLButtonElement} 
 */
function button(text = '', props = {}) {
  if (text) {
    props.textContent = text;
  }
  let button = create('span', props);
  button.bubble();

  return button;
}
/**
 * 
 * @param {HTMLDivElement} props 
 * @returns {HTMLDivElement} 
 */
function div(props = {}) {
  return create('div', props);
}
/**
 * 
 * @param {String} src 
 * @param {String} alt 
 * @param {HTMLImageElement} props 
 * @returns {HTMLImageElement} 
 */
function img(src = '', alt = '', props = {}) {
  props.src = src;
  props.alt = alt;
  return create('img', props);
}
/**
 * 
 * @param {String} href 
 * @param {Node} child 
 * @param {HTMLAnchorElement} props 
 * @returns {HTMLAnchorElement} 
 */
function a(href = '', child = null, props = {}) {
  props.href = href;
  if (child) {
    props.children = [child];
  }
  return create('a', props);
}

export {
  a,
  bubble,
  button,
  create,
  div,
  get,
  getAll,
  img,
  input,
  span
}