(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesSign-new-new"],{1841:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"head"},[i("v-uni-view",{staticClass:"head_phb"},[i("v-uni-navigator",{staticClass:"head_phb_text",attrs:{url:"/pagesSign/ranking/ranking"}},[t._v("排行榜")]),i("v-uni-view",{staticClass:"head_phb_view"})],1),i("v-uni-view",{staticClass:"head_phb"},[i("v-uni-navigator",{staticClass:"head_phb_text",attrs:{url:"/pagesSign/new/new"}},[t._v("最新签到")]),i("v-uni-view",{staticClass:"head_phb_view",style:"background-color:"+t.baseinfo.base_color2})],1)],1),t._l(t.arr,function(e){return i("v-uni-view",{staticClass:"paiming"},[i("v-uni-image",{staticClass:"paiming_image",attrs:{src:e.avatar}}),i("v-uni-text",{staticClass:"paiming_text1"},[t._v(t._s(e.nickname))]),i("v-uni-text",{staticClass:"paiming_text2"},[t._v(t._s(e.creattime))])],1)})],2)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"361b":function(t,e,i){"use strict";i.r(e);var a=i("1841"),n=i("8131");for(var r in n)"default"!==r&&function(t){i.d(e,t,function(){return n[t]})}(r);i("537c");var o=i("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"34ac3fbc",null);e["default"]=s.exports},"537c":function(t,e,i){"use strict";var a=i("e292"),n=i.n(a);n.a},8131:function(t,e,i){"use strict";i.r(e);var a=i("fcf8"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,function(){return a[t]})}(r);e["default"]=n.a},e292:function(t,e,i){var a=i("fe6d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("09176e14",a,!0,{sourceMap:!1,shadowMode:!1})},fcf8:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("b54a");i("2c90");var a={data:function(){return{page:1,collectlist:"",baseinfo:[],arr:""}},onShareAppMessage:function(){return{title:"最新签到"}},onPullDownRefresh:function(){this.getCollect(),wx.stopPullDownRefresh()},onLoad:function(t){wx.setNavigationBarTitle({title:"最新签到"});var e=0;t.fxsid&&(e=t.fxsid),this.fxsid=e,this._baseMin(this),this.getCollect()},methods:{redirectto:function(t){var e=t.currentTarget.dataset.link,i=t.currentTarget.dataset.linktype;this._redirectto(e,i)},getCollect:function(){var t=this,e=wx.getStorageSync("suid");wx.request({url:t.$baseurl+"dopageZxqd",data:{uniacid:t.$uniacid,suid:e,source:uni.getStorageSync("source")},success:function(e){t.arr=e.data.data}})}}};e.default=a},fe6d:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,"uni-page-body[data-v-34ac3fbc]{height:100%}.container[data-v-34ac3fbc]{background:#fff;height:100%}.head[data-v-34ac3fbc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.head_phb[data-v-34ac3fbc]{width:%?375?%;margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.head_phb_text[data-v-34ac3fbc]{font-size:%?30?%;font-weight:700;line-height:%?80?%;text-align:center}.head_phb_view[data-v-34ac3fbc]{width:%?100?%;height:2px;background-color:#eee;margin:0 auto}.paiming[data-v-34ac3fbc]{margin:%?20?% 4%;padding:%?10?%;border-bottom:1px solid #eee;margin-top:%?20?%;line-height:%?62?%}.paiming_image[data-v-34ac3fbc]{float:left;width:%?58?%;height:%?58?%;border-radius:%?58?%;margin-top:%?4?%}.paiming_text1[data-v-34ac3fbc]{margin-left:%?20?%;font-size:%?26?%}.paiming_text2[data-v-34ac3fbc]{float:right;color:#ccc;font-size:%?22?%}",""])}}]);