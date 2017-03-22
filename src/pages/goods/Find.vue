<template lang="html">
  <el-row class="table-box" v-loading="dataLoading">
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
    	<el-table :data="goods" highlight-current-row stripe>
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
        <el-table-column prop="procducing" min-width="120" label="产地" sortable>
    		</el-table-column>
        <el-table-column prop="brand" label="品牌" sortable>
    		</el-table-column>
    	</el-table>
      <el-col :span="24" class="footbar">
        <el-pagination
          @size-change="pageSizeChange"
          @current-change="CurrentPageChange"
          :current-page="pageArgs.currentPage"
          :page-sizes="[15, 20, 30, 50, 100]"
          :page-size="pageArgs.pageSize"
          layout="total, sizes, prev, pager, next"
          :total="pageArgs.total">
        </el-pagination>
  		</el-col>
  </el-row>
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
      goods: [],
      pageArgs: {
        currentPage: 1,
        pageSize: 15,
        total: 1
      }
    }
  },
  methods: {
    findGoods: function () {
      this.dataLoading = true
      NProgress.start()
      getGoods(this.pageArgs).then((respose) => {
        this.goods = respose.data.goods
        this.pageArgs.total = 300
        this.dataLoading = false
        NProgress.done()
      })
    },
    pageSizeChange: function (size) {
      this.pageArgs.pageSize = size
      this.findGoods()
    },
    CurrentPageChange: function (current) {
      this.pageArgs.currentPage = current
      this.findGoods()
    }
  }
}
</script>

<style lang="scss">
.table-box {
  background-color: #fff;
  border: 1px solid rgb(223, 231, 236);
  border-top: 3px solid #3c8dbc;
  border-radius: 3px;
  margin-bottom: 20px;
  padding: 0 10px;
  .toolbar {
    margin: 15px 0px;
    .el-form-item { margin-bottom: 0px}
  }
  .footbar {
    margin-bottom: 15px;
    text-align: right;
    padding: 10px;
    border: 1px solid rgb(223, 231, 236);
    border-top: 0px;
  }
}
</style>
