(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-orderAftersale-orderAftersale"],{4333:function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.$imgurl?i("v-uni-view",[i("v-uni-view",{staticClass:"order_title_box",style:{background:e.baseinfo.base_color}},[i("v-uni-view",{staticClass:"flex_bflow",staticStyle:{padding:"20rpx 120rpx 0"}},[0!=e.orderinfo.apply_type||0!=e.orderinfo.status&&1!=e.orderinfo.status?e._e():i("v-uni-view",{staticClass:"order_types"},[e._v("仅退款，处理中")]),1!=e.orderinfo.apply_type||0!=e.orderinfo.status&&1!=e.orderinfo.status?e._e():i("v-uni-view",{staticClass:"order_types"},[e._v("退货退款，处理中")]),0==e.orderinfo.apply_type&&2==e.orderinfo.status?i("v-uni-view",{staticClass:"order_types"},[e._v("仅退款，退款失败")]):e._e(),1==e.orderinfo.apply_type&&2==e.orderinfo.status?i("v-uni-view",{staticClass:"order_types"},[e._v("退货退款，退款失败")]):e._e(),-1==e.orderinfo.status?i("v-uni-view",{staticClass:"order_types"},[e._v("退款取消")]):e._e(),3==e.orderinfo.status?i("v-uni-view",{staticClass:"order_types"},[e._v("商家取消")]):e._e(),i("v-uni-view",{staticClass:"order_img"},[i("v-uni-view",{staticClass:"iconfont icon-x-shouhou1"}),i("v-uni-image",{staticStyle:{width:"208rpx",height:"108rpx"},attrs:{src:e.$imgurl+"detailTop.png",mode:"aspectFit"}})],1)],1),-1!=e.orderinfo.status?i("v-uni-view",{staticStyle:{margin:"0 20rpx"}},[i("v-uni-view",{staticClass:"sale_tuitype flex_bflow"},[3!=e.orderinfo.status?i("v-uni-view",{staticClass:"sale_tui_type"},[i("v-uni-view",{staticClass:"tui_type_shape"},[i("v-uni-view",{staticClass:"tui_type_yuan1"}),i("v-uni-view",{staticClass:"tui_type_line1"})],1),i("v-uni-view",{staticClass:"tui_type_state"},[e._v("申请退款")]),i("v-uni-view",{staticClass:"tui_type_time"},[e._v(e._s(e.orderinfo.creat_time))])],1):e._e(),i("v-uni-view",{staticClass:"sale_tui_type"},[i("v-uni-view",{staticClass:"tui_type_shape"},[3!=e.orderinfo.status?i("v-uni-view",{class:[e.orderinfo.status>0?"tui_type_line3":"tui_type_line4"]}):e._e(),i("v-uni-view",{class:[e.orderinfo.status>0?"tui_type_yuan1":"tui_type_yuan2"]}),3!=e.orderinfo.status?i("v-uni-view",{class:[e.orderinfo.status>0?"tui_type_line1":"tui_type_line2"]}):e._e(),3==e.orderinfo.status?i("v-uni-view",{staticClass:"tui_type_line1",staticStyle:{width:"240rpx"}}):e._e()],1),0==e.orderinfo.status?i("v-uni-view",{staticClass:"tui_type_state"},[e._v("商家审核")]):e._e(),1==e.orderinfo.status?i("v-uni-view",{staticClass:"tui_type_state"},[e._v("商家同意")]):e._e(),2==e.orderinfo.status?i("v-uni-view",{staticClass:"tui_type_state"},[e._v("商家拒绝")]):e._e(),3==e.orderinfo.status?i("v-uni-view",{staticClass:"tui_type_state"},[e._v("商家退款")]):e._e(),1==e.orderinfo.status?i("v-uni-view",{staticClass:"tui_type_time"},[e._v(e._s(e.orderinfo.agree_time))]):e._e(),2==e.orderinfo.status?i("v-uni-view",{staticClass:"tui_type_time"},[e._v(e._s(e.orderinfo.refuse_time))]):e._e()],1),i("v-uni-view",{staticClass:"sale_tui_type"},[i("v-uni-view",{staticClass:"tui_type_shape"},[3!=e.orderinfo.status?i("v-uni-view",{class:[3==e.orderinfo.status||2==e.orderinfo.status||1==e.orderinfo.status&&e.orderinfo.refund_time?"tui_type_line3":"tui_type_line4"]}):e._e(),3==e.orderinfo.status?i("v-uni-view",{staticClass:"tui_type_line3",staticStyle:{width:"240rpx",left:"-120rpx"}}):e._e(),i("v-uni-view",{class:[3==e.orderinfo.status||2==e.orderinfo.status||1==e.orderinfo.status&&e.orderinfo.refund_time?"tui_type_yuan1":"tui_type_yuan2"]})],1),2!=e.orderinfo.status?i("v-uni-view",{staticClass:"tui_type_state"},[e._v("退款成功")]):e._e(),2==e.orderinfo.status?i("v-uni-view",{staticClass:"tui_type_state"},[e._v("退款失败")]):e._e(),e.orderinfo.refund_time?i("v-uni-view",{staticClass:"tui_type_time"},[e._v(e._s(e.orderinfo.refund_time))]):e._e(),2==e.orderinfo.status?i("v-uni-view",{staticClass:"tui_type_time"},[e._v(e._s(e.orderinfo.refuse_time))]):e._e()],1)],1)],1):e._e(),1==e.orderinfo.status&&1==e.orderinfo.apply_type?[i("v-uni-view",{staticStyle:{margin:"20rpx"}},[i("v-uni-view",{staticClass:"sale_tuifeedback flex-row",style:{"background-image":"url("+e.$imgurl+"tabbottom.png)"}},[i("v-uni-view",{staticClass:"iconfont icon-x-gerenxinxi icon_feedback"}),i("v-uni-view",{staticClass:"text_feedback"},[i("v-uni-view",{staticClass:"text_addressee"},[e._v(e._s(e.orderinfo.apply_send_address.name)),i("v-uni-text",{attrs:{"data-tel":e.orderinfo.apply_send_address.mobile},on:{click:function(t){t=e.$handleEvent(t),e.makephone(t)}}},[e._v(e._s(e.orderinfo.apply_send_address.mobile))])],1),i("v-uni-view",{staticClass:"text_dizhi"},[e._v(e._s(e.orderinfo.apply_send_address.address)+e._s(e.orderinfo.apply_send_address.more_address))]),i("v-uni-view",{staticClass:"text_tips"},[e._v("请尽快按上述地址退还商品！")])],1)],1)],1)]:e._e(),2==e.orderinfo.status?[i("v-uni-view",{staticStyle:{margin:"20rpx"}},[i("v-uni-view",{staticClass:"sale_tuifeedback flex-row"},[i("v-uni-view",{staticClass:"iconfont icon-x-test icon_feedback"}),i("v-uni-view",{staticClass:"text_feedback"},[i("v-uni-view",{staticClass:"text_addressee"},[e._v("商家留言")]),i("v-uni-view",{staticClass:"text_dizhi"},[e._v(e._s(e.orderinfo.refuse_remark))])],1)],1)],1)]:e._e(),i("v-uni-view",{staticStyle:{margin:"20rpx"}},[i("v-uni-view",{staticClass:"sale_tuiprice"},[i("v-uni-view",{staticClass:"flex_bflow sale_tui_price"},[i("v-uni-view",[e._v("退款金额")]),i("v-uni-view",{staticClass:"sale_tui_price1"},[e._v("￥"+e._s("0.00"!=e.orderinfo.change_refund_money?e.orderinfo.change_refund_money:e.orderinfo.refund_money))])],1),e.orderinfo.coupon_title?i("v-uni-view",{staticClass:"flex_bflow sale_tui_price"},[i("v-uni-view",[e._v("退还优惠券")]),i("v-uni-view",{staticClass:"sale_tui_price2"},[e._v(e._s(e.orderinfo.coupon_title))])],1):e._e(),e.orderinfo.score_use?i("v-uni-view",{staticClass:"flex_bflow sale_tui_price"},[i("v-uni-view",[e._v("退还积分")]),i("v-uni-view",{staticClass:"sale_tui_price2"},[e._v(e._s(e.orderinfo.score_use))])],1):e._e()],1)],1),i("v-uni-view",{staticStyle:{margin:"20rpx 20rpx 120rpx"}},[i("v-uni-view",{staticClass:"sale_tuiinfo"},[i("v-uni-view",{staticClass:"sale_tui_info"},[e._v("退款信息")]),e._l(e.orderinfo.order_items,function(t,a){return[i("v-uni-view",{key:a+"_0",staticClass:"order_prolist flex-row"},[i("v-uni-image",{staticClass:"product_img",attrs:{src:""!=t.pro_thumb?t.pro_thumb:e.$host+"/diypage/resource/images/diypage/default/default.jpg",mode:"scaleToFill"}}),i("v-uni-view",{staticClass:"order_list_product_center"},[i("v-uni-view",{staticClass:"order_product_title text_hide"},[e._v(e._s(t.pro_title))]),t.pro_attr?i("v-uni-view",{staticClass:"order_product_des text_hide"},[e._v(e._s(t.pro_attr))]):e._e()],1),i("v-uni-view",{staticClass:"flex1"}),i("v-uni-view",[i("v-uni-view",{staticClass:"order_product_count"},[e._v("X"+e._s(t.num))])],1)],1)]}),i("v-uni-view",{staticClass:"flex-row"},[i("v-uni-view",{staticClass:"sale_tui_reason"},[e._v("退款原因"),i("v-uni-text",[e._v(e._s(e.orderinfo.apply_remark?e.orderinfo.apply_remark:"无"))])],1)],1),i("v-uni-view",{staticClass:"flex-row"},[i("v-uni-view",{staticClass:"sale_tui_reason"},[e._v("退款金额"),i("v-uni-text",[e._v("￥"+e._s("0.00"!=e.orderinfo.change_refund_money?e.orderinfo.change_refund_money:e.orderinfo.refund_money))])],1)],1),i("v-uni-view",{staticClass:"flex-row"},[i("v-uni-view",{staticClass:"sale_tui_reason"},[e._v("申请时间"),i("v-uni-text",[e._v(e._s(e.orderinfo.creat_time))])],1)],1),i("v-uni-view",{staticClass:"flex-row"},[i("v-uni-view",{staticClass:"sale_tui_reason"},[e._v("售后单号"),i("v-uni-text",[e._v(e._s(e.orderinfo.order_service_id))])],1)],1)],2)],1)],2),i("v-uni-view",{staticClass:"order_foot flex-row"},[i("v-uni-view",[i("v-uni-view",{staticClass:"order_list_btn",attrs:{"data-tel":e.baseinfo.tel},on:{click:function(t){t=e.$handleEvent(t),e.makephone(t)}}},[e._v("联系客服")]),0==e.orderinfo.status?i("v-uni-view",{staticClass:"order_list_price_btn",on:{click:function(t){t=e.$handleEvent(t),e.applyRevoke(t)}}},[e._v("撤销退款")]):e._e(),e.orderinfo.apply_type&&1==e.orderinfo.status&&!e.orderinfo.express?i("v-uni-view",{staticClass:"order_list_price_btn",on:{click:function(t){t=e.$handleEvent(t),e.expressBox(t)}}},[e._v("填写单号")]):e._e(),e.orderinfo.apply_type&&1==e.orderinfo.status&&e.orderinfo.express?i("v-uni-view",{staticClass:"order_list_price_btn",attrs:{"data-express_no":e.orderinfo.express_no,"data-express":e.orderinfo.express},on:{click:function(t){t=e.$handleEvent(t),e.goexpress(t)}}},[e._v("查看物流")]):e._e()],1)],1),1==e.expressopen?[i("v-uni-view",{staticClass:"mask",on:{click:function(t){t=e.$handleEvent(t),e.expressClose(t)}}}),i("v-uni-view",{staticClass:"apply_cbox"},[i("v-uni-form",[i("v-uni-view",{staticClass:"apply_titbox",on:{click:function(t){t=e.$handleEvent(t),e.expressClose(t)}}},[i("v-uni-view",{staticClass:"apply_tit"},[e._v("请填写快递单号")]),i("v-uni-view",{staticClass:"iconfont icon-x-guanbi apply_guanbi"})],1),i("v-uni-view",[i("v-uni-view",{staticClass:"applybox_types flex_bflow"},[i("v-uni-view",{staticClass:"express_kuaidi"},[e._v("请选择快递公司")]),i("v-uni-view",{staticClass:"express_kuaidihao"},[i("v-uni-picker",{attrs:{value:e.refund_express,range:e.kuaidi},on:{change:function(t){t=e.$handleEvent(t),e.bindPickerChange(t)}}},[i("v-uni-view",{staticClass:"picker register_form_view1_input"},[e._v(e._s(e.kuaidi[e.refund_express]))])],1)],1)],1),i("v-uni-view",{staticClass:"applybox_types flex_bflow",staticStyle:{"border-bottom":"0"}},[i("v-uni-view",{staticClass:"express_kuaidi"},[e._v("请填写快递单号")]),i("v-uni-view",{staticClass:"express_kuaidihao"},[i("v-uni-input",{attrs:{type:"bumber",value:"",placeholder:"请输入快递单号","placeholder-style":"color:#d7d7d7"},on:{input:function(t){t=e.$handleEvent(t),e.refund_express_no_ipt(t)}}})],1)],1)],1),i("v-uni-view",{staticClass:"btn_applytype",on:{click:function(t){t=e.$handleEvent(t),e.getExpress(t)}}},[e._v("确定")])],1)],1)]:e._e()],2):e._e()},s=[];i.d(t,"a",function(){return a}),i.d(t,"b",function(){return s})},"638c":function(e,t,i){"use strict";i.r(t);var a=i("4333"),s=i("98b8");for(var r in s)"default"!==r&&function(e){i.d(t,e,function(){return s[e]})}(r);i("6cb8");var n=i("2877"),o=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,"6aea5f58",null);t["default"]=o.exports},"6cb8":function(e,t,i){"use strict";var a=i("8ee5"),s=i.n(a);s.a},"7b57":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,".flex-row[data-v-6aea5f58]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flex_bflow[data-v-6aea5f58]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}\n/* 顶部 */.order_title_box[data-v-6aea5f58]{height:%?220?%}.order_types[data-v-6aea5f58]{font-size:%?30?%;color:#fcfcfc}.order_img[data-v-6aea5f58]{position:relative}.order_img uni-view[data-v-6aea5f58]{position:absolute;bottom:%?14?%;left:%?30?%;font-size:%?93?%;color:hsla(0,0%,100%,.3)}\n/* 内容 */.sale_tuitype[data-v-6aea5f58]{background:#fff;border-radius:%?10?%;padding:%?40?% %?20?%}.sale_tui_type[data-v-6aea5f58]{width:33.33%;text-align:center}.tui_type_shape[data-v-6aea5f58]{position:relative}.tui_type_yuan1[data-v-6aea5f58]{width:%?20?%;height:%?20?%;border-radius:50%;background:#e95d3c;position:absolute;top:0;left:46%}.tui_type_yuan2[data-v-6aea5f58]{width:%?20?%;height:%?20?%;border-radius:50%;background:#e7e7e7;position:absolute;top:0;left:46%}.tui_type_line1[data-v-6aea5f58]{width:%?120?%;height:%?2?%;background:#e95d3c;position:absolute;top:%?10?%;left:50%}.tui_type_line2[data-v-6aea5f58]{width:%?120?%;height:%?2?%;background:#e7e7e7;position:absolute;top:%?10?%;left:50%}.tui_type_line3[data-v-6aea5f58]{width:%?120?%;height:%?2?%;background:#e95d3c;position:absolute;top:%?10?%;left:0}.tui_type_line4[data-v-6aea5f58]{width:%?120?%;height:%?2?%;background:#e7e7e7;position:absolute;top:%?10?%;left:0}.sale_tuifeedback[data-v-6aea5f58]{padding:%?20?%;background:#fff;border-radius:%?10?%;background-repeat:repeat-x;background-position-y:bottom}.icon_feedback[data-v-6aea5f58]{margin-right:%?20?%;color:#232323;font-size:%?30?%}.text_feedback[data-v-6aea5f58]{font-size:%?28?%;color:#232323}.text_addressee[data-v-6aea5f58]{font-weight:700}.text_addressee uni-text[data-v-6aea5f58]{font-weight:400;margin-left:%?20?%}.text_dizhi[data-v-6aea5f58]{font-size:%?24?%;color:#969696;padding:%?10?% 0 %?16?%}.text_tips[data-v-6aea5f58]{font-size:%?24?%;color:#e95d3c;padding-bottom:%?10?%}.tui_type_state[data-v-6aea5f58]{font-size:%?24?%;color:#676767;padding:%?40?% 0 %?20?%}.tui_type_time[data-v-6aea5f58]{font-size:%?20?%;color:#999}.sale_tuiprice[data-v-6aea5f58]{background:#fff;border-radius:%?10?%;padding:0 %?20?%}.sale_tui_price[data-v-6aea5f58]{border-top:%?2?% solid #eee;font-size:%?26?%;color:#333;padding:%?20?% 0}.sale_tui_price[data-v-6aea5f58]:first-child{border-top:0}.sale_tui_price1[data-v-6aea5f58]{color:#e95d3c;font-size:%?24?%}.sale_tui_price2[data-v-6aea5f58]{color:#999}.sale_tuiinfo[data-v-6aea5f58]{background:#fff;border-radius:%?10?%;padding:0 %?20?% %?20?%}.sale_tui_info[data-v-6aea5f58]{font-size:%?26?%;color:#333;padding:%?20?% 0}.order_prolist[data-v-6aea5f58]{padding:%?20?% 0}.product_img[data-v-6aea5f58]{width:%?140?%;height:%?140?%}.sale_tui_reason[data-v-6aea5f58]{padding-top:%?20?%;font-size:%?22?%;color:#969696}.sale_tui_reason uni-text[data-v-6aea5f58]{margin-left:%?40?%}\n/* 底部 */.order_foot[data-v-6aea5f58]{background:#fff;height:%?100?%;width:100%;position:fixed;bottom:0;left:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;padding-right:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}\n/* 填写快递单号 */.apply_cbox[data-v-6aea5f58]{position:fixed;bottom:0;left:0;height:%?400?%;width:100%;background:#fff;z-index:891;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?20?% %?20?% 0 0}.apply_titbox[data-v-6aea5f58]{position:relative;margin-bottom:%?20?%}.apply_tit[data-v-6aea5f58]{text-align:center;color:#232323}.apply_guanbi[data-v-6aea5f58]{position:absolute;top:0;right:0}.applybox_types[data-v-6aea5f58]{padding:%?20?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-bottom:%?2?% solid #eee}.express_kuaidi[data-v-6aea5f58]{width:35%}.express_kuaidihao[data-v-6aea5f58]{width:65%}.express_kuaidihao uni-input[data-v-6aea5f58]{border:0;text-align:right}.express_kuaidihao uni-picker[data-v-6aea5f58]{text-align:right}.express_kuaidihao uni-picker .picker[data-v-6aea5f58]{font-size:%?26?%}.btn_applytype[data-v-6aea5f58]{margin-top:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;text-align:center;background:#e54a48;color:#fff;border-radius:%?70?%;height:%?70?%;line-height:%?70?%}",""])},"8ee5":function(e,t,i){var a=i("7b57");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var s=i("4f06").default;s("d6a199f4",a,!0,{sourceMap:!1,shadowMode:!1})},"98b8":function(e,t,i){"use strict";i.r(t);var a=i("d07e"),s=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);t["default"]=s.a},d07e:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("2c90"),s={data:function(){return{$imgurl:this.$imgurl,$host:this.$host,baseinfo:"",orderinfo:"",expressopen:0,kuaidi:["顺丰速运","韵达","天天","申通","圆通","中通","国通","百世汇通","EMS","邮政","德邦"],refund_express:"",refund_express_l:""}},onLoad:function(e){var t=this;this._baseMin(this);var i=uni.getStorageSync("suid");i&&(this.suid=i),e.order_service_id&&(this.order_service_id=e.order_service_id);var s=0;a.h5login(s,function(){t.getOrderDetails()})},onPullDownRefresh:function(){this.getOrderDetails(),uni.stopPullDownRefresh()},methods:{bindPickerChange:function(e){var t=this.kuaidi;this.refund_express=e.detail.value,this.refund_express_l=t[e.detail.value]},expressBox:function(){0==this.expressopen&&(this.expressopen=1)},expressClose:function(){1==this.expressopen&&(this.expressopen=0)},goexpress:function(e){console.log(e);var t=e.currentTarget.dataset.express,i=e.currentTarget.dataset.express_no,a=this.orderinfo.order_item_id;uni.navigateTo({url:"/pages/logistics_state/logistics_state?order_id="+a+"&kuaidi="+t+"&kuaidihao="+i})},getOrderDetails:function(){var e=this;uni.request({url:this.$host+"/api/MainWxapp/afterOrderDetails",data:{uniacid:this.$uniacid,suid:this.suid,order_service_id:this.order_service_id},success:function(t){e.orderinfo=t.data.data.order_services}})},makephone:function(e){var t=e.currentTarget.dataset.tel;uni.makePhoneCall({phoneNumber:t})},applyRevoke:function(){var e=this;uni.showModal({title:"提示",content:"该操作不可逆，是否撤销退款",success:function(t){t.confirm&&uni.request({url:e.$host+"/api/MainWxapp/applyAfterSalesRevoke",data:{uniacid:e.$uniacid,suid:e.suid,order_service_id:e.order_service_id},success:function(e){0==e.data.data.error?uni.showModal({titile:"提示",content:"撤销成功",showCancel:!1,success:function(e){uni.startPullDownRefresh(),that.getOrderDetails(),uni.stopPullDownRefresh()}}):uni.showModal({titile:"提示",content:e.data.data.msg,showCancel:!1})}})}})},refund_express_no_ipt:function(e){var t=e.target.value;this.refund_express_no=t},getExpress:function(){var e=this,t=this.order_service_id,i=this.refund_express_l;if(!i)return uni.showModal({title:"提示",content:"请选择快递公司",showCancel:!1}),!1;var a=this.refund_express_no;if(!a)return uni.showModal({title:"提示",content:"请输入快递单号",showCancel:!1}),!1;uni.request({url:this.$host+"/api/MainWxapp/doPageRefundexpress",data:{uniacid:this.$uniacid,refund_express:i,refund_express_no:a,order_service_id:t},success:function(t){0==t.data.data.error?uni.showModal({title:"提示",content:"物流提交成功",showCancel:!1,success:function(t){e.expressopen=0,uni.startPullDownRefresh(),e.getOrderDetails(),uni.stopPullDownRefresh()}}):uni.showModal({title:"提示",content:"物流提交失败,"+t.data.data.msg,showCancel:!1})}})}}};t.default=s}}]);