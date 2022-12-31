export default class Ref {
  /**@type {HTMLElement} */
  #el;

  get el() {
    return this.#el;
  }

  set el(el) {
    this.#el = el;
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

  get textContent() {
    return this.#el?.textContent;
  }

  set textContent(text) {
    if (this.#el) this.#el.textContent = text;
  }

  get innerText() {
    return this.#el?.innerText;
  }

  set innerText(text) {
    if (this.#el) this.#el.innerText = text;
  }

  get innerHTML() {
    return this.#el?.innerHTML;
  }

  set innerHTML(html) {
    if (this.#el) this.#el.innerHTML = html;
  }

  get value() {
    return this.#el?.value;
  }

  set value(val) {
    if (this.#el) this.#el.value = val;
  }

  get classList() {
    return this.#el?.classList;
  }

  get id() {
    return this.#el?.id;
  }

  set id(id) {
    if (this.#el) this.#el.id = id;
  }

  get className() {
    return this.#el?.className;
  }

  set className(className) {
    if (this.#el) this.#el.className = className;
  }

  get style() {
    return this.#el?.style;
  }

  get dataset() {
    return this.#el?.dataset;
  }

  /**
   * Append children to the element
   * @param  {...Node} children 
   */
  append(...children) {
    if (this.#el) this.#el.append(...children);
  }

  /**
   * Set or get an attribute
   * @param {string} name  attribute name
   * @param {string|number|boolean} value attribute value 
   * @returns 
   */
  attr(name, value) {
    if (!this.#el) return;
    if (value) {
      this.#el.setAttribute(name, value);
    }
    return this.#el.getAttribute(name);
  }
}