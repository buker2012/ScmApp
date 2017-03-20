import Vue from 'vue'
import Router from 'vue-router'
import LoginMaster from '../pages/LoginMaster.vue'
import Login from '../pages/login/Login.vue'
import Forget from '../pages/login/Forget.vue'
import MainMaster from '../pages/MainMaster.vue'
import Home from '../pages/Home.vue'

Vue.use(Router)

export default new Router({
  hashbang: false,
  history: true,
  routes: [
    {
      path: '/Index',
      name: 'LoginIndex',
      component: LoginMaster,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'forget',
          name: 'forget',
          component: Forget
        }
      ]
    },
    {
      path: '/',
      component: MainMaster,
      meta: 'SCM',
      children: [
        {
          path: '',
          meta: '首页',
          component: Home
        }
      ]
    }
  ]
})
