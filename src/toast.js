import tag from './tag';

/**
 * @enum {String}
 */
const toastMode = [
    'autohide',
    'manual',
    'ok-btn'
];

/**
 * @enum {String}
 */
const position = [
    'top-center',
    'top-left',
    'top-right',
    'center',
    'bottom-center',
    'bottom-left',
    'bottom-right'
];

/**
 * @enum {String}
 */
const type = [
    'error',
    'warging',
    'default',
    'highlight'
];

/**
 * @typedef {Object} toast
 * @property {function():void} show
 * @property {function():void} hide
 * @property {function():void} dispose
 */

/**
 * 
 * @param {String} str 
 * @param {Object} options 
 * @param {toastMode} [options.mode]
 * @param {position} [options.position]
 * @param {type} [options.type]
 */

function toast(str, options){
    const text = tag('span', {
        className: '__text',
        textContent: str
    });
    const buttonsContainer = tag('div', {
        className: '__btn-container'
    });
    const toast = tag('div', {
        className: '__toast',
        children: [
            text,
            buttonsContainer
        ]
    });
    const mode = options.mode || 'autohide';
    const position = options.position || 'bottom-center';
    const type = options.type || 'default';

    function show(){

    }

    function hide(){

    }

    function dispose(){

    }

    return {
        show,
        hide,
        dispose
    }
}

export default toast;

//TODO: this module is incomplete. complete it