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

interface HTMLElement extends HTMLElement {
    /**
     * Returns first element that matches the selector.
     *  @param selector The name of an element.
     */
    get<K extends keyof HTMLElementTagNameMap>(selector: string | K): HTMLElement;
    /**
     * Returns all elements that matches the selector as HTMLCollection.
     *  @param selector The name of an element.
     */
    getAll<K extends keyof HTMLElementTagNameMap>(selector: string | K): Array<HTMLElement>;
}

declare module 'html-tag-js'{
    export const tag: {
        <K extends keyof HTMLElementTagNameMap>(tagName: K, options?: HTMLElementAttributes | object): HTMLElementTagNameMap[K];
        get(selector: String): HTMLElement;
        getAll(selector: String): Array<HTMLElement>;
        parse(html: String): HTMLElement;
        template(html: String, values: object): String;
    }
}