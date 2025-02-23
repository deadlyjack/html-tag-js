# html-tag-js/tag Documentation

A DOM creation utility with JSX-like syntax, async support, and reactive integration.

## Installation

```bash
npm install html-tag-js
```

## Features

- Declarative element creation
- Support for async children
- Reactive text integration
- Attribute/event shorthand syntax
- Promise-based dynamic content

## Basic Usage

### 1. Import the module

```js
import tag from 'html-tag-js/tag';
```

### 2. Create elements

```js
const element = tag('div', {
  id: 'container',
  style: { background: 'white' },
  children: [
    tag('h1', 'Hello World'),
    tag('button', { 
      onclick: [() => console.log('Clicked!')],
      children: ['Click me']
    })
  ]
});

document.body.append(element);
```

## Core API

### `tag(tagName, options?, children?)`

Create DOM elements with nested structure

**Parameters:**

- `tagName`: String | Function | Node
- `options`: Object (optional)
- `children`: Array (optional)

**Returns:** HTMLElement

## Options Handling

### Special Properties

| Property   | Description                              | Example                      |
|------------|------------------------------------------|------------------------------|
| `attr`     | HTML attributes                         | `{ attr: { id: 'main' } }`   |
| `style`    | CSS styles                              | `{ style: { color: 'red' } }`|
| `dataset`  | Data attributes                         | `{ dataset: { id: '123' } }` |
| `on`       | Event listeners                         | `{ on: { click: [handler] } }`|
| `child`    | Single child element                    | `{ child: tag('span') }`     |
| `children` | Array of child elements                 | `{ children: [ ... ] }`      |
| `ref`      | Reference to previous Ref class         | `{ ref: myRef }`             |

### Standard Properties

All other properties are set directly on the element:

```js
tag('input', { type: 'text', placeholder: 'Enter name' })
```

## Children Handling

### Supported Child Types

```js
tag('div', [
  'Text node',                         // String
  tag('span'),                         // Element
  42,                                  // Number
  Reactive('Dynamic'),                 // Reactive text
  new Promise(...),                    // Async content
  [tag('li', 'Item 1'), tag('li', 'Item 2')] // Nested arrays
]);
```

### Async Children Example

```js
tag('div', [
  'Loading...',
  fetch('/data').then(data => 
    tag('ul', data.map(item => 
      tag('li', item.name)
    ))
  )
]);
```

## Reactive Integration

```js
const count = Reactive(0);

tag('div', [
  tag('h1', { 
    children: ['Count: ', count]
  }),
  tag('button', {
    onclick: [() => count.value++],
    style: { color: 'blue' },
    children: ['Increment']
  })
]);
```

## Static Methods

### `tag.get(selector)`

```js
const header = tag.get('#main-header');
```

### `tag.getAll(selector)`

```js
const buttons = tag.getAll('.btn');
```

### `tag.text(content)`

```js
const textNode = tag.text('Hello World');
```

## Complete Example

```js
import tag from 'html-tag-js/tag';
import Reactive from 'html-tag-js/reactive';

const user = Reactive('Guest');

const app = tag('main', {
  attr: { id: 'app-container' },
  children: [
    tag('header', {
      style: { 
        padding: '1rem',
        background: '#f0f0f0'
      },
      children: [
        tag('h1', 'Welcome ', user)
      ]
    }),
    tag('section', {
      children: [
        tag('input', {
          type: 'text',
          placeholder: 'Enter name',
          on: {
            input: [(e) => user.value = e.target.value]
          }
        }),
        tag('div', {
          children: [
            new Promise(resolve => {
              setTimeout(() => resolve(
                tag('p', 'Async loaded content!')
              ), 1000);
            })
          ]
        })
      ]
    })
  ]
});

document.body.append(app);
```

## Best Practices

1. Use `children` for multiple elements, `child` for single elements
2. Prefer `attr` for HTML attributes over direct property access
3. Wrap event handlers in arrays for multiple listeners
4. Use `tag.text()` for explicit text node creation
5. Combine with Reactive for dynamic content updates
6. Handle Promise rejections in async children

## Error Handling

- Throws error for invalid tag types
- Warns for non-array children in `children` property
- Ignores undefined values in children
- Automatically flattens nested arrays

## Performance Notes

- Async children create placeholder nodes
- Reactive text nodes are automatically cloned
- Batch DOM operations using fragment patterns
- Avoid deep nested Promise chains in children
