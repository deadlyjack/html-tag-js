# html-element-js

**NOTE:** Please do not install this library for prduction because this library is very unstable.

A simple library for creating and manipulating DOM using JavaScript DOM api.
See [demo](https://deadlyjack.github.io/html-element-js/demo/)

## Documentation

### Installation

```bash
npm install --save html-element-js
```

or directly import into browser

```text
path/to/html-element-js/dist/tag.js
```

### Usage

#### es6

```javascript
import tag from 'html-tag-js';
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
