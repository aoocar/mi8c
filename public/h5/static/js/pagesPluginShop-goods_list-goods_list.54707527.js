(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesPluginShop-goods_list-goods_list"],{"40ff":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("7131"),o={data:function(){return{cid:0,$imgurl:this.$imgurl,cates:[],cname:"",goodsL:[],tel:""}},onLoad:function(t){var e=this;uni.setNavigationBarTitle({title:"商品列表"}),this._baseMin(this);var i=0;t.sid&&(i=t.sid),this.sid=i;var o=0;t.fxsid&&(o=t.fxsid),t.tel&&(this.tel=t.tel),a.h5login(o,function(){e.getStoreData()})},onPullDownRefresh:function(){this.cid=0,this.getStoreData(),uni.stopPullDownRefresh()},methods:{goDetail:function(t){uni.navigateTo({url:"/pagesPluginShop/goods_detail/goods_detail?id="+t.currentTarget.dataset.id+"&tel="+this.tel})},searchInput:function(t){this.searchKey=t.detail.value},searchR:function(){uni.navigateTo({url:"/pages/search/search?sid="+this.sid+"&title="+this.searchKey})},changeData:function(t){this.cid=t.currentTarget.dataset.cid,this.getStoreData()},getStoreData:function(){var t=this;uni.request({url:this.$baseurl+"doPageGetStoreData",data:{sid:this.sid,cid:this.cid},success:function(e){t.cates=e.data.data.cates,t.cid=e.data.data.cid,t.goodsL=e.data.data.goodsL}})}}};e.default=o},4253:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-form",{staticClass:"searchBox",attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.searchR.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"list_search"},[i("v-uni-view",{staticClass:"iconfont icon-x-sousuo1 ssk-icon"}),i("v-uni-input",{staticClass:"input-style",attrs:{type:"text",name:"keywords","confirm-type":"search",placeholder:"请输入关键词","placeholder-style":"background:#f0f0f0;color:#999"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.searchInput.apply(void 0,arguments)},confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.searchR.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"goods"},[i("v-uni-view",{staticClass:"menu-wrapper"},[i("v-uni-scroll-view",{staticClass:"sr_y",staticStyle:{height:"100%"},attrs:{"scroll-y":""}},[t._l(t.cates,function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"menu-item current",class:e.cid==t.cid||0==t.cid?"active":"",attrs:{"data-cid":e.cid},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeData.apply(void 0,arguments)}}},[t._v(t._s(e.name))])]})],2)],1),i("v-uni-view",{staticClass:"foods-wrapper"},[i("v-uni-scroll-view",{staticClass:"sr_y",staticStyle:{height:"100%"},attrs:{"scroll-y":""}},t._l(t.goodsL,function(e,a){return i("v-uni-view",{key:a,staticClass:"food-grouping"},[i("v-uni-view",{staticClass:"xnerkd"},[t._v(t._s(e.cname))]),t._l(e.list,function(e,a){return i("v-uni-view",{key:a,staticClass:"foods-item"},[i("v-uni-image",{staticClass:"icon",attrs:{src:e.thumb}}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"intro",staticStyle:{height:"30rpx"}},[t._v(t._s(e.descs))]),i("v-uni-view",{staticClass:"price"},[t._v("¥"+t._s(e.sellprice))])],1),i("v-uni-view",{staticClass:"cartcontrol-wrap"},[i("v-uni-view",{staticClass:"xguige",staticStyle:{background:"#0061CE"},attrs:{"data-id":e.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goDetail.apply(void 0,arguments)}}},[t._v("购买")])],1)],1)})],2)}),1)],1)],1)],1)},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})},"57c9":function(t,e,i){"use strict";i.r(e);var a=i("4253"),o=i("b904");for(var s in o)"default"!==s&&function(t){i.d(e,t,function(){return o[t]})}(s);i("71ce");var n=i("2877"),r=Object(n["a"])(o["default"],a["a"],a["b"],!1,null,"315b41e2",null);e["default"]=r.exports},"71ce":function(t,e,i){"use strict";var a=i("cc61"),o=i.n(a);o.a},b904:function(t,e,i){"use strict";i.r(e);var a=i("40ff"),o=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=o.a},ca06:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".goods[data-v-315b41e2]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;overflow:hidden;height:calc(100vh - 51px);\n\t\t/* padding-bottom: 35px; */background:#fff;border-top:%?2?% solid #f9f9f9}.menu-wrapper[data-v-315b41e2]{-webkit-box-flex:0;-webkit-flex:0 0 100px;flex:0 0 100px;width:100px;background:#f9f9f9;height:100%}.sr_y[data-v-315b41e2] ::-webkit-scrollbar{display:none}.menu-item[data-v-315b41e2]{display:table;height:%?92?%;width:100px;padding:0 12px;box-sizing:border-box;line-height:%?90?%;color:#999;font-size:.8rem;text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:left;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.menu-item.current[data-v-315b41e2]{color:#666;background:#f9f9f9;text-align:center;font-size:%?30?%;height:%?92?%;line-height:%?92?%;border-bottom:%?2?% solid #efefef}.menu-item.current.active[data-v-315b41e2]{color:#494949;background:#fff}.foods-wrapper[data-v-315b41e2]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?30?%;box-sizing:border-box}.foods-item[data-v-315b41e2]{display:-webkit-box;display:-webkit-flex;display:flex;padding-bottom:%?30?%;border-bottom:1px solid #f8f8f8;padding-top:%?30?%}.food-grouping:last-child .foods-item[data-v-315b41e2]:last-child{border:none;margin-bottom:0}.foods-item .icon[data-v-315b41e2]{width:%?118?%;height:%?118?%;-webkit-box-flex:0;-webkit-flex:0 0 57px;flex:0 0 57px;margin-right:10px;vertical-align:middle}.foods-item .title[data-v-315b41e2]{color:#333;font-size:%?28?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.foods-item .intro[data-v-315b41e2]{color:#999;font-size:%?24?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.foods-item .price[data-v-315b41e2]{color:red;font-size:%?28?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.foods-item .content[data-v-315b41e2]{width:%?248?%}.xnerkd[data-v-315b41e2]{padding:%?8?% %?20?%;font-size:%?24?%;background:#f9f9f9;color:#737373}.cartcontrol-wrap[data-v-315b41e2]{text-align:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:relative}\n\n\t/* \t.gw{\n\t\twidth: 40rpx;\n\t\theight: 40rpx;\n\t\tposition: absolute;\n\t\tbottom: 0;\n\t\tright: 20rpx;\n\t} */.xguige[data-v-315b41e2]{color:#fff;font-size:%?22?%;padding:%?6?% %?20?%;border-radius:%?22?%;position:absolute;bottom:0;right:%?20?%;width:25px}.input-style[data-v-315b41e2]{\n\t\t/* height: 0.5rem; */\n\t\t/* width: 600rpx; */position:absolute;left:%?80?%;top:0;right:0;bottom:0;background-color:#f0f0f0!important}.searchBox[data-v-315b41e2]{display:block;padding:%?20?%;box-sizing:border-box;background:#fff}.list_search[data-v-315b41e2]{position:relative;width:100%;height:%?60?%;background-color:#f0f0f0;overflow:hidden;border-radius:%?50?%;border:%?2?% solid #f9f9f9;position:relative;padding:0 %?20?%;box-sizing:border-box}.ssk-icon[data-v-315b41e2]{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:%?20?%}",""])},cc61:function(t,e,i){var a=i("ca06");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("7ad46a1c",a,!0,{sourceMap:!1,shadowMode:!1})}}]);