import axios from 'axios'

let options = {
  baseURL: 'http://api.com',
  timeout: 5000, // 超时时间
  withCredentials: true, // 发送跨域请求是否需要凭证
  headers: {
    post: {'Content-Type': 'application/x-www-form-urlencoded',}, // 设置请求
    'Access-Control-Allow-Origin': '*'  //跨域设置

  }
}

// 请求错误处理
let axiosInstance = axios.create(options)

axiosInstance.interceptors.request.use(function (config) {

  // 解决GET请求缓存
  if (config.method === 'get') {
    config.params = Object.assign({t: + new Date()}, config.params)
  }

  if (process.server) {
    console.log(`==================> 请求开始 url: ${config.url} ===============`)
    console.log(`Request params: ${JSON.stringify(config.params)} \n\n\n`)
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  // console.log(error)
  return Promise.reject(error)
})

axiosInstance.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  // 服务端渲染就输出日志
  if (process.server) {
    console.log(`\x1B[32m=====================> 响应开始 url:%s================\x1B[39m`, response.config.url)
    console.log(`\x1B[32mResponse method: ======================>%s\x1B[39m`, response.request.method)
    console.log(`Response data: ${JSON.stringify(response.data)}\n\n\n`)
  }

  return response
}, function (error) {

  // 服务端渲染就输出日志
  // api 服务链接失败
  if (process.server) {
    switch (error.code) {
      case 'ENETUNREACH':
        console.log(`\x1B[31mError:======>API服务地址链接失败, 请查看当前网络状态或联系API对接人员\x1B[39m\n\n\n`)
        break

      case 'ECONNABORTED':
        console.log(`\x1B[31mError:======> 请求超出了客户端设置的时间, 请查看当前网络状态或联系API对接人员\x1B[39m\n\n\n`)
        break

      default:
        console.log(`\x1B[31m=====================> 响应出錯 url:%s================\x1B[39m`,error.config.url)
        console.log(`\x1B[31mRequest params: %s \x1B[39m\n\n\n`,JSON.stringify(error.config.params))
    }
  }
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default axiosInstance
