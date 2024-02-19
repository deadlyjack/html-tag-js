# Change log html-tag-js

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
