module.exports = (babel) => {
  const { types } = babel;

  return {
    name: 'quickpage-jsx-plugin',
    visitor: {
      JSXElement(path) {
        const { openingElement: el } = path.node;
        const { name: tagName } = el.name;
        const { attributes } = el;
        const args = [];
        const attrs = [];
        const children = [];
        const options = [
          types.objectProperty(
            types.identifier('children'),
            types.arrayExpression(children),
          ),
          types.objectProperty(
            types.identifier('attr'),
            types.objectExpression(attrs),
          ),
        ];

        path.node.children.forEach((node) => {
          const { type } = node;
          if (type === 'JSXElement') {
            children.push(node);
            return;
          }

          if (type === 'JSXText') {
            const tag = types.identifier('tag');
            const text = types.identifier('text');
            const callee = types.memberExpression(tag, text);
            const callExpression = types.callExpression(callee, [
              types.stringLiteral(node.value),
            ]);
            children.push(callExpression);
            return;
          }

          const { expression } = node;
          children.push(expression);
        });

        attributes.forEach((attr) => {
          const { name } = attr.name;
          const { type } = attr.value;
          let isString = false;
          let value;

          if (type === 'StringLiteral') {
            value = attr.value;
            isString = true;
          } else {
            value = attr.value.expression;
            isString = false;
          }

          if (name === 'className' || !isString) {
            options.unshift(types.objectProperty(
              types.identifier(name),
              value,
            ));
            return;
          }

          attrs.push(types.objectProperty(
            types.stringLiteral(name),
            value,
          ));
        });

        args.push(types.stringLiteral(tagName));

        const identifier = types.identifier('tag');
        const callExpression = types.callExpression(identifier, args);
        callExpression.arguments = callExpression.arguments.concat(
          types.objectExpression(options),
        );
        path.replaceWith(callExpression, path.node);
      },
    },
  };
};