/// <reference path="./index.d.ts" />

import Reactive from 'html-tag-js/reactive';
import Ref from 'html-tag-js/ref';

const val = Reactive(100);

Reactive.isReactive(val); // true

const test = <div ref={Ref()} className='test' xyz="test" style={{
  color: 'red'
}}></div>;

test.append(val);

test.content = [
  <p>Hello</p>
];

