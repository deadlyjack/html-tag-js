import './css/main.css';

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

  el.bubble = function bubble() {
    html.bubble(el);
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


/**
 * @callback onchange
 * @param {Number} value 
 */

/**
 * 
 * @typedef slider
 * @property {onchange} onchange 
 * @property {function():Number} value 
 * @property {function(Number):void} setvalue 
 */

/**
 * 
 * @param {Object} params 
 * @param {Number} params.min 
 * @param {Number} params.max 
 * @param {Number} [params.step] 
 * @param {Number} [params.value ]
 * @param {onchange} [params.onchange] 
 * @param {string} [params.size] 
 * @returns {slider & HTMLElement}
 */
function rangeSlider(params = {}) {


  let mainWrapper = div({
    role: 'input',
    tabIndex: 0,
    className: 'rangeSlider-wrapper',
    attr: {
      'data-value': 0
    }
  });
  let btn = span({
    className: 'rangeSlider-button'
  });

  let min = params.min || 0;
  let max = params.max || 100;
  let step = params.step || 1;

  mainWrapper.value = params.value || min;

  if (params.size) {
    mainWrapper.classList.add(params.size);
  }

  function calculateValue(x, res) {
    let diff = max - min;
    let width = mainWrapper.offsetWidth;
    let value = x / width * diff;
    value += min;

    let remainder = value % step;
    if (remainder >= step / 2) {
      value += (step - remainder);
    } else {
      value -= remainder;
    }

    if (mainWrapper.onchange) {
      mainWrapper.onchange(value);
    }
    mainWrapper.value = value;
    btn.setAttribute('data-value', (value + '').substr(0, 4));

    x = (value - min) / diff;
    x *= width;

    // btn.style.left = x + 'px';
    if (res) console.log(res);
    btn.style.transform = `translate3d(${x}px, 0, 0)`;
  }

  mainWrapper.addEventListener('mousedown', onmousedown);
  mainWrapper.addEventListener('focus', makeActive);
  mainWrapper.addEventListener('touchstart', onmousedown);

  function makeActive() {
    mainWrapper.classList.add('active');
    mainWrapper.onblur = removeActive;
  }

  function removeActive() {
    mainWrapper.classList.remove('active');
    mainWrapper.onblur = null;
  }

  /**
   * 
   * @param {MouseEvent} e 
   */
  function onmousedown(e) {
    mainWrapper.focus();
    document.onmousemove = document.ontouchmove = onmousemove;
    document.onmouseup = document.ontouchend = onmouseup;

    onmousemove(e);
  }

  /**
   * 
   * @param {MouseEvent | TouchEvent} e 
   */
  function onmousemove(e) {
    let x = e.clientX || e.touches[0].clientX;
    let width = mainWrapper.offsetWidth;
    let wrapperX = mainWrapper.getBoundingClientRect().x;

    x -= wrapperX;

    if (x <= width && x >= 0) {
      calculateValue(x);
    }
  }

  function onmouseup() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  mainWrapper.appendChild(btn);

  return mainWrapper;
}
/**
 * 
 * @param {Object} opts 
 * @param {String} opts.title 
 * @param {element} opts.element 
 * @param {String} opts.direction 
 * @param {Boolean} opts.watchChange
 */
function toolTip(opts) {
  if (!opts.element) return console.error('element is undefined');
  if (!opts.direction) opts.direction = 'left';
  let title = opts.title || opts.element.getAttribute('title') || opts.element.getAttribute('data-title') || '';
  let toolTip = create('div', {
    className: 'toolTip'
  });
  let toolTipPointer = create('span', {
    className: 'toolTip-pointer'
  });
  let wrapper = create('div', {
    className: 'toolTip-wrapper',
    attr: {
      "data-direction": opts.direction
    }
  });
  let text = create('span', {
    textContent: title,
    className: 'text'
  });
  /**
   * @type {MutationObserver}
   */
  let observer;

  toolTip.appendChild(toolTipPointer);
  toolTip.appendChild(text);
  wrapper.appendChild(toolTip);

  opts.element.onmouseenter = mouseEnter;
  opts.element.onmouseleave = mouseLeave;


  function mouseEnter() {

    let elClient = opts.element.getBoundingClientRect();

    if (opts.direction) {
      if (opts.direction === 'left') {
        wrapper.style.left = elClient.left + 'px';
        wrapper.style.top = elClient.top + elClient.height / 2 + 'px';
        toolTipPointer.style.right = `0`;
        toolTipPointer.style.top = `50%`;
        toolTipPointer.style.transform = 'translate3d(50%, -50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(-100%, -50%, 0px)';
      }
      if (opts.direction === 'right') {
        wrapper.style.left = elClient.right + 'px';
        wrapper.style.top = elClient.top + elClient.height / 2 + 'px';
        toolTipPointer.style.left = `0`;
        toolTipPointer.style.top = `50%`;
        toolTipPointer.style.transform = 'translate3d(-50%, -50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(0%, -50%, 0px)';
      }
      if (opts.direction === 'top') {
        wrapper.style.left = elClient.left + elClient.width / 2 + 'px';
        wrapper.style.top = elClient.top + 'px';
        toolTipPointer.style.left = `50%`;
        toolTipPointer.style.bottom = `0`;
        toolTipPointer.style.transform = 'translate3d(-50%, 50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(-50%, -100%, 0px)';
      }
      if (opts.direction === 'bottom') {
        wrapper.style.left = elClient.left + elClient.width / 2 + 'px';
        wrapper.style.top = elClient.bottom + 'px';
        toolTipPointer.style.left = `50%`;
        toolTipPointer.style.top = `0`;
        toolTipPointer.style.transform = 'translate3d(-50%, -50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(-50%, 0%, 0px)';
      }
    }

    if (opts.watchChange) {
      observer = new MutationObserver(function (changes, observer) {
        for (let change of changes) {
          if (change.type === 'attributes') {
            text.textContent = opts.element.getAttribute('title') || opts.element.getAttribute('data-title');
          }
        }
      });
      observer.observe(opts.element, {
        attributes: true
      });
    }

    document.body.appendChild(wrapper);
  }

  function mouseLeave() {
    if (!toolTip.parentElement) return;
    document.body.removeChild(wrapper);
    if (opts.watchChange && observer) {
      observer.disconnect;
    }
  }

  opts.element.removeAttribute('title');

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
  rangeSlider,
  span,
  toolTip,
}