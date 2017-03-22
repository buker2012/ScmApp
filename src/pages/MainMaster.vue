<template lang="html">
  <div class="root" :style="{height: containerHeight+'px'}">
    <my-header></my-header>
    <div class="container">
      <my-sider></my-sider>
      <div class="main">
        <div class="content">
          <div class="site-map">
            <el-col :span="24" class="breadcrumb-container">
              <strong class="title">{{$route.meta}}</strong>
              <el-breadcrumb separator="/" class="breadcrumb-inner">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
                  {{ item.meta }}
                </el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
          </div>
          <transition name="fade" mode="out-in">
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </transition>
        </div>
        <div class="footer">
          <div class="pull-right">
            <el-tooltip placement="top">
              <div slot="content">
                Base on <b>Vue2 + Plugin:Vuex&Vue-Router + UI:Element + PHP:Laravel</b>
                <br />
                Developer: <b>Branit Lee</b>.
              </div>
              <u><b>System Version 1.0</b></u>
            </el-tooltip>
          </div>
          <strong>Copyright © 2016-2017 <a href="http://branit.cc">Branit.Lee</a>.</strong> All rights
          reserved.
        </div>
      </div>
    </div>
  </div>
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
.root {
  background-color: #ecf0f5;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    .main {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-flex:1;
      -ms-flex:1;
      flex:1;
      background: #ecf0f5;
      min-width: 1px;
      .content {
        .site-map {
          height: 50px;
          line-height: 50px;
          color: #475669;
          .breadcrumb-inner { float: right; line-height: 50px;}
        }
        padding: 0px 20px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        border-bottom: 1px solid #d2d6de;
      }
      .footer {
        height: 40px;
        line-height: 40px;
        padding: 0px 15px;
        font-size: 14px;
        background: #fff;
        color: #444;

      }
    }
  }
}
</style>
