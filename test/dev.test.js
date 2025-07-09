const babel = require('@babel/core');
const jsxToTag = require('../jsx/jsx-to-tag');
const syntaxParser = require('../jsx/syntax-parser');

const config = {
  plugins: [
    jsxToTag,
    syntaxParser,
  ],
};

test(`<div>
  <div>
    <span>
      Test
    </span>
  </div>  
</div>`, () => {
  const code = `<div>
  <div>
    <span>Test</span>
  </div>
</div>`;

  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("div", {
  children: [tag("div", {
    children: [tag("span", {
      children: ["Test"]
    })]
  })]
});`);
});