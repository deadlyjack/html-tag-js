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
        if (!(option instanceof Node)) {
          throw new Error('child must be a Node');
        }
        $el.appendChild(option);
        break;

      case 'children':
        if (!Array.isArray(option)) {
          throw new Error('children must be an array of Nodes');
        }
        option.flat().forEach(($child) => {
          if (!($child instanceof Node)) {
            $child = tag.text(`${$child}`);
          }

          $el.append($child);
        });
        break;

      case 'attr':
        Object.keys(option).forEach((attr) => {
          $el.setAttribute(attr, option[attr]);
        });
        break;

      case 'style':
      case 'dataset':
        Object.keys(option).forEach((key) => {
          $el[prop][key] = option[key];
        });
        break;

      default:
        $el[prop] = option;
        break;
    }
  });

  return $el;
}

export function tag(tagName, options = {}) {
  if (typeof options === 'string') {
    options = {
      innerHTML: options,
    }
  }
  return create(tagName, options);
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
  }
});