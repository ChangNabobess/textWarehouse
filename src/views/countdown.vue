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
    <template>
      <button @click="clickEvent">点击下载PDF</button>
      <button @click="creatPdfFilds">点击生成PDF</button>
      <button @click="downloadPDf">下载本地pdf文件</button>
    </template>
    <template>
      <div class="tools">
        <button :theme="'default'" type="submit" :title="'基础按钮'" @click.stop="prePage" class="mr10"> 上一页</button>
        <button :theme="'default'" type="submit" :title="'基础按钮'" @click.stop="nextPage" class="mr10"> 下一页</button>
        <div class="page">{{pageNum}}/{{pageTotalNum}} </div>
        <button :theme="'default'" type="submit" :title="'基础按钮'" @click.stop="clock" class="mr10"> 顺时针</button>
        <button :theme="'default'" type="submit" :title="'基础按钮'" @click.stop="counterClock" class="mr10"> 逆时针</button>
      </div>
      <pdf ref="pdf" 
          :src="url" 
          :page="pageNum"
          :rotate="pageRotate"  
          @progress="loadedRatio = $event"
          @page-loaded="pageLoaded($event)" 
          @num-pages="pageTotalNum=$event" 
          @error="pdfError($event)" 
          @link-clicked="page = $event">
      </pdf>
    </template>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import countDown from 'vue-canvas-countdown'
import {jsPDF} from 'jspdf'
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
      },
      url: "http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf",
      pageNum: 1,
      pageTotalNum: 1,
      pageRotate: 0,
      // 加载进度
      loadedRatio: 0,
      curPageNum: 0,
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
          endtime = new Date("2021/02/07");  //定义结束时间
      var lefttime = endtime.getTime() - nowtime.getTime(),  //距离结束时间的毫秒数
          leftd = Math.floor(lefttime/(1000*60*60*24)),  //计算天数
          lefth = Math.floor(lefttime/(1000*60*60)%24),  //计算小时数
          leftm = Math.floor(lefttime/(1000*60)%60),  //计算分钟数
          lefts = Math.floor(lefttime/1000%60);  //计算秒数
      return '距离放假回家还有:' + leftd + "天" + lefth + "时" + leftm + "分" + lefts+'秒';  //返回倒计时的字符串
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
      // console.log('倒计时状态改变：', payload)
    },
    onEnd () {
      // console.log('倒计时结束的回调函数')
    },
    creatPdfFilds(){//生成pdf文件
        const doc = new jsPDF();
        doc.text("Hello semlinker!", 66, 88);
        const blob = new Blob([doc.output()], { type: "application/pdf" });
        blob.text().then((blobAsText) => {
          console.log(blobAsText);
        });
    },
    clickEvent(){//下载文档
      const download = (fileName, blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        link.remove();
        URL.revokeObjectURL(link.href);
      };
      const fileName = "blob.pdf";//text/plain
      const myBlob = new Blob(["一文彻底掌握 Blob Web API"], { type: "application/pdf" });
      download(fileName, myBlob); 
    },
    downloadPDf() {//下载本地pdf文件
        this.$axios.get('static/test.pdf', {
          responseType: 'blob', //重要
        }).then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          // blob:http://localhost:8080/712dbb0d-21fe-4268-b441-982bca3b22a6
          const link = document.createElement('a');
          let fname = '验收单.pdf';
          link.href = url;
          link.setAttribute('download', fname);
          document.body.appendChild(link);
          link.click();
        })
      },
      // 上一页函数，
    prePage() {
      var page = this.pageNum
      page = page > 1 ? page - 1 : this.pageTotalNum
      this.pageNum = page
    },
          // 下一页函数
    nextPage() {
      var page = this.pageNum
      page = page < this.pageTotalNum ? page + 1 : 1
      this.pageNum = page
    },
          // 页面顺时针翻转90度。
    clock() {
      this.pageRotate += 90
    },
          // 页面逆时针翻转90度。
    counterClock() {
      this.pageRotate -= 90
    },
          // 页面加载回调函数，其中e为当前页数
    pageLoaded(e) {
      this.curPageNum = e
    },
          // 其他的一些回调函数。
    pdfError(error) {
      console.error(error)
    },
    // 打印全部
    pdfPrintAll() {
      this.$refs.pdf.print()
        },
    // 打印指定部分
    pdfPrint() {
      this.$refs.pdf.print(100, [1, 2])
      },
  },

  created() {

  },
  mounted() {
    this.getDate();
    // 启动倒计时
    // this.fireCD();
  },
  components:{ 
    countDown,
    pdf,
   }
}
</script>

<style lang='scss' scoped></style>