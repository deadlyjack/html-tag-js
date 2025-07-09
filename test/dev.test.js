const babel = require('@babel/core');
const jsxToTag = require('../jsx/jsx-to-tag');
const syntaxParser = require('../jsx/syntax-parser');

const config = {
  plugins: [
    jsxToTag,
    syntaxParser,
  ],
};

test('Test JSX to Tag Transformation', () => {
  const code = `
const id = 'test';
<div id={id} className="test-class" onClick={() => {}} onMouseOver={() => {}}>
  <div className="inner"></div>  
</div>
`;

  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`const id = 'test';
tag("div", "test-class", id, ["\\n  ", tag("div", "inner"), "  \\n"], {
  onMouseOver: () => {},
  onClick: () => {}
});`);
});