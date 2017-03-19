<template lang="html">
  <el-row class="container" v-bind:style="{minHeight: containerHeight+'px'}">
    <my-header></my-header>
    <el-col :span="24" class="main">
      <my-sider></my-sider>
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
  import Header from '../components/Header.vue'
  import Sider from '../components/Sider.vue'

  export default {
    data () {
      return {
        containerHeight: window.innerHeight
      }
    },
    components: {
      'my-header': Header,
      'my-sider': Sider
    },
    mounted () {
      const that = this
      window.onresize = () => {
        return (() => {
          that.containerHeight = window.innerHeight
        })()
      }
    }
  }
</script>

<style lang="scss">
  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    .main {
      position: absolute;
      display: flex;
      top: 50px;
      bottom: 0px;
    }
  }
</style>
