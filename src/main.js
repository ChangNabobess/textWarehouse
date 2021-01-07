import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Prient from 'vue-print-nb'
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(Prient);
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
