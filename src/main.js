// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'
import mock from './mock'

import './assets/element-theme/index.css'
import 'nprogress/nprogress.css'
import 'font-awesome/css/font-awesome.min.css'
import 'normalize.css/normalize.css'

Vue.config.productionTip = false
Vue.use(babelpolyfill)
Vue.use(ElementUI)
mock.setup()
NProgress.configure({ showSpinner: false })

// 路由全局钩子
router.beforeEach((to, from, next) => {
  if (['login', 'forget'].indexOf(to.name) !== -1) {
    next()
  } else {
    // 判断是否登陆
    let token = sessionStorage.getItem('token')
    if (!token) {
      next({ name: 'login' })
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
