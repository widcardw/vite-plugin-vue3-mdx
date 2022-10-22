import { describe, expect, it } from 'vitest'
import { createMDXCompiler } from '../src/mdx'
import { resolveOptions } from '../src/options'
import { saveToExported } from './utils'

describe('should', () => {
  const mdxToJsx = createMDXCompiler(resolveOptions({ wrapperClasses: ['ma', 'max-w-60rem'] }))

  it('exported', async () => {
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
  })
})
