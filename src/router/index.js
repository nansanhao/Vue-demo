import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import home from '../components/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/",
    component:home
  },
  {
    path:"/hello",
    component:HelloWorld 
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
