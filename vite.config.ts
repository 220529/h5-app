import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import postCssPxToRem from "postcss-pxtorem";

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
        postCssPxToRem({
          rootValue: 750 / 10, // 1rem = 75px，当设计稿宽度为750px时
          propList: ["*"], // 允许转换的属性，* 表示所有属性都进行转换
          unitPrecision: 5, // 保留rem小数点后的位数
          selectorBlackList: [], // 忽略转换的选择器，保留px
          replace: true, // 是否直接替换px为rem
          mediaQuery: false, // 是否在媒体查询中转换px
          minPixelValue: 0, // 小于或等于这个值的px不转换为rem
        }),
      ],
    },
  },
});
