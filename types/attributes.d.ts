interface HTMLElementAttributes {
  /**
   * The id of the element.
   */
  id?: string;
  /**
   * A reference to the element
   */
  ref?: Ref;
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
   * children of this element.
   */
  children?: Array<Node>;
  /**
   * style of the HTMLElement
   */
  style?: StyleList;
  /**
   * Forms a class of attributes, called custom data attributes, that allow proprietary information to be exchanged between the HTML and its DOM representation that may be used by scripts. All such custom data are available via the HTMLElement interface of the element the attribute is set on.
   * The HTMLElement dataset property gives access to them.
   */
  dataset?: Dataset;
  /**
   * A string representing the access key assigned to the element.
   */
  accessKey?: string;
  /**
   * A string reflecting the aria-atomic attribute, which indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute.
   */
  ariaAtomic?: 'true' | 'false';
  /**
   * A string reflecting the aria-autocomplete attribute, which indicates whether inputting text could trigger display of one or more predictions of the user's intended value for a combobox, searchbox, or textbox and specifies how predictions would be presented if they were made.
   */
  ariaAutoComplete?: 'inline' | 'list' | 'both' | 'none' | string;
  /**
   *The ariaBusy property of the Element interface reflects the value of the aria-busy attribute, which indicates whether an element is being modified, as assistive technologies may want to wait until the modifications are complete before exposing them to the user.
   */
  ariaBusy?: 'true' | 'false';
  /**
   * A string reflecting the aria-checked attribute, which indicates the current "checked" state of checkboxes, radio buttons, and other widgets that have a checked state.
   */
  ariaChecked?: 'true' | 'false' | 'mixed';
  /**
   * A number reflecting the aria-colcount attribute, which defines the number of columns in a table, grid, or treegrid.
   */
  ariaColCount?: number;
  /**
   * A number reflecting the aria-colindex attribute, which defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   */
  ariaColIndex?: number;
  /**
   * A string reflecting the aria-colindextext attribute, which defines a human-readable text alternative of aria-colindex.
   */
  ariaColIndexText?: string;
  /**
   * A number reflecting the aria-colspan attribute, which defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   */
  ariaColSpan?: number;
  /**
   * A string reflecting the aria-current attribute, which indicates the element that represents the current item within a container or set of related elements.
   */
  ariaCurrent?:
    | 'page'
    | 'step'
    | 'location'
    | 'date'
    | 'time'
    | 'true'
    | 'false';
  /**
   * A string reflecting the aria-description attribute, which defines a string value that describes or annotates the current element.
   */
  ariaDescription?: string;
  /**
   * A string reflecting the aria-disabled attribute, which indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   */
  ariaDisabled?: 'true' | 'false';
  /**
   * A string reflecting the aria-expanded attribute, which indicates whether a grouping element owned or controlled by this element is expanded or collapsed.
   */
  ariaExpanded?: 'true' | 'false' | 'undefined';
  /**
   * A string reflecting the aria-haspopup attribute, which indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.
   */
  ariaHasPopup?:
    | 'true'
    | 'false'
    | 'menu'
    | 'listbox'
    | 'tree'
    | 'grid'
    | 'dialog';
  /**
   * A string reflecting the aria-hidden attribute, which indicates whether the element is exposed to an accessibility API.
   */
  ariaHidden?: 'true' | 'false' | 'undefined';
  /**
   * A string reflecting the aria-keyshortcuts attribute, which indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
   */
  ariaKeyShortCuts?: string;
  /**
   * A string reflecting the aria-label attribute, which defines a string value that labels the current element.
   */
  ariaLabel?: string;
  /**
   * A number reflecting the aria-level attribute, which defines the hierarchical level of an element within a structure.
   */
  ariaLevel?: number;
  /**
   * A string reflecting the aria-live attribute, which indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region.
   */
  ariaLive?: 'assertive' | 'off' | 'polite';
  /**
   * A string reflecting the aria-modal attribute, which indicates whether an element is modal when displayed.
   */
  ariaModal?: 'true' | 'false';
  /**
   * A string reflecting the aria-multiline attribute, which indicates whether a text box accepts multiple lines of input or only a single line.
   */
  ariaMultiline?: 'true' | 'false';
  /**
   * A string reflecting the aria-multiselectable attribute, which indicates that the user may select more than one item from the current selectable descendants.
   */
  ariaMultiSelectable?: 'true' | 'false';
  /**
   * A string reflecting the aria-orientation attribute, which indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
   */
  ariaOrientation?: 'horizontal' | 'vertical' | 'undefined';
  /**
   * A string reflecting the aria-placeholder attribute, which defines a short hint intended to aid the user with data entry when the control has no value.
   */
  ariaPlaceholder?: string;
  /**
   * A number reflecting the aria-posinset attribute, which defines an element's number or position in the current set of listitems or treeitems.
   */
  ariaPosInSet?: number;
  /**
   * A string reflecting the aria-pressed attribute, which indicates the current "pressed" state of toggle buttons.
   */
  ariaPressed?: 'true' | 'false' | 'mixed' | 'undefined';
  /**
   * A string reflecting the aria-readonly attribute, which indicates that the element is not editable, but is otherwise operable.
   */
  ariaReadOnly?: 'true' | 'false';
  /**
   * A string reflecting the aria-relevant attribute, which indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. This is used to describe what changes in an aria-live region are relevant and should be announced.
   */
  ariaRelevant?: 'additions' | 'removals' | 'text' | 'all';
  /**
   * A string reflecting the aria-required attribute, which indicates that user input is required on the element before a form may be submitted.
   */
  ariaRequired?: 'true' | 'false';
  /**
   * A string reflecting the aria-roledescription attribute, which defines a human-readable, author-localized description for the role of an element.
   */
  ariaRoleDescription?: string;
  /**
   * A string reflecting the aria-rowcount attribute, which defines the total number of rows in a table, grid, or treegrid.
   */
  ariaRowCount?: number;
  /**
   * A string reflecting the aria-rowindex attribute, which defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   */
  ariaRowIndex?: number;
  /**
   * A string reflecting the aria-rowindextext attribute, which defines a human-readable text alternative of aria-rowindex.
   */
  ariaRowIndexText?: string;
  /**
   * A number reflecting the aria-rowspan attribute, which defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   */
  ariaRowSpan?: number;
  /**
   * A string reflecting the aria-selected attribute, which indicates the current "selected" state of elements that have a selected state.
   */
  ariaSelected?: 'true' | 'false' | 'undefined';
  /**
   * A number reflecting the aria-setsize attribute, which defines the number of items in the current set of listitems or treeitems.
   */
  ariaSetSize?: number;
  /**
   * A string reflecting the aria-sort attribute, which indicates if items in a table or grid are sorted in ascending or descending order.
   */
  ariaSort?: 'ascending' | 'descending' | 'none' | 'other';
  /**
   * A number reflecting the aria-valueMax attribute, which defines the maximum allowed value for a range widget.
   */
  ariaValueMax?: number;
  /**
   * A number reflecting the aria-valueMin attribute, which defines the minimum allowed value for a range widget.
   */
  ariaValueMin?: number;
  /**
   * A number reflecting the aria-valueNow attribute, which defines the current value for a range widget.
   */
  ariaValueNow?: number;
  /**
   * A string reflecting the aria-valuetext attribute, which defines the human-readable text alternative of aria-valuenow for a range widget.
   */
  ariaValueText?: string;
  /**
   * Controls whether and how text input is automatically capitalized as it is entered/edited by the user. It can have the following values:
   *  - `off` or `none`, no autocapitalization is applied (all letters default to lowercase)
   *  - `on` or `sentences`, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase
   *  - `words`, the first letter of each word defaults to a capital letter; all other letters default to lowercase
   *  - `characters`, all letters should default to uppercase
   */
  autocapitalize?:
    | 'off'
    | 'none'
    | 'on'
    | 'sentences'
    | 'words'
    | 'characters'
    | string;
  /**
   * Indicates that an element is to be focused on page load, or as soon as the <dialog> it is part of is displayed. This attribute is a boolean, initially false.
   */
  autofocus?: boolean;
  /**
   * An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:
   *  - `true` or the empty string, which indicates that the element must be editable;
   *  - `false`, which indicates that the element must not be editable.
   */
  contentEditable?: boolean;
  /**
   * A string, reflecting the dir global attribute, representing the directionality of the element. Possible values are "ltr", "rtl", and "auto".
   */
  dir?: 'ltr' | 'rtl' | 'auto';
  /**
   * A boolean value indicating if the element can be dragged.
   */
  draggable?: boolean;
  /**
   * A string defining what action label (or icon) to present for the enter key on virtual keyboards.
   */
  enterKeyHint?: EnterKeyHint;
  /**
   * A boolean value indicating if the element is hidden or not.
   */
  hidden?: boolean;
  /**
   * Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on `<input>` elements, but is usable on any element while in contenteditable mode.
   */
  inputMode?:
    | 'none'
    | 'text'
    | 'decimal'
    | 'numeric'
    | 'tel'
    | 'search'
    | 'email'
    | 'url';
  /**
   * Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see Using custom elements for more details).
   */
  is?: string;
  /**
   * A boolean value indicating whether the user agent must act as though the given node is absent for the purposes of user interaction events, in-page text searches ("find in page"), and text selection.
   */
  inert?: boolean;
  /**
   * Represents the rendered text content of a node and its descendants. As a getter, it approximates the text the user would get if they highlighted the contents of the element with the cursor and then copied it to the clipboard. As a setter, it replaces the content inside the selected element, converting any line breaks into `<br>` elements.
   */
  innerText?: string;
  /**
   * A string representing the markup of the element's content.
   */
  innerHTML?: string;
  /**
   * A string representing the language of an element's attributes, text, and element contents.
   */
  lang?: string;
  /**
   * A cryptographic nonce ("number used once") which can be used by Content Security Policy to determine whether a given fetch will be allowed to proceed.
   */
  nonce?: string;
  /**
   * Represents the rendered text content of a node and its descendants. As a getter, it is the same as HTMLElement.innerText (it represents the rendered text content of an element and its descendants). As a setter, it replaces the selected node and its contents with the given value, converting any line breaks into `<br>` elements.
   */
  outerText?: string;
  /**
   * A string representing the markup of the element including its content. When used as a setter, replaces the element with nodes parsed from the given string.
   */
  outerHTML?: string;
  /**
   * Represents the part identifier(s) of the element (i.e. set using the `part` attribute), returned as a DOMTokenList.
   */
  part?: string;
  /**
   * A number representing the left scroll offset of the element.
   */
  scrollLeft?: number;
  /**
   * A number representing number of pixels the top of the element is scrolled vertically.
   */
  scrollTop?: number;
  /**
   * Returns the name of the shadow DOM slot the element is inserted in.
   */
  slot?: string;
  /**
   * An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:
   * - `true`, which indicates that the element should be, if possible, checked for spelling errors;
   * - `false`, which indicates that the element should not be checked for spelling errors.
   */
  spellcheck?: boolean;
  /**
   * A `long` representing the position of the element in the tabbing order.
   */
  tabIndex?: number;
  /**
   * A string containing the text that appears in a popup box when mouse is over the element.
   */
  title?: string;
  /**
   * A boolean value representing the translation.
   */
  translate?: boolean;
  /**
   * The `abort` event is fired when the resource was not fully loaded, but not as the result of an error.
   * This event is not cancelable and does not bubble.
   */
  onabort?: (this: HTMLElement, event: Event) => void;
  /**
   * Fired when a non-primary pointing device button (e.g., any mouse button other than the left button) has been pressed and released on an element. Also, available via the onauxclick property.
   */
  onuxclick?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * The `blur` event is fired when an element has lost focus. The focus event is sent to an element when it gains focus. The blur event does not bubble, but focus does.
   */
  onblur?: (this: HTMLElement, event: FocusEvent) => void;
  /**
   * The `contextmenu` event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.
   * In the latter case, the context menu is displayed at the bottom left of the focused element, unless the element is a tree, in which case the context menu is displayed at the bottom left of the current row.
   * Any right-click event that is not disabled (by calling the event's
   * ```js
   * preventDefault()
   * ```
   * method) will result in a `contextmenu` event being fired at the targeted element.
   */
  oncontextmenu?: (this: Node, event: MouseEvent) => void;
  /**
   * Fired when the user initiates a copy action through the browser's user interface. Also, available via the oncopy property.
   */
  oncopy?: (this: HTMLElement, event: ClipboardEvent) => void;
  /**
   * Fired when a pointing device button (e.g., a mouse's primary button) is pressed and released on a single element. Also, available via the onclick property.
   */
  onclick?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when the user initiates a cut action through the browser's user interface. Also, available via the oncut property.
   */
  oncut?: (this: HTMLElement, event: ClipboardEvent) => void;
  /**
   * Fired when a pointing device button (e.g., a mouse's primary button) is clicked twice on a single element. Also, available via the ondblclick property.
   */
  ondblclick?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * The `formdata` event fires after the entry list representing the form's data is constructed. This happens when the form is submitted, but can also be triggered by the invocation of a `FormData()` constructor.
   */
  onformdata?: (this: Node, event: FormDataEvent) => void;
  /**
   * The `focus` event is fired when an element has received focus. The focus event is sent to an element when it gains focus. The blur event does not bubble, but focus does.
   */
  onfocus?: (this: HTMLElement, event: FocusEvent) => void;
  /**
   * Fired when a pointing device button is pressed on an element. Also, available via the onmousedown property.
   */
  onmousedown?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when a pointing device (usually a mouse) is moved over the element that has the listener attached. Also, available via the onmouseenter property.
   */
  onmouseenter?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when the pointer of a pointing device (usually a mouse) is moved out of an element that has the listener attached to it. Also, available via the onmouseleave property.
   */
  onmouseleave?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when a pointing device (usually a mouse) is moved while over an element. Also, available via the onmousemove property.
   */
  onmousemove?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when a pointing device (usually a mouse) is moved off the element to which the listener is attached or off one of its children. Also, available via the onmouseout property.
   */
  onmouseout?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when a pointing device is moved onto the element to which the listener is attached or onto one of its children. Also, available via the onmouseover property.
   */
  onmouseover?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when a pointing device button is released on an element. Also, available via the onmouseup property.
   */
  onmouseup?: (this: HTMLElement, event: MouseEvent) => void;
  /**
   * Fired when the user initiates a paste action through the browser's user interface. Also, available via the onpaste property.
   */
  onpaste?: (this: HTMLElement, event: ClipboardEvent) => void;
  /**
   * An event handler representing the code to be called when the `progress` event is raised.
   */
  onprogress?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `ratechange` event is raised.
   */
  onratechange?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `seeked` event is raised.
   */
  onseeked?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `seeking` event is raised.
   */
  onseeking?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `stalled` event is raised.
   */
  onstalled?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `suspend` event is raised.
   */
  onsuspend?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `timeupdate` event is raised.
   */
  ontimeupdate?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `volumechange` event is raised.
   */
  onvolumechange?: (this: Node, event: Event) => void;
  /**
   * An event handler representing the code to be called when the `waiting` event is raised.
   */
  onwaiting?: (this: Node, event: Event) => void;
  /**
   * An event handler executed on touch start.
   */
  ontouchstart?: (this: Node, event: TouchEvent) => void;
  /**
   * An event handler executed on touch move.
   */
  ontouchmove?: (this: Node, event: TouchEvent) => void;
  /**
   * An event handler executed on touch end.
   */
  ontouchend?: (this: Node, event: TouchEvent) => void;
  /**
   * An event handler executed on touch cancel.
   */
  ontouchcancel?: (this: Node, event: TouchEvent) => void;

  /**
   * attributes of the HTMLElement
   */
  [key: string]: any;
}

interface HTMLAudioElementAttributes extends HTMLElementAttributes {
  /**
   * A Boolean attribute; if specified, the video automatically begins to play back as soon as it can without stopping to finish loading the data.
   * To disable video autoplay, autoplay="false" will not work; the video will autoplay if the attribute is there in the <video> tag at all. To remove autoplay, the attribute needs to be removed altogether.
   *
   * **Note**: Modern browsers block audio (or videos with an unmuted audio track) from autoplaying, as sites that automatically play audio can be an unpleasant experience for users. See our autoplay guide for additional information about how to properly use autoplay.
   */
  autoplay?: boolean;
  /**
   * If this attribute is present, the browser will offer controls to allow the user to control video playback, including volume, seeking, and pause/resume playback.
   */
  controls?: boolean;
  /**
   * A space-separated list of strings that indicate which media controls the user agent is allowed to use. The values are:
   * - nodownload: The user agent should not allow the user to download the video.
   * - nofullscreen: The user agent should not allow the user to enter fullscreen mode.
   * - noremoteplayback: The user agent should not allow remote playback of the video.
   * - none: No controls are allowed.
   */
  controlsList?:
    | 'nodownload'
    | 'nofullscreen'
    | 'noremoteplayback'
    | 'none'
    | string;
  /**
   * This enumerated attribute indicates whether to use CORS to fetch the related video. CORS-enabled resources can be reused in the <canvas> element without being tainted.
   */
  crossOrigin?: 'anonymous' | 'use-credentials' | string;
  /**
   * Prevents the browser from suggesting a Picture-in-Picture context menu or to request Picture-in-Picture automatically in some cases.
   */
  disablePictureInPicture?: boolean;
  /**
   * Prevents the browser from suggesting a remote playback context menu or to request remote playback automatically in some cases.
   */
  disableRemotePlayback?: boolean;
  /**
   * The height of the video's display area, in CSS pixels (absolute values only; no percentages).
   */
  height?: number;
  /**
   * A Boolean attribute; if specified, the browser will automatically seek back to the start upon reaching the end of the video.
   */
  loop?: boolean;
  /**
   * A Boolean attribute that indicates the default audio mute setting contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning the audio will be played when the video is played.
   */
  muted?: boolean;
  /**
   * A Boolean attribute indicating that the video is to be played "inline", that is, within the element's playback area. Note that the absence of this attribute does not imply that the video will always be played in fullscreen.
   */
  playsInline?: boolean;
  /**
   * A URL for an image to be shown while the video is downloading. If this attribute isn't specified, nothing is displayed until the first frame is available, then the first frame is shown as the poster frame.
   */
  poster?: string;
  /**
   * The preload attribute is a hint to the browser about what the author thinks will lead to the best user experience. It can have one of the following values:
   * - none: The browser should not preload the video.
   * - metadata: The browser should preload only metadata (e.g., duration, dimensions, etc.) of the video.
   * - auto: The browser should preload the entire video.
   */
  preload?: 'none' | 'metadata' | 'auto';
  /**
   * The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed.
   */
  src?: string;
  /**
   * The width of the video's display area, in CSS pixels (absolute values only; no percentages).
   */
  width?: number;
}

interface HTMLAnchorElementAttributes extends HTMLElementAttributes {
  /**
   * The URL of the page the link goes to.
   */
  href?: string;
  /**
   * The text to display for the link.
   */
  hrefLang?: string;
  /**
   * The relationship between the current document and the linked document.
   */
  ping?: string;
  /**
   * The text to display for the link.
   */
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
  /**
   * The target attribute specifies where to open the linked document.
   */
  target?: '_blank' | '_self' | '_parent' | '_top' | '_unfencedTop' | string;
  /**
   * The rel attribute specifies the relationship between the current document and the linked document.
   */
  rel?: string;
  /**
   * The download attribute specifies that the target will be downloaded when a user clicks on the hyperlink.
   */
  download?: string;
}

interface HTMLButtonElementAttributes extends HTMLElementAttributes {
  /**
   * This Boolean attribute specifies that the button should have input focus when the page loads. Only one element in a document can have this attribute.
   */
  autofocus?: boolean;
  /**
   * Specifies the action to be performed on an element being controlled by a control <button>, specified via the commandfor attribute.
   */
  command?:
    | 'show-modal'
    | 'close'
    | 'request-close'
    | 'show-popover'
    | 'hide-popover'
    | 'toggle-popover'
    | string;
  /**
   * Turns a <button> element into a command button, controlling the given interactive element; takes the ID of the element to control as its value. This is a more general version of popovertarget.
   */
  commandFor?: string;
  /**
   * The <form> element to associate the button with (its form owner). The value of this attribute must be the id of a <form> in the same document. (If this attribute is not set, the <button> is associated with its ancestor <form> element, if any.)
   * This attribute lets you associate <button> elements to <form>s anywhere in the document, not just inside a <form>. It can also override an ancestor <form> element.
   */
  form?: string;
  /**
   * The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner. Does nothing if there is no form owner.
   */
  formAction?: string;
  /**
   * If the button is a submit button (it's inside/associated with a <form> and doesn't have type="button"), specifies how to encode the form data that is submitted.
   * If this attribute is specified, it overrides the enctype attribute of the button's form owner.
   */
  formEncType?:
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain';
  /**
   * If the button is a submit button (it's inside/associated with a <form> and doesn't have type="button"), specifies how to submit the form data.
   * If this attribute is specified, it overrides the method attribute of the button's form owner.
   */
  formMethod?: 'get' | 'post';
  /**
   * If the button is a submit button (it's inside/associated with a <form> and doesn't have type="button"), specifies where to display the response that is received after submitting the form.
   * If this attribute is specified, it overrides the target attribute of the button's form owner.
   */
  formNoValidate?: boolean;
  /**
   * If the button is a submit button (it's inside/associated with a <form> and doesn't have type="button"), specifies whether the form data should be validated when the form is submitted.
   * If this attribute is specified, it overrides the novalidate attribute of the button's form owner.
   */
  formTarget?:
    | '_blank'
    | '_self'
    | '_parent'
    | '_top'
    | '_unfencedTop'
    | string;
  /**
   * Turns a <button> element into a popover control button; takes the ID of the popover element to control as its value. Establishing a relationship between a popover and its invoker button using the popovertarget attribute has two additional useful effects:
   *
   * - The browser creates an implicit aria-details and aria-expanded relationship between popover and invoker, and places the popover in a logical position in the keyboard focus navigation order when shown. This makes the popover more accessible to keyboard and assistive technology (AT) users (see also Popover accessibility features).
   * - The browser creates an implicit anchor reference between the two, making it very convenient to position popovers relative to their controls using CSS anchor positioning. See Popover anchor positioning for more details.
   */
  popoverTarget?: string;
  /**
   * The action to perform on the popover target when the button is clicked.
   * Possible values are "hide", "show", "toggle", or a custom string.
   */
  popoverTargetAction?: 'hide' | 'show' | 'toggle' | string;
  /**
   * The type of the button.
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * The name of the button.
   */
  name?: string;
  /**
   * The value of the button.
   */
  value?: string;
  /**
   * Indicates whether the button is disabled.
   */
  disabled?: boolean;
}

interface HTMLCanvasElementAttributes extends HTMLElementAttributes {
  /**
   * The width of the canvas.
   */
  width?: number;
  /**
   * The height of the canvas.
   */
  height?: number;
}

interface HTMLEmbedElementAttributes extends HTMLElementAttributes {
  /**
   * The URL of the resource to embed.
   */
  src?: string;
  /**
   * The type of the embedded content.
   */
  type?: string;
  /**
   * The width of the embedded content.
   */
  width?: number;
  /**
   * The height of the embedded content.
   */
  height?: number;
}

interface HTMLFormElementAttributes extends HTMLElementAttributes {
  /**
   * The character encoding accepted by the server. The specification allows a single case-insensitive value of "UTF-8", reflecting the ubiquity of this encoding (historically multiple character encodings could be specified as a comma-separated or space-separated list).
   */
  acceptCharset?: 'utf-8' | string;
  /**
   * The autocomplete attribute indicates whether the browser should enable autocomplete for the form. It can have the following values:
   * - `on`: enables autocomplete;
   * - `off`: disables autocomplete.
   */
  autocomplete?: 'on' | 'off' | string;
  /**
   * The name of the form. The value must not be the empty string, and must be unique among the form elements in the forms collection that it is in, if any.
   */
  name?: string;
  /**
   * Controls the annotations and what kinds of links the form creates. Annotations include external, nofollow, opener, noopener, and noreferrer. Link types include help, prev, next, search, and license. The rel value is a space-separated list of these enumerated values.
   */
  rel?: string;
  /**
   * The action attribute specifies where to send the form-data when a form is submitted.
   */
  action?: string;
  /**
   * If the value of the method attribute is post, enctype is the MIME type of the form submission. Possible values:
   * - application/x-www-form-urlencoded: The default value.
   * - multipart/form-data: Use this if the form contains <input> elements with type=file.
   * - text/plain: Useful for debugging purposes.
   * This value can be overridden by formenctype attributes on <button>, <input type="submit">, or <input type="image"> elements.
   */
  enctype?:
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain';
  /**
   * The method attribute specifies how to send form-data (the form-data is sent to the page specified in the action attribute).
   */
  method?: 'get' | 'post' | 'dialog';
  /**
   * This Boolean attribute indicates that the form shouldn't be validated when submitted. If this attribute is not set (and therefore the form is validated), it can be overridden by a formnovalidate attribute on a <button>, <input type="submit">, or <input type="image"> element belonging to the form.
   */
  noValidate?: boolean;
  /**
   * The target attribute specifies where to display the response that is received after submitting the form.
   * Possible values:
   * - _blank: The response is displayed in a new window or tab.
   * - _self: The response is displayed in the same frame as it was submitted (this is default).
   * - _parent: The response is displayed in the parent frame.
   * - _top: The response is displayed in the full body of the window.
   * - _unfencedTop: The response is displayed in the top-level browsing context, but not in a fenced frame.
   */
  target?: '_blank' | '_self' | '_parent' | '_top' | '_unfencedTop' | string;
}

interface HTMLIFrameElementAttributes extends HTMLElementAttributes {
  /**
   * The URL of the page to embed in the iframe.
   */
  src?: string;
  /**
   * Inline HTML content to embed in the iframe.
   */
  srcdoc?: string;
  /**
   * The name of the iframe.
   */
  name?: string;
  /**
   * The width of the iframe.
   */
  width?: number;
  /**
   * The height of the iframe.
   */
  height?: number;
  /**
   * Indicates whether the iframe should be sandboxed.
   */
  allow?: string;
  /**
   * Indicates whether the iframe should allow fullscreen mode.
   */
  allowFullScreen?: boolean;
  /**
   * Indicates whether the iframe should be loading lazily.
   */
  loading?: 'eager' | 'lazy';
  /**
   * The referrer policy for the iframe.
   */
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
  /**
   * Controls the restrictions applied to the content embedded in the <iframe>. The value of the attribute can either be empty to apply all restrictions, or space-separated tokens to lift particular restrictions
   */
  sandbox?: DOMTokenList;
}

interface HTMLImageElementAttributes extends HTMLElementAttributes {
  /**
   * The alternative text for the image.
   */
  alt?: string;
  /**
   * The cross-origin attribute specifies how the element handles cross-origin requests. It can have the following values:
   * - `anonymous`: The request is made without credentials (cookies, HTTP authentication, and client-side SSL certificates).
   * - `use-credentials`: The request is made with credentials.
   * - `null`: No cross-origin request is made.
   */
  crossOrigin?: 'anonymous' | 'use-credentials' | null;
  /**
   * The decoding attribute specifies how the browser should decode the image. It can have the following values:
   * - `async`: The image is decoded asynchronously.
   * - `sync`: The image is decoded synchronously.
   * - `auto`: The browser decides how to decode the image.
   */
  decoding?: 'async' | 'sync' | 'auto';
  /**
   * Marks the image for observation by the PerformanceElementTiming API. The value given becomes an identifier for the observed image element. See also the elementtiming attribute page.
   */
  elementTiming?: string;
  /**
   * The fetch priority of the image. It can have the following values:
   * - `low`: The image is fetched with low priority.
   * - `high`: The image is fetched with high priority.
   * - `auto`: The browser decides the priority.
   */
  fetchPriority?: 'low' | 'high' | 'auto';
  /**
   * This Boolean attribute indicates that the image is part of a server-side map. If so, the coordinates where the user clicked on the image are sent to the server.
   */
  isMap?: boolean;
  /**
   * Indicates how the browser should load the image:
   *
   * - **eager**
   * Loads the image immediately, regardless of whether the image is currently within the visible viewport (this is the default value).
   *
   * - **lazy**
   * Defers loading the image until it reaches a calculated distance from the viewport, as defined by the browser. The intent is to avoid the network and storage bandwidth needed to handle the image until it's reasonably certain that it will be needed. This generally improves the performance of the content in most typical use cases.
   */
  loading?: 'eager' | 'lazy';
  /**
   * The referrer policy for the image.
   */
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
  /**
   * The sizes attribute specifies the sizes of the image for different viewport widths. It is used in conjunction with the srcset attribute to provide responsive images.
   */
  sizes?: 'auto' | string;
  /**
   * The URL of the image.
   */
  src?: string;
  /**
   * The srcset attribute specifies a set of images to use in different situations, such as different screen resolutions or viewport sizes. It is used to provide responsive images.
   */
  srcset?: string;
  /**
   * The width of the image.
   */
  width?: number;
  /**
   * The height of the image.
   */
  height?: number;
  /**
   * The partial URL (starting with #) of an image map associated with the element.
   */
  useMap?: string;
}

interface HTMLInputElementAttributes extends HTMLElementAttributes {
  /**
   * The type of the input element.
   */
  type?:
    | 'button'
    | 'checkbox'
    | 'color'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'file'
    | 'hidden'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'radio'
    | 'range'
    | 'reset'
    | 'search'
    | 'submit'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week';
  /**
   * Hint for expected file type in file upload controls
   */
  accept?: string;
  /**
   * The URL of the image to display for the input element when type is "image".
   */
  alt?: string;
  /**
   * Hint for form autofill feature
   */
  autocomplete?: 'on' | 'off' | string;
  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.
   */
  autoFocus?: boolean;
  /**
   * Media capture input method in file upload controls
   */
  capture?:
    | 'user'
    | 'environment'
    | 'microphone'
    | 'camera'
    | 'camcorder'
    | 'camera-and-microphone';
  /**
   * Whether the command or control is checked
   */
  checked?: boolean;
  /**
   * Name of form field to use for sending the element's directionality in form submission
   */
  dirname?: string;
  /**
   * Indicates whether the input is disabled.
   */
  disabled?: boolean;
  /**
   * The name of the input element.
   */
  /**
   * Associates the control with a form element
   */
  form?: string;
  /**
   * URL to use for form submission
   */
  formAction?: string;
  /**
   * The encoding type to use for form submission
   */
  formEncType?:
    | 'application/x-www-form-urlencoded'
    | 'multipart/form-data'
    | 'text/plain';
  /**
   * The HTTP method to use for form submission
   */
  formMethod?: 'get' | 'post' | 'dialog';
  /**
   * Whether to validate the form when it is submitted
   */
  formNoValidate?: boolean;
  /**
   * Whether to validate the form when it is submitted
   */
  formTarget?: string;
  /**
   * The height of the input element.
   */
  height?: number;
  /**
   * The value given to the list attribute should be the id of a <datalist> element located in the same document. The <datalist> provides a list of predefined values to suggest to the user for this input. Any values in the list that are not compatible with the type are not included in the suggested options. The values provided are suggestions, not requirements: users can select from this predefined list or provide a different value.
   *
   * It is valid on text, search, url, tel, email, date, month, week, time, datetime-local, number, range, and color.
   *
   * Per the specifications, the list attribute is not supported by the hidden, password, checkbox, radio, file, or any of the button types.
   *
   * Depending on the browser, the user may see a custom color palette suggested, tic marks along a range, or even an input that opens like a <select> but allows for non-listed values. Check out the browser compatibility table for the other input types.
   */
  list?: string;
  /**
   * The maximum value for the input element.
   */
  max?: string | number;
  /**
   * The maximum number of characters allowed in the input element.
   */
  maxLength?: number;
  /**
   * The minimum value for the input element.
   */
  min?: string | number;
  /**
   * The minimum number of characters allowed in the input element.
   */
  minLength?: number;
  /**
   * Boolean. Whether to allow multiple values
   */
  multiple?: boolean;
  /**
   * The name of the input element.
   */
  name?: string;
  /**
   * The pattern attribute specifies a regular expression that the input's value is checked against. If the value does not match the pattern, the form will not submit.
   */
  pattern?: string;
  /**
   * The placeholder text for the input element.
   */
  placeholder?: string;
  /**
   * Designates an <input type="button"> as a control for a popover element
   */
  popoverTarget?: string;
  /**
   * The action to perform on the popover target when the input element is clicked.
   * Possible values are "hide", "show", "toggle", or a custom string.
   */
  popoverTargetAction?: 'hide' | 'show' | 'toggle' | string;
  /**
   * Boolean. The value is not editable
   */
  readonly?: boolean;
  /**
   * Boolean. A value is required or must be checked for the form to be submittable
   */
  required?: boolean;
  /**
   * The size of the input element, in characters.
   * For text, search, url, tel, email, password, and number types.
   */
  size?: number;
  /**
   * Same as src attribute for <img>; address of image resource
   */
  src?: string;
  /**
   * The step attribute specifies the legal number intervals for an input field. It is used with the number, range, date, time, and datetime-local input types.
   * If the value is not a valid number or does not match the step interval, the form will not submit.
   */
  step?: string | number;
  /**
   * The value of the input element.
   */
  value?: string | number | boolean;
  /**
   * The width of the input element.
   */
  width?: number;
  /**
   * Event handler for input event. @see https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event
   */
  oninput?: (this: HTMLElement, event: Event) => void;
  /**
   * Event handler for change event. @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
   */
  onchange?: (this: HTMLElement, event: Event) => void;
  /**
   * Event handler for invalid event. @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/invalid_event
   */
  oninvalid?: (this: HTMLElement, event: Event) => void;
}

interface HTMLLinkElementAttributes extends HTMLElementAttributes {
  /**
   * The URL of the linked resource.
   */
  href?: string;
  /**
   * The relationship between the current document and the linked resource.
   */
  rel?: string;
  /**
   * The media type of the linked resource.
   */
  type?: string;
  /**
   * The hreflang attribute specifies the language of the linked resource.
   */
  hreflang?: string;
  /**
   * The sizes attribute specifies the size of icons for visual media.
   */
  sizes?: string;
  /**
   * This attribute explicitly indicates that certain operations should be blocked on the fetching of the script. The operations that are to be blocked must be a space-separated list of blocking tokens listed below.
   * - render: The rendering of content on the screen is blocked.
   */
  blocking?: 'render' | string;
  /**
   * For rel="stylesheet" only, the disabled Boolean attribute indicates whether the described stylesheet should be loaded and applied to the document. If disabled is specified in the HTML when it is loaded, the stylesheet will not be loaded during page load. Instead, the stylesheet will be loaded on-demand, if and when the disabled attribute is changed to false or removed.
   *
   * Setting the disabled property in the DOM causes the stylesheet to be removed from the document's Document.styleSheets list.
   */
  disabled?: boolean;
  /**
   * For rel="preload" and as="image" only, the imagesizes attribute has similar syntax and semantics as the sizes attribute that indicates to preload the appropriate resource used by an img element with corresponding values for its srcset and sizes attributes.
   */
  imageSizes?: string;
  /**
   * For rel="preload" and as="image" only, the imagesrcset attribute has similar syntax and semantics as the srcset attribute that indicates to preload the appropriate resource used by an img element with corresponding values for its srcset and sizes attributes.
   */
  imagesSrcset?: string;
  /**
   * This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered without unexpected manipulation. The attribute must not be specified when the src attribute is absent.
   */
  integrity?: string;
  /**
   * This attribute defines which media the style should be applied to. Its value is a media query, which defaults to all if the attribute is missing.
   */
  media?: string;
  /**
   * Normal script elements pass minimal information to the window.onerror for scripts which do not pass the standard CORS checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See CORS settings attributes for a more descriptive explanation of its valid arguments.
   */
  crossOrigin?: 'anonymous' | 'use-credentials' | string;
  /**
   * Provides a hint of the relative priority to use when fetching an external script. Allowed values:
   *
   * - high
   * Fetch the external script at a high priority relative to other external scripts.
   *
   * - low
   * Fetch the external script at a low priority relative to other external scripts.
   *
   * - auto
   * Don't set a preference for the fetch priority. This is the default. It is used if no value or an invalid value is set.
   */
  fetchPriority?: 'low' | 'high' | 'auto';
  /**
   * Indicates which referrer to send when fetching the script, or resources fetched by the script
   */
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
}

interface HTMLListElementAttributes extends HTMLElementAttributes {
  /**
   * This integer attribute indicates the current ordinal value of the list item as defined by the <ol> element. The only allowed value for this attribute is a number, even if the list is displayed with Roman numerals or letters. List items that follow this one continue numbering from the value set. This attribute has no meaning for unordered lists (<ul>) or for menus (<menu>).
   */
  value?: number;
}

interface HTMLMetaElementAttributes extends HTMLElementAttributes {
  /**
   * This attribute declares the document's character encoding. If the attribute is present, its value must be an ASCII case-insensitive match for the string "utf-8", because UTF-8 is the only valid encoding for HTML5 documents. <meta> elements which declare a character encoding must be located entirely within the first 1024 bytes of the document.
   */
  charset?: 'utf-8' | string;
  /**
   * This attribute contains the value for the http-equiv or name attribute, depending on which is used.
   */
  content?: string;
  /**
   * Defines a pragma directive. The attribute's name, short for http-equivalent
   */
  httpEquiv?:
    | 'content-language'
    | 'default-style'
    | 'refresh'
    | 'content-security-policy'
    | 'content-security-policy-report-only'
    | 'x-ua-compatible'
    | 'set-cookie'
    | string;
  /**
   * The media attribute defines which media the theme color defined in the content attribute should be applied to. Its value is a media query, which defaults to all if the attribute is missing. This attribute is only relevant when the element's name attribute is set to theme-color. Otherwise, it has no effect, and should not be included.
   */
  media?: string;
  /**
   * The name and content attributes can be used together to provide document metadata in terms of name-value pairs, with the name attribute giving the metadata name, and the content attribute giving the value.
   */
  name?: string;
}

interface HTMLTextAreaElementAttributes extends HTMLElementAttributes {
  /**
   * Controls whether entered text can be automatically completed by the browser. Possible values are:
   * - off: The user must explicitly enter a value into this field for every use, or the document provides its own auto-completion method; the browser does not automatically complete the entry.
   * - on: The browser can automatically complete the value based on values that the user has entered during previous uses.
   * - <token-list>: An ordered set of space-separated autofill detail tokens, optionally preceded by a sectioning token, a billing or shipping grouping token, and/or a token identifying the type of recipient.
   *
   * <textarea> elements that don't specify the autocomplete attribute inherit the autocomplete on or off status set on the <textarea>'s form owner. The form owner is either the <form> element that this <textarea> element is a descendant of or the form element whose id is specified by the form attribute of the input element. For more information, see the autocomplete attribute in <form>.
   */
  autocomplete?: 'on' | 'off' | string;
  /**
   * Controls whether automatic spelling correction and processing of text is enabled while the user is editing this textarea. Permitted values are:
   *
   * - on
   * Enable automatic spelling correction and text substitutions.
   *
   * - off
   * Disable automatic spelling correction and text substitutions.
   */
  autocorrect?: 'off' | 'on';
  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form-associated element in a document can have this attribute specified.
   */
  autofocus?: boolean;
  /**
   * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer. If it is not specified, the default value is 20.
   */
  cols?: number;
  /**
   * This attribute is used to indicate the text directionality of the element contents. For more information, see the dirname attribute.
   */
  dirname?: string;
  /**
   * This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element when the disabled attribute is set, the control is enabled.
   */
  disabled?: boolean;
  /**
   * The form element that the <textarea> element is associated with (its "form owner"). The value of the attribute must be the id of a form element in the same document. If this attribute is not specified, the <textarea> element must be a descendant of a form element. This attribute enables you to place <textarea> elements anywhere within a document, not just as descendants of form elements.
   */
  form?: string;
  /**
   * The maximum string length (measured in UTF-16 code units) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.
   */
  maxLength?: number;
  /**
   * The minimum string length (measured in UTF-16 code units) that the user can enter. If this value isn't specified, the user can enter an unlimited number of characters.
   */
  minLength?: number;
  /**
   * The name of the textarea element.
   */
  name?: string;
  /**
   * A hint to the user of what can be entered in the control. Carriage returns or line-feeds within the placeholder text must be treated as line breaks when rendering the hint.
   */
  placeholder?: string;
  /**
   * This Boolean attribute indicates that the user cannot modify the value of the control. Unlike the disabled attribute, the readonly attribute does not prevent the user from clicking or selecting in the control. The value of a read-only control is still submitted with the form.
   */
  readonly?: boolean;
  /**
   * This Boolean attribute indicates that the user must fill in a value before submitting a form. If this attribute is not specified, the control is not required.
   */
  required?: boolean;
  /**
   * The number of visible text lines for the control. If it is specified, it must be a positive integer. If it is not specified, the default value is 2.
   */
  rows?: number;
  /**
   * Specifies whether the <textarea> is subject to spell-checking by the underlying browser/OS
   */
  spellcheck?: boolean;
  /**
   * Indicates how the control should wrap the value for form submission. Possible values are:
   * - hard: The browser automatically inserts line breaks (CR+LF) so that each line is no longer than the width of the control; the cols attribute must be specified for this to take effect
   * - soft: The browser ensures that all line breaks in the entered value are a CR+LF pair, but no additional line breaks are added to the value.
   * - off Non-standard: Like soft but changes appearance to white-space: pre so line segments exceeding cols are not wrapped and the <textarea> becomes horizontally scrollable.
   */
  wrap?: 'hard' | 'soft' | 'off';
}

interface HTMLScriptElementAttributes extends HTMLElementAttributes {
  /**
   * For classic scripts, if the async attribute is present, then the classic script will be fetched in parallel to parsing and evaluated as soon as it is available.
   *
   * For module scripts, if the async attribute is present then the scripts and all their dependencies will be fetched in parallel to parsing and evaluated as soon as they are available.
   *
   * This attribute allows the elimination of parser-blocking JavaScript where the browser would have to load and evaluate scripts before continuing to parse. defer has a similar effect in this case.
   *
   * If the attribute is specified with the defer attribute, the element will act as if only the async attribute is specified.
   *
   * This is a boolean attribute: the presence of a boolean attribute on an element represents the true value, and the absence of the attribute represents the false value.
   *
   * **Warning**: _This attribute must not be used if the src attribute is absent (i.e., for inline scripts) for classic scripts, in this case it would have no effect._
   */
  async?: boolean;
  /**
   * This attribute explicitly indicates that certain operations should be blocked on the fetching of the script. The operations that are to be blocked must be a space-separated list of blocking tokens listed below.
   * - render: The rendering of content on the screen is blocked.
   */
  blocking?: 'render' | string;
  /**
   * Normal script elements pass minimal information to the window.onerror for scripts which do not pass the standard CORS checks. To allow error logging for sites which use a separate domain for static media, use this attribute. See CORS settings attributes for a more descriptive explanation of its valid arguments.
   */
  crossOrigin?: 'anonymous' | 'use-credentials' | string;
  /**
   * This Boolean attribute is set to indicate to a browser that the script is meant to be executed after the document has been parsed, but before firing DOMContentLoaded event.
   *
   * Scripts with the defer attribute will prevent the DOMContentLoaded event from firing until the script has loaded and finished evaluating.
   *
   * Scripts with the defer attribute will execute in the order in which they appear in the document.
   *
   * This attribute allows the elimination of parser-blocking JavaScript where the browser would have to load and evaluate scripts before continuing to parse. async has a similar effect in this case.
   *
   * If the attribute is specified with the async attribute, the element will act as if only the async attribute is specified.
   *
   * **Warning**: _This attribute must not be used if the src attribute is absent (i.e., for inline scripts), in this case it would have no effect._
   *
   * _The defer attribute has no effect on module scripts — they defer by default._
   */
  defer?: '' | boolean;
  /**
   * Provides a hint of the relative priority to use when fetching an external script. Allowed values:
   *
   * - high
   * Fetch the external script at a high priority relative to other external scripts.
   *
   * - low
   * Fetch the external script at a low priority relative to other external scripts.
   *
   * - auto
   * Don't set a preference for the fetch priority. This is the default. It is used if no value or an invalid value is set.
   */
  fetchPriority?: 'low' | 'high' | 'auto';
  /**
   * This attribute contains inline metadata that a user agent can use to verify that a fetched resource has been delivered without unexpected manipulation. The attribute must not be specified when the src attribute is absent.
   */
  integrity?: string;
  /**
   * This Boolean attribute is set to indicate that the script should not be executed in browsers that support ES modules — in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code.
   */
  noModule?: boolean;
  /**
   * A cryptographic nonce (number used once) to allow scripts in a script-src Content-Security-Policy. The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.
   */
  nonce?: string;
  /**
   * Indicates which referrer to send when fetching the script, or resources fetched by the script
   */
  referrerPolicy?:
    | 'no-referrer'
    | 'no-referrer-when-downgrade'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url';
  /**
   * This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document.
   */
  src?: string;
  /**
   * This attribute indicates the type of script represented.
   */
  type?:
    | 'importmap'
    | 'module'
    | 'text/javascript'
    | 'application/javascript'
    | 'application/ecmascript'
    | 'text/ecmascript'
    | string;
}

interface HTMLStyleElementAttributes extends HTMLElementAttributes {
  /**
   * This attribute explicitly indicates that certain operations should be blocked on the fetching of the script. The operations that are to be blocked must be a space-separated list of blocking tokens listed below.
   * - render: The rendering of content on the screen is blocked.
   */
  blocking?: 'render' | string;
  /**
   * This attribute defines which media the style should be applied to. Its value is a media query, which defaults to all if the attribute is missing.
   */
  media?: string;
  /**
   * A cryptographic nonce (number used once) to allow scripts in a script-src Content-Security-Policy. The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial.
   */
  nonce?: string;
}

interface HTMLSelectElementAttributes extends HTMLElementAttributes {
  /**
   * A string providing a hint for a user agent's autocomplete feature. See The HTML autocomplete attribute for a complete list of values and details on how to use autocomplete.
   */
  autocomplete?: 'on' | 'off' | string;
  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads. Only one form element in a document can have the autofocus attribute.
   */
  autofocus?: boolean;
  /**
   * This Boolean attribute indicates that the user cannot interact with the control. If this attribute is not specified, the control inherits its setting from the containing element, for example <fieldset>; if there is no containing element when the disabled attribute is set, the control is enabled.
   */
  disabled?: boolean;
  /**
   * The form element that the <select> element is associated with (its "form owner"). The value of the attribute must be the id of a form element in the same document. If this attribute is not specified, the <select> element must be a descendant of a form element. This attribute enables you to place <select> elements anywhere within a document, not just as descendants of form elements.
   */
  form?: string;
  /**
   * This Boolean attribute indicates that multiple options can be selected in the list. If it is not specified, then only one option can be selected at a time. When multiple is specified, most browsers will show a scrolling list box instead of a single line dropdown.
   */
  multiple?: boolean;
  /**
   * The name of the select element. This is used to identify the element when submitting a form.
   */
  name?: string;
  /**
   * A Boolean attribute indicating that an option with a non-empty string value must be selected.
   */
  required?: boolean;
  /**
   * The size of the select element. This is used to determine how many options are visible at once.
   */
  size?: number;
}

interface HTMLSourceElementAttributes extends HTMLElementAttributes {
  /**
   * Mime type of the resource. This is used by the browser to determine if it can play the media resource.
   */
  type?: string;
  /**
   * The URL of the media resource.
   */
  src?: string;
  /**
   * Specifies a comma-separated list of one or more image URLs and their descriptors. Required if the parent of <source> is <picture>. Not allowed if the parent is <audio> or <video>.
   * The list consists of strings separated by commas, indicating a set of possible images for the browser to use. Each string is composed of:
   *
   * - A URL specifying an image location.
   * - An optional width descriptor—a positive integer directly followed by "w", such as 300w.
   * - An optional pixel density descriptor—a positive floating number directly followed by "x", such as 2x.
   *
   * Each string in the list must have either a width descriptor or a pixel density descriptor to be valid. These two descriptors should not be used together; only one should be used consistently throughout the list. The value of each descriptor in the list must be unique. The browser chooses the most adequate image to display at a given point of time based on these descriptors. If the descriptors are not specified, the default value used is 1x. If the sizes attribute is also present, then each string must include a width descriptor. If the browser does not support srcset, then src will be used for the default image source.
   */
  srcset?: string;
  /**
   * The sizes attribute specifies the sizes of the images in the srcset attribute. It is used to provide responsive images.
   * The value is a comma-separated list of media conditions and image sizes, such as "(max-width: 600px) 100vw, 50vw".
   */
  sizes?: string;
  /**
   * The media attribute specifies the media for which the resource is optimized. It is used to provide responsive images.
   * The value is a media query, such as "(max-width: 600px)".
   */
  media?: string;
  /**
   * The height of the source element.
   */
  height?: number;
  /**
   * The width of the source element.
   */
  width?: number;
}

interface HTMLTableCellElementAttributes extends HTMLElementAttributes {
  /**
   * Contains a non-negative integer value that indicates how many columns the data cell spans or extends. The default value is 1. User agents dismiss values higher than 1000 as incorrect, setting to the default value (1).
   */
  colSpan?: number;
  /**
   * Contains a list of space-separated strings, each corresponding to the id attribute of the <th> elements that provide headings for this table cell.
   */
  headers?: string;
  /**
   * Contains a non-negative integer value that indicates how many rows the data cell spans or extends. The default value is 1. User agents dismiss values higher than 1000 as incorrect, setting to the default value (1).
   */
  rowSpan?: number;
}

interface HTMLVideoElementAttributes extends HTMLElementAttributes {
  /**
   * A Boolean attribute; if specified, the video automatically begins to play back as soon as it can without stopping to finish loading the data.
   * To disable video autoplay, autoplay="false" will not work; the video will autoplay if the attribute is there in the <video> tag at all. To remove autoplay, the attribute needs to be removed altogether.
   *
   * **Note**: Modern browsers block audio (or videos with an unmuted audio track) from autoplaying, as sites that automatically play audio can be an unpleasant experience for users. See our autoplay guide for additional information about how to properly use autoplay.
   */
  autoplay?: boolean;
  /**
   * If this attribute is present, the browser will offer controls to allow the user to control video playback, including volume, seeking, and pause/resume playback.
   */
  controls?: boolean;
  /**
   * A space-separated list of strings that indicate which media controls the user agent is allowed to use. The values are:
   * - nodownload: The user agent should not allow the user to download the video.
   * - nofullscreen: The user agent should not allow the user to enter fullscreen mode.
   * - noremoteplayback: The user agent should not allow remote playback of the video.
   * - none: No controls are allowed.
   */
  controlsList?:
    | 'nodownload'
    | 'nofullscreen'
    | 'noremoteplayback'
    | 'none'
    | string;
  /**
   * This enumerated attribute indicates whether to use CORS to fetch the related video. CORS-enabled resources can be reused in the <canvas> element without being tainted.
   */
  crossOrigin?: 'anonymous' | 'use-credentials' | string;
  /**
   * Prevents the browser from suggesting a Picture-in-Picture context menu or to request Picture-in-Picture automatically in some cases.
   */
  disablePictureInPicture?: boolean;
  /**
   * Prevents the browser from suggesting a remote playback context menu or to request remote playback automatically in some cases.
   */
  disableRemotePlayback?: boolean;
  /**
   * The height of the video's display area, in CSS pixels (absolute values only; no percentages).
   */
  height?: number;
  /**
   * A Boolean attribute; if specified, the browser will automatically seek back to the start upon reaching the end of the video.
   */
  loop?: boolean;
  /**
   * A Boolean attribute that indicates the default audio mute setting contained in the video. If set, the audio will be initially silenced. Its default value is false, meaning the audio will be played when the video is played.
   */
  muted?: boolean;
  /**
   * A Boolean attribute indicating that the video is to be played "inline", that is, within the element's playback area. Note that the absence of this attribute does not imply that the video will always be played in fullscreen.
   */
  playsInline?: boolean;
  /**
   * A URL for an image to be shown while the video is downloading. If this attribute isn't specified, nothing is displayed until the first frame is available, then the first frame is shown as the poster frame.
   */
  poster?: string;
  /**
   * The preload attribute is a hint to the browser about what the author thinks will lead to the best user experience. It can have one of the following values:
   * - none: The browser should not preload the video.
   * - metadata: The browser should preload only metadata (e.g., duration, dimensions, etc.) of the video.
   * - auto: The browser should preload the entire video.
   */
  preload?: 'none' | 'metadata' | 'auto';
  /**
   * The URL of the video to embed. This is optional; you may instead use the <source> element within the video block to specify the video to embed.
   */
  src?: string;
  /**
   * The width of the video's display area, in CSS pixels (absolute values only; no percentages).
   */
  width?: number;
}
