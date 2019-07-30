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

interface rangeSliderOptions {
    /**
     *Minimum value of slider
     */
    min: number;
    /**
     *Maximum value of slider
     */
    max: number;
    step?: number;
    /**
     *Default value of slider
     */
    value?: number;
    onchange: (value: number) => void;
    size: "small" | "big" | "normal";
}

interface toolTipOptions {
    title: string;
    /**
     * default direction for direction auto.
     */
    defaultDirection?: 'left' | 'right' | 'top' | 'bottom';
    /**
     * direction of tooltip
     */
    direction: 'left' | 'right' | 'top' | 'bottom' | 'auto';
    /**
     * If set to true then tooltip will move with element while scrolling else tooltip will disappear on scroll
     */
    onscrollmove?: boolean;
    showToolTipOn?: Array<keyof HTMLElementEventMap>;
}

interface RangeSlider extends HTMLElement {
    onchange: (value: number) => void;
    /**
     * Return the value of slider
     */
    value(): number;
    /**
     * Sets the value of slider
     */
    setValue(value: number): void;
}

interface comboBoxOptions {
    /**
     * HTML select element
     */
    select: HTMLSelectElement;
    /**
     * Height of opitons
     */
    height: number;
    /**
     * Height of combobox
     */
    maxheight: number;
    /**
     * Width of combobox
     */
    width: number;
    /**
     * Speed of opening of combobox
     */
    speed: number;
}

interface ComboBox {
    customSelect: HTMLDivElement;
    addOption(option: string | HTMLElement, value?: string): void;
    value(): string;
    setValue(value: string): boolean;
    removeOption(value: string): boolean;
}

interface toggleSwitchOptions {
    value: boolean,
    onchange: (value: boolean) => void;
    /**
     * Height of the toggleSwitch
     */
    size: number;
    valType: 'bool' | 'on/off';
}

interface ToggleSwitch {
    onchange: (value: boolean) => void;
    value(): boolean;
    setvalue(value: boolean): void;
}

declare module "html-element-js" {
    /**
     * Creates an instance of the element for the specified tag.
     *  @param tagName The name of an element.
     */
    export function tag<K extends keyof HTMLElementTagNameMap>(tagName: K, options: HTMLElementAttributes): HTMLExtentedElement | HTMLElementTagNameMap[K];

    /**
     * Produce bubble pop effect on click
     */
    export function bubble(el: HTMLElement): void;
    bubble.activateAll = function (): void { };

    /**
     * Creates a range input element
     */
    export function rangeSlider(options: rangeSliderOptions): RangeSlider;

    /**
     * Show tooltip for respective element
     */
    export function toolTip(element: HTMLElement, options: toolTipOptions): void;
    toolTip.activateAll = function (): void { };

    /**
     * Creates a custom select menu (comboBox)
     */
    export function comboBox(options: comboBoxOptions): ComboBox;

    /**
     * Creates a toggleSwith
     */
    export function toggleSwitch(options?: toggleSwitchOptions): ToggleSwitch;
}