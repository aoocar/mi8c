(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesBargain-bargain-bargain"],{"21ed":function(i,a,t){"use strict";var e=t("5321"),n=t.n(e);n.a},"297a":function(i,a,t){"use strict";t.r(a);var e=t("7eeb"),n=t.n(e);for(var r in e)"default"!==r&&function(i){t.d(a,i,function(){return e[i]})}(r);a["default"]=n.a},5321:function(i,a,t){var e=t("b1ec");"string"===typeof e&&(e=[[i.i,e,""]]),e.locals&&(i.exports=e.locals);var n=t("4f06").default;n("186aabb4",e,!0,{sourceMap:!1,shadowMode:!1})},"7c9d":function(i,a,t){"use strict";t.r(a);var e=t("cb94"),n=t("297a");for(var r in n)"default"!==r&&function(i){t.d(a,i,function(){return n[i]})}(r);t("21ed");var o=t("2877"),s=Object(o["a"])(n["default"],e["a"],e["b"],!1,null,"2ce57af1",null);a["default"]=s.exports},"7eeb":function(i,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=t("2c90"),n={data:function(){return{$imgurl:this.$imgurl,swiperCurrent:0,indicatorDots:!0,autoplay:!0,interval:3e3,duration:800,circular:!0,banners:[],list:[],searchKey:"",page:1,addmore:1,baseinfo:[]}},onPullDownRefresh:function(){var i=this;i.page=1,i.searchKey="",i.bargainList(),uni.stopPullDownRefresh()},onLoad:function(i){var a=this,t=this;uni.setNavigationBarTitle({title:"砍价会场"});var n=0;i.fxsid&&(n=i.fxsid,t.fxsid=i.fxsid),this._baseMin(this),e.h5login(n,function(){a.bargainList()})},methods:{bargainList:function(){var i=this,a=i.searchKey;uni.request({url:i.$baseurl+"doPageBargainList",data:{uniacid:i.$uniacid,openid:i.openid,searchKey:a,page:i.page,addmore:1,source:uni.getStorageSync("source")},success:function(a){i.banners=a.data.data.banners,i.list=a.data.data.list}})},addmores:function(){var i=this,a=i.page+1,t=i.searchKey;uni.request({url:i.$baseurl+"doPageBargainList",data:{uniacid:i.$uniacid,openid:i.openid,searchKey:t,page:a,source:uni.getStorageSync("source")},success:function(t){t.data.data.list.length<6&&(i.addmore=0),i.page=a,i.banners=t.data.data.banners,i.list=i.list.concat(t.data.data.list)}})},getSearchKey:function(i){var a=this,t=i.detail.value;a.page=1,a.searchKey=t,a.bargainList()},goMybargain:function(){uni.navigateTo({url:"/pagesBargain/my_bargain/my_bargain"})},goPage:function(i){var a=i.currentTarget.dataset.id;uni.navigateTo({url:"/pagesBargain/bargain_pro/bargain_pro?id="+a})}}};a.default=n},b1ec:function(i,a,t){a=i.exports=t("2350")(!1),a.push([i.i,".bargain-container[data-v-2ce57af1]{font-size:0;position:fixed;top:0;left:0;right:0;bottom:%?92?%;overflow-y:scroll;overflow-x:hidden}[data-v-2ce57af1]::-webkit-scrollbar{width:0;height:0;color:rgba(0,0,0,0)}.bargain_input[data-v-2ce57af1]{border-radius:%?10?%;width:calc(100%-60rpx);-webkit-box-sizing:border-box;box-sizing:border-box;height:%?46?%;line-height:%?46?%;margin-left:%?66?%;text-align:left!important;border:none;padding:0;color:#858585;font-size:%?30?%}.search_up[data-v-2ce57af1]{width:90%;margin:%?20?% auto;border-radius:%?10?%;padding:%?10?%;height:%?46?%;line-height:%?46?%;position:relative;border:%?2?% solid #e6e3e3;background-color:#fff;overflow:hidden;text-align:left!important}.search_img[data-v-2ce57af1]{width:%?40?%;height:%?40?%;display:block;position:absolute;top:%?14?%;left:%?20?%}.search_input[data-v-2ce57af1]{width:80%;height:%?40?%;line-height:%?40?%;margin-left:%?66?%;text-align:left!important;border:none;padding:0;color:#858585;font-size:%?30?%}uni-swiper[data-v-2ce57af1]{width:100vw;height:%?300?%}uni-swiper-item uni-image[data-v-2ce57af1]{width:100%;height:100%}uni-swiper-item[data-v-2ce57af1]{width:375px;height:249px}.bargain[data-v-2ce57af1]{padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff}.bargain_main[data-v-2ce57af1]{padding:%?20?% 0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:%?220?%;line-height:%?220?%;border-bottom:%?2?% solid #f0f0f0;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.bargain>uni-view[data-v-2ce57af1]:last-child{border:none}.bargain_main>uni-image[data-v-2ce57af1]{width:%?220?%;height:%?180?%;display:block;vertical-align:middle}.bargain_main>uni-view[data-v-2ce57af1]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;overflow:hidden}.jion[data-v-2ce57af1]{width:%?160?%;height:%?70?%;line-height:%?70?%;border:none;font-size:%?26?%;color:#fff;border-radius:%?10?%;position:absolute;right:%?10?%;bottom:%?6?%}.jion[data-v-2ce57af1]:after{border:none}.bargain_title[data-v-2ce57af1]{position:absolute;top:%?6?%;left:%?20?%;right:%?10?%;font-size:%?30?%;height:%?30?%;line-height:%?30?%;font-weight:700;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.bargain_title2[data-v-2ce57af1]{position:absolute;top:%?56?%;left:%?20?%;height:%?24?%;line-height:%?24?%;font-size:%?24?%;color:#969696;overflow:hidden}.bargain_title3[data-v-2ce57af1]{position:absolute;top:%?92?%;left:%?20?%;height:%?32?%;line-height:%?32?%;overflow:hidden}.bargain_title4[data-v-2ce57af1]{position:absolute;top:%?138?%;left:%?20?%;height:%?54?%;line-height:%?54?%;overflow:hidden}.bargain_title4>uni-text[data-v-2ce57af1]{font-size:%?24?%}.img01[data-v-2ce57af1]{width:%?36?%;height:%?36?%;display:inline-block;border-radius:50%}.btn1[data-v-2ce57af1],.btn2[data-v-2ce57af1]{width:50%;color:#666;border-radius:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:%?30?%;background-color:#fff}.btn1[data-v-2ce57af1]:after,.btn2[data-v-2ce57af1]:after{border-radius:0;border:0}.bargain_footer[data-v-2ce57af1]{position:fixed;left:0;right:0;bottom:0;height:%?92?%;line-height:%?92?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#fff;border-top:%?2?% solid #e0dfdf}.btn1>uni-icon[data-v-2ce57af1],.btn2>uni-icon[data-v-2ce57af1]{margin-right:%?12?%}.btn1[data-v-2ce57af1]{border-right:%?2?% solid #e0dfdf}.bargain_footer .active[data-v-2ce57af1]{color:red;border-bottom:none}.addmore[data-v-2ce57af1]{width:100%;height:%?80?%;line-height:%?80?%;color:#666;font-size:%?24?%;text-align:center}",""])},cb94:function(i,a,t){"use strict";var e=function(){var i=this,a=i.$createElement,t=i._self._c||a;return i.$imgurl?t("div",[t("v-uni-view",{staticClass:"bargain-container"},[t("v-uni-form",[t("v-uni-view",{staticClass:"search_up"},[t("v-uni-input",{staticClass:"bargain_input",staticStyle:{"margin-top":"0"},attrs:{type:"text",placeholder:"请输入关键词","placeholder-style":"color:#858585;font-size:30rpx",value:""},on:{input:function(a){a=i.$handleEvent(a),i.getSearchKey(a)}}}),t("v-uni-image",{staticClass:"search_img",attrs:{src:i.$imgurl+"search.png"}})],1)],1),i.banners.length>0?t("v-uni-swiper",{attrs:{"indicator-dots":i.indicatorDots,autoplay:i.autoplay,interval:i.interval,duration:i.duration,circular:i.duration,current:i.swiperCurrent},on:{change:function(a){a=i.$handleEvent(a),i.swiperChange(a)}}},[i._l(i.banners,function(i,a){return[t("v-uni-swiper-item",[t("v-uni-image",{attrs:{src:i,mode:"aspectFill"}})],1)]})],2):i._e(),t("v-uni-view",{staticClass:"bargain"},i._l(i.list,function(a,e){return t("v-uni-view",{key:e,staticClass:"bargain_main"},[t("v-uni-image",{attrs:{src:a.thumb}}),t("v-uni-view",{staticClass:"bargain_text"},[t("v-uni-text",{staticClass:"bargain_title"},[i._v(i._s(a.title))]),t("v-uni-view",{staticClass:"bargain_title2"},[i._v("原价："),t("v-uni-text",{staticStyle:{"text-decoration":"line-through"}},[i._v("￥"+i._s(a.price))])],1),t("v-uni-view",{staticClass:"bargain_title3"},[t("v-uni-text",{staticStyle:{color:"#838383","font-size":"24rpx"}},[i._v("最低可砍至")]),t("v-uni-text",{style:"color:"+i.baseinfo.base_color2+";font-size:24rpx;"},[i._v("￥")]),t("v-uni-text",{style:"color:"+i.baseinfo.base_color2+";font-size:32rpx;font-weight:bold"},[i._v(i._s(a.miniPrice))])],1),t("v-uni-view",{staticClass:"bargain_title4"},[a.bargained_num>0&&0==a.avatar.length?[1==a.bargained_num?[t("v-uni-image",{staticClass:"img01",attrs:{src:i.$imgurl+"head01.jpg"}})]:[t("v-uni-image",{staticClass:"img01",attrs:{src:i.$imgurl+"head01.jpg"}}),t("v-uni-image",{staticClass:"img01",attrs:{src:i.$imgurl+"head02.jpg"}})]]:i._e(),a.bargained_num>0&&a.avatar.length>0?i._l(a.avatar,function(i,a){return t("v-uni-image",{key:a,staticClass:"img01",attrs:{src:i}})}):i._e(),t("v-uni-text",{style:"color:"+i.baseinfo.base_color2+";margin-left:10rpx;"+a.bargained_num==0?"display:none;":""},[i._v(i._s(0==a.bargained_num?"":a.bargained_num))]),t("v-uni-text",{staticStyle:{color:"#969696"}},[i._v(i._s(a.bargained_num>0?"人正在砍价":"发起一波砍价"))])],2),t("v-uni-button",{staticClass:"jion",style:"background-color: "+i.baseinfo.base_color2,attrs:{"data-id":a.id},on:{click:function(a){a=i.$handleEvent(a),i.goPage(a)}}},[i._v(i._s(1==a.bargained?"继续砍价":"立即参与"))])],1)],1)}),1),1==i.addmore?t("v-uni-view",{staticClass:"addmore",on:{click:function(a){a=i.$handleEvent(a),i.addmores(a)}}},[i._v("点击加载更多")]):i._e(),0==i.addmore?t("v-uni-view",{staticClass:"addmore"},[i._v("全部数据加载完成")]):i._e()],1),t("v-uni-view",{staticClass:"bargain_footer"},[t("v-uni-button",{staticClass:"btn1 active",style:"color:"+i.baseinfo.base_color2},[t("v-uni-icon",{staticClass:"iconfont icon-x-gouwu"}),t("v-uni-view",[i._v("砍价会场")])],1),t("v-uni-button",{staticClass:"btn2",on:{click:function(a){a=i.$handleEvent(a),i.goMybargain(a)}}},[t("v-uni-icon",{staticClass:"iconfont icon-x-geren1"}),t("v-uni-view",[i._v("我的砍价")])],1)],1)],1):i._e()},n=[];t.d(a,"a",function(){return e}),t.d(a,"b",function(){return n})}}]);