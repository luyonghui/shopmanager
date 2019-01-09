import axios from 'axios'

const Http = {}

Http.install = function (Vue) {
  // 基准url
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'

  Vue.prototype.$http = axios
}
export default Http
