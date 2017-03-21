<template lang="html">
  <section>
    <!--工具条-->
    <el-col :span="24" class="toolbar">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.code" placeholder="商品编码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="filters.name" placeholder="商品名称"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="filters.provCode" placeholder="供应商"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="findGoods">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--列表-->
  	<el-table :data="goods" highlight-current-row v-loading="dataLoading" style="width: 100%">
  		<el-table-column type="index" width="60">
  		</el-table-column>
  		<el-table-column prop="code" label="商品编码" width="120" sortable>
  		</el-table-column>
  		<el-table-column prop="name" label="商品名称" width="500" sortable>
  		</el-table-column>
  		<el-table-column prop="unit" label="单位" width="100" sortable>
  		</el-table-column>
  		<el-table-column prop="cost" label="成本价" sortable>
  		</el-table-column>
  		<el-table-column prop="price" label="售价" sortable>
  		</el-table-column>
      <el-table-column prop="prov_code" label="供应商" sortable>
  		</el-table-column>
      <el-table-column prop="status" label="状态" sortable>
  		</el-table-column>
      <el-table-column prop="procducing" label="产地" sortable>
  		</el-table-column>
      <el-table-column prop="brand" label="品牌" sortable>
  		</el-table-column>
  	</el-table>
  </section>
</template>

<script>
import NProgress from 'nprogress'
import {getGoods} from '../../api.js'

export default {
  data () {
    return {
      dataLoading: false,
      filters: {
        code: '',
        name: '',
        provCode: ''
      },
      goods: []
    }
  },
  methods: {
    findGoods: function () {
      this.dataLoading = true
      NProgress.start()
      let para = {
        pageSize: 20
      }
      getGoods(para).then((respose) => {
        this.goods = respose.data.goods
        console.log(this.data)
        this.dataLoading = false
        NProgress.done()
      })
    }
  }
}
</script>

<style lang="scss">
  .toolbar {
    background: #f4f4f4;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid rgb(223, 231, 236);
    border-top: 3px solid #3c8dbc;
    border-radius: 3px;
    .el-form-item { margin-bottom: 0px}
  }
  .el-table {

  }
</style>
