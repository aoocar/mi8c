(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesPluginForum-index-index"],{2661:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[t.needAuth?n("auth",{attrs:{needAuth:t.needAuth},on:{closeAuth:function(e){arguments[0]=e=t.$handleEvent(e),t.closeAuth.apply(void 0,arguments)}}}):t._e(),t.needBind?n("bindPhone",{attrs:{needBind:t.needBind},on:{closeBind:function(e){arguments[0]=e=t.$handleEvent(e),t.closeBind.apply(void 0,arguments)}}}):t._e(),n("v-uni-view",{staticClass:"select_typebox"},[t._l(t.data,function(e,i){return[n("v-uni-navigator",{key:i+"_0",staticClass:"select_type_single",attrs:{url:"/pagesPluginForum/forum/forum?fid="+e.id}},[n("v-uni-view",{staticClass:"select_type_single_view"},[n("v-uni-view",{staticStyle:{height:"74rpx"}},[n("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx",display:"block",margin:"0 auto"},attrs:{src:e.func_img,mode:"aspectFill"}})],1),n("v-uni-view",{staticClass:"select_type_text"},[t._v(t._s(e.title))])],1)],1)]})],2),1==t.baseinfo.tabbar_t?n("copyright",{attrs:{baseinfo:t.baseinfo}}):t._e(),n("myfooter",{attrs:{page_signs:t.page_signs,baseinfo:t.baseinfo}})],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"3b0a":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".select_typebox[data-v-250c701d]{padding:0 %?20?%;font-size:0}.select_type_single[data-v-250c701d]{width:33.3%;padding:%?30?% 0;box-sizing:border-box;border-bottom:%?2?% solid #ddd;display:inline-block}.select_type_single_view[data-v-250c701d]{padding:%?10?%;box-sizing:border-box;border-right:%?2?% solid #ddd;text-align:center}.select_type_single:nth-child(3n) .select_type_single_view[data-v-250c701d]{border:none}.select_type_single:last-child .select_type_single_view[data-v-250c701d]{border-right:none}.select_type_icon[data-v-250c701d]{font-size:%?56?%;height:%?74?%}.select_type_text[data-v-250c701d]{font-size:%?24?%;color:#838383}",""])},4405:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("7131"),a={data:function(){return{data:[],page_signs:"/pagesPluginForum/index/index",baseinfo:"",needAuth:!1,needBind:!1}},onLoad:function(t){var e=this,n=t.id;this.id=n,this._baseMin(this);var a=0;t.fxsid&&(a=t.fxsid),this.fxsid=a;uni.getStorageSync("suid");i.h5login(a,function(){e.getMain(n)})},onPullDownRefresh:function(){var t=this;t.getfunc(),uni.stopPullDownRefresh()},onShow:function(){var t=this;t.getfunc()},methods:{getMain:function(){uni.setNavigationBarTitle({title:"同城首页"})},redirectto:function(t){var e=t.currentTarget.dataset.link,n=t.currentTarget.dataset.linktype;this._redirectto(e,n)},getfunc:function(){var t=this;uni.request({url:t.$baseurl+"doPageForumfunc",data:{uniacid:t.$uniacid},success:function(e){console.log(e),t.data=e.data.data},fail:function(t){}})},closeAuth:function(){this.needAuth=!1,this._checkBindPhone(this)},closeBind:function(){this.needBind=!1,this.getMain()}}};e.default=a},5232:function(t,e,n){"use strict";var i=n("c36d"),a=n.n(i);a.a},"58aa":function(t,e,n){"use strict";n.r(e);var i=n("2661"),a=n("7e01");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("5232");var o=n("2877"),d=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"250c701d",null);e["default"]=d.exports},"7e01":function(t,e,n){"use strict";n.r(e);var i=n("4405"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);e["default"]=a.a},c36d:function(t,e,n){var i=n("3b0a");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("d687d6ea",i,!0,{sourceMap:!1,shadowMode:!1})}}]);