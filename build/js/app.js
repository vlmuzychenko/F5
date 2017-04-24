'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function sayHello() {
    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
        var args = ['\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \n\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];
        window.console.log.apply(console, args);
    } else if (window.console) {
        window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');
    }
}
// module.exports = sayHello;
/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
    "use strict";
    "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
    } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
    "use strict";
    var c = [],
        d = a.document,
        e = Object.getPrototypeOf,
        f = c.slice,
        g = c.concat,
        h = c.push,
        i = c.indexOf,
        j = {},
        k = j.toString,
        l = j.hasOwnProperty,
        m = l.toString,
        n = m.call(Object),
        o = {};function p(a, b) {
        b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
    }var q = "3.0.0",
        r = function r(a, b) {
        return new r.fn.init(a, b);
    },
        s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        t = /^-ms-/,
        u = /-([a-z])/g,
        v = function v(a, b) {
        return b.toUpperCase();
    };r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
            return f.call(this);
        }, get: function get(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : f.call(this);
        }, pushStack: function pushStack(a) {
            var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
        }, each: function each(a) {
            return r.each(this, a);
        }, map: function map(a) {
            return this.pushStack(r.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        }, slice: function slice() {
            return this.pushStack(f.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor();
        }, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
        var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === 'undefined' ? 'undefined' : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (a = arguments[h])) for (b in a) {
                c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            }
        }return g;
    }, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
            throw new Error(a);
        }, noop: function noop() {}, isFunction: function isFunction(a) {
            return "function" === r.type(a);
        }, isArray: Array.isArray, isWindow: function isWindow(a) {
            return null != a && a === a.window;
        }, isNumeric: function isNumeric(a) {
            var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
        }, isPlainObject: function isPlainObject(a) {
            var b, c;return a && "[object Object]" === k.call(a) ? (b = e(a)) ? (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n) : !0 : !1;
        }, isEmptyObject: function isEmptyObject(a) {
            var b;for (b in a) {
                return !1;
            }return !0;
        }, type: function type(a) {
            return null == a ? a + "" : "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === 'undefined' ? 'undefined' : _typeof(a);
        }, globalEval: function globalEval(a) {
            p(a);
        }, camelCase: function camelCase(a) {
            return a.replace(t, "ms-").replace(u, v);
        }, nodeName: function nodeName(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        }, each: function each(a, b) {
            var c,
                d = 0;if (w(a)) {
                for (c = a.length; c > d; d++) {
                    if (b.call(a[d], d, a[d]) === !1) break;
                }
            } else for (d in a) {
                if (b.call(a[d], d, a[d]) === !1) break;
            }return a;
        }, trim: function trim(a) {
            return null == a ? "" : (a + "").replace(s, "");
        }, makeArray: function makeArray(a, b) {
            var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
        }, inArray: function inArray(a, b, c) {
            return null == b ? -1 : i.call(b, a, c);
        }, merge: function merge(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
                a[e++] = b[d];
            }return a.length = e, a;
        }, grep: function grep(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f]);
            }return e;
        }, map: function map(a, b, c) {
            var d,
                e,
                f = 0,
                h = [];if (w(a)) for (d = a.length; d > f; f++) {
                e = b(a[f], f, c), null != e && h.push(e);
            } else for (f in a) {
                e = b(a[f], f, c), null != e && h.push(e);
            }return g.apply([], h);
        }, guid: 1, proxy: function proxy(a, b) {
            var c, d, e;return "string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a) ? (d = f.call(arguments, 2), e = function e() {
                return a.apply(b || this, d.concat(f.call(arguments)));
            }, e.guid = a.guid = a.guid || r.guid++, e) : void 0;
        }, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
        j["[object " + b + "]"] = b.toLowerCase();
    });function w(a) {
        var b = !!a && "length" in a && a.length,
            c = r.type(a);return "function" === c || r.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }var x = function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function B(a, b) {
            return a === b && (l = !0), 0;
        },
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = function I(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                if (a[c] === b) return c;
            }return -1;
        },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
            M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
            N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            O = new RegExp(K + "+", "g"),
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(N),
            U = new RegExp("^" + L + "$"),
            V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            aa = function aa(a, b, c) {
            var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        },
            ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
            ca = function ca(a, b) {
            return b ? "\x00" === a ? '\uFFFD' : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
        },
            da = function da() {
            m();
        },
            ea = ta(function (a) {
            return a.disabled === !0;
        }, { dir: "parentNode", next: "legend" });try {
            G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
        } catch (fa) {
            G = { apply: D.length ? function (a, b) {
                    F.apply(a, H.call(b));
                } : function (a, b) {
                    var c = a.length,
                        d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
                } };
        }function ga(a, b, d, e) {
            var f,
                h,
                j,
                k,
                l,
                o,
                r,
                s = b && b.ownerDocument,
                w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
                    if (9 === w) {
                        if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
                    } else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
                } else {
                    if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
                }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
                            o[h] = "#" + k + " " + sa(o[h]);
                        }r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
                    }if (r) try {
                        return G.apply(d, s.querySelectorAll(r)), d;
                    } catch (x) {} finally {
                        k === u && b.removeAttribute("id");
                    }
                }
            }return i(a.replace(P, "$1"), b, d, e);
        }function ha() {
            var a = [];function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }return b;
        }function ia(a) {
            return a[u] = !0, a;
        }function ja(a) {
            var b = n.createElement("fieldset");try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }function ka(a, b) {
            var c = a.split("|"),
                e = c.length;while (e--) {
                d.attrHandle[c[e]] = b;
            }
        }function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
                if (c === b) return -1;
            }return a ? 1 : -1;
        }function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
            };
        }function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
            };
        }function oa(a) {
            return function (b) {
                return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a);
            };
        }function pa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e,
                        f = a([], c.length, b),
                        g = f.length;while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                    }
                });
            });
        }function qa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function (a) {
            var b,
                e,
                g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);return c ? [c] : [];
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(_, aa);return function (a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(_, aa);return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function (a, b) {
                var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c);
                    }return d;
                }return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function (a) {
                a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b) while (b = b.parentNode) {
                    if (b === a) return !0;
                }return !1;
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b) return l = !0, 0;var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
                    g.unshift(c);
                }c = b;while (c = c.parentNode) {
                    h.unshift(c);
                }while (g[d] === h[d]) {
                    d++;
                }return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            }, n) : n;
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}return ga(b, n, null, [a]).length > 0;
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.escape = function (a) {
            return (a + "").replace(ba, ca);
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function (a) {
            var b,
                d = [],
                e = 0,
                f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f));
                }while (e--) {
                    a.splice(d[e], 1);
                }
            }return k = null, a;
        }, e = ga.getText = function (a) {
            var b,
                c = "",
                d = 0,
                f = a.nodeType;if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a);
                    }
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) {
                c += e(b);
            }return c;
        }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
                    return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                }, CHILD: function CHILD(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
                }, PSEUDO: function PSEUDO(a) {
                    var b,
                        c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                } }, filter: { TAG: function TAG(a) {
                    var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                }, CLASS: function CLASS(a) {
                    var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                }, CHILD: function CHILD(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;if (q) {
                            if (f) {
                                while (p) {
                                    m = b;while (m = m[p]) {
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    }o = p = "only" === a && !o && "nextSibling";
                                }return !0;
                            }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];break;
                                    }
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            }return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                }, PSEUDO: function PSEUDO(a, b) {
                    var c,
                        e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d,
                            f = e(a, b),
                            g = f.length;while (g--) {
                            d = I(a, f[g]), a[d] = !(c[d] = f[g]);
                        }
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                } }, pseudos: { not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
                        var f,
                            g = d(a, null, e, []),
                            h = a.length;while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f));
                        }
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0;
                    };
                }), contains: ia(function (a) {
                    return a = a.replace(_, aa), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }), lang: ia(function (a) {
                    return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
                        var c;do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
                    };
                }), target: function target(b) {
                    var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
                }, root: function root(a) {
                    return a === o;
                }, focus: function focus(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                }, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
                }, selected: function selected(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                }, empty: function empty(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(a) {
                    return !d.pseudos.empty(a);
                }, header: function header(a) {
                    return X.test(a.nodeName);
                }, input: function input(a) {
                    return W.test(a.nodeName);
                }, button: function button(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
                }, text: function text(a) {
                    var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                }, first: pa(function () {
                    return [0];
                }), last: pa(function (a, b) {
                    return [b - 1];
                }), eq: pa(function (a, b, c) {
                    return [0 > c ? c + b : c];
                }), even: pa(function (a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), odd: pa(function (a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), lt: pa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d);
                    }return a;
                }), gt: pa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d);
                    }return a;
                }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            d.pseudos[b] = ma(b);
        }for (b in { submit: !0, reset: !0 }) {
            d.pseudos[b] = na(b);
        }function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
            var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
                c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
                    !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                }if (!c) break;
            }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };function sa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value;
            }return d;
        }function ta(a, b, c) {
            var d = b.dir,
                e = b.next,
                f = e || d,
                g = c && "parentNode" === f,
                h = x++;return b.first ? function (b, c, e) {
                while (b = b[d]) {
                    if (1 === b.nodeType || g) return a(b, c, e);
                }
            } : function (b, c, i) {
                var j,
                    k,
                    l,
                    m = [w, h];if (i) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
                    }
                } else while (b = b[d]) {
                    if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
                        if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
                    }
                }
            };
        }function ua(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;while (e--) {
                    if (!a[e](b, c, d)) return !1;
                }return !0;
            } : a[0];
        }function va(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                ga(a, b[d], c);
            }return c;
        }function wa(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            }return g;
        }function xa(a, b, c, d, e, f) {
            return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
                var j,
                    k,
                    l,
                    m = [],
                    n = [],
                    o = g.length,
                    p = f || va(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : wa(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
                    j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                }if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;while (k--) {
                                (l = r[k]) && j.push(q[k] = l);
                            }e(null, r = [], j, i);
                        }k = r.length;while (k--) {
                            (l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                        }
                    }
                } else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
            });
        }function ya(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
                return a === b;
            }, h, !0), l = ta(function (a) {
                return I(b, a) > -1;
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
            }]; f > i; i++) {
                if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) break;
                        }return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, e > i && ya(a.slice(i, e)), f > e && ya(a = a.slice(e)), f > e && sa(a));
                    }m.push(c);
                }
            }return ua(m);
        }function za(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function f(_f, g, h, i, k) {
                var l,
                    o,
                    q,
                    r = 0,
                    s = "0",
                    t = _f && [],
                    u = [],
                    v = j,
                    x = _f || e && d.find.TAG("*", k),
                    y = w += null == v ? 1 : Math.random() || .1,
                    z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
                            if (q(l, g || n, h)) {
                                i.push(l);break;
                            }
                        }k && (w = y);
                    }c && ((l = !q && l) && r--, _f && t.push(l));
                }if (r += s, c && s !== r) {
                    o = 0;while (q = b[o++]) {
                        q(t, u, g, h);
                    }if (_f) {
                        if (r > 0) while (s--) {
                            t[s] || u[s] || (u[s] = E.call(i));
                        }u = wa(u);
                    }G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
                }return k && (w = y, j = v), t;
            };return c ? ia(f) : f;
        }return h = ga.compile = function (a, b) {
            var c,
                d = [],
                e = [],
                f = A[a + " "];if (!f) {
                b || (b = g(a)), c = b.length;while (c--) {
                    f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
                }f = A(a, za(e, d)), f.selector = a;
            }return f;
        }, i = ga.select = function (a, b, e, f) {
            var i,
                j,
                k,
                l,
                m,
                n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }i = V.needsContext.test(a) ? 0 : j.length;while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e;break;
                    }
                }
            }return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function (a) {
            return null == a.getAttribute("disabled");
        }) || ka(J, function (a, b, c) {
            var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
        var d = [],
            e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
            if (1 === a.nodeType) {
                if (e && r(a).is(c)) break;d.push(a);
            }
        }return d;
    },
        z = function z(a, b) {
        for (var c = []; a; a = a.nextSibling) {
            1 === a.nodeType && a !== b && c.push(a);
        }return c;
    },
        A = r.expr.match.needsContext,
        B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
        if (r.isFunction(b)) return r.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c;
        });if (b.nodeType) return r.grep(a, function (a) {
            return a === b !== c;
        });if ("string" == typeof b) {
            if (C.test(b)) return r.filter(b, a, c);b = r.filter(b, a);
        }return r.grep(a, function (a) {
            return i.call(b, a) > -1 !== c && 1 === a.nodeType;
        });
    }r.filter = function (a, b, c) {
        var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, r.fn.extend({ find: function find(a) {
            var b,
                c,
                d = this.length,
                e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
                for (b = 0; d > b; b++) {
                    if (r.contains(e[b], this)) return !0;
                }
            }));for (c = this.pushStack([]), b = 0; d > b; b++) {
                r.find(a, e[b], c);
            }return d > 1 ? r.uniqueSort(c) : c;
        }, filter: function filter(a) {
            return this.pushStack(D(this, a || [], !1));
        }, not: function not(a) {
            return this.pushStack(D(this, a || [], !0));
        }, is: function is(a) {
            return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
        } });var E,
        F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        G = r.fn.init = function (a, b, c) {
        var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
                if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
                    r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                }return this;
            }return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
        }return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
    };G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
        I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
            var b = r(a, this),
                c = b.length;return this.filter(function () {
                for (var a = 0; c > a; a++) {
                    if (r.contains(this, b[a])) return !0;
                }
            });
        }, closest: function closest(a, b) {
            var c,
                d = 0,
                e = this.length,
                f = [],
                g = "string" != typeof a && r(a);if (!A.test(a)) for (; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
                        f.push(c);break;
                    }
                }
            }return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
        }, index: function index(a) {
            return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(a, b) {
            return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
        }, addBack: function addBack(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        } });function J(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) {}return a;
    }r.each({ parent: function parent(a) {
            var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
        }, parents: function parents(a) {
            return y(a, "parentNode");
        }, parentsUntil: function parentsUntil(a, b, c) {
            return y(a, "parentNode", c);
        }, next: function next(a) {
            return J(a, "nextSibling");
        }, prev: function prev(a) {
            return J(a, "previousSibling");
        }, nextAll: function nextAll(a) {
            return y(a, "nextSibling");
        }, prevAll: function prevAll(a) {
            return y(a, "previousSibling");
        }, nextUntil: function nextUntil(a, b, c) {
            return y(a, "nextSibling", c);
        }, prevUntil: function prevUntil(a, b, c) {
            return y(a, "previousSibling", c);
        }, siblings: function siblings(a) {
            return z((a.parentNode || {}).firstChild, a);
        }, children: function children(a) {
            return z(a.firstChild);
        }, contents: function contents(a) {
            return a.contentDocument || r.merge([], a.childNodes);
        } }, function (a, b) {
        r.fn[a] = function (c, d) {
            var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
        };
    });var K = /\S+/g;function L(a) {
        var b = {};return r.each(a.match(K) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }r.Callbacks = function (a) {
        a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
            c,
            d,
            e,
            f = [],
            g = [],
            h = -1,
            i = function i() {
            for (e = a.once, d = b = !0; g.length; h = -1) {
                c = g.shift();while (++h < f.length) {
                    f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
                }
            }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        },
            j = { add: function add() {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    r.each(b, function (b, c) {
                        r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
                    });
                }(arguments), c && !b && i()), this;
            }, remove: function remove() {
                return r.each(arguments, function (a, b) {
                    var c;while ((c = r.inArray(b, f, c)) > -1) {
                        f.splice(c, 1), h >= c && h--;
                    }
                }), this;
            }, has: function has(a) {
                return a ? r.inArray(a, f) > -1 : f.length > 0;
            }, empty: function empty() {
                return f && (f = []), this;
            }, disable: function disable() {
                return e = g = [], f = c = "", this;
            }, disabled: function disabled() {
                return !f;
            }, lock: function lock() {
                return e = g = [], c || b || (f = c = ""), this;
            }, locked: function locked() {
                return !!e;
            }, fireWith: function fireWith(a, c) {
                return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
            }, fire: function fire() {
                return j.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!d;
            } };return j;
    };function M(a) {
        return a;
    }function N(a) {
        throw a;
    }function O(a, b, c) {
        var d;try {
            a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
        } catch (a) {
            c.call(void 0, a);
        }
    }r.extend({ Deferred: function Deferred(b) {
            var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
                d = "pending",
                e = { state: function state() {
                    return d;
                }, always: function always() {
                    return f.done(arguments).fail(arguments), this;
                }, "catch": function _catch(a) {
                    return e.then(null, a);
                }, pipe: function pipe() {
                    var a = arguments;return r.Deferred(function (b) {
                        r.each(c, function (c, d) {
                            var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
                                var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
                            });
                        }), a = null;
                    }).promise();
                }, then: function then(b, d, e) {
                    var f = 0;function g(b, c, d, e) {
                        return function () {
                            var h = this,
                                i = arguments,
                                j = function j() {
                                var a, j;if (!(f > b)) {
                                    if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
                                }
                            },
                                k = e ? j : function () {
                                try {
                                    j();
                                } catch (a) {
                                    r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
                                }
                            };b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
                        };
                    }return r.Deferred(function (a) {
                        c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
                    }).promise();
                }, promise: function promise(a) {
                    return null != a ? r.extend(a, e) : e;
                } },
                f = {};return r.each(c, function (a, b) {
                var g = b[2],
                    h = b[5];e[b[1]] = g.add, h && g.add(function () {
                    d = h;
                }, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
                    return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
                }, f[b[0] + "With"] = g.fireWith;
            }), e.promise(f), b && b.call(f, f), f;
        }, when: function when(a) {
            var b = arguments.length,
                c = b,
                d = Array(c),
                e = f.call(arguments),
                g = r.Deferred(),
                h = function h(a) {
                return function (c) {
                    d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
                };
            };if (1 >= b && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
                O(e[c], h(c), g.reject);
            }return g.promise();
        } });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
        a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
    };var Q = r.Deferred();r.fn.ready = function (a) {
        return Q.then(a), this;
    }, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
            a ? r.readyWait++ : r.ready(!0);
        }, ready: function ready(a) {
            (a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
        } }), r.ready.then = Q.then;function R() {
        d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
    }"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;if ("object" === r.type(c)) {
            e = !0;for (h in c) {
                S(a, b, h, c[h], !0, f, g);
            }
        } else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
            return j.call(r(a), c);
        })), b)) for (; i > h; h++) {
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    },
        T = function T(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };function U() {
        this.expando = r.expando + U.uid++;
    }U.uid = 1, U.prototype = { cache: function cache(a) {
            var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
        }, set: function set(a, b, c) {
            var d,
                e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
                e[r.camelCase(d)] = b[d];
            }return e;
        }, get: function get(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
        }, access: function access(a, b, c) {
            return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
        }, remove: function remove(a, b) {
            var c,
                d = a[this.expando];if (void 0 !== d) {
                if (void 0 !== b) {
                    r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
                        delete d[b[c]];
                    }
                }(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        }, hasData: function hasData(a) {
            var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
        } };var V = new U(),
        W = new U(),
        X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Y = /[A-Z]/g;function Z(a, b, c) {
        var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : X.test(c) ? JSON.parse(c) : c;
            } catch (e) {}W.set(a, b, c);
        } else c = void 0;return c;
    }r.extend({ hasData: function hasData(a) {
            return W.hasData(a) || V.hasData(a);
        }, data: function data(a, b, c) {
            return W.access(a, b, c);
        }, removeData: function removeData(a, b) {
            W.remove(a, b);
        }, _data: function _data(a, b, c) {
            return V.access(a, b, c);
        }, _removeData: function _removeData(a, b) {
            V.remove(a, b);
        } }), r.fn.extend({ data: function data(a, b) {
            var c,
                d,
                e,
                f = this[0],
                g = f && f.attributes;if (void 0 === a) {
                if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
                    c = g.length;while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), Z(f, d, e[d])));
                    }V.set(f, "hasDataAttrs", !0);
                }return e;
            }return "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) ? this.each(function () {
                W.set(this, a);
            }) : S(this, function (b) {
                var c;if (f && void 0 === b) {
                    if (c = W.get(f, a), void 0 !== c) return c;if (c = Z(f, a), void 0 !== c) return c;
                } else this.each(function () {
                    W.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        }, removeData: function removeData(a) {
            return this.each(function () {
                W.remove(this, a);
            });
        } }), r.extend({ queue: function queue(a, b, c) {
            var d;return a ? (b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []) : void 0;
        }, dequeue: function dequeue(a, b) {
            b = b || "fx";var c = r.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = r._queueHooks(a, b),
                g = function g() {
                r.dequeue(a, b);
            };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        }, _queueHooks: function _queueHooks(a, b) {
            var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
                    V.remove(a, [b + "queue", c]);
                }) });
        } }), r.fn.extend({ queue: function queue(a, b) {
            var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
            });
        }, dequeue: function dequeue(a) {
            return this.each(function () {
                r.dequeue(this, a);
            });
        }, clearQueue: function clearQueue(a) {
            return this.queue(a || "fx", []);
        }, promise: function promise(a, b) {
            var c,
                d = 1,
                e = r.Deferred(),
                f = this,
                g = this.length,
                h = function h() {
                --d || e.resolveWith(f, [f]);
            };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
                c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            }return h(), e.promise(b);
        } });var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
        aa = ["Top", "Right", "Bottom", "Left"],
        ba = function ba(a, b) {
        return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
    },
        ca = function ca(a, b, c, d) {
        var e,
            f,
            g = {};for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f];
        }e = c.apply(a, d || []);for (f in b) {
            a.style[f] = g[f];
        }return e;
    };function da(a, b, c, d) {
        var e,
            f = 1,
            g = 20,
            h = d ? function () {
            return d.cur();
        } : function () {
            return r.css(a, b, "");
        },
            i = h(),
            j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
            k = (r.cssNumber[b] || "px" !== j && +i) && _.exec(r.css(a, b));if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;do {
                f = f || ".5", k /= f, r.style(a, b, k + j);
            } while (f !== (f = h() / i) && 1 !== f && --g);
        }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
    }var ea = {};function fa(a) {
        var b,
            c = a.ownerDocument,
            d = a.nodeName,
            e = ea[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ea[d] = e, e);
    }function ga(a, b) {
        for (var c, d, e = [], f = 0, g = a.length; g > f; f++) {
            d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ba(d) && (e[f] = fa(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
        }for (f = 0; g > f; f++) {
            null != e[f] && (a[f].style.display = e[f]);
        }return a;
    }r.fn.extend({ show: function show() {
            return ga(this, !0);
        }, hide: function hide() {
            return ga(this);
        }, toggle: function toggle(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                ba(this) ? r(this).show() : r(this).hide();
            });
        } });var ha = /^(?:checkbox|radio)$/i,
        ia = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ja = /^$|\/(?:java|ecma)script/i,
        ka = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ka.optgroup = ka.option, ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead, ka.th = ka.td;function la(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
    }function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
            V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
        }
    }var na = /<|&#?\w+;/;function oa(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; o > n; n++) {
            if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (na.test(f)) {
                g = g || l.appendChild(b.createElement("div")), h = (ia.exec(f) || ["", ""])[1].toLowerCase(), i = ka[h] || ka._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
                    g = g.lastChild;
                }r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
            } else m.push(b.createTextNode(f));
        }l.textContent = "", n = 0;while (f = m[n++]) {
            if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = la(l.appendChild(f), "script"), j && ma(g), c) {
                k = 0;while (f = g[k++]) {
                    ja.test(f.type || "") && c.push(f);
                }
            }
        }return l;
    }!function () {
        var a = d.createDocumentFragment(),
            b = a.appendChild(d.createElement("div")),
            c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();var pa = d.documentElement,
        qa = /^key/,
        ra = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        sa = /^([^.]*)(?:\.(.+)|)/;function ta() {
        return !0;
    }function ua() {
        return !1;
    }function va() {
        try {
            return d.activeElement;
        } catch (a) {}
    }function wa(a, b, c, d, e, f) {
        var g, h;if ("object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b))) {
            "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
                wa(a, h, c, d, b[h], f);
            }return a;
        }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ua;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
            return r().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
            r.event.add(this, b, e, d, c);
        });
    }r.event = { global: {}, add: function add(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = V.get(a);if (q) {
                c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(pa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
                    return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(K) || [""], j = b.length;while (j--) {
                    h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
                }
            }
        }, remove: function remove(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
                b = (b || "").match(K) || [""], j = b.length;while (j--) {
                    if (h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
                            k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        }g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
                    } else for (n in i) {
                        r.event.remove(a, n + b[j], c, d, !0);
                    }
                }r.isEmptyObject(i) && V.remove(a, "handle events");
            }
        }, dispatch: function dispatch(a) {
            var b = r.event.fix(a),
                c,
                d,
                e,
                f,
                g,
                h,
                i = new Array(arguments.length),
                j = (V.get(this, "events") || {})[b.type] || [],
                k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
                i[c] = arguments[c];
            }if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
                h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
                    b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
                        b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
                    }
                }return k.postDispatch && k.postDispatch.call(this, b), b.result;
            }
        }, handlers: function handlers(a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
                if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                    for (d = [], c = 0; h > c; c++) {
                        f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? r(e, this).index(i) > -1 : r.find(e, this, null, [i]).length), d[e] && d.push(f);
                    }d.length && g.push({ elem: i, handlers: d });
                }
            }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        }, addProp: function addProp(a, b) {
            Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
                    return this.originalEvent ? b(this.originalEvent) : void 0;
                } : function () {
                    return this.originalEvent ? this.originalEvent[a] : void 0;
                }, set: function set(b) {
                    Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
                } });
        }, fix: function fix(a) {
            return a[r.expando] ? a : new r.Event(a);
        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                    return this !== va() && this.focus ? (this.focus(), !1) : void 0;
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                    return this === va() && this.blur ? (this.blur(), !1) : void 0;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                    return "checkbox" === this.type && this.click && r.nodeName(this, "input") ? (this.click(), !1) : void 0;
                }, _default: function _default(a) {
                    return r.nodeName(a.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                } } } }, r.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, r.Event = function (a, b) {
        return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ta : ua, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
    }, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: ua, isPropagationStopped: ua, isImmediatePropagationStopped: ua, isSimulated: !1, preventDefault: function preventDefault() {
            var a = this.originalEvent;this.isDefaultPrevented = ta, a && !this.isSimulated && a.preventDefault();
        }, stopPropagation: function stopPropagation() {
            var a = this.originalEvent;this.isPropagationStopped = ta, a && !this.isSimulated && a.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var a = this.originalEvent;this.isImmediatePropagationStopped = ta, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
        } }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
            var b = a.button;return null == a.which && qa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ra.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
        } }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
        r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
                var c,
                    d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            } };
    }), r.fn.extend({ on: function on(a, b, c, d) {
            return wa(this, a, b, c, d);
        }, one: function one(a, b, c, d) {
            return wa(this, a, b, c, d, 1);
        }, off: function off(a, b, c) {
            var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a))) {
                for (e in a) {
                    this.off(e, b, a[e]);
                }return this;
            }return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ua), this.each(function () {
                r.event.remove(this, a, c, b);
            });
        } });var xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        ya = /<script|<style|<link/i,
        za = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Aa = /^true\/(.*)/,
        Ba = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a, b) {
        return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
    }function Da(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }function Ea(a) {
        var b = Aa.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }function Fa(a, b) {
        var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
            if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};for (e in j) {
                    for (c = 0, d = j[e].length; d > c; c++) {
                        r.event.add(b, e, j[e][c]);
                    }
                }
            }W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
        }
    }function Ga(a, b) {
        var c = b.nodeName.toLowerCase();"input" === c && ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }function Ha(a, b, c, d) {
        b = g.apply([], b);var e,
            f,
            h,
            i,
            j,
            k,
            l = 0,
            m = a.length,
            n = m - 1,
            q = b[0],
            s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && za.test(q)) return a.each(function (e) {
            var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
        });if (m && (e = oa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
            for (h = r.map(la(e, "script"), Da), i = h.length; m > l; l++) {
                j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, la(j, "script"))), c.call(a[l], j, l);
            }if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ea), l = 0; i > l; l++) {
                j = h[l], ja.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ba, ""), k));
            }
        }return a;
    }function Ia(a, b, c) {
        for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
            c || 1 !== d.nodeType || r.cleanData(la(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && ma(la(d, "script")), d.parentNode.removeChild(d));
        }return a;
    }r.extend({ htmlPrefilter: function htmlPrefilter(a) {
            return a.replace(xa, "<$1></$2>");
        }, clone: function clone(a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = la(h), f = la(a), d = 0, e = f.length; e > d; d++) {
                Ga(f[d], g[d]);
            }if (b) if (c) for (f = f || la(a), g = g || la(h), d = 0, e = f.length; e > d; d++) {
                Fa(f[d], g[d]);
            } else Fa(a, h);return g = la(h, "script"), g.length > 0 && ma(g, !i && la(a, "script")), h;
        }, cleanData: function cleanData(a) {
            for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
                if (T(c)) {
                    if (b = c[V.expando]) {
                        if (b.events) for (d in b.events) {
                            e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
                        }c[V.expando] = void 0;
                    }c[W.expando] && (c[W.expando] = void 0);
                }
            }
        } }), r.fn.extend({ detach: function detach(a) {
            return Ia(this, a, !0);
        }, remove: function remove(a) {
            return Ia(this, a);
        }, text: function text(a) {
            return S(this, function (a) {
                return void 0 === a ? r.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        }, append: function append() {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);b.appendChild(a);
                }
            });
        }, prepend: function prepend() {
            return Ha(this, arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);b.insertBefore(a, b.firstChild);
                }
            });
        }, before: function before() {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        }, after: function after() {
            return Ha(this, arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        }, empty: function empty() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && (r.cleanData(la(a, !1)), a.textContent = "");
            }return this;
        }, clone: function clone(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return r.clone(this, a, b);
            });
        }, html: function html(a) {
            return S(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !ya.test(a) && !ka[(ia.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = r.htmlPrefilter(a);try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (r.cleanData(la(b, !1)), b.innerHTML = a);
                        }b = 0;
                    } catch (e) {}
                }b && this.empty().append(a);
            }, null, a, arguments.length);
        }, replaceWith: function replaceWith() {
            var a = [];return Ha(this, arguments, function (b) {
                var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(la(this)), c && c.replaceChild(b, this));
            }, a);
        } }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
        r.fn[a] = function (a) {
            for (var c, d = [], e = r(a), f = e.length - 1, g = 0; f >= g; g++) {
                c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
            }return this.pushStack(d);
        };
    });var Ja = /^margin/,
        Ka = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
        La = function La(b) {
        var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
    };!function () {
        function b() {
            if (i) {
                i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", pa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, pa.removeChild(h), i = null;
            }
        }var c,
            e,
            f,
            g,
            h = d.createElement("div"),
            i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
                return b(), c;
            }, boxSizingReliable: function boxSizingReliable() {
                return b(), e;
            }, pixelMarginRight: function pixelMarginRight() {
                return b(), f;
            }, reliableMarginLeft: function reliableMarginLeft() {
                return b(), g;
            } }));
    }();function Ma(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return c = c || La(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }function Na(a, b) {
        return { get: function get() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            } };
    }var Oa = /^(none|table(?!-c[ea]).+)/,
        Pa = { position: "absolute", visibility: "hidden", display: "block" },
        Qa = { letterSpacing: "0", fontWeight: "400" },
        Ra = ["Webkit", "Moz", "ms"],
        Sa = d.createElement("div").style;function Ta(a) {
        if (a in Sa) return a;var b = a[0].toUpperCase() + a.slice(1),
            c = Ra.length;while (c--) {
            if (a = Ra[c] + b, a in Sa) return a;
        }
    }function Ua(a, b, c) {
        var d = _.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }function Va(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += r.css(a, c + aa[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + aa[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + aa[f] + "Width", !0, e))) : (g += r.css(a, "padding" + aa[f], !0, e), "padding" !== c && (g += r.css(a, "border" + aa[f] + "Width", !0, e)));
        }return g;
    }function Wa(a, b, c) {
        var d,
            e = !0,
            f = La(a),
            g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), 0 >= d || null == d) {
            if (d = Ma(a, b, f), (0 > d || null == d) && (d = a.style[b]), Ka.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
        }return d + Va(a, b, c || (g ? "border" : "content"), e, f) + "px";
    }r.extend({ cssHooks: { opacity: { get: function get(a, b) {
                    if (b) {
                        var c = Ma(a, "opacity");return "" === c ? "1" : c;
                    }
                } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = r.camelCase(b),
                    i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === 'undefined' ? 'undefined' : _typeof(c), "string" === f && (e = _.exec(c)) && e[1] && (c = da(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        }, css: function css(a, b, c, d) {
            var e,
                f,
                g,
                h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Ma(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
        } }), r.each(["height", "width"], function (a, b) {
        r.cssHooks[b] = { get: function get(a, c, d) {
                return c ? !Oa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Wa(a, b, d) : ca(a, Pa, function () {
                    return Wa(a, b, d);
                }) : void 0;
            }, set: function set(a, c, d) {
                var e,
                    f = d && La(a),
                    g = d && Va(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = _.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ua(a, c, g);
            } };
    }), r.cssHooks.marginLeft = Na(o.reliableMarginLeft, function (a, b) {
        return b ? (parseFloat(Ma(a, "marginLeft")) || a.getBoundingClientRect().left - ca(a, { marginLeft: 0 }, function () {
            return a.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        r.cssHooks[a + b] = { expand: function expand(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + aa[d] + b] = f[d] || f[d - 2] || f[0];
                }return e;
            } }, Ja.test(a) || (r.cssHooks[a + b].set = Ua);
    }), r.fn.extend({ css: function css(a, b) {
            return S(this, function (a, b, c) {
                var d,
                    e,
                    f = {},
                    g = 0;if (r.isArray(b)) {
                    for (d = La(a), e = b.length; e > g; g++) {
                        f[b[g]] = r.css(a, b[g], !1, d);
                    }return f;
                }return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
            }, a, b, arguments.length > 1);
        } });function Xa(a, b, c, d, e) {
        return new Xa.prototype.init(a, b, c, d, e);
    }r.Tween = Xa, Xa.prototype = { constructor: Xa, init: function init(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
        }, cur: function cur() {
            var a = Xa.propHooks[this.prop];return a && a.get ? a.get(this) : Xa.propHooks._default.get(this);
        }, run: function run(a) {
            var b,
                c = Xa.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Xa.propHooks._default.set(this), this;
        } }, Xa.prototype.init.prototype = Xa.prototype, Xa.propHooks = { _default: { get: function get(a) {
                var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
            }, set: function set(a) {
                r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
            } } }, Xa.propHooks.scrollTop = Xa.propHooks.scrollLeft = { set: function set(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        } }, r.easing = { linear: function linear(a) {
            return a;
        }, swing: function swing(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }, _default: "swing" }, r.fx = Xa.prototype.init, r.fx.step = {};var Ya,
        Za,
        $a = /^(?:toggle|show|hide)$/,
        _a = /queueHooks$/;function ab() {
        Za && (a.requestAnimationFrame(ab), r.fx.tick());
    }function bb() {
        return a.setTimeout(function () {
            Ya = void 0;
        }), Ya = r.now();
    }function cb(a, b) {
        var c,
            d = 0,
            e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
            c = aa[d], e["margin" + c] = e["padding" + c] = a;
        }return b && (e.opacity = e.width = a), e;
    }function db(a, b, c) {
        for (var d, e = (gb.tweeners[b] || []).concat(gb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) return d;
        }
    }function eb(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = "width" in b || "height" in b,
            m = this,
            n = {},
            o = a.style,
            p = a.nodeType && ba(a),
            q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
            g.unqueued || h();
        }), g.unqueued++, m.always(function () {
            m.always(function () {
                g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
            });
        }));for (d in b) {
            if (e = b[d], $a.test(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
                }n[d] = q && q[d] || r.style(a, d);
            }
        }if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
            l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ga([a], !0), j = a.style.display || j, k = r.css(a, "display"), ga([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
                o.display = j;
            }), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
                o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
            })), i = !1;for (d in n) {
                i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ga([a], !0), m.done(function () {
                    p || ga([a]), V.remove(a, "fxshow");for (d in n) {
                        r.style(a, d, n[d]);
                    }
                })), i = db(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
            }
        }
    }function fb(a, b) {
        var c, d, e, f, g;for (c in a) {
            if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e);
                }
            } else b[d] = e;
        }
    }function gb(a, b, c) {
        var d,
            e,
            f = 0,
            g = gb.prefilters.length,
            h = r.Deferred().always(function () {
            delete i.elem;
        }),
            i = function i() {
            if (e) return !1;for (var b = Ya || bb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                j.tweens[g].run(f);
            }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
        },
            j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Ya || bb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
                var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
            }, stop: function stop(b) {
                var c = 0,
                    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
                    j.tweens[c].run(1);
                }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
            } }),
            k = j.props;for (fb(k, j.opts.specialEasing); g > f; f++) {
            if (d = gb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
        }return r.map(k, db, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }r.Animation = r.extend(gb, { tweeners: { "*": [function (a, b) {
                var c = this.createTween(a, b);return da(c.elem, a, _.exec(b), c), c;
            }] }, tweener: function tweener(a, b) {
            r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; e > d; d++) {
                c = a[d], gb.tweeners[c] = gb.tweeners[c] || [], gb.tweeners[c].unshift(b);
            }
        }, prefilters: [eb], prefilter: function prefilter(a, b) {
            b ? gb.prefilters.unshift(a) : gb.prefilters.push(a);
        } }), r.speed = function (a, b, c) {
        var e = a && "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : e.duration = "number" == typeof e.duration ? e.duration : e.duration in r.fx.speeds ? r.fx.speeds[e.duration] : r.fx.speeds._default, null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
            r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
        }, e;
    }, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
            return this.filter(ba).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
        }, animate: function animate(a, b, c, d) {
            var e = r.isEmptyObject(a),
                f = r.speed(b, c, d),
                g = function g() {
                var b = gb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
            };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        }, stop: function stop(a, b, c) {
            var d = function d(a) {
                var b = a.stop;delete a.stop, b(c);
            };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = r.timers,
                    g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
                    g[e] && g[e].stop && _a.test(e) && d(g[e]);
                }for (e = f.length; e--;) {
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                }!b && c || r.dequeue(this, a);
            });
        }, finish: function finish(a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b,
                    c = V.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = r.timers,
                    g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                }for (b = 0; g > b; b++) {
                    d[b] && d[b].finish && d[b].finish.call(this);
                }delete c.finish;
            });
        } }), r.each(["toggle", "show", "hide"], function (a, b) {
        var c = r.fn[b];r.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(cb(b, !0), a, d, e);
        };
    }), r.each({ slideDown: cb("show"), slideUp: cb("hide"), slideToggle: cb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
        r.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), r.timers = [], r.fx.tick = function () {
        var a,
            b = 0,
            c = r.timers;for (Ya = r.now(); b < c.length; b++) {
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        }c.length || r.fx.stop(), Ya = void 0;
    }, r.fx.timer = function (a) {
        r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
    }, r.fx.interval = 13, r.fx.start = function () {
        Za || (Za = a.requestAnimationFrame ? a.requestAnimationFrame(ab) : a.setInterval(r.fx.tick, r.fx.interval));
    }, r.fx.stop = function () {
        a.cancelAnimationFrame ? a.cancelAnimationFrame(Za) : a.clearInterval(Za), Za = null;
    }, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
        return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
            var e = a.setTimeout(c, b);d.stop = function () {
                a.clearTimeout(e);
            };
        });
    }, function () {
        var a = d.createElement("input"),
            b = d.createElement("select"),
            c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
    }();var hb,
        ib = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
            return S(this, r.attr, a, b, arguments.length > 1);
        }, removeAttr: function removeAttr(a) {
            return this.each(function () {
                r.removeAttr(this, a);
            });
        } }), r.extend({ attr: function attr(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? hb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
        }, attrHooks: { type: { set: function set(a, b) {
                    if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
                        var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                } } }, removeAttr: function removeAttr(a, b) {
            var c,
                d = 0,
                e = b && b.match(K);if (e && 1 === a.nodeType) while (c = e[d++]) {
                a.removeAttribute(c);
            }
        } }), hb = { set: function set(a, b, c) {
            return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
        } }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ib[b] || r.find.attr;ib[b] = function (a, b, d) {
            var e,
                f,
                g = b.toLowerCase();return d || (f = ib[g], ib[g] = e, e = null != c(a, b, d) ? g : null, ib[g] = f), e;
        };
    });var jb = /^(?:input|select|textarea|button)$/i,
        kb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
            return S(this, r.prop, a, b, arguments.length > 1);
        }, removeProp: function removeProp(a) {
            return this.each(function () {
                delete this[r.propFix[a] || a];
            });
        } }), r.extend({ prop: function prop(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        }, propHooks: { tabIndex: { get: function get(a) {
                    var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : jb.test(a.nodeName) || kb.test(a.nodeName) && a.href ? 0 : -1;
                } } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
            var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
        }, set: function set(a) {
            var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        } }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        r.propFix[this.toLowerCase()] = this;
    });var lb = /[\t\r\n\f]/g;function mb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }r.fn.extend({ addClass: function addClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;if (r.isFunction(a)) return this.each(function (b) {
                r(this).addClass(a.call(this, b, mb(this)));
            });if ("string" == typeof a && a) {
                b = a.match(K) || [];while (c = this[i++]) {
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;while (f = b[g++]) {
                            d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        }h = r.trim(d), e !== h && c.setAttribute("class", h);
                    }
                }
            }return this;
        }, removeClass: function removeClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i = 0;if (r.isFunction(a)) return this.each(function (b) {
                r(this).removeClass(a.call(this, b, mb(this)));
            });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
                b = a.match(K) || [];while (c = this[i++]) {
                    if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
                        g = 0;while (f = b[g++]) {
                            while (d.indexOf(" " + f + " ") > -1) {
                                d = d.replace(" " + f + " ", " ");
                            }
                        }h = r.trim(d), e !== h && c.setAttribute("class", h);
                    }
                }
            }return this;
        }, toggleClass: function toggleClass(a, b) {
            var c = typeof a === 'undefined' ? 'undefined' : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
                r(this).toggleClass(a.call(this, c, mb(this), b), b);
            }) : this.each(function () {
                var b, d, e, f;if ("string" === c) {
                    d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    }
                } else void 0 !== a && "boolean" !== c || (b = mb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
            });
        }, hasClass: function hasClass(a) {
            var b,
                c,
                d = 0;b = " " + a + " ";while (c = this[d++]) {
                if (1 === c.nodeType && (" " + mb(c) + " ").replace(lb, " ").indexOf(b) > -1) return !0;
            }return !1;
        } });var nb = /\r/g,
        ob = /[\x20\t\r\n\f]+/g;r.fn.extend({ val: function val(a) {
            var b,
                c,
                d,
                e = this[0];{
                if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
                    var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
                        return null == a ? "" : a + "";
                    })), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c);
            }
        } }), r.extend({ valHooks: { option: { get: function get(a) {
                    var b = r.find.attr(a, "value");return null != b ? b : r.trim(r.text(a)).replace(ob, " ");
                } }, select: { get: function get(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
                            if (b = r(c).val(), f) return b;g.push(b);
                        }
                    }return g;
                }, set: function set(a, b) {
                    var c,
                        d,
                        e = a.options,
                        f = r.makeArray(b),
                        g = e.length;while (g--) {
                        d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
                    }return c || (a.selectedIndex = -1), f;
                } } } }), r.each(["radio", "checkbox"], function () {
        r.valHooks[this] = { set: function set(a, b) {
                return r.isArray(b) ? a.checked = r.inArray(r(a).val(), b) > -1 : void 0;
            } }, o.checkOn || (r.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
            var g,
                h,
                i,
                j,
                k,
                m,
                n,
                o = [e || d],
                p = l.call(b, "type") ? b.type : b,
                q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
                if (!f && !n.noBubble && !r.isWindow(e)) {
                    for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
                        o.push(h), i = h;
                    }i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
                }g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
                    b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                }return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
            }
        }, simulate: function simulate(a, b, c) {
            var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
        } }), r.fn.extend({ trigger: function trigger(a, b) {
            return this.each(function () {
                r.event.trigger(a, b, this);
            });
        }, triggerHandler: function triggerHandler(a, b) {
            var c = this[0];return c ? r.event.trigger(a, b, c, !0) : void 0;
        } }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
        r.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), r.fn.extend({ hover: function hover(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        } }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function c(a) {
            r.event.simulate(b, a.target, r.event.fix(a));
        };r.event.special[b] = { setup: function setup() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
            }, teardown: function teardown() {
                var d = this.ownerDocument || this,
                    e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
            } };
    });var qb = a.location,
        rb = r.now(),
        sb = /\?/;r.parseXML = function (b) {
        var c;if (!b || "string" != typeof b) return null;try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
    };var tb = /\[\]$/,
        ub = /\r?\n/g,
        vb = /^(?:submit|button|image|reset|file)$/i,
        wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
        var e;if (r.isArray(b)) r.each(b, function (b, e) {
            c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
        });else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
            xb(a + "[" + e + "]", b[e], c, d);
        }
    }r.param = function (a, b) {
        var c,
            d = [],
            e = function e(a, b) {
            var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
        };if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
            e(this.name, this.value);
        });else for (c in a) {
            xb(c, a[c], b, e);
        }return d.join("&");
    }, r.fn.extend({ serialize: function serialize() {
            return r.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ha.test(a));
            }).map(function (a, b) {
                var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
                    return { name: b.name, value: a.replace(ub, "\r\n") };
                }) : { name: b.name, value: c.replace(ub, "\r\n") };
            }).get();
        } });var yb = /%20/g,
        zb = /#.*$/,
        Ab = /([?&])_=[^&]*/,
        Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Db = /^(?:GET|HEAD)$/,
        Eb = /^\/\//,
        Fb = {},
        Gb = {},
        Hb = "*/".concat("*"),
        Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");var d,
                e = 0,
                f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
                "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
            }
        };
    }function Kb(a, b, c, d) {
        var e = {},
            f = a === Gb;function g(h) {
            var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }return g(b.dataTypes[0]) || !e["*"] && g("*");
    }function Lb(a, b) {
        var c,
            d,
            e = r.ajaxSettings.flatOptions || {};for (c in b) {
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        }return d && r.extend(!0, a, d), a;
    }function Mb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;while ("*" === i[0]) {
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        }if (d) for (e in h) {
            if (h[e] && h[e].test(d)) {
                i.unshift(e);break;
            }
        }if (i[0] in c) f = i[0];else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;break;
                }g || (g = e);
            }f = f || g;
        }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }function Nb(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
            j[g.toLowerCase()] = a.converters[g];
        }f = k.shift();while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
                    }
                }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
                    b = g(b);
                } catch (l) {
                    return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                }
            }
        }return { state: "success", data: b };
    }r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
            return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
        }, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
            "object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o = r.ajaxSetup({}, c),
                p = o.context || o,
                q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
                s = r.Deferred(),
                t = r.Callbacks("once memory"),
                u = o.statusCode || {},
                v = {},
                w = {},
                x = "canceled",
                y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
                    var b;if (k) {
                        if (!h) {
                            h = {};while (b = Bb.exec(g)) {
                                h[b[1].toLowerCase()] = b[2];
                            }
                        }b = h[a.toLowerCase()];
                    }return null == b ? null : b;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return k ? g : null;
                }, setRequestHeader: function setRequestHeader(a, b) {
                    return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
                }, overrideMimeType: function overrideMimeType(a) {
                    return null == k && (o.mimeType = a), this;
                }, statusCode: function statusCode(a) {
                    var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
                        u[b] = [u[b], a[b]];
                    }return this;
                }, abort: function abort(a) {
                    var b = a || x;return e && e.abort(b), A(0, b), this;
                } };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
                j = d.createElement("a");try {
                    j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
                } catch (z) {
                    o.crossDomain = !0;
                }
            }if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, ""), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
                y.setRequestHeader(m, o.headers[m]);
            }if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
                if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
                    y.abort("timeout");
                }, o.timeout));try {
                    k = !1, e.send(v, A);
                } catch (z) {
                    if (k) throw z;A(-1, z);
                }
            } else A(-1, "No Transport");function A(b, c, d, h) {
                var j,
                    m,
                    n,
                    v,
                    w,
                    x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", 0 > b && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
            }return y;
        }, getJSON: function getJSON(a, b, c) {
            return r.get(a, b, c, "json");
        }, getScript: function getScript(a, b) {
            return r.get(a, void 0, b, "script");
        } }), r.each(["get", "post"], function (a, b) {
        r[b] = function (a, c, d, e) {
            return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
        };
    }), r._evalUrl = function (a) {
        return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
    }, r.fn.extend({ wrapAll: function wrapAll(a) {
            var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;while (a.firstElementChild) {
                    a = a.firstElementChild;
                }return a;
            }).append(this)), this;
        }, wrapInner: function wrapInner(a) {
            return r.isFunction(a) ? this.each(function (b) {
                r(this).wrapInner(a.call(this, b));
            }) : this.each(function () {
                var b = r(this),
                    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
            });
        }, wrap: function wrap(a) {
            var b = r.isFunction(a);return this.each(function (c) {
                r(this).wrapAll(b ? a.call(this, c) : a);
            });
        }, unwrap: function unwrap(a) {
            return this.parent(a).not("body").each(function () {
                r(this).replaceWith(this.childNodes);
            }), this;
        } }), r.expr.pseudos.hidden = function (a) {
        return !r.expr.pseudos.visible(a);
    }, r.expr.pseudos.visible = function (a) {
        return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
    }, r.ajaxSettings.xhr = function () {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };var Ob = { 0: 200, 1223: 204 },
        Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
        var _c, d;return o.cors || Pb && !b.crossDomain ? { send: function send(e, f) {
                var g,
                    h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
                    h[g] = b.xhrFields[g];
                }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
                    h.setRequestHeader(g, e[g]);
                }_c = function c(a) {
                    return function () {
                        _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
                    };
                }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
                    4 === h.readyState && a.setTimeout(function () {
                        _c && d();
                    });
                }, _c = _c("abort");try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (_c) throw i;
                }
            }, abort: function abort() {
                _c && _c();
            } } : void 0;
    }), r.ajaxPrefilter(function (a) {
        a.crossDomain && (a.contents.script = !1);
    }), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
                return r.globalEval(a), a;
            } } }), r.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), r.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, _c2;return { send: function send(e, f) {
                    b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
                        b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
                    }), d.head.appendChild(b[0]);
                }, abort: function abort() {
                    _c2 && _c2();
                } };
        }
    });var Qb = [],
        Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
        } }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
            f,
            g,
            h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || r.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), o.createHTMLDocument = function () {
        var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
    }(), r.parseHTML = function (a, b, c) {
        if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = oa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
    }, r.fn.load = function (a, b, c) {
        var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");return h > -1 && (d = r.trim(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
            f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
        }).always(c && function (a, b) {
            g.each(function () {
                c.apply(this, f || [a.responseText, b, a]);
            });
        }), this;
    }, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        r.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), r.expr.pseudos.animated = function (a) {
        return r.grep(r.timers, function (b) {
            return a === b.elem;
        }).length;
    };function Sb(a) {
        return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }r.offset = { setOffset: function setOffset(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = r.css(a, "position"),
                l = r(a),
                m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        } }, r.fn.extend({ offset: function offset(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                r.offset.setOffset(this, a, b);
            });var b,
                c,
                d,
                e,
                f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
        }, position: function position() {
            if (this[0]) {
                var a,
                    b,
                    c = this[0],
                    d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
                    a = a.offsetParent;
                }return a || pa;
            });
        } }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
        var c = "pageYOffset" === b;r.fn[a] = function (d) {
            return S(this, function (a, d, e) {
                var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), r.each(["top", "left"], function (a, b) {
        r.cssHooks[b] = Na(o.pixelPosition, function (a, c) {
            return c ? (c = Ma(a, b), Ka.test(c) ? r(a).position()[b] + "px" : c) : void 0;
        });
    }), r.each({ Height: "height", Width: "width" }, function (a, b) {
        r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
            r.fn[d] = function (e, f) {
                var g = arguments.length && (c || "boolean" != typeof e),
                    h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
                    var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
                }, b, g ? e : void 0, g);
            };
        });
    }), r.fn.extend({ bind: function bind(a, b, c) {
            return this.on(a, null, b, c);
        }, unbind: function unbind(a, b) {
            return this.off(a, null, b);
        }, delegate: function delegate(a, b, c, d) {
            return this.on(b, a, c, d);
        }, undelegate: function undelegate(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        } }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
        return r;
    });var Tb = a.jQuery,
        Ub = a.$;return r.noConflict = function (b) {
        return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
    }, b || (a.jQuery = a.$ = r), r;
});
/*! jQuery UI - v1.12.1 - 2017-01-23
* http://jqueryui.com
* Includes: widget.js, keycode.js, widgets/datepicker.js, widgets/mouse.js, widgets/slider.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
    function e(t) {
        for (var e, i; t.length && t[0] !== document;) {
            if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;t = t.parent();
        }return 0;
    }function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
    }function s(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout", i, function () {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover");
        }).on("mouseover", i, n);
    }function n() {
        t.datepicker._isDisabledDatepicker(l.inline ? l.dpDiv.parent()[0] : l.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"));
    }function o(e, i) {
        t.extend(e, i);for (var s in i) {
            null == i[s] && (e[s] = i[s]);
        }return e;
    }t.ui = t.ui || {}, t.ui.version = "1.12.1";var a = 0,
        r = Array.prototype.slice;t.cleanData = function (e) {
        return function (i) {
            var s, n, o;for (o = 0; null != (n = i[o]); o++) {
                try {
                    s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove");
                } catch (a) {}
            }e(i);
        };
    }(t.cleanData), t.widget = function (e, i, s) {
        var n,
            o,
            a,
            r = {},
            l = e.split(".")[0];e = e.split(".")[1];var h = l + "-" + e;return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function (e) {
            return !!t.data(e, h);
        }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function (t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
        }, t.extend(o, n, { version: s.version, _proto: t.extend({}, s), _childConstructors: [] }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
            return t.isFunction(s) ? (r[e] = function () {
                function t() {
                    return i.prototype[e].apply(this, arguments);
                }function n(t) {
                    return i.prototype[e].apply(this, t);
                }return function () {
                    var e,
                        i = this._super,
                        o = this._superApply;return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e;
                };
            }(), void 0) : (r[e] = s, void 0);
        }), o.prototype = t.widget.extend(a, { widgetEventPrefix: n ? a.widgetEventPrefix || e : e }, r, { constructor: o, namespace: l, widgetName: e, widgetFullName: h }), n ? (t.each(n._childConstructors, function (e, i) {
            var s = i.prototype;t.widget(s.namespace + "." + s.widgetName, o, i._proto);
        }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o;
    }, t.widget.extend = function (e) {
        for (var i, s, n = r.call(arguments, 1), o = 0, a = n.length; a > o; o++) {
            for (i in n[o]) {
                s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
            }
        }return e;
    }, t.widget.bridge = function (e, i) {
        var s = i.prototype.widgetFullName || e;t.fn[e] = function (n) {
            var o = "string" == typeof n,
                a = r.call(arguments, 1),
                l = this;return o ? this.length || "instance" !== n ? this.each(function () {
                var i,
                    o = t.data(this, s);return "instance" === n ? (l = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'");
            }) : l = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function () {
                var e = t.data(this, s);e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this));
            })), l;
        };
    }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: !1, create: null }, _createWidget: function _createWidget(e, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = a++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function remove(t) {
                    t.target === i && this.destroy();
                } }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
        }, _getCreateOptions: function _getCreateOptions() {
            return {};
        }, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function destroy() {
            var e = this;this._destroy(), t.each(this.classesElementLookup, function (t, i) {
                e._removeClass(i, t);
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
        }, _destroy: t.noop, widget: function widget() {
            return this.element;
        }, option: function option(e, i) {
            var s,
                n,
                o,
                a = e;if (0 === arguments.length) return t.widget.extend({}, this.options);if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) {
                    n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                }if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];n[e] = i;
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];a[e] = i;
            }return this._setOptions(a), this;
        }, _setOptions: function _setOptions(t) {
            var e;for (e in t) {
                this._setOption(e, t[e]);
            }return this;
        }, _setOption: function _setOption(t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this;
        }, _setOptionClasses: function _setOptionClasses(e) {
            var i, s, n;for (i in e) {
                n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({ element: s, keys: i, classes: e, add: !0 })));
            }
        }, _setOptionDisabled: function _setOptionDisabled(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
        }, enable: function enable() {
            return this._setOptions({ disabled: !1 });
        }, disable: function disable() {
            return this._setOptions({ disabled: !0 });
        }, _classes: function _classes(e) {
            function i(i, o) {
                var a, r;for (r = 0; i.length > r; r++) {
                    a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
                }
            }var s = [],
                n = this;return e = t.extend({ element: this.element, classes: this.options.classes || {} }, e), this._on(e.element, { remove: "_untrackClassesElement" }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ");
        }, _untrackClassesElement: function _untrackClassesElement(e) {
            var i = this;t.each(i.classesElementLookup, function (s, n) {
                -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()));
            });
        }, _removeClass: function _removeClass(t, e, i) {
            return this._toggleClass(t, e, i, !1);
        }, _addClass: function _addClass(t, e, i) {
            return this._toggleClass(t, e, i, !0);
        }, _toggleClass: function _toggleClass(t, e, i, s) {
            s = "boolean" == typeof s ? s : i;var n = "string" == typeof t || null === t,
                o = { extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s };return o.element.toggleClass(this._classes(o), s), this;
        }, _on: function _on(e, i, s) {
            var n,
                o = this;"boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
                function r() {
                    return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
                }"string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);var l = s.match(/^([\w:-]*)\s*(.*)$/),
                    h = l[1] + o.eventNamespace,
                    c = l[2];c ? n.on(h, c, r) : i.on(h, r);
            });
        }, _off: function _off(e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
        }, _delay: function _delay(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments);
            }var s = this;return setTimeout(i, e || 0);
        }, _hoverable: function _hoverable(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function mouseenter(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover");
                }, mouseleave: function mouseleave(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover");
                } });
        }, _focusable: function _focusable(e) {
            this.focusable = this.focusable.add(e), this._on(e, { focusin: function focusin(e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus");
                }, focusout: function focusout(e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus");
                } });
        }, _trigger: function _trigger(e, i, s) {
            var n,
                o,
                a = this.options[e];if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) {
                n in i || (i[n] = o[n]);
            }return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
        } }, t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
        t.Widget.prototype["_" + e] = function (s, n, o) {
            "string" == typeof n && (n = { effect: n });var a,
                r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;n = n || {}, "number" == typeof n && (n = { duration: n }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
                t(this)[e](), o && o.call(s[0]), i();
            });
        };
    }), t.widget, t.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, t.extend(t.ui, { datepicker: { version: "1.12.1" } });var l;t.extend(i.prototype, { markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function _widgetDatepicker() {
            return this.dpDiv;
        }, setDefaults: function setDefaults(t) {
            return o(this._defaults, t || {}), this;
        }, _attachDatepicker: function _attachDatepicker(e, i) {
            var s, n, o;s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o);
        }, _newInst: function _newInst(e, i) {
            var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");return { id: n, input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv };
        }, _connectDatepicker: function _connectDatepicker(e, i) {
            var s = t(e);i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e));
        }, _attachments: function _attachments(e, i) {
            var s,
                n,
                o,
                a = this._get(i, "appendText"),
                r = this._get(i, "isRTL");i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: n, title: n }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({ src: o, alt: n, title: n }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1;
            }));
        }, _autoSize: function _autoSize(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e,
                    i,
                    s,
                    n,
                    o = new Date(2009, 11, 20),
                    a = this._get(t, "dateFormat");a.match(/[DM]/) && (e = function e(t) {
                    for (i = 0, s = 0, n = 0; t.length > n; n++) {
                        t[n].length > i && (i = t[n].length, s = n);
                    }return s;
                }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length);
            }
        }, _inlineDatepicker: function _inlineDatepicker(e, i) {
            var s = t(e);s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"));
        }, _dialogDatepicker: function _dialogDatepicker(e, i, s, n, a) {
            var r,
                l,
                h,
                c,
                u,
                d = this._dialogInst;return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), o(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this;
        }, _destroyDatepicker: function _destroyDatepicker(e) {
            var i,
                s = t(e),
                n = t.data(e, "datepicker");s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), l === n && (l = null));
        }, _enableDatepicker: function _enableDatepicker(e) {
            var i,
                s,
                n = t(e),
                o = t.data(e, "datepicker");n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () {
                this.disabled = !1;
            }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t;
            }));
        }, _disableDatepicker: function _disableDatepicker(e) {
            var i,
                s,
                n = t(e),
                o = t.data(e, "datepicker");n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () {
                this.disabled = !0;
            }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t;
            }), this._disabledInputs[this._disabledInputs.length] = e);
        }, _isDisabledDatepicker: function _isDisabledDatepicker(t) {
            if (!t) return !1;for (var e = 0; this._disabledInputs.length > e; e++) {
                if (this._disabledInputs[e] === t) return !0;
            }return !1;
        }, _getInst: function _getInst(e) {
            try {
                return t.data(e, "datepicker");
            } catch (i) {
                throw "Missing instance data for this datepicker";
            }
        }, _optionDatepicker: function _optionDatepicker(e, i, s) {
            var n,
                a,
                r,
                l,
                h = this._getInst(e);return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), o(h.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== n.dateFormat && void 0 === n.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h)), void 0);
        }, _changeDatepicker: function _changeDatepicker(t, e, i) {
            this._optionDatepicker(t, e, i);
        }, _refreshDatepicker: function _refreshDatepicker(t) {
            var e = this._getInst(t);e && this._updateDatepicker(e);
        }, _setDateDatepicker: function _setDateDatepicker(t, e) {
            var i = this._getInst(t);i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
        }, _getDateDatepicker: function _getDateDatepicker(t, e) {
            var i = this._getInst(t);return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
        }, _doKeyDown: function _doKeyDown(e) {
            var i,
                s,
                n,
                o = t.datepicker._getInst(e.target),
                a = !0,
                r = o.dpDiv.is(".ui-datepicker-rtl");if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {case 9:
                    t.datepicker._hideDatepicker(), a = !1;break;case 13:
                    return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;case 27:
                    t.datepicker._hideDatepicker();break;case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");break;case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");break;case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;break;case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;break;case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");break;case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;break;case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");break;case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;break;default:
                    a = !1;} else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;a && (e.preventDefault(), e.stopPropagation());
        }, _doKeyPress: function _doKeyPress(e) {
            var i,
                s,
                n = t.datepicker._getInst(e.target);return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0;
        }, _doKeyUp: function _doKeyUp(e) {
            var i,
                s = t.datepicker._getInst(e.target);if (s.input.val() !== s.lastVal) try {
                i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s));
            } catch (n) {}return !0;
        }, _showDatepicker: function _showDatepicker(i) {
            if (i = i.target || i, "input" !== i.nodeName.toLowerCase() && (i = t("input", i.parentNode)[0]), !t.datepicker._isDisabledDatepicker(i) && t.datepicker._lastInput !== i) {
                var s, n, a, r, l, h, c;s = t.datepicker._getInst(i), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), a = n ? n.apply(i, [i, s]) : {}, a !== !1 && (o(s.settings, a), s.lastVal = null, t.datepicker._lastInput = i, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (i.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(i), t.datepicker._pos[1] += i.offsetHeight), r = !1, t(i).parents().each(function () {
                    return r |= "fixed" === t(this).css("position"), !r;
                }), l = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t.datepicker._updateDatepicker(s), l = t.datepicker._checkOffset(s, l, r), s.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: l.left + "px", top: l.top + "px" }), s.inline || (h = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", e(t(i)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? s.dpDiv.show(h, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[h || "show"](h ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s));
            }
        }, _updateDatepicker: function _updateDatepicker(e) {
            this.maxRows = 4, l = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);var i,
                s = this._getNumberOfMonths(e),
                o = s[1],
                a = 17,
                r = e.dpDiv.find("." + this._dayOverClass + " a");r.length > 0 && n.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", a * o + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null;
            }, 0));
        }, _shouldFocusInput: function _shouldFocusInput(t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
        }, _checkOffset: function _checkOffset(e, i, s) {
            var n = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                a = e.input ? e.input.outerWidth() : 0,
                r = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                h = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0), i;
        }, _findPos: function _findPos(e) {
            for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) {
                e = e[n ? "previousSibling" : "nextSibling"];
            }return i = t(e).offset(), [i.left, i.top];
        }, _hideDatepicker: function _hideDatepicker(e) {
            var i,
                s,
                n,
                o,
                a = this._curInst;!a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function n() {
                t.datepicker._tidyDialog(a);
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1);
        }, _tidyDialog: function _tidyDialog(t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
        }, _checkExternalClick: function _checkExternalClick(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    s = t.datepicker._getInst(i[0]);(i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker();
            }
        }, _adjustDate: function _adjustDate(e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o));
        }, _gotoToday: function _gotoToday(e) {
            var i,
                s = t(e),
                n = this._getInst(s[0]);this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date(), n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s);
        }, _selectMonthYear: function _selectMonthYear(e, i, s) {
            var n = t(e),
                o = this._getInst(n[0]);o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n);
        }, _selectDay: function _selectDay(e, i, s, n) {
            var o,
                a = t(e);t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
        }, _clearDate: function _clearDate(e) {
            var i = t(e);this._selectDate(i, "");
        }, _selectDate: function _selectDate(e, i) {
            var s,
                n = t(e),
                o = this._getInst(n[0]);i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != _typeof(o.input[0]) && o.input.trigger("focus"), this._lastInput = null);
        }, _updateAlternate: function _updateAlternate(e) {
            var i,
                s,
                n,
                o = this._get(e, "altField");o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n));
        }, noWeekends: function noWeekends(t) {
            var e = t.getDay();return [e > 0 && 6 > e, ""];
        }, iso8601Week: function iso8601Week(t) {
            var e,
                i = new Date(t.getTime());return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
        }, parseDate: function parseDate(e, i, s) {
            if (null == e || null == i) throw "Invalid arguments";if (i = "object" == (typeof i === 'undefined' ? 'undefined' : _typeof(i)) ? "" + i : i + "", "" === i) return null;var n,
                o,
                a,
                r,
                l = 0,
                h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof h ? h : new Date().getFullYear() % 100 + parseInt(h, 10),
                u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames,
                g = -1,
                m = -1,
                _ = -1,
                v = -1,
                b = !1,
                y = function y(t) {
                var i = e.length > n + 1 && e.charAt(n + 1) === t;return i && n++, i;
            },
                w = function w(t) {
                var e = y(t),
                    s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                    n = "y" === t ? s : 1,
                    o = RegExp("^\\d{" + n + "," + s + "}"),
                    a = i.substring(l).match(o);if (!a) throw "Missing number at position " + l;return l += a[0].length, parseInt(a[0], 10);
            },
                k = function k(e, s, n) {
                var o = -1,
                    a = t.map(y(e) ? n : s, function (t, e) {
                    return [[e, t]];
                }).sort(function (t, e) {
                    return -(t[1].length - e[1].length);
                });if (t.each(a, function (t, e) {
                    var s = e[1];return i.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], l += s.length, !1) : void 0;
                }), -1 !== o) return o + 1;throw "Unknown name at position " + l;
            },
                x = function x() {
                if (i.charAt(l) !== e.charAt(n)) throw "Unexpected literal at position " + l;l++;
            };for (n = 0; e.length > n; n++) {
                if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1;else switch (e.charAt(n)) {case "d":
                        _ = w("d");break;case "D":
                        k("D", u, d);break;case "o":
                        v = w("o");break;case "m":
                        m = w("m");break;case "M":
                        m = k("M", p, f);break;case "y":
                        g = w("y");break;case "@":
                        r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();break;case "!":
                        r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();break;case "'":
                        y("'") ? x() : b = !0;break;default:
                        x();}
            }if (i.length > l && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;if (-1 === g ? g = new Date().getFullYear() : 100 > g && (g += new Date().getFullYear() - new Date().getFullYear() % 100 + (c >= g ? 0 : -100)), v > -1) for (m = 1, _ = v;;) {
                if (o = this._getDaysInMonth(g, m - 1), o >= _) break;m++, _ -= o;
            }if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date";return r;
        }, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function formatDate(t, e, i) {
            if (!e) return "";var s,
                n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function l(e) {
                var i = t.length > s + 1 && t.charAt(s + 1) === e;return i && s++, i;
            },
                h = function h(t, e, i) {
                var s = "" + e;if (l(t)) for (; i > s.length;) {
                    s = "0" + s;
                }return s;
            },
                c = function c(t, e, i, s) {
                return l(t) ? s[e] : i[e];
            },
                u = "",
                d = !1;if (e) for (s = 0; t.length > s; s++) {
                if (d) "'" !== t.charAt(s) || l("'") ? u += t.charAt(s) : d = !1;else switch (t.charAt(s)) {case "d":
                        u += h("d", e.getDate(), 2);break;case "D":
                        u += c("D", e.getDay(), n, o);break;case "o":
                        u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);break;case "m":
                        u += h("m", e.getMonth() + 1, 2);break;case "M":
                        u += c("M", e.getMonth(), a, r);break;case "y":
                        u += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;break;case "@":
                        u += e.getTime();break;case "!":
                        u += 1e4 * e.getTime() + this._ticksTo1970;break;case "'":
                        l("'") ? u += "'" : d = !0;break;default:
                        u += t.charAt(s);}
            }return u;
        }, _possibleChars: function _possibleChars(t) {
            var e,
                i = "",
                s = !1,
                n = function n(i) {
                var s = t.length > e + 1 && t.charAt(e + 1) === i;return s && e++, s;
            };for (e = 0; t.length > e; e++) {
                if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;else switch (t.charAt(e)) {case "d":case "m":case "y":case "@":
                        i += "0123456789";break;case "D":case "M":
                        return null;case "'":
                        n("'") ? i += "'" : s = !0;break;default:
                        i += t.charAt(e);}
            }return i;
        }, _get: function _get(t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
        }, _setDateFromField: function _setDateFromField(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    s = t.lastVal = t.input ? t.input.val() : null,
                    n = this._getDefaultDate(t),
                    o = n,
                    a = this._getFormatConfig(t);try {
                    o = this.parseDate(i, s, a) || n;
                } catch (r) {
                    s = e ? "" : s;
                }t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t);
            }
        }, _getDefaultDate: function _getDefaultDate(t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
        }, _determineDate: function _determineDate(e, i, s) {
            var n = function n(t) {
                var e = new Date();return e.setDate(e.getDate() + t), e;
            },
                o = function o(i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e));
                } catch (s) {}for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(), o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h;) {
                    switch (h[2] || "d") {case "d":case "D":
                            r += parseInt(h[1], 10);break;case "w":case "W":
                            r += 7 * parseInt(h[1], 10);break;case "m":case "M":
                            a += parseInt(h[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));break;case "y":case "Y":
                            o += parseInt(h[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));}h = l.exec(i);
                }return new Date(o, a, r);
            },
                a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a);
        }, _daylightSavingAdjust: function _daylightSavingAdjust(t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
        }, _setDate: function _setDate(t, e, i) {
            var s = !e,
                n = t.selectedMonth,
                o = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t));
        }, _getDate: function _getDate(t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));return e;
        }, _attachHandlers: function _attachHandlers(e) {
            var i = this._get(e, "stepMonths"),
                s = "#" + e.id.replace(/\\\\/g, "\\");e.dpDiv.find("[data-handler]").map(function () {
                var e = { prev: function prev() {
                        t.datepicker._adjustDate(s, -i, "M");
                    }, next: function next() {
                        t.datepicker._adjustDate(s, +i, "M");
                    }, hide: function hide() {
                        t.datepicker._hideDatepicker();
                    }, today: function today() {
                        t.datepicker._gotoToday(s);
                    }, selectDay: function selectDay() {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
                    }, selectMonth: function selectMonth() {
                        return t.datepicker._selectMonthYear(s, this, "M"), !1;
                    }, selectYear: function selectYear() {
                        return t.datepicker._selectMonthYear(s, this, "Y"), !1;
                    } };t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
            });
        }, _generateHTML: function _generateHTML(t) {
            var e,
                i,
                s,
                n,
                o,
                a,
                r,
                l,
                h,
                c,
                u,
                d,
                p,
                f,
                g,
                m,
                _,
                v,
                b,
                y,
                w,
                k,
                x,
                C,
                D,
                T,
                I,
                M,
                P,
                S,
                N,
                H,
                A,
                z,
                O,
                E,
                W,
                F,
                L,
                R = new Date(),
                Y = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                B = this._get(t, "isRTL"),
                j = this._get(t, "showButtonPanel"),
                q = this._get(t, "hideIfNoPrevNext"),
                K = this._get(t, "navigationAsDateFormat"),
                U = this._getNumberOfMonths(t),
                V = this._get(t, "showCurrentAtPos"),
                X = this._get(t, "stepMonths"),
                $ = 1 !== U[0] || 1 !== U[1],
                G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                J = this._getMinMaxDate(t, "min"),
                Q = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - V,
                te = t.drawYear;if (0 > Z && (Z += 12, te--), Q) for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - U[0] * U[1] + 1, Q.getDate())), e = J && J > e ? J : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) {
                Z--, 0 > Z && (Z = 11, te--);
            }for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - X, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + X, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : Y, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
                for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
                    if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), T = " ui-corner-all", I = "", $) {
                        if (I += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {case 0:
                                I += " ui-datepicker-group-first", T = " ui-corner-" + (B ? "right" : "left");break;case U[1] - 1:
                                I += " ui-datepicker-group-last", T = " ui-corner-" + (B ? "left" : "right");break;default:
                                I += " ui-datepicker-group-middle", T = "";}I += "'>";
                    }for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === k ? B ? o : s : "") + (/all|right/.test(T) && 0 === k ? B ? s : o : "") + this._generateMonthYearHeader(t, Z, te, J, Q, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", M = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) {
                        P = (w + c) % 7, M += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[P] + "'>" + p[P] + "</span></th>";
                    }for (I += M + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), N = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, H = Math.ceil((N + S) / 7), A = $ ? this.maxRows > H ? this.maxRows : H : H, this.maxRows = A, z = this._daylightSavingAdjust(new Date(te, Z, 1 - N)), O = 0; A > O; O++) {
                        for (I += "<tr>", E = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(z) + "</td>" : "", w = 0; 7 > w; w++) {
                            W = m ? m.apply(t.input ? t.input[0] : null, [z]) : [!0, ""], F = z.getMonth() !== Z, L = F && !v || !W[0] || J && J > z || Q && z > Q, E += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + W[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === Y.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === Y.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
                        }I += E + "</tr>";
                    }Z++, Z > 11 && (Z = 0, te++), I += "</tbody></table>" + ($ ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += I;
                }y += x;
            }return y += h, t._keyEvent = !1, y;
        }, _generateMonthYearHeader: function _generateMonthYearHeader(t, e, i, s, n, o, a, r) {
            var l,
                h,
                c,
                u,
                d,
                p,
                f,
                g,
                m = this._get(t, "changeMonth"),
                _ = this._get(t, "changeYear"),
                v = this._get(t, "showMonthAfterYear"),
                b = "<div class='ui-datepicker-title'>",
                y = "";if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";else {
                for (l = s && s.getFullYear() === i, h = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++) {
                    (!l || c >= s.getMonth()) && (!h || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                }y += "</select>";
            }if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";else {
                for (u = this._get(t, "yearRange").split(":"), d = new Date().getFullYear(), p = function p(t) {
                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);return isNaN(e) ? d : e;
                }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) {
                    t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                }t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null;
            }return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>";
        }, _adjustInstDate: function _adjustInstDate(t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0),
                n = t.selectedMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t);
        }, _restrictMinMax: function _restrictMinMax(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                s = this._getMinMaxDate(t, "max"),
                n = i && i > e ? i : e;return s && n > s ? s : n;
        }, _notifyChange: function _notifyChange(t) {
            var e = this._get(t, "onChangeMonthYear");e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
        }, _getNumberOfMonths: function _getNumberOfMonths(t) {
            var e = this._get(t, "numberOfMonths");return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
        }, _getMinMaxDate: function _getMinMaxDate(t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null);
        }, _getDaysInMonth: function _getDaysInMonth(t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
        }, _getFirstDayOfMonth: function _getFirstDayOfMonth(t, e) {
            return new Date(t, e, 1).getDay();
        }, _canAdjustMonth: function _canAdjustMonth(t, e, i, s) {
            var n = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o);
        }, _isInRange: function _isInRange(t, e) {
            var i,
                s,
                n = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                a = null,
                r = null,
                l = this._get(t, "yearRange");return l && (i = l.split(":"), s = new Date().getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear());
        }, _getFormatConfig: function _getFormatConfig(t) {
            var e = this._get(t, "shortYearCutoff");return e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10), { shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") };
        }, _formatDate: function _formatDate(t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);var n = e ? "object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t));
        } }), t.fn.datepicker = function (e) {
        if (!this.length) return this;t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);var i = Array.prototype.slice.call(arguments, 1);return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e);
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i));
    }, t.datepicker = new i(), t.datepicker.initialized = !1, t.datepicker.uuid = new Date().getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var h = !1;t(document).on("mouseup", function () {
        h = !1;
    }), t.widget("ui.mouse", { version: "1.12.1", options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 }, _mouseInit: function _mouseInit() {
            var e = this;this.element.on("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t);
            }).on("click." + this.widgetName, function (i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        }, _mouseDestroy: function _mouseDestroy() {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate);
        }, _mouseDown: function _mouseDown(e) {
            if (!h) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;var i = this,
                    s = 1 === e.which,
                    n = "string" == typeof this.options.cancel && e.target.nodeName ? t(e.target).closest(this.options.cancel).length : !1;return s && !n && this._mouseCapture(e) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(e) !== !1, !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t);
                }, this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t);
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), h = !0, !0)) : !0;
            }
        }, _mouseMove: function _mouseMove(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;else if (!this.ignoreMissingWhich) return this._mouseUp(e);
            }return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted);
        }, _mouseUp: function _mouseUp(e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, h = !1, e.preventDefault();
        }, _mouseDistanceMet: function _mouseDistanceMet(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance;
        }, _mouseDelayMet: function _mouseDelayMet() {
            return this.mouseDelayMet;
        }, _mouseStart: function _mouseStart() {}, _mouseDrag: function _mouseDrag() {}, _mouseStop: function _mouseStop() {}, _mouseCapture: function _mouseCapture() {
            return !0;
        } }), t.widget("ui.slider", t.ui.mouse, { version: "1.12.1", widgetEventPrefix: "slide", options: { animate: !1, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function _create() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1;
        }, _refresh: function _refresh() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        }, _createHandles: function _createHandles() {
            var e,
                i,
                s = this.options,
                n = this.element.find(".ui-slider-handle"),
                o = "<span tabindex='0'></span>",
                a = [];for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) {
                a.push(o);
            }this.handles = n.add(t(a.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0);
            });
        }, _createRange: function _createRange() {
            var e = this.options;e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null);
        }, _setupEvents: function _setupEvents() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles);
        }, _destroy: function _destroy() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy();
        }, _mouseCapture: function _mouseCapture(e) {
            var i,
                s,
                n,
                o,
                a,
                r,
                l,
                h,
                c = this,
                u = this.options;return u.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: e.pageX, y: e.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                var i = Math.abs(s - c.values(e));(n > i || n === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (n = i, o = t(this), a = e);
            }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), l = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? { left: 0, top: 0 } : { left: e.pageX - l.left - o.width() / 2, top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0));
        }, _mouseStart: function _mouseStart() {
            return !0;
        }, _mouseDrag: function _mouseDrag(t) {
            var e = { x: t.pageX, y: t.pageY },
                i = this._normValueFromMouse(e);return this._slide(t, this._handleIndex, i), !1;
        }, _mouseStop: function _mouseStop(t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1;
        }, _detectOrientation: function _detectOrientation() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        }, _normValueFromMouse: function _normValueFromMouse(t) {
            var e, i, s, n, o;return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o);
        }, _uiHash: function _uiHash(t, e, i) {
            var s = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() };return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s;
        }, _hasMultipleValues: function _hasMultipleValues() {
            return this.options.values && this.options.values.length;
        }, _start: function _start(t, e) {
            return this._trigger("start", t, this._uiHash(e));
        }, _slide: function _slide(t, e, i) {
            var s,
                n,
                o = this.value(),
                a = this.values();this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)));
        }, _stop: function _stop(t, e) {
            this._trigger("stop", t, this._uiHash(e));
        }, _change: function _change(t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)));
        }, value: function value(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value();
        }, values: function values(e, i) {
            var s, n, o;if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), void 0;if (!arguments.length) return this._values();if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();for (s = this.options.values, n = arguments[0], o = 0; s.length > o; o += 1) {
                s[o] = this._trimAlignValue(n[o]), this._change(null, o);
            }this._refreshValue();
        }, _setOption: function _setOption(e, i) {
            var s,
                n = 0;switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");break;case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;break;case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) {
                        this._change(null, s);
                    }this._animateOff = !1;break;case "step":case "min":case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;break;case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1;}
        }, _setOptionDisabled: function _setOptionDisabled(t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t);
        }, _value: function _value() {
            var t = this.options.value;return t = this._trimAlignValue(t);
        }, _values: function _values(t) {
            var e, i, s;if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) {
                    i[s] = this._trimAlignValue(i[s]);
                }return i;
            }return [];
        }, _trimAlignValue: function _trimAlignValue(t) {
            if (this._valueMin() >= t) return this._valueMin();if (t >= this._valueMax()) return this._valueMax();var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i;return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5));
        }, _calculateNewMax: function _calculateNewMax() {
            var t = this.options.max,
                e = this._valueMin(),
                i = this.options.step,
                s = Math.round((t - e) / i) * i;t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()));
        }, _precision: function _precision() {
            var t = this._precisionOf(this.options.step);return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t;
        }, _precisionOf: function _precisionOf(t) {
            var e = "" + t,
                i = e.indexOf(".");return -1 === i ? 0 : e.length - i - 1;
        }, _valueMin: function _valueMin() {
            return this.options.min;
        }, _valueMax: function _valueMax() {
            return this.max;
        }, _refreshRange: function _refreshRange(t) {
            "vertical" === t && this.range.css({ width: "", left: "" }), "horizontal" === t && this.range.css({ height: "", bottom: "" });
        }, _refreshValue: function _refreshValue() {
            var e,
                i,
                s,
                n,
                o,
                a = this.options.range,
                r = this.options,
                l = this,
                h = this._animateOff ? !1 : r.animate,
                c = {};this._hasMultipleValues() ? this.handles.each(function (s) {
                i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: r.animate })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: r.animate }))), e = i;
            }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? 100 * ((s - n) / (o - n)) : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ height: 100 - i + "%" }, r.animate));
        }, _handleEvents: { keydown: function keydown(e) {
                var i,
                    s,
                    n,
                    o,
                    a = t(e.target).data("ui-slider-handle-index");switch (e.keyCode) {case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), i = this._start(e, a), i === !1)) return;}switch (o = this.options.step, s = n = this._hasMultipleValues() ? this.values(a) : this.value(), e.keyCode) {case t.ui.keyCode.HOME:
                        n = this._valueMin();break;case t.ui.keyCode.END:
                        n = this._valueMax();break;case t.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages);break;case t.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;n = this._trimAlignValue(s + o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;n = this._trimAlignValue(s - o);}this._slide(e, a, n);
            }, keyup: function keyup(e) {
                var i = t(e.target).data("ui-slider-handle-index");this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"));
            } } });
});
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011–2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
!function (a) {
    function f(a, b) {
        if (!(a.originalEvent.touches.length > 1)) {
            a.preventDefault();var c = a.originalEvent.changedTouches[0],
                d = document.createEvent("MouseEvents");d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null), a.target.dispatchEvent(d);
        }
    }if (a.support.touch = "ontouchend" in document, a.support.touch) {
        var e,
            b = a.ui.mouse.prototype,
            c = b._mouseInit,
            d = b._mouseDestroy;b._touchStart = function (a) {
            var b = this;!e && b._mouseCapture(a.originalEvent.changedTouches[0]) && (e = !0, b._touchMoved = !1, f(a, "mouseover"), f(a, "mousemove"), f(a, "mousedown"));
        }, b._touchMove = function (a) {
            e && (this._touchMoved = !0, f(a, "mousemove"));
        }, b._touchEnd = function (a) {
            e && (f(a, "mouseup"), f(a, "mouseout"), this._touchMoved || f(a, "click"), e = !1);
        }, b._mouseInit = function () {
            var b = this;b.element.bind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), c.call(b);
        }, b._mouseDestroy = function () {
            var b = this;b.element.unbind({ touchstart: a.proxy(b, "_touchStart"), touchmove: a.proxy(b, "_touchMove"), touchend: a.proxy(b, "_touchEnd") }), d.call(b);
        };
    }
}(jQuery);
/* perfect-scrollbar v0.6.16 */
!function t(e, n, r) {
    function o(i, s) {
        if (!n[i]) {
            if (!e[i]) {
                var a = "function" == typeof require && require;if (!s && a) return a(i, !0);if (l) return l(i, !0);var c = new Error("Cannot find module '" + i + "'");throw c.code = "MODULE_NOT_FOUND", c;
            }var u = n[i] = { exports: {} };e[i][0].call(u.exports, function (t) {
                var n = e[i][1][t];return o(n ? n : t);
            }, u, u.exports, t, e, n, r);
        }return n[i].exports;
    }for (var l = "function" == typeof require && require, i = 0; i < r.length; i++) {
        o(r[i]);
    }return o;
}({ 1: [function (t, e, n) {
        "use strict";
        function r(t) {
            t.fn.perfectScrollbar = function (t) {
                return this.each(function () {
                    if ("object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) || "undefined" == typeof t) {
                        var e = t;l.get(this) || o.initialize(this, e);
                    } else {
                        var n = t;"update" === n ? o.update(this) : "destroy" === n && o.destroy(this);
                    }
                });
            };
        }var o = t("../main"),
            l = t("../plugin/instances");if ("function" == typeof define && define.amd) define(["jquery"], r);else {
            var i = window.jQuery ? window.jQuery : window.$;"undefined" != typeof i && r(i);
        }e.exports = r;
    }, { "../main": 7, "../plugin/instances": 18 }], 2: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            var n = t.className.split(" ");n.indexOf(e) < 0 && n.push(e), t.className = n.join(" ");
        }function o(t, e) {
            var n = t.className.split(" "),
                r = n.indexOf(e);r >= 0 && n.splice(r, 1), t.className = n.join(" ");
        }n.add = function (t, e) {
            t.classList ? t.classList.add(e) : r(t, e);
        }, n.remove = function (t, e) {
            t.classList ? t.classList.remove(e) : o(t, e);
        }, n.list = function (t) {
            return t.classList ? Array.prototype.slice.apply(t.classList) : t.className.split(" ");
        };
    }, {}], 3: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            return window.getComputedStyle(t)[e];
        }function o(t, e, n) {
            return "number" == typeof n && (n = n.toString() + "px"), t.style[e] = n, t;
        }function l(t, e) {
            for (var n in e) {
                var r = e[n];"number" == typeof r && (r = r.toString() + "px"), t.style[n] = r;
            }return t;
        }var i = {};i.e = function (t, e) {
            var n = document.createElement(t);return n.className = e, n;
        }, i.appendTo = function (t, e) {
            return e.appendChild(t), t;
        }, i.css = function (t, e, n) {
            return "object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) ? l(t, e) : "undefined" == typeof n ? r(t, e) : o(t, e, n);
        }, i.matches = function (t, e) {
            return "undefined" != typeof t.matches ? t.matches(e) : "undefined" != typeof t.matchesSelector ? t.matchesSelector(e) : "undefined" != typeof t.webkitMatchesSelector ? t.webkitMatchesSelector(e) : "undefined" != typeof t.mozMatchesSelector ? t.mozMatchesSelector(e) : "undefined" != typeof t.msMatchesSelector ? t.msMatchesSelector(e) : void 0;
        }, i.remove = function (t) {
            "undefined" != typeof t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
        }, i.queryChildren = function (t, e) {
            return Array.prototype.filter.call(t.childNodes, function (t) {
                return i.matches(t, e);
            });
        }, e.exports = i;
    }, {}], 4: [function (t, e, n) {
        "use strict";
        var r = function r(t) {
            this.element = t, this.events = {};
        };r.prototype.bind = function (t, e) {
            "undefined" == typeof this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1);
        }, r.prototype.unbind = function (t, e) {
            var n = "undefined" != typeof e;this.events[t] = this.events[t].filter(function (r) {
                return !(!n || r === e) || (this.element.removeEventListener(t, r, !1), !1);
            }, this);
        }, r.prototype.unbindAll = function () {
            for (var t in this.events) {
                this.unbind(t);
            }
        };var o = function o() {
            this.eventElements = [];
        };o.prototype.eventElement = function (t) {
            var e = this.eventElements.filter(function (e) {
                return e.element === t;
            })[0];return "undefined" == typeof e && (e = new r(t), this.eventElements.push(e)), e;
        }, o.prototype.bind = function (t, e, n) {
            this.eventElement(t).bind(e, n);
        }, o.prototype.unbind = function (t, e, n) {
            this.eventElement(t).unbind(e, n);
        }, o.prototype.unbindAll = function () {
            for (var t = 0; t < this.eventElements.length; t++) {
                this.eventElements[t].unbindAll();
            }
        }, o.prototype.once = function (t, e, n) {
            var r = this.eventElement(t),
                o = function o(t) {
                r.unbind(e, o), n(t);
            };r.bind(e, o);
        }, e.exports = o;
    }, {}], 5: [function (t, e, n) {
        "use strict";
        e.exports = function () {
            function t() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }return function () {
                return t() + t() + "-" + t() + "-" + t() + "-" + t() + "-" + t() + t() + t();
            };
        }();
    }, {}], 6: [function (t, e, n) {
        "use strict";
        var r = t("./class"),
            o = t("./dom"),
            l = n.toInt = function (t) {
            return parseInt(t, 10) || 0;
        },
            i = n.clone = function (t) {
            if (t) {
                if (t.constructor === Array) return t.map(i);if ("object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t))) {
                    var e = {};for (var n in t) {
                        e[n] = i(t[n]);
                    }return e;
                }return t;
            }return null;
        };n.extend = function (t, e) {
            var n = i(t);for (var r in e) {
                n[r] = i(e[r]);
            }return n;
        }, n.isEditable = function (t) {
            return o.matches(t, "input,[contenteditable]") || o.matches(t, "select,[contenteditable]") || o.matches(t, "textarea,[contenteditable]") || o.matches(t, "button,[contenteditable]");
        }, n.removePsClasses = function (t) {
            for (var e = r.list(t), n = 0; n < e.length; n++) {
                var o = e[n];0 === o.indexOf("ps-") && r.remove(t, o);
            }
        }, n.outerWidth = function (t) {
            return l(o.css(t, "width")) + l(o.css(t, "paddingLeft")) + l(o.css(t, "paddingRight")) + l(o.css(t, "borderLeftWidth")) + l(o.css(t, "borderRightWidth"));
        }, n.startScrolling = function (t, e) {
            r.add(t, "ps-in-scrolling"), "undefined" != typeof e ? r.add(t, "ps-" + e) : (r.add(t, "ps-x"), r.add(t, "ps-y"));
        }, n.stopScrolling = function (t, e) {
            r.remove(t, "ps-in-scrolling"), "undefined" != typeof e ? r.remove(t, "ps-" + e) : (r.remove(t, "ps-x"), r.remove(t, "ps-y"));
        }, n.env = { isWebKit: "WebkitAppearance" in document.documentElement.style, supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, supportsIePointer: null !== window.navigator.msMaxTouchPoints };
    }, { "./class": 2, "./dom": 3 }], 7: [function (t, e, n) {
        "use strict";
        var r = t("./plugin/destroy"),
            o = t("./plugin/initialize"),
            l = t("./plugin/update");e.exports = { initialize: o, update: l, destroy: r };
    }, { "./plugin/destroy": 9, "./plugin/initialize": 17, "./plugin/update": 21 }], 8: [function (t, e, n) {
        "use strict";
        e.exports = { handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"], maxScrollbarLength: null, minScrollbarLength: null, scrollXMarginOffset: 0, scrollYMarginOffset: 0, suppressScrollX: !1, suppressScrollY: !1, swipePropagation: !0, useBothWheelAxes: !1, wheelPropagation: !1, wheelSpeed: 1, theme: "default" };
    }, {}], 9: [function (t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
            o = t("../lib/dom"),
            l = t("./instances");e.exports = function (t) {
            var e = l.get(t);e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), r.removePsClasses(t), l.remove(t));
        };
    }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18 }], 10: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            function n(t) {
                return t.getBoundingClientRect();
            }var r = function r(t) {
                t.stopPropagation();
            };e.event.bind(e.scrollbarY, "click", r), e.event.bind(e.scrollbarYRail, "click", function (r) {
                var o = r.pageY - window.pageYOffset - n(e.scrollbarYRail).top,
                    s = o > e.scrollbarYTop ? 1 : -1;i(t, "top", t.scrollTop + s * e.containerHeight), l(t), r.stopPropagation();
            }), e.event.bind(e.scrollbarX, "click", r), e.event.bind(e.scrollbarXRail, "click", function (r) {
                var o = r.pageX - window.pageXOffset - n(e.scrollbarXRail).left,
                    s = o > e.scrollbarXLeft ? 1 : -1;i(t, "left", t.scrollLeft + s * e.containerWidth), l(t), r.stopPropagation();
            });
        }var o = t("../instances"),
            l = t("../update-geometry"),
            i = t("../update-scroll");e.exports = function (t) {
            var e = o.get(t);r(t, e);
        };
    }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 11: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            function n(n) {
                var o = r + n * e.railXRatio,
                    i = Math.max(0, e.scrollbarXRail.getBoundingClientRect().left) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);o < 0 ? e.scrollbarXLeft = 0 : o > i ? e.scrollbarXLeft = i : e.scrollbarXLeft = o;var s = l.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;c(t, "left", s);
            }var r = null,
                o = null,
                s = function s(e) {
                n(e.pageX - o), a(t), e.stopPropagation(), e.preventDefault();
            },
                u = function u() {
                l.stopScrolling(t, "x"), e.event.unbind(e.ownerDocument, "mousemove", s);
            };e.event.bind(e.scrollbarX, "mousedown", function (n) {
                o = n.pageX, r = l.toInt(i.css(e.scrollbarX, "left")) * e.railXRatio, l.startScrolling(t, "x"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault();
            });
        }function o(t, e) {
            function n(n) {
                var o = r + n * e.railYRatio,
                    i = Math.max(0, e.scrollbarYRail.getBoundingClientRect().top) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);o < 0 ? e.scrollbarYTop = 0 : o > i ? e.scrollbarYTop = i : e.scrollbarYTop = o;var s = l.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));c(t, "top", s);
            }var r = null,
                o = null,
                s = function s(e) {
                n(e.pageY - o), a(t), e.stopPropagation(), e.preventDefault();
            },
                u = function u() {
                l.stopScrolling(t, "y"), e.event.unbind(e.ownerDocument, "mousemove", s);
            };e.event.bind(e.scrollbarY, "mousedown", function (n) {
                o = n.pageY, r = l.toInt(i.css(e.scrollbarY, "top")) * e.railYRatio, l.startScrolling(t, "y"), e.event.bind(e.ownerDocument, "mousemove", s), e.event.once(e.ownerDocument, "mouseup", u), n.stopPropagation(), n.preventDefault();
            });
        }var l = t("../../lib/helper"),
            i = t("../../lib/dom"),
            s = t("../instances"),
            a = t("../update-geometry"),
            c = t("../update-scroll");e.exports = function (t) {
            var e = s.get(t);r(t, e), o(t, e);
        };
    }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 12: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            function n(n, r) {
                var o = t.scrollTop;if (0 === n) {
                    if (!e.scrollbarYActive) return !1;if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation;
                }var l = t.scrollLeft;if (0 === r) {
                    if (!e.scrollbarXActive) return !1;if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation;
                }return !0;
            }var r = !1;e.event.bind(t, "mouseenter", function () {
                r = !0;
            }), e.event.bind(t, "mouseleave", function () {
                r = !1;
            });var i = !1;e.event.bind(e.ownerDocument, "keydown", function (c) {
                if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                    var u = l.matches(e.scrollbarX, ":focus") || l.matches(e.scrollbarY, ":focus");if (r || u) {
                        var d = document.activeElement ? document.activeElement : e.ownerDocument.activeElement;if (d) {
                            if ("IFRAME" === d.tagName) d = d.contentDocument.activeElement;else for (; d.shadowRoot;) {
                                d = d.shadowRoot.activeElement;
                            }if (o.isEditable(d)) return;
                        }var p = 0,
                            f = 0;switch (c.which) {case 37:
                                p = c.metaKey ? -e.contentWidth : c.altKey ? -e.containerWidth : -30;break;case 38:
                                f = c.metaKey ? e.contentHeight : c.altKey ? e.containerHeight : 30;break;case 39:
                                p = c.metaKey ? e.contentWidth : c.altKey ? e.containerWidth : 30;break;case 40:
                                f = c.metaKey ? -e.contentHeight : c.altKey ? -e.containerHeight : -30;break;case 33:
                                f = 90;break;case 32:
                                f = c.shiftKey ? 90 : -90;break;case 34:
                                f = -90;break;case 35:
                                f = c.ctrlKey ? -e.contentHeight : -e.containerHeight;break;case 36:
                                f = c.ctrlKey ? t.scrollTop : e.containerHeight;break;default:
                                return;}a(t, "top", t.scrollTop - f), a(t, "left", t.scrollLeft + p), s(t), i = n(p, f), i && c.preventDefault();
                    }
                }
            });
        }var o = t("../../lib/helper"),
            l = t("../../lib/dom"),
            i = t("../instances"),
            s = t("../update-geometry"),
            a = t("../update-scroll");e.exports = function (t) {
            var e = i.get(t);r(t, e);
        };
    }, { "../../lib/dom": 3, "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 13: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            function n(n, r) {
                var o = t.scrollTop;if (0 === n) {
                    if (!e.scrollbarYActive) return !1;if (0 === o && r > 0 || o >= e.contentHeight - e.containerHeight && r < 0) return !e.settings.wheelPropagation;
                }var l = t.scrollLeft;if (0 === r) {
                    if (!e.scrollbarXActive) return !1;if (0 === l && n < 0 || l >= e.contentWidth - e.containerWidth && n > 0) return !e.settings.wheelPropagation;
                }return !0;
            }function r(t) {
                var e = t.deltaX,
                    n = -1 * t.deltaY;return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e !== e && n !== n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n];
            }function o(e, n) {
                var r = t.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");if (r) {
                    if (!window.getComputedStyle(r).overflow.match(/(scroll|auto)/)) return !1;var o = r.scrollHeight - r.clientHeight;if (o > 0 && !(0 === r.scrollTop && n > 0 || r.scrollTop === o && n < 0)) return !0;var l = r.scrollLeft - r.clientWidth;if (l > 0 && !(0 === r.scrollLeft && e < 0 || r.scrollLeft === l && e > 0)) return !0;
                }return !1;
            }function s(s) {
                var c = r(s),
                    u = c[0],
                    d = c[1];o(u, d) || (a = !1, e.settings.useBothWheelAxes ? e.scrollbarYActive && !e.scrollbarXActive ? (d ? i(t, "top", t.scrollTop - d * e.settings.wheelSpeed) : i(t, "top", t.scrollTop + u * e.settings.wheelSpeed), a = !0) : e.scrollbarXActive && !e.scrollbarYActive && (u ? i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed) : i(t, "left", t.scrollLeft - d * e.settings.wheelSpeed), a = !0) : (i(t, "top", t.scrollTop - d * e.settings.wheelSpeed), i(t, "left", t.scrollLeft + u * e.settings.wheelSpeed)), l(t), a = a || n(u, d), a && (s.stopPropagation(), s.preventDefault()));
            }var a = !1;"undefined" != typeof window.onwheel ? e.event.bind(t, "wheel", s) : "undefined" != typeof window.onmousewheel && e.event.bind(t, "mousewheel", s);
        }var o = t("../instances"),
            l = t("../update-geometry"),
            i = t("../update-scroll");e.exports = function (t) {
            var e = o.get(t);r(t, e);
        };
    }, { "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 14: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            e.event.bind(t, "scroll", function () {
                l(t);
            });
        }var o = t("../instances"),
            l = t("../update-geometry");e.exports = function (t) {
            var e = o.get(t);r(t, e);
        };
    }, { "../instances": 18, "../update-geometry": 19 }], 15: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            function n() {
                var t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";return 0 === t.toString().length ? null : t.getRangeAt(0).commonAncestorContainer;
            }function r() {
                c || (c = setInterval(function () {
                    return l.get(t) ? (s(t, "top", t.scrollTop + u.top), s(t, "left", t.scrollLeft + u.left), void i(t)) : void clearInterval(c);
                }, 50));
            }function a() {
                c && (clearInterval(c), c = null), o.stopScrolling(t);
            }var c = null,
                u = { top: 0, left: 0 },
                d = !1;e.event.bind(e.ownerDocument, "selectionchange", function () {
                t.contains(n()) ? d = !0 : (d = !1, a());
            }), e.event.bind(window, "mouseup", function () {
                d && (d = !1, a());
            }), e.event.bind(window, "keyup", function () {
                d && (d = !1, a());
            }), e.event.bind(window, "mousemove", function (e) {
                if (d) {
                    var n = { x: e.pageX, y: e.pageY },
                        l = { left: t.offsetLeft, right: t.offsetLeft + t.offsetWidth, top: t.offsetTop, bottom: t.offsetTop + t.offsetHeight };n.x < l.left + 3 ? (u.left = -5, o.startScrolling(t, "x")) : n.x > l.right - 3 ? (u.left = 5, o.startScrolling(t, "x")) : u.left = 0, n.y < l.top + 3 ? (l.top + 3 - n.y < 5 ? u.top = -5 : u.top = -20, o.startScrolling(t, "y")) : n.y > l.bottom - 3 ? (n.y - l.bottom + 3 < 5 ? u.top = 5 : u.top = 20, o.startScrolling(t, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : r();
                }
            });
        }var o = t("../../lib/helper"),
            l = t("../instances"),
            i = t("../update-geometry"),
            s = t("../update-scroll");e.exports = function (t) {
            var e = l.get(t);r(t, e);
        };
    }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 16: [function (t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            function o(n, r) {
                var o = t.scrollTop,
                    l = t.scrollLeft,
                    i = Math.abs(n),
                    s = Math.abs(r);if (s > i) {
                    if (r < 0 && o === e.contentHeight - e.containerHeight || r > 0 && 0 === o) return !e.settings.swipePropagation;
                } else if (i > s && (n < 0 && l === e.contentWidth - e.containerWidth || n > 0 && 0 === l)) return !e.settings.swipePropagation;return !0;
            }function a(e, n) {
                s(t, "top", t.scrollTop - n), s(t, "left", t.scrollLeft - e), i(t);
            }function c() {
                w = !0;
            }function u() {
                w = !1;
            }function d(t) {
                return t.targetTouches ? t.targetTouches[0] : t;
            }function p(t) {
                return !(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE);
            }function f(t) {
                if (p(t)) {
                    Y = !0;var e = d(t);g.pageX = e.pageX, g.pageY = e.pageY, v = new Date().getTime(), null !== y && clearInterval(y), t.stopPropagation();
                }
            }function h(t) {
                if (!Y && e.settings.swipePropagation && f(t), !w && Y && p(t)) {
                    var n = d(t),
                        r = { pageX: n.pageX, pageY: n.pageY },
                        l = r.pageX - g.pageX,
                        i = r.pageY - g.pageY;a(l, i), g = r;var s = new Date().getTime(),
                        c = s - v;c > 0 && (m.x = l / c, m.y = i / c, v = s), o(l, i) && (t.stopPropagation(), t.preventDefault());
                }
            }function b() {
                !w && Y && (Y = !1, clearInterval(y), y = setInterval(function () {
                    return l.get(t) && (m.x || m.y) ? Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(y) : (a(30 * m.x, 30 * m.y), m.x *= .8, void (m.y *= .8)) : void clearInterval(y);
                }, 10));
            }var g = {},
                v = 0,
                m = {},
                y = null,
                w = !1,
                Y = !1;n ? (e.event.bind(window, "touchstart", c), e.event.bind(window, "touchend", u), e.event.bind(t, "touchstart", f), e.event.bind(t, "touchmove", h), e.event.bind(t, "touchend", b)) : r && (window.PointerEvent ? (e.event.bind(window, "pointerdown", c), e.event.bind(window, "pointerup", u), e.event.bind(t, "pointerdown", f), e.event.bind(t, "pointermove", h), e.event.bind(t, "pointerup", b)) : window.MSPointerEvent && (e.event.bind(window, "MSPointerDown", c), e.event.bind(window, "MSPointerUp", u), e.event.bind(t, "MSPointerDown", f), e.event.bind(t, "MSPointerMove", h), e.event.bind(t, "MSPointerUp", b)));
        }var o = t("../../lib/helper"),
            l = t("../instances"),
            i = t("../update-geometry"),
            s = t("../update-scroll");e.exports = function (t) {
            if (o.env.supportsTouch || o.env.supportsIePointer) {
                var e = l.get(t);r(t, e, o.env.supportsTouch, o.env.supportsIePointer);
            }
        };
    }, { "../../lib/helper": 6, "../instances": 18, "../update-geometry": 19, "../update-scroll": 20 }], 17: [function (t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
            o = t("../lib/class"),
            l = t("./instances"),
            i = t("./update-geometry"),
            s = { "click-rail": t("./handler/click-rail"), "drag-scrollbar": t("./handler/drag-scrollbar"), keyboard: t("./handler/keyboard"), wheel: t("./handler/mouse-wheel"), touch: t("./handler/touch"), selection: t("./handler/selection") },
            a = t("./handler/native-scroll");e.exports = function (t, e) {
            e = "object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) ? e : {}, o.add(t, "ps-container");var n = l.add(t);n.settings = r.extend(n.settings, e), o.add(t, "ps-theme-" + n.settings.theme), n.settings.handlers.forEach(function (e) {
                s[e](t);
            }), a(t), i(t);
        };
    }, { "../lib/class": 2, "../lib/helper": 6, "./handler/click-rail": 10, "./handler/drag-scrollbar": 11, "./handler/keyboard": 12, "./handler/mouse-wheel": 13, "./handler/native-scroll": 14, "./handler/selection": 15, "./handler/touch": 16, "./instances": 18, "./update-geometry": 19 }], 18: [function (t, e, n) {
        "use strict";
        function r(t) {
            function e() {
                a.add(t, "ps-focus");
            }function n() {
                a.remove(t, "ps-focus");
            }var r = this;r.settings = s.clone(c), r.containerWidth = null, r.containerHeight = null, r.contentWidth = null, r.contentHeight = null, r.isRtl = "rtl" === u.css(t, "direction"), r.isNegativeScroll = function () {
                var e = t.scrollLeft,
                    n = null;return t.scrollLeft = -1, n = t.scrollLeft < 0, t.scrollLeft = e, n;
            }(), r.negativeScrollAdjustment = r.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, r.event = new d(), r.ownerDocument = t.ownerDocument || document, r.scrollbarXRail = u.appendTo(u.e("div", "ps-scrollbar-x-rail"), t), r.scrollbarX = u.appendTo(u.e("div", "ps-scrollbar-x"), r.scrollbarXRail), r.scrollbarX.setAttribute("tabindex", 0), r.event.bind(r.scrollbarX, "focus", e), r.event.bind(r.scrollbarX, "blur", n), r.scrollbarXActive = null, r.scrollbarXWidth = null, r.scrollbarXLeft = null, r.scrollbarXBottom = s.toInt(u.css(r.scrollbarXRail, "bottom")), r.isScrollbarXUsingBottom = r.scrollbarXBottom === r.scrollbarXBottom, r.scrollbarXTop = r.isScrollbarXUsingBottom ? null : s.toInt(u.css(r.scrollbarXRail, "top")), r.railBorderXWidth = s.toInt(u.css(r.scrollbarXRail, "borderLeftWidth")) + s.toInt(u.css(r.scrollbarXRail, "borderRightWidth")), u.css(r.scrollbarXRail, "display", "block"), r.railXMarginWidth = s.toInt(u.css(r.scrollbarXRail, "marginLeft")) + s.toInt(u.css(r.scrollbarXRail, "marginRight")), u.css(r.scrollbarXRail, "display", ""), r.railXWidth = null, r.railXRatio = null, r.scrollbarYRail = u.appendTo(u.e("div", "ps-scrollbar-y-rail"), t), r.scrollbarY = u.appendTo(u.e("div", "ps-scrollbar-y"), r.scrollbarYRail), r.scrollbarY.setAttribute("tabindex", 0), r.event.bind(r.scrollbarY, "focus", e), r.event.bind(r.scrollbarY, "blur", n), r.scrollbarYActive = null, r.scrollbarYHeight = null, r.scrollbarYTop = null, r.scrollbarYRight = s.toInt(u.css(r.scrollbarYRail, "right")), r.isScrollbarYUsingRight = r.scrollbarYRight === r.scrollbarYRight, r.scrollbarYLeft = r.isScrollbarYUsingRight ? null : s.toInt(u.css(r.scrollbarYRail, "left")), r.scrollbarYOuterWidth = r.isRtl ? s.outerWidth(r.scrollbarY) : null, r.railBorderYWidth = s.toInt(u.css(r.scrollbarYRail, "borderTopWidth")) + s.toInt(u.css(r.scrollbarYRail, "borderBottomWidth")), u.css(r.scrollbarYRail, "display", "block"), r.railYMarginHeight = s.toInt(u.css(r.scrollbarYRail, "marginTop")) + s.toInt(u.css(r.scrollbarYRail, "marginBottom")), u.css(r.scrollbarYRail, "display", ""), r.railYHeight = null, r.railYRatio = null;
        }function o(t) {
            return t.getAttribute("data-ps-id");
        }function l(t, e) {
            t.setAttribute("data-ps-id", e);
        }function i(t) {
            t.removeAttribute("data-ps-id");
        }var s = t("../lib/helper"),
            a = t("../lib/class"),
            c = t("./default-setting"),
            u = t("../lib/dom"),
            d = t("../lib/event-manager"),
            p = t("../lib/guid"),
            f = {};n.add = function (t) {
            var e = p();return l(t, e), f[e] = new r(t), f[e];
        }, n.remove = function (t) {
            delete f[o(t)], i(t);
        }, n.get = function (t) {
            return f[o(t)];
        };
    }, { "../lib/class": 2, "../lib/dom": 3, "../lib/event-manager": 4, "../lib/guid": 5, "../lib/helper": 6, "./default-setting": 8 }], 19: [function (t, e, n) {
        "use strict";
        function r(t, e) {
            return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e;
        }function o(t, e) {
            var n = { width: e.railXWidth };e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, s.css(e.scrollbarXRail, n);var r = { top: t.scrollTop, height: e.railYHeight };e.isScrollbarYUsingRight ? e.isRtl ? r.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : r.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? r.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : r.left = e.scrollbarYLeft + t.scrollLeft, s.css(e.scrollbarYRail, r), s.css(e.scrollbarX, { left: e.scrollbarXLeft, width: e.scrollbarXWidth - e.railBorderXWidth }), s.css(e.scrollbarY, { top: e.scrollbarYTop, height: e.scrollbarYHeight - e.railBorderYWidth });
        }var l = t("../lib/helper"),
            i = t("../lib/class"),
            s = t("../lib/dom"),
            a = t("./instances"),
            c = t("./update-scroll");e.exports = function (t) {
            var e = a.get(t);e.containerWidth = t.clientWidth, e.containerHeight = t.clientHeight, e.contentWidth = t.scrollWidth, e.contentHeight = t.scrollHeight;var n;t.contains(e.scrollbarXRail) || (n = s.queryChildren(t, ".ps-scrollbar-x-rail"), n.length > 0 && n.forEach(function (t) {
                s.remove(t);
            }), s.appendTo(e.scrollbarXRail, t)), t.contains(e.scrollbarYRail) || (n = s.queryChildren(t, ".ps-scrollbar-y-rail"), n.length > 0 && n.forEach(function (t) {
                s.remove(t);
            }), s.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = r(e, l.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = l.toInt((e.negativeScrollAdjustment + t.scrollLeft) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = r(e, l.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = l.toInt(t.scrollTop * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), o(t, e), e.scrollbarXActive ? i.add(t, "ps-active-x") : (i.remove(t, "ps-active-x"), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, c(t, "left", 0)), e.scrollbarYActive ? i.add(t, "ps-active-y") : (i.remove(t, "ps-active-y"), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, c(t, "top", 0));
        };
    }, { "../lib/class": 2, "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-scroll": 20 }], 20: [function (t, e, n) {
        "use strict";
        var r,
            o,
            l = t("./instances"),
            i = function i(t) {
            var e = document.createEvent("Event");return e.initEvent(t, !0, !0), e;
        };e.exports = function (t, e, n) {
            if ("undefined" == typeof t) throw "You must provide an element to the update-scroll function";if ("undefined" == typeof e) throw "You must provide an axis to the update-scroll function";if ("undefined" == typeof n) throw "You must provide a value to the update-scroll function";"top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(i("ps-y-reach-start"))), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(i("ps-x-reach-start")));var s = l.get(t);"top" === e && n >= s.contentHeight - s.containerHeight && (n = s.contentHeight - s.containerHeight, n - t.scrollTop <= 1 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(i("ps-y-reach-end"))), "left" === e && n >= s.contentWidth - s.containerWidth && (n = s.contentWidth - s.containerWidth, n - t.scrollLeft <= 1 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(i("ps-x-reach-end"))), r || (r = t.scrollTop), o || (o = t.scrollLeft), "top" === e && n < r && t.dispatchEvent(i("ps-scroll-up")), "top" === e && n > r && t.dispatchEvent(i("ps-scroll-down")), "left" === e && n < o && t.dispatchEvent(i("ps-scroll-left")), "left" === e && n > o && t.dispatchEvent(i("ps-scroll-right")), "top" === e && (t.scrollTop = r = n, t.dispatchEvent(i("ps-scroll-y"))), "left" === e && (t.scrollLeft = o = n, t.dispatchEvent(i("ps-scroll-x")));
        };
    }, { "./instances": 18 }], 21: [function (t, e, n) {
        "use strict";
        var r = t("../lib/helper"),
            o = t("../lib/dom"),
            l = t("./instances"),
            i = t("./update-geometry"),
            s = t("./update-scroll");e.exports = function (t) {
            var e = l.get(t);e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = r.toInt(o.css(e.scrollbarXRail, "marginLeft")) + r.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = r.toInt(o.css(e.scrollbarYRail, "marginTop")) + r.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), i(t), s(t, "top", t.scrollTop), s(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""));
        };
    }, { "../lib/dom": 3, "../lib/helper": 6, "./instances": 18, "./update-geometry": 19, "./update-scroll": 20 }] }, {}, [1]);
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function (a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
    "use strict";
    var b = window.Slick || {};b = function () {
        function c(c, d) {
            var f,
                e = this;e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(b, c) {
                    return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
                }, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0);
        }var b = 0;return c;
    }(), b.prototype.activateADA = function () {
        var a = this;a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
    }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
        var e = this;if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b);
        }), e.$slidesCache = e.$slides, e.reinit();
    }, b.prototype.animateHeight = function () {
        var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({ height: b }, a.options.speed);
        }
    }, b.prototype.animateSlide = function (b, c) {
        var d = {},
            e = this;e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function step(a) {
                a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
            }, complete: function complete() {
                c && c.call();
            } })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
            e.disableTransition(), c.call();
        }, e.options.speed));
    }, b.prototype.getNavTarget = function () {
        var b = this,
            c = b.options.asNavFor;return c && null !== c && (c = a(c).not(b.$slider)), c;
    }, b.prototype.asNavFor = function (b) {
        var c = this,
            d = c.getNavTarget();null !== d && "object" == (typeof d === 'undefined' ? 'undefined' : _typeof(d)) && d.each(function () {
            var c = a(this).slick("getSlick");c.unslicked || c.slideHandler(b, !0);
        });
    }, b.prototype.applyTransition = function (a) {
        var b = this,
            c = {};b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }, b.prototype.autoPlay = function () {
        var a = this;a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
    }, b.prototype.autoPlayClear = function () {
        var a = this;a.autoPlayTimer && clearInterval(a.autoPlayTimer);
    }, b.prototype.autoPlayIterator = function () {
        var a = this,
            b = a.currentSlide + a.options.slidesToScroll;a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
    }, b.prototype.buildArrows = function () {
        var b = this;b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
    }, b.prototype.buildDots = function () {
        var c,
            d,
            b = this;if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
            for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) {
                d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
            }b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
        }
    }, b.prototype.buildOut = function () {
        var b = this;b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
            a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
        }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
    }, b.prototype.buildRows = function () {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            a = this;if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
            for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
                var i = document.createElement("div");for (c = 0; c < a.options.rows; c++) {
                    var j = document.createElement("div");for (d = 0; d < a.options.slidesPerRow; d++) {
                        var k = b * h + (c * a.options.slidesPerRow + d);g.get(k) && j.appendChild(g.get(k));
                    }i.appendChild(j);
                }e.appendChild(i);
            }a.$slider.empty().append(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
        }
    }, b.prototype.checkResponsive = function (b, c) {
        var e,
            f,
            g,
            d = this,
            h = !1,
            i = d.$slider.width(),
            j = window.innerWidth || a(window).width();if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
            f = null;for (e in d.breakpoints) {
                d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
            }null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
        }
    }, b.prototype.changeSlide = function (b, c) {
        var f,
            g,
            h,
            d = this,
            e = a(b.currentTarget);switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {case "previous":
                g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);break;case "next":
                g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);break;case "index":
                var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");break;default:
                return;}
    }, b.prototype.checkNavigable = function (a) {
        var c,
            d,
            b = this;if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
            if (a < c[e]) {
                a = d;break;
            }d = c[e];
        }return a;
    }, b.prototype.cleanUpEvents = function () {
        var b = this;b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }, b.prototype.cleanUpSlideEvents = function () {
        var b = this;b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }, b.prototype.cleanUpRows = function () {
        var b,
            a = this;a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b));
    }, b.prototype.clickHandler = function (a) {
        var b = this;b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
    }, b.prototype.destroy = function (b) {
        var c = this;c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            a(this).attr("style", a(this).data("originalStyling"));
        }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
    }, b.prototype.disableTransition = function (a) {
        var b = this,
            c = {};c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
    }, b.prototype.fadeSlide = function (a, b) {
        var c = this;c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function () {
            c.disableTransition(a), b.call();
        }, c.options.speed));
    }, b.prototype.fadeSlideOut = function (a) {
        var b = this;b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
    }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
        var b = this;null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
    }, b.prototype.focusHandler = function () {
        var b = this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
            c.stopImmediatePropagation();var d = a(this);setTimeout(function () {
                b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
            }, 0);
        });
    }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
        var a = this;return a.currentSlide;
    }, b.prototype.getDotCount = function () {
        var a = this,
            b = 0,
            c = 0,
            d = 0;if (a.options.infinite === !0) for (; b < a.slideCount;) {
            ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        } else if (a.options.centerMode === !0) d = a.slideCount;else if (a.options.asNavFor) for (; b < a.slideCount;) {
            ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        } else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);return d - 1;
    }, b.prototype.getLeft = function (a) {
        var c,
            d,
            f,
            b = this,
            e = 0;return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
    }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
        var b = this;return b.options[a];
    }, b.prototype.getNavigableIndexes = function () {
        var e,
            a = this,
            b = 0,
            c = 0,
            d = [];for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
            d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
        }return d;
    }, b.prototype.getSlick = function () {
        return this;
    }, b.prototype.getSlideCount = function () {
        var c,
            d,
            e,
            b = this;return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
            return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
        }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
    }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
        var c = this;c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
    }, b.prototype.init = function (b) {
        var c = this;a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay());
    }, b.prototype.initADA = function () {
        var b = this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
            a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c });
        }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
            a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c });
        }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
    }, b.prototype.initArrowEvents = function () {
        var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide));
    }, b.prototype.initDotEvents = function () {
        var b = this;b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
    }, b.prototype.initSlideEvents = function () {
        var b = this;b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
    }, b.prototype.initializeEvents = function () {
        var b = this;b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
    }, b.prototype.initUI = function () {
        var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
    }, b.prototype.keyHandler = function (a) {
        var b = this;a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }));
    }, b.prototype.lazyLoad = function () {
        function g(c) {
            a("img[data-lazy]", c).each(function () {
                var c = a(this),
                    d = a(this).attr("data-lazy"),
                    e = document.createElement("img");e.onload = function () {
                    c.animate({ opacity: 0 }, 100, function () {
                        c.attr("src", d).animate({ opacity: 1 }, 200, function () {
                            c.removeAttr("data-lazy").removeClass("slick-loading");
                        }), b.$slider.trigger("lazyLoaded", [b, c, d]);
                    });
                }, e.onerror = function () {
                    c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
                }, e.src = d;
            });
        }var c,
            d,
            e,
            f,
            b = this;b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
    }, b.prototype.loadSlider = function () {
        var a = this;a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
    }, b.prototype.next = b.prototype.slickNext = function () {
        var a = this;a.changeSlide({ data: { message: "next" } });
    }, b.prototype.orientationChange = function () {
        var a = this;a.checkResponsive(), a.setPosition();
    }, b.prototype.pause = b.prototype.slickPause = function () {
        var a = this;a.autoPlayClear(), a.paused = !0;
    }, b.prototype.play = b.prototype.slickPlay = function () {
        var a = this;a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
    }, b.prototype.postSlide = function (a) {
        var b = this;b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
    }, b.prototype.prev = b.prototype.slickPrev = function () {
        var a = this;a.changeSlide({ data: { message: "previous" } });
    }, b.prototype.preventDefault = function (a) {
        a.preventDefault();
    }, b.prototype.progressiveLazyLoad = function (b) {
        b = b || 1;var e,
            f,
            g,
            c = this,
            d = a("img[data-lazy]", c.$slider);d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
            e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
        }, g.onerror = function () {
            3 > b ? setTimeout(function () {
                c.progressiveLazyLoad(b + 1);
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
        }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
    }, b.prototype.refresh = function (b) {
        var d,
            e,
            c = this;e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1);
    }, b.prototype.registerBreakpoints = function () {
        var c,
            d,
            e,
            b = this,
            f = b.options.responsive || null;if ("array" === a.type(f) && f.length) {
            b.respondTo = b.options.respondTo || "window";for (c in f) {
                if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
                    for (; e >= 0;) {
                        b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
                    }b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
                }
            }b.breakpoints.sort(function (a, c) {
                return b.options.mobileFirst ? a - c : c - a;
            });
        }
    }, b.prototype.reinit = function () {
        var b = this;b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]);
    }, b.prototype.resize = function () {
        var b = this;a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
            b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
        }, 50));
    }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
        var d = this;return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
    }, b.prototype.setCSS = function (a) {
        var d,
            e,
            b = this,
            c = {};b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
    }, b.prototype.setDimensions = function () {
        var a = this;a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
    }, b.prototype.setFade = function () {
        var c,
            b = this;b.$slides.each(function (d, e) {
            c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 });
        }), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 });
    }, b.prototype.setHeight = function () {
        var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
            var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height", b);
        }
    }, b.prototype.setOption = b.prototype.slickSetOption = function () {
        var c,
            d,
            e,
            f,
            h,
            b = this,
            g = !1;if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;else if ("multiple" === h) a.each(e, function (a, c) {
            b.options[a] = c;
        });else if ("responsive" === h) for (d in f) {
            if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];else {
                for (c = b.options.responsive.length - 1; c >= 0;) {
                    b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
                }b.options.responsive.push(f[d]);
            }
        }g && (b.unload(), b.reinit());
    }, b.prototype.setPosition = function () {
        var a = this;a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
    }, b.prototype.setProps = function () {
        var a = this,
            b = document.body.style;a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
    }, b.prototype.setSlideClasses = function (a) {
        var c,
            d,
            e,
            f,
            b = this;d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
    }, b.prototype.setupInfinite = function () {
        var c,
            d,
            e,
            b = this;if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
            for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
                d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
            }for (c = 0; e > c; c += 1) {
                d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
            }b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                a(this).attr("id", "");
            });
        }
    }, b.prototype.interrupt = function (a) {
        var b = this;a || b.autoPlay(), b.interrupted = a;
    }, b.prototype.selectHandler = function (b) {
        var c = this,
            d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
            e = parseInt(d.attr("data-slick-index"));return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
    }, b.prototype.slideHandler = function (a, b, c) {
        var d,
            e,
            f,
            g,
            j,
            h = null,
            i = this;return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d);
        }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
            i.postSlide(d);
        }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
            i.postSlide(e);
        })) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
            i.postSlide(e);
        }) : i.postSlide(e))));
    }, b.prototype.startLoad = function () {
        var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
    }, b.prototype.swipeDirection = function () {
        var a,
            b,
            c,
            d,
            e = this;return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
    }, b.prototype.swipeEnd = function (a) {
        var c,
            d,
            b = this;if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
            switch (d = b.swipeDirection()) {case "left":case "down":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;break;case "right":case "up":
                    c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1;}"vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]));
        } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
    }, b.prototype.swipeHandler = function (a) {
        var b = this;if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {case "start":
                b.swipeStart(a);break;case "move":
                b.swipeMove(a);break;case "end":
                b.swipeEnd(a);}
    }, b.prototype.swipeMove = function (a) {
        var d,
            e,
            f,
            g,
            h,
            b = this;return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
    }, b.prototype.swipeStart = function (a) {
        var c,
            b = this;return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
    }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
        var a = this;null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
    }, b.prototype.unload = function () {
        var b = this;a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
    }, b.prototype.unslick = function (a) {
        var b = this;b.$slider.trigger("unslick", [b, a]), b.destroy();
    }, b.prototype.updateArrows = function () {
        var b,
            a = this;b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }, b.prototype.updateDots = function () {
        var a = this;null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
    }, b.prototype.visibility = function () {
        var a = this;a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
    }, a.fn.slick = function () {
        var f,
            g,
            a = this,
            c = arguments[0],
            d = Array.prototype.slice.call(arguments, 1),
            e = a.length;for (f = 0; e > f; f++) {
            if ("object" == (typeof c === 'undefined' ? 'undefined' : _typeof(c)) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
        }return a;
    };
});
/**
 * @author zhixin wen <wenzhixin2010@gmail.com>
 * @version 1.2.1
 *
 * http://wenzhixin.net.cn/p/multiple-select/
 */

(function ($) {

    'use strict';

    // it only does '%s', and return '' when arguments are undefined

    var sprintf = function sprintf(str) {
        var args = arguments,
            flag = true,
            i = 1;

        str = str.replace(/%s/g, function () {
            var arg = args[i++];

            if (typeof arg === 'undefined') {
                flag = false;
                return '';
            }
            return arg;
        });
        return flag ? str : '';
    };

    var removeDiacritics = function removeDiacritics(str) {
        var defaultDiacriticsRemovalMap = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

        for (var i = 0; i < defaultDiacriticsRemovalMap.length; i++) {
            str = str.replace(defaultDiacriticsRemovalMap[i].letters, defaultDiacriticsRemovalMap[i].base);
        }

        return str;
    };

    function MultipleSelect($el, options) {
        var that = this,
            name = $el.attr('name') || options.name || '';

        this.options = options;

        // hide select element
        this.$el = $el.hide();

        // label element
        this.$label = this.$el.closest('label');
        if (this.$label.length === 0 && this.$el.attr('id')) {
            this.$label = $(sprintf('label[for="%s"]', this.$el.attr('id').replace(/:/g, '\\:')));
        }

        // restore class and title from select element
        this.$parent = $(sprintf('<div class="ms-parent %s" %s/>', $el.attr('class') || '', sprintf('title="%s"', $el.attr('title'))));

        // add placeholder to choice button
        this.$choice = $(sprintf(['<button type="button" class="ms-choice">', '<span class="placeholder">%s</span>', '<div></div>', '</button>'].join(''), this.options.placeholder));

        // default position is bottom
        this.$drop = $(sprintf('<div class="ms-drop %s"%s></div>', this.options.position, sprintf(' style="width: %s"', this.options.dropWidth)));

        this.$el.after(this.$parent);
        this.$parent.append(this.$choice);
        this.$parent.append(this.$drop);

        if (this.$el.prop('disabled')) {
            this.$choice.addClass('disabled');
        }
        this.$parent.css('width', this.options.width || this.$el.css('width') || this.$el.outerWidth() + 20);

        this.selectAllName = 'data-name="selectAll' + name + '"';
        this.selectGroupName = 'data-name="selectGroup' + name + '"';
        this.selectItemName = 'data-name="selectItem' + name + '"';

        if (!this.options.keepOpen) {
            $(document).click(function (e) {
                if ($(e.target)[0] === that.$choice[0] || $(e.target).parents('.ms-choice')[0] === that.$choice[0]) {
                    return;
                }
                if (($(e.target)[0] === that.$drop[0] || $(e.target).parents('.ms-drop')[0] !== that.$drop[0] && e.target !== $el[0]) && that.options.isOpen) {
                    that.close();
                }
            });
        }
    }

    MultipleSelect.prototype = {
        constructor: MultipleSelect,

        init: function init() {
            var that = this,
                $ul = $('<ul></ul>');

            this.$drop.html('');

            if (this.options.filter) {
                this.$drop.append(['<div class="ms-search">', '<input type="text" autocomplete="off" autocorrect="off" autocapitilize="off" spellcheck="false">', '</div>'].join(''));
            }

            if (this.options.selectAll && !this.options.single) {
                $ul.append(['<li class="ms-select-all">', '<label>', sprintf('<input type="checkbox" %s /> ', this.selectAllName), this.options.selectAllDelimiter[0], this.options.selectAllText, this.options.selectAllDelimiter[1], '</label>', '</li>'].join(''));
            }

            $.each(this.$el.children(), function (i, elm) {
                $ul.append(that.optionToHtml(i, elm));
            });
            $ul.append(sprintf('<li class="ms-no-results">%s</li>', this.options.noMatchesFound));
            this.$drop.append($ul);

            this.$drop.find('ul').css('max-height', this.options.maxHeight + 'px');
            this.$drop.find('.multiple').css('width', this.options.multipleWidth + 'px');

            this.$searchInput = this.$drop.find('.ms-search input');
            this.$selectAll = this.$drop.find('input[' + this.selectAllName + ']');
            this.$selectGroups = this.$drop.find('input[' + this.selectGroupName + ']');
            this.$selectItems = this.$drop.find('input[' + this.selectItemName + ']:enabled');
            this.$disableItems = this.$drop.find('input[' + this.selectItemName + ']:disabled');
            this.$noResults = this.$drop.find('.ms-no-results');

            this.events();
            this.updateSelectAll(true);
            this.update(true);

            if (this.options.isOpen) {
                this.open();
            }
        },

        optionToHtml: function optionToHtml(i, elm, group, groupDisabled) {
            var that = this,
                $elm = $(elm),
                classes = $elm.attr('class') || '',
                title = sprintf('title="%s"', $elm.attr('title')),
                multiple = this.options.multiple ? 'multiple' : '',
                disabled,
                type = this.options.single ? 'radio' : 'checkbox';

            if ($elm.is('option')) {
                var value = $elm.val(),
                    text = that.options.textTemplate($elm),
                    selected = $elm.prop('selected'),
                    style = sprintf('style="%s"', this.options.styler(value)),
                    $el;

                disabled = groupDisabled || $elm.prop('disabled');

                $el = $([sprintf('<li class="%s %s" %s %s>', multiple, classes, title, style), sprintf('<label class="%s">', disabled ? 'disabled' : ''), sprintf('<input type="%s" %s%s%s%s>', type, this.selectItemName, selected ? ' checked="checked"' : '', disabled ? ' disabled="disabled"' : '', sprintf(' data-group="%s"', group)), sprintf('<span>%s</span>', text), '</label>', '</li>'].join(''));
                $el.find('input').val(value);
                return $el;
            }
            if ($elm.is('optgroup')) {
                var label = that.options.labelTemplate($elm),
                    $group = $('<div/>');

                group = 'group_' + i;
                disabled = $elm.prop('disabled');

                $group.append(['<li class="group">', sprintf('<label class="optgroup %s" data-group="%s">', disabled ? 'disabled' : '', group), this.options.hideOptgroupCheckboxes || this.options.single ? '' : sprintf('<input type="checkbox" %s %s>', this.selectGroupName, disabled ? 'disabled="disabled"' : ''), label, '</label>', '</li>'].join(''));

                $.each($elm.children(), function (i, elm) {
                    $group.append(that.optionToHtml(i, elm, group, disabled));
                });
                return $group.html();
            }
        },

        events: function events() {
            var that = this,
                toggleOpen = function toggleOpen(e) {
                e.preventDefault();
                that[that.options.isOpen ? 'close' : 'open']();
            };

            if (this.$label) {
                this.$label.off('click').on('click', function (e) {
                    if (e.target.nodeName.toLowerCase() !== 'label' || e.target !== this) {
                        return;
                    }
                    toggleOpen(e);
                    if (!that.options.filter || !that.options.isOpen) {
                        that.focus();
                    }
                    e.stopPropagation(); // Causes lost focus otherwise
                });
            }

            this.$choice.off('click').on('click', toggleOpen).off('focus').on('focus', this.options.onFocus).off('blur').on('blur', this.options.onBlur);

            this.$parent.off('keydown').on('keydown', function (e) {
                switch (e.which) {
                    case 27:
                        // esc key
                        that.close();
                        that.$choice.focus();
                        break;
                }
            });

            this.$searchInput.off('keydown').on('keydown', function (e) {
                // Ensure shift-tab causes lost focus from filter as with clicking away
                if (e.keyCode === 9 && e.shiftKey) {
                    that.close();
                }
            }).off('keyup').on('keyup', function (e) {
                // enter or space
                // Avoid selecting/deselecting if no choices made
                if (that.options.filterAcceptOnEnter && (e.which === 13 || e.which == 32) && that.$searchInput.val()) {
                    that.$selectAll.click();
                    that.close();
                    that.focus();
                    return;
                }
                that.filter();
            });

            this.$selectAll.off('click').on('click', function () {
                var checked = $(this).prop('checked'),
                    $items = that.$selectItems.filter(':visible');

                if ($items.length === that.$selectItems.length) {
                    that[checked ? 'checkAll' : 'uncheckAll']();
                } else {
                    // when the filter option is true
                    that.$selectGroups.prop('checked', checked);
                    $items.prop('checked', checked);
                    that.options[checked ? 'onCheckAll' : 'onUncheckAll']();
                    that.update();
                }
            });
            this.$selectGroups.off('click').on('click', function () {
                var group = $(this).parent().attr('data-group'),
                    $items = that.$selectItems.filter(':visible'),
                    $children = $items.filter(sprintf('[data-group="%s"]', group)),
                    checked = $children.length !== $children.filter(':checked').length;

                $children.prop('checked', checked);
                that.updateSelectAll();
                that.update();
                that.options.onOptgroupClick({
                    label: $(this).parent().text(),
                    checked: checked,
                    children: $children.get(),
                    instance: that
                });
            });
            this.$selectItems.off('click').on('click', function () {
                that.updateSelectAll();
                that.update();
                that.updateOptGroupSelect();
                that.options.onClick({
                    label: $(this).parent().text(),
                    value: $(this).val(),
                    checked: $(this).prop('checked'),
                    instance: that
                });

                if (that.options.single && that.options.isOpen && !that.options.keepOpen) {
                    that.close();
                }

                if (that.options.single) {
                    var clickedVal = $(this).val();
                    that.$selectItems.filter(function () {
                        return $(this).val() !== clickedVal;
                    }).each(function () {
                        $(this).prop('checked', false);
                    });
                    that.update();
                }
            });
        },

        open: function open() {
            if (this.$choice.hasClass('disabled')) {
                return;
            }
            this.options.isOpen = true;
            this.$choice.find('>div').addClass('open');
            this.$drop[this.animateMethod('show')]();

            // fix filter bug: no results show
            this.$selectAll.parent().show();
            this.$noResults.hide();

            // Fix #77: 'All selected' when no options
            if (!this.$el.children().length) {
                this.$selectAll.parent().hide();
                this.$noResults.show();
            }

            if (this.options.container) {
                var offset = this.$drop.offset();
                this.$drop.appendTo($(this.options.container));
                this.$drop.offset({
                    top: offset.top,
                    left: offset.left
                });
            }

            if (this.options.filter) {
                this.$searchInput.val('');
                this.$searchInput.focus();
                this.filter();
            }
            this.options.onOpen();
        },

        close: function close() {
            this.options.isOpen = false;
            this.$choice.find('>div').removeClass('open');
            this.$drop[this.animateMethod('hide')]();
            if (this.options.container) {
                this.$parent.append(this.$drop);
                this.$drop.css({
                    'top': 'auto',
                    'left': 'auto'
                });
            }
            this.options.onClose();
        },

        animateMethod: function animateMethod(method) {
            var methods = {
                show: {
                    fade: 'fadeIn',
                    slide: 'slideDown'
                },
                hide: {
                    fade: 'fadeOut',
                    slide: 'slideUp'
                }
            };

            return methods[method][this.options.animate] || method;
        },

        update: function update(isInit) {
            var selects = this.options.displayValues ? this.getSelects() : this.getSelects('text'),
                $span = this.$choice.find('>span'),
                sl = selects.length;

            if (sl === 0) {
                $span.addClass('placeholder').html(this.options.placeholder);
            } else if (this.options.allSelected && sl === this.$selectItems.length + this.$disableItems.length) {
                $span.removeClass('placeholder').html(this.options.allSelected);
            } else if (this.options.ellipsis && sl > this.options.minimumCountSelected) {
                $span.removeClass('placeholder').text(selects.slice(0, this.options.minimumCountSelected).join(this.options.delimiter) + '...');
            } else if (this.options.countSelected && sl > this.options.minimumCountSelected) {
                $span.removeClass('placeholder').html(this.options.countSelected.replace('#', selects.length).replace('%', this.$selectItems.length + this.$disableItems.length));
            } else {
                $span.removeClass('placeholder').text(selects.join(this.options.delimiter));
            }

            if (this.options.addTitle) {
                $span.prop('title', this.getSelects('text'));
            }

            // set selects to select
            this.$el.val(this.getSelects()).trigger('change');

            // add selected class to selected li
            this.$drop.find('li').removeClass('selected');
            this.$drop.find('input:checked').each(function () {
                $(this).parents('li').first().addClass('selected');
            });

            // trigger <select> change event
            if (!isInit) {
                this.$el.trigger('change');
            }
        },

        updateSelectAll: function updateSelectAll(isInit) {
            var $items = this.$selectItems;

            if (!isInit) {
                $items = $items.filter(':visible');
            }
            this.$selectAll.prop('checked', $items.length && $items.length === $items.filter(':checked').length);
            if (!isInit && this.$selectAll.prop('checked')) {
                this.options.onCheckAll();
            }
        },

        updateOptGroupSelect: function updateOptGroupSelect() {
            var $items = this.$selectItems.filter(':visible');
            $.each(this.$selectGroups, function (i, val) {
                var group = $(val).parent().attr('data-group'),
                    $children = $items.filter(sprintf('[data-group="%s"]', group));
                $(val).prop('checked', $children.length && $children.length === $children.filter(':checked').length);
            });
        },

        //value or text, default: 'value'
        getSelects: function getSelects(type) {
            var that = this,
                texts = [],
                values = [];
            this.$drop.find(sprintf('input[%s]:checked', this.selectItemName)).each(function () {
                texts.push($(this).parents('li').first().text());
                values.push($(this).val());
            });

            if (type === 'text' && this.$selectGroups.length) {
                texts = [];
                this.$selectGroups.each(function () {
                    var html = [],
                        text = $.trim($(this).parent().text()),
                        group = $(this).parent().data('group'),
                        $children = that.$drop.find(sprintf('[%s][data-group="%s"]', that.selectItemName, group)),
                        $selected = $children.filter(':checked');

                    if (!$selected.length) {
                        return;
                    }

                    html.push('[');
                    html.push(text);
                    if ($children.length > $selected.length) {
                        var list = [];
                        $selected.each(function () {
                            list.push($(this).parent().text());
                        });
                        html.push(': ' + list.join(', '));
                    }
                    html.push(']');
                    texts.push(html.join(''));
                });
            }
            return type === 'text' ? texts : values;
        },

        setSelects: function setSelects(values) {
            var that = this;
            this.$selectItems.prop('checked', false);
            this.$disableItems.prop('checked', false);
            $.each(values, function (i, value) {
                that.$selectItems.filter(sprintf('[value="%s"]', value)).prop('checked', true);
                that.$disableItems.filter(sprintf('[value="%s"]', value)).prop('checked', true);
            });
            this.$selectAll.prop('checked', this.$selectItems.length === this.$selectItems.filter(':checked').length + this.$disableItems.filter(':checked').length);

            $.each(that.$selectGroups, function (i, val) {
                var group = $(val).parent().attr('data-group'),
                    $children = that.$selectItems.filter('[data-group="' + group + '"]');
                $(val).prop('checked', $children.length && $children.length === $children.filter(':checked').length);
            });

            this.update();
        },

        enable: function enable() {
            this.$choice.removeClass('disabled');
        },

        disable: function disable() {
            this.$choice.addClass('disabled');
        },

        checkAll: function checkAll() {
            this.$selectItems.prop('checked', true);
            this.$selectGroups.prop('checked', true);
            this.$selectAll.prop('checked', true);
            this.update();
            this.options.onCheckAll();
        },

        uncheckAll: function uncheckAll() {
            this.$selectItems.prop('checked', false);
            this.$selectGroups.prop('checked', false);
            this.$selectAll.prop('checked', false);
            this.update();
            this.options.onUncheckAll();
        },

        focus: function focus() {
            this.$choice.focus();
            this.options.onFocus();
        },

        blur: function blur() {
            this.$choice.blur();
            this.options.onBlur();
        },

        refresh: function refresh() {
            this.init();
        },

        filter: function filter() {
            var that = this,
                text = $.trim(this.$searchInput.val()).toLowerCase();

            if (text.length === 0) {
                this.$selectAll.parent().show();
                this.$selectItems.parent().show();
                this.$disableItems.parent().show();
                this.$selectGroups.parent().show();
                this.$noResults.hide();
            } else {
                this.$selectItems.each(function () {
                    var $parent = $(this).parent();
                    $parent[removeDiacritics($parent.text().toLowerCase()).indexOf(removeDiacritics(text)) < 0 ? 'hide' : 'show']();
                });
                this.$disableItems.parent().hide();
                this.$selectGroups.each(function () {
                    var $parent = $(this).parent();
                    var group = $parent.attr('data-group'),
                        $items = that.$selectItems.filter(':visible');
                    $parent[$items.filter(sprintf('[data-group="%s"]', group)).length ? 'show' : 'hide']();
                });

                //Check if no matches found
                if (this.$selectItems.parent().filter(':visible').length) {
                    this.$selectAll.parent().show();
                    this.$noResults.hide();
                } else {
                    this.$selectAll.parent().hide();
                    this.$noResults.show();
                }
            }
            this.updateOptGroupSelect();
            this.updateSelectAll();
            this.options.onFilter(text);
        }
    };

    $.fn.multipleSelect = function () {
        var option = arguments[0],
            args = arguments,
            value,
            allowedMethods = ['getSelects', 'setSelects', 'enable', 'disable', 'open', 'close', 'checkAll', 'uncheckAll', 'focus', 'blur', 'refresh', 'close'];

        this.each(function () {
            var $this = $(this),
                data = $this.data('multipleSelect'),
                options = $.extend({}, $.fn.multipleSelect.defaults, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && option);

            if (!data) {
                data = new MultipleSelect($this, options);
                $this.data('multipleSelect', data);
            }

            if (typeof option === 'string') {
                if ($.inArray(option, allowedMethods) < 0) {
                    throw 'Unknown method: ' + option;
                }
                value = data[option](args[1]);
            } else {
                data.init();
                if (args[1]) {
                    value = data[args[1]].apply(data, [].slice.call(args, 2));
                }
            }
        });

        return typeof value !== 'undefined' ? value : this;
    };

    $.fn.multipleSelect.defaults = {
        name: '',
        isOpen: false,
        placeholder: '',
        selectAll: true,
        selectAllDelimiter: ['[', ']'],
        minimumCountSelected: 3,
        ellipsis: false,
        multiple: false,
        multipleWidth: 80,
        single: false,
        filter: false,
        width: undefined,
        dropWidth: undefined,
        maxHeight: 250,
        container: null,
        position: 'bottom',
        keepOpen: false,
        animate: 'none', // 'none', 'fade', 'slide'
        displayValues: false,
        delimiter: ', ',
        addTitle: false,
        filterAcceptOnEnter: false,
        hideOptgroupCheckboxes: false,

        selectAllText: 'Select all',
        allSelected: 'All selected',
        countSelected: '# of % selected',
        noMatchesFound: 'No matches found',

        styler: function styler() {
            return false;
        },
        textTemplate: function textTemplate($elm) {
            return $elm.html();
        },
        labelTemplate: function labelTemplate($elm) {
            return $elm.attr('label');
        },

        onOpen: function onOpen() {
            return false;
        },
        onClose: function onClose() {
            return false;
        },
        onCheckAll: function onCheckAll() {
            return false;
        },
        onUncheckAll: function onUncheckAll() {
            return false;
        },
        onFocus: function onFocus() {
            return false;
        },
        onBlur: function onBlur() {
            return false;
        },
        onOptgroupClick: function onOptgroupClick() {
            return false;
        },
        onClick: function onClick() {
            return false;
        },
        onFilter: function onFilter() {
            return false;
        }
    };
})(jQuery);

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ? module.exports = a : a(jQuery);
}(function (a) {
    function b(b) {
        var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0;if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");j *= q, m *= q, l *= q;
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");j *= r, m *= r, l *= r;
            }if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();o = b.clientX - s.left, p = b.clientY - s.top;
            }return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
        }
    }function c() {
        f = null;
    }function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
    }var e,
        f,
        g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice;if (a.event.fixHooks) for (var j = g.length; j;) {
        a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    }var k = a.event.special.mousewheel = { version: "3.1.12", setup: function setup() {
            if (this.addEventListener) for (var c = h.length; c;) {
                this.addEventListener(h[--c], b, !1);
            } else this.onmousewheel = b;a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
        }, teardown: function teardown() {
            if (this.removeEventListener) for (var c = h.length; c;) {
                this.removeEventListener(h[--c], b, !1);
            } else this.onmousewheel = null;a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
        }, getLineHeight: function getLineHeight(b) {
            var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
        }, getPageHeight: function getPageHeight(b) {
            return a(b).height();
        }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };a.fn.extend({ mousewheel: function mousewheel(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
        }, unmousewheel: function unmousewheel(a) {
            return this.unbind("mousewheel", a);
        } });
});
/*!
 * @copyright Copyright (c) 2016 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.17
 */
(function () {
    if (window && window.addEventListener) {
        var c = Object.create(null),
            l,
            p,
            a = function a() {
            clearTimeout(p);p = setTimeout(l, 100);
        },
            q = function q() {},
            t = function t() {
            var e;window.addEventListener("resize", a, !1);window.addEventListener("orientationchange", a, !1);window.MutationObserver ? (e = new MutationObserver(a), e.observe(document.documentElement, { childList: !0, subtree: !0, attributes: !0 }), q = function q() {
                try {
                    e.disconnect(), window.removeEventListener("resize", a, !1), window.removeEventListener("orientationchange", a, !1);
                } catch (c) {}
            }) : (document.documentElement.addEventListener("DOMSubtreeModified", a, !1), q = function q() {
                document.documentElement.removeEventListener("DOMSubtreeModified", a, !1);window.removeEventListener("resize", a, !1);window.removeEventListener("orientationchange", a, !1);
            });
        },
            u = function u(e) {
            var c,
                a = location.hostname;if (window.XMLHttpRequest) {
                c = new XMLHttpRequest();var m = document.createElement("a");m.href = e;e = m.hostname;c = void 0 === c.withCredentials && "" !== e && e !== a ? XDomainRequest || void 0 : XMLHttpRequest;
            }return c;
        };
        l = function l() {
            function e() {
                --n;0 === n && t();
            }function a(b) {
                return function () {
                    !0 !== c[b.base] && b.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + b.hash);
                };
            }function l(b) {
                return function () {
                    var c = document.body,
                        a = document.createElement("x");b.onload = null;a.innerHTML = b.responseText;if (a = a.getElementsByTagName("svg")[0]) a.setAttribute("aria-hidden", "true"), a.style.position = "absolute", a.style.width = 0, a.style.height = 0, a.style.overflow = "hidden", c.insertBefore(a, c.firstChild);e();
                };
            }function m(a) {
                return function () {
                    a.onerror = null;a.ontimeout = null;e();
                };
            }var d,
                f,
                g,
                h,
                n = 0,
                b,
                k;q();k = document.getElementsByTagName("use");for (h = 0; h < k.length; h += 1) {
                try {
                    f = k[h].getBoundingClientRect();
                } catch (v) {
                    f = !1;
                }g = k[h].getAttributeNS("http://www.w3.org/1999/xlink", "href").split("#");d = g[0];g = g[1];b = f && 0 === f.left && 0 === f.right && 0 === f.top && 0 === f.bottom;f && 0 === f.width && 0 === f.height && !b ? d.length && (b = c[d], !0 !== b && setTimeout(a({ useEl: k[h], base: d, hash: g }), 0), void 0 === b && (g = u(d), void 0 !== g && (b = new g(), c[d] = b, b.onload = l(b), b.onerror = m(b), b.ontimeout = m(b), b.open("GET", d), b.send(), n += 1))) : b || (void 0 === c[d] ? c[d] = !0 : c[d].onload && (c[d].abort(), c[d].onload = void 0, c[d] = !0));
            }k = "";n += 1;e();
        };window.addEventListener("load", function r() {
            window.removeEventListener("load", r, !1);p = setTimeout(l, 0);
        }, !1);
    }
})();
/*!
 * fullPage 2.9.2
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
(function (global, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function ($) {
            return factory($, global, global.document, global.Math);
        });
    } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === "object" && exports) {
        module.exports = factory(require('jquery'), global, global.document, global.Math);
    } else {
        factory(jQuery, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : undefined, function ($, window, document, Math, undefined) {
    'use strict';

    // keeping central set of classnames and selectors

    var WRAPPER = 'fullpage-wrapper';
    var WRAPPER_SEL = '.' + WRAPPER;

    // slimscroll
    var SCROLLABLE = 'fp-scrollable';
    var SCROLLABLE_SEL = '.' + SCROLLABLE;

    // util
    var RESPONSIVE = 'fp-responsive';
    var NO_TRANSITION = 'fp-notransition';
    var DESTROYED = 'fp-destroyed';
    var ENABLED = 'fp-enabled';
    var VIEWING_PREFIX = 'fp-viewing';
    var ACTIVE = 'active';
    var ACTIVE_SEL = '.' + ACTIVE;
    var COMPLETELY = 'fp-completely';
    var COMPLETELY_SEL = '.' + COMPLETELY;

    // section
    var SECTION_DEFAULT_SEL = '.section';
    var SECTION = 'fp-section';
    var SECTION_SEL = '.' + SECTION;
    var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
    var SECTION_FIRST_SEL = SECTION_SEL + ':first';
    var SECTION_LAST_SEL = SECTION_SEL + ':last';
    var TABLE_CELL = 'fp-tableCell';
    var TABLE_CELL_SEL = '.' + TABLE_CELL;
    var AUTO_HEIGHT = 'fp-auto-height';
    var AUTO_HEIGHT_SEL = '.fp-auto-height';
    var NORMAL_SCROLL = 'fp-normal-scroll';
    var NORMAL_SCROLL_SEL = '.fp-normal-scroll';

    // section nav
    var SECTION_NAV = 'fp-nav';
    var SECTION_NAV_SEL = '#' + SECTION_NAV;
    var SECTION_NAV_TOOLTIP = 'fp-tooltip';
    var SECTION_NAV_TOOLTIP_SEL = '.' + SECTION_NAV_TOOLTIP;
    var SHOW_ACTIVE_TOOLTIP = 'fp-show-active';

    // slide
    var SLIDE_DEFAULT_SEL = '.slide';
    var SLIDE = 'fp-slide';
    var SLIDE_SEL = '.' + SLIDE;
    var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
    var SLIDES_WRAPPER = 'fp-slides';
    var SLIDES_WRAPPER_SEL = '.' + SLIDES_WRAPPER;
    var SLIDES_CONTAINER = 'fp-slidesContainer';
    var SLIDES_CONTAINER_SEL = '.' + SLIDES_CONTAINER;
    var TABLE = 'fp-table';

    // slide nav
    var SLIDES_NAV = 'fp-slidesNav';
    var SLIDES_NAV_SEL = '.' + SLIDES_NAV;
    var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + ' a';
    var SLIDES_ARROW = 'fp-controlArrow';
    var SLIDES_ARROW_SEL = '.' + SLIDES_ARROW;
    var SLIDES_PREV = 'fp-prev';
    var SLIDES_PREV_SEL = '.' + SLIDES_PREV;
    var SLIDES_ARROW_PREV = SLIDES_ARROW + ' ' + SLIDES_PREV;
    var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
    var SLIDES_NEXT = 'fp-next';
    var SLIDES_NEXT_SEL = '.' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT = SLIDES_ARROW + ' ' + SLIDES_NEXT;
    var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;

    var $window = $(window);
    var $document = $(document);

    // Default options for iScroll.js used when using scrollOverflow
    var iscrollOptions = {
        scrollbars: true,
        mouseWheel: true,
        hideScrollbars: false,
        fadeScrollbars: false,
        disableMouse: true,
        interactiveScrollbars: true
    };

    $.fn.fullpage = function (options) {
        //only once my friend!
        if ($('html').hasClass(ENABLED)) {
            displayWarnings();return;
        }

        // common jQuery objects
        var $htmlBody = $('html, body');
        var $body = $('body');

        var FP = $.fn.fullpage;

        // Create some defaults, extending them with any options that were provided
        options = $.extend({
            //navigation
            menu: false,
            anchors: [],
            lockAnchors: false,
            navigation: false,
            navigationPosition: 'right',
            navigationTooltips: [],
            showActiveTooltip: false,
            slidesNavigation: false,
            slidesNavPosition: 'bottom',
            scrollBar: false,
            hybrid: false,

            //scrolling
            css3: true,
            scrollingSpeed: 700,
            autoScrolling: true,
            fitToSection: true,
            fitToSectionDelay: 1000,
            easing: 'easeInOutCubic',
            easingcss3: 'ease',
            loopBottom: false,
            loopTop: false,
            loopHorizontal: true,
            continuousVertical: false,
            continuousHorizontal: false,
            scrollHorizontally: false,
            interlockedSlides: false,
            dragAndMove: false,
            offsetSections: false,
            resetSliders: false,
            fadingEffect: false,
            normalScrollElements: null,
            scrollOverflow: false,
            scrollOverflowReset: false,
            scrollOverflowHandler: iscrollHandler,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,

            //Accessibility
            keyboardScrolling: true,
            animateAnchor: true,
            recordHistory: true,

            //design
            controlArrows: true,
            controlArrowColor: '#fff',
            verticalCentered: true,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0, //backwards compabitility with responsiveWiddth
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: false,

            //Custom selectors
            sectionSelector: SECTION_DEFAULT_SEL,
            slideSelector: SLIDE_DEFAULT_SEL,

            //events
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null,

            lazyLoading: true
        }, options);

        //flag to avoid very fast sliding for landscape sliders
        var slideMoving = false;

        var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
        var isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints;
        var container = $(this);
        var windowsHeight = $window.height();
        var isResizing = false;
        var isWindowFocused = true;
        var lastScrolledDestiny;
        var lastScrolledSlide;
        var canScroll = true;
        var scrollings = [];
        var controlPressed;
        var isScrollAllowed = {};
        isScrollAllowed.m = { 'up': true, 'down': true, 'left': true, 'right': true };
        isScrollAllowed.k = $.extend(true, {}, isScrollAllowed.m);

        //timeouts
        var resizeId;
        var afterSectionLoadsId;
        var afterSlideLoadsId;
        var scrollId;
        var scrollId2;
        var keydownId;
        var originals = $.extend(true, {}, options); //deep copy

        displayWarnings();

        //fixing bug in iScroll with links: https://github.com/cubiq/iscroll/issues/783
        iscrollOptions.click = isTouch; // see #2035

        //extending iScroll options with the user custom ones
        iscrollOptions = $.extend(iscrollOptions, options.scrollOverflowOptions);

        //easeInOutCubic animation included in the plugin
        $.extend($.easing, { easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
                if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;return c / 2 * ((t -= 2) * t * t + 2) + b;
            } });

        /**
        * Sets the autoScroll option.
        * It changes the scroll bar visibility and the history of the site as a result.
        */
        function setAutoScrolling(value, type) {
            //removing the transformation
            if (!value) {
                silentScroll(0);
            }

            setVariableState('autoScrolling', value, type);

            var element = $(SECTION_ACTIVE_SEL);

            if (options.autoScrolling && !options.scrollBar) {
                $htmlBody.css({
                    'overflow': 'hidden',
                    'height': '100%'
                });

                setRecordHistory(originals.recordHistory, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': 'none',
                    'touch-action': 'none'
                });

                if (element.length) {
                    //moving the container up
                    silentScroll(element.position().top);
                }
            } else {
                $htmlBody.css({
                    'overflow': 'visible',
                    'height': 'initial'
                });

                setRecordHistory(false, 'internal');

                //for IE touch devices
                container.css({
                    '-ms-touch-action': '',
                    'touch-action': ''
                });

                //scrolling the page to the section with no animation
                if (element.length) {
                    $htmlBody.scrollTop(element.position().top);
                }
            }
        }

        /**
        * Defines wheter to record the history for each hash change in the URL.
        */
        function setRecordHistory(value, type) {
            setVariableState('recordHistory', value, type);
        }

        /**
        * Defines the scrolling speed
        */
        function setScrollingSpeed(value, type) {
            setVariableState('scrollingSpeed', value, type);
        }

        /**
        * Sets fitToSection
        */
        function setFitToSection(value, type) {
            setVariableState('fitToSection', value, type);
        }

        /**
        * Sets lockAnchors
        */
        function setLockAnchors(value) {
            options.lockAnchors = value;
        }

        /**
        * Adds or remove the possiblity of scrolling through sections by using the mouse wheel or the trackpad.
        */
        function setMouseWheelScrolling(value) {
            if (value) {
                addMouseWheelHandler();
                addMiddleWheelHandler();
            } else {
                removeMouseWheelHandler();
                removeMiddleWheelHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
        * Optionally a second parameter can be used to specify the direction for which the action will be applied.
        *
        * @param directions string containing the direction or directions separated by comma.
        */
        function setAllowScrolling(value, directions) {
            if (typeof directions !== 'undefined') {
                directions = directions.replace(/ /g, '').split(',');

                $.each(directions, function (index, direction) {
                    setIsScrollAllowed(value, direction, 'm');
                });
            } else if (value) {
                setMouseWheelScrolling(true);
                addTouchHandler();
            } else {
                setMouseWheelScrolling(false);
                removeTouchHandler();
            }
        }

        /**
        * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
        */
        function setKeyboardScrolling(value, directions) {
            if (typeof directions !== 'undefined') {
                directions = directions.replace(/ /g, '').split(',');

                $.each(directions, function (index, direction) {
                    setIsScrollAllowed(value, direction, 'k');
                });
            } else {
                options.keyboardScrolling = value;
            }
        }

        /**
        * Moves the page up one section.
        */
        function moveSectionUp() {
            var prev = $(SECTION_ACTIVE_SEL).prev(SECTION_SEL);

            //looping to the bottom if there's no more sections above
            if (!prev.length && (options.loopTop || options.continuousVertical)) {
                prev = $(SECTION_SEL).last();
            }

            if (prev.length) {
                scrollPage(prev, null, true);
            }
        }

        /**
        * Moves the page down one section.
        */
        function moveSectionDown() {
            var next = $(SECTION_ACTIVE_SEL).next(SECTION_SEL);

            //looping to the top if there's no more sections below
            if (!next.length && (options.loopBottom || options.continuousVertical)) {
                next = $(SECTION_SEL).first();
            }

            if (next.length) {
                scrollPage(next, null, false);
            }
        }

        /**
        * Moves the page to the given section and slide with no animation.
        * Anchors or index positions can be used as params.
        */
        function silentMoveTo(sectionAnchor, slideAnchor) {
            setScrollingSpeed(0, 'internal');
            moveTo(sectionAnchor, slideAnchor);
            setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Moves the page to the given section and slide.
        * Anchors or index positions can be used as params.
        */
        function moveTo(sectionAnchor, slideAnchor) {
            var destiny = getSectionByAnchor(sectionAnchor);

            if (typeof slideAnchor !== 'undefined') {
                scrollPageAndSlide(sectionAnchor, slideAnchor);
            } else if (destiny.length > 0) {
                scrollPage(destiny);
            }
        }

        /**
        * Slides right the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideRight(section) {
            moveSlide('right', section);
        }

        /**
        * Slides left the slider of the active section.
        * Optional `section` param.
        */
        function moveSlideLeft(section) {
            moveSlide('left', section);
        }

        /**
         * When resizing is finished, we adjust the slides sizes and positions
         */
        function reBuild(resizing) {
            if (container.hasClass(DESTROYED)) {
                return;
            } //nothing to do if the plugin was destroyed

            isResizing = true;

            windowsHeight = $window.height(); //updating global var

            $(SECTION_SEL).each(function () {
                var slidesWrap = $(this).find(SLIDES_WRAPPER_SEL);
                var slides = $(this).find(SLIDE_SEL);

                //adjusting the height of the table-cell for IE and Firefox
                if (options.verticalCentered) {
                    $(this).find(TABLE_CELL_SEL).css('height', getTableHeight($(this)) + 'px');
                }

                $(this).css('height', windowsHeight + 'px');

                //resizing the scrolling divs
                if (options.scrollOverflow) {
                    if (slides.length) {
                        slides.each(function () {
                            createScrollBar($(this));
                        });
                    } else {
                        createScrollBar($(this));
                    }
                }

                //adjusting the position fo the FULL WIDTH slides...
                if (slides.length > 1) {
                    landscapeScroll(slidesWrap, slidesWrap.find(SLIDE_ACTIVE_SEL));
                }
            });

            var activeSection = $(SECTION_ACTIVE_SEL);
            var sectionIndex = activeSection.index(SECTION_SEL);

            //isn't it the first section?
            if (sectionIndex) {
                //adjusting the position for the current section
                silentMoveTo(sectionIndex + 1);
            }

            isResizing = false;
            $.isFunction(options.afterResize) && resizing && options.afterResize.call(container);
            $.isFunction(options.afterReBuild) && !resizing && options.afterReBuild.call(container);
        }

        /**
        * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
        * are smaller than the set limit values.
        */
        function setResponsive(active) {
            var isResponsive = $body.hasClass(RESPONSIVE);

            if (active) {
                if (!isResponsive) {
                    setAutoScrolling(false, 'internal');
                    setFitToSection(false, 'internal');
                    $(SECTION_NAV_SEL).hide();
                    $body.addClass(RESPONSIVE);
                    $.isFunction(options.afterResponsive) && options.afterResponsive.call(container, active);
                }
            } else if (isResponsive) {
                setAutoScrolling(originals.autoScrolling, 'internal');
                setFitToSection(originals.autoScrolling, 'internal');
                $(SECTION_NAV_SEL).show();
                $body.removeClass(RESPONSIVE);
                $.isFunction(options.afterResponsive) && options.afterResponsive.call(container, active);
            }
        }

        if ($(this).length) {
            //public functions
            FP.setAutoScrolling = setAutoScrolling;
            FP.setRecordHistory = setRecordHistory;
            FP.setScrollingSpeed = setScrollingSpeed;
            FP.setFitToSection = setFitToSection;
            FP.setLockAnchors = setLockAnchors;
            FP.setMouseWheelScrolling = setMouseWheelScrolling;
            FP.setAllowScrolling = setAllowScrolling;
            FP.setKeyboardScrolling = setKeyboardScrolling;
            FP.moveSectionUp = moveSectionUp;
            FP.moveSectionDown = moveSectionDown;
            FP.silentMoveTo = silentMoveTo;
            FP.moveTo = moveTo;
            FP.moveSlideRight = moveSlideRight;
            FP.moveSlideLeft = moveSlideLeft;
            FP.reBuild = reBuild;
            FP.setResponsive = setResponsive;
            FP.destroy = destroy;

            init();

            bindEvents();
        }

        function init() {
            //if css3 is not supported, it will use jQuery animations
            if (options.css3) {
                options.css3 = support3d();
            }

            options.scrollBar = options.scrollBar || options.hybrid;

            setOptionsFromDOM();

            prepareDom();
            setAllowScrolling(true);

            setAutoScrolling(options.autoScrolling, 'internal');

            //the starting point is a slide?
            var activeSlide = $(SECTION_ACTIVE_SEL).find(SLIDE_ACTIVE_SEL);

            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if (activeSlide.length && ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || $(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && activeSlide.index() !== 0)) {
                silentLandscapeScroll(activeSlide);
            }

            responsive();

            //setting the class for the body element
            setBodyClass();

            if (document.readyState === 'complete') {
                scrollToAnchor();
            }
            $window.on('load', scrollToAnchor);
        }

        function bindEvents() {
            $window
            //when scrolling...
            .on('scroll', scrollHandler)

            //detecting any change on the URL to scroll to the given anchor link
            //(a way to detect back history button as we play with the hashes on the URL)
            .on('hashchange', hashChangeHandler)

            //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
            .blur(blurHandler)

            //when resizing the site, we adjust the heights of the sections, slimScroll...
            .resize(resizeHandler);

            $document
            //Sliding with arrow keys, both, vertical and horizontal
            .keydown(keydownHandler)

            //to prevent scrolling while zooming
            .keyup(keyUpHandler)

            //Scrolls to the section when clicking the navigation bullet
            .on('click touchstart', SECTION_NAV_SEL + ' a', sectionBulletHandler)

            //Scrolls the slider to the given slide destination for the given section
            .on('click touchstart', SLIDES_NAV_LINK_SEL, slideBulletHandler).on('click', SECTION_NAV_TOOLTIP_SEL, tooltipTextHandler);

            //Scrolling horizontally when clicking on the slider controls.
            $(SECTION_SEL).on('click touchstart', SLIDES_ARROW_SEL, slideArrowHandler);

            /**
            * Applying normalScroll elements.
            * Ignoring the scrolls over the specified selectors.
            */
            if (options.normalScrollElements) {
                $document.on('mouseenter', options.normalScrollElements, function () {
                    setMouseWheelScrolling(false);
                });

                $document.on('mouseleave', options.normalScrollElements, function () {
                    setMouseWheelScrolling(true);
                });
            }
        }

        /**
        * Setting options from DOM elements if they are not provided.
        */
        function setOptionsFromDOM() {
            var sections = container.find(options.sectionSelector);

            //no anchors option? Checking for them in the DOM attributes
            if (!options.anchors.length) {
                options.anchors = sections.filter('[data-anchor]').map(function () {
                    return $(this).data('anchor').toString();
                }).get();
            }

            //no tooltips option? Checking for them in the DOM attributes
            if (!options.navigationTooltips.length) {
                options.navigationTooltips = sections.filter('[data-tooltip]').map(function () {
                    return $(this).data('tooltip').toString();
                }).get();
            }
        }

        /**
        * Works over the DOM structure to set it up for the current fullpage options.
        */
        function prepareDom() {
            container.css({
                'height': '100%',
                'position': 'relative'
            });

            //adding a class to recognize the container internally in the code
            container.addClass(WRAPPER);
            $('html').addClass(ENABLED);

            //due to https://github.com/alvarotrigo/fullPage.js/issues/1502
            windowsHeight = $window.height();

            container.removeClass(DESTROYED); //in case it was destroyed before initializing it again

            addInternalSelectors();

            //styling the sections / slides / menu
            $(SECTION_SEL).each(function (index) {
                var section = $(this);
                var slides = section.find(SLIDE_SEL);
                var numSlides = slides.length;

                styleSection(section, index);
                styleMenu(section, index);

                // if there's any slide
                if (numSlides > 0) {
                    styleSlides(section, slides, numSlides);
                } else {
                    if (options.verticalCentered) {
                        addTableClass(section);
                    }
                }
            });

            //fixed elements need to be moved out of the plugin container due to problems with CSS3.
            if (options.fixedElements && options.css3) {
                $(options.fixedElements).appendTo($body);
            }

            //vertical centered of the navigation + active bullet
            if (options.navigation) {
                addVerticalNavigation();
            }

            enableYoutubeAPI();

            if (options.scrollOverflow) {
                if (document.readyState === 'complete') {
                    createScrollBarHandler();
                }
                //after DOM and images are loaded
                $window.on('load', createScrollBarHandler);
            } else {
                afterRenderActions();
            }
        }

        /**
        * Styles the horizontal slides for a section.
        */
        function styleSlides(section, slides, numSlides) {
            var sliderWidth = numSlides * 100;
            var slideWidth = 100 / numSlides;

            slides.wrapAll('<div class="' + SLIDES_CONTAINER + '" />');
            slides.parent().wrap('<div class="' + SLIDES_WRAPPER + '" />');

            section.find(SLIDES_CONTAINER_SEL).css('width', sliderWidth + '%');

            if (numSlides > 1) {
                if (options.controlArrows) {
                    createSlideArrows(section);
                }

                if (options.slidesNavigation) {
                    addSlidesNavigation(section, numSlides);
                }
            }

            slides.each(function (index) {
                $(this).css('width', slideWidth + '%');

                if (options.verticalCentered) {
                    addTableClass($(this));
                }
            });

            var startingSlide = section.find(SLIDE_ACTIVE_SEL);

            //if the slide won't be an starting point, the default will be the first one
            //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.
            if (startingSlide.length && ($(SECTION_ACTIVE_SEL).index(SECTION_SEL) !== 0 || $(SECTION_ACTIVE_SEL).index(SECTION_SEL) === 0 && startingSlide.index() !== 0)) {
                silentLandscapeScroll(startingSlide);
            } else {
                slides.eq(0).addClass(ACTIVE);
            }
        }

        /**
        * Styling vertical sections
        */
        function styleSection(section, index) {
            //if no active section is defined, the 1st one will be the default one
            if (!index && $(SECTION_ACTIVE_SEL).length === 0) {
                section.addClass(ACTIVE);
            }

            section.css('height', windowsHeight + 'px');

            if (options.paddingTop) {
                section.css('padding-top', options.paddingTop);
            }

            if (options.paddingBottom) {
                section.css('padding-bottom', options.paddingBottom);
            }

            if (typeof options.sectionsColor[index] !== 'undefined') {
                section.css('background-color', options.sectionsColor[index]);
            }

            if (typeof options.anchors[index] !== 'undefined') {
                section.attr('data-anchor', options.anchors[index]);
            }
        }

        /**
        * Sets the data-anchor attributes to the menu elements and activates the current one.
        */
        function styleMenu(section, index) {
            if (typeof options.anchors[index] !== 'undefined') {
                //activating the menu / nav element on load
                if (section.hasClass(ACTIVE)) {
                    activateMenuAndNav(options.anchors[index], index);
                }
            }

            //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)
            if (options.menu && options.css3 && $(options.menu).closest(WRAPPER_SEL).length) {
                $(options.menu).appendTo($body);
            }
        }

        /**
        * Adds internal classes to be able to provide customizable selectors
        * keeping the link with the style sheet.
        */
        function addInternalSelectors() {
            container.find(options.sectionSelector).addClass(SECTION);
            container.find(options.slideSelector).addClass(SLIDE);
        }

        /**
        * Creates the control arrows for the given section
        */
        function createSlideArrows(section) {
            section.find(SLIDES_WRAPPER_SEL).after('<div class="' + SLIDES_ARROW_PREV + '"></div><div class="' + SLIDES_ARROW_NEXT + '"></div>');

            if (options.controlArrowColor != '#fff') {
                section.find(SLIDES_ARROW_NEXT_SEL).css('border-color', 'transparent transparent transparent ' + options.controlArrowColor);
                section.find(SLIDES_ARROW_PREV_SEL).css('border-color', 'transparent ' + options.controlArrowColor + ' transparent transparent');
            }

            if (!options.loopHorizontal) {
                section.find(SLIDES_ARROW_PREV_SEL).hide();
            }
        }

        /**
        * Creates a vertical navigation bar.
        */
        function addVerticalNavigation() {
            $body.append('<div id="' + SECTION_NAV + '"><ul></ul></div>');
            var nav = $(SECTION_NAV_SEL);

            nav.addClass(function () {
                return options.showActiveTooltip ? SHOW_ACTIVE_TOOLTIP + ' ' + options.navigationPosition : options.navigationPosition;
            });

            for (var i = 0; i < $(SECTION_SEL).length; i++) {
                var link = '';
                if (options.anchors.length) {
                    link = options.anchors[i];
                }

                var li = '<li><a href="#' + link + '"><span></span></a>';

                // Only add tooltip if needed (defined by user)
                var tooltip = options.navigationTooltips[i];

                if (typeof tooltip !== 'undefined' && tooltip !== '') {
                    li += '<div class="' + SECTION_NAV_TOOLTIP + ' ' + options.navigationPosition + '">' + tooltip + '</div>';
                }

                li += '</li>';

                nav.find('ul').append(li);
            }

            //centering it vertically
            $(SECTION_NAV_SEL).css('margin-top', '-' + $(SECTION_NAV_SEL).height() / 2 + 'px');

            //activating the current active section
            $(SECTION_NAV_SEL).find('li').eq($(SECTION_ACTIVE_SEL).index(SECTION_SEL)).find('a').addClass(ACTIVE);
        }

        /**
        * Creates the slim scroll scrollbar for the sections and slides inside them.
        */
        function createScrollBarHandler() {
            $(SECTION_SEL).each(function () {
                var slides = $(this).find(SLIDE_SEL);

                if (slides.length) {
                    slides.each(function () {
                        createScrollBar($(this));
                    });
                } else {
                    createScrollBar($(this));
                }
            });
            afterRenderActions();
        }

        /*
        * Enables the Youtube videos API so we can control their flow if necessary.
        */
        function enableYoutubeAPI() {
            container.find('iframe[src*="youtube.com/embed/"]').each(function () {
                addURLParam($(this), 'enablejsapi=1');
            });
        }

        /**
        * Adds a new parameter and its value to the `src` of a given element
        */
        function addURLParam(element, newParam) {
            var originalSrc = element.attr('src');
            element.attr('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
        }

        /*
        * Returns the prefix sign to use for a new parameter in an existen URL.
        *
        * @return {String}  ? | &
        */
        function getUrlParamSign(url) {
            return !/\?/.test(url) ? '?' : '&';
        }

        /**
        * Actions and callbacks to fire afterRender
        */
        function afterRenderActions() {
            var section = $(SECTION_ACTIVE_SEL);

            section.addClass(COMPLETELY);

            if (options.scrollOverflowHandler.afterRender) {
                options.scrollOverflowHandler.afterRender(section);
            }
            lazyLoad(section);
            playMedia(section);
            options.scrollOverflowHandler.afterLoad();

            $.isFunction(options.afterLoad) && options.afterLoad.call(section, section.data('anchor'), section.index(SECTION_SEL) + 1);
            $.isFunction(options.afterRender) && options.afterRender.call(container);
        }

        var isScrolling = false;
        var lastScroll = 0;

        //when scrolling...
        function scrollHandler() {
            var currentSection;

            if (!options.autoScrolling || options.scrollBar) {
                var currentScroll = $window.scrollTop();
                var scrollDirection = getScrollDirection(currentScroll);
                var visibleSectionIndex = 0;
                var screen_mid = currentScroll + $window.height() / 2.0;
                var isAtBottom = $body.height() - $window.height() === currentScroll;
                var sections = document.querySelectorAll(SECTION_SEL);

                //when using `auto-height` for a small last section it won't be centered in the viewport
                if (isAtBottom) {
                    visibleSectionIndex = sections.length - 1;
                }
                //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
                else if (!currentScroll) {
                        visibleSectionIndex = 0;
                    }

                    //taking the section which is showing more content in the viewport
                    else {
                            for (var i = 0; i < sections.length; ++i) {
                                var section = sections[i];

                                // Pick the the last section which passes the middle line of the screen.
                                if (section.offsetTop <= screen_mid) {
                                    visibleSectionIndex = i;
                                }
                            }
                        }

                if (isCompletelyInViewPort(scrollDirection)) {
                    if (!$(SECTION_ACTIVE_SEL).hasClass(COMPLETELY)) {
                        $(SECTION_ACTIVE_SEL).addClass(COMPLETELY).siblings().removeClass(COMPLETELY);
                    }
                }

                //geting the last one, the current one on the screen
                currentSection = $(sections).eq(visibleSectionIndex);

                //setting the visible section as active when manually scrolling
                //executing only once the first time we reach the section
                if (!currentSection.hasClass(ACTIVE)) {
                    isScrolling = true;
                    var leavingSection = $(SECTION_ACTIVE_SEL);
                    var leavingSectionIndex = leavingSection.index(SECTION_SEL) + 1;
                    var yMovement = getYmovement(currentSection);
                    var anchorLink = currentSection.data('anchor');
                    var sectionIndex = currentSection.index(SECTION_SEL) + 1;
                    var activeSlide = currentSection.find(SLIDE_ACTIVE_SEL);
                    var slideIndex;
                    var slideAnchorLink;

                    if (activeSlide.length) {
                        slideAnchorLink = activeSlide.data('anchor');
                        slideIndex = activeSlide.index();
                    }

                    if (canScroll) {
                        currentSection.addClass(ACTIVE).siblings().removeClass(ACTIVE);

                        $.isFunction(options.onLeave) && options.onLeave.call(leavingSection, leavingSectionIndex, sectionIndex, yMovement);
                        $.isFunction(options.afterLoad) && options.afterLoad.call(currentSection, anchorLink, sectionIndex);

                        stopMedia(leavingSection);
                        lazyLoad(currentSection);
                        playMedia(currentSection);

                        activateMenuAndNav(anchorLink, sectionIndex - 1);

                        if (options.anchors.length) {
                            //needed to enter in hashChange event when using the menu with anchor links
                            lastScrolledDestiny = anchorLink;
                        }
                        setState(slideIndex, slideAnchorLink, anchorLink, sectionIndex);
                    }

                    //small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
                    clearTimeout(scrollId);
                    scrollId = setTimeout(function () {
                        isScrolling = false;
                    }, 100);
                }

                if (options.fitToSection) {
                    //for the auto adjust of the viewport to fit a whole section
                    clearTimeout(scrollId2);

                    scrollId2 = setTimeout(function () {
                        //checking fitToSection again in case it was set to false before the timeout delay
                        if (canScroll && options.fitToSection) {
                            //allows to scroll to an active section and
                            //if the section is already active, we prevent firing callbacks
                            if ($(SECTION_ACTIVE_SEL).is(currentSection)) {
                                isResizing = true;
                            }
                            scrollPage($(SECTION_ACTIVE_SEL));

                            isResizing = false;
                        }
                    }, options.fitToSectionDelay);
                }
            }
        }

        /**
        * Determines whether the active section has seen in its whole or not.
        */
        function isCompletelyInViewPort(movement) {
            var top = $(SECTION_ACTIVE_SEL).position().top;
            var bottom = top + $window.height();

            if (movement == 'up') {
                return bottom >= $window.scrollTop() + $window.height();
            }
            return top <= $window.scrollTop();
        }

        /**
        * Gets the directon of the the scrolling fired by the scroll event.
        */
        function getScrollDirection(currentScroll) {
            var direction = currentScroll > lastScroll ? 'down' : 'up';

            lastScroll = currentScroll;

            //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination
            previousDestTop = currentScroll;

            return direction;
        }

        /**
        * Determines the way of scrolling up or down:
        * by 'automatically' scrolling a section or by using the default and normal scrolling.
        */
        function scrolling(type, scrollable) {
            if (!isScrollAllowed.m[type]) {
                return;
            }
            var check = type === 'down' ? 'bottom' : 'top';
            var scrollSection = type === 'down' ? moveSectionDown : moveSectionUp;

            if (scrollable.length > 0) {
                //is the scrollbar at the start/end of the scroll?
                if (options.scrollOverflowHandler.isScrolled(check, scrollable)) {
                    scrollSection();
                } else {
                    return true;
                }
            } else {
                // moved up/down
                scrollSection();
            }
        }

        /*
        * Preventing bouncing in iOS #2285
        */
        function preventBouncing(event) {
            var e = event.originalEvent;
            if (!checkParentForNormalScrollElement(event.target) && options.autoScrolling && isReallyTouch(e)) {
                //preventing the easing on iOS devices
                event.preventDefault();
            }
        }

        var touchStartY = 0;
        var touchStartX = 0;
        var touchEndY = 0;
        var touchEndX = 0;

        /* Detecting touch events
          * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
        * This way, the touchstart and the touch moves shows an small difference between them which is the
        * used one to determine the direction.
        */
        function touchMoveHandler(event) {
            var e = event.originalEvent;
            var activeSection = $(e.target).closest(SECTION_SEL);

            // additional: if one of the normalScrollElements isn't within options.normalScrollElementTouchThreshold hops up the DOM chain
            if (!checkParentForNormalScrollElement(event.target) && isReallyTouch(e)) {

                if (options.autoScrolling) {
                    //preventing the easing on iOS devices
                    event.preventDefault();
                }

                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);
                var touchEvents = getEventsPage(e);

                touchEndY = touchEvents.y;
                touchEndX = touchEvents.x;

                //if movement in the X axys is greater than in the Y and the currect section has slides...
                if (activeSection.find(SLIDES_WRAPPER_SEL).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY)) {

                    //is the movement greater than the minimum resistance to scroll?
                    if (!slideMoving && Math.abs(touchStartX - touchEndX) > $window.outerWidth() / 100 * options.touchSensitivity) {
                        if (touchStartX > touchEndX) {
                            if (isScrollAllowed.m.right) {
                                moveSlideRight(activeSection); //next
                            }
                        } else {
                            if (isScrollAllowed.m.left) {
                                moveSlideLeft(activeSection); //prev
                            }
                        }
                    }
                }

                //vertical scrolling (only when autoScrolling is enabled)
                else if (options.autoScrolling && canScroll) {

                        //is the movement greater than the minimum resistance to scroll?
                        if (Math.abs(touchStartY - touchEndY) > $window.height() / 100 * options.touchSensitivity) {
                            if (touchStartY > touchEndY) {
                                scrolling('down', scrollable);
                            } else if (touchEndY > touchStartY) {
                                scrolling('up', scrollable);
                            }
                        }
                    }
            }
        }

        /**
         * recursive function to loop up the parent nodes to check if one of them exists in options.normalScrollElements
         * Currently works well for iOS - Android might need some testing
         * @param  {Element} el  target element / jquery selector (in subsequent nodes)
         * @param  {int}     hop current hop compared to options.normalScrollElementTouchThreshold
         * @return {boolean} true if there is a match to options.normalScrollElements
         */
        function checkParentForNormalScrollElement(el, hop) {
            hop = hop || 0;
            var parent = $(el).parent();

            if (hop < options.normalScrollElementTouchThreshold && parent.is(options.normalScrollElements)) {
                return true;
            } else if (hop == options.normalScrollElementTouchThreshold) {
                return false;
            } else {
                return checkParentForNormalScrollElement(parent, ++hop);
            }
        }

        /**
        * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
        * this way we make sure that is really a touch event what IE is detecting.
        */
        function isReallyTouch(e) {
            //if is not IE   ||  IE is detecting `touch` or `pen`
            return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
        }

        /**
        * Handler for the touch start event.
        */
        function touchStartHandler(event) {
            var e = event.originalEvent;

            //stopping the auto scroll to adjust to a section
            if (options.fitToSection) {
                $htmlBody.stop();
            }

            if (isReallyTouch(e)) {
                var touchEvents = getEventsPage(e);
                touchStartY = touchEvents.y;
                touchStartX = touchEvents.x;
            }
        }

        /**
        * Gets the average of the last `number` elements of the given array.
        */
        function getAverage(elements, number) {
            var sum = 0;

            //taking `number` elements from the end to make the average, if there are not enought, 1
            var lastElements = elements.slice(Math.max(elements.length - number, 1));

            for (var i = 0; i < lastElements.length; i++) {
                sum = sum + lastElements[i];
            }

            return Math.ceil(sum / number);
        }

        /**
         * Detecting mousewheel scrolling
         *
         * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
         * http://www.sitepoint.com/html5-javascript-mouse-wheel/
         */
        var prevTime = new Date().getTime();

        function MouseWheelHandler(e) {
            var curTime = new Date().getTime();
            var isNormalScroll = $(COMPLETELY_SEL).hasClass(NORMAL_SCROLL);

            //autoscrolling and not zooming?
            if (options.autoScrolling && !controlPressed && !isNormalScroll) {
                // cross-browser wheel delta
                e = e || window.event;
                var value = e.wheelDelta || -e.deltaY || -e.detail;
                var delta = Math.max(-1, Math.min(1, value));

                var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
                var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;

                //Limiting the array to 150 (lets not waste memory!)
                if (scrollings.length > 149) {
                    scrollings.shift();
                }

                //keeping record of the previous scrollings
                scrollings.push(Math.abs(value));

                //preventing to scroll the site on mouse wheel when scrollbar is present
                if (options.scrollBar) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = false;
                }

                var activeSection = $(SECTION_ACTIVE_SEL);
                var scrollable = options.scrollOverflowHandler.scrollable(activeSection);

                //time difference between the last scroll and the current one
                var timeDiff = curTime - prevTime;
                prevTime = curTime;

                //haven't they scrolled in a while?
                //(enough to be consider a different scrolling action to scroll another section)
                if (timeDiff > 200) {
                    //emptying the array, we dont care about old scrollings for our averages
                    scrollings = [];
                }

                if (canScroll) {
                    var averageEnd = getAverage(scrollings, 10);
                    var averageMiddle = getAverage(scrollings, 70);
                    var isAccelerating = averageEnd >= averageMiddle;

                    //to avoid double swipes...
                    if (isAccelerating && isScrollingVertically) {
                        //scrolling down?
                        if (delta < 0) {
                            scrolling('down', scrollable);

                            //scrolling up?
                        } else {
                            scrolling('up', scrollable);
                        }
                    }
                }

                return false;
            }

            if (options.fitToSection) {
                //stopping the auto scroll to adjust to a section
                $htmlBody.stop();
            }
        }

        /**
        * Slides a slider to the given direction.
        * Optional `section` param.
        */
        function moveSlide(direction, section) {
            var activeSection = typeof section === 'undefined' ? $(SECTION_ACTIVE_SEL) : section;
            var slides = activeSection.find(SLIDES_WRAPPER_SEL);
            var numSlides = slides.find(SLIDE_SEL).length;

            // more than one slide needed and nothing should be sliding
            if (!slides.length || slideMoving || numSlides < 2) {
                return;
            }

            var currentSlide = slides.find(SLIDE_ACTIVE_SEL);
            var destiny = null;

            if (direction === 'left') {
                destiny = currentSlide.prev(SLIDE_SEL);
            } else {
                destiny = currentSlide.next(SLIDE_SEL);
            }

            //isn't there a next slide in the secuence?
            if (!destiny.length) {
                //respect loopHorizontal settin
                if (!options.loopHorizontal) return;

                if (direction === 'left') {
                    destiny = currentSlide.siblings(':last');
                } else {
                    destiny = currentSlide.siblings(':first');
                }
            }

            slideMoving = true;

            landscapeScroll(slides, destiny, direction);
        }

        /**
        * Maintains the active slides in the viewport
        * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
        */
        function keepSlidesPosition() {
            $(SLIDE_ACTIVE_SEL).each(function () {
                silentLandscapeScroll($(this), 'internal');
            });
        }

        var previousDestTop = 0;
        /**
        * Returns the destination Y position based on the scrolling direction and
        * the height of the section.
        */
        function getDestinationPosition(element) {
            var elemPosition = element.position();

            //top of the desination will be at the top of the viewport
            var position = elemPosition.top;
            var isScrollingDown = elemPosition.top > previousDestTop;
            var sectionBottom = position - windowsHeight + element.outerHeight();
            var bigSectionsDestination = options.bigSectionsDestination;

            //is the destination element bigger than the viewport?
            if (element.outerHeight() > windowsHeight) {
                //scrolling up?
                if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom') {
                    position = sectionBottom;
                }
            }

            //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
            else if (isScrollingDown || isResizing && element.is(':last-child')) {
                    //The bottom of the destination will be at the bottom of the viewport
                    position = sectionBottom;
                }

            /*
            Keeping record of the last scrolled position to determine the scrolling direction.
            No conventional methods can be used as the scroll bar might not be present
            AND the section might not be active if it is auto-height and didnt reach the middle
            of the viewport.
            */
            previousDestTop = position;
            return position;
        }

        /**
        * Scrolls the site to the given element and scrolls to the slide if a callback is given.
        */
        function scrollPage(element, callback, isMovementUp) {
            if (typeof element === 'undefined') {
                return;
            } //there's no element to scroll, leaving the function

            var dtop = getDestinationPosition(element);
            var slideAnchorLink;
            var slideIndex;

            //local variables
            var v = {
                element: element,
                callback: callback,
                isMovementUp: isMovementUp,
                dtop: dtop,
                yMovement: getYmovement(element),
                anchorLink: element.data('anchor'),
                sectionIndex: element.index(SECTION_SEL),
                activeSlide: element.find(SLIDE_ACTIVE_SEL),
                activeSection: $(SECTION_ACTIVE_SEL),
                leavingSection: $(SECTION_ACTIVE_SEL).index(SECTION_SEL) + 1,

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };

            //quiting when destination scroll is the same as the current one
            if (v.activeSection.is(element) && !isResizing || options.scrollBar && $window.scrollTop() === v.dtop && !element.hasClass(AUTO_HEIGHT)) {
                return;
            }

            if (v.activeSlide.length) {
                slideAnchorLink = v.activeSlide.data('anchor');
                slideIndex = v.activeSlide.index();
            }

            // If continuousVertical && we need to wrap around
            if (options.autoScrolling && options.continuousVertical && typeof v.isMovementUp !== "undefined" && (!v.isMovementUp && v.yMovement == 'up' || // Intending to scroll down but about to go up or
            v.isMovementUp && v.yMovement == 'down')) {
                // intending to scroll up but about to go down

                v = createInfiniteSections(v);
            }

            //callback (onLeave) if the site is not just resizing and readjusting the slides
            if ($.isFunction(options.onLeave) && !v.localIsResizing) {
                if (options.onLeave.call(v.activeSection, v.leavingSection, v.sectionIndex + 1, v.yMovement) === false) {
                    return;
                }
            }

            stopMedia(v.activeSection);

            options.scrollOverflowHandler.beforeLeave();
            element.addClass(ACTIVE).siblings().removeClass(ACTIVE);
            lazyLoad(element);
            options.scrollOverflowHandler.onLeave();

            //preventing from activating the MouseWheelHandler event
            //more than once if the page is scrolling
            canScroll = false;

            setState(slideIndex, slideAnchorLink, v.anchorLink, v.sectionIndex);

            performMovement(v);

            //flag to avoid callingn `scrollPage()` twice in case of using anchor links
            lastScrolledDestiny = v.anchorLink;

            //avoid firing it twice (as it does also on scroll)
            activateMenuAndNav(v.anchorLink, v.sectionIndex);
        }

        /**
        * Performs the vertical movement (by CSS3 or by jQuery)
        */
        function performMovement(v) {
            // using CSS3 translate functionality
            if (options.css3 && options.autoScrolling && !options.scrollBar) {

                // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
                // that's why we round it to 0.
                var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
                transformContainer(translate3d, true);

                //even when the scrollingSpeed is 0 there's a little delay, which might cause the
                //scrollingSpeed to change in case of using silentMoveTo();
                if (options.scrollingSpeed) {
                    clearTimeout(afterSectionLoadsId);
                    afterSectionLoadsId = setTimeout(function () {
                        afterSectionLoads(v);
                    }, options.scrollingSpeed);
                } else {
                    afterSectionLoads(v);
                }
            }

            // using jQuery animate
            else {
                    var scrollSettings = getScrollSettings(v);

                    $(scrollSettings.element).animate(scrollSettings.options, options.scrollingSpeed, options.easing).promise().done(function () {
                        //only one single callback in case of animating  `html, body`
                        if (options.scrollBar) {

                            /* Hack!
                            The timeout prevents setting the most dominant section in the viewport as "active" when the user
                            scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
                              When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
                            */
                            setTimeout(function () {
                                afterSectionLoads(v);
                            }, 30);
                        } else {
                            afterSectionLoads(v);
                        }
                    });
                }
        }

        /**
        * Gets the scrolling settings depending on the plugin autoScrolling option
        */
        function getScrollSettings(v) {
            var scroll = {};

            if (options.autoScrolling && !options.scrollBar) {
                scroll.options = { 'top': -v.dtop };
                scroll.element = WRAPPER_SEL;
            } else {
                scroll.options = { 'scrollTop': v.dtop };
                scroll.element = 'html, body';
            }

            return scroll;
        }

        /**
        * Adds sections before or after the current one to create the infinite effect.
        */
        function createInfiniteSections(v) {
            // Scrolling down
            if (!v.isMovementUp) {
                // Move all previous sections to after the active section
                $(SECTION_ACTIVE_SEL).after(v.activeSection.prevAll(SECTION_SEL).get().reverse());
            } else {
                // Scrolling up
                // Move all next sections to before the active section
                $(SECTION_ACTIVE_SEL).before(v.activeSection.nextAll(SECTION_SEL));
            }

            // Maintain the displayed position (now that we changed the element order)
            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();

            // save for later the elements that still need to be reordered
            v.wrapAroundElements = v.activeSection;

            // Recalculate animation variables
            v.dtop = v.element.position().top;
            v.yMovement = getYmovement(v.element);

            return v;
        }

        /**
        * Fix section order after continuousVertical changes have been animated
        */
        function continuousVerticalFixSectionOrder(v) {
            // If continuousVertical is in effect (and autoScrolling would also be in effect then),
            // finish moving the elements around so the direct navigation will function more simply
            if (!v.wrapAroundElements || !v.wrapAroundElements.length) {
                return;
            }

            if (v.isMovementUp) {
                $(SECTION_FIRST_SEL).before(v.wrapAroundElements);
            } else {
                $(SECTION_LAST_SEL).after(v.wrapAroundElements);
            }

            silentScroll($(SECTION_ACTIVE_SEL).position().top);

            // Maintain the active slides visible in the viewport
            keepSlidesPosition();
        }

        /**
        * Actions to do once the section is loaded.
        */
        function afterSectionLoads(v) {
            continuousVerticalFixSectionOrder(v);

            //callback (afterLoad) if the site is not just resizing and readjusting the slides
            $.isFunction(options.afterLoad) && !v.localIsResizing && options.afterLoad.call(v.element, v.anchorLink, v.sectionIndex + 1);
            options.scrollOverflowHandler.afterLoad();

            if (!v.localIsResizing) {
                playMedia(v.element);
            }

            v.element.addClass(COMPLETELY).siblings().removeClass(COMPLETELY);

            canScroll = true;

            $.isFunction(v.callback) && v.callback.call(this);
        }

        /**
        * Lazy loads image, video and audio elements.
        */
        function lazyLoad(destiny) {
            if (!options.lazyLoading) {
                return;
            }

            var panel = getSlideOrSection(destiny);
            var element;

            panel.find('img[data-src], source[data-src], audio[data-src], iframe[data-src]').each(function () {
                element = $(this);
                element.attr('src', element.data('src'));
                element.removeAttr('data-src');

                if (element.is('source')) {
                    element.closest('video').get(0).load();
                }
            });
        }

        /**
        * Plays video and audio elements.
        */
        function playMedia(destiny) {
            var panel = getSlideOrSection(destiny);

            //playing HTML5 media elements
            panel.find('video, audio').each(function () {
                var element = $(this).get(0);

                if (element.hasAttribute('data-autoplay') && typeof element.play === 'function') {
                    element.play();
                }
            });

            //youtube videos
            panel.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var element = $(this).get(0);

                if (element.hasAttribute('data-autoplay')) {
                    playYoutube(element);
                }

                //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.
                element.onload = function () {
                    if (element.hasAttribute('data-autoplay')) {
                        playYoutube(element);
                    }
                };
            });
        }

        /**
        * Plays a youtube video
        */
        function playYoutube(element) {
            element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        }

        /**
        * Stops video and audio elements.
        */
        function stopMedia(destiny) {
            var panel = getSlideOrSection(destiny);

            //stopping HTML5 media elements
            panel.find('video, audio').each(function () {
                var element = $(this).get(0);

                if (!element.hasAttribute('data-keepplaying') && typeof element.pause === 'function') {
                    element.pause();
                }
            });

            //youtube videos
            panel.find('iframe[src*="youtube.com/embed/"]').each(function () {
                var element = $(this).get(0);

                if (/youtube\.com\/embed\//.test($(this).attr('src')) && !element.hasAttribute('data-keepplaying')) {
                    $(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
                }
            });
        }

        /**
        * Gets the active slide (or section) for the given section
        */
        function getSlideOrSection(destiny) {
            var slide = destiny.find(SLIDE_ACTIVE_SEL);
            if (slide.length) {
                destiny = $(slide);
            }

            return destiny;
        }

        /**
        * Scrolls to the anchor in the URL when loading the site
        */
        function scrollToAnchor() {
            //getting the anchor link in the URL and deleting the `#`
            var value = window.location.hash.replace('#', '').split('/');
            var sectionAnchor = decodeURIComponent(value[0]);
            var slideAnchor = decodeURIComponent(value[1]);

            if (sectionAnchor) {
                //if theres any #
                if (options.animateAnchor) {
                    scrollPageAndSlide(sectionAnchor, slideAnchor);
                } else {
                    silentMoveTo(sectionAnchor, slideAnchor);
                }
            }
        }

        /**
        * Detecting any change on the URL to scroll to the given anchor link
        * (a way to detect back history button as we play with the hashes on the URL)
        */
        function hashChangeHandler() {
            if (!isScrolling && !options.lockAnchors) {
                var value = window.location.hash.replace('#', '').split('/');
                var sectionAnchor = decodeURIComponent(value[0]);
                var slideAnchor = decodeURIComponent(value[1]);

                //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)
                var isFirstSlideMove = typeof lastScrolledDestiny === 'undefined';
                var isFirstScrollMove = typeof lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !slideMoving;

                if (sectionAnchor.length) {
                    /*in order to call scrollpage() only once for each destination at a time
                    It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
                    event is fired on every scroll too.*/
                    if (sectionAnchor && sectionAnchor !== lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !slideMoving && lastScrolledSlide != slideAnchor) {
                        scrollPageAndSlide(sectionAnchor, slideAnchor);
                    }
                }
            }
        }

        //Sliding with arrow keys, both, vertical and horizontal
        function keydownHandler(e) {

            clearTimeout(keydownId);

            var activeElement = $(':focus');

            if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select') && activeElement.attr('contentEditable') !== "true" && activeElement.attr('contentEditable') !== '' && options.keyboardScrolling && options.autoScrolling) {
                var keyCode = e.which;

                //preventing the scroll with arrow keys & spacebar & Page Up & Down keys
                var keyControls = [40, 38, 32, 33, 34];
                if ($.inArray(keyCode, keyControls) > -1) {
                    e.preventDefault();
                }

                controlPressed = e.ctrlKey;

                keydownId = setTimeout(function () {
                    onkeydown(e);
                }, 150);
            }
        }

        function tooltipTextHandler() {
            $(this).prev().trigger('click');
        }

        //to prevent scrolling while zooming
        function keyUpHandler(e) {
            if (isWindowFocused) {
                //the keyup gets fired on new tab ctrl + t in Firefox
                controlPressed = e.ctrlKey;
            }
        }

        //binding the mousemove when the mouse's middle button is released
        function mouseDownHandler(e) {
            //middle button
            if (e.which == 2) {
                oldPageY = e.pageY;
                container.on('mousemove', mouseMoveHandler);
            }
        }

        //unbinding the mousemove when the mouse's middle button is released
        function mouseUpHandler(e) {
            //middle button
            if (e.which == 2) {
                container.off('mousemove');
            }
        }

        //Scrolling horizontally when clicking on the slider controls.
        function slideArrowHandler() {
            var section = $(this).closest(SECTION_SEL);

            if ($(this).hasClass(SLIDES_PREV)) {
                if (isScrollAllowed.m.left) {
                    moveSlideLeft(section);
                }
            } else {
                if (isScrollAllowed.m.right) {
                    moveSlideRight(section);
                }
            }
        }

        //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
        function blurHandler() {
            isWindowFocused = false;
            controlPressed = false;
        }

        //Scrolls to the section when clicking the navigation bullet
        function sectionBulletHandler(e) {
            e.preventDefault();
            var index = $(this).parent().index();
            scrollPage($(SECTION_SEL).eq(index));
        }

        //Scrolls the slider to the given slide destination for the given section
        function slideBulletHandler(e) {
            e.preventDefault();
            var slides = $(this).closest(SECTION_SEL).find(SLIDES_WRAPPER_SEL);
            var destiny = slides.find(SLIDE_SEL).eq($(this).closest('li').index());

            landscapeScroll(slides, destiny);
        }

        /**
        * Keydown event
        */
        function onkeydown(e) {
            var shiftPressed = e.shiftKey;

            //do nothing if we can not scroll or we are not using horizotnal key arrows.
            if (!canScroll && [37, 39].indexOf(e.which) < 0) {
                return;
            }

            switch (e.which) {
                //up
                case 38:
                case 33:
                    if (isScrollAllowed.k.up) {
                        moveSectionUp();
                    }
                    break;

                //down
                case 32:
                    //spacebar
                    if (shiftPressed && isScrollAllowed.k.up) {
                        moveSectionUp();
                        break;
                    }
                /* falls through */
                case 40:
                case 34:
                    if (isScrollAllowed.k.down) {
                        moveSectionDown();
                    }
                    break;

                //Home
                case 36:
                    if (isScrollAllowed.k.up) {
                        moveTo(1);
                    }
                    break;

                //End
                case 35:
                    if (isScrollAllowed.k.down) {
                        moveTo($(SECTION_SEL).length);
                    }
                    break;

                //left
                case 37:
                    if (isScrollAllowed.k.left) {
                        moveSlideLeft();
                    }
                    break;

                //right
                case 39:
                    if (isScrollAllowed.k.right) {
                        moveSlideRight();
                    }
                    break;

                default:
                    return; // exit this handler for other keys
            }
        }

        /**
        * Detecting the direction of the mouse movement.
        * Used only for the middle button of the mouse.
        */
        var oldPageY = 0;
        function mouseMoveHandler(e) {
            if (canScroll) {
                // moving up
                if (e.pageY < oldPageY && isScrollAllowed.m.up) {
                    moveSectionUp();
                }

                // moving down
                else if (e.pageY > oldPageY && isScrollAllowed.m.down) {
                        moveSectionDown();
                    }
            }
            oldPageY = e.pageY;
        }

        /**
        * Scrolls horizontal sliders.
        */
        function landscapeScroll(slides, destiny, direction) {
            var section = slides.closest(SECTION_SEL);
            var v = {
                slides: slides,
                destiny: destiny,
                direction: direction,
                destinyPos: destiny.position(),
                slideIndex: destiny.index(),
                section: section,
                sectionIndex: section.index(SECTION_SEL),
                anchorLink: section.data('anchor'),
                slidesNav: section.find(SLIDES_NAV_SEL),
                slideAnchor: getAnchor(destiny),
                prevSlide: section.find(SLIDE_ACTIVE_SEL),
                prevSlideIndex: section.find(SLIDE_ACTIVE_SEL).index(),

                //caching the value of isResizing at the momment the function is called
                //because it will be checked later inside a setTimeout and the value might change
                localIsResizing: isResizing
            };
            v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);

            //important!! Only do it when not resizing
            if (!v.localIsResizing) {
                //preventing from scrolling to the next/prev section when using scrollHorizontally
                canScroll = false;
            }

            if (options.onSlideLeave) {

                //if the site is not just resizing and readjusting the slides
                if (!v.localIsResizing && v.xMovement !== 'none') {
                    if ($.isFunction(options.onSlideLeave)) {
                        if (options.onSlideLeave.call(v.prevSlide, v.anchorLink, v.sectionIndex + 1, v.prevSlideIndex, v.xMovement, v.slideIndex) === false) {
                            slideMoving = false;
                            return;
                        }
                    }
                }
            }

            destiny.addClass(ACTIVE).siblings().removeClass(ACTIVE);

            if (!v.localIsResizing) {
                stopMedia(v.prevSlide);
                lazyLoad(destiny);
            }

            if (!options.loopHorizontal && options.controlArrows) {
                //hidding it for the fist slide, showing for the rest
                section.find(SLIDES_ARROW_PREV_SEL).toggle(v.slideIndex !== 0);

                //hidding it for the last slide, showing for the rest
                section.find(SLIDES_ARROW_NEXT_SEL).toggle(!destiny.is(':last-child'));
            }

            //only changing the URL if the slides are in the current section (not for resize re-adjusting)
            if (section.hasClass(ACTIVE)) {
                setState(v.slideIndex, v.slideAnchor, v.anchorLink, v.sectionIndex);
            }

            performHorizontalMove(slides, v, true);
        }

        function afterSlideLoads(v) {
            activeSlidesNavigation(v.slidesNav, v.slideIndex);

            //if the site is not just resizing and readjusting the slides
            if (!v.localIsResizing) {
                $.isFunction(options.afterSlideLoad) && options.afterSlideLoad.call(v.destiny, v.anchorLink, v.sectionIndex + 1, v.slideAnchor, v.slideIndex);

                //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
                //and to prevent double scroll right after a windows resize
                canScroll = true;

                playMedia(v.destiny);
            }

            //letting them slide again
            slideMoving = false;
        }

        /**
        * Performs the horizontal movement. (CSS3 or jQuery)
        *
        * @param fireCallback {Bool} - determines whether or not to fire the callback
        */
        function performHorizontalMove(slides, v, fireCallback) {
            var destinyPos = v.destinyPos;

            if (options.css3) {
                var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';

                addAnimation(slides.find(SLIDES_CONTAINER_SEL)).css(getTransforms(translate3d));

                afterSlideLoadsId = setTimeout(function () {
                    fireCallback && afterSlideLoads(v);
                }, options.scrollingSpeed, options.easing);
            } else {
                slides.animate({
                    scrollLeft: Math.round(destinyPos.left)
                }, options.scrollingSpeed, options.easing, function () {

                    fireCallback && afterSlideLoads(v);
                });
            }
        }

        /**
        * Sets the state for the horizontal bullet navigations.
        */
        function activeSlidesNavigation(slidesNav, slideIndex) {
            slidesNav.find(ACTIVE_SEL).removeClass(ACTIVE);
            slidesNav.find('li').eq(slideIndex).find('a').addClass(ACTIVE);
        }

        var previousHeight = windowsHeight;

        //when resizing the site, we adjust the heights of the sections, slimScroll...
        function resizeHandler() {
            //checking if it needs to get responsive
            responsive();

            // rebuild immediately on touch devices
            if (isTouchDevice) {
                var activeElement = $(document.activeElement);

                //if the keyboard is NOT visible
                if (!activeElement.is('textarea') && !activeElement.is('input') && !activeElement.is('select')) {
                    var currentHeight = $window.height();

                    //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)
                    if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
                        reBuild(true);
                        previousHeight = currentHeight;
                    }
                }
            } else {
                //in order to call the functions only when the resize is finished
                //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing
                clearTimeout(resizeId);

                resizeId = setTimeout(function () {
                    reBuild(true);
                }, 350);
            }
        }

        /**
        * Checks if the site needs to get responsive and disables autoScrolling if so.
        * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
        */
        function responsive() {
            var widthLimit = options.responsive || options.responsiveWidth; //backwards compatiblity
            var heightLimit = options.responsiveHeight;

            //only calculating what we need. Remember its called on the resize event.
            var isBreakingPointWidth = widthLimit && $window.outerWidth() < widthLimit;
            var isBreakingPointHeight = heightLimit && $window.height() < heightLimit;

            if (widthLimit && heightLimit) {
                setResponsive(isBreakingPointWidth || isBreakingPointHeight);
            } else if (widthLimit) {
                setResponsive(isBreakingPointWidth);
            } else if (heightLimit) {
                setResponsive(isBreakingPointHeight);
            }
        }

        /**
        * Adds transition animations for the given element
        */
        function addAnimation(element) {
            var transition = 'all ' + options.scrollingSpeed + 'ms ' + options.easingcss3;

            element.removeClass(NO_TRANSITION);
            return element.css({
                '-webkit-transition': transition,
                'transition': transition
            });
        }

        /**
        * Remove transition animations for the given element
        */
        function removeAnimation(element) {
            return element.addClass(NO_TRANSITION);
        }

        /**
        * Activating the vertical navigation bullets according to the given slide name.
        */
        function activateNavDots(name, sectionIndex) {
            if (options.navigation) {
                $(SECTION_NAV_SEL).find(ACTIVE_SEL).removeClass(ACTIVE);
                if (name) {
                    $(SECTION_NAV_SEL).find('a[href="#' + name + '"]').addClass(ACTIVE);
                } else {
                    $(SECTION_NAV_SEL).find('li').eq(sectionIndex).find('a').addClass(ACTIVE);
                }
            }
        }

        /**
        * Activating the website main menu elements according to the given slide name.
        */
        function activateMenuElement(name) {
            if (options.menu) {
                $(options.menu).find(ACTIVE_SEL).removeClass(ACTIVE);
                $(options.menu).find('[data-menuanchor="' + name + '"]').addClass(ACTIVE);
            }
        }

        /**
        * Sets to active the current menu and vertical nav items.
        */
        function activateMenuAndNav(anchor, index) {
            activateMenuElement(anchor);
            activateNavDots(anchor, index);
        }

        /**
        * Retuns `up` or `down` depending on the scrolling movement to reach its destination
        * from the current section.
        */
        function getYmovement(destiny) {
            var fromIndex = $(SECTION_ACTIVE_SEL).index(SECTION_SEL);
            var toIndex = destiny.index(SECTION_SEL);
            if (fromIndex == toIndex) {
                return 'none';
            }
            if (fromIndex > toIndex) {
                return 'up';
            }
            return 'down';
        }

        /**
        * Retuns `right` or `left` depending on the scrolling movement to reach its destination
        * from the current slide.
        */
        function getXmovement(fromIndex, toIndex) {
            if (fromIndex == toIndex) {
                return 'none';
            }
            if (fromIndex > toIndex) {
                return 'left';
            }
            return 'right';
        }

        /**
        * Checks if the element needs scrollbar and if the user wants to apply it.
        * If so it creates it.
        *
        * @param {Object} element   jQuery object of the section or slide
        */
        function createScrollBar(element) {
            //User doesn't want scrollbar here? Sayonara baby!
            if (element.hasClass('fp-noscroll')) return;

            //needed to make `scrollHeight` work under Opera 12
            element.css('overflow', 'hidden');

            var scrollOverflowHandler = options.scrollOverflowHandler;
            var wrap = scrollOverflowHandler.wrapContent();
            //in case element is a slide
            var section = element.closest(SECTION_SEL);
            var scrollable = scrollOverflowHandler.scrollable(element);
            var contentHeight;

            //if there was scroll, the contentHeight will be the one in the scrollable section
            if (scrollable.length) {
                contentHeight = scrollOverflowHandler.scrollHeight(element);
            } else {
                contentHeight = element.get(0).scrollHeight;
                if (options.verticalCentered) {
                    contentHeight = element.find(TABLE_CELL_SEL).get(0).scrollHeight;
                }
            }

            var scrollHeight = windowsHeight - parseInt(section.css('padding-bottom')) - parseInt(section.css('padding-top'));

            //needs scroll?
            if (contentHeight > scrollHeight) {
                //did we already have an scrollbar ? Updating it
                if (scrollable.length) {
                    scrollOverflowHandler.update(element, scrollHeight);
                }
                //creating the scrolling
                else {
                        if (options.verticalCentered) {
                            element.find(TABLE_CELL_SEL).wrapInner(wrap);
                        } else {
                            element.wrapInner(wrap);
                        }
                        scrollOverflowHandler.create(element, scrollHeight);
                    }
            }
            //removing the scrolling when it is not necessary anymore
            else {
                    scrollOverflowHandler.remove(element);
                }

            //undo
            element.css('overflow', '');
        }

        function addTableClass(element) {
            //In case we are styling for the 2nd time as in with reponsiveSlides
            if (!element.hasClass(TABLE)) {
                element.addClass(TABLE).wrapInner('<div class="' + TABLE_CELL + '" style="height:' + getTableHeight(element) + 'px;" />');
            }
        }

        function getTableHeight(element) {
            var sectionHeight = windowsHeight;

            if (options.paddingTop || options.paddingBottom) {
                var section = element;
                if (!section.hasClass(SECTION)) {
                    section = element.closest(SECTION_SEL);
                }

                var paddings = parseInt(section.css('padding-top')) + parseInt(section.css('padding-bottom'));
                sectionHeight = windowsHeight - paddings;
            }

            return sectionHeight;
        }

        /**
        * Adds a css3 transform property to the container class with or without animation depending on the animated param.
        */
        function transformContainer(translate3d, animated) {
            if (animated) {
                addAnimation(container);
            } else {
                removeAnimation(container);
            }

            container.css(getTransforms(translate3d));

            //syncronously removing the class after the animation has been applied.
            setTimeout(function () {
                container.removeClass(NO_TRANSITION);
            }, 10);
        }

        /**
        * Gets a section by its anchor / index
        */
        function getSectionByAnchor(sectionAnchor) {
            //section
            var section = container.find(SECTION_SEL + '[data-anchor="' + sectionAnchor + '"]');
            if (!section.length) {
                section = $(SECTION_SEL).eq(sectionAnchor - 1);
            }

            return section;
        }

        /**
        * Gets a slide inside a given section by its anchor / index
        */
        function getSlideByAnchor(slideAnchor, section) {
            var slides = section.find(SLIDES_WRAPPER_SEL);
            var slide = slides.find(SLIDE_SEL + '[data-anchor="' + slideAnchor + '"]');

            if (!slide.length) {
                slide = slides.find(SLIDE_SEL).eq(slideAnchor);
            }

            return slide;
        }

        /**
        * Scrolls to the given section and slide anchors
        */
        function scrollPageAndSlide(destiny, slide) {
            var section = getSectionByAnchor(destiny);

            //do nothing if there's no section with the given anchor name
            if (!section.length) return;

            //default slide
            if (typeof slide === 'undefined') {
                slide = 0;
            }

            //we need to scroll to the section and then to the slide
            if (destiny !== lastScrolledDestiny && !section.hasClass(ACTIVE)) {
                scrollPage(section, function () {
                    scrollSlider(section, slide);
                });
            }
            //if we were already in the section
            else {
                    scrollSlider(section, slide);
                }
        }

        /**
        * Scrolls the slider to the given slide destination for the given section
        */
        function scrollSlider(section, slideAnchor) {
            if (typeof slideAnchor !== 'undefined') {
                var slides = section.find(SLIDES_WRAPPER_SEL);
                var destiny = getSlideByAnchor(slideAnchor, section);

                if (destiny.length) {
                    landscapeScroll(slides, destiny);
                }
            }
        }

        /**
        * Creates a landscape navigation bar with dots for horizontal sliders.
        */
        function addSlidesNavigation(section, numSlides) {
            section.append('<div class="' + SLIDES_NAV + '"><ul></ul></div>');
            var nav = section.find(SLIDES_NAV_SEL);

            //top or bottom
            nav.addClass(options.slidesNavPosition);

            for (var i = 0; i < numSlides; i++) {
                nav.find('ul').append('<li><a href="#"><span></span></a></li>');
            }

            //centering it
            nav.css('margin-left', '-' + nav.width() / 2 + 'px');

            nav.find('li').first().find('a').addClass(ACTIVE);
        }

        /**
        * Sets the state of the website depending on the active section/slide.
        * It changes the URL hash when needed and updates the body class.
        */
        function setState(slideIndex, slideAnchor, anchorLink, sectionIndex) {
            var sectionHash = '';

            if (options.anchors.length && !options.lockAnchors) {

                //isn't it the first slide?
                if (slideIndex) {
                    if (typeof anchorLink !== 'undefined') {
                        sectionHash = anchorLink;
                    }

                    //slide without anchor link? We take the index instead.
                    if (typeof slideAnchor === 'undefined') {
                        slideAnchor = slideIndex;
                    }

                    lastScrolledSlide = slideAnchor;
                    setUrlHash(sectionHash + '/' + slideAnchor);

                    //first slide won't have slide anchor, just the section one
                } else if (typeof slideIndex !== 'undefined') {
                    lastScrolledSlide = slideAnchor;
                    setUrlHash(anchorLink);
                }

                //section without slides
                else {
                        setUrlHash(anchorLink);
                    }
            }

            setBodyClass();
        }

        /**
        * Sets the URL hash.
        */
        function setUrlHash(url) {
            if (options.recordHistory) {
                location.hash = url;
            } else {
                //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
                if (isTouchDevice || isTouch) {
                    window.history.replaceState(undefined, undefined, '#' + url);
                } else {
                    var baseUrl = window.location.href.split('#')[0];
                    window.location.replace(baseUrl + '#' + url);
                }
            }
        }

        /**
        * Gets the anchor for the given slide / section. Its index will be used if there's none.
        */
        function getAnchor(element) {
            var anchor = element.data('anchor');
            var index = element.index();

            //Slide without anchor link? We take the index instead.
            if (typeof anchor === 'undefined') {
                anchor = index;
            }

            return anchor;
        }

        /**
        * Sets a class for the body of the page depending on the active section / slide
        */
        function setBodyClass() {
            var section = $(SECTION_ACTIVE_SEL);
            var slide = section.find(SLIDE_ACTIVE_SEL);

            var sectionAnchor = getAnchor(section);
            var slideAnchor = getAnchor(slide);

            var text = String(sectionAnchor);

            if (slide.length) {
                text = text + '-' + slideAnchor;
            }

            //changing slash for dash to make it a valid CSS style
            text = text.replace('/', '-').replace('#', '');

            //removing previous anchor classes
            var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
            $body[0].className = $body[0].className.replace(classRe, '');

            //adding the current anchor
            $body.addClass(VIEWING_PREFIX + '-' + text);
        }

        /**
        * Checks for translate3d support
        * @return boolean
        * http://stackoverflow.com/questions/5661671/detecting-transform-translate3d-support
        */
        function support3d() {
            var el = document.createElement('p'),
                has3d,
                transforms = {
                'webkitTransform': '-webkit-transform',
                'OTransform': '-o-transform',
                'msTransform': '-ms-transform',
                'MozTransform': '-moz-transform',
                'transform': 'transform'
            };

            // Add it to the body to get the computed style.
            document.body.insertBefore(el, null);

            for (var t in transforms) {
                if (el.style[t] !== undefined) {
                    el.style[t] = 'translate3d(1px,1px,1px)';
                    has3d = window.getComputedStyle(el).getPropertyValue(transforms[t]);
                }
            }

            document.body.removeChild(el);

            return has3d !== undefined && has3d.length > 0 && has3d !== 'none';
        }

        /**
        * Removes the auto scrolling action fired by the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
        */
        function removeMouseWheelHandler() {
            if (document.addEventListener) {
                document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
                document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
                document.removeEventListener('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
            } else {
                document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
            }
        }

        /**
        * Adds the auto scrolling action for the mouse wheel and trackpad.
        * After this function is called, the mousewheel and trackpad movements will scroll through sections
        * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
        */
        function addMouseWheelHandler() {
            var prefix = '';
            var _addEventListener;

            if (window.addEventListener) {
                _addEventListener = "addEventListener";
            } else {
                _addEventListener = "attachEvent";
                prefix = 'on';
            }

            // detect available wheel event
            var support = 'onwheel' in document.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
            document.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
            'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox


            if (support == 'DOMMouseScroll') {
                document[_addEventListener](prefix + 'MozMousePixelScroll', MouseWheelHandler, false);
            }

            //handle MozMousePixelScroll in older Firefox
            else {
                    document[_addEventListener](prefix + support, MouseWheelHandler, false);
                }
        }

        /**
        * Binding the mousemove when the mouse's middle button is pressed
        */
        function addMiddleWheelHandler() {
            container.on('mousedown', mouseDownHandler).on('mouseup', mouseUpHandler);
        }

        /**
        * Unbinding the mousemove when the mouse's middle button is released
        */
        function removeMiddleWheelHandler() {
            container.off('mousedown', mouseDownHandler).off('mouseup', mouseUpHandler);
        }

        /**
        * Adds the possibility to auto scroll through sections on touch devices.
        */
        function addTouchHandler() {
            if (isTouchDevice || isTouch) {
                //Microsoft pointers
                var MSPointer = getMSPointer();

                if (options.autoScrolling) {
                    $body.off('touchmove ' + MSPointer.move).on('touchmove ' + MSPointer.move, preventBouncing);
                }

                $(WRAPPER_SEL).off('touchstart ' + MSPointer.down).on('touchstart ' + MSPointer.down, touchStartHandler).off('touchmove ' + MSPointer.move).on('touchmove ' + MSPointer.move, touchMoveHandler);
            }
        }

        /**
        * Removes the auto scrolling for touch devices.
        */
        function removeTouchHandler() {
            if (isTouchDevice || isTouch) {
                //Microsoft pointers
                var MSPointer = getMSPointer();

                $(WRAPPER_SEL).off('touchstart ' + MSPointer.down).off('touchmove ' + MSPointer.move);
            }
        }

        /*
        * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
        * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
        */
        function getMSPointer() {
            var pointer;

            //IE >= 11 & rest of browsers
            if (window.PointerEvent) {
                pointer = { down: 'pointerdown', move: 'pointermove' };
            }

            //IE < 11
            else {
                    pointer = { down: 'MSPointerDown', move: 'MSPointerMove' };
                }

            return pointer;
        }

        /**
        * Gets the pageX and pageY properties depending on the browser.
        * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
        */
        function getEventsPage(e) {
            var events = [];

            events.y = typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
            events.x = typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX;

            //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008
            if (isTouch && isReallyTouch(e) && options.scrollBar) {
                events.y = e.touches[0].pageY;
                events.x = e.touches[0].pageX;
            }

            return events;
        }

        /**
        * Slides silently (with no animation) the active slider to the given slide.
        * @param noCallback {bool} true or defined -> no callbacks
        */
        function silentLandscapeScroll(activeSlide, noCallbacks) {
            setScrollingSpeed(0, 'internal');

            if (typeof noCallbacks !== 'undefined') {
                //preventing firing callbacks afterSlideLoad etc.
                isResizing = true;
            }

            landscapeScroll(activeSlide.closest(SLIDES_WRAPPER_SEL), activeSlide);

            if (typeof noCallbacks !== 'undefined') {
                isResizing = false;
            }

            setScrollingSpeed(originals.scrollingSpeed, 'internal');
        }

        /**
        * Scrolls silently (with no animation) the page to the given Y position.
        */
        function silentScroll(top) {
            // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
            // that's why we round it to 0.
            var roundedTop = Math.round(top);

            if (options.css3 && options.autoScrolling && !options.scrollBar) {
                var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
                transformContainer(translate3d, false);
            } else if (options.autoScrolling && !options.scrollBar) {
                container.css('top', -roundedTop);
            } else {
                $htmlBody.scrollTop(roundedTop);
            }
        }

        /**
        * Returns the cross-browser transform string.
        */
        function getTransforms(translate3d) {
            return {
                '-webkit-transform': translate3d,
                '-moz-transform': translate3d,
                '-ms-transform': translate3d,
                'transform': translate3d
            };
        }

        /**
        * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
        * @type  m (mouse) or k (keyboard)
        */
        function setIsScrollAllowed(value, direction, type) {
            switch (direction) {
                case 'up':
                    isScrollAllowed[type].up = value;break;
                case 'down':
                    isScrollAllowed[type].down = value;break;
                case 'left':
                    isScrollAllowed[type].left = value;break;
                case 'right':
                    isScrollAllowed[type].right = value;break;
                case 'all':
                    if (type == 'm') {
                        setAllowScrolling(value);
                    } else {
                        setKeyboardScrolling(value);
                    }
            }
        }

        /*
        * Destroys fullpage.js plugin events and optinally its html markup and styles
        */
        function destroy(all) {
            setAutoScrolling(false, 'internal');
            setAllowScrolling(false);
            setKeyboardScrolling(false);
            container.addClass(DESTROYED);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);
            clearTimeout(resizeId);
            clearTimeout(scrollId);
            clearTimeout(scrollId2);

            $window.off('scroll', scrollHandler).off('hashchange', hashChangeHandler).off('resize', resizeHandler);

            $document.off('click touchstart', SECTION_NAV_SEL + ' a').off('mouseenter', SECTION_NAV_SEL + ' li').off('mouseleave', SECTION_NAV_SEL + ' li').off('click touchstart', SLIDES_NAV_LINK_SEL).off('mouseover', options.normalScrollElements).off('mouseout', options.normalScrollElements);

            $(SECTION_SEL).off('click touchstart', SLIDES_ARROW_SEL);

            clearTimeout(afterSlideLoadsId);
            clearTimeout(afterSectionLoadsId);

            //lets make a mess!
            if (all) {
                destroyStructure();
            }
        }

        /*
        * Removes inline styles added by fullpage.js
        */
        function destroyStructure() {
            //reseting the `top` or `translate` properties to 0
            silentScroll(0);

            //loading all the lazy load content
            container.find('img[data-src], source[data-src], audio[data-src], iframe[data-src]').each(function () {
                $(this).attr('src', $(this).data('src'));
                $(this).removeAttr('data-src');
            });

            $(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL + ', ' + SLIDES_ARROW_SEL).remove();

            //removing inline styles
            $(SECTION_SEL).css({
                'height': '',
                'background-color': '',
                'padding': ''
            });

            $(SLIDE_SEL).css({
                'width': ''
            });

            container.css({
                'height': '',
                'position': '',
                '-ms-touch-action': '',
                'touch-action': ''
            });

            $htmlBody.css({
                'overflow': '',
                'height': ''
            });

            // remove .fp-enabled class
            $('html').removeClass(ENABLED);

            // remove .fp-responsive class
            $body.removeClass(RESPONSIVE);

            // remove all of the .fp-viewing- classes
            $.each($body.get(0).className.split(/\s+/), function (index, className) {
                if (className.indexOf(VIEWING_PREFIX) === 0) {
                    $body.removeClass(className);
                }
            });

            //removing added classes
            $(SECTION_SEL + ', ' + SLIDE_SEL).each(function () {
                options.scrollOverflowHandler.remove($(this));
                $(this).removeClass(TABLE + ' ' + ACTIVE);
            });

            removeAnimation(container);

            //Unwrapping content
            container.find(TABLE_CELL_SEL + ', ' + SLIDES_CONTAINER_SEL + ', ' + SLIDES_WRAPPER_SEL).each(function () {
                //unwrap not being use in case there's no child element inside and its just text
                $(this).replaceWith(this.childNodes);
            });

            //scrolling the page to the top with no animation
            $htmlBody.scrollTop(0);

            //removing selectors
            var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
            $.each(usedSelectors, function (index, value) {
                $('.' + value).removeClass(value);
            });
        }

        /*
        * Sets the state for a variable with multiple states (original, and temporal)
        * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
        * This function is used to keep track of both states, the original and the temporal one.
        * If type is not 'internal', then we assume the user is globally changing the variable.
        */
        function setVariableState(variable, value, type) {
            options[variable] = value;
            if (type !== 'internal') {
                originals[variable] = value;
            }
        }

        /**
        * Displays warnings
        */
        function displayWarnings() {
            var extensions = ['fadingEffect', 'continuousHorizontal', 'scrollHorizontally', 'interlockedSlides', 'resetSliders', 'responsiveSlides', 'offsetSections', 'dragAndMove', 'scrollOverflowReset'];
            if ($('html').hasClass(ENABLED)) {
                showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
                return;
            }

            // Disable mutually exclusive settings
            if (options.continuousVertical && (options.loopTop || options.loopBottom)) {
                options.continuousVertical = false;
                showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            if (options.scrollBar && options.scrollOverflow) {
                showError('warn', 'Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox');
            }

            if (options.continuousVertical && (options.scrollBar || !options.autoScrolling)) {
                options.continuousVertical = false;
                showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
            }

            //using extensions? Wrong file!
            $.each(extensions, function (index, extension) {
                //is the option set to true?
                if (options[extension]) {
                    showError('warn', 'fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: ' + extension);
                }
            });

            //anchors can not have the same value as any element ID or NAME
            $.each(options.anchors, function (index, name) {

                //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
                var nameAttr = $document.find('[name]').filter(function () {
                    return $(this).attr('name') && $(this).attr('name').toLowerCase() == name.toLowerCase();
                });

                var idAttr = $document.find('[id]').filter(function () {
                    return $(this).attr('id') && $(this).attr('id').toLowerCase() == name.toLowerCase();
                });

                if (idAttr.length || nameAttr.length) {
                    showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
                    idAttr.length && showError('error', '"' + name + '" is is being used by another element `id` property');
                    nameAttr.length && showError('error', '"' + name + '" is is being used by another element `name` property');
                }
            });
        }

        /**
        * Shows a message in the console of the given type.
        */
        function showError(type, text) {
            console && console[type] && console[type]('fullPage: ' + text);
        }
    }; //end of $.fn.fullpage

    if (typeof IScroll !== 'undefined') {
        /*
        * Turns iScroll `mousewheel` option off dynamically
        * https://github.com/cubiq/iscroll/issues/1036
        */
        IScroll.prototype.wheelOn = function () {
            this.wrapper.addEventListener('wheel', this);
            this.wrapper.addEventListener('mousewheel', this);
            this.wrapper.addEventListener('DOMMouseScroll', this);
        };

        /*
        * Turns iScroll `mousewheel` option on dynamically
        * https://github.com/cubiq/iscroll/issues/1036
        */
        IScroll.prototype.wheelOff = function () {
            this.wrapper.removeEventListener('wheel', this);
            this.wrapper.removeEventListener('mousewheel', this);
            this.wrapper.removeEventListener('DOMMouseScroll', this);
        };
    }

    /**
     * An object to handle overflow scrolling.
     * This uses jquery.slimScroll to accomplish overflow scrolling.
     * It is possible to pass in an alternate scrollOverflowHandler
     * to the fullpage.js option that implements the same functions
     * as this handler.
     *
     * @type {Object}
     */
    var iscrollHandler = {
        refreshId: null,
        iScrollInstances: [],

        // Enables or disables the mouse wheel for the active section or all slides in it
        toggleWheel: function toggleWheel(value) {
            var scrollable = $(SECTION_ACTIVE_SEL).find(SCROLLABLE_SEL);
            scrollable.each(function () {
                var iScrollInstance = $(this).data('iscrollInstance');
                if (typeof iScrollInstance !== 'undefined' && iScrollInstance) {
                    if (value) {
                        iScrollInstance.wheelOn();
                    } else {
                        iScrollInstance.wheelOff();
                    }
                }
            });
        },

        /**
        * Turns off iScroll for the destination section.
        * When scrolling very fast on some trackpads (and Apple laptops) the inertial scrolling would
        * scroll the destination section/slide before the sections animations ends.
        */
        onLeave: function onLeave() {
            iscrollHandler.toggleWheel(false);
        },

        // Turns off iScroll for the leaving section
        beforeLeave: function beforeLeave() {
            iscrollHandler.onLeave();
        },

        // Turns on iScroll on section load
        afterLoad: function afterLoad() {
            iscrollHandler.toggleWheel(true);
        },

        /**
         * Called when overflow scrolling is needed for a section.
         *
         * @param  {Object} element      jQuery object containing current section
         * @param  {Number} scrollHeight Current window height in pixels
         */
        create: function create(element, scrollHeight) {
            var scrollable = element.find(SCROLLABLE_SEL);

            scrollable.height(scrollHeight);
            scrollable.each(function () {
                var $this = $(this);
                var iScrollInstance = $this.data('iscrollInstance');
                if (iScrollInstance) {
                    $.each(iscrollHandler.iScrollInstances, function () {
                        $(this).destroy();
                    });
                }

                iScrollInstance = new IScroll($this.get(0), iscrollOptions);
                iscrollHandler.iScrollInstances.push(iScrollInstance);

                //off by default until the section gets active
                iScrollInstance.wheelOff();

                $this.data('iscrollInstance', iScrollInstance);
            });
        },

        /**
         * Return a boolean depending on whether the scrollable element is a
         * the end or at the start of the scrolling depending on the given type.
         *
         * @param  {String}  type       Either 'top' or 'bottom'
         * @param  {Object}  scrollable jQuery object for the scrollable element
         * @return {Boolean}
         */
        isScrolled: function isScrolled(type, scrollable) {
            var scroller = scrollable.data('iscrollInstance');

            //no scroller?
            if (!scroller) {
                return true;
            }

            if (type === 'top') {
                return scroller.y >= 0 && !scrollable.scrollTop();
            } else if (type === 'bottom') {
                return 0 - scroller.y + scrollable.scrollTop() + 1 + scrollable.innerHeight() >= scrollable[0].scrollHeight;
            }
        },

        /**
         * Returns the scrollable element for the given section.
         * If there are landscape slides, will only return a scrollable element
         * if it is in the active slide.
         *
         * @param  {Object}  activeSection jQuery object containing current section
         * @return {Boolean}
         */
        scrollable: function scrollable(activeSection) {
            // if there are landscape slides, we check if the scrolling bar is in the current one or not
            if (activeSection.find(SLIDES_WRAPPER_SEL).length) {
                return activeSection.find(SLIDE_ACTIVE_SEL).find(SCROLLABLE_SEL);
            }
            return activeSection.find(SCROLLABLE_SEL);
        },

        /**
         * Returns the scroll height of the wrapped content.
         * If this is larger than the window height minus section padding,
         * overflow scrolling is needed.
         *
         * @param  {Object} element jQuery object containing current section
         * @return {Number}
         */
        scrollHeight: function scrollHeight(element) {
            return element.find(SCROLLABLE_SEL).children().first().get(0).scrollHeight;
        },

        /**
         * Called when overflow scrolling is no longer needed for a section.
         *
         * @param  {Object} element      jQuery object containing current section
         */
        remove: function remove(element) {
            var scrollable = element.find(SCROLLABLE_SEL);
            if (scrollable.length) {
                var iScrollInstance = scrollable.data('iscrollInstance');
                iScrollInstance.destroy();

                scrollable.data('iscrollInstance', null);
            }
            element.find(SCROLLABLE_SEL).children().first().children().first().unwrap().unwrap();
        },

        /**
         * Called when overflow scrolling has already been setup but the
         * window height has potentially changed.
         *
         * @param  {Object} element      jQuery object containing current section
         * @param  {Number} scrollHeight Current window height in pixels
         */
        update: function update(element, scrollHeight) {
            //using a timeout in order to execute the refresh function only once when `update` is called multiple times in a
            //short period of time.
            //it also comes on handy because iScroll requires the use of timeout when using `refresh`.
            clearTimeout(iscrollHandler.refreshId);
            iscrollHandler.refreshId = setTimeout(function () {
                $.each(iscrollHandler.iScrollInstances, function () {
                    $(this).get(0).refresh();
                });
            }, 150);

            //updating the wrappers height
            element.find(SCROLLABLE_SEL).css('height', scrollHeight + 'px').parent().css('height', scrollHeight + 'px');
        },

        /**
         * Called to get any additional elements needed to wrap the section
         * content in order to facilitate overflow scrolling.
         *
         * @return {String|Object} Can be a string containing HTML,
         *                         a DOM element, or jQuery object.
         */
        wrapContent: function wrapContent() {
            return '<div class="' + SCROLLABLE + '"><div class="fp-scroller"></div></div>';
        }
    };
});

(function (a) {
    "use strict";

    var b, c, d;
    a.extend({
        roundaboutShapes: {
            def: "lazySusan",
            lazySusan: function lazySusan(a, b, c) {
                return {
                    x: Math.sin(a + b),
                    y: Math.sin(a + 3 * Math.PI / 2 + b) / 8 * c,
                    z: (Math.cos(a + b) + 1) / 2,
                    scale: Math.sin(a + Math.PI / 2 + b) / 2 + .5
                };
            }
        }
    });
    b = {
        bearing: 0,
        tilt: 0,
        minZ: 100,
        maxZ: 280,
        minOpacity: .4,
        maxOpacity: 1,
        minScale: .1,
        maxScale: 1,
        duration: 600,
        btnNext: null,
        btnNextCallback: function btnNextCallback() {},
        btnPrev: null,
        btnPrevCallback: function btnPrevCallback() {},
        btnToggleAutoplay: null,
        btnStartAutoplay: null,
        btnStopAutoplay: null,
        easing: "swing",
        clickToFocus: true,
        clickToFocusCallback: function clickToFocusCallback() {},
        focusBearing: 0,
        shape: "lazySusan",
        debug: false,
        childSelector: "li",
        startingChild: null,
        reflect: false,
        floatComparisonThreshold: .001,
        autoplay: false,
        autoplayDuration: 1e3,
        autoplayPauseOnHover: false,
        autoplayCallback: function autoplayCallback() {},
        autoplayInitialDelay: 0,
        enableDrag: false,
        dropDuration: 600,
        dropEasing: "swing",
        dropAnimateTo: "nearest",
        dropCallback: function dropCallback() {},
        dragAxis: "x",
        dragFactor: 4,
        triggerFocusEvents: true,
        triggerBlurEvents: true,
        responsive: false
    };
    c = {
        autoplayInterval: null,
        autoplayIsRunning: false,
        autoplayStartTimeout: null,
        animating: false,
        childInFocus: -1,
        touchMoveStartPosition: null,
        stopAnimation: false,
        lastAnimationStep: false
    };
    d = {
        init: function init(e, f, g) {
            var h,
                i = new Date().getTime();
            e = (typeof e === 'undefined' ? 'undefined' : _typeof(e)) === "object" ? e : {};
            f = a.isFunction(f) ? f : function () {};
            f = a.isFunction(e) ? e : f;
            h = a.extend({}, b, e, c);
            return this.each(function () {
                var b = a(this),
                    c = b.children(h.childSelector).length,
                    e = 360 / c,
                    i = h.startingChild && h.startingChild > c - 1 ? c - 1 : h.startingChild,
                    j = h.startingChild === null ? h.bearing : 360 - i * e,
                    k = b.css("position") !== "static" ? b.css("position") : "relative";
                b.css({
                    padding: 0,
                    position: k
                }).addClass("roundabout-holder").data("roundabout", a.extend({}, h, {
                    startingChild: i,
                    bearing: j,
                    oppositeOfFocusBearing: d.normalize.apply(null, [h.focusBearing - 180]),
                    dragBearing: j,
                    period: e
                }));
                if (g) {
                    b.unbind(".roundabout").children(h.childSelector).unbind(".roundabout");
                } else {
                    if (h.responsive) {
                        a(window).bind("resize", function () {
                            d.stopAutoplay.apply(b);
                            d.relayoutChildren.apply(b);
                        });
                    }
                }
                if (h.clickToFocus) {
                    b.children(h.childSelector).each(function (c) {
                        a(this).bind("click.roundabout", function () {
                            var e = d.getPlacement.apply(b, [c]);
                            if (!d.isInFocus.apply(b, [e])) {
                                d.stopAnimation.apply(a(this));
                                if (!b.data("roundabout").animating) {
                                    d.animateBearingToFocus.apply(b, [e, b.data("roundabout").clickToFocusCallback]);
                                }
                                return false;
                            }
                        });
                    });
                }
                if (h.btnNext) {
                    a(h.btnNext).bind("click.roundabout", function () {
                        if (!b.data("roundabout").animating) {
                            d.animateToNextChild.apply(b, [b.data("roundabout").btnNextCallback]);
                        }
                        return false;
                    });
                }
                if (h.btnPrev) {
                    a(h.btnPrev).bind("click.roundabout", function () {
                        d.animateToPreviousChild.apply(b, [b.data("roundabout").btnPrevCallback]);
                        return false;
                    });
                }
                if (h.btnToggleAutoplay) {
                    a(h.btnToggleAutoplay).bind("click.roundabout", function () {
                        d.toggleAutoplay.apply(b);
                        return false;
                    });
                }
                if (h.btnStartAutoplay) {
                    a(h.btnStartAutoplay).bind("click.roundabout", function () {
                        d.startAutoplay.apply(b);
                        return false;
                    });
                }
                if (h.btnStopAutoplay) {
                    a(h.btnStopAutoplay).bind("click.roundabout", function () {
                        d.stopAutoplay.apply(b);
                        return false;
                    });
                }
                if (h.autoplayPauseOnHover) {
                    b.bind("mouseenter.roundabout.autoplay", function () {
                        d.stopAutoplay.apply(b, [true]);
                    }).bind("mouseleave.roundabout.autoplay", function () {
                        d.startAutoplay.apply(b);
                    });
                }
                if (h.enableDrag) {
                    if (!a.isFunction(b.drag)) {
                        if (h.debug) {
                            alert("You do not have the drag plugin loaded.");
                        }
                    } else if (!a.isFunction(b.drop)) {
                        if (h.debug) {
                            alert("You do not have the drop plugin loaded.");
                        }
                    } else {
                        b.drag(function (a, c) {
                            var e = b.data("roundabout"),
                                f = e.dragAxis.toLowerCase() === "x" ? "deltaX" : "deltaY";
                            d.stopAnimation.apply(b);
                            d.setBearing.apply(b, [e.dragBearing + c[f] / e.dragFactor]);
                        }).drop(function (a) {
                            var c = b.data("roundabout"),
                                e = d.getAnimateToMethod(c.dropAnimateTo);
                            d.allowAnimation.apply(b);
                            d[e].apply(b, [c.dropDuration, c.dropEasing, c.dropCallback]);
                            c.dragBearing = c.period * d.getNearestChild.apply(b);
                        });
                    }
                    b.each(function () {
                        var b = a(this).get(0),
                            c = a(this).data("roundabout"),
                            e = c.dragAxis.toLowerCase() === "x" ? "pageX" : "pageY",
                            f = d.getAnimateToMethod(c.dropAnimateTo);
                        if (b.addEventListener) {
                            b.addEventListener("touchstart", function (a) {
                                c.touchMoveStartPosition = a.touches[0][e];
                            }, false);
                            b.addEventListener("touchmove", function (b) {
                                var f = (b.touches[0][e] - c.touchMoveStartPosition) / c.dragFactor;
                                b.preventDefault();
                                d.stopAnimation.apply(a(this));
                                d.setBearing.apply(a(this), [c.dragBearing + f]);
                            }, false);
                            b.addEventListener("touchend", function (b) {
                                b.preventDefault();
                                d.allowAnimation.apply(a(this));
                                f = d.getAnimateToMethod(c.dropAnimateTo);
                                d[f].apply(a(this), [c.dropDuration, c.dropEasing, c.dropCallback]);
                                c.dragBearing = c.period * d.getNearestChild.apply(a(this));
                            }, false);
                        }
                    });
                }
                d.initChildren.apply(b, [f, g]);
            });
        },
        initChildren: function initChildren(b, c) {
            var e = a(this),
                f = e.data("roundabout");
            b = b || function () {};
            e.children(f.childSelector).each(function (b) {
                var f,
                    g,
                    h,
                    i = d.getPlacement.apply(e, [b]);
                if (c && a(this).data("roundabout")) {
                    f = a(this).data("roundabout").startWidth;
                    g = a(this).data("roundabout").startHeight;
                    h = a(this).data("roundabout").startFontSize;
                }
                a(this).addClass("roundabout-moveable-item").css("position", "absolute");
                a(this).data("roundabout", {
                    startWidth: f || a(this).width(),
                    startHeight: g || a(this).height(),
                    startFontSize: h || parseInt(a(this).css("font-size"), 10),
                    degrees: i,
                    backDegrees: d.normalize.apply(null, [i - 180]),
                    childNumber: b,
                    currentScale: 1,
                    parent: e
                });
            });
            d.updateChildren.apply(e);
            if (f.autoplay) {
                f.autoplayStartTimeout = setTimeout(function () {
                    d.startAutoplay.apply(e);
                }, f.autoplayInitialDelay);
            }
            e.trigger("ready");
            b.apply(e);
            return e;
        },
        updateChildren: function updateChildren() {
            return this.each(function () {
                var b = a(this),
                    c = b.data("roundabout"),
                    e = -1,
                    f = {
                    bearing: c.bearing,
                    tilt: c.tilt,
                    stage: {
                        width: Math.floor(a(this).width() * .9),
                        height: Math.floor(a(this).height() * .9)
                    },
                    animating: c.animating,
                    inFocus: c.childInFocus,
                    focusBearingRadian: d.degToRad.apply(null, [c.focusBearing]),
                    shape: a.roundaboutShapes[c.shape] || a.roundaboutShapes[a.roundaboutShapes.def]
                };
                f.midStage = {
                    width: f.stage.width / 2,
                    height: f.stage.height / 2
                };
                f.nudge = {
                    width: f.midStage.width + f.stage.width * .05,
                    height: f.midStage.height + f.stage.height * .05
                };
                f.zValues = {
                    min: c.minZ,
                    max: c.maxZ,
                    diff: c.maxZ - c.minZ
                };
                f.opacity = {
                    min: c.minOpacity,
                    max: c.maxOpacity,
                    diff: c.maxOpacity - c.minOpacity
                };
                f.scale = {
                    min: c.minScale,
                    max: c.maxScale,
                    diff: c.maxScale - c.minScale
                };
                b.children(c.childSelector).each(function (g) {
                    if (d.updateChild.apply(b, [a(this), f, g, function () {
                        a(this).trigger("ready");
                    }]) && (!f.animating || c.lastAnimationStep)) {
                        e = g;
                        a(this).addClass("roundabout-in-focus");
                    } else {
                        a(this).removeClass("roundabout-in-focus");
                    }
                });
                if (e !== f.inFocus) {
                    if (c.triggerBlurEvents) {
                        b.children(c.childSelector).eq(f.inFocus).trigger("blur");
                    }
                    c.childInFocus = e;
                    if (c.triggerFocusEvents && e !== -1) {
                        b.children(c.childSelector).eq(e).trigger("focus");
                    }
                }
                b.trigger("childrenUpdated");
            });
        },
        updateChild: function updateChild(b, c, e, f) {
            var g,
                h = this,
                i = a(b),
                j = i.data("roundabout"),
                k = [],
                l = d.degToRad.apply(null, [360 - j.degrees + c.bearing]);
            f = f || function () {};
            l = d.normalizeRad.apply(null, [l]);
            g = c.shape(l, c.focusBearingRadian, c.tilt);
            g.scale = g.scale > 1 ? 1 : g.scale;
            g.adjustedScale = (c.scale.min + c.scale.diff * g.scale).toFixed(4);
            g.width = (g.adjustedScale * j.startWidth).toFixed(4);
            g.height = (g.adjustedScale * j.startHeight).toFixed(4);
            i.css({
                left: (g.x * c.midStage.width + c.nudge.width - g.width / 2).toFixed(0) + "px",
                top: (g.y * c.midStage.height + c.nudge.height - g.height / 2).toFixed(0) + "px",
                width: g.width + "px",
                height: g.height + "px",
                opacity: (c.opacity.min + c.opacity.diff * g.scale).toFixed(2),
                zIndex: Math.round(c.zValues.min + c.zValues.diff * g.z),
                fontSize: (g.adjustedScale * j.startFontSize).toFixed(1) + "px"
            });
            j.currentScale = g.adjustedScale;
            if (h.data("roundabout").debug) {
                k.push('<div style="font-weight: normal; font-size: 10px; padding: 2px; width: ' + i.css("width") + '; background-color: #ffc;">');
                k.push('<strong style="font-size: 12px; white-space: nowrap;">Child ' + e + "</strong><br />");
                k.push("<strong>left:</strong> " + i.css("left") + "<br />");
                k.push("<strong>top:</strong> " + i.css("top") + "<br />");
                k.push("<strong>width:</strong> " + i.css("width") + "<br />");
                k.push("<strong>opacity:</strong> " + i.css("opacity") + "<br />");
                k.push("<strong>height:</strong> " + i.css("height") + "<br />");
                k.push("<strong>z-index:</strong> " + i.css("z-index") + "<br />");
                k.push("<strong>font-size:</strong> " + i.css("font-size") + "<br />");
                k.push("<strong>scale:</strong> " + i.data("roundabout").currentScale);
                k.push("</div>");
                i.html(k.join(""));
            }
            i.trigger("reposition");
            f.apply(h);
            return d.isInFocus.apply(h, [j.degrees]);
        },
        setBearing: function setBearing(b, c) {
            c = c || function () {};
            b = d.normalize.apply(null, [b]);
            this.each(function () {
                var c,
                    e,
                    f,
                    g = a(this),
                    h = g.data("roundabout"),
                    i = h.bearing;
                h.bearing = b;
                g.trigger("bearingSet");
                d.updateChildren.apply(g);
                c = Math.abs(i - b);
                if (!h.animating || c > 180) {
                    return;
                }
                c = Math.abs(i - b);
                g.children(h.childSelector).each(function (c) {
                    var e;
                    if (d.isChildBackDegreesBetween.apply(a(this), [b, i])) {
                        e = i > b ? "Clockwise" : "Counterclockwise";
                        a(this).trigger("move" + e + "ThroughBack");
                    }
                });
            });
            c.apply(this);
            return this;
        },
        adjustBearing: function adjustBearing(b, c) {
            c = c || function () {};
            if (b === 0) {
                return this;
            }
            this.each(function () {
                d.setBearing.apply(a(this), [a(this).data("roundabout").bearing + b]);
            });
            c.apply(this);
            return this;
        },
        setTilt: function setTilt(b, c) {
            c = c || function () {};
            this.each(function () {
                a(this).data("roundabout").tilt = b;
                d.updateChildren.apply(a(this));
            });
            c.apply(this);
            return this;
        },
        adjustTilt: function adjustTilt(b, c) {
            c = c || function () {};
            this.each(function () {
                d.setTilt.apply(a(this), [a(this).data("roundabout").tilt + b]);
            });
            c.apply(this);
            return this;
        },
        animateToBearing: function animateToBearing(b, c, e, f, g) {
            var h = new Date().getTime();
            g = g || function () {};
            if (a.isFunction(f)) {
                g = f;
                f = null;
            } else if (a.isFunction(e)) {
                g = e;
                e = null;
            } else if (a.isFunction(c)) {
                g = c;
                c = null;
            }
            this.each(function () {
                var i,
                    j,
                    k,
                    l = a(this),
                    m = l.data("roundabout"),
                    n = !c ? m.duration : c,
                    o = e ? e : m.easing || "swing";
                if (!f) {
                    f = {
                        timerStart: h,
                        start: m.bearing,
                        totalTime: n
                    };
                }
                i = h - f.timerStart;
                if (m.stopAnimation) {
                    d.allowAnimation.apply(l);
                    m.animating = false;
                    return;
                }
                if (i < n) {
                    if (!m.animating) {
                        l.trigger("animationStart");
                    }
                    m.animating = true;
                    if (typeof a.easing.def === "string") {
                        j = a.easing[o] || a.easing[a.easing.def];
                        k = j(null, i, f.start, b - f.start, f.totalTime);
                    } else {
                        k = a.easing[o](i / f.totalTime, i, f.start, b - f.start, f.totalTime);
                    }
                    if (d.compareVersions.apply(null, [a().jquery, "1.7.2"]) >= 0 && !a.easing["easeOutBack"]) {
                        k = f.start + (b - f.start) * k;
                    }
                    k = d.normalize.apply(null, [k]);
                    m.dragBearing = k;
                    d.setBearing.apply(l, [k, function () {
                        setTimeout(function () {
                            d.animateToBearing.apply(l, [b, n, o, f, g]);
                        }, 0);
                    }]);
                } else {
                    m.lastAnimationStep = true;
                    b = d.normalize.apply(null, [b]);
                    d.setBearing.apply(l, [b, function () {
                        l.trigger("animationEnd");
                    }]);
                    m.animating = false;
                    m.lastAnimationStep = false;
                    m.dragBearing = b;
                    g.apply(l);
                }
            });
            return this;
        },
        animateToNearbyChild: function animateToNearbyChild(b, c) {
            var e = b[0],
                f = b[1],
                g = b[2] || function () {};
            if (a.isFunction(f)) {
                g = f;
                f = null;
            } else if (a.isFunction(e)) {
                g = e;
                e = null;
            }
            return this.each(function () {
                var b,
                    h,
                    i = a(this),
                    j = i.data("roundabout"),
                    k = !j.reflect ? j.bearing % 360 : j.bearing,
                    l = i.children(j.childSelector).length;
                if (!j.animating) {
                    if (j.reflect && c === "previous" || !j.reflect && c === "next") {
                        k = Math.abs(k) < j.floatComparisonThreshold ? 360 : k;
                        for (b = 0; b < l; b += 1) {
                            h = {
                                lower: j.period * b,
                                upper: j.period * (b + 1)
                            };
                            h.upper = b === l - 1 ? 360 : h.upper;
                            if (k <= Math.ceil(h.upper) && k >= Math.floor(h.lower)) {
                                if (l === 2 && k === 360) {
                                    d.animateToDelta.apply(i, [-180, e, f, g]);
                                } else {
                                    d.animateBearingToFocus.apply(i, [h.lower, e, f, g]);
                                }
                                break;
                            }
                        }
                    } else {
                        k = Math.abs(k) < j.floatComparisonThreshold || 360 - Math.abs(k) < j.floatComparisonThreshold ? 0 : k;
                        for (b = l - 1; b >= 0; b -= 1) {
                            h = {
                                lower: j.period * b,
                                upper: j.period * (b + 1)
                            };
                            h.upper = b === l - 1 ? 360 : h.upper;
                            if (k >= Math.floor(h.lower) && k < Math.ceil(h.upper)) {
                                if (l === 2 && k === 360) {
                                    d.animateToDelta.apply(i, [180, e, f, g]);
                                } else {
                                    d.animateBearingToFocus.apply(i, [h.upper, e, f, g]);
                                }
                                break;
                            }
                        }
                    }
                }
            });
        },
        animateToNearestChild: function animateToNearestChild(b, c, e) {
            e = e || function () {};
            if (a.isFunction(c)) {
                e = c;
                c = null;
            } else if (a.isFunction(b)) {
                e = b;
                b = null;
            }
            return this.each(function () {
                var f = d.getNearestChild.apply(a(this));
                d.animateToChild.apply(a(this), [f, b, c, e]);
            });
        },
        animateToChild: function animateToChild(b, c, e, f) {
            f = f || function () {};
            if (a.isFunction(e)) {
                f = e;
                e = null;
            } else if (a.isFunction(c)) {
                f = c;
                c = null;
            }
            return this.each(function () {
                var g,
                    h = a(this),
                    i = h.data("roundabout");
                if (i.childInFocus !== b && !i.animating) {
                    g = h.children(i.childSelector).eq(b);
                    d.animateBearingToFocus.apply(h, [g.data("roundabout").degrees, c, e, f]);
                }
            });
        },
        animateToNextChild: function animateToNextChild(a, b, c) {
            return d.animateToNearbyChild.apply(this, [arguments, "next"]);
        },
        animateToPreviousChild: function animateToPreviousChild(a, b, c) {
            return d.animateToNearbyChild.apply(this, [arguments, "previous"]);
        },
        animateToDelta: function animateToDelta(b, c, e, f) {
            f = f || function () {};
            if (a.isFunction(e)) {
                f = e;
                e = null;
            } else if (a.isFunction(c)) {
                f = c;
                c = null;
            }
            return this.each(function () {
                var g = a(this).data("roundabout").bearing + b;
                d.animateToBearing.apply(a(this), [g, c, e, f]);
            });
        },
        animateBearingToFocus: function animateBearingToFocus(b, c, e, f) {
            f = f || function () {};
            if (a.isFunction(e)) {
                f = e;
                e = null;
            } else if (a.isFunction(c)) {
                f = c;
                c = null;
            }
            return this.each(function () {
                var g = a(this).data("roundabout").bearing - b;
                g = Math.abs(360 - g) < Math.abs(g) ? 360 - g : -g;
                g = g > 180 ? -(360 - g) : g;
                if (g !== 0) {
                    d.animateToDelta.apply(a(this), [g, c, e, f]);
                }
            });
        },
        stopAnimation: function stopAnimation() {
            return this.each(function () {
                a(this).data("roundabout").stopAnimation = true;
            });
        },
        allowAnimation: function allowAnimation() {
            return this.each(function () {
                a(this).data("roundabout").stopAnimation = false;
            });
        },
        startAutoplay: function startAutoplay(b) {
            return this.each(function () {
                var c = a(this),
                    e = c.data("roundabout");
                b = b || e.autoplayCallback || function () {};
                clearInterval(e.autoplayInterval);
                e.autoplayInterval = setInterval(function () {
                    d.animateToNextChild.apply(c, [b]);
                }, e.autoplayDuration);
                e.autoplayIsRunning = true;
                c.trigger("autoplayStart");
            });
        },
        stopAutoplay: function stopAutoplay(b) {
            return this.each(function () {
                clearInterval(a(this).data("roundabout").autoplayInterval);
                a(this).data("roundabout").autoplayInterval = null;
                a(this).data("roundabout").autoplayIsRunning = false;
                if (!b) {
                    a(this).unbind(".autoplay");
                }
                a(this).trigger("autoplayStop");
            });
        },
        toggleAutoplay: function toggleAutoplay(b) {
            return this.each(function () {
                var c = a(this),
                    e = c.data("roundabout");
                b = b || e.autoplayCallback || function () {};
                if (!d.isAutoplaying.apply(a(this))) {
                    d.startAutoplay.apply(a(this), [b]);
                } else {
                    d.stopAutoplay.apply(a(this), [b]);
                }
            });
        },
        isAutoplaying: function isAutoplaying() {
            return this.data("roundabout").autoplayIsRunning;
        },
        changeAutoplayDuration: function changeAutoplayDuration(b) {
            return this.each(function () {
                var c = a(this),
                    e = c.data("roundabout");
                e.autoplayDuration = b;
                if (d.isAutoplaying.apply(c)) {
                    d.stopAutoplay.apply(c);
                    setTimeout(function () {
                        d.startAutoplay.apply(c);
                    }, 10);
                }
            });
        },
        normalize: function normalize(a) {
            var b = a % 360;
            return b < 0 ? 360 + b : b;
        },
        normalizeRad: function normalizeRad(a) {
            while (a < 0) {
                a += Math.PI * 2;
            }
            while (a > Math.PI * 2) {
                a -= Math.PI * 2;
            }
            return a;
        },
        isChildBackDegreesBetween: function isChildBackDegreesBetween(b, c) {
            var d = a(this).data("roundabout").backDegrees;
            if (b > c) {
                return d >= c && d < b;
            } else {
                return d < c && d >= b;
            }
        },
        getAnimateToMethod: function getAnimateToMethod(a) {
            a = a.toLowerCase();
            if (a === "next") {
                return "animateToNextChild";
            } else if (a === "previous") {
                return "animateToPreviousChild";
            }
            return "animateToNearestChild";
        },
        relayoutChildren: function relayoutChildren() {
            return this.each(function () {
                var b = a(this),
                    c = a.extend({}, b.data("roundabout"));
                c.startingChild = b.data("roundabout").childInFocus;
                d.init.apply(b, [c, null, true]);
            });
        },
        getNearestChild: function getNearestChild() {
            var b = a(this),
                c = b.data("roundabout"),
                d = b.children(c.childSelector).length;
            if (!c.reflect) {
                return (d - Math.round(c.bearing / c.period) % d) % d;
            } else {
                return Math.round(c.bearing / c.period) % d;
            }
        },
        degToRad: function degToRad(a) {
            return d.normalize.apply(null, [a]) * Math.PI / 180;
        },
        getPlacement: function getPlacement(a) {
            var b = this.data("roundabout");
            return !b.reflect ? 360 - b.period * a : b.period * a;
        },
        isInFocus: function isInFocus(a) {
            var b,
                c = this,
                e = c.data("roundabout"),
                f = d.normalize.apply(null, [e.bearing]);
            a = d.normalize.apply(null, [a]);
            b = Math.abs(f - a);
            return b <= e.floatComparisonThreshold || b >= 360 - e.floatComparisonThreshold;
        },
        getChildInFocus: function getChildInFocus() {
            var b = a(this).data("roundabout");
            return b.childInFocus > -1 ? b.childInFocus : false;
        },
        compareVersions: function compareVersions(a, b) {
            var c,
                d = a.split(/\./i),
                e = b.split(/\./i),
                f = d.length > e.length ? d.length : e.length;
            for (c = 0; c <= f; c++) {
                if (d[c] && !e[c] && parseInt(d[c], 10) !== 0) {
                    return 1;
                } else if (e[c] && !d[c] && parseInt(e[c], 10) !== 0) {
                    return -1;
                } else if (d[c] === e[c]) {
                    continue;
                }
                if (d[c] && e[c]) {
                    if (parseInt(d[c], 10) > parseInt(e[c], 10)) {
                        return 1;
                    } else {
                        return -1;
                    }
                }
            }
            return 0;
        }
    };
    a.fn.roundabout = function (b) {
        if (d[b]) {
            return d[b].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) === "object" || a.isFunction(b) || !b) {
            return d.init.apply(this, arguments);
        } else {
            a.error("Method " + b + " does not exist for jQuery.roundabout.");
        }
    };
})(jQuery);

/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!function (a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, a.each(["onResize", "onThrottledResize"], a.proxy(function (b, c) {
            this._handlers[c] = a.proxy(this[c], this);
        }, this)), a.each(e.Plugins, a.proxy(function (a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)), a.each(e.Workers, a.proxy(function (b, c) {
            this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)), this.setup(), this.initialize();
    }e.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Type = { Event: "event", State: "state" }, e.Plugins = {}, e.Workers = [{ filter: ["width", "settings"], run: function run() {
            this._width = this.$element.width();
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            a.current = this._items && this._items[this.relative(this._current)];
        } }, { filter: ["items", "settings"], run: function run() {
            this.$stage.children(".cloned").remove();
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = { width: "auto", "margin-left": d ? b : "", "margin-right": d ? "" : b };!c && this.$stage.children().css(e), a.css = e;
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];for (a.items = { merge: !1, width: b }; d--;) {
                c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            }this._widths = f;
        } }, { filter: ["items", "settings"], run: function run() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";for (g /= 2; g--;) {
                b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            }this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage);
        } }, { filter: ["width", "items", "settings"], run: function run() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) {
                d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            }this._coordinates = f;
        } }, { filter: ["width", "items", "settings"], run: function run() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, "padding-left": a || "", "padding-right": a || "" };this.$stage.css(c);
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();if (c && a.items.merge) for (; b--;) {
                a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            } else c && (a.css.width = a.items.width, d.css(a.css));
        } }, { filter: ["items"], run: function run() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
        } }, { filter: ["width", "items", "settings"], run: function run(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current);
        } }, { filter: ["position"], run: function run() {
            this.animate(this.coordinates(this._current));
        } }, { filter: ["width", "position", "items", "settings"], run: function run() {
            var a,
                b,
                c,
                d,
                e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];for (c = 0, d = this._coordinates.length; c < d; c++) {
                a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            }this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"));
        } }], e.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b);
        }this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized");
    }, e.prototype.setup = function () {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;c ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } });
    }, e.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1);
    }, e.prototype.prepare = function (b) {
        var c = this.trigger("prepare", { content: b });return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data;
    }, e.prototype.update = function () {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
            return this[a];
        }, this._invalidated), e = {}; b < c;) {
            (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        }this._invalidated = {}, !this.is("valid") && this.enter("valid");
    }, e.prototype.width = function (a) {
        switch (a = a || e.Width.Default) {case e.Width.Inner:case e.Width.Outer:
                return this._width;default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin;}
    }, e.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed");
    }, e.prototype.onThrottledResize = function () {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    }, e.prototype.onResize = function () {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")));
    }, e.prototype.registerEventHandlers = function () {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1;
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)));
    }, e.prototype.onDragStart = function (b) {
        var d = null;3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }) : (d = this.$stage.position(), d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = new Date().getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"));
        }, this)));
    }, e.prototype.onDragMove = function (a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x));
    }, e.prototype.onDragEnd = function (b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1;
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"));
    }, e.prototype.closest = function (b, c) {
        var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates();return this.settings.freeDrag || a.each(g, a.proxy(function (a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1;
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d;
    }, e.prototype.animate = function (b) {
        var c = this.speed() > 0;this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({ transform: "translate3d(" + b + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : c ? this.$stage.animate({ left: b + "px" }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: b + "px" });
    }, e.prototype.is = function (a) {
        return this._states.current[a] && this._states.current[a] > 0;
    }, e.prototype.current = function (a) {
        if (a === d) return this._current;if (0 === this._items.length) return d;if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", { property: { name: "position", value: a } });b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } });
        }return this._current;
    }, e.prototype.invalidate = function (b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function (a, b) {
            return b;
        });
    }, e.prototype.reset = function (a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]));
    }, e.prototype.normalize = function (a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a;
    }, e.prototype.relative = function (a) {
        return a -= this._clones.length / 2, this.normalize(a, !0);
    }, e.prototype.maximum = function (a) {
        var b,
            c,
            d,
            e = this.settings,
            f = this._coordinates.length;if (e.loop) f = this._clones.length / 2 + this._items.length - 1;else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d));) {}f = b + 1;
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }, e.prototype.minimum = function (a) {
        return a ? 0 : this._clones.length / 2;
    }, e.prototype.items = function (a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]);
    }, e.prototype.mergers = function (a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]);
    }, e.prototype.clones = function (b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function f(a) {
            return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2;
        };return b === d ? a.map(this._clones, function (a, b) {
            return f(b);
        }) : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
        });
    }, e.prototype.speed = function (a) {
        return a !== d && (this._speed = a), this._speed;
    }, e.prototype.coordinates = function (b) {
        var c,
            e = 1,
            f = b - 1;return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
            return this.coordinates(b);
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c));
    }, e.prototype.duration = function (a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }, e.prototype.to = function (a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update();
    }, e.prototype.next = function (a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a);
    }, e.prototype.prev = function (a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a);
    }, e.prototype.onTransitionEnd = function (a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;this.leave("animating"), this.trigger("translated");
    }, e.prototype.viewport = function () {
        var d;return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d;
    }, e.prototype.replace = function (b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
            return 1 === this.nodeType;
        }).each(a.proxy(function (a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1);
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items");
    }, e.prototype.add = function (b, c) {
        var e = this.relative(this._current);c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", { content: b, position: c }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", { content: b, position: c });
    }, e.prototype.remove = function (a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a }));
    }, e.prototype.preloadAutoWidthImages = function (b) {
        b.each(a.proxy(function (b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image()).one("load", a.proxy(function (a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh();
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"));
        }, this));
    }, e.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));for (var d in this._plugins) {
            this._plugins[d].destroy();
        }this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel");
    }, e.prototype.op = function (a, b, c) {
        var d = this.settings.rtl;switch (b) {case "<":
                return d ? a > c : a < c;case ">":
                return d ? a < c : a > c;case ">=":
                return d ? a <= c : a >= c;case "<=":
                return d ? a >= c : a <= c;}
    }, e.prototype.on = function (a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c);
    }, e.prototype.off = function (a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c);
    }, e.prototype.trigger = function (b, c, d, f, g) {
        var h = { item: { count: this._items.length, index: this.current() } },
            i = a.camelCase(a.grep(["on", b, d], function (a) {
            return a;
        }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, h, c));return this._supress[b] || (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
        }), this.register({ type: e.Type.Event, name: b }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j;
    }, e.prototype.enter = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
        }, this));
    }, e.prototype.leave = function (b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function (a, b) {
            this._states.current[b]--;
        }, this));
    }, e.prototype.register = function (b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;a.event.special[b.name]._default = function (a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments);
                }, a.event.special[b.name].owl = !0;
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function (c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d;
        }, this)));
    }, e.prototype.suppress = function (b) {
        a.each(b, a.proxy(function (a, b) {
            this._supress[b] = !0;
        }, this));
    }, e.prototype.release = function (b) {
        a.each(b, a.proxy(function (a, b) {
            delete this._supress[b];
        }, this));
    }, e.prototype.pointer = function (a) {
        var c = { x: null, y: null };return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c;
    }, e.prototype.isNumeric = function (a) {
        return !isNaN(parseFloat(a));
    }, e.prototype.difference = function (a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
    }, a.fn.owlCarousel = function (b) {
        var c = Array.prototype.slice.call(arguments, 1);return this.each(function () {
            var d = a(this),
                f = d.data("owl.carousel");f || (f = new e(this, "object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (b, c) {
                f.register({ type: e.Type.Event, name: c }), f.$element.on(c + ".owl.carousel.core", a.proxy(function (a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                }, f));
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c);
        });
    }, a.fn.owlCarousel.Constructor = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoRefresh && this.watch();
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, e.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval));
    }, e.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh());
    }, e.prototype.destroy = function () {
        var a, c;b.clearInterval(this._interval);for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (c in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[c] && (this[c] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function (b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function (a, b) {
                    this.load(b);
                }, this); f++ < e;) {
                    this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
                }
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };e.Defaults = { lazyLoad: !1 }, e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
            var e,
                f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
                f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy");
            }, this)).attr("src", g) : (e = new Image(), e.onload = a.proxy(function () {
                f.css({ "background-image": 'url("' + g + '")', opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy");
            }, this), e.src = g);
        }, this)), this._loaded.push(d.get(0)));
    }, e.prototype.destroy = function () {
        var a, b;for (a in this.handlers) {
            this._core.$element.off(a, this.handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && this.update();
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update();
            }, this), "loaded.owl.lazy": a.proxy(function (a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update();
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers);
    };e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, e.prototype.update = function () {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;a.each(d, function (b, c) {
            e.push(a(c).height());
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass);
    }, e.prototype.destroy = function () {
        var a, b;for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = { "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] });
            }, this), "resize.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove();
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop();
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");c.length && (c.css("display", "none"), this.fetch(c, a(b.content)));
                }
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
            this.play(a);
        }, this));
    };e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, e.prototype.fetch = function (a, b) {
        var c = function () {
            return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube";
        }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");if (!g) throw new Error("Missing video URL.");if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";else if (d[3].indexOf("vimeo") > -1) c = "vimeo";else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");c = "vzaar";
        }d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]);
    }, e.prototype.thumbnail = function (b, c) {
        var d,
            e,
            f,
            g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function l(a) {
            e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e);
        };if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;"youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function success(a) {
                f = a[0].thumbnail_large, l(f);
            } }) : "vzaar" === c.type && a.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function success(a) {
                f = a.framegrab_url, l(f);
            } });
    }, e.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video");
    }, e.prototype.play = function (b) {
        var c,
            d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"));
    }, e.prototype.isInFullScreen = function () {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;return b && a(b).parent().hasClass("owl-video-frame");
    }, e.prototype.destroy = function () {
        var a, b;this._core.$element.off("click.owl.video");for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value);
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
                a.namespace && (this.swapping = "translated" == a.type);
            }, this), "translate.owl.carousel": a.proxy(function (a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
            }, this) }, this.core.$element.on(this.handlers);
    };e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function () {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
            this.core.speed(0);var b,
                c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f));
        }
    }, e.prototype.clear = function (b) {
        a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
    }, e.prototype.destroy = function () {
        var a, b;for (a in this.handlers) {
            this.core.$element.off(a, this.handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    var e = function e(b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval();
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.autoplay && this.play();
            }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
                a.namespace && this.play(b, c);
            }, this), "stop.owl.autoplay": a.proxy(function (a) {
                a.namespace && this.stop();
            }, this), "mouseover.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this), "mouseleave.owl.autoplay": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play();
            }, this), "touchstart.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause();
            }, this), "touchend.owl.core": a.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play();
            }, this) }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options);
    };e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, e.prototype.play = function (a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval());
    }, e.prototype._getNextTimeout = function (d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function () {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed);
        }, this), d || this._core.settings.autoplayTimeout);
    }, e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
    }, e.prototype.stop = function () {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"));
    }, e.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
    }, e.prototype.destroy = function () {
        var a, b;this.stop();for (a in this._handlers) {
            this._core.$element.off(a, this._handlers[a]);
        }for (b in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[b] && (this[b] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function e(b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function (b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>");
            }, this), "added.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
            }, this), "remove.owl.carousel": a.proxy(function (a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
            }, this), "changed.owl.carousel": a.proxy(function (a) {
                a.namespace && "position" == a.property.name && this.draw();
            }, this), "initialized.owl.carousel": a.proxy(function (a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"));
            }, this), "refreshed.owl.carousel": a.proxy(function (a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"));
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers);
    };e.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, e.prototype.initialize = function () {
        var b,
            c = this._core.settings;this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.prev(c.navSpeed);
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function (a) {
            this.next(c.navSpeed);
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function (b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();b.preventDefault(), this.to(d, c.dotsSpeed);
        }, this));for (b in this._overrides) {
            this._core[b] = a.proxy(this[b], this);
        }
    }, e.prototype.destroy = function () {
        var a, b, c, d;for (a in this._handlers) {
            this.$element.off(a, this._handlers[a]);
        }for (b in this._controls) {
            this._controls[b].remove();
        }for (d in this.overides) {
            this._core[d] = this._overrides[d];
        }for (c in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[c] && (this[c] = null);
        }
    }, e.prototype.update = function () {
        var a,
            b,
            c,
            d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy) for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
                if (this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f) break;b = 0, ++c;
            }b += this._core.mergers(this._core.relative(a));
        }
    }, e.prototype.draw = function () {
        var b,
            c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"));
    }, e.prototype.onTrigger = function (b) {
        var c = this._core.settings;b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
    }, e.prototype.current = function () {
        var b = this._core.relative(this._core.current());return a.grep(this._pages, a.proxy(function (a, c) {
            return a.start <= b && a.end >= b;
        }, this)).pop();
    }, e.prototype.getPosition = function (b) {
        var c,
            d,
            e = this._core.settings;return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c;
    }, e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
    }, e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
    }, e.prototype.to = function (b, c, d) {
        var e;!d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    "use strict";
    var e = function e(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function (c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation");
            }, this), "prepared.owl.carousel": a.proxy(function (b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if (!c) return;this._hashes[c] = b.content;
                }
            }, this), "changed.owl.carousel": a.proxy(function (c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function (a, b) {
                        return a === d ? b : null;
                    }).join();if (!e || b.location.hash.slice(1) === e) return;b.location.hash = e;
                }
            }, this) }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function (a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
        }, this));
    };e.Defaults = { URLhashListener: !1 }, e.prototype.destroy = function () {
        var c, d;a(b).off("hashchange.owl.navigation");for (c in this._handlers) {
            this._core.$element.off(c, this._handlers[c]);
        }for (d in Object.getOwnPropertyNames(this)) {
            "function" != typeof this[d] && (this[d] = null);
        }
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e;
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);return a.each((b + " " + h.join(f + " ") + f).split(" "), function (a, b) {
            if (g[b] !== d) return e = !c || b, !1;
        }), e;
    }function f(a) {
        return e(a, !0);
    }var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
        j = { csstransforms: function csstransforms() {
            return !!e("transform");
        }, csstransforms3d: function csstransforms3d() {
            return !!e("perspective");
        }, csstransitions: function csstransitions() {
            return !!e("transition");
        }, cssanimations: function cssanimations() {
            return !!e("animation");
        } };j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d());
}(window.Zepto || window.jQuery, window, document);
$(function () {

    // custom selects
    $('.js-select-multiple').each(function () {
        $(this).multipleSelect({
            width: '100%',
            placeholder: $(this).attr('placeholder'),
            countSelected: ' # из % выбрано',
            selectAll: false,
            allSelected: 'Все выбрано'
        });
    });

    $('.js-select-single').each(function () {
        $(this).multipleSelect({
            width: '100%',
            placeholder: $(this).attr('placeholder'),
            single: true
        });
    });

    // custom scrolls
    // $('.js-yacht-scroll').perfectScrollbar();
    // $('.js-scroll-filter').perfectScrollbar();
    // $('.js-scroll').perfectScrollbar();

    setTimeout(function () {
        $('.js-scroll').perfectScrollbar();
        $('.js-yacht-scroll').perfectScrollbar();
        $('.js-scroll-filter').perfectScrollbar();
        // $('.js-scroll-row').perfectScrollbar({suppressScrollX: true});
    }, 300);

    $(window).on('resize', function () {
        $('.js-scroll').perfectScrollbar('update');
        $('.js-yacht-scroll').perfectScrollbar('update');
        $('.js-scroll-filter').perfectScrollbar('update');
    });

    $('.js-select-field').on('click', function () {
        var selectScroll = $(this).find('.ms-parent ul');

        selectScroll.perfectScrollbar({
            wheelSpeed: 1,
            wheelPropagation: false,
            swipePropagation: true,
            minScrollbarLength: null,
            maxScrollbarLength: null,
            useBothWheelAxes: false,
            useKeyboard: true,
            suppressScrollX: false,
            suppressScrollY: false,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            includePadding: false
        });

        selectScroll.perfectScrollbar('update');
    });

    var map;

    function initMap() {

        var mexico = new google.maps.LatLng(19.432608, -99.133209);

        var mapOptions = {
            zoom: 5,
            center: mexico,
            disableDefaultUI: true
        };

        var map = new google.maps.Map(document.getElementById('js-yacht-map'), mapOptions);

        var yachtMapWindow = '<div class="yacht-map__info">' + '<div class="yacht-map__window-pic">' + '<img src="img/content/yacht-card-1.jpg">' + '</div>' + '<div class="yacht-map__window-title">ЯХТА Riva Duchessa' + '</div>' + '<div class="yacht-map__window-price">13 000 грн/день' + '</div>' + '</div>';

        var mapInfo = new google.maps.InfoWindow({
            content: yachtMapWindow
        });

        var mapMarker = 'img/ui-icons/map-marker.png';
        var markerMexico = new google.maps.Marker({
            position: mexico,
            map: map,
            icon: mapMarker
        });

        markerMexico.addListener('click', function () {
            mapInfo.open(map, markerMexico);
        });

        google.maps.event.addListener(map, "click", function (event) {
            mapInfo.close();
        });
        // show map
        var yachtMapShowBtn = $('.js-show-yacht-map'),
            yachtMapInner = $('.js-yacht-map-inner'),
            yachtMapMove = $('.js-yacht-map-move'),
            yachtSection = $('.js-yacht-section');

        yachtMapShowBtn.on('click', function (e) {
            e.preventDefault();

            yachtMapShowBtn.toggleClass('is-active');

            yachtMapInner.slideToggle(function () {
                yachtSection.toggleClass('is-active');
                google.maps.event.trigger(map, 'resize');
                map.setCenter(mexico);
                yachtMapMove.slideToggle();
                setTimeout(function () {
                    $('.js-yacht-scroll').perfectScrollbar('update');
                }, 150);
            });

            if (yachtMapShowBtn.hasClass('is-active')) {
                $(this).children('span').text('Скрыть карту');
            } else {
                $(this).children('span').text('Показать карту');
            }
        });
    }

    initMap();
});

// datepicker search
var datepickerDefaultOptions = {
    dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    dayNamesMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    prevText: '',
    nextText: ''
};

$('.js-pick-date').datepicker($.extend(datepickerDefaultOptions, {
    beforeShow: function beforeShow() {
        $('#ui-datepicker-div').addClass('datepicker-smpl-search');
    }
}));

$('.js-search-adv-date').datepicker($.extend(datepickerDefaultOptions, {
    beforeShow: function beforeShow() {
        $('#ui-datepicker-div').addClass('datepicker-adv-search');
    }
}));

// $('.js-calendar').datepicker($.extend(datepickerDefaultOptions, {
//    inline: true,
//    beforeShow: function () {
//       $('#ui-datepicker-div').addClass('event-calendar');
//    }
// }));

var Datepicker = function () {
    function Datepicker() {
        _classCallCheck(this, Datepicker);

        this.config = {
            el: '.js-datepicker',
            moveBtn: '.js-datepicker-btn',
            openBtn: '.js-open-datepicker',
            yearInput: '.js-datepicker-year',
            monthInput: '.js-datepicker-month',
            selectText: '.js-datepicker-text',
            dropdown: '.js-datepicker-dropdown'
        };

        this.openBtn = $(this.config.openBtn);
        this.el = $(this.config.el);
        this.inputs = this.el.find('input');

        this.selectText = $(this.config.selectText);
        this.initialText = this.selectText.text().split(' ');
        this.moveBtn = $(this.config.moveBtn);

        this.text = {
            month: this.initialText[0],
            year: this.initialText[1]
        };

        this.openBtn.on('click', this._toggleOpen.bind(this));
        this.inputs.on('change', this._handleChange.bind(this));
        this.moveBtn.on('click', this._move.bind(this));
    }

    _createClass(Datepicker, [{
        key: '_toggleOpen',
        value: function _toggleOpen(e) {
            var _config = this.config,
                el = _config.el,
                dropdown = _config.dropdown;


            var target = $(e.target);
            var parent = target.parents(el);
            var dropDown = parent.find(dropdown);

            dropDown.toggleClass('is-open');

            e.preventDefault();
        }
    }, {
        key: '_handleChange',
        value: function _handleChange(e) {
            var _config2 = this.config,
                el = _config2.el,
                dropdown = _config2.dropdown;


            var target = $(e.target);
            var parent = target.parents(el);
            var dropDown = parent.find(dropdown);
            var type = target.data('type');
            var val = target.data('val');

            this.text[type] = val;

            this._updateText();

            if (type == 'month') {
                dropDown.removeClass('is-open');
            }
        }
    }, {
        key: '_updateText',
        value: function _updateText() {
            var _text = this.text,
                month = _text.month,
                year = _text.year;

            var text = month + ' ' + year;

            this.selectText.text(text);
        }
    }, {
        key: '_move',
        value: function _move(e) {
            var _config3 = this.config,
                el = _config3.el,
                dropdown = _config3.dropdown,
                monthInput = _config3.monthInput,
                yearInput = _config3.yearInput;

            var target = $(e.currentTarget);
            var direction = target.data('direction');
            var parent = target.parents(el);

            var IS_LEAF_TO_NEXT_MONTH = direction == 'next';

            //year data
            var yearInputs = parent.find(yearInput).find('input');
            var currentYearIndex = [].findIndex.call(yearInputs.toArray(), function (item, i, array) {
                return item.checked;
            });

            var nextYearIndex = IS_LEAF_TO_NEXT_MONTH ? currentYearIndex + 1 : currentYearIndex - 1;

            var nextYear = $(yearInputs[nextYearIndex]);

            //month data
            var monthInputs = parent.find(monthInput).find('input');
            var currentMonthIndex = [].findIndex.call(monthInputs.toArray(), function (item, i, array) {
                return item.checked;
            });

            var nextMonthIndex = IS_LEAF_TO_NEXT_MONTH ? currentMonthIndex + 1 : currentMonthIndex - 1;

            var nextMonth = $(monthInputs[nextMonthIndex]);

            //if it last or very first - do nothing
            if (nextMonthIndex > monthInputs.length - 1 && nextYearIndex > yearInputs.length - 1 || nextMonthIndex < 0 && nextYearIndex < 0) return;

            var FIRST_MONTH = 0;
            var LAST_MONTH = monthInputs.length - 1;

            var shouldLeaf = IS_LEAF_TO_NEXT_MONTH ? currentMonthIndex == monthInputs.length - 1 && currentYearIndex != yearInputs.length - 1 : currentMonthIndex == 0 && currentYearIndex != 0;

            if (shouldLeaf) {

                nextYear.prop("checked", true);

                var valYear = nextYear.data('val');

                this.text.year = valYear;

                var newMonthIndex = IS_LEAF_TO_NEXT_MONTH ? FIRST_MONTH : LAST_MONTH;

                nextMonth = $(monthInputs[newMonthIndex]);
            }

            nextMonth.prop("checked", true);

            var valMonth = nextMonth.data('val');

            this.text.month = valMonth;

            this._updateText();
        }
    }]);

    return Datepicker;
}();

new Datepicker();

var Popup = function () {
    function Popup(opt) {
        _classCallCheck(this, Popup);

        this.options = opt;

        this.popup = $(opt.popup);
        this.popupIn = $(opt.popupIn);
        this.popupClose = $(opt.popupClose);
        this.popupOpen = $(opt.popupOpen);

        this.afterOpen = opt.afterOpen;
        this.beforeOpen = opt.beforeOpen;
        this.afterClose = opt.afterClose;

        this.popupOpen.on('click', this.open.bind(this));
        this.popupClose.on('click', this.hide.bind(this));

        if (this.options.hideFromParent) this.popup.on('click', this._hideFromParent.bind(this));
    }

    _createClass(Popup, [{
        key: 'open',
        value: function open(e, dataPopup) {
            var target = $(e.currentTarget) || {};
            var data = dataPopup || target.data('open');
            var popup = this.popup.filter('[data-popup="' + data + '"]');

            if ($('.popup').hasClass('is-open')) {

                var zIndexList = [].map.call($('.popup.is-open'), function (item) {
                    return +getComputedStyle(item).zIndex;
                });
                var zIndex = Math.max(zIndexList);

                popup.css("zIndex", zIndex + 1);
            }

            if (this.beforeOpen && isFunction(this.beforeOpen)) this.beforeOpen(this.popup, e);

            // popup.fadeIn('fast');
            popup.addClass('is-open');

            this._scrollTop = $(window).scrollTop();
            $('body').css('top', -this._scrollTop).addClass('popup-open');

            //callback
            function isFunction(functionToCheck) {
                var getType = {};
                return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
            }

            if (this.afterOpen && isFunction(this.afterOpen)) this.afterOpen(this.popup);

            e.preventDefault();
        }
    }, {
        key: 'hide',
        value: function hide(e, dataPopup) {
            var target = $(e.currentTarget) || {};
            var data = dataPopup || target.data('open');
            var popup = dataPopup ? this.popup.filter('[data-popup="' + data + '"]') : target.closest(this.options.popup);

            $('body').removeAttr('style').removeClass('popup-open').scrollTop(this._scrollTop);

            // popup.fadeOut('fast');
            popup.removeClass('is-open');

            function isFunction(functionToCheck) {
                var getType = {};
                return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
            }

            if (this.afterClose && isFunction(this.afterClose)) this.afterClose(this.popup);

            e.preventDefault();
        }
    }, {
        key: '_hideFromParent',
        value: function _hideFromParent(e) {

            if (!$(e.target).closest(this.options.popupIn).length) {
                this.hide(e);
            }
        }
    }]);

    return Popup;
}();

//data-open / data-popup


var popup = new Popup({
    popup: '.js-popup',
    popupClose: '.js-close-popup',
    popupOpen: '.js-open-popup',
    popupIn: '.js-popup-in',
    hideFromParent: true
});

var popupMore = new Popup({
    popup: '.js-popup-more',
    popupClose: '.js-close-popup-more',
    popupOpen: '.js-open-popup-more',
    popupIn: '.js-popup-more-in',
    hideFromParent: true,
    beforeOpen: function beforeOpen(popup, e) {
        var target = $(e.currentTarget);

        var more = target.parents('.js-infromation-more');

        var _more$data = more.data('information-for-popup'),
            title = _more$data.title,
            img = _more$data.img,
            text = _more$data.text,
            link = _more$data.link;

        var moreTitle = popup.find('.js-more-title');
        var moreImg = popup.find('.js-more-photo');
        var moreText = popup.find('.js-more-text');
        var moreLink = popup.find('.js-more-link');

        moreTitle.text(title);
        moreText.html(text);
        moreImg.css('background-image', 'url(' + img + ')');
        moreLink.attr('href', link);
    }
});

$(function () {

    // search filters change

    (function () {
        var filterDetailed = $('.js-filter-detailed');
        var toggleFilters = $('.js-more-filters');

        toggleFilters.each(function () {
            $(this).on('click', function (e) {
                e.preventDefault();

                $(this).toggleClass('is-active');
                $(this).find('span').text(!$(this).hasClass('is-active') ? 'Больше фильтров' : 'Меньше фильтров');
                filterDetailed.toggleClass('is-active');
            });
        });
    })();

    // range sliders

    (function () {

        var priceRange = $('.js-price-range'),
            priceFromInput = $('.js-price-from'),
            priceToInput = $('.js-price-to'),
            peopleCountRange = $('.js-people-count-range'),
            peopleCountInput = $('.js-people-count'),
            toiletsCountRange = $('.js-toilets-count-range'),
            toiletsCountInput = $('.js-toilets-count'),
            cabinCountRange = $('.js-cabin-count-range'),
            cabinCountInput = $('.js-cabin-count');

        // price count
        priceRange.slider({
            animate: true,
            range: true,
            min: 5000,
            max: 50000,
            step: 1000,
            values: [5000, 28000],
            slide: function slide(event, ui) {
                priceFromInput.val(ui.values[0]);
                priceToInput.val(ui.values[1]);
            }
        });

        priceFromInput.val(priceRange.slider('values', 0));

        priceFromInput.on('change', function () {
            var _value = priceFromInput.val();

            priceFromInput.val(_value);

            priceRange.slider('values', 0, _value);
        });

        priceToInput.val(priceRange.slider('values', 1));

        priceToInput.on('change', function () {
            var _value = priceToInput.val();

            priceToInput.val(_value);

            priceRange.slider('values', 1, _value);
        });

        // people count
        peopleCountRange.slider({
            animate: true,
            range: 'min',
            min: 1,
            max: 50,
            value: [15],
            slide: function slide(event, ui) {
                peopleCountInput.val(ui.value);
            }
        });

        peopleCountInput.val(peopleCountRange.slider('value'));

        peopleCountInput.on('change', function () {
            var _value = peopleCountInput.val();

            peopleCountInput.val(_value);

            peopleCountRange.slider('value', _value);
        });

        // toilets count
        toiletsCountRange.slider({
            animate: true,
            range: 'min',
            min: 1,
            max: 50,
            value: [15],
            slide: function slide(event, ui) {
                toiletsCountInput.val(ui.value);
            }
        });

        toiletsCountInput.val(toiletsCountRange.slider('value'));

        toiletsCountInput.on('change', function () {
            var _value = toiletsCountInput.val();

            toiletsCountInput.val(_value);

            toiletsCountRange.slider('value', _value);
        });

        // cabin count
        cabinCountRange.slider({
            animate: true,
            range: 'min',
            min: 1,
            max: 50,
            value: [15],
            slide: function slide(event, ui) {
                cabinCountInput.val(ui.value);
            }
        });

        cabinCountInput.val(cabinCountRange.slider('value'));

        cabinCountInput.on('change', function () {
            var _value = cabinCountInput.val();

            cabinCountInput.val(_value);

            cabinCountRange.slider('value', _value);
        });

        // disable keypress
        $('.js-price-from, .js-price-to, .js-people-count, .js-cabin-count, .js-toilets-count').keypress(function (event) {
            var key, keyChar;
            if (!event) var event = window.event;

            if (event.keyCode) key = event.keyCode;else if (event.which) key = event.which;

            if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
            keyChar = String.fromCharCode(key);

            if (!/\d/.test(keyChar)) return false;
        });
    })();
});

(function () {

    var row = $('.js-row');
    var rowInner = $('.js-row-inner');

    var isTouchDevice = !!('ontouchstart' in document);
    var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    var duration = isMac ? 4 : 50;

    var LEFT_ARROW = 37;
    var RIGHT_ARROW = 39;

    if (isTouchDevice) {
        $('body').addClass('is-touch');
        return false;
    }

    row.mousewheel(function (event, delta) {

        var content = $(this).find('.js-row-inner');

        content[0].scrollLeft -= event.deltaY * duration;

        event.preventDefault();
    });

    var moveByArrows = function moveByArrows(el) {
        return function (e) {

            var keyCode = e.keyCode;

            switch (keyCode) {
                case LEFT_ARROW:
                    el.stop().animate({ scrollLeft: '-=258' }, 300);
                    return;
                case RIGHT_ARROW:
                    el.stop().animate({ scrollLeft: '+=258' }, 300);
                    return;
            }
        };
    };

    var eventHandler = null;

    row.on('mouseenter', function () {
        var content = $(this).find('.js-row-inner');
        eventHandler = moveByArrows(content);

        $(document).on('keyup', eventHandler);
    });

    row.on('mouseleave', function () {
        $(document).off('keyup', eventHandler);
    });
})();
$(function () {

    var movingLine = {
        init: function init() {
            this.el = $('.js-nav');
            this.el.find('> li').on('mouseover', this._move.bind(this));
            this.el.on('mouseleave', this._destroy.bind(this));

            this._goToActive();
        },
        _move: function _move(e) {
            var target = $(e.currentTarget);
            var $line = target.siblings('.js-moving-line');
            var width = target.width();
            var offsetLeft = target.position().left;
            var gutterLeft = parseInt(getComputedStyle(target[0]).paddingLeft);

            $line.css({
                width: width + 'px',
                transform: 'translate3d(' + (gutterLeft + offsetLeft) + 'px,0,0)'
            });
        },
        _destroy: function _destroy() {
            var $line = this.el.find('.js-moving-line');

            // $line.attr('style', '');

            this._goToActive();
        },
        _goToActive: function _goToActive() {
            var line = this.el.find('.js-moving-line');
            var active = this.el.find('li.is-active');
            var gutterLeft = parseInt(getComputedStyle(active[0]).paddingLeft);

            var activeProp = {
                width: active.width(),
                offsetLeft: active.position().left
            };

            line.css({
                width: activeProp.width + 'px',
                transform: 'translate3d(' + (activeProp.offsetLeft + gutterLeft) + 'px,0,0)'
            });

            setTimeout(function () {
                line.addClass('is-init');
            }, 200);
        }
    };

    movingLine.init();
});
$(function () {

    // slick
    $('.js-card-slider').slick({
        useTransform: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.js-card-slider-nav',
        cssEase: 'linear'
    });

    $('.js-card-slider-nav').slick({
        useTransform: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.js-card-slider',
        dots: false,
        arrows: false,
        focusOnSelect: true,
        infinity: false
    });

    (function () {
        var viewBtn = $('.js-yacht-view'),
            viewContainer = $('.js-view-container'),
            favBtn = $('.js-card-favourite');

        // change yacht view: list/grid
        viewBtn.on('click', function (e) {
            e.preventDefault();
            if ($(this).hasClass('grid')) {
                $(this).siblings(viewBtn).removeClass('is-active');
                $(this).addClass('is-active');
                viewContainer.removeClass('list').addClass('grid');
            } else if ($(this).hasClass('list')) {
                $(this).siblings(viewBtn).removeClass('is-active');
                $(this).addClass('is-active');
                viewContainer.removeClass('grid').addClass('list');
            }
        });

        // add favourite card
        favBtn.on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('is-selected');
        });
    })();

    (function () {
        var infoBtn = $('.js-open-info');
        var info = $('.js-info');

        infoBtn.on('click', function () {
            info.toggleClass('is-active');
        });
    })();
});

$(function () {
    $('.yacht-wiki-fp_reg').fullpage({
        verticalCentered: true,
        anchors: ['description', 'details', 'price', 'programm', 'registration'],
        menu: '.yacht-wiki-menu',
        css3: true,
        onLeave: function onLeave(anchorLink, index) {
            if (index == 1) {
                $('.yacht-wiki-menu').addClass('dark');
                $('.yacht-wiki-menu').removeClass('light');
            }
            if (index == 2) {
                $('.yacht-wiki-menu').addClass('dark');
                $('.yacht-wiki-menu').removeClass('light');
            }
            if (index == 3) {
                $('.yacht-wiki-menu').addClass('dark');
                $('.yacht-wiki-menu').removeClass('light');
            }
            if (index == 4) {
                $('.yacht-wiki-menu').addClass('dark');
                $('.yacht-wiki-menu').removeClass('light');
            }
            if (index == 5) {
                $('.yacht-wiki-menu').addClass('light');
                $('.yacht-wiki-menu').removeClass('dark');
            }
        }
    });

    $('.js-programm-slider').slick({
        fade: true,
        infinite: false,
        draggable: false,
        prevArrow: $('.js-programm-left'),
        nextArrow: $('.js-programm-right')
    });

    $('.js-programm-btn').click(function () {
        var bg = $('.js-programm-slider .slick-active').data('bgImg');
        var bgPic = $('.js-programm-slider .slick-active').data('bgImgPic');
        $('.js-section-bg').css('background-image', bg);
        $('.programm').css('background-image', bgPic);
    });

    $('.js-programm__slider1').slick({
        fade: true,
        infinite: false,
        draggable: false,
        prevArrow: $('.js-programm-left'),
        nextArrow: $('.js-programm-right')
    });

    function carouselSlider() {
        var carouselItems = $('.carousel li').length;
        if (carouselItems < 10) {
            $('.carousel li').each(function () {
                $(this).clone().appendTo(".carousel");
            });
        }
        $('.carousel').roundabout({
            minScale: 0.1,
            minOpacity: 1,
            childSelector: "li",
            autoplay: false,
            btnNext: $('.js-details-left'),
            btnPrev: $('.js-details-right')
        });
    };
    carouselSlider();

    $('.descr__video-btn').click(function () {
        $('.descr').fadeOut();
        $('.descr-video').delay(400).fadeIn();
        $('.yacht-wiki-menu').css('visibility', 'hidden');
    });

    $('.descr-video__close').click(function () {
        $('.descr-video').fadeOut();
        $('.descr').delay(400).fadeIn();
        $('.yacht-wiki-menu').css('visibility', 'visible');
    });

    $('.js-enroll').click(function () {

        var openPopup = new TimelineMax();
        openPopup.to($('.popup-wrap'), 0, { className: '+=js-opened', opacity: '1', display: 'block', ease: Sine.easeOut }).fromTo($('.popup-contacts'), 1, { x: '0%', opacity: '0', display: 'none' }, { x: '-50%', opacity: '1', display: 'block' }, 0).fromTo($('.popup-substrate'), 1, { x: '-100%', opacity: '0', display: 'none' }, { x: '-50%', opacity: '1', display: 'block' }, 0);
    });
});

$(function () {
    var mapContacts;

    function initMap() {
        var style = [{ "featureType": "all", "elementType": "all", "stylers": [{ "saturation": -100 }, { "gamma": 0.5 }] }];
        var office = new google.maps.LatLng(50.4411915, 30.5012787);
        var mapContactsOptions = {
            zoom: 17,
            center: office,
            disableDefaultUI: true
        };

        mapContacts = new google.maps.Map(document.getElementById('map'), mapContactsOptions);

        var mapContactsMarker = 'img/marker.png';
        var markerContacts = new google.maps.Marker({
            position: office,
            map: mapContacts,
            icon: mapContactsMarker
        });
        mapContacts.setOptions({ styles: style });
    }
    initMap();
});

$(document).ready(function () {

    TweenLite.set('.card-front__frame-face', { transformStyle: 'preserve-3d', transformOrigin: '0 50%' });

    $('.hover').hover(function () {
        TweenLite.to($(this).siblings('.main-card').find('.card-front__frame-face'), .5, { rotationY: 20, ease: Sine.easeOut });
    }, function () {
        TweenLite.to($(this).siblings('.main-card').find('.card-front__frame-face'), .5, { rotationY: 0, ease: Sine.easeOut });
    });

    $('.hover_4').click(function () {
        $('.main-card_1').removeClass('main-card_1');
        $('.main-card_2').removeClass('main-card_2');
        $('.main-card_3').removeClass('main-card_3');
        $('.main-card_4').removeClass('main-card_4');

        var openCard = new TimelineMax();
        openCard.to($('.card-front'), .3, { opacity: '0', display: 'none', ease: Sine.easeOut }).to($('.main-card'), 0, { zIndex: '50' }, 0).to($(this).siblings('.main-card'), .5, { scaleX: 1, scaleY: 1, height: '70vh', zIndex: '200' }, 0).to($(this).parents('.card-container').find('.card-small'), 0, { opacity: '0', className: '-=active' }, 0).to($('.hover_link').parents('.card-container').find('.card-small'), 0, { opacity: '1', className: '+=active' }, 0).to($('.hover_link').parents('.card-container'), 1, { width: '30px', ease: Sine.easeOut }, 0).to($(this).parents('.card-container'), 1, { width: '85%', ease: Power0.easeNone }, .5).to($('.card-open'), 0, { className: '+=active' }, 0).fromTo($(this).parents('.card-container').find('.card-open__img-wrap'), 1, { css: { transform: 'scale(.8) translateX(-500px)', opacity: '0' } }, { css: { transform: 'scale(1) translateX(0)', opacity: '1' } }, 1).to($(this).parents('.card-container').find('.card-open__title'), 1, { opacity: '1' }, 1.3).fromTo($('.hover_link').parents('.card-container').find('.main-card'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' } }, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut }, 0).to($(this).parents('.card-container').find('.card-open__items'), 0, { className: '+=active' }, 1.6).to($(this).parents('.card-container').find('.card-open__close'), .3, { opacity: '1', display: 'block', ease: Sine.easeOut });
    });

    $('.js-card-close').click(function () {
        $('.hover_1').siblings('.main-card').addClass('main-card_1');
        $('.hover_2').siblings('.main-card').addClass('main-card_2');
        $('.hover_3').siblings('.main-card').addClass('main-card_3');
        $('.hover_4').siblings('.main-card').addClass('main-card_4');

        var closeCard = new TimelineMax();
        closeCard.to($(this), .3, { opacity: '0', display: 'none', ease: Sine.easeOut }, 0).to($('.main-card'), 0, { zIndex: '50' }, 1.02).to($('.card-open'), 1, { className: '-=active' }, 0).to($('.card-open__img-wrap'), 1, { opacity: '0' }, 0).to($('.card-open__title'), 0, { opacity: '0' }, 0).to($('.card-open__items'), 0, { className: '-=active' }, 0).to($('.card-small'), 1, { className: '-=active', opacity: '1' }, 0).to($('.card-container'), 1, { width: '21.3%', ease: Power0.easeNone }, 0).to($('.main-card'), 1, { width: '100%', ease: Power0.easeNone }, 0).to($('.main-card'), 1, { height: '60vh', ease: Power0.easeNone }, 0).to($('.card-container').find('.card-front'), .5, { opacity: '1', display: 'block', ease: Sine.easeOut }, 1).to($('.card-small'), 0, { opacity: '0' }, 1.01);
    });

    $('.hover_1').hover(function () {
        TweenLite.to($(this), .5, { scaleX: 1.05, scaleY: 1.05 });
        TweenLite.to($(this).siblings('.main-card_1'), .5, { scaleX: 1.05, scaleY: 1.05 });
        TweenLite.to($('.main-card_2'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_3'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_4'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' }, ease: Sine.easeOut });
    }, function () {
        TweenLite.to($(this), .5, { scaleX: 1, scaleY: 1 });
        TweenLite.to($(this).siblings('.main-card_1'), .5, { scaleX: 1, scaleY: 1 });
        TweenLite.to($('.main-card_2'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_3'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_4'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
    });

    $('.hover_2').hover(function () {
        TweenLite.to($(this), .5, { scaleX: 1.05, scaleY: 1.05 });
        TweenLite.to($(this).siblings('.main-card_2'), .5, { scaleX: 1.05, scaleY: 1.05 });
        TweenLite.to($('.main-card_1'), .5, { css: { transform: 'translateZ(-100px) rotateY(20deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_3'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' },
            ease: Sine.easeOut });
        TweenLite.to($('.main-card_4'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' }, ease: Sine.easeOut });
    }, function () {
        TweenLite.to($(this), .5, { scaleX: 1, scaleY: 1 });
        TweenLite.to($(this).siblings('.main-card_2'), .5, { scaleX: 1, scaleY: 1 });
        TweenLite.to($('.main-card_1'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_3'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_4'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
    });

    $('.hover_3').hover(function () {
        TweenLite.to($(this), .5, { scaleX: 1.05, scaleY: 1.05 });
        TweenLite.to($(this).siblings('.main-card_3'), .5, { scaleX: 1.05, scaleY: 1.05 });
        TweenLite.to($('.main-card_1'), .5, { css: { transform: 'translateZ(-100px) rotateY(20deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_2'), .5, { css: { transform: 'translateZ(-100px) rotateY(20deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_4'), .5, { css: { transform: 'translateZ(-100px) rotateY(-20deg)' }, ease: Sine.easeOut });
    }, function () {
        TweenLite.to($(this), .5, { scaleX: 1, scaleY: 1 });
        TweenLite.to($(this).siblings('.main-card_3'), .5, { scaleX: 1, scaleY: 1 });
        TweenLite.to($('.main-card_1'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_2'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_4'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
    });

    $('.hover_4').hover(function () {
        TweenLite.to($(this), .5, { scaleX: 1.05, scaleY: 1.05 });
        TweenLite.to($(this).siblings('.main-card_4'), .5, { scaleX: 1.05, scaleY: 1.05 });
        TweenLite.to($('.main-card_1'), .5, { css: { transform: 'translateZ(-100px) rotateY(20deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_2'), .5, { css: { transform: 'translateZ(-100px) rotateY(20deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_3'), .5, { css: { transform: 'translateZ(-100px) rotateY(20deg)' }, ease: Sine.easeOut });
    }, function () {
        TweenLite.to($(this), .5, { scaleX: 1, scaleY: 1 });
        TweenLite.to($(this).siblings('.main-card_4'), .5, { scaleX: 1, scaleY: 1 });
        TweenLite.to($('.main-card_1'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_2'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
        TweenLite.to($('.main-card_3'), .5, { css: { transform: 'translateZ(0px) rotateY(0deg)' }, ease: Sine.easeOut });
    });

    $('.card-open__item:nth-child(1) .card-open__link span').hover(function () {
        $('.card-open__img').removeClass('active');
        $('.card-open__img:nth-child(1)').addClass('active');
    });

    $('.card-open__item:nth-child(2) .card-open__link span').hover(function () {
        $('.card-open__img').removeClass('active');
        $('.card-open__img:nth-child(2)').addClass('active');
    });

    $('.card-open__item:nth-child(3) .card-open__link span').hover(function () {
        $('.card-open__img').removeClass('active');
        $('.card-open__img:nth-child(3)').addClass('active');
    });

    $('.card-open__item:nth-child(4) .card-open__link span').hover(function () {
        $('.card-open__img').removeClass('active');
        $('.card-open__img:nth-child(4)').addClass('active');
    });

    $('.card-open__item:nth-child(5) .card-open__link span').hover(function () {
        $('.card-open__img').removeClass('active');
        $('.card-open__img:nth-child(5)').addClass('active');
    });

    $('.card-open__item:nth-child(6) .card-open__link span').hover(function () {
        $('.card-open__img').removeClass('active');
        $('.card-open__img:nth-child(6)').addClass('active');
    });

    $('.contacts__btn-popup').click(function () {

        var openPopup = new TimelineMax();
        openPopup.to($('.popup-wrap'), 0, { className: '+=js-opened', opacity: '1', display: 'block', ease: Sine.easeOut }).fromTo($('.popup-contacts'), 1, { x: '0%', opacity: '0', display: 'none' }, { x: '-50%', opacity: '1', display: 'block' }, 0).fromTo($('.popup-substrate'), 1, { x: '-100%', opacity: '0', display: 'none' }, { x: '-50%', opacity: '1', display: 'block' }, 0);
    });

    $('.js-popup-close').click(function () {
        var closePopup = new TimelineMax();
        closePopup.fromTo($('.popup-contacts'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '0%', opacity: '0', display: 'none' }, 0).fromTo($('.popup-substrate'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '-100%', opacity: '0', display: 'none' }, 0).to($('.popup-wrap'), 0, { className: '-=js-opened', display: 'none', ease: Sine.easeOut }, .5);
    });

    $('.js-send').click(function () {
        var sendPopup = new TimelineMax();
        sendPopup.fromTo($('.popup-contacts'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '0%', opacity: '0', display: 'none' }, 0).to($('.popup-substrate__content'), 0, { className: '+=show' }, 0).to($('.popup-wrap'), 0, { className: '-=js-opened' }, 0).to($('.popup-wrap'), 0, { className: '+=js-opened_substrate' }, 0);
        $('#timer').html('5');

        if ($('.popup-substrate__content').hasClass('show') == true) {
            var timery = function timery() {
                var obj = document.getElementById('timer');
                obj.innerHTML--;
                if (obj.innerHTML == 0) {
                    TweenLite.fromTo($('.popup-substrate'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '-100%', opacity: '0', display: 'none' });
                    TweenLite.to($('.popup-wrap'), 1, { className: '-=js-opened', delay: .5, opacity: '0', display: 'none', ease: Sine.easeOut });
                    TweenLite.to($('.popup-substrate__content'), 1, { delay: .5, className: '-=show' });
                } else {
                    setTimeout(timery, 1000);
                }
            };

            setTimeout(timery, 1000);
        } else {
            console.log('123');
        };
    });

    $('.js-popup-substrate-close').click(function () {
        var closeSecondPopup = new TimelineMax();
        closeSecondPopup.fromTo($('.popup-substrate'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '-100%', opacity: '0', display: 'none' }, 0).to($('.popup-wrap'), 1, { className: '-=js-opened_substrate', opacity: '0', display: 'none', ease: Sine.easeOut }, .5).to($('.popup-substrate__content'), 1, { className: '-=show' }, 1.1);
    });
});

$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        if ($('.popup-wrap').hasClass('js-opened')) {
            var closePopup = new TimelineMax();
            closePopup.fromTo($('.popup-contacts'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '0%', opacity: '0', display: 'none' }, 0).fromTo($('.popup-substrate'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '-100%', opacity: '0', display: 'none' }, 0).to($('.popup-wrap'), 0, { className: '-=js-opened', display: 'none', ease: Sine.easeOut }, .5);
        } else if ($('.popup-wrap').hasClass('js-opened_substrate')) {
            var closeSecondPopup = new TimelineMax();
            closeSecondPopup.fromTo($('.popup-substrate'), 1, { x: '-50%', opacity: '1', display: 'block' }, { x: '-100%', opacity: '0', display: 'none' }, 0).to($('.popup-wrap'), 1, { className: '-=js-opened_substrate', opacity: '0', display: 'none', ease: Sine.easeOut }, .5).to($('.popup-substrate__content'), 1, { className: '-=show' }, 1.1);
        }
    }
});

$(function () {
    var obj = {};
    var wiki = $('.wiki').length / 8;
    var cnt = Math.ceil(wiki);
    for (var i = 0; i < cnt; i++) {
        obj[i] = {};
        for (var j = 0; j <= 7; j++) {
            var id = i * 8 + (j + 1) - 1;
            if ($('.wiki').eq(id).length > 0) {
                obj[i][j] = {};
                obj[i][j] = $('.wiki').eq(id);
            } else {
                break;
            }
        }
    }
    $('.wiki-content').remove();
    var block = Object.keys(obj);
    for (var i = 0; i < block.length; i++) {
        if ($('.wiki-content').length > 0) {
            $('.wiki-content-slide:last').after("<div class='wiki-content-slide'><div class='wiki-content w" + i + "'></div></div>");
        } else {
            $('.wiki-content-wrap').append("<div class='wiki-content-slide'><div class='wiki-content w" + i + "'></div></div>");
        }
        var elements = Object.keys(obj[i]);
        for (var j = 0; j < elements.length; j++) {
            $(".w" + i).append(obj[i][j]);
        }
    }
    $('.wiki-content-wrap').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        fade: true,
        prevArrow: $('.js-wiki-left'),
        nextArrow: $('.js-wiki-right')
    });
});

$(function () {
    $(".wiki-content").each(function () {
        var wikiCount = $(this).find('.wiki').length;
        switch (wikiCount) {
            case 1:
                $(this).children('.wiki').addClass('grid_2-4');
                break;
            case 2:
                $(this).children('.wiki').addClass('grid_2-2');
                break;
            case 3:
                $(this).children('.wiki').addClass('grid_2-3');
                break;
            case 4:
                $(this).children('.wiki').addClass('grid_1-2');
                break;
            case 5:
                $(this).children('.wiki').addClass('grid_1-1');
                $(this).children('.wiki:first-child').removeClass('grid_1-1').addClass('grid_2-2');
                break;
            case 6:
                $(this).children('.wiki').addClass('grid_1-3');
                break;
            case 7:
                $(this).children('.wiki').addClass('grid_1-1');
                $(this).append('<div class="grid_1-1 wiki_comming-soon"><span>мы готовим новые яхт-вики, оставайтесь с нами</span></div>');
                break;
            case 8:
                $(this).children('.wiki').addClass('grid_1-1');
                break;
        }
    });
});

$(function () {
    var slidesPerPage = Math.floor($('.wiki-extended-slider__nav').outerWidth() / 105);
    $('.wiki-extended-slider__body div').click(function () {
        if ($('.wiki-extended__view').hasClass('opened')) {} else {
            $('.wiki-extended__view').addClass('opened');
            slidesPerPage = Math.floor($('.wiki-extended-slider__nav').outerWidth() / 105);
            $('.js-wiki-extended-slider').slick('setPosition');
            $('.js-wiki-extended-slider-nav').slick('setPosition');
        }
    });
    $('.wiki-extended-slider__controll .close').click(function () {
        $('.wiki-extended__view').removeClass('opened');
        slidesPerPage = Math.floor($('.wiki-extended-slider__nav').outerWidth() / 105);
        console.log(slidesPerPage);
        $('.js-wiki-extended-slider').slick('setPosition');
        $('.js-wiki-extended-slider-nav').slick('setPosition');
        $('.wiki-extended-slider__video').fadeOut();
    });

    $('.js-wiki-extended-slider').slick({
        useTransform: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        fade: true,
        asNavFor: '.js-wiki-extended-slider-nav',
        cssEase: 'linear'
    });

    $('.js-wiki-extended-slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.js-wiki-extended-slider',
        dots: false,
        focusOnSelect: true,
        infinity: false,
        arrows: false
    });

    $('.wiki-extended-slider__video-btn').click(function () {
        $('.descr').fadeOut();
        $('.wiki-extended-slider__video').delay(400).fadeIn();
    });
});

$(function () {
    $('.academy-wrap').fullpage({
        verticalCentered: true,
        anchors: ['license', 'teoretic', 'practice', 'instructors', 'learning', 'fmk'],
        menu: '.academy-menu',
        css3: true
    });

    $('.gallery__img').slick({
        fade: true,
        infinite: true,
        draggable: false,
        dots: true,
        prevArrow: $('.gallery__arrow_left'),
        nextArrow: $('.gallery__arrow_right')
    });

    $('.instructor__btn_1').click(function () {
        $('.instructor-cards').addClass('active');
        $('.instructor-card_1').addClass('active');
    });
    $('.instructor__btn_2').click(function () {
        $('.instructor-cards').addClass('active');
        $('.instructor-card_2').addClass('active');
    });
    $('.instructor__btn_3').click(function () {
        $('.instructor-cards').addClass('active');
        $('.instructor-card_3').addClass('active');
    });
    $('.instructor__btn_4').click(function () {
        $('.instructor-cards').addClass('active');
        $('.instructor-card_4').addClass('active');
    });

    $('.js-instructor-cards-close').click(function () {
        $('.instructor-cards').removeClass('active');
        $('.instructor-card').removeClass('active');
    });

    $('.js-instructor-1').click(function () {
        $('.instructor-card').removeClass('active');
        $('.instructor-card_1').addClass('active');
    });
    $('.js-instructor-2').click(function () {
        $('.instructor-card').removeClass('active');
        $('.instructor-card_2').addClass('active');
    });
    $('.js-instructor-3').click(function () {
        $('.instructor-card').removeClass('active');
        $('.instructor-card_3').addClass('active');
    });
    $('.js-instructor-4').click(function () {
        $('.instructor-card').removeClass('active');
        $('.instructor-card_4').addClass('active');
    });

    $('.course__video_teoretic .course__video-btn').click(function () {
        $('.academy-content-wrap_teoretic').fadeOut();
        $('.academy-video_teoretic').delay(400).fadeIn();
    });
    $('.js-close-teoretic').click(function () {
        $('.academy-video_teoretic').fadeOut();
        $('.academy-content-wrap_teoretic').delay(400).fadeIn();
    });

    $('.course__video_pract .course__video-btn').click(function () {
        $('.academy-content-wrap_pract').fadeOut();
        $('.academy-video_pract').delay(400).fadeIn();
    });
    $('.js-close-pract').click(function () {
        $('.academy-video_pract').fadeOut();
        $('.academy-content-wrap_pract').delay(400).fadeIn();
    });

    $('.course__video-btn_fmk').click(function () {
        $('.academy-content-wrap_fmk').fadeOut();
        $('.academy-video_fmk').delay(400).fadeIn();
    });
    $('.js-close-fmk').click(function () {
        $('.academy-video_fmk').fadeOut();
        $('.academy-content-wrap_fmk').delay(400).fadeIn();
    });
});

$(function () {
    $('.js-news-extended-slider').slick({
        useTransform: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: false,
        fade: true,
        asNavFor: '.js-news-extended-slider-nav',
        cssEase: 'linear'
    });

    $('.js-news-extended-slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.js-news-extended-slider',
        dots: false,
        focusOnSelect: true,
        infinity: false,
        arrows: false
    });
});

$(function () {
    $('.event-fp').fullpage({
        verticalCentered: true,
        anchors: ['event', 'details', 'place', 'partners', 'registration'],
        menu: '.yacht-wiki-menu',
        css3: true,
        onLeave: function onLeave(anchorLink, index) {
            if (index == 1) {
                $('.yacht-wiki-menu').addClass('dark');
                $('.yacht-wiki-menu').removeClass('light');
            }
            if (index == 2) {
                $('.yacht-wiki-menu').addClass('dark');
                $('.yacht-wiki-menu').removeClass('light');
            }
            if (index == 3) {
                $('.yacht-wiki-menu').addClass('dark');
                $('.yacht-wiki-menu').removeClass('light');
            }
            if (index == 4) {
                $('.yacht-wiki-menu').addClass('dark');
                $('.yacht-wiki-menu').removeClass('light');
            }
            if (index == 5) {
                $('.yacht-wiki-menu').addClass('light');
                $('.yacht-wiki-menu').removeClass('dark');
            }
        }
    });
});

$(function () {
    var obj = {};
    var newsPost = $('.news-post').length / 8;
    var cnt = Math.ceil(newsPost);
    for (var i = 0; i < cnt; i++) {
        obj[i] = {};
        for (var j = 0; j <= 7; j++) {
            var id = i * 8 + (j + 1) - 1;
            if ($('.news-post').eq(id).length > 0) {
                obj[i][j] = {};
                obj[i][j] = $('.news-post').eq(id);
            } else {
                break;
            }
        }
    }
    $('.news-content').remove();
    var block = Object.keys(obj);
    for (var i = 0; i < block.length; i++) {
        if ($('.news-content').length > 0) {
            $('.news-content-slide:last').after("<div class='news-content-slide'><div class='news-content w" + i + "'></div></div>");
        } else {
            $('.news-content-wrap').append("<div class='news-content-slide'><div class='news-content w" + i + "'></div></div>");
        }
        var elements = Object.keys(obj[i]);
        for (var j = 0; j < elements.length; j++) {
            $(".w" + i).append(obj[i][j]);
        }
    }
    $('.news-content-wrap').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        fade: true,
        prevArrow: $('.js-news-left'),
        nextArrow: $('.js-news-right')
    });
});

function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('bg-video', {
        videoId: '4sTcxHqwy_c', // YouTube Video ID
        width: $(window).width(),
        playerVars: {
            playlist: 'PLblablabla',
            autoplay: 1, // Auto-play the video on load
            controls: 0, // Show pause/play buttons in player
            showinfo: 0, // Hide the video title
            modestbranding: 1, // Hide the Youtube Logo
            loop: 1, // Run the video in a loop
            fs: 0, // Hide the full screen button
            cc_load_policy: 0, // Hide closed captions
            iv_load_policy: 3, // Hide the Video Annotations
            autohide: 1 // Hide video controls when playing
        },
        events: {
            onReady: function onReady(e) {
                e.target.mute();
            }
        }
    });
}

sayHello();