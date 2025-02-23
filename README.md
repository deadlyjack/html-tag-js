# html-tag-js

A simple library for creating and manipulating DOM using JavaScript DOM api with out of the box support for JSX like syntax.

## Documentation

### Installation

```bash
npm i html-tag-js
```

or directly import into browser

```text
path/to/html-tag-js/dist/tag.js
```

### Enable JSX like syntax

To enable JSX like syntax, use `html-tag-js/tag-loader` as loader in webpack.

```js
module.exports = {
  module: {
    ...
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['html-tag-js/jsx/tag-loader.js'],
      },
      ...
    ],
  },
};
```

And in add following lines in babel configuration file.

```js
{
  ...
  "plugins": [
    "html-tag-js/jsx/jsx-to-tag.js",
    "html-tag-js/jsx/syntax-parser.js",
    ...
  ],
  ...
}
```

### Usage

To create elements, use `tag` function. It accepts tag name, options and children as arguments. Checkout [tag](./docs/tag.md) for more details.

```javascript
import 'html-tag-js/dist/polyfill'; // optional
// no need to import tag from 'html-tag-js'
// if you are using tag-loader
import tag from 'html-tag-js';
```

### Cheat Sheet

#### Use `Reactive` to create reactive node

To create a reactive node, use `Reactive` constructor. It accepts initial value and returns an object with `value` property to get/set the value and `onChange` callback to listen for value changes. Checkout [Reactive](./docs/reactive.md) for more details.

```javascript
import Reactive from 'html-tag-js/Reactive';

const count = Reactive(0);

document.body.append(
  <div>
    <h1>{count}</h1>
    <button onclick={() => count.value++}>Increment</button>
  </div>
);
```

#### Use `Ref` to get reference of the node

To get reference of the node, use `Ref` constructor. It accepts a callback function which will be called with the node as argument. Checkout [Ref](./docs/ref.md) for more details.

```javascript
import Ref from 'html-tag-js/Ref';

const ref = Ref(node => {
  console.log(node); // <h1>Hello</h1>
});

// Change style of the node before or after referencing
ref.style.color = 'red';

document.body.append(
  <div>
    <h1 ref={ref}>Hello</h1>
  </div>
);
```
