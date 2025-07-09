import Reactive from 'html-tag-js/reactive';
import Ref from 'html-tag-js/ref';

const val = Reactive(100);
const divRef = Ref<HTMLDivElement>();
const inputRef = Ref<HTMLInputElement>();

Reactive.isReactive(val); // true

const test = <div ref={divRef} className='test' xyz="test" style={{
    color: 'red'
}}></div>;

const input = <input type="number" ref={inputRef} inputMode={"decimal"} value={23} onchange={(e: Event) => {
    console.log((e.target as HTMLInputElement).value);
}}/> as HTMLInputElement;

test.append(val, input);

test.content = [
    <p>Hello</p>
];

function testFunc(ref: Ref<HTMLInputElement>, reactive: Reactive<string>) {
    ref.el.value = 'Hello';
    reactive.value = 'Hello World';
}

