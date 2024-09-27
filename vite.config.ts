import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// @ts-ignore
import postcssPxToViewport from 'postcss-px-to-viewport'; // 使用 ES 模块导入

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 使用 @ 表示 src 文件所在路径
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    postcss: {
      plugins: [
        postcssPxToViewport({
          // unitToConvert: "PX",
          // 设计稿的基准视口宽度
          viewportWidth: 750,
          // 转换后单位的小数点精度
          unitPrecision: 5,
          viewportUnit: "vw",
          selectorBlackList: [".ignore", ".hairlines"],
          minPixelValue: 1,
          mediaQuery: false,
          // 忽略特定文件夹或文件的正则表达式列表
          exclude: /(\/|\\)(node_modules)(\/|\\)/,
        }),
      ],
    },
  },
});
