import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createMDXCompiler } from '../src/mdx'
import { resolveOptions } from '../src/options'
import { importMdxComponent, saveToExported } from './utils'

describe('transform', () => {
  const mdxToJsx = createMDXCompiler(resolveOptions({ wrapperClasses: ['ma', 'max-w-60rem'] }))

  it('should transform mdx and wrapper classes', async () => {
    const res = await mdxToJsx('hi', '#hi')
    expect(res.code).toMatchSnapshot()

    const res2 = await mdxToJsx('uni', `
import { ref } from 'vue'

export const count = ref(0)

export const Button = () => (
  <button onClick={() => count.value++}>Click me</button>
)

hi {count.value} <Button />
    `)

    expect(res2.code).toMatchSnapshot()

    await saveToExported(res2.code, 'MdxFile')

    const component = await importMdxComponent('MdxFile')

    const wrapper = mount(component)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should import vue jsx component from other file', async () => {
    const mdx = `
import Counter from 'test/components/Counter.tsx'

# hi

<Counter initValue={0} />
`
    const fileName = 'ComponentCounter'
    const jsxCode = (await mdxToJsx(fileName, mdx)).code
    expect(jsxCode).toMatchSnapshot()
  })
})
