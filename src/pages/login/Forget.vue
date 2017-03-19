<template lang="html">
  <div class="login-wrapper">
    <div class="login-body">
        <div class="login-row">
          <form>
            <fieldset class="login-form">
                <legend class="login-sub-title">重置您的密码</legend>
                <div class="login-form-group">
                  <label class="login-label">电子邮箱</label>
                  <input class="login-form-control" type="text" placeholder="请输入与您的账号绑定的E-Mail">
                  <i class="fa fa-mail login-control-feedback"></i>
                </div>
                <div class="alert alert-danger">
                    <strong></strong>
                </div>
                <div class="text-center">
                    <input type="submit" class="login-btn" value="确定">
                    <br>
                    <router-link to="login">返回</router-link>
                </div>
            </fieldset>
          </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
