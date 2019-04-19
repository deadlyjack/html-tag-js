import * as html from './html';
/**
 * @callback onchange
 * @param {Number} value 
 */

/**
 * 
 * @typedef slider
 * @property {onchange} onchange 
 * @property {function():Number} value 
 * @property {function(Number):void} setvalue 
 */

/**
 * 
 * @param {Object} params 
 * @param {Number} params.min 
 * @param {Number} params.max 
 * @param {Number} [params.step] 
 * @param {Number} [params.value ]
 * @param {onchange} [params.onchange] 
 * @param {string} [params.size] 
 * @returns {slider & HTMLElement}
 */
export function rangeSlider(params = {}) {


  let mainWrapper = html.div({
    role: 'input',
    tabIndex: 0,
    className: 'rangeSlider-wrapper',
    attr: {
      'data-value': 0
    }
  });
  let btn = html.span({
    className: 'rangeSlider-button'
  });

  let min = params.min || 0;
  let max = params.max || 100;
  let step = params.step || 1;
  let diff = max - min;
  let width = 0;
  let tmout = null;

  mainWrapper.value = params.value || min;

  if (params.size) {
    mainWrapper.classList.add(params.size);
  }
  if (params.value) {
    setTimeout(() => {
      setValue(params.value);
    }, 0);
  }

  mainWrapper.addEventListener('mousedown', onmousedown);
  mainWrapper.addEventListener('focus', makeActive);
  mainWrapper.addEventListener('touchstart', onmousedown);

  function makeActive() {
    mainWrapper.classList.add('active');
    mainWrapper.onblur = removeActive;
  }

  function removeActive() {
    mainWrapper.classList.remove('active');
    mainWrapper.onblur = null;
  }

  /**
   * 
   * @param {MouseEvent} e 
   */
  function onmousedown(e) {
    mainWrapper.focus();
    document.onmousemove = document.ontouchmove = onmousemove;
    document.onmouseup = document.ontouchend = onmouseup;

    onmousemove(e);
  }

  /**
   * 
   * @param {MouseEvent | TouchEvent} e 
   */
  function onmousemove(e) {
    let x = e.clientX || e.touches[0].clientX;
    let wrapperX = mainWrapper.getBoundingClientRect().x;
    width = mainWrapper.offsetWidth;

    x -= wrapperX;

    if (x <= width && x >= 0) {
      calculateValue(x);
    } else if (mainWrapper.value !== max && x > width) {
      setValue(max);
    } else if (mainWrapper.value !== min && x < 0) {
      setValue(min);
    }
  }

  function onmouseup() {
    document.onmouseup = null;
    document.onmousemove = null;
  }



  /**
   * 
   * @param {Number} x 
   */
  function calculateValue(x) {
    let value = x / width * diff;
    value += min;

    setValue(value);
  }

  /**
   * 
   * @param {Number} value 
   */
  function setValue(value) {

    if (value > max) {
      value = max;
    } else if (value < min) {
      value = min;
    }

    value = parseInt(value);
    if (tmout) clearTimeout(tmout);
    makeActive();
    width = mainWrapper.offsetWidth;

    let remainder = value % step;
    if (remainder >= step / 2) {
      let tmp = value;
      tmp += (step - remainder);

      if (tmp > max) {
        value -= remainder
      } else {
        value = tmp;
      }
    } else {
      value -= remainder;
    }

    if (mainWrapper.onchange) {
      mainWrapper.onchange(value);
    }
    mainWrapper.value = value;
    btn.setAttribute('data-value', (value + '').substr(0, 4));

    let x = (value - min) / diff;
    x *= width;

    btn.style.transform = `translate3d(${x}px, 0, 0)`;

    tmout = setTimeout(() => {
      removeActive();
    }, 1000);
  }

  mainWrapper.setValue = setValue;
  mainWrapper.appendChild(btn);

  return mainWrapper;
}