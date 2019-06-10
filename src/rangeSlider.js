import tag from './html';

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
export default function rangeSlider(params = {}) {


  let mainWrapper = tag('div', {
    role: 'input',
    tabIndex: 0,
    className: 'rangeSlider-wrapper',
    attr: {
      'data-value': 0
    }
  });
  let btn = tag('span', {
    className: 'rangeSlider-button'
  });

  let min = params.min || 0;
  let max = params.max || 100;
  let step = params.step || 1;
  let diff = max - min;
  let width = 0;
  let tmout = null;
  let length = (function calcLength() {
    let l = step + '';
    let lar = l.split('.');
    if (lar.length > 1) {
      let l = lar[1].length;
      return l > 2 ? 2 : l;
    } else {
      return 0;
    }
  });

  mainWrapper.value = params.value || min;

  if (params.size) {
    mainWrapper.classList.add(params.size);
  }
  if (params.value) {
    setTimeout(() => {
      setvalue(params.value);
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
    } else if (x > width && mainWrapper.value !== max) {
      setvalue(max);
    } else if (x < 0 && mainWrapper.value !== min) {
      setvalue(min);
    }
  }

  function onmouseup() {
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchmove = null;
    document.ontouchend = null;
  }



  /**
   * 
   * @param {Number} x 
   */
  function calculateValue(x) {
    let value = x / width * diff;
    value += min;

    setvalue(value);
  }

  /**
   * 
   * @param {Number} value 
   */
  function setvalue(value) {

    if (value > max) {
      value = max;
    } else if (value < min) {
      value = min;
    }

    value = parseFloat(value);
    if (tmout) clearTimeout(tmout);
    makeActive();
    width = mainWrapper.offsetWidth;

    let remainder = value / step;
    remainder %= 1;
    remainder *= step;
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
      mainWrapper.value = value;
      mainWrapper.onchange(value);
    }
    mainWrapper.value = value;
    let val = value + '';
    let l = length();
    val = val.split('.');
    if (l > 0 && val.length > 1) {
      val = val[0] + '.' + val[1].substr(0, l);
    } else {
      val = val[0];
    }
    btn.setAttribute('data-value', val);

    let x = (value - min) / diff;
    x *= width;

    btn.style.transform = `translate3d(${x}px, 0, 0)`;

    tmout = setTimeout(() => {
      removeActive();
    }, 1000);
  }

  mainWrapper.setvalue = setvalue;
  mainWrapper.appendChild(btn);

  return mainWrapper;
}