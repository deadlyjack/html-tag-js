import * as html from './html';

/**
 * 
 * @param {HTMLSelectElement} element 
 * @param {Object} [opts]
 * @param {Number} [opts.height]
 * @param {Number} [opts.width]
 * @param {Number} [opts.spead]
 */
export function select(element, opts={}) {
  
  const elementClient = element.getBoundingClientRect();
  const div = html.div({
    className: '__select'
  });
  const placeholder = html.span({
    className: '__placeholder'
  })
  const options = element.options;
  const optionsContainer = html.div({
    className: '__options'
  });
  const mask = html.div({
    className: '__mask',
    onclick: hide
  });
  let containerHeight = 0;
  let height = opts.height || elementClient.height;
  let width = opts.width || elementClient.width;
  let spead = opts.spead || 1;
  let obj = {};
  
  element.style.display = 'none';
  div.appendChild(placeholder);
  placeholder.style.height = height + 'px';
  if (width) {
    placeholder.style.width = width + 'px';
  }

  obj.onchange = function () { };

  for (let i = 0; i < options.length; ++ i) {
    let option = html.span({
      className: '__option',
      attr: {
        "data-value": options[i].value
      },
      textContent: options[i].textContent,
      style: {
        height: height+'px'
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

  element.parentElement.insertBefore(div, element);


  function show() {
    document.body.appendChild(mask);
    document.body.appendChild(optionsContainer);
    let divClient = div.getBoundingClientRect();
    let _height = options.length * (height || 40);

    optionsContainer.style.top = divClient.top + 'px';
    optionsContainer.style.left = divClient.left + 'px';
    optionsContainer.style.width = divClient.width + 'px';
    optionsContainer.style.height = '0';

    if (divClient.bottom + _height > window.innerHeight) {
      optionsContainer.style.transform = 'translate(0, -100%)';

      if (divClient.top - _height < 0) {
        _height = _height - (_height - divClient.bottom - 20);
        optionsContainer.style.removeProperty('transform');
      } else {
        optionsContainer.style.width = (divClient.width + 40) + 'px';
        optionsContainer.style.overflowY = 'scroll';
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
    element.value = value;
    div.setAttribute('data-value', value);
    placeholder.textContent = text;
    obj.onchange(value);
    hide();
  }

  obj.customSelect = optionsContainer;
  obj.select = element;

  return obj;
}