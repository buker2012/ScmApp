<template lang="html">
  <div class="login-body">
    <div class="login-row">
      <div class="text-center"><span class="login-title">西亚供应链平台</span></div>
    </div>
      <div class="login-row">
        <form>
          <fieldset class="text-center login-form">
              <legend class="login-sub-title">请登录您的账号</legend>
              <div class="login-form-group">
                  <input class="login-form-control" type="text" placeholder="账号" v-model="loginModel.username">
                  <i class="fa fa-user login-control-feedback"></i>
              </div>
              <div class="login-form-group">
                  <input class="login-form-control" type="password" placeholder="密码" v-model="loginModel.password">
                  <span class="fa fa-lock login-control-feedback"></span>
              </div>
              <div class="text-center">
                  <div class="login-checkbox">
                      <label><input type="checkbox"> 在这台设备记住我的账号</label>
                  </div>
                  <el-button type="primary" class="login-btn" @click.native.prevent="submitLogin" :loading="logining">登录</el-button>
                  <router-link to="forget" class="forget">忘记密码</router-link>
              </div>
          </fieldset>
        </form>
      </div>
  </div>
</template>

<script>
import { requestLogin } from '../../api.js'
import message from '../../modules/message'
import NProgress from 'nprogress'

export default {
  data () {
    return {
      logining: false,
      loginModel: {
        username: 'admin',
        password: ''
      }
    }
  },
  methods: {
    submitLogin: function () {
      this.logining = true
      let username = this.loginModel.username
      let password = this.loginModel.password
      // 验证登陆表单
      if (username.length < 5 || password.length < 5) {
        message.show('登陆错误：账号或密码长度最少为5位字符', 'error')
        return
      }
      NProgress.start()
      // 调用登陆API
      requestLogin(this.loginModel).then(response => {
        NProgress.done()
        let { code, msg, token } = response.data
        // code：200 代表成功
        if (code !== 200) {
          message.show(`登陆错误：${msg}`, 'error')
        } else {
          // 登陆成功 设置token并跳转到首页
          sessionStorage.setItem('token', JSON.stringify(token))
          this.$router.push({ path: '/' })
        }
      })
    },
    msgClose: function () {
      message.close()
      this.logining = false
    }
  },
  watch: {
    'loginModel.username': 'msgClose',
    'loginModel.password': 'msgClose'
  }
}
</script>

<style lang="scss">
@import "../../assets/styles/login.css";
</style>
