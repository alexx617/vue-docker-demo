import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils/utils'
import './registerServiceWorker'
import 'nprogress/nprogress.css'

const log = window.log =  console.log.bind(console.log);

Object.assign(Vue.prototype,utils)

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
