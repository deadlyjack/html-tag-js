interface HTMLElementAttributes {
    /**
     * The accessKey property sets or returns the accesskey attribute of an element.
     */
    accesskey: string;
    /**
     * Sets attributes of element.
     */
    attr: { "attribute": string }[];
    /**
     * Returns or sets the value of element's class attribute.
     */
    className: string;
    /**
     * where a value of "true" means the element is editable and a value of "false" means it isn't.
     */
    contentEditable: string;
    /**
     * child of this element.
     */
    child: Node;
    /**
     * children of the this element.
     */
    children: Node[];
    /**
     * text content direction
     */
    dir: string;
    draggable: boolean;
    hidden: boolean;
    /**
     * Returns or sets the value of element's id content attribute.
     */
    id: string;
    innerText: string;
    lang: string;
    nodeValue: string;
    onclick: (event: MouseEvent) => void;
    onmousedown: (event: MouseEvent) => void;
    onmouseup: (event: MouseEvent) => void;
    onmousemove: (event: MouseEvent) => void;
    ontouchstart: (event: TouchEvent) => void;
    ontouchmove: (event: TouchEvent) => void;
    ontouchend: (event: TouchEvent) => void;
    onfullscreenchange: (event: Event) => void;
    onfullscreenerror: (event: Event) => void;
    outerHTML: string;
    spellcheck: boolean;
    translate: boolean;
    /**
     * Returns or sets the value of element's slot content attribute.
     */
    slot: string;
    style: CSSStyleDeclaration;
    /**
     * Position of the element in the tabbing order.
     */
    tabIndex: number;
    textContent: string;
}

interface HTMLExtentedElement {
    /**
     * Returns first element that matches the selector.
     *  @param selector The name of an element.
     */
    get(selector: string | HTMLElementTagNameMap): HTMLExtentedElement;
    /**
     * Returns all elements that matches the selector as HTMLCollection.
     *  @param selector The name of an element.
     */
    getAll(selector: string | HTMLElementTagNameMap): HTMLCollection;
    assignRemovedEvents<K extends keyof HTMLElementEventMap>(eventName?: K): void;
    removeEvents<K extends keyof HTMLElementTagNameMap>(eventName?: K): void;
    /**
     * Remove the element from DOM.
     *  @param selector The name of an element.
     */
    remove(): void;
}

/**
 * Creates an instance of the element for the specified tag.
 *  @param tagName The name of an element.
 */
export function tag<K extends keyof HTMLElementTagNameMap>(tagName: K, options: HTMLElementAttributes): HTMLExtentedElement | HTMLElementTagNameMap[K];