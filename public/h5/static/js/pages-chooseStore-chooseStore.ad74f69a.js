(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-chooseStore-chooseStore"],{"08e4":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,".flex-row[data-v-55b57f38]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flex_bflow[data-v-55b57f38]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.store_bg[data-v-55b57f38]{padding:%?20?%}.storelists[data-v-55b57f38]{padding:%?20?%;background:#fff;border-radius:%?10?%;margin-bottom:%?20?%;position:relative;overflow:hidden}.store_title[data-v-55b57f38]{font-weight:700;color:#232323;font-size:%?28?%}.store_dizhi[data-v-55b57f38]{font-size:%?24?%;color:#969696;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding-top:%?20?%}.store_phone[data-v-55b57f38]{font-size:%?24?%;color:#969696;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?20?% 0;border-bottom:%?2?% solid #eee}.store_add[data-v-55b57f38]{font-size:%?22?%;margin-right:%?10?%}.store_time[data-v-55b57f38]{font-size:%?24?%;color:#969696;padding-top:%?20?%}.xuanz_gou[data-v-55b57f38]{width:0;height:0;border-color:rgba(0,0,0,0) #ed5c3f;border-width:0 %?60?% %?60?% 0;border-style:solid;position:absolute;top:0;right:0}.pageno_address[data-v-55b57f38]{display:block;margin:%?200?% auto %?60?%;width:%?280?%;height:%?140?%}",""])},"28f6":function(t,i,e){"use strict";var s=e("2c96"),a=e.n(s);a.a},"2c96":function(t,i,e){var s=e("08e4");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var a=e("4f06").default;a("10b7c174",s,!0,{sourceMap:!1,shadowMode:!1})},3339:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=e("55f5"),a={data:function(){return{$imgurl:this.$imgurl,storelists:"",stid:"",address_id:"",from_gwc:0,nav:1,type:"",gid:0,kuaidi:""}},onLoad:function(t){var i=this,e=t.gid;e&&(this.gid=e);var a=t.stid;a&&(this.stid=a);var o=t.address_id;o&&(this.address_id=o);var n=t.kuaidi;n&&(this.kuaidi=n);var r=t.from_gwc;r&&(this.from_gwc=r);var d=t.type;d&&(this.type=d);var l=t.nav;l&&(this.nav=l),this._baseMin(this);var c=0;t.fxsid&&(c=t.fxsid),this.fxsid=c,s.h5login(c,function(){i.getstores()})},onPullDownRefresh:function(){this.getstores()},methods:{getstores:function(){var t=this;uni.request({url:t.$host+"/api/MainWxapp/getTakeSelfShopList",data:{uniacid:t.$uniacid,type:this.type,gid:this.gid},success:function(i){t.storelists=i.data.shop_list},fail:function(t){console.log(t)}})},chooseStore:function(t){var i=t.currentTarget.dataset.stid,e=this.address_id,s=this.nav,a=this.from_gwc,o=this.type,n="";"mainShop"==o?n="/pages/order_down/order_down?from_gwc="+a+"&nav="+s+"&add_id="+e+"&shop_id="+i+"&currentTab=1":"flashSale"==o?n="/pagesFlashSale/order_dan/order_dan?addressid="+e+"&shop_id="+i+"&nav=2&id="+this.gid:"pt"==o?n="/pagesPt/order/order?addressid="+e+"&shop_id="+i+"&nav=2&id="+this.gid+"&kuaidi="+this.kuaidi:"bargain"==o&&(n="/pagesBargain/bargain_order/bargain_order?addressid="+e+"&shop_id="+i+"&nav=2&id="+this.gid),uni.navigateTo({url:n})}}};i.default=a},"4af6":function(t,i,e){"use strict";e.r(i);var s=e("5164"),a=e("5124");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("28f6");var n=e("2877"),r=Object(n["a"])(a["default"],s["a"],s["b"],!1,null,"55b57f38",null);i["default"]=r.exports},5124:function(t,i,e){"use strict";e.r(i);var s=e("3339"),a=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);i["default"]=a.a},5164:function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.$imgurl?e("v-uni-view",[t.storelists?e("v-uni-view",{staticClass:"store_bg"},t._l(t.storelists,function(i,s){return e("v-uni-view",{key:s,attrs:{"data-id":s,"data-stid":i.id},on:{click:function(i){i=t.$handleEvent(i),t.chooseStore(i)}}},[e("v-uni-view",{staticClass:"storelists"},[e("v-uni-view",{staticClass:"store_title"},[t._v(t._s(i.title))]),e("v-uni-view",{staticClass:"flex-row store_dizhi"},[e("v-uni-view",{staticClass:"iconfont icon-c-dizhishixin store_add"}),e("v-uni-view",{staticClass:"store_address"},[t._v(t._s(i.province+i.city+i.country))])],1),e("v-uni-view",{staticClass:"flex-row store_phone"},[e("v-uni-view",{staticClass:"iconfont icon-x-dianhua2 store_add"}),e("v-uni-view",{staticClass:"store_address"},[t._v(t._s(i.tel))])],1),i.times?e("v-uni-view",{staticClass:"store_time"},[e("v-uni-view",[t._v("营业时间："+t._s(i.times))])],1):t._e(),t.stid==i.id?e("v-uni-view",{staticClass:"xuanz_gou"},[e("v-uni-view",{staticClass:"iconfont icon-x-gou",staticStyle:{color:"#fff","font-size":"22rpx","margin-left":"32rpx","margin-top":"4rpx"}})],1):t._e()],1)],1)}),1):t._e(),t.storelists?t._e():e("v-uni-view",[e("v-uni-image",{staticClass:"pageno_address",attrs:{src:t.$imgurl+"no_store.png"}}),e("v-uni-view",{staticStyle:{"text-align":"center",color:"#666"}},[t._v("还没有自取门店哟~")])],1)],1):t._e()},a=[];e.d(i,"a",function(){return s}),e.d(i,"b",function(){return a})}}]);