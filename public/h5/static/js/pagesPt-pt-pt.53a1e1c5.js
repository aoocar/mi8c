(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesPt-pt-pt"],{"013b":function(n,t,i){"use strict";var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return n.$imgurl?i("v-uni-view",[i("v-uni-view",{staticClass:"ptTop"},[i("v-uni-view",{staticClass:"ptTopL"},[i("v-uni-image",{attrs:{src:n.products.thumb,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"ptTopR"},[i("v-uni-view",{staticClass:"ptTopR1"},[n._v(n._s(n.products.title))]),i("v-uni-view",{staticClass:"ptTopR2"},[n._v(n._s(n.share.pt_min)+"-"+n._s(n.share.pt_max)+"人团 已成团"+n._s(n.products.pt_num)+"个")]),i("v-uni-view",{staticClass:"ptTopR3"},[n._v("￥"+n._s(n.products.price)),i("span",[n._v("￥"+n._s(n.products.mark_price))])])],1)],1),i("v-uni-view",{staticClass:"box_view1",staticStyle:{"padding-bottom":"0"}},n._l(n.labels,function(t,e){return i("v-uni-view",{key:e},[i("v-uni-image",{staticStyle:{width:"28rpx","margin-right":"6rpx"},attrs:{src:n.$imgurl+"change_h1.png",mode:"widthFix"}}),n._v(n._s(t))],1)}),1),i("v-uni-view",{staticClass:"box_user"},n._l(n.lists,function(t,e){return i("v-uni-view",{key:e,staticClass:"userImg"},[0==e?i("v-uni-view",{staticClass:"ttdz"},[n._v("团长")]):n._e(),i("v-uni-image",{staticClass:"box_user_img",attrs:{src:t.infoimg}})],1)}),1),i("v-uni-view",{staticClass:"box"},[n.now>=n.share.pt_min?i("v-uni-view",{staticClass:"box_text1"},[n._v("拼团成功，还有"),i("span",[n._v(n._s(n.share.pt_max-n.now))]),n._v("个名额")]):n._e(),n.now<n.share.pt_min?i("v-uni-view",{staticClass:"box_text1"},[n._v("拼团中，还差"),i("span",[n._v(n._s(n.share.pt_min-n.now))]),n._v("人即可成团")]):n._e(),n.now==n.max?i("v-uni-view",[n._v("已结束")]):n._e(),n.now<n.max?i("v-uni-view",[n._v("剩余 "+n._s(n.daojishi)+" 结束")]):n._e()],1),i("v-uni-button",{staticClass:"box_view12",attrs:{"open-type":"share"}},[n._v("立即邀请亲友参团")]),i("v-uni-view",{staticClass:"box_view12",staticStyle:{"border-radius":"10rpx",padding:"20rpx 0"},on:{click:function(t){t=n.$handleEvent(t),n.ptorder(t)}}},[n._v("我的拼团订单")]),i("v-uni-view",{staticClass:"jdt"},[i("v-uni-view",{staticClass:"jdt_bottom"},[i("v-uni-view",{staticClass:"yuan1 c-fff bg-FC4750"},[n._v("1")]),i("v-uni-view",{staticClass:"gang1 ml-1 bg-FC4750"}),i("v-uni-view",{staticClass:"gang1 bg-FC4750"}),i("v-uni-view",{staticClass:"yuan1 ml-1 c-fff bg-FC4750"},[n._v("2")]),i("v-uni-view",{staticClass:"gang1 ml-1 bg-FC4750"}),i("v-uni-view",{staticClass:"gang1 bg-FC4750"}),i("v-uni-view",{staticClass:"yuan1 ml-1 c-fff bg-FC4750"},[n._v("3")]),n.now<n.share.pt_min?i("v-uni-view",{staticClass:"gang1 ml-1 bg-F6F6F6"}):n._e(),n.now<n.share.pt_min?i("v-uni-view",{staticClass:"gang1 bg-F6F6F6"}):n._e(),n.now<n.share.pt_min?i("v-uni-view",{staticClass:"yuan1 ml-1 c-FC4750 bg-F6F6F6"},[n._v("4")]):n._e(),n.now>=n.share.pt_min?i("v-uni-view",{staticClass:"gang1 ml-1 bg-FC4750"}):n._e(),n.now>=n.share.pt_min?i("v-uni-view",{staticClass:"gang1 bg-FC4750"}):n._e(),n.now>=n.share.pt_min?i("v-uni-view",{staticClass:"yuan1 ml-1 c-fff bg-FC4750"},[n._v("4")]):n._e(),i("v-uni-view",{staticClass:"jsyq c-FC4750"},[n._v("接受邀请")]),i("v-uni-view",{staticClass:"yzyh c-FC4750"},[n._v("参加拼团")]),i("v-uni-view",{staticClass:"zfct c-FC4750"},[n._v("支付参团")]),n.now<n.share.pt_min?i("v-uni-view",{staticClass:"ptcg"},[n._v("拼团成功等待发货")]):n._e(),n.now>=n.share.pt_min?i("v-uni-view",{staticClass:"ptcg c-FC4750"},[n._v("拼团成功等待发货")]):n._e()],1)],1),1==n.hx?i("v-uni-view",{staticStyle:{padding:"10rpx","box-sizing":"border-box"}},[1==n.hxinfo.flag?[n._v("核销信息："+n._s(n.hxinfo.store))]:n._e(),[n._v("核销信息：门店："+n._s(n.hxinfo.store)+"，店员："+n._s(n.hxinfo.staff))]],2):n._e(),1==n.showhx?i("v-uni-view",{staticClass:"hx_con"},[i("v-uni-view",{staticClass:"mask",on:{click:function(t){t=n.$handleEvent(t),n.hxhide(t)}}}),i("v-uni-view",{staticClass:"hexiao"},[i("v-uni-view",{staticClass:"hx_tit"},[n._v("请输入核销密码")]),i("v-uni-view",[i("v-uni-input",{staticClass:"hx_ipt",attrs:{password:"",type:"number",value:n.hxmm},on:{input:function(t){t=n.$handleEvent(t),n.hxmmInput(t)}}})],1),i("v-uni-view",[i("v-uni-button",{staticClass:"hx_btn",staticStyle:{},on:{click:function(t){t=n.$handleEvent(t),n.hxmmpass(t)}}},[n._v("确认消费")])],1)],1),i("v-uni-view",{staticClass:"hx_c",on:{click:function(t){t=n.$handleEvent(t),n.hxhide(t)}}},[i("v-uni-image",{attrs:{src:n.$imgurl+"c.png",mode:"aspectFit"}})],1)],1):n._e(),1==n.baseinfo.tabbar_t?i("copyright",{attrs:{baseinfo:n.baseinfo}}):n._e(),i("myfooter",{attrs:{page_signs:n.page_signs,baseinfo:n.baseinfo}})],1):n._e()},a=[];i.d(t,"a",function(){return e}),i.d(t,"b",function(){return a})},"9c5d":function(n,t,i){t=n.exports=i("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* pages/pt/pt.wxss */uni-page-body[data-v-cf6e3cce]{background-color:#fff}.box[data-v-cf6e3cce]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.ptTop[data-v-cf6e3cce]{padding:%?20?%}.ptTopL[data-v-cf6e3cce]{float:left;margin-right:%?20?%}.ptTopL uni-image[data-v-cf6e3cce]{width:%?220?%}.ptTopR .ptTopR1[data-v-cf6e3cce]{font-size:%?32?%;color:#222;margin:%?10?% 0 %?20?% 0;line-height:%?46?%;height:%?92?%}.ptTopR .ptTopR2[data-v-cf6e3cce]{color:#666;font-size:%?24?%;margin-bottom:%?10?%}.ptTopR .ptTopR3[data-v-cf6e3cce]{color:#ff4a4a;font-size:%?30?%;font-weight:700}.ptTopR .ptTopR3 span[data-v-cf6e3cce]{text-decoration:line-through;color:#ddd;padding-left:%?10?%;font-weight:400}.box_text1[data-v-cf6e3cce]{color:#000;font-size:%?30?%;font-weight:700;margin-top:%?20?%}.box_text1 span[data-v-cf6e3cce]{color:#ff4a4a;padding:0 %?10?%}.box_user[data-v-cf6e3cce]{margin-top:%?20?%;text-align:center;padding:%?20?%}.userImg[data-v-cf6e3cce]{position:relative;overflow:visible;display:inline-block}.box_user_img[data-v-cf6e3cce]{width:%?80?%;height:%?80?%;border-radius:%?80?%;margin-right:%?20?%;border:1px solid #d8d8d8;-webkit-box-sizing:border-box;box-sizing:border-box}.box_view1[data-v-cf6e3cce]{background:#f3f3f3;margin-top:%?20?%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.box_view1>uni-view[data-v-cf6e3cce]{width:33.33%;display:inline-block;padding-right:%?10?%;margin-bottom:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.jdt[data-v-cf6e3cce]{padding:%?20?%;background-color:#fff}.jdt_head[data-v-cf6e3cce]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.jdt_head_text1[data-v-cf6e3cce]{font-size:%?32?%;color:#fc4750;font-weight:700}.jdt_head_text2[data-v-cf6e3cce]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?30?%;text-align:right}.jdt_bottom[data-v-cf6e3cce]{margin-top:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:0 %?44?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;padding-bottom:%?100?%}.yuan1[data-v-cf6e3cce]{width:%?50?%;height:%?50?%;border-radius:%?48?%;line-height:%?50?%;text-align:center;font-size:%?30?%;z-index:999}.gang1[data-v-cf6e3cce]{width:%?75?%;height:%?20?%}.ml-1[data-v-cf6e3cce]{margin-left:%?-1?%}.c-fff[data-v-cf6e3cce]{color:#fff}.c-FC4750[data-v-cf6e3cce]{color:#fc4750}.bg-FC4750[data-v-cf6e3cce]{background-color:#fc4750}.bg-F6F6F6[data-v-cf6e3cce]{background-color:#f6f6f6}.jsyq[data-v-cf6e3cce]{width:%?120?%;font-size:%?26?%;position:absolute;top:%?60?%;left:0;text-align:center}.yzyh[data-v-cf6e3cce]{width:%?120?%;font-size:%?26?%;position:absolute;top:%?60?%;left:%?200?%;text-align:center}.zfct[data-v-cf6e3cce]{width:%?120?%;font-size:26rx;position:absolute;top:%?60?%;left:%?390?%}.ptcg[data-v-cf6e3cce]{width:%?120?%;font-size:26rx;position:absolute;top:%?60?%;left:%?580?%}.ttdz[data-v-cf6e3cce]{position:absolute;background-color:#ffd13a;color:#fff;padding:0 %?4?%;border-radius:%?4?%;font-size:%?18?%;right:0;top:0}.box_view12[data-v-cf6e3cce]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;background:#ff4a4a;color:#fff;text-align:center;margin:%?20?% auto %?40?%;padding:%?5?%;width:80%;font-size:%?28?%}.hx_con[data-v-cf6e3cce]{position:fixed;left:0;top:0;width:100%;height:100%;z-index:99999}.hexiao[data-v-cf6e3cce]{border-radius:%?9?%;width:%?600?%;height:%?300?%;background:#fff;position:absolute;left:%?75?%;top:30%;z-index:99999}.hexiao .hx_tit[data-v-cf6e3cce]{margin:%?20?% %?20?% %?10?%;text-align:center}.hexiao .hx_ipt[data-v-cf6e3cce]{margin:%?20?%;height:%?30?%;line-height:%?30?%;border:1px solid #eee}.hexiao .hx_btn[data-v-cf6e3cce]{background-color:#f90;color:#fff;margin:%?20?%;margin-top:%?0?%;margin-bottom:%?20?%;font-size:%?28?%}.hx_c[data-v-cf6e3cce]{width:%?50?%;height:%?50?%;position:absolute;top:%?700?%;left:%?350?%;z-index:99999}.hx_c uni-image[data-v-cf6e3cce]{width:100%;height:100%;display:block}body.?%PAGE?%[data-v-cf6e3cce]{background-color:#fff}",""])},b145:function(n,t,i){"use strict";var e=i("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=e(i("e814")),o=i("55f5"),s={data:function(){return{$imgurl:this.$imgurl,baseinfo:"",imgUrls:[],indicatorDots:!0,autoplay:!0,interval:5e3,duration:1e3,hx:0,products:"",share:"",lists:"",min:"",max:"",now:"",overtime:"",labels:"",hxinfo:"",daojishi:"",fxsid:"",shareid:""}},onLoad:function(n){var t=this;n.id&&(this.gid=n.id),this._baseMin(this);var i=n.shareid;this.shareid=i,n.userid&&(this.userid=n.userid);var e=0;n.fxsid&&(e=n.fxsid,this.fxsid=e),o.h5login(e,function(){t.getpingt()})},onPullDownRefresh:function(){this.getpingt(),uni.stopPullDownRefresh()},onShareAppMessage:function(){var n=this,t=n.shareid,i=n.products,e="/pagesPt/products/products?shareid="+t+"&id="+i.id;return{title:i.title,path:e}},methods:{getpingt:function(){var n=this,t=n.shareid;uni.request({url:n.$baseurl+"doPagepingtuan",data:{shareid:t,uniacid:n.$uniacid,suid:uni.getStorageSync("suid")},success:function(t){var i=t.data.data.products,e=t.data.data.lists,a=t.data.data.share,o=t.data.data.products.pt_min,s=t.data.data.products.pt_max,c=e.length,r=t.data.data.hx;if(1==r){var d=t.data.data.hxinfo;n.hxinfo=d}var l={};l["infoimg"]=n.$imgurl+"pe.png";for(var f=[],v=0;v<a.pt_max;v++)e[v]?f.push(e[v]):f.push(l);n.products=i,n.share=a,n.lists=f,n.min=o,n.max=s,n.now=c,n.overtime=t.data.data.overtime,n.labels=t.data.data.labels,n.hxinfo=d,n.hx=r,n.dodaojishi()}})},dodaojishi:function(){var n,t,i,e,o=this,s=o.overtime,c=[],r=new Date,d=r.getTime(),l=1e3*(0,a.default)(s),f=l-d;0==f&&clearInterval(v),f>=0?(n=Math.floor(f/1e3/60/60/24),t=Math.floor(f/1e3/60/60%24)<10?"0"+Math.floor(f/1e3/60/60%24):Math.floor(f/1e3/60/60%24),i=Math.floor(f/1e3/60%60)<10?"0"+Math.floor(f/1e3/60%60):Math.floor(f/1e3/60%60),e=Math.floor(f/1e3%60)<10?"0"+Math.floor(f/1e3%60):Math.floor(f/1e3%60)):(n=0,t=0,i=0,e=0),c=n+"天"+t+":"+i+":"+e,o.daojishi=c;var v=setTimeout(function(){o.dodaojishi()},1e3)},ptorder:function(){uni.navigateTo({url:"/pagesPt/orderlist/orderlist"})}}};t.default=s},d7d3:function(n,t,i){var e=i("9c5d");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var a=i("4f06").default;a("30e7578d",e,!0,{sourceMap:!1,shadowMode:!1})},e520f:function(n,t,i){"use strict";var e=i("d7d3"),a=i.n(e);a.a},f896:function(n,t,i){"use strict";i.r(t);var e=i("013b"),a=i("fc15");for(var o in a)"default"!==o&&function(n){i.d(t,n,function(){return a[n]})}(o);i("e520f");var s=i("2877"),c=Object(s["a"])(a["default"],e["a"],e["b"],!1,null,"cf6e3cce",null);t["default"]=c.exports},fc15:function(n,t,i){"use strict";i.r(t);var e=i("b145"),a=i.n(e);for(var o in e)"default"!==o&&function(n){i.d(t,n,function(){return e[n]})}(o);t["default"]=a.a}}]);