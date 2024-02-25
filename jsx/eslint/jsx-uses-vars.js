const isTagNameRe = /^[a-z]/;
const isTagName = (name) => isTagNameRe.test(name);

module.exports = {
  // eslint-disable-next-line eslint-plugin/prefer-message-ids -- https://github.com/not-an-aardvark/eslint-plugin-eslint-plugin/issues/292
  meta: {
    docs: {
      description: 'Disallow variables used in JSX to be incorrectly marked as unused',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
  },

  create(context) {
    return {
      JSXOpeningElement(node) {
        let name;
        if (node.name.namespace) {
          // <Foo:Bar>
          return;
        }
        if (node.name.name) {
          // <Foo>
          name = node.name.name;
          // Exclude lowercase tag names like <div>
          if (isTagName(name)) {
            return;
          }
        } else if (node.name.object) {
          // <Foo...Bar>
          let parent = node.name.object;
          while (parent.object) {
            parent = parent.object;
          }
          name = parent.name;
        } else {
          return;
        }

        context.markVariableAsUsed(name);
      },
    };
  },
};