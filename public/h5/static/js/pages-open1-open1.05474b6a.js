(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-open1-open1"],{"07b1":function(e,t,a){"use strict";a.r(t);var i=a("4921"),n=a("0eee");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("db35");var s=a("2877"),r=Object(s["a"])(n["default"],i["a"],i["b"],!1,null,"5a9bdee6",null);t["default"]=r.exports},"0eee":function(e,t,a){"use strict";a.r(t);var i=a("b2ca"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=n.a},4921:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.$imgurl?a("div",[a("v-uni-view",{staticClass:"head mb-20"},[e._l(e.processData,function(t,i){return[a("v-uni-view",{key:i+"_0",staticClass:"headBgColor",style:{background:t["bgcolor"],display:e.grade!=t.grade?"none":"block"}},[a("v-uni-image",{attrs:{src:t["card_img"],mode:"widthFix"}}),a("v-uni-text",{staticClass:"card_num color-c4ad7d"},[e._v(e._s(e.vipid))]),a("v-uni-view",{staticClass:"card_name"},[a("v-uni-view"),a("v-uni-text",{staticClass:"color-c4ad7d"},[e._v(e._s(t["name"]))]),a("v-uni-view")],1)],1),a("v-uni-image",{key:i+"_1",staticClass:"head_bg w-750",staticStyle:{height:"100% !important"},attrs:{src:e.$imgurl+"grade_bg.png",mode:"widthFix"}})]})],2),a("v-uni-scroll-view",{attrs:{"scroll-x":"","scroll-into-view":e.vids,"scroll-with-animation":"true"}},e._l(e.processData,function(t,i){return a("v-uni-view",{key:i,staticClass:"process_wrap",attrs:{"data-current":i,id:"v"+i},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.swichNav.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"process"},[a("v-uni-image",{attrs:{src:t.vn}})],1),a("v-uni-text",{staticClass:"process_name",class:t.grade<=e.grade?"color-434343":""},[e._v(e._s(t.name))]),a("v-uni-view",{staticClass:"process_down"},[a("v-uni-view",{staticClass:"process_line",class:t.grade<=e.grade?"border-434343":"border-ebebed"}),a("v-uni-view",{staticClass:"process_radius",class:e.currentTab==i?"bg-e1c386":"bg-b9b9be"}),a("v-uni-view",{staticClass:"process_line",class:t.grade<e.grade?"border-434343":"border-ebebed"})],1)],1)}),1),a("v-uni-swiper",{staticClass:"swiper",attrs:{current:e.currentTab},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.swiperChange.apply(void 0,arguments)}}},[e._l(e.processData,function(t,i){return[a("v-uni-swiper-item",[a("v-uni-view",[1==t["status"]?[t["cha"]>0?a("v-uni-view",{staticClass:"open1_middle"},[a("v-uni-text",[e._v("距离本级还需消费"+e._s(t["cha"])+"元，已消费"+e._s(t["yi"])+"元")])],1):e._e()]:e._e(),a("v-uni-view",{staticClass:"quanyi"},[a("v-uni-view"),a("v-uni-text",[e._v(e._s(t["name"])+"权益")]),a("v-uni-view")],1),1==t["coupon_flag"]&&t["coupon_num"]>0?a("v-uni-view",{staticClass:"open1_foot"},[a("v-uni-view",[a("v-uni-image",{attrs:{src:e.$imgurl+"VIP1.png"}})],1),a("v-uni-text",{staticStyle:{color:"#434343"}},[e._v("赠送优惠券 "+e._s(t["coupon_num"])+"张")])],1):e._e(),1==t["free_package"]?a("v-uni-view",{staticClass:"open1_foot"},[a("v-uni-view",[a("v-uni-image",{attrs:{src:e.$imgurl+"VIP1.png"}})],1),a("v-uni-text",{staticStyle:{color:"#434343"}},[e._v("会员包邮")])],1):e._e(),1==t["discount_flag"]?a("v-uni-view",{staticClass:"open1_foot"},[a("v-uni-view",[a("v-uni-image",{attrs:{src:e.$imgurl+"VIP1.png"}})],1),a("v-uni-text",{staticStyle:{color:"#434343"}},[e._v("会员折扣 "+e._s(t["discount_grade"])+"折")])],1):e._e(),1==t["score_flag"]?a("v-uni-view",{staticClass:"open1_foot"},[a("v-uni-view",[a("v-uni-image",{attrs:{src:e.$imgurl+"VIP1.png"}})],1),a("v-uni-text",{staticStyle:{color:"#434343"}},[e._v("买送积分 "+e._s(t["score_bei"])+"倍")])],1):e._e(),1==t["score_feedback_flag"]?a("v-uni-view",{staticClass:"open1_foot"},[a("v-uni-view",[a("v-uni-image",{attrs:{src:e.$imgurl+"VIP1.png"}})],1),a("v-uni-text",{staticStyle:{color:"#434343"}},[e._v("积分回馈 "+e._s(t["score_feedback"]))])],1):e._e(),0==t["score_feedback_flag"]&&0==t["score_flag"]&&0==t["discount_flag"]&&0==t["coupon_flag"]&&0==t["free_package"]?a("v-uni-view",{staticClass:"open1_foot"},[a("v-uni-text",{staticStyle:{color:"#434343"}},[e._v("暂无会员权益")])],1):e._e(),a("v-uni-view",{staticClass:"descs"},[a("v-uni-view",[e._v("等级说明：")]),""!=t.descs?a("v-uni-view",[e._v(e._s(t.descs))]):a("v-uni-view",[e._v("暂无说明")])],1),t["grade"]>e.grade?[1==t["status"]?[a("v-uni-view",{staticClass:"prompt"},[a("v-uni-text",{staticStyle:{"font-size":"30rpx"}},[e._v("￥")]),a("v-uni-text",{staticStyle:{"font-size":"48rpx"}},[e._v(e._s(t["price"]))]),a("v-uni-text",[e._v("/")]),a("v-uni-text",{staticStyle:{"font-size":"28rpx"}},[e._v("终身权益")])],1),1==t["price_flag"]?a("v-uni-view",{staticStyle:{"text-align":"center","font-size":"24rpx",color:"#e1c386"}},[e._v("支付金额将充入余额")]):e._e(),a("v-uni-button",{staticClass:"btn1",attrs:{"data-grade":t["grade"],"data-price":t["price"]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.open_grade.apply(void 0,arguments)}}},[a("v-uni-view",[e._v("立即开通")])],1)]:e._e()]:e._e()],2)],1)]})],2),1==e.show_pay_type?a("v-uni-view",{staticClass:"zhezhao_z",staticStyle:{display:"block"}},[a("v-uni-view",{staticClass:"t_w"},[a("v-uni-view",{staticClass:"tanchu_view"},[a("v-uni-image",{staticClass:"close",attrs:{src:e.$imgurl+"close.png",mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.close_pay_type.apply(void 0,arguments)}}}),a("v-uni-text",[e._v("支付方式")]),1==e.wxpay?a("v-uni-view",{staticStyle:{"border-bottom":"1px solid #e9e6e6"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changewxpay.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"view_left"},[a("v-uni-image",{attrs:{src:e.$imgurl+"wx.png",mode:""}}),a("v-uni-text",[e._v("微信支付")])],1),1==e.pay_type?a("v-uni-view",{staticClass:"view_right"},[a("v-uni-image",{attrs:{src:e.$imgurl+"chk2.png"}})],1):e._e(),2==e.pay_type?a("v-uni-view",{staticClass:"view_right"},[a("v-uni-image",{attrs:{src:e.$imgurl+"chk1.png",id:"chk"}})],1):e._e()],1):e._e(),1==e.alipay?a("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changealipay.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"view_left"},[a("v-uni-image",{attrs:{src:e.$imgurl+"zfb.png",mode:""}}),a("v-uni-text",[e._v("支付宝支付")])],1),1==e.pay_type?a("v-uni-view",{staticClass:"view_right"},[a("v-uni-image",{attrs:{src:e.$imgurl+"chk1.png",id:"chk"}})],1):e._e(),2==e.pay_type?a("v-uni-view",{staticClass:"view_right"},[a("v-uni-image",{attrs:{src:e.$imgurl+"chk2.png"}})],1):e._e()],1):e._e(),a("v-uni-button",{staticClass:"btn_submit",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.h5topay.apply(void 0,arguments)}}},[e._v("确认支付￥"),a("v-uni-text",[e._v(e._s(e.zf_money))])],1)],1)],1)],1):e._e(),1==e.baseinfo.tabbar_t?a("copyright",{attrs:{baseinfo:e.baseinfo}}):e._e(),a("myfooter",{attrs:{page_signs:e.page_signs,baseinfo:e.baseinfo}})],1):e._e()},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},"61f3":function(e,t,a){var i=a("cfb4");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("28574d4e",i,!0,{sourceMap:!1,shadowMode:!1})},b2ca:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a("7131"),n={data:function(){return{$imgurl:this.$imgurl,state:0,currentTab:0,processData:[],grade:0,vipid:"",baseinfo:[],needAuth:!1,needBind:!1,pay_type:1,show_pay_type:0,alipay:1,wxpay:1,zf_money:0,is_ios:0,ids:"",vids:""}},onPullDownRefresh:function(){this.getvipgrade(),uni.stopPullDownRefresh()},onLoad:function(e){var t=this;uni.setNavigationBarTitle({title:"会员权益"});var a=0;e.fxsid&&(this.fxsid=e.fxsid),this._baseMin(this),i.h5login(a,function(){t.getvipgrade()});var n=uni.getStorageSync("systemInfo")["system"];n.indexOf("iOS")>=0&&(this.is_ios=1)},methods:{swichNav:function(e){var t=this;if(this.currentTab===e.currentTarget.dataset.current)return!1;console.log(e),t.currentTab=e.currentTarget.dataset.current},swiperChange:function(e){this.currentTab=e.detail.current},getvipgrade:function(){var e=this,t="";uni.request({url:e.$baseurl+"doPagegetvipgrade",data:{uniacid:e.$uniacid,openid:t,suid:uni.getStorageSync("suid")},success:function(t){for(var a=t.data.data.vip,i=t.data.data.userinfo["grade"],n=0,o=0;o<a.length;o++)i==a[o]["grade"]&&(n=o,e.ids=n);e.currentTab=n,e.processData=a,e.vids="v"+e.ids,e.grade=i,e.vipid=t.data.data.userinfo["vipid"],e.usermoney=t.data.data.userinfo["money"]?t.data.data.userinfo["money"]:0}})},open_grade:function(e){var t=this,a=this.baseinfo.ios,i=this.is_ios;if(1==i&&0==a)uni.showModal({title:"提示",content:"iOS系统不支持虚拟支付",showCancel:!1,success:function(e){uni.redirectTo({url:"/pages/index/index"})}});else{var n=e.currentTarget.dataset.grade,o=e.currentTarget.dataset.price,s=t.usermoney,r=0,d=0;s>=o?r=o:(r=s,d=o-s),uni.request({url:t.$baseurl+"doPagecreateorder",data:{uniacid:t.$uniacid,suid:uni.getStorageSync("suid"),source:uni.getStorageSync("source"),ordermoeny:o,yuemoney:r,money:d,open_grade:n,types:"vipgrade"},header:{"content-type":"application/json"},success:function(e){var a=e.data.data;a>0?0==d?uni.showModal({title:"请注意",content:"您将使用余额支付"+r+"元",success:function(e){e.confirm&&(t.payover_do(a),uni.showLoading({title:"下单中...",mask:!0}))}}):(t.zf_money=d,t.orderid=a,t.showpay()):uni.showModal({title:"提示",content:"生成订单失败",showCancel:!1})}})}},showpay:function(){var e=this;uni.request({url:this.$baseurl+"doPageGetH5payshow",data:{uniacid:this.$uniacid,suid:uni.getStorageSync("suid")},success:function(t){0==t.data.data.ali&&0==t.data.data.wx?uni.showModal({title:"提示",content:"请联系管理员设置支付参数",success:function(e){uni.redirectTo({url:"/pages/index/index"})}}):(0==t.data.data.ali?(e.alipay=0,e.pay_type=2):(e.alipay=1,e.pay_type=1),0==t.data.data.wx?e.wxpay=0:e.wxpay=1,e.show_pay_type=1)}})},changealipay:function(){this.pay_type=1},changewxpay:function(){this.pay_type=2},close_pay_type:function(){this.show_pay_type=0},h5topay:function(){var e=this.pay_type;1==e?this._alih5pay(this,this.zf_money,16,this.orderid):2==e&&this._wxh5pay(this,this.zf_money,"vipgrade",this.orderid),this.show_pay_type=0},payover_do:function(e,t){var a=this;uni.request({url:a.$baseurl+"dopagepaynotify",data:{uniacid:a.$uniacid,out_trade_no:e,suid:uni.getStorageSync("suid"),types:"vipgrade",open_grade:t},success:function(e){"失败"==e.data.data.message?uni.showToast({title:"付款失败, 请刷新后重新付款！",icon:"none",mask:!0,success:function(){}}):uni.showToast({title:"购买成功！",icon:"success",mask:!0,success:function(){a.getvipgrade()}})}})}}};t.default=n},cfb4:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'uni-page-body[data-v-5a9bdee6]{background-color:#fff;box-sizing:border-box}uni-view[data-v-5a9bdee6]{overflow:hidden}.mb-20[data-v-5a9bdee6]{margin-bottom:%?20?%}.head[data-v-5a9bdee6]{position:relative;height:%?314?%}.headBgColor[data-v-5a9bdee6]{height:%?316?%;width:100%;position:absolute;left:0;top:0}.headBgColor>uni-image[data-v-5a9bdee6]{width:%?546?%;height:%?240?%;position:absolute;left:0;right:0;bottom:%?-4?%;margin:auto}.card_num[data-v-5a9bdee6]{position:absolute;top:%?102?%;left:%?180?%;font-size:%?20?%}.card_name[data-v-5a9bdee6]{position:absolute;bottom:%?40?%;left:0;width:100%;\n\t\t/* left: 292rpx; */text-align:center;line-height:%?34?%}.card_name>uni-view[data-v-5a9bdee6]{width:%?20?%;height:%?2?%;background-color:#c4ad7d;display:inline-block;vertical-align:middle}.card_name>uni-text[data-v-5a9bdee6]{font-size:%?28?%;margin:0 %?6?%;vertical-align:middle}.color-c4ad7d[data-v-5a9bdee6]{color:#c4ad7d}.head_bg[data-v-5a9bdee6]{position:absolute;left:0;top:0;right:0}.w-750[data-v-5a9bdee6]{width:%?750?%}.bg_f[data-v-5a9bdee6]{box-shadow:0 %?2?% 6px #eee}.open1_middle[data-v-5a9bdee6]{width:%?564?%;height:%?56?%;background-color:#3c3e4a;border-radius:%?36?%;margin:auto;text-align:center}.open1_middle uni-text[data-v-5a9bdee6]{font-size:%?24?%;height:%?56?%;line-height:%?56?%;color:#efdbad}.quanyi[data-v-5a9bdee6]{\n\t\t/* width: 300rpx; */margin:%?40?% auto;text-align:center}.quanyi>uni-view[data-v-5a9bdee6]{width:%?4?%;height:%?14?%;background-color:#3c3e4a;display:inline-block;margin:%?0?% %?28?% %?4?%}.quanyi>uni-text[data-v-5a9bdee6]{font-size:%?30?%;font-weight:700;color:#434343}.open1_foot[data-v-5a9bdee6]{margin-bottom:%?40?%}.open1_foot>uni-view[data-v-5a9bdee6]{width:%?90?%;height:%?90?%;line-height:%?90?%;border:%?2?% solid #ebebeb;border-radius:50%;float:left;margin-left:%?30?%}.open1_foot uni-image[data-v-5a9bdee6]{width:%?50?%;height:%?50?%;display:block;margin:%?20?% auto}.open1_foot uni-text[data-v-5a9bdee6]{font-size:%?28?%;margin-left:%?18?%;height:%?90?%;line-height:%?90?%;float:left}.open1_foot[data-v-5a9bdee6]:after{clear:left;content:"";display:block}.btn1[data-v-5a9bdee6]{width:%?506?%;height:%?82?%;margin:%?20?% auto;background-color:#e1c386;color:#fff;border-radius:%?98?%;font-size:%?30?%}.btn1[data-v-5a9bdee6]:after{border-radius:%?98?%;border:0}uni-scroll-view[data-v-5a9bdee6]{white-space:nowrap;margin:%?34?% 0}uni-scroll-view[data-v-5a9bdee6] ::-webkit-scrollbar{width:0;height:0;color:transparent}.process_wrap[data-v-5a9bdee6]{overflow:hidden;\n\t\t/* display: flex; */-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;display:inline-block;width:%?150?%;height:%?122?%;text-align:center}.process uni-image[data-v-5a9bdee6]{width:%?48?%;height:%?46?%;display:block;margin:auto;box-sizing:border-box}.process_name[data-v-5a9bdee6]{font-size:%?24?%;color:#c4c4c8;text-align:center;margin-bottom:%?20?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.color-434343[data-v-5a9bdee6]{color:#434343}.border-434343[data-v-5a9bdee6]{height:%?2?%;background-color:#434343}.border-ebebed[data-v-5a9bdee6]{height:%?2?%;background-color:#ebebed}.bg-e1c386[data-v-5a9bdee6]{background-color:#e1c386}.bg-b9b9be[data-v-5a9bdee6]{background-color:#b9b9be}.process_line[data-v-5a9bdee6]{width:50%;display:inline-block}.process_radius[data-v-5a9bdee6]{width:%?10?%;height:%?10?%;border-radius:50%}.process_down[data-v-5a9bdee6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}\n\n\t/* .color-e1c386{\n  color: #e1c386;\n} */.prompt[data-v-5a9bdee6]{text-align:center;color:#e1c386}.prompt>uni-text[data-v-5a9bdee6]{margin:0 %?2?%}.swiper[data-v-5a9bdee6]{width:100%;height:%?1500?%!important}.descs[data-v-5a9bdee6]{padding:0 %?30?%}\n\n\t/*h5弹出start*/.zhezhao_z[data-v-5a9bdee6]{position:fixed;width:%?750?%;height:100%;top:0;background:rgba(0,0,0,.3);overflow:hidden;z-index:99}.zhezhao_z .t_w[data-v-5a9bdee6]{position:relative;z-index:100;overflow:visible;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.zhezhao_z .tanchu_view[data-v-5a9bdee6]{width:80%;margin:auto;overflow:hidden;background-color:#fff;border-radius:%?10?%;padding-top:%?20?%;box-sizing:border-box;text-align:center;position:relative}#chk[data-v-5a9bdee6]{width:%?70?%;height:%?70?%;margin-right:%?-6?%}.zhezhao_z .tanchu_view>uni-text[data-v-5a9bdee6]{font-size:%?44?%;font-weight:500;color:#333;height:%?100?%;line-height:%?100?%}.zhezhao_z .tanchu_view>uni-view[data-v-5a9bdee6]{height:%?100?%;line-height:%?100?%;overflow:visible;margin:%?20?% %?40?%}.view_left[data-v-5a9bdee6]{float:left}.view_right[data-v-5a9bdee6]{float:right}.view_right>uni-image[data-v-5a9bdee6]{width:%?60?%;height:%?60?%;vertical-align:middle}.zhezhao_z .tanchu_view>uni-view[data-v-5a9bdee6]:after{clear:both;content:"";display:block}.view_left>uni-image[data-v-5a9bdee6]{width:%?50?%;height:%?50?%;display:inline-block;vertical-align:middle;margin-right:%?30?%}.view_left>uni-text[data-v-5a9bdee6]{font-size:%?36?%;color:#333;font-weight:500}.zhezhao_z .btn_submit[data-v-5a9bdee6]{width:100%;height:%?110?%;line-height:%?110?%;background-color:#2f74fd;color:#fff;border:none;border-radius:%?10?%;font-size:%?38?%;margin:%?60?% auto 0;border-radius:0}uni-button[data-v-5a9bdee6]:after{border:none}.zhezhao_z .btn_submit>uni-text[data-v-5a9bdee6]{font-size:%?50?%}.close[data-v-5a9bdee6]{width:%?40?%;height:%?40?%;position:absolute;top:%?50?%;right:%?30?%}body.?%PAGE?%[data-v-5a9bdee6]{background-color:#fff}',""])},db35:function(e,t,a){"use strict";var i=a("61f3"),n=a.n(i);n.a}}]);