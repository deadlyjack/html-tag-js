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

const exprt = {
  ...html,
  rangeSlider,
  toolTip
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