<template lang="html">
  <el-col :span="24" class="header">
    <el-col :span="10" class="logo" :class="menuCollapsed ? 'logo-mini' : 'logo-lg'">
      {{ menuCollapsed ? logoAbbr : logoTitle }}
    </el-col>
    <el-col :span="4">
      <div class="sidebar-toggle" @click="sidebarToggle">
				<i class="fa fa-navicon"></i>
			</div>
    </el-col>
    <el-col :span="8" class="navbar-custom-menu">
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
    </el-col>
  </el-col>
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
    background: #3c8dbc;
    height: 50px;
    color: white;
    .userinfo {
        cursor: pointer;
        line-height: 50px;
        color: #fff;
        padding: 0 10px;
        display: block;
        img {
            width: 40px;
            height: 40px;
            border-radius: 40px;
            margin: 5px 10px 5px 0;
            float: left;
        }
    }
    .userinfo:hover {
        background-color: #367fa9;
    }
}

.logo {
    background-color: #367fa9;
    -webkit-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
    display: block;
    float: left;
    height: 50px;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
    padding: 0 15px;
    font-weight: 300;
    overflow: hidden;
    cursor: pointer;
    letter-spacing: 2px;
}
.logo:hover {
    background-color: #357ca5;
}

.logo-lg {
    width: 230px !important;
}

.logo-mini {
    padding: 0;
    letter-spacing: 0;
    font-size: 18px;
    width: 50px !important;
}

.sidebar-toggle {
    width: 42px;
    padding: 15px;
    cursor: pointer;
}
.sidebar-toggle:hover {
    background-color: #367fa9;
}

.navbar-custom-menu {
    float: right !important;
    ul {
        float: right;
        list-style: none;
        padding-left: 0;
        margin: 0;
        li {
            float: left;
            display: block;
            position: relative;
        }
    }
}
</style>
