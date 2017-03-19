<template lang="html">
  <el-row class="container">
    <my-header></my-header>
    <router-view></router-view>
  </el-row>
</template>

<script>
  import Header from '../components/Header.vue'

  export default {
    components: { 'my-header': Header }
  }
</script>

<style lang="css">
  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
  }
</style>
