import * as html from './html';

/**
 * 
 * @param {Object} [opts]
 * @param {HTMLSelectElement} [opts.select] 
 * @param {Number} [opts.height]
 * @param {Number} [opts.maxheight]
 * @param {Number} [opts.width]
 * @param {Number} [opts.spead]
 */
export function select(opts = {}) {

  const div = html.div({
    className: '__select',
    tabIndex: 0
  });
  const placeholder = html.span({
    className: '__placeholder'
  })
  const optionsContainer = html.div({
    className: '__options'
  });
  const mask = html.div({
    className: '__mask',
    onclick: hide
  });
  const scrollbarWidth = getScrollbarWidth();
  let containerHeight = 0;
  let height = opts.height;
  let width = opts.width;
  let spead = opts.spead || 1;
  let obj = {};
  let allOptions = [];

  (function init() {
    opts.maxheight = opts.maxheight || 600;

    if (opts.select) {
      obj.select = opts.select;
      const options = opts.select.options;
      opts.select.style.display = 'none';
      opts.select.parentElement.insertBefore(div, opts.element);

      for (let i = 0; i < options.length; ++i) {
        let option = html.div({
          className: '__option',
          attr: {
            "data-value": options[i].value
          },
          textContent: options[i].textContent,
          style: {
            height: height + 'px'
          }
        });

        allOptions.push(options[i].value);
        option.addEventListener('click', optionOnselect);

        if (options[i].selected) {
          setvalue(options[i].value);
        }

        optionsContainer.appendChild(option);
      }

      if (!div.getAttribute('data-value')) {
        div.setAttribute('data-value', options[0].value);
        placeholder.textContent = options[0].textContent;
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
      let val = value();
      let len = allOptions.length - 1;
      let index = allOptions.indexOf(val);
      if (e.which === 38) {
        val = allOptions[index === 0 ? len : index - 1];
      } else if (e.which === 40) {
        val = allOptions[index === len ? 0 : index + 1];
      } else {
        //TODO: match and select next item with key
        // let char = String.fromCharCode(e.which);
        // let options = [];
        // let matchingWord = [];
        // optionsContainer.children.forEach(el=>{
        //   options[el.getAttribute('data-value')] = el;
        // });

        // for(let key in options){
        //   if(options[key][0] === char){
        //     matchingWord.push(options[key])
        //   }
        // }
      }

      setvalue(val);
    }
  })()

  function show() {
    document.body.appendChild(mask);
    document.body.appendChild(optionsContainer);
    let divClient = div.getBoundingClientRect();
    let _height = optionsContainer.children.length * (height || 40);
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
      optionsContainer.style.transform = 'translate(0, -100%)';

      if (divClient.bottom - logicalHeight < 0) { //checks if height of options container cross top
        if (tmpHeightTop > tmpHeightBottom) {
          _height = tmpHeightTop > logicalHeight ? logicalHeight : tmpHeightTop;
        } else {
          _height = tmpHeightBottom > logicalHeight ? logicalHeight : tmpHeightBottom;
          optionsContainer.style.removeProperty('overflow-y');
        }
      }

      if (_height !== logicalHeight) {
        _height = logicalHeight;
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

    function animateHeight() {

      if (current_height + inc_factor > _height) {
        optionsContainer.style.height = _height + 'px';
        scroll && (optionsContainer.style.overflowY = 'scroll');
      } else if (current_height < _height) {
        current_height += inc_factor;
        inc_factor += spead;
        optionsContainer.style.height = current_height + 'px';
        requestAnimationFrame(animateHeight);
      }
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

    function animateHeight() {
      if (current_height - inc_factor < 0) {
        optionsContainer.style.height = '0';
        document.body.removeChild(mask);
        document.body.removeChild(optionsContainer);
      } else if (current_height > 0) {
        current_height -= inc_factor;
        inc_factor += spead;
        optionsContainer.style.height = current_height + 'px';
        requestAnimationFrame(animateHeight);
      } else {
        document.body.removeChild(mask);
        document.body.removeChild(optionsContainer);
      }
    }

    animateHeight();
  }


  function optionOnselect() {
    /**
     * @type {HTMLSpanElement}
     */
    let el = this;
    let value = el.getAttribute('data-value');
    let text = el.textContent;

    let selected = optionsContainer.querySelector('.__selected');
    if (selected)
      selected.classList.remove('__selected');

    el.classList.add('__selected');
    div.setAttribute('data-value', value);
    placeholder.textContent = text;
    obj.onchange(value);
    if (opts.select) opts.select.value = value;
    hide();
  }

  /**
   * 
   * @param {HTMLSpanElement|HTMLOptionElement|String} option 
   * @param {String|Number} [value] 
   */
  function addOption(option, value = '') {
    if (typeof option !== 'string') {
      value = value || option.value || option.getAttribute('data-value') || '';
      option = option.textContent;
    }

    if (opts.select) {
      let op = html.create('option', {
        textContent: option,
        attr: {
          value
        }
      });
      opts.select.appendChild(op);
    }

    option = html.div({
      className: '__option',
      attr: {
        "data-value": value
      },
      textContent: option,
      style: {
        height: height ? height + 'px' : 'fit-content'
      }
    });

    allOptions.push(value);

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
      allOptions.splice(allOptions.indexOf(option) + 1, 1);
      return true;
    }
    return false;
  }

  function value() {
    return div.getAttribute('data-value');
  }

  function setvalue(value) {
    if (opts.select) opts.select.value = value;
    let selected = optionsContainer.querySelector('.__selected');
    if (selected)
      selected.classList.remove('__selected');

    let option = optionsContainer.querySelector(`[data-value='${value}']`);
    if (option) {
      option.classList.add('__selected');
      div.setAttribute('data-value', value);
      placeholder.textContent = option.textContent;
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

  obj.customSelect = optionsContainer;
  obj.addOption = addOption;
  obj.value = value;
  obj.setvalue = setvalue;
  obj.removeOption = removeOption;

  return obj;
}