function create(tagName, options = {}, children = []) {
  let $el;

  if (typeof tagName === 'function') {
    return tagName(options, children);
  } else if (tagName instanceof Node) {
    $el = tagName;
  } else if (typeof tagName === 'string') {
    $el = document.createElement(tagName);
  } else {
    throw new Error('Invalid tag, ', typeof tagName);
  }

  Object.keys(options).forEach((prop) => {
    const option = options[prop];
    if (option === undefined) return;

    switch (prop) {
      case 'child':
        appendChild($el, option);
        break;

      case 'children':
        if (!Array.isArray(option)) {
          throw new Error('children must be an array of Nodes');
        }
        option.flat().forEach(($child) => {
          appendChild($el, $child);
        });
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

      case 'ref':
        if (option.instanceOfRef) {
          option.el = $el;
        }
        break;

      default:
        $el[prop] = option;
        break;
    }
  });

  return $el;
}

function appendChild($el, $child) {
  if (!($child instanceof Node)) {
    $child = tag.text(`${$child}`);
  }

  if ($child instanceof Text && 'clone' in $child) {
    $child = $child.clone();
  }
  $el.append($child);
}

export default function tag(tagName, options = {}, children = []) {
  if (typeof options === 'string') {
    options = {
      innerHTML: options,
    }
  }
  return create(tagName, options, children);
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
  parse: {
    value(html) {
      const $div = document.createElement('div');
      $div.innerHTML = html;
      if ($div.childElementCount === 1) {
        return $div.firstElementChild;
      }
      return [...$div.children];
    },
  },
  text: {
    value(text) {
      return document.createTextNode(text);
    }
  },
  use: {
    value(arg = '') {
      let value = arg;
      let shouldClone = false;
      const el = document.createTextNode(arg);
      const clones = [el];

      Object.defineProperty(el, 'value', {
        set(val) {
          value = val;
          clones.forEach((clone) => {
            clone.textContent = val;
          });
        },
        get() {
          return value;
        },
      });

      Object.defineProperty(el, 'clone', {
        value() {
          if (!shouldClone) {
            shouldClone = true;
            return el;
          }
          const clone = el.cloneNode();
          clones.push(clone);
          return clone;
        },
      });

      return el;
    },
  },
});
