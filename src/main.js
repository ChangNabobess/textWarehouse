import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Prient from 'vue-print-nb'
import axios from 'axios';
import elementui from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/js/directives.js'
import directives from './js/allDirectives';
import '@/assets/public.scss';

Vue.config.productionTip = false
Vue.use(Prient);
Vue.use(elementui);
Vue.use(directives);
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
