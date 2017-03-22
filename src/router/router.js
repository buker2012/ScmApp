import Vue from 'vue'
import Router from 'vue-router'
// 登陆页面
import LoginMaster from '../pages/LoginMaster.vue'
import Login from '../pages/login/Login.vue'
import Forget from '../pages/login/Forget.vue'
// 功能页面
import MainMaster from '../pages/MainMaster.vue'
import NotFound from '../pages/404.vue'
import Home from '../pages/Home.vue'
import Find from '../pages/goods/Find.vue'
import OrderNoPrint from '../pages/order/NoPrint.vue'
import OrderPrinted from '../pages/order/Printed.vue'
import OrderSended from '../pages/order/Sended.vue'
import OrderAccepted from '../pages/order/Accepted.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
        },
        {
          path: '/goods/find',
          meta: '商品查询',
          component: Find
        },
        {
          path: '/order/noprint',
          meta: '未打印订单',
          name: 'noprint',
          component: OrderNoPrint
        },
        {
          path: '/order/printed',
          meta: '已打印订单',
          name: 'printed',
          component: OrderPrinted
        },
        {
          path: '/order/sended',
          meta: '已送货订单',
          name: 'sended',
          component: OrderSended
        },
        {
          path: '/order/accepted',
          meta: '已验收订单',
          name: 'accepted',
          component: OrderAccepted
        },
        {
          path: '/404',
          meta: '未知领域',
          component: NotFound
        }
      ]
    },
    {
      path: '*',
      name: '404',
      redirect: { path: '/404' }
    }
  ]
})
