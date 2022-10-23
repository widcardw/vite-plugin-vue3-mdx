import type { FilterPattern } from 'vite'
import type { PluggableList } from 'unified'
import type { Options as RemarkRehypeOptions } from 'remark-rehype'

interface Options {
  /**
   * Whether to keep jsx.
   *
   * @default true
   */
  jsx?: boolean

  /**
   * Format of the files to be processed.
   *
   * @default 'mdx'
   */
  format?: 'md' | 'mdx' | 'detect'

  /**
   * Whether to compile to a whole program or a function body.
   *
   * @default 'program'
   */
  outputFormat?: 'program' | 'function-body'

  /**
   * Extensions (with `.`) for markdown.
   */
  mdExtentions?: string[]

  /**
   * Extensions (with `.`) for MDX.
   */
  mdxExtensions?: string[]

  /**
   * List of recma (esast, JavaScript) plugins.
   */
  recmaPlugins?: PluggableList

  /**
   * List of remark (mdast, markdown) plugins.
   */
  remarkPlugins?: PluggableList

  /**
   * List of rehype (hast, HTML) plugins.
   */
  rehypePlugins?: PluggableList

  /**
   * Options to pass through to `remark-rehype`.
   */
  remarkRehypeOptions?: RemarkRehypeOptions

  /**
   * Whether to compile to dynamic import expressions.
   *
   * @default false
   */
  useDynamicImport?: boolean

  /**
   * Resolve imports (and `export … from`, and `import.meta.url`) from this URL
   */
  baseUrl?: string

  /**
   * Whether to add extra information to error messages in generated code
   *
   * @default false
   */
  development?: boolean

  /**
   * Class names for wrapper div
   *
   * @warning vueJsx cannot parse `<MDXLayout><ChildComponents /></MDXLayout>`
   * into `<div class="markdown-body"><ChildCompoents /></div>`. Instead, the
   * `MDXLayout` element should contain a `slot`, which may be suitable for vue.
   *
   * @default false
   */
  wrapperClasses?: false | string | string[]

  SourceMapGenerator?: any

  /**
   * Custom tranformations apply before and after the markdown transformation
   */
  transforms?: {
    before?: (code: string, id: string) => string
    after?: (code: string, id: string) => string
  }

  /**
   * In order to solve the problem of vue router
   *
   * @default true
   */
  addDisplayName?: boolean

  include?: FilterPattern
  exclude?: FilterPattern
}

interface ResolvedOptions extends Required<Options> {
  wrapperClasses: string | false
}

export {
  Options,
  ResolvedOptions,
}
