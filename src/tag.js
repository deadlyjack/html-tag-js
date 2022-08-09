function create(tagName, options = {}) {
  if (typeof tagName !== 'string') {
    throw new Error('tagName must be a string');
  }

  const $el = document.createElement(tagName);

  Object.keys(options).forEach((key) => {
    const option = options[key];
    if (option === undefined) return;

    switch (key) {
      case 'child':
        if (!(option instanceof Node)) {
          throw new Error('child must be a Node');
        }
        $el.appendChild(option);
        break;

      case 'children':
        if (!Array.isArray(option) || option.some((child) => !(child instanceof Node))) {
          throw new Error('children must be an array of Nodes');
        }
        $el.append(...option);
        break;

      case 'attr':
        Object.keys(option).forEach((attr) => {
          $el.setAttribute(attr, option[attr]);
        });
        break;

      case 'style':
        Object.keys(option).forEach((style) => {
          $el.style[style] = option[style];
        });
        break;

      default:
        $el[key] = option;
        break;
    }
  });

  return $el;
}

export function tag(tagName, options = {}) {
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
});