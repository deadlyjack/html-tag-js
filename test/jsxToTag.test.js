const babel = require('@babel/core');
const jsxToTag = require('../jsx/jsx-to-tag');
const syntaxparser = require('../jsx/syntax-parser');

test('<div className=\'test\'></div>', () => {
  const transformed = babel.transformSync(`<div className='test'></div>`, {
    plugins: [
      jsxToTag,
      syntaxparser,
    ],
  });
  expect(transformed.code).toBe(`tag("div", {
  className: 'test',
  children: [],
  attr: {}
});`);
});

test('<div className=\'test\' id=\'mydiv\'></div>', () => {
  const transformed = babel.transformSync(`<div className='test' id='mydiv'></div>`, {
    plugins: [
      jsxToTag,
      syntaxparser,
    ],
  });
  expect(transformed.code).toBe(`tag("div", {
  id: 'mydiv',
  className: 'test',
  children: [],
  attr: {}
});`);
});

test('<div className=\'test\' id=\'mydiv\' attr-section={section}></div>', () => {
  const code = `<div className='test' id='mydiv' attr-section={section}></div>`;
  const transformed = babel.transformSync(code, {
    plugins: [
      jsxToTag,
      syntaxparser,
    ],
  });
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
  const transformed = babel.transformSync(code, {
    plugins: [
      jsxToTag,
      syntaxparser,
    ],
  });
  expect(transformed.code).toBe(`tag("div", {
  children: [],
  attr: {
    "required": ""
  }
});`);
});

test('<div required=\'true\'></div>', () => {
  const code = `<div required='true'></div>`;
  const transformed = babel.transformSync(code, {
    plugins: [
      jsxToTag,
      syntaxparser,
    ],
  });
  expect(transformed.code).toBe(`tag("div", {
  required: 'true',
  children: [],
  attr: {}
});`);
});

test('<div required={true}></div>', () => {
  const code = `<div required={true}></div>`;
  const transformed = babel.transformSync(code, {
    plugins: [
      jsxToTag,
      syntaxparser,
    ],
  });
  expect(transformed.code).toBe(`tag("div", {
  required: true,
  children: [],
  attr: {}
});`);
});

test('<div attr-required={true}></div>', () => {
  const code = `<div attr-required={true}></div>`;
  const transformed = babel.transformSync(code, {
    plugins: [
      jsxToTag,
      syntaxparser,
    ],
  });
  expect(transformed.code).toBe(`tag("div", {
  children: [],
  attr: {
    "required": true
  }
});`);
});