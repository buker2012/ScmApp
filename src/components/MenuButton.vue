<template lang="html">
  <a href="#" data-toggle="control-sidebar">
    <i class="fa" :class="fa"><span>{{text}}</span></i>
  </a>
</template>

<script>
export default {
  props: ['fa', 'text']
}
</script>

<style lang="scss" scoped>
  a {
    outline: none;
    position: relative;
    display: block;
    padding: 15px 15px;
    line-height: 20px;
    text-decoration: none;
    color: white;
    span {
      font-size: 14px;
      padding-left: 5px;
    }
  }

  a:hover {
    background-color: #367fa9;
  }
</style>
