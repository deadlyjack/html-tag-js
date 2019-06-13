import tag from './tag';

/**
 * 
 * @param {HTMLElement} element 
 * @param {Object} opts 
 * @param {String} opts.title 
 * @param {String} opts.direction 
 */
function toolTip(element, opts = {}) {
  if (!element) return console.error('element is undefined');
  let title = opts.title || element.getAttribute('title') || element.getAttribute('data-title') || '';
  const directions = ['auto', 'top', 'right', 'bottom', 'left'];
  const toolTip = tag('div', {
    className: '__toolTip',
    textContent: title
  });
  let direction = opts.direction || element.getAttribute('data-direction') || 'auto';
  direction = directions.indexOf(direction) > -1 ? direction : 'auto';


  function show() {
    if (toolTip.enabled) return;
    toolTip.enabled = true;
    toolTip.restore(document.body);

    const elementClient = element.getBoundingClientRect();
    const toolTipClient = toolTip.getBoundingClientRect();

    setPosition(direction);

    function setPosition(direction) {
      toolTip.className = '__toolTip ' + direction;

      switch (direction) {
        case 'left':
          toolTip.style.top = center('v') + 'px';
          toolTip.style.left = calc(direction) + 'px';
          break;
        case 'right':
          toolTip.style.top = center('v') + 'px';
          toolTip.style.left = calc(direction) + 'px';
          break;
        case 'top':
          toolTip.style.top = calc(direction) + 'px';
          toolTip.style.left = center() + 'px';
          break;
        case 'bottom':
          toolTip.style.top = calc(direction) + 'px';
          toolTip.style.left = center() + 'px';
          break;
        default:
          if (check('left')) setPosition('left');
          else if (check('right')) setPosition('right');
          else if (check('top')) setPosition('top');
          else if (check('bottom')) setPosition('bottom');
          else hide();
          break;
      }
    }

    toolTip.classList.add('__visible');

    function check(direction) {
      switch (direction) {
        case 'left':
          if (calc('left') < 0) return false;
          return true;
        case 'right':
          if (calc('right') + toolTipClient.width > innerWidth) return false;
          return true;
        case 'top':
          if (calc('top') < 0) return false;
          return true;
        case 'bottom':
          if (calc('bottom') + toolTipClient.height > innerHeight) return false;
          return true;
      }
    }

    function calc(direction) {
      const pointerDim = 8;
      switch (direction) {
        case 'left':
          return elementClient.left - toolTipClient.width - pointerDim;
        case 'right':
          return elementClient.right + pointerDim;
        case 'top':
          return elementClient.top - toolTipClient.height - pointerDim;
        case 'bottom':
          return elementClient.bottom + pointerDim;
      }
    }

    function center(axis) {
      if (axis === 'v')
        return elementClient.top + elementClient.height / 2 - toolTipClient.height / 2;

      return elementClient.left + elementClient.width / 2 - toolTipClient.width / 2;
    }
  }

  function hide() {
    toolTip.classList.remove('__visible');
    setTimeout(() => {
      toolTip.remove();
      toolTip.enabled = false;
    }, 100);
  }


  element.addEventListener('mouseover', show);
  element.addEventListener('mouseout', hide);

}

toolTip.init = function () {
  const allElements = document.querySelectorAll('[data-title]');
  [...allElements].map(el => toolTip(el));
}

export default toolTip;