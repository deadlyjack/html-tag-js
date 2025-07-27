/// <reference path="./types/attributes.d.ts" />

type HTMLTagNames = keyof HTMLElementTagNameMap & string;

interface HTMLElement {
  /**
   * Returns the first element that is a descendant of node that matches selectors.
   */
  get<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): HTMLElementTagNameMap[K] | null;
  get<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): SVGElementTagNameMap[K] | null;
  get<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): MathMLElementTagNameMap[K] | null;
  get<E extends Element = Element>(selectors: string): E | null;
  /**
   * Returns all element descendants of node that match selectors.
   */
  getAll<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementTagNameMap[K]>;
  getAll<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): NodeListOf<SVGElementTagNameMap[K]>;
  getAll<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<MathMLElementTagNameMap[K]>;
  getAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
  /**
   * Sets or gets the content of the element.
   */
  content: Node | Array<Node>;
}

type StyleList = {
  [key in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[key];
};

type Dataset = {
  [key: string]: string;
};

type EnterKeyHint =
  | "enter"
  | "done"
  | "go"
  | "next"
  | "previous"
  | "search"
  | "send";

interface Tag {
  <K extends HTMLTagNames>(
    tagName: K,
    options?: HTMLElementAttributes & object,
  ): HTMLElementTagNameMap[K];
  <K extends HTMLTagNames>(
    tagName: K,
    innerHTML: string,
  ): HTMLElementTagNameMap[K];
  (tagName: string, options?: HTMLElementAttributes & object): HTMLElement;
  (tagName: string, innerHTML: string): HTMLElement;
  /**
   * Returns the first element that is a descendant of node that matches selectors.
   */
  get<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): HTMLElementTagNameMap[K] | null;
  get<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): SVGElementTagNameMap[K] | null;
  get<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): MathMLElementTagNameMap[K] | null;
  get<E extends Element = Element>(selectors: string): E | null;
  /**
   * Returns all element descendants of node that match selectors.
   */
  getAll<K extends keyof HTMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<HTMLElementTagNameMap[K]>;
  getAll<K extends keyof SVGElementTagNameMap>(
    selectors: K,
  ): NodeListOf<SVGElementTagNameMap[K]>;
  getAll<K extends keyof MathMLElementTagNameMap>(
    selectors: K,
  ): NodeListOf<MathMLElementTagNameMap[K]>;
  getAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
  text(text: string): Text;
}

interface Reactive<T = string> extends Text {
  value: T;
  onChange: (this: Reactive<T>, value: T) => void;
  toString: () => string;
}

interface Ref<T = HTMLElement> {
  /**
   * Element reference
   */
  el: T;
  /**
   * Get element by query selector
   * @param selector
   */
  get(selector: String): HTMLElement;
  /**
   * Get all elements by query selector
   * @param selector
   */
  getAll(selector: String): Array<HTMLElement>;
  /**
   * Set attribute value
   * @param name name of the attribute
   * @param value value of the attribute
   */
  setAttribute(name: string, value: string): void;
  /**
   * Get attribute value
   * @param name name of the attribute
   * @returns value of the attribute
   */
  getAttribute(name: string): string;
  /**
   * Remove attribute value
   * @param name name of the attribute
   */
  removeAttribute(name: string): void;
  /**
   * Append child to the element
   * @param els child element
   */
  append(...els: Node[]): void;
  /**
   * Prepend child to the element
   * @param els child element
   */
  prepend(...els: Node[]): void;
  /**
   * Attach event listener
   * @param event event name
   * @param cb callback function
   */
  on(event: "ref", cb: (this: Ref, ref: T) => void): void;
  /**
   * Remove event listener
   * @param event event name
   * @param cb callback function
   */
  off(event: "ref", cb: (this: Ref, ref: T) => void): void;
  /**
   * Called when reference is set
   */
  onref: (this: Ref, ref: T) => void;
  /**
   * Get the classList
   * If the element is not yet created
   * `Setter` will store the value and apply it when the element is created
   * `Getter` will return a similar object to DOMTokenList which will store the value and apply it when the element is created
   */
  classList: DOMTokenList;
  /**
   * Get the id
   * If the element is not yet created
   * `Setter` will store the value and apply it when the element is created
   * `Getter` will return the stored value
   */
  id: string;
  /**
   * Get the class name
   * If the element is not yet created
   * `Setter` will store the value and apply it when the element is created
   * `Getter` will return the stored value
   */
  className: string;
  /**
   * Get the textContent
   * If the element is not yet created
   * `Setter` will store the value and apply it when the element is created
   * `Getter` will return the stored value
   */
  textContent: string;
  /**
   * Get the innerText
   * If the element is not yet created
   * `Setter` will store the value and apply it when the element is created
   * `Getter` will return the stored value
   */
  innerText: string;
  /**
   * Get the innerHTML
   * If the element is not yet created
   * `Setter` will store the value and apply it when the element is created
   * `Getter` will return the stored value
   */
  innerHTML: string;
  /**
   * Get the value
   * If the element is not yet created
   * `Setter` will store the value and apply it when the element is created
   */
  value: string;
  /**
   * Get the value
   * If the element is not yet created
   * `Setter` will store the value and apply it when the element is created
   * `Getter` will return proxy object similar to CSSStyleDeclaration
   */
  style: CSSStyleDeclaration;
  /**
   * Get the value
   * If the element is not yet created
   * `Setter` will store the value and apply it when the element is created
   * `Getter` will return proxy object
   */
  dataset: DOMStringMap;
  /**
   * Get and set the content of the element
   * @throws Error if the element is not yet created
   */
  content: Node | Array<Node>;
}

declare module "html-tag-js" {
  const tag: Tag;

  export default tag;
}

declare module "html-tag-js/ref" {
  const Ref: {
    <T = HTMLElement>(
      onref?: (this: Ref, element: HTMLElement) => void,
    ): Ref<T>;
    /**
     * Check if the value is object of RefConstructor
     * @param value Object to check
     * @returns
     */
    isRef: (value: any) => boolean;
  };

  export default Ref;
}

declare module "html-tag-js/reactive" {
  const Reactive: {
    <T = string>(value?: T): Reactive<T>;
    /**
     * Check if the value is object of ReactiveConstructor
     * @param value Object to check
     * @returns
     */
    isReactive: (value: any) => boolean;
  };

  export default Reactive;
}

declare namespace JSX {
  interface IntrinsicElements {
    audio: HTMLAudioElementAttributes;
    a: HTMLAnchorElementAttributes;
    button: HTMLButtonElementAttributes;
    canvas: HTMLCanvasElementAttributes;
    embed: HTMLEmbedElementAttributes;
    form: HTMLFormElementAttributes;
    iframe: HTMLIFrameElementAttributes;
    img: HTMLImageElementAttributes;
    input: HTMLInputElementAttributes;
    li: HTMLListElementAttributes;
    link: HTMLLinkElementAttributes;
    meta: HTMLMetaElementAttributes;
    textarea: HTMLTextAreaElementAttributes;
    script: HTMLScriptElementAttributes;
    style: HTMLStyleElementAttributes;
    select: HTMLSelectElementAttributes;
    source: HTMLSourceElementAttributes;
    td: HTMLTableCellElementAttributes;
    video: HTMLVideoElementAttributes;
    [name: string]: HTMLElementAttributes;
  }

  type Element = HTMLElement;
}

declare const tag: typeof import("html-tag-js").default;
