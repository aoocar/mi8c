(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesPluginShop-list-list"],{"2ac4":function(n,t,e){t=n.exports=e("2350")(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*总菜单容器*/.menu[data-v-d6ec1a8e]{display:block;height:38px}\n/*一级菜单*/.selectarea[data-v-d6ec1a8e]{margin-bottom:%?20?%;background:#fff}.menu dt[data-v-d6ec1a8e]{font-size:15px;float:left;width:33%;height:38px;border-right:%?2?% solid #eee;border-bottom:%?2?% solid #eee;text-align:center;background-color:#fff;color:#5a5a5a;line-height:38px}\n/*二级菜单外部容器样式*/.menu dd[data-v-d6ec1a8e]{position:absolute;width:100%;top:39px;left:0;z-index:999}ul[data-v-d6ec1a8e]{padding:0}\n/*二级菜单普通样式*/.menu li[data-v-d6ec1a8e]{font-size:14px;line-height:34px;color:#575757;height:34px;display:block;padding-left:8px;background-color:#fff;border-bottom:%?2?% solid #eee}",""])},"3e58":function(n,t,e){"use strict";var i=e("e4f1"),a=e.n(i);a.a},"5b45":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,e("7f7f");var i=e("55f5");function a(){return["hidden","hidden","hidden","hidden"]}function o(){return["ordinary","ordinary","ordinary","ordinary"]}function s(){return["","","","",""]}var u="",c=[["","","","",""],["","","","",""],["","","","",""],["","","","",""],["","","","",""]],r={data:function(){return{$imgurl:this.$imgurl,page_sign:"shopsList",page:1,morePro:!1,baseinfo:[],cid:0,cate:[],showMenu:!1,subMenuDisplay:a(),subMenuHighLight:c,cover:u,menuCss:o(),rotateRight:s(),menuContent:[{title:"全部分类",content:["全部分类"]},{title:"综合排序",content:["综合排序","距离最近"]},{title:"所有商家",content:["所有商家","优选商家"]}],content:[],indexListHouse:[],lastIndex:null,times:1,longitude:"",latitude:"",shopList:""}},onLoad:function(n){var t=this;uni.setNavigationBarTitle({title:"多商户分类列表"});var e=n.id;this.id=e,n.cid&&(this.cid=n.cid),this._baseMin(this);var a=0;n.fxsid&&(a=n.fxsid),this.fxsid=a,i.h5login(a,function(){t.getShopList(t.cid),t.getCate(t.cid)})},onShow:function(){this.getloaction()},onReachBottom:function(){var n=this;n.page++,uni.request({url:n.$baseurl+"doPageselectShopList",data:{uniacid:n.$uniacid,option1:n.menuContent[0].title,option2:n.menuContent[1].title,option3:n.menuContent[2].title,longitude:n.longitude,latitude:n.latitude,page:n.page},cachetime:"30",success:function(t){t&&(n.shopList=n.shopList.concat(t.data.data))}})},onShareAppMessage:function(){var n=this;return{title:n.cateinfo.name+"-"+n.baseinfo.name}},methods:{tapMainMenu:function(n){var t=this,e=n.currentTarget.dataset.index;console.log(e),t.lastIndex==e?(t.times++,2==t.times?t.showMenu=!1:(t.showMenu=!0,t.content=t.menuContent[e].content,t.times=1)):(t.showMenu=!0,t.content=t.menuContent[e].content,t.times=1),t.lastIndex=e},tapSubMenu:function(n){var t=this,e=t.menuContent,i=n.currentTarget.dataset.index;e[t.lastIndex].title=t.content[i],t.menuContent=e,t.showMenu=!1,t.times=2,t.page=1,uni.request({url:t.$baseurl+"doPageselectShopList",data:{uniacid:t.$uniacid,option1:t.menuContent[0].title,option2:t.menuContent[1].title,option3:t.menuContent[2].title,longitude:uni.getStorageSync("longitude"),latitude:uni.getStorageSync("latitude"),page:1},cachetime:"30",success:function(n){console.log(n),t.shopList=n.data.data}})},switchCate:function(n){var t=this,e=n.currentTarget.dataset.cid,i=n.currentTarget.dataset.name;t.getShopList(e),t.nowCate=i,t.changeShow1="hide",t.changeShow2="hide",t.changeShow3="show"},getShopList:function(n){var t=this;uni.request({url:t.$baseurl+"doPageselectShopList",data:{uniacid:t.$uniacid,cid:t.cid,option1:t.cid,longitude:uni.getStorageSync("longitude"),latitude:uni.getStorageSync("latitude")},success:function(n){console.log(n),t.shopList=n.data.data}})},getCate:function(n){var t=this;uni.request({url:t.$baseurl+"doPagegetcate",data:{uniacid:t.$uniacid,cid:t.cid},success:function(e){for(var i=t.menuContent,a=0;a<e.data.data.length;a++)i[0].content.push(e.data.data[a].name);if(n)for(var o=t.menuContent,s=e.data.data,u=0;u<s.length;u++)s[u].id==n&&(t.menuContent=o);t.cate=e.data.data}})},makePhoneCall:function(n){var t=n.currentTarget.dataset.tel;uni.makePhoneCall({phoneNumber:t})},getloaction:function(){var n=this;uni.getLocation({type:"wgs84",success:function(t){n.latitude=t.latitude,n.longitude=t.longitude,uni.setStorageSync("latitude",t.latitude),uni.setStorageSync("longitude",t.longitude)}})}}};t.default=r},bd2a:function(n,t,e){"use strict";e.r(t);var i=e("5b45"),a=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);t["default"]=a.a},bd4e:function(n,t,e){"use strict";e.r(t);var i=e("f260"),a=e("bd2a");for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);e("3e58");var s=e("2877"),u=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"d6ec1a8e",null);t["default"]=u.exports},e4f1:function(n,t,e){var i=e("2ac4");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=e("4f06").default;a("1a090663",i,!0,{sourceMap:!1,shadowMode:!1})},f260:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.$imgurl?e("v-uni-view",[e("v-uni-view",{staticClass:"bg_f mb10"},[e("v-uni-view",{staticClass:"selectarea"},[e("dl",{staticClass:"menu"},[n._l(n.menuContent,function(t,i){return[e("dt",{key:i+"_0",class:[n.menuCss[n.index],"btnarea"],attrs:{"data-index":i},on:{click:function(t){t=n.$handleEvent(t),n.tapMainMenu(t)}}},[e("v-uni-text",{staticClass:"textarea greycolor"},[n._v(n._s(t.title))]),e("v-uni-image",{class:[n.rotateRight[n.index],"icon-img"],staticStyle:{width:"24rpx",height:"24rpx",margin:"10rpx 0 0 10rpx"},attrs:{src:n.$imgurl+"icon-arrowdown.png"}})],1)]}),n.showMenu?e("dd",{staticClass:"font-sm"},[e("ul",[n._l(n.content,function(t,i){return[e("li",{key:i+"_0",staticClass:"font-xs",attrs:{"data-index":i},on:{click:function(t){t=n.$handleEvent(t),n.tapSubMenu(t)}}},[n._v(n._s(t))])]})],2)]):n._e()],2)])],1),n._l(n.shopList,function(t,i){return e("v-uni-view",{key:i,staticClass:"storeList"},[e("v-uni-navigator",{attrs:{url:"/pagesPluginShop/shop/shop?id="+t.id}},[e("v-uni-view",{staticClass:"storeListThumb"},[e("v-uni-image",{attrs:{mode:"aspectFill",src:t.logo}})],1),e("v-uni-view",{staticClass:"storeListTitle"},[e("v-uni-view",{staticClass:"storeListTitle1"},[n._v(n._s(t.name))]),e("v-uni-view",{staticClass:"storeListTitle2"},[e("v-uni-image",{attrs:{mode:"scaleToFill",src:n.$imgurl+"i_tel.png"}}),n._v(n._s(t.tel))],1),e("v-uni-view",{staticClass:"storeListTitle2"},[e("v-uni-image",{attrs:{mode:"scaleToFill",src:n.$imgurl+"i_add.png"}}),n._v(n._s(t.address))],1)],1),e("v-uni-view",{staticClass:"storeListR"},[e("v-uni-view",{staticClass:"storeListEnter",style:{color:n.baseinfo.base_color2,border:"2rpx solid "+n.baseinfo.base_color2}},[n._v("进店逛逛")]),e("v-uni-view",{staticClass:"storeListLocal"},[n._v(n._s(t.distance))])],1)],1)],1)}),1==n.baseinfo.tabbar_t?e("copyright",{attrs:{baseinfo:n.baseinfo}}):n._e(),e("myfooter",{attrs:{page_signs:n.page_signs,baseinfo:n.baseinfo}})],2):n._e()},a=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return a})}}]);