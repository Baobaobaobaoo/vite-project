import axios from 'axios'
import baseUrl from './env'

const service = axios.create({
  baseURL: baseUrl + '/api',
  timeout: 80000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // config.headers["Authorization"] = token
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {

    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service;