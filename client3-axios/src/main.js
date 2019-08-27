import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'

Vue.config.productionTip = false;

Object.defineProperty(Vue.prototype, '$http', {
    value: axios
})

new Vue({
  render: h => h(App),
}).$mount('#app')
