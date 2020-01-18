export function tag(tagName, options = {}) {
  const isNode = tagName instanceof Node;

  if (!isNode && typeof tagName !== 'string')
    throw new Error(`{tag} is invalid value of tag`);

  let el = isNode ? tagName : document.createElement(tagName);
  el.on = on.bind(el);
  el.off = off.bind(el);
  el.append = append.bind(el);
  el.get = get.bind(el);
  el.getAll = getAll.bind(el);

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

  function on(type, listener, options) {
    this.addEventListener(type, listener, options);
  }

  function off(type, listener, options) {
    this.removeEventListener(type, listener, options);
  }


  function append(...nodes) {
    nodes.map(node => {
      if (node instanceof Node) {
        this.appendChild(tag(node));
        if (node.id && !el[node.id])
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
  const el = document.querySelector(selector);
  if (!el) return null;
  return tag(el);
};

tag.getAll = function (selector) {
  const all = document.querySelectorAll(selector);
  const allAr = [...all];

  allAr.map(el => {
    tag(el);
  });

  return allAr;
};

tag.parse = function (html) {
  const div = tag('div');
  div.innerHTML = html;
  if (div.childElementCount === 1) {
    return tag(div.firstElementChild);
  } else {
    return [...div.children];
  }
};


tag.template = function (html, values) {
  if (values) {
    for (let key in values) {
      if (!/^[a-z_][a-z0-9_\-]*$/.test(key)) continue;
      html = html.replace(new RegExp(`{{${key}}}`, 'g'), values[key]);
    }
  }

  html = html.replace(/{{[a-z_][a-z0-9_\-]*}}/g, '');
  return html;
};