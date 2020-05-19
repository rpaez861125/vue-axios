import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue') 
   },
   {
     path:'/currency',
     name:'Currency',
     component: () => import(/* webpackChunkName: "Home" */ '../views/Currency.vue')
   },
   {
     path: '/weather',
     name: 'Weather',
     component: () => import('../views/Weather.vue')
   }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
