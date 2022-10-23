/*@jsxRuntime automatic @jsxImportSource react*/
const MDXLayout = function ({children}) {
  return <main>{children}</main>;
};
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components);
  return <_components.h1>{"hi"}</_components.h1>;
}
function MDXContent(props = {}) {
  return <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout>;
}
export default MDXContent;
