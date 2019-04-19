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

body.appendChild(slider);