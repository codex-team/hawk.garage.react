import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssNested from 'postcss-nested';
import postcssCustomMedia from 'postcss-custom-media';
import svgr from '@honkhonk/vite-plugin-svgr'
import * as path from "path";

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ],
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCase',
    },
    postcss: {
      plugins: [
        postcssCustomMedia({
          importFrom: path.resolve(__dirname, 'src/styles/custom-queries.css'),
        }),
        postcssNested
      ]
    }
  },
})
