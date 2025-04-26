# html-tag-js/ref Documentation

A lightweight helper class to manage HTML element references with deferred DOM operations.

## Features

- Deferred element handling (works even if the element doesn't exist yet)
- Proxy properties for common element attributes
- Event listeners for element availability
- Chainable DOM operations

## Basic Usage

### 1. Import the module

```js
import Ref from 'html-tag-js/ref';
```

### 2. Create a reference

```js
const myRef = Ref();
```

### 3. Use proxy properties (works before element exists)

```js
myRef.id = 'my-element';
myRef.classList.add('container');
```

### 4. Handle element availability

```js
myRef.onref = (element) => {
  console.log('Element is ready:', element);
};
```

### 5. Attach to DOM

```js
// Later in your code when element is created
document.body.append(myRef.el);
```

## Core Properties/Methods

### `el`

```js
// Get the actual HTML element (null until created)
const element = myRef.el;
```

### Element Querying

| Method       | Description                          |
|--------------|--------------------------------------|
| `get()`      | Query child elements                 |
| `getAll()`   | Query all matching child elements    |
| `static isRef(value)` | Check if a value is a reference instance |

```js
const btn = myRef.get('#submit-btn');
const images = myRef.getAll('img');
```

### Attributes

```js
// Set attribute
myRef.setAttribute('data-custom', 'value');

// Remove attribute
myRef.removeAttribute('data-custom');

// Get attribute
const value = myRef.getAttribute('data-custom');
```

### Event Handling

```js
// Listen for element availability
myRef.on('ref', (element) => {
  console.log('Element ready:', element);
});

// Remove listener
myRef.off('ref', callback);
```

### Proxy Properties

Set these even if element doesn't exist yet:

```js
myRef.id = 'main-content';
myRef.className = 'page-wrapper';
myRef.style.color = 'red';
myRef.textContent = 'Loading...';
```

### DOM Manipulation

```js
// Append children
myRef.append(otherElement, anotherElement);
```

## Complete Example

```js
import Ref from 'html-tag-js/ref';

// Create reference
const cardRef = Ref();

// Configure element
cardRef.classList.add('card', 'shadow');
cardRef.style.opacity = '0';
cardRef.innerHTML = '<h2>Loading...</h2>';

// Handle element availability
cardRef.onref = (element) => {
  element.classList.add('fade-in');
  element.style.opacity = '1';
};

// Add to DOM later
setTimeout(() => {
  document.body.append(cardRef.el);
}, 1000);
```

## Key Notes

- All property setters work **before the element exists**
- Getters return stored values until element is created
- `onref` event fires when element is first assigned/created
- Methods like `get()`/`getAll()` only work after element exists

This pattern is particularly useful for:

- Web components
- Dynamic UI creation
- Framework-free reactive programming
- Delayed DOM operations
