(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesShake-integral_collect-integral_collect"],{"0af9":function(i,t,e){"use strict";e.r(t);var a=e("c3a0"),n=e.n(a);for(var l in a)"default"!==l&&function(i){e.d(t,i,function(){return a[i]})}(l);t["default"]=n.a},"18a3":function(i,t,e){"use strict";var a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return i.$imgurl?e("div",[e("v-uni-image",{staticClass:"jflqbanner",attrs:{src:i.$imgurl+"jflqbanner.jpg",mode:"aspectFill"}}),e("v-uni-view",{staticClass:"integral_collectbox"},[i._l(i.guiz,function(t,a){return[e("v-uni-view",{key:a+"_0",staticClass:"integral_single"},[e("v-uni-view",{staticClass:"hbj"},[e("v-uni-image",{staticClass:"px",attrs:{src:i.$imgurl+"px.png",mode:"aspectFill"}}),e("v-uni-view",[i._v(i._s(a+1))]),e("v-uni-view",{staticClass:"integral_title"},[i._v(i._s(t.title))]),e("v-uni-view",{staticClass:"flex1"}),e("v-uni-view",{staticClass:"integral_jf"},[i._v("+"+i._s(t.score))])],1),e("v-uni-view",{staticClass:"integral_single-view2 hbj2"},[e("v-uni-view",{staticClass:"integral_intro"},[i._v(i._s(t.descp))]),e("v-uni-view",{staticClass:"flex1"}),e("v-uni-navigator",{attrs:{url:t.link}},[e("v-uni-view",{staticClass:"integral_btn"},[i._v("去看看")])],1)],1)],1)]})],2)],1):i._e()},n=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return n})},"5af5":function(i,t,e){t=i.exports=e("2350")(!1),t.push([i.i,"uni-page-body[data-v-3d7a582d]{background-color:#fff}.hbj[data-v-3d7a582d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.hbj2[data-v-3d7a582d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.flex1[data-v-3d7a582d]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.jflqbanner[data-v-3d7a582d]{width:100%;height:%?331?%;display:block;position:relative}.integral_collectbox[data-v-3d7a582d]{margin-top:%?20?%;padding:0 %?30?%}.integral_single[data-v-3d7a582d]{padding:%?45?% 0;border-bottom:%?2?% dashed #eee}.px[data-v-3d7a582d]{width:%?47?%;height:%?45?%;display:block;position:relative}.px uni-view[data-v-3d7a582d]{width:%?47?%;height:%?45?%;position:absolute;left:0;top:0;line-height:%?45?%;text-align:center;font-size:%?24?%;font-family:Arial;color:#fff}.integral_title[data-v-3d7a582d]{font-size:%?30?%;color:#434343;margin-left:%?12?%;width:%?420?%;height:%?44?%;line-height:%?44?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.integral_jf[data-v-3d7a582d]{font-size:%?30?%;color:#f85a46;font-family:Arial}.integral_single-view2[data-v-3d7a582d]{margin-top:%?10?%}.integral_intro[data-v-3d7a582d]{width:%?479?%;height:%?100?%;line-height:%?50?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}.integral_btn[data-v-3d7a582d]{font-size:%?30?%;color:#fff;width:%?146?%;height:%?52?%;line-height:%?52?%;background:-webkit-linear-gradient(left,#f63f45,#f96146);background:linear-gradient(90deg,#f63f45 0,#f96146);text-align:center;border-radius:%?52?%}body.?%PAGE?%[data-v-3d7a582d]{background-color:#fff}",""])},6608:function(i,t,e){"use strict";e.r(t);var a=e("18a3"),n=e("0af9");for(var l in n)"default"!==l&&function(i){e.d(t,i,function(){return n[i]})}(l);e("91e1");var r=e("2877"),o=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"3d7a582d",null);t["default"]=o.exports},"91e1":function(i,t,e){"use strict";var a=e("a7cc"),n=e.n(a);n.a},a7cc:function(i,t,e){var a=e("5af5");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("686942d0",a,!0,{sourceMap:!1,shadowMode:!1})},c3a0:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;e("7131");var a={data:function(){return{$imgurl:this.$imgurl,guiz:[]}},onLoad:function(i){var t=this;wx.setNavigationBarTitle({title:"获取积分"}),this._baseMin(this),t.scoreget()},methods:{scoreget:function(){var i=this;uni.request({url:i.$baseurl+"dopagescoreget",data:{uniacid:i.$uniacid},success:function(t){i.guiz=t.data.data.guiz}})}}};t.default=a}}]);