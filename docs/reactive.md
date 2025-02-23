# html-tag-js/reactive Documentation

A lightweight reactive primitive for creating auto-updating text nodes in DOM.

## Features

- Automatic DOM updates when values change
- Simple value binding syntax
- Support for multiple DOM locations through cloning
- Custom change handlers

## Basic Usage

### 1. Import the module

```js
import Reactive from 'html-tag-js/reactive';
```

### 2. Create reactive value

```js
const count = Reactive(0);
```

### 3. Use in DOM

```js
document.body.append(
  <div>
    <h1>{count}</h1>
    <button onclick={() => count.value++}>Increment</button>
  </div>
);
```

## Core API

### `Reactive(initialValue)`

Creates a reactive text node

```js
const message = Reactive('Hello');
```

### Properties

| Property   | Description                                      |
|------------|--------------------------------------------------|
| `value`    | Get/set the current value (triggers DOM updates) |
| `onChange` | Callback function when value changes             |

### Methods

| Method    | Description                                     |
|-----------|-------------------------------------------------|
| `toString()` | Returns string representation of the value   |

## Complete Example

```js
import Reactive from 'html-tag-js/reactive';

// Create reactive value
const temp = Reactive(25);

// Add change handler
temp.onChange = (value) => {
  console.log('New temperature:', value);
};

// Create UI with JSX-like syntax
document.body.append(
  <div>
    <h2>Temperature Control</h2>
    <div class="display">{temp}°C</div>
    <button onclick={() => temp.value--}>Cooler</button>
    <button onclick={() => temp.value++}>Warmer</button>
    
    {/* Clone works in multiple locations */}
    <div class="sidebar">Current: {temp}</div>
  </div>
);
```

## Key Features

### Automatic Updates

```js
// All DOM instances update automatically
const counter = Reactive(0);
setInterval(() => counter.value++, 1000);
```

### Value Binding

```js
// Use curly braces in JSX templates
<div>Count: {counter}</div>
```

### Synchronized Clones

```js
const mainDisplay = Reactive(100);
const sidebarDisplay = mainDisplay.clone();

// Updating either affects both DOM locations
mainDisplay.value = 200;  // Updates both displays
```

### Change Handling

```js
const user = Reactive('Anonymous');
user.onChange = (name) => {
  console.log(`User changed to: ${name}`);
};
```

## Best Practices

- Use for primitive values (numbers, strings)
- Clean up event handlers when unmounting
