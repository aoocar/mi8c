(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-wxH5pay-wxH5pay"],{"0e58":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("4917");var r={data:function(){return{webviewStyles:{progress:{color:"#FF3333"}},url:""}},onLoad:function(e){this.$baseurl.match(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/);var t=e.order_id,n=uni.getStorageSync(t);console.log(n),this.url=n,setTimeout(function(){uni.redirectTo({url:"/pages/index/index"})},5e3),console.log(this.url)}};t.default=r},7004:function(e,t,n){"use strict";n.r(t);var r=n("bffe"),u=n("978c");for(var i in u)"default"!==i&&function(e){n.d(t,e,function(){return u[e]})}(i);var a=n("2877"),o=Object(a["a"])(u["default"],r["a"],r["b"],!1,null,"76f3e248",null);t["default"]=o.exports},"978c":function(e,t,n){"use strict";n.r(t);var r=n("0e58"),u=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=u.a},bffe:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-uni-web-view",{attrs:{"webview-styles":e.webviewStyles,src:e.url}})],1)},u=[];n.d(t,"a",function(){return r}),n.d(t,"b",function(){return u})}}]);