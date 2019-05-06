import * as html from './html';

/**
 * 
 * @param {Object} [opts]
 * @param {HTMLSelectElement} [opts.select] 
 * @param {Number} [opts.height]
 * @param {Number} [opts.width]
 * @param {Number} [opts.spead]
 */
export function select(opts={}) {
  
  const div = html.div({
    className: '__select'
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

      option.addEventListener('click', optionOnselect);

      if (options[i].selected) {
        div.setAttribute('data-value', options[i].value);
        placeholder.textContent = options[i].textContent;
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

  obj.onchange = function () { };

  function show() {
    document.body.appendChild(mask);
    document.body.appendChild(optionsContainer);
    let divClient = div.getBoundingClientRect();
    let _height = optionsContainer.children.length * (height || 40);

    optionsContainer.style.top = divClient.top + 'px';
    optionsContainer.style.left = divClient.left + 'px';
    optionsContainer.style.width = divClient.width + 'px';
    optionsContainer.style.height = '0';

    if (divClient.bottom + _height > window.innerHeight) {
      optionsContainer.style.transform = 'translate(0, -100%)';

      if (divClient.top - _height < 0) {
        let tmpHeight = _height;
        tmpHeight -= (_height + divClient.bottom + 20) - window.innerHeight;
        
        if (tmpHeight < 300) {
          _height += (divClient.top - _height - 20);
        } else {
          _height = tmpHeight;
          optionsContainer.style.removeProperty('transform');
        }
        optionsContainer.style.overflowY = 'scroll';
        optionsContainer.style.width = (divClient.width + scrollbarWidth)+ 'px';
      }

    } else {
      optionsContainer.style.removeProperty('overflow-y');
    }

    containerHeight = _height;

    let current_height = 0;
    let inc_factor = 1;
    function animateHeight() {
      if (current_height < _height) {
        current_height += inc_factor;
        inc_factor += spead;
        optionsContainer.style.height = current_height + 'px';
        requestAnimationFrame(animateHeight);
      }
    }

    animateHeight();
  }

  placeholder.onclick = show;


  function hide() {
    optionsContainer.style.removeProperty('overflow-y');
    let current_height = containerHeight;
    let inc_factor = 1;
    function animateHeight() {
      if (current_height > 0) {
        current_height -= inc_factor;
        inc_factor+=spead;
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
    if(selected)
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
  function addOption(option, value='') {
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

    if (placeholder.textContent === '') {
      placeholder.textContent = option.textContent;
      if (opts.select) opts.select.value = value;
      div.setAttribute('data-value', value);
    }

    option.addEventListener('click', optionOnselect);
    optionsContainer.appendChild(option);

    document.body.appendChild(optionsContainer);
    let client = optionsContainer.getBoundingClientRect();
    placeholder.style.width = client.width + 'px';
    document.body.removeChild(optionsContainer);
  }

  function value() {
    return div.getAttribute('data-value');
  }

  function setvalue(value) {
    if (opts.select) opts.select.value = value;
    let selected = optionsContainer.querySelector('.__selected');
    if (selected)
      selected.classList.remove('__selected');
    
    let allOptions = optionsContainer.children;

    for (let i = 0; i < allOptions; ++i){
      if (allOptions[i].getAttribute('data-value') === value) {
        allOptions[i].classList.add('__selected');
        placeholder.textContent = allOptions[i].textContent;
        break;
      }
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

  obj.customSelect = optionsContainer;
  obj.addOption = addOption;
  obj.value = value;
  obj.setvalue = setvalue;

  return obj;
}