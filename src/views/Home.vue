<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TabBar :TabList=tabList></TabBar>
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
        {label:"商品详情",value:"1"},
        {label:"规格参数",value:"2"},
        {label:"配件限额",value:"3"},
        {label:"成交记录",value:"4"},
        {label:"商品评价",value:"5"},
      ],
    };
  },
}
</script>
