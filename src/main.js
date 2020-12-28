import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Prient from 'vue-print-nb'
import countDown from 'vue-canvas-countdown'

Vue.config.productionTip = false
Vue.use(Prient);
Vue.use(countDown);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
