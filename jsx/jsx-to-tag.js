module.exports = (babel) => {
  const { types: t } = babel;

  return {
    name: 'quickpage-jsx-plugin',
    visitor: {
      JSXFragment(path) {
        const { node } = path;
        const { children: childrenNode } = node;

        const children = [];
        populateChildren(childrenNode, children, t);
        const arrayExpression = t.arrayExpression(children);
        path.replaceWith(arrayExpression, node);
      },
      JSXElement(path) {
        const { node } = path;
        const {
          openingElement: el,
          children: childrenNode,
        } = node;
        let { name: tagName } = el.name;
        const { attributes } = el;

        let id;
        let className;
        const on = [];
        const args = [];
        const attrs = [];
        const children = [];
        const options = [];
        const events = {};
        let isComponent = /^(?:[A-Z][a-zA-Z0-9_$]*|(?:[a-zA-Z_$][a-zA-Z0-9_$]*\.)+[a-zA-Z_$][a-zA-Z0-9_$]*)$/.test(tagName);

        if (el.name.type === 'JSXMemberExpression') {
          const { object, property } = el.name;
          tagName = `${object.name}.${property.name}`;
          isComponent = true;
        }

        populateChildren(childrenNode, children, t);

        for (const attr of attributes) {
          if (attr.type === 'JSXSpreadAttribute') {
            attrs.push(t.spreadElement(attr.argument));
            continue;
          }

          let { name, namespace } = attr.name;

          if (!isComponent) {
            if (name === 'id') {
              if (attr.value && attr.value.type === 'StringLiteral') {
                id = attr.value;
              } else if (attr.value && attr.value.type === 'JSXExpressionContainer') {
                id = attr.value.expression;
              }
              continue;
            }

            if (['class', 'className'].includes(name)) {
              if (attr.value && attr.value.type === 'StringLiteral') {
                className = attr.value;
              } else if (attr.value && attr.value.type === 'JSXExpressionContainer') {
                className = attr.value.expression;
              }
              continue;
            }
          }

          if (namespace) {
            namespace = namespace.name;
            name = name.name;
          }

          if (!attr.value) {
            attrs.push(t.objectProperty(
              t.stringLiteral(name),
              t.stringLiteral(''),
            ));
            continue;
          }

          const { type } = attr.value;
          const isAttr = /-/.test(name);
          let value;

          if (type === 'StringLiteral') {
            value = attr.value;
          } else {
            value = attr.value.expression;
          }

          if (namespace) {
            if (!['on', 'once', 'off'].includes(namespace)) {
              attrs.push(t.objectProperty(
                t.stringLiteral(namespace === 'attr' ? name : `${namespace}:${name}`),
                value,
              ));
              continue;
            }

            if (namespace === 'off') continue;

            if (!events[name]) {
              events[name] = [];
              on.push(t.objectProperty(
                t.stringLiteral(name),
                t.arrayExpression(events[name]),
              ));
            }

            events[name].push(value);
            continue;
          }

          if (isAttr) {
            const attrRegex = /^attr-(.+)/;
            if (attrRegex.test(name)) {
              [, name] = attrRegex.exec(name);
            }

            attrs.push(t.objectProperty(
              t.stringLiteral(name),
              value,
            ));
            continue;
          }

          (isComponent ? attrs : options)
            .unshift(t.objectProperty(
              t.identifier(name),
              value,
            ));
        }

        if (isComponent) {
          args.push(t.identifier(tagName));

          if (on.length > 0) {
            attrs.push(
              t.objectProperty(
                t.identifier('on'),
                t.objectExpression(on),
              )
            );
          }

          if (attrs.length > 0) {
            args.push(t.objectExpression(attrs));
          }

          if (children.length > 0) {
            args.push(t.arrayExpression(children));
          }
        } else {
          args.push(t.stringLiteral(tagName));

          if (on.length > 0) {
            options.push(
              t.objectProperty(
                t.identifier('on'),
                t.objectExpression(on),
              )
            );
          }

          if (attrs.length > 0) {
            options.push(
              t.objectProperty(
                t.identifier('attr'),
                t.objectExpression(attrs),
              )
            );
          }

          if (id || className) {
            if (className) {
              args.push(className);
            } else if (id) {
              args.push(t.nullLiteral());
            }

            if (id) {
              args.push(id);
            }
          }

          if (children.length) {
            args.push(t.arrayExpression(children));
          }

          if (options.length) {
            args.push(t.objectExpression(options));
          }
        }

        const identifier = t.identifier('tag');
        const callExpression = t.callExpression(identifier, args);
        path.replaceWith(callExpression, node);
      },
    },
  };
};

/**
 * Parse node to expression
 * @param {any} types  babel.types
 * @param {any} node 
 * @returns expression
 */
function parseNode(types, node) {
  const { type } = node;

  if (type === 'JSXText') {
    return types.stringLiteral(node.value);
  }

  if (type === 'JSXElement') {
    return node;
  }

  const { expression } = node;
  const invalidExpressions = ['JSXEmptyExpression'];

  if (invalidExpressions.includes(expression.type)) {
    return null;
  }

  return expression;
}

/**
 * Populate children
 * @param {Array<any>} childrenNode 
 * @param {Array<any>} children 
 * @param {any} t 
 */
function populateChildren(childrenNode, children, t) {
  for (let node of childrenNode) {
    node = parseNode(t, node);
    if (!node) continue;
    children.push(node);
  }
}
