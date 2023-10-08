import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    /* CSS 预处理器 */
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
        math: 'always',
      }
    },
    modules: {
      localsConvention: 'camelCase', // 修改生成的配置对象的key的展示形式(驼峰还是中划线形式)
      scopeBehaviour: 'local', // 配置当前的模块化行为是模块化还是全局化 (有hash就是开启了模块化的一个标志, 因为他可以保证产生不同的hash值来控制我们的样式类名不被覆盖)
      generateScopedName: '[name]_[local]_[hash:5]',
      // globalModulePaths: ["./componentB.module.css"], // 代表不想参与到css模块化的路径
    },
  },
  esbuild: {
    jsxInject: `import React from 'react';`,
  }
})
