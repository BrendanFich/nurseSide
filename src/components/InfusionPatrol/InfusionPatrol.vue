<template>
  <div class="infusionCheck">
    <el-table class="topTable" :data="tableData1" style="width: 100%">
      <el-table-column type="selection" width="75" align="center"></el-table-column>
      <el-table-column prop="type" label="类型" align="center"></el-table-column>
      <el-table-column prop="groupNo" label="组号" align="center"></el-table-column>
      <el-table-column prop="name" label="名称" align="center" width="200"></el-table-column>
      <el-table-column prop="startTime" label="开始时间" align="center"></el-table-column>
      <el-table-column prop="endTime" label="结束时间" align="center"></el-table-column>
      <el-table-column prop="exeNurse" label="执行护士" align="center"></el-table-column>
      <el-table-column prop="orderDoctor" label="开嘱医生" align="center"></el-table-column>
      <el-table-column prop="planTime" label="计划执行时间" align="center"></el-table-column>
      <el-table-column prop="remark" label="备注" align="center"></el-table-column>
      <el-table-column prop="remainTime" label="剩余时间" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" align="center"></el-table-column>
    </el-table>
    <div class="operatings">
      <el-button type="primary">换瓶</el-button>
      <el-button type="primary">暂停</el-button>
      <el-button type="primary">结束</el-button>
      <el-button type="primary">记录滴数</el-button>
      <el-button type="primary">输液反应</el-button>
    </div>
    <el-table class="bottomTable" :data="tableData2" style="width: 100%">
      <el-table-column prop="name" label="名称" align="center" width="200"></el-table-column>
      <el-table-column prop="amount" label="数量" align="center" width="200"></el-table-column>
      <el-table-column prop="dose" label="计量" align="center"></el-table-column>
      <el-table-column prop="frequency" label="频次" align="center"></el-table-column>
      <el-table-column prop="startOrderTime" label="开嘱时间" align="center"></el-table-column>
      <el-table-column prop="orderDoctor" label="开嘱医生" align="center"></el-table-column>
      <el-table-column prop="checkTime" label="核对时间" align="center"></el-table-column>
      <el-table-column prop="checkNurse" label="核对护士" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      tabIndex: 0,
      tableData1: [
        {
          type: '输液',
          groupNo: '1',
          name: '5%葡萄糖注射液500ml+氯化钾+氨基酸',
          startTime: '08:00',
          endTime: '',
          exeNurse: '',
          orderDoctor: '',
          planTime: '08:00',
          remark: '滴数30/分',
          remainTime: '30：40',
          status: '输液中'
        }
      ],
      tableData2: [
        {
          name: '5%葡萄糖注射液500ml',
          amount: '',
          dose: '',
          frequency: '',
          startOrderTime: '',
          orderDoctor: '',
          checkTime: '',
          checkNurse: ''
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
.infusionCheck
  margin: 50px 0 0 66px
  width: 1751px
  height: 794px
  .topTable
    border-radius: 15px
    background-color: rgba(255,255,255,0.6)
    height: 500px
  .bottomTable
    border-radius: 15px
    background-color: rgba(255,255,255,0.6)
    height: 280px
  .operatings
    margin: 10px
</style>
