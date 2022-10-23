function joinClasses(c: false | string | string[]) {
  if (typeof c === 'string')
    return c
  else if (Array.isArray(c))
    return c.filter((i?: string) => i).join(' ')
  return false
}

function addDisplayName(raw: string, id: string) {
  return raw.replace('export default MDXContent', `
MDXContent.displayName = '${id}';
export default MDXContent`.trim())
}

function addLayoutWrapperClasses(raw: string, classes: string) {
  return `
export default function Layout({__mdx_children__}) {
  return <div class="${classes}">{__mdx_children__}</div>;
}

${raw}`
}

export {
  joinClasses,
  addDisplayName,
  addLayoutWrapperClasses,
}
