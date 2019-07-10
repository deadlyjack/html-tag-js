import tag from './tag';

/**
 * 
 * @param {HTMLElement} element 
 * @param {Object} opts 
 * @param {String} opts.title 
 * @param {String} opts.defaultDirection 
 * @param {String} opts.direction 
 */
function toolTip(element, opts = {}) {
  if (!element) return console.error('element is undefined');
  const directions = ['auto', 'top', 'right', 'bottom', 'left'];
  const toolTip = tag('div', {
    className: '__toolTip'
  });
  const observer = new MutationObserver(mutations => {
    mutations.map(mutation => {
      if (mutation.type === 'attributes') {
        let title = '';
        if (element.hasAttribute('title')) {
          title = element.getAttribute('title');
          element.removeAttribute('title');
        }
        if (title) {
          element.setAttribute('data-title', title);
        }

        toolTip.textContent = element.getAttribute('data-title');
      }
    });
  });
  let direction = opts.direction || element.getAttribute('data-direction') || 'auto';

  init();

  function init() {
    observer.observe(element, {
      attributes: true
    });
    toolTip.textContent = initTextContent();
    direction = directions.indexOf(direction) > -1 ? direction : 'auto';

    element.addEventListener('mouseover', show);
    element.addEventListener('mouseout', hide);
  }

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
          const directions = ['top', 'left', 'right', 'bottom'];
          let defaultDirection = opts.defaultDirection || element.getAttribute('data-default-direction');

          if (defaultDirection) {
            const index = directions.indexOf(defaultDirection);
            if (index > -1) {
              directions.splice(index, 1);
              directions.unshift(defaultDirection);
            }
          }

          for (let direction of directions) {
            if (check(direction)) {
              setPosition(direction);
              break;
            }
            if (directions.indexOf(direction) === directions.length - 1) hide();
          }
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

  function initTextContent() {
    let title = '';
    if (opts.title) title = opts.title;
    if (element.hasAttribute('title')) {
      title = element.getAttribute('title');
      element.removeAttribute('title');
    }

    if (title) element.setAttribute('data-title', title);

    return element.getAttribute('data-title');
  }

}

toolTip.init = function () {
  const allElements = document.querySelectorAll('[data-title], [title]');
  [...allElements].map(el => toolTip(el));
};

export default toolTip;