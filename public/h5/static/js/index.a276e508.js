(function(e) {
    function n(n) {
        for (var i, r, s = n[0], c = n[1], l = n[2], g = 0, d = []; g < s.length; g++) r = s[g], t[r] && d.push(t[r][0]), t[r] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
        u && u(n);
        while (d.length) d.shift()();
        return a.push.apply(a, l || []), o()
    }

    function o() {
        for (var e, n = 0; n < a.length; n++) {
            for (var o = a[n], i = !0, r = 1; r < o.length; r++) {
                var c = o[r];
                0 !== t[c] && (i = !1)
            }
            i && (a.splice(n--, 1), e = s(s.s = o[0]))
        }
        return e
    }
    var i = {},
        t = {
            index: 0
        },
        a = [];

    function r(e) {
        return s.p + "static/js/" + ({
            "pages-address-address~pages-register-register": "pages-address-address~pages-register-register",
            "pages-address-address": "pages-address-address",
            "pages-register-register": "pages-register-register",
            "pages-aliH5pay-aliH5pay": "pages-aliH5pay-aliH5pay",
            "pages-applyAfterSales-applyAfterSales": "pages-applyAfterSales-applyAfterSales",
            "pages-catelist-catelist": "pages-catelist-catelist",
            "pages-checkPro-checkPro": "pages-checkPro-checkPro",
            "pages-chooseStore-chooseStore": "pages-chooseStore-chooseStore",
            "pages-collect-collect": "pages-collect-collect",
            "pages-coupon-coupon": "pages-coupon-coupon",
            "pages-diypage-diypage~pages-index-index": "pages-diypage-diypage~pages-index-index",
            "pages-diypage-diypage": "pages-diypage-diypage",
            "pages-index-index": "pages-index-index",
            "pages-equity_show-equity_show": "pages-equity_show-equity_show",
            "pages-form_list-form_list": "pages-form_list-form_list",
            "pages-formcon-formcon": "pages-formcon-formcon",
            "pages-gwc-gwc": "pages-gwc-gwc",
            "pages-listPic-listPic": "pages-listPic-listPic",
            "pages-logistics_information-logistics_information": "pages-logistics_information-logistics_information",
            "pages-logistics_state-logistics_state": "pages-logistics_state-logistics_state",
            "pages-main_shop_order-main_shop_order": "pages-main_shop_order-main_shop_order",
            "pages-mycoupon-mycoupon": "pages-mycoupon-mycoupon",
            "pages-open1-open1": "pages-open1-open1",
            "pages-orderAftersale-orderAftersale": "pages-orderAftersale-orderAftersale",
            "pages-orderAftersale_list-orderAftersale_list": "pages-orderAftersale_list-orderAftersale_list",
            "pages-orderDetail-orderDetail": "pages-orderDetail-orderDetail",
            "pages-orderDetails-orderDetails": "pages-orderDetails-orderDetails",
            "pages-order_art-order_art": "pages-order_art-order_art",
            "pages-order_down-order_down": "pages-order_down-order_down",
            "pages-order_more_list-order_more_list": "pages-order_more_list-order_more_list",
            "pages-recharge-recharge": "pages-recharge-recharge",
            "pages-scorelist-scorelist": "pages-scorelist-scorelist",
            "pages-search-search": "pages-search-search",
            "pages-shoppay-shoppay": "pages-shoppay-shoppay",
            "pages-showArt-showArt": "pages-showArt-showArt",
            "pages-showPic-showPic": "pages-showPic-showPic",
            "pages-showPiclist-showPiclist": "pages-showPiclist-showPiclist",
            "pages-showProMore-showProMore": "pages-showProMore-showProMore",
            "pages-store-store": "pages-store-store",
            "pages-switchcity-switchcity": "pages-switchcity-switchcity",
            "pages-usercenter-usercenter": "pages-usercenter-usercenter",
            "pages-webpage-webpage": "pages-webpage-webpage",
            "pages-wxH5pay-wxH5pay": "pages-wxH5pay-wxH5pay",
            "pagesActive-active_info-active_info": "pagesActive-active_info-active_info",
            "pagesActive-apply-apply": "pagesActive-apply-apply",
            "pagesActive-apply_collect-apply_collect": "pagesActive-apply_collect-apply_collect",
            "pagesActive-apply_list-apply_list": "pagesActive-apply_list-apply_list",
            "pagesActive-index-index": "pagesActive-index-index",
            "pagesBargain-bargain-bargain": "pagesBargain-bargain-bargain",
            "pagesBargain-bargain_activity-bargain_activity": "pagesBargain-bargain_activity-bargain_activity",
            "pagesBargain-bargain_order-bargain_order": "pagesBargain-bargain_order-bargain_order",
            "pagesBargain-bargain_pro-bargain_pro": "pagesBargain-bargain_pro-bargain_pro",
            "pagesBargain-my_bargain-my_bargain": "pagesBargain-my_bargain-my_bargain",
            "pagesBargain-orderDetail-orderDetail": "pagesBargain-orderDetail-orderDetail",
            "pagesBargain-orderlist-orderlist": "pagesBargain-orderlist-orderlist",
            "pagesCards-card_info-card_info": "pagesCards-card_info-card_info",
            "pagesCards-card_list-card_list": "pagesCards-card_list-card_list",
            "pagesExchange-list-list": "pagesExchange-list-list",
            "pagesExchange-order-order": "pagesExchange-order-order",
            "pagesExchange-show-show": "pagesExchange-show-show",
            "pagesExternal-jdGoods-jdGoods": "pagesExternal-jdGoods-jdGoods",
            "pagesExternal-pddGoods-pddGoods": "pagesExternal-pddGoods-pddGoods",
            "pagesFenxiao-fenxiao_account-fenxiao_account": "pagesFenxiao-fenxiao_account-fenxiao_account",
            "pagesFenxiao-fenxiao_apply-fenxiao_apply": "pagesFenxiao-fenxiao_apply-fenxiao_apply",
            "pagesFenxiao-fenxiao_center-fenxiao_center": "pagesFenxiao-fenxiao_center-fenxiao_center",
            "pagesFenxiao-fenxiao_order-fenxiao_order": "pagesFenxiao-fenxiao_order-fenxiao_order",
            "pagesFenxiao-fenxiao_s-fenxiao_s": "pagesFenxiao-fenxiao_s-fenxiao_s",
            "pagesFenxiao-fenxiao_team-fenxiao_team": "pagesFenxiao-fenxiao_team-fenxiao_team",
            "pagesFenxiao-fenxiao_tixian-fenxiao_tixian": "pagesFenxiao-fenxiao_tixian-fenxiao_tixian",
            "pagesFenxiao-fenxiao_tixian_do-fenxiao_tixian_do": "pagesFenxiao-fenxiao_tixian_do-fenxiao_tixian_do",
            "pagesFlashSale-orderDetail_dan-orderDetail_dan": "pagesFlashSale-orderDetail_dan-orderDetail_dan",
            "pagesFlashSale-order_dan-order_dan": "pagesFlashSale-order_dan-order_dan",
            "pagesFlashSale-orderlist_dan-orderlist_dan": "pagesFlashSale-orderlist_dan-orderlist_dan",
            "pagesFlashSale-showPro-showPro": "pagesFlashSale-showPro-showPro",
            "pagesFood-food-food": "pagesFood-food-food",
            "pagesFood-food_detail-food_detail": "pagesFood-food_detail-food_detail",
            "pagesFood-food_my-food_my": "pagesFood-food_my-food_my",
            "pagesFood-food_order-food_order": "pagesFood-food_order-food_order",
            "pagesOther-evaluate-evaluate": "pagesOther-evaluate-evaluate",
            "pagesOther-evaluate_detail-evaluate_detail": "pagesOther-evaluate_detail-evaluate_detail",
            "pagesOther-evaluate_list-evaluate_list": "pagesOther-evaluate_list-evaluate_list",
            "pagesOther-evaluate_pro-evaluate_pro": "pagesOther-evaluate_pro-evaluate_pro",
            "pagesPluginForum-collect-collect": "pagesPluginForum-collect-collect",
            "pagesPluginForum-forum-forum": "pagesPluginForum-forum-forum",
            "pagesPluginForum-forum_page-forum_page": "pagesPluginForum-forum_page-forum_page",
            "pagesPluginForum-index-index": "pagesPluginForum-index-index",
            "pagesPluginForum-release-release": "pagesPluginForum-release-release",
            "pagesPluginForum-set_top-set_top": "pagesPluginForum-set_top-set_top",
            "pagesPluginShop-goods_buy-goods_buy": "pagesPluginShop-goods_buy-goods_buy",
            "pagesPluginShop-goods_detail-goods_detail": "pagesPluginShop-goods_detail-goods_detail",
            "pagesPluginShop-goods_list-goods_list": "pagesPluginShop-goods_list-goods_list",
            "pagesPluginShop-list-list": "pagesPluginShop-list-list",
            "pagesPluginShop-manage_gotixian-manage_gotixian": "pagesPluginShop-manage_gotixian-manage_gotixian",
            "pagesPluginShop-manage_index-manage_index": "pagesPluginShop-manage_index-manage_index",
            "pagesPluginShop-manage_order-manage_order": "pagesPluginShop-manage_order-manage_order",
            "pagesPluginShop-manage_pro-manage_pro": "pagesPluginShop-manage_pro-manage_pro",
            "pagesPluginShop-manage_prolist-manage_prolist": "pagesPluginShop-manage_prolist-manage_prolist",
            "pagesPluginShop-manage_shop-manage_shop": "pagesPluginShop-manage_shop-manage_shop",
            "pagesPluginShop-manage_szjl-manage_szjl": "pagesPluginShop-manage_szjl-manage_szjl",
            "pagesPluginShop-manage_tixian-manage_tixian": "pagesPluginShop-manage_tixian-manage_tixian",
            "pagesPluginShop-manage_txjl-manage_txjl": "pagesPluginShop-manage_txjl-manage_txjl",
            "pagesPluginShop-register-register": "pagesPluginShop-register-register",
            "pagesPluginShop-shop-shop": "pagesPluginShop-shop-shop",
            "pagesPluginSupply-collect-collect": "pagesPluginSupply-collect-collect",
            "pagesPluginSupply-page-page": "pagesPluginSupply-page-page",
            "pagesPluginSupply-release-release": "pagesPluginSupply-release-release",
            "pagesPluginSupply-set_top-set_top": "pagesPluginSupply-set_top-set_top",
            "pagesPluginSupply-supply-supply": "pagesPluginSupply-supply-supply",
            "pagesPt-index-index": "pagesPt-index-index",
            "pagesPt-order-order": "pagesPt-order-order",
            "pagesPt-orderlist-orderlist": "pagesPt-orderlist-orderlist",
            "pagesPt-products-products": "pagesPt-products-products",
            "pagesPt-pt-pt": "pagesPt-pt-pt",
            "pagesReserve-appointPage-appointPage": "pagesReserve-appointPage-appointPage",
            "pagesReserve-orderDetail-orderDetail": "pagesReserve-orderDetail-orderDetail",
            "pagesReserve-orderList-orderList": "pagesReserve-orderList-orderList",
            "pagesReserve-proBuy-proBuy": "pagesReserve-proBuy-proBuy",
            "pagesReserve-proDetail-proDetail": "pagesReserve-proDetail-proDetail",
            "pagesShake-index-index": "pagesShake-index-index",
            "pagesShake-integral_collect-integral_collect": "pagesShake-integral_collect-integral_collect",
            "pagesShake-prize-prize": "pagesShake-prize-prize",
            "pagesShake-win_prize-win_prize": "pagesShake-win_prize-win_prize",
            "pagesSign-index-index": "pagesSign-index-index",
            "pagesSign-new-new": "pagesSign-new-new",
            "pagesSign-ranking-ranking": "pagesSign-ranking-ranking"
        }[e] || e) + "." + {
            "pages-address-address~pages-register-register": "e66d5608",
            "pages-address-address": "ecbb9abc",
            "pages-register-register": "11dce02e",
            "pages-aliH5pay-aliH5pay": "75a00702",
            "pages-applyAfterSales-applyAfterSales": "ae5190dd",
            "pages-catelist-catelist": "a8b34122",
            "pages-checkPro-checkPro": "f9e637fc",
            "pages-chooseStore-chooseStore": "15339603",
            "pages-collect-collect": "5d86d8ff",
            "pages-coupon-coupon": "351cbaef",
            "pages-diypage-diypage~pages-index-index": "5787ab6b",
            "pages-diypage-diypage": "d4640239",
            "pages-index-index": "c597449e",
            "pages-equity_show-equity_show": "a13669da",
            "pages-form_list-form_list": "b67c6ad7",
            "pages-formcon-formcon": "7394e08c",
            "pages-gwc-gwc": "859dede1",
            "pages-listPic-listPic": "a2cb15e6",
            "pages-logistics_information-logistics_information": "81058b79",
            "pages-logistics_state-logistics_state": "246f6c76",
            "pages-main_shop_order-main_shop_order": "529d8652",
            "pages-mycoupon-mycoupon": "3bbfeca4",
            "pages-open1-open1": "05474b6a",
            "pages-orderAftersale-orderAftersale": "6ef70a54",
            "pages-orderAftersale_list-orderAftersale_list": "40b4f5d2",
            "pages-orderDetail-orderDetail": "c5a87dde",
            "pages-orderDetails-orderDetails": "b52516c4",
            "pages-order_art-order_art": "0dbeb6cc",
            "pages-order_down-order_down": "97cff673",
            "pages-order_more_list-order_more_list": "79aecd56",
            "pages-recharge-recharge": "90507d16",
            "pages-scorelist-scorelist": "750ed84d",
            "pages-search-search": "daf1b0b2",
            "pages-shoppay-shoppay": "af8b1c44",
            "pages-showArt-showArt": "544eb01a",
            "pages-showPic-showPic": "0b6587aa",
            "pages-showPiclist-showPiclist": "b0668923",
            "pages-showProMore-showProMore": "67f238e3",
            "pages-store-store": "8e7d1b1d",
            "pages-switchcity-switchcity": "e9a90b31",
            "pages-usercenter-usercenter": "3b22c9af",
            "pages-webpage-webpage": "dcd9b37f",
            "pages-wxH5pay-wxH5pay": "4178b5f6",
            "pagesActive-active_info-active_info": "6fbfc3a8",
            "pagesActive-apply-apply": "4438b3f5",
            "pagesActive-apply_collect-apply_collect": "1c5dc2c8",
            "pagesActive-apply_list-apply_list": "3c3b814e",
            "pagesActive-index-index": "a3be4985",
            "pagesBargain-bargain-bargain": "8f03b984",
            "pagesBargain-bargain_activity-bargain_activity": "4473505c",
            "pagesBargain-bargain_order-bargain_order": "e4b17e8e",
            "pagesBargain-bargain_pro-bargain_pro": "c06479ce",
            "pagesBargain-my_bargain-my_bargain": "f5368cdd",
            "pagesBargain-orderDetail-orderDetail": "5a8dd436",
            "pagesBargain-orderlist-orderlist": "07f8ce0f",
            "pagesCards-card_info-card_info": "2ac4cef7",
            "pagesCards-card_list-card_list": "1948b8ec",
            "pagesExchange-list-list": "3e73baa8",
            "pagesExchange-order-order": "b052c678",
            "pagesExchange-show-show": "43c71253",
            "pagesExternal-jdGoods-jdGoods": "00176a40",
            "pagesExternal-pddGoods-pddGoods": "76655586",
            "pagesFenxiao-fenxiao_account-fenxiao_account": "54b2f7c5",
            "pagesFenxiao-fenxiao_apply-fenxiao_apply": "478a462e",
            "pagesFenxiao-fenxiao_center-fenxiao_center": "afe2a797",
            "pagesFenxiao-fenxiao_order-fenxiao_order": "68898b26",
            "pagesFenxiao-fenxiao_s-fenxiao_s": "076defa4",
            "pagesFenxiao-fenxiao_team-fenxiao_team": "c39b585c",
            "pagesFenxiao-fenxiao_tixian-fenxiao_tixian": "f4d3122a",
            "pagesFenxiao-fenxiao_tixian_do-fenxiao_tixian_do": "8c0a88e5",
            "pagesFlashSale-orderDetail_dan-orderDetail_dan": "5db0d755",
            "pagesFlashSale-order_dan-order_dan": "c6ee562b",
            "pagesFlashSale-orderlist_dan-orderlist_dan": "13e6c1dc",
            "pagesFlashSale-showPro-showPro": "a7d55159",
            "pagesFood-food-food": "f9a28dbc",
            "pagesFood-food_detail-food_detail": "1fb2c0fb",
            "pagesFood-food_my-food_my": "59d9877b",
            "pagesFood-food_order-food_order": "a68509b5",
            "pagesOther-evaluate-evaluate": "1eaea83e",
            "pagesOther-evaluate_detail-evaluate_detail": "ed457c5e",
            "pagesOther-evaluate_list-evaluate_list": "d8d31be9",
            "pagesOther-evaluate_pro-evaluate_pro": "208cd441",
            "pagesPluginForum-collect-collect": "cf2abc8c",
            "pagesPluginForum-forum-forum": "ab29f4e5",
            "pagesPluginForum-forum_page-forum_page": "1c41bacf",
            "pagesPluginForum-index-index": "04a080b9",
            "pagesPluginForum-release-release": "505efc6d",
            "pagesPluginForum-set_top-set_top": "2337e14f",
            "pagesPluginShop-goods_buy-goods_buy": "0e5d2271",
            "pagesPluginShop-goods_detail-goods_detail": "f0be10d4",
            "pagesPluginShop-goods_list-goods_list": "54707527",
            "pagesPluginShop-list-list": "1c0c70c9",
            "pagesPluginShop-manage_gotixian-manage_gotixian": "1fa61649",
            "pagesPluginShop-manage_index-manage_index": "f84aa7df",
            "pagesPluginShop-manage_order-manage_order": "1b48bb36",
            "pagesPluginShop-manage_pro-manage_pro": "3d6ea352",
            "pagesPluginShop-manage_prolist-manage_prolist": "cf5937f0",
            "pagesPluginShop-manage_shop-manage_shop": "e0f2db09",
            "pagesPluginShop-manage_szjl-manage_szjl": "15a90f5a",
            "pagesPluginShop-manage_tixian-manage_tixian": "a0c49dec",
            "pagesPluginShop-manage_txjl-manage_txjl": "e2433081",
            "pagesPluginShop-register-register": "af6c776a",
            "pagesPluginShop-shop-shop": "4f6a6a96",
            "pagesPluginSupply-collect-collect": "c1c40de2",
            "pagesPluginSupply-page-page": "9b7e92a4",
            "pagesPluginSupply-release-release": "d751edf3",
            "pagesPluginSupply-set_top-set_top": "ab7b035f",
            "pagesPluginSupply-supply-supply": "5cfa1933",
            "pagesPt-index-index": "00377693",
            "pagesPt-order-order": "6941184c",
            "pagesPt-orderlist-orderlist": "9c09cb9e",
            "pagesPt-products-products": "d9a5797c",
            "pagesPt-pt-pt": "61deffd7",
            "pagesReserve-appointPage-appointPage": "b7a71809",
            "pagesReserve-orderDetail-orderDetail": "29cb0989",
            "pagesReserve-orderList-orderList": "b45c3a85",
            "pagesReserve-proBuy-proBuy": "c143f7f0",
            "pagesReserve-proDetail-proDetail": "a26f7540",
            "pagesShake-index-index": "0e08aaed",
            "pagesShake-integral_collect-integral_collect": "e01d6e62",
            "pagesShake-prize-prize": "16727fb8",
            "pagesShake-win_prize-win_prize": "0c27ad8d",
            "pagesSign-index-index": "18adf9d0",
            "pagesSign-new-new": "521a6a47",
            "pagesSign-ranking-ranking": "38ea50fb"
        }[e] + ".js"
    }

    function s(n) {
        if (i[n]) return i[n].exports;
        var o = i[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(o.exports, o, o.exports, s), o.l = !0, o.exports
    }
    s.e = function(e) {
        var n = [],
            o = t[e];
        if (0 !== o)
            if (o) n.push(o[2]);
            else {
                var i = new Promise(function(n, i) {
                    o = t[e] = [n, i]
                });
                n.push(o[2] = i);
                var a, c = document.createElement("script");
                c.charset = "utf-8", c.timeout = 120, s.nc && c.setAttribute("nonce", s.nc), c.src = r(e), a = function(n) {
                    c.onerror = c.onload = null, clearTimeout(l);
                    var o = t[e];
                    if (0 !== o) {
                        if (o) {
                            var i = n && ("load" === n.type ? "missing" : n.type),
                                a = n && n.target && n.target.src,
                                r = new Error("Loading chunk " + e + " failed.\n(" + i + ": " + a + ")");
                            r.type = i, r.request = a, o[1](r)
                        }
                        t[e] = void 0
                    }
                };
                var l = setTimeout(function() {
                    a({
                        type: "timeout",
                        target: c
                    })
                }, 12e4);
                c.onerror = c.onload = a, document.head.appendChild(c)
            }
        return Promise.all(n)
    }, s.m = e, s.c = i, s.d = function(e, n, o) {
        s.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: o
        })
    }, s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, n) {
        if (1 & n && (e = s(e)), 8 & n) return e;
        if (4 & n && "object" === typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (s.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var i in e) s.d(o, i, function(n) {
                return e[n]
            }.bind(null, i));
        return o
    }, s.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return s.d(n, "a", n), n
    }, s.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, s.p = "/h5/", s.oe = function(e) {
        throw console.error(e), e
    };
    var c = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = c.push.bind(c);
    c.push = n, c = c.slice();
    for (var g = 0; g < c.length; g++) n(c[g]);
    var u = l;
    a.push([0, "chunk-vendors"]), o()
})({
    0: function(e, n, o) {
        e.exports = o("a61a")
    },
    "04bb": function(e, n, o) {
        "use strict";
        var i = o("288e");
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, o("28a5"), o("386d");
        var t = i(o("e143")),
            a = (o("3a34"), {
                onLaunch: function() {
                    uni.setStorageSync("source", 3);
                    var e = window.location.search;
                    if (-1 != e.indexOf("?")) {
                        var n = e.substr(1),
                            o = n.split("=");
                        if (-1 != o[1].indexOf("&")) {
                            var i = o[1].split("&"),
                                a = i[0];
                            console.log(a)
                        } else a = o[1];
                        t.default.prototype.$uniacid = a, uni.setStorageSync("uniacid", a)
                    }
                    uni.getSystemInfo({
                        success: function(e) {
                            uni.setStorageSync("systemInfo", e)
                        }
                    })
                },
                onShow: function() {
                    console.log("App Show")
                },
                onHide: function() {
                    console.log("App Hide")
                }
            });
        n.default = a
    },
    "0879": function(e, n, o) {
        "use strict";
        o.r(n);
        var i = o("fa68"),
            t = o("d47f");
        for (var a in t) "default" !== a && function(e) {
            o.d(n, e, function() {
                return t[e]
            })
        }(a);
        var r = o("2877"),
            s = Object(r["a"])(t["default"], i["a"], i["b"], !1, null, "573117be", null);
        n["default"] = s.exports
    },
    "093a": function(e, n, o) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = {
            appid: "__UNI__9BE24D4"
        };
        n.default = i
    },
    "220e": function(e, n, o) {
        "use strict";
        (function(e) {
            var n = o("288e"),
                i = n(o("5176")),
                t = n(o("e143"));
            e["____9BE24D4____"] = !0, delete e["____9BE24D4____"], e.__uniConfig = {
                globalStyle: {
                    navigationBarTextStyle: "black",
                    navigationBarTitleText: "",
                    navigationBarBackgroundColor: "#F8F8F8",
                    backgroundColor: "#F8F8F8",
                    enablePullDownRefresh: !0
                },
                condition: {
                    current: 0,
                    list: [{
                        name: "index",
                        path: "pages/index/index",
                        query: ""
                    }, {
                        name: "user",
                        path: "pages/usercenter/usercenter",
                        query: ""
                    }, {
                        name: "showProMore",
                        path: "pages/showProMore/showProMore",
                        query: "id=2534"
                    }, {
                        name: "gwc",
                        path: "pages/gwc/gwc",
                        query: ""
                    }, {
                        name: "shop",
                        path: "pagesPluginShop/shop/shop",
                        query: "id=59"
                    }, {
                        name: "food_detail",
                        path: "pagesFood/food_detail/food_detail",
                        query: "id=14"
                    }, {
                        name: "food",
                        path: "pagesFood/food/food",
                        query: ""
                    }, {
                        name: "foodmy",
                        path: "pagesFood/food_my/food_my",
                        query: ""
                    }, {
                        name: "bargain_pro",
                        path: "pagesBargain/bargain_pro/bargain_pro",
                        query: "id=1"
                    }, {
                        name: "bargain",
                        path: "pagesBargain/bargain/bargain",
                        query: ""
                    }, {
                        name: "my_bargain",
                        path: "pagesBargain/my_bargain/my_bargain",
                        query: ""
                    }, {
                        name: "store",
                        path: "pages/store/store",
                        query: ""
                    }, {
                        name: "card_list",
                        path: "pagesCards/card_list/card_list",
                        query: ""
                    }, {
                        name: "order_down",
                        path: "pages/order_down/order_down",
                        query: ""
                    }]
                }
            }, e.__uniConfig.router = {
                mode: "hash",
                base: "/h5/"
            }, e.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 200,
                timeout: 3e3
            }, e.__uniConfig.debug = !1, e.__uniConfig.networkTimeout = {
                request: 6e3,
                connectSocket: 6e3,
                uploadFile: 6e3,
                downloadFile: 6e3
            }, e.__uniConfig.sdkConfigs = {}, e.__uniConfig.qqMapKey = "XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2", e.__uniConfig.nvue = {
                "flex-direction": "column"
            }, t.default.component("pages-index-index", function(e) {
                var n = {
                    component: Promise.all([o.e("pages-diypage-diypage~pages-index-index"), o.e("pages-index-index")]).then(function() {
                        return e(o("925e"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-usercenter-usercenter", function(e) {
                var n = {
                    component: o.e("pages-usercenter-usercenter").then(function() {
                        return e(o("cc63"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-main_shop_order-main_shop_order", function(e) {
                var n = {
                    component: o.e("pages-main_shop_order-main_shop_order").then(function() {
                        return e(o("a1c4"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-order_more_list-order_more_list", function(e) {
                var n = {
                    component: o.e("pages-order_more_list-order_more_list").then(function() {
                        return e(o("ca80"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-orderDetails-orderDetails", function(e) {
                var n = {
                    component: o.e("pages-orderDetails-orderDetails").then(function() {
                        return e(o("a9c6"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-orderDetail-orderDetail", function(e) {
                var n = {
                    component: o.e("pages-orderDetail-orderDetail").then(function() {
                        return e(o("1865"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-applyAfterSales-applyAfterSales", function(e) {
                var n = {
                    component: o.e("pages-applyAfterSales-applyAfterSales").then(function() {
                        return e(o("19c0"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-orderAftersale_list-orderAftersale_list", function(e) {
                var n = {
                    component: o.e("pages-orderAftersale_list-orderAftersale_list").then(function() {
                        return e(o("ee15"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-orderAftersale-orderAftersale", function(e) {
                var n = {
                    component: o.e("pages-orderAftersale-orderAftersale").then(function() {
                        return e(o("7e85"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-address-address", function(e) {
                var n = {
                    component: Promise.all([o.e("pages-address-address~pages-register-register"), o.e("pages-address-address")]).then(function() {
                        return e(o("da38"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-showProMore-showProMore", function(e) {
                var n = {
                    component: o.e("pages-showProMore-showProMore").then(function() {
                        return e(o("c8af"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-order_down-order_down", function(e) {
                var n = {
                    component: o.e("pages-order_down-order_down").then(function() {
                        return e(o("540f"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-chooseStore-chooseStore", function(e) {
                var n = {
                    component: o.e("pages-chooseStore-chooseStore").then(function() {
                        return e(o("9c61"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-collect-collect", function(e) {
                var n = {
                    component: o.e("pages-collect-collect").then(function() {
                        return e(o("f70c"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-mycoupon-mycoupon", function(e) {
                var n = {
                    component: o.e("pages-mycoupon-mycoupon").then(function() {
                        return e(o("023e"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-coupon-coupon", function(e) {
                var n = {
                    component: o.e("pages-coupon-coupon").then(function() {
                        return e(o("40dc"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-aliH5pay-aliH5pay", function(e) {
                var n = {
                    component: o.e("pages-aliH5pay-aliH5pay").then(function() {
                        return e(o("7f9e"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-wxH5pay-wxH5pay", function(e) {
                var n = {
                    component: o.e("pages-wxH5pay-wxH5pay").then(function() {
                        return e(o("9615"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-gwc-gwc", function(e) {
                var n = {
                    component: o.e("pages-gwc-gwc").then(function() {
                        return e(o("1b09"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-showArt-showArt", function(e) {
                var n = {
                    component: o.e("pages-showArt-showArt").then(function() {
                        return e(o("0864"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-order_art-order_art", function(e) {
                var n = {
                    component: o.e("pages-order_art-order_art").then(function() {
                        return e(o("e51c"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-recharge-recharge", function(e) {
                var n = {
                    component: o.e("pages-recharge-recharge").then(function() {
                        return e(o("a6eb"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-showPic-showPic", function(e) {
                var n = {
                    component: o.e("pages-showPic-showPic").then(function() {
                        return e(o("4eba"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-showPiclist-showPiclist", function(e) {
                var n = {
                    component: o.e("pages-showPiclist-showPiclist").then(function() {
                        return e(o("b7e1"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-listPic-listPic", function(e) {
                var n = {
                    component: o.e("pages-listPic-listPic").then(function() {
                        return e(o("cfa5"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-search-search", function(e) {
                var n = {
                    component: o.e("pages-search-search").then(function() {
                        return e(o("9c616"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-diypage-diypage", function(e) {
                var n = {
                    component: Promise.all([o.e("pages-diypage-diypage~pages-index-index"), o.e("pages-diypage-diypage")]).then(function() {
                        return e(o("acef"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-logistics_state-logistics_state", function(e) {
                var n = {
                    component: o.e("pages-logistics_state-logistics_state").then(function() {
                        return e(o("7717"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-logistics_information-logistics_information", function(e) {
                var n = {
                    component: o.e("pages-logistics_information-logistics_information").then(function() {
                        return e(o("27e8"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-webpage-webpage", function(e) {
                var n = {
                    component: o.e("pages-webpage-webpage").then(function() {
                        return e(o("41fa"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-shoppay-shoppay", function(e) {
                var n = {
                    component: o.e("pages-shoppay-shoppay").then(function() {
                        return e(o("6a31"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-scorelist-scorelist", function(e) {
                var n = {
                    component: o.e("pages-scorelist-scorelist").then(function() {
                        return e(o("f073"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-store-store", function(e) {
                var n = {
                    component: o.e("pages-store-store").then(function() {
                        return e(o("aa75"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-switchcity-switchcity", function(e) {
                var n = {
                    component: o.e("pages-switchcity-switchcity").then(function() {
                        return e(o("80b8"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-equity_show-equity_show", function(e) {
                var n = {
                    component: o.e("pages-equity_show-equity_show").then(function() {
                        return e(o("f04e"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-open1-open1", function(e) {
                var n = {
                    component: o.e("pages-open1-open1").then(function() {
                        return e(o("07b1"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-register-register", function(e) {
                var n = {
                    component: Promise.all([o.e("pages-address-address~pages-register-register"), o.e("pages-register-register")]).then(function() {
                        return e(o("a11e"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-form_list-form_list", function(e) {
                var n = {
                    component: o.e("pages-form_list-form_list").then(function() {
                        return e(o("d5e1"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-formcon-formcon", function(e) {
                var n = {
                    component: o.e("pages-formcon-formcon").then(function() {
                        return e(o("1de3"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-catelist-catelist", function(e) {
                var n = {
                    component: o.e("pages-catelist-catelist").then(function() {
                        return e(o("bcf7"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pages-checkPro-checkPro", function(e) {
                var n = {
                    component: o.e("pages-checkPro-checkPro").then(function() {
                        return e(o("4afe"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFlashSale-showPro-showPro", function(e) {
                var n = {
                    component: o.e("pagesFlashSale-showPro-showPro").then(function() {
                        return e(o("3484"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFlashSale-order_dan-order_dan", function(e) {
                var n = {
                    component: o.e("pagesFlashSale-order_dan-order_dan").then(function() {
                        return e(o("4fce"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFlashSale-orderlist_dan-orderlist_dan", function(e) {
                var n = {
                    component: o.e("pagesFlashSale-orderlist_dan-orderlist_dan").then(function() {
                        return e(o("a290"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFlashSale-orderDetail_dan-orderDetail_dan", function(e) {
                var n = {
                    component: o.e("pagesFlashSale-orderDetail_dan-orderDetail_dan").then(function() {
                        return e(o("642c"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPt-products-products", function(e) {
                var n = {
                    component: o.e("pagesPt-products-products").then(function() {
                        return e(o("63e1"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPt-order-order", function(e) {
                var n = {
                    component: o.e("pagesPt-order-order").then(function() {
                        return e(o("49fd"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPt-pt-pt", function(e) {
                var n = {
                    component: o.e("pagesPt-pt-pt").then(function() {
                        return e(o("2c93"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPt-orderlist-orderlist", function(e) {
                var n = {
                    component: o.e("pagesPt-orderlist-orderlist").then(function() {
                        return e(o("15e4"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPt-index-index", function(e) {
                var n = {
                    component: o.e("pagesPt-index-index").then(function() {
                        return e(o("55f1"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesReserve-orderList-orderList", function(e) {
                var n = {
                    component: o.e("pagesReserve-orderList-orderList").then(function() {
                        return e(o("85c4"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesReserve-proBuy-proBuy", function(e) {
                var n = {
                    component: o.e("pagesReserve-proBuy-proBuy").then(function() {
                        return e(o("bb15"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesReserve-proDetail-proDetail", function(e) {
                var n = {
                    component: o.e("pagesReserve-proDetail-proDetail").then(function() {
                        return e(o("4312"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesReserve-appointPage-appointPage", function(e) {
                var n = {
                    component: o.e("pagesReserve-appointPage-appointPage").then(function() {
                        return e(o("ed55"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesReserve-orderDetail-orderDetail", function(e) {
                var n = {
                    component: o.e("pagesReserve-orderDetail-orderDetail").then(function() {
                        return e(o("e14d"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesSign-index-index", function(e) {
                var n = {
                    component: o.e("pagesSign-index-index").then(function() {
                        return e(o("4ab9"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesSign-new-new", function(e) {
                var n = {
                    component: o.e("pagesSign-new-new").then(function() {
                        return e(o("df5e"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesSign-ranking-ranking", function(e) {
                var n = {
                    component: o.e("pagesSign-ranking-ranking").then(function() {
                        return e(o("ea26"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesExchange-list-list", function(e) {
                var n = {
                    component: o.e("pagesExchange-list-list").then(function() {
                        return e(o("dfb3"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesExchange-show-show", function(e) {
                var n = {
                    component: o.e("pagesExchange-show-show").then(function() {
                        return e(o("9d9e"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesExchange-order-order", function(e) {
                var n = {
                    component: o.e("pagesExchange-order-order").then(function() {
                        return e(o("ddf7"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesCards-card_info-card_info", function(e) {
                var n = {
                    component: o.e("pagesCards-card_info-card_info").then(function() {
                        return e(o("0b86"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesCards-card_list-card_list", function(e) {
                var n = {
                    component: o.e("pagesCards-card_list-card_list").then(function() {
                        return e(o("b9e2"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesShake-index-index", function(e) {
                var n = {
                    component: o.e("pagesShake-index-index").then(function() {
                        return e(o("f3d0"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesShake-integral_collect-integral_collect", function(e) {
                var n = {
                    component: o.e("pagesShake-integral_collect-integral_collect").then(function() {
                        return e(o("6608"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesShake-prize-prize", function(e) {
                var n = {
                    component: o.e("pagesShake-prize-prize").then(function() {
                        return e(o("9183"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesShake-win_prize-win_prize", function(e) {
                var n = {
                    component: o.e("pagesShake-win_prize-win_prize").then(function() {
                        return e(o("12c0"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFood-food-food", function(e) {
                var n = {
                    component: o.e("pagesFood-food-food").then(function() {
                        return e(o("461e"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFood-food_my-food_my", function(e) {
                var n = {
                    component: o.e("pagesFood-food_my-food_my").then(function() {
                        return e(o("8778"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFood-food_order-food_order", function(e) {
                var n = {
                    component: o.e("pagesFood-food_order-food_order").then(function() {
                        return e(o("5135"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFood-food_detail-food_detail", function(e) {
                var n = {
                    component: o.e("pagesFood-food_detail-food_detail").then(function() {
                        return e(o("ce98"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesBargain-bargain-bargain", function(e) {
                var n = {
                    component: o.e("pagesBargain-bargain-bargain").then(function() {
                        return e(o("799b"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesBargain-bargain_activity-bargain_activity", function(e) {
                var n = {
                    component: o.e("pagesBargain-bargain_activity-bargain_activity").then(function() {
                        return e(o("0751"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesBargain-bargain_order-bargain_order", function(e) {
                var n = {
                    component: o.e("pagesBargain-bargain_order-bargain_order").then(function() {
                        return e(o("00b3"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesBargain-bargain_pro-bargain_pro", function(e) {
                var n = {
                    component: o.e("pagesBargain-bargain_pro-bargain_pro").then(function() {
                        return e(o("62bc"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesBargain-my_bargain-my_bargain", function(e) {
                var n = {
                    component: o.e("pagesBargain-my_bargain-my_bargain").then(function() {
                        return e(o("7abe"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesBargain-orderDetail-orderDetail", function(e) {
                var n = {
                    component: o.e("pagesBargain-orderDetail-orderDetail").then(function() {
                        return e(o("ac17"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesBargain-orderlist-orderlist", function(e) {
                var n = {
                    component: o.e("pagesBargain-orderlist-orderlist").then(function() {
                        return e(o("365d"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginForum-collect-collect", function(e) {
                var n = {
                    component: o.e("pagesPluginForum-collect-collect").then(function() {
                        return e(o("f92e"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginForum-forum-forum", function(e) {
                var n = {
                    component: o.e("pagesPluginForum-forum-forum").then(function() {
                        return e(o("d0be"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginForum-forum_page-forum_page", function(e) {
                var n = {
                    component: o.e("pagesPluginForum-forum_page-forum_page").then(function() {
                        return e(o("4648"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginForum-index-index", function(e) {
                var n = {
                    component: o.e("pagesPluginForum-index-index").then(function() {
                        return e(o("58aa"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginForum-release-release", function(e) {
                var n = {
                    component: o.e("pagesPluginForum-release-release").then(function() {
                        return e(o("d721"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginForum-set_top-set_top", function(e) {
                var n = {
                    component: o.e("pagesPluginForum-set_top-set_top").then(function() {
                        return e(o("6640"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-goods_buy-goods_buy", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-goods_buy-goods_buy").then(function() {
                        return e(o("a4eb"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-goods_detail-goods_detail", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-goods_detail-goods_detail").then(function() {
                        return e(o("7de7"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-goods_list-goods_list", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-goods_list-goods_list").then(function() {
                        return e(o("57c9"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-list-list", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-list-list").then(function() {
                        return e(o("3e7f"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-manage_gotixian-manage_gotixian", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-manage_gotixian-manage_gotixian").then(function() {
                        return e(o("25ee"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-manage_index-manage_index", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-manage_index-manage_index").then(function() {
                        return e(o("faa0"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-manage_order-manage_order", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-manage_order-manage_order").then(function() {
                        return e(o("e799"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-manage_pro-manage_pro", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-manage_pro-manage_pro").then(function() {
                        return e(o("aab3"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-manage_prolist-manage_prolist", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-manage_prolist-manage_prolist").then(function() {
                        return e(o("198d"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-manage_shop-manage_shop", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-manage_shop-manage_shop").then(function() {
                        return e(o("0e98"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-manage_szjl-manage_szjl", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-manage_szjl-manage_szjl").then(function() {
                        return e(o("e041"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-manage_tixian-manage_tixian", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-manage_tixian-manage_tixian").then(function() {
                        return e(o("5a16"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-manage_txjl-manage_txjl", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-manage_txjl-manage_txjl").then(function() {
                        return e(o("55f1a"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-register-register", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-register-register").then(function() {
                        return e(o("aa48"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginShop-shop-shop", function(e) {
                var n = {
                    component: o.e("pagesPluginShop-shop-shop").then(function() {
                        return e(o("3436"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginSupply-collect-collect", function(e) {
                var n = {
                    component: o.e("pagesPluginSupply-collect-collect").then(function() {
                        return e(o("a98b"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginSupply-page-page", function(e) {
                var n = {
                    component: o.e("pagesPluginSupply-page-page").then(function() {
                        return e(o("265f"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginSupply-release-release", function(e) {
                var n = {
                    component: o.e("pagesPluginSupply-release-release").then(function() {
                        return e(o("9f3c"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginSupply-set_top-set_top", function(e) {
                var n = {
                    component: o.e("pagesPluginSupply-set_top-set_top").then(function() {
                        return e(o("df48"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesPluginSupply-supply-supply", function(e) {
                var n = {
                    component: o.e("pagesPluginSupply-supply-supply").then(function() {
                        return e(o("76aa"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesExternal-jdGoods-jdGoods", function(e) {
                var n = {
                    component: o.e("pagesExternal-jdGoods-jdGoods").then(function() {
                        return e(o("6f98"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesExternal-pddGoods-pddGoods", function(e) {
                var n = {
                    component: o.e("pagesExternal-pddGoods-pddGoods").then(function() {
                        return e(o("5c2c"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesActive-active_info-active_info", function(e) {
                var n = {
                    component: o.e("pagesActive-active_info-active_info").then(function() {
                        return e(o("63fc"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesActive-apply-apply", function(e) {
                var n = {
                    component: o.e("pagesActive-apply-apply").then(function() {
                        return e(o("6d0a"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesActive-apply_collect-apply_collect", function(e) {
                var n = {
                    component: o.e("pagesActive-apply_collect-apply_collect").then(function() {
                        return e(o("c295"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesActive-apply_list-apply_list", function(e) {
                var n = {
                    component: o.e("pagesActive-apply_list-apply_list").then(function() {
                        return e(o("fa41"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesActive-index-index", function(e) {
                var n = {
                    component: o.e("pagesActive-index-index").then(function() {
                        return e(o("775e"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFenxiao-fenxiao_account-fenxiao_account", function(e) {
                var n = {
                    component: o.e("pagesFenxiao-fenxiao_account-fenxiao_account").then(function() {
                        return e(o("60ec"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFenxiao-fenxiao_apply-fenxiao_apply", function(e) {
                var n = {
                    component: o.e("pagesFenxiao-fenxiao_apply-fenxiao_apply").then(function() {
                        return e(o("f97c"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFenxiao-fenxiao_center-fenxiao_center", function(e) {
                var n = {
                    component: o.e("pagesFenxiao-fenxiao_center-fenxiao_center").then(function() {
                        return e(o("668f"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFenxiao-fenxiao_order-fenxiao_order", function(e) {
                var n = {
                    component: o.e("pagesFenxiao-fenxiao_order-fenxiao_order").then(function() {
                        return e(o("945c"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFenxiao-fenxiao_s-fenxiao_s", function(e) {
                var n = {
                    component: o.e("pagesFenxiao-fenxiao_s-fenxiao_s").then(function() {
                        return e(o("64f6"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFenxiao-fenxiao_team-fenxiao_team", function(e) {
                var n = {
                    component: o.e("pagesFenxiao-fenxiao_team-fenxiao_team").then(function() {
                        return e(o("4b1a"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFenxiao-fenxiao_tixian-fenxiao_tixian", function(e) {
                var n = {
                    component: o.e("pagesFenxiao-fenxiao_tixian-fenxiao_tixian").then(function() {
                        return e(o("f8d7"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesFenxiao-fenxiao_tixian_do-fenxiao_tixian_do", function(e) {
                var n = {
                    component: o.e("pagesFenxiao-fenxiao_tixian_do-fenxiao_tixian_do").then(function() {
                        return e(o("af1e"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesOther-evaluate-evaluate", function(e) {
                var n = {
                    component: o.e("pagesOther-evaluate-evaluate").then(function() {
                        return e(o("7097"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesOther-evaluate_list-evaluate_list", function(e) {
                var n = {
                    component: o.e("pagesOther-evaluate_list-evaluate_list").then(function() {
                        return e(o("e6fc"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesOther-evaluate_detail-evaluate_detail", function(e) {
                var n = {
                    component: o.e("pagesOther-evaluate_detail-evaluate_detail").then(function() {
                        return e(o("e066"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), t.default.component("pagesOther-evaluate_pro-evaluate_pro", function(e) {
                var n = {
                    component: o.e("pagesOther-evaluate_pro-evaluate_pro").then(function() {
                        return e(o("1b8a"))
                    }.bind(null, o)).catch(o.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (n.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (n.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), n
            }), e.__uniRoutes = [{
                path: "/",
                alias: "/pages/index/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({
                                isQuit: !0,
                                isEntry: !0
                            }, __uniConfig.globalStyle, {
                                navigationBarTitleText: "首页"
                            })
                        }, [e("pages-index-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-index-index",
                    isNVue: !1,
                    pagePath: "pages/index/index",
                    isQuit: !0,
                    isEntry: !0,
                    windowTop: 0
                }
            }, {
                path: "/pages/usercenter/usercenter",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "个人中心"
                            })
                        }, [e("pages-usercenter-usercenter", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-usercenter-usercenter",
                    isNVue: !1,
                    pagePath: "pages/usercenter/usercenter",
                    windowTop: 0
                }
            }, {
                path: "/pages/main_shop_order/main_shop_order",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "我的订单"
                            })
                        }, [e("pages-main_shop_order-main_shop_order", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-main_shop_order-main_shop_order",
                    isNVue: !1,
                    pagePath: "pages/main_shop_order/main_shop_order",
                    windowTop: 0
                }
            }, {
                path: "/pages/order_more_list/order_more_list",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "我的订单"
                            })
                        }, [e("pages-order_more_list-order_more_list", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-order_more_list-order_more_list",
                    isNVue: !1,
                    pagePath: "pages/order_more_list/order_more_list",
                    windowTop: 0
                }
            }, {
                path: "/pages/orderDetails/orderDetails",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "订单详情"
                            })
                        }, [e("pages-orderDetails-orderDetails", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-orderDetails-orderDetails",
                    isNVue: !1,
                    pagePath: "pages/orderDetails/orderDetails",
                    windowTop: 0
                }
            }, {
                path: "/pages/orderDetail/orderDetail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "订单详情"
                            })
                        }, [e("pages-orderDetail-orderDetail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-orderDetail-orderDetail",
                    isNVue: !1,
                    pagePath: "pages/orderDetail/orderDetail",
                    windowTop: 0
                }
            }, {
                path: "/pages/applyAfterSales/applyAfterSales",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "申请售后",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-applyAfterSales-applyAfterSales", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-applyAfterSales-applyAfterSales",
                    isNVue: !1,
                    pagePath: "pages/applyAfterSales/applyAfterSales",
                    windowTop: 0
                }
            }, {
                path: "/pages/orderAftersale_list/orderAftersale_list",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "售后订单"
                            })
                        }, [e("pages-orderAftersale_list-orderAftersale_list", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-orderAftersale_list-orderAftersale_list",
                    isNVue: !1,
                    pagePath: "pages/orderAftersale_list/orderAftersale_list",
                    windowTop: 0
                }
            }, {
                path: "/pages/orderAftersale/orderAftersale",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "售后详情"
                            })
                        }, [e("pages-orderAftersale-orderAftersale", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-orderAftersale-orderAftersale",
                    isNVue: !1,
                    pagePath: "pages/orderAftersale/orderAftersale",
                    windowTop: 0
                }
            }, {
                path: "/pages/address/address",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "地址列表"
                            })
                        }, [e("pages-address-address", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-address-address",
                    isNVue: !1,
                    pagePath: "pages/address/address",
                    windowTop: 0
                }
            }, {
                path: "/pages/showProMore/showProMore",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationStyle: "custom"
                            })
                        }, [e("pages-showProMore-showProMore", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-showProMore-showProMore",
                    isNVue: !1,
                    pagePath: "pages/showProMore/showProMore",
                    windowTop: 0
                }
            }, {
                path: "/pages/order_down/order_down",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "商品订单",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pages-order_down-order_down", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-order_down-order_down",
                    isNVue: !1,
                    pagePath: "pages/order_down/order_down",
                    windowTop: 0
                }
            }, {
                path: "/pages/chooseStore/chooseStore",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "门店列表"
                            })
                        }, [e("pages-chooseStore-chooseStore", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-chooseStore-chooseStore",
                    isNVue: !1,
                    pagePath: "pages/chooseStore/chooseStore",
                    windowTop: 0
                }
            }, {
                path: "/pages/collect/collect",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "我的收藏"
                            })
                        }, [e("pages-collect-collect", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-collect-collect",
                    isNVue: !1,
                    pagePath: "pages/collect/collect",
                    windowTop: 0
                }
            }, {
                path: "/pages/mycoupon/mycoupon",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "我的优惠券"
                            })
                        }, [e("pages-mycoupon-mycoupon", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mycoupon-mycoupon",
                    isNVue: !1,
                    pagePath: "pages/mycoupon/mycoupon",
                    windowTop: 0
                }
            }, {
                path: "/pages/coupon/coupon",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "领取优惠券"
                            })
                        }, [e("pages-coupon-coupon", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-coupon-coupon",
                    isNVue: !1,
                    pagePath: "pages/coupon/coupon",
                    windowTop: 0
                }
            }, {
                path: "/pages/aliH5pay/aliH5pay",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "支付宝支付"
                            })
                        }, [e("pages-aliH5pay-aliH5pay", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-aliH5pay-aliH5pay",
                    isNVue: !1,
                    pagePath: "pages/aliH5pay/aliH5pay",
                    windowTop: 0
                }
            }, {
                path: "/pages/wxH5pay/wxH5pay",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "微信支付"
                            })
                        }, [e("pages-wxH5pay-wxH5pay", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-wxH5pay-wxH5pay",
                    isNVue: !1,
                    pagePath: "pages/wxH5pay/wxH5pay",
                    windowTop: 0
                }
            }, {
                path: "/pages/gwc/gwc",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "购物车"
                            })
                        }, [e("pages-gwc-gwc", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-gwc-gwc",
                    isNVue: !1,
                    pagePath: "pages/gwc/gwc",
                    windowTop: 0
                }
            }, {
                path: "/pages/showArt/showArt",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "文章详情页"
                            })
                        }, [e("pages-showArt-showArt", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-showArt-showArt",
                    isNVue: !1,
                    pagePath: "pages/showArt/showArt",
                    windowTop: 0
                }
            }, {
                path: "/pages/order_art/order_art",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "文章付费订单"
                            })
                        }, [e("pages-order_art-order_art", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-order_art-order_art",
                    isNVue: !1,
                    pagePath: "pages/order_art/order_art",
                    windowTop: 0
                }
            }, {
                path: "/pages/recharge/recharge",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "账户充值"
                            })
                        }, [e("pages-recharge-recharge", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-recharge-recharge",
                    isNVue: !1,
                    pagePath: "pages/recharge/recharge",
                    windowTop: 0
                }
            }, {
                path: "/pages/showPic/showPic",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationStyle: "custom"
                            })
                        }, [e("pages-showPic-showPic", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-showPic-showPic",
                    isNVue: !1,
                    pagePath: "pages/showPic/showPic",
                    windowTop: 0
                }
            }, {
                path: "/pages/showPiclist/showPiclist",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "组图"
                            })
                        }, [e("pages-showPiclist-showPiclist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-showPiclist-showPiclist",
                    isNVue: !1,
                    pagePath: "pages/showPiclist/showPiclist",
                    windowTop: 0
                }
            }, {
                path: "/pages/listPic/listPic",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-listPic-listPic", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-listPic-listPic",
                    isNVue: !1,
                    pagePath: "pages/listPic/listPic",
                    windowTop: 0
                }
            }, {
                path: "/pages/search/search",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-search-search", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-search-search",
                    isNVue: !1,
                    pagePath: "pages/search/search",
                    windowTop: 0
                }
            }, {
                path: "/pages/diypage/diypage",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "DIY页面"
                            })
                        }, [e("pages-diypage-diypage", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-diypage-diypage",
                    isNVue: !1,
                    pagePath: "pages/diypage/diypage",
                    windowTop: 0
                }
            }, {
                path: "/pages/logistics_state/logistics_state",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "物流详情"
                            })
                        }, [e("pages-logistics_state-logistics_state", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-logistics_state-logistics_state",
                    isNVue: !1,
                    pagePath: "pages/logistics_state/logistics_state",
                    windowTop: 0
                }
            }, {
                path: "/pages/logistics_information/logistics_information",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "物流信息"
                            })
                        }, [e("pages-logistics_information-logistics_information", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-logistics_information-logistics_information",
                    isNVue: !1,
                    pagePath: "pages/logistics_information/logistics_information",
                    windowTop: 0
                }
            }, {
                path: "/pages/webpage/webpage",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "外部网页"
                            })
                        }, [e("pages-webpage-webpage", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-webpage-webpage",
                    isNVue: !1,
                    pagePath: "pages/webpage/webpage",
                    windowTop: 0
                }
            }, {
                path: "/pages/shoppay/shoppay",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "店内支付"
                            })
                        }, [e("pages-shoppay-shoppay", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-shoppay-shoppay",
                    isNVue: !1,
                    pagePath: "pages/shoppay/shoppay",
                    windowTop: 0
                }
            }, {
                path: "/pages/scorelist/scorelist",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-scorelist-scorelist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-scorelist-scorelist",
                    isNVue: !1,
                    pagePath: "pages/scorelist/scorelist",
                    windowTop: 0
                }
            }, {
                path: "/pages/store/store",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-store-store", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-store-store",
                    isNVue: !1,
                    pagePath: "pages/store/store",
                    windowTop: 0
                }
            }, {
                path: "/pages/switchcity/switchcity",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                path: "pages/switchcity/switchcity",
                                style: {
                                    navigationBarTitleText: "切换城市"
                                }
                            })
                        }, [e("pages-switchcity-switchcity", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-switchcity-switchcity",
                    isNVue: !1,
                    pagePath: "pages/switchcity/switchcity",
                    windowTop: 0
                }
            }, {
                path: "/pages/equity_show/equity_show",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-equity_show-equity_show", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-equity_show-equity_show",
                    isNVue: !1,
                    pagePath: "pages/equity_show/equity_show",
                    windowTop: 0
                }
            }, {
                path: "/pages/open1/open1",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-open1-open1", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-open1-open1",
                    isNVue: !1,
                    pagePath: "pages/open1/open1",
                    windowTop: 0
                }
            }, {
                path: "/pages/register/register",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-register-register", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-register-register",
                    isNVue: !1,
                    pagePath: "pages/register/register",
                    windowTop: 0
                }
            }, {
                path: "/pages/form_list/form_list",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-form_list-form_list", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-form_list-form_list",
                    isNVue: !1,
                    pagePath: "pages/form_list/form_list",
                    windowTop: 0
                }
            }, {
                path: "/pages/formcon/formcon",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-formcon-formcon", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-formcon-formcon",
                    isNVue: !1,
                    pagePath: "pages/formcon/formcon",
                    windowTop: 0
                }
            }, {
                path: "/PagesA/catelist/catelist",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {})
                        }, [e("pages-catelist-catelist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-catelist-catelist",
                    isNVue: !1,
                    pagePath: "pages/catelist/catelist",
                    windowTop: 0
                }
            }, {
                path: "/PagesA/checkPro/checkPro",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "商品筛选"
                            })
                        }, [e("pages-checkPro-checkPro", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-checkPro-checkPro",
                    isNVue: !1,
                    pagePath: "pages/checkPro/checkPro",
                    windowTop: 0
                }
            }, {
                path: "/pagesFlashSale/showPro/showPro",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationStyle: "custom"
                            })
                        }, [e("pagesFlashSale-showPro-showPro", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFlashSale-showPro-showPro",
                    isNVue: !1,
                    pagePath: "pagesFlashSale/showPro/showPro",
                    windowTop: 0
                }
            }, {
                path: "/pagesFlashSale/order_dan/order_dan",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "秒杀下单"
                            })
                        }, [e("pagesFlashSale-order_dan-order_dan", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFlashSale-order_dan-order_dan",
                    isNVue: !1,
                    pagePath: "pagesFlashSale/order_dan/order_dan",
                    windowTop: 0
                }
            }, {
                path: "/pagesFlashSale/orderlist_dan/orderlist_dan",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "秒杀订单列表"
                            })
                        }, [e("pagesFlashSale-orderlist_dan-orderlist_dan", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFlashSale-orderlist_dan-orderlist_dan",
                    isNVue: !1,
                    pagePath: "pagesFlashSale/orderlist_dan/orderlist_dan",
                    windowTop: 0
                }
            }, {
                path: "/pagesFlashSale/orderDetail_dan/orderDetail_dan",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "秒杀订单列表"
                            })
                        }, [e("pagesFlashSale-orderDetail_dan-orderDetail_dan", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFlashSale-orderDetail_dan-orderDetail_dan",
                    isNVue: !1,
                    pagePath: "pagesFlashSale/orderDetail_dan/orderDetail_dan",
                    windowTop: 0
                }
            }, {
                path: "/pagesPt/products/products",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationStyle: "custom"
                            })
                        }, [e("pagesPt-products-products", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPt-products-products",
                    isNVue: !1,
                    pagePath: "pagesPt/products/products",
                    windowTop: 0
                }
            }, {
                path: "/pagesPt/order/order",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "下单"
                            })
                        }, [e("pagesPt-order-order", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPt-order-order",
                    isNVue: !1,
                    pagePath: "pagesPt/order/order",
                    windowTop: 0
                }
            }, {
                path: "/pagesPt/pt/pt",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "拼团"
                            })
                        }, [e("pagesPt-pt-pt", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPt-pt-pt",
                    isNVue: !1,
                    pagePath: "pagesPt/pt/pt",
                    windowTop: 0
                }
            }, {
                path: "/pagesPt/orderlist/orderlist",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "拼团"
                            })
                        }, [e("pagesPt-orderlist-orderlist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPt-orderlist-orderlist",
                    isNVue: !1,
                    pagePath: "pagesPt/orderlist/orderlist",
                    windowTop: 0
                }
            }, {
                path: "/pagesPt/index/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "拼团首页"
                            })
                        }, [e("pagesPt-index-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPt-index-index",
                    isNVue: !1,
                    pagePath: "pagesPt/index/index",
                    windowTop: 0
                }
            }, {
                path: "/pagesReserve/orderList/orderList",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "预约预定订单列表"
                            })
                        }, [e("pagesReserve-orderList-orderList", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesReserve-orderList-orderList",
                    isNVue: !1,
                    pagePath: "pagesReserve/orderList/orderList",
                    windowTop: 0
                }
            }, {
                path: "/pagesReserve/proBuy/proBuy",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "预约预定订单下单",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pagesReserve-proBuy-proBuy", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesReserve-proBuy-proBuy",
                    isNVue: !1,
                    pagePath: "pagesReserve/proBuy/proBuy",
                    windowTop: 0
                }
            }, {
                path: "/pagesReserve/proDetail/proDetail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "预约预定商品详情"
                            })
                        }, [e("pagesReserve-proDetail-proDetail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesReserve-proDetail-proDetail",
                    isNVue: !1,
                    pagePath: "pagesReserve/proDetail/proDetail",
                    windowTop: 0
                }
            }, {
                path: "/pagesReserve/appointPage/appointPage",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesReserve-appointPage-appointPage", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesReserve-appointPage-appointPage",
                    isNVue: !1,
                    pagePath: "pagesReserve/appointPage/appointPage",
                    windowTop: 0
                }
            }, {
                path: "/pagesReserve/orderDetail/orderDetail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesReserve-orderDetail-orderDetail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesReserve-orderDetail-orderDetail",
                    isNVue: !1,
                    pagePath: "pagesReserve/orderDetail/orderDetail",
                    windowTop: 0
                }
            }, {
                path: "/pagesSign/index/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "积分签到页"
                            })
                        }, [e("pagesSign-index-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesSign-index-index",
                    isNVue: !1,
                    pagePath: "pagesSign/index/index",
                    windowTop: 0
                }
            }, {
                path: "/pagesSign/new/new",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "最新签到"
                            })
                        }, [e("pagesSign-new-new", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesSign-new-new",
                    isNVue: !1,
                    pagePath: "pagesSign/new/new",
                    windowTop: 0
                }
            }, {
                path: "/pagesSign/ranking/ranking",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "签到排行"
                            })
                        }, [e("pagesSign-ranking-ranking", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesSign-ranking-ranking",
                    isNVue: !1,
                    pagePath: "pagesSign/ranking/ranking",
                    windowTop: 0
                }
            }, {
                path: "/pagesExchange/list/list",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "积分商城"
                            })
                        }, [e("pagesExchange-list-list", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesExchange-list-list",
                    isNVue: !1,
                    pagePath: "pagesExchange/list/list",
                    windowTop: 0
                }
            }, {
                path: "/pagesExchange/show/show",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "积分商品详情"
                            })
                        }, [e("pagesExchange-show-show", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesExchange-show-show",
                    isNVue: !1,
                    pagePath: "pagesExchange/show/show",
                    windowTop: 0
                }
            }, {
                path: "/pagesExchange/order/order",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "积分订单列表页"
                            })
                        }, [e("pagesExchange-order-order", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesExchange-order-order",
                    isNVue: !1,
                    pagePath: "pagesExchange/order/order",
                    windowTop: 0
                }
            }, {
                path: "/pagesCards/card_info/card_info",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "名片页"
                            })
                        }, [e("pagesCards-card_info-card_info", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesCards-card_info-card_info",
                    isNVue: !1,
                    pagePath: "pagesCards/card_info/card_info",
                    windowTop: 0
                }
            }, {
                path: "/pagesCards/card_list/card_list",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "名片列表页",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pagesCards-card_list-card_list", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesCards-card_list-card_list",
                    isNVue: !1,
                    pagePath: "pagesCards/card_list/card_list",
                    windowTop: 0
                }
            }, {
                path: "/pagesShake/index/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "摇一摇抽奖"
                            })
                        }, [e("pagesShake-index-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesShake-index-index",
                    isNVue: !1,
                    pagePath: "pagesShake/index/index",
                    windowTop: 0
                }
            }, {
                path: "/pagesShake/integral_collect/integral_collect",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "获取积分"
                            })
                        }, [e("pagesShake-integral_collect-integral_collect", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesShake-integral_collect-integral_collect",
                    isNVue: !1,
                    pagePath: "pagesShake/integral_collect/integral_collect",
                    windowTop: 0
                }
            }, {
                path: "/pagesShake/prize/prize",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesShake-prize-prize", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesShake-prize-prize",
                    isNVue: !1,
                    pagePath: "pagesShake/prize/prize",
                    windowTop: 0
                }
            }, {
                path: "/pagesShake/win_prize/win_prize",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesShake-win_prize-win_prize", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesShake-win_prize-win_prize",
                    isNVue: !1,
                    pagePath: "pagesShake/win_prize/win_prize",
                    windowTop: 0
                }
            }, {
                path: "/pagesFood/food/food",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesFood-food-food", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFood-food-food",
                    isNVue: !1,
                    pagePath: "pagesFood/food/food",
                    windowTop: 0
                }
            }, {
                path: "/pagesFood/food_my/food_my",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "我的餐饮订单"
                            })
                        }, [e("pagesFood-food_my-food_my", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFood-food_my-food_my",
                    isNVue: !1,
                    pagePath: "pagesFood/food_my/food_my",
                    windowTop: 0
                }
            }, {
                path: "/pagesFood/food_order/food_order",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pagesFood-food_order-food_order", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFood-food_order-food_order",
                    isNVue: !1,
                    pagePath: "pagesFood/food_order/food_order",
                    windowTop: 0
                }
            }, {
                path: "/pagesFood/food_detail/food_detail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesFood-food_detail-food_detail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFood-food_detail-food_detail",
                    isNVue: !1,
                    pagePath: "pagesFood/food_detail/food_detail",
                    windowTop: 0
                }
            }, {
                path: "/pagesBargain/bargain/bargain",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesBargain-bargain-bargain", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesBargain-bargain-bargain",
                    isNVue: !1,
                    pagePath: "pagesBargain/bargain/bargain",
                    windowTop: 0
                }
            }, {
                path: "/pagesBargain/bargain_activity/bargain_activity",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesBargain-bargain_activity-bargain_activity", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesBargain-bargain_activity-bargain_activity",
                    isNVue: !1,
                    pagePath: "pagesBargain/bargain_activity/bargain_activity",
                    windowTop: 0
                }
            }, {
                path: "/pagesBargain/bargain_order/bargain_order",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesBargain-bargain_order-bargain_order", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesBargain-bargain_order-bargain_order",
                    isNVue: !1,
                    pagePath: "pagesBargain/bargain_order/bargain_order",
                    windowTop: 0
                }
            }, {
                path: "/pagesBargain/bargain_pro/bargain_pro",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationStyle: "custom"
                            })
                        }, [e("pagesBargain-bargain_pro-bargain_pro", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesBargain-bargain_pro-bargain_pro",
                    isNVue: !1,
                    pagePath: "pagesBargain/bargain_pro/bargain_pro",
                    windowTop: 0
                }
            }, {
                path: "/pagesBargain/my_bargain/my_bargain",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesBargain-my_bargain-my_bargain", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesBargain-my_bargain-my_bargain",
                    isNVue: !1,
                    pagePath: "pagesBargain/my_bargain/my_bargain",
                    windowTop: 0
                }
            }, {
                path: "/pagesBargain/orderDetail/orderDetail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesBargain-orderDetail-orderDetail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesBargain-orderDetail-orderDetail",
                    isNVue: !1,
                    pagePath: "pagesBargain/orderDetail/orderDetail",
                    windowTop: 0
                }
            }, {
                path: "/pagesBargain/orderlist/orderlist",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesBargain-orderlist-orderlist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesBargain-orderlist-orderlist",
                    isNVue: !1,
                    pagePath: "pagesBargain/orderlist/orderlist",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginForum/collect/collect",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesPluginForum-collect-collect", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginForum-collect-collect",
                    isNVue: !1,
                    pagePath: "pagesPluginForum/collect/collect",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginForum/forum/forum",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesPluginForum-forum-forum", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginForum-forum-forum",
                    isNVue: !1,
                    pagePath: "pagesPluginForum/forum/forum",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginForum/forum_page/forum_page",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesPluginForum-forum_page-forum_page", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginForum-forum_page-forum_page",
                    isNVue: !1,
                    pagePath: "pagesPluginForum/forum_page/forum_page",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginForum/index/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesPluginForum-index-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginForum-index-index",
                    isNVue: !1,
                    pagePath: "pagesPluginForum/index/index",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginForum/release/release",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pagesPluginForum-release-release", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginForum-release-release",
                    isNVue: !1,
                    pagePath: "pagesPluginForum/release/release",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginForum/set_top/set_top",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesPluginForum-set_top-set_top", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginForum-set_top-set_top",
                    isNVue: !1,
                    pagePath: "pagesPluginForum/set_top/set_top",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/goods_buy/goods_buy",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "多商户订单提交",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pagesPluginShop-goods_buy-goods_buy", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-goods_buy-goods_buy",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/goods_buy/goods_buy",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/goods_detail/goods_detail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "多商户商品"
                            })
                        }, [e("pagesPluginShop-goods_detail-goods_detail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-goods_detail-goods_detail",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/goods_detail/goods_detail",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/goods_list/goods_list",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesPluginShop-goods_list-goods_list", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-goods_list-goods_list",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/goods_list/goods_list",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/list/list",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesPluginShop-list-list", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-list-list",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/list/list",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/manage_gotixian/manage_gotixian",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "提现",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pagesPluginShop-manage_gotixian-manage_gotixian", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-manage_gotixian-manage_gotixian",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/manage_gotixian/manage_gotixian",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/manage_index/manage_index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "商铺管理"
                            })
                        }, [e("pagesPluginShop-manage_index-manage_index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-manage_index-manage_index",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/manage_index/manage_index",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/manage_order/manage_order",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesPluginShop-manage_order-manage_order", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-manage_order-manage_order",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/manage_order/manage_order",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/manage_pro/manage_pro",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "添加商品"
                            })
                        }, [e("pagesPluginShop-manage_pro-manage_pro", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-manage_pro-manage_pro",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/manage_pro/manage_pro",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/manage_prolist/manage_prolist",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "商品管理"
                            })
                        }, [e("pagesPluginShop-manage_prolist-manage_prolist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-manage_prolist-manage_prolist",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/manage_prolist/manage_prolist",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/manage_shop/manage_shop",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "商铺管理",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pagesPluginShop-manage_shop-manage_shop", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-manage_shop-manage_shop",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/manage_shop/manage_shop",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/manage_szjl/manage_szjl",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "提现记录"
                            })
                        }, [e("pagesPluginShop-manage_szjl-manage_szjl", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-manage_szjl-manage_szjl",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/manage_szjl/manage_szjl",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/manage_tixian/manage_tixian",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "提现管理"
                            })
                        }, [e("pagesPluginShop-manage_tixian-manage_tixian", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-manage_tixian-manage_tixian",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/manage_tixian/manage_tixian",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/manage_txjl/manage_txjl",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "提现记录"
                            })
                        }, [e("pagesPluginShop-manage_txjl-manage_txjl", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-manage_txjl-manage_txjl",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/manage_txjl/manage_txjl",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/register/register",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "商户入驻"
                            })
                        }, [e("pagesPluginShop-register-register", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-register-register",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/register/register",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginShop/shop/shop",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "多商户店铺"
                            })
                        }, [e("pagesPluginShop-shop-shop", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginShop-shop-shop",
                    isNVue: !1,
                    pagePath: "pagesPluginShop/shop/shop",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginSupply/collect/collect",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "我的"
                            })
                        }, [e("pagesPluginSupply-collect-collect", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginSupply-collect-collect",
                    isNVue: !1,
                    pagePath: "pagesPluginSupply/collect/collect",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginSupply/page/page",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "信息详情"
                            })
                        }, [e("pagesPluginSupply-page-page", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginSupply-page-page",
                    isNVue: !1,
                    pagePath: "pagesPluginSupply/page/page",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginSupply/release/release",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "供求发布",
                                enablePullDownRefresh: !1
                            })
                        }, [e("pagesPluginSupply-release-release", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginSupply-release-release",
                    isNVue: !1,
                    pagePath: "pagesPluginSupply/release/release",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginSupply/set_top/set_top",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "信息置顶"
                            })
                        }, [e("pagesPluginSupply-set_top-set_top", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginSupply-set_top-set_top",
                    isNVue: !1,
                    pagePath: "pagesPluginSupply/set_top/set_top",
                    windowTop: 0
                }
            }, {
                path: "/pagesPluginSupply/supply/supply",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "供求列表"
                            })
                        }, [e("pagesPluginSupply-supply-supply", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesPluginSupply-supply-supply",
                    isNVue: !1,
                    pagePath: "pagesPluginSupply/supply/supply",
                    windowTop: 0
                }
            }, {
                path: "/pagesExternal/jdGoods/jdGoods",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "京东好券"
                            })
                        }, [e("pagesExternal-jdGoods-jdGoods", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesExternal-jdGoods-jdGoods",
                    isNVue: !1,
                    pagePath: "pagesExternal/jdGoods/jdGoods",
                    windowTop: 0
                }
            }, {
                path: "/pagesExternal/pddGoods/pddGoods",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "多多精选"
                            })
                        }, [e("pagesExternal-pddGoods-pddGoods", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesExternal-pddGoods-pddGoods",
                    isNVue: !1,
                    pagePath: "pagesExternal/pddGoods/pddGoods",
                    windowTop: 0
                }
            }, {
                path: "/pagesActive/active_info/active_info",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "活动详情"
                            })
                        }, [e("pagesActive-active_info-active_info", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesActive-active_info-active_info",
                    isNVue: !1,
                    pagePath: "pagesActive/active_info/active_info",
                    windowTop: 0
                }
            }, {
                path: "/pagesActive/apply/apply",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesActive-apply-apply", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesActive-apply-apply",
                    isNVue: !1,
                    pagePath: "pagesActive/apply/apply",
                    windowTop: 0
                }
            }, {
                path: "/pagesActive/apply_collect/apply_collect",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "活动报名"
                            })
                        }, [e("pagesActive-apply_collect-apply_collect", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesActive-apply_collect-apply_collect",
                    isNVue: !1,
                    pagePath: "pagesActive/apply_collect/apply_collect",
                    windowTop: 0
                }
            }, {
                path: "/pagesActive/apply_list/apply_list",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "申请列表"
                            })
                        }, [e("pagesActive-apply_list-apply_list", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesActive-apply_list-apply_list",
                    isNVue: !1,
                    pagePath: "pagesActive/apply_list/apply_list",
                    windowTop: 0
                }
            }, {
                path: "/pagesActive/index/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "活动列表"
                            })
                        }, [e("pagesActive-index-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesActive-index-index",
                    isNVue: !1,
                    pagePath: "pagesActive/index/index",
                    windowTop: 0
                }
            }, {
                path: "/pagesFenxiao/fenxiao_account/fenxiao_account",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "我的账户"
                            })
                        }, [e("pagesFenxiao-fenxiao_account-fenxiao_account", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFenxiao-fenxiao_account-fenxiao_account",
                    isNVue: !1,
                    pagePath: "pagesFenxiao/fenxiao_account/fenxiao_account",
                    windowTop: 0
                }
            }, {
                path: "/pagesFenxiao/fenxiao_apply/fenxiao_apply",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesFenxiao-fenxiao_apply-fenxiao_apply", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFenxiao-fenxiao_apply-fenxiao_apply",
                    isNVue: !1,
                    pagePath: "pagesFenxiao/fenxiao_apply/fenxiao_apply",
                    windowTop: 0
                }
            }, {
                path: "/pagesFenxiao/fenxiao_center/fenxiao_center",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "分销中心"
                            })
                        }, [e("pagesFenxiao-fenxiao_center-fenxiao_center", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFenxiao-fenxiao_center-fenxiao_center",
                    isNVue: !1,
                    pagePath: "pagesFenxiao/fenxiao_center/fenxiao_center",
                    windowTop: 0
                }
            }, {
                path: "/pagesFenxiao/fenxiao_order/fenxiao_order",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "分销订单"
                            })
                        }, [e("pagesFenxiao-fenxiao_order-fenxiao_order", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFenxiao-fenxiao_order-fenxiao_order",
                    isNVue: !1,
                    pagePath: "pagesFenxiao/fenxiao_order/fenxiao_order",
                    windowTop: 0
                }
            }, {
                path: "/pagesFenxiao/fenxiao_s/fenxiao_s",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: ""
                            })
                        }, [e("pagesFenxiao-fenxiao_s-fenxiao_s", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFenxiao-fenxiao_s-fenxiao_s",
                    isNVue: !1,
                    pagePath: "pagesFenxiao/fenxiao_s/fenxiao_s",
                    windowTop: 0
                }
            }, {
                path: "/pagesFenxiao/fenxiao_team/fenxiao_team",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "我的团队"
                            })
                        }, [e("pagesFenxiao-fenxiao_team-fenxiao_team", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFenxiao-fenxiao_team-fenxiao_team",
                    isNVue: !1,
                    pagePath: "pagesFenxiao/fenxiao_team/fenxiao_team",
                    windowTop: 0
                }
            }, {
                path: "/pagesFenxiao/fenxiao_tixian/fenxiao_tixian",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "我要提现"
                            })
                        }, [e("pagesFenxiao-fenxiao_tixian-fenxiao_tixian", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFenxiao-fenxiao_tixian-fenxiao_tixian",
                    isNVue: !1,
                    pagePath: "pagesFenxiao/fenxiao_tixian/fenxiao_tixian",
                    windowTop: 0
                }
            }, {
                path: "/pagesFenxiao/fenxiao_tixian_do/fenxiao_tixian_do",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "提现记录"
                            })
                        }, [e("pagesFenxiao-fenxiao_tixian_do-fenxiao_tixian_do", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesFenxiao-fenxiao_tixian_do-fenxiao_tixian_do",
                    isNVue: !1,
                    pagePath: "pagesFenxiao/fenxiao_tixian_do/fenxiao_tixian_do",
                    windowTop: 0
                }
            }, {
                path: "/pagesOther/evaluate/evaluate",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "评价"
                            })
                        }, [e("pagesOther-evaluate-evaluate", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesOther-evaluate-evaluate",
                    isNVue: !1,
                    pagePath: "pagesOther/evaluate/evaluate",
                    windowTop: 0
                }
            }, {
                path: "/pagesOther/evaluate_list/evaluate_list",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "评价列表"
                            })
                        }, [e("pagesOther-evaluate_list-evaluate_list", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesOther-evaluate_list-evaluate_list",
                    isNVue: !1,
                    pagePath: "pagesOther/evaluate_list/evaluate_list",
                    windowTop: 0
                }
            }, {
                path: "/pagesOther/evaluate_detail/evaluate_detail",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "评价详情"
                            })
                        }, [e("pagesOther-evaluate_detail-evaluate_detail", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesOther-evaluate_detail-evaluate_detail",
                    isNVue: !1,
                    pagePath: "pagesOther/evaluate_detail/evaluate_detail",
                    windowTop: 0
                }
            }, {
                path: "/pagesOther/evaluate_pro/evaluate_pro",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: (0, i.default)({}, __uniConfig.globalStyle, {
                                navigationBarTitleText: "评价"
                            })
                        }, [e("pagesOther-evaluate_pro-evaluate_pro", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pagesOther-evaluate_pro-evaluate_pro",
                    isNVue: !1,
                    pagePath: "pagesOther/evaluate_pro/evaluate_pro",
                    windowTop: 0
                }
            }, {
                path: "/preview-image",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-preview-image", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "preview-image",
                    pagePath: "/preview-image"
                }
            }, {
                path: "/choose-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-choose-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "choose-location",
                    pagePath: "/choose-location"
                }
            }, {
                path: "/open-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-open-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "open-location",
                    pagePath: "/open-location"
                }
            }]
        }).call(this, o("c8ba"))
    },
    "274e": function(e, n, o) {
        "use strict";
        var i = function() {
                var e = this,
                    n = e.$createElement,
                    o = e._self._c || n;
                return 1 == e.baseinfo.tabbar_t ? o("v-uni-view", [o("v-uni-view", {
                    staticClass: "footer_block",
                    style: {
                        height: 1 == e.isIphoneX ? "168rpx" : "108rpx"
                    }
                }), o("v-uni-view", {
                    class: ["footer", "tabnum" + e.baseinfo.tabnum],
                    style: {
                        "border-top": "1px solid #" + e.baseinfo.color_bar,
                        background: "#" + e.baseinfo.tabbar_bg,
                        color: "#" + e.baseinfo.tabbar_tc,
                        height: 1 == e.isIphoneX ? "150rpx" : "110rpx"
                    }
                }, [e._l(e.baseinfo.tabbar, function(n, i) {
                    return [0 != n && "server" == n.tabbar_type ? o("v-uni-view", {
                        key: i + "_0",
                        staticClass: "footOne"
                    }, [o("v-uni-button", {
                        staticClass: "button_mar",
                        on: {
                            click: function(n) {
                                arguments[0] = n = e.$handleEvent(n), e.makephonecall.apply(void 0, arguments)
                            }
                        }
                    }, [1 == n.tabbar ? o("v-uni-image", {
                        attrs: {
                            src: n.tabimginput_1
                        }
                    }) : e._e(), 2 == n.tabbar ? o("v-uni-icon", {
                        class: ["iconfont", "iconfont2", n.tabimginput_1],
                        style: {
                            color: "#" + e.baseinfo.tabbar_tc
                        }
                    }) : e._e(), o("v-uni-text", {
                        staticClass: "button_mar",
                        style: {
                            color: "#" + e.baseinfo.tabbar_tc
                        }
                    }, [e._v(e._s(n.tabbar_name))])], 1)], 1) : e._e(), 0 == n || "Article" != n.tabbar_type && "tel" != n.tabbar_type && "map" != n.tabbar_type && "web" != n.tabbar_type ? e._e() : o("v-uni-view", {
                        key: i + "_1",
                        staticClass: "footOne",
                        attrs: {
                            "data-link": n.tabbar_url,
                            "data-linktype": n.tabbar_linktype
                        },
                        on: {
                            click: function(n) {
                                arguments[0] = n = e.$handleEvent(n), e.redirectto.apply(void 0, arguments)
                            }
                        }
                    }, [e.page_signs == n.tabbar_url ? [1 == n.tabbar ? o("v-uni-image", {
                        attrs: {
                            src: n.tabimginput_2
                        }
                    }) : e._e(), 2 == n.tabbar ? o("v-uni-icon", {
                        class: ["iconfont", "iconfont2", n.tabimginput_1],
                        style: {
                            color: "#" + e.baseinfo.tabbar_tca
                        }
                    }) : e._e(), o("v-uni-text", {
                        style: {
                            color: "#" + e.baseinfo.tabbar_tca
                        }
                    }, [e._v(e._s(n.tabbar_name))])] : [1 == n.tabbar ? o("v-uni-image", {
                        attrs: {
                            src: n.tabimginput_1
                        }
                    }) : e._e(), 2 == n.tabbar ? o("v-uni-icon", {
                        class: ["iconfont", "iconfont2", n.tabimginput_1],
                        style: {
                            color: "#" + e.baseinfo.tabbar_tc
                        }
                    }) : e._e(), o("v-uni-text", {}, [e._v(e._s(n.tabbar_name))])]], 2)]
                })], 2)], 1) : e._e()
            },
            t = [];
        o.d(n, "a", function() {
            return i
        }), o.d(n, "b", function() {
            return t
        })
    },
    "2f9f": function(e, n, o) {
        "use strict";
        var i = o("288e");
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = i(o("e143")),
            a = i(o("2f62"));
        t.default.use(a.default);
        var r = new a.default.Store({
                state: {
                    hasLogin: !1
                },
                mutations: {
                    login: function(e) {
                        e.hasLogin = !0
                    }
                }
            }),
            s = r;
        n.default = s
    },
    "2fea": function(e, n, o) {
        var i = o("8159");
        "string" === typeof i && (i = [
            [e.i, i, ""]
        ]), i.locals && (e.exports = i.locals);
        var t = o("4f06").default;
        t("51e54229", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    3031: function(e, n, o) {
        "use strict";
        var i = o("4284"),
            t = o.n(i);
        t.a
    },
    3061: function(e, n, o) {
        "use strict";
        o.r(n);
        var i = o("5d98"),
            t = o.n(i);
        for (var a in i) "default" !== a && function(e) {
            o.d(n, e, function() {
                return i[e]
            })
        }(a);
        n["default"] = t.a
    },
    "310c": function(e, n, o) {
        "use strict";
        var i = function() {
                var e = this,
                    n = e.$createElement,
                    o = e._self._c || n;
                return o("App", {
                    attrs: {
                        keepAliveInclude: e.keepAliveInclude
                    }
                })
            },
            t = [];
        o.d(n, "a", function() {
            return i
        }), o.d(n, "b", function() {
            return t
        })
    },
    "370e": function(e, n, o) {
        "use strict";
        var i = function() {
                var e = this,
                    n = e.$createElement,
                    o = e._self._c || n;
                return e.needAuth ? o("v-uni-view", [o("v-uni-view", {
                    staticClass: "mask",
                    staticStyle: {
                        "z-index": "1000"
                    }
                }), o("v-uni-view", {
                    staticClass: "maskCon"
                }, [o("v-uni-view", {
                    staticClass: "loginBox"
                }, [o("v-uni-view", {
                    staticClass: "login_box"
                }, [o("v-uni-view", {
                    staticClass: "login_img"
                }, [o("v-uni-image", {
                    attrs: {
                        src: e.$imgurl + "loginimg.png",
                        mode: "widthFix"
                    }
                })], 1), o("v-uni-view", {
                    staticClass: "login_tips login_tips1"
                }, [e._v("您还未登录")]), o("v-uni-view", {
                    staticClass: "login_tips login_tips2"
                }, [e._v("（请先登录再进行操作）")]), o("v-uni-view", {
                    staticClass: "login_choose"
                }, [o("v-uni-view", {
                    staticClass: "login",
                    on: {
                        click: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.login_close.apply(void 0, arguments)
                        }
                    }
                }, [e._v("暂不登录")]), o("v-uni-button", {
                    staticClass: "login",
                    staticStyle: {
                        color: "#615aae"
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.h5DoLogin.apply(void 0, arguments)
                        }
                    }
                }, [e._v("立即登录")])], 1)], 1)], 1)], 1)], 1) : e._e()
            },
            t = [];
        o.d(n, "a", function() {
            return i
        }), o.d(n, "b", function() {
            return t
        })
    },
    "3a34": function(e, n, o) {
        "use strict";
        var domain = document.domain;
        console.log("当前域名：" + domain)
        var i = {
            url: "https://" + domain + "/api/Wxapps/",
            uniacid: "216",
            platform: "wn"
        };
        e.exports = i
    },
    "3b1c": function(e, n, o) {
        var i = o("cb62");
        "string" === typeof i && (i = [
            [e.i, i, ""]
        ]), i.locals && (e.exports = i.locals);
        var t = o("4f06").default;
        t("1bed0dd9", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    4284: function(e, n, o) {
        var i = o("8489");
        "string" === typeof i && (i = [
            [e.i, i, ""]
        ]), i.locals && (e.exports = i.locals);
        var t = o("4f06").default;
        t("3b30447b", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "5d98": function(e, n, o) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        o("7131");
        var i = {
            props: ["needAuth"],
            data: function() {
                return {
                    $imgurl: this.$imgurl
                }
            },
            created: function() {
                console.log("wx_auth")
            },
            methods: {
                login_close: function() {
                    this.needAuth = !1, this.$emit("cell")
                },
                aliDoLogin: function() {
                    console.log("ali_login");
                    var e = this.$uniacid,
                        n = this.$baseurl,
                        o = this;
                    uni.login({
                        provider: "alipay",
                        scopes: "auth_user",
                        success: function(i) {
                            i.authCode && uni.request({
                                url: n + "dopagealipaylogin",
                                data: {
                                    authCode: i.authCode,
                                    uniacid: e
                                },
                                success: function(i) {
                                    console.log("支付宝小程序初次登陆"), uni.setStorageSync("source", 2), uni.setStorageSync("suid", i.data.suid);
                                    var t = i.data;
                                    i.data.nick_name && i.data.avatar ? (uni.setStorageSync("ali_uid", t.id), uni.setStorageSync("ali_user_id", t.user_id), uni.setStorageSync("ali_userinfo", t), t.suid ? (uni.setStorageSync("suid", t.suid), o.$emit("cell")) : o.$emit("closeAuth")) : uni.getUserInfo({
                                        success: function(i) {
                                            t.nick_name = i.nickName, t.avatar = i.avatar, uni.request({
                                                url: n + "dopagealiUpdateNickname",
                                                data: {
                                                    avatar: i.avatar,
                                                    nick_name: i.nickName,
                                                    uniacid: e,
                                                    id: t.id
                                                },
                                                success: function(e) {
                                                    uni.setStorageSync("ali_uid", t.id), uni.setStorageSync("ali_user_id", t.user_id), uni.setStorageSync("ali_userinfo", t), o.$emit("closeAuth")
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        },
                        fail: function(e) {
                            console.log(e), console.log("拒绝授权"), o.$emit("cell")
                        }
                    })
                },
                bDDoLogin: function() {
                    var e = this.$uniacid,
                        n = this.$baseurl,
                        o = this;
                    uni.login({
                        provider: "baidu",
                        success: function(i) {
                            uni.request({
                                url: n + "doPageBdAppbase",
                                data: {
                                    code: i.code,
                                    uniacid: e
                                },
                                success: function(i) {
                                    if (console.log("百度小程序初次登陆"), console.log(i), 2 == i.data.data.res) uni.showModal({
                                        title: "提醒",
                                        content: "获取用户信息失败，请检查appid和appsecret是否正确！",
                                        showCancel: !1
                                    });
                                    else {
                                        uni.setStorageSync("source", 4);
                                        var t = i.data.data;
                                        uni.setStorageSync("openid", t.openid), console.log(t), t["nickname"] && t["avatar"] ? (uni.setStorageSync("baidu_userinfo", t), t.suid ? (uni.setStorageSync("suid", t.suid), o.$emit("cell")) : o.$emit("closeAuth")) : swan.authorize({
                                            scope: "scope.userInfo",
                                            success: function(i) {
                                                swan.getUserInfo({
                                                    success: function(i) {
                                                        console.log(i), i.is_anonymous || swan.request({
                                                            url: n + "dopageBaiDuUpdate",
                                                            data: {
                                                                uniacid: e,
                                                                openid: t.openid,
                                                                avatar: i.userInfo.avatarUrl,
                                                                nickName: i.userInfo.nickName,
                                                                gender: i.userInfo.gender
                                                            },
                                                            success: function(e) {
                                                                t["avatar"] = i.userInfo.avatarUrl, t["nickname"] = i.userInfo.nickName, e.data && uni.setStorageSync("baidu_userinfo", t), o.$emit("closeAuth")
                                                            }
                                                        })
                                                    }
                                                })
                                            },
                                            fail: function(e) {
                                                swan.showModal({
                                                    title: "提示",
                                                    content: "必须授权后才能操作,是否重新授权？",
                                                    showCancel: !0,
                                                    success: function(e) {
                                                        e.confirm ? swan.openSetting({
                                                            success: function(e) {
                                                                o.$emit("closeAuth")
                                                            }
                                                        }) : o.$emit("cell")
                                                    }
                                                })
                                            }
                                        })
                                    }
                                }
                            })
                        }
                    })
                },
                h5DoLogin: function() {
                    this.needAuth = !1, this.$emit("closeAuth")
                },
                getTUserInfo: function() {
                    var e = this;
                    uni.getProvider({
                        service: "oauth",
                        success: function(e) {
                            console.log(e.provider[0]), uni.setStorageSync("provider", e.provider[0])
                        }
                    }), uni.login({
                        provider: "toutiao",
                        success: function(n) {
                            n.code && (console.log(n), uni.request({
                                url: e.$baseurl + "dopagetoutiaologin",
                                data: {
                                    code: n.code,
                                    anonymous_code: n.anonymousCode,
                                    uniacid: e.$uniacid
                                },
                                success: function(n) {
                                    if (console.log(n), 2 == n.data.data.res) return uni.showModal({
                                        title: "提示",
                                        content: "登录失败，请检查小程序设置是否正确",
                                        showCancel: !1
                                    }), !1;
                                    console.log("头条小程序初次登陆"), uni.setStorageSync("source", 5), uni.setStorageSync("suid", n.data.data.suid);
                                    var o = n.data.data;
                                    n.data.data.nickname && n.data.data.avatar ? (uni.setStorageSync("toutiao_uid", o.id), uni.setStorageSync("toutiao_openid", o.openid), uni.setStorageSync("toutiao_userinfo", o), o.suid ? (uni.setStorageSync("suid", o.suid), e.$emit("cell")) : e.$emit("closeAuth")) : uni.getUserInfo({
                                        success: function(n) {
                                            o.nickname = n.userInfo.nickName, o.avatar = n.userInfo.avatarUrl, uni.request({
                                                url: e.$baseurl + "dopagetoutiaoUpdateNickname",
                                                data: {
                                                    avatar: n.userInfo.avatarUrl,
                                                    nickname: n.userInfo.nickName,
                                                    uniacid: e.$uniacid,
                                                    id: o.id
                                                },
                                                success: function(n) {
                                                    uni.setStorageSync("toutiao_uid", o.id), uni.setStorageSync("toutiao_openid", o.openid), uni.setStorageSync("toutiao_userinfo", o), e.$emit("closeAuth")
                                                }
                                            })
                                        },
                                        fail: function(n) {
                                            uni.openSetting({
                                                success: function(n) {
                                                    console.log(n), 1 == n.authSetting.scope.userInfo ? (console.log(n), e.$emit("closeAuth")) : console.log(n)
                                                }
                                            })
                                        }
                                    })
                                }
                            }))
                        },
                        fail: function(e) {
                            console.log("拒绝授权"), "function" == typeof cb && cb()
                        }
                    })
                },
                getUserInfo: function() {}
            }
        };
        n.default = i
    },
    "5e71": function(e, n, o) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = {
            props: ["baseinfo"],
            methods: {
                makePhoneCallB: function(e) {
                    var n = this.baseinfo.tel_b;
                    n && uni.makePhoneCall({
                        phoneNumber: n
                    })
                }
            }
        };
        n.default = i
    },
    "65cf": function(e, n, o) {
        "use strict";
        o.r(n);
        var i = o("9961"),
            t = o.n(i);
        for (var a in i) "default" !== a && function(e) {
            o.d(n, e, function() {
                return i[e]
            })
        }(a);
        n["default"] = t.a
    },
    "672a": function(e, n, o) {
        "use strict";
        o.r(n);
        var i = o("04bb"),
            t = o.n(i);
        for (var a in i) "default" !== a && function(e) {
            o.d(n, e, function() {
                return i[e]
            })
        }(a);
        n["default"] = t.a
    },
    "69eb": function(e, n, o) {
        n = e.exports = o("2350")(!1), n.push([e.i, '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.footer_block[data-v-e83be5ca]{height:%?108?%}.footer_block_iponex[data-v-e83be5ca]{height:%?140?%}.footer[data-v-e83be5ca]{position:fixed;left:0;bottom:0;box-sizing:border-box;z-index:98;padding:%?8?% 0;font-size:%?24?%;height:%?110?%;background:#fff;overflow:hidden}.footer_iphonex[data-v-e83be5ca]{height:%?140?%}.footer.tabnum1 .footOne[data-v-e83be5ca]{width:100%}.footer.tabnum2 .footOne[data-v-e83be5ca]{width:50%}.footer.tabnum3 .footOne[data-v-e83be5ca]{width:33.3334%}.footer.tabnum4 .footOne[data-v-e83be5ca]{width:25%}.footer.tabnum5 .footOne[data-v-e83be5ca]{width:20%}.footer .footOne[data-v-e83be5ca]{text-align:center;float:left}.footer .footOne uni-image[data-v-e83be5ca]{width:%?56?%;height:%?56?%;display:block;margin:0 auto}.footer .footOne uni-text[data-v-e83be5ca]{display:block;font-size:%?24?%;height:%?32?%;line-height:%?32?%}.footer .footOne uni-button[data-v-e83be5ca]{position:relative;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:border-box;text-align:center;text-decoration:none;line-height:%?40?%;border-radius:5px;-webkit-tap-highlight-color:transparent;overflow:hidden;background-color:initial;border:0}.footer .footOne uni-button[data-v-e83be5ca]:after{content:" ";width:0;height:0%;position:absolute;top:0;left:0;border:none;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:10px}.iconfont2[data-v-e83be5ca]{font-size:%?40?%;height:%?40?%}\n\t\n\t.footer .footOne uni-button[data-v-e83be5ca]{line-height:%?60?%}\n\t', ""])
    },
    "6e75": function(e, n, o) {
        "use strict";
        var i = function() {
                var e = this,
                    n = e.$createElement,
                    o = e._self._c || n;
                return e.isshow ? o("v-uni-view", {
                    staticClass: "zhezhao"
                }, [o("v-uni-view", {
                    staticClass: "t_w"
                }, [o("v-uni-view", {
                    staticClass: "tanchu_view"
                }, [o("v-uni-text", [e._v("注册/登陆")]), o("v-uni-text", {
                    staticClass: "tanchu_close",
                    on: {
                        click: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.close.apply(void 0, arguments)
                        }
                    }
                }, [e._v("x")]), 1 == e.baseinfo.sms ? [o("v-uni-view", {
                    staticStyle: {
                        margin: "34rpx auto 20rpx"
                    }
                }, [o("v-uni-input", {
                    staticStyle: {
                        width: "100%",
                        height: "82rpx",
                        "text-align": "left"
                    },
                    attrs: {
                        type: "number",
                        placeholder: "手机号码",
                        "placeholder-style": "color:#aab2bd;"
                    },
                    model: {
                        value: e.phone,
                        callback: function(n) {
                            e.phone = e._n(n)
                        },
                        expression: "phone"
                    }
                })], 1), o("v-uni-view", {
                    staticClass: "yanzheng"
                }, [o("v-uni-input", {
                    staticStyle: {
                        width: "60%",
                        height: "82rpx",
                        "text-align": "left"
                    },
                    attrs: {
                        type: "number",
                        placeholder: "验证码",
                        "placeholder-style": "color:#aab2bd;"
                    },
                    model: {
                        value: e.code,
                        callback: function(n) {
                            e.code = e._n(n)
                        },
                        expression: "code"
                    }
                }), o("v-uni-button", {
                    class: e.btn_flag ? "color_no" : "color_yes",
                    staticStyle: {
                        width: "40%",
                        "text-align": "center",
                        "margin-top": "0rpx",
                        color: "#499dee",
                        background: "#f6f6f6"
                    },
                    attrs: {
                        disabled: e.btn_flag
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.sendCode.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(e.str))])], 1), o("v-uni-button", {
                    staticClass: "btn_submit",
                    style: "background:" + e.baseinfo.base_color2 + "; color:" + e.baseinfo.tabbar_bg2,
                    on: {
                        click: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.confirmBind.apply(void 0, arguments)
                        }
                    }
                }, [e._v("确定提交")])] : e._e(), 2 == e.baseinfo.sms ? [o("v-uni-view", {
                    staticStyle: {
                        margin: "34rpx auto 20rpx"
                    }
                }, [o("v-uni-input", {
                    staticStyle: {
                        width: "100%",
                        height: "82rpx",
                        "text-align": "left"
                    },
                    attrs: {
                        type: "number",
                        placeholder: "手机号码",
                        "placeholder-style": "color:#aab2bd;"
                    },
                    model: {
                        value: e.phone,
                        callback: function(n) {
                            e.phone = e._n(n)
                        },
                        expression: "phone"
                    }
                })], 1), o("v-uni-view", {
                    staticClass: "yanzheng"
                }, [o("v-uni-input", {
                    staticStyle: {
                        width: "60%",
                        height: "82rpx",
                        "text-align": "left"
                    },
                    attrs: {
                        type: "number",
                        placeholder: "验证码",
                        "placeholder-style": "color:#aab2bd;"
                    },
                    model: {
                        value: e.code,
                        callback: function(n) {
                            e.code = e._n(n)
                        },
                        expression: "code"
                    }
                }), o("v-uni-button", {
                    class: e.btn_flag ? "color_no" : "color_yes",
                    staticStyle: {
                        width: "40%",
                        "text-align": "center",
                        "margin-top": "0rpx",
                        color: "#499dee",
                        background: "#f6f6f6"
                    },
                    attrs: {
                        disabled: e.btn_flag
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.sendCode.apply(void 0, arguments)
                        }
                    }
                }, [e._v(e._s(e.str))])], 1), o("v-uni-button", {
                    staticClass: "btn_submit",
                    style: "background:" + e.baseinfo.base_color2 + "; color:" + e.baseinfo.tabbar_bg2,
                    on: {
                        click: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.confirmBind.apply(void 0, arguments)
                        }
                    }
                }, [e._v("确定提交")])] : e._e()], 2)], 1)], 1) : e._e()
            },
            t = [];
        o.d(n, "a", function() {
            return i
        }), o.d(n, "b", function() {
            return t
        })
    },
    7131: function(e, n, o) {
        "use strict";
        o("4917");
        var i = o("3a34");
        if ("wq" == i.platform) {
            var t = i.url;
            t = "https://" + t.match(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/)[0], t += "/addons/worldidc_cloud/core/public/index.php/api/Wxapps/"
        } else t = i.url;
        var a = i.uniacid;
        a = uni.getStorageSync("uniacid");
        var r = {
            getOpenid: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                    s = function() {
                        uni.login({
                            provider: "weixin",
                            success: function(s) {
                                uni.request({
                                    url: t + "doPageAppbase",
                                    data: {
                                        code: s.code,
                                        uniacid: a
                                    },
                                    success: function(s) {
                                        if (console.log("微信小程序初次登陆"), 2 == s.data.data.res) uni.showModal({
                                            title: "提醒",
                                            content: "获取用户信息失败，请检查appid和appsecret是否正确！",
                                            showCancel: !1
                                        });
                                        else {
                                            uni.setStorageSync("source", 1);
                                            var c = s.data.data;
                                            uni.setStorageSync("openid", c.openid), c["nickname"] && c["avatar"] ? (uni.setStorageSync("golobeuid", c.id), uni.setStorageSync("golobeuser", c), uni.getStorage({
                                                key: "suid",
                                                success: function(n) {
                                                    r.fxsbind(n.data, e)
                                                },
                                                fail: function() {
                                                    uni.request({
                                                        url: t + "dopagehasBind",
                                                        data: {
                                                            uniacid: a,
                                                            identity: c.openid,
                                                            status: 1
                                                        },
                                                        success: function(n) {
                                                            "1" == n.data.data && n.data.suid ? (uni.setStorageSync("suid", n.data.suid), r.fxsbind(n.data.suid, e)) : "2" == n.data.data && "function" == typeof i && i()
                                                        }
                                                    })
                                                }
                                            })) : "function" == typeof o && o(), "function" == typeof n && n()
                                        }
                                    }
                                })
                            }
                        })
                    };
                uni.getStorage({
                    key: "openid",
                    success: function(s) {
                        uni.setStorageSync("source", 1), uni.request({
                            url: t + "dopageglobaluserinfo",
                            data: {
                                openid: s.data,
                                uniacid: a,
                                source: 1
                            },
                            success: function(s) {
                                var c = s.data.data;
                                c["nickname"] && c["avatar"] ? (uni.setStorageSync("golobeuid", c.id), uni.setStorageSync("golobeuser", c), uni.getStorage({
                                    key: "suid",
                                    success: function(n) {
                                        r.fxsbind(n.data, e)
                                    },
                                    fail: function() {
                                        console.log(c.openid), uni.request({
                                            url: t + "dopagehasBind",
                                            data: {
                                                uniacid: a,
                                                identity: c.openid,
                                                status: 1
                                            },
                                            success: function(n) {
                                                "1" == n.data.data && n.data.suid ? (uni.setStorageSync("suid", n.data.suid), r.fxsbind(n.data.suid, e)) : "2" == n.data.data && "function" == typeof i && i()
                                            }
                                        })
                                    }
                                })) : "function" == typeof o && o(), "function" == typeof n && n()
                            }
                        })
                    },
                    fail: function() {
                        s()
                    }
                })
            },
            qqLogin: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                    s = function() {
                        uni.login({
                            provider: "QQ",
                            success: function(s) {
                                s.code && uni.request({
                                    url: t + "dopageqqlogin",
                                    data: {
                                        code: s.code,
                                        uniacid: a
                                    },
                                    success: function(s) {
                                        if (console.log(s), 2 == s.data.data.res) return uni.showModal({
                                            title: "提示",
                                            content: "登录失败，请检查小程序设置是否正确",
                                            showCancel: !1
                                        }), !1;
                                        console.log("QQ小程序初次登陆"), uni.setStorageSync("source", 6), uni.setStorageSync("suid", s.data.data.suid);
                                        var c = s.data.data;
                                        uni.setStorageSync("qq_uid", c.id), uni.setStorageSync("qq_openid", c.openid), s.data.data.nickname && s.data.data.avatar ? (uni.setStorageSync("qq_userinfo", c), r.fxsbind(s.data.data.suid, e), uni.getStorage({
                                            key: "suid",
                                            success: function(n) {
                                                n.data ? r.fxsbind(n.data, 19) : (console.log("shit"), uni.request({
                                                    url: t + "dopagehasBind",
                                                    data: {
                                                        uniacid: a,
                                                        identity: c.openid,
                                                        status: 6
                                                    },
                                                    success: function(n) {
                                                        "1" == n.data.data && n.data.suid ? (uni.setStorageSync("suid", n.data.suid), r.fxsbind(n.data.suid, e)) : "2" == n.data.data && "function" == typeof i && i()
                                                    }
                                                }))
                                            }
                                        })) : "function" == typeof o && o(), "function" == typeof n && n()
                                    }
                                })
                            },
                            fail: function(e) {
                                console.log("拒绝授权"), "function" == typeof n && n()
                            }
                        })
                    };
                uni.getStorage({
                    key: "qq_userinfo",
                    success: function(o) {
                        var c = o.data;
                        c ? (uni.setStorageSync("source", 6), uni.getStorage({
                            key: "suid",
                            success: function(n) {
                                n.data ? r.fxsbind(n.data, e) : (console.log("shit"), uni.request({
                                    url: t + "dopagehasBind",
                                    data: {
                                        uniacid: a,
                                        identity: c.user_id,
                                        status: 6
                                    },
                                    success: function(n) {
                                        console.log(n), "1" == n.data.data && n.data.suid ? (uni.setStorageSync("suid", n.data.suid), r.fxsbind(n.data.suid, e)) : "2" == n.data.data && "function" == typeof i && i()
                                    }
                                }))
                            }
                        }), "function" == typeof n && n()) : s()
                    },
                    fail: function(e) {
                        s(), console.log("不在缓存中")
                    }
                })
            },
            bezier: function(e, n) {
                for (var o, i, t, a = [], r = 0; r <= n; r++) {
                    t = e.slice(0), i = [];
                    while (o = t.shift())
                        if (t.length) i.push(s([o, t[0]], r / n));
                        else {
                            if (!(i.length > 1)) break;
                            t = i, i = []
                        }
                    a.push(i[0])
                }

                function s(e, n) {
                    var o, i, t, a, r, s, c, l, g = [];
                    return o = e[0], i = e[1], a = i.x - o.x, r = i.y - o.y, t = Math.pow(Math.pow(a, 2) + Math.pow(r, 2), .5), s = r / a, c = Math.atan(s), l = t * n, g = {
                        x: o.x + l * Math.cos(c),
                        y: o.y + l * Math.sin(c)
                    }, g
                }
                return {
                    bezier_points: a
                }
            },
            fxsbind: function(e, n) {
                console.log("进绑定分销商"), a = uni.getStorageSync("uniacid"), console.log("suid:" + e), console.log("fxsid:" + n), n && n != e ? uni.request({
                    url: t + "doPagebindfxs",
                    data: {
                        suid: e,
                        fxsid: n,
                        uniacid: a
                    },
                    success: function(e) {
                        console.log("绑定分销商:" + e.data.data)
                    }
                }) : (n = uni.getStorageSync("fxsid"), n && "0" != n ? uni.request({
                    url: t + "doPagebindfxs",
                    data: {
                        suid: e,
                        fxsid: n,
                        uniacid: a
                    },
                    success: function(e) {
                        console.log("绑定分销商-缓存:" + e.data.data)
                    }
                }) : 0 !== n && uni.setStorageSync("fxsid", 0))
            },
            authAgain: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                uni.showModal({
                    title: "提示",
                    content: "必须授权后才能操作,是否重新授权？",
                    showCancel: !0,
                    success: function(o) {
                        o.confirm && uni.openSetting({
                            success: function() {
                                uni.getSetting({
                                    success: function(o) {
                                        o.authSetting["scope." + e] ? "function" == typeof n && n() : r.authAgain(e, n)
                                    }
                                })
                            }
                        })
                    }
                })
            },
            getUserid: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    i = function() {
                        uni.login({
                            provider: "alipay",
                            scopes: "auth_user",
                            success: function(i) {
                                i.authCode && uni.request({
                                    url: t + "dopagealipaylogin",
                                    data: {
                                        authCode: i.authCode,
                                        uniacid: a
                                    },
                                    success: function(i) {
                                        console.log("支付宝小程序初次登陆"), uni.setStorageSync("source", 2), uni.setStorageSync("suid", i.data.suid);
                                        var s = i.data;
                                        i.data.nick_name && i.data.avatar ? (uni.setStorageSync("ali_uid", s.id), uni.setStorageSync("ali_user_id", s.user_id), uni.setStorageSync("ali_userinfo", s), "function" == typeof n && n()) : uni.getUserInfo({
                                            success: function(e) {
                                                s.nick_name = e.nickName, s.avatar = e.avatar, uni.request({
                                                    url: t + "dopagealiUpdateNickname",
                                                    data: {
                                                        avatar: e.avatar,
                                                        nick_name: e.nickName,
                                                        uniacid: a,
                                                        id: s.id
                                                    },
                                                    success: function(e) {
                                                        uni.setStorageSync("ali_uid", s.id), uni.setStorageSync("ali_user_id", s.user_id), uni.setStorageSync("ali_userinfo", s), "function" == typeof n && n()
                                                    }
                                                })
                                            }
                                        }), uni.getStorage({
                                            key: "suid",
                                            success: function(n) {
                                                n.data ? r.fxsbind(n.data, e) : (console.log("shit"), uni.request({
                                                    url: t + "dopagehasBind",
                                                    data: {
                                                        uniacid: a,
                                                        identity: s.user_id,
                                                        status: 2
                                                    },
                                                    success: function(n) {
                                                        console.log(n), "1" == n.data.data && n.data.suid ? (uni.setStorageSync("suid", n.data.suid), r.fxsbind(n.data.suid, e)) : "2" == n.data.data && "function" == typeof o && o()
                                                    }
                                                }))
                                            }
                                        })
                                    }
                                })
                            },
                            fail: function(e) {
                                console.log(e), console.log("拒绝授权"), "function" == typeof n && n()
                            }
                        })
                    };
                uni.getStorage({
                    key: "ali_userinfo",
                    success: function(s) {
                        var c = s.data;
                        c ? (uni.setStorageSync("source", 2), uni.getStorage({
                            key: "suid",
                            success: function(n) {
                                n.data ? r.fxsbind(n.data, e) : (console.log("shit"), uni.request({
                                    url: t + "dopagehasBind",
                                    data: {
                                        uniacid: a,
                                        identity: c.user_id,
                                        status: 2
                                    },
                                    success: function(n) {
                                        console.log(n), "1" == n.data.data && n.data.suid ? (uni.setStorageSync("suid", n.data.suid), r.fxsbind(n.data.suid, e)) : "2" == n.data.data && "function" == typeof o && o()
                                    }
                                }))
                            }
                        }), "function" == typeof n && n()) : i()
                    },
                    fail: function(e) {
                        console.log("不在缓存中")
                    }
                })
            },
            toutiaoLogin: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                uni.getProvider({
                    service: "oauth",
                    success: function(e) {
                        console.log(e.provider[0]), uni.setStorageSync("provider", e.provider[0])
                    }
                });
                var i = function() {
                    uni.login({
                        provider: "toutiao",
                        success: function(i) {
                            i.code && (console.log(i), uni.request({
                                url: t + "dopagetoutiaologin",
                                data: {
                                    code: i.code,
                                    anonymous_code: i.anonymousCode,
                                    uniacid: a
                                },
                                success: function(i) {
                                    if (console.log(i), 2 == i.data.data.res) return uni.showModal({
                                        title: "提示",
                                        content: "登录失败，请检查小程序设置是否正确",
                                        showCancel: !1
                                    }), !1;
                                    console.log("头条小程序初次登陆"), uni.setStorageSync("source", 5), uni.setStorageSync("suid", i.data.data.suid);
                                    var s = i.data.data;
                                    i.data.data.nickname && i.data.data.avatar ? (uni.setStorageSync("toutiao_uid", s.id), uni.setStorageSync("toutiao_openid", s.openid), uni.setStorageSync("toutiao_userinfo", s), "function" == typeof n && n()) : uni.getUserInfo({
                                        success: function(e) {
                                            s.nickname = e.userInfo.nickName, s.avatar = e.userInfo.avatarUrl, uni.request({
                                                url: t + "dopagetoutiaoUpdateNickname",
                                                data: {
                                                    avatar: e.userInfo.avatarUrl,
                                                    nickname: e.userInfo.nickName,
                                                    uniacid: a,
                                                    id: s.id
                                                },
                                                success: function(e) {
                                                    uni.setStorageSync("toutiao_uid", s.id), uni.setStorageSync("toutiao_openid", s.openid), uni.setStorageSync("toutiao_userinfo", s), "function" == typeof n && n()
                                                }
                                            })
                                        },
                                        fail: function(e) {
                                            console.log(e)
                                        }
                                    }), uni.getStorage({
                                        key: "suid",
                                        success: function(n) {
                                            n.data ? r.fxsbind(n.data, e) : (console.log("shit"), uni.request({
                                                url: t + "dopagehasBind",
                                                data: {
                                                    uniacid: a,
                                                    identity: s.openid,
                                                    status: 5
                                                },
                                                success: function(n) {
                                                    "1" == n.data.data && n.data.suid ? (uni.setStorageSync("suid", n.data.suid), r.fxsbind(n.data.suid, e)) : "2" == n.data.data && "function" == typeof o && o()
                                                }
                                            }))
                                        }
                                    })
                                }
                            }))
                        },
                        fail: function(e) {
                            console.log("拒绝授权"), "function" == typeof n && n()
                        }
                    })
                };
                uni.getStorage({
                    key: "toutiao_userinfo",
                    success: function(s) {
                        var c = s.data;
                        c ? (uni.setStorageSync("source", 5), uni.getStorage({
                            key: "suid",
                            success: function(n) {
                                n.data ? r.fxsbind(n.data, e) : (console.log("shit"), uni.request({
                                    url: t + "dopagehasBind",
                                    data: {
                                        uniacid: a,
                                        identity: c.user_id,
                                        status: 5
                                    },
                                    success: function(n) {
                                        console.log(n), "1" == n.data.data && n.data.suid ? (uni.setStorageSync("suid", n.data.suid), r.fxsbind(n.data.suid, e)) : "2" == n.data.data && "function" == typeof o && o()
                                    }
                                }))
                            }
                        }), "function" == typeof n && n()) : i()
                    },
                    fail: function(e) {
                        i(), console.log("不在缓存中")
                    }
                })
            },
            h5login: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
                uni.getStorage({
                    key: "suid",
                    success: function(n) {
                        var i = n.data;
                        uni.setStorageSync("source", 3), uni.request({
                            url: t + "dopagecheckuniacid",
                            data: {
                                suid: i,
                                uniacid: uni.getStorageSync("uniacid")
                            },
                            success: function(n) {
                                0 == n.data.data ? "function" == typeof o && o() : r.fxsbind(i, e)
                            }
                        })
                    },
                    fail: function() {
                        "function" == typeof o && o()
                    },
                    complete: function() {
                        "function" == typeof n && n()
                    }
                })
            },
            bdLogin: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                    i = function() {
                        uni.login({
                            provider: "baidu",
                            success: function(i) {
                                uni.request({
                                    url: t + "doPageBdAppbase",
                                    data: {
                                        code: i.code,
                                        uniacid: a
                                    },
                                    success: function(i) {
                                        if (console.log("支付宝小程序初次登陆"), console.log(i), 2 == i.data.data.res) uni.showModal({
                                            title: "提醒",
                                            content: "获取用户信息失败，请检查appid和appsecret是否正确！",
                                            showCancel: !1
                                        });
                                        else {
                                            uni.setStorageSync("source", 4);
                                            var s = i.data.data;
                                            uni.setStorageSync("openid", s.openid), console.log(s), s["nickname"] && s["avatar"] ? (uni.setStorageSync("baidu_userinfo", s), "function" == typeof n && n()) : swan.authorize({
                                                scope: "scope.userInfo",
                                                success: function(e) {
                                                    swan.getUserInfo({
                                                        success: function(e) {
                                                            e.is_anonymous || uni.request({
                                                                url: t + "dopageBaiDuUpdate",
                                                                data: {
                                                                    uniacid: a,
                                                                    openid: s.openid,
                                                                    avatar: e.userInfo.avatarUrl,
                                                                    nickName: e.userInfo.nickName,
                                                                    gender: e.userInfo.gender
                                                                },
                                                                success: function(n) {
                                                                    s["avatar"] = e.userInfo.avatarUrl, s["nickname"] = e.userInfo.nickName, n.data && uni.setStorageSync("baidu_userinfo", s)
                                                                }
                                                            }), "function" == typeof n && n()
                                                        }
                                                    })
                                                }
                                            }), uni.getStorage({
                                                key: "suid",
                                                success: function(n) {
                                                    n.data ? r.fxsbind(n.data, e) : uni.request({
                                                        url: t + "dopagehasBind",
                                                        data: {
                                                            uniacid: a,
                                                            identity: s.openid,
                                                            status: 4
                                                        },
                                                        success: function(n) {
                                                            "1" == n.data.data && n.data.suid ? (uni.setStorageSync("suid", n.data.suid), r.fxsbind(n.data.suid, e)) : "2" == n.data.data && "function" == typeof o && o()
                                                        }
                                                    })
                                                },
                                                fail: function() {}
                                            })
                                        }
                                    }
                                })
                            }
                        })
                    };
                uni.getStorage({
                    key: "openid",
                    success: function(s) {
                        s.data ? (uni.setStorageSync("source", 4), uni.request({
                            url: t + "dopageglobaluserinfo",
                            data: {
                                openid: s.data,
                                uniacid: a,
                                source: 4
                            },
                            success: function(i) {
                                var s = i.data.data;
                                s["nickname"] && s["avatar"] ? (uni.setStorageSync("baidu_userinfo", s), uni.getStorage({
                                    key: "suid",
                                    success: function(n) {
                                        n.data ? r.fxsbind(n.data, e) : uni.request({
                                            url: t + "dopagehasBind",
                                            data: {
                                                uniacid: a,
                                                identity: s.openid,
                                                status: 4
                                            },
                                            success: function(n) {
                                                "1" == n.data.data && n.data.suid ? (uni.setStorageSync("suid", n.data.suid), r.fxsbind(n.data.suid, e)) : "2" == n.data.data && "function" == typeof o && o()
                                            }
                                        })
                                    },
                                    fail: function() {
                                        console.log(s.openid)
                                    }
                                })) : swan.authorize({
                                    scope: "scope.userInfo",
                                    success: function(e) {
                                        swan.getUserInfo({
                                            success: function(e) {
                                                console.log(12121212), console.log(e), e.is_anonymous ? swan.openSetting({
                                                    success: function(e) {
                                                        console.log(e.authSetting["scope.userInfo"]), e.authSetting["scope.userInfo"] && swan.getUserInfo({
                                                            success: function(e) {
                                                                uni.request({
                                                                    url: t + "dopageBaiDuUpdate",
                                                                    data: {
                                                                        uniacid: a,
                                                                        openid: s.openid,
                                                                        avatar: e.userInfo.avatarUrl,
                                                                        nickName: e.userInfo.nickName,
                                                                        gender: e.userInfo.gender
                                                                    },
                                                                    success: function(n) {
                                                                        userInfo["avatar"] = e.userInfo.avatarUrl, userInfo["nickname"] = e.userInfo.nickName, n.data && uni.setStorageSync("baidu_userinfo", userInfo)
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                }) : uni.request({
                                                    url: t + "dopageBaiDuUpdate",
                                                    data: {
                                                        avatar: e.userInfo.avatarUrl,
                                                        nickName: e.userInfo.nickName,
                                                        gender: e.userInfo.gender,
                                                        uniacid: a,
                                                        openid: s.openid
                                                    },
                                                    success: function(e) {
                                                        e && uni.setStorageSync("baidu_userinfo", e.data)
                                                    }
                                                }), "function" == typeof n && n()
                                            }
                                        })
                                    }
                                }), "function" == typeof n && n()
                            }
                        })) : i()
                    },
                    fail: function() {
                        i()
                    }
                })
            },
            throttle: function(e, n) {
                null != n && void 0 != n || (n = 1500);
                var o = null;
                return function() {
                    var i = +new Date;
                    (i - o > n || !o) && (e.apply(this, arguments), o = i)
                }
            },
            getWxAuth: function(e, n, o) {}
        };
        e.exports = r
    },
    8159: function(e, n, o) {
        n = e.exports = o("2350")(!1), n.push([e.i, '@font-face{font-family:iconfont;  /* project id 626828 */src:url(https://at.alicdn.com/t/font_626828_7abk2af0s0o.eot);src:url(https://at.alicdn.com/t/font_626828_7abk2af0s0o.eot#iefix) format("embedded-opentype"),url(https://at.alicdn.com/t/font_626828_7abk2af0s0o.woff2) format("woff2"),url(https://at.alicdn.com/t/font_626828_7abk2af0s0o.woff) format("woff"),url(https://at.alicdn.com/t/font_626828_7abk2af0s0o.ttf) format("truetype"),url(https://at.alicdn.com/t/font_626828_7abk2af0s0o.svg#iconfont) format("svg")}.iconfont{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-c-kafei:before{content:"\\E600"}.icon-c-feiji:before{content:"\\E601"}.icon-c-renwu4:before{content:"\\E603"}.icon-c-hanbao:before{content:"\\E604"}.icon-c-juanzhi:before{content:"\\E605"}.icon-c-bangqiu:before{content:"\\E606"}.icon-c-shouyinji:before{content:"\\E607"}.icon-c-zhangpeng:before{content:"\\E608"}.icon-c-rili:before{content:"\\E609"}.icon-c-yinyue:before{content:"\\E60A"}.icon-c-jieri:before{content:"\\E60B"}.icon-c-yiyaoxiang:before{content:"\\E60C"}.icon-c-qian1:before{content:"\\E60D"}.icon-c-xie2:before{content:"\\E60E"}.icon-c-pingban:before{content:"\\E60F"}.icon-c-yingerche:before{content:"\\E610"}.icon-c-txu:before{content:"\\E611"}.icon-c-mp3:before{content:"\\E612"}.icon-c-chuang:before{content:"\\E613"}.icon-c-zixingche:before{content:"\\E614"}.icon-c-guo1:before{content:"\\E615"}.icon-c-neiyi:before{content:"\\E616"}.icon-c-xie1:before{content:"\\E617"}.icon-c-qunzi:before{content:"\\E618"}.icon-c-wan:before{content:"\\E619"}.icon-c-pixie:before{content:"\\E61B"}.icon-c-shiwu:before{content:"\\E61C"}.icon-c-lianyiqun:before{content:"\\E61D"}.icon-c-gaogenxie:before{content:"\\E61E"}.icon-c-diaodai:before{content:"\\E61F"}.icon-c-nvbao:before{content:"\\E620"}.icon-c-kuzi:before{content:"\\E621"}.icon-c-shafa:before{content:"\\E622"}.icon-c-naiping:before{content:"\\E623"}.icon-c-jiezhi:before{content:"\\E624"}.icon-c-shoubiao:before{content:"\\E625"}.icon-c-bijiben:before{content:"\\E626"}.icon-c-xizhuang:before{content:"\\E627"}.icon-c-zhiwu:before{content:"\\E628"}.icon-c-tixing:before{content:"\\E629"}.icon-x-wenjian:before{content:"\\E62A"}.icon-c-zhutu:before{content:"\\E62B"}.icon-c-zhexiantu:before{content:"\\E62D"}.icon-c-renwu2:before{content:"\\E62F"}.icon-c-renwu1:before{content:"\\E630"}.icon-c-jimao:before{content:"\\E631"}.icon-x-xintiao:before{content:"\\E632"}.icon-c-qian2:before{content:"\\E633"}.icon-c-anquan:before{content:"\\E634"}.icon-c-gonggao:before{content:"\\E635"}.icon-c-aixin:before{content:"\\E636"}.icon-c-biaoqian:before{content:"\\E637"}.icon-c-renwu5:before{content:"\\E638"}.icon-c-qian3:before{content:"\\E639"}.icon-x-caidan:before{content:"\\E63A"}.icon-x-liebiao:before{content:"\\E63B"}.icon-c-shipin1:before{content:"\\E63C"}.icon-c-huaduo:before{content:"\\E63D"}.icon-c-shan:before{content:"\\E63E"}.icon-c-renwu7:before{content:"\\E63F"}.icon-c-huapen:before{content:"\\E640"}.icon-c-deng:before{content:"\\E641"}.icon-c-shu:before{content:"\\E642"}.icon-c-youyanji:before{content:"\\E643"}.icon-x-dianhua5:before{content:"\\E644"}.icon-c-gongjiao:before{content:"\\E645"}.icon-x-gouwu1:before{content:"\\E646"}.icon-x-youhuiquan1:before{content:"\\E647"}.icon-x-bofang2:before{content:"\\E688"}.icon-x-shouye4:before{content:"\\E62C"}.icon-x-xiangzi:before{content:"\\E68A"}.icon-x-shouji2:before{content:"\\E6B7"}.icon-x-caidan5:before{content:"\\E6B8"}.icon-c-maozi2:before{content:"\\E648"}.icon-x-zhekou2:before{content:"\\E656"}.icon-c-meifua:before{content:"\\E659"}.icon-x-geren3:before{content:"\\E64C"}.icon-c-jiazheng:before{content:"\\E689"}.icon-x-diancan:before{content:"\\E68B"}.icon-x-dianhua3:before{content:"\\E69E"}.icon-x-geren5:before{content:"\\E657"}.icon-x-geren6:before{content:"\\E65C"}.icon-c-xinpin2:before{content:"\\E6A4"}.icon-x-saoma2:before{content:"\\E649"}.icon-c-cuxiao:before{content:"\\E6A6"}.icon-c-pengyouquan:before{content:"\\E64A"}.icon-c-weixin:before{content:"\\E64B"}.icon-x-diancan2:before{content:"\\E64D"}.icon-c-renwu8:before{content:"\\E661"}.icon-c-jianshen2:before{content:"\\E6DF"}.icon-c-yusan:before{content:"\\E6AD"}.icon-c-renwu9:before{content:"\\E6BE"}.icon-x-qq:before{content:"\\E6AA"}.icon-x-pintuan:before{content:"\\E733"}.icon-c-renzheng:before{content:"\\E64E"}.icon-c-shangjia:before{content:"\\E64F"}.icon-c-lou:before{content:"\\E650"}.icon-c-weixiu:before{content:"\\E651"}.icon-c-chelun:before{content:"\\E652"}.icon-x-daifukuan:before{content:"\\E68D"}.icon-x-zan1:before{content:"\\E7B6"}.icon-c-dazhe:before{content:"\\E6AB"}.icon-c-baoyang:before{content:"\\E714"}.icon-c-shuomingshu:before{content:"\\E708"}.icon-c-zhinan:before{content:"\\E6B9"}.icon-x-guanyu:before{content:"\\E68E"}.icon-c-email:before{content:"\\E653"}.icon-c-xiangji:before{content:"\\E654"}.icon-c-renwu6:before{content:"\\E655"}.icon-x-guanbi:before{content:"\\E724"}.icon-x-guanbi2:before{content:"\\E725"}.icon-x-guanbi1:before{content:"\\E726"}.icon-x-jia1:before{content:"\\E727"}.icon-x-jia:before{content:"\\E729"}.icon-x-jia2:before{content:"\\E72A"}.icon-x-tishi2:before{content:"\\E72B"}.icon-x-tishi1:before{content:"\\E72C"}.icon-x-kefu2:before{content:"\\E740"}.icon-x-kefu1:before{content:"\\E741"}.icon-x-shouye6:before{content:"\\E750"}.icon-x-shouye5:before{content:"\\E751"}.icon-x-tishi6:before{content:"\\E758"}.icon-x-tishi5:before{content:"\\E759"}.icon-x-biaoqian2:before{content:"\\E78A"}.icon-x-biaoqian1:before{content:"\\E78B"}.icon-c-qian5:before{content:"\\E715"}.icon-c-meishi2:before{content:"\\E71C"}.icon-x-chanpin2:before{content:"\\E783"}.icon-c-naozhong:before{content:"\\E658"}.icon-c-shijian2:before{content:"\\E65A"}.icon-x-dizhi2:before{content:"\\E65B"}.icon-x-sousuo1:before{content:"\\E65D"}.icon-x-dingdan1:before{content:"\\E65E"}.icon-x-pingjia2:before{content:"\\E65F"}.icon-c-hongbao1:before{content:"\\E660"}.icon-x-dianhua4:before{content:"\\E6A3"}.icon-x-diancan3:before{content:"\\E61A"}.icon-x-diangdan4:before{content:"\\E67A"}.icon-x-chanpin3:before{content:"\\E719"}.icon-x-jifen1:before{content:"\\E6BA"}.icon-x-saoma:before{content:"\\E6BB"}.icon-x-vip:before{content:"\\E6BC"}.icon-x-yuyin4:before{content:"\\E744"}.icon-x-geren4:before{content:"\\E692"}.icon-x-shouye3:before{content:"\\E693"}.icon-c-shan2:before{content:"\\E7B0"}.icon-x-shipin2:before{content:"\\E68F"}.icon-c-yinyue1:before{content:"\\E696"}.icon-x-xia:before{content:"\\E69A"}.icon-x-you:before{content:"\\E6A8"}.icon-x-zuo:before{content:"\\E6B0"}.icon-x-shang:before{content:"\\E6C7"}.icon-x-bangzhu1:before{content:"\\E6C8"}.icon-x-bangzhu2:before{content:"\\E6C9"}.icon-x-gengduo1:before{content:"\\E6CB"}.icon-x-gengduo2:before{content:"\\E6CC"}.icon-c-youjian1:before{content:"\\E6CD"}.icon-c-youjian2:before{content:"\\E6CE"}.icon-x-shanchu1:before{content:"\\E6CF"}.icon-x-shanchu2:before{content:"\\E6D0"}.icon-x-dui1:before{content:"\\E6D1"}.icon-x-dui2:before{content:"\\E6D2"}.icon-c-tingche:before{content:"\\E6CA"}.icon-c-jisuanqi2:before{content:"\\E72F"}.icon-c-wifi2:before{content:"\\E69F"}.icon-c-chongwu:before{content:"\\E71D"}.icon-x-caidan2:before{content:"\\E6D3"}.icon-x-jifen:before{content:"\\E690"}.icon-x-mendian:before{content:"\\E6D4"}.icon-x-fenxiang2:before{content:"\\E6A0"}.icon-x-miaosha:before{content:"\\E691"}.icon-x-zan2:before{content:"\\E6A1"}.icon-x-gonggao2:before{content:"\\E6C1"}.icon-c-renwu3:before{content:"\\E71E"}.icon-c-yinyue2:before{content:"\\E6D5"}.icon-x-dianhua6:before{content:"\\E6A2"}.icon-asmkticon0131:before{content:"\\E7B3"}.icon-x-vip2:before{content:"\\E6BD"}.icon-x-yuyin3:before{content:"\\E67E"}.icon-x-gonggao4:before{content:"\\E6A5"}.icon-x-fahuo:before{content:"\\E694"}.icon-x-fenxiao:before{content:"\\E695"}.icon-x-zanting1:before{content:"\\E742"}.icon-x-miaosha2:before{content:"\\E893"}.icon-x-kefu:before{content:"\\E697"}.icon-x-dianhua8:before{content:"\\E6D6"}.icon-c-hua2:before{content:"\\E6B4"}.icon-c-360:before{content:"\\E71F"}.icon-x-daohang2:before{content:"\\E6D7"}.icon-x-fenxiang1:before{content:"\\E66D"}.icon-x-qq2:before{content:"\\E720"}.icon-x-fenxiang3:before{content:"\\E686"}.icon-x-jilu:before{content:"\\E698"}.icon-x-yuyin2:before{content:"\\E687"}.icon-x-dui:before{content:"\\E721"}.icon-x-tuikuan2:before{content:"\\E6A7"}.icon-c-xinwen:before{content:"\\E6D8"}.icon-x-dianhua7:before{content:"\\E6D9"}.icon-c-xinwen1:before{content:"\\E6DA"}.icon-x-chakan2:before{content:"\\E6A9"}.icon-c-bangzhu:before{content:"\\E664"}.icon-c-hongbao2:before{content:"\\E671"}.icon-x-gouwu:before{content:"\\E6DB"}.icon-x-qianbao2:before{content:"\\E699"}.icon-x-shanchu:before{content:"\\E6AC"}.icon-c-yinyue3:before{content:"\\E6DC"}.icon-x-dianhua1:before{content:"\\E663"}.icon-x-dianhua2:before{content:"\\E665"}.icon-c-dianpu1:before{content:"\\E666"}.icon-c-dianpu2:before{content:"\\E667"}.icon-c-xing2:before{content:"\\E668"}.icon-c-xing1:before{content:"\\E669"}.icon-x-xiaoxi1:before{content:"\\E66A"}.icon-x-xiaoxi2:before{content:"\\E66B"}.icon-x-caidan3:before{content:"\\E66C"}.icon-x-caidan4:before{content:"\\E66E"}.icon-x-gwc1:before{content:"\\E66F"}.icon-x-gwc2:before{content:"\\E670"}.icon-x-shouye2:before{content:"\\E672"}.icon-x-shouye1:before{content:"\\E673"}.icon-c-xin2:before{content:"\\E674"}.icon-c-xin1:before{content:"\\E675"}.icon-x-yaoqing2:before{content:"\\E676"}.icon-x-yaoqing1:before{content:"\\E677"}.icon-x-geren2:before{content:"\\E678"}.icon-x-geren1:before{content:"\\E679"}.icon-x-ceshi:before{content:"\\E6DD"}.icon-c-huo:before{content:"\\E7DE"}.icon-x-ruzhu:before{content:"\\E6DE"}.icon-x-shijian2:before{content:"\\E6B5"}.icon-x-tuihuo1:before{content:"\\E67B"}.icon-x-pingjia:before{content:"\\E67C"}.icon-x-qiandao:before{content:"\\E67D"}.icon-c-jiangli:before{content:"\\E67F"}.icon-c-maozi:before{content:"\\E680"}.icon-c-shu2:before{content:"\\E681"}.icon-x-jianyi:before{content:"\\E682"}.icon-x-shezhi:before{content:"\\E683"}.icon-x-dizhi:before{content:"\\E684"}.icon-c-shouji:before{content:"\\E685"}.icon-x-shipin:before{content:"\\E738"}.icon-c-pdf:before{content:"\\E709"}.icon-x-gonggao3:before{content:"\\E6AE"}.icon-x-fenxiang4:before{content:"\\E74C"}.icon-c-yinyue5:before{content:"\\E75B"}.icon-x-gonggao5:before{content:"\\E6AF"}.icon-c-luyin:before{content:"\\E760"}.icon-c-qian4:before{content:"\\E6BF"}.icon-x-vip3:before{content:"\\E6C0"}.icon-c-huodong2:before{content:"\\E712"}.icon-x-liushui:before{content:"\\E70A"}.icon-x-youhuiquan2:before{content:"\\E69B"}.icon-x-shipin3:before{content:"\\E662"}.icon-x-zhifu:before{content:"\\E70B"}.icon-c-zhongchaping:before{content:"\\E734"}.icon-c-haoping:before{content:"\\E735"}.icon-x-qiandao2:before{content:"\\E62E"}.icon-x-yuyin1:before{content:"\\E68C"}.icon-x-bofang3:before{content:"\\E6C2"}.icon-x-zhekou:before{content:"\\E70C"}.icon-x-pintuan2:before{content:"\\E780"}.icon-c-naozhong2:before{content:"\\E73D"}.icon-x-miaosha3:before{content:"\\E70D"}.icon-c-pinglun:before{content:"\\E736"}.icon-c-yinpin:before{content:"\\E76A"}.icon-x-huowu2:before{content:"\\E69C"}.icon-x-kanjia:before{content:"\\E87C"}.icon-x-gouwu3:before{content:"\\E6E0"}.icon-x-erweima2:before{content:"\\E74E"}.icon-x-vip4:before{content:"\\E6C3"}.icon-x-youhuiquan:before{content:"\\E70E"}.icon-c-yiyuan:before{content:"\\E722"}.icon-c-shigong:before{content:"\\E723"}.icon-x-dingdan4:before{content:"\\E778"}.icon-x-qiehuan:before{content:"\\E7EA"}.icon-c-sheying2:before{content:"\\E728"}.icon-x-dingdan3:before{content:"\\E8C6"}.icon-c-meiti:before{content:"\\E72D"}.icon-x-miaosha4:before{content:"\\E70F"}.icon-x-beizhu:before{content:"\\E76F"}.icon-x-dianhua10:before{content:"\\E710"}.icon-x-fuzhi:before{content:"\\E752"}.icon-c-chashui:before{content:"\\E6B1"}.icon-c-zuanshi:before{content:"\\E6C4"}.icon-x-fenxiao2:before{content:"\\E711"}.icon-x-vip5:before{content:"\\E6C5"}.icon-x-pinglun:before{content:"\\E737"}.icon-x-qiandao3:before{content:"\\E69D"}.icon-x-tixing:before{content:"\\E75F"}.icon-c-wenzhang:before{content:"\\E770"}.icon-c-jisuanqi:before{content:"\\E72E"}.icon-c-huodong1:before{content:"\\E732"}.icon-x-shouji4:before{content:"\\E6C6"}.icon-c-shijianshixin:before{content:"\\E765"}.icon-c-bianji:before{content:"\\E73A"}.icon-x-bianji:before{content:"\\E6B2"}.icon-x-weixin:before{content:"\\E731"}.icon-x-daohang1:before{content:"\\E6E1"}.icon-c-xinpin1:before{content:"\\E713"}.icon-x-erweima:before{content:"\\E7E3"}.icon-c-chongdian:before{content:"\\E6B3"}.icon-x-dingdan2:before{content:"\\E730"}.icon-c-yinyue4:before{content:"\\E6E2"}.icon-x-gouwu4:before{content:"\\E602"}.icon-x-zuo2:before{content:"\\E94A"}.icon-x-you2:before{content:"\\E94B"}.icon-x-xia2:before{content:"\\E94C"}.icon-x-shang2:before{content:"\\E94D"}.icon-c-falv:before{content:"\\E6E3"}.icon-c-jingji:before{content:"\\E6E4"}.icon-c-lixue:before{content:"\\E6E5"}.icon-c-jiaoyu:before{content:"\\E6E6"}.icon-c-xuexiao:before{content:"\\E6E7"}.icon-c-nongye:before{content:"\\E6E8"}.icon-c-wenxue:before{content:"\\E6E9"}.icon-c-yixue:before{content:"\\E6EA"}.icon-c-yishu:before{content:"\\E6EB"}.icon-x-gonggao6:before{content:"\\E6B6"}.icon-c-wifi:before{content:"\\E7E0"}.icon-c-zhengjian:before{content:"\\E716"}.icon-c-zhengfu:before{content:"\\E6EC"}.icon-c-fuwu:before{content:"\\E6ED"}.icon-c-zixun:before{content:"\\E6EE"}.icon-c-jianshen:before{content:"\\E6EF"}.icon-c-qita:before{content:"\\E6F0"}.icon-c-quanqiu:before{content:"\\E6F1"}.icon-c-fangchan:before{content:"\\E6F2"}.icon-c-jinrong:before{content:"\\E6F3"}.icon-c-dianli:before{content:"\\E6F4"}.icon-c-guanggao:before{content:"\\E6F5"}.icon-c-tongxun:before{content:"\\E6F6"}.icon-c-hulianwang:before{content:"\\E6F7"}.icon-c-sheying:before{content:"\\E6F8"}.icon-c-lvyou:before{content:"\\E6F9"}.icon-c-dianzi:before{content:"\\E6FA"}.icon-c-nengyuan:before{content:"\\E6FB"}.icon-c-huanbao:before{content:"\\E6FC"}.icon-c-gonggong:before{content:"\\E6FD"}.icon-c-shipin:before{content:"\\E6FE"}.icon-c-yiyao:before{content:"\\E6FF"}.icon-c-zhizao:before{content:"\\E700"}.icon-c-jiaoyu2:before{content:"\\E701"}.icon-c-shuili:before{content:"\\E702"}.icon-c-yiliao:before{content:"\\E703"}.icon-c-nonglin:before{content:"\\E704"}.icon-c-jianzhu:before{content:"\\E705"}.icon-c-jiaotong:before{content:"\\E706"}.icon-x-dingwei:before{content:"\\E717"}.icon-x-fujian:before{content:"\\E718"}.icon-x-mima:before{content:"\\E71A"}.icon-c-zhiwei:before{content:"\\E71B"}.icon-c-dizhishixin:before{content:"\\E766"}.icon-x-dizhi3:before{content:"\\E707"}.icon-c-lou2:before{content:"\\E75C"}.icon-c-kan:before{content:"\\E787"}.icon-x-biaoqian:before{content:"\\E788"}.icon-triangle_down_fill:before{content:"\\E73B"}.icon-triangle_up_fill:before{content:"\\E73C"}.icon-list:before{content:"\\E73E"}.icon-cascades:before{content:"\\E73F"}.icon-shaixuan:before{content:"\\E743"}.icon-x-jian:before{content:"\\E745"}.icon-x-vip1:before{content:"\\E746"}.icon-x-shenglve:before{content:"\\E747"}.icon-x-wodekefu:before{content:"\\E748"}.icon-x-empty:before{content:"\\E749"}.icon-x-huo:before{content:"\\E74A"}.icon-x-shouye:before{content:"\\E74B"}.icon-x-gouwuche:before{content:"\\E74D"}.icon-x-fenxiang:before{content:"\\E74F"}.icon-x-gou:before{content:"\\E753"}.icon-x-zhiding1:before{content:"\\E754"}.icon-x-shoucang:before{content:"\\E755"}.icon-x-yishoucang:before{content:"\\E756"}.icon-x-back:before{content:"\\E757"}.icon-x-delete:before{content:"\\E75D"}.icon-x-bianji1:before{content:"\\E75A"}.icon-x-pingjia1:before{content:"\\E75E"}.icon-x-shouhou:before{content:"\\E761"}.icon-x-mima1:before{content:"\\E762"}.icon-x-erweima1:before{content:"\\E763"}.icon-x-qianbao:before{content:"\\E764"}.icon-x-hexiao:before{content:"\\E767"}.icon-x-qianbao1:before{content:"\\E768"}.icon-x-daifahuo1:before{content:"\\E769"}.icon-x-yifahuo:before{content:"\\E76B"}.icon-x-yiwancheng:before{content:"\\E76C"}.icon-x-jiaoyiguanbi:before{content:"\\E76D"}.icon-x-shouhou1:before{content:"\\E76E"}.icon-x-wancheng:before{content:"\\E771"}.icon-x-baoguo:before{content:"\\E772"}.icon-x-dingwei1:before{content:"\\E773"}.icon-x-test:before{content:"\\E774"}.icon-x-gerenxinxi:before{content:"\\E775"}.icon-x-tuihuo:before{content:"\\E776"}.icon-x-haoping:before{content:"\\E777"}.icon-x-zhongping:before{content:"\\E779"}.icon-x-chaping:before{content:"\\E77A"}.icon-x-tupian:before{content:"\\E77B"}.icon-x-fenxiang5:before{content:"\\E77C"}.icon-x-daifahuo:before{content:"\\E77D"}.icon-x-daishouhuo:before{content:"\\E77E"}.icon-x-shangpin:before{content:"\\E77F"}.icon-x-xin2:before{content:"\\E781"}.icon-x-liulan:before{content:"\\E782"}.icon-x-aixin:before{content:"\\E784"}.icon-x-liuyan:before{content:"\\E785"}.icon-x-tuijian:before{content:"\\E786"}.icon-x-dianzan:before{content:"\\E7BC"}.icon-x-dianzan1:before{content:"\\E739"}.icon-zanting:before{content:"\\E789"}.icon-x-renshu:before{content:"\\E78C"}.icon-x-shijian:before{content:"\\E840"}.icon-x-addre:before{content:"\\E78D"}.icon-x-shandian:before{content:"\\E78E"}.icon-miaosha:before{content:"\\E78F"}.icon-goumaishu:before{content:"\\E791"}.icon-kanjia:before{content:"\\E792"}.icon-fenxiang:before{content:"\\E793"}.icon-haoyou:before{content:"\\E790"}.icon-xiazai:before{content:"\\E7BA"}\r\n\r\n/*每个页面公共css */uni-page-body{background:#f6f6f6;font-size:%?28?%;color:#666;line-height:1.5;position:relative;min-height:100%;box-sizing:border-box}uni-input{border:solid 1px #eee;background:#fff;height:1.4rem;line-height:1.4rem}.picker{border:solid 1px #eee;background:#fff;padding:.3rem;margin-top:.5rem;height:1.4rem;line-height:1.4rem}modal uni-text{padding:6px 0 0 6px}.clearfix:after{content:"";clear:both;display:block;height:1px}.bg_f{background:#fff;overflow:hidden;border-radius:%?10?%}\r\n\r\n/*base*/.hide,.none,.show_0{display:none}.block,.hide3,.show_1{display:block}.about_banner{width:%?750?%;height:%?330?%}.minihd{background:#fff;padding:%?16?% 0}.minihd1 uni-image{width:100%;display:block}.minihd{background:#fff;padding:%?16?% 0}.minihd2 uni-image{width:%?200?%;height:%?70?%;display:block;float:left;margin-left:%?16?%}.minihd_tel{float:right;margin-right:%?16?%;font-size:%?32?%;margin-top:%?12?%}.minihd_tel uni-image{width:%?46?%;height:%?46?%;margin:%?3?% %?6?% 0 0}.search{padding:%?20?%;display:block}.search_t{color:#ddd}.search uni-input{height:%?50?%;padding:%?6?% %?6?%;text-align:center;border-radius:%?6?%;line-height:%?50?%;margin:0;border:none}.slide uni-image{width:100%}.slide{height:auto}slide-item{height:auto}.slide .wx-swiper-dots.wx-swiper-dots-horizontal{margin-bottom:%?2?%}.slide .wx-swiper-dot{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;margin:0 %?5?%;width:%?30?%;border-radius:2px;height:%?8?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;opacity:.5}.slide .wx-swiper-dot:before{content:"";-webkit-box-flex:1;-webkit-flex-grow:1;flex-grow:1}.section__title .show_1{display:inline-block;color:red}.w{width:%?720?%;margin:0 auto;box-sizing:border-box;border-radius:4px;box-shadow:0 0 15px #eee}.index_contact.w{margin-top:%?20?%}.full{width:100%}.pr{position:relative}.pa{position:absolute}\r\n\r\n/* .tl {\n\t\ttext-align: left !important;\n\t}\n\n\t.tc {\n\t\ttext-align: center !important;\n\t} */.tr{text-align:right!important}.mt5{margin-top:%?5?%}.mt10{margin-top:%?20?%}.mb10{margin-bottom:%?20?%}.mt15{margin-top:%?18?%}.mt20{margin-top:%?20?%}.mt25{margin-top:%?25?%}.mt30{margin-top:%?30?%}.mt35{margin-top:%?35?%}.mt40{margin-top:%?40?%}.pt20{padding-top:20px}.pd10{padding:%?10?%}.pd20{padding:%?20?%}.pd30{padding:%?30?%}.fl{float:left}.fr{float:right}.copy{line-height:%?60?%;text-align:center;color:#ccc;font-size:%?24?%;margin:%?40?% 0 %?20?%}.copy_p{display:block;width:100%;height:%?80?%!important;margin:0 auto}.copy_t{text-align:center;line-height:%?44?%}.footer_block{height:%?108?%}.footer_block_iponex{height:%?140?%}.footer{position:fixed;left:0;bottom:0;width:100%;box-sizing:border-box;z-index:8000;padding:%?8?% 0;font-size:%?24?%;height:%?110?%;background:#fff;overflow:hidden}.footer_iphonex{height:%?140?%}.footer.tabnum1 .footOne{width:100%}.footer.tabnum2 .footOne{width:50%}.footer.tabnum3 .footOne{width:33.3334%}.footer.tabnum4 .footOne{width:25%}.footer.tabnum5 .footOne{width:20%}.footer .footOne{text-align:center;float:left}.footer .footOne uni-image{width:%?56?%;height:%?56?%;display:block;margin:0 auto}.footer .footOne uni-text{display:block;font-size:%?24?%}.footer .footOne uni-button{position:relative;display:block;margin-left:auto;margin-right:auto;padding-left:0;padding-right:0;box-sizing:border-box;text-align:center;text-decoration:none;line-height:%?40?%;border-radius:5px;-webkit-tap-highlight-color:transparent;overflow:hidden;background-color:initial}.footer .footOne uni-button:after{content:" ";width:0;height:0%;position:absolute;top:0;left:0;border:none;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:10px}.iconfont2{font-size:%?40?%;height:%?40?%}.banner,.banner .pic,.banner .pic_bg{width:%?750?%;height:%?330?%;overflow:hidden}.banner .pic_bg{background:rgba(0,0,0,.66);position:absolute;left:0;top:0}.banner .head{top:%?35?%;left:%?315?%;width:%?120?%;height:%?120?%;border:solid 2px #fff;border-radius:50%;box-sizing:border-box}.banner .name{top:%?165?%;left:0;font-size:%?35?%}.banner .address{top:%?215?%;left:0;color:#fff;font-size:%?28?%}.banner .price{top:%?255?%;left:0;color:#fff;font-size:%?28?%}.banner .price uni-text{color:#ffcf3d;font-size:.8rem}.index_about_t_block{padding-bottom:%?20?%}.index_about{margin:2% 3%;line-height:1.5}.index_about uni-view{text-indent:2em;line-height:1.8;font-size:%?26?%}.index_contact{padding:%?10?% %?30?%}.index_contact uni-view{line-height:%?64?%}.index_contact uni-view uni-image{width:%?32?%;height:%?32?%;margin:%?18?% %?20?% 0 0}.index_case{margin-bottom:%?10?%}.tl20{text-indent:%?20?%;text-align:left}.more{text-indent:0;display:inline}.more2{width:%?400?%;margin:0 auto;text-align:center;color:#fff;line-height:%?66?%;border-radius:3px;margin-bottom:%?40?%}.more3{text-align:center;line-height:%?66?%;margin-bottom:%?40?%}.maskCon{position:absolute;left:0;top:0;width:100%;height:100%;z-index:900002}\r\n\r\n/*视频*/.index_video{overflow:hidden;height:%?426?%;position:relative}.index_video_i{position:absolute;left:42%;top:30%;z-index:9;font-size:%?100?%}.index_video_p{width:100%;height:%?426?%;position:absolute;top:0;left:0;z-index:8}.index_video_v{position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.8);z-index:9999999}.index_video_vc{width:100%;margin-top:20%}.index_video_v uni-image{display:block;width:%?60?%;height:%?60?%;margin:%?20?% auto 0}.index_hot{display:none}.index_hot.index_hot_show{display:block}.d_video{width:100%;height:%?426?%;display:block;margin-bottom:%?15?%;position:relative}.list_pic{font-size:%?30?%;padding-bottom:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list_pic uni-image{width:100%;height:100%;display:block}\r\n\r\n/*组图列表样式1 单行大图*/.list_pic .list_picture1{width:100%;margin-bottom:%?10?%;overflow:hidden;border-radius:%?10?%;background:#fff}.list_pic .list_picture1 .re_box{position:relative}.list_pic .list_picture1 .re_box uni-image{width:100%;height:%?460?%}.list_pic .list_picture1 .re_box .pic_info_box{position:absolute;top:0;right:0;width:100%;height:100%;background:rgba(0,0,0,.3);text-align:center}.list_pic .list_picture1 .re_box .title{color:#fff;font-size:%?32?%;margin-top:24%;white-space:nowrap;padding:0 %?70?%;box-sizing:border-box;overflow:hidden;text-overflow:ellipsis}.list_pic .list_picture1 .re_box .picture_nums{color:#fff;font-size:%?24?%;margin-top:%?10?%}\r\n\r\n/*组图列表样式2 两列图片*/.list_pic .list_picture2{width:48.5%;overflow:hidden;border-radius:%?10?%;background:#fff;margin-bottom:%?10?%}.list_pic .list_picture2:nth-child(odd){margin-right:%?20?%}.list_pic .list_picture2 .re_box uni-image{width:100%;height:%?236?%}.list_pic .list_picture2 .re_box .pic_info_box{padding:%?14?%;box-sizing:border-box}.list_pic .list_picture2 .re_box .title{color:#333;font-size:%?24?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:%?6?%;width:100%;box-sizing:border-box}.list_pic .list_picture2 .re_box .picture_nums{color:#999;font-size:%?24?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\r\n\r\n/*文章列表样式1 单行大图*/.list_pic .list_pic1{margin:%?10?% %?20?%;position:relative;width:95%}.list_pic .list_pic1:first-child{margin-top:%?20?%}.list_pic1 .flex_box{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list_pic1 .re_box{position:relative;border-radius:%?10?%;overflow:hidden;height:%?442?%}.list_pic1 .title_box{position:absolute;bottom:0;left:0;background:rgba(51,51,51,.6);color:#fff;font-size:%?24?%;width:100%;padding:0 %?20?%;box-sizing:border-box}.list_pic1 .title_box .box_desc{display:none}.list_pic1 .title{width:66%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.list_pic .list_pic1 uni-image,.list_pic .list_pic11 uni-image{display:block}.list_pic .list_pic1 .title{line-height:%?66?%;overflow:hidden}.list_pic .list_pic1 .fl_look{position:absolute;top:0;right:0;color:#fff;margin:%?10?% %?20?% 0 0}.list_pic .list_pic1 .fl_num{font-size:%?24?%;margin-left:%?8?%}.list_pic .list_pic1 .listVbg{width:100%;height:100%;position:absolute;left:0;top:0;text-align:center;background-color:rgba(0,0,0,.3)}.list_pic .list_pic1 .listVbg uni-image{width:%?130?%;height:%?130?%;margin:0 auto;margin-top:20%}\r\n\r\n/* .list_pic .list_pic1 .title.tc {\n\t\ttext-align: center\n\t}\n\n\t.list_pic .list_pic1 .title.tlb,\n\t.list_pic .list_pic1 .title.tcb {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tbottom: 0;\n\t\tline-height: 66rpx;\n\t\tbackground: rgba(0, 0, 0, 0.3);\n\t\tcolor: #fff;\n\t\tfont-size: 30rpx;\n\t}\n\n\t.list_pic .list_pic1 .title.tlb {\n\t\ttext-indent: 20rpx;\n\t\ttext-align: left;\n\t} */.list_pic .list_pic11{margin:2%;position:relative;background:#fff;border-bottom:1px solid #eee;width:96%}.list_pic .list_pic11 .title{line-height:%?80?%;font-size:%?28?%;padding-right:%?180?%;height:%?80?%;overflow:hidden;text-indent:%?20?%}.list_pic .list_pic11 uni-text{position:absolute;right:%?10?%;bottom:%?12?%;font-size:%?40?%}.list_pic .list_pic11 .btn_buy{display:none}\r\n\r\n/*积分兑换商品···多商户热销商品*/.list_sp{padding:%?20?%}.list_sp .list_pic12{background:#fff;padding-bottom:%?16?%;width:48.5%;margin-right:%?20?%;display:inline-block}.list_sp .list_pic12:nth-child(2n+2){margin-right:0}.list_sp .list_pic12 uni-image{width:100%}.list_sp .list_pic12 .btn_buy{float:right;font-size:%?22?%;padding:0 %?16?%;border-radius:%?6?%;margin-right:%?10?%}\r\n\r\n/* DIY 首页搜索框-商品列表 */.list_picsearch .list_pic19{padding:%?20?% %?20?% 0;box-sizing:border-box}.list_picsearch .list_pic19 uni-navigator{overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex}.list_picsearch .list_pic19 ._navigator{overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex}.list_picsearch .list_pic19 uni-image{width:%?240?%;height:%?180?%;margin-right:%?30?%;border-radius:%?10?%}.list_picsearch .list_pic19 .title{font-size:%?28?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;color:#333;margin-bottom:%?20?%}.list_picsearch .list_pic19 .desc{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;color:#999;font-size:%?24?%;margin-bottom:%?26?%}.list_picsearch .list_pic19 .price{font-size:%?28?%;font-weight:700}.list_picsearch .list_pic19 .sale{color:#999;font-size:%?28?%}.list_picsearch .list_pic19 .btn_buy{font-size:%?24?%;padding:1px %?24?%;border-radius:%?6?%}\r\n\r\n/*文章列表样式2 两列图片*/.list_pic .list_pic2{width:47%;margin:2% 0 0 2%;position:relative;background:#fff;border-radius:5px;overflow:hidden}.list_pic2 .re_box uni-image{height:%?198?%}.list_pic2 .re_box .listVbg{position:absolute;width:100%;height:%?198?%;top:0;margin:0 auto;background:rgba(0,0,0,.3)}.list_pic2 .re_box .listVbg uni-image{width:%?68?%;height:%?68?%;margin:0 auto;margin-top:20%}.list_pic2 .title_box{padding:%?16?% %?14?%}.list_pic2 .title_box .box_desc{font-size:%?22?%;color:#999;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:%?4?% 0}.list_pic2 .title_box uni-text{font-size:%?24?%;color:#999}.list_pic2 .fl_look{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;bottom:0;right:0;margin:0 %?14?% %?16?% 0;font-size:%?24?%;color:#999}.list_pic2 .fl_look .iconfont{font-size:%?26?%}.list_pic .list_pic2 .title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:%?26?%;color:#333}\r\n\r\n/* .list_pic .list_pic2 .title.tc{\n\t\ttext-align: center\n\t}\n\n\t.list_pic .list_pic2 .title.tlb,\n\t.list_pic .list_pic2 .title.tcb{\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\tbottom: 0;\n\t\tbackground: rgba(0, 0, 0, 0.3);\n\t\tcolor: #fff;\n\t}\n\n\t.list_pic .list_pic2 .title.tlb{\n\t\ttext-indent: 20rpx;\n\t\ttext-align: left;\n\t} */\r\n\r\n/*文章列表样式3 单行横排-滑动*/.list_pic .list_pic3{margin:%?20?% %?20?% %?20?% 0;position:relative;width:96%}.list_pic .list_pic3:first-child{margin-left:%?20?%}.list_pic .list_pic3 uni-navigator{overflow:hidden}.list_pic .list_pic3 ._navigator{overflow:hidden}.list_pic .list_pic3 .re_box{width:%?500?%;height:%?280?%;border-radius:%?10?%;overflow:hidden;position:relative}.list_pic .list_pic3 .re_box .re_box_image{width:100%;height:100%}.list_pic .list_pic3 .re_box .title_box{position:absolute;bottom:0;left:0;background:rgba(51,51,51,.6);width:100%}.list_pic .list_pic3 .re_box .title_box .title{color:#f6f5f1;font-size:%?22?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:%?12?%}.list_pic .list_pic3 .listVbg0{position:absolute;left:0;top:0;background:rgba(0,0,0,.3);width:100%;height:100%}.list_pic .list_pic3 .listVbg0 uni-image{width:%?90?%;height:%?90?%;margin:0 auto;margin-top:18%}\r\n\r\n/*文章列表样式3 单行横排-列表*/.list_collect .list_pic19 .title3_1,.list_pic .list_pic3 .title3_1,.list_picrec .list_pic8 .title3_1{font-size:%?28?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#333}.list_collect .list_pic19 .desc1,.list_pic .list_pic3 .desc1,.list_picrec .list_pic8 .desc1{font-size:%?24?%;color:#999;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding:%?4?% 0}.list_collect .list_pic19 .time,.list_pic .list_pic3 .time,.list_picrec .list_pic8 .time{color:#999;font-size:%?24?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.list_collect .list_pic19 .time .iconfont,.list_pic .list_pic3 .time .iconfont,.list_picrec .list_pic8 .time .iconfont{font-size:%?26?%;margin-right:%?4?%}\r\n\r\n/*付费视频按钮*/.listVBtn{position:absolute;border-radius:0 0 %?10?% 0;font-size:%?22?%;padding:%?4?% %?14?%;background:#f4361d;color:#f6f5f1;top:0;left:0}.list_pic1 .listVBtn{font-size:%?26?%;padding:%?4?% %?20?%}.list_pic3 .listVT1{position:absolute;border-radius:0 0 %?10?% 0;font-size:%?22?%;top:0;left:0;padding:%?4?% %?10?%;background:#f4361d;color:#f6f5f1}.list_collect .list_pic19 .listVbg8_1,.list_pic .list_pic3 .listVbg1,.list_picrec .list_pic8 .listVbg8_1{position:absolute;left:0;top:0;background:rgba(0,0,0,.3);width:100%;height:100%;text-align:center}.list_collect .list_pic19 .listVbg8_1 uni-image,.list_pic .list_pic3 .listVbg1 uni-image,.list_picrec .list_pic8 .listVbg8_1 uni-image{width:%?44?%!important;height:%?44?%!important;margin:0 auto;margin-top:20%}\r\n\r\n/* 文章详情——推荐阅读 */.list_picrec{padding-bottom:%?20?%}.title_rec{font-size:%?26?%;color:#333;padding:%?20?%;box-sizing:border-box;border-bottom:%?2?% solid #eee;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.title_rec .iconfont{margin-right:%?16?%}.list_picrec .list_pic8{padding:%?20?% %?20?% 0}.list_picrec .list_pic8 uni-navigator{display:-webkit-box;display:-webkit-flex;display:flex}.list_picrec .list_pic8 ._navigator{display:-webkit-box;display:-webkit-flex;display:flex}.list_picrec .list_pic8 .list8_left{width:%?210?%;height:%?120?%;border-radius:%?10?%;overflow:hidden;position:relative}.list_picrec .list_pic8 .list8_right{width:%?440?%;margin-left:%?20?%}.list_picrec .list_pic8 .list8_left uni-image{width:100%;height:100%}\r\n\r\n/*个人中心-我的收藏列表-商品*/.list_collect{padding:%?20?%}.list_collect .list_pic19{box-sizing:border-box;margin-bottom:%?20?%;border-radius:%?10?%;background:#fff}.list_collect .list_pic19 uni-navigator{display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;padding:%?20?%;box-sizing:border-box}.list_collect .list_pic19 ._navigator{display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;padding:%?20?%;box-sizing:border-box}.list_collect .list_pic19 uni-image{width:%?210?%;height:%?210?%;margin-right:%?20?%;border-radius:%?10?%}.list_collect .list_pic19 .title{font-size:%?28?%;margin:0 0 %?10?%;overflow:hidden;height:%?42?%;color:#434343}.list_collect .list_pic19 .box_right{width:%?440?%}.list_collect .list_pic19 .title uni-text{color:#999;font-size:%?24?%}.list_collect .list_pic19 .desc{height:%?72?%;overflow:hidden;color:#969696;font-size:%?24?%;margin-bottom:%?8?%}.list_collect .list_pic19 .price{font-size:%?28?%;font-weight:700}.list_collect .list_pic19 .sale{color:#999;font-size:%?28?%}.list_collect .list_pic19 .btn_buy{font-size:%?24?%;padding:1px %?24?%;border-radius:%?6?%}\r\n\r\n/* 个人中心-我的收藏列表-文章 */.list_collect .list_pic19 .list8_left{width:%?210?%;height:%?120?%;border-radius:%?10?%;overflow:hidden;position:relative}.list_collect .list_pic19 .list8_right{width:%?440?%;margin-left:%?20?%}.list_collect .list_pic19 .list8_left uni-image{width:100%;height:100%}\r\n\r\n/*列表样式3 纯文字列表*/.list_pic .list_pic4{margin:2%;width:96%}.list_pic .list_pic4 uni-navigator{overflow:hidden;border-bottom:1px solid #f8f8f8}.list_pic .list_pic4 ._navigator{overflow:hidden;border-bottom:1px solid #f8f8f8}\r\n\r\n/* \t.list_pic .list_pic4 .dot {\n\t\twidth: 6rpx;\n\t\theight: 6rpx;\n\t\tbackground: #ccc;\n\t\tfloat: left;\n\t\tmargin: 30rpx 16rpx 0 6rpx;\n\t} */.list_pic .list_pic4 .title{font-size:%?28?%;margin:%?12?% 0 %?15?%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\r\n\r\n/*列表样式4 滚动*/.list_pic_s{width:100%;white-space:nowrap;box-sizing:border-box;display:block;height:auto}.list_pic_s_1{display:inline-block;overflow:hidden;margin:2% 0 2% 2%;max-width:%?600?%;position:relative}.list_pic_s_1 uni-image{width:100%;display:block}.list_pic_s_1_t{display:block;text-overflow:ellipsis;white-space:nowrap;position:absolute;left:0;bottom:0;background:rgba(0,0,0,.3);color:#fff;width:100%;line-height:%?60?%;text-indent:10px}\r\n\r\n/*nav 栏目横排样式2*/.nav_x1,.nav_x2{position:fixed;z-index:999;left:0;top:0;width:100%;height:%?86?%}.nav_x21{position:fixed;z-index:999;left:0;top:%?86?%;width:100%;background-color:rgba(0,0,0,.6);height:%?86?%}.nav_x1 .nav_x_one,.nav_x2 .nav_x_one,.nav_x21 .nav_x_one{width:100%;white-space:nowrap;height:100%}.nav_x1 .nav_xt,.nav_x2 .nav_xt,.nav_x21 .nav_xt{display:inline-block;margin:0 %?20?%;color:#fff;border-bottom:2px solid transparent;padding:%?20?% 0 %?14?%;line-height:%?48?%;height:%?48?%;font-size:%?28?%}.nav_x1 .nav_xt1{color:#adc586;border-bottom:2px solid #adc586}.nav_x2,.nav_x21{background:#fff}.nav_x2 .nav_xt,.nav_x21 .nav_xt{color:#222}.nav_x2 .nav_xt1,.nav_x21 .nav_xt1{color:#adc586;border-bottom:2px solid #adc586}.nav_x_b{height:%?90?%}.nav_x2_b{height:%?86?%}\r\n\r\n/*nav 栏目横排样式3*/.nav_x3{height:%?90?%;text-align:center}.nav_x3 .nav_xt{display:inline-block;width:50%;color:#222;border-bottom:2px solid transparent;padding:%?22?% 0;line-height:%?42?%;font-size:%?28?%}\r\n\r\n/*nav4 非fixed*/.nav_x4{background-color:#fff;height:%?90?%;line-height:%?90?%;position:static}\r\n\r\n/*标题样式1*/.title1{display:block;font-size:%?30?%;font-weight:700}\r\n\r\n/*产品区块汉字标题*/.title1_sub{display:block;font-size:%?24?%;color:#bbb;margin-bottom:%?26?%;font-family:Arial,Helvetica,sans-serif}.title2{line-height:%?80?%;border-bottom:1px dotted #eee;margin:0 2% 2%;font-size:%?30?%;color:#232323;font-weight:700}.title2_line{width:%?8?%;height:%?34?%;float:left;margin:%?24?% %?12?% 0 0}.title2 uni-text{font-size:%?24?%;color:#969696;font-family:Arial,Helvetica,sans-serif;font-weight:400}.title2 .t_more{float:right;font-size:%?24?%;color:#969696;font-weight:400;font-family:Arial,Helvetica,sans-serif}.title3{position:relative;text-align:center;font-size:%?30?%;margin:3% 4%;padding-bottom:3%;border-bottom:%?2?% solid #eee;font-weight:700;color:#232323}.title3 .t_more{position:absolute;right:0;top:%?4?%;font-size:%?22?%;font-weight:400}\r\n\r\n/*内页 标题1*/.content_title{font-size:%?30?%;color:#333;margin:%?10?% %?20?% 0 %?20?%}.content_title_s{font-size:%?24?%;color:#999;margin:%?10?% 0 0 %?20?%}\r\n\r\n/*内页公用*/.content_box{padding:%?20?%;line-height:%?46?%;box-sizing:border-box;overflow:hidden;border-bottom:%?2?% solid #eee}.content_box4{margin:0;line-height:%?46?%}.content_box .p{margin-bottom:%?20?%}.content_box .img{margin:%?20?% auto 0;display:block;width:100%}.more_text{font-size:%?24?%;color:#ddd;line-height:%?60?%;padding-bottom:%?20?%}\r\n\r\n/*表单页面*/.forms_head_con{padding:%?30?% 4% %?20?%;background:#fff;display:none}.forms_head_con.pic{display:block}.form_box{display:block}.form_box uni-input{border:1px solid #eee;margin-bottom:%?20?%;padding:%?4?% 0 %?4?% %?16?%;line-height:%?68?%;height:%?68?%;margin-top:%?10?%;box-sizing:border-box}.inputBtn{display:inline-block;width:20%;font-size:%?24?%;line-height:%?68?%;text-align:center;background:#ff4a49;color:#fff;margin-top:%?10?%}.inputBtn2{background:#4eca33}.form_box uni-picker{margin-bottom:%?20?%;border:1px solid #eee}.form_box .radio-group{overflow:hidden}.form_box .radio-group uni-label{display:block;margin-bottom:%?20?%;float:left}.form_box .radio_box{margin-bottom:%?20?%}.form_box .picker{line-height:%?60?%;height:%?60?%;padding:%?4?% 0 %?4?% %?16?%}.form_box .radio_box .section__title{margin-bottom:%?20?%;padding-bottom:%?16?%;border-bottom:1px solid #eee}.form_box uni-textarea{width:100%;border:1px solid #eee;margin-bottom:%?30?%;padding:%?10?%;box-sizing:border-box;height:%?160?%}.form_box uni-button{padding:0;color:#fff;line-height:%?70?%;font-size:16px;border-radius:3px;margin:%?20?% 0}\r\n\r\n/*表单样式1*/.form_box1 .section__title{margin-bottom:%?16?%}\r\n\r\n/*表单样式2*/.form_box2 .inp_box{border-bottom:1px solid #eee}.form_box2 .section__title{float:left;width:%?146?%;margin:%?20?% 0 0 0}.form_box2 .picker,.form_box2 uni-input{border:none;margin:%?10?% 0 %?4?%}.form_box2 .radio_box .section__title{display:block;width:100%;margin:%?16?% 0 %?26?%;float:none}.form_box2 .textarea_box .section__title{display:block;width:100%;margin:%?16?% 0;float:none;border-bottom:none}.form_box2 .radio_box{margin-bottom:0}.form_box2 uni-picker{margin-bottom:0}\r\n\r\n/*自定义导航*/.nav_box0{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;overflow:hidden}.nav_box0 uni-view{display:block;width:100%}.nav_box0 .nav_one{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box}.nav_box0 .nav_one uni-image{width:60%}.nav_box0 .nav_t1{color:#666;font-size:%?24?%;margin:%?10?% 0 0;line-height:%?44?%}.nav_box0 .nav_t2{width:100%;line-height:%?44?%;font-size:%?24?%;position:absolute;left:0;bottom:0;background:rgba(0,0,0,.3);color:#fff;text-align:center}.nav_box0 .nav_t3{padding:0 %?8?%;border-radius:%?6?%;line-height:%?44?%;font-size:%?24?%;position:absolute;left:%?20?%;top:%?20?%;background:rgba(0,0,0,.3);color:#fff;text-align:center}.nav_box0 .nav_t0{display:none}.nav_box0 .nav_btn{background-color:#fff!important;border-radius:0;border:none;padding:0}.nav_box0 uni-button:after{display:none}\r\n\r\n/*相册底部服务中心*/.server_box_bg{margin-bottom:%?20?%;overflow:hidden;padding-bottom:%?20?%;background:#fff}.server_box_bg{background-size:cover;background-blend-mode:multiply;background-color:rgba(0,0,0,.5)}.server_box{text-align:center}.server_box uni-button{display:inline-block;font-size:14px;width:40%;margin:0 2% %?30?%;border:none;border-radius:3px;color:#fff}.server_box uni-button:after{content:none;width:0;height:0%;position:absolute;top:0;left:0;border:nonee;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:0}.server_box_d{position:fixed;width:100%;bottom:%?40?%;left:0;text-align:center}.server_box_d .btn_d{display:inline-block;font-size:%?24?%;width:20%;margin:0 1% %?30?%;border:none;color:#fff;padding:%?5?% %?5?%}.server_box_d .btn_tel{background:rgba(214,211,162,.78)}.server_box_d .btn_price{background:rgba(214,162,191,.78);position:relative;line-height:2.55555556;border-radius:5px;-webkit-tap-highlight-color:transparent;overflow:hidden}.server_box_d .btn_price:after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid rgba(0,0,0,.2);-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:10px}.server_box_d .btn_chat{background:rgba(183,214,157,.78)}.server_box_d .btn_add{background:rgba(160,198,214,.78)}\r\n\r\n/*两列服务中心*/.serv_box{margin:%?20?% 0;overflow:hidden;padding-bottom:%?20?%;text-align:center;background:#fff}.serv_box.bg{background-size:cover;background-blend-mode:multiply;background-color:rgba(0,0,0,.5)}.serv_box.bg .title1_sub{color:#fff}.serv_box1{background:#fff!important}.serv_box uni-button{display:inline-block;font-size:%?28?%;width:40%;margin:0 2% %?30?%;border:none;border-radius:3px;color:#fff}.serv_box uni-button:after{content:none;width:0;height:0%;position:absolute;top:0;left:0;border:nonee;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:0}.serv_box .c_b_btn1 .btn_tel{background:rgba(214,211,162,.78)}.serv_box .c_b_btn1 .btn_price{background:rgba(214,162,191,.78)}.serv_box .c_b_btn1 .btn_chat{background:rgba(183,214,157,.78)}.serv_box .c_b_btn1 .btn_add{background:rgba(160,198,214,.78)}.serv_box .c_b_btn2 .c_b_b{border:1px solid #fff;box-sizing:border-box;background:none;border-radius:5px}\r\n\r\n/*订单列表公用*/.row_box{border-bottom:1px solid #eee;margin:0 %?20?%;margin-bottom:%?-2?%}.row_box uni-view{padding:%?20?% 0}.row_box .row_bt{float:left;margin-right:%?10?%}.row_box .row_bc{float:left}.row_box uni-text{color:#f90;margin-right:%?10?%}.row_box uni-switch{float:right}\r\n\r\n/*评论功能*/.comment{background:#fff;font-size:%?26?%;border-radius:%?10?%;overflow:hidden}.comment_t{margin:2% 4%}.comment_l{padding:0 %?20?%}.comm_o_l{float:left;width:12%}.comm_o_l uni-image{display:block;margin-top:%?12?%;width:%?60?%;height:%?60?%;border-radius:%?60?%;border:%?2?% solid #eee}.comm_o_r{float:left;width:88%}.comm_o_r_n{color:#333;line-height:%?50?%;font-size:%?28?%}.comm_o_r_n span{color:#989ba3;float:right}.comm_o_r_n span uni-image{width:%?34?%;height:%?34?%;margin:%?8?% %?8?% 0 0;display:block;float:left}.comm_o_r_time{color:#999;font-size:%?24?%}.comm_o_r_t{font-size:%?24?%;color:#999;margin:%?4?% 0 %?20?%;line-height:%?34?%}.comment_mt{margin:%?10?% 0 %?20?% %?5?%}.comment_texta{background:#fff;padding:%?10?%;height:%?106?%;display:block;border:%?4?% solid #eee;width:96%;border-radius:%?6?%}.comment_btn{float:right;width:%?140?%;height:%?60?%;background:#f4361d;line-height:%?60?%;color:#fff;border-radius:%?10?%;text-align:center;margin:%?20?% 0}.placeholder{color:#dadada}.notice_no{padding:%?20?% 0}\r\n\r\n/*提示页面*/.pageNotice{display:block;margin:%?60?% auto;width:%?100?%!important;height:%?100?%}.pageNoticeT{text-align:center;color:#ccc;margin-bottom:%?60?%;font-size:%?24?%}.notice_red{color:#ff4a49}.shareBox{position:absolute;left:0;top:0;width:100%;height:100%;z-index:9999}.shareBox uni-image{position:fixed;top:%?-100?%;left:0;width:100%}.shareText{position:fixed;top:%?500?%;left:0;color:#ff5237;width:100%;text-align:center;padding:0 %?150?%;box-sizing:border-box;font-size:%?36?%}.shareText2{font-size:%?26?%}.shareBtn{position:fixed;left:0;color:#ff3706;text-align:center;width:100%;top:%?625?%;font-size:%?32?%}.shareClo{position:fixed;right:%?106?%;top:%?358?%;width:%?50?%;height:%?50?%}\r\n\r\n/*个人中心*/.usercTop{width:100%;height:%?180?%;font-size:0;background-size:100%}.uAvatar{width:%?120?%;height:%?120?%;border-radius:%?120?%;border:2px solid #fff;float:left;margin-left:%?40?%;margin-top:%?16?%}.uAvatar uni-image{width:100%;height:100%;display:block}.mingc{float:left;width:%?550?%;font-size:%?32?%;margin:%?16?% 0 0 %?30?%;vertical-align:top;height:%?60?%;line-height:%?60?%;overflow:visible}.mingc2{font-size:%?26?%}.mingc2 uni-view{float:left;margin-right:%?20?%;height:%?40?%;line-height:%?40?%;font-size:%?26?%}.chongzs{font-size:%?22?%;padding:%?0?% %?12?%;border-radius:%?6?%;position:relative;top:%?-4?%;float:left}.mask{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000;opacity:.4;z-index:890}.userTit{margin:%?500?% auto %?50?%;color:#fff;font-size:%?24?%;line-height:%?30?%;text-align:center}.userBtn{margin:0 auto;background:#08c303;color:#fff;width:%?220?%;height:%?70?%;line-height:%?70?%;font-size:%?28?%}\r\n\r\n/**分享层**/.share_ceng{position:fixed;left:0;bottom:%?0?%;width:100%;z-index:10000;height:%?160?%}.share_con{position:absolute;left:0;bottom:0;width:100%;background:#fff;height:%?120?%;line-height:%?120?%;border-radius:%?20?% %?20?% 0 0}.share_con_box{font-size:%?28?%;width:50%;height:%?68?%;line-height:%?68?%;overflow:hidden;color:#333;padding:%?26?% 0}.share_con>uni-view>uni-button{background:none;margin:0;padding:0;border:0;box-sizing:none;line-height:%?80?%;font-size:%?28?%;text-align:left}.share_con>uni-view>uni-button:after{border:none}.share_con uni-image{width:%?42?%;height:%?42?%}.pro_img{width:%?218?%;height:%?220?%;border-radius:%?10?%;border:%?4?% solid #ebeaef;margin-top:%?-100?%}\r\n\r\n/*分享按钮*/.shareBtnArt{position:fixed;z-index:9999;bottom:%?240?%;right:%?20?%;width:%?100?%;height:%?100?%;border-radius:%?100?%;opacity:.8}.shareBtnArt uni-image{display:block;width:%?46?%;height:%?46?%;margin:%?14?% auto %?6?%}.shareBtnArt uni-text{font-size:%?18?%;color:#fff;display:block;text-align:center}.shareBtnHome{background:#999;top:%?20?%;left:%?20?%;width:%?80?%;height:%?60?%;border-radius:%?6?%}.shareBtnHome uni-image{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transform-origin:center center;transform-origin:center center;margin:%?10?% 0 0 %?24?%;width:%?40?%;height:%?40?%}\r\n\r\n/*推荐店铺*/.list_picStore{width:%?213?%;float:left;margin:%?30?% 0 0 %?30?%;position:relative}.list_picStore uni-image{width:%?209?%;height:%?209?%;border-radius:%?8?%;border:%?2?% solid #eee}.list_picStore .title{line-height:%?50?%;height:%?50?%;overflow:hidden}.storeListTop{margin:%?30?% %?20?%;text-align:center;border-bottom:%?2?% solid #f8f8f8;margin-bottom:%?30?%;padding-bottom:%?20?%}.storeListTop1{width:33.3%;float:left}.storeListTop1 i{border-color:#333;display:inline-block;position:relative;top:%?-6?%;left:%?6?%;width:0;height:0;line-height:0;border-bottom:0;border-left:%?10?% solid transparent;border-right:%?10?% solid transparent;border-top:%?10?% solid #a7a7a7}.storeListTop1 i.on{border-left:%?10?% solid transparent;border-right:%?10?% solid transparent}.multiCateSub{background:rgba(0,0,0,.7);text-align:center;padding:0 2%;position:absolute;left:0;width:100%;height:auto;top:%?90?%;z-index:999;box-sizing:border-box;padding-top:%?26?%}\r\n\r\n/*店铺列表*/.storeCity{position:fixed;width:100%;height:%?80?%;line-height:%?80?%;top:0;box-sizing:border-box;z-index:1000;padding:0 2%;background-color:#fff}.storeCityChange{color:#bbb;display:inline}.storeCityR{float:right}.storeCityR span{color:#f38539}.storeList{margin:%?20?%;padding-bottom:%?20?%;overflow:hidden;margin-bottom:%?20?%;border-bottom:%?2?% solid #fafafa}.storeList uni-navigator{overflow:hidden;display:block}.storeListThumb{float:left}.storeListThumb uni-image{width:%?142?%;height:%?142?%;display:block;border-radius:%?8?%;border:%?2?% solid #eee}.storeListTitle{float:left;width:%?380?%;margin-left:%?30?%;padding-top:%?2?%}.storeListTitle1{font-size:%?28?%;color:#434343;padding-left:%?8?%}.storeListTitle2{font-size:%?24?%;color:#939393;margin-top:%?10?%;overflow:hidden}.storeListTitle2.flex-row{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.storeListTitle2 .iconfont{font-size:%?22?%;color:#939393;margin-right:%?8?%}.storeListTitle2 .stores_dizhi{white-space:nowrap;text-overflow:ellipsis;width:100%;overflow:hidden}.storeListTitle2 uni-image{width:%?28?%;height:%?28?%;float:left;opacity:.6;margin:%?5?% %?6?% 0 0}.storeListR{float:right;vertical-align:top;text-align:center;width:%?144?%;padding-top:%?10?%}.storeListEnter{float:right;font-size:%?26?%;padding:%?4?% %?12?%;border-radius:%?6?%;margin-bottom:%?20?%;color:#fff}.storeListLocal{font-size:%?22?%;padding-top:%?8?%;background:#f6f6f6;color:#939393;border-radius:%?6?%;padding:%?4?% %?10?%;float:right}\r\n\r\n/*公告*/.gonggao{color:#fff;padding:%?6?% %?30?%;line-height:%?50?%;height:%?50?%;overflow:hidden;white-space:nowrap}.gonggao .iconfont{float:left;margin-right:%?20?%}.gonggaoCon{width:%?630?%;float:left;overflow:hidden;text-overflow:ellipsis}\r\n\r\n/*店铺列表*/\r\n\r\n/*总菜单容器*/.menu{display:block}\r\n\r\n/*一级菜单*/.menu dt{font-size:%?30?%;float:left;width:33%;height:%?76?%;border-right:%?2?% solid #d2d2d2;border-bottom:%?2?% solid #d2d2d2;text-align:center;background-color:#f4f4f4;color:#5a5a5a;line-height:38px}\r\n\r\n/*二级菜单外部容器样式*/.menu dd{width:100%}\r\n\r\n/*二级菜单普通样式*/.menu li{font-size:%?28?%;line-height:%?70?%;height:%?70?%;display:block;padding-left:%?66?%;border-bottom:%?2?% solid #f8f8f8}.btn{color:#fff;width:40%;font-size:%?26?%;padding:%?20?% 0;margin:0 auto;text-align:center;border-radius:%?6?%}.zhezhao{position:fixed;width:%?750?%;height:100%;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.3);overflow:hidden;z-index:99}.zhezhao2{position:fixed;width:%?750?%;height:100%;top:44px;left:0;bottom:0;right:0;background:rgba(0,0,0,.3);overflow:hidden;z-index:99}.iconfont1{display:inline-block;font-size:%?26?%;margin-right:%?6?%;color:#c9c9c9}\r\n\r\n/*DIY版本表单*/.show_page_feedback{overflow:hidden}.formStyle .formIpt{height:%?80?%;line-height:%?80?%;position:relative}.formStyle .show_1{color:red;float:left;margin:%?4?% 0 0;width:%?20?%;text-align:center}.formStyle .formAutoH{overflow:hidden}.formStyle .formIptT{font-size:%?28?%;color:#838383;line-height:%?34?%;padding:%?20?% 0;overflow:visible}.formStyle1 .formIptT,.formStyle2 .formIptT,.formStyle3 .formIptT{float:left;margin-right:%?20?%;width:%?160?%}.formStyle .formIptC{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:0;font-size:%?28?%;border:none;line-height:%?80?%;height:%?80?%;padding-left:%?10?%}.formStyle .formIptBtn{position:absolute;right:%?10?%;top:%?18?%;z-index:999;color:#fff;font-size:%?24?%;padding:0 %?10?%;border-radius:%?6?%;height:%?50?%;line-height:%?50?%}.formStyle .formAutoH uni-textarea{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?140?%;height:%?200?%;resize:none;font-size:%?28?%;box-sizing:border-box;padding:%?10?%}.formStyle uni-picker{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?180?%}.formStyle .formImgCon{-webkit-box-flex:1;-webkit-flex:1;flex:1;margin-left:%?30?%;margin:%?10?% 0;padding-left:%?10?%}.formStyle .formImgList{display:inline-block;position:relative;overflow:visible}.formStyle .formImgOne{width:%?120?%;height:%?120?%;position:relative}.formStyle .formImgOne uni-view{position:absolute;right:0;top:0;font-size:%?22?%;background:red;color:#fff;padding:%?2?% %?4?%}.formStyle .formImgAdd{display:inline-block;width:%?120?%;height:%?120?%}.formStyle .formImgDel{width:%?30?%;height:%?30?%;position:absolute;right:%?10?%;top:%?-10?%}.formStyle .formImgDel uni-image{width:100%;height:100%}.formStyle .radio-group{height:auto;padding:0;margin:0;line-height:%?48?%;overflow:hidden;padding-left:%?10?%}.formStyle .radio-group uni-label{margin:%?10?% %?20?% %?10?% 0;float:left;font-size:%?28?%}.formStyle uni-input,.picker{margin:0;border:0;font-size:%?28?%;height:%?80?%;line-height:%?80?%;padding:0}\r\n\r\n/*表单样式1*/.formStyle1 .formAutoH,.formStyle1 .formIpt{border-bottom:%?2?% solid #eee}.formStyle2 .formIpt2 uni-input,.formStyle2 uni-picker,.formStyle2 uni-textarea{border-width:%?2?%;border-style:solid;border-radius:%?6?%}.formStyle3 .formAutoH3,.formStyle3 .formIpt,.formStyle3 .formIpt3{background:#f8f8f8;padding:0 %?10?%;border-radius:%?40?%;border-width:%?2?%;border-style:solid}.formStyle3 .formIpt .formIptC,.formStyle3 .radio-group,.formStyle3 uni-picker,.formStyle3 uni-textarea{background:transparent!important}.formStyle2 uni-textarea,.formStyle3 uni-textarea{padding-top:%?20?%!important}.formStyle4 .formIptT{display:block;line-height:%?44?%;padding:%?15?% %?10?%}.formStyle4 .formIptC{border-width:%?2?%;border-style:solid;border-radius:%?6?%}.formStyle4 uni-picker{margin-left:0;border-width:%?2?%;border-style:solid;border-radius:%?6?%}.formStyle4 .formIptBtn{top:%?92?%}.formAutoH4 uni-textarea{width:100%!important;border-width:%?2?%;border-style:solid;border-radius:%?6?%}.placeholderText{color:#aaa}\r\n\r\n/*拍卖插件css*/.hbj{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.hbj2{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;position:relative}.flex1{-webkit-box-flex:1;-webkit-flex:1;flex:1}.text-hide{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}\r\n\r\n/*新版发货自提切换*/.radio_sendpro{text-align:center;padding:%?20?% 0;background:#fff;margin-bottom:%?20?%}.radio_sendpro uni-label{margin:0 %?20?%}\r\n\r\n/*新版订单页统一*/.order_nav{padding:0 %?30?%;width:%?690?%;white-space:nowrap;background-color:#fff;font-size:0}.order_nav_single{padding:%?20?% 0;font-size:%?24?%;color:#434343;margin-right:%?40?%;display:inline-block;border-bottom:%?4?% solid #fff}.order_nav_single:last-child{margin-right:0}.order_nav_single_on{color:#f4361d;border-bottom:%?4?% solid #f4361d}.order_list_contentbox{margin-top:%?20?%}.order_list_single{margin-bottom:%?20?%;background-color:#fff;border-radius:%?10?%;padding:%?20?%;border-radius:%?10?%}.order_list_head{border-bottom:%?2?% solid #eee;padding-bottom:%?20?%}.order_list_head_left{font-size:%?24?%;color:#999}.order_list_head_right{color:#f4361d;font-size:%?24?%}.order_list_productbox{padding:%?20?% 0}.product_img{width:%?176?%;height:%?176?%;display:block;margin-right:%?28?%;position:relative;border-radius:%?10?%}.order_list_product_center{width:%?360?%}.order_product_title{font-size:%?26?%;color:#333}.text_hide{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.order_product_des{font-size:%?22?%;color:#969696;margin-top:%?16?%}.order_product_price{font-size:%?24?%;color:#333;text-align:right}.order_product_price uni-text{font-size:%?22?%}.order_product_count{font-size:%?24?%;color:#999;margin-top:%?4?%;text-align:right}.order_pro_tuikuan{background:rgba(255,140,37,.1);color:#ff8c25;font-size:%?22?%;padding:%?2?% %?8?%;border-radius:%?6?%;margin-top:%?10?%}.order_list_product{margin-bottom:%?30?%}.order_list_productbox .order_list_product:last-child{margin-bottom:0}.order_list_pricebox{height:auto;border-top:%?2?% solid #eee;padding-top:%?20?%}.order_list_msg{height:%?80?%;line-height:%?80?%;border-top:%?2?% solid #eee;padding:0 %?30?%;font-size:%?26?%}.order_list_msg uni-text{color:#f4361d}.order_list_price_left{font-size:%?24?%;color:#434343;margin-bottom:%?10?%;text-align:right}.order_payMoney{color:#f4361d}.order_payyunfei{color:#969696;font-size:%?22?%}.order_list_price_left uni-view{font-family:Arial,Helvetica,sans-serif;color:#f4361d;font-size:%?30?%;display:inline-block}.allbtn_right{text-align:right}.order_list_btn{width:%?160?%;height:%?46?%;border:%?2?% solid #c1c1c1;color:#333;font-size:%?24?%;text-align:center;line-height:%?46?%;border-radius:%?46?%;margin-left:%?20?%;display:inline-block}.order_list_price_btn{width:%?160?%;height:%?46?%;border:%?2?% solid #f4361d;color:#f4361d;font-size:%?24?%;text-align:center;line-height:%?46?%;border-radius:%?46?%;margin-left:%?20?%;display:inline-block}.order_product_title2{font-size:%?28?%;color:#232323;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.right_picker{width:%?160?%;text-align:right}\r\n\r\n/*180915新增按钮及表单状态*/.isChange{background:#f45351;color:#fff!important}.orderBtn{background:#fff;margin:0;box-sizing:none;line-height:%?40?%;font-size:%?24?%;padding:%?2?% %?12?%;border:%?2?% solid #ccc;border-radius:%?6?%;float:left;margin-left:%?40?%}.orderBtn:after{border:none}.colorDefault{border-color:#999;color:#999}.colorWarning{border-color:#efac50;color:#efac50}.colorSuccess{border-color:#5ab75d;color:#5ab75d}.colorDanger{border-color:#d8524e;color:#d8524e}.placeholderstyle{color:#bababa}.color-969696{color:#969696}.ff-arail{font-family:Arial,Helvetica,sans-serif}\r\n\r\n/*用来包裹所有的小圆点  */.dots{padding:%?10?% %?15?%;position:absolute;margin:auto;left:0;right:0;bottom:%?20?%;text-align:center;background:rgba(0,0,0,.5);border-radius:%?30?%}\r\n\r\n/*未选中时的小圆点样式 */.dot{width:%?14?%;height:%?14?%;border-radius:50%;margin-right:%?15?%;background-color:#fff}.dot:last-of-type{margin-right:0}\r\n\r\n/*选中以后的小圆点样式  */.dots .active{width:%?14?%;height:%?14?%;background-color:#c5c4c3}.wrap{height:auto;position:relative}\r\n\r\n/* 秒杀等旧版商品列表页，pages/listPro/listPro */\r\n\r\n/*二三列产品*/.list_pic .list_pic12{background:#fff;padding-bottom:%?16?%}.list_pic .list_pic13{background:#fff;padding-bottom:%?10?%}.list_pic .list_pic12 .btn_buy,.list_pic .list_pic13 .btn_buy{float:right;font-size:%?22?%;padding:0 %?16?%;border-radius:%?6?%;margin-right:%?10?%}.list_pic .list_pic12 uni-text,.list_pic .list_pic13 uni-text{margin-left:%?10?%;font-size:%?26?%;font-family:Arial,Helvetica,sans-serif;color:#969696}.list_pic .list_pic12{width:47%;margin:2% 0 0 2%;position:relative;border:1px solid #eee;box-sizing:border-box}.list_pic .list_pic12 .title{height:%?50?%;line-height:%?50?%;overflow:hidden;font-size:%?30?%;padding:0 %?10?%;color:#434343}.list_pic .list_pic13 .title{height:%?72?%;overflow:hidden;font-size:%?26?%;padding:0 %?10?%}.list_pic .list_pic13{width:30.56%;float:left;margin:2% 0 0 2%;position:relative}.list_pic .list_pic14{width:22.5%;float:left;margin:2% 0 0 2%;position:relative;background:#fff}.list_pic .list_pic15{width:17.6%;float:left;margin:2% 0 0 2%;position:relative;background:#fff}.list_pic .list_pic14 .title,.list_pic .list_pic15 .title{font-size:%?22?%;height:%?62?%;overflow:hidden}.list_pic .list_pic14 .btn_buy,.list_pic .list_pic15 .btn_buy{display:none}.list_pic .list_pic14 uni-text,.list_pic .list_pic15 uni-text{display:block;text-align:center;font-size:%?24?%;text-indent:%?-20?%}\r\n\r\n/* 其他商品 产品带介绍 */.list_pic .list_pic19{background:#fff;width:96%}.list_pic .list_pic19{padding:1%;box-sizing:border-box;margin:%?10?% auto 0}.list_pic .list_pic19 uni-navigator{overflow:hidden}.list_pic .list_pic19 uni-image{float:left;width:%?240?%;height:%?180?%;margin-right:%?20?%}.list_pic .list_pic19 .title{font-size:%?28?%;margin:0 0 %?10?%;overflow:hidden;height:%?42?%;color:#434343}.list_pic .list_pic19 .title uni-text{color:#999;font-size:%?24?%}.list_pic .list_pic19 .desc{height:%?72?%;overflow:hidden;color:#969696;font-size:%?24?%;margin-bottom:%?15?%}.list_pic .list_pic19 .price{float:left;font-size:%?28?%;font-weight:700}.list_pic .list_pic19 .sale{float:left;margin-left:%?30?%;color:#999;font-size:%?28?%}.list_pic .list_pic19 .btn_buy{float:right;font-size:%?24?%;padding:1px %?24?%;border-radius:%?6?%;margin-right:%?10?%}body.?%PAGE?%{background:#f6f6f6}', ""])
    },
    8489: function(e, n, o) {
        n = e.exports = o("2350")(!1), n.push([e.i, '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.zhezhao[data-v-706b1e6d]{position:fixed;width:%?750?%;height:100%;top:0;left:0;background:rgba(0,0,0,.3);overflow:hidden;z-index:999}\n.t_w[data-v-706b1e6d]{position:relative;z-index:100;overflow:visible;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.tanchu_view[data-v-706b1e6d]{position:relative;width:%?588?%;margin:auto;overflow:hidden!important;background-color:#fff;border-radius:%?10?%}.tanchu_view uni-text[data-v-706b1e6d]{display:block}.tanchu_view>uni-text[data-v-706b1e6d]{font-size:%?36?%;font-weight:800;color:#434343;height:%?104?%;line-height:%?104?%;text-align:center;border-bottom:1px solid #e5e5e5}.tanchu_view>uni-view[data-v-706b1e6d]{width:%?504?%;height:%?82?%;line-height:%?82?%;overflow:hidden;border-radius:%?10?%;background-color:#f6f6f6}.tanchu_view .tanchu_close[data-v-706b1e6d]{position:absolute;top:-15px;right:10px;font-weight:400;border:0}.tanchu_view uni-input[data-v-706b1e6d]{width:%?504?%;border:0;font-size:%?28?%;padding-left:%?24?%;box-sizing:border-box;background-color:#f6f6f6}uni-input[data-v-706b1e6d]:focus{box-shadow:#fff;outline:none;border:0;background-color:#f6f6f6}.yanzheng[data-v-706b1e6d]{width:100%;height:%?82?%;line-height:%?82?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin:%?20?% auto %?30?%}.yanzheng[data-v-706b1e6d]:after{content:"";display:block;clear:both}uni-button.btn_submit[data-v-706b1e6d]{width:%?504?%;height:%?84?%;line-height:%?90?%;color:#fff;border:none;border-radius:%?10?%;font-size:%?30?%;margin:0 auto %?38?%}uni-button[data-v-706b1e6d]:after{border:none}.color_yes[data-v-706b1e6d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;height:%?82?%;line-height:%?82?%;float:right;display:block;color:#10d1d1;font-size:%?30?%;border:none;background-color:#fff;margin-top:%?24?%}.color_no[data-v-706b1e6d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:right;height:%?82?%;line-height:%?82?%;float:right;display:block;color:grey;font-size:%?30?%;border:none;background-color:#fff;margin-top:%?44?%}uni-button.login[data-v-706b1e6d]{font-size:%?28?%;height:%?84?%;background:#fff;line-height:%?84?%}uni-button.login[data-v-706b1e6d]:after{border:0}', ""])
    },
    "8fa2": function(e, n, o) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = {
            pages: {
                "pages/index/index": {
                    navigationBarTitleText: "首页"
                },
                "pages/usercenter/usercenter": {
                    navigationBarTitleText: "个人中心"
                },
                "pages/main_shop_order/main_shop_order": {
                    navigationBarTitleText: "我的订单"
                },
                "pages/order_more_list/order_more_list": {
                    navigationBarTitleText: "我的订单"
                },
                "pages/orderDetails/orderDetails": {
                    navigationBarTitleText: "订单详情"
                },
                "pages/orderDetail/orderDetail": {
                    navigationBarTitleText: "订单详情"
                },
                "pages/applyAfterSales/applyAfterSales": {
                    navigationBarTitleText: "申请售后",
                    enablePullDownRefresh: !1
                },
                "pages/orderAftersale_list/orderAftersale_list": {
                    navigationBarTitleText: "售后订单"
                },
                "pages/orderAftersale/orderAftersale": {
                    navigationBarTitleText: "售后详情"
                },
                "pages/address/address": {
                    navigationBarTitleText: "地址列表"
                },
                "pages/showProMore/showProMore": {
                    navigationStyle: "custom"
                },
                "pages/order_down/order_down": {
                    navigationBarTitleText: "商品订单",
                    enablePullDownRefresh: !1
                },
                "pages/chooseStore/chooseStore": {
                    navigationBarTitleText: "门店列表"
                },
                "pages/collect/collect": {
                    navigationBarTitleText: "我的收藏"
                },
                "pages/mycoupon/mycoupon": {
                    navigationBarTitleText: "我的优惠券"
                },
                "pages/coupon/coupon": {
                    navigationBarTitleText: "领取优惠券"
                },
                "pages/aliH5pay/aliH5pay": {
                    navigationBarTitleText: "支付宝支付"
                },
                "pages/wxH5pay/wxH5pay": {
                    navigationBarTitleText: "微信支付"
                },
                "pages/gwc/gwc": {
                    navigationBarTitleText: "购物车"
                },
                "pages/showArt/showArt": {
                    navigationBarTitleText: "文章详情页"
                },
                "pages/order_art/order_art": {
                    navigationBarTitleText: "文章付费订单"
                },
                "pages/recharge/recharge": {
                    navigationBarTitleText: "账户充值"
                },
                "pages/showPic/showPic": {
                    navigationStyle: "custom"
                },
                "pages/showPiclist/showPiclist": {
                    navigationBarTitleText: "组图"
                },
                "pages/listPic/listPic": {},
                "pages/search/search": {},
                "pages/diypage/diypage": {
                    navigationBarTitleText: "DIY页面"
                },
                "pages/logistics_state/logistics_state": {
                    navigationBarTitleText: "物流详情"
                },
                "pages/logistics_information/logistics_information": {
                    navigationBarTitleText: "物流信息"
                },
                "pages/webpage/webpage": {
                    navigationBarTitleText: "外部网页"
                },
                "pages/shoppay/shoppay": {
                    navigationBarTitleText: "店内支付"
                },
                "pages/scorelist/scorelist": {},
                "pages/store/store": {},
                "pages/switchcity/switchcity": {
                    path: "pages/switchcity/switchcity",
                    style: {
                        navigationBarTitleText: "切换城市"
                    }
                },
                "pages/equity_show/equity_show": {},
                "pages/open1/open1": {},
                "pages/register/register": {},
                "pages/form_list/form_list": {},
                "pages/formcon/formcon": {},
                "pages/catelist/catelist": {},
                "pages/checkPro/checkPro": {
                    navigationBarTitleText: "商品筛选"
                },
                "pagesFlashSale/showPro/showPro": {
                    navigationStyle: "custom"
                },
                "pagesFlashSale/order_dan/order_dan": {
                    navigationBarTitleText: "秒杀下单"
                },
                "pagesFlashSale/orderlist_dan/orderlist_dan": {
                    navigationBarTitleText: "秒杀订单列表"
                },
                "pagesFlashSale/orderDetail_dan/orderDetail_dan": {
                    navigationBarTitleText: "秒杀订单列表"
                },
                "pagesPt/products/products": {
                    navigationStyle: "custom"
                },
                "pagesPt/order/order": {
                    navigationBarTitleText: "下单"
                },
                "pagesPt/pt/pt": {
                    navigationBarTitleText: "拼团"
                },
                "pagesPt/orderlist/orderlist": {
                    navigationBarTitleText: "拼团"
                },
                "pagesPt/index/index": {
                    navigationBarTitleText: "拼团首页"
                },
                "pagesReserve/orderList/orderList": {
                    navigationBarTitleText: "预约预定订单列表"
                },
                "pagesReserve/proBuy/proBuy": {
                    navigationBarTitleText: "预约预定订单下单",
                    enablePullDownRefresh: !1
                },
                "pagesReserve/proDetail/proDetail": {
                    navigationBarTitleText: "预约预定商品详情"
                },
                "pagesReserve/appointPage/appointPage": {
                    navigationBarTitleText: ""
                },
                "pagesReserve/orderDetail/orderDetail": {
                    navigationBarTitleText: ""
                },
                "pagesSign/index/index": {
                    navigationBarTitleText: "积分签到页"
                },
                "pagesSign/new/new": {
                    navigationBarTitleText: "最新签到"
                },
                "pagesSign/ranking/ranking": {
                    navigationBarTitleText: "签到排行"
                },
                "pagesExchange/list/list": {
                    navigationBarTitleText: "积分商城"
                },
                "pagesExchange/show/show": {
                    navigationBarTitleText: "积分商品详情"
                },
                "pagesExchange/order/order": {
                    navigationBarTitleText: "积分订单列表页"
                },
                "pagesCards/card_info/card_info": {
                    navigationBarTitleText: "名片页"
                },
                "pagesCards/card_list/card_list": {
                    navigationBarTitleText: "名片列表页",
                    enablePullDownRefresh: !1
                },
                "pagesShake/index/index": {
                    navigationBarTitleText: "摇一摇抽奖"
                },
                "pagesShake/integral_collect/integral_collect": {
                    navigationBarTitleText: "获取积分"
                },
                "pagesShake/prize/prize": {
                    navigationBarTitleText: ""
                },
                "pagesShake/win_prize/win_prize": {
                    navigationBarTitleText: ""
                },
                "pagesFood/food/food": {
                    navigationBarTitleText: ""
                },
                "pagesFood/food_my/food_my": {
                    navigationBarTitleText: "我的餐饮订单"
                },
                "pagesFood/food_order/food_order": {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                },
                "pagesFood/food_detail/food_detail": {
                    navigationBarTitleText: ""
                },
                "pagesBargain/bargain/bargain": {
                    navigationBarTitleText: ""
                },
                "pagesBargain/bargain_activity/bargain_activity": {
                    navigationBarTitleText: ""
                },
                "pagesBargain/bargain_order/bargain_order": {
                    navigationBarTitleText: ""
                },
                "pagesBargain/bargain_pro/bargain_pro": {
                    navigationStyle: "custom"
                },
                "pagesBargain/my_bargain/my_bargain": {
                    navigationBarTitleText: ""
                },
                "pagesBargain/orderDetail/orderDetail": {
                    navigationBarTitleText: ""
                },
                "pagesBargain/orderlist/orderlist": {
                    navigationBarTitleText: ""
                },
                "pagesPluginForum/collect/collect": {
                    navigationBarTitleText: ""
                },
                "pagesPluginForum/forum/forum": {
                    navigationBarTitleText: ""
                },
                "pagesPluginForum/forum_page/forum_page": {
                    navigationBarTitleText: ""
                },
                "pagesPluginForum/index/index": {
                    navigationBarTitleText: ""
                },
                "pagesPluginForum/release/release": {
                    navigationBarTitleText: "",
                    enablePullDownRefresh: !1
                },
                "pagesPluginForum/set_top/set_top": {
                    navigationBarTitleText: ""
                },
                "pagesPluginShop/goods_buy/goods_buy": {
                    navigationBarTitleText: "多商户订单提交",
                    enablePullDownRefresh: !1
                },
                "pagesPluginShop/goods_detail/goods_detail": {
                    navigationBarTitleText: "多商户商品"
                },
                "pagesPluginShop/goods_list/goods_list": {
                    navigationBarTitleText: ""
                },
                "pagesPluginShop/list/list": {
                    navigationBarTitleText: ""
                },
                "pagesPluginShop/manage_gotixian/manage_gotixian": {
                    navigationBarTitleText: "提现",
                    enablePullDownRefresh: !1
                },
                "pagesPluginShop/manage_index/manage_index": {
                    navigationBarTitleText: "商铺管理"
                },
                "pagesPluginShop/manage_order/manage_order": {
                    navigationBarTitleText: ""
                },
                "pagesPluginShop/manage_pro/manage_pro": {
                    navigationBarTitleText: "添加商品"
                },
                "pagesPluginShop/manage_prolist/manage_prolist": {
                    navigationBarTitleText: "商品管理"
                },
                "pagesPluginShop/manage_shop/manage_shop": {
                    navigationBarTitleText: "商铺管理",
                    enablePullDownRefresh: !1
                },
                "pagesPluginShop/manage_szjl/manage_szjl": {
                    navigationBarTitleText: "提现记录"
                },
                "pagesPluginShop/manage_tixian/manage_tixian": {
                    navigationBarTitleText: "提现管理"
                },
                "pagesPluginShop/manage_txjl/manage_txjl": {
                    navigationBarTitleText: "提现记录"
                },
                "pagesPluginShop/register/register": {
                    navigationBarTitleText: "商户入驻"
                },
                "pagesPluginShop/shop/shop": {
                    navigationBarTitleText: "多商户店铺"
                },
                "pagesPluginSupply/collect/collect": {
                    navigationBarTitleText: "我的"
                },
                "pagesPluginSupply/page/page": {
                    navigationBarTitleText: "信息详情"
                },
                "pagesPluginSupply/release/release": {
                    navigationBarTitleText: "供求发布",
                    enablePullDownRefresh: !1
                },
                "pagesPluginSupply/set_top/set_top": {
                    navigationBarTitleText: "信息置顶"
                },
                "pagesPluginSupply/supply/supply": {
                    navigationBarTitleText: "供求列表"
                },
                "pagesExternal/jdGoods/jdGoods": {
                    navigationBarTitleText: "京东好券"
                },
                "pagesExternal/pddGoods/pddGoods": {
                    navigationBarTitleText: "多多精选"
                },
                "pagesActive/active_info/active_info": {
                    navigationBarTitleText: "活动详情"
                },
                "pagesActive/apply/apply": {
                    navigationBarTitleText: ""
                },
                "pagesActive/apply_collect/apply_collect": {
                    navigationBarTitleText: "活动报名"
                },
                "pagesActive/apply_list/apply_list": {
                    navigationBarTitleText: "申请列表"
                },
                "pagesActive/index/index": {
                    navigationBarTitleText: "活动列表"
                },
                "pagesFenxiao/fenxiao_account/fenxiao_account": {
                    navigationBarTitleText: "我的账户"
                },
                "pagesFenxiao/fenxiao_apply/fenxiao_apply": {
                    navigationBarTitleText: ""
                },
                "pagesFenxiao/fenxiao_center/fenxiao_center": {
                    navigationBarTitleText: "分销中心"
                },
                "pagesFenxiao/fenxiao_order/fenxiao_order": {
                    navigationBarTitleText: "分销订单"
                },
                "pagesFenxiao/fenxiao_s/fenxiao_s": {
                    navigationBarTitleText: ""
                },
                "pagesFenxiao/fenxiao_team/fenxiao_team": {
                    navigationBarTitleText: "我的团队"
                },
                "pagesFenxiao/fenxiao_tixian/fenxiao_tixian": {
                    navigationBarTitleText: "我要提现"
                },
                "pagesFenxiao/fenxiao_tixian_do/fenxiao_tixian_do": {
                    navigationBarTitleText: "提现记录"
                },
                "pagesOther/evaluate/evaluate": {
                    navigationBarTitleText: "评价"
                },
                "pagesOther/evaluate_list/evaluate_list": {
                    navigationBarTitleText: "评价列表"
                },
                "pagesOther/evaluate_detail/evaluate_detail": {
                    navigationBarTitleText: "评价详情"
                },
                "pagesOther/evaluate_pro/evaluate_pro": {
                    navigationBarTitleText: "评价"
                }
            },
            globalStyle: {
                navigationBarTextStyle: "black",
                navigationBarTitleText: "",
                navigationBarBackgroundColor: "#F8F8F8",
                backgroundColor: "#F8F8F8",
                enablePullDownRefresh: !0
            }
        };
        n.default = i
    },
    9753: function(e, n, o) {
        "use strict";
        var i = o("3b1c"),
            t = o.n(i);
        t.a
    },
    9863: function(e, n, o) {
        "use strict";
        var i = o("288e"),
            t = i(o("795b")),
            a = i(o("59ad"));
        o("28a5"), o("4917");
        i(o("e143"));
        var r = {
            baseMin: function(e) {
                var n = uni.getStorageSync("suid");
                uni.request({
                    url: e.$baseurl + "doPageBaseMin",
                    data: {
                        uniacid: e.$uniacid,
                        vs1: 1,
                        suid: n
                    },
                    header: {
                        "custom-header": "hello"
                    },
                    success: function(n) {
                        e.baseinfo = n.data.data, uni.setStorageSync("base_tel", n.data.data.tel), uni.setStorageSync("isshow", n.data.data.alish), uni.setStorageSync("global_baseinfo", n.data.data);
                        var o = window.navigator.userAgent.toLowerCase();
                        "micromessenger" == o.match(/MicroMessenger/i) && uni.setNavigationBarTitle({
                            title: " "
                        }), uni.setNavigationBarColor({
                            backgroundColor: e.baseinfo.base_color,
                            frontColor: '#000000'
                        }), 2 == n.data.data.h5_suid && uni.setStorageSync("suid", ""), e.tabbar = e.baseinfo.tabbar
                    }
                })
            },
            baseMin2: function(e) {
                uni.request({
                    url: e.$baseurl + "doPageBaseMin",
                    data: {
                        uniacid: e.$uniacid,
                        vs1: 1
                    },
                    header: {
                        "custom-header": "hello"
                    },
                    success: function(n) {
                        e.baseinfo = n.data.data, e.tabbar = e.baseinfo.tabbar
                    }
                })
            },
            checkBindPhone: function(e) {
                console.log(e.needBind), 0 == e.needBind && uni.getStorage({
                    key: "suid",
                    fail: function() {
                        uni.request({
                            url: e.$baseurl + "dopagehasBind",
                            data: {
                                uniacid: e.$uniacid,
                                identity: uni.getStorageSync("openid"),
                                status: 1
                            },
                            success: function(n) {
                                console.log(n), "1" == n.data.data && n.data.suid ? uni.setStorageSync("suid", n.data.suid) : "2" == n.data.data && (e.needBind = !0)
                            }
                        })
                    }
                })
            },
            getSuperUserInfo: function(e) {
                var n = uni.getStorageSync("suid");
                n && uni.request({
                    url: e.$baseurl + "dopagegetSuperUserInfo",
                    data: {
                        suid: n,
                        uniacid: e.$uniacid,
                        source: uni.getStorageSync("source")
                    },
                    success: function(n) {
                        e.superuser = n.data.data
                    }
                })
            },
            redirectto: function(e, n) {
                uni.getStorageSync("uniacid");
                switch (n) {
                    case "page":
                        var o = e.indexOf("pages/index"),
                            i = e.indexOf("index?pageid");
                        if (-1 == o && -1 == i) uni.navigateTo({
                            url: e
                        });
                        else if (-1 != i) {
                            var t = e.split("=");
                            console.log(t[1]), uni.redirectTo({
                                url: "/pages/diypage/diypage?pageid=" + t[1]
                            })
                        } else uni.reLaunch({
                            url: e
                        });
                        break;
                    case "web":
                        uni.navigateTo({
                            url: "/pages/webpage/webpage?url=" + encodeURIComponent(e)
                        });
                        break;
                    case "tel":
                        e = e.slice(4), uni.showModal({
                            title: "提示",
                            content: "是否拨打电话:" + e,
                            success: function(n) {
                                1 == n.confirm && uni.makePhoneCall({
                                    phoneNumber: e
                                })
                            }
                        });
                        break;
                    case "map":
                        var r = e.split("##");
                        e = r[0].split(","), uni.openLocation({
                            latitude: (0, a.default)(e[0]),
                            longitude: (0, a.default)(e[1]),
                            name: r[1],
                            address: r[2]
                        });
                        break;
                    case "mini":
                        r = e.split(",");
                        var s = r[0].slice(6);
                        if (2 == r.length) var c = r[1].slice(9);
                        else c = "";
                        uni.navigateToMiniProgram({
                            appId: s,
                            path: c,
                            success: function(e) {
                                console.log("打开成功"), console.log(s)
                            }
                        });
                        break
                }
            },
            showwxpay: function(e, n, o, i, t, a) {
                uni.request({
                    url: e.$baseurl + "dopagebeforepay",
                    data: {
                        uniacid: e.$uniacid,
                        openid: uni.getStorageSync("openid"),
                        price: n,
                        order_id: i,
                        types: o,
                        formId: t,
                        suid: uni.getStorageSync("suid")
                    },
                    success: function(e) {
                        var n = [1, 2, 3, 4]; - 1 != n.indexOf(e.data.data.err) && uni.showModal({
                            title: "支付失败",
                            content: e.data.data.message ? e.data.data.message : e.data.data.msg,
                            showCancel: !1
                        }), 0 == e.data.data.err && (console.log("调起支付"), uni.requestPayment({
                            timeStamp: e.data.data.timeStamp,
                            nonceStr: e.data.data.nonceStr,
                            package: e.data.data.package,
                            signType: "MD5",
                            paySign: e.data.data.paySign,
                            success: function(e) {
                                console.log(e), uni.showToast({
                                    title: "支付成功",
                                    icon: "success",
                                    mask: !0,
                                    duration: 3e3,
                                    success: function(e) {
                                        1 == a ? uni.navigateBack({
                                            delta: 1
                                        }) : uni.navigateTo({
                                            url: a
                                        })
                                    }
                                })
                            },
                            fail: function(e) {
                                1 == a ? uni.navigateBack({
                                    delta: 1
                                }) : (uni.navigateBack({
                                    delta: 9
                                }), uni.navigateTo({
                                    url: a
                                }))
                            },
                            complete: function(e) {
                                console.log("complete")
                            }
                        }))
                    }
                })
            },
            showalipay: function(e, n, o, i, t, a) {
                console.log(20898989), uni.request({
                    url: e.$baseurl + "doPageAlipay",
                    data: {
                        uniacid: e.$uniacid,
                        money: n,
                        suid: uni.getStorageSync("suid"),
                        types: o,
                        order_id: i
                    },
                    success: function(e) {
                        e && uni.tradePay({
                            tradeNO: e.data.trade_no,
                            success: function(e) {
                                1 == a ? uni.navigateBack({
                                    delta: 1
                                }) : uni.navigateTo({
                                    url: a
                                })
                            },
                            fail: function(e) {
                                1 == a ? uni.navigateBack({
                                    delta: 1
                                }) : uni.navigateTo({
                                    url: a
                                })
                            }
                        })
                    }
                })
            },
            alih5pay: function(e, n, o, i) {
                console.log("支付宝H5支付"), uni.request({
                    url: e.$baseurl + "doPageHfivepay",
                    data: {
                        uniacid: e.$uniacid,
                        money: n,
                        suid: uni.getStorageSync("suid"),
                        types: o,
                        order_id: i
                    },
                    success: function(e) {
                        1 == e.data.flag && uni.navigateTo({
                            url: "/pages/aliH5pay/aliH5pay?id=" + e.data.data + "&type=" + o
                        })
                    }
                })
            },
            wxh5pay: function(e, n, o, i) {
                console.log("微信H5支付"), uni.request({
                    url: e.$baseurl + "doPageHfiveWxpay",
                    data: {
                        uniacid: e.$uniacid,
                        order_id: i,
                        money: n,
                        suid: uni.getStorageSync("suid"),
                        types: o
                    },
                    success: function(e) {
                        0 == e.data.error ? (uni.setStorageSync(e.data.order_id, e.data.mweb_url), uni.navigateTo({
                            url: "/pages/wxH5pay/wxH5pay?order_id=" + e.data.order_id
                        })) : uni.showModal({
                            title: "提示",
                            content: e.data.msg,
                            showCancel: !1
                        })
                    }
                })
            },
            baidupay: function(e, n, o, i, t) {
                console.log("百度支付"), uni.request({
                    url: e.$baseurl + "doPageBaidupay",
                    data: {
                        uniacid: e.$uniacid,
                        order_id: i,
                        money: n,
                        suid: uni.getStorageSync("suid"),
                        types: o
                    },
                    success: function(e) {
                        e.data && swan.requestPolymerPayment({
                            orderInfo: {
                                dealId: e.data.dealId,
                                appKey: e.data.appKey,
                                totalAmount: e.data.totalAmount,
                                tpOrderId: e.data.tpOrderId,
                                dealTitle: e.data.dealTitle,
                                signFieldsRange: "1",
                                rsaSign: e.data.rsaSign,
                                bizInfo: e.data.bizInfo
                            },
                            bannedChannels: ["BDWallet"],
                            success: function(e) {
                                uni.showToast({
                                    title: "支付成功",
                                    icon: "success"
                                }), 1 == t ? uni.navigateBack({
                                    delta: 1
                                }) : uni.redirectTo({
                                    url: t
                                })
                            },
                            fail: function(e) {
                                uni.showToast({
                                    title: "支付失败"
                                }), console.log("pay fail", e), 1 == t ? uni.navigateBack({
                                    delta: 1
                                }) : uni.redirectTo({
                                    url: t
                                })
                            }
                        })
                    }
                })
            },
            toutiaopay: function(e, n, o, i, a, r) {
                uni.request({
                    url: e.$baseurl + "doPageToutiaopay",
                    data: {
                        uniacid: e.$uniacid,
                        order_id: i,
                        money: n,
                        suid: uni.getStorageSync("suid"),
                        types: o,
                        formId: a
                    },
                    success: function(n) {
                        if (0 == n.data.return_code) {
                            var i = n.data.out_order_no,
                                a = e.$baseurl,
                                s = e.$uniacid;
                            tt.pay({
                                orderInfo: {
                                    merchant_id: n.data.merchant_id,
                                    app_id: n.data.app_id,
                                    sign_type: "MD5",
                                    timestamp: n.data.timestamp,
                                    sign: n.data.sign,
                                    product_code: "pay",
                                    payment_type: "direct",
                                    out_order_no: i,
                                    uid: n.data.uid,
                                    total_amount: n.data.total_amount,
                                    currency: "CNY",
                                    subject: n.data.subject,
                                    body: n.data.body,
                                    trade_time: n.data.trade_time,
                                    valid_time: "1800",
                                    notify_url: n.data.notify_url,
                                    wx_url: n.data.wx_url,
                                    wx_type: "MWEB",
                                    trade_type: "H5",
                                    version: "2.0",
                                    risk_info: n.data.risk_info
                                },
                                service: 1,
                                getOrderStatus: function(e) {
                                    return console.log(88888), console.log(e), new t.default(function(e, n) {
                                        tt.request({
                                            url: a + "doPageCheckToutiaoPay",
                                            data: {
                                                uniacid: s,
                                                order_id: i,
                                                types: o
                                            },
                                            success: function(n) {
                                                console.log(n);
                                                var o = n.data.data;
                                                e(1 == o ? {
                                                    code: 0
                                                } : {
                                                    code: 4
                                                })
                                            },
                                            fail: function(e) {
                                                n(e)
                                            }
                                        })
                                    })
                                },
                                success: function(e) {
                                    console.log(e), 0 == e.code ? (uni.showToast({
                                        title: "支付成功",
                                        icon: "success"
                                    }), console.log(r), 1 == r ? uni.navigateBack({
                                        delta: 1
                                    }) : uni.redirectTo({
                                        url: r
                                    })) : (uni.showToast({
                                        title: "支付失败"
                                    }), 1 == r ? uni.navigateBack({
                                        delta: 1
                                    }) : uni.redirectTo({
                                        url: r
                                    }))
                                },
                                fail: function(e) {
                                    uni.showToast({
                                        title: "支付失败"
                                    }), 1 == url ? uni.navigateBack({
                                        delta: 1
                                    }) : uni.redirectTo({
                                        url: url
                                    })
                                }
                            })
                        } else uni.showModal({
                            title: "提示",
                            content: n.data.return_msg,
                            showCancel: !1
                        })
                    }
                })
            },
            qqpay: function(e, n, o, i, t, a) {
                console.log("QQ支付"), uni.request({
                    url: e.$baseurl + "doPageqqpay",
                    data: {
                        uniacid: e.$uniacid,
                        order_id: i,
                        money: n,
                        suid: uni.getStorageSync("suid"),
                        types: o,
                        formId: t
                    },
                    success: function(e) {
                        console.log(e), e.data && qq.requestPayment({
                            package: "prepay_id=" + e.data.data.prepay_id,
                            bargainor_id: e.data.data.mch_id,
                            success: function(e) {
                                console.log(6666), uni.showToast({
                                    title: "支付成功",
                                    icon: "success"
                                }), 1 == a ? uni.navigateBack({
                                    delta: 1
                                }) : uni.redirectTo({
                                    url: a
                                })
                            },
                            fail: function(e) {
                                uni.showToast({
                                    title: "支付失败",
                                    icon: "success"
                                }), 1 == a ? uni.navigateBack({
                                    delta: 1
                                }) : uni.redirectTo({
                                    url: a
                                })
                            }
                        })
                    }
                })
            },
            givepscore: function(e, n, o, i, t) {
                i != t && 0 != i && "" != i && void 0 != i && uni.request({
                    url: e.$baseurl + "doPagegiveposcore",
                    data: {
                        id: n,
                        types: o,
                        suid: t,
                        fxsid: i,
                        uniacid: e.$uniacid,
                        source: uni.getStorageSync("source")
                    },
                    success: function(e) {}
                })
            }
        };
        e.exports = r
    },
    9961: function(e, n, o) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, o("28a5"), o("386d");
        var i = {
            props: ["page_signs", "baseinfo"],
            data: function() {
                return {
                    isIphoneX: ""
                }
            },
            created: function() {
                var e = this;
                uni.getSystemInfo({
                    success: function(n) {
                        var o = n,
                            i = o.model; - 1 != i.search("iPhone X") && (e.isIphoneX = !0)
                    }
                })
            },
            methods: {
                redirectto: function(e) {
                    var n = e.currentTarget.dataset.link,
                        o = e.currentTarget.dataset.linktype;
                    if ("page" == o) {
                        var i = n.indexOf("pages/index"),
                            t = n.indexOf("index?pageid");
                        if (-1 == i && -1 == t) uni.navigateTo({
                            url: n
                        });
                        else if (-1 != t) {
                            var a = n.split("=");
                            console.log(a[1]), uni.redirectTo({
                                url: "/pages/diypage/diypage?pageid=" + a[1]
                            })
                        } else uni.reLaunch({
                            url: n
                        })
                    } else this._redirectto(n, o)
                },
                makephonecall: function() {
                    uni.makePhoneCall({
                        phoneNumber: uni.getStorageSync("base_tel")
                    })
                }
            }
        };
        n.default = i
    },
    9966: function(e, n, o) {
        "use strict";
        o.r(n);
        var i = o("370e"),
            t = o("3061");
        for (var a in t) "default" !== a && function(e) {
            o.d(n, e, function() {
                return t[e]
            })
        }(a);
        o("9753");
        var r = o("2877"),
            s = Object(r["a"])(t["default"], i["a"], i["b"], !1, null, "5b2155ac", null);
        n["default"] = s.exports
    },
    a61a: function(e, n, o) {
        "use strict";
        var i = o("288e"),
            t = i(o("cebc"));
        o("4917"), o("cadf"), o("551c"), o("097d"), o("220e"), o("1c31"), o("921b");
        var a = i(o("e143")),
            r = i(o("b387")),
            s = i(o("2f9f")),
            c = i(o("9966")),
            l = i(o("e130")),
            g = i(o("dee4")),
            u = i(o("0879"));
        a.default.component("auth", c.default), a.default.component("bindPhone", l.default), a.default.component("myfooter", g.default), a.default.component("copyright", u.default), a.default.config.productionTip = !1, a.default.prototype.$store = s.default;
        var d = o("3a34");
        if ("wn" == d.platform) a.default.prototype.$baseurl = d.url, a.default.prototype.$imgurl = "https://" + d.url.match(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/)[0] + "/image/static/", a.default.prototype.$host = "https://" + d.url.match(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/)[0], a.default.prototype.$diyHost = "https://" + d.url.match(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/)[0];
        else {
            var p = "https://" + d.url.match(/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/)[0];
            a.default.prototype.$imgurl = p + "/addons/worldidc_cloud/core/public/image/static/", a.default.prototype.$host = p + "/addons/worldidc_cloud/core/public/index.php", a.default.prototype.$baseurl = p + "/addons/worldidc_cloud/core/public/index.php/api/Wxapps/", a.default.prototype.$diyHost = p + "/addons/worldidc_cloud/core/public/"
        }
        a.default.prototype.$platform = d.platform;
        var f = o("9863");
        a.default.prototype._baseMin = f.baseMin, a.default.prototype._showwxpay = f.showwxpay, a.default.prototype._showalipay = f.showalipay, a.default.prototype._alih5pay = f.alih5pay, a.default.prototype._wxh5pay = f.wxh5pay, a.default.prototype._baidupay = f.baidupay, a.default.prototype._toutiaopay = f.toutiaopay, a.default.prototype._qqpay = f.qqpay, a.default.prototype._checkBindPhone = f.checkBindPhone, a.default.prototype._redirectto = f.redirectto, a.default.prototype._getSuperUserInfo = f.getSuperUserInfo, a.default.prototype._givepscore = f.givepscore, r.default.mpType = "app";
        var _ = new a.default((0, t.default)({
            store: s.default
        }, r.default));
        _.$mount()
    },
    b387: function(e, n, o) {
        "use strict";
        o.r(n);
        var i = o("310c"),
            t = o("672a");
        for (var a in t) "default" !== a && function(e) {
            o.d(n, e, function() {
                return t[e]
            })
        }(a);
        o("c8e2");
        var r = o("2877"),
            s = Object(r["a"])(t["default"], i["a"], i["b"], !1, null, null, null);
        n["default"] = s.exports
    },
    b868: function(e, n, o) {
        "use strict";
        var i = o("e3c5"),
            t = o.n(i);
        t.a
    },
    bc34: function(e, n, o) {
        "use strict";
        o.r(n);
        var i = o("fd96"),
            t = o.n(i);
        for (var a in i) "default" !== a && function(e) {
            o.d(n, e, function() {
                return i[e]
            })
        }(a);
        n["default"] = t.a
    },
    c8e2: function(e, n, o) {
        "use strict";
        var i = o("2fea"),
            t = o.n(i);
        t.a
    },
    cb62: function(e, n, o) {
        n = e.exports = o("2350")(!1), n.push([e.i, ".loginBox[data-v-5b2155ac]{width:100%;position:fixed;top:%?400?%;height:%?400?%;overflow:visible}uni-view.login_box[data-v-5b2155ac]{background:#fff;width:%?500?%;height:%?400?%;border-radius:%?20?%;margin:0 auto;padding-top:%?140?%;box-sizing:border-box;overflow:hidden!important}.login_img[data-v-5b2155ac]{position:absolute;top:%?-150?%;left:30%}.login_img uni-image[data-v-5b2155ac]{width:%?300?%}.login_tips[data-v-5b2155ac]{text-align:center;margin-bottom:%?50?%}.login_tips1[data-v-5b2155ac]{font-size:%?32?%;color:#434343}.login_tips2[data-v-5b2155ac]{color:#969696;font-size:%?28?%}.login_choose[data-v-5b2155ac]{display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;border-top:%?2?% solid #eee}.login[data-v-5b2155ac]{width:50%}uni-view.login[data-v-5b2155ac]{font-size:%?28?%;text-align:center;line-height:2.55555556;box-sizing:border-box;border-right:%?2?% solid #eee}uni-button.login[data-v-5b2155ac]{font-size:%?28?%;background:#fff;line-height:2.55555556}uni-button.login[data-v-5b2155ac]:after{border:0}", ""])
    },
    d47f: function(e, n, o) {
        "use strict";
        o.r(n);
        var i = o("5e71"),
            t = o.n(i);
        for (var a in i) "default" !== a && function(e) {
            o.d(n, e, function() {
                return i[e]
            })
        }(a);
        n["default"] = t.a
    },
    dee4: function(e, n, o) {
        "use strict";
        o.r(n);
        var i = o("274e"),
            t = o("65cf");
        for (var a in t) "default" !== a && function(e) {
            o.d(n, e, function() {
                return t[e]
            })
        }(a);
        o("b868");
        var r = o("2877"),
            s = Object(r["a"])(t["default"], i["a"], i["b"], !1, null, "e83be5ca", null);
        n["default"] = s.exports
    },
    e130: function(e, n, o) {
        "use strict";
        o.r(n);
        var i = o("6e75"),
            t = o("bc34");
        for (var a in t) "default" !== a && function(e) {
            o.d(n, e, function() {
                return t[e]
            })
        }(a);
        o("3031");
        var r = o("2877"),
            s = Object(r["a"])(t["default"], i["a"], i["b"], !1, null, "706b1e6d", null);
        n["default"] = s.exports
    },
    e3c5: function(e, n, o) {
        var i = o("69eb");
        "string" === typeof i && (i = [
            [e.i, i, ""]
        ]), i.locals && (e.exports = i.locals);
        var t = o("4f06").default;
        t("63f8ad88", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    fa68: function(e, n, o) {
        "use strict";
        var i = function() {
                var e = this,
                    n = e.$createElement,
                    o = e._self._c || n;
                return o("v-uni-view", [0 == e.baseinfo.copy_do ? [o("v-uni-view", {
                    staticClass: "copy",
                    attrs: {
                        "data-tel": e.baseinfo.tel_b
                    },
                    on: {
                        click: function(n) {
                            arguments[0] = n = e.$handleEvent(n), e.makePhoneCallB.apply(void 0, arguments)
                        }
                    }
                }, ["" != e.baseinfo.copyimg ? o("v-uni-image", {
                    staticClass: "copy_p",
                    attrs: {
                        src: e.baseinfo.copyimg,
                        mode: "aspectFit"
                    }
                }) : e._e(), o("v-uni-view", {
                    staticClass: "copy_t"
                }, [e._v(e._s(e.baseinfo.copyright))])], 1)] : e._e(), 1 == e.baseinfo.copy_do ? [o("v-uni-navigator", {
                    staticClass: "copy",
                    attrs: {
                        url: "/sudu8/copy/copy?id=" + e.baseinfo.copy_id
                    }
                }, ["" != e.baseinfo.copyimg ? o("v-uni-image", {
                    staticClass: "copy_p",
                    attrs: {
                        src: e.baseinfo.copyimg,
                        mode: "aspectFit"
                    }
                }) : e._e(), o("v-uni-view", {
                    staticClass: "copy_t"
                }, [e._v(e._s(e.baseinfo.copyright))])], 1)] : e._e()], 2)
            },
            t = [];
        o.d(n, "a", function() {
            return i
        }), o.d(n, "b", function() {
            return t
        })
    },
    fd96: function(e, n, o) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var i = o("7131"),
            t = {
                data: function() {
                    return {
                        phone: "",
                        code: "",
                        str: "发送验证码",
                        btn_flag: !1,
                        baseinfo: "",
                        isshow: !0,
                        newSessionKey: ""
                    }
                },
                props: ["needBind"],
                created: function() {
                    this._baseMin(this);
                    var e = uni.getStorageSync("isshow");
                    console.log(e), this.isshow = 1 == e, console.log(this.isshow)
                },
                methods: {
                    refreshSessionkey: function() {
                        uni.login({
                            success: function(e) {}
                        })
                    },
                    sendCode: function() {
                        var e = this,
                            n = /^1[3456789]{1}\d{9}$/;
                        if (n.test(this.phone)) {
                            var o, i = 60;
                            this.btn_flag = !0, this.str = "60s", o = setInterval(function() {
                                i--, e.str = i + "s", i <= 0 && (clearInterval(o), e.btn_flag = !1, e.str = "发送验证码")
                            }, 1e3), uni.request({
                                url: this.$baseurl + "dopagebindPhone",
                                data: {
                                    phone: this.phone,
                                    uniacid: this.$uniacid
                                },
                                success: function(e) {
                                    console.log(e), "1" == e.data.data ? uni.showModal({
                                        title: "发送失败",
                                        content: "参数设置有误",
                                        showCancel: !1
                                    }) : "2" == e.data.data ? uni.showModal({
                                        title: "发送失败",
                                        content: "请您输入正确的手机号码",
                                        showCancel: !1
                                    }) : "3" == e.data.data && uni.showModal({
                                        title: "发送失败",
                                        content: "距上一次发送不足60s",
                                        showCancel: !1
                                    })
                                }
                            })
                        } else uni.showModal({
                            title: "提醒",
                            content: "请您输入正确的手机号码",
                            showCancel: !1
                        })
                    },
                    getPhoneNumber: function(e) {},
                    confirmBind: function() {
                        var e, n, o = this;
                        e = 3, n = "";
                        var t = /^1[3456789]{1}\d{9}$/;
                        return t.test(this.phone) ? this.code ? void uni.request({
                            url: this.$baseurl + "dopageconfirmBind",
                            data: {
                                phone: this.phone,
                                code: this.code,
                                uniacid: this.$uniacid,
                                status: e,
                                identity: n,
                                sms: this.baseinfo.sms
                            },
                            success: function(e) {
                                console.log(e), "0" == e.data.data ? (e.data.suid && (uni.setStorageSync("suid", e.data.suid), i.fxsbind(e.data.suid, 0)), uni.showToast({
                                    title: "绑定成功！",
                                    icon: "success",
                                    success: function() {
                                        setTimeout(function() {
                                            o.needBind && o.$emit("closeBind")
                                        }, 1500)
                                    }
                                })) : "1" == e.data.data ? uni.showModal({
                                    title: "提醒",
                                    content: "验证码有误",
                                    showCancel: !1
                                }) : "2" == e.data.data && (e.data.suid && (uni.setStorageSync("suid", e.data.suid), i.fxsbind(e.data.suid, 0)), uni.showToast({
                                    title: "登陆成功！",
                                    icon: "success",
                                    success: function() {
                                        setTimeout(function() {
                                            o.needBind && o.$emit("closeBind")
                                        }, 1500)
                                    }
                                }))
                            }
                        }) : (uni.showModal({
                            title: "提醒",
                            content: "验证码不能为空",
                            showCancel: !1
                        }), !1) : (uni.showModal({
                            title: "提醒",
                            content: "请您输入正确的手机号码",
                            showCancel: !1
                        }), !1)
                    },
                    close: function() {
                        this.isshow = !1, this.$emit("closeBind")
                    }
                }
            };
        n.default = t
    }
});