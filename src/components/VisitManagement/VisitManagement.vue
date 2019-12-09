<template>
  <div class="visitManagement">
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="-"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></el-date-picker>
    <el-button type="primary" class="btn">查询</el-button>
    <el-button type="primary" class="btn">新增</el-button>
    <el-button type="primary" class="btn">安排</el-button>
    <el-button type="primary" class="btn">取消安排</el-button>
    <el-button type="primary" class="btn">延后</el-button>
    <el-button type="primary" class="btn">提前</el-button>
    <el-button type="primary" class="btn">作废</el-button>
    <el-table class="table" :data="tableData" style="width: 100%">
      <el-table-column type="index" label="序号" align="center"></el-table-column>
      <el-table-column prop="applyDate" label="申请日期" align="center"></el-table-column>
      <el-table-column prop="applicant" label="申请人" align="center"></el-table-column>
      <el-table-column prop="kinship" label="亲属关系" align="center"></el-table-column>
      <el-table-column prop="applyReason " label="申请理由" align="center"></el-table-column>
      <el-table-column prop="visitTime" label="探视时间" align="center"></el-table-column>
      <el-table-column prop="arrangeTime" label="安排时间" align="center"></el-table-column>
      <el-table-column prop="Approver" label="审批人" align="center"></el-table-column>
      <el-table-column prop="approvalTime" label="审批时间" align="center"></el-table-column>
      <el-table-column prop="messageSend" label="消息发送" align="center"></el-table-column>
      <el-table-column prop="finishedTime" label="完成时间" align="center"></el-table-column>
      <el-table-column prop="otherSituation" label="其他情况" align="center"></el-table-column>
      <el-table-column prop="status" label="状态" align="center"></el-table-column>
      <el-table-column prop="remark" label="备注" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      tabIndex: 0,
      tableData: [
        {
          applyDate: '2019-04-01 12:30:58',
          applicant: '林双双',
          kinship: '兄妹',
          applyReason: '探视，关怀',
          visitTime: '2019-04-02 12:00',
          arrangeTime: '',
          Approver: '',
          approvalTime: '',
          messageSend: '',
          finishedTime: '',
          otherSituation: '无',
          status: '申请',
          remark: '注意时间'
        }
      ],
      value: ''
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
.visitManagement
  margin: 50px 0 0 66px
  width: 1751px
  height: 794px
  .btn
    width: 100px
    height: 44px
    border-radius: 10px
  .table
    margin-top: 20px
    border-radius: 15px
    background-color: rgba(255,255,255,0.6)
    height: 785px
    i
      @include font(20px, 800, $color-word-blue)
</style>
