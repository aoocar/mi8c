(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["pages-catelist-catelist"], {
        "0eee": function(i, t, e) {
            "use strict";
            var a = e("288e");
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
            var s = a(e("5601")),
                o = a(e("cbc1")),
                n = e("55f5"),
                r = {
                    components: { list_pro_td: s.default, list_pro: o.default },
                    data: function() { return { $host: this.$host, $imgurl: this.$imgurl, page: 1, minHeight: 180, morePro: !0, ProductsList: [], baseinfo: {}, orderOrBusiness: "order", block: !1, logs: [], goodsH: 0, scrollToGoodsView: 0, toView: "", toViewType: "", GOODVIEWID: "catGood_", animation: !0, goodsNumArr: [0], shoppingCart: {}, shoppingCartGoodsId: [], goodMap: {}, chooseGoodArr: [], totalNum: 0, totalPay: 0, showShopCart: !1, fromClickScroll: !1, timeStart: "", timeEnd: "", hideCount: !0, count: 0, needAni: !1, hide_good_box: !0, url: "", protype: 1, heighthave: 0, from_top: 0, cid: 0, cateslide: [], cate_list: "", chessRoomDetail: {}, catHighLightIndex: 0, catList: {}, towlist: [], page_signs: "/PagesA/catelist/catelist?type=showProMore", type: "showProMore", searchtitle: "", slide_is: 0, slides: "", swiperCurrent: 0, catestyle: 0, prolists: "", prolists_length: 0, prodataid: 0, sub_cate_name: "", catfour: 0, fourlist: [], guige: 0, pid: 0, proinfo: "", gzjson: "", grouparr: "", num: 1, newstr: "", use_more: 0, discounts: 0, gwc: "", gm: "", products: "", needAuth: !1, needBind: !1, tobuy: 1, baseproinfo: "", top_cid: 0, sub_cid: 0, sub_cate: [], sub_cate_length: 0 } },
                    onLoad: function(i) {
                        var t = this;
                        this.cid = i.cid, this.cid > 0 && (this.top_cid = this.cid, this.page_signs = "/PagesA/catelist/catelist?cid=" + this.cid), this._baseMin(this);
                        var e = 0;
                        i.fxsid && (e = i.fxsid), this.fxsid = e, i.type && (this.type = i.type);
                        var a = uni.getStorageSync("suid");
                        a ? n.h5login(e, function() { t.getList(), t._getSuperUserInfo(t) }) : this.getList()
                    },
                    onPullDownRefresh: function() { this.page = 1, this.sub_cid = 0, this.top_cid = this.cid, this.getList(), uni.stopPullDownRefresh() },
                    methods: {
                        scrollHandler: function() { this.onReachBottoms() },
                        onReachBottoms: function() {
                            var i = this;
                            if (this.morePro) {
                                var t = i.page + 1;
                                i.top_cid;
                                uni.request({ url: i.$host + "/api/mainwxapp/doPagelistAllPic", data: { page: t, type: i.type, uniacid: i.$uniacid, top_cid: i.top_cid, sub_cid: i.sub_cid, suid: uni.getStorageSync("suid") }, success: function(e) { "" != e.data.data.prolists ? (i.prolists = i.prolists.concat(e.data.data.prolists), i.page = t) : i.morePro = !1 } })
                            }
                        },
                        toprodetail: function(i) {
                            var t = i.currentTarget.dataset.id;
                            if ("showProMore" == this.type) var e = "/pages/showProMore/showProMore?id=" + t;
                            else if ("flashSale" == this.type) e = "/pagesFlashSale/showPro/showPro?id=" + t;
                            else e = "/pagesReserve/proDetail/proDetail?id=" + t;
                            uni.navigateTo({ url: e })
                        },
                        cell: function() { this.needAuth = !1 },
                        closeAuth: function() { this.needAuth = !1, this.needBind = !0 },
                        closeBind: function() { console.log("closeBind"), this.needBind = !1, this.checkApply() },
                        getSuid: function() { var i = uni.getStorageSync("suid"); if (i) return !0; var t = ""; return t ? this.needBind = !0 : this.needAuth = !0, !1 },
                        checkvip: function(i) {
                            var t = this,
                                e = uni.getStorageSync("suid");
                            uni.request({
                                url: t.$host + "/api/MainWxapp/doPagecheckvip",
                                data: { uniacid: t.$uniacid, kwd: "duo", suid: e, id: t.pid, gz: 1 },
                                success: function(e) {
                                    if (!1 === e.data.data) return t.needvip = !0, uni.showModal({ title: "进入失败", content: "使用本功能需先开通vip!", showCancel: !1, success: function(i) { i.confirm && uni.redirectTo({ url: "/pages/register/register" }) } }), !1;
                                    if (e.data.data.needgrade > 0)
                                        if (t.needvip = !0, e.data.data.grade > 0)
                                            if (e.data.data.grade < e.data.data.needgrade) uni.showModal({ title: "进入失败", content: "使用本功能需成为" + e.data.data.vipname + "等级会员,请先开通会员等级!", showCancel: !1, success: function(i) { i.confirm && uni.redirectTo({ url: "/pages/open1/open1" }) } });
                                            else { var a = i.currentTarget.dataset.type; "gwc" == a ? t.gwcget() : "gm" == a && t.gmget() }
                                    else if (e.data.data.grade < e.data.data.needgrade) uni.showModal({ title: "进入失败", content: "使用本功能需成为" + e.data.data.vipname + "(" + e.data.data.needgrade + "级)以上等级会员,请先开通会员后再升级会员等级!", showCancel: !1, success: function(i) { i.confirm && uni.redirectTo({ url: "/pages/register/register" }) } });
                                    else {
                                        if (1 == t.use_more) a = i.currentTarget.dataset.type;
                                        else a = t.buy_type;
                                        "gwc" == a ? t.gwcget() : "gm" == a && t.gmget()
                                    } else { a = i.currentTarget.dataset.type; "gwc" == a ? t.gwcget() : "gm" == a && t.gmget() }
                                },
                                fail: function(i) {}
                            })
                        },
                        swiperChange: function(i) { this.swiperCurrent = i.target.current },
                        handleTap: function(i) {
                            var t = this,
                                e = i.currentTarget.id.slice(1);
                            e && (t.cid = e, t.page = 1, t.from_top = 1, t.getList(e))
                        },
                        getList: function() {
                            var i = this;
                            i.page;
                            uni.request({
                                url: i.$host + "/api/MainWxapp/doPagelistAllPic",
                                data: { uniacid: i.$uniacid, type: i.type, top_cid: i.top_cid, sub_cid: i.sub_cid, suid: uni.getStorageSync("suid") },
                                success: function(t) {
                                    var e = uni.getStorageSync("systemInfo");
                                    i.goodsH = e.windowHeight - 55, i.slide_is = t.data.data.slide_is, i.slides = t.data.data.slides, i.catestyle = t.data.data.catestyle, i.catList = t.data.data.top_cate, i.top_cid = t.data.data.top_cid, i.sub_cate = t.data.data.sub_cate, i.sub_cate_length = t.data.data.sub_cate.length, i.sub_cid = t.data.data.sub_cid, i.prolists = t.data.data.prolists, i.prolists_length = i.prolists.length, i.sub_cate_name = t.data.data.sub_cate_name, i.prodataid = 0
                                },
                                fail: function(i) { console.log(i) }
                            })
                        },
                        getList1: function() {
                            var i = this;
                            i.page;
                            uni.request({
                                url: i.$host + "/api/MainWxapp/doPagelistAllPic",
                                data: { uniacid: i.$uniacid, type: i.type, top_cid: i.top_cid, sub_cid: i.sub_cid, suid: uni.getStorageSync("suid") },
                                success: function(t) {
                                    var e = uni.getStorageSync("systemInfo");
                                    i.goodsH = e.windowHeight - 55, i.slide_is = t.data.data.slide_is, i.slides = t.data.data.slides, i.catestyle = t.data.data.catestyle, i.catList = t.data.data.top_cate, i.top_cid = t.data.data.top_cid, i.sub_cate = t.data.data.sub_cate, i.sub_cate_length = t.data.data.sub_cate.length, i.sub_cid = t.data.data.sub_cid, i.prolists = t.data.data.prolists, i.prolists_length = i.prolists.length, i.sub_cate_name = t.data.data.sub_cate_name
                                },
                                fail: function(i) { console.log(i) }
                            })
                        },
                        swiperLoad: function(i) {
                            var t = this;
                            uni.getSystemInfo({
                                success: function(e) {
                                    var a = i.detail.width,
                                        s = i.detail.height,
                                        o = a / s,
                                        n = e.windowWidth / o;
                                    t.heighthave || (t.minHeight = n, t.heighthave = 1)
                                }
                            })
                        },
                        goodsViewScrollFn: function(i) { this.getIndexFromHArr(i.detail.scrollTop) },
                        getIndexFromHArr: function(i) {
                            for (var t = 0; t < this.goodsNumArr.length; t++) {
                                var e = i - 40 * t;
                                e >= this.goodsNumArr[t] && e < this.goodsNumArr[t + 1] && (this.fromClickScroll || (this.catHighLightIndex = t))
                            }
                            this.fromClickScroll = !1
                        },
                        catClickFn: function(i) {
                            var t = i.currentTarget.dataset.id,
                                e = this.catestyle;
                            1 == e || 2 == e ? t != this.top_cid && (this.top_cid = t, this.sub_cid = 0) : this.sub_cid = t, this.page = 1, this.morePro = !0, this.getList()
                        },
                        catClickright: function(i) {
                            var t = i.currentTarget.dataset.id,
                                e = this.sub_cate[t]["id"];
                            e != this.sub_cid && (this.prodataid = t, this.sub_cid = e, this.page = 1, this.morePro = !0, this.getList1())
                        },
                        getProModel: function() {
                            var i = this;
                            uni.request({
                                url: i.$host + "/api/MainWxapp/doPagegetProModel",
                                data: { uniacid: i.$uniacid, suid: uni.getStorageSync("suid"), pid: i.pid },
                                success: function(t) {
                                    i.num = 1, i.proinfo = t.data.data, i.use_more = t.data.data.use_more, i.newstr = t.data.data.arr_selected, i.discounts = t.data.data.discount, i.gzjson = t.data.data.grouparr_val, i.grouparr = t.data.data.grouparr;
                                    var e = i.grouparr;
                                    if (e)
                                        for (var a = 0; a < e.length; a++) e[a] + "、";
                                    else i.newstr = "";
                                    i.guige = 1
                                },
                                fail: function(i) { console.log(i) }
                            })
                        },
                        guige_block: function(i) { this.pid = i.currentTarget.dataset.id, this.getProModel() },
                        guige_hidden: function() { this.guige = 0 },
                        getproinfo: function() {
                            for (var i = this, t = i.gzjson, e = i.grouparr, a = "", s = "", o = i.pid, n = 0; n < e.length; n++) {
                                var r = t[e[n]]["val"],
                                    c = t[e[n]]["ck"];
                                a += r[c] + "######", s += r[c] + ";"
                            }
                            var l = a.substring(0, a.length - 6);
                            s = s.substring(0, s.length - 1);
                            uni.request({
                                url: i.$host + "/api/MainWxapp/doPageGuigeInfo",
                                data: { uniacid: i.$uniacid, id: o, str: l },
                                success: function(t) {
                                    var e = t.data.data;
                                    e["proinfo"]["discount_price"] = 0, i.discounts > 0 && (e["proinfo"]["discount_price"] = (e["proinfo"]["price"] * i.discounts * .1).toFixed(2) < .01 ? .01 : (e["proinfo"]["price"] * i.discounts * .1).toFixed(2)), i.proinfo = e["proinfo"], i.baseproinfo = e["baseinfo"], i.newstr = s, 1 == e["baseinfo"]["is_sale"] && uni.showModal({ title: "提示", content: "该商品已下架,请选择其他商品", showCancel: !1, success: function() { uni.redirectTo({ url: "/pages/index/index" }) } })
                                },
                                fail: function(i) { console.log(i) }
                            })
                        },
                        changepro: function(i) {
                            var t = this,
                                e = i.target.dataset.id,
                                a = (t.grouparr, i.target.dataset.index),
                                s = t.gzjson;
                            s[e]["ck"] = a, t.gzjson = s, t.tobuy = 0, t.getproinfo()
                        },
                        num_add: function() {
                            var i = this.proinfo,
                                t = i.kc,
                                e = this.num;
                            e += 1, e > t && (uni.showModal({ title: "提醒", content: "您的购买数量超过了库存！", showCancel: !1 }), e--), this.num = e
                        },
                        num_jian: function() {
                            var i = this.num;
                            1 == i ? this.num = 1 : (i -= 1, this.num = i)
                        },
                        gmget: function() {
                            if (this.getSuid()) {
                                var i = this,
                                    t = i.tobuy,
                                    e = i.num;
                                if (1 == t) {
                                    var a = i.proinfo;
                                    console.log(111)
                                } else {
                                    console.log(111);
                                    a = i.proinfo;
                                    var s = i.baseproinfo;
                                    s["id"] = a["id"], s["kc"] = a["kc"], a = s
                                }
                                if (1 == a.is_sale && uni.showModal({ title: "提示", content: "该商品已下架,请选择其他商品", showCancel: !1, success: function() { uni.redirectTo({ url: "/pages/index/index" }) } }), 0 == a["kc"]) return uni.showModal({ title: "提醒", content: "您来晚了，已经卖完了！", showCancel: !1 }), !1;
                                if (1 == a.use_more) var o = i.pid + "|" + a.id + "|" + e;
                                else o = i.pid + "|-1|" + e;
                                var n = [];
                                n.push(o), uni.setStorage({ key: "buydata", data: n }), uni.navigateTo({ url: "/pages/order_down/order_down?discounts=" + i.discounts + "&stores=" + i.stores })
                            }
                        },
                        gwcget: function() {
                            if (this.getSuid()) {
                                var i = this,
                                    t = i.proinfo,
                                    e = i.num,
                                    a = (uni.getStorageSync("suid"), i.baseproinfo);
                                if (1 == a.is_sale && uni.showModal({ title: "提示", content: "该商品已下架,请选择其他商品", showCancel: !1, success: function() { uni.redirectTo({ url: "/pages/index/index" }) } }), 0 == t["kc"]) return uni.showModal({ title: "提醒", content: "您来晚了，已经卖完了！", showCancel: !1 }), !1;
                                uni.request({ url: i.$host + "/api/MainWxapp/dopagegwcadd", data: { uniacid: this.$uniacid, suid: uni.getStorageSync("suid"), id: t.id, pid: i.pid, prokc: e }, success: function(t) { uni.showToast({ title: "加入成功", icon: "success", duration: 2e3, success: function() { i.guige_hidden() } }) } })
                            }
                        },
                        tabChange: function(i) { this.orderOrBusiness = i.currentTarget.dataset.id },
                        tiaozhuang: function(i) {
                            var t = i.currentTarget.dataset.id,
                                e = (i.currentTarget.dataset.types, i.currentTarget.dataset.ismore, "");
                            e = "/PagesA/checkPro/checkPro?cid=" + t + "&type=" + this.type + "&from_top=1", uni.navigateTo({ url: e })
                        },
                        serachInput: function(i) { this.searchtitle = i.detail.value },
                        search: function() {
                            var i = this.searchtitle;
                            i ? "showProMore" == this.type ? uni.navigateTo({ url: "/PagesA/checkPro/checkPro?title=" + i + "&type=" + this.type }) : uni.navigateTo({ url: "/pages/search/search?title=" + i + "&type=" + this.type }) : uni.showModal({ title: "提示", content: "请输入搜索内容！", showCancel: !1 })
                        }
                    }
                };
            t.default = r
        },
        1065: function(i, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
            var a = { name: "list_pro_td", props: ["item", "c"], data: function() { return { $imgurl: this.$imgurl } } };
            t.default = a
        },
        "2ba9": function(i, t, e) {
            "use strict";
            e.r(t);
            var a = e("f0db"),
                s = e.n(a);
            for (var o in a) "default" !== o && function(i) { e.d(t, i, function() { return a[i] }) }(o);
            t["default"] = s.a
        },
        "34df": function(i, t, e) {
            var a = e("56b8");
            "string" === typeof a && (a = [
                [i.i, a, ""]
            ]), a.locals && (i.exports = a.locals);
            var s = e("4f06").default;
            s("7296d7c4", a, !0, { sourceMap: !1, shadowMode: !1 })
        },
        5601: function(i, t, e) {
            "use strict";
            e.r(t);
            var a = e("6faf"),
                s = e("8eab");
            for (var o in s) "default" !== o && function(i) { e.d(t, i, function() { return s[i] }) }(o);
            var n = e("2877"),
                r = Object(n["a"])(s["default"], a["a"], a["b"], !1, null, "41deb04a", null);
            t["default"] = r.exports
        },
        "56b8": function(i, t, e) { t = i.exports = e("2350")(!1), t.push([i.i, "uni-page-body[data-v-0a862eb2]{background:#f2f2f2}.goods[data-v-0a862eb2]{width:100%;background:#fff}.goods_choose[data-v-0a862eb2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.menu-wrapper[data-v-0a862eb2]{-webkit-box-flex:0;-webkit-flex:0 0 80px;-ms-flex:0 0 80px;flex:0 0 80px;width:20%;background:#f6f6f6}.menu-item[data-v-0a862eb2]{display:block;height:%?110?%;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 %?12?%;line-height:%?110?%;color:#666;font-size:%?24?%;text-align:center;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;border-bottom:%?4?% solid #fff}.menu-item.current[data-v-0a862eb2]{color:#333;background:#fff;font-size:%?26?%\n\t/* border-left: 8rpx solid #ffd946; */}.menu-item .current_box[data-v-0a862eb2]{display:inline-block;width:%?6?%;height:%?20?%;margin-right:%?10?%;border-radius:%?10?%}.foods-wrapper[data-v-0a862eb2]{width:80%;min-width:0}.slld1[data-v-0a862eb2]{overflow:hidden;font-weight:700;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;margin-bottom:%?6?%}.slld2[data-v-0a862eb2]{overflow-y:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;font-size:%?24?%;min-height:%?36?%;max-height:%?72?%;display:block;line-height:%?36?%;margin-bottom:%?6?%}.xnerkd[data-v-0a862eb2]{padding:%?20?%;font-size:%?24?%;border-bottom:%?2?% solid #eee;font-weight:700}.renmb[data-v-0a862eb2]{font-size:%?26?%}.price2[data-v-0a862eb2]{float:left;color:#ff4965}.price3[data-v-0a862eb2]{float:left;color:#999;margin-left:10px;text-decoration:line-through}.cateslide2[data-v-0a862eb2]{padding:0 %?20?% 0}\n\n.swi_img[data-v-0a862eb2]{width:100%;height:%?160?%;margin-top:%?34?%;border-radius:%?10?%}.active_img[data-v-0a862eb2]{height:%?220?%;margin-top:0}.food-grouping[data-v-0a862eb2]{width:33.3%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center;display:inline-block}.food-grouping>uni-image[data-v-0a862eb2]{width:%?100?%;height:%?100?%;display:block;margin:auto;border-radius:%?10?%}.food-grouping2[data-v-0a862eb2]{width:auto;display:inline-block;margin-right:%?20?%;padding:%?2?% %?10?%;font-size:%?24?%;-webkit-box-sizing:border-box;box-sizing:border-box;border:%?2?% solid #ececec;border-radius:%?8?%;color:#666}.active_fg2[data-v-0a862eb2]{background:-webkit-gradient(linear,left top,right top,from(#e98371),to(#ec5c3e));background:-o-linear-gradient(left,#e98371,#ec5c3e);background:linear-gradient(90deg,#e98371,#ec5c3e);border:none;color:#fff}\n\n.food-grouping>uni-view[data-v-0a862eb2]{font-size:%?22?%;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;margin-top:%?10?%}.input-style[data-v-0a862eb2]{border:0;height:%?70?%;line-height:%?70?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?26?%;background:#f6f6f6;padding-left:%?60?%}.searchBox[data-v-0a862eb2]{display:block;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff}.list_search[data-v-0a862eb2]{position:relative;width:100%;height:%?70?%;line-height:%?70?%;background-color:#f6f6f6;overflow:hidden;border-radius:%?10?%;border:%?2?% solid #f9f9f9;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.ssk-icon[data-v-0a862eb2]{position:absolute;top:0;left:%?24?%;color:#ccc}.nr_pageNoticeT[data-v-0a862eb2]{text-align:center;margin-top:55px}.nav_title[data-v-0a862eb2]{height:%?50?%;width:auto;margin:%?30?% 0 0 %?20?%;white-space:nowrap}.nav_titlenum[data-v-0a862eb2]{font-size:%?24?%;color:#999;line-height:%?60?%;margin-left:%?20?%}.pro_boxshodow[data-v-0a862eb2]{-webkit-box-sizing:border-box;box-sizing:border-box;width:94%;height:%?200?%;border-radius:%?20?%;-webkit-box-shadow:0 0 40px 0 rgba(70,69,68,.07);box-shadow:0 0 40px 0 rgba(70,69,68,.07);margin:0 0 %?20?% %?20?%;padding:%?16?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.pro_bsimg[data-v-0a862eb2]{width:33%;overflow:hidden}.pro_bsimg uni-image[data-v-0a862eb2]{width:100%;height:100%;border-radius:%?10?%}.pro_bscont[data-v-0a862eb2]{-webkit-box-sizing:border-box;box-sizing:border-box;width:67%;padding-left:%?10?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column}.pro_cont_title[data-v-0a862eb2]{font-size:%?28?%;color:#333;width:100%;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:inline-block;height:24%}.pro_cont_desc[data-v-0a862eb2]{font-size:%?24?%;color:#999;width:100%;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:inline-block;height:27%}.pro_cont_price[data-v-0a862eb2]{height:42%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.pro_price[data-v-0a862eb2]{width:85%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column}.pro_price_vip[data-v-0a862eb2]{font-size:%?20?%;padding:%?2?% %?6?%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative}.pro_price_vip uni-image[data-v-0a862eb2]{width:%?12?%;height:auto}.pro_price_itemvip0[data-v-0a862eb2]{border-radius:%?8?% 0 0 %?8?%;color:#fce0bc;padding:%?2?% %?4?% 0 %?2?%;background:#454545}.pro_price_itemvip1[data-v-0a862eb2]{border-radius:0 %?8?% %?8?% 0;color:#454545;background-color:#fce0bc;padding:%?4?% %?8?% 0 0}.pro_price_admin[data-v-0a862eb2]{color:#ec5c3e}.pro_price_admin[data-v-0a862eb2]{height:50%}.pro_price_admin uni-text[data-v-0a862eb2]{font-size:%?20?%;color:#ccc;text-decoration:line-through;margin-left:%?20?%}.pro_gwc[data-v-0a862eb2]{width:15%;margin:%?16?%;-webkit-box-sizing:border-box;box-sizing:border-box}.pro_gwc uni-image[data-v-0a862eb2]{width:%?50?%}.nav_x_one[data-v-0a862eb2]{white-space:nowrap;display:inline-block;padding:%?10?%}.nav_xt[data-v-0a862eb2]{display:inline-block;margin:0 %?20?%}.nav_pros[data-v-0a862eb2]{height:90%;-webkit-box-sizing:border-box;box-sizing:border-box}.nav_pro_item[data-v-0a862eb2]{width:46%;-webkit-box-shadow:0 0 40px 0 rgba(70,69,68,.07);box-shadow:0 0 40px 0 rgba(70,69,68,.07);height:%?570?%;border-radius:%?20?%;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;overflow:hidden;margin:0 %?20?% %?20?%}.nav_pro_item[data-v-0a862eb2]:first-child{margin-top:%?20?%}.nav_pro_item[data-v-0a862eb2]:nth-child(2n){margin:0 0 %?20?%}.nav_pro_img[data-v-0a862eb2]{height:60%}.nav_pro_img uni-image[data-v-0a862eb2]{height:100%;width:100%}.nav_pros_cont[data-v-0a862eb2]{height:40%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;-ms-flex-flow:column;flex-flow:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?20?% 0 %?20?% %?20?%}\n\n/* 规格 弹框 */.guige[data-v-0a862eb2]{width:100%;position:fixed;bottom:0;left:0;background:rgba(0,0,0,.7);z-index:999}.guige .guige_con[data-v-0a862eb2]{position:absolute;left:0;bottom:0;width:100%;background:#fff;border-top-left-radius:%?20?%;border-top-right-radius:%?20?%}.flex-row[data-v-0a862eb2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.guigeTopC[data-v-0a862eb2]{width:%?690?%;padding-bottom:%?20?%;position:relative}.guigeTopCImg[data-v-0a862eb2]{width:%?180?%;height:%?180?%;border-radius:%?10?%;display:inline-block;overflow:hidden}.guigeTopCT[data-v-0a862eb2]{width:%?432?%;display:inline-block;margin-left:%?30?%}.guigeTop .price[data-v-0a862eb2]{display:inline-block;font-size:%?40?%;height:%?40?%;line-height:%?40?%}.price[data-v-0a862eb2]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;line-height:%?60?%;padding:0 %?16?%;border-top:%?2?% solid #efefef}.guigeTopCT2[data-v-0a862eb2]{color:#969696}.guigeTopClose[data-v-0a862eb2]{position:absolute;top:%?22?%;right:%?22?%;width:%?36?%;height:%?36?%}.guige .guige_con .gg uni-view[data-v-0a862eb2]{width:50%;text-align:center;height:%?74?%;line-height:%?74?%;color:#fff}.guige .guige_con .models_style[data-v-0a862eb2]{width:%?690?%;padding:%?20?% 0}.guige .guige_con .models_style .m_tit[data-v-0a862eb2]{font-size:%?26?%;color:#000}.m_tit[data-v-0a862eb2]{margin-bottom:%?10?%}.guige .guige_con .models_style .model_list uni-view[data-v-0a862eb2]{padding:%?8?% %?20?%;border-radius:%?10?%;margin-right:%?20?%;display:inline-block;min-width:%?60?%;text-align:center;border:%?2?% solid #e5e5e5;color:#232323;font-size:%?24?%}.view_maxH[data-v-0a862eb2]{max-height:%?600?%;overflow-y:auto}.view_maxH[data-v-0a862eb2]::-webkit-scrollbar{display:none}.pageno_address[data-v-0a862eb2]{display:block;margin:%?200?% auto %?60?%;width:%?280?%;height:%?150?%}body.?%PAGE?%[data-v-0a862eb2]{background:#f2f2f2}", ""]) },
        "6faf": function(i, t, e) {
            "use strict";
            var a = function() {
                    var i = this,
                        t = i.$createElement,
                        e = i._self._c || t;
                    return e("v-uni-view", ["showProMore" == i.item.type ? e("v-uni-navigator", { attrs: { url: "/pages/" + i.item.type + "/" + i.item.type + "?id=" + i.item.id } }, [e("v-uni-view", [e("v-uni-image", { attrs: { src: i.item.thumb, mode: "aspectFill" } })], 1), e("v-uni-view", { staticClass: "box_right" }, [e("v-uni-view", { staticClass: "title" }, [i._v(i._s(i.item.title))]), e("v-uni-view", { staticClass: "desc" }, [i._v(i._s(i.item.desc))]), e("v-uni-view", { staticClass: "price", style: { color: i.c } }, [i._v("¥" + i._s(i.item.price))]), e("v-uni-view", { staticClass: "time" }, [e("v-uni-text", { staticClass: "sale" }, [i._v("已售：" + i._s(i.item.sale_num))]), i.item.buy_type ? e("v-uni-view", { staticClass: "btn_buy", style: { border: "1px solid " + i.c, color: i.c } }, [i._v(i._s(i.item.buy_type))]) : e("v-uni-view", { staticClass: "btn_buy", style: { border: "1px solid " + i.c, color: i.c } }, [i._v("购买")])], 1)], 1)], 1) : i._e(), "showPro" == i.item.type ? e("v-uni-navigator", { attrs: { url: "/pagesFlashSale/showPro/showPro?id=" + i.item.id } }, [e("v-uni-view", [e("v-uni-image", { attrs: { src: i.item.thumb, mode: "aspectFill" } })], 1), e("v-uni-view", { staticClass: "box_right" }, [e("v-uni-view", { staticClass: "title" }, [i._v(i._s(i.item.title))]), e("v-uni-view", { staticClass: "desc" }, [i._v(i._s(i.item.desc))]), e("v-uni-view", { staticClass: "price", style: { color: i.c } }, [i._v("¥" + i._s(i.item.price))]), e("v-uni-view", { staticClass: "time" }, [e("v-uni-text", { staticClass: "sale" }, [i._v("已售：" + i._s(i.item.sale_num))]), i.item.buy_type ? e("v-uni-view", { staticClass: "btn_buy", style: { border: "1px solid " + i.c, color: i.c } }, [i._v(i._s(i.item.buy_type))]) : e("v-uni-view", { staticClass: "btn_buy", style: { border: "1px solid " + i.c, color: i.c } }, [i._v("购买")])], 1)], 1)], 1) : i._e(), "showPro_lv" == i.item.type ? e("v-uni-navigator", { attrs: { url: "/pagesReserve/proDetail/proDetail?id=" + i.item.id } }, [e("v-uni-view", [e("v-uni-image", { attrs: { src: i.item.thumb, mode: "aspectFill" } })], 1), e("v-uni-view", { staticClass: "box_right" }, [e("v-uni-view", { staticClass: "title" }, [i._v(i._s(i.item.title))]), e("v-uni-view", { staticClass: "desc" }, [i._v(i._s(i.item.desc))]), e("v-uni-view", { staticClass: "price", style: { color: i.c } }, [i._v("¥" + i._s(i.item.price))]), e("v-uni-view", { staticClass: "time" }, [e("v-uni-text", { staticClass: "sale" }, [i._v("已售：" + i._s(i.item.sale_num))]), i.item.buy_type ? e("v-uni-view", { staticClass: "btn_buy", style: { border: "1px solid " + i.c, color: i.c } }, [i._v(i._s(i.item.buy_type))]) : e("v-uni-view", { staticClass: "btn_buy", style: { border: "1px solid " + i.c, color: i.c } }, [i._v("购买")])], 1)], 1)], 1) : i._e(), "exchange" == i.item.type ? e("v-uni-navigator", { attrs: { url: "/pagesExchange/show/show?id=" + i.item.id } }, [e("v-uni-view", [e("v-uni-image", { attrs: { src: i.item.thumb, mode: "aspectFill" } })], 1), e("v-uni-view", { staticClass: "box_right" }, [e("v-uni-view", { staticClass: "title" }, [i._v(i._s(i.item.title))]), e("v-uni-view", { staticClass: "desc" }, [i._v(i._s(i.item.desc))]), e("v-uni-view", { staticClass: "price", style: "color:" + i.c }, [i._v("¥" + i._s(i.item.price))]), e("v-uni-view", { staticClass: "time" }, [e("v-uni-text", { staticClass: "sale" }, [i._v("已售：" + i._s(i.item.sale_num))]), i.item.buy_type ? e("v-uni-view", { staticClass: "btn_buy", style: "border:1px solid " + i.c + ";color:" + i.c }, [i._v(i._s(i.item.buy_type))]) : e("v-uni-view", { staticClass: "btn_buy", style: "border:1px solid " + i.c + ";color:" + i.c }, [i._v("购买")])], 1)], 1)], 1) : i._e(), "shopsPro" == i.item.type ? e("v-uni-navigator", { attrs: { url: "/pagesPluginShop/goods_detail/goods_detail?id=" + i.item.id } }, [e("v-uni-view", [e("v-uni-image", { attrs: { src: i.item.thumb, mode: "aspectFill" } })], 1), e("v-uni-view", { staticClass: "box_right" }, [e("v-uni-view", { staticClass: "title" }, [i._v(i._s(i.item.title))]), e("v-uni-view", { staticClass: "desc" }, [i._v(i._s(i.item.desc))]), e("v-uni-view", { staticClass: "price", style: "color:" + i.c }, [i._v("¥" + i._s(i.item.price))]), e("v-uni-view", { staticClass: "time" }, [e("v-uni-text", { staticClass: "sale" }), e("v-uni-view", { staticClass: "btn_buy", style: "border:1px solid " + i.c + ";color:" + i.c }, [i._v("购买")])], 1)], 1)], 1) : i._e(), "pt" == i.item.type ? e("v-uni-navigator", { attrs: { url: "/pagesPt/products/products?id=" + i.item.id } }, [e("v-uni-view", [e("v-uni-image", { attrs: { src: i.item.thumb, mode: "aspectFill" } })], 1), e("v-uni-view", { staticClass: "box_right" }, [e("v-uni-view", { staticClass: "title" }, [i._v(i._s(i.item.title))]), e("v-uni-view", { staticClass: "desc" }, [i._v(i._s(i.item.desc))]), e("v-uni-view", { staticClass: "price", style: "color:" + i.c }, [i._v("¥" + i._s(i.item.price))]), e("v-uni-view", { staticClass: "time" }, [e("v-uni-text", { staticClass: "sale" }, [i._v("已团：" + i._s(i.item.sale_num))]), i.item.buy_type ? e("v-uni-view", { staticClass: "btn_buy", style: "border:1px solid " + i.c + ";color:" + i.c }, [i._v(i._s(i.item.buy_type))]) : e("v-uni-view", { staticClass: "btn_buy", style: "border:1px solid " + i.c + ";color:" + i.c }, [i._v("去拼")])], 1)], 1)], 1) : i._e(), "showArt" == i.item.type ? e("v-uni-navigator", { attrs: { url: "/pages/showArt/showArt?id=" + i.item.id } }, [e("v-uni-view", { staticClass: "list8_left" }, [e("v-uni-image", { attrs: { src: i.item.thumb, mode: "aspectFill" } }), 1 != i.item.art_type ? e("v-uni-view", { staticClass: "listVbg8_1" }, [2 == i.item.art_type ? e("v-uni-image", { attrs: { src: i.$imgurl + "play_video.png" } }) : i._e(), 3 == i.item.art_type ? e("v-uni-image", { attrs: { src: i.$imgurl + "play_radio.png" } }) : i._e()], 1) : i._e(), i.item.price > 0 ? e("v-uni-view", { staticClass: "listVBtn" }, [i._v("付费")]) : i._e()], 1), e("v-uni-view", { staticClass: "list8_right" }, [e("v-uni-view", { staticClass: "title3_1" }, [i._v(i._s(i.item.title))]), e("v-uni-view", { staticClass: "desc1" }, [i._v(i._s(null == i.item.desc ? "暂无简介" : i.item.desc))]), e("v-uni-view", { staticClass: "time" }, [e("v-uni-text", [i._v(i._s(i.item.creattime))]), e("v-uni-view", [e("v-uni-text", { staticClass: "iconfont icon-c-kan" }), null == i.item.hits ? e("v-uni-text", { staticClass: "fl_num" }, [i._v("0")]) : i._e(), null != i.item.hits ? e("v-uni-text", { staticClass: "fl_num" }, [i._v(i._s(i.item.hits))]) : i._e()], 1)], 1)], 1)], 1) : i._e()], 1)
                },
                s = [];
            e.d(t, "a", function() { return a }), e.d(t, "b", function() { return s })
        },
        "7c45": function(i, t, e) {
            "use strict";
            var a = function() {
                    var i = this,
                        t = i.$createElement,
                        e = i._self._c || t;
                    return e("v-uni-view", [e("v-uni-view", { attrs: { "data-link": i.item.type, "data-id": i.item.id }, on: { click: function(t) { t = i.$handleEvent(t), i.redirectto(t) } } }, [e("v-uni-image", { attrs: { src: i.item.thumb, mode: "widthFix" } }), e("v-uni-view", { staticClass: "title" }, [i._v(i._s(i.item.title))]), e("v-uni-text", { style: { color: i.c } }, [i._v("¥" + i._s(i.item.price))]), i.item.buy_type ? e("v-uni-view", { staticClass: "btn_buy", style: { border: "1px solid " + i.c, color: i.c } }, [i._v(i._s(i.item.buy_type))]) : e("v-uni-view", { staticClass: "btn_buy", style: { border: "1px solid " + i.c, color: i.c } }, [i._v("购买")])], 1)], 1)
                },
                s = [];
            e.d(t, "a", function() { return a }), e.d(t, "b", function() { return s })
        },
        "81f4": function(i, t, e) {
            "use strict";
            var a = e("34df"),
                s = e.n(a);
            s.a
        },
        "8eab": function(i, t, e) {
            "use strict";
            e.r(t);
            var a = e("1065"),
                s = e.n(a);
            for (var o in a) "default" !== o && function(i) { e.d(t, i, function() { return a[i] }) }(o);
            t["default"] = s.a
        },
        9288: function(i, t, e) {
            "use strict";
            var a = function() {
                    var i = this,
                        t = i.$createElement,
                        e = i._self._c || t;
                    return i.$imgurl ? e("v-uni-view", [i.needAuth ? e("auth", { attrs: { needAuth: i.needAuth }, on: { closeAuth: function(t) { t = i.$handleEvent(t), i.closeAuth(t) }, cell: function(t) { t = i.$handleEvent(t), i.cell(t) } } }) : i._e(), i.needBind ? e("bindPhone", { attrs: { needBind: i.needBind }, on: { closeBind: function(t) { t = i.$handleEvent(t), i.closeBind(t) } } }) : i._e(), [e("v-uni-form", { staticClass: "searchBox", attrs: { "report-submit": "true" } }, [e("v-uni-view", { staticClass: "list_search" }, [e("v-uni-view", { staticClass: "iconfont icon-x-sousuo1 ssk-icon" }), e("v-uni-input", { staticClass: "input-style", attrs: { type: "text", name: "keywords", "confirm-type": "search", placeholder: "搜索", "placeholder-style": "color:#ccc" }, on: { confirm: function(t) { t = i.$handleEvent(t), i.search(t) }, input: function(t) { t = i.$handleEvent(t), i.serachInput(t) } } })], 1)], 1), "order" == i.orderOrBusiness ? e("v-uni-view", { class: ["goods", 4 != i.catestyle ? "goods_choose" : ""], style: { height: i.goodsH - 51 + "px" } }, [1 == i.catestyle || 2 == i.catestyle ? [e("v-uni-view", { staticClass: "menu-wrapper" }, [e("v-uni-scroll-view", { staticStyle: { height: "100%" }, attrs: { "scroll-y": "", "scroll-with-animation": i.animation } }, i._l(i.catList, function(t, a) { return e("v-uni-view", { key: a, class: ["menu-item", i.top_cid == t.id ? "current" : ""], attrs: { "data-id": t.id, id: t.id }, on: { click: function(t) { t = i.$handleEvent(t), i.catClickFn(t) } } }, [i.top_cid == t.id ? e("v-uni-view", { staticClass: "current_box", style: { background: i.baseinfo.base_color } }) : i._e(), i._v(i._s(t.name))], 1) }), 1)], 1), 1 == i.catestyle ? e("v-uni-view", { staticClass: "foods-wrapper" }, [1 == i.slide_is && i.slides ? e("v-uni-swiper", { staticClass: "cateslide2", staticStyle: { height: "220rpx" }, attrs: { current: i.swiperCurrent, circular: "true", "indicator-active-color": "#000", "indicator-dots": "true", autoplay: "true", interval: "3000", duration: "500", "indicator-color": "rgba(0, 0, 0, .3)" }, on: { change: function(t) { t = i.$handleEvent(t), i.swiperChange(t) } } }, [i._l(i.slides, function(t, a) { return [e("v-uni-swiper-item", [e("v-uni-image", { class: ["swi_img", a == i.swiperCurrent ? "active_img" : ""], attrs: { "data-id": a, src: t.url, mode: "aspectFill" } })], 1)] })], 2) : i._e(), e("v-uni-scroll-view", { style: { height: 1 == i.slide_is && i.slides ? "75%" : "100%", "padding-top": "30rpx", "box-sizing": "border-box" }, attrs: { "scroll-y": "true" } }, [i.sub_cate_length > 0 ? [i._l(i.sub_cate, function(t, a) { return [e("v-uni-view", { key: a + "_0", staticClass: "food-grouping", attrs: { id: t.id, "data-id": t.id }, on: { click: function(t) { t = i.$handleEvent(t), i.tiaozhuang(t) } } }, [e("v-uni-image", { attrs: { src: t.catepic, mode: "" } }), e("v-uni-view", [i._v(i._s(t.name))])], 1)] })] : [e("v-uni-image", { staticClass: "pageno_address", attrs: { src: i.$imgurl + "no_pro.png" } }), e("v-uni-view", { staticStyle: { "text-align": "center", color: "#666" } }, [i._v("没有相关商品哟~")])]], 2)], 1) : i._e(), 2 == i.catestyle ? e("v-uni-view", { staticClass: "foods-wrapper" }, [1 == i.slide_is && i.slides ? e("v-uni-swiper", { staticClass: "cateslide2", staticStyle: { height: "220rpx" }, attrs: { current: i.swiperCurrent, circular: "true", "indicator-active-color": "#000", "indicator-dots": "true", autoplay: "true", interval: "3000", duration: "500", "indicator-color": "rgba(0, 0, 0, .3)" }, on: { change: function(t) { t = i.$handleEvent(t), i.swiperChange(t) } } }, [i._l(i.slides, function(t, a) { return [e("v-uni-swiper-item", [e("v-uni-image", { class: ["swi_img", a == i.swiperCurrent ? "active_img" : ""], attrs: { "data-id": a, src: t.url, mode: "aspectFill" } })], 1)] })], 2) : i._e(), e("v-uni-scroll-view", { staticClass: "nav_title", attrs: { "scroll-x": "", "scroll-into-view": "nav" + i.prodataid, "scroll-with-animation": "true" } }, [i.sub_cate ? i._l(i.sub_cate, function(t, a) { return e("v-uni-view", { key: a, staticStyle: { display: "inline-block" }, attrs: { id: "nav" + a, "data-id": a }, on: { click: function(t) { t = i.$handleEvent(t), i.catClickright(t) } } }, [e("v-uni-view", { class: ["food-grouping2", i.prodataid == a ? "active_fg2" : ""] }, [e("v-uni-view", [i._v(i._s(t.name))])], 1)], 1) }) : i._e()], 2), e("v-uni-scroll-view", { style: { height: 1 == i.slide_is && i.slides ? "70%" : "90%", "margin-top": "10rpx" }, attrs: { "scroll-y": "" }, on: { scrolltolower: function(t) { t = i.$handleEvent(t), i.scrollHandler(t) } } }, [i.prolists_length > 0 ? [e("v-uni-view", { staticClass: "nav_titlenum" }, [i._v(i._s(i.sub_cate_name))]), i._l(i.prolists, function(t, a) { return [e("v-uni-view", { key: a + "_0", staticClass: "pro_boxshodow", attrs: { "data-id": t.id }, on: { click: function(t) { t = i.$handleEvent(t), i.toprodetail(t) } } }, [e("v-uni-view", { staticClass: "pro_bsimg" }, [e("v-uni-image", { attrs: { src: t.thumb, mode: "scaleToFill" } })], 1), e("v-uni-view", { staticClass: "pro_bscont" }, [e("v-uni-view", { staticClass: "pro_cont_title" }, [i._v(i._s(t.title))]), e("v-uni-view", { staticClass: "pro_cont_desc" }, [i._v(i._s(t.desc))]), e("v-uni-view", { staticStyle: { flex: "1" } }), e("v-uni-view", { staticClass: "pro_cont_price" }, [e("v-uni-view", { staticClass: "pro_price" }, [t.discount_price > 0 ? e("v-uni-view", { staticClass: "pro_price_vip" }, [e("v-uni-text", { staticClass: "pro_price_itemvip0" }, [i._v("会员专享价")]), e("v-uni-image", { attrs: { src: i.$imgurl + "vipjiao.png", mode: "aspectFill" } }), e("v-uni-text", { staticClass: "pro_price_itemvip1" }, [i._v("￥" + i._s(t.discount_price))])], 1) : i._e(), e("v-uni-view", { staticStyle: { flex: "1" } }), e("v-uni-view", { staticClass: "pro_price_admin" }, [i._v("￥" + i._s(t.price)), t.market_price ? e("v-uni-text", [i._v("￥" + i._s(t.market_price))]) : i._e()], 1)], 1), "showProMore" == i.type ? e("v-uni-view", { staticClass: "pro_gwc", on: { click: function(t) { t.stopPropagation(), t = i.$handleEvent(t) } } }, [e("v-uni-view", { attrs: { "data-id": t.id }, on: { click: function(t) { t = i.$handleEvent(t), i.guige_block(t) } } }, [e("v-uni-image", { attrs: { src: i.$imgurl + "gwc_add.png", mode: "widthFix" } })], 1)], 1) : i._e()], 1)], 1)], 1)] })] : [e("v-uni-image", { staticClass: "pageno_address", attrs: { src: i.$imgurl + "no_pro.png" } }), e("v-uni-view", { staticStyle: { "text-align": "center", color: "#666" } }, [i._v("没有相关商品哟~")])]], 2)], 1) : i._e()] : i._e(), 3 == i.catestyle ? [e("v-uni-view", { staticClass: "menu-wrapper" }, [e("v-uni-scroll-view", { staticStyle: { height: "100%" }, attrs: { "scroll-y": "", "scroll-with-animation": "true" } }, i._l(i.catList, function(t, a) { return e("v-uni-view", { key: a, class: ["menu-item", i.sub_cid == t.id ? "current" : ""], attrs: { "data-id": t.id, id: t.id }, on: { click: function(t) { t = i.$handleEvent(t), i.catClickFn(t) } } }, [i.sub_cid == t.id ? e("v-uni-view", { staticClass: "current_box", style: { background: i.baseinfo.base_color } }) : i._e(), i._v(i._s(t.name))], 1) }), 1)], 1), e("v-uni-view", { staticClass: "foods-wrapper" }, [e("v-uni-scroll-view", { staticStyle: { height: "100%", width: "100%", "margin-top": "10rpx" }, attrs: { "scroll-y": "" }, on: { scrolltolower: function(t) { t = i.$handleEvent(t), i.scrollHandler(t) } } }, [i.prolists_length > 0 ? [i._l(i.prolists, function(t, a) { return [e("v-uni-view", { key: a + "_0", staticClass: "pro_boxshodow", attrs: { "data-id": t.id }, on: { click: function(t) { t = i.$handleEvent(t), i.toprodetail(t) } } }, [e("v-uni-view", { staticClass: "pro_bsimg" }, [e("v-uni-image", { attrs: { src: t.thumb, mode: "scaleToFill" } })], 1), e("v-uni-view", { staticClass: "pro_bscont" }, [e("v-uni-view", { staticClass: "pro_cont_title" }, [i._v(i._s(t.title))]), e("v-uni-view", { staticClass: "pro_cont_desc" }, [i._v(i._s(t.desc))]), e("v-uni-view", { staticStyle: { flex: "1" } }), e("v-uni-view", { staticClass: "pro_cont_price" }, [e("v-uni-view", { staticClass: "pro_price" }, [t.discount_price > 0 ? e("v-uni-view", { staticClass: "pro_price_vip" }, [e("v-uni-text", { staticClass: "pro_price_itemvip0" }, [i._v("会员专享价")]), e("v-uni-image", { attrs: { src: i.$imgurl + "vipjiao.png", mode: "aspectFill" } }), e("v-uni-text", { staticClass: "pro_price_itemvip1" }, [i._v("￥" + i._s(t.discount_price))])], 1) : i._e(), e("v-uni-view", { staticStyle: { flex: "1" } }), e("v-uni-view", { staticClass: "pro_price_admin" }, [i._v("￥" + i._s(t.price)), t.market_price ? e("v-uni-text", [i._v("￥" + i._s(t.market_price))]) : i._e()], 1)], 1), "showProMore" == i.type ? e("v-uni-view", { staticClass: "pro_gwc", on: { click: function(t) { t.stopPropagation(), t = i.$handleEvent(t) } } }, [e("v-uni-view", { attrs: { "data-id": t.id }, on: { click: function(t) { t = i.$handleEvent(t), i.guige_block(t) } } }, [e("v-uni-image", { attrs: { src: i.$imgurl + "gwc_add.png", mode: "widthFix" } })], 1)], 1) : i._e()], 1)], 1)], 1)] })] : [e("v-uni-image", { staticClass: "pageno_address", attrs: { src: i.$imgurl + "no_pro.png" } }), e("v-uni-view", { staticStyle: { "text-align": "center", color: "#666" } }, [i._v("没有相关商品哟~")])]], 2)], 1)] : i._e(), 4 == i.catestyle ? [e("v-uni-scroll-view", { staticClass: "nav_x_one", staticStyle: { width: "100%" }, attrs: { "scroll-x": "true", "scroll-with-animation": "true" } }, i._l(i.catList, function(t, a) { return e("v-uni-view", { key: a, staticClass: "nav_xt", style: { color: i.sub_cid == t.id ? i.baseinfo.base_color : "", "border-bottom": "2px solid " + (i.sub_cid == t.id ? i.baseinfo.base_color : "transparent") }, attrs: { "data-id": t.id, id: "f" + a }, on: { click: function(t) { t = i.$handleEvent(t), i.catClickFn(t) } } }, [i._v(i._s(t.name))]) }), 1), e("v-uni-scroll-view", { staticClass: "nav_pros", attrs: { "scroll-y": "true" }, on: { scrolltolower: function(t) { t = i.$handleEvent(t), i.scrollHandler(t) } } }, [i.prolists_length > 0 ? i._l(i.prolists, function(t, a) { return e("v-uni-view", { key: a, staticClass: "nav_pro_item", attrs: { "data-id": t.id }, on: { click: function(t) { t = i.$handleEvent(t), i.toprodetail(t) } } }, [e("v-uni-view", { staticClass: "nav_pro_img" }, [e("v-uni-image", { attrs: { src: t.thumb, mode: "scaleToFill" } })], 1), e("v-uni-view", { staticClass: "nav_pros_cont" }, [e("v-uni-view", { staticClass: "pro_cont_title" }, [i._v(i._s(t.title))]), e("v-uni-view", { staticClass: "pro_cont_desc" }, [i._v("已售出" + i._s(t.sale_num))]), e("v-uni-view", { staticStyle: { flex: "1" } }), e("v-uni-view", { staticClass: "pro_cont_price" }, [e("v-uni-view", { staticClass: "pro_price" }, [t.discount_price > 0 ? e("v-uni-view", { staticClass: "pro_price_vip" }, [e("v-uni-text", { staticClass: "pro_price_itemvip0" }, [i._v("会员专享价")]), e("v-uni-image", { attrs: { src: i.$imgurl + "vipjiao.png", mode: "aspectFill" } }), e("v-uni-text", { staticClass: "pro_price_itemvip1" }, [i._v("￥" + i._s(t.discount_price))])], 1) : i._e(), e("v-uni-view", { staticStyle: { flex: "1" } }), e("v-uni-view", { staticClass: "pro_price_admin" }, [i._v("￥" + i._s(t.price)), t.market_price ? e("v-uni-text", [i._v("￥" + i._s(t.market_price))]) : i._e()], 1)], 1), "showProMore" == i.type ? e("v-uni-view", { staticClass: "pro_gwc", on: { click: function(t) { t.stopPropagation(), t = i.$handleEvent(t) } } }, [e("v-uni-view", { attrs: { "data-id": t.id }, on: { click: function(t) { t = i.$handleEvent(t), i.guige_block(t) } } }, [e("v-uni-image", { attrs: { src: i.$imgurl + "gwc_add.png", mode: "widthFix" } })], 1)], 1) : i._e()], 1)], 1)], 1) }) : [e("v-uni-image", { staticClass: "pageno_address", attrs: { src: i.$imgurl + "no_pro.png" } }), e("v-uni-view", { staticStyle: { "text-align": "center", color: "#666" } }, [i._v("没有相关商品哟~")])]], 2)] : i._e()], 2) : i._e()], 1 == i.baseinfo.tabbar_t ? e("myfooter", { attrs: { baseinfo: i.baseinfo, page_signs: i.page_signs } }) : i._e(), 1 == i.guige ? [e("v-uni-view", { staticClass: "mask" }), e("v-uni-view", { staticClass: "guige" }, [e("v-uni-view", { staticClass: "guige_con" }, [e("v-uni-view", { staticStyle: { padding: "30rpx" } }, [e("v-uni-view", { staticClass: "guigeTop" }, [e("v-uni-view", { staticClass: "guigeTopC" }, [e("v-uni-image", { staticClass: "guigeTopCImg", attrs: { src: i.proinfo.thumb ? i.proinfo.thumb : i.$host + "/diypage/resource/images/diypage/default/default.jpg" } }), e("v-uni-view", { staticClass: "guigeTopCT" }, [e("v-uni-view", { style: "color:" + i.baseinfo.base_color }, [i.proinfo.discount_price > 0 ? e("v-uni-text", [i._v("会员价:")]) : i._e(), i._v("￥"), 0 == i.proinfo.discount_price ? e("v-uni-view", { staticClass: "price", staticStyle: { border: "0" } }, [i._v(i._s(i.proinfo.price))]) : i._e(), i.proinfo.discount_price > 0 ? e("v-uni-view", { staticClass: "price", staticStyle: { border: "0" } }, [i._v(i._s(i.proinfo.discount_price))]) : i._e()], 1), e("v-uni-view", { staticClass: "model_h" }, [e("v-uni-view", { staticClass: "guigeTopCT2" }, [i._v("库存 " + i._s(i.proinfo.kc))]), i.newstr ? e("v-uni-view", { staticClass: "guigeTopCT2" }, [i._v("已选 " + i._s(i.newstr))]) : i._e()], 1)], 1)], 1), e("v-uni-image", { staticClass: "guigeTopClose", attrs: { src: i.$imgurl + "btn_close.png" }, on: { click: function(t) { t = i.$handleEvent(t), i.guige_hidden(t) } } })], 1), 1 == i.use_more ? e("v-uni-view", { staticClass: "view_maxH" }, i._l(i.gzjson, function(t, a) { return e("v-uni-scroll-view", { key: a, staticClass: "models_style", staticStyle: { height: "auto" }, attrs: { "scroll-y": "true" } }, [e("v-uni-view", { staticClass: "m_tit" }, [i._v(i._s(a))]), e("v-uni-view", { staticClass: "model_list" }, [i._l(t.val, function(s, o) { return [e("v-uni-view", { key: o + "_0", style: o == t.ck ? "color:" + i.baseinfo.base_color + ";border: 2rpx solid " + i.baseinfo.base_color + ";background:" + i.baseinfo.base_color + "1f" : "", attrs: { "data-id": a, "data-index": o }, on: { click: function(t) { t = i.$handleEvent(t), i.changepro(t) } } }, [i._v(i._s(s))])] })], 2)], 1) }), 1) : i._e(), e("v-uni-view", { staticClass: "flex-row", staticStyle: { "justify-content": "space-between", padding: "20rpx 0", width: "100%", "border-top": "2rpx solid #eee" } }, [e("v-uni-view", { staticStyle: { "font-size": "26rpx", color: "#232323" } }, [i._v("购买数量")]), e("v-uni-view", [e("v-uni-view", { staticStyle: { width: "64rpx", height: "64rpx", "line-height": "64rpx", background: "#f6f6f6", "text-align": "center", display: "inline-block", color: "#a0a0a0" }, on: { click: function(t) { t = i.$handleEvent(t), i.num_jian(t) } } }, [e("v-uni-view", { staticClass: "iconfont icon-x-jian", staticStyle: { "font-size": "28rpx" } })], 1), e("v-uni-view", { staticStyle: { width: "100rpx", height: "64rpx", "line-height": "64rpx", "text-align": "center", display: "inline-block", background: "#f6f6f6", color: "#434343" } }, [i._v(i._s(i.num))]), e("v-uni-view", { staticStyle: { width: "64rpx", height: "64rpx", "line-height": "64rpx", background: "#f6f6f6", "text-align": "center", display: "inline-block", color: "#a0a0a0" }, on: { click: function(t) { t = i.$handleEvent(t), i.num_add(t) } } }, [e("v-uni-view", { staticClass: "iconfont icon-x-jia", staticStyle: { "font-size": "28rpx" } })], 1)], 1)], 1)], 1), e("v-uni-view", { staticClass: "flex-row gg" }, [e("v-uni-view", { style: { "border-radius": "40rpx 0 0 40rpx", margin: "20rpx 0 20rpx 20rpx", "z-index": "98", background: i.baseinfo.tabbar_bg3, color: i.baseinfo.tabbar_bg1 }, attrs: { "data-type": "gwc" }, on: { click: function(t) { t = i.$handleEvent(t), i.checkvip(t) } } }, [i._v("加入购物车")]), e("v-uni-view", { style: { "border-radius": "0 40rpx 40rpx 0", margin: "20rpx 20rpx 20rpx 0", "z-index": "98", background: i.baseinfo.base_color, color: i.baseinfo.tabbar_bg2 }, attrs: { "data-type": "gm" }, on: { click: function(t) { t = i.$handleEvent(t), i.checkvip(t) } } }, [i._v("立即购买")])], 1)], 1)], 1)] : i._e()], 2) : i._e()
                },
                s = [];
            e.d(t, "a", function() { return a }), e.d(t, "b", function() { return s })
        },
        c8ec: function(i, t, e) {
            "use strict";
            e.r(t);
            var a = e("0eee"),
                s = e.n(a);
            for (var o in a) "default" !== o && function(i) { e.d(t, i, function() { return a[i] }) }(o);
            t["default"] = s.a
        },
        cbc1: function(i, t, e) {
            "use strict";
            e.r(t);
            var a = e("7c45"),
                s = e("2ba9");
            for (var o in s) "default" !== o && function(i) { e.d(t, i, function() { return s[i] }) }(o);
            var n = e("2877"),
                r = Object(n["a"])(s["default"], a["a"], a["b"], !1, null, "140c75a4", null);
            t["default"] = r.exports
        },
        d026: function(i, t, e) {
            "use strict";
            e.r(t);
            var a = e("9288"),
                s = e("c8ec");
            for (var o in s) "default" !== o && function(i) { e.d(t, i, function() { return s[i] }) }(o);
            e("81f4");
            var n = e("2877"),
                r = Object(n["a"])(s["default"], a["a"], a["b"], !1, null, "0a862eb2", null);
            t["default"] = r.exports
        },
        f0db: function(i, t, e) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0, e("b54a");
            var a = {
                name: "list_pro",
                props: ["item", "c"],
                methods: {
                    redirectto: function(i) {
                        var t = i.currentTarget.dataset.id,
                            e = i.currentTarget.dataset.link,
                            a = "";
                        a = "showPro" == e ? "/pagesFlashSale/showPro/showPro?id=" + t : "showPro_lv" == e ? "/pagesReserve/proDetail/proDetail?id=" + t : "/pages/" + e + "/" + e + "?id=" + t, uni.navigateTo({ url: a })
                    }
                }
            };
            t.default = a
        }
    }
]);