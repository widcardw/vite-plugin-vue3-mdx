/*@jsxRuntime automatic @jsxImportSource react*/
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1"
  }, props.components);
  return <_components.h1>{"hi"}</_components.h1>;
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? <MDXLayout {...props}><_createMdxContent {...props} /></MDXLayout> : <div class="markdown-body prose">{_createMdxContent(props)}</div>;
}
MDXContent.displayName = 'mdx';
export default MDXContent;
