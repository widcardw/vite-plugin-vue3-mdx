import type { TransformResult } from 'vite'
import { compile } from '@mdx-js/mdx'
import type { ResolvedOptions } from './types'
import { addDisplayName, addLayoutWrapperClasses } from './utils'

function createMDXCompiler(options: ResolvedOptions) {
  return async (id: string, raw: string): Promise<TransformResult> => {
    raw = raw.trimStart()

    if (options.transforms.before)
      raw = options.transforms.before(raw, id)

    let code = String(await compile(raw, options))

    if (options.wrapperClasses)
      code = addLayoutWrapperClasses(code, options.wrapperClasses)

    return {
      code: options.addDisplayName ? addDisplayName(code, id) : code,
      map: { mappings: '' } as any,
    }
  }
}

export {
  createMDXCompiler,
}
