(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesExternal-jdGoods-jdGoods"],{"04dc":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.$imgurl?o("div",[o("v-uni-scroll-view",{staticClass:"order_nav",attrs:{"scroll-x":""}},[o("v-uni-view",{class:["order_nav_single",0==t.flag?"order_nav_single_on":""],attrs:{"data-flag":"0"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changflag.apply(void 0,arguments)}}},[t._v("热门")]),o("v-uni-view",{class:["order_nav_single",1==t.flag?"order_nav_single_on":""],attrs:{"data-flag":"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changflag.apply(void 0,arguments)}}},[t._v("最新")]),1==t.sort?[o("v-uni-view",{class:["order_nav_single",2==t.flag?"order_nav_single_on":""],attrs:{"data-flag":"2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changflag.apply(void 0,arguments)}}},[t._v("价格↑")])]:t._e(),2==t.sort?[o("v-uni-view",{class:["order_nav_single",2==t.flag?"order_nav_single_on":""],attrs:{"data-flag":"2"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changflag.apply(void 0,arguments)}}},[t._v("价格↓")])]:t._e()],2),o("v-uni-view",{staticClass:"show_page_goods",staticStyle:{background:"top left repeat #f3f3f3","background-size":"20%","margin-top":"11px",padding:"11px 5px","box-sizing":"border-box"}},[t.goods.length>0?t._l(t.goods,function(e,i){return o("v-uni-view",{key:i,staticClass:"display-inline-block mt-20",staticStyle:{width:"50%","box-sizing":"border-box",padding:"0 5px","margin-bottom":"11px"},attrs:{"data-linktype":"page","data-link":"/pages/showExtPro/showExtPro?id="+e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.redirectto.apply(void 0,arguments)}}},[o("v-uni-view",{staticStyle:{position:"relative",overflow:"hidden"}},[o("v-uni-image",{staticStyle:{display:"block",width:"100%",position:"relative",overflow:"hidden",height:"192px"},attrs:{src:e.goods_thumbnail_url,mode:"widthFix"}})],1),o("v-uni-view",{staticClass:"goodsBottom"},[o("v-uni-view",{staticClass:"goodsTitle_p",staticStyle:{color:"#000000"}},[t._v(t._s(e.name))]),o("v-uni-view",{staticStyle:{"font-size":"14px",color:"#ff5555",margin:"10rpx 0"}},[t._v("¥"),o("v-uni-text",{staticClass:"goodsPrice",staticStyle:{flex:"1"}},[t._v(t._s(e.min_group_price))]),e.coupon_discount?[o("v-uni-text",{staticClass:"btn_price"},[t._v("券"+t._s(e.coupon_discount))])]:t._e(),o("v-uni-text",{staticClass:"btn_price"},[t._v("赚"+t._s(e.yongj))])],2)],1)],1)}):[o("v-uni-image",{staticClass:"pageNotice",attrs:{src:t.$imgurl+"notice.png"}}),o("v-uni-view",{staticClass:"pageNoticeT"},[t._v("暂无内容")])]],2),1==t.baseinfo.tabbar_t?o("copyright",{attrs:{baseinfo:t.baseinfo}}):t._e(),o("myfooter",{attrs:{page_signs:t.page_signs,baseinfo:t.baseinfo}})],1):t._e()},a=[];o.d(e,"a",function(){return i}),o.d(e,"b",function(){return a})},"4c62":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,o("55dd");var i=o("7131"),a={data:function(){return{$imgurl:this.$imgurl,baseinfo:"",page:1,minHeight:180,morePro:!1,goods:[],flag:0,sort:1}},onLoad:function(t){var e=this;this.page_signs="/pagesExternal/jdGoods/jdGoods",this._baseMin(this);var o=0;t.fxsid&&(o=t.fxsid),this.fxsid=o,i.h5login(o,function(){e.getList()})},onReachBottom:function(){var t=this;this.page=this.page+1,uni.request({url:t.$baseurl+"doPageGetExternalGoods",data:{page:t.page,type:"jd",flag:t.flag,sort:t.sort,uniacid:t.$uniacid},success:function(e){e.data.data.length>0?t.goods=t.goods.concat(e.data.data):uni.showToast({title:"已经到底了",icon:"none"})}})},methods:{getList:function(){var t=this;uni.request({url:t.$baseurl+"doPageGetExternalGoods",data:{page:t.page,type:"jd",flag:t.flag,sort:t.sort,uniacid:t.$uniacid},success:function(e){t.goods=e.data.data}})},changflag:function(t){this.flag=t.currentTarget.dataset.flag,2==this.flag&&(1==this.sort?this.sort=2:this.sort=1),this.page=1,this.getList()},redirectto:function(t){uni.showToast({title:"请前往微信小程序中打开",icon:"none"})}}};e.default=a},"621c":function(t,e,o){var i=o("822e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=o("4f06").default;a("748121e7",i,!0,{sourceMap:!1,shadowMode:!1})},"6f98":function(t,e,o){"use strict";o.r(e);var i=o("04dc"),a=o("f0a6");for(var n in a)"default"!==n&&function(t){o.d(e,t,function(){return a[t]})}(n);o("aff1");var s=o("2877"),r=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"62e5240e",null);e["default"]=r.exports},"822e":function(t,e,o){e=t.exports=o("2350")(!1),e.push([t.i,".display-block[data-v-62e5240e]{display:block}.product_tb1[data-v-62e5240e]{width:%?140?%;height:%?140?%;position:absolute;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);background-color:#f55;left:%?-70?%;top:%?-70?%;color:#fff;font-size:%?28?%;text-align:center;line-height:%?240?%}.product_tb2[data-v-62e5240e]{width:%?80?%;height:%?80?%;line-height:%?80?%;text-align:center;border-radius:%?80?%;position:absolute;left:%?10?%;top:%?10?%;background-color:#ffb805;color:#fff;font-size:%?28?%}.product_tb3[data-v-62e5240e]{width:%?80?%;height:%?80?%;line-height:%?80?%;text-align:center;position:absolute;left:0;top:0;background-color:#19dbab;color:#fff;font-size:%?28?%}.product_tb4[data-v-62e5240e]{width:%?170?%;height:%?50?%;line-height:%?50?%;text-align:center;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);background-color:#ff7104;color:#fff;left:%?-50?%;top:%?10?%;position:absolute;font-size:%?28?%}.product_tb5[data-v-62e5240e]{width:%?90?%;height:%?40?%;line-height:%?40?%;text-align:center;background-color:#04a6f8;color:#fff;left:%?0?%;top:%?0?%;position:absolute;font-size:%?24?%}.goodsBottom[data-v-62e5240e]{padding:%?10?%;background:#fff;box-sizing:border-box}.goodsTitle_p[data-v-62e5240e]{font-size:%?28?%;-webkit-line-clamp:2;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;width:100%;word-break:break-all}.goodsPrice[data-v-62e5240e]{height:%?54?%\n\t/* font-size: 36rpx; */}.goodsSaleNum[data-v-62e5240e]{color:#838383;float:right;margin-top:%?10?%}.display-inline-block[data-v-62e5240e]{display:inline-block}.btn_price[data-v-62e5240e]{background-color:#dd524d;color:#fff;margin-left:%?10?%;padding:%?4?% %?16?%;box-sizing:border-box;border-radius:%?6?%;vertical-align:middle}.order_nav_single[data-v-62e5240e]{padding:%?21?% %?10?%;font-size:%?24?%;color:#434343;margin-right:%?20?%;display:inline-block;border-bottom:%?4?% solid #fff;width:28%;text-align:center}.order_nav_single_on[data-v-62e5240e]{color:#f3514f;border-bottom:%?4?% solid #f3514f}",""])},aff1:function(t,e,o){"use strict";var i=o("621c"),a=o.n(i);a.a},f0a6:function(t,e,o){"use strict";o.r(e);var i=o("4c62"),a=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(e,t,function(){return i[t]})}(n);e["default"]=a.a}}]);