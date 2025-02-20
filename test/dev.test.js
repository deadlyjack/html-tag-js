const babel = require('@babel/core');
const jsxToTag = require('../jsx/jsx-to-tag');
const syntaxParser = require('../jsx/syntax-parser');

const config = {
  plugins: [
    jsxToTag,
    syntaxParser,
  ],
};

test(`<alert.error />`, () => {
  const code = `<alert.error />`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag(alert.error);`);
});

test(`<svg xmlns:xlink="http://www.w3.org/1999/xlink"></svg>`, () => {
  const code = `<svg xmlns:xlink="http://www.w3.org/1999/xlink"></svg>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("svg", {
  attr: {
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }
});`);
});