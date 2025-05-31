const svgElements = ['svg', 'path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse', 'g', 'defs', 'use', 'symbol', 'text', 'tspan', 'textPath', 'marker', 'linearGradient', 'radialGradient'];

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
    if (svgElements.includes(tagName)) {
      $el = document.createElementNS("http://www.w3.org/2000/svg", tagName);
    } else {
      $el = document.createElement(tagName);
    }
  } else {
    throw new Error(`Invalid tag ${typeof tagName}`);
  }

  if (!options.children && Array.isArray(children) && children.length) {
    options.children = children;
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
        if (svgElements.includes(tagName) && ['number', 'string', 'bigint'].includes(typeof option)) {
          $el.setAttribute(prop, option);
        } else {
          $el[prop] = option;
        }
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
 * @param {Array<HTMLElement|Promise>} children 
 */
export function addChildren($el, children) {
  for (let child of children) {
    if (Array.isArray(child)) {
      addChildren($el, child.flat());
      continue;
    }

    child = getChild(child);
    if (child) {
      $el.appendChild(child);
    }
  }
}

/**
 * Processes a given child element and returns a valid DOM Node.
 * 
 * @param {any} child - The child element to process. It can be of various types including function, Node, string, number, bigint, symbol, undefined, or Promise.
 * @returns {Node|null} - Returns a valid DOM Node or null if the child cannot be processed.
 */
function getChild(child) {
  if (typeof child === 'function') {
    return getChild(child());
  }

  if (child instanceof Promise) {
    const $placeholder = document.createTextNode('');
    child.then((child) => {
      if (Array.isArray(child)) {
        child = child.flat();
        child.forEach((child) => {
          child = getChild(child);
          if (child) {
            $placeholder.before(child);
          }
        });
        $placeholder.remove();
        return;
      }

      child = getChild(child);
      if (child) {
        $placeholder.replaceWith(child);
      } else {
        $placeholder.remove();
      }
    });
    child = $placeholder;
  } else if (child instanceof Text) {
    if ('clone' in child) {
      child = child.clone();
    }
  } else if (!(child instanceof Node)) {
    const type = typeof child;
    if (!['number', 'bigint', 'string'].includes(type)) return null;
    if (type === 'string' && !child) return null;
    child = tag.text(`${child}`);
  }

  return child;
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
});
