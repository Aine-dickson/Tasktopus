import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use './src/styles/your-styles.scss' as *;
        `,
      },
    },
  },
})


// const { defineConfig } = require('vite')
// const vue = require('@vitejs/plugin-vue')

// module.exports = defineConfig({
//   plugins: [
//     vue(),
//   ],
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "./src/styles/main.scss";`,
//       },
//     },
//   },
// })
