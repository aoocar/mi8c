(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesShake-prize-prize"],{"0c64":function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;t("2c90");var a={data:function(){return{$imgurl:this.$imgurl,prizes:[]}},onPullDownRefresh:function(){uni.stopPullDownRefresh()},onLoad:function(i){var e=this;i.id&&(e.id=i.id),uni.setNavigationBarTitle({title:"奖品列表"}),uni.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:i.nav_color?i.nav_color:"#FEA049"}),e.getPriceList()},methods:{getPriceList:function(){var i=this;uni.request({url:i.$baseurl+"doPagegetPrizeList",data:{uniacid:i.$uniacid,id:i.id},success:function(e){i.prizes=e.data.data}})}}};e.default=a},1707:function(i,e,t){"use strict";t.r(e);var a=t("399f"),n=t("8d12");for(var r in n)"default"!==r&&function(i){t.d(e,i,function(){return n[i]})}(r);t("cd41");var o=t("2877"),s=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"faa26fca",null);e["default"]=s.exports},"399f":function(i,e,t){"use strict";var a=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[t("v-uni-view",{staticClass:"prizebox"},[i._l(i.prizes,function(e,a){return[t("v-uni-view",{key:a+"_0",staticClass:"prize_single hbj"},[t("v-uni-view",{staticClass:"prize_left"},[t("v-uni-image",{staticClass:"prize_single_left",attrs:{src:e.thumb,mode:"aspectFill"}}),t("v-uni-image",{staticClass:"ydjbg",attrs:{src:i.$imgurl+"ydjbg.png",mode:"aspectFill"}},[t("v-uni-view",[i._v(i._s(a+1))])],1)],1),t("v-uni-view",{staticClass:"prize_single_right"},[t("v-uni-view",{staticClass:"prize_title"},[i._v(i._s(e.detail))]),t("v-uni-view",{staticClass:"prize_count hbj"},[t("v-uni-view",{staticClass:"prize_count_view flex1"},[i._v("数量："+i._s(e.total))]),t("v-uni-view",{staticClass:"prize_count_view"},[i._v("库存："+i._s(e.storage))])],1)],1)],1)]})],2)],1)},n=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return n})},"8d12":function(i,e,t){"use strict";t.r(e);var a=t("0c64"),n=t.n(a);for(var r in a)"default"!==r&&function(i){t.d(e,i,function(){return a[i]})}(r);e["default"]=n.a},b12d:function(i,e,t){var a=t("b41d");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=t("4f06").default;n("76b08096",a,!0,{sourceMap:!1,shadowMode:!1})},b41d:function(i,e,t){e=i.exports=t("2350")(!1),e.push([i.i,"uni-page-body[data-v-faa26fca]{background:#fff}.hbj[data-v-faa26fca]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex1[data-v-faa26fca]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.prizebox[data-v-faa26fca]{padding:0 %?30?%}.prize_single[data-v-faa26fca]{padding:%?50?% 0;border-bottom:%?2?% solid #eee}.prize_left[data-v-faa26fca]{border-radius:%?12?%;overflow:visible;position:relative}.prize_single_left[data-v-faa26fca]{width:%?124?%;height:%?124?%;border-radius:%?12?%;display:block}.ydjbg[data-v-faa26fca]{width:%?44?%;height:%?44?%;position:absolute;right:%?-22?%;top:%?-22?%}.ydjbg uni-view[data-v-faa26fca]{text-align:center;color:#5a2300;font-size:%?22?%;position:absolute;left:%?12?%;top:%?12?%;font-family:Arial,Helvetica,sans-serif}.prize_single_right[data-v-faa26fca]{width:%?530?%;margin-left:%?36?%}.prize_title[data-v-faa26fca]{font-size:%?30?%;color:#434343;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;height:%?44?%;line-height:%?44?%}.prize_count[data-v-faa26fca]{margin-top:%?20?%}.prize_count_view[data-v-faa26fca]{font-size:%?24?%;color:#838383}body.?%PAGE?%[data-v-faa26fca]{background:#fff}",""])},cd41:function(i,e,t){"use strict";var a=t("b12d"),n=t.n(a);n.a}}]);