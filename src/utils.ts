function joinClasses(c: false | string | string[]) {
  if (typeof c === 'string') {
    const trimed = c.trim()
    if (trimed === '')
      return false
    else
      return trimed
  }
  else if (Array.isArray(c)) {
    if (c.length === 0)
      return false
    return c.filter((i?: string) => i).join(' ')
  }
  return false
}

function addDisplayName(raw: string, id: string) {
  return raw.replace('export default MDXContent', `
MDXContent.displayName = '${id}';
export default MDXContent`.trim())
}

function addLayoutWrapperClasses(raw: string, classes: string | string[]) {
  const joinedClasses = joinClasses(classes)
  if (joinedClasses)
    return raw.replace(/\: (\_createMdxContent\(props\))\;/, `: <div class="${joinClasses(classes)}">{$1}</div>;`)
  return raw
}

export {
  joinClasses,
  addDisplayName,
  addLayoutWrapperClasses,
}
