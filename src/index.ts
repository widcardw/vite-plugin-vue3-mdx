import type { FilterPattern, Plugin } from 'vite'
import { createFilter } from 'vite'
import { createMDXCompiler } from './mdx'
import { resolveOptions } from './options'
import type { Options } from './types'

function VitePluginVue3Mdx(userOptions: Options = {}): Plugin {
  const options = resolveOptions(userOptions)

  const mdxToJsx = createMDXCompiler(options)

  let extensions: FilterPattern = (userOptions.mdExtentions || []).concat(userOptions.mdxExtensions || [])
  if (extensions.length === 0)
    extensions = /\.mdx?$/

  const filter = createFilter(
    extensions,
    userOptions.exclude,
  )

  return {
    name: 'vite-plugin-vue3-mdx',
    enforce: 'pre',
    async transform(raw, id) {
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
        return (await mdxToJsx(ctx.file, await defaultRead())).code
      }
    },
  }
}

export default VitePluginVue3Mdx
