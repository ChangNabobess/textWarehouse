<template>
  <div class=''>
    <!-- <Countdown endTime="1490761860" endText="已经结束了"></Countdown> -->
    <div id="showtime"></div>
    <template>
      <div id="app" @click="fireCD">
        <div class="demo">
          <countDown 
            ref="countDown"
            :fire="fire"
            time="15"
            :tiping="tiping"
            :tipend="tipend"
            @onStatusChange="onStatusChange"
            @onEnd="onEnd"/>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import countDown from 'vue-canvas-countdown'
export default {
  data() {
    return {
      fire: 1,
      tiping: {
        text: '倒计时进行中',
        color: '#fff'
      },
      tipend: {
        text: '倒计时结束',
        color: '#fff'
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    getDate(){
      var div = document.getElementById("showtime");
      let that=this;
      setInterval (function () {
          div.innerHTML = that.countDown();
      }, 1000);  //反复执行函数本身
    },
    countDown(){
      var nowtime = new Date(),  //获取当前时间
          endtime = new Date("2020/12/18");  //定义结束时间
      var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
          leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
          lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
          leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
          lefts = Math.floor(lefttime/1000%60);  //计算秒数
      return '距离12月十八号还有:' + leftd + "天" + lefth + ":" + leftm + ":" + lefts;  //返回倒计时的字符串
    },
    fireCD () {
      // 配置参数（更多配置如下表）
      this.tiping = {
        text: '开始',
        color: '#4fdv5s'
      }
      this.tipend = {
        text: '结束',
        color: '#fff'
      }
      // 启动倒计时(效果如上图所示)      
      // 也支持：this.$refs.countDown.startCd()方式 启动倒计时
      this.fire++ 
    },
    onStatusChange (payload) {
      console.log('倒计时状态改变：', payload)
    },
    onEnd () {
      console.log('倒计时结束的回调函数')
    }
  },

  created() {

  },
  mounted() {
    this.getDate();
    // 启动倒计时
    this.fireCD()
  },
  components:{ 
    countDown
   }
}
</script>

<style lang='scss' scoped></style>