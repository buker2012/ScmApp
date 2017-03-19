<template lang="html">
<div class="header">
  <div class="logo" :class="menuCollapsed ? 'logo-mini' : 'logo-lg'">
    {{ menuCollapsed ? logoAbbr : logoTitle }}
  </div>
  <div class="toggle-menu" @click="sidebarToggle">
    <i class="fa fa-navicon"></i>
  </div>
  <div class="tools">
    <ul>
      <li>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link userinfo">
            <img src="/static/images/avatar.png" /> 系统管理员
            <i class="el-icon-caret-bottom el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
      <li><menu-button fa="fa-lock" text="锁定"></menu-button></li>
      <li><menu-button fa="fa-sign-out" text="登出"></menu-button></li>
    </ul>
  </div>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import MenuButton from '../components/MenuButton.vue'

export default {
  props: ['fa', 'text'],
  components: {
    'menu-button': MenuButton
  },
  data () {
    return {
      logoTitle: '西亚供应链管理',
      logoAbbr: 'SCM'
    }
  },
  computed: mapState([
    'menuCollapsed'
  ]),
  methods: mapMutations([
    'sidebarToggle'
  ])
}
</script>

<style lang="scss">
.header {
  color: white;
  height: 50px;
  background: #3c8dbc;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  .logo {
    background-color: #367fa9;
    -webkit-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
    line-height: 50px;
    font-size: 20px;
    font-weight: 300;
    overflow: hidden;
    cursor: pointer;
    letter-spacing: 2px;
    text-align: center;
  }
  .logo:hover { background-color: #357ca5; }
  .logo-lg { width: 230px; }
  .logo-mini {
    width: 50px;
    padding: 0;
    letter-spacing: 0;
    font-size: 18px;
  }

  .toggle-menu {
    line-height: 50px;
    padding: 0px 15px;
    cursor: pointer;
  }
  .toggle-menu:hover { background-color: #367fa9; }

  .tools {
    flex: 1;
    ul {
      float: right;
      list-style: none;
      padding: 0;
      margin: 0;
      li {
        float: left;
        display: block;
        .userinfo {
          cursor: pointer;
          line-height: 50px;
          color: #fff;
          padding: 0 10px;
          display: block;
          img {
              width: 38px;
              height: 38px;
              border-radius: 38px;
              margin: 5px 10px 5px 0;
              float: left;
          }
        }
        .userinfo:hover { background-color: #367fa9; }
      }
    }
  }
}
</style>
