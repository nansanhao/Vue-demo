import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '../components/HelloWorld.vue'
import home from '../components/home.vue'
import Nav from '../components/Nav.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:"/home",
    component:home
  },
  {
    path:"/hello",
    component:HelloWorld 
  },
  {
    path:"/nav",
    component:Nav
  }
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes,
  // mode:"history"
})

export default router
