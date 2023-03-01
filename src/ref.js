export default class Ref {
  instanceOfRef = true;
  /**@type {HTMLElement} */
  #el;
  #value;
  #innerHTML;
  #textContent;
  #innerText;
  #id;
  #className;
  #classList = new ClassList();
  #style = new CSSStyle();
  #dataset = {};
  #children = [];
  #attr = {};
  #on = {
    ref: [
      (el) => {
        if (typeof this.onref === 'function') this.onref.call(this, el);
      }
    ],
  };
  #onref;

  /**
   * Append children to the element
   * If the element is not yet created, store the children and apply them when the element is created
   * @param  {...Node} children 
   */
  append(...children) {
    if (this.#el) this.#el.append(...children);
    else this.#children.push(...children);
  }

  /**
   * Set or get an attribute
   * If the element is not yet created, store the value and apply it when the element is created
   * @param {string} name  attribute name
   * @param {string|number|boolean} value attribute value 
   * @returns 
   */
  attr(name, value) {
    if (!name && !value) return null;
    if (!this.#el) {
      if (value) {
        this.#attr[name] = value;
        return;
      }
      return this.#attr[name];
    }
    if (value) {
      this.#el.setAttribute(name, value);
    }
    return this.#el.getAttribute(name);
  }

  /**
   * Get a single element by query selector
   * @param {string} query 
   * @returns {HTMLElement}
   */
  get(query) {
    return this.#el?.get(query);
  }

  /**
   * Get all elements by query selector
   * @param {string} query 
   * @returns 
   */
  getAll(query) {
    return this.#el?.getAll(query);
  }

  /**
   * Attach an event listener
   * @param {'ref'} event
   * @param {(this:Ref, ref:Ref)=>void} callback
   */
  on(event, callback) {
    this.#on[event]?.push(callback);
    if (event === 'ref' && this.#el) {
      this.#emit(event, this.#el);
    }
  }

  /**
   * Remove an event listener
   * @param {'ref'} event
   * @param {(this:Ref, ref:Ref)=>void} callback
   */
  off(event, callback) {
    if (!this.#on[event]) return;
    this.#on[event] = this.#on[event].filter(c => c !== callback);
  }

  /**
   * Emits an event
   * @param {'ref'} event Event name
   * @param  {...any} args Arguments to pass to the callback
   */
  #emit(event, ...args) {
    this.#on[event]?.forEach(c => c.call(this, ...args));
  }

  get onref() {
    return this.#onref;
  }

  set onref(callback) {
    this.#onref = callback;
    if (this.#el) this.#emit('ref', this.#el);
  }

  /**
   * Gets the reference to the element
   */
  get el() {
    return this.#el;
  }

  /**
   * Set the reference to the element
   */
  set el(el) {
    this.#el = el;

    if (this.#value) {
      this.value = this.#value;
      this.#value = null;
    }

    if (this.#innerHTML) {
      this.innerHTML = this.#innerHTML;
      this.#innerHTML = null;
    }

    if (this.#textContent) {
      this.textContent = this.#textContent;
      this.#textContent = null;
    }

    if (this.#innerText) {
      this.innerText = this.#innerText;
      this.#innerText = null;
    }

    if (this.#id) {
      this.id = this.#id;
      this.#id = null;
    }

    if (this.#className) {
      this.className = this.#className;
      this.#className = null;
    }

    if (this.#classList.length) {
      this.#classList.forEach(c => this.classList.add(c));
      this.#classList.length = 0;
    }

    if (this.#children.length) {
      this.append(...this.#children);
      this.#children.length = 0;
    }

    const attrProps = Object.keys(this.#attr);
    if (attrProps.length) {
      attrProps.forEach(p => this.attr(p, this.#attr[p]));
      this.#attr = {};
    }

    const styleProps = Object.keys(this.#style);
    if (styleProps.length) {
      styleProps.forEach(p => this.style[p] = this.#style[p]);
      this.#style = {};
    }

    const datasetProps = Object.keys(this.#dataset);
    if (datasetProps.length) {
      datasetProps.forEach(p => this.dataset[p] = this.#dataset[p]);
      this.#dataset = {};
    }

    this.#emit('ref', el);
  }

  /**
   * Get the textContent
   * If the element is not yet created, return the stored value
   */
  get textContent() {
    return this.#el?.textContent ?? this.#textContent;
  }

  /**
   * Set the textContent
   * If the element is not yet created, store the value and apply it when the element is created
   */
  set textContent(text) {
    if (this.#el) this.#el.textContent = text;
    else this.#textContent = text;
  }

  /**
   * Get the innerText
   * If the element is not yet created, return the stored value
   */
  get innerText() {
    return this.#el?.innerText ?? this.#innerText;
  }

  /**
   * Set the innerText
   * If the element is not yet created, store the value and apply it when the element is created
   */
  set innerText(text) {
    if (this.#el) this.#el.innerText = text;
    else this.#innerText = text;
  }

  /**
   * Get the innerHTML
   * If the element is not yet created, return the stored value
   */
  get innerHTML() {
    return this.#el?.innerHTML ?? this.#innerHTML;
  }

  /**
   * Set the innerHTML
   * If the element is not yet created, store the value and apply it when the element is created
   */
  set innerHTML(html) {
    if (this.#el) this.#el.innerHTML = html;
    else this.#innerHTML = html;
  }

  /**
   * Get the value
   * If the element is not yet created, return the stored value
   */
  get value() {
    return this.#el?.value ?? this.#value;
  }

  /**
   * Set the value
   * If the element is not yet created, store the value and apply it when the element is created
   */
  set value(val) {
    if (this.#el) this.#el.value = val;
    else this.#value = val;
  }

  /**
   * Get the class list
   * If the element is not yet created, return a proxy object that will be applied when the element is created
   */
  get classList() {
    return this.#el?.classList ?? this.#classList;
  }

  /**
   * Get the id
   * If the element is not yet created, return the stored value
   */
  get id() {
    return this.#el?.id ?? this.#id;
  }

  /**
   * Set the id
   * If the element is not yet created, store the value and apply it when the element is created
   */
  set id(id) {
    if (this.#el) this.#el.id = id;
    else this.#id = id;
  }

  /**
   * Get the class name
   * If the element is not yet created, return the stored value
   */
  get className() {
    return this.#el?.className ?? this.#className;
  }

  /**
   * Set the class name
   * If the element is not yet created, store the value and apply it when the element is created
   */
  set className(className) {
    if (this.#el) this.#el.className = className;
    else this.#className = className;
  }

  /**
   * Get the style object
   * If the element is not yet created, return a proxy object that will be applied when the element is created
   */
  get style() {
    return this.#el?.style ?? this.#style;
  }

  /**
   * Get the dataset object
   * If the element is not yet created, return a proxy object that will be applied when the element is created
   */
  get dataset() {
    return this.#el?.dataset ?? this.#dataset;
  }

  /**
   * Remove the element from the DOM
   */
  remove() {
    this.#el.remove();
  }
}

class ClassList {
  #list = [];

  get length() {
    return this.#list.length;
  }

  set length(length) {
    this.#list.length = length;
  }

  add(...classes) {
    this.#list.push(...classes);
  }

  remove(...classes) {
    this.#list = this.#list.filter(c => !classes.includes(c));
  }

  contains(className) {
    return this.#list.includes(className);
  }

  toggle(className) {
    if (this.contains(className)) {
      this.remove(className);
    } else {
      this.add(className);
    }
  }

  replace(oldClass, newClass) {
    this.remove(oldClass);
    this.add(newClass);
  }

  entries() {
    return this.#list.entries();
  }

  forEach(callback) {
    return this.#list.forEach(callback);
  }

  keys() {
    return this.#list.keys();
  }

  values() {
    return this.#list.values();
  }
}

class CSSStyle {
  item(index) {
    Object.keys(this)[index];
  }

  removeProperty(index) {
    const key = Object.keys(this)[index];
    delete this[key];
  }

  setProperty(name, value) {
    this[name] = value;
  }
}
