/*@jsxRuntime automatic @jsxImportSource react*/
import {ref} from 'vue';
export const counter = ref(0);
export const Button = () => <button onClick={() => counter.value++}>Click me</button>;
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, props.components);
  return <><_components.h1>{"Hi, this is a counter"}</_components.h1>{"\n"}{"\n"}{"\n"}<_components.p>{"The counter is "}{counter.value}{". Now "}<Button />{" to increase."}</_components.p></>;
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : _createMdxContent(props);
}
MDXContent.displayName = 'CounterMdx';
export default MDXContent;
