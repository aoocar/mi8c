(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order_art-order_art"],{2074:function(t,i,a){"use strict";a.r(i);var e=a("8449c"),s=a("80d4");for(var n in s)"default"!==n&&function(t){a.d(i,t,function(){return s[t]})}(n);a("7683");var r=a("2877"),o=Object(r["a"])(s["default"],e["a"],e["b"],!1,null,"66ca240c",null);i["default"]=o.exports},"6c17":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,".list_pic[data-v-66ca240c]{border-radius:%?10?%;overflow:hidden;background:#fff;padding:%?20?%}",""])},"6d38":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,a("b54a");var e=a("2c90"),s={data:function(){return{page:1,collectlist:"",morePro:!1,baseinfo:[]}},onPullDownRefresh:function(){this.getCollect(),wx.stopPullDownRefresh()},onLoad:function(t){var i=this,a=0;t.fxsid&&(i.fxsid=t.fxsid),this._baseMin(this),t.title?uni.setNavigationBarTitle({title:t.title}):uni.setNavigationBarTitle({title:"我的文章付费订单"}),e.h5login(a,function(){i.getCollect()})},methods:{redirectto:function(t){var i=t.currentTarget.dataset.link,a=t.currentTarget.dataset.linktype;this._redirectto(i,a)},getCollect:function(){var t=this;wx.request({url:t.$baseurl+"doPagegetorderart",data:{uniacid:t.$uniacid,suid:uni.getStorageSync("suid"),page:1},cachetime:"30",success:function(i){t.collectlist=i.data.data.list;var a=i.data.data.num;t.morePro=a>10,uni.setStorageSync("isShowLoading",!1),uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}})},showMore:function(){var t=this,i=t.page+1;wx.request({url:t.$baseurl+"doPagegetorderart",data:{uniacid:t.$uniacid,suid:uni.getStorageSync("suid"),page:i},success:function(a){""!=a.data.data.list&&(t.collectlist=t.collectlist.concat(a.data.data.list),t.page=i),a.data.data.num==i&&(t.morePro=!1)}})}}};i.default=s},7683:function(t,i,a){"use strict";var e=a("ba35"),s=a.n(e);s.a},"80d4":function(t,i,a){"use strict";a.r(i);var e=a("6d38"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,function(){return e[t]})}(n);i["default"]=s.a},"8449c":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("v-uni-view",{staticClass:"bg_f"},[a("v-uni-view",{staticClass:"title2"},[a("v-uni-view",{staticClass:"title2_line",style:"background:"+t.baseinfo.base_color}),t._v("文章付费订单")],1)],1),a("v-uni-view",{staticClass:"list_collect clearfix"},t._l(t.collectlist,function(i,e){return a("v-uni-view",{key:e,staticClass:"list_pic19"},[a("v-uni-navigator",{attrs:{url:"/pages/showArt/showArt?id="+i.id}},[a("v-uni-view",{staticClass:"list8_left"},[a("v-uni-image",{attrs:{src:i.thumb,mode:"aspectFill"}})],1),a("v-uni-view",{staticClass:"list8_right"},[a("v-uni-view",{staticClass:"title3_1"},[t._v(t._s(i.title))]),a("v-uni-view",{staticClass:"desc1"},[t._v(t._s(null==i.desc?"暂无简介":i.desc))]),a("v-uni-view",{staticClass:"time"},[a("v-uni-text",{staticClass:"price",style:"color:"+t.baseinfo.base_color},[t._v("¥"+t._s(i.paymoney))])],1)],1)],1)],1)}),1),a("copyright",{attrs:{baseinfo:t.baseinfo}}),a("myfooter",{attrs:{page_signs:t.page_signs,baseinfo:t.baseinfo}})],1)},s=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return s})},ba35:function(t,i,a){var e=a("6c17");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("79ab9d05",e,!0,{sourceMap:!1,shadowMode:!1})}}]);