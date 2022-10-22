import { defineConfig } from 'vitest/config'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  test: {
    environment: 'jsdom',
  },
  plugins: [
    vueJsx(),
  ],
})
