(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pagesSign-index-index"],{"1c4b":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("b54a");var i=a("55f5"),n={data:function(){return{bg:"",userinfo:"",hasEmptyGrid:!1,showPicker:!1,jilu:"",page_signs:"/pagesSign/index/index",tongj:{score:{}},choose_year:null,choose_month:null,weeks_ch:[],cur_year:"",cur_month:"",empytGrids:[],days:{},picker_value:[],picker_year:[],picker_month:[],needBind:!1,needAuth:!1,baseinfo:{},$imgurl:this.$imgurl,signsuccess:0,is_today:0}},onShareAppMessage:function(){return{title:"积分签到"}},onPullDownRefresh:function(){this.getsign(),uni.stopPullDownRefresh()},onLoad:function(e){var t=this;uni.setNavigationBarTitle({title:"积分签到"});var a=0;e.fxsid&&(a=e.fxsid),this.fxsid=a;var n=new Date,o=n.getFullYear(),r=n.getMonth()+1,c=["日","一","二","三","四","五","六"];this.calculateEmptyGrids(o,r),this.calculateDays(o,r),this.cur_year=o,this.cur_month=r,this.weeks_ch=c,this._baseMin(this);var s=uni.getStorageSync("suid");i.h5login(a,function(){t.getsign()}),s||(this.needAuth=!0)},methods:{pulls:function(e){uni.redirectTo({url:"/pagesSign/index/index"})},redirectto:function(e){var t=e.currentTarget.dataset.link,a=e.currentTarget.dataset.linktype;this._redirectto(t,a)},checkvip:function(){var e=this,t="";uni.request({url:e.$baseurl+"doPagecheckvip",data:{uniacid:e.$uniacid,kwd:"sign",openid:t},success:function(t){t.data.data||(e.needvip=!0,uni.showModal({title:"进入失败",content:"使用本功能需先开通vip!",showCancel:!1,success:function(e){e.confirm&&uni.redirectTo({url:"/pages/register/register"})}}))},fail:function(e){}})},getThisMonthDays:function(e,t){return new Date(e,t,0).getDate()},getFirstDayOfWeek:function(e,t){return new Date(Date.UTC(e,t-1,1)).getDay()},calculateEmptyGrids:function(e,t){var a=this.getFirstDayOfWeek(e,t),i=[];if(a>0){for(var n=0;n<a;n++)i.push(n);this.hasEmptyGrid=!0,this.empytGrids=i}else this.hasEmptyGrid=!1,this.empytGrids=[]},calculateDays:function(e,t){var a=this,i=(this.getThisMonthDays(e,t),"");uni.request({url:a.$baseurl+"doPageMysign",data:{uniacid:a.$uniacid,openid:i,year:e,month:t},success:function(e){e.data.data}})},handleCalendar:function(e){var t=e.currentTarget.dataset.handle,a=this.cur_year,i=this.cur_month;if("prev"===t){var n=i-1,o=a;n<1&&(o=a-1,n=12),this.calculateDays(o,n),this.calculateEmptyGrids(o,n),this.cur_year=o,this.cur_month=n}else{var r=i+1,c=a;r>12&&(c=a+1,r=1),this.calculateDays(c,r),this.calculateEmptyGrids(c,r),this.cur_year=c,this.cur_month=r}},tapDayItem:function(e){var t=e.currentTarget.dataset.idx,a=this.days;a[t].choosed=!a[t].choosed,that.days=a},chooseYearAndMonth:function(){for(var e=this.cur_year,t=this.cur_month,a=[],i=[],n=1900;n<=2100;n++)a.push(n);for(var o=1;o<=12;o++)i.push(o);var r=a.indexOf(e),c=i.indexOf(t);this.picker_value=[r,c],this.picker_year=a,this.picker_month=i,this.showPicker=!0},pickerChange:function(e){var t=e.detail.value;choose_year=this.picker_year[t[0]],choose_month=this.picker_month[t[1]]},tapPickerBtn:function(e){var t=e.currentTarget.dataset.type,a={showPicker:!1};"confirm"===t&&(a.cur_year=choose_year,a.cur_month=choose_month,this.calculateEmptyGrids(choose_year,choose_month),this.calculateDays(choose_year,choose_month)),this.o=a},getsign:function(){var e=this,t=uni.getStorageSync("suid");uni.request({url:e.$baseurl+"doPageMysign",data:{uniacid:e.$uniacid,suid:t},success:function(t){var a=t.data.data;e.days=a}}),uni.request({url:e.$baseurl+"doPageMysignjl",data:{uniacid:e.$uniacid,suid:t,source:uni.getStorageSync("source")},success:function(t){var a=t.data.data;e.userinfo=a.userinfo,e.jilu=a.alls}}),uni.request({url:e.$baseurl+"doPagemysigntj",data:{uniacid:e.$uniacid,suid:t,source:uni.getStorageSync("source")},success:function(t){var a=t.data.data;e.tongj=a,e.is_today=a.is_today}})},qiandao:function(){var e=this,t=uni.getStorageSync("suid");if(!this.getSuid())return!1;uni.request({url:e.$baseurl+"doPageQiandao",data:{uniacid:e.$uniacid,suid:t,source:uni.getStorageSync("source")},success:function(t){var a=t.data.data;1==a?uni.showModal({title:"提醒",content:"您今天已经签过到了！",showCancel:!1}):(e.signsuccess=1,e.is_today=1)}})},cell:function(){this.needAuth=!1},closeAuth:function(){this.needAuth=!1,this.needBind=!0},closeBind:function(){this.needBind=!1},getSuid:function(){var e=uni.getStorageSync("suid");if(e)return!0;var t="";return t?this.needBind=!0:this.needAuth=!0,!1}}};t.default=n},"2d5d":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.needAuth?a("auth",{attrs:{needAuth:e.needAuth},on:{closeAuth:function(t){t=e.$handleEvent(t),e.closeAuth(t)},cell:function(t){t=e.$handleEvent(t),e.cell(t)}}}):e._e(),e.needBind?a("bindPhone",{attrs:{needBind:e.needBind},on:{closeBind:function(t){t=e.$handleEvent(t),e.closeBind(t)}}}):e._e(),a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"binder",style:"background:url("+e.tongj.qdbg+") bottom  center "+e.baseinfo.base_color2+" no-repeat;color:"+e.baseinfo.base_tcolor+";background-size:100%"},[a("v-uni-view",{staticClass:"grxx"},[a("v-uni-image",{staticClass:"grxx_img",attrs:{src:e.userinfo.avatar}}),a("v-uni-view",{staticClass:"grxx_middle"},[a("v-uni-view",[e._v(e._s(e.userinfo.nickname))]),a("v-uni-view",{staticClass:"grxx_middle_jf"},[e._v("积分："+e._s(e.tongj.score.score))]),a("v-uni-navigator",{staticClass:"grxx_right",attrs:{url:"/pagesSign/ranking/ranking"}},[e._v("签到排行榜")])],1)],1),a("v-uni-view",{staticClass:"qdxx"},[a("v-uni-view",{staticClass:"qdxx1"},[a("v-uni-text",[e._v(e._s(e.tongj.paix))]),a("v-uni-text",[e._v("当前排名")])],1),a("v-uni-view",{staticClass:"qdxx1"},[a("v-uni-text",[e._v(e._s(e.tongj.all_count))]),a("v-uni-text",[e._v("累计签到")])],1),a("v-uni-view",{staticClass:"qdxx1"},[a("v-uni-text",[e._v(e._s(e.tongj.lianq))]),a("v-uni-text",[e._v("连续签到")])],1),a("v-uni-view",{staticClass:"qdxx1"},[a("v-uni-text",[e._v(e._s(e.tongj.maxlianq))]),a("v-uni-text",[e._v("最大连续")])],1)],1)],1),a("v-uni-view",{staticClass:"flexs box box-tb box-align-center"},[a("v-uni-view",{staticClass:"calendar pink-color box box-tb"},[a("v-uni-view",{staticClass:"top-handle fs28 box box-lr box-align-center box-pack-center"},[a("v-uni-view",{staticClass:"prev box box-rl",attrs:{"data-handle":"prev"},on:{click:function(t){t=e.$handleEvent(t),e.handleCalendar(t)}}},[a("v-uni-view",{staticClass:"prev-handle box box-lr box-align-center box-pack-center"},[e._v("《")])],1),a("v-uni-view",{staticClass:"date-area box box-lr box-align-center box-pack-center",on:{click:function(t){t=e.$handleEvent(t),e.chooseYearAndMonth(t)}}},[e._v(e._s(e.cur_year||"--")+"\n\t\t\t\t\t\t年 "+e._s(e.cur_month||"--")+" 月")]),a("v-uni-view",{staticClass:"next box box-lr",attrs:{"data-handle":"next"},on:{click:function(t){t=e.$handleEvent(t),e.handleCalendar(t)}}},[a("v-uni-view",{staticClass:"next-handle box box-lr box-align-center box-pack-center"},[e._v("》")])],1)],1),a("v-uni-view",{staticClass:"weeks box box-lr box-pack-center box-align-center"},e._l(e.weeks_ch,function(t,i){return a("v-uni-view",{directives:[{name:"key",rawName:"v-key",value:i,expression:"index"}],key:i,staticClass:"flexs week fs28",staticStyle:{"text-align":"center"},attrs:{"data-idx":i}},[e._v(e._s(t))])}),1),a("v-uni-view",{staticClass:"days box box-lr box-wrap"},[e._l(e.empytGrids,function(t,i){return e.hasEmptyGrid?a("v-uni-view",{directives:[{name:"key",rawName:"v-key",value:i,expression:"index"}],key:i,staticClass:"grid white-color box box-align-center box-pack-center",attrs:{"data-idx":i}}):e._e()}),e._l(e.days,function(t,i){return a("v-uni-view",{directives:[{name:"key",rawName:"v-key",value:i,expression:"index"}],key:i,staticClass:"grid white-color box box-align-center box-pack-center",attrs:{"data-idx":i}},[a("v-uni-view",{staticClass:"day box box-align-center box-pack-center",class:t.choosed?"border-radius":"",style:{background:t.choosed?e.baseinfo.base_color:""}},[e._v(e._s(t.day))])],1)})],2)],1)],1),e.showPicker?a("v-uni-view",{staticClass:"box box-tb"},[a("v-uni-view",{staticClass:"picker-btns box box-lr box-pack-between box-align-center"},[a("v-uni-view",{staticClass:"picker-btn picker-cancel",attrs:{"data-type":"cancel"},on:{click:function(t){t=e.$handleEvent(t),e.tapPickerBtn(t)}}},[e._v("取消")]),a("v-uni-view",{staticClass:"picker-btn picker-confirm",attrs:{"data-type":"confirm"},on:{click:function(t){t=e.$handleEvent(t),e.tapPickerBtn(t)}}},[e._v("确定")])],1),a("v-uni-picker-view",{staticClass:"flexs",staticStyle:{width:"100%",height:"150px"},attrs:{"indicator-style":"height: 50px;",value:e.picker_value},on:{change:function(t){t=e.$handleEvent(t),e.pickerChange(t)}}},[a("v-uni-picker-view-column",e._l(e.picker_year,function(t,i){return a("v-uni-view",{key:i,staticClass:"picker-view",staticStyle:{"line-height":"50px"}},[e._v(e._s(t)+"年")])}),1),a("v-uni-picker-view-column",e._l(e.picker_month,function(t,i){return a("v-uni-view",{key:i,staticClass:"picker-view",staticStyle:{"line-height":"50px"}},[e._v(e._s(t)+"月")])}),1)],1)],1):e._e(),0==e.is_today?a("v-uni-view",{staticClass:"ljqd",style:"background-color:"+e.baseinfo.base_color2,on:{click:function(t){t=e.$handleEvent(t),e.qiandao(t)}}},[e._v("立即签到")]):e._e(),1==e.is_today?a("v-uni-view",{staticClass:"ljqd",staticStyle:{"background-color":"gray"}},[e._v("已签到")]):e._e(),a("v-uni-view",{staticClass:"hjjl"},[a("v-uni-text",[e._v("签到记录")])],1),e._l(e.jilu,function(t,i){return a("v-uni-view",{key:i,staticClass:"qdnr"},[a("v-uni-image",{attrs:{src:e.userinfo.avatar}}),a("v-uni-view",{staticClass:"qdnr_view"},[a("v-uni-text",{staticClass:"qdnr_text1"},[e._v(e._s(e.userinfo.nickname))]),a("v-uni-text",{staticClass:"qdnr_text2"},[e._v(e._s(t.creattime))])],1),a("v-uni-view",{staticClass:"qdnr_right"},[e._v("+"+e._s(t.score))])],1)})],2),1==e.signsuccess?a("v-uni-view",{staticClass:"zhezhao"},[a("v-uni-view",{staticClass:"sign"},[a("v-uni-view",[e._v("签到成功")]),a("v-uni-image",{staticStyle:{width:"190rpx",display:"block"},attrs:{src:e.$imgurl+"sign.png",mode:"widthFix"}}),a("v-uni-button",{staticStyle:{margin:"0 auto"},on:{click:function(t){t=e.$handleEvent(t),e.pulls(t)}}},[e._v("确定")])],1)],1):e._e()],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})},"41f59":function(e,t,a){"use strict";a.r(t);var i=a("1c4b"),n=a.n(i);for(var o in i)"default"!==o&&function(e){a.d(t,e,function(){return i[e]})}(o);t["default"]=n.a},"7e98":function(e,t,a){"use strict";var i=a("ba7a"),n=a.n(i);n.a},ae3e:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'.binder[data-v-0ab5af1c]{width:%?750?%;height:%?320?%;position:relative;background-size:cover}.grxx[data-v-0ab5af1c]{position:absolute;left:%?30?%;top:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.grxx_img[data-v-0ab5af1c]{width:%?146?%;height:%?146?%;border-radius:%?146?%;margin-right:%?30?%;border:%?4?% solid #fff}.grxx_middle[data-v-0ab5af1c]{width:%?500?%;color:#fff;font-size:%?30?%;padding-top:%?30?%;margin-right:%?20?%;font-weight:700}.grxx_middle_jf[data-v-0ab5af1c]{font-size:%?24?%;font-weight:400;margin-top:%?16?%;float:left}.grxx_right[data-v-0ab5af1c]{border:1px solid #fff;font-size:%?24?%;color:#fff;border-radius:%?6?%;text-align:center;float:left;padding:%?2?% %?6?%;margin:%?10?% 0 0 %?20?%;font-weight:400}.qdxx[data-v-0ab5af1c]{position:absolute;left:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:100%;background:rgba(0,0,0,.38);padding:%?10?% 0}.qdxx1[data-v-0ab5af1c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#f0f0f0;font-size:%?26?%;text-align:center;width:25%}.qdxx2[data-v-0ab5af1c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:#f0f0f0;font-size:%?26?%;text-align:center}.on[data-v-0ab5af1c]{background-color:#fbce2f}.hjjl[data-v-0ab5af1c]{width:%?660?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:0 %?45?%}.hjjl uni-text[data-v-0ab5af1c]{font-size:%?30?%;margin-top:%?25?%;font-weight:700}.hjjl uni-image[data-v-0ab5af1c]{width:%?40?%;height:%?50?%;margin-top:%?20?%;margin-left:%?500?%}.qdnr[data-v-0ab5af1c]{width:%?660?%;border-top:1px solid #f2f2f2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:0 %?45?%;padding-bottom:%?20?%}.qdnr uni-image[data-v-0ab5af1c]{margin-top:%?20?%;width:%?64?%;height:%?64?%;border-radius:%?64?%}.qdnr_view[data-v-0ab5af1c]{margin-left:%?20?%;margin-top:%?26?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:%?500?%}.qdnr_text1[data-v-0ab5af1c]{font-size:%?24?%;font-weight:900}.qdnr_text2[data-v-0ab5af1c]{font-size:%?20?%;color:#999}.qdnr_right[data-v-0ab5af1c]{margin-top:%?26?%;color:#db6f34;font-size:%?30?%}.ljqd[data-v-0ab5af1c]{width:%?720?%;height:%?80?%;font-size:%?30?%;line-height:%?80?%;text-align:center;color:#fff;font-weight:700;border-radius:%?8?%;margin:0 auto;margin-bottom:%?10?%}.top-handle[data-v-0ab5af1c]{height:%?80?%}.prev[data-v-0ab5af1c]{text-align:right;height:%?80?%}.next[data-v-0ab5af1c]{height:%?80?%}.prev-handle[data-v-0ab5af1c]{width:%?80?%;height:100%;color:#999}.next-handle[data-v-0ab5af1c]{width:%?80?%;height:100%;color:#999}.date-area[data-v-0ab5af1c]{width:50%;height:%?80?%;text-align:center;color:#333}.weeks[data-v-0ab5af1c]{height:%?50?%;line-height:%?50?%;opacity:.5}.week[data-v-0ab5af1c]{text-align:center;color:#000}.days[data-v-0ab5af1c]{height:%?500?%}.grid[data-v-0ab5af1c]{width:%?107.1428571429?%}.day[data-v-0ab5af1c]{width:%?60?%;height:%?60?%;color:#333;font-size:%?26?%;font-weight:200}.border-radius[data-v-0ab5af1c]{border-radius:50%;position:relative;left:0;top:0;color:#fff}.right-triangle[data-v-0ab5af1c]:after{content:"";display:block;width:0;height:0;border:%?15?% solid rgba(0,0,0,0);border-left-color:#ff629a;position:absolute;right:%?-22?%;top:%?18?%}.left-triangle[data-v-0ab5af1c]:before{content:"";display:block;width:0;height:0;border:%?15?% solid rgba(0,0,0,0);border-right-color:#ff629a;position:absolute;left:%?-22?%;top:%?18?%}.tips[data-v-0ab5af1c]{text-align:center;margin-top:%?20?%;margin-bottom:%?20?%}.types[data-v-0ab5af1c]{background-color:#ffedf4;height:%?50?%}.type-dot[data-v-0ab5af1c]{width:%?25?%;height:%?25?%;border-radius:50%;margin-right:%?10?%}.type-dot-ymq[data-v-0ab5af1c]{color:#ff7ca0;background-color:#ff7ca0}.type-dot-ycq[data-v-0ab5af1c]{color:#ffc8ca;background-color:#ffc8ca}.type-dot-aqq[data-v-0ab5af1c]{color:#76bf5c;background-color:#76bf5c}.type-dot-yyq[data-v-0ab5af1c]{color:#ff7ca0;background-color:#ff7ca0}.type-dot-plr[data-v-0ab5af1c]{color:#d3bdd7;background-color:#d3bdd7}.types-desc[data-v-0ab5af1c]{padding:0 %?20?%}.type-name[data-v-0ab5af1c]{margin-top:%?50?%;margin-bottom:%?30?%}.type-desc[data-v-0ab5af1c]{padding:0 %?35?%;line-height:%?38?%}.explain[data-v-0ab5af1c]{border-top:1px solid #eee;width:90%;margin:%?20?% 5% %?20?% 5%;padding:%?20?% 0}.explain-title[data-v-0ab5af1c]{font-weight:700;margin-bottom:%?15?%}.explain-item[data-v-0ab5af1c]{padding:%?8?% %?20?%;color:#fff}.left-border-radius[data-v-0ab5af1c]{border-top-left-radius:%?20?%;border-bottom-left-radius:%?20?%}.right-border-radius[data-v-0ab5af1c]{border-top-right-radius:%?20?%;border-bottom-right-radius:%?20?%}.picker-btns[data-v-0ab5af1c]{height:%?120?%;line-height:%?120?%;border-bottom:%?1?% solid #ff7ca0}.picker-confirm[data-v-0ab5af1c]{margin-right:%?50?%}.picker-cancel[data-v-0ab5af1c]{margin-left:%?50?%}.picker-view[data-v-0ab5af1c]{color:#ff7ca0;text-align:center}.container[data-v-0ab5af1c]{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box}uni-page-body[data-v-0ab5af1c]{background-color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.box[data-v-0ab5af1c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.box-lr[data-v-0ab5af1c]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.box-rl[data-v-0ab5af1c]{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.box-tb[data-v-0ab5af1c]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.box-bt[data-v-0ab5af1c]{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.box-pack-center[data-v-0ab5af1c]{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.box-pack-start[data-v-0ab5af1c]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.box-pack-end[data-v-0ab5af1c]{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.box-pack-between[data-v-0ab5af1c]{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.box-pack-around[data-v-0ab5af1c]{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.box-align-center[data-v-0ab5af1c]{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.box-align-start[data-v-0ab5af1c]{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.box-align-end[data-v-0ab5af1c]{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.self-align-center[data-v-0ab5af1c]{-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;margin:0 auto}.self-align-start[data-v-0ab5af1c]{-webkit-align-self:flex-start;-ms-flex-item-align:start;align-self:flex-start}.self-align-end[data-v-0ab5af1c]{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end}.self-align-stretch[data-v-0ab5af1c]{-webkit-align-self:stretch;-ms-flex-item-align:stretch;align-self:stretch}.box-wrap[data-v-0ab5af1c]{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.box-nowrap[data-v-0ab5af1c]{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.flexs[data-v-0ab5af1c]{-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1}.shrink[data-v-0ab5af1c]{-webkit-flex-shrink:1;-ms-flex-negative:1;flex-shrink:1}.bg[data-v-0ab5af1c]{background-image:-webkit-gradient(linear,left top,left bottom,from(#faefe7),to(#ffcbd7));background-image:-o-linear-gradient(top,#faefe7,#ffcbd7);background-image:linear-gradient(180deg,#faefe7,#ffcbd7);overflow:hidden}.brown-color[data-v-0ab5af1c]{color:#784344}.pink-color[data-v-0ab5af1c]{color:#ff629a}.white-color[data-v-0ab5af1c]{color:#fff}.fs24[data-v-0ab5af1c]{font-size:%?24?%}.fs28[data-v-0ab5af1c]{font-size:%?28?%}.fs32[data-v-0ab5af1c]{font-size:%?32?%}.fs36[data-v-0ab5af1c]{font-size:%?36?%}.sign[data-v-0ab5af1c]{width:%?430?%;border-radius:%?10?%;background-color:#fff;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);padding:%?46?%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center}.sign>uni-view[data-v-0ab5af1c]{font-size:%?32?%;color:#333;font-weight:700;margin:%?8?% 0}.sign>uni-button[data-v-0ab5af1c]{background-color:#4690f1;color:#fff;font-size:%?30?%;border-radius:%?50?%;width:%?210?%}.sign>uni-image[data-v-0ab5af1c]{margin:%?40?% auto}body.?%PAGE?%[data-v-0ab5af1c]{background-color:#fff}',""])},ba7a:function(e,t,a){var i=a("ae3e");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("61346b56",i,!0,{sourceMap:!1,shadowMode:!1})},f192:function(e,t,a){"use strict";a.r(t);var i=a("2d5d"),n=a("41f59");for(var o in n)"default"!==o&&function(e){a.d(t,e,function(){return n[e]})}(o);a("7e98");var r=a("2877"),c=Object(r["a"])(n["default"],i["a"],i["b"],!1,null,"0ab5af1c",null);t["default"]=c.exports}}]);