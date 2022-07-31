import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCaseOnly',
    },
    postcss: {
      plugins: [
        postcssMixins,
        postcssNested
      ]
    }
  }
})
