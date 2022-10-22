import { readFile } from 'fs/promises'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createMDXCompiler } from '../src/mdx'
import { resolveOptions } from '../src/options'
import { saveToExported } from './utils'

describe('read from file', () => {
  const fileName = 'CounterMdx'
  it('mdx file should be parsed', async () => {
    const mdx = await readFile(`test/files/${fileName}.mdx`, 'utf-8')

    const compiler = createMDXCompiler(resolveOptions({}))
    const jsxCode = (await compiler(fileName, mdx)).code
    await saveToExported(jsxCode, fileName)

    const component = (await import(`./__exported__/${fileName}`)).default
    const wrapper = mount(component)
    expect(wrapper.html()).toMatchInlineSnapshot(`
      "<h1>Hi, this is a counter</h1>



      <p>The counter is 0. Now <button>Click me</button> to increase.</p>"
    `)

    await wrapper.get('button').trigger('click')
    expect(wrapper.text()).toMatchInlineSnapshot(`
      "Hi, this is a counter


      The counter is 1. Now Click me to increase."
    `)
  })
})
