import { fileURLToPath, URL } from 'node:url'
import pxtovw from 'postcss-px-to-viewport'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const loder_pxtovw = pxtovw({
//这里是设计稿宽度 自己修改
  viewportWidth: 375,
  viewportUnit: 'vw'
})
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  css: {
    postcss: {
      plugins: [loder_pxtovw]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: './src/package/index.js',
      name: 'license-plate-input',
      fileName: (format) => `license-plate-input.${format}.js`,
    },
  }
})
