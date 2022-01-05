import Vue from 'vue'
import VueRouter from 'vue-router'
import dashboard from '../views/dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard', 
    component: dashboard
  },
  {
    path: '/rooms',
    name: 'rooms',
    component: () => import('../views/rooms.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/services.vue')
  },
  {
    path: '/staff',
    name: 'staff',
    component: () => import('../views/staff.vue')
  },
  {
    path: '/xonalar/show/:slug',
    name: 'show',
    component: () => import('../views/show.vue'),
    // children:[
    //   {
    //     path: '/xonalar/show/:slug/:slug',
    //     name: 'bola',
    //     props: true,
    //     component: () => import('../views/Bola.vue')
    //   },
    // ]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
