/*@jsxRuntime automatic @jsxImportSource react*/
import {ref} from 'vue';
export const count = ref(0);
export const Button = () => <button onClick={() => count.value++}>Click me</button>;
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p"
  }, props.components);
  return <_components.p>{"hi "}{count.value}{" "}<Button /></_components.p>;
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : <div class="ma max-w-60rem">{_createMdxContent(props)}</div>;
}
MDXContent.displayName = 'uni';
export default MDXContent;
