import tag from './html'

/**
 * @callback onchange
 * @param {Boolean} value 
 */

/**
 * 
 * @typedef toggler
 * @property {onchange} onchange 
 * @property {function():Boolean} value 
 * @property {function(Boolean):void} setvalue 
 */

/**
 * 
 * @param {Object} params 
 * @param {Boolean} [params.value] 
 * @param {onchange} [params.onchange] 
 * @param {Number} [params.size]
 * @param {string} [params.valType='bool'] possible value 'bool' or ''on/off'
 * @returns {toggler & HTMLElement}
 */

export default function toggler(params = {}) {

  let checkbox = tag('input', {
    type: 'checkbox',
    style: {
      display: 'none'
    }
  });
  let btn = tag('span', {
    className: 'toggler_btn'
  });
  let mainWrapper = tag('label', {
    tabIndex: 0,
    role: 'input',
    className: 'toggler-wrapper',
    children: [
      checkbox,
      btn
    ]
  });

  if (params.onchange) {
    mainWrapper.onchange = params.onchange;
  }
  if (params.value !== undefined) {
    if (params.value === true || params.value === 'on') {
      checkbox.checked = true;
    }
  }
  if (params.size) {
    let h = params.size;
    let w = h * 2;

    mainWrapper.style.width = w + 'px';
    mainWrapper.style.height = h + 'px';
    mainWrapper.style.borderRadius = h / 2 + 'px';
    btn.style.height = h + 'px';
    btn.style.width = h + 'px';
  }

  checkbox.onchange = function () {
    if (params.valType === 'on/off') {
      if (checkbox.checked) {
        mainWrapper.value = 'on';
      } else {
        mainWrapper.value = 'off';
      }
    } else {
      mainWrapper.value = checkbox.checked;
    }
  };

  mainWrapper.setvalue = function (value) {
    value = !!value;

    checkbox.checked = value;
  }


  return mainWrapper;
}