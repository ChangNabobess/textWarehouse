<template>
  <div class=''>
    <div class="main-body" v-if="tabList.length>0">
      <ul>
        <li v-for="(item,index) in tabList" :key="index" @click="changeValue(item)">{{item.label}}</li>
      </ul>
      <div class="show-page">
        <div v-for="(i,v) in tabList" :key="v">
            <template v-if="activeValue==i.value">
            <slot :name="activeValue"></slot>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeValue:'',
      tabList:[]
    };
  },
  props:{
    TabList:{
      type:Array,
      default:[]
    }
  },
  computed: {},
  watch: {
    TabList(newVal,oldVal){
      this.tabList=newVal;
    }
  },
  methods: {
    changeValue(item){
      this.activeValue=item.value;
    }
  },
  created() {
    
  },
  mounted() {
    console.log(this.tabList)
  },
}
</script>

<style lang='scss' scoped>
.main-body{
  width: 1500px;
  height: 100%;
  margin: 0px auto;
  ul{
    padding: 0px;
    height: 50px;
    margin: 0px;
    border-bottom: 1px solid #283757;
    li{
      width: 20%;
      height: 40px;
      line-height: 40px;
      list-style: none;
      float: left;
      cursor: pointer;
      }
    li:hover{
          background: pink;
      }
  }
  .show-page{
    width: 100%;
    min-height: 50px;
  }
}
</style>