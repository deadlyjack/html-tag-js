# Change log html-tag-js

## 2.4.0

- Shortened `tag` function to for jsx. Now you can use `tag('div', 'class', 'id', children, options)` instead of `tag('div', options)`.
- Revert the change where jsx was ignoring whitespace only text nodes. Now it will render text nodes as they are.

## 2.0.0

- Removed `tag.use` method instead use `html-tag-js/Reactive` to create reactive node. E.g. `const count = Reactive(0);`
- Now you can pass `onref` callback to `Ref(onrefCallback)` constructor to get reference of the node.
- Supports promise in children. E.g. `<div>{Promise.resolve('hello')}</div` will render `<div>hello</div>`

## 1.4.0

- Filter out null and undefined node from children
  e.g.

  ```jsx
  <div>
    {null}
    <span>hello</span>
    {undefined}
  </div>
  ```

  will render

  ```html
  <div>
    <span>hello</span>
  </div>
  ```

- Support for empty JSXExpression
  e.g.

  ```jsx
  <div>{}</div>
  ```

  will render

  ```html
  <div></div>
  ```

- Removed tag.parse method
