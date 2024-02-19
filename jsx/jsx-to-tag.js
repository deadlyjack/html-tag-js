module.exports = (babel) => {
  const { types: t } = babel;

  return {
    name: 'quickpage-jsx-plugin',
    visitor: {
      JSXFragment(path) {
        const { node } = path;
        const { children: childrenNode } = node;
        const tag = t.identifier('tag');
        const text = t.identifier('use');
        const callee = t.memberExpression(tag, text);

        if (childrenNode.length === 0) {
          path.replaceWith(t.callExpression(callee, []), node);
          return;
        }

        if (childrenNode.length === 1) {
          let [el] = childrenNode;
          let arg;
          const { type } = el;
          if (type === 'JSXText') {
            const { value } = el;
            arg = isNaN(value) ? t.stringLiteral(value) : t.numericLiteral(+value);
          } else if (type === 'JSXElement') {
            arg = el;
          } else {
            arg = el.expression;
          }

          const replacement = t.callExpression(callee, [arg]);
          path.replaceWith(replacement, node);
          return;
        }

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
        const { name: tagName } = el.name;
        const { attributes } = el;

        const args = [];
        const attrs = [];
        const on = [];
        const children = [];
        const options = [];
        const events = {};
        const isComponent = /^[A-Z]((?!-).)*$/.test(tagName);

        populateChildren(childrenNode, children, t);

        attributes.forEach((attr) => {
          if (attr.type === 'JSXSpreadAttribute') {
            attrs.push(t.spreadElement(attr.argument));
            return;
          }

          let { name, namespace } = attr.name;

          if (namespace) {
            namespace = namespace.name;
            name = name.name;
          }

          if (!attr.value) {
            attrs.push(t.objectProperty(
              t.stringLiteral(name),
              t.stringLiteral(''),
            ));
            return;
          }

          const { type } = attr.value;
          let isAttr = /-/.test(name);
          let value;

          if (type === 'StringLiteral') {
            value = attr.value;
          } else {
            value = attr.value.expression;
          }

          if (namespace) {
            if (namespace !== 'on') return;
            if (!events[name]) {
              events[name] = [];
              on.push(t.objectProperty(
                t.stringLiteral(name),
                t.arrayExpression(events[name]),
              ));
            }

            events[name].push(value);
            return;
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
            return;
          }

          (isComponent ? attrs : options)
            .unshift(t.objectProperty(
              t.identifier(name),
              value,
            ));
        });

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

          if (children.length) {
            options.push(
              t.objectProperty(
                t.identifier('children'),
                t.arrayExpression(children),
              )
            );
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
  childrenNode.forEach((node) => {
    node = parseNode(t, node);
    if (!node) return;
    children.push(node);
  });
}
