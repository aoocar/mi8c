(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesBargain-my_bargain-my_bargain"],{"3e7a":function(t,i,a){"use strict";var e=a("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=e(a("e814")),o=a("55f5"),r={data:function(){return{list:[],page:1,addmore:1,flag:1,baseinfo:[]}},onPullDownRefresh:function(){var t=this;t.page=1,t.myBargainList(),uni.stopPullDownRefresh()},onLoad:function(t){var i=this;uni.setNavigationBarTitle({title:"我的砍价"});var a=0;t.fxsid&&(i.fxsid=t.fxsid),this._baseMin(this),o.h5login(a,function(){i.myBargainList()})},methods:{changeNav:function(t){var i=this,a=t.currentTarget.dataset.flag;i.flag=a,i.page=1,i.list=[],i.myBargainList()},myBargainList:function(){var t=this;uni.request({url:t.$baseurl+"doPagemyBargainList",data:{uniacid:t.$uniacid,openid:t.openid,suid:uni.getStorageSync("suid"),page:t.page,flag:t.flag},success:function(i){t.list=i.data.data,t.setCountDowns()}})},addmores:function(){var t=this,i=t.page+1;uni.request({url:t.$baseurl+"doPagemyBargainList",data:{uniacid:t.$uniacid,openid:t.openid,suid:uni.getStorageSync("suid"),page:i,flag:t.flag},success:function(a){a.data.data.length<6&&(t.addmore=0),t.page=i,t.list=t.list.concat(a.data.data),t.setCountDowns()}})},setCountDowns:function(){for(var t=this,i=1e3,a=t.list,e=(new Date).getTime(),n=0;n<a.length;n++){var o=1e3*a[n].overtime,r=o-e;r<=0&&(r=0);var s=this.getFormat(r);a[n]["djs"]["countDown"]="".concat(s.hh,":").concat(s.mm,":").concat(s.ss)}t.list=a,setTimeout(t.setCountDowns,i)},getFormat:function(t){var i=(0,n.default)(t/1e3),a=0,e=0;return i>60&&(a=(0,n.default)(i/60),i=(0,n.default)(i%60),a>60&&(e=(0,n.default)(a/60),a=(0,n.default)(a%60))),i=i>9?i:"0".concat(i),a=a>9?a:"0".concat(a),e=e>9?e:"0".concat(e),{ss:i,mm:a,hh:e}},goActivity:function(t){var i=t.currentTarget.dataset.pid,a=t.currentTarget.dataset.bargain_id;uni.navigateTo({url:"/pagesBargain/bargain_activity/bargain_activity?bargain_id="+a+"&id="+i})},createOrder:function(t){var i=t.currentTarget.dataset.pid,a=t.currentTarget.dataset.bargain_id;uni.navigateTo({url:"/pagesBargain/bargain_order/bargain_order?id="+i+"&bargain_id="+a})},golist:function(){uni.navigateTo({url:"/pagesBargain/bargain/bargain"})}}};i.default=r},"3ea9":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".my_head[data-v-c9ff5cd0]{width:100%;height:%?70?%;line-height:%?70?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;text-align:center;background-color:#fff;overflow:visible}.my_head>uni-text[data-v-c9ff5cd0]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.btn1[data-v-c9ff5cd0],.btn2[data-v-c9ff5cd0]{width:50%;color:#666;border-radius:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?30?%;background-color:#fff}.btn1[data-v-c9ff5cd0]:after,.btn2[data-v-c9ff5cd0]:after{border-radius:0;border:0}.bargain_footer[data-v-c9ff5cd0]{position:fixed;left:0;right:0;bottom:0;height:%?92?%;line-height:%?92?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fff;border-top:%?2?% solid #e0dfdf}.btn1>uni-icon[data-v-c9ff5cd0],.btn2>uni-icon[data-v-c9ff5cd0]{margin-right:%?12?%}.btn1[data-v-c9ff5cd0]{border-right:%?2?% solid #e0dfdf}.bargain_footer .active[data-v-c9ff5cd0]{color:red;border-bottom:none}.my_main[data-v-c9ff5cd0]{margin-top:%?10?%;background-color:#fff;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.bargain_main[data-v-c9ff5cd0]{padding:%?20?% 0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:%?220?%;line-height:%?220?%;border-bottom:%?2?% solid #f0f0f0;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.bargain>uni-view[data-v-c9ff5cd0]:last-child{border:none}.bargain_main>uni-image[data-v-c9ff5cd0]{width:%?220?%;height:%?180?%;display:block;vertical-align:middle}.bargain_main>uni-view[data-v-c9ff5cd0]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;overflow:hidden}.jion1[data-v-c9ff5cd0]{width:%?160?%;height:%?54?%;line-height:%?54?%;border:none;font-size:%?24?%;color:#fff;border-radius:%?10?%;position:absolute;right:%?10?%;bottom:%?64?%}.jion2[data-v-c9ff5cd0]{width:%?160?%;height:%?54?%;line-height:%?54?%;border:none;font-size:%?24?%;color:#fff;border-radius:%?10?%;position:absolute;right:%?10?%;bottom:%?0?%}.jion1[data-v-c9ff5cd0]:after,.jion2[data-v-c9ff5cd0]:after{border:none}.bargain_title[data-v-c9ff5cd0]{position:absolute;top:%?6?%;left:%?20?%;right:%?10?%;font-size:%?30?%;height:%?30?%;line-height:%?30?%;font-weight:700;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.bargain_title2[data-v-c9ff5cd0]{position:absolute;top:%?46?%;left:%?20?%;height:%?30?%;line-height:%?30?%;color:red;overflow:hidden}.time[data-v-c9ff5cd0]{vertical-align:middle;display:inline-block;overflow:hidden;font-size:%?30?%;font-weight:700;margin-right:%?10?%}.bargain_title2>uni-text[data-v-c9ff5cd0]{vertical-align:middle;font-size:%?26?%}.bargain_title3[data-v-c9ff5cd0]{position:absolute;top:%?96?%;left:%?20?%;height:%?32?%;line-height:%?32?%;overflow:hidden}.bargain_title4[data-v-c9ff5cd0]{position:absolute;top:%?126?%;left:%?20?%;height:%?54?%;line-height:%?54?%;overflow:hidden}.bargain_title4>uni-text[data-v-c9ff5cd0]{font-size:%?24?%}.img01[data-v-c9ff5cd0],.img02[data-v-c9ff5cd0]{width:%?36?%;height:%?36?%;display:inline-block;border-radius:50%}.max[data-v-c9ff5cd0]{height:%?54?%;line-height:%?54?%;font-size:%?24?%;position:absolute;right:%?10?%;bottom:%?64?%}.my_main[data-v-c9ff5cd0]{position:absolute;top:%?70?%;left:0;right:0;bottom:%?94?%;overflow-y:scroll;overflow-x:hidden}[data-v-c9ff5cd0]::-webkit-scrollbar{width:0;height:0;color:rgba(0,0,0,0)}.addmore[data-v-c9ff5cd0]{width:100%;height:%?80?%;line-height:%?80?%;color:#666;font-size:%?24?%;text-align:center}",""])},"5f26":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("v-uni-view",{staticClass:"my-container"},[a("v-uni-view",{staticClass:"my_head"},[a("v-uni-text",{style:1==t.flag?"color:"+t.baseinfo.base_color2+";border-bottom: 4rpx solid "+t.baseinfo.base_color2+";":"",attrs:{"data-flag":"1"},on:{click:function(i){i=t.$handleEvent(i),t.changeNav(i)}}},[t._v("砍价中")]),a("v-uni-text",{style:2==t.flag?"color: "+t.baseinfo.base_color2+";border-bottom: 4rpx solid "+t.baseinfo.base_color2+";":"",attrs:{"data-flag":"2"},on:{click:function(i){i=t.$handleEvent(i),t.changeNav(i)}}},[t._v("已过期")])],1),a("v-uni-view",{staticClass:"my_main"},[t._l(t.list,function(i,e){return a("v-uni-view",{key:e,staticClass:"bargain_main"},[a("v-uni-image",{attrs:{src:i.thumb}}),a("v-uni-view",{staticClass:"bargain_text"},[a("v-uni-text",{staticClass:"bargain_title"},[t._v(t._s(i.title))]),1==t.flag?a("v-uni-view",{staticClass:"bargain_title2"},[t._l(i.djs,function(i,e){return a("v-uni-view",{key:e,staticClass:"time"},[t._v(t._s(i))])}),a("v-uni-text",[t._v("后结束")])],2):t._e(),2==t.flag?a("v-uni-view",{staticClass:"bargain_title2"},[a("v-uni-view",{staticClass:"time"},[t._v("已过期")])],1):t._e(),i.flag<3?a("v-uni-view",{staticClass:"bargain_title3"},[a("v-uni-text",{staticStyle:{color:"#838383","font-size":"24rpx"}},[t._v("当前价：")]),a("v-uni-text",{style:"color:"+t.baseinfo.base_color2+";font-size:24rpx;"},[t._v("￥")]),a("v-uni-text",{style:"color:"+t.baseinfo.base_color2+";font-size:26rpx;font-weight:bold"},[t._v(t._s(i.nowPrice))])],1):t._e(),1==t.flag?a("v-uni-view",{staticClass:"bargain_title4"},[a("v-uni-text",{staticStyle:{color:"#838383","font-size":"24rpx"}},[t._v("最低可砍至")]),a("v-uni-text",{style:"color:"+t.baseinfo.base_color2+";font-size:24rpx;"},[t._v("￥")]),a("v-uni-text",{style:"color:"+t.baseinfo.base_color2+";font-size:26rpx;font-weight:bold"},[t._v(t._s(i.miniPrice))])],1):t._e(),2==t.flag?a("v-uni-view",{staticClass:"bargain_title4"},[a("v-uni-text",{staticStyle:{color:"#838383","font-size":"24rpx"}},[t._v("砍价失败")])],1):t._e(),2==i.flag?a("v-uni-text",{staticClass:"max",staticStyle:{color:"#969696"}},[t._v(t._s(i.nowPrice==i.miniPrice?"已砍到最低价":"已达到最大帮砍人数"))]):t._e(),1==i.flag?a("v-uni-button",{staticClass:"jion1",style:"background-color: "+t.baseinfo.base_color2,attrs:{"data-pid":i.id,"data-bargain_id":i.bargain_id},on:{click:function(i){i=t.$handleEvent(i),t.goActivity(i)}}},[t._v("继续砍价")]):t._e(),2==i.flag?a("v-uni-button",{staticClass:"jion2",style:"background-color: "+t.baseinfo.base_color2,attrs:{"data-pid":i.id,"data-bargain_id":i.bargain_id},on:{click:function(i){i=t.$handleEvent(i),t.createOrder(i)}}},[t._v("立即购买")]):t._e()],1)],1)}),1==t.addmore?a("v-uni-view",{staticClass:"addmore",on:{click:function(i){i=t.$handleEvent(i),t.addmores(i)}}},[t._v("点击加载更多")]):t._e(),0==t.addmore?a("v-uni-view",{staticClass:"addmore"},[t._v("全部数据加载完成")]):t._e()],2)],1),a("v-uni-view",{staticClass:"bargain_footer"},[a("v-uni-button",{staticClass:"btn1",on:{click:function(i){i=t.$handleEvent(i),t.golist(i)}}},[a("v-uni-icon",{staticClass:"iconfont icon-x-gouwu"}),a("v-uni-view",[t._v("砍价会场")])],1),a("v-uni-button",{staticClass:"btn2 active",style:"color:"+t.baseinfo.base_color2},[a("v-uni-icon",{staticClass:"iconfont icon-x-geren1"}),a("v-uni-view",[t._v("我的砍价")])],1)],1)],1)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},7117:function(t,i,a){var e=a("3ea9");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("a278d32c",e,!0,{sourceMap:!1,shadowMode:!1})},af3f:function(t,i,a){"use strict";a.r(i);var e=a("5f26"),n=a("bad0");for(var o in n)"default"!==o&&function(t){a.d(i,t,function(){return n[t]})}(o);a("c095");var r=a("2877"),s=Object(r["a"])(n["default"],e["a"],e["b"],!1,null,"c9ff5cd0",null);i["default"]=s.exports},bad0:function(t,i,a){"use strict";a.r(i);var e=a("3e7a"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,function(){return e[t]})}(o);i["default"]=n.a},c095:function(t,i,a){"use strict";var e=a("7117"),n=a.n(e);n.a}}]);