(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesExchange-order-order"],{"20c7":function(t,i,e){"use strict";var a=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("7f7f");var n=a(e("59ad"));e("b54a");var o=e("55f5"),d={data:function(){return{page_signs:"/pagesExchange/order/order",$imgurl:this.$imgurl,baseinfo:[],orderlist:[],orderlist_length:0}},onPullDownRefresh:function(){var t=this;t.getList(),uni.stopPullDownRefresh()},onLoad:function(t){var i=this;uni.setNavigationBarTitle({title:"我的积分订单"}),t.type&&(i.type=t.type);var e=0;t.fxsid&&(e=t.fxsid,i.fxsid=t.fxsid),this._baseMin(this);uni.getStorageSync("suid");o.h5login(e,function(){i.getList()})},methods:{redirectto:function(t){var i=t.currentTarget.dataset.link,e=t.currentTarget.dataset.linktype;this._redirectto(i,e)},getList:function(t){var i=this;uni.request({url:i.$baseurl+"doPagemyscoreorder",data:{uniacid:i.$uniacid,suid:uni.getStorageSync("suid")},success:function(t){i.orderlist=t.data.data,i.orderlist_length=t.data.data.length},fail:function(t){}})},makePhoneCall:function(t){var i=this,e=i.baseinfo.tel;uni.makePhoneCall({phoneNumber:e})},makePhoneCallB:function(t){var i=this,e=i.baseinfo.tel_b;uni.makePhoneCall({phoneNumber:e})},openMap:function(t){var i=this;uni.openLocation({latitude:(0,n.default)(i.baseinfo.latitude),longitude:(0,n.default)(i.baseinfo.longitude),name:i.baseinfo.name,address:i.baseinfo.address,scale:22})}}};i.default=d},"387e":function(t,i,e){"use strict";var a=e("6d61"),n=e.n(a);n.a},"3e2b":function(t,i,e){"use strict";var a=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("v-uni-view",t._l(t.orderlist,function(i){return e("v-uni-view",{staticClass:"qxiq"},[e("v-uni-view",{staticClass:"thumbdx"},[e("v-uni-image",{attrs:{src:i.thumb}})],1),e("v-uni-view",{staticClass:"jbxx"},[e("v-uni-view",{staticClass:"bbts"},[t._v(t._s(i.product)+" -"+t._s(i.price)+"积分")]),e("v-uni-view",{staticClass:"zts"},[t._v("订单编号："+t._s(i.order_id))]),e("v-uni-view",{staticClass:"zts"},[t._v("兑换时间： "+t._s(i.creattime))]),0==i.flag?e("v-uni-view",{staticClass:"piaos",staticStyle:{color:"#FF4544"}},[t._v("待领取")]):t._e(),1==i.flag?e("v-uni-view",{staticClass:"piaos"},[t._v("已兑换")]):t._e()],1)],1)}),1),0==t.orderlist_length?[e("v-uni-image",{staticClass:"pageno_address",attrs:{src:t.$imgurl+"no_search.png"}}),e("v-uni-view",{staticStyle:{"text-align":"center",color:"#666"}},[t._v("还没有相关订单哟~")])]:t._e(),1==t.baseinfo.tabbar_t?e("copyright",{attrs:{baseinfo:t.baseinfo}}):t._e(),e("myfooter",{attrs:{page_signs:t.page_signs,baseinfo:t.baseinfo}})],2)},n=[];e.d(i,"a",function(){return a}),e.d(i,"b",function(){return n})},"451d":function(t,i,e){"use strict";e.r(i);var a=e("20c7"),n=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);i["default"]=n.a},"6d61":function(t,i,e){var a=e("a48e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=e("4f06").default;n("76bfa322",a,!0,{sourceMap:!1,shadowMode:!1})},a48e:function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".wddd[data-v-1f23dd1c]{border-bottom:1px solid #eee;padding:%?16?%}.ddym[data-v-1f23dd1c]{background-color:#fff}.gztb[data-v-1f23dd1c]{font-size:0;padding:%?26?% 0 %?16?%}.dizd[data-v-1f23dd1c]{display:inline-block;font-size:%?24?%;color:#888;width:20%;min-height:%?60?%;text-align:center}.dizd uni-image[data-v-1f23dd1c]{width:%?56?%;height:%?56?%;display:block;margin:0 auto %?16?%}.zuijdd[data-v-1f23dd1c]{font-size:%?28?%;color:#888;padding:%?20?%}.qxiq[data-v-1f23dd1c]{background-color:#fff;padding:%?20?%;position:relative;margin-bottom:%?20?%}.thumbdx[data-v-1f23dd1c]{display:inline-block;vertical-align:top}.thumbdx uni-image[data-v-1f23dd1c]{width:%?150?%;height:%?150?%;display:block}.jbxx[data-v-1f23dd1c]{display:inline-block;vertical-align:top;margin-left:%?20?%;max-width:65%}.bbts[data-v-1f23dd1c]{font-size:%?26?%;line-height:%?50?%;height:%?50?%;color:#333;margin-bottom:%?16?%;overflow:hidden}.zts[data-v-1f23dd1c]{font-size:%?24?%;line-height:%?46?%;height:%?46?%;color:#888}.piaos[data-v-1f23dd1c]{position:absolute;right:%?20?%;top:%?24?%;font-size:%?24?%;color:#f90}.piaos1[data-v-1f23dd1c]{position:absolute;right:%?20?%;bottom:%?30?%;font-size:%?24?%;color:#f90;background-color:#fff;border:%?2?% solid #f90;padding:%?6?% %?20?%;border-radius:%?6?%}.notice_num[data-v-1f23dd1c]{position:absolute;right:%?30?%;top:0;z-index:9;background:#f60;color:#fff;width:%?30?%;height:%?30?%;border-radius:%?15?%;text-align:center;line-height:%?30?%;font-size:%?24?%}.pageno_address[data-v-1f23dd1c]{display:block;margin:%?200?% auto %?60?%;width:%?280?%;height:%?140?%}",""])},e8cd:function(t,i,e){"use strict";e.r(i);var a=e("3e2b"),n=e("451d");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("387e");var d=e("2877"),s=Object(d["a"])(n["default"],a["a"],a["b"],!1,null,"1f23dd1c",null);i["default"]=s.exports}}]);