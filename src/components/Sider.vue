<template lang="html">
  <aside :class="menuCollapsed ? 'menu-collapsed' : 'menu-expanded'">
    <el-menu class="el-menu-vertical-demo" theme="dark">
      <el-menu-item index="1"><i class="fa fa-home"></i>首页</el-menu-item>
    </el-menu>
  </aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState([
    'menuCollapsed'
  ])
}
</script>

<style lang="scss">
  aside {
    -webkit-transition: width 0.3s ease-in-out;
    transition: width 0.3s ease-in-out;
    height: 100%;
    .el-menu{
      border-radius: 0px;
			height: 100%;
		}
  }

  .menu-collapsed {
    width: 50px;
  }

  .menu-expanded {
    width: 230px;
  }
</style>
