(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesExchange-order-order"],{"3e45":function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("7f7f");var n=a(e("59ad"));e("b54a");var o=e("2c90"),s={data:function(){return{page_signs:"/pagesExchange/order/order",baseinfo:[],orderlist:[]}},onPullDownRefresh:function(){var t=this;t.getList(),uni.stopPullDownRefresh()},onLoad:function(t){var i=this;uni.setNavigationBarTitle({title:"我的积分订单"}),t.type&&(i.type=t.type);var e=0;t.fxsid&&(e=t.fxsid,i.fxsid=t.fxsid),this._baseMin(this);uni.getStorageSync("suid");o.h5login(e,function(){i.getList()})},methods:{redirectto:function(t){var i=t.currentTarget.dataset.link,e=t.currentTarget.dataset.linktype;this._redirectto(i,e)},getList:function(t){var i=this;uni.request({url:i.$baseurl+"doPagemyscoreorder",data:{uniacid:i.$uniacid,suid:uni.getStorageSync("suid")},success:function(t){i.orderlist=t.data.data},fail:function(t){}})},makePhoneCall:function(t){var i=this,e=i.baseinfo.tel;uni.makePhoneCall({phoneNumber:e})},makePhoneCallB:function(t){var i=this,e=i.baseinfo.tel_b;uni.makePhoneCall({phoneNumber:e})},openMap:function(t){var i=this;uni.openLocation({latitude:(0,n.default)(i.baseinfo.latitude),longitude:(0,n.default)(i.baseinfo.longitude),name:i.baseinfo.name,address:i.baseinfo.address,scale:22})}}};i.default=s},"7de6":function(t,i,e){var a=e("ec7f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("7f71b490",a,!0,{sourceMap:!1,shadowMode:!1})},bf73:function(t,i,e){"use strict";e.r(i);var a=e("3e45"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},c52b:function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("v-uni-view",t._l(t.orderlist,function(i){return e("v-uni-view",{staticClass:"qxiq"},[e("v-uni-view",{staticClass:"thumbdx"},[e("v-uni-image",{attrs:{src:i.thumb}})],1),e("v-uni-view",{staticClass:"jbxx"},[e("v-uni-view",{staticClass:"bbts"},[t._v(t._s(i.product)+" -"+t._s(i.price)+"积分")]),e("v-uni-view",{staticClass:"zts"},[t._v("订单编号："+t._s(i.order_id))]),e("v-uni-view",{staticClass:"zts"},[t._v("兑换时间： "+t._s(i.creattime))]),0==i.flag?e("v-uni-view",{staticClass:"piaos",staticStyle:{color:"#FF4544"}},[t._v("待领取")]):t._e(),1==i.flag?e("v-uni-view",{staticClass:"piaos"},[t._v("已兑换")]):t._e()],1)],1)}),1),1==t.baseinfo.tabbar_t?e("copyright",{attrs:{baseinfo:t.baseinfo}}):t._e(),e("myfooter",{attrs:{page_signs:t.page_signs,baseinfo:t.baseinfo}})],1)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},d6f8:function(t,i,e){"use strict";var a=e("7de6"),n=e.n(a);n.a},d8bb:function(t,i,e){"use strict";e.r(i);var a=e("c52b"),n=e("bf73");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("d6f8");var s=e("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"033e9f96",null);i["default"]=r.exports},ec7f:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".wddd[data-v-033e9f96]{border-bottom:1px solid #eee;padding:%?16?%}.ddym[data-v-033e9f96]{background-color:#fff}.gztb[data-v-033e9f96]{font-size:0;padding:%?26?% 0 %?16?%}.dizd[data-v-033e9f96]{display:inline-block;font-size:%?24?%;color:#888;width:20%;min-height:%?60?%;text-align:center}.dizd uni-image[data-v-033e9f96]{width:%?56?%;height:%?56?%;display:block;margin:0 auto %?16?%}.zuijdd[data-v-033e9f96]{font-size:%?28?%;color:#888;padding:%?20?%}.qxiq[data-v-033e9f96]{background-color:#fff;padding:%?20?%;position:relative;margin-bottom:%?20?%}.thumbdx[data-v-033e9f96]{display:inline-block;vertical-align:top}.thumbdx uni-image[data-v-033e9f96]{width:%?150?%;height:%?150?%;display:block}.jbxx[data-v-033e9f96]{display:inline-block;vertical-align:top;margin-left:%?20?%;max-width:65%}.bbts[data-v-033e9f96]{font-size:%?26?%;line-height:%?50?%;height:%?50?%;color:#333;margin-bottom:%?16?%;overflow:hidden}.zts[data-v-033e9f96]{font-size:%?24?%;line-height:%?46?%;height:%?46?%;color:#888}.piaos[data-v-033e9f96]{position:absolute;right:%?20?%;top:%?24?%;font-size:%?24?%;color:#f90}.piaos1[data-v-033e9f96]{position:absolute;right:%?20?%;bottom:%?30?%;font-size:%?24?%;color:#f90;background-color:#fff;border:%?2?% solid #f90;padding:%?6?% %?20?%;border-radius:%?6?%}.notice_num[data-v-033e9f96]{position:absolute;right:%?30?%;top:0;z-index:9;background:#f60;color:#fff;width:%?30?%;height:%?30?%;border-radius:%?15?%;text-align:center;line-height:%?30?%;font-size:%?24?%}",""])}}]);