(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_more_list-order_more_list"],{"72d8":function(t,i,e){"use strict";e.r(i);var a=e("86ef"),n=e("b89a");for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);e("a55f");var r=e("2877"),o=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"dc72b82e",null);i["default"]=o.exports},"86ef":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.$imgurl?e("div",[e("v-uni-scroll-view",{staticClass:"order_nav",attrs:{"scroll-x":""}},[e("v-uni-view",{class:["order_nav_single",10==t.flag&10==t.type1?"order_nav_single_on":""],attrs:{"data-flag":"10","data-nav":"10"},on:{click:function(i){i=t.$handleEvent(i),t.changflag(i)}}},[t._v("全部")]),e("v-uni-view",{class:["order_nav_single",0==t.flag?"order_nav_single_on":""],attrs:{"data-flag":"0"},on:{click:function(i){i=t.$handleEvent(i),t.changflag(i)}}},[t._v("未付款")]),e("v-uni-view",{class:["order_nav_single",1==t.flag&1==t.type1?"order_nav_single_on":""],attrs:{"data-flag":"1","data-nav":"1"},on:{click:function(i){i=t.$handleEvent(i),t.changflag(i)}}},[t._v("待发货")]),e("v-uni-view",{class:["order_nav_single",1==t.flag&2==t.type1?"order_nav_single_on":""],attrs:{"data-flag":"1","data-nav":"2"},on:{click:function(i){i=t.$handleEvent(i),t.changflag(i)}}},[t._v("待消费")]),e("v-uni-view",{class:["order_nav_single",4==t.flag?"order_nav_single_on":""],attrs:{"data-flag":"4"},on:{click:function(i){i=t.$handleEvent(i),t.changflag(i)}}},[t._v("已发货")]),e("v-uni-view",{class:["order_nav_single",2==t.flag?"order_nav_single_on":""],attrs:{"data-flag":"2"},on:{click:function(i){i=t.$handleEvent(i),t.changflag(i)}}},[t._v("已完成")]),e("v-uni-view",{class:["order_nav_single",3==t.flag?"order_nav_single_on":""],attrs:{"data-flag":"3"},on:{click:function(i){i=t.$handleEvent(i),t.changflag(i)}}},[t._v("已过期")]),e("v-uni-view",{class:["order_nav_single",7==t.flag?"order_nav_single_on":""],attrs:{"data-flag":"7"},on:{click:function(i){i=t.$handleEvent(i),t.changflag(i)}}},[t._v("售后")]),e("v-uni-view",{class:["order_nav_single",5==t.flag?"order_nav_single_on":""],attrs:{"data-flag":"5"},on:{click:function(i){i=t.$handleEvent(i),t.changflag(i)}}},[t._v("商家已取消")])],1),e("v-uni-view",{staticClass:"order_list_contentbox"},[t.orderinfo.length>0?t._l(t.orderinfo,function(i,a){return e("v-uni-view",{key:a,staticClass:"order_list_single"},[e("v-uni-navigator",{attrs:{url:"../orderDetail/orderDetail?orderid="+i.order_id}},[e("v-uni-view",{staticClass:"order_list_head hbj"},[e("v-uni-view",{staticClass:"order_list_head_left flex1"},[t._v("订单号："+t._s(i.order_id))]),0==i.flag?e("v-uni-view",{staticClass:"order_list_head_right"},[t._v("待付款")]):t._e(),1==i.flag&&1==i.nav?e("v-uni-view",{staticClass:"order_list_head_right"},[t._v("待发货")]):t._e(),1==i.flag&&2==i.nav?e("v-uni-view",{staticClass:"order_list_head_right"},[t._v("待消费")]):t._e(),2==i.flag?e("v-uni-view",{staticClass:"order_list_head_right"},[t._v("已完成")]):t._e(),3==i.flag?e("v-uni-view",{staticClass:"order_list_head_right"},[t._v("已过期")]):t._e(),4==i.flag?e("v-uni-view",{staticClass:"order_list_head_right"},[t._v("已发货")]):t._e(),5==i.flag?e("v-uni-view",{staticClass:"order_list_head_right"},[t._v("订单被取消")]):t._e(),6==i.flag?e("v-uni-view",{staticClass:"order_list_head_right"},[t._v("订单取消中")]):t._e(),7==i.flag?e("v-uni-view",{staticClass:"order_list_head_right"},[t._v("退货审核中")]):t._e(),8==i.flag?e("v-uni-view",{staticClass:"order_list_head_right"},[t._v("退货成功")]):t._e(),9==i.flag?e("v-uni-view",{staticClass:"order_list_head_right"},[t._v("退货失败")]):t._e()],1),e("v-uni-view",{staticClass:"order_list_productbox"},[t._l(i.jsondata,function(i,a){return[e("v-uni-view",{key:a+"_0",staticClass:"order_list_product hbj"},[e("v-uni-image",{staticClass:"product_img",attrs:{src:""!=i.proinfo.thumb?i.proinfo.thumb:i.baseinfo.thumb,mode:"aspectFill"}}),e("v-uni-view",{staticClass:"order_list_product_center"},[i.shopname?e("v-uni-view",{staticStyle:{"font-size":"24rpx"}},[t._v(t._s(i.shopname))]):t._e(),e("v-uni-view",{staticClass:"order_product_title text_hide"},[t._v(t._s(i.baseinfo.title))]),i.proinfo.ggz?e("v-uni-view",{staticClass:"order_product_des text_hide"},[t._v(t._s(i.proinfo.ggz))]):t._e()],1),e("v-uni-view",{staticClass:"flex1"}),e("v-uni-view",[e("v-uni-view",{staticClass:"order_product_price"},[e("v-uni-text",[t._v("￥")]),t._v(t._s(i.proinfo.price))],1),e("v-uni-view",{staticClass:"order_product_count"},[t._v("X"+t._s(i.num))])],1)],1)]})],2)],1),e("v-uni-view",{staticClass:"order_list_pricebox hbj"},[e("v-uni-view",{staticClass:"order_list_price_left"},[t._v("共"+t._s(i.jsondata.length)+"件商品 合计："),e("v-uni-text",[t._v("￥")]),t._v(t._s(i.price))],1),e("v-uni-view",{staticClass:"flex1"}),0==i.flag?[0==i.sid?[e("v-uni-navigator",{staticClass:"order_list_price_btn",attrs:{url:"../order_more/order_more?orderid="+i.order_id+"&again=1"}},[t._v("立即付款")])]:[e("v-uni-navigator",{staticClass:"order_list_price_btn",attrs:{url:"/pagesPluginShop/goods_buy/goods_buy?orderid="+i.order_id+"&again=1"}},[t._v("立即付款")])]]:t._e(),1==i.flag&&2==i.nav?e("v-uni-view",{staticClass:"order_list_price_btn",attrs:{id:i.order_id},on:{click:function(i){i=t.$handleEvent(i),t.hxshow(i)}}},[t._v("立即核销")]):t._e(),4==i.flag?[e("v-uni-view",{staticClass:"order_list_price_btn",attrs:{id:i.order_id},on:{click:function(i){i=t.$handleEvent(i),t.qrshouh(i)}}},[t._v("确认收货")]),-1==i.kuadi?[e("v-uni-view",{staticClass:"order_list_price_btn"},[t._v("商家配送")])]:[e("v-uni-view",{staticClass:"order_list_price_btn",attrs:{"data-kuaidi":i.kuadi,"data-kuaidihao":i.kuaidihao},on:{click:function(i){i=t.$handleEvent(i),t.wlinfo(i)}}},[t._v("查看物流")])]]:t._e(),e("v-uni-view",{on:{click:function(i){i.stopPropagation(),i=t.$handleEvent(i)}}},[2==i.flag&&1==i.assess?[e("v-uni-view",{staticClass:"order_list_price_btn",attrs:{"data-order":i.order_id,"data-type":0==i.sid?"duo":"shop"},on:{click:function(i){i=t.$handleEvent(i),t.goevaluate(i)}}},[t._v("我要评价")])]:t._e()],2),2==i.flag&&2==i.assess?[e("v-uni-view",{staticClass:"order_list_price_btn",staticStyle:{color:"green","border-color":"green"}},[t._v("已评价")])]:t._e(),5==i.flag&&i.qxbeizhu!=t.NULL?[e("v-uni-view",{staticClass:"order_list_msg"},[t._v("原因："),e("v-uni-text",[t._v(t._s(i.qxbeizhu))])],1)]:t._e(),7==i.flag||9==i.flag?[e("v-uni-view",{staticClass:"order_list_price_btn",attrs:{"data-sid":i.sid},on:{click:function(i){i=t.$handleEvent(i),t.makeCall(i)}}},[t._v("联系商家")])]:t._e(),8==i.flag?[0==i.sid?e("v-uni-navigator",{staticClass:"order_list_price_btn",attrs:{url:"/pages/showProMore/showProMore?id="+i.jsondata[0].baseinfo.id}},[t._v("再次下单")]):t._e(),i.sid>0?e("v-uni-navigator",{staticClass:"order_list_price_btn",attrs:{url:"/pagesPluginShop/goods_detail/goods_detail?id="+i.jsondata[0].pid}},[t._v("再次下单")]):t._e()]:t._e()],2)],1)}):[e("v-uni-image",{staticClass:"pageNotice",attrs:{src:t.$imgurl+"notice.png"}}),e("v-uni-view",{staticClass:"pageNoticeT"},[t._v("暂无内容")])]],2),1==t.showhx?e("v-uni-view",{staticClass:"hx_con"},[e("v-uni-view",{staticClass:"mask",on:{click:function(i){i=t.$handleEvent(i),t.hxhide(i)}}}),e("v-uni-view",{staticClass:"share_con"},[e("v-uni-view",[e("v-uni-view",{on:{click:function(i){i=t.$handleEvent(i),t.gethxmima(i)}}},[e("v-uni-image",{attrs:{src:t.$imgurl+"hx_mima.png"}}),e("v-uni-view",[t._v("密码核销")])],1)],1),e("v-uni-view",[e("v-uni-view",{staticClass:"shareimg",on:{click:function(i){i=t.$handleEvent(i),t.gethxImg(i)}}},[e("v-uni-image",{attrs:{src:t.$imgurl+"hx_ewm.png"}}),e("v-uni-view",[t._v("核销码")])],1)],1)],1),1==t.hx_choose?e("v-uni-view",[e("v-uni-view",{staticClass:"mask",staticStyle:{"z-index":"920"},on:{click:function(i){i=t.$handleEvent(i),t.hxhide1(i)}}}),e("v-uni-view",{staticClass:"hexiao"},[e("v-uni-view",[e("v-uni-view",{staticClass:"hx_title"},[t._v("密码核销")]),e("v-uni-view",{staticClass:"hx_titc",on:{click:function(i){i=t.$handleEvent(i),t.hxhide1(i)}}},[e("v-uni-image",{staticStyle:{width:"32rpx",height:"32rpx"},attrs:{src:t.$imgurl+"close.png",mode:"aspectFit"}})],1)],1),e("v-uni-view",{staticClass:"hx_tit"},[t._v("请输入核销密码")]),e("v-uni-view",{staticStyle:{"text-align":"center"}},[e("v-uni-input",{staticClass:"hx_ipt",attrs:{password:"",type:"number",value:t.hxmm},on:{input:function(i){i=t.$handleEvent(i),t.hxmmInput(i)}}})],1),e("v-uni-view",{staticStyle:{display:"flex","justify-content":"space-between",width:"60%",margin:"0 auto"}},[e("v-uni-button",{staticClass:"hx_btn",style:{background:t.baseinfo.base_color,color:"#fff"},on:{click:function(i){i=t.$handleEvent(i),t.hxmmpass(i)}}},[t._v("确定")]),e("v-uni-button",{staticClass:"hx_btn",on:{click:function(i){i=t.$handleEvent(i),t.hxhide1(i)}}},[t._v("取消")])],1)],1)],1):t._e(),2==t.hx_choose?e("v-uni-view",[e("v-uni-view",{staticClass:"mask",staticStyle:{"z-index":"920"},on:{click:function(i){i=t.$handleEvent(i),t.hxhide1(i)}}}),e("v-uni-view",{staticClass:"hexiao",staticStyle:{height:"500rpx"}},[e("v-uni-view",[e("v-uni-view",{staticClass:"hx_title"},[t._v("核销码")]),e("v-uni-view",{staticClass:"hx_titc",on:{click:function(i){i=t.$handleEvent(i),t.hxhide1(i)}}},[e("v-uni-image",{staticStyle:{width:"32rpx",height:"32rpx"},attrs:{src:t.$imgurl+"close.png",mode:"aspectFit"}})],1)],1),e("v-uni-view",{staticStyle:{"text-align":"center"}},[e("v-uni-image",{staticClass:"hx_ewm",attrs:{src:t.hx_ewm,mode:"aspectFit"}})],1)],1)],1):t._e()],1):t._e(),1==t.baseinfo.tabbar_t?e("copyright",{attrs:{baseinfo:t.baseinfo}}):t._e(),e("myfooter",{attrs:{page_signs:t.page_signs,baseinfo:t.baseinfo}})],1):t._e()},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"8f08":function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=e("2c90"),n={data:function(){return{$imgurl:this.$imgurl,page_signs:"/pages/order_more_list/order_more_list",page:1,morePro:!1,baseinfo:{},orderinfo:[],type:9,type1:10,flag:10,showmask:!1,kuaidi:["选择快递","圆通","中通","申通","顺丰","韵达","天天","百世","EMS","本人到店","其他"],index:0,showhx:0,hxmm:"",hx_choose:0,hx_ewm:""}},onLoad:function(t){this._baseMin(this);var i=0;t.fxsid&&(i=t.fxsid),this.fxsid=i,t.flag&&(this.flag=t.flag),t.type1&&(this.type1=t.type1),a.h5login(i,function(){})},onShow:function(){this.page=1,this.getList()},onPullDownRefresh:function(){this.getLists(),uni.stopPullDownRefresh()},onReachBottom:function(){var t=this,i=1*t.page+1;uni.request({url:t.$baseurl+"doPageduoorderlist",data:{page:i,uniacid:this.$uniacid,flag:this.flag,type1:this.type1,suid:uni.getStorageSync("suid")},success:function(e){t.orderinfo=t.orderinfo.concat(e.data.data),t.page=i}})},methods:{getLists:function(){var t=this;uni.request({url:this.$baseurl+"doPageduoorderlist",data:{page:1,uniacid:this.$uniacid,flag:this.flag,type1:this.type1,suid:uni.getStorageSync("suid")},header:{"custom-header":"hello"},success:function(i){t.orderinfo=i.data.data}})},getList:function(){var t=this,i="";uni.request({url:this.$baseurl+"doPageduoorderlist",data:{page:this.page,uniacid:this.$uniacid,flag:this.flag,type1:this.type1,openid:i,suid:uni.getStorageSync("suid")},header:{"custom-header":"hello"},success:function(i){t.orderinfo=1==t.page?i.data.data:t.orderinfo.concat(i.data.data),t.page=t.page+1}})},goevaluate:function(t){var i=t.currentTarget.dataset.order,e=t.currentTarget.dataset.type;uni.navigateTo({url:"/pages/evaluate/evaluate?order_id="+i+"&type="+e})},changflag:function(t){var i=this;i.page=1;var e=t.currentTarget.dataset.flag,a=t.currentTarget.dataset.nav;void 0!=a&&void 0!=e?(i.type1=a,i.flag=e):void 0==a&&(i.flag=e),i.getList()},hxshow:function(t){this.showhx=1,this.order=t.target.id},hxhide:function(){this.showhx=0,this.hxmm=""},hxmmInput:function(t){this.hxmm=t.target.value},hxmmpass:function(){var t=this;this.hxmm||uni.showModal({title:"提示",content:"请输入核销密码！",showCancel:!1}),uni.request({url:this.$baseurl+"hxmm",data:{uniacid:this.$uniacid,suid:uni.getStorageSync("suid"),order_id:this.order,is_more:2,hxmm:this.hxmm},success:function(i){console.log(i.data.data);var e=i.data.data;0==e?(uni.showModal({title:"提示",content:"核销密码不正确！",showCancel:!1}),t.hxmm=""):1==e?uni.showToast({title:"消费成功",icon:"success",duration:2e3,success:function(t){uni.redirectTo({url:"/pages/order_more_list/order_more_list?flag=10&type1=10"})}}):2==e&&uni.showModal({title:"提示",content:"已核销!",showCancel:!1,success:function(){uni.startPullDownRefresh(),that.page=1,that.getList(),uni.stopPullDownRefresh()}})}})},qrshouh:function(t){var i=t.target.id,e=uni.getStorageSync("suid"),a=this.$baseurl,n=this.$uniacid;uni.showModal({title:"提示",content:"确认收货吗？",success:function(t){t.confirm&&uni.request({url:a+"dopagenewquerenxc",data:{uniacid:n,suid:e,orderid:i},success:function(t){uni.showToast({title:"收货成功！",success:function(t){setTimeout(function(){uni.redirectTo({url:"/pages/order_more_list/order_more_list?flag=10&type1=10"})},1500)}})}})}})},makeCall:function(t){var i=this,e=t.currentTarget.dataset.sid;if(console.log(e),0==e){var a=uni.getStorageSync("base_tel");uni.makePhoneCall({phoneNumber:a})}else uni.request({url:i.$baseurl+"doPageShowstore_W",data:{uniacid:i.$uniacid,id:e},success:function(t){var i=t.data.data.tel;uni.makePhoneCall({phoneNumber:i})}})},wlinfo:function(t){var i=t.currentTarget.dataset.kuaidi,e=t.currentTarget.dataset.kuaidihao;uni.navigateTo({url:"/pages/logistics_state/logistics_state?kuaidi="+i+"&kuaidihao="+e})},gethxmima:function(){this.hx_choose=1},gethxImg:function(){var t=this;uni.request({url:this.$baseurl+"doPageHxEwm",data:{uniacid:this.$uniacid,suid:uni.getStorageSync("suid"),pageUrl:"showProMore",orderid:this.order},success:function(i){console.log(i.data),t.hx_ewm=i.data.data,t.hx_choose=2}})},hxhide1:function(){this.hx_choose=0}}};i.default=n},a55f:function(t,i,e){"use strict";var a=e("e742"),n=e.n(a);n.a},b89a:function(t,i,e){"use strict";e.r(i);var a=e("8f08"),n=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);i["default"]=n.a},d773:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".order_nav_single[data-v-dc72b82e]{padding:%?21?% %?10?%;font-size:%?24?%;color:#434343;margin-right:%?20?%;display:inline-block;border-bottom:%?4?% solid #fff}.order_nav_single_on[data-v-dc72b82e]{color:#f3514f;border-bottom:%?4?% solid #f3514f}.fukuanbtn[data-v-dc72b82e]{float:right;border:%?2?% solid #c00;height:%?40?%;font-size:%?26?%;line-height:%?40?%;padding:0 %?10?%;border-radius:%?6?%;margin:%?8?% 0 0 %?10?%;color:#c00}.hx_con[data-v-dc72b82e]{position:fixed;left:0;top:0;width:100%;height:100%;z-index:99999}.hexiao[data-v-dc72b82e]{border-radius:%?9?%;width:%?600?%;height:%?340?%;background:#fff;position:absolute;left:%?75?%;top:30%;z-index:1000}.hexiao .hx_tit[data-v-dc72b82e]{margin:%?20?% %?20?% %?10?%;text-align:center}.hexiao .hx_ipt[data-v-dc72b82e]{margin:%?20?% auto;height:%?50?%;line-height:%?50?%;border:1px solid #eee;width:60%}.hexiao .hx_btn[data-v-dc72b82e]{color:#000;margin:0 0 %?20?%;font-size:%?24?%;line-height:%?60?%;border:%?2?% solid #ddd;border-radius:%?6?%;height:%?56?%;line-height:%?56?%;width:%?140?%}.share_con[data-v-dc72b82e]{z-index:900}.hx_title[data-v-dc72b82e]{text-align:center;position:relative;height:%?80?%;line-height:%?80?%;border-bottom:%?2?% solid #ddd}.hx_titc[data-v-dc72b82e]{position:absolute;top:%?10?%;right:%?10?%}.hx_ewm[data-v-dc72b82e]{width:%?320?%;height:%?320?%;margin:%?40?% 0}.order_nav[data-v-dc72b82e]{overflow-x:scroll;overflow-y:hidden}.order_nav[data-v-dc72b82e] ::-webkit-scrollbar{display:none}.order_list_msg[data-v-dc72b82e]{border:0!important}",""])},e742:function(t,i,e){var a=e("d773");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("004effcc",a,!0,{sourceMap:!1,shadowMode:!1})}}]);