(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-equity_show-equity_show"],{"2dc0":function(t,i,a){var e=a("ac19");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("9d6622aa",e,!0,{sourceMap:!1,shadowMode:!1})},"352e":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return t.$imgurl?a("div",[a("v-uni-view",{staticClass:"head mb-20"},[a("v-uni-view",{staticClass:"headBgColor",staticStyle:{background:"#434550"}},[a("v-uni-image",{attrs:{src:t.bg_img,mode:"widthFix"}})],1),a("v-uni-image",{staticClass:"head_bg w-750",attrs:{src:t.$imgurl+"vipbg.png",mode:"widthFix"}}),a("v-uni-view",{staticClass:"head_content radius-20"},[a("v-uni-view",[a("v-uni-text",{staticStyle:{"font-size":"36rpx"}},[t._v("开通即享会员权益")])],1),a("v-uni-view",{staticClass:"line"},[a("v-uni-view"),a("v-uni-text",{staticStyle:{"font-size":"24rpx"}},[t._v("多买多省钱")]),a("v-uni-view")],1),a("v-uni-view",{staticClass:"equity_show"},t._l(t.shows,function(i,e){return a("v-uni-view",{key:e},[a("v-uni-view",{staticClass:"show"},[a("v-uni-image",{attrs:{src:t.$imgurl+"VIP1.png"}})],1),a("v-uni-text",{staticClass:"show_text"},[t._v(t._s(i))])],1)}),1),a("v-uni-button",{staticClass:"btn1",on:{click:function(i){i=t.$handleEvent(i),t.toregister(i)}}},[a("v-uni-view",[t._v("立即开通")])],1)],1),a("v-uni-view",{staticClass:"head_margin radius-20"},[a("v-uni-view",{staticClass:"logo"},[a("v-uni-image",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.userinfo.avatar}})],1),a("v-uni-view",[a("v-uni-view",{staticStyle:{display:"block",height:"55rpx","line-height":"55rpx",color:"#434343"},attrs:{type:"userNickName"}},[t._v(t._s(t.userinfo.nickname))]),a("v-uni-text",[t._v("普通用户")])],1),a("v-uni-view",[a("v-uni-image",{attrs:{src:t.$imgurl+"huangguan.png"}})],1)],1)],1)],1):t._e()},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},"469f5":function(t,i,a){"use strict";var e=a("2dc0"),n=a.n(e);n.a},"676b":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a("2c90"),n={data:function(){return{$imgurl:this.$imgurl,shows:[],bg_img:"",userinfo:""}},onPullDownRefresh:function(){this.getequity(),uni.stopPullDownRefresh()},onLoad:function(t){var i=this,a=this;uni.setNavigationBarTitle({title:"开通权益"});var n=0;t.fxsid&&(a.fxsid=t.fxsid),this._baseMin(this),e.h5login(n,function(){i._getSuperUserInfo(i),i.getequity()})},methods:{getequity:function(){var t=this;uni.request({url:t.$baseurl+"doPagegetequity",data:{uniacid:t.$uniacid,suid:uni.getStorageSync("suid"),source:uni.getStorageSync("source")},success:function(i){t.shows=i.data.data.equity,t.bg_img=i.data.data.bg_img,t.userinfo=i.data.userinfo},fail:function(t){}})},toregister:function(){uni.redirectTo({url:"/pages/register/register"})}}};i.default=n},"92ed":function(t,i,a){"use strict";a.r(i);var e=a("352e"),n=a("de8f");for(var o in n)"default"!==o&&function(t){a.d(i,t,function(){return n[t]})}(o);a("469f5");var d=a("2877"),r=Object(d["a"])(n["default"],e["a"],e["b"],!1,null,"1c40dc07",null);i["default"]=r.exports},ac19:function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,'uni-page-body[data-v-1c40dc07]{background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box}uni-view[data-v-1c40dc07]{overflow:hidden}.mb-20[data-v-1c40dc07]{margin-bottom:%?20?%}.head[data-v-1c40dc07]{position:relative}.headBgColor[data-v-1c40dc07]{height:%?628?%;width:100%;position:absolute;left:0;top:0;z-index:-100}\n\n.headBgColor[data-v-1c40dc07]{z-index:0\n}.head_bg[data-v-1c40dc07]{z-index:0!important}\n\n.headBgColor>uni-image[data-v-1c40dc07]{width:%?586?%;height:%?178?%;display:block;margin:%?46?% auto 0}.head_bg[data-v-1c40dc07]{position:absolute;left:0;top:%?314?%;right:0;z-index:-10}.w-750[data-v-1c40dc07]{width:%?750?%}.bg_f[data-v-1c40dc07]{-webkit-box-shadow:0 %?2?% 6px #eee;box-shadow:0 %?2?% 6px #eee}.head_content[data-v-1c40dc07]{margin:%?228?% %?30?% 0;position:relative;background-color:#fff;padding:%?42?% %?30?%;color:#434343;text-align:center;-webkit-box-shadow:%?4?% %?0?% %?26?% %?16?% hsla(0,0%,63.5%,.2);box-shadow:%?4?% %?0?% %?26?% %?16?% hsla(0,0%,63.5%,.2)}.radius-20[data-v-1c40dc07]{border-radius:%?20?%}.line>uni-view[data-v-1c40dc07]{width:%?20?%;height:%?2?%;background-color:#3c3e4a;display:inline-block;margin:%?0?% %?10?% %?8?%}.show[data-v-1c40dc07]{width:%?100?%;height:%?100?%;line-height:%?100?%;border:%?2?% solid #ebebeb;border-radius:50%;margin:%?14?% auto}.show uni-image[data-v-1c40dc07]{width:%?54?%;height:%?54?%;display:block;margin:%?24?% auto}.equity_show>uni-view[data-v-1c40dc07]{width:25%;float:left;margin-bottom:%?40?%}.equity_show[data-v-1c40dc07]{margin-top:%?36?%}.equity_show[data-v-1c40dc07]:after{display:block;content:"";clear:left}.btn1[data-v-1c40dc07]{width:%?502?%;height:%?84?%;margin:%?30?% auto;background-color:#e1c386;color:#fff;border-radius:%?98?%;font-size:%?30?%;display:block}.btn1[data-v-1c40dc07]:after{border-radius:%?98?%;border:0}.logo[data-v-1c40dc07]{width:%?110?%;height:%?110?%;border-radius:50%;margin:0 %?28?%;border:%?4?% solid #98c6fb}.head_margin[data-v-1c40dc07]{padding:%?30?% 0;margin:%?20?% %?30?% %?62?%;background-color:#fff;-webkit-box-shadow:%?4?% %?0?% %?26?% %?16?% hsla(0,0%,63.5%,.2);box-shadow:%?4?% %?0?% %?26?% %?16?% hsla(0,0%,63.5%,.2)}.head_margin>uni-view[data-v-1c40dc07]:first-child,.head_margin>uni-view[data-v-1c40dc07]:nth-child(2){float:left;font-size:%?28?%}.head_margin>uni-view[data-v-1c40dc07]:last-child{float:right;margin-right:%?30?%;-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.head_margin[data-v-1c40dc07]:after{display:block;content:"";clear:both}.head_margin uni-image[data-v-1c40dc07]{width:%?100?%;height:%?100?%;display:block}.head_margin uni-text[data-v-1c40dc07]{border:1px solid #f7f7f7;color:#b6b6b6;border-radius:%?36?%;padding:0 %?10?%;height:%?53?%;line-height:%?53?%}.show_text[data-v-1c40dc07]{-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;font-size:%?22?%;display:block}body.?%PAGE?%[data-v-1c40dc07]{background-color:#fff}',""])},de8f:function(t,i,a){"use strict";a.r(i);var e=a("676b"),n=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(i,t,function(){return e[t]})}(o);i["default"]=n.a}}]);