export function tag(tagName, options = {}) {
  const isElement = tagName instanceof Element;

  if (!isElement && typeof tagName !== 'string')
    throw new Error(`${tagName} is invalid value of tag`);

  let el = isElement ? tagName : document.createElement(tagName);

  for (let prop in options) {

    if (options[prop] === undefined) continue;

    if (prop === 'child') {
      let child = options[prop];
      if (el instanceof Node) el.append(child);
    } else if (prop == 'children' && Array.isArray(options[prop])) {
      el.append(...options[prop])
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