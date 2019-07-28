import tag from './tag';

import './css/combobox.scss';

/**
 * TODO: 
 * Add feature to handel options group
 * Add frature to select multiple options
 */

/**
 * 
 * @param {Object} [opts]
 * @param {HTMLSelectElement} [opts.select] 
 * @param {Number} [opts.height]
 * @param {Number} [opts.maxheight]
 * @param {Number} [opts.width]
 * @param {Number} [opts.spead]
 */
export default function comboBox(opts = {}) {

  const div = tag('div', {
    className: '__select',
    tabIndex: 0
  });
  const placeholder = tag('span', {
    className: '__placeholder'
  })
  const optionsContainer = tag('div', {
    className: '__options'
  });
  const mask = tag('div', {
    className: '__mask',
    onclick: hide
  });
  const scrollbarWidth = getScrollbarWidth();
  let containerHeight = 0;
  let height = opts.height || 40;
  let width = opts.width;
  let speed = opts.spead || 1;
  let obj = {};
  /**
   * @type {Element}
   */
  let selectOption;
  let moveTop = false;

  (function init() {
    opts.maxheight = opts.maxheight || 600;

    if (opts.select) {
      obj.select = opts.select;
      const options = opts.select.options;
      opts.select.style.display = 'none';
      opts.select.parentElement.insertBefore(div, opts.element);

      for (let i = 0; i < options.length; ++i) {

        addOption(options[i], undefined, true);

        if (options[i].selected) {
          setTimeout(() => {
            setvalue(null, i);
          }, 5);
        }
      }

      if (!div.getAttribute('data-value')) {
        setvalue(null, 0);
      }
    } else {
      obj.select = div;
    }

    div.appendChild(placeholder);
    placeholder.style.height = height + 'px';
    if (width) {
      placeholder.style.width = width + 'px';
      optionsContainer.style.width = width + 'px';
    }

    obj.onchange = function () {};
    placeholder.onclick = show;

    div.addEventListener('focus', onfocus);

    function onfocus() {
      this.onkeyup = onkeypress;
    }
    /**
     * 
     * @param {KeyboardEvent} e 
     */
    function onkeypress(e) {
      let id;
      if (e.which === 38) {
        let option = selectOption.previousElementSibling
        if (option) {
          id = option.getAttribute('data-id');
        } else {
          id = selectOption.parentElement.lastElementChild.getAttribute('data-id');
        }
      } else if (e.which === 40) {
        let option = selectOption.nextElementSibling
        if (option) {
          id = option.getAttribute('data-id');
        } else {
          id = selectOption.parentElement.firstElementChild.getAttribute('data-id');
        }
      } else if (e.which === 13) {
        toggle();
      }
      if (id) {
        setvalue(null, id);
      }
    }
  })()

  function toggle() {
    mask.parentElement ? hide() : show();
  }

  function show() {
    mask.restore(document.body);
    optionsContainer.restore(document.body);
    let divClient = div.getBoundingClientRect();
    let _height = optionsContainer.children.length * height;
    let scroll = false;
    let logicalHeight = _height > opts.maxheight ? opts.maxheight : _height;

    optionsContainer.style.top = divClient.top + 'px';
    optionsContainer.style.left = divClient.left + 'px';
    optionsContainer.style.width = divClient.width + 'px';
    optionsContainer.style.height = '0';

    let tmpHeightBottom = window.innerHeight - divClient.bottom;
    let tmpHeightTop = divClient.height + divClient.top;

    optionsContainer.style.removeProperty('transform');
    if (divClient.bottom + logicalHeight > window.innerHeight) { //checks if height of options container crosses bottom

      if (divClient.bottom - logicalHeight < 0) { //checks if height of options container cross top
        if (tmpHeightTop > tmpHeightBottom) {
          if (tmpHeightTop > logicalHeight) {
            _height = logicalHeight;
          } else {
            _height = tmpHeightTop;
          }
          moveTop = true;
        } else {
          _height = tmpHeightBottom > logicalHeight ? logicalHeight : tmpHeightBottom;
        }
      } else {
        if (_height > logicalHeight) {
          _height = logicalHeight;
          scroll = true;
          optionsContainer.style.width = (divClient.width + scrollbarWidth) + 'px';
        }
        moveTop = true;
      }

      if (_height !== logicalHeight) {

        if (_height > logicalHeight) {
          _height = logicalHeight;
        }

        scroll = true;
        optionsContainer.style.width = (divClient.width + scrollbarWidth) + 'px';
      }

    } else if (_height <= opts.maxheight) {
      optionsContainer.style.width = divClient.width + 'px';
      optionsContainer.style.removeProperty('overflow-y');
    } else {
      optionsContainer.style.width = (divClient.width + scrollbarWidth) + 'px';
      _height = opts.maxheight;
      scroll = true;
    }

    containerHeight = _height;

    let current_height = 0;
    let inc_factor = 1;
    let opacity = 0;

    function animateHeight() {
      if (current_height >= _height) {
        scroll && (optionsContainer.style.overflowY = 'scroll');
        return;
      }

      opacity += (inc_factor / _height);
      opacity = opacity < 1 ? opacity : 1;
      current_height += inc_factor;
      inc_factor += speed;

      const calcHeight = current_height < _height ? current_height : _height;
      optionsContainer.style.height = calcHeight + 'px';
      optionsContainer.style.opacity = opacity;
      if (moveTop) optionsContainer.style.transform = `translate(0, ${-(calcHeight - height)}px)`;
      requestAnimationFrame(animateHeight);
    }

    let selected = optionsContainer.querySelector('.__selected');
    if (selected)
      scrollIntoView(selected);

    animateHeight();
  }


  function hide() {
    optionsContainer.style.removeProperty('overflow-y');
    let current_height = containerHeight;
    let inc_factor = 1;
    let opacity = 1;

    function animateHeight() {
      if (current_height <= 0) {
        mask.remove();
        optionsContainer.remove();
        moveTop = false;
        return;
      }

      opacity -= (inc_factor / containerHeight);
      opacity = opacity > 0 ? opacity : 0;
      current_height -= inc_factor;
      inc_factor += speed;

      const calcHeight = current_height > 0 ? current_height : 0;
      optionsContainer.style.height = current_height + 'px';
      optionsContainer.style.opacity = opacity;
      if (moveTop) {
        optionsContainer.style.transform = `translate(0, ${-(calcHeight - height)}px)`;
      }
      requestAnimationFrame(animateHeight);
    }

    animateHeight();
  }


  function optionOnselect() {
    /**
     * @type {HTMLSpanElement}
     */
    let el = this;
    let id = el.getAttribute('data-id');

    setvalue(null, id);
    hide();
  }

  /**
   * 
   * @param {HTMLSpanElement|HTMLOptionElement|String} option 
   * @param {String|Number} [value] 
   */
  function addOption(option, value = '', preventAddingOption) {
    if (typeof option !== 'string') {
      value = value || option.value || option.getAttribute('data-value') || '';
      option = option.textContent;
    }

    if (opts.select && !preventAddingOption) {
      let op = tag('option', {
        textContent: option,
        attr: {
          value
        }
      });
      opts.select.appendChild(op);
    }

    option = tag('div', {
      className: '__option',
      attr: {
        "data-value": value,
        "data-id": optionsContainer.childElementCount
      },
      textContent: option,
      style: {
        height: height ? height + 'px' : 'fit-content'
      }
    });

    if (placeholder.textContent === '') {
      placeholder.textContent = option.textContent;
      if (opts.select) opts.select.value = value;
      div.setAttribute('data-value', value);
    }

    option.addEventListener('click', optionOnselect);
    optionsContainer.appendChild(option);

    let removeContainer = false;
    if (!optionsContainer.parentElement) {
      document.body.appendChild(optionsContainer);
      removeContainer = true;
    }
    let client = optionsContainer.getBoundingClientRect();
    placeholder.style.width = client.width + 'px';
    if (removeContainer) {
      document.body.removeChild(optionsContainer);
    }
  }

  function removeOption(option) {
    let _option = optionsContainer.querySelector(`[data-value='${option}']`);
    if (_option) {
      _option.parentElement.removeChild(_option);
      return true;
    }
    return false;
  }

  function value() {
    return div.getAttribute('data-value');
  }

  function setvalue(value, id = 0) {
    let option;

    if (!value) {
      option = optionsContainer.querySelector(`[data-id='${id}']`);
    } else {
      option = optionsContainer.querySelector(`[data-value='${value}']`);
    }

    if (!option) return;

    value = option.getAttribute('data-value');

    if (opts.select) opts.select.value = value;
    let selected = optionsContainer.querySelector('.__selected');
    if (selected)
      selected.classList.remove('__selected');

    option.classList.add('__selected');
    div.setAttribute('data-value', value);
    placeholder.textContent = option.textContent;
    obj.onchange(value);
    selectOption = option;
    if (opts.select) opts.select.value = value;

    if (!isInView(option)) {
      scrollIntoView(option);
    }
  }

  function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }

  /**
   * 
   * @param {Element} el 
   */
  function scrollIntoView(el) {
    let parent = el.parentElement;
    parent.scrollTop = el.offsetTop;
  }

  /**
   * 
   * @param {Element} el 
   */
  function isInView(el) {
    let parent = el.parentElement;
    let parentClient = parent.getBoundingClientRect();
    let elClient = el.getBoundingClientRect();

    if (parentClient.bottom <= elClient.top || parentClient.top >= elClient.bottom) {
      return false;
    }
    return true;
  }

  obj.getOption = function (value) {
    const options = [...optionsContainer.children];
    for (let option of options) {
      if (option.getAttribute('data-value') === value || option.textContent === value) return option;
    }
  }

  obj.customSelect = optionsContainer;
  obj.addOption = addOption;
  obj.value = value;
  obj.setvalue = setvalue;
  obj.removeOption = removeOption;

  return obj;
}