// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

// 关闭生产阶段 日志的输出  如果生产阶段 输出程序员可以看到，但是上线就是用户的事儿了，这个代码的作用就是关闭生产阶段造成的输出
Vue.config.productionTip = false
// 使用element插件
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
