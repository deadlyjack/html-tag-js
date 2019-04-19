let body = html.get('#body');
let slider = html.rangeSlider({
  min: 0,
  max: 100,
  step: 1,
  size: 'small'
});

slider.onchange = function () {
  console.log(this.value);
}

let setvalue = document.querySelector('#setValue');
let input = document.querySelector('#sliderValue');

if (setvalue) {
  setvalue.onclick = function () {
    if (input.value) {
      slider.setValue(input.value);
    }
  }
}


body.appendChild(slider);