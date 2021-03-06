// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/index.css'
import router from './router'
import Http from '@/plugins/http'
import moment from 'moment'

// 关闭生产阶段 日志的输出  如果生产阶段 输出程序员可以看到，但是上线就是用户的事儿了，这个代码的作用就是关闭生产阶段造成的输出
Vue.config.productionTip = false
// Vue.protype.$http = axios
// ElementUI是vue插件，所以可以直接使用Vue.use方法使用，但是axios是独 立的，跟vue没有任何关系，所以我们目的是要把axios变成vue的插件
Vue.use(Http)
// 使用element插件
Vue.use(ElementUI)

// 处理日期的全局过滤器
Vue.filter('fmtDate', (v) => {
  return moment(v).format('YYYY-MM-DD')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
