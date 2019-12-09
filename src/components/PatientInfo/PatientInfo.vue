<template>
  <div class="patientInfo">
    <div class="left">
      <div class="number">
        <div class="bedNo">2035床</div>
        <div class="inHospitalNo">住院号：33215</div>
      </div>
      <div class="avatar"></div>
      <router-link tag="div" to="/index/dynamicMonitor" class="btn">
        <i class="icon-monitor"></i>
        <span class="btnText">动态监控</span>
      </router-link>
      <div class="notice">
        <i class="icon-tip"></i>
        <span class="noticeText">三天后即将进行手术</span>
      </div>
    </div>
    <div class="right">
      <div class="title">广东省中西结合医院——骨外科</div>
      <div class="main">
        <table>
          <tbody>
            <tr>
              <td>
                <label>病患</label>
                <span class="value">： 杨洋</span>
              </td>
              <td>
                <label>性别</label>
                <span class="value">： 男</span>
              </td>
              <td>
                <label>入院日期</label>
                <span class="value">： 2019.02.23</span>
              </td>
            </tr>
            <tr>
              <td>
                <label>年龄</label>
                <span class="value">： 21</span>
              </td>
              <td>
                <label>护理等级</label>
                <span class="value">： 二级</span>
              </td>
              <td>
                <label>性质</label>
                <span class="value">： 医保</span>
              </td>
            </tr>
            <tr>
              <td>
                <label>诊断</label>
                <span class="value">： 小腿骨折</span>
              </td>
              <td>
                <label>主治医师</label>
                <span class="value">： 陈教授</span>
              </td>
              <td>
                <label>科室</label>
                <span class="value">： 骨外科</span>
              </td>
            </tr>
            <tr>
              <td>
                <label>患者状态</label>
                <span class="value">： 躺床</span>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div class="nav">
          <router-link
            :to="item.path"
            v-for="(item, index) in nav"
            :key="index"
            tag="el-button"
            class="navBtn"
            @click.native="isShowMenu = false"
          >
            <i :class="item.icon"></i>
            <p>{{item.text}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      nav: [
        {
          path: '/index/docOrderRun',
          icon: 'icon-implement',
          text: '医嘱执行'
        },
        {
          path: '/index/infusionPatrol',
          icon: 'icon-patrol',
          text: '输液巡视'
        },
        {
          path: '/index/signsInput',
          icon: 'icon-input',
          text: '体征录入'
        },
        {
          path: '/index/voiceInput',
          icon: 'icon-voice',
          text: '语音录入'
        },
        {
          path: '/index/docOrderCheck',
          icon: 'icon-advice',
          text: '医嘱核对'
        },
        {
          path: '/index/visitManagement',
          icon: 'icon-visit',
          text: '探视管理'
        },
        {
          path: '/index/patientSide',
          icon: 'icon-doctor',
          text: '医生端'
        },
        {
          path: '/index/nurseSide',
          icon: 'icon-patient',
          text: '患者端'
        },
        {
          path: '/index/careWorkerSide',
          icon: 'icon-nurse',
          text: '护工端'
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
.patientInfo
  .left
    float: left
    width: 370px
    height: 848px
    background-color: rgba(255,255,255,0.55)
    border-radius: 15px
    margin: 50px 31px 0 66px
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: center
    .number
      padding: 37px 30px 45px
      width: 300px
      height: 30px
      display: flex
      justify-content: space-between
      align-items: center
      .bedNo
        @include font(30px, 800, $color-word-blue)
      .inHospitalNo
        @include font(20px, 400, $color-word-black)
    .avatar
      width: 128px
      height: 128px
      background: $color-white
      border-radius: 50%
      margin-bottom: 64px
    .btn
      background: $color-btn-red
      width: 317px
      height: 60px
      @include font(24px, 800, $color-white)
      line-height: 24px
      border-radius: 10px
      display: flex
      justify-content: center
      align-items: center
      cursor: pointer
      margin-bottom: 28px
      .icon-monitor
        font-size: 36px
        margin-right: 18px
    .notice
      display: flex
      justify-content: center
      align-items: center
      @include font(24px, 400, $color-word-red)
      .icon-tip
        font-size: 36px
        margin-right: 10px
  .right
    position: absolute
    top: 50px
    right: 103px
    width: 1350px
    height: 848px
    border-radius: 15px
    overflow: hidden
    z-index: 1
    &:before
      content: ''
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      -webkit-filter: blur(10px)
      -moz-filter: blur(10px)
      -ms-filter: blur(10px)
      -o-filter: blur(10px)
      filter: blur(10px)
      z-index: -3
      background-image: url('./background.png')
    .title
      line-height: 88px
      padding-left: 50px
      background-color: rgba(255,255,255,0.55)
      border-radius: 15px 15px 0 0
      @include font(32px, 500, $color-word-black)
    .main
      padding: 30px 40px
      table
        background-color: rgba(255,255,255,0.55)
        border-collapse: collapse
        border: 1px solid $color-border-blue
        tr
          border-bottom: 1px solid $color-border-blue
          td
            width: 455px
            height: 80px
            label
              display: inline-block
              width: 120px
              padding-left: 40px
              @include font(28px, 500, $color-word-black)
            .value
              @include font(28px, 500, $color-word-blue)
      .nav
        float: left
        padding: 0
        margin-top: 20px
        .navBtn
          margin: 12px 19px
          float: left
          width: 147px
          height: 147px
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          background-color: rgba(255,255,255,0.6)
          border-radius: 10px
          @include font(20px, 800, $color-word-blue)
          &:nth-child(7n+1)
            margin-left: 0
          &:nth-child(7n)
            margin-right: 0
          p
            margin: 0
          i
            display: inline-block
            @include font(40px, 800, $color-word-blue)
            margin-bottom: 15px
</style>
