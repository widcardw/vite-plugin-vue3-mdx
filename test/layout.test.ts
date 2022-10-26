import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createMDXCompiler } from '../src/mdx'
import { resolveOptions } from '../src/options'
import { importMdxComponent, saveToExported } from './utils'

describe('mdx layout', () => {
  const fileName = 'MdxWithLayout'
  it('should parse mdx with layout into jsx', async () => {
    const mdx = `
# hi`
    const compiler = createMDXCompiler(resolveOptions({ wrapperClasses: ['markdown-body', 'prose'] }))
    const jsxCode = (await compiler('mdx', mdx)).code
    saveToExported(jsxCode, fileName)
  })

  it('should import mdx component', async () => {
    const component = await importMdxComponent(fileName)
    const wrapper = mount(component)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
