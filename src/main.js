// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'nprogress/nprogress.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(ElementUI)

// 路由全局钩子，判断是否登陆
// router.beforeEach((to, from, next) => {
// })

/* eslint-disable no-new */
new Vue({
  mode: 'history',
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
