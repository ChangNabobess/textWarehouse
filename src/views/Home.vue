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
      <div slot="peijianxiane" style="background-color: #d6ecab;border: 2px solid pink;">
        <template style="background-color: #d6ecab;border: 2px solid pink;">
          ceshi templateshuju 
        </template>
      </div>
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
      textTxt:'测试数组对象去重',
    };
  },
  mounted(){
    this.changeArr();
  },
  methods:{
    changeArr(){
      this.$axios.get('./arrDeweight.json').then(res=>{
        if(res.data.code==200){
          let arr=this.deWeight(res.data.data);
          // console.log('数组对象去重',arr);
        }else{}
      });
      let arr=[1,2,3,4,5,6,7,8,9,0,2,4,3,7];
      // 这种去重的方法代码最少。这种方法还无法去掉“{}”空对象，后面的高阶方法会添加去掉重复“{}”的方法。
      // console.log('数组去重',[...new Set(arr)]);
      // console.log('数组去重',Array.from(new Set(arr)));
      let testarr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
      // let testarr ={asd:'1',vfds:"3",cdb:"4",vfds:"2"};
      // console.log(this.uniqueFor(testarr));
      console.log(this.uniqueIndexOf(testarr));
    },
    deWeight(objArray) {//利用对象键值不能重复的规则去重
        //定义一个空数组，最后return出去
        let resultArr=[];
        //定义一个空对象，作为中介判断重复对象
        let Obj={};
        //添加一个for循环遍历传进来的每一个对象值
        for(let i=0;i<objArray.length;i++){
          //取一个传入对象的键值作为判断依据
          /* let temp = objArray[i].id;
          //判断该对象是否已有此键值
          if(Obj[temp]){
            //如果有的话就代码穿透，直接推出循环
            continue;
          }else{
            //如果没有的话就将此键值设为true，方便下次循环判断
            Obj[temp]=true;
          };
          //最终将符合条件的对象塞入resultArr数组中return出去
          resultArr.push(objArray[i]); */
          //化繁为简代码
          Obj[objArray[i].id] ? '' : Obj[objArray[i].id] = true && resultArr.push(objArray[i]);
        };
        return resultArr;
    },
    uniqueFor(arr){//利用for嵌套for，然后splice去重（ES5中最常用）
      if(Array.isArray(arr)){
      for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
          if(arr[i]==arr[j]){
            arr.splice(j,1);
            j--;
          }else{}
        };
        /* for(var i=0; i<arr.length; i++){
            for(var j=i+1; j<arr.length; j++){
                if(arr[i]==arr[j]){         //第一个等同于第二个，splice方法删除第二个
                    arr.splice(j,1);
                    j--;
                }
            }
        } */
      }
      }else{
        this.$message({message:"接受数据类型应为数组",type:'error'});
      }
      return arr;
    },
    uniqueIndexOf(arr) {//利用indexof判断新数组中是否包含某个元素
      let res=[];
      for(let i=0;i<arr.length;i++){
        if(res.indexOf(arr[i])===-1){
          res.push(arr[i])
        };
      };
      return res;
    },
  },
  created(){
    
  }
}
</script>
<style scoped lang="scss">
.el-textarea ::v-deep .el-textarea__inner{
  resize: none;
}
</style>
