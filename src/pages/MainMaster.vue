<template lang="html">
  <div class="root" :style="{height: containerHeight+'px'}">
    <my-header></my-header>
    <div class="container">
      <my-sider></my-sider>
      <div class="main">
        <div class="site-map">
          <el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.meta}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched">
								{{ item.meta }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
        <div class="footer">
    <div class="pull-right hidden-xs">
      <b>Version</b> 1.0
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
      .site-map {
        padding: 20px;
        .title {
					width: 200px;
					float: left;
					color: #475669;
				}
        .breadcrumb-inner { float: right; }
      }
      .content {
        padding: 20px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        overflow-y: scroll;
      }
      .footer {
        font-size: 14px;
        background: #fff;
        padding: 15px;
        color: #444;
        border-top: 1px solid #d2d6de;
      }
    }
  }
}

</style>
