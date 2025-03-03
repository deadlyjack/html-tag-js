
class ReactiveClass extends Text {
  /** @type {(value:string)=>void} */
  onChange = null;

  /** @type {number|string} */
  #value;

  constructor(value = '') {
    super(value);
    this.clones = [this];
    this.shouldClone = false;
    this.value = `${value}`;
  }

  set value(val) {
    this.#value = val;
    this.clones.forEach((clone) => {
      clone.textContent = val;
    });

    if (typeof this.onChange === 'function') {
      this.onChange.call(this, val);
    }
  }

  get value() {
    return this.#value;
  }

  clone() {
    const clone = new Reactive(this.value);
    this.clones.push(clone);
    return clone;
  }

  toString() {
    return `${this.#value}`;
  }
}

/**
 * Create a reactive text node
 * @param {number|string} value - The initial value of the text node
 * @returns {Text}
 */
export default function Reactive(value) {
  return new ReactiveClass(value);
}

Reactive.isReactive = (value) => value instanceof ReactiveClass;