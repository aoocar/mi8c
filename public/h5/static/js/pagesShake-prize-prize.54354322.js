(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesShake-prize-prize"],{"50b3":function(e,i,t){i=e.exports=t("2350")(!1),i.push([e.i,"uni-page-body[data-v-c8cce4f0]{background:#fff}.hbj[data-v-c8cce4f0]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex1[data-v-c8cce4f0]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.prizebox[data-v-c8cce4f0]{padding:0 %?30?%}.prize_single[data-v-c8cce4f0]{padding:%?50?% 0;border-bottom:%?2?% solid #eee}.prize_left[data-v-c8cce4f0]{border-radius:%?12?%;overflow:visible;position:relative}.prize_single_left[data-v-c8cce4f0]{width:%?124?%;height:%?124?%;border-radius:%?12?%;display:block}.ydjbg[data-v-c8cce4f0]{width:%?44?%;height:%?44?%;position:absolute;right:%?-22?%;top:%?-22?%}.ydjbg uni-view[data-v-c8cce4f0]{text-align:center;color:#5a2300;font-size:%?22?%;position:absolute;left:%?12?%;top:%?12?%;font-family:Arial,Helvetica,sans-serif}.prize_single_right[data-v-c8cce4f0]{width:%?530?%;margin-left:%?36?%}.prize_title[data-v-c8cce4f0]{font-size:%?30?%;color:#434343;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;height:%?44?%;line-height:%?44?%}.prize_count[data-v-c8cce4f0]{margin-top:%?20?%}.prize_count_view[data-v-c8cce4f0]{font-size:%?24?%;color:#838383}body.?%PAGE?%[data-v-c8cce4f0]{background:#fff}",""])},"825d":function(e,i,t){"use strict";t.r(i);var a=t("99cc"),n=t("9582");for(var r in n)"default"!==r&&function(e){t.d(i,e,function(){return n[e]})}(r);t("b38bb");var c=t("2877"),o=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,"c8cce4f0",null);i["default"]=o.exports},9582:function(e,i,t){"use strict";t.r(i);var a=t("cf56"),n=t.n(a);for(var r in a)"default"!==r&&function(e){t.d(i,e,function(){return a[e]})}(r);i["default"]=n.a},"99cc":function(e,i,t){"use strict";var a=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",[t("v-uni-view",{staticClass:"prizebox"},[e._l(e.prizes,function(i,a){return[t("v-uni-view",{key:a+"_0",staticClass:"prize_single hbj"},[t("v-uni-view",{staticClass:"prize_left"},[t("v-uni-image",{staticClass:"prize_single_left",attrs:{src:i.thumb,mode:"aspectFill"}}),t("v-uni-image",{staticClass:"ydjbg",attrs:{src:e.$imgurl+"ydjbg.png",mode:"aspectFill"}},[t("v-uni-view",[e._v(e._s(a+1))])],1)],1),t("v-uni-view",{staticClass:"prize_single_right"},[t("v-uni-view",{staticClass:"prize_title"},[e._v(e._s(i.detail))]),t("v-uni-view",{staticClass:"prize_count hbj"},[t("v-uni-view",{staticClass:"prize_count_view flex1"},[e._v("数量："+e._s(i.total))]),t("v-uni-view",{staticClass:"prize_count_view"},[e._v("库存："+e._s(i.storage))])],1)],1)],1)]})],2)],1)},n=[];t.d(i,"a",function(){return a}),t.d(i,"b",function(){return n})},b38bb:function(e,i,t){"use strict";var a=t("d736"),n=t.n(a);n.a},cf56:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;t("55f5");var a={data:function(){return{$imgurl:this.$imgurl,prizes:[]}},onPullDownRefresh:function(){uni.stopPullDownRefresh()},onLoad:function(e){var i=this;e.id&&(i.id=e.id),uni.setNavigationBarTitle({title:"奖品列表"}),uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:e.nav_color?e.nav_color:"#FEA049"}),i.getPriceList()},methods:{getPriceList:function(){var e=this;uni.request({url:e.$baseurl+"doPagegetPrizeList",data:{uniacid:e.$uniacid,id:e.id},success:function(i){e.prizes=i.data.data}})}}};i.default=a},d736:function(e,i,t){var a=t("50b3");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=t("4f06").default;n("3bdcf17d",a,!0,{sourceMap:!1,shadowMode:!1})}}]);