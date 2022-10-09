module.exports = (babel) => {
  const { types } = babel;

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
          const tag = types.identifier('tag');
          const text = types.identifier('use');
          const callee = types.memberExpression(tag, text);
          if (type === 'JSXText') {
            arg = types.stringLiteral(el.value);
          } else if (type === 'JSXElement') {
            arg = el;
          } else {
            arg = el.expression;
          }


          console.log(arg);

          const replacement = types.callExpression(callee, [arg]);
          path.replaceWith(replacement, node);
          return;
        }

        const children = [];

        childrenNode.forEach((node) => {
          children.push(parseNode(types, node));
        });

        const arrayExpression = types.arrayExpression(children);
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
          types.objectProperty(
            types.identifier('children'),
            types.arrayExpression(children),
          ),
          types.objectProperty(
            types.identifier('attr'),
            types.objectExpression(attrs),
          ),
        ];

        const isComponent = /^[A-Z]((?!-).)*$/.test(tagName);

        childrenNode.forEach((node) => {
          children.push(parseNode(types, node));
        });

        attributes.forEach((attr) => {
          let { name } = attr.name;

          if (!attr.value) {
            attrs.push(types.objectProperty(
              types.stringLiteral(name),
              types.stringLiteral(''),
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
            attrs.push(types.objectProperty(
              types.stringLiteral(name),
              value,
            ));
            return;
          }

          (isComponent ? attrs : options)
            .unshift(types.objectProperty(
              types.identifier(name),
              value,
            ));
        });

        if (isComponent) {
          args.push(
            types.identifier(tagName),
            types.objectExpression(attrs),
            types.arrayExpression(children),
          );
        } else {
          args.push(
            types.stringLiteral(tagName),
            types.objectExpression(options),
          );
        }

        const identifier = types.identifier('tag');
        const callExpression = types.callExpression(identifier, args);
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
