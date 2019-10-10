(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf320"],{"634a":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-full"},[a("div",{staticClass:"bg-white w-full mt-5 px-10 py-10"},[a("div",{staticClass:"flex justify-between w-full"},[a("div",[a("el-button",{attrs:{type:"success",round:"",icon:"el-icon-plus"},on:{click:t.create}},[t._v("添加订单")])],1),t._v(" "),a("div",{staticClass:"flex"},[a("el-input",{attrs:{placeholder:"请输入客户名称"},model:{value:t.params.customer,callback:function(e){t.$set(t.params,"customer",e)},expression:"params.customer"}}),t._v(" "),a("div",{staticClass:"w-2"}),t._v(" "),a("el-select",{attrs:{placeholder:"订单类型"},model:{value:t.params.product_id,callback:function(e){t.$set(t.params,"product_id",e)},expression:"params.product_id"}},t._l(t.products,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1),t._v(" "),a("div",{staticClass:"w-2"}),t._v(" "),a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.params.dueDate,callback:function(e){t.$set(t.params,"dueDate",e)},expression:"params.dueDate"}}),t._v(" "),a("el-button",{staticClass:"ml-5",attrs:{type:"success",round:""},on:{click:t.searchEvent}},[t._v("搜索")]),t._v(" "),a("el-button",{attrs:{size:"small",round:""},on:{click:t.exportCsvEvent}},[t._v("导出")])],1)]),t._v(" "),a("vxe-table",{ref:"xTable",staticClass:"mt-8",attrs:{border:"",resizable:"",loading:t.loading,"start-index":(t.tablePage.currentPage-1)*t.tablePage.pageSize,"pager-config":t.tablePage,data:t.tableData}},[a("vxe-table-column",{attrs:{field:"customername",title:"公司名称"}}),t._v(" "),a("vxe-table-column",{attrs:{field:"product",title:"产品"}}),t._v(" "),a("vxe-table-column",{attrs:{field:"years",title:"服务时长"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("div",[t._v("\n            "+t._s(s.years+"年")+"\n          ")])]}}])}),t._v(" "),a("vxe-table-column",{attrs:{field:"username",title:"业务员"}}),t._v(" "),a("vxe-table-column",{attrs:{field:"status",title:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[0===s.status?a("div",{staticClass:"text-green-500"},[t._v("进行中")]):t._e(),t._v(" "),1===s.status?a("div",[t._v("已完成")]):t._e()]}}])}),t._v(" "),a("vxe-table-column",{attrs:{field:"dueDate",title:"有效期"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("div",[t._v("\n            "+t._s(s.createdDate+" ~ "+s.dueDate)+"\n          ")])]}}])}),t._v(" "),a("vxe-table-column",{attrs:{title:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.row;return[a("div",[a("el-button",{attrs:{size:"small",circle:"",icon:"icon-zhongzhimima1"},on:{click:function(e){return t.deleteEvent(s)}}}),t._v(" "),a("el-button",{attrs:{circle:"",type:"success",plain:"",icon:"el-icon-edit"},on:{click:function(e){return t.editEvent(s)}}})],1)]}}])})],1),t._v(" "),a("vxe-pager",{attrs:{loading:t.loading,"current-page":t.tablePage.currentPage,"page-size":t.tablePage.pageSize,total:t.tablePage.total,layouts:["PrevPage","JumpNumber","NextPage","FullJump","Sizes","Total"]},on:{"page-change":t.handlePageChange}})],1),t._v(" "),a("vxe-modal",{attrs:{width:"600","show-header":!0,title:t.actionTip[t.action]+"订单","show-footer":!0},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px","label-position":"top"}},[a("div",{},[a("div",{staticClass:"flex justify-between items-center"},[a("el-form-item",{attrs:{label:"客户名称",prop:"customer_id",rules:[{required:!0,message:"客户名称不能为空",trigger:"blur"}]}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.form.customer_id,callback:function(e){t.$set(t.form,"customer_id",e)},expression:"form.customer_id"}},t._l(t.customers,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1),t._v(" "),a("el-radio-group",{model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[a("el-radio-button",{attrs:{label:"进行中"}}),t._v(" "),a("el-radio-button",{attrs:{label:"已完成"}})],1)],1),t._v(" "),a("div",{staticClass:"flex"},[a("el-form-item",{staticClass:"flex-1",attrs:{label:"产品",prop:"product_id",rules:[{required:!0,message:"产品不能为空",trigger:"blur"}]}},[a("el-select",{staticClass:"flex-1",attrs:{placeholder:"产品"},model:{value:t.form.product_id,callback:function(e){t.$set(t.form,"product_id",e)},expression:"form.product_id"}},t._l(t.products,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1)],1),t._v(" "),a("div",{staticClass:"w-2"}),t._v(" "),a("el-form-item",{staticClass:"flex-1",attrs:{label:"版本"}},[a("el-select",{model:{value:t.form.version,callback:function(e){t.$set(t.form,"version",e)},expression:"form.version"}},[a("el-option",{attrs:{value:"祥云建站",label:"祥云建站"}})],1)],1),t._v(" "),a("div",{staticClass:"w-2"}),t._v(" "),a("el-form-item",{staticClass:"flex-1",attrs:{label:"时长"}},[a("el-select",{model:{value:t.form.duration,callback:function(e){t.$set(t.form,"duration",e)},expression:"form.duration"}},[a("el-option",{attrs:{value:"3年",label:"3年"}})],1)],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"业务员",prop:"user_id",rules:[{required:!0,message:"请选择业务员",trigger:"blur"}]}},[a("div",{staticClass:"flex"},[a("el-select",{staticClass:"flex-1",attrs:{placeholder:"请选择部门"},on:{change:t.changeDepartment},model:{value:t.department_id,callback:function(e){t.department_id=e},expression:"department_id"}},t._l(t.departments,(function(t){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),1),t._v(" "),a("div",{staticClass:"w-2"}),t._v(" "),a("el-select",{staticClass:"flex-1",attrs:{placeholder:"请选择业务员"},model:{value:t.form.user_id,callback:function(e){t.$set(t.form,"user_id",e)},expression:"form.user_id"}},t._l(t.users,(function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)]),t._v(" "),a("el-form-item",{attrs:{label:"备注说明"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.form.comments,callback:function(e){t.$set(t.form,"comments",e)},expression:"form.comments"}})],1)],1)])],t._v(" "),a("template",{slot:"footer"},[a("div",{staticClass:"flex justify-end"},[a("el-button",{attrs:{round:""},on:{click:t.cancel}},[t._v("取消")]),t._v(" "),a("div",{staticClass:"w-2"}),t._v(" "),a("el-button",{attrs:{type:"success",round:""},on:{click:t.confirm}},[t._v("确认")])],1)])],2)],1)},r=[],i=(a("ac6a"),a("456d"),a("96cf"),a("3b8d")),n={name:"Order",components:{},mixins:[],extends:{},filters:{},provide:{},inject:[],customers:[],props:{},computed:{},watch:{tabIndex:function(t,e){this.findList()}},data:function(){return{loading:!1,editId:0,modal:!1,action:"add",actionTip:{add:"添加",edit:"修改"},tablePage:{total:0,currentPage:1,pageSize:10},tableData:[],dueDates:[],departments:[],users:[],customers:[],department_id:"",params:{customer:"",startDate:"",endDate:"",product:"",dueDate:""},products:[{id:1,title:"祥云建站（祥瑞版）"},{id:2,title:"小程序"},{id:3,title:"祥云建站（平台版）"}],form:{customer_id:"",product_id:"",user_id:"",comments:"",status:"进行中"}}},created:function(){this.findList(),this.getCustomerList()},methods:{findList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,this.$request.get("/api/order",{params:{page:this.tablePage.currentPage,limit:this.tablePage.pageSize,customer:this.params.customer,product_id:this.params.product_id,dueDate:this.params.dueDate}});case 4:e=t.sent,a=e.data,s=a.total,r=a.data,this.tableData=r,this.tablePage.total=s;case 10:return t.prev=10,this.loading=!1,t.finish(10);case 13:case"end":return t.stop()}}),t,this,[[0,,10,13]])})));function e(){return t.apply(this,arguments)}return e}(),searchEvent:function(){this.tablePage.currentPage=1,this.findList()},handlePageChange:function(t){var e=t.currentPage,a=t.pageSize;this.tablePage.currentPage=e,this.tablePage.pageSize=a,this.findList()},deleteEvent:function(t){var e=this;this.$confirm("确定删除此订单?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.loading=!0,e.$request.delete("/api/order/".concat(t.id)).then((function(t){e.$message({message:"删除成功",type:"success"}),e.loading=!1,e.findList()}))})).catch((function(){e.loading=!1}))},exportCsvEvent:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.loading=!0,t.next=4,this.$request.get("/api/order",{params:{customer:this.params.customer,product_id:this.params.product_id,dueDate:this.params.dueDate}});case 4:e=t.sent,a=e.data,this.$refs.xTable.exportCsv({filename:"客户信息.csv",original:!0,isHeader:!0,data:a});case 7:return t.prev=7,this.loading=!1,t.finish(7);case 10:case"end":return t.stop()}}),t,this,[[0,,7,10]])})));function e(){return t.apply(this,arguments)}return e}(),getCustomerList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request.get("/api/customer");case 2:return e=t.sent,a=e.data,this.customers=a,t.next=7,this.$request.get("/api/department");case 7:s=t.sent,r=s.data,this.departments=r;case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),changeDepartment:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$request.get("/api/user",{params:{department_id:this.department_id}});case 2:e=t.sent,a=e.data,this.users=a;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),editEvent:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.action="edit",this.editId=e.id,this.department_id=e.department_id,t.next=5,this.$request.get("/api/user",{params:{department_id:e.department_id}});case 5:a=t.sent,s=a.data,this.users=s,this.form=_.pick(e,Object.keys(this.form)),this.form.status=1===e.status?"已完成":"进行中",this.modal=!0;case 11:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),create:function(){this.modal=!0,this.action="add"},cancel:function(){this.modal=!1,this.$refs["form"].resetFields(),this.form.comments="",this.department_id="",this.form.status="进行中"},confirm:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a,s,r,i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,"edit"!==this.action){t.next=8;break}return this.form.status="进行中"===this.form.status?0:1,e=this.form,a=e.customer_id,s=e.product_id,r=e.status,i=e.user_id,n=e.comments,t.next=6,this.$request.patch("/api/order/".concat(this.editId),{customer_id:a,product_id:s,status:r,user_id:i,comments:n});case 6:t.next=11;break;case 8:return this.form.status="进行中"===this.form.status?0:1,t.next=11,this.$request.post("/api/order",this.form);case 11:return t.prev=11,this.$message({message:this.actionTip[this.action]+"成功！",type:"success"}),this.findList(),this.cancel(),t.finish(11);case 16:case"end":return t.stop()}}),t,this,[[0,,11,16]])})));function e(){return t.apply(this,arguments)}return e}()}},o=n,l=a("2877"),c=Object(l["a"])(o,s,r,!1,null,"0346162a",null);e["default"]=c.exports}}]);