<template>
  <div class="docOrderCheck">
    <el-radio v-model="orderType" label="1">长期医嘱</el-radio>
    <el-radio v-model="orderType" label="2">临时医嘱</el-radio>
    <el-checkbox v-model="newOrder">新下达</el-checkbox>
    <el-checkbox v-model="checked">已校对</el-checkbox>
    <el-checkbox v-model="baned">已废止</el-checkbox>
    <el-checkbox v-model="Rectification">整改后</el-checkbox>
    <el-checkbox v-model="noAccounting">未记账</el-checkbox>
    <el-checkbox v-model="needReport">需要报告</el-checkbox>
    <el-date-picker
      v-model="date"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <el-table class="topTable" :data="tableData1" style="width: 100%">
      <el-table-column prop="period" label="期效" align="center"></el-table-column>
      <el-table-column prop="startTime" label="开始时间" align="center"></el-table-column>
      <el-table-column prop="orderContent" label="医嘱内容" align="center"></el-table-column>
      <el-table-column prop="totalAmount" label="总量" align="center"></el-table-column>
      <el-table-column prop="singleAmount" label="单量" align="center"></el-table-column>
      <el-table-column prop="frequency" label="频率" align="center"></el-table-column>
      <el-table-column prop="usage" label="用法" align="center"></el-table-column>
      <el-table-column prop="doctorOrder" label="医生嘱托" align="center"></el-table-column>
      <el-table-column prop="executionTime" label="执行时间" align="center"></el-table-column>
      <el-table-column prop="endTime" label="终止时间" align="center"></el-table-column>
      <el-table-column prop="executionDept" label="执行科室" align="center"></el-table-column>
      <el-table-column prop="executionNature" label="执行性质" align="center"></el-table-column>
      <el-table-column prop="lastExecution" label="上次执行" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" align="center"></el-table-column>
      <el-table-column prop="startOrderDoctor" label="开嘱医生" align="center"></el-table-column>
      <el-table-column prop="startOrderTime" label="开嘱时间" align="center"></el-table-column>
      <el-table-column prop="checkNurse" label="校对护士" align="center"></el-table-column>
      <el-table-column prop="checkTime" label="校对时间" align="center"></el-table-column>
      <el-table-column prop="stopOrderDoctor" label="停嘱医生" align="center"></el-table-column>
    </el-table>
    <el-table class="bottomTable" :data="tableData2" style="width: 100%">
      <el-table-column prop="sendTime" label="发送时间" align="center"></el-table-column>
      <el-table-column prop="sendOrder" label="发送医嘱" align="center"></el-table-column>
      <el-table-column prop="documentNo" label="单据号" align="center"></el-table-column>
      <el-table-column prop="feeItem" label="收费项目" align="center"></el-table-column>
      <el-table-column prop="sendNumber" label="发送次数" align="center"></el-table-column>
      <el-table-column prop="chargingStatus" label="计费状态" align="center"></el-table-column>
      <el-table-column prop="executionStatus" label="执行状态" align="center"></el-table-column>
      <el-table-column prop="executionDept" label="执行科室" align="center"></el-table-column>
      <el-table-column prop="firstTime" label="首次时间" align="center"></el-table-column>
      <el-table-column prop="lastTime" label="末次时间" align="center"></el-table-column>
      <el-table-column prop="sendMan" label="发送人" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      orderType: '1',
      date: '',
      newOrder: false,
      checked: false,
      baned: false,
      Rectification: false,
      noAccounting: false,
      needReport: false,
      tableData1: [
        {
          period: '长嘱',
          startTime: '05-16 00:00',
          orderContent: '10%葡萄糖注射液(500ml)(四川科伦)10%*500ml',
          totalAmount: '',
          singleAmount: '500ml',
          frequency: '每天上午一次',
          usage: '静脉注射',
          doctorOrder: '',
          executionTime: '10',
          endTime: '',
          executionDept: '西药房',
          executionNature: '',
          lastExecution: '2008-05-25 10:00',
          status: '校对',
          startOrderDoctor: '李卿英',
          startOrderTime: '05-15 14:45',
          checkNurse: '杨玲玲',
          checkTime: '05-15 14:55',
          stopOrderDoctor: ''
        }
      ],
      tableData2: [
        {
          sendTime: '05-24 08:29',
          sendOrder: '药品医嘱-甘利欣针',
          documentNo: 'I0000923',
          feeItem: '甘利欣针 10ml*50mg',
          sendNumber: '3支',
          chargingStatus: '已记账',
          executionStatus: '完全执行',
          executionDept: '西药房',
          firstTime: '05-25 10:00',
          lastTime: '05-25 10:00',
          sendMan: '杨玲玲'
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {},
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/mixin'
@import '~assets/sass/variable'
.docOrderCheck
  margin: 50px 105px 0 66px
  .el-input
    width: 182px
    margin-right: 30px
    >>>.el-input__inner
      background: $color-white
      border-radius: 10px
      height: 44px
  .btn
    width: 100px
    height: 44px
    border-radius: 10px
  .el-date-picker
    margin-left: 20px
  .topTable,.bottomTable
    border-radius: 10px
    background-color: rgba(255,255,255,0.55)
  .topTable
    margin-top: 15px
    height: 470px
  .bottomTable
    margin-top: 20px
    height: 300px
</style>
