(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesFenxiao-fenxiao_account-fenxiao_account"],{"3b0a":function(i,e,t){"use strict";t.r(e);var n=t("c602"),a=t.n(n);for(var o in n)"default"!==o&&function(i){t.d(e,i,function(){return n[i]})}(o);e["default"]=a.a},"9fbd":function(i,e,t){var n=t("eaf9");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=t("4f06").default;a("39e5faec",n,!0,{sourceMap:!1,shadowMode:!1})},c58d:function(i,e,t){"use strict";var n=function(){var i=this,e=i.$createElement,t=i._self._c||e;return i.$imgurl?t("v-uni-view",[t("v-uni-view",{staticClass:"fxtop",staticStyle:{"background-color":"#6a41ff"}},[t("v-uni-view",{staticClass:"all"},[t("v-uni-view",{staticStyle:{"font-size":"26rpx"}},[i._v("累计收入（元）")]),t("v-uni-view",[i._v("￥"),t("v-uni-text",{staticStyle:{"font-size":"50rpx"}},[i._v(i._s(i.myzh.fx_allmoney))])],1)],1),t("v-uni-view",{staticClass:"con"},[t("v-uni-view",[t("v-uni-view",{staticStyle:{"font-size":"24rpx"}},[i._v("可提现佣金")]),t("v-uni-view",[i._v("￥"),t("v-uni-text",{staticStyle:{"font-size":"40rpx"}},[i._v(i._s(i.myzh.fx_money))])],1)],1),t("v-uni-view",[t("v-uni-view",{staticStyle:{"font-size":"24rpx"}},[i._v("待打款佣金")]),t("v-uni-view",[i._v("￥"),t("v-uni-text",{staticStyle:{"font-size":"40rpx"}},[i._v(i._s(i.yj))])],1)],1),t("v-uni-view",[t("v-uni-view",{staticStyle:{"font-size":"24rpx"}},[i._v("累计提现佣金")]),t("v-uni-view",[i._v("￥"),t("v-uni-text",{staticStyle:{"font-size":"40rpx"}},[i._v(i._s(i.myzh.fx_getmoney))])],1)],1)],1)],1),t("v-uni-view",{staticClass:"main"},[t("v-uni-view",{staticClass:"mingxi"},[t("v-uni-view",{on:{click:function(e){e=i.$handleEvent(e),i.account_tixian(e)}}},[t("v-uni-view",[t("v-uni-image",{staticStyle:{width:"44rpx","margin-right":"26rpx"},attrs:{src:i.$imgurl+"fx_tx.png",mode:"widthFix"}}),t("v-uni-text",[i._v("申请提现")])],1),t("v-uni-image",{staticStyle:{width:"14rpx"},attrs:{src:i.$imgurl+"btn_jt.png",mode:"widthFix"}})],1),t("v-uni-view",{on:{click:function(e){e=i.$handleEvent(e),i.fenxiao_order(e)}}},[t("v-uni-view",[t("v-uni-image",{staticStyle:{width:"44rpx","margin-right":"26rpx"},attrs:{src:i.$imgurl+"fx_dd.png",mode:"widthFix"}}),t("v-uni-text",[i._v("账户明细")])],1),t("v-uni-image",{staticStyle:{width:"14rpx"},attrs:{src:i.$imgurl+"btn_jt.png",mode:"widthFix"}})],1),t("v-uni-view",{on:{click:function(e){e=i.$handleEvent(e),i.tixian_record(e)}}},[t("v-uni-view",[t("v-uni-image",{staticStyle:{width:"44rpx","margin-right":"26rpx"},attrs:{src:i.$imgurl+"fx_txmx.png",mode:"widthFix"}}),t("v-uni-text",[i._v("提现记录")])],1),t("v-uni-image",{staticStyle:{width:"14rpx"},attrs:{src:i.$imgurl+"btn_jt.png",mode:"widthFix"}})],1)],1)],1)],1):i._e()},a=[];t.d(e,"a",function(){return n}),t.d(e,"b",function(){return a})},c602:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t("55f5"),a={data:function(){return{$imgurl:this.$imgurl,yj:0,myzh:{}}},onLoad:function(i){var e=this;this._baseMin(this);var t=0;i.fxsid&&(t=i.fxsid),this.fxsid=t,n.h5login(t,function(){e.getmzh()})},methods:{account_tixian:function(){uni.navigateTo({url:"/pagesFenxiao/fenxiao_tixian/fenxiao_tixian"})},fenxiao_order:function(){uni.navigateTo({url:"/pagesFenxiao/fenxiao_order/fenxiao_order"})},tixian_record:function(){uni.navigateTo({url:"/pagesFenxiao/fenxiao_tixian_do/fenxiao_tixian_do"})},getmzh:function(){var i=this;uni.request({url:this.$baseurl+"doPagegetmzh",data:{uniacid:this.$uniacid,suid:uni.getStorageSync("suid")},success:function(e){i.myzh=e.data.data.userinfo,i.yj=e.data.data.wfmoney}})}}};e.default=a},e3ad:function(i,e,t){"use strict";t.r(e);var n=t("c58d"),a=t("3b0a");for(var o in a)"default"!==o&&function(i){t.d(e,i,function(){return a[i]})}(o);t("f7eb");var r=t("2877"),l=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"23e988b8",null);e["default"]=l.exports},eaf9:function(i,e,t){e=i.exports=t("2350")(!1),e.push([i.i,"uni-page-body[data-v-23e988b8]{color:#454545;font-size:%?28?%}uni-image[data-v-23e988b8]{overflow:visible}.b-fff[data-v-23e988b8]{background:#fff}.mb20[data-v-23e988b8]{margin-bottom:%?20?%}.mr10[data-v-23e988b8]{margin-right:%?10?%}.pd10[data-v-23e988b8]{padding:%?10?%}.flex-row[data-v-23e988b8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.flex-shu-center[data-v-23e988b8]{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.color_red[data-v-23e988b8]{color:#f03150}uni-input[data-v-23e988b8]{border:0;padding:0;margin:0}.f-bold[data-v-23e988b8]{font-weight:700}.main[data-v-23e988b8]{background:#fff;padding:%?38?% %?32?%;-webkit-box-sizing:border-box;box-sizing:border-box}.fxtop[data-v-23e988b8]{height:%?334?%;width:100%;position:relative}.fxtop .con[data-v-23e988b8]{position:absolute;left:0;right:0;bottom:0;height:%?130?%;line-height:%?130?%;z-index:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#fff;background-color:rgba(0,0,0,.1)}.con>uni-view[data-v-23e988b8]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?88?%;line-height:%?44?%;color:#e5e5e5}.nickname[data-v-23e988b8]{font-size:%?34?%}.middle[data-v-23e988b8]{height:%?170?%;padding:0 20px;background-color:#fff;border-bottom:%?2?% solid #f6f6f9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yongjin[data-v-23e988b8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.yongjin>uni-view[data-v-23e988b8]{height:%?142?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yongjin>uni-view>uni-view[data-v-23e988b8]{width:%?374?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.yongjin>uni-view>uni-view[data-v-23e988b8]:nth-child(odd){border-right:%?2?% solid #f6f6f9}.yongjin>uni-view[data-v-23e988b8]:first-child{border-bottom:%?2?% solid #f6f6f9}.tixian_sub[data-v-23e988b8]{width:%?200?%;border:%?2?% solid #f23030;border-radius:%?10?%;margin:%?30?% auto;color:#f23030;text-align:center;padding:%?10?% 0}.line[data-v-23e988b8]{background:#f1f1f1;height:%?20?%}.mingxi[data-v-23e988b8]{border-top:%?2?% solid #eee;border-bottom:%?2?% solid #eee;background:#fff;-webkit-box-shadow:%?4?% %?4?% %?50?% #dfdfdf;box-shadow:%?4?% %?4?% %?50?% #dfdfdf;border-radius:%?10?%}.mingxi>uni-view[data-v-23e988b8]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:%?104?%;color:#222;border-bottom:%?2?% solid #f6f6f9;padding:0 %?54?%}.mingxi uni-image[data-v-23e988b8]{vertical-align:middle}.mingxi uni-text[data-v-23e988b8]{vertical-align:middle;font-size:%?24?%}.all[data-v-23e988b8]{color:#fff;text-align:center;padding-top:%?56?%}",""])},f7eb:function(i,e,t){"use strict";var n=t("9fbd"),a=t.n(n);a.a}}]);