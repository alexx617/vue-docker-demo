import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Alert from './views/Alert.vue'
import busA from './views/bus/busA.vue'
import busB from './views/bus/busB.vue'
import scroll from './views/scroll/scroll'
import scrollFather from './views/scroll/scrollFather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/alert',
      name: 'alert',
      component: Alert
    },
    {
      path: '/busA',
      name: 'busA',
      component: busA
    },
    {
      path: '/busB',
      name: 'busB',
      component: busB
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: scroll
    },
    {
      path: '/scrollFather',
      name: 'scrollFather',
      component: scrollFather
    },
  ]
})
