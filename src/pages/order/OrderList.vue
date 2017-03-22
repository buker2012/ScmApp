<template lang="html">
  <el-row class="table-box" v-loading="dataLoading">
    <!--工具条-->
    <el-col :span="24" class="toolbar">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.id" placeholder="订单号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="filters.cont" placeholder="合同号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="filters.dateTimeRange"
            type="datetimerange"
            :picker-options="pickerOptions"
            placeholder="选择时间段"
            align="right">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="findOrders">查询</el-button>
        </el-form-item>
      </el-form>
      </el-col>
      <!--列表-->
    	<el-table :data="orders" highlight-current-row stripe>
    		<el-table-column prop="id" label="订单号" sortable>
    		</el-table-column>
    		<el-table-column prop="prov_code" label="供应商" sortable>
    		</el-table-column>
    		<el-table-column prop="cont_code" label="合同号" sortable>
    		</el-table-column>
    		<el-table-column prop="depart" label="柜组" sortable>
    		</el-table-column>
        <el-table-column prop="cdate" label="业务日期" sortable v-if="['noprint','printed'].indexOf(this.$route.name) !== -1">
    		</el-table-column>
        <el-table-column prop="send_date" label="送货日期" sortable v-if="this.$route.name === 'sended'">
    		</el-table-column>
        <el-table-column prop="bus_date" label="验收日期" sortable v-if="this.$route.name === 'accepted'">
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
import {getOrders} from '../../api.js'

export default {
  data () {
    return {
      dataLoading: false,
      pickerOptions: {
        shortcuts: [{
          text: '最近一天',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', [start, end])
          }
        },
        {
          text: '最近三天',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 3)
            picker.$emit('pick', [start, end])
          }
        },
        {
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      filters: {
        id: '',
        cont: '',
        dateTimeRange: ''
      },
      orders: [],
      pageArgs: {
        currentPage: 1,
        pageSize: 15,
        total: 1
      }
    }
  },
  methods: {
    findOrders: function () {
      this.dataLoading = true
      NProgress.start()
      getOrders(this.pageArgs).then((respose) => {
        console.log(respose)
        this.orders = respose.data.orders
        this.pageArgs.total = 300
        this.dataLoading = false
        NProgress.done()
      })
    },
    pageSizeChange: function (size) {
      this.pageArgs.pageSize = size
      this.findOrders()
    },
    CurrentPageChange: function (current) {
      this.pageArgs.currentPage = current
      this.findOrders()
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
