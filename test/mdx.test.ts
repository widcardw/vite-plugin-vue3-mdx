import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import MdxFile from './__exported__/MdxFile'

describe('render mdx to component', () => {
  it('should mount component', async () => {
    const wrapper = mount(MdxFile)
    expect(wrapper.html()).toMatchInlineSnapshot('"<p>hi 0 <button>Click me</button></p>"')
  })
})
