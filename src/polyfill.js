const nodes = [Element.prototype, CharacterData.prototype, DocumentType.prototype];

if (!('flat' in Array.prototype)) {
  Object.defineProperty(Array.prototype, 'flat', {
    value(depth = Infinity) {
      return depth > 0
        ? this.reduce((acc, val) => acc.concat(val.flat()), [])
        : this.slice();
    }
  })
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
        this.append(...value);
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
});
