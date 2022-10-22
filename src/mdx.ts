import type { TransformResult } from 'vite'
import { compileSync } from '@mdx-js/mdx'
import type { ResolvedOptions } from './types'
import { addDisplayName } from './utils'

function createMDXCompiler(options: ResolvedOptions) {
  return (id: string, raw: string): TransformResult => {
    raw = raw.trimStart()

    if (options.transforms.before)
      raw = options.transforms.before(raw, id)

    // if (options.wrapperClasses)
    //   raw = addLayoutWrapperClasses(raw, options.wrapperClasses)

    const code = compileSync(raw, options)

    return {
      code: addDisplayName(String(code), id),
      map: { mappings: '' } as any,
    }
  }
}

export {
  createMDXCompiler,
}
