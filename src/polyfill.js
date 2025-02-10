const nodes = [Element.prototype, CharacterData.prototype, DocumentType.prototype];

if (!('flat' in Array.prototype)) {
  Object.defineProperty(Array.prototype, 'flat', {
    value: function (depth = 1) { // Default depth changed to 1 (spec compliance)
      const flatten = (arr, currentDepth) => {
        return arr.reduce((acc, val) => {
          if (Array.isArray(val) && currentDepth > 0) {
            return acc.concat(flatten(val, currentDepth - 1));
          } else {
            return acc.concat(val);
          }
        }, []);
      };
      return flatten(this, depth);
    },
    writable: true,
    configurable: true
  });
}

if (!('isConnected' in Node.prototype)) {
  Object.defineProperty(Node.prototype, 'isConnected', {
    get() {
      return (
        !this.ownerDocument ||
        !(
          this.ownerDocument.compareDocumentPosition(this) &
          this.DOCUMENT_POSITION_DISCONNECTED
        )
      );
    },
  });
}

if (!('get' in HTMLElement.prototype)) {
  Object.defineProperty(HTMLElement.prototype, 'get', {
    value(selector) {
      return this.querySelector(selector);
    }
  });
}

if (!('getAll' in HTMLElement.prototype)) {
  Object.defineProperty(HTMLElement.prototype, 'getAll', {
    value(selector) {
      return this.querySelectorAll(selector);
    }
  });
}

if (!('content' in HTMLElement.prototype)) {
  Object.defineProperty(HTMLElement.prototype, 'content', {
    set: function (value) {
      this.innerHTML = '';
      if (Array.isArray(value)) {
        value = value.flat();
        value.forEach((child) => {
          if (child instanceof Node) {
            this.append(child);
            return;
          }

          if (typeof child === 'string') {
            this.append(document.createTextNode(child));
            return;
          }

          if (typeof child === 'number') {
            this.append(document.createTextNode(`${child}`));
            return;
          }
        });
        return;
      }
      this.append(value);
    },
    get: function () {
      const children = [...this.children];
      if (children.length === 0) {
        return null;
      }
      if (children.length === 1) {
        return children[0];
      }

      return children;
    },
  });
}


[Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (item) {
  if (!item.hasOwnProperty('remove')) {
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        if (this.parentNode === null) {
          return;
        }
        this.parentNode.removeChild(this);
      }
    });
  }

  if (!item.hasOwnProperty('append')) {
    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.appendChild(docFrag);
      }
    });
  }

  if (!item.hasOwnProperty('after')) {
    Object.defineProperty(item, 'after', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function after() {
        if (this.parentNode === null) {
          return;
        }
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.parentNode.insertBefore(docFrag, this.nextSibling);
      }
    });
  }
});
