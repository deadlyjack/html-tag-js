# html-element-js

**NOTE:** Please do not install this library for prduction because this library is very unstable.

A simple library for creating and manipulating DOM using JavaScript DOM api.
See [demo](https://deadlyjack.github.io/html-element-js/build/)

## Documentation

### Installation

```bash
npm install --save html-element-js
```

or directly import into browser

```text
path/to/html-element-js/build/html-element.js
```

### Usage

#### Import in webpack

##### To import all

```javascript
import html from 'html-element-js';
```

###### To only import html

```javascript
import * as html from '/node-modules/src/html';
```

##### *If you are importing a part of library please import css*

```javascript
import '/node-modules/src/css/main.css';
```

##### To only import rangeSlider

```javascript
import rangeSlider from '/node-modules/src/rangeSlider';
```

##### To only import toggler

```javascript
import toggler from '/node-modules/src/toggler';
```

##### To only import custom select

```javascript
import select from '/node-modules/src/custrom-select';
```

#### Create a new element

##### To create a span tag

```javascript
const span = html.tag('span');
```

###### Creating element with options

```javascript
const span = html.tag('span' ,{
  textContent: 'This is span tag',
  className: 'myspan',
  id: 'span1'
});
```

##### HTML tags

* create tag `html.tag(tagName:String, options?:Object)` anchor tag

### Remove event listeners

#### Remove all EventListeners

```javascript
const mydiv = html.div();
mydiv.addEventListener('click', function(e){
  console.log(e);
}); //adds a event listener

mydiv.removeEvents(); //remvoes all event listener
```

#### Remove specific EventListeners

```javascript
const mydiv = html.div();
mydiv.addEventListener('click', function(e){
  console.log(e);
}); //adds a event listener

mydiv.removeEvents('click'); //remvoes all click event listener
```

see [demo](https://deadlyjack.github.io/html-element-js/#bubble)

### Range slider

Creates range slider equivalent to input type range

```javascript
const slider = html.rangeSlider({
  min: 0,
  max: 100,
  step: 2,
  value: 46
});
```

###### Properties
* **min** number:*private* (minimum value of range)
* **max** number:*private* (maximum value of range)
* **size** string:*private* (size of slider)
* **step** string:*private* (step value)
* **value** number:*public*

###### Methods
* **onchange** function:*public*
* **setvalue** function:*public*

### Toggler

Creates a toggle button equivalent to input type checkbox or radio

```javascript
const toggler = html.toggler({
  size: 40,
  valType: 'on/off',
  value: true
});
```

###### Properties
* **size** number:*private* (size of slider)
* **valType** string:*private* (step value, possible value 'bool' or 'on/off')
* **value** number:*public*

###### Methods
* **onchange** function:*public*
* **setvalue** function:*public*

### Custom select

Creates a toggle button equivalent to input type checkbox or radio

```javascript
const toggler = html.select({
  spead: 2, //min 1 max any. Greater value fater opening animation. See in demo
  height: 30, //height of option
  maxheight: 300 //max height of option container.
});
```

###### options
* **spead** number (spead of animation of opening select options)
* **height** number (height of option)
* **maxheight** number (max height of option container)
* **select** Element (Select element from DOM)

###### Methods
* **addOption** function:*public*
* **removeOption** function:*public*
* **setvalue** funtion:*public*
* **value** function:*public*
