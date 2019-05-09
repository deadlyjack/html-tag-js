import './css/main.css';

import * as html from './html';

// import {
//   a,
//   bubble,
//   button,
//   create,
//   div,
//   get,
//   getAll,
//   img,
//   input,
//   span
// } from './html';
import {
  rangeSlider
} from './rangeSlider';
import {
  select
} from './custom-select';
import {
  toolTip
} from './tooltip';
import {
  toggler
} from './toggler';

let exprt = {
  rangeSlider,
  toolTip,
  toggler,
  select
}

for (let key in html) {
  exprt[key] = html[key];
}

export const xprt = exprt;

export default exprt;

// export {
//   a,
//   bubble,
//   button,
//   create,
//   div,
//   get,
//   getAll,
//   img,
//   input,
//   rangeSlider,
//   span,
//   toolTip
// }