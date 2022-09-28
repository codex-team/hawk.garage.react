import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNested from 'postcss-nested';
import svgr from '@honkhonk/vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCase',
    },
    postcss: {
      plugins: [
        postcssNested
      ]
    }
  }
})
