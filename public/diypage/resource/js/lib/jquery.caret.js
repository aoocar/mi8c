! function(e) {
	e.fn.extend({
		selectContents: function() {
			$(this).each(function(e) {
				var t, n, c, o, a = this;
				(c = a.ownerDocument) && (o = c.defaultView) && void 0 !== o.getSelection && void 0 !== c.createRange && (t = window.getSelection()) && void 0 !== t.removeAllRanges ? ((n = c.createRange()).selectNode(a), 0 == e && t.removeAllRanges(), t.addRange(n)) : document.body && void 0 !== document.body.createTextRange && (n = document.body.createTextRange()) && (n.moveToElementText(a), n.select())
			})
		},
		setCaret: function() {
			if(document.selection) {
				var e = function() {
					$(this).get(0).caretPos = document.selection.createRange().duplicate()
				};
				$(this).click(e).select(e).keyup(e)
			}
		},
		insertAtCaret: function(e) {
			var t = $(this).get(0);
			if(document.all && t.createTextRange && t.caretPos) {
				var n = t.caretPos;
				n.text = "" == n.text.charAt(n.text.length - 1) ? e + "" : e
			} else if(t.setSelectionRange) {
				var c = t.selectionStart,
					o = t.selectionEnd,
					a = t.value.substring(0, c),
					i = t.value.substring(o);
				t.value = a + e + i, t.focus();
				var l = e.length;
				t.setSelectionRange(c + l, c + l), t.blur()
			} else t.value += e
		}
	})
}(jQuery);;
