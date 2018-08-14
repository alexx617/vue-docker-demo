import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import utils from './utils/utils'
import './registerServiceWorker'
import 'nprogress/nprogress.css'
import './reset.css'
import toastRegistry from './views/toast/index'
// const VueUnicom = require('./axBus');
// import VueUnicom from './axBus.js';
// import VueUnicom from 'vue-unicom';

// import VueUnicom from './axBus.js'

const log = window.log =  console.log.bind(console.log);

Object.assign(Vue.prototype,utils)

Vue.use(ElementUI);
Vue.use(toastRegistry);
// Vue.use(VueUnicom, '参数1', '参数2');
// 非 cli 也必须 install一下
// Vue.use(VueUnicom)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
