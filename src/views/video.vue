<template>
  <div class=''>
    {{value}}
    {{text}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:'测试',
      text:'',
      arr:[
        {code: 'A1', index: 1, groupNo: '1'},
        {code: 'A2', index: 2, groupNo: '1'},
        {code: 'A3', index: 3, groupNo: '1'},
        {code: 'B1', index: 4, groupNo: '2'},
        {code: 'B2', index: 5, groupNo: '2'},
        {code: 'C1', index: 5, groupNo: '3'},
        {code: 'D1', index: 5, groupNo: '4'},
        {code: 'C2', index: 5, groupNo: '3'},
      ],
      arr2:[
         {
          title: '系统管理',
          parentName: '',
          parentId: 0,
          id: 1,
      },
      {
          title: '菜单管理',
          parentName: '系统管理',
          parentId: 1,
          id: 11,
      },
      {
          title: '菜单新增',
          parentName: '菜单管理',
          parentId: 11,
          id: 111,
      },
      {
          title: '菜单编辑',
          parentName: '菜单管理',
          parentId: 11,
          id: 112,
      },
      {
          title: '菜单删除',
          parentName: '菜单管理',
          parentId: 11,
          id: 113,
      },
      {
          title: '角色管理',
          parentName: '系统管理',
          parentId: 1,
          id: 22,
      },
      {
          title: '角色新增',
          parentName: '角色管理',
          parentId: 22,
          id: 221,
      },
      {
          title: '角色编辑',
          parentName: '角色管理',
          parentId: 22,
          id: 222,
      },
      {
          title: '角色删除',
          parentName: '角色管理',
          parentId: 22,
          id: 223,
      },
      {
          title: '用户管理',
          parentName: '系统管理',
          parentId: 1,
          id: 33,
      },
      {
          title: '用户新增',
          parentName: '用户管理',
          parentId: 33,
          id: 331,
      },
      {
          title: '用户编辑',
          parentName: '用户管理',
          parentId: 33,
          id: 332,
      },
      {
          title: '用户删除',
          parentName: '用户管理',
          parentId: 33,
          id: 333,
      }
        ]
    };
  },
  computed: {},
  watch: {},
  methods: {
   _changeArr() {
    // 网上大神给的方法 小白一时没看懂
      let arr=this.arr;
      const b  = arr.reduce((r, x) => ((r[x.groupNo] || (r[x.groupNo] = []) ).push(x), r)
      , {});
      // console.log(b);
      //  自己转换
      const d = arr.reduce((prev, cur) => {
        // console.log(prev,cur);
        // console.log(prev[cur.groupNo]);
        // console.log(cur);
        if (!prev[cur.groupNo]) {
          prev[cur.groupNo] = [];
        }
        prev[cur.groupNo].push(cur);
        return prev;
      }, {});
      // console.log(b, d);}
      // 转label，name
       /* this.protocolList.push(res.data);
        let arr=[];
        let Obj={};
        let childArr=[];
        let childObj={}
        this.protocolList.forEach((v,k)=>{
          // console.log(v);
          let keyArr=Object.keys(v);//获取所有键名，把所有键名push到一个数组中
          Obj.label=keyArr[k];//将数组中每个对象的label赋值
          v[keyArr[k]].forEach((v,k)=>{//
            childObj=v;
            childObj.label=v.agreementname;
          });
          Obj.children=
          childArr=v[keyArr[k]];
          // arr.push(Obj);
        });
        console.log(childObj);
        //tabel多选框另外一种方法
        <!--<el-table-column header-align="center" width="60px" align="center" :show-overflow-tooltip="true">
              <template slot="header">
                  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"
                    @change="handleCheckAllChange" ></el-checkbox>
              </template>
               <template slot-scope="scope"> -->
                  <!-- <el-checkbox  v-model="scope.row.checked" @change="checked=>changeCheck(checked,scope.row)"></el-checkbox> -->
              <!-- </template>
            </el-table-column>-->
        // 判断多选框重复的方法
        changeCheck(checked,row){//多选框触发事件
      let totalCount = this.tableData.length;
      let someStatusCount = 0;
      if(checked==true){
        this.areaConfig.checkedArr.push(row.sarightguid);
        this.tableData.forEach(item => {
            if (item.checked === checked) {
                someStatusCount++
            }
        })
        this.checkAll = totalCount === someStatusCount ? checked : !checked;
        this.isIndeterminate = someStatusCount > 0 && someStatusCount < totalCount;
      }else{
        let index=this.areaConfig.checkedArr.indexOf(row.id);
        this.areaConfig.checkedArr.splice(index,1);
        this.tableData.forEach(item => {
            if (item.checked === checked) {
                someStatusCount++
            }
        });
        this.checkAll = totalCount === someStatusCount ? checked : !checked;
        this.isIndeterminate = someStatusCount > 0 && someStatusCount < totalCount;
      }
    },
    },*/ 
  },
    jsonToTree(lists, id, parentId) {
        var idList = {},
            treeList = [];
        for (var i = 0, len = lists.length; i < len; i++) {
            //生成一个以id为键的对象
            idList[lists[i][id]] = lists[i]
        }
        for (var j = 0, len1 = lists.length; j < len1; j++) {
            var aVal = lists[j];
            var aValParent = idList[aVal[parentId]];
            //如果aValParent存在；就说明当前的aVal是aValParent的孩子
            if (aValParent) {
                if ('chindren' in aValParent) {
                    aValParent['children'].push(aVal)
                } else {
                    aValParent['children'] = [];
                    aValParent['children'].push(aVal)
                }
            } else {
                treeList.push(aVal)
            }
        }
        return treeList
    },
     _changeArr2(){
    // 网上大神给的方法 小白一时没看懂
      let arr=this.arr;
      /* const b  = arr.reduce((r, x) => ((r[x.groupNo] || (r[x.groupNo] = []) ).push(x), r)
      , {});
      console.log(b); */
      //  自己转换
      const d = arr.reduce((prev, cur) => {
        // console.log(prev,cur);
        // console.log(prev[cur.groupNo]);
        // console.log(cur);
        if (!prev[cur.groupNo]) {
          prev[cur.groupNo] = [];
        }
        prev[cur.groupNo].push(cur);
        return prev;
      }, {});
      this.text=d
    },
  },
  created() {

  },
  mounted() {
    this._changeArr2();
  },
}
</script>

<style lang='scss' scoped>

</style>