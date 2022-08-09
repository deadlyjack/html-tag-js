type HTMLTagNames = keyof HTMLElementTagNameMap & string;

interface HTMLElement {
  /**
   * Returns first element that matches the selector.
   *  @param selector The name of an element.
   */
  get(selector: HTMLTagNames): HTMLElement;
  /**
   * Returns all elements that matches the selector as HTMLCollection.
   *  @param selector The name of an element.
   */
  getAll(selector: HTMLTagNames): Array<HTMLElement>;
}

declare module 'html-tag-js' {
  type StyleList = {
    [key in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[key];
  };

  type Dataset = {
    [key: string]: string;
  };

  type HTMLElementAttributes = {
    /**
     * The id of the element.
     */
    id?: string;
    /**
     * css class name
     */
    className?: string;
    /**
     * Sets attributes of element.
     */
    attr?: { string: string };
    /**
     * child of this element.
     */
    child?: Node;
    /**
     * children of the this element.
     */
    children?: Array<Node>;
    /**
     * style of the HTMLElement
     */
    style?: StyleList;
    /**
     * dataset of the HTMLElement
     */
    dataset?: Dataset;
    /**
     * attributes of the HTMLElement
     */
    [key: string]: any;
  };

  interface Tag {
    <K extends HTMLTagNames>(
      tagName: K,
      options?: HTMLElementAttributes & object,
    ): HTMLElementTagNameMap[K];
    get(selector: String): HTMLElement;
    getAll(selector: String): Array<HTMLElement>;
    parse(html: String): HTMLElement;
  }

  const tag: Tag;

  export default tag;
}
