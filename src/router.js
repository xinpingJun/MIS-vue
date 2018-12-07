import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Test from './views/Test.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: Main,
      children: [{
        path: 'home',
        component: () => import ('./views/Index.vue')
      }]
    },
    {
      path: '/ui',
      component: Main,
      children: [{
        path: '/ui/button',
        component: () => import ('./views/Button.vue')
      },{
        path: '/ui/typography',
        component: () => import ('./views/Typography.vue')
      }]
    },
    {
      path: '/form',
      name: 'form',
      component: Main,
      children: [{
        path: '/form/index',
        component: () => import ('./views/Form.vue')
      } ]
    },
    {
      path: '/chart',
      name: 'chart',
      component: Main,
      children: [{
        path: '/chart/index',
        component: () => import ('./views/Chart.vue')
      } ]
    },
    {
      path: '/icons',
      name: 'icons',
      component: Main,
      children: [{
        path: '/icons/index',
        component: () => import ('./views/Icons.vue')
      } ]
    },
    {
      path: '/table',
      name: 'table',
      component: Main,
      children: [{
        path: '/table/index',
        component: () => import ('./views/Table.vue')
      } ]
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/404',
      name: '404',
      component: () => import ('./views/404.vue')
    },
    {
      path: '/500',
      name: '500',
      component: () => import ('./views/500.vue')
    },
  ]
})
