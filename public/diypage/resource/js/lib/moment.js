(function(t) {
	function e(t, e) {
		return function(n) {
			return o(t.call(this, n), e)
		}
	}

	function n() {}

	function s(t) {
		r(this, t)
	}

	function i(t) {
		var e = t.years || t.year || t.y || 0,
			n = t.months || t.month || t.M || 0,
			s = t.weeks || t.week || t.w || 0,
			i = t.days || t.day || t.d || 0,
			r = t.hours || t.hour || t.h || 0,
			a = t.minutes || t.minute || t.m || 0,
			o = t.seconds || t.second || t.s || 0,
			u = t.milliseconds || t.millisecond || t.ms || 0;
		this._input = t, this._milliseconds = u + 1e3 * o + 6e4 * a + 36e5 * r, this._days = i + 7 * s, this._months = n + 12 * e, this._data = {}, this._bubble()
	}

	function r(t, e) {
		for(var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
		return t
	}

	function a(t) {
		return 0 > t ? Math.ceil(t) : Math.floor(t)
	}

	function o(t, e) {
		for(var n = t + ""; n.length < e;) n = "0" + n;
		return n
	}

	function u(t, e, n, s) {
		var i, r, a = e._milliseconds,
			o = e._days,
			u = e._months;
		a && t._d.setTime(+t._d + a * n), (o || u) && (i = t.minute(), r = t.hour()), o && t.date(t.date() + o * n), u && t.month(t.month() + u * n), a && !s && z.updateOffset(t), (o || u) && (t.minute(i), t.hour(r))
	}

	function h(t) {
		return "[object Array]" === Object.prototype.toString.call(t)
	}

	function d(t, e) {
		var n, s = Math.min(t.length, e.length),
			i = Math.abs(t.length - e.length),
			r = 0;
		for(n = 0; s > n; n++) ~~t[n] != ~~e[n] && r++;
		return r + i
	}

	function c(t) {
		return t ? tt[t] || t.toLowerCase().replace(/(.)s$/, "$1") : t
	}

	function f(t, e) {
		return e.abbr = t, P[t] || (P[t] = new n), P[t].set(e), P[t]
	}

	function l(t) {
		if(!t) return z.fn._lang;
		if(!P[t] && W) try {
			require("./lang/" + t)
		} catch(t) {
			return z.fn._lang
		}
		return P[t]
	}

	function _(t) {
		return t.match(/\[.*\]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
	}

	function m(t) {
		var e, n, s = t.match(A);
		for(e = 0, n = s.length; n > e; e++) s[e] = it[s[e]] ? it[s[e]] : _(s[e]);
		return function(i) {
			var r = "";
			for(e = 0; n > e; e++) r += s[e] instanceof Function ? s[e].call(i, t) : s[e];
			return r
		}
	}

	function y(t, e) {
		for(var n = 5; n-- && G.test(e);) e = e.replace(G, function(e) {
			return t.lang().longDateFormat(e) || e
		});
		return et[e] || (et[e] = m(e)), et[e](t)
	}

	function M(t, e) {
		switch(t) {
			case "DDDD":
				return N;
			case "YYYY":
				return J;
			case "YYYYY":
				return I;
			case "S":
			case "SS":
			case "SSS":
			case "DDD":
				return E;
			case "MMM":
			case "MMMM":
			case "dd":
			case "ddd":
			case "dddd":
				return V;
			case "a":
			case "A":
				return l(e._l)._meridiemParse;
			case "X":
				return R;
			case "Z":
			case "ZZ":
				return X;
			case "T":
				return $;
			case "MM":
			case "DD":
			case "YY":
			case "HH":
			case "hh":
			case "mm":
			case "ss":
			case "M":
			case "D":
			case "d":
			case "H":
			case "h":
			case "m":
			case "s":
				return Z;
			default:
				return new RegExp(t.replace("\\", ""))
		}
	}

	function Y(t) {
		var e = ((X.exec(t) || [])[0] + "").match(B) || ["-", 0, 0],
			n = 60 * e[1] + ~~e[2];
		return "+" === e[0] ? -n : n
	}

	function D(t, e, n) {
		var s, i = n._a;
		switch(t) {
			case "M":
			case "MM":
				i[1] = null == e ? 0 : ~~e - 1;
				break;
			case "MMM":
			case "MMMM":
				null != (s = l(n._l).monthsParse(e)) ? i[1] = s : n._isValid = !1;
				break;
			case "D":
			case "DD":
			case "DDD":
			case "DDDD":
				null != e && (i[2] = ~~e);
				break;
			case "YY":
				i[0] = ~~e + (~~e > 68 ? 1900 : 2e3);
				break;
			case "YYYY":
			case "YYYYY":
				i[0] = ~~e;
				break;
			case "a":
			case "A":
				n._isPm = l(n._l).isPM(e);
				break;
			case "H":
			case "HH":
			case "h":
			case "hh":
				i[3] = ~~e;
				break;
			case "m":
			case "mm":
				i[4] = ~~e;
				break;
			case "s":
			case "ss":
				i[5] = ~~e;
				break;
			case "S":
			case "SS":
			case "SSS":
				i[6] = ~~(1e3 * ("0." + e));
				break;
			case "X":
				n._d = new Date(1e3 * parseFloat(e));
				break;
			case "Z":
			case "ZZ":
				n._useUTC = !0, n._tzm = Y(e)
		}
		null == e && (n._isValid = !1)
	}

	function g(t) {
		var e, n, s = [];
		if(!t._d) {
			for(e = 0; 7 > e; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
			s[3] += ~~((t._tzm || 0) / 60), s[4] += ~~((t._tzm || 0) % 60), n = new Date(0), t._useUTC ? (n.setUTCFullYear(s[0], s[1], s[2]), n.setUTCHours(s[3], s[4], s[5], s[6])) : (n.setFullYear(s[0], s[1], s[2]), n.setHours(s[3], s[4], s[5], s[6])), t._d = n
		}
	}

	function p(t) {
		var e, n, s = t._f.match(A),
			i = t._i;
		for(t._a = [], e = 0; e < s.length; e++)(n = (M(s[e], t).exec(i) || [])[0]) && (i = i.slice(i.indexOf(n) + n.length)), it[s[e]] && D(s[e], n, t);
		i && (t._il = i), t._isPm && t._a[3] < 12 && (t._a[3] += 12), !1 === t._isPm && 12 === t._a[3] && (t._a[3] = 0), g(t)
	}

	function w(t) {
		var e, n, i, a, o, u = 99;
		for(a = 0; a < t._f.length; a++) e = r({}, t), e._f = t._f[a], p(e), n = new s(e), o = d(e._a, n.toArray()), n._il && (o += n._il.length), u > o && (u = o, i = n);
		r(t, i)
	}

	function k(t) {
		var e, n = t._i,
			s = j.exec(n);
		if(s) {
			for(t._f = "YYYY-MM-DD" + (s[2] || " "), e = 0; 4 > e; e++)
				if(q[e][1].exec(n)) {
					t._f += q[e][0];
					break
				}
			X.exec(n) && (t._f += " Z"), p(t)
		} else t._d = new Date(n)
	}

	function T(e) {
		var n = e._i,
			s = U.exec(n);
		n === t ? e._d = new Date : s ? e._d = new Date(+s[1]) : "string" == typeof n ? k(e) : h(n) ? (e._a = n.slice(0), g(e)) : e._d = n instanceof Date ? new Date(+n) : new Date(n)
	}

	function v(t, e, n, s, i) {
		return i.relativeTime(e || 1, !!n, t, s)
	}

	function S(t, e, n) {
		var s = H(Math.abs(t) / 1e3),
			i = H(s / 60),
			r = H(i / 60),
			a = H(r / 24),
			o = H(a / 365),
			u = 45 > s && ["s", s] || 1 === i && ["m"] || 45 > i && ["mm", i] || 1 === r && ["h"] || 22 > r && ["hh", r] || 1 === a && ["d"] || 25 >= a && ["dd", a] || 45 >= a && ["M"] || 345 > a && ["MM", H(a / 30)] || 1 === o && ["y"] || ["yy", o];
		return u[2] = e, u[3] = t > 0, u[4] = n, v.apply({}, u)
	}

	function b(t, e, n) {
		var s, i = n - e,
			r = n - t.day();
		return r > i && (r -= 7), i - 7 > r && (r += 7), s = z(t).add("d", r), {
			week: Math.ceil(s.dayOfYear() / 7),
			year: s.year()
		}
	}

	function L(t) {
		var e = t._i,
			n = t._f;
		return null === e || "" === e ? null : ("string" == typeof e && (t._i = e = l().preparse(e)), z.isMoment(e) ? (t = r({}, e), t._d = new Date(+e._d)) : n ? h(n) ? w(t) : p(t) : T(t), new s(t))
	}

	function F(t, e) {
		z.fn[t] = z.fn[t + "s"] = function(t) {
			var n = this._isUTC ? "UTC" : "";
			return null != t ? (this._d["set" + n + e](t), z.updateOffset(this), this) : this._d["get" + n + e]()
		}
	}

	function O(t, e) {
		z.duration.fn["as" + t] = function() {
			return +this / e
		}
	}
	for(var z, C, H = Math.round, P = {}, W = "undefined" != typeof module && module.exports, U = /^\/?Date\((\-?\d+)/i, x = /(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/, A = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g, G = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, Z = /\d\d?/, E = /\d{1,3}/, N = /\d{3}/, J = /\d{1,4}/, I = /[+\-]?\d{1,6}/, V = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, X = /Z|[\+\-]\d\d:?\d\d/i, $ = /T/i, R = /[\+\-]?\d+(\.\d{1,3})?/, j = /^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/, q = [
			["HH:mm:ss.S", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
			["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
			["HH:mm", /(T| )\d\d:\d\d/],
			["HH", /(T| )\d\d/]
		], B = /([\+\-]|\d\d)/gi, K = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), Q = {
			Milliseconds: 1,
			Seconds: 1e3,
			Minutes: 6e4,
			Hours: 36e5,
			Days: 864e5,
			Months: 2592e6,
			Years: 31536e6
		}, tt = {
			ms: "millisecond",
			s: "second",
			m: "minute",
			h: "hour",
			d: "day",
			w: "week",
			M: "month",
			y: "year"
		}, et = {}, nt = "DDD w W M D d".split(" "), st = "M D H h m s w W".split(" "), it = {
			M: function() {
				return this.month() + 1
			},
			MMM: function(t) {
				return this.lang().monthsShort(this, t)
			},
			MMMM: function(t) {
				return this.lang().months(this, t)
			},
			D: function() {
				return this.date()
			},
			DDD: function() {
				return this.dayOfYear()
			},
			d: function() {
				return this.day()
			},
			dd: function(t) {
				return this.lang().weekdaysMin(this, t)
			},
			ddd: function(t) {
				return this.lang().weekdaysShort(this, t)
			},
			dddd: function(t) {
				return this.lang().weekdays(this, t)
			},
			w: function() {
				return this.week()
			},
			W: function() {
				return this.isoWeek()
			},
			YY: function() {
				return o(this.year() % 100, 2)
			},
			YYYY: function() {
				return o(this.year(), 4)
			},
			YYYYY: function() {
				return o(this.year(), 5)
			},
			gg: function() {
				return o(this.weekYear() % 100, 2)
			},
			gggg: function() {
				return this.weekYear()
			},
			ggggg: function() {
				return o(this.weekYear(), 5)
			},
			GG: function() {
				return o(this.isoWeekYear() % 100, 2)
			},
			GGGG: function() {
				return this.isoWeekYear()
			},
			GGGGG: function() {
				return o(this.isoWeekYear(), 5)
			},
			e: function() {
				return this.weekday()
			},
			E: function() {
				return this.isoWeekday()
			},
			a: function() {
				return this.lang().meridiem(this.hours(), this.minutes(), !0)
			},
			A: function() {
				return this.lang().meridiem(this.hours(), this.minutes(), !1)
			},
			H: function() {
				return this.hours()
			},
			h: function() {
				return this.hours() % 12 || 12
			},
			m: function() {
				return this.minutes()
			},
			s: function() {
				return this.seconds()
			},
			S: function() {
				return ~~(this.milliseconds() / 100)
			},
			SS: function() {
				return o(~~(this.milliseconds() / 10), 2)
			},
			SSS: function() {
				return o(this.milliseconds(), 3)
			},
			Z: function() {
				var t = -this.zone(),
					e = "+";
				return 0 > t && (t = -t, e = "-"), e + o(~~(t / 60), 2) + ":" + o(~~t % 60, 2)
			},
			ZZ: function() {
				var t = -this.zone(),
					e = "+";
				return 0 > t && (t = -t, e = "-"), e + o(~~(10 * t / 6), 4)
			},
			z: function() {
				return this.zoneAbbr()
			},
			zz: function() {
				return this.zoneName()
			},
			X: function() {
				return this.unix()
			}
		}; nt.length;) C = nt.pop(), it[C + "o"] = function(t, e) {
		return function(n) {
			return this.lang().ordinal(t.call(this, n), e)
		}
	}(it[C], C);
	for(; st.length;) C = st.pop(), it[C + C] = e(it[C], 2);
	for(it.DDDD = e(it.DDD, 3), n.prototype = {
			set: function(t) {
				var e, n;
				for(n in t) "function" == typeof(e = t[n]) ? this[n] = e : this["_" + n] = e
			},
			_months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			months: function(t) {
				return this._months[t.month()]
			},
			_monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			monthsShort: function(t) {
				return this._monthsShort[t.month()]
			},
			monthsParse: function(t) {
				var e, n, s;
				for(this._monthsParse || (this._monthsParse = []), e = 0; 12 > e; e++)
					if(this._monthsParse[e] || (n = z([2e3, e]), s = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[e] = new RegExp(s.replace(".", ""), "i")), this._monthsParse[e].test(t)) return e
			},
			_weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdays: function(t) {
				return this._weekdays[t.day()]
			},
			_weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysShort: function(t) {
				return this._weekdaysShort[t.day()]
			},
			_weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			weekdaysMin: function(t) {
				return this._weekdaysMin[t.day()]
			},
			weekdaysParse: function(t) {
				var e, n, s;
				for(this._weekdaysParse || (this._weekdaysParse = []), e = 0; 7 > e; e++)
					if(this._weekdaysParse[e] || (n = z([2e3, 1]).day(e), s = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[e] = new RegExp(s.replace(".", ""), "i")), this._weekdaysParse[e].test(t)) return e
			},
			_longDateFormat: {
				LT: "h:mm A",
				L: "MM/DD/YYYY",
				LL: "MMMM D YYYY",
				LLL: "MMMM D YYYY LT",
				LLLL: "dddd, MMMM D YYYY LT"
			},
			longDateFormat: function(t) {
				var e = this._longDateFormat[t];
				return !e && this._longDateFormat[t.toUpperCase()] && (e = this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(t) {
					return t.slice(1)
				}), this._longDateFormat[t] = e), e
			},
			isPM: function(t) {
				return "p" === (t + "").toLowerCase()[0]
			},
			_meridiemParse: /[ap]\.?m?\.?/i,
			meridiem: function(t, e, n) {
				return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
			},
			_calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			calendar: function(t, e) {
				var n = this._calendar[t];
				return "function" == typeof n ? n.apply(e) : n
			},
			_relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			relativeTime: function(t, e, n, s) {
				var i = this._relativeTime[n];
				return "function" == typeof i ? i(t, e, n, s) : i.replace(/%d/i, t)
			},
			pastFuture: function(t, e) {
				var n = this._relativeTime[t > 0 ? "future" : "past"];
				return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
			},
			ordinal: function(t) {
				return this._ordinal.replace("%d", t)
			},
			_ordinal: "%d",
			preparse: function(t) {
				return t
			},
			postformat: function(t) {
				return t
			},
			week: function(t) {
				return b(t, this._week.dow, this._week.doy).week
			},
			_week: {
				dow: 0,
				doy: 6
			}
		}, (z = function(t, e, n) {
			return L({
				_i: t,
				_f: e,
				_l: n,
				_isUTC: !1
			})
		}).utc = function(t, e, n) {
			return L({
				_useUTC: !0,
				_isUTC: !0,
				_l: n,
				_i: t,
				_f: e
			})
		}, z.unix = function(t) {
			return z(1e3 * t)
		}, z.duration = function(t, e) {
			var n, s, r = z.isDuration(t),
				a = "number" == typeof t,
				o = r ? t._input : a ? {} : t,
				u = x.exec(t);
			return a ? e ? o[e] = t : o.milliseconds = t : u && (n = "-" === u[1] ? -1 : 1, o = {
				y: 0,
				d: ~~u[2] * n,
				h: ~~u[3] * n,
				m: ~~u[4] * n,
				s: ~~u[5] * n,
				ms: ~~u[6] * n
			}), s = new i(o), r && t.hasOwnProperty("_lang") && (s._lang = t._lang), s
		}, z.version = "2.1.0", z.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", z.updateOffset = function() {}, z.lang = function(t, e) {
			return t ? (e ? f(t, e) : P[t] || l(t), void(z.duration.fn._lang = z.fn._lang = l(t))) : z.fn._lang._abbr
		}, z.langData = function(t) {
			return t && t._lang && t._lang._abbr && (t = t._lang._abbr), l(t)
		}, z.isMoment = function(t) {
			return t instanceof s
		}, z.isDuration = function(t) {
			return t instanceof i
		}, z.fn = s.prototype = {
			clone: function() {
				return z(this)
			},
			valueOf: function() {
				return +this._d + 6e4 * (this._offset || 0)
			},
			unix: function() {
				return Math.floor(+this / 1e3)
			},
			toString: function() {
				return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
			},
			toDateStr: function() {
				return this.format("YYYY-MM-DD")
			},
			toDateTimeStr: function() {
				return this.format("YYYY-MM-DD HH:mm")
			},
			toDate: function() {
				return this._offset ? new Date(+this) : this._d
			},
			toISOString: function() {
				return y(z(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
			},
			toArray: function() {
				var t = this;
				return [t.year(), t.month(), t.date(), t.hours(), t.minutes(), t.seconds(), t.milliseconds()]
			},
			isValid: function() {
				return null == this._isValid && (this._isValid = this._a ? !d(this._a, (this._isUTC ? z.utc(this._a) : z(this._a)).toArray()) : !isNaN(this._d.getTime())), !!this._isValid
			},
			utc: function() {
				return this.zone(0)
			},
			local: function() {
				return this.zone(0), this._isUTC = !1, this
			},
			format: function(t) {
				var e = y(this, t || z.defaultFormat);
				return this.lang().postformat(e)
			},
			add: function(t, e) {
				var n;
				return n = "string" == typeof t ? z.duration(+e, t) : z.duration(t, e), u(this, n, 1), this
			},
			subtract: function(t, e) {
				var n;
				return n = "string" == typeof t ? z.duration(+e, t) : z.duration(t, e), u(this, n, -1), this
			},
			diff: function(t, e, n) {
				var s, i, r = this._isUTC ? z(t).zone(this._offset || 0) : z(t).local(),
					o = 6e4 * (this.zone() - r.zone());
				return "year" === (e = c(e)) || "month" === e ? (s = 432e5 * (this.daysInMonth() + r.daysInMonth()), i = 12 * (this.year() - r.year()) + (this.month() - r.month()), i += (this - z(this).startOf("month") - (r - z(r).startOf("month"))) / s, i -= 6e4 * (this.zone() - z(this).startOf("month").zone() - (r.zone() - z(r).startOf("month").zone())) / s, "year" === e && (i /= 12)) : (s = this - r, i = "second" === e ? s / 1e3 : "minute" === e ? s / 6e4 : "hour" === e ? s / 36e5 : "day" === e ? (s - o) / 864e5 : "week" === e ? (s - o) / 6048e5 : s), n ? i : a(i)
			},
			from: function(t, e) {
				return z.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)
			},
			fromNow: function(t) {
				return this.from(z(), t)
			},
			calendar: function() {
				var t = this.diff(z().startOf("day"), "days", !0),
					e = -6 > t ? "sameElse" : -1 > t ? "lastWeek" : 0 > t ? "lastDay" : 1 > t ? "sameDay" : 2 > t ? "nextDay" : 7 > t ? "nextWeek" : "sameElse";
				return this.format(this.lang().calendar(e, this))
			},
			isLeapYear: function() {
				var t = this.year();
				return 0 == t % 4 && 0 != t % 100 || 0 == t % 400
			},
			isDST: function() {
				return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
			},
			day: function(t) {
				var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
				return null != t ? "string" == typeof t && "number" != typeof(t = this.lang().weekdaysParse(t)) ? this : this.add({
					d: t - e
				}) : e
			},
			month: function(t) {
				var e, n = this._isUTC ? "UTC" : "";
				return null != t ? "string" == typeof t && "number" != typeof(t = this.lang().monthsParse(t)) ? this : (e = this.date(), this.date(1), this._d["set" + n + "Month"](t), this.date(Math.min(e, this.daysInMonth())), z.updateOffset(this), this) : this._d["get" + n + "Month"]()
			},
			startOf: function(t) {
				switch(t = c(t)) {
					case "year":
						this.month(0);
					case "month":
						this.date(1);
					case "week":
					case "day":
						this.hours(0);
					case "hour":
						this.minutes(0);
					case "minute":
						this.seconds(0);
					case "second":
						this.milliseconds(0)
				}
				return "week" === t && this.weekday(0), this
			},
			endOf: function(t) {
				return this.startOf(t).add(t, 1).subtract("ms", 1)
			},
			isAfter: function(t, e) {
				return e = void 0 !== e ? e : "millisecond", +this.clone().startOf(e) > +z(t).startOf(e)
			},
			isBefore: function(t, e) {
				return e = void 0 !== e ? e : "millisecond", +this.clone().startOf(e) < +z(t).startOf(e)
			},
			isSame: function(t, e) {
				return e = void 0 !== e ? e : "millisecond", +this.clone().startOf(e) == +z(t).startOf(e)
			},
			min: function(t) {
				return t = z.apply(null, arguments), this > t ? this : t
			},
			max: function(t) {
				return(t = z.apply(null, arguments)) > this ? this : t
			},
			zone: function(t) {
				var e = this._offset || 0;
				return null == t ? this._isUTC ? e : this._d.getTimezoneOffset() : ("string" == typeof t && (t = Y(t)), Math.abs(t) < 16 && (t *= 60), this._offset = t, this._isUTC = !0, e !== t && u(this, z.duration(e - t, "m"), 1, !0), this)
			},
			zoneAbbr: function() {
				return this._isUTC ? "UTC" : ""
			},
			zoneName: function() {
				return this._isUTC ? "Coordinated Universal Time" : ""
			},
			daysInMonth: function() {
				return z.utc([this.year(), this.month() + 1, 0]).date()
			},
			dayOfYear: function(t) {
				var e = H((z(this).startOf("day") - z(this).startOf("year")) / 864e5) + 1;
				return null == t ? e : this.add("d", t - e)
			},
			weekYear: function(t) {
				var e = b(this, this.lang()._week.dow, this.lang()._week.doy).year;
				return null == t ? e : this.add("y", t - e)
			},
			isoWeekYear: function(t) {
				var e = b(this, 1, 4).year;
				return null == t ? e : this.add("y", t - e)
			},
			week: function(t) {
				var e = this.lang().week(this);
				return null == t ? e : this.add("d", 7 * (t - e))
			},
			isoWeek: function(t) {
				var e = b(this, 1, 4).week;
				return null == t ? e : this.add("d", 7 * (t - e))
			},
			weekday: function(t) {
				var e = (this._d.getDay() + 7 - this.lang()._week.dow) % 7;
				return null == t ? e : this.add("d", t - e)
			},
			isoWeekday: function(t) {
				return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
			},
			lang: function(e) {
				return e === t ? this._lang : (this._lang = l(e), this)
			}
		}, C = 0; C < K.length; C++) F(K[C].toLowerCase().replace(/s$/, ""), K[C]);
	F("year", "FullYear"), z.fn.days = z.fn.day, z.fn.months = z.fn.month, z.fn.weeks = z.fn.week, z.fn.isoWeeks = z.fn.isoWeek, z.fn.toJSON = z.fn.toISOString, z.duration.fn = i.prototype = {
		_bubble: function() {
			var t, e, n, s, i = this._milliseconds,
				r = this._days,
				o = this._months,
				u = this._data;
			u.milliseconds = i % 1e3, t = a(i / 1e3), u.seconds = t % 60, e = a(t / 60), u.minutes = e % 60, n = a(e / 60), u.hours = n % 24, r += a(n / 24), u.days = r % 30, o += a(r / 30), u.months = o % 12, s = a(o / 12), u.years = s
		},
		weeks: function() {
			return a(this.days() / 7)
		},
		valueOf: function() {
			return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * ~~(this._months / 12)
		},
		humanize: function(t) {
			var e = +this,
				n = S(e, !t, this.lang());
			return t && (n = this.lang().pastFuture(e, n)), this.lang().postformat(n)
		},
		add: function(t, e) {
			var n = z.duration(t, e);
			return this._milliseconds += n._milliseconds, this._days += n._days, this._months += n._months, this._bubble(), this
		},
		subtract: function(t, e) {
			var n = z.duration(t, e);
			return this._milliseconds -= n._milliseconds, this._days -= n._days, this._months -= n._months, this._bubble(), this
		},
		get: function(t) {
			return t = c(t), this[t.toLowerCase() + "s"]()
		},
		as: function(t) {
			return t = c(t), this["as" + t.charAt(0).toUpperCase() + t.slice(1) + "s"]()
		},
		lang: z.fn.lang
	};
	for(C in Q) Q.hasOwnProperty(C) && (O(C, Q[C]), function(t) {
		z.duration.fn[t] = function() {
			return this._data[t]
		}
	}(C.toLowerCase()));
	O("Weeks", 6048e5), z.duration.fn.asMonths = function() {
		return(+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
	}, z.lang("en", {
		ordinal: function(t) {
			var e = t % 10;
			return t + (1 == ~~(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
		}
	}), W && (module.exports = z), "undefined" == typeof ender && (this.moment = z), "function" == typeof define && define.amd && define("moment", [], function() {
		return z
	})
}).call(this),
	function(t) {
		t.lang("zh-cn", {
			months: "?????????????_????????????_?????????????_??????????????_?????????????_?????????????_????????????_?????????????_????????????_????????????_???????????????????_??????????????????".split("_"),
			monthsShort: "1??????_2??????_3??????_4??????_5??????_6??????_7??????_8??????_9??????_10??????_11??????_12??????".split("_"),
			weekdays: "???????????????????_???????????????????_??????????????????_???????????????????_????????????????????_???????????????????_???????????????????".split("_"),
			weekdaysShort: "??????????????_??????????????_?????????????_??????????????_???????????????_??????????????_??????????????".split("_"),
			weekdaysMin: "???????_???????_??????_???????_????????_???????_???????".split("_"),
			longDateFormat: {
				LT: "Ah???????mm",
				L: "YYYY??????MMMD???????",
				LL: "YYYY??????MMMD???????",
				LLL: "YYYY??????MMMD???????LT",
				LLLL: "YYYY??????MMMD???????ddddLT",
				l: "YYYY??????MMMD???????",
				ll: "YYYY??????MMMD???????",
				lll: "YYYY??????MMMD???????LT",
				llll: "YYYY??????MMMD???????ddddLT"
			},
			meridiem: function(t, e, n) {
				return t < 9 ? "?????????????" : t < 11 && e < 30 ? "????????????" : t < 13 && e < 30 ? "????????????" : t < 18 ? "?????????????" : "?????????????"
			},
			calendar: {
				sameDay: "[????????????]LT",
				nextDay: "[????????????]LT",
				nextWeek: "[???????]ddddLT",
				lastDay: "[????????????]LT",
				lastWeek: "[??????]ddddLT",
				sameElse: "L"
			},
			ordinal: function(t, e) {
				switch(e) {
					case "d":
					case "D":
					case "DDD":
						return t + "???????";
					case "M":
						return t + "??????";
					case "w":
					case "W":
						return t + "???????";
					default:
						return t
				}
			},
			relativeTime: {
				future: "%s????????",
				past: "%s???????",
				s: "????? ???????",
				m: "1??????????????",
				mm: "%d??????????????",
				h: "1?????????????",
				hh: "%d?????????????",
				d: "1??????",
				dd: "%d??????",
				M: "1????????????",
				MM: "%d????????????",
				y: "1??????",
				yy: "%d??????"
			}
		})
	}(moment);