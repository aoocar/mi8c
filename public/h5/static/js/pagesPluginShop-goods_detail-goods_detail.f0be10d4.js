(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesPluginShop-goods_detail-goods_detail"],{3033:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("28a5"),i("3b2b"),i("a481"),i("4917");var a=/^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,n=/^<\/([-A-Za-z0-9_]+)[^>]*>/,o=/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,s=p("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"),r=p("a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"),d=p("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var"),l=p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"),c=p("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"),u=p("script,style");function h(t,e){var i,h,p,g=[],f=t;g.last=function(){return this[this.length-1]};while(t){if(h=!0,g.last()&&u[g.last()])t=t.replace(new RegExp("([\\s\\S]*?)</"+g.last()+"[^>]*>"),function(t,i){return i=i.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g,"$1$2"),e.chars&&e.chars(i),""}),m("",g.last());else if(0==t.indexOf("\x3c!--")?(i=t.indexOf("--\x3e"),i>=0&&(e.comment&&e.comment(t.substring(4,i)),t=t.substring(i+3),h=!1)):0==t.indexOf("</")?(p=t.match(n),p&&(t=t.substring(p[0].length),p[0].replace(n,m),h=!1)):0==t.indexOf("<")&&(p=t.match(a),p&&(t=t.substring(p[0].length),p[0].replace(a,b),h=!1)),h){i=t.indexOf("<");var v=i<0?t:t.substring(0,i);t=i<0?"":t.substring(i),e.chars&&e.chars(v)}if(t==f)throw"Parse Error: "+t;f=t}function b(t,i,a,n){if(i=i.toLowerCase(),r[i])while(g.last()&&d[g.last()])m("",g.last());if(l[i]&&g.last()==i&&m("",i),n=s[i]||!!n,n||g.push(i),e.start){var u=[];a.replace(o,function(t,e){var i=arguments[2]?arguments[2]:arguments[3]?arguments[3]:arguments[4]?arguments[4]:c[e]?e:"";u.push({name:e,value:i,escaped:i.replace(/(^|[^\\])"/g,'$1\\"')})}),e.start&&e.start(i,u,n)}}function m(t,i){if(i){for(a=g.length-1;a>=0;a--)if(g[a]==i)break}else var a=0;if(a>=0){for(var n=g.length-1;n>=a;n--)e.end&&e.end(g[n]);g.length=a}}m()}function p(t){for(var e={},i=t.split(","),a=0;a<i.length;a++)e[i[a]]=!0;return e}function g(t){return t.replace(/<\?xml.*\?>\n/,"").replace(/<!doctype.*>\n/,"").replace(/<!DOCTYPE.*>\n/,"")}function f(t){return t.reduce(function(t,e){var i=e.value,a=e.name;return t[a]?t[a]=t[a]+" "+i:t[a]=i,t},{})}function v(t){t=g(t);var e=[],i={node:"root",children:[]};return h(t,{start:function(t,a,n){var o={name:t};if(0!==a.length&&(o.attrs=f(a)),n){var s=e[0]||i;s.children||(s.children=[]),s.children.push(o)}else e.unshift(o)},end:function(t){var a=e.shift();if(a.name!==t&&console.error("invalid state: mismatch end tag"),0===e.length)i.children.push(a);else{var n=e[0];n.children||(n.children=[]),n.children.push(a)}},chars:function(t){var a={type:"text",text:t};if(0===e.length)i.children.push(a);else{var n=e[0];n.children||(n.children=[]),n.children.push(a)}},comment:function(t){var i={node:"comment",text:t},a=e[0];a.children||(a.children=[]),a.children.push(i)}}),i.children}var b=v;e.default=b},"39b3":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481");var n=a(i("e814")),o=(i("2f62"),a(i("3033"))),s=i("7131"),r={data:function(){return{$imgurl:this.$imgurl,isplay:!1,bg:"",picList:[],datas:"",sc:0,nowcon:"con",is_comment:0,comm:0,commSelf:0,comments:[],commShow:0,shareShow:0,shareScore:0,shareNotice:0,content:"",con2:"",con3:"",fxsid:0,shareHome:0,tel:"",suid:"",baseinfo:"",pic_video:"",currentSwiper:0,minHeight:220,heighthave:0,autoplay:!0,shareimg:0,share:0,shareimg_url:"",system_w:0,system_h:0,img_w:0,img_h:0,dlength:0,needAuth:!1,needBind:!1}},onLoad:function(t){var e=this,i=uni.getStorageSync("suid");this.suid=i;var a=t.id;this.id=a;var o=0;t.fxsid&&(o=t.fxsid,uni.setStorageSync("fxsid",o)),this.fxsid=o;var r="";t.tel&&(r=t.tel,this.tel=r);i=uni.getStorageSync("suid");this._baseMin(this),i?s.h5login(o,function(){e.getShowPic(a)}):this.getShowPic(a);var d=uni.getStorageSync("systemInfo");this.img_w=(0,n.default)((.65*d.windowWidth).toFixed(0)),this.img_h=(0,n.default)((1.875*this.img_w).toFixed(0)),this.system_w=(0,n.default)(d.windowWidth),this.system_h=(0,n.default)(d.windowHeight)},onShow:function(){this.suid=uni.getStorageSync("suid"),this._baseMin(this),this.getShowPic()},onShareAppMessage:function(){var t=this,e=uni.getStorageSync("suid"),i=t.id,a="/pagePluginShop/goods_detail/goods_detail?id="+i+"&fxsid="+e+"&userid="+e;return{title:t.title,path:a,success:function(t){}}},methods:{getShowPic:function(t){var e=this;uni.request({url:e.$baseurl+"doPageshowPro_W",data:{uniacid:e.$uniacid,id:e.id,suid:e.suid},success:function(t){e.picList=t.data.data.images,e.dlength=e.picList.length,e.title=t.data.data.title,e.datas=t.data.data,e.pic_video=t.data.data.video,e.sc=t.data.data.collectcount,uni.setNavigationBarTitle({title:e.title}),uni.setStorageSync("isShowLoading",!1),uni.hideNavigationBarLoading(),uni.stopPullDownRefresh(),e.datas.descp&&(e.datas.descp=e.datas.descp.replace(/\<img/gi,'<img style="width:100%;height:auto;display:block" '),e.datas.descp=(0,o.default)(e.datas.descp))}}),setTimeout(function(){if("1"==e.comm&&"0"!=e.commSelf||"1"==e.commSelf){e.comms;e.commShow=1,uni.request({url:e.$baseurl+"doPagegetComment",data:{uniacid:e.$uniacid,id:e.$id,comms:e.$comms},success:function(t){""!=t.data&&(e.comments=t.data.data,e.is_comment=1)}})}},500)},collect:function(t){if(!this.getSuid())return!1;var e=this;t.currentTarget.dataset.name;uni.request({url:e.$baseurl+"doPageCollect",data:{uniacid:e.$uniacid,suid:e.suid,types:"shopsPro",id:e.id},success:function(t){var i=t.data.data;e.sc="收藏成功"==i?1:0,uni.showToast({title:i,icon:"succes",duration:1e3,mask:!0})}})},cell:function(){this.needAuth=!1},closeAuth:function(){this.needAuth=!1,this.needBind=!0},closeBind:function(){this.needBind=!1},getSuid:function(){var t=uni.getStorageSync("suid");if(t)return!0;var e="";return e?this.needBind=!0:this.needAuth=!0,!1},makePhoneCall:function(t){var e=t.currentTarget.dataset.tel;uni.makePhoneCall({phoneNumber:e})},swiperLoad:function(t){var e=this;uni.getSystemInfo({success:function(i){var a=t.detail.width,n=t.detail.height,o=a/n,s=i.windowWidth/o;e.heighthave||(e.minHeight=s,e.heighthave=1)}})},swiperChange:function(t){this.autoplay=!0,this.currentSwiper=t.detail.current,this.isplay=!1,this.autoplay=this.autoplay},playvideo:function(){var t=this;t.autoplay=!1,t.isplay=!0,t.autoplay=t.autoplay},endvideo:function(){var t=this;t.autoplay=!0,t.isplay=!1,t.autoplay=t.autoplay},goBuy:function(t){if(!this.getSuid())return!1;var e=t.currentTarget.dataset.gid;uni.navigateTo({url:"/pagesPluginShop/goods_buy/goods_buy?id="+e})},open_share:function(){this.share=1},share_close:function(){this.share=0,this.shareimg=0},h5ShareAppMessage:function(){var t=this,e=uni.getStorageSync("suid");uni.showModal({title:"长按复制链接后分享",content:this.$host+"/h5/index.html?id="+this.$uniacid+"#/pagesPluginShop/goods_detail/goods_detail?id="+this.id+"&fxsid="+e+"&userid="+e,showCancel:!1,success:function(e){t.share=0}})},getShareImg:function(){uni.showLoading({title:"海报生成中"});var t=this;uni.request({url:t.$baseurl+"dopageshareewm",data:{uniacid:t.$uniacid,suid:uni.getStorageSync("suid"),gid:t.id,types:"shop",source:uni.getStorageSync("source"),pageUrl:"goods_detail"},success:function(e){uni.hideLoading(),0==e.data.data.error?(t.shareimg=1,t.shareimg_url=e.data.data.url):uni.showToast({title:e.data.data.msg,icon:"none"})}})},closeShare:function(){this.shareimg=0},saveImg:function(){var t=this;uni.getImageInfo({src:t.shareimg_url,success:function(e){uni.saveImageToPhotosAlbum({filePath:e.path,success:function(){uni.showToast({title:"保存成功！",icon:"none"}),t.shareimg=0,t.share=0}})}})},aliSaveImg:function(){var t=this;uni.getImageInfo({src:t.shareimg_url,success:function(e){my.saveImage({url:e.path,showActionSheet:!0,success:function(){my.alert({title:"保存成功"}),t.shareimg=0,t.share=0}})}})}}};e.default=r},4933:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'.flex-row[data-v-16e8030d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.page[data-v-16e8030d]{height:100vh;background-color:#eee}.pro_head[data-v-16e8030d]{position:relative}.slide[data-v-16e8030d]{margin-bottom:0}.pro_tit[data-v-16e8030d]{background:rgba(0,0,0,.3);height:%?70?%;line-height:%?70?%;padding-left:%?20?%;position:absolute;bottom:0;left:0;width:100%;box-sizing:border-box;color:#fff;font-size:%?26?%;overflow:hidden}.price[data-v-16e8030d]{position:relative;height:%?100?%;line-height:%?110?%;background-color:#fff;overflow:hidden}.products_qg[data-v-16e8030d]{width:%?200?%;height:%?70?%;line-height:%?70?%;background-color:#ff9e05;color:#fff;text-align:center;position:absolute;bottom:%?22?%;right:%?20?%;border-radius:%?6?%}.price1[data-v-16e8030d]{float:left;font-size:%?32?%;\n\t/* color: #e7142f; */margin:0 %?6?% 0 %?20?%;color:#4b9eee!important}.price2[data-v-16e8030d]{float:left;font-size:%?56?%;\n\t/* color: #e7142f; */line-height:%?90?%;color:#4b9eee!important}.detail_font[data-v-16e8030d]{color:#4b9eee!important;font-size:11px;line-height:3;text-align:center}.price3[data-v-16e8030d]{float:left;font-size:%?26?%;color:#999;margin-left:10px}.pline[data-v-16e8030d]{text-decoration:line-through}.sale_num[data-v-16e8030d]{float:right;margin-right:%?20?%;top:%?32?%}.sale_num uni-image[data-v-16e8030d]{height:17px!important}.price uni-button[data-v-16e8030d]{position:relative;display:block;padding-left:0;padding-right:0;box-sizing:border-box;text-align:center;text-decoration:none;line-height:%?36?%;border-radius:5px;-webkit-tap-highlight-color:transparent;overflow:hidden;background-color:initial}.price uni-button[data-v-16e8030d]:after{content:" ";width:0;height:0%;position:absolute;top:0;left:0;border:none;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:10px}.biaoq[data-v-16e8030d]{padding:%?20?%;background-color:#fff;color:#71b41a}.biaoq_t[data-v-16e8030d]{float:left;margin-right:%?26?%;background-size:%?30?%}.biaoq_p[data-v-16e8030d]{width:%?34?%;height:%?34?%;margin-right:%?10?%;position:relative;top:%?6?%}.youhuiq[data-v-16e8030d]{border-top:1px solid #eee;border-bottom:1px solid #eee;margin-top:10px;background-color:#fff;padding:20px 0 20px 20px}.youhdiv[data-v-16e8030d]{display:inline-block;margin-right:20px;border:1px solid #dedede;border-radius:4px;padding:5px 20px}.spxq[data-v-16e8030d]{background-color:#fff;margin-top:%?20?%;padding:0 %?20?% %?60?%}.xbts[data-v-16e8030d]{height:%?66?%;line-height:%?66?%;border-bottom:1px solid #eee;color:#999;font-size:14px}.xqnr[data-v-16e8030d]{margin-top:%?20?%}.pro_footer_bg[data-v-16e8030d]{height:%?100?%}.pro_footer[data-v-16e8030d]{position:fixed;height:%?100?%;line-height:%?100?%;left:0;bottom:0;z-index:799;width:100%;background:#fff;font-size:%?26?%}.pro_f1[data-v-16e8030d]{float:left;box-sizing:border-box;text-align:center}.pro_f1 uni-navigator[data-v-16e8030d]{display:block;height:100%;overflow:hidden}.pro_f1 uni-image[data-v-16e8030d]{display:block;width:%?36?%;height:%?36?%;margin:%?15?% auto %?8?%}.pro_f1 uni-text[data-v-16e8030d]{display:block;line-height:%?30?%;font-size:%?22?%}.pro_f_home[data-v-16e8030d],.pro_f_star[data-v-16e8030d],.pro_f_tel[data-v-16e8030d]{width:14%;border-right:1px solid #eee;height:100%;border-top:1px solid #eee}.pro_f_buy[data-v-16e8030d],.pro_f_price[data-v-16e8030d]{width:29%;height:100%}uni-navigator[data-v-16e8030d]{height:100%}.pro_f_price[data-v-16e8030d]{color:#fff;font-size:%?36?%;background:#fd8c00}.pro_f_buy[data-v-16e8030d]{background:#e7142f;color:#fff;font-size:%?28?%}.pro_f_buy_t[data-v-16e8030d]{width:29%;background:#dedede;color:#fff;font-size:%?28?%}.P_title[data-v-16e8030d]{border-bottom:%?2?% solid #eee}.active[data-v-16e8030d]{border-bottom:0}.P_title .pcon[data-v-16e8030d]{float:left;width:25%;text-align:center;line-height:%?80?%;position:relative}.P_title .active i[data-v-16e8030d]{width:%?155?%;height:%?6?%;background:#4b9eee!important;display:block;margin:0 auto}.pro_head[data-v-16e8030d]{position:relative}.wrap[data-v-16e8030d]{max-height:15rem;position:relative}.slide[data-v-16e8030d]{margin-bottom:0}.slide-image[data-v-16e8030d]{display:block;position:absolute}.slide .play-image[data-v-16e8030d]{display:block;width:%?80?%;height:%?80?%;position:absolute;left:0;top:0;right:0;z-index:6000;margin:auto;bottom:%?34?%}.video-width[data-v-16e8030d]{width:100%;height:283px}.slide .play-image1[data-v-16e8030d]{display:block;width:%?30?%;height:%?30?%;position:absolute;left:0;top:-216px;right:%?-667?%;bottom:0;z-index:6000;margin:auto}.dots[data-v-16e8030d]{padding:%?10?% %?15?%;position:absolute;margin:auto;left:0;right:0;bottom:%?20?%;text-align:center;background:rgba(0,0,0,.5);border-radius:%?30?%;width:%?90?%}.dots .active[data-v-16e8030d]{width:%?15?%;height:%?15?%;background-color:#c5c4c3}.dot[data-v-16e8030d]{width:%?15?%;height:%?15?%;border-radius:50%;margin-right:%?15?%;background-color:#fff}.goods_duo[data-v-16e8030d]{background-color:#fff;font-size:16px;padding:0 0 5px 10px}\n/**分享层**/.share_ceng[data-v-16e8030d]{position:fixed;left:0;bottom:%?0?%;width:100%;background:rgba(0,0,0,.7);height:auto}.share_con[data-v-16e8030d]{position:absolute;left:0;bottom:0;width:100%;background:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.share_con>uni-view>uni-button[data-v-16e8030d]{line-height:%?68?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-right:%?2?% solid #c6cbd9;border-radius:0;height:%?68?%}.share_con>uni-view:last-child>uni-button[data-v-16e8030d]:after{border:none}\n\n.fx_box[data-v-16e8030d]{z-index:900;position:fixed;top:9%;margin:auto}\n.fx_box .fx_close[data-v-16e8030d]{\n\t/* margin: 45px; */background-color:#fff;width:100%;height:auto;padding-bottom:5px}\n/*关闭按钮*/.fx_box .fx_close uni-view[data-v-16e8030d]{text-decoration:none;color:#2d2c3b}.fx_content[data-v-16e8030d]{text-align:center;margin:0 5px}.fx_content .haibao_img[data-v-16e8030d]{border:1px solid #bbb;margin:0 5px 0 5px!important;float:none}.fx_X[data-v-16e8030d]{text-align:right;margin-right:5px;height:auto;margin-top:-5px}.haibao_btn[data-v-16e8030d]{font-size:12px;font-size:normal;margin:0 8px}.haibao_tishi[data-v-16e8030d]{text-align:center;color:#9d9d9d!important}\n',""])},"54a2":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.$imgurl?i("div",{staticClass:"page"},[t.needAuth?i("auth",{attrs:{needAuth:t.needAuth},on:{closeAuth:function(e){arguments[0]=e=t.$handleEvent(e),t.closeAuth.apply(void 0,arguments)},cell:function(e){arguments[0]=e=t.$handleEvent(e),t.cell.apply(void 0,arguments)}}}):t._e(),t.needBind?i("bindPhone",{attrs:{needBind:t.needBind},on:{closeBind:function(e){arguments[0]=e=t.$handleEvent(e),t.closeBind.apply(void 0,arguments)}}}):t._e(),i("v-uni-view",{staticClass:"pro_head"},[i("v-uni-view",{staticClass:"wrap",style:"height:"+t.minHeight+"px;"},[i("v-uni-swiper",{staticClass:"slide",staticStyle:{height:"100%"},attrs:{"indicator-active-color":t.baseinfo.base_color2,interval:"3000",duration:"1000",autoplay:t.autoplay,"indicator-color":"rgba(0, 0, 0, .3)"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},[t._l(t.picList,function(e,a){return[i("v-uni-swiper-item",[i("v-uni-image",{staticClass:"slide-image",attrs:{src:e,width:"100%",mode:"widthFix"},on:{load:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperLoad.apply(void 0,arguments)}}}),!t.isplay&&t.pic_video&&0==a?i("v-uni-view",[i("v-uni-image",{staticClass:"play-image",attrs:{src:t.$imgurl+"play_audio.png",mode:"aspectFill"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.playvideo.apply(void 0,arguments)}}})],1):t._e(),t.isplay?i("v-uni-view",{staticStyle:{height:"100%"}},[i("v-uni-image",{staticClass:"play-image1",attrs:{src:t.$imgurl+"c.png",mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.endvideo.apply(void 0,arguments)}}}),i("v-uni-video",{staticStyle:{margin:"0",height:"100%",width:"100%",overflow:"hidden"},attrs:{src:t.pic_video,objectFit:"cover",autoplay:"true"}})],1):t._e()],1)]})],2),t.isplay?t._e():i("v-uni-view",{staticClass:"dots hbj",style:{width:14*(t.dlength-1)+14*t.dlength+"rpx"}},[t._l(t.picList,function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"dot",class:a==t.currentSwiper?"active":""})]})],2)],1),t.autoplay?i("v-uni-view"):t._e()],1),i("v-uni-view",{staticClass:"price"},[i("v-uni-view",{staticClass:"price1",style:"color:"+t.baseinfo.base_color2},[i("v-uni-view",[t._v("¥")])],1),i("v-uni-view",{staticClass:"price2",style:"color:"+t.baseinfo.base_color2},[i("v-uni-view",[t._v(t._s(t.datas.sellprice))])],1),i("v-uni-view",{staticClass:"price3 pline"},[i("v-uni-view",[t._v("¥"+t._s(t.datas.marketprice))])],1),t.datas.pro_kc>=0?i("v-uni-view",{staticClass:"price3"},[i("v-uni-view",[t._v("库存量："+t._s(t.datas.storage))])],1):t._e(),1==t.baseinfo.share_open?[i("v-uni-view",{staticClass:"sale_num",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open_share.apply(void 0,arguments)}}},[i("v-uni-image",{staticStyle:{width:"34rpx"},attrs:{src:t.$imgurl+"btn_share.png",mode:"widthFix"}})],1)]:t._e(),i("v-uni-view",{staticClass:"sale_num"},[i("v-uni-view",[t._v("已售："+t._s(t.datas.rsales))])],1)],2),t.autoplay?i("v-uni-view",{staticClass:"goods_duo"},[t._v(t._s(t.datas.title))]):t._e(),i("v-uni-view",{staticClass:"spxq"},[i("v-uni-view",{staticClass:"P_title"},[i("v-uni-view",{staticClass:"detail_font",class:[t.pcon,"con"==t.nowcon?"active":""],style:{width:"100%",color:t.baseinfo.base_color2},attrs:{"data-id":"con"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.tabChange.apply(void 0,arguments)}}},[t._v("商品/服务详情"),i("i",{staticStyle:{"text-align":"left"},style:"background:"+t.baseinfo.base_color2})])],1),"con"==t.nowcon?i("v-uni-view",{staticClass:"xqnr"},[i("v-uni-rich-text",{attrs:{nodes:t.datas.descp}})],1):t._e()],1),i("v-uni-view",{staticClass:"pro_footer_bg"}),i("v-uni-view",{staticClass:"pro_footer"},[i("v-uni-view",{staticClass:"pro_f1 pro_f_home"},[i("v-uni-navigator",{attrs:{"open-type":"redirectTo",url:"/pages/index/index"}},[i("v-uni-image",{attrs:{src:t.$imgurl+"i_home.png"}}),i("v-uni-text",[t._v("首页")])],1)],1),i("v-uni-view",{staticClass:"pro_f1 pro_f_star",attrs:{"data-name":t.datas.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.collect.apply(void 0,arguments)}}},[0==t.sc?i("v-uni-image",{attrs:{src:t.$imgurl+"i_like.png"}}):t._e(),1==t.sc?i("v-uni-image",{attrs:{src:t.$imgurl+"u_star.png"}}):t._e(),i("v-uni-text",[t._v("收藏")])],1),i("v-uni-view",{staticClass:"pro_f1 pro_f_tel",attrs:{"data-tel":t.tel},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.makePhoneCall.apply(void 0,arguments)}}},[i("v-uni-image",{attrs:{src:t.$imgurl+"i_tel.png"}}),i("v-uni-text",[t._v("客服")])],1),i("v-uni-view",{staticClass:"pro_f1 pro_f_price",style:{background:t.baseinfo.tabbar_bg3,color:t.baseinfo.tabbar_bg1}},[t._v(t._s(t.datas.sellprice)+"元")]),i("v-uni-view",{attrs:{"data-gid":t.datas.id},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBuy.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pro_f1 pro_f_buy",style:{background:t.baseinfo.base_color2,color:t.baseinfo.tabbar_bg2}},[t._v("立即购买")])],1)],1),1==t.shareHome?i("v-uni-navigator",{staticClass:"shareBtnArt shareBtnHome",attrs:{url:"/pages/index/index"}},[i("v-uni-image",{attrs:{src:t.$imgurl+"more.png"}})],1):t._e(),1==t.share?i("v-uni-view",{staticClass:"mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.share_close.apply(void 0,arguments)}}}):t._e(),1==t.share?i("v-uni-view",{staticClass:"share_ceng",style:{"z-index":1==t.shareimg?"800":1e3}},[i("v-uni-view",{staticClass:"share_con flex-row"},[i("v-uni-view",{staticClass:"share_con_box"},[i("v-uni-button",{staticClass:"flex-row",attrs:{"open-type":"share"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.h5ShareAppMessage.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"iconfont icon-x-fenxiang5",staticStyle:{"font-size":"40rpx",color:"#56bb3a"}}),i("v-uni-view",{staticStyle:{"margin-left":"10rpx",color:"#333"}},[t._v("分享给好友")])],1)],1),i("v-uni-view",{staticClass:"share_con_box"},[i("v-uni-view",{staticClass:"flex-row",staticStyle:{"justify-content":"center"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getShareImg.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"iconfont icon-x-tupian",staticStyle:{"font-size":"40rpx",color:"#e47b2f"}}),i("v-uni-view",{staticStyle:{"margin-left":"10rpx"}},[t._v("生成分享海报")])],1)],1)],1)],1):t._e(),1==t.shareimg?i("v-uni-view",{staticClass:"fx_box",style:{width:t.img_w+20+"px",height:t.img_h+25+"px",left:(t.system_w-t.img_w-10)/2+"px"}},[i("v-uni-view",{staticClass:"fx_close"},[i("v-uni-view",{staticClass:"fx_X",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeShare.apply(void 0,arguments)}}},[t._v("x")]),i("v-uni-view",{staticClass:"fx_content"},[i("img",{staticClass:"haibao_img",style:{width:t.img_w+"px",height:t.img_h+"px"},attrs:{src:t.shareimg_url}})]),i("v-uni-view",{staticClass:"haibao_tishi",attrs:{type:"primary"}},[t._v("*长按图片保存*")])],1)],1):t._e()],1):t._e()},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"7de7":function(t,e,i){"use strict";i.r(e);var a=i("54a2"),n=i("f724");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("7e7e");var s=i("2877"),r=Object(s["a"])(n["default"],a["a"],a["b"],!1,null,"16e8030d",null);e["default"]=r.exports},"7e7e":function(t,e,i){"use strict";var a=i("b62f"),n=i.n(a);n.a},b62f:function(t,e,i){var a=i("4933");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("792de56a",a,!0,{sourceMap:!1,shadowMode:!1})},f724:function(t,e,i){"use strict";i.r(e);var a=i("39b3"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a}}]);