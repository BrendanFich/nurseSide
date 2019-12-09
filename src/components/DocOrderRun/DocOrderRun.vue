<template>
  <div class='docOrderRun'>
    <el-table class="table" :data="tableData" style="width: 100%">
      <el-table-column type="selection" width="75" align="center"></el-table-column>
      <el-table-column prop="type" label="类型" align="center"></el-table-column>
      <el-table-column prop="groupNo" label="组号" align="center"></el-table-column>
      <el-table-column prop="name" label="名称" align="center" width="200"></el-table-column>
      <el-table-column prop="amount" label="数量" align="center"></el-table-column>
      <el-table-column prop="frequency" label="频次" align="center"></el-table-column>
      <el-table-column prop="startOrderTime" label="开嘱时间" align="center"></el-table-column>
      <el-table-column prop="orderDoctor" label="开嘱医生" align="center"></el-table-column>
      <el-table-column prop="planTime" label="计划执行时间" align="center"></el-table-column>
      <el-table-column prop="remark" label="备注" align="center"></el-table-column>
      <el-table-column prop="remainTime" label="剩余时间" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      tableData: [
        {
          type: '输液',
          groupNo: '1',
          name: '5%葡萄糖注射液500ml',
          amount: '',
          frequency: '',
          startOrderTime: '',
          orderDoctor: '',
          planTime: '',
          remark: '滴数30/分',
          remainTime: '30：40',
          status: '已执行'
        },
        {
          type: '输液',
          groupNo: '1',
          name: '氯化钾',
          amount: '',
          frequency: '',
          startOrderTime: '',
          orderDoctor: '',
          planTime: '',
          remark: '',
          remainTime: '',
          status: ''
        },
        {
          type: '输液',
          groupNo: '1',
          name: '氨基酸',
          amount: '',
          frequency: '',
          startOrderTime: '',
          orderDoctor: '',
          planTime: '',
          remark: '',
          remainTime: '',
          status: ''
        },
        {
          type: '注射',
          groupNo: '2',
          name: '维生素B6注射液',
          amount: '',
          frequency: '',
          startOrderTime: '',
          orderDoctor: '',
          planTime: '',
          remark: '',
          remainTime: '',
          status: ''
        },
        {
          type: '注射',
          groupNo: '3',
          name: '维生素C注射液',
          amount: '',
          frequency: '',
          startOrderTime: '',
          orderDoctor: '',
          planTime: '',
          remark: '',
          remainTime: '',
          status: ''
        }
      ]
    }
  },
  computed: {},
  watch: {},
  methods: {
  },
  created () {}
}
</script>

<style lang="sass" scoped>
@import '~assets/sass/mixin'
@import '~assets/sass/variable'
.docOrderRun
  margin: 50px 0 0 66px
  width: 1751px
  height: 794px
  .el-table
    border-radius: 15px
    background-color: rgba(255,255,255,0.6)
    height: 850px
</style>
