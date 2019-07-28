let body = html.tag(document.querySelector('#slider'));
let slider1 = html.rangeSlider({
  min: 0,
  max: 100,
  step: 10,
  value: 46
});

let input1 = html.tag('input', {
  type: 'number',
  placeholder: 'change value'
});
input1.oninput = function () {
  if (input1.value) {
    slider1.setvalue(input1.value);
  }
};

body.appendChild(slider1);
body.appendChild(input1);

let input = html.tag('input', {
  type: 'number',
  placeholder: 'change value'
});
let buttonInc = html.tag('button', {
  textContent: 'inc',
  attr: {
    title: 'value: 46'
  },
  style: {
    marginLeft: '5px',
  }
});
let buttonDec = html.tag('button', {
  textContent: 'dec',
  style: {
    marginLeft: '5px',
  },
  attr: {
    title: 'value: 46'
  }
});
let slider2 = html.rangeSlider({
  min: 0,
  max: 100,
  step: 0.001,
  value: 46,
  size: 'small',
  onchange: function (val) {
    buttonDec.setAttribute('data-title', 'value: ' + val);
    buttonInc.setAttribute('data-title', 'value: ' + val);
  }
});
buttonInc.onclick = function () {
  slider2.setvalue(slider2.value + 1);
};
buttonDec.onclick = function () {
  slider2.setvalue(slider2.value - 1);
};
input.oninput = function () {
  if (input.value) {
    slider2.setvalue(input.value);
  }
};

body.appendChild(slider2);
body.appendChild(input);
body.appendChild(buttonInc);
body.appendChild(buttonDec);

body = html.tag(document.querySelector('#toggler'));
let togglerobj = html.toggler({
  size: 40,
  valType: 'on/off',
  value: true
});


togglerobj.onchange = function (value) {
  console.log(this.value);
};
body.appendChild(togglerobj);

togglerobj = html.toggler({
  size: 30,
  valType: 'on/off',
  value: true
});

body.appendChild(togglerobj);

togglerobj = html.toggler({
  size: 20,
  valType: 'on/off',
  value: true
});

body.appendChild(togglerobj);


let select = html.comboBox({
  select: document.querySelector('select'),
  height: 30,
  spead: 4
});

if (select.customSelect) {
  // let options = ['random word', 'moon', 'sun'];
  let options = ['random word', 'moon', 'sun', 'planet', 'so many options', 'more options', 'just one more option', 'what is option', 'choose', 'all of them', 'none of them', 'option A', 'option B', 'option C'];

  for (let i = 0; i < options.length; ++i) {
    select.addOption(options[i], options[i]);
  }
}

select.onchange = function (val) {
  console.log(val);
};

const testBtn = html.tag(document.querySelector('#test-button'));
const removeBtn = document.querySelector('#remove-button');
const assignBtn = document.querySelector('#assign-button');

testBtn.addEventListener('click', () => console.log('%cHello World', 'font-size:2em; color:#66f'));
testBtn.addEventListener('click', () => console.log('%cHello World', 'font-size:1.8em; color:#6f6'));
testBtn.addEventListener('click', () => console.log('%cHello World', 'font-size:1.6em; color:#f66'));

removeBtn.onclick = () => {
  testBtn.removeEvents();
};
assignBtn.onclick = () => {
  testBtn.assignRemovedEvents();
};

html.toolTip.init();

html.bubble.activateAll();