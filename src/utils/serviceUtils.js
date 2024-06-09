import axios from 'axios'
import qs from 'qs'
const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

const instance = axios.create({
  timeout: 15000,
  baseURL: 'https://api.wnw.icu',
  headers
})

instance.interceptors.request.use(
  config => {
    try {

    } catch (err) {
      console.log(err)
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)
class Http {
  static get (url, params) {
    return instance.get(url, { params })
  }

  /**
   *url 访问链接
   *params 请求参数
   *contentType 请求内容类型 urlencoded/json
   */
  static post (url, params, headers = { 'Content-type': 'application/x-www-form-urlencoded' }) {
    if (headers.contentType === 'urlencoded') {
      return instance.post(url, qs.stringify(params), { headers })
    } else {
      return instance.post(url, params, {
        headers: Object.assign({ 'Content-Type': 'application/json' }, headers)
      })
    }
  }
}

export default Http
