const babel = require('@babel/core');
const jsxToTag = require('../jsx/jsx-to-tag');
const syntaxParser = require('../jsx/syntax-parser');

const config = {
  plugins: [
    jsxToTag,
    syntaxParser,
  ],
};

test('<div className=\'test\'></div>', () => {
  const transformed = babel.transformSync(`<div className='test'></div>`, config);
  expect(transformed.code).toBe(`tag("div", 'test');`);
});

test('<Card className=\'test\'></Card>', () => {
  const transformed = babel.transformSync(`<Card className='test'></Card>`, config);
  expect(transformed.code).toBe(`tag(Card, {
  className: 'test'
});`);
});

test('<label attr-for=\'menu-toggler\' className=\'icon-menu\' />', () => {
  const transformed = babel.transformSync(`<label attr-for='menu-toggler' className='icon-menu' />`, config);
  expect(transformed.code).toBe(`tag("label", 'icon-menu', {
  attr: {
    "for": 'menu-toggler'
  }
});`);
});

test('<label attr-for=\'menu-toggler\' id=\'icon-menu\' />', () => {
  const transformed = babel.transformSync(`<label attr-for='menu-toggler' id='icon-menu' />`, config);
  expect(transformed.code).toBe(`tag("label", null, 'icon-menu', {
  attr: {
    "for": 'menu-toggler'
  }
});`);
});

test('<div id=\'test\'></div>', () => {
  const transformed = babel.transformSync(`<div id='test'></div>`, config);
  expect(transformed.code).toBe(`tag("div", null, 'test');`);
});

test('<div className=\'test\' id=\'mydiv\'></div>', () => {
  const transformed = babel.transformSync(`<div className='test' id='mydiv'></div>`, config);
  expect(transformed.code).toBe(`tag("div", 'test', 'mydiv');`);
});

test('<div className=\'test\' id=\'mydiv\' attr-section={section}></div>', () => {
  const code = `<div className='test' id='mydiv' attr-section={section}></div>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("div", 'test', 'mydiv', {
  attr: {
    "section": section
  }
});`);
});

test('<div required></div>', () => {
  const code = `<div required></div>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("div", {
  attr: {
    "required": ""
  }
});`);
});

test('<div required=\'true\'></div>', () => {
  const code = `<div required='true'></div>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("div", {
  required: 'true'
});`);
});

test('<div required={true}></div>', () => {
  const code = `<div required={true}></div>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("div", {
  required: true
});`);
});

test('<div attr-required={true}></div>', () => {
  const code = `<div attr-required={true}></div>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("div", {
  attr: {
    "required": true
  }
});`);
});

test(`<>...</>`, () => {
  const code = `<>
  <div className='test1'></div>
  <div className='test2'></div>
</>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`["\\n  ", tag("div", 'test1'), "\\n  ", tag("div", 'test2'), "\\n"];`);
});

test(`<Test>...</Test>`, () => {
  const code = `<Test>
  <div className='test1'></div>
  <div className='test2'></div>
</Test>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag(Test, ["\\n  ", tag("div", 'test1'), "\\n  ", tag("div", 'test2'), "\\n"]);`);
});

test(`<>test</>`, () => {
  const code = `const test = <>test</>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`const test = ["test"];`);
});

test(`<>0</>`, () => {
  const code = `const test = <>0</>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`const test = ["0"];`);
});

test(`<>{text}</>`, () => {
  const code = `const test = <>{text}</>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`const test = [text];`);
});

test(`<></>`, () => {
  const code = `const test = <></>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`const test = [];`);
});

test(`<Test {...rest} />`, () => {
  const code = `<Test {...rest} />`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag(Test, {
  ...rest
});`);
});

test(`<test className='test' {...rest} />`, () => {
  const code = `<test className='test' {...rest} />`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("test", 'test', {
  ...rest
});`);
});

test(`<Test arg={undefined} />`, () => {
  const code = `<Test arg={undefined} />`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag(Test, {
  arg: undefined
});`);
});

test(`<Test on:click={(e)=>console.log(e)} />`, () => {
  const code = `<Test on:click={(e)=>console.log(e)} />`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag(Test, {
  on: {
    "click": [e => console.log(e)]
  }
});`);
});

test(`<Test on:click={clickHandler} />`, () => {
  const code = `<Test on:click={clickHandler} />`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag(Test, {
  on: {
    "click": [clickHandler]
  }
});`);
});

test(`<Test off:click={clickHandler} />`, () => {
  const code = `<Test off:click={clickHandler} />`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag(Test);`);
});

test(`<button on:click={(e)=>console.log(e)}>Click me</button>`, () => {
  const code = `<button on:click={(e)=>console.log(e)}>Click me</button>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("button", ["Click me"], {
  on: {
    "click": [e => console.log(e)]
  }
});`);
});

test(`<button on:click={clickHandler}>Click me</button>`, () => {
  const code = `<button on:click={clickHandler}>Click me</button>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("button", ["Click me"], {
  on: {
    "click": [clickHandler]
  }
});`);
});

test(`<button off:click={clickHandler}>Click me</button>`, () => {
  const code = `<button off:click={clickHandler}>Click me</button>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("button", ["Click me"]);`);
});

test(`<div>{}</div>`, () => {
  const code = `<div>{}</div>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("div");`);
});

test(`<div>{/*Comment*/}</div>`, () => {
  const code = `<div>{/*Comment*/}</div>`;
  const transformed = babel.transformSync(code, config);
  expect(transformed.code).toBe(`tag("div");`);
});

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
