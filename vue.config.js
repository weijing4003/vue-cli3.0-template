module.exports = {
  
  lintOnSave: false,  // 如果你不需要使用eslint，把lintOnSave设为false即可
  runtimeCompiler: true,
  publicPath: '/', // 设置打包文件相对路径
  devServer: {
    port: 5999, //修改端口
    proxy: {
      '/api': {
        target: 'http://localhost:5999', //对应自己的接口
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}