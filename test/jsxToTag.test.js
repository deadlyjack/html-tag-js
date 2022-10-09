const babel = require('@babel/core');
const jsxToTag = require('../jsx/jsx-to-tag');
const syntaxparser = require('../jsx/syntax-parser');

const config = {
  plugins: [
    jsxToTag,
    syntaxparser,
  ],
};

test('<div className=\'test\'></div>', () => {
  const transformed = babel.transformSync(`<div className='test'></div>`, config);
  expect(transformed.code).toBe(`tag("div", {
  className: 'test',
  children: [],
  attr: {}
});`);
});

test('<div className=\'test\' id=\'mydiv\'></div>', () => {
  const transformed = babel.transformSync(`<div className='test' id='mydiv'></div>`, config);
  expect(transformed.code).toBe(`tag("div", {
  id: 'mydiv',
  className: 'test',
  children: [],
  attr: {}
});`);
});

test('<div className=\'test\' id=\'mydiv\' attr-section={section}></div>', () => {
  const code = `<div className='test' id='mydiv' attr-section={section}></div>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("div", {
  id: 'mydiv',
  className: 'test',
  children: [],
  attr: {
    "section": section
  }
});`);
});

test('<div required></div>', () => {
  const code = `<div required></div>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("div", {
  children: [],
  attr: {
    "required": ""
  }
});`);
});

test('<div required=\'true\'></div>', () => {
  const code = `<div required='true'></div>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("div", {
  required: 'true',
  children: [],
  attr: {}
});`);
});

test('<div required={true}></div>', () => {
  const code = `<div required={true}></div>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("div", {
  required: true,
  children: [],
  attr: {}
});`);
});

test('<div attr-required={true}></div>', () => {
  const code = `<div attr-required={true}></div>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("div", {
  children: [],
  attr: {
    "required": true
  }
});`);
});

test(`<></>`, () => {
  const code = `<>
  <div className='test1'></div>
  <div className='test2'></div>
</>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`[tag.text("\\n  "), tag("div", {
  className: 'test1',
  children: [],
  attr: {}
}), tag.text("\\n  "), tag("div", {
  className: 'test2',
  children: [],
  attr: {}
}), tag.text("\\n")];`);
});

test(`<Test></Test>`, () => {
  const code = `<Test>
  <div className='test1'></div>
  <div className='test2'></div>
</Test>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag(Test, {}, [tag.text("\\n  "), tag("div", {
  className: 'test1',
  children: [],
  attr: {}
}), tag.text("\\n  "), tag("div", {
  className: 'test2',
  children: [],
  attr: {}
}), tag.text("\\n")]);`);
});

test(`<>test</>`, () => {
  const code = `const test = <>test</>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`const test = tag.use("test");`);
});

test(`<>0</>`, () => {
  const code = `const test = <>0</>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`const test = tag.use(0);`);
});

test(`<>{text}</>`, () => {
  const code = `const test = <>{test}</>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`const test = tag.use(test);`);
});
