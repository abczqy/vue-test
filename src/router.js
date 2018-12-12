import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import ErrorPage from './views/ErrorPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/index/:name',
          name: 'index',
          component: () => import('@/views/Index')
        },
        {
          path: '/knowledge/:name',
          name: 'knowledge',
          component: () => import('@/views/Knowledge')
        },
        {
          path: '/customer/:name',
          name: 'customer',
          component: () => import('@/views/Customer')
        },
        {
          path: '/business/:name',
          name: 'business',
          component: () => import('@/views/Business')
        },
        {
          path: '/number/:name',
          name: 'number',
          component: () => import('@/views/Number')
        },
      ]
    },
    {
      path: '*',
      name: 'error',
      component: ErrorPage
    }
  ]
})
