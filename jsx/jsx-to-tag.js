module.exports = (babel) => {
  const { types: t } = babel;

  return {
    name: 'quickpage-jsx-plugin',
    visitor: {
      JSXFragment(path) {
        const { node } = path;
        const { children: childrenNode } = node;

        if (childrenNode.length === 1) {
          let [el] = childrenNode;
          let arg;
          const { type } = el;
          const tag = t.identifier('tag');
          const text = t.identifier('use');
          const callee = t.memberExpression(tag, text);
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

        childrenNode.forEach((node) => {
          children.push(parseNode(t, node));
        });

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
        const children = [];
        const options = [
          t.objectProperty(
            t.identifier('children'),
            t.arrayExpression(children),
          ),
          t.objectProperty(
            t.identifier('attr'),
            t.objectExpression(attrs),
          ),
        ];

        const isComponent = /^[A-Z]((?!-).)*$/.test(tagName);

        childrenNode.forEach((node) => {
          children.push(parseNode(t, node));
        });

        attributes.forEach((attr) => {
          let { name } = attr.name;

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
            isString = true;
          } else {
            value = attr.value.expression;
            isString = false;
          }

          const attrRegex = /^attr-(.+)/;
          if (attrRegex.test(name)) {
            [, name] = attrRegex.exec(name);
            isAttr = true;
          }

          if (isAttr) {
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
          args.push(
            t.identifier(tagName),
            t.objectExpression(attrs),
            t.arrayExpression(children),
          );
        } else {
          args.push(
            t.stringLiteral(tagName),
            t.objectExpression(options),
          );
        }

        const identifier = t.identifier('tag');
        const callExpression = t.callExpression(identifier, args);
        path.replaceWith(callExpression, node);
      },
    },
  };
};

function parseNode(types, node) {
  const { type } = node;

  if (type === 'JSXText') {
    const tag = types.identifier('tag');
    const text = types.identifier('text');
    const callee = types.memberExpression(tag, text);
    return types.callExpression(callee, [
      types.stringLiteral(node.value),
    ]);
  }

  if (type === 'JSXElement') {
    return node;
  }

  const { expression } = node;
  return expression;
}
