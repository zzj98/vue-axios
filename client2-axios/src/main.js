// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
//Vue.use(axios)  // 注意 这样的用法是有问题的，axios不支持Vue.use()的声明方式
Vue.prototype.$ajax = axios;
// 只是import进来是无法使用 axios 命令的。所以我们将 axios 改写为 Vue 的原型属性。那么在其他组件中就能使用$ajax方法了

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
