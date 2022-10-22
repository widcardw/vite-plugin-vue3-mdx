import type { Options, ResolvedOptions } from './types'
import { joinClasses } from './utils'

function resolveOptions(userOptions: Options): ResolvedOptions {
  const defaultOptions: ResolvedOptions = {
    jsx: true,
    format: 'detect',
    outputFormat: 'program',
    mdExtentions: ['.md', '.markdown', '.mdown', '.mkdn', '.mkd', '.mdwn', '.mkdown', '.ron'],
    mdxExtensions: ['.mdx'],
    recmaPlugins: [],
    remarkPlugins: [],
    rehypePlugins: [],
    remarkRehypeOptions: {},
    wrapperClasses: 'markdown-body',
    transforms: {},
    baseUrl: '.',
    development: false,
    SourceMapGenerator: undefined,
    useDynamicImport: false,
    include: null,
    exclude: null,
  }

  const options = { ...defaultOptions, ...userOptions }
  options.wrapperClasses = joinClasses(options.wrapperClasses)

  return options as ResolvedOptions
}

export {
  resolveOptions,
}
