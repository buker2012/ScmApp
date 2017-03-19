<template lang="html">
  <div class="login-body">
    <div class="login-row">
      <div class="text-center"><span class="login-title">西亚供应链管理</span></div>
    </div>
      <div class="login-row">
        <form>
          <fieldset class="text-center login-form">
              <legend class="login-sub-title">请登录您的账号</legend>
              <div class="login-form-group">
                  <input class="login-form-control" type="text" placeholder="账号">
                  <i class="fa fa-user login-control-feedback"></i>
              </div>

              <div class="login-form-group">
                  <input class="login-form-control" type="password" placeholder="密码">
                  <span class="fa fa-lock login-control-feedback"></span>
              </div>
              <div class="alert alert-danger">
                  <strong></strong>
              </div>
              <div class="text-center">
                  <div class="login-checkbox">
                      <label><input type="checkbox"> 在这台设备记住我的账号</label>
                  </div>
                  <input type="submit" class="login-btn" value="登录">
                  <br>
                  <router-link to="forget">忘记密码</router-link>
              </div>
          </fieldset>
        </form>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
</style>
