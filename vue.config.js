module.exports = {

  lintOnSave: false,  // 如果你不需要使用eslint，把lintOnSave设为false即可
  runtimeCompiler: true,
  publicPath: '/', // 设置打包文件相对路径
  devServer: {
    // port: 9000, //修改端口
    // proxy: ''  // 模拟数据不需要
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8080', //对应自己的接口
    //     changeOrigin: true, //是否跨域
    //     ws: true,
    //     pathRewrite: {
    //       '^/api': ''   
    //       //这里理解成用‘/api’代替target里面的地址，
    //       //后面组件中我们调接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，
    //       //直接写‘/api/user/add’即可
    //     }
    //   }
    // }
  },

}