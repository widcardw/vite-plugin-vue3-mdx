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

function addLayoutWrapperClasses(raw: string, classes: string | string[]) {
  return raw.replace(/\: (\_createMdxContent\(props\))\;/, `: <div class="${joinClasses(classes)}">{$1}</div>;`)
}

export {
  joinClasses,
  addDisplayName,
  addLayoutWrapperClasses,
}
