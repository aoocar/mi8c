(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-applyAfterSales-applyAfterSales"],{"08a2":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-uni-view",{staticStyle:{padding:"20rpx","margin-bottom":"70rpx"}},[i("v-uni-view",{staticClass:"apply_types flex_bflow"},[i("v-uni-view",{staticClass:"apply_choose1"},[t._v("售后类型")]),1==t.from_to?i("v-uni-view",{staticClass:"apply_choose2"},[i("v-uni-text",[t._v("仅退款")])],1):t._e(),2==t.from_to&&(1==t.status||2==t.status&&2==t.delivery_type)?i("v-uni-view",{staticClass:"apply_choose2"},[i("v-uni-text",[t._v("仅退款")])],1):t._e(),2==t.from_to&&(3==t.status||7==t.status||2==t.status&&1==t.delivery_type)?i("v-uni-view",{staticClass:"apply_choose2",on:{click:function(e){e=t.$handleEvent(e),t.chooseApply(e)}}},[i("v-uni-text",[t._v(t._s(t.tk_msg))]),i("v-uni-text",{staticClass:"iconfont icon-x-you apply_icon"})],1):t._e()],1),i("v-uni-view",{staticClass:"apply_types1"},[t._l(t.dataAll,function(e,a){return[i("v-uni-view",{key:a+"_0",staticStyle:{"padding-top":"20rpx"}},[i("v-uni-view",{staticClass:"flex-row"},[i("v-uni-image",{staticClass:"product_img",attrs:{src:""!=e.pro_thumb?e.pro_thumb:t.$host+"/diypage/resource/images/diypage/default/default.jpg",mode:"aspectFill"}}),i("v-uni-view",{staticClass:"order_list_product_center"},[i("v-uni-view",{staticClass:"order_product_title text_hide"},[t._v(t._s(e.pro_title))]),e.pro_attr?i("v-uni-view",{staticClass:"order_product_des text_hide"},[t._v(t._s(e.pro_attr))]):t._e()],1),i("v-uni-view",{staticClass:"flex1"}),i("v-uni-view",[i("v-uni-view",{staticClass:"order_product_price"},[i("v-uni-text",[t._v("￥")]),t._v(t._s(e.pro_price))],1),i("v-uni-view",{staticClass:"order_product_count"},[t._v("X1")])],1)],1)],1),i("v-uni-view",{key:a+"_1",staticClass:"apply_items1 flex_bflow apply_line"},[i("v-uni-view",{staticClass:"apply_choose3"},[t._v("商品数量")]),i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticStyle:{width:"40rpx",height:"40rpx","line-height":"40rpx",background:"#f6f6f6","text-align":"center",display:"inline-block",color:"#a0a0a0"},attrs:{"data-type":1},on:{click:function(e){e=t.$handleEvent(e),t.num_change(e)}}},[i("v-uni-view",{staticClass:"iconfont icon-x-jian",staticStyle:{"font-size":"22rpx"}})],1),i("v-uni-view",{staticStyle:{width:"80rpx",height:"40rpx","line-height":"40rpx","text-align":"center",display:"inline-block",background:"#f6f6f6",color:"#434343","font-size":"22rpx"}},[t._v(t._s(e.cancel_num))]),i("v-uni-view",{staticStyle:{width:"40rpx",height:"40rpx","line-height":"40rpx",background:"#f6f6f6","text-align":"center",display:"inline-block",color:"#a0a0a0"},attrs:{"data-type":2},on:{click:function(e){e=t.$handleEvent(e),t.num_change(e)}}},[i("v-uni-view",{staticClass:"iconfont icon-x-jia",staticStyle:{"font-size":"22rpx"}})],1)],1)],1)]}),i("v-uni-view",{staticClass:"apply_items2 flex_bflow"},[i("v-uni-view",{staticClass:"apply_choose3"},[t._v("退款金额")]),i("v-uni-view",{staticStyle:{color:"#E95D3C"}},[t._v("￥"+t._s(t.cancel_money))])],1),i("v-uni-view",{staticClass:"apply_items3"},[i("v-uni-view",{staticClass:"apply_choose3"},[t._v("申请原因")]),i("v-uni-textarea",{staticClass:"apply_textarea",attrs:{maxlength:"170",placeholder:"问题描述越详细，可以提高你的申请成功率!","placeholder-style":"color:#ccc;font-size:24rpx;"},on:{input:function(e){e=t.$handleEvent(e),t.evaluate(e)}}}),i("v-uni-view",{staticClass:"now_count"},[t._v(t._s(t.nowcount)+"/170")])],1)],2)],1),i("v-uni-view",{staticClass:"apply_tijiao"},[1==t.from_to?i("v-uni-view",{staticClass:"apply_btn",on:{click:function(e){e=t.$handleEvent(e),t.cancelPaymentOrder(e)}}},[t._v("提交")]):t._e(),2==t.from_to?i("v-uni-view",{staticClass:"apply_btn",on:{click:function(e){e=t.$handleEvent(e),t.cancelPaymentOrderItem(e)}}},[t._v("提交")]):t._e()],1),1==t.apply_box?i("v-uni-view",[i("v-uni-view",{staticClass:"mask",on:{click:function(e){e=t.$handleEvent(e),t.hideApply(e)}}}),i("v-uni-view",{staticClass:"apply_cbox"},[i("v-uni-view",{staticClass:"apply_titbox",on:{click:function(e){e=t.$handleEvent(e),t.hideApply(e)}}},[i("v-uni-view",{staticClass:"apply_tit"},[t._v("请选择售后类型")]),i("v-uni-view",{staticClass:"iconfont icon-x-guanbi apply_guanbi"})],1),i("v-uni-view",[i("v-uni-view",{staticClass:"applybox_types flex_bflow"},[i("v-uni-view",[t._v("仅退款")]),i("v-uni-view",{staticClass:"iconfont icon-x-gou",class:[0==t.chooseapplytype?"choose_jf":"no_jf"],attrs:{"data-type":0},on:{click:function(e){e=t.$handleEvent(e),t.chooseapplytypes(e)}}})],1),i("v-uni-view",{staticClass:"applybox_types flex_bflow",staticStyle:{"border-bottom":"0"}},[i("v-uni-view",[t._v("退货退款")]),i("v-uni-view",{staticClass:"iconfont icon-x-gou",class:[1==t.chooseapplytype?"choose_jf":"no_jf"],attrs:{"data-type":1},on:{click:function(e){e=t.$handleEvent(e),t.chooseapplytypes(e)}}})],1)],1),i("v-uni-view",{staticClass:"btn_applytype",on:{click:function(e){e=t.$handleEvent(e),t.getApplyType(e)}}},[t._v("确定")])],1)],1):t._e()],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"169d":function(t,e,i){"use strict";i.r(e);var a=i("a6ce"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"27df":function(t,e,i){"use strict";i.r(e);var a=i("08a2"),n=i("169d");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("6984");var s=i("2877"),l=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"221e1d0c",null);e["default"]=l.exports},"4c07":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".flex-row[data-v-221e1d0c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex_bflow[data-v-221e1d0c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.apply_types[data-v-221e1d0c],.apply_types1[data-v-221e1d0c]{background:#fff;padding:%?20?%;border-radius:%?10?%;margin-bottom:%?20?%}.apply_types1[data-v-221e1d0c]{padding:0 %?20?% %?20?%}.apply_choose1[data-v-221e1d0c]{font-size:%?28?%;color:#333}.apply_choose2[data-v-221e1d0c]{font-size:%?24?%;color:#999}.apply_icon[data-v-221e1d0c]{margin-left:%?10?%;font-size:%?24?%}.apply_choose3[data-v-221e1d0c]{font-size:%?26?%;color:#333}.apply_line[data-v-221e1d0c]{border-bottom:%?2?% solid #eee}.apply_items1[data-v-221e1d0c],.apply_items2[data-v-221e1d0c]{padding:%?20?% 0}.apply_items2[data-v-221e1d0c]{border-bottom:%?2?% solid #eee}.apply_items3[data-v-221e1d0c]{padding-top:%?20?%;position:relative}.apply_textarea[data-v-221e1d0c]{width:100%;height:%?284?%;margin-top:%?20?%;background:#f6f6f6;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?24?%}.now_count[data-v-221e1d0c]{position:absolute;bottom:%?20?%;right:%?20?%;font-size:%?24?%;color:#b6b6b6}.apply_cbox[data-v-221e1d0c]{position:absolute;bottom:0;left:0;height:%?400?%;width:100%;background:#fff;z-index:891;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?20?% %?20?% 0 0}.apply_titbox[data-v-221e1d0c]{position:relative;margin-bottom:%?20?%}.apply_tit[data-v-221e1d0c]{text-align:center;color:#232323}.apply_guanbi[data-v-221e1d0c]{position:absolute;top:0;right:0}.applybox_types[data-v-221e1d0c]{padding:%?20?% 0;border-bottom:%?2?% solid #eee}.no_jf[data-v-221e1d0c]{font-size:%?20?%;color:#f6f6f6;background:#f6f6f6;border-radius:50%;width:%?34?%;height:%?34?%;line-height:%?34?%;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;border:%?2?% solid #a0a0a0}.choose_jf[data-v-221e1d0c]{font-size:%?20?%;color:#fff;background:#e95d3c;border-radius:50%;width:%?34?%;height:%?34?%;line-height:%?34?%;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box}.btn_applytype[data-v-221e1d0c]{margin-top:%?60?%;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;text-align:center;background:#e54a48;color:#fff;border-radius:%?70?%;height:%?70?%;line-height:%?70?%}\n/* 提交按钮 */.apply_tijiao[data-v-221e1d0c]{position:fixed;bottom:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?20?%;width:100%;text-align:center}.apply_btn[data-v-221e1d0c]{background:#e54a48;color:#fff;font-size:%?24?%;border-radius:%?70?%;height:%?70?%;line-height:%?70?%}",""])},6984:function(t,e,i){"use strict";var a=i("9726"),n=i.n(a);n.a},9726:function(t,e,i){var a=i("4c07");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("07aed35d",a,!0,{sourceMap:!1,shadowMode:!1})},a6ce:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("55f5"),n={data:function(){return{$imgurl:this.$imgurl,$host:this.$host,apply_box:0,chooseapplytype:-1,num:1,evaluatecon:"",nowcount:0,order_id:0,order_item_id:0,dataAll:"",from_to:0,tk_msg:"请选择售后类型",cancel_money:0,status:0,delivery_type:0,total_num:0,is_last_refund:0,is_add_freight:0,shen_all_can_refund_money:0,freight_all:0}},onLoad:function(t){var e=this;this._baseMin(this);var i=0;t.fxsid&&(i=t.fxsid),this.fxsid=i;var n=0;if(t.from_to&&(n=t.from_to),this.from_to=n,1==n){var o=0;t.order_id&&(o=t.order_id),this.order_id=o}else if(2==n){var s=0;t.order_item_id&&(s=t.order_item_id),this.order_item_id=s}var l=uni.getStorageSync("suid");l&&(this.suid=l);var r=uni.getStorageSync("source");r&&(this.source=r),a.h5login(i,function(){1==n?e.getapplyall():2==n&&e.getapplydetail()})},methods:{getapplyall:function(){var t=this;uni.request({url:this.$host+"/api/mainwxapp/applyAllAfterSales",data:{uniacid:this.$uniacid,suid:this.suid,order_id:this.order_id},success:function(e){console.log(e.data.data);for(var i=0;i<e.data.data.order.order_items.length;i++)e.data.data.order.order_items[i]["cancel_num"]=e.data.data.order.order_items[i]["num"];t.dataAll=e.data.data.order.order_items,t.cancel_money=e.data.data.order.pay_money},fail:function(t){console.log(t)}})},getapplydetail:function(){var t=this;uni.request({url:this.$host+"/api/mainwxapp/applyItemAfterSales",data:{uniacid:this.$uniacid,suid:this.suid,order_item_id:this.order_item_id},success:function(e){if(0==e.data.data.error){var i=[];i[0]=e.data.data.order_item,i[0]["cancel_num"]=i[0]["num"],t.dataAll=i,t.status=i[0]["status"],t.delivery_type=i[0]["delivery_type"],t.is_last_refund=i[0]["is_last_refund"],t.is_add_freight=i[0]["is_add_freight"],t.shen_all_can_refund_money=i[0]["shen_all_can_refund_money"],1==t.is_last_refund?1==t.is_add_freight?t.cancel_money=t.shen_all_can_refund_money:(t.freight_all=i[0]["freight_all"],t.cancel_money=(t.shen_all_can_refund_money-t.freight_all).toFixed(2)):t.cancel_money=(i[0]["pro_can_refound_price"]*i[0]["num"]).toFixed(2)}else uni.showModal({title:"提示",content:"申请失败，"+e.data.data.msg,showCancel:!1,success:function(t){uni.navigateBack({delta:2})}})},fail:function(t){console.log(t)}})},cancelPaymentOrder:function(){var t=this.evaluatecon;if(!t)return uni.showModal({title:"提示",content:"申请原因不能为空",showCancel:!1}),!1;var e=0,i=this.source;uni.request({url:this.$host+"/api/mainwxapp/cancelPaymentOrder",data:{uniacid:this.$uniacid,suid:this.suid,order_id:this.order_id,remark:t,type:e,source:i},success:function(t){if(0==t.data.data.error){var e=t.data.data.order_service.order_service_id;uni.showModal({title:"提示",content:"退款申请成功",showCancel:!1,success:function(t){console.log(t),uni.redirectTo({url:"/pages/orderAftersale/orderAftersale?order_service_id="+e})}})}else uni.showModal({title:"提示",content:"申请失败，"+t.data.data.msg,showCancel:!1})},fail:function(t){console.log(t)}})},cancelPaymentOrderItem:function(){var t=this.evaluatecon;if(!t)return uni.showModal({title:"提示",content:"申请原因不能为空",showCancel:!1}),!1;var e=this.status,i=this.delivery_type,a=-1;if(1==e||2==e&&2==i)a=0;else if(a=this.chooseapplytype,-1==a)return void uni.showModal({title:"提示",content:"请选择售后类型",showCancel:!1});var n=this.source;uni.request({url:this.$host+"/api/mainwxapp/applyItemSubmit",data:{uniacid:this.$uniacid,suid:this.suid,order_item_id:this.order_item_id,num:this.dataAll[0]["cancel_num"],refund_money:this.cancel_money,type:a,source:n,remark:t},success:function(t){if(0==t.data.data.error){var e=t.data.data.order_service.order_service_id;uni.showModal({title:"提示",content:"退款申请成功",showCancel:!1,success:function(t){console.log(t),uni.redirectTo({url:"/pages/orderAftersale/orderAftersale?order_service_id="+e})}})}else uni.showModal({title:"提示",content:"申请失败，"+t.data.data.msg,showCancel:!1})},fail:function(t){console.log(t)}})},chooseApply:function(){0==this.apply_box&&(this.apply_box=1),this.chooseapplytype=-1},hideApply:function(){1==this.apply_box&&(this.apply_box=0),this.chooseapplytype=-1},getApplyType:function(){var t=this.chooseapplytype;-1!=t?(1==this.apply_box&&(this.apply_box=0),0==t?this.tk_msg="仅退款":1==t&&(this.tk_msg="退货退款")):uni.showModal({title:"提示",content:"请选择售后类型",showCancel:!1})},chooseapplytypes:function(t){this.chooseapplytype=t.currentTarget.dataset.type},num_change:function(t){var e=t.currentTarget.dataset.type,i=this.from_to;if(2==i){var a=this.dataAll,n=0;1==e?n=a[0]["cancel_num"]-1:2==e&&(n=a[0]["cancel_num"]+1),n>0&&(n<a[0]["num"]?(a[0]["cancel_num"]=n,this.cancel_money=(n*a[0]["pro_can_refound_price"]).toFixed(2)):n==a[0]["num"]&&(a[0]["cancel_num"]=n,1==this.is_last_refund?1==this.is_add_freight?this.cancel_money=this.shen_all_can_refund_money:(this.freight_all=a[0]["freight_all"],this.cancel_money=this.shen_all_can_refund_money-this.freight_all):this.cancel_money=(n*a[0]["pro_can_refound_price"]).toFixed(2))),this.dataAll=a}},evaluate:function(t){var e=this,i=t.detail.value,a=t.detail.cursor;e.evaluatecon=i,e.nowcount=a}}};e.default=n}}]);