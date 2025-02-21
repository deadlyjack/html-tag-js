/// <reference path="./index.d.ts" />
import Ref from 'html-tag-js/ref';

const test = <div ref={new Ref()} className='test' xyz="test" style={{
  color: 'red'
}}></div>;

test.content = [
  <p>Hello</p>
];