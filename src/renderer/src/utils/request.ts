/**
 * 全站http配置
 *
 * axios参数说明
 * isSerialize是否开启form表单提交
 * isToken是否需要token
 */
import axios from 'axios'

// globalThis.baseURL = 'http://127.0.0.1:3197/admin'
// 创建实例
const axiosInstance = axios.create({
  // 请求域名
  // baseURL: "http://103.121.166.82",
  // 打包用
  baseURL: 'http://127.0.0.1:3197/admin',
  // 开发用（lm）
  // baseURL: "http://192.168.0.114:5000",
  // 设置超时时间
  timeout: 1000 * 30,
  // method: 'post',
  // 请求头
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
// axios.defaults.timeout=1000 * 30
// axios.defaults.validateStatus = function (status) {
//   return status >= 200 && status <= 500
// }
// 请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'token'
    return config
  },
  (error) => {
    console.error('error', error)
    Promise.reject(error)
  }
)
// 响应拦截器
axiosInstance.interceptors.response.use(
  function (res) {
    if (res.status === 200) {
      if (res.data.code === 'success') {
        return res.data
      } else {
        //数据异常处理
        // Message.info(JSON.stringify(res.data.code))
        return res.data
      }
    }
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default axiosInstance
