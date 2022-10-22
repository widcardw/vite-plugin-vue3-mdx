# vite-plugin-vue3-mdx

[![NPM version](https://img.shields.io/npm/v/vite-plugin-vue3-mdx?color=a1b858&label=)](https://www.npmjs.com/package/vite-plugin-vue3-mdx)

## Warning

This plugin is not well tested, if you come to any bug, please feel free to report the issue! Meanwhile, you should be aware of the risk of using this plugin! 

## Installation

```sh
pnpm i -D vite-plugin-vue3-mdx
```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import mdx from 'vite-plugin-vue3-mdx'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [
    vueJsx({ include: [/\.[jt]sx$/, /\.mdx?$/] }),
    mdx(),
  ]
})
```

## Extensions

```ts
export default defineConfig({
  plugins: [
    // ...
    mdx({
      rehypePlugins: [rehypePrism], // any rehype plugins
      recmaPlugins: [], // any recma plugins
      remarkPlugins: [], // any remark plugins
    }),
  ]
})
```

For full type declarations, find them in [types](src/types.ts).

## License

[MIT](./LICENSE) License © 2022 [widcardw](https://github.com/widcardw)
