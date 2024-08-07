/**
 * Creates an HTML element with the specified tag name, options, and children.
 * @param {string|function|Node} tagName 
 * @param {object} options 
 * @param {Array} children 
 * @returns 
 */
export default function tag(tagName, options = {}, children = []) {
  if (typeof options === 'string') {
    options = {
      innerHTML: options,
    }
  }
  return create(tagName, options, children);
}

/**
 * Creates an HTML element with the specified tag name, options, and children.
 *
 * @param {string|function|Node} tagName - The tag name of the element to create. It can be a string, a function, or a Node object.
 * @param {Object} [options={}] - The options for the element.
 * @param {Array} [children=[]] - The children of the element.
 * @returns {Node} The created HTML element.
 * @throws {Error} If the tag name is invalid.
 */
function create(tagName, options = {}, children = []) {
  let $el;

  if (Array.isArray(options)) {
    children = options;
    options = {};
  }

  if (typeof tagName === 'function') {
    return tagName(options, children);
  } else if (tagName instanceof Node) {
    $el = tagName;
  } else if (typeof tagName === 'string') {
    $el = document.createElement(tagName);
  } else {
    throw new Error('Invalid tag, ', typeof tagName);
  }

  const ref = options.ref;
  delete options.ref;

  Object.keys(options).forEach((prop) => {
    const option = options[prop];
    if (option === undefined) return;

    switch (prop) {
      case 'child':
        addChildren($el, [option]);
        break;

      case 'children':
        if (!Array.isArray(option)) {
          throw new Error('children must be an array of Nodes');
        }
        addChildren($el, option.flat());
        break;

      case 'attr':
        Object.keys(option).forEach((attr) => {
          const value = option[attr];
          if (value === undefined) return;
          $el.setAttribute(attr, value);
        });
        break;

      case 'style':
      case 'dataset':
        Object.keys(option).forEach((key) => {
          const value = option[key];
          if (value === undefined) return;
          $el[prop][key] = value;
        });
        break;

      case 'on':
        Object.keys(option).forEach((event) => {
          const handlers = option[event];
          if (handlers === undefined) return;
          handlers.forEach((handler) => {
            $el.addEventListener(event, handler);
          });
        });

        break;

      default:
        $el[prop] = option;
        break;
    }
  });

  if (ref && ref.instanceOfRef) {
    ref.el = $el;
  }

  return $el;
}

/**
 * Add children to an element
 * @param {HTMLElement} $el 
 * @param {Array<HTMLElement>} children 
 */
function addChildren($el, children) {
  for (let child of children) {
    if (Array.isArray(child)) {
      addChildren($el, child.flat());
      continue;
    }

    if (!(child instanceof Node)) {
      const type = typeof child;
      if (!['number', 'bigint', 'string'].includes(type)) continue;
      if (type === 'string' && !child) continue;
      child = tag.text(`${child}`);
    } else if (child instanceof Text) {
      if ('clone' in child) {
        child = child.clone();
      }
    }

    $el.appendChild(child);
  }
}

if (window && !window.tag) {
  window.tag = tag;
}

Object.defineProperties(tag, {
  get: {
    value(selector) {
      return document.querySelector(selector);
    },
  },
  getAll: {
    value(selector) {
      const $els = document.querySelectorAll(selector);
      return [...$els];
    },
  },
  text: {
    value(text) {
      return document.createTextNode(text);
    }
  },
  use: {
    value(arg = '') {
      const el = document.createTextNode(arg);
      el.clones = [el];
      el.shouldClone = false;
      el._value = arg;

      Object.defineProperty(el, 'value', {
        set(val) {
          el._value = val;
          el.clones.forEach((clone) => {
            clone.textContent = val;
          });

          if (typeof el.onChange === 'function') {
            el.onChange.call(el, val);
          }
        },
        get() {
          return el._value;
        },
      });

      Object.defineProperty(el, 'toString', {
        value() {
          return el._value;
        },
      });

      Object.defineProperty(el, 'clone', {
        value() {
          if (!el.shouldClone) {
            el.shouldClone = true;
            return el;
          }
          const clone = el.cloneNode();
          el.clones.push(clone);
          return clone;
        },
      });

      return el;
    },
  },
});
