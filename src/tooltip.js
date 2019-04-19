import * as html from './html';

/**
 * 
 * @param {Object} opts 
 * @param {String} opts.title 
 * @param {element} opts.element 
 * @param {String} opts.direction 
 * @param {Boolean} opts.watchChange
 */
export function toolTip(opts) {
  if (!opts.element) return console.error('element is undefined');
  if (!opts.direction) opts.direction = 'left';
  let title = opts.title || opts.element.getAttribute('title') || opts.element.getAttribute('data-title') || '';
  let toolTip = html.create('div', {
    className: 'toolTip'
  });
  let toolTipPointer = html.create('span', {
    className: 'toolTip-pointer'
  });
  let wrapper = html.create('div', {
    className: 'toolTip-wrapper',
    attr: {
      "data-direction": opts.direction
    }
  });
  let text = html.create('span', {
    textContent: title,
    className: 'text'
  });
  /**
   * @type {MutationObserver}
   */
  let observer;

  toolTip.appendChild(toolTipPointer);
  toolTip.appendChild(text);
  wrapper.appendChild(toolTip);

  opts.element.onmouseenter = mouseEnter;
  opts.element.onmouseleave = mouseLeave;


  function mouseEnter() {

    let elClient = opts.element.getBoundingClientRect();

    if (opts.direction) {
      if (opts.direction === 'left') {
        wrapper.style.left = elClient.left + 'px';
        wrapper.style.top = elClient.top + elClient.height / 2 + 'px';
        toolTipPointer.style.right = `0`;
        toolTipPointer.style.top = `50%`;
        toolTipPointer.style.transform = 'translate3d(50%, -50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(-100%, -50%, 0px)';
      }
      if (opts.direction === 'right') {
        wrapper.style.left = elClient.right + 'px';
        wrapper.style.top = elClient.top + elClient.height / 2 + 'px';
        toolTipPointer.style.left = `0`;
        toolTipPointer.style.top = `50%`;
        toolTipPointer.style.transform = 'translate3d(-50%, -50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(0%, -50%, 0px)';
      }
      if (opts.direction === 'top') {
        wrapper.style.left = elClient.left + elClient.width / 2 + 'px';
        wrapper.style.top = elClient.top + 'px';
        toolTipPointer.style.left = `50%`;
        toolTipPointer.style.bottom = `0`;
        toolTipPointer.style.transform = 'translate3d(-50%, 50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(-50%, -100%, 0px)';
      }
      if (opts.direction === 'bottom') {
        wrapper.style.left = elClient.left + elClient.width / 2 + 'px';
        wrapper.style.top = elClient.bottom + 'px';
        toolTipPointer.style.left = `50%`;
        toolTipPointer.style.top = `0`;
        toolTipPointer.style.transform = 'translate3d(-50%, -50%, 0) rotate(45deg)';
        wrapper.style.transform = 'translate3d(-50%, 0%, 0px)';
      }
    }

    if (opts.watchChange) {
      observer = new MutationObserver(function (changes, observer) {
        for (let change of changes) {
          if (change.type === 'attributes') {
            text.textContent = opts.element.getAttribute('title') || opts.element.getAttribute('data-title');
          }
        }
      });
      observer.observe(opts.element, {
        attributes: true
      });
    }

    document.body.appendChild(wrapper);
  }

  function mouseLeave() {
    if (!toolTip.parentElement) return;
    document.body.removeChild(wrapper);
    if (opts.watchChange && observer) {
      observer.disconnect;
    }
  }

  opts.element.removeAttribute('title');

}