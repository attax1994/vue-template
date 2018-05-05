import '@/polyfill'
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import '@/filter'
import '@/directive'
import '@/registerServiceWorker'
import '@/axios'
import '@/rxjs'
import '@/UI'
import "@/persistence/injection/ModuleManager"

Vue.config.productionTip = false;

export default new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
