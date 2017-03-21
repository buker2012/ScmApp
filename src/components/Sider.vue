<template lang="html">
  <div class="menu" :class="menuCollapsed ? 'menu-collapsed' : 'menu-expanded'">
    <!--导航菜单-->
    <transition name="fade" mode="out-in">
    <el-menu :default-active="this.$route.path" class="el-menu-vertical-demo" theme="dark" v-if="!menuCollapsed" router>
      <el-menu-item index="/"><i class="fa fa-home"></i>首页</el-menu-item>
      <el-submenu :index="menu.code" v-for="menu in topMenus()" :key="menu.code">
        <template slot="title"><i class="fa" :class="menu.pic"></i>{{menu.name}}</template>
        <el-menu-item :index="submenu.window_name" v-for="submenu in subMenus(menu.code)" :key="submenu.code">
          <i class="fa fa-circle-o"></i>{{submenu.name}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <!--折叠菜单-->
    <ul class="mini-menu" v-else="menuCollapsed">
      <li class="menu-btn" v-for="(item, index) in menuList"  @mouseover="item.showSubMenu = true" @mouseout="item.showSubMenu = false">
        <i class="menu-icon fa" :class="item.icon"></i>
        <div class="sub-menu" v-show="item.showSubMenu">
          <span>{{ item.title }}</span>
          <ul>
            <li><i class="fa fa-circle-o"></i>首页</li>
            <li><i class="fa fa-circle-o"></i>首页</li>
          </ul>
        </div>
      </li>
    </ul>
  </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      menuList: JSON.parse(sessionStorage.getItem('menus'))
    }
  },
  methods: {
    topMenus: function () {
      console.log(this.menuList)
      return this.menuList.filter(menu => {
        return menu.jb === '1'
      })
    },
    subMenus: function (upcode) {
      console.log(upcode)
      return this.menuList.filter(menu => {
        return menu.up_code === upcode
      })
    }
  },
  computed: {
    ...mapState([
      'menuCollapsed'
    ])
  }
}
</script>

<style lang="scss">
.menu>.el-menu>li.el-menu-item.is-active {
  border-left: 3px solid #20a0ff;
}
.menu {
    width: 230px;
    -webkit-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
    height: inherit;
    background: #222d32;
    .el-menu {
      background: #222d32;
      border-radius: 0;
      height: 100%;
      .el-submenu .el-menu-item {
        background-color: #2c3b41;
        border-left: 3px solid transparent;
      }
      .el-submenu.is-active .el-submenu__title { border-left: 3px solid #20a0ff }
      .el-menu-item.is-active { color: white }

      .el-menu-item,
      .el-submenu__title {
        border-left: 3px solid transparent;
          i {
              margin-right: 10px;
          }
      }
      .item-collapsed {
          padding-left: 15px !important;
      }
      .item-expanded {
          padding-left: 20px !important;
      }
    }

    .mini-menu {
      padding: 0;
      margin: 0;
      .menu-btn:hover {
        background: #1e282c;
      }
      .menu-btn, li {
        list-style: none;
        position: relative;
        .menu-icon {
          display: block;
          border: 0px;
          font-size: 16px;
          color: #bfcbd9;
          width: 50px;
          line-height: 45px;
          text-align: center;
          cursor: pointer;
        }
        .sub-menu {
          font-size: 14px;
          position: absolute;
          z-index: 99999;
          left: 50px;
          top: 0px;
          width: 150px;
          background:#1e282c;
          cursor: pointer;
          border-radius: 0px 5px 5px 0px;
          span {
            padding-left: 20px;
            line-height: 45px;
            display: block;
            color: white;
          }
          ul{
            border-bottom-right-radius: 5px;
            background: #2c3b41;
            margin: 0;
            padding: 0;
            li {
              padding-left: 30px;
              line-height: 45px;
              color: #8aa4af;
              i {
                margin-right: 10px;
              }
            }
            li:hover {
              color: white;
            }
          }
        }
      }
    }
}

.menu-collapsed {
    width: 50px;
}
.menu-expanded {
    width: 230px;
}
.menu-popover {
  background: red !important;
  .popper__arrow {
    border-color: red !important;
  }
}
</style>
