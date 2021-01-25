<template>
  <div class="home">
    <TabBar :tabList=tabList>
      <div slot="shangpinxiangqing" class="frist">
        <el-col :span="20">
          <el-input
            type="textarea"
            :rows="2"
            placeholder="请输入内容"
            v-model="copyText">
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button v-copy="copyText">复制全部</el-button>
        </el-col>
      </div>
      <div slot="guigecanshu">
        {{textTxt}}
      </div>
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
      copyText: 'a copy directives',
      textTxt:'',
    };
  },
  mounted(){
    // console.log(this.tabList);
  },
  methods:{
    deWeight(objArray) {
        var result = [];//去重后返回的结果数组
        var temp = {};//临时对象
        //将对象数组中每一项的name值作为属性，若temp不拥有此属性时则为temp添加此属性且将其值赋为true，并将这一项push到结果数组中
        for(var i=0;i<objArray.length;i++){
            var myname = objArray[i].buyPlanAttachmentType;
            if(temp[myname]){//如果temp中已经存在此属性名，则说明遇到重复项
                continue;//不继续执行接下来的代码，跳转至循环开头
            }
            temp[myname] = true;//为temp添加此属性（myname）且将其值赋为true
            result.push(objArray[i]);//将这一项复制到结果数组result中去
        }
        return result;
    },
  }
}
</script>
<style scoped lang="scss">
.el-textarea ::v-deep .el-textarea__inner{
  resize: none;
}
</style>
