(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-coupon-coupon"],{4318:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i("2c90"),n={data:function(){return{$imgurl:this.$imgurl,couponlist:[],baseinfo:{},page_signs:"/pages/coupon/coupon",needAuth:!1,needBind:!1,kaiq:0,disabled:!1,hide_type:0,couid:""}},onLoad:function(t){var e=this,i=uni.getStorageSync("suid");this.checkvip(),this._baseMin(this);var n=0;t.fxsid&&(n=t.fxsid),this.fxsid=n,s.h5login(n,function(){e.getList(),e.couset()}),i||(this.needAuth=!0)},onPullDownRefresh:function(){this.getList(),this.couset(),uni.stopPullDownRefresh()},methods:{showType:function(t){this.couid=t.currentTarget.dataset.couid,0==this.hide_type?this.hide_type=1:this.hide_type=0},cell:function(){this.needAuth=!1},closeAuth:function(){this.needAuth=!1,this.needBind=!0},closeBind:function(){this.needBind=!1,this.getList(),this.couset()},getSuid:function(){var t=uni.getStorageSync("suid");if(t)return!0;var e="";return e?this.needBind=!0:this.needAuth=!0,!1},checkvip:function(t){var e=this,i=uni.getStorageSync("suid");uni.request({url:e.$baseurl+"doPagecheckvip",data:{uniacid:e.$uniacid,kwd:"coupon",suid:i},success:function(t){if(!1===t.data.data)return e.needvip=!0,uni.showModal({title:"进入失败",content:"使用本功能需先开通vip!",showCancel:!1,success:function(t){t.confirm&&uni.redirectTo({url:"/pages/register/register"})}}),!1},fail:function(t){}})},getList:function(){var t=this;uni.request({url:this.$baseurl+"doPageCoupon",data:{suid:uni.getStorageSync("suid"),uniacid:this.$uniacid},success:function(e){t.couponlist=e.data.data,uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}})},getit_zj:s.throttle(function(t){if(!this.disabled){if(!this.getSuid())return!1;this.disabled=!0;var e=this,i=t.currentTarget.dataset.id;uni.getStorage({key:"suid",success:function(t){var s=t.data;s&&uni.request({url:e.$baseurl+"doPagegetcoupon",data:{id:i,suid:s,uniacid:e.$uniacid},success:function(t){1==t.data.data&&uni.showToast({title:"领取成功",icon:"success",duration:2e3,success:function(){setTimeout(function(){e.getList(),e.disabled=!1},500)}}),2==t.data.data&&uni.showToast({title:"领取失败",icon:"loading",duration:2e3,success:function(){setTimeout(function(){e.getList(),e.disabled=!1},500)}})}})}})}},1e3),mycoupp:function(){uni.redirectTo({url:"/pages/mycoupon/mycoupon"})},couset:function(){var t=this;uni.request({url:t.$baseurl+"doPagecouponset",data:{uniacid:t.$uniacid},success:function(e){var i=1;i=e.data.data?e.data.data.flag:1,t.kaiq=i}})}}};e.default=n},"65c2":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.$imgurl?i("v-uni-view",{staticStyle:{position:"fixed","overflow-y":"scroll",top:"0",left:"0",right:"0",bottom:"0"}},[t.needAuth?i("auth",{attrs:{needAuth:t.needAuth},on:{closeAuth:function(e){e=t.$handleEvent(e),t.closeAuth(e)},cell:function(e){e=t.$handleEvent(e),t.cell(e)}}}):t._e(),t.needBind?i("bindPhone",{attrs:{needBind:t.needBind},on:{closeBind:function(e){e=t.$handleEvent(e),t.closeBind(e)}}}):t._e(),i("v-uni-view",{staticClass:"toubu1"},[i("v-uni-view",{staticClass:"yhq check"},[i("v-uni-view",{staticClass:"check_on"},[t._v("可领优惠券")])],1),i("v-uni-view",{staticClass:"wyhq",on:{click:function(e){e=t.$handleEvent(e),t.mycoupp(e)}}},[t._v("我的优惠券")])],1),i("v-uni-view",{staticStyle:{height:"172rpx"}}),i("v-uni-view",{staticClass:"couponlist_box"},[t._l(t.couponlist,function(e,s){return i("v-uni-view",{key:s,staticClass:"youhqs"},[1==e.isover_time?[i("v-uni-view",{staticClass:"yuan_left"}),i("v-uni-view",{staticClass:"yuan_right"}),i("v-uni-view",{staticClass:"wkk"},[i("v-uni-view",{staticClass:"wkk_top"},[i("v-uni-view",{staticClass:"shujl",style:{color:t.baseinfo.base_color}},[i("v-uni-text",{staticClass:"jiagq"},[i("v-uni-text",{staticStyle:{"font-size":"42rpx","font-weight":"normal"}},[t._v("￥")]),t._v(t._s(e.price))],1),i("v-uni-text",{staticClass:"limit_count",style:{display:0==e.xz_count?"none":"inline-block",border:"2rpx solid "+t.baseinfo.base_color}},[t._v("限领"),e.xz_count>0?i("v-uni-text",[t._v(t._s(e.xz_count)+"张")]):t._e()],1)],1),i("v-uni-view",{staticClass:"qitxx"},[i("v-uni-view",{staticClass:"yhq_t"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"xiaozi"},[0==e.pay_money?i("v-uni-text",[t._v("任意金额可用")]):i("v-uni-text",[t._v("满"+t._s(e.pay_money)+"可用")])],1),i("v-uni-view",{staticClass:"xiaozi",staticStyle:{"margin-top":"18rpx"}},[t._v("有效期："),0==e.use_contents["use_type"]&&0==e.use_contents["use_time"]["use_btime"]&&0==e.use_contents["use_time"]["use_etime"]?i("v-uni-text",[t._v("永久有效")]):t._e(),0==e.use_contents["use_type"]&&0==e.use_contents["use_time"]["use_btime"]&&0!=e.use_contents["use_time"]["use_etime"]?i("v-uni-text",[t._v(t._s(e.use_contents["use_time"]["use_etime"])+"前有效")]):t._e(),0==e.use_contents["use_type"]&&0!=e.use_contents["use_time"]["use_btime"]&&0==e.use_contents["use_time"]["use_etime"]?i("v-uni-text",[t._v(t._s(e.use_contents["use_time"]["use_btime"])+"后有效")]):t._e(),0==e.use_contents["use_type"]&&0!=e.use_contents["use_time"]["use_btime"]&&0!=e.use_contents["use_time"]["use_etime"]?i("v-uni-text",[t._v(t._s(e.use_contents["use_time"]["use_btime"])+"至"+t._s(e.use_contents["use_time"]["use_etime"]))]):t._e(),1==e.use_contents["use_type"]&&1!=e.use_contents["use_time"]?i("v-uni-text",[t._v("领取当日 "+t._s(e.use_contents["use_time"])+" 天内有效")]):t._e(),1==e.use_contents["use_type"]&&1==e.use_contents["use_time"]?i("v-uni-text",[t._v("领取当日有效")]):t._e(),2==e.use_contents["use_type"]&&1!=e.use_contents["use_time"]?i("v-uni-text",[t._v("领取次日 "+t._s(e.use_contents["use_time"])+" 天内有效")]):t._e(),2==e.use_contents["use_type"]&&1==e.use_contents["use_time"]?i("v-uni-text",[t._v("领取次日有效")]):t._e()],1)],1),-1!=e.kc?i("v-uni-view",{staticClass:"lijlq"},[i("v-uni-view",{staticClass:"lijlq_num",style:{color:t.baseinfo.base_color}},[t._v("已领"+t._s(e.pers)+"%")]),i("v-uni-progress",{attrs:{percent:e.pers,"stroke-width":"2",activeColor:t.baseinfo.base_color,backgroundColor:"#eee"}})],1):t._e()],1),i("v-uni-view",{staticClass:"include_types"},[1==e.use_goods_contents.type?i("v-uni-view",{staticClass:"include_items"},[i("v-uni-view",{class:["include_words",1==t.hide_type&&t.couid==s?"":"include_words_no"]},[t._v("适用品类："+t._s(e.use_goods_contents.contents))]),i("v-uni-view",{class:["iconfont",1==t.hide_type&&t.couid==s?"icon-x-shang":"icon-x-xia"],attrs:{"data-couid":s},on:{click:function(e){e=t.$handleEvent(e),t.showType(e)}}})],1):i("v-uni-view",{staticClass:"include_items"},[i("v-uni-view",{staticClass:"include_words"},[t._v("适用品类：全类目")])],1),i("v-uni-view",[1==t.kaiq?[1==e.is_get?i("v-uni-button",{staticClass:"ljlq",style:{background:t.baseinfo.base_color},attrs:{"data-id":e.id},on:{click:function(e){e=t.$handleEvent(e),t.getit_zj(e)}}},[t._v("立即领取")]):t._e()]:t._e(),0==e.is_get?i("v-uni-button",{staticClass:"ljlq2"},[t._v("已领取")]):t._e(),e.kc<=0&&-1!=e.kc?i("v-uni-button",{staticClass:"ljlq2"},[t._v("已领完")]):t._e()],2)],1)],1)]:t._e()],2)}),i("copyright",{attrs:{baseinfo:t.baseinfo}}),i("myfooter",{attrs:{page_signs:t.page_signs,baseinfo:t.baseinfo}})],2)],1):t._e()},n=[];i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n})},"66ab":function(t,e,i){var s=i("ba01");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("4f06").default;n("27d34a0d",s,!0,{sourceMap:!1,shadowMode:!1})},ac46:function(t,e,i){"use strict";var s=i("66ab"),n=i.n(s);n.a},b473:function(t,e,i){"use strict";i.r(e);var s=i("65c2"),n=i("be0e");for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);i("ac46");var o=i("2877"),u=Object(o["a"])(n["default"],s["a"],s["b"],!1,null,"2adb8a96",null);e["default"]=u.exports},ba01:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".toubu[data-v-2adb8a96]{position:fixed;background:#fff;width:100%;height:%?86?%;line-height:%?86?%;text-align:center;top:0;z-index:10;overflow:visible}.toubu1[data-v-2adb8a96]{position:fixed;width:100%;height:%?86?%;line-height:%?86?%;text-align:center;top:%?86?%;z-index:10;overflow:visible;background:#fff}.check[data-v-2adb8a96]{color:#f4361d}.check_on[data-v-2adb8a96]{border-bottom:%?2?% solid #f4361d}.yhq[data-v-2adb8a96]{display:inline-block;width:50%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?116?%}.wyhq[data-v-2adb8a96]{display:inline-block;width:50%;color:#969696}.couponlist_box[data-v-2adb8a96]{padding:%?20?%}.youhqs[data-v-2adb8a96]{margin-bottom:%?20?%;border-radius:%?10?%;overflow:hidden;position:relative;background:#fff}.yuan_left[data-v-2adb8a96]{position:absolute;top:%?184?%;left:%?-10?%;background:#f6f6f6;display:block;height:%?20?%;width:%?20?%;border-radius:%?20?%;z-index:1}.yuan_right[data-v-2adb8a96]{position:absolute;top:%?184?%;right:%?-10?%;background:#f6f6f6;display:block;height:%?20?%;width:%?20?%;border-radius:%?20?%;z-index:1}.wkk[data-v-2adb8a96]{position:relative}.wkk_top[data-v-2adb8a96]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border-bottom:%?2?% dashed #e4e4e4;height:%?194?%;-webkit-box-sizing:border-box;box-sizing:border-box}.shujl[data-v-2adb8a96]{color:#fff;text-align:center;width:30%;overflow-y:hidden;margin:auto}.jiagq[data-v-2adb8a96]{font-size:%?62?%;font-weight:700;display:block;line-height:%?50?%;text-indent:%?-14?%}.limit_count[data-v-2adb8a96]{font-size:%?22?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?12?%;border-radius:%?20?%}.qitxx[data-v-2adb8a96]{padding-left:%?10?%;padding-top:%?28?%;width:70%;-webkit-box-sizing:border-box;box-sizing:border-box}.yhq_t[data-v-2adb8a96]{font-size:%?28?%;color:#434343;margin-bottom:%?12?%}.xiaozi[data-v-2adb8a96]{font-size:%?22?%;color:#666}\n/* 已领 % */.lijlq[data-v-2adb8a96]{position:absolute;right:%?20?%;top:%?34?%;width:%?120?%;text-align:center}.lijlq_num[data-v-2adb8a96]{font-size:%?22?%;margin-bottom:%?10?%}\n/* 适用品类 */.include_types[data-v-2adb8a96]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?%;font-size:%?22?%}.include_items[data-v-2adb8a96]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:82%;-webkit-box-sizing:border-box;box-sizing:border-box;padding-right:%?60?%;padding-top:%?10?%;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.include_words[data-v-2adb8a96]{width:96%}.include_words_no[data-v-2adb8a96]{white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.include_items .iconfont[data-v-2adb8a96]{font-size:%?24?%;margin-left:%?20?%}\n/* 领取按钮 */.ljlq[data-v-2adb8a96]{font-size:%?22?%;color:#fff;border-radius:%?50?%;width:%?124?%;height:%?50?%;line-height:%?50?%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}.ljlq2[data-v-2adb8a96]:after,.ljlq[data-v-2adb8a96]:after{border:none}.ljlq2[data-v-2adb8a96]{font-size:%?22?%;background-color:#ccc;color:#fff;width:%?124?%;height:%?50?%;line-height:%?50?%;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:%?50?%;padding:0}",""])},be0e:function(t,e,i){"use strict";i.r(e);var s=i("4318"),n=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);e["default"]=n.a}}]);