(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesExchange-show-show"],{"1f8b":function(t,e,a){var i=a("eb4c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("98489578",i,!0,{sourceMap:!1,shadowMode:!1})},3033:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("28a5"),a("3b2b"),a("a481"),a("4917");var i=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,n=/^<\/([-A-Za-z0-9_]+)[^>]*>/,o=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,r=h("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),s=h("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),d=h("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),c=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),l=h("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),u=h("script,style");function p(t,e){var a,p,h,f=[],v=t;f.last=function(){return this[this.length-1]};while(t){if(p=!0,f.last()&&u[f.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+f.last()+"[^>]*>"),function(t,a){return a=a.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(a),""}),_("",f.last());else if(0==t.indexOf("\x3c!--")?(a=t.indexOf("--\x3e"),a>=0&&(e.comment&&e.comment(t.substring(4,a)),t=t.substring(a+3),p=!1)):0==t.indexOf("</")?(h=t.match(n),h&&(t=t.substring(h[0].length),h[0].replace(n,_),p=!1)):0==t.indexOf("<")&&(h=t.match(i),h&&(t=t.substring(h[0].length),h[0].replace(i,b),p=!1)),p){a=t.indexOf("<");var g=a<0?t:t.substring(0,a);t=a<0?"":t.substring(a),e.chars&&e.chars(g)}if(t==v)throw"Parse Error: "+t;v=t}function b(t,a,i,n){if(a=a.toLowerCase(),s[a])while(f.last()&&d[f.last()])_("",f.last());if(c[a]&&f.last()==a&&_("",a),n=r[a]||!!n,n||f.push(a),e.start){var u=[];i.replace(o,function(t,e){var a=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:l[e]?e:"";u.push({name:e,value:a,escaped:a.replace(/(^|[^\\])"/g,'$1\\"')})}),e.start&&e.start(a,u,n)}}function _(t,a){if(a){for(i=f.length-1;i>=0;i--)if(f[i]==a)break}else var i=0;if(i>=0){for(var n=f.length-1;n>=i;n--)e.end&&e.end(f[n]);f.length=i}}_()}function h(t){for(var e={},a=t.split(","),i=0;i<a.length;i++)e[a[i]]=!0;return e}function f(t){return t.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function v(t){return t.reduce(function(t,e){var a=e.value,i=e.name;return t[i]?t[i]=t[i]+" "+a:t[i]=a,t},{})}function g(t){t=f(t);var e=[],a={node:"root",children:[]};return p(t,{start:function(t,i,n){var o={name:t};if(0!==i.length&&(o.attrs=v(i)),n){var r=e[0]||a;r.children||(r.children=[]),r.children.push(o)}else e.unshift(o)},end:function(t){var i=e.shift();if(i.name!==t&&console.error("invalid state: mismatch end tag"),0===e.length)a.children.push(i);else{var n=e[0];n.children||(n.children=[]),n.children.push(i)}},chars:function(t){var i={type:"text",text:t};if(0===e.length)a.children.push(i);else{var n=e[0];n.children||(n.children=[]),n.children.push(i)}},comment:function(t){var a={node:"comment",text:t},i=e[0];i.children||(i.children=[]),i.children.push(a)}}),a.children}var b=g;e.default=b},6321:function(t,e,a){"use strict";var i=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a481");var n=i(a("3033")),o=a("7131"),r={data:function(){return{$imgurl:this.$imgurl,baseinfo:[],orderlist:[],id:"",sc:0,bg:"",datas:{labels:[],slide:[]},content:"",jhsl:1,dprice:"",yhje:0,hjjg:"",sfje:"",order:"",my_num:"",xg_num:"",shengyu:"",userInfo:"",num:[],xz_num:[],proinfo:"",pic_video:"",isplay:!1,currentSwiper:0,minHeight:220,heighthave:0,autoplay:!0,dlength:0,needAuth:!1,needBind:!1}},onShareAppMessage:function(){var t=this;return{title:t.title}},onPullDownRefresh:function(){uni.stopPullDownRefresh()},onLoad:function(t){var e=this,a=t.id;e.id=a;var i=0;t.fxsid&&(i=t.fxsid,uni.setStorageSync("fxsid",i),e.fxsid=t.fxsid),this._baseMin(this);uni.getStorageSync("suid");o.h5login(i,function(){var t=e.id;e.getShowPic(t)})},methods:{makePhoneCall:function(t){var e=this,a=e.baseinfo.tel;uni.makePhoneCall({phoneNumber:a})},collect:function(t){var e=this;if(!this.getSuid())return!1;t.currentTarget.dataset.name;uni.request({url:e.$baseurl+"doPageCollect",data:{uniacid:e.$uniacid,suid:wx.getStorageSync("suid"),types:"exchange",id:e.id},header:{"content-type":"application/json"},success:function(t){var a=t.data.data;e.sc="收藏成功"==a?1:0,uni.showToast({title:a,icon:"succes",duration:1e3,mask:!0})}})},redirectto:function(t){var e=t.currentTarget.dataset.link,a=t.currentTarget.dataset.linktype;this._redirectto(e,a)},getShowPic:function(t){var e=this,a=uni.getStorageSync("suid");uni.request({url:e.$baseurl+"doPageScoreinfo",data:{uniacid:e.$uniacid,id:t,suid:a},success:function(t){e.datas=t.data.data,e.dlength=e.datas.slide.length,e.datas.product_txt&&(e.datas.product_txt=e.datas.product_txt.replace(/\<img/gi,'<img style="width:100%;height:auto;display:block" '),e.datas.product_txt=(0,n.default)(e.datas.product_txt)),e.pic_video=t.data.data.video,e.sc=t.data.data.sc,uni.setNavigationBarTitle({title:t.data.data.title}),uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}})},save:o.throttle(function(t){var e=this;if(!this.getSuid())return!1;e.jhsl;var a=uni.getStorageSync("suid"),i=e.id;uni.request({url:e.$baseurl+"doPagecheckvip",data:{uniacid:e.$uniacid,kwd:"exchange",suid:a},success:function(n){n.data.data?uni.showModal({title:"提示",content:"确定兑换此商品吗？",success:function(n){if(n.confirm)uni.request({url:e.$baseurl+"doPageScoreorder",data:{uniacid:e.$uniacid,suid:a,id:i,formId:t.detail.formId,openid:uni.getStorageSync("openid"),source:uni.getStorageSync("source")},header:{"content-type":"application/json"},success:function(t){var e=t.data.data,a=e.flag;0==a?uni.showModal({title:"提醒",content:e.msg,showCancel:!1}):uni.showToast({title:"兑换成功",icon:"success",duration:1e3,success:function(){setTimeout(function(){uni.redirectTo({url:"/pagesExchange/order/order"})},1e3)}})}});else if(n.cancel);}}):uni.showModal({title:"进入失败",content:"使用本功能需先开通vip!",showCancel:!1,success:function(t){t.confirm&&uni.navigateTo({url:"/pages/register/register?type=jifen"})}})},fail:function(t){}})},2e3),tabChange:function(t){var e=t.currentTarget.dataset.id;this.nowcon=e},swiperLoad:function(t){var e=this;uni.getSystemInfo({success:function(a){var i=t.detail.width,n=t.detail.height,o=i/n,r=a.windowWidth/o;e.heighthave||(e.minHeight=r,e.heighthave=1)}})},swiperChange:function(t){this.autoplay=!0,this.currentSwiper=t.detail.current,this.isplay=!1,this.autoplay=this.autoplay},playvideo:function(){var t=this;t.autoplay=!1,t.isplay=!0,t.autoplay=t.autoplay},endvideo:function(){var t=this;t.autoplay=!0,t.isplay=!1,t.autoplay=t.autoplay},getSuid:function(){var t=uni.getStorageSync("suid");if(t)return!0;var e="";return e?this.needBind=!0:this.needAuth=!0,!1},cell:function(){this.needAuth=!1},closeAuth:function(){this.needAuth=!1,this.needBind=!0},closeBind:function(){this.needBind=!1}}};e.default=r},8145:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$imgurl?a("div",[t.needAuth?a("auth",{attrs:{needAuth:t.needAuth},on:{closeAuth:function(e){arguments[0]=e=t.$handleEvent(e),t.closeAuth.apply(void 0,arguments)},cell:function(e){arguments[0]=e=t.$handleEvent(e),t.cell.apply(void 0,arguments)}}}):t._e(),t.needBind?a("bindPhone",{attrs:{needBind:t.needBind},on:{closeBind:function(e){arguments[0]=e=t.$handleEvent(e),t.closeBind.apply(void 0,arguments)}}}):t._e(),a("v-uni-view",{staticClass:"pro_head"},[a("v-uni-view",{staticClass:"wrap",style:"height:"+t.minHeight+"px;"},[a("v-uni-swiper",{staticClass:"slide",staticStyle:{height:"100%"},attrs:{"indicator-active-color":t.baseinfo.base_color2,interval:"3000",duration:"1000",autoplay:t.autoplay,"indicator-color":"rgba(0, 0, 0, .3)"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[t._l(t.datas.slide,function(e,i){return[a("v-uni-swiper-item",[a("v-uni-image",{staticClass:"slide-image",attrs:{src:e,width:"100%",mode:"widthFix"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperLoad.apply(void 0,arguments)}}}),!t.isplay&&t.pic_video&&0==i?a("v-uni-view",[a("v-uni-image",{staticClass:"play-image",attrs:{src:t.$imgurl+"play_audio.png",mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.playvideo.apply(void 0,arguments)}}})],1):t._e(),t.isplay?a("v-uni-view",{staticStyle:{height:"100%"}},[a("v-uni-image",{staticClass:"play-image1",attrs:{src:t.$imgurl+"c.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.endvideo.apply(void 0,arguments)}}}),a("v-uni-video",{staticStyle:{margin:"0",height:"100%",width:"100%",overflow:"hidden"},attrs:{src:t.pic_video,objectFit:"cover",autoplay:"true"}})],1):t._e()],1)]})],2),t.isplay?t._e():a("v-uni-view",{staticClass:"dots hbj",style:{width:14*(t.dlength-1)+14*t.dlength+"rpx"}},[t._l(t.datas.slide,function(e,i){return[a("v-uni-view",{key:i+"_0",staticClass:"dot",class:i==t.currentSwiper?"active":""})]})],2)],1),t.autoplay?a("v-uni-view",{staticClass:"pro_tit"},[t._v(t._s(t.datas.title))]):t._e()],1),a("v-uni-view",{staticClass:"price"},[a("v-uni-view",{staticClass:"price1",style:{color:t.baseinfo.base_color2,border:"2rpx solid "+t.baseinfo.base_color2}},[t._v("所需积分")]),a("v-uni-view",{staticClass:"price2",style:"color:"+t.baseinfo.base_color2},[t._v(t._s(t.datas.price))]),a("v-uni-view",{staticClass:"price3 pline"},[t._v("¥"+t._s(t.datas.market_price))]),t.datas.pro_kc>=0?a("v-uni-view",{staticClass:"price3"},[t._v("库存量："+t._s(t.datas.pro_kc))]):t._e(),a("v-uni-view",{staticClass:"sale_num"},[t._v("已兑："+t._s(t.datas.sale_num))])],1),t.datas.labels[0]?a("v-uni-view",{staticClass:"biaoq"},t._l(t.datas.labels,function(e,i){return a("v-uni-view",{directives:[{name:"key",rawName:"v-key",value:e,expression:"item"}],key:i,staticClass:"biaoq_t"},[a("v-uni-image",{staticClass:"biaoq_p",attrs:{src:t.$imgurl+"pro_icon.png"}}),t._v(t._s(e))],1)}),1):t._e(),t.datas.pro_xz>0?a("v-uni-view",{staticClass:"youhuiq"},[t.datas.pro_xz>0?a("v-uni-view",{staticClass:"youhdiv"},[t._v("每人限购"+t._s(t.datas.pro_xz))]):t._e()],1):t._e(),a("v-uni-view",{staticClass:"spxq"},[a("v-uni-view",{staticClass:"p_title"},[a("v-uni-view",{staticClass:"pcon active",style:"color:"+t.baseinfo.base_color2},[t._v("兑换详情")])],1),a("v-uni-view",{staticClass:"xqnr"},[a("v-uni-rich-text",{attrs:{nodes:t.datas.product_txt}})],1)],1),a("v-uni-view",{staticClass:"pro_footer_bg"}),a("v-uni-view",{staticClass:"pro_footer"},[a("v-uni-view",{staticClass:"pro_f1 pro_f_home"},[a("v-uni-navigator",{attrs:{"open-type":"redirectTo",url:"/pages/index/index"}},[a("v-uni-image",{attrs:{src:t.$imgurl+"i_home.png"}}),a("v-uni-text",[t._v("首页")])],1)],1),a("v-uni-view",{staticClass:"pro_f1 pro_f_star",attrs:{"data-name":t.datas.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collect.apply(void 0,arguments)}}},[0==t.sc?a("v-uni-image",{attrs:{src:t.$imgurl+"i_like.png"}}):t._e(),1==t.sc?a("v-uni-image",{attrs:{src:t.$imgurl+"u_star.png"}}):t._e(),a("v-uni-text",[t._v("收藏")])],1),a("v-uni-view",{staticClass:"pro_f1 pro_f_tel",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.makePhoneCall.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:t.$imgurl+"i_tel.png"}}),a("v-uni-text",[t._v("客服")])],1),a("v-uni-form",{attrs:{"report-submit":"true"},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.save.apply(void 0,arguments)}}},[t.datas.pro_kc>0||-1==t.datas.pro_kc?a("v-uni-button",{staticClass:"pro_f1 pro_f_buy",style:{background:t.baseinfo.base_color2,color:t.baseinfo.tabbar_bg2},attrs:{formType:"submit"}},[t._v("立即兑换")]):t._e()],1),0==t.datas.pro_kc?a("v-uni-view",{staticClass:"pro_f1 pro_f_buy_t"},[t._v("您来晚了，商品已被兑换完")]):t._e()],1)],1):t._e()},n=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return n})},"9bdd":function(t,e,a){"use strict";var i=a("1f8b"),n=a.n(i);n.a},"9d9e":function(t,e,a){"use strict";a.r(e);var i=a("8145"),n=a("e460");for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);a("9bdd");var r=a("2877"),s=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"a27c3290",null);e["default"]=s.exports},e460:function(t,e,a){"use strict";a.r(e);var i=a("6321"),n=a.n(i);for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);e["default"]=n.a},eb4c:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"uni-page-body[data-v-a27c3290]{height:100%}uni-button[data-v-a27c3290]{height:%?100?%;line-height:%?100?%;padding:0;margin:0;border-radius:0}.pro_head[data-v-a27c3290]{position:relative}.slide[data-v-a27c3290]{margin-bottom:0}.pro_tit[data-v-a27c3290]{background:#fff;height:%?70?%;line-height:%?70?%;padding-left:%?20?%;\n\t\t/* position: absolute; */\n\t\t/* bottom: 0;\n\t\tleft: 0; */width:100%;box-sizing:border-box;color:#666;font-size:%?26?%;overflow:hidden}.price[data-v-a27c3290]{position:relative;height:%?100?%;line-height:%?110?%;border-bottom:1px solid #eee;background-color:#fff;overflow:hidden}.products_qg[data-v-a27c3290]{width:%?200?%;height:%?70?%;line-height:%?70?%;background-color:#ff9e05;color:#fff;text-align:center;position:absolute;bottom:%?22?%;right:%?20?%;border-radius:%?6?%}.price1[data-v-a27c3290]{float:left;font-size:%?22?%;\n\t\t/* color: #e7142f; border: 2rpx solid #e7142f;  */border-radius:%?6?%;line-height:%?26?%;height:%?26?%;margin:%?38?% %?6?% 0 %?20?%;padding:0 %?4?%}.price2[data-v-a27c3290]{float:left;font-size:%?56?%;line-height:%?90?%}.price3[data-v-a27c3290]{float:left;font-size:%?26?%;color:#999;margin-left:10px}.pline[data-v-a27c3290]{text-decoration:line-through}.sale_num[data-v-a27c3290]{float:right;margin-right:%?20?%}.biaoq[data-v-a27c3290]{overflow:hidden;padding:%?20?%;background-color:#fff;color:#71b41a}.biaoq_t[data-v-a27c3290]{float:left;margin-right:%?26?%;background-size:%?30?%}.biaoq_p[data-v-a27c3290]{width:%?34?%;height:%?34?%;margin-right:%?10?%;position:relative;top:%?6?%}.youhuiq[data-v-a27c3290]{border-top:1px solid #eee;border-bottom:1px solid #eee;margin-top:10px;background-color:#fff;padding:20px 0 20px 20px}.youhdiv[data-v-a27c3290]{display:inline-block;margin-right:20px;border:1px solid #dedede;border-radius:4px;padding:5px 20px}.spxq[data-v-a27c3290]{background-color:#fff;margin-top:%?20?%;padding:0 %?20?% %?60?%}.xbts[data-v-a27c3290]{height:%?66?%;line-height:%?66?%;border-bottom:1px solid #eee;color:#999;font-size:14px}.xqnr[data-v-a27c3290]{margin-top:%?30?%}.pro_footer_bg[data-v-a27c3290]{height:%?100?%}.pro_footer[data-v-a27c3290]{position:fixed;height:%?100?%;line-height:%?100?%;left:0;bottom:0;z-index:999;width:100%;background:#fff;font-size:%?26?%}.pro_f1[data-v-a27c3290]{float:left;box-sizing:border-box;text-align:center}.pro_f1 uni-navigator[data-v-a27c3290]{display:block;height:100%;overflow:hidden}.pro_f1 uni-image[data-v-a27c3290]{display:block;width:%?36?%;height:%?36?%;margin:%?15?% auto %?8?%}.pro_f1 uni-text[data-v-a27c3290]{display:block;line-height:%?30?%;font-size:%?22?%}.pro_f_home[data-v-a27c3290],.pro_f_star[data-v-a27c3290],.pro_f_tel[data-v-a27c3290]{width:14%;border-right:1px solid #eee;height:100%;border-top:1px solid #eee}.pro_f_buy[data-v-a27c3290],.pro_f_price[data-v-a27c3290]{width:58%}.pro_f_price[data-v-a27c3290]{color:#fff;font-size:%?36?%;background:#fd8c00}.pro_f_buy[data-v-a27c3290]{background:#e7142f;color:#fff;font-size:%?28?%}.pro_f_buy_t[data-v-a27c3290]{width:58%;background:#ccc;color:#fff;font-size:%?28?%}.p_title[data-v-a27c3290]{display:-webkit-box;display:-webkit-flex;display:flex;border-bottom:%?2?% solid #eee}\n\n\t/* .active {\n  color: #e7142f;\n} */.p_title .pcon[data-v-a27c3290]{\n\t\t/* float: left; */width:100%;text-align:center;line-height:%?80?%;position:relative}.pro_head[data-v-a27c3290]{position:relative}.wrap[data-v-a27c3290]{max-height:15rem;position:relative}.slide[data-v-a27c3290]{margin-bottom:0}.slide-image[data-v-a27c3290]{display:block;position:absolute}.slide .play-image[data-v-a27c3290]{display:block;width:%?80?%;height:%?80?%;position:absolute;left:0;top:0;right:0;z-index:6000;margin:auto;bottom:%?34?%}.video-width[data-v-a27c3290]{width:100%;height:283px}.slide .play-image1[data-v-a27c3290]{display:block;width:%?30?%;height:%?30?%;position:absolute;left:0;top:-216px;right:%?-667?%;bottom:0;z-index:6000;margin:auto}.dot[data-v-a27c3290]{width:%?15?%;height:%?15?%;border-radius:50%;margin-right:%?15?%;background-color:#fff}.dots[data-v-a27c3290]{padding:%?10?% %?15?%;position:absolute;margin:auto;left:0;right:0;bottom:%?20?%;text-align:center;background:rgba(0,0,0,.5);border-radius:%?30?%;width:%?90?%}.dots .active[data-v-a27c3290]{width:%?15?%;height:%?15?%;background-color:#c5c4c3}\n\n\t/* .p_title .active i {\n  width: 60rpx;\n  height: 6rpx;\n  background: #e7142f;\n  display: block;\n  margin: 0 auto;\n} */.active[data-v-a27c3290]{border-bottom:0!important}",""])}}]);