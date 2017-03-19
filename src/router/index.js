import Vue from 'vue'
import Router from 'vue-router'
import LoginMaster from '../pages/LoginMaster.vue'
import Login from '../pages/login/Login.vue'
import Forget from '../pages/login/Forget.vue'
import MainMaster from '../pages/MainMaster.vue'
import Home from '../pages/Home.vue'

Vue.use(Router)

export default new Router({
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
      name: 'Main',
      component: MainMaster,
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        }
      ]
    }
  ]
})
