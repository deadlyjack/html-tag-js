/// <reference path="./index.d.ts" />

import Ref from 'html-tag-js/ref';
import Reactive from 'html-tag-js/reactive';

const val = Reactive(100);

const test = <div ref={new Ref()} className='test' xyz="test" style={{
  color: 'red'
}}></div>;

test.append(val);

test.content = [
  <p>Hello</p>
];