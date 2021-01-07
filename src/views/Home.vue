<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TabBar :tabList=tabList>
      <div slot="shangpinxiangqing">shangpinxiangqing</div>
      <div slot="guigecanshu">guigecanshu</div>
      <div slot="peijianxiane">peijianxiane</div>
      <div slot="chengjiaojilu">chengjiaojilu</div>
      <div slot="shangpinpingjia">shangpinpingjia</div>
    </TabBar>
  </div>
</template>

<script>
// @ is an alias to /src
import TabBar from '@/components/TabBar.vue'

export default {
  name: 'Home',
  components: {
    TabBar
  },
  data(){
    return{
      tabList:[
        {label:"商品详情",value:"1",slotName:'shangpinxiangqing'},
        {label:"规格参数",value:"2",slotName:'guigecanshu'},
        {label:"配件限额",value:"3",slotName:'peijianxiane'},
        {label:"成交记录",value:"4",slotName:'chengjiaojilu'},
        {label:"商品评价",value:"5",slotName:'shangpinpingjia'},
      ],
    };
  },
  mounted(){
    // console.log(this.tabList);
  }
}
</script>
