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
  toolTip
} from './tooltip';
import {
  toggler
} from './toggler';

const exprt = {
  ...html,
  rangeSlider,
  toolTip,
  toggler
};

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