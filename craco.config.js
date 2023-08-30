/*
 * @Description:
 * @Autor: 杨自强
 * @Date: 2022-06-15 10:25:55
 * @LastEditors: 杨自强
 */
const path = require('path')
module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
    },
  },
}
