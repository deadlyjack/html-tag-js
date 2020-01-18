interface HTMLElementAttributes {
    /**
     * The accessKey property sets or returns the accesskey attribute of an element.
     */
    accesskey?: string;
    /**
     * Sets attributes of element.
     */
    attr?: { string: string };
    /**
     * Returns or sets the value of element's class attribute.
     */
    className?: string;
    /**
     * where a value of "true" means the element is editable and a value of "false" means it isn't.
     */
    contentEditable?: string;
    /**
     * child of this element.
     */
    child?: Node;
    /**
     * children of the this element.
     */
    children?: Node[];
    /**
     * text content direction
     */
    dir?: string;
    draggable?: boolean;
    hidden?: boolean;
    /**
     * Returns or sets the value of element's id content attribute.
     */
    id?: string;
    innerText?: string;
    innerHTML?: string;
    lang?: string;
    nodeValue?: string;
    onclick?: (event: MouseEvent) => void;
    onmousedown?: (event: MouseEvent) => void;
    onmouseup?: (event: MouseEvent) => void;
    onmousemove?: (event: MouseEvent) => void;
    ontouchstart?: (event: TouchEvent) => void;
    ontouchmove?: (event: TouchEvent) => void;
    ontouchend?: (event: TouchEvent) => void;
    onfullscreenchange?: (event: Event) => void;
    onfullscreenerror?: (event: Event) => void;
    outerHTML?: string;
    spellcheck?: boolean;
    translate?: boolean;
    /**
     * Returns or sets the value of element's slot content attribute.
     */
    slot?: string;
    style?: { string: string };
    /**
     * Position of the element in the tabbing order.
     */
    tabIndex?: number;
    textContent?: string;
}

interface HTMLExtentedElement {
    /**
     * Returns first element that matches the selector.
     *  @param selector The name of an element.
     */
    get<K extends keyof HTMLElementTagNameMap>(selector: string | K): HTMLExtentedElement & HTMLElement;
    /**
     * Returns all elements that matches the selector as HTMLCollection.
     *  @param selector The name of an element.
     */
    getAll<K extends keyof HTMLElementTagNameMap>(selector: string | K): Array<HTMLExtentedElement & HTMLElement>;

    /**
     * Add event listener to the element
     * @param event A case-sensitive string representing the event type to listen for.
     * @param listener The object which receives a notification (an object that implements the Event interface) when an event of the specified type occurs. This must be an object implementing the EventListener interface, or a JavaScript function. See The event listener callback for details on the callback itself.
     * @param option An options object that specifies characteristics about the event listener. The available
     */
    on<K extends keyof HTMLElementEventMap>(event: string | K, listener: (e: Event) => void, option: Boolean | EventListenerOptions): void;

    /**
     * Remove event listener to the element
     * @param event A case-sensitive string representing the event type to listen for.
     * @param listener The object which receives a notification (an object that implements the Event interface) when an event of the specified type occurs. This must be an object implementing the EventListener interface, or a JavaScript function. See The event listener callback for details on the callback itself.
     * @param option An options object that specifies characteristics about the event listener. The available
     */
    off<K extends keyof HTMLElementEventMap>(event: string | K, listener: (e: Event) => void, option: Boolean | EventListenerOptions): void;
}

declare module "html-tag-js" {
    function tag<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: HTMLElementAttributes | object): HTMLExtentedElement & HTMLElementTagNameMap[K];
    tag.get = function (selector: string): HTMLExtentedElement & HTMLElement { };
    tag.getAll = function (selector: string): Array<HTMLExtentedElement & HTMLElement> { };
    tag.parse = function (html: string): Array<HTMLExtentedElement & HTMLElement> | HTMLExtentedElement & HTMLElement { };
    tag.template = function (html: string, values: object): string { };
    export = tag;
}