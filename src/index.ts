import type { Plugin } from 'vite'
import { createFilter } from 'vite'
import { createMDXCompiler } from './mdx'
import { resolveOptions } from './options'
import type { Options } from './types'

function VitePluginVue3Mdx(userOptions: Options = {}): Plugin {
  const options = resolveOptions(userOptions)

  const mdxToJsx = createMDXCompiler(options)

  const filter = createFilter(
    (userOptions.mdExtentions || []).concat(userOptions.mdxExtensions || []) || /\.mdx?$/,
    userOptions.exclude,
  )
  return {
    name: 'vite-plugin-vue3-mdx',
    transform(raw, id) {
      if (!filter(id))
        return

      try {
        return mdxToJsx(id, raw)
      }
      catch (e: any) {
        this.error(e)
      }
    },
    async handleHotUpdate(ctx) {
      if (!filter(ctx.file))
        return

      const defaultRead = ctx.read
      ctx.read = async function () {
        return mdxToJsx(ctx.file, await defaultRead()).code
      }
    },
  }
}

export default VitePluginVue3Mdx
