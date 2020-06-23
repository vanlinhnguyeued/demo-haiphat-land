!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? (module.exports = e(require("jquery")))
    : e(jQuery);
})(function (e) {
  "use strict";
  function o() {
    var e =
        c.currentScript ||
        (function () {
          var e = c.getElementsByTagName("script");
          return e.length ? e[e.length - 1] : !1;
        })(),
      o = e ? e.src.split("?")[0] : "";
    return o.split("/").length > 0
      ? o.split("/").slice(0, -1).join("/") + "/"
      : "";
  }
  function t(e, o, t) {
    for (var r = 0, i = o.length; i > r; r++) t(e, o[r]);
  }
  var r = !1,
    i = !1,
    s = 0,
    n = 2e3,
    l = 0,
    a = e,
    c = document,
    d = window,
    u = a(d),
    h = [],
    p =
      d.requestAnimationFrame ||
      d.webkitRequestAnimationFrame ||
      d.mozRequestAnimationFrame ||
      !1,
    m =
      d.cancelAnimationFrame ||
      d.webkitCancelAnimationFrame ||
      d.mozCancelAnimationFrame ||
      !1;
  if (p) d.cancelAnimationFrame || (m = function () {});
  else {
    var f = 0;
    (p = function (e) {
      var o = new Date().getTime(),
        t = Math.max(0, 16 - (o - f)),
        r = d.setTimeout(function () {
          e(o + t);
        }, t);
      return (f = o + t), r;
    }),
      (m = function (e) {
        d.clearTimeout(e);
      });
  }
  var g = d.MutationObserver || d.WebKitMutationObserver || !1,
    v =
      Date.now ||
      function () {
        return new Date().getTime();
      },
    w = {
      zindex: "auto",
      cursoropacitymin: 0,
      cursoropacitymax: 1,
      cursorcolor: "#eedfc6",
      cursorwidth: "6px",
      cursorborder: "none",
      cursorborderradius: "4px",
      scrollspeed: 90,
      mousescrollstep: 60,
      touchbehavior: !1,
      emulatetouch: !1,
      hwacceleration: !0,
      usetransition: !0,
      boxzoom: !1,
      dblclickzoom: !0,
      gesturezoom: !0,
      grabcursorenabled: !0,
      autohidemode: !0,
      background: "rgba(0,0,0,0.1)",
      iframeautoresize: !0,
      cursorminheight: 60,
      preservenativescrolling: !0,
      railoffset: !1,
      railhoffset: !1,
      bouncescroll: !0,
      spacebarenabled: !0,
      railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
      disableoutline: !0,
      horizrailenabled: !0,
      railalign: "right",
      railvalign: "bottom",
      enabletranslate3d: !0,
      enablemousewheel: !0,
      enablekeyboard: !0,
      smoothscroll: !0,
      sensitiverail: !0,
      enablemouselockapi: !0,
      cursorfixedheight: !1,
      directionlockdeadzone: 6,
      hidecursordelay: 400,
      nativeparentscrolling: !0,
      enablescrollonselection: !0,
      overflowx: !0,
      overflowy: !0,
      cursordragspeed: 0.3,
      rtlmode: "auto",
      cursordragontouch: !1,
      oneaxismousemode: "auto",
      scriptpath: o(),
      preventmultitouchscrolling: !0,
      disablemutationobserver: !1,
      enableobserver: !0,
      scrollbarid: !1,
    },
    b = !1,
    y = function () {
      function e() {
        var e = ["grab", "-webkit-grab", "-moz-grab"];
        ((s.ischrome && !s.ischrome38) || s.isie) && (e = []);
        for (var o = 0, r = e.length; r > o; o++) {
          var i = e[o];
          if (((t.cursor = i), t.cursor == i)) return i;
        }
        return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize";
      }
      if (b) return b;
      var o = c.createElement("DIV"),
        t = o.style,
        r = navigator.userAgent,
        i = navigator.platform,
        s = {};
      return (
        (s.haspointerlock =
          "pointerLockElement" in c ||
          "webkitPointerLockElement" in c ||
          "mozPointerLockElement" in c),
        (s.isopera = "opera" in d),
        (s.isopera12 = s.isopera && "getUserMedia" in navigator),
        (s.isoperamini =
          "[object OperaMini]" === Object.prototype.toString.call(d.operamini)),
        (s.isie = "all" in c && "attachEvent" in o && !s.isopera),
        (s.isieold = s.isie && !("msInterpolationMode" in t)),
        (s.isie7 =
          s.isie &&
          !s.isieold &&
          (!("documentMode" in c) || 7 === c.documentMode)),
        (s.isie8 = s.isie && "documentMode" in c && 8 === c.documentMode),
        (s.isie9 = s.isie && "performance" in d && 9 === c.documentMode),
        (s.isie10 = s.isie && "performance" in d && 10 === c.documentMode),
        (s.isie11 = "msRequestFullscreen" in o && c.documentMode >= 11),
        (s.ismsedge = "msCredentials" in d),
        (s.ismozilla = "MozAppearance" in t),
        (s.iswebkit = !s.ismsedge && "WebkitAppearance" in t),
        (s.ischrome = s.iswebkit && "chrome" in d),
        (s.ischrome38 = s.ischrome && "touchAction" in t),
        (s.ischrome22 = !s.ischrome38 && s.ischrome && s.haspointerlock),
        (s.ischrome26 = !s.ischrome38 && s.ischrome && "transition" in t),
        (s.cantouch =
          "ontouchstart" in c.documentElement || "ontouchstart" in d),
        (s.hasw3ctouch =
          (d.PointerEvent || !1) &&
          (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)),
        (s.hasmstouch = !s.hasw3ctouch && (d.MSPointerEvent || !1)),
        (s.ismac = /^mac$/i.test(i)),
        (s.isios = s.cantouch && /iphone|ipad|ipod/i.test(i)),
        (s.isios4 = s.isios && !("seal" in Object)),
        (s.isios7 = s.isios && "webkitHidden" in c),
        (s.isios8 = s.isios && "hidden" in c),
        (s.isios10 = s.isios && d.Proxy),
        (s.isandroid = /android/i.test(r)),
        (s.haseventlistener = "addEventListener" in o),
        (s.trstyle = !1),
        (s.hastransform = !1),
        (s.hastranslate3d = !1),
        (s.transitionstyle = !1),
        (s.hastransition = !1),
        (s.transitionend = !1),
        (s.trstyle = "transform"),
        (s.hastransform =
          "transform" in t ||
          (function () {
            for (
              var e = [
                  "msTransform",
                  "webkitTransform",
                  "MozTransform",
                  "OTransform",
                ],
                o = 0,
                r = e.length;
              r > o;
              o++
            )
              if (void 0 !== t[e[o]]) {
                s.trstyle = e[o];
                break;
              }
            s.hastransform = !!s.trstyle;
          })()),
        s.hastransform &&
          ((t[s.trstyle] = "translate3d(1px,2px,3px)"),
          (s.hastranslate3d = /translate3d/.test(t[s.trstyle]))),
        (s.transitionstyle = "transition"),
        (s.prefixstyle = ""),
        (s.transitionend = "transitionend"),
        (s.hastransition =
          "transition" in t ||
          (function () {
            s.transitionend = !1;
            for (
              var e = [
                  "webkitTransition",
                  "msTransition",
                  "MozTransition",
                  "OTransition",
                  "OTransition",
                  "KhtmlTransition",
                ],
                o = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"],
                r = [
                  "webkitTransitionEnd",
                  "msTransitionEnd",
                  "transitionend",
                  "otransitionend",
                  "oTransitionEnd",
                  "KhtmlTransitionEnd",
                ],
                i = 0,
                n = e.length;
              n > i;
              i++
            )
              if (e[i] in t) {
                (s.transitionstyle = e[i]),
                  (s.prefixstyle = o[i]),
                  (s.transitionend = r[i]);
                break;
              }
            s.ischrome26 && (s.prefixstyle = o[1]),
              (s.hastransition = s.transitionstyle);
          })()),
        (s.cursorgrabvalue = e()),
        (s.hasmousecapture = "setCapture" in o),
        (s.hasMutationObserver = g !== !1),
        (o = null),
        (b = s),
        s
      );
    },
    x = function (e, o) {
      function t() {
        var e = T.doc.css(P.trstyle);
        return e && "matrix" == e.substr(0, 6)
          ? e
              .replace(/^.*\((.*)\)$/g, "$1")
              .replace(/px/g, "")
              .split(/, +/)
          : !1;
      }
      function f() {
        var e = T.win;
        if ("zIndex" in e) return e.zIndex();
        for (; e.length > 0; ) {
          if (9 == e[0].nodeType) return !1;
          var o = e.css("zIndex");
          if (!isNaN(o) && 0 !== o) return parseInt(o);
          e = e.parent();
        }
        return !1;
      }
      function b(e, o, t) {
        var r = e.css(o),
          i = parseFloat(r);
        if (isNaN(i)) {
          i = I[r] || 0;
          var s =
            3 == i
              ? t
                ? T.win.outerHeight() - T.win.innerHeight()
                : T.win.outerWidth() - T.win.innerWidth()
              : 1;
          return T.isie8 && i && (i += 1), s ? i : 0;
        }
        return i;
      }
      function x(e, o, t, r) {
        T._bind(
          e,
          o,
          function (r) {
            r = r || d.event;
            var i = {
              original: r,
              target: r.target || r.srcElement,
              type: "wheel",
              deltaMode: "MozMousePixelScroll" == r.type ? 0 : 1,
              deltaX: 0,
              deltaZ: 0,
              preventDefault: function () {
                return (
                  r.preventDefault ? r.preventDefault() : (r.returnValue = !1),
                  !1
                );
              },
              stopImmediatePropagation: function () {
                r.stopImmediatePropagation
                  ? r.stopImmediatePropagation()
                  : (r.cancelBubble = !0);
              },
            };
            return (
              "mousewheel" == o
                ? (r.wheelDeltaX && (i.deltaX = (-1 / 40) * r.wheelDeltaX),
                  r.wheelDeltaY && (i.deltaY = (-1 / 40) * r.wheelDeltaY),
                  !i.deltaY &&
                    !i.deltaX &&
                    (i.deltaY = (-1 / 40) * r.wheelDelta))
                : (i.deltaY = r.detail),
              t.call(e, i)
            );
          },
          r
        );
      }
      function z(e, o, t, r) {
        T.scrollrunning ||
          ((T.newscrolly = T.getScrollTop()),
          (T.newscrollx = T.getScrollLeft()),
          (A = v()));
        var i = v() - A;
        if (
          ((A = v()),
          i > 350 ? (q = 1) : (q += (2 - q) / 10),
          (e = (e * q) | 0),
          (o = (o * q) | 0),
          e)
        ) {
          if (r)
            if (0 > e) {
              if (T.getScrollLeft() >= T.page.maxw) return !0;
            } else if (T.getScrollLeft() <= 0) return !0;
          var s = e > 0 ? 1 : -1;
          D !== s &&
            (T.scrollmom && T.scrollmom.stop(),
            (T.newscrollx = T.getScrollLeft()),
            (D = s)),
            (T.lastdeltax -= e);
        }
        if (o) {
          var n = (function () {
            var e = T.getScrollTop();
            if (0 > o) {
              if (e >= T.page.maxh) return !0;
            } else if (0 >= e) return !0;
          })();
          if (n) {
            if (M.nativeparentscrolling && t && !T.ispage && !T.zoomactive)
              return !0;
            var l = T.view.h >> 1;
            T.newscrolly < -l
              ? ((T.newscrolly = -l), (o = -1))
              : T.newscrolly > T.page.maxh + l
              ? ((T.newscrolly = T.page.maxh + l), (o = 1))
              : (o = 0);
          }
          var a = o > 0 ? 1 : -1;
          X !== a &&
            (T.scrollmom && T.scrollmom.stop(),
            (T.newscrolly = T.getScrollTop()),
            (X = a)),
            (T.lastdeltay -= o);
        }
        (o || e) &&
          T.synched("relativexy", function () {
            var e = T.lastdeltay + T.newscrolly;
            T.lastdeltay = 0;
            var o = T.lastdeltax + T.newscrollx;
            (T.lastdeltax = 0), T.rail.drag || T.doScrollPos(o, e);
          });
      }
      function k(e, o, t) {
        var r, i;
        if (!t && j) return !0;
        if (
          (0 === e.deltaMode
            ? ((r = 0 | -(e.deltaX * (M.mousescrollstep / 54))),
              (i = 0 | -(e.deltaY * (M.mousescrollstep / 54))))
            : 1 === e.deltaMode &&
              ((r = 0 | -((e.deltaX * M.mousescrollstep * 50) / 80)),
              (i = 0 | -((e.deltaY * M.mousescrollstep * 50) / 80))),
          o && M.oneaxismousemode && 0 === r && i && ((r = i), (i = 0), t))
        ) {
          var s =
            0 > r ? T.getScrollLeft() >= T.page.maxw : T.getScrollLeft() <= 0;
          s && ((i = r), (r = 0));
        }
        T.isrtlmode && (r = -r);
        var n = z(r, i, t, !0);
        return n
          ? void (t && (j = !0))
          : ((j = !1), e.stopImmediatePropagation(), e.preventDefault());
      }
      var T = this;
      (this.version = "3.7.6"), (this.name = "nicescroll"), (this.me = o);
      var E = a("body"),
        M = (this.opt = { doc: E, win: !1 });
      if ((a.extend(M, w), (M.snapbackspeed = 80), e))
        for (var L in M) void 0 !== e[L] && (M[L] = e[L]);
      if (
        (M.disablemutationobserver && (g = !1),
        (this.doc = M.doc),
        (this.iddoc = this.doc && this.doc[0] ? this.doc[0].id || "" : ""),
        (this.ispage = /^BODY|HTML/.test(
          M.win ? M.win[0].nodeName : this.doc[0].nodeName
        )),
        (this.haswrapper = M.win !== !1),
        (this.win = M.win || (this.ispage ? u : this.doc)),
        (this.docscroll = this.ispage && !this.haswrapper ? u : this.win),
        (this.body = E),
        (this.viewport = !1),
        (this.isfixed = !1),
        (this.iframe = !1),
        (this.isiframe =
          "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName),
        (this.istextarea = "TEXTAREA" == this.win[0].nodeName),
        (this.forcescreen = !1),
        (this.canshowonmouseevent = "scroll" != M.autohidemode),
        (this.onmousedown = !1),
        (this.onmouseup = !1),
        (this.onmousemove = !1),
        (this.onmousewheel = !1),
        (this.onkeypress = !1),
        (this.ongesturezoom = !1),
        (this.onclick = !1),
        (this.onscrollstart = !1),
        (this.onscrollend = !1),
        (this.onscrollcancel = !1),
        (this.onzoomin = !1),
        (this.onzoomout = !1),
        (this.view = !1),
        (this.page = !1),
        (this.scroll = { x: 0, y: 0 }),
        (this.scrollratio = { x: 0, y: 0 }),
        (this.cursorheight = 20),
        (this.scrollvaluemax = 0),
        "auto" == M.rtlmode)
      ) {
        var C = this.win[0] == d ? this.body : this.win,
          N =
            C.css("writing-mode") ||
            C.css("-webkit-writing-mode") ||
            C.css("-ms-writing-mode") ||
            C.css("-moz-writing-mode");
        "horizontal-tb" == N || "lr-tb" == N || "" === N
          ? ((this.isrtlmode = "rtl" == C.css("direction")),
            (this.isvertical = !1))
          : ((this.isrtlmode =
              "vertical-rl" == N || "tb" == N || "tb-rl" == N || "rl-tb" == N),
            (this.isvertical =
              "vertical-rl" == N || "tb" == N || "tb-rl" == N));
      } else (this.isrtlmode = M.rtlmode === !0), (this.isvertical = !1);
      if (
        ((this.scrollrunning = !1),
        (this.scrollmom = !1),
        (this.observer = !1),
        (this.observerremover = !1),
        (this.observerbody = !1),
        M.scrollbarid !== !1)
      )
        this.id = M.scrollbarid;
      else
        do this.id = "ascrail" + n++;
        while (c.getElementById(this.id));
      (this.rail = !1),
        (this.cursor = !1),
        (this.cursorfreezed = !1),
        (this.selectiondrag = !1),
        (this.zoom = !1),
        (this.zoomactive = !1),
        (this.hasfocus = !1),
        (this.hasmousefocus = !1),
        (this.railslocked = !1),
        (this.locked = !1),
        (this.hidden = !1),
        (this.cursoractive = !0),
        (this.wheelprevented = !1),
        (this.overflowx = M.overflowx),
        (this.overflowy = M.overflowy),
        (this.nativescrollingarea = !1),
        (this.checkarea = 0),
        (this.events = []),
        (this.saved = {}),
        (this.delaylist = {}),
        (this.synclist = {}),
        (this.lastdeltax = 0),
        (this.lastdeltay = 0),
        (this.detected = y());
      var P = a.extend({}, this.detected);
      (this.canhwscroll = P.hastransform && M.hwacceleration),
        (this.ishwscroll = this.canhwscroll && T.haswrapper),
        this.isrtlmode
          ? this.isvertical
            ? (this.hasreversehr = !(P.iswebkit || P.isie || P.isie11))
            : (this.hasreversehr = !(
                P.iswebkit ||
                (P.isie && !P.isie10 && !P.isie11)
              ))
          : (this.hasreversehr = !1),
        (this.istouchcapable = !1),
        P.cantouch || (!P.hasw3ctouch && !P.hasmstouch)
          ? !P.cantouch ||
            P.isios ||
            P.isandroid ||
            (!P.iswebkit && !P.ismozilla) ||
            (this.istouchcapable = !0)
          : (this.istouchcapable = !0),
        M.enablemouselockapi ||
          ((P.hasmousecapture = !1), (P.haspointerlock = !1)),
        (this.debounced = function (e, o, t) {
          if (T) {
            var r = T.delaylist[e] || !1;
            r ||
              ((T.delaylist[e] = {
                h: p(function () {
                  T.delaylist[e].fn.call(T), (T.delaylist[e] = !1);
                }, t),
              }),
              o.call(T)),
              (T.delaylist[e].fn = o);
          }
        }),
        (this.synched = function (e, o) {
          T.synclist[e]
            ? (T.synclist[e] = o)
            : ((T.synclist[e] = o),
              p(function () {
                T &&
                  (T.synclist[e] && T.synclist[e].call(T),
                  (T.synclist[e] = null));
              }));
        }),
        (this.unsynched = function (e) {
          T.synclist[e] && (T.synclist[e] = !1);
        }),
        (this.css = function (e, o) {
          for (var t in o) T.saved.css.push([e, t, e.css(t)]), e.css(t, o[t]);
        }),
        (this.scrollTop = function (e) {
          return void 0 === e ? T.getScrollTop() : T.setScrollTop(e);
        }),
        (this.scrollLeft = function (e) {
          return void 0 === e ? T.getScrollLeft() : T.setScrollLeft(e);
        });
      var R = function (e, o, t, r, i, s, n) {
        (this.st = e),
          (this.ed = o),
          (this.spd = t),
          (this.p1 = r || 0),
          (this.p2 = i || 1),
          (this.p3 = s || 0),
          (this.p4 = n || 1),
          (this.ts = v()),
          (this.df = o - e);
      };
      if (
        ((R.prototype = {
          B2: function (e) {
            return 3 * (1 - e) * (1 - e) * e;
          },
          B3: function (e) {
            return 3 * (1 - e) * e * e;
          },
          B4: function (e) {
            return e * e * e;
          },
          getPos: function () {
            return (v() - this.ts) / this.spd;
          },
          getNow: function () {
            var e = (v() - this.ts) / this.spd,
              o = this.B2(e) + this.B3(e) + this.B4(e);
            return e >= 1 ? this.ed : (this.st + this.df * o) | 0;
          },
          update: function (e, o) {
            return (
              (this.st = this.getNow()),
              (this.ed = e),
              (this.spd = o),
              (this.ts = v()),
              (this.df = this.ed - this.st),
              this
            );
          },
        }),
        this.ishwscroll)
      ) {
        (this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" }),
          P.hastranslate3d &&
            P.isios &&
            this.doc.css("-webkit-backface-visibility", "hidden"),
          (this.getScrollTop = function (e) {
            if (!e) {
              var o = t();
              if (o) return 16 == o.length ? -o[13] : -o[5];
              if (T.timerscroll && T.timerscroll.bz)
                return T.timerscroll.bz.getNow();
            }
            return T.doc.translate.y;
          }),
          (this.getScrollLeft = function (e) {
            if (!e) {
              var o = t();
              if (o) return 16 == o.length ? -o[12] : -o[4];
              if (T.timerscroll && T.timerscroll.bh)
                return T.timerscroll.bh.getNow();
            }
            return T.doc.translate.x;
          }),
          (this.notifyScrollEvent = function (e) {
            var o = c.createEvent("UIEvents");
            o.initUIEvent("scroll", !1, !1, d, 1),
              (o.niceevent = !0),
              e.dispatchEvent(o);
          });
        var _ = this.isrtlmode ? 1 : -1;
        P.hastranslate3d && M.enabletranslate3d
          ? ((this.setScrollTop = function (e, o) {
              (T.doc.translate.y = e),
                (T.doc.translate.ty = -1 * e + "px"),
                T.doc.css(
                  P.trstyle,
                  "translate3d(" +
                    T.doc.translate.tx +
                    "," +
                    T.doc.translate.ty +
                    ",0)"
                ),
                o || T.notifyScrollEvent(T.win[0]);
            }),
            (this.setScrollLeft = function (e, o) {
              (T.doc.translate.x = e),
                (T.doc.translate.tx = e * _ + "px"),
                T.doc.css(
                  P.trstyle,
                  "translate3d(" +
                    T.doc.translate.tx +
                    "," +
                    T.doc.translate.ty +
                    ",0)"
                ),
                o || T.notifyScrollEvent(T.win[0]);
            }))
          : ((this.setScrollTop = function (e, o) {
              (T.doc.translate.y = e),
                (T.doc.translate.ty = -1 * e + "px"),
                T.doc.css(
                  P.trstyle,
                  "translate(" +
                    T.doc.translate.tx +
                    "," +
                    T.doc.translate.ty +
                    ")"
                ),
                o || T.notifyScrollEvent(T.win[0]);
            }),
            (this.setScrollLeft = function (e, o) {
              (T.doc.translate.x = e),
                (T.doc.translate.tx = e * _ + "px"),
                T.doc.css(
                  P.trstyle,
                  "translate(" +
                    T.doc.translate.tx +
                    "," +
                    T.doc.translate.ty +
                    ")"
                ),
                o || T.notifyScrollEvent(T.win[0]);
            }));
      } else
        (this.getScrollTop = function () {
          return T.docscroll.scrollTop();
        }),
          (this.setScrollTop = function (e) {
            T.docscroll.scrollTop(e);
          }),
          (this.getScrollLeft = function () {
            var e;
            return (e = T.hasreversehr
              ? T.detected.ismozilla
                ? T.page.maxw - Math.abs(T.docscroll.scrollLeft())
                : T.page.maxw - T.docscroll.scrollLeft()
              : T.docscroll.scrollLeft());
          }),
          (this.setScrollLeft = function (e) {
            return setTimeout(function () {
              return T
                ? (T.hasreversehr &&
                    (e = T.detected.ismozilla
                      ? -(T.page.maxw - e)
                      : T.page.maxw - e),
                  T.docscroll.scrollLeft(e))
                : void 0;
            }, 1);
          });
      (this.getTarget = function (e) {
        return e
          ? e.target
            ? e.target
            : e.srcElement
            ? e.srcElement
            : !1
          : !1;
      }),
        (this.hasParent = function (e, o) {
          if (!e) return !1;
          for (var t = e.target || e.srcElement || e || !1; t && t.id != o; )
            t = t.parentNode || !1;
          return t !== !1;
        });
      var I = { thin: 1, medium: 3, thick: 5 };
      (this.getDocumentScrollOffset = function () {
        return {
          top: d.pageYOffset || c.documentElement.scrollTop,
          left: d.pageXOffset || c.documentElement.scrollLeft,
        };
      }),
        (this.getOffset = function () {
          if (T.isfixed) {
            var e = T.win.offset(),
              o = T.getDocumentScrollOffset();
            return (e.top -= o.top), (e.left -= o.left), e;
          }
          var t = T.win.offset();
          if (!T.viewport) return t;
          var r = T.viewport.offset();
          return { top: t.top - r.top, left: t.left - r.left };
        }),
        (this.updateScrollBar = function (e) {
          var o, t;
          if (T.ishwscroll)
            T.rail.css({
              height:
                T.win.innerHeight() -
                (M.railpadding.top + M.railpadding.bottom),
            }),
              T.railh &&
                T.railh.css({
                  width:
                    T.win.innerWidth() -
                    (M.railpadding.left + M.railpadding.right),
                });
          else {
            var r = T.getOffset();
            if (
              ((o = {
                top: r.top,
                left: r.left - (M.railpadding.left + M.railpadding.right),
              }),
              (o.top += b(T.win, "border-top-width", !0)),
              (o.left += T.rail.align
                ? T.win.outerWidth() -
                  b(T.win, "border-right-width") -
                  T.rail.width
                : b(T.win, "border-left-width")),
              (t = M.railoffset),
              t && (t.top && (o.top += t.top), t.left && (o.left += t.left)),
              T.railslocked ||
                T.rail.css({
                  top: o.top,
                  left: o.left,
                  height:
                    (e ? e.h : T.win.innerHeight()) -
                    (M.railpadding.top + M.railpadding.bottom),
                }),
              T.zoom &&
                T.zoom.css({
                  top: o.top + 1,
                  left:
                    1 == T.rail.align ? o.left - 20 : o.left + T.rail.width + 4,
                }),
              T.railh && !T.railslocked)
            ) {
              (o = { top: r.top, left: r.left }),
                (t = M.railhoffset),
                t && (t.top && (o.top += t.top), t.left && (o.left += t.left));
              var i = T.railh.align
                  ? o.top +
                    b(T.win, "border-top-width", !0) +
                    T.win.innerHeight() -
                    T.railh.height
                  : o.top + b(T.win, "border-top-width", !0),
                s = o.left + b(T.win, "border-left-width");
              T.railh.css({
                top: i - (M.railpadding.top + M.railpadding.bottom),
                left: s,
                width: T.railh.width,
              });
            }
          }
        }),
        (this.doRailClick = function (e, o, t) {
          var r, i, s, n;
          T.railslocked ||
            (T.cancelEvent(e),
            "pageY" in e ||
              ((e.pageX = e.clientX + c.documentElement.scrollLeft),
              (e.pageY = e.clientY + c.documentElement.scrollTop)),
            o
              ? ((r = t ? T.doScrollLeft : T.doScrollTop),
                (s = t
                  ? (e.pageX - T.railh.offset().left - T.cursorwidth / 2) *
                    T.scrollratio.x
                  : (e.pageY - T.rail.offset().top - T.cursorheight / 2) *
                    T.scrollratio.y),
                T.unsynched("relativexy"),
                r(0 | s))
              : ((r = t ? T.doScrollLeftBy : T.doScrollBy),
                (s = t ? T.scroll.x : T.scroll.y),
                (n = t
                  ? e.pageX - T.railh.offset().left
                  : e.pageY - T.rail.offset().top),
                (i = t ? T.view.w : T.view.h),
                r(s >= n ? i : -i)));
        }),
        (T.newscrolly = T.newscrollx = 0),
        (T.hasanimationframe = "requestAnimationFrame" in d),
        (T.hascancelanimationframe = "cancelAnimationFrame" in d),
        (T.hasborderbox = !1),
        (this.init = function () {
          if (((T.saved.css = []), P.isoperamini)) return !0;
          if (P.isandroid && !("hidden" in c)) return !0;
          (M.emulatetouch = M.emulatetouch || M.touchbehavior),
            (T.hasborderbox =
              d.getComputedStyle &&
              "border-box" === d.getComputedStyle(c.body)["box-sizing"]);
          var e = { "overflow-y": "hidden" };
          if (
            ((P.isie11 || P.isie10) && (e["-ms-overflow-style"] = "none"),
            T.ishwscroll &&
              (this.doc.css(
                P.transitionstyle,
                P.prefixstyle + "transform 0ms ease-out"
              ),
              P.transitionend &&
                T.bind(T.doc, P.transitionend, T.onScrollTransitionEnd, !1)),
            (T.zindex = "auto"),
            T.ispage || "auto" != M.zindex
              ? (T.zindex = M.zindex)
              : (T.zindex = f() || "auto"),
            !T.ispage && "auto" != T.zindex && T.zindex > l && (l = T.zindex),
            T.isie &&
              0 === T.zindex &&
              "auto" == M.zindex &&
              (T.zindex = "auto"),
            !T.ispage || !P.isieold)
          ) {
            var o = T.docscroll;
            T.ispage && (o = T.haswrapper ? T.win : T.doc),
              T.css(o, e),
              T.ispage && (P.isie11 || P.isie) && T.css(a("html"), e),
              !P.isios ||
                T.ispage ||
                T.haswrapper ||
                T.css(E, { "-webkit-overflow-scrolling": "touch" });
            var t = a(c.createElement("div"));
            t.css({
              position: "relative",
              top: 0,
              float: "right",
              width: M.cursorwidth,
              height: 0,
              "background-color": M.cursorcolor,
              border: M.cursorborder,
              "background-clip": "padding-box",
              "-webkit-border-radius": M.cursorborderradius,
              "-moz-border-radius": M.cursorborderradius,
              "border-radius": M.cursorborderradius,
            }),
              t.addClass("nicescroll-cursors"),
              (T.cursor = t);
            var n = a(c.createElement("div"));
            n.attr("id", T.id),
              n.addClass("nicescroll-rails nicescroll-rails-vr");
            var h,
              p,
              m = ["left", "right", "top", "bottom"];
            for (var v in m)
              (p = m[v]),
                (h = M.railpadding[p] || 0),
                h && n.css("padding-" + p, h + "px");
            n.append(t),
              (n.width = Math.max(parseFloat(M.cursorwidth), t.outerWidth())),
              n.css({
                width: n.width + "px",
                zIndex: T.zindex,
                background: M.background,
                cursor: "default",
              }),
              (n.visibility = !0),
              (n.scrollable = !0),
              (n.align = "left" == M.railalign ? 0 : 1),
              (T.rail = n),
              (T.rail.drag = !1);
            var w = !1;
            !M.boxzoom ||
              T.ispage ||
              P.isieold ||
              ((w = c.createElement("div")),
              T.bind(w, "click", T.doZoom),
              T.bind(w, "mouseenter", function () {
                T.zoom.css("opacity", M.cursoropacitymax);
              }),
              T.bind(w, "mouseleave", function () {
                T.zoom.css("opacity", M.cursoropacitymin);
              }),
              (T.zoom = a(w)),
              T.zoom.css({
                cursor: "pointer",
                zIndex: T.zindex,
                backgroundImage: "url(" + M.scriptpath + "zoomico.png)",
                height: 18,
                width: 18,
                backgroundPosition: "0 0",
              }),
              M.dblclickzoom && T.bind(T.win, "dblclick", T.doZoom),
              P.cantouch &&
                M.gesturezoom &&
                ((T.ongesturezoom = function (e) {
                  return (
                    e.scale > 1.5 && T.doZoomIn(e),
                    e.scale < 0.8 && T.doZoomOut(e),
                    T.cancelEvent(e)
                  );
                }),
                T.bind(T.win, "gestureend", T.ongesturezoom))),
              (T.railh = !1);
            var b;
            if (
              (M.horizrailenabled &&
                (T.css(o, { overflowX: "hidden" }),
                (t = a(c.createElement("div"))),
                t.css({
                  position: "absolute",
                  top: 0,
                  height: M.cursorwidth,
                  width: 0,
                  backgroundColor: M.cursorcolor,
                  border: M.cursorborder,
                  backgroundClip: "padding-box",
                  "-webkit-border-radius": M.cursorborderradius,
                  "-moz-border-radius": M.cursorborderradius,
                  "border-radius": M.cursorborderradius,
                }),
                P.isieold && t.css("overflow", "hidden"),
                t.addClass("nicescroll-cursors"),
                (T.cursorh = t),
                (b = a(c.createElement("div"))),
                b.attr("id", T.id + "-hr"),
                b.addClass("nicescroll-rails nicescroll-rails-hr"),
                (b.height = Math.max(
                  parseFloat(M.cursorwidth),
                  t.outerHeight()
                )),
                b.css({
                  height: b.height + "px",
                  zIndex: T.zindex,
                  background: M.background,
                }),
                b.append(t),
                (b.visibility = !0),
                (b.scrollable = !0),
                (b.align = "top" == M.railvalign ? 0 : 1),
                (T.railh = b),
                (T.railh.drag = !1)),
              T.ispage)
            )
              n.css({ position: "fixed", top: 0, height: "100%" }),
                n.css(n.align ? { right: 0 } : { left: 0 }),
                T.body.append(n),
                T.railh &&
                  (b.css({ position: "fixed", left: 0, width: "100%" }),
                  b.css(b.align ? { bottom: 0 } : { top: 0 }),
                  T.body.append(b));
            else {
              if (T.ishwscroll) {
                "static" == T.win.css("position") &&
                  T.css(T.win, { position: "relative" });
                var y = "HTML" == T.win[0].nodeName ? T.body : T.win;
                a(y).scrollTop(0).scrollLeft(0),
                  T.zoom &&
                    (T.zoom.css({
                      position: "absolute",
                      top: 1,
                      right: 0,
                      "margin-right": n.width + 4,
                    }),
                    y.append(T.zoom)),
                  n.css({ position: "absolute", top: 0 }),
                  n.css(n.align ? { right: 0 } : { left: 0 }),
                  y.append(n),
                  b &&
                    (b.css({ position: "absolute", left: 0, bottom: 0 }),
                    b.css(b.align ? { bottom: 0 } : { top: 0 }),
                    y.append(b));
              } else {
                T.isfixed = "fixed" == T.win.css("position");
                var x = T.isfixed ? "fixed" : "absolute";
                T.isfixed || (T.viewport = T.getViewport(T.win[0])),
                  T.viewport &&
                    ((T.body = T.viewport),
                    /fixed|absolute/.test(T.viewport.css("position")) ||
                      T.css(T.viewport, { position: "relative" })),
                  n.css({ position: x }),
                  T.zoom && T.zoom.css({ position: x }),
                  T.updateScrollBar(),
                  T.body.append(n),
                  T.zoom && T.body.append(T.zoom),
                  T.railh && (b.css({ position: x }), T.body.append(b));
              }
              P.isios &&
                T.css(T.win, {
                  "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                  "-webkit-touch-callout": "none",
                }),
                M.disableoutline &&
                  (P.isie && T.win.attr("hideFocus", "true"),
                  P.iswebkit && T.win.css("outline", "none"));
            }
            if (
              (M.autohidemode === !1
                ? ((T.autohidedom = !1),
                  T.rail.css({ opacity: M.cursoropacitymax }),
                  T.railh && T.railh.css({ opacity: M.cursoropacitymax }))
                : M.autohidemode === !0 || "leave" === M.autohidemode
                ? ((T.autohidedom = a().add(T.rail)),
                  P.isie8 && (T.autohidedom = T.autohidedom.add(T.cursor)),
                  T.railh && (T.autohidedom = T.autohidedom.add(T.railh)),
                  T.railh &&
                    P.isie8 &&
                    (T.autohidedom = T.autohidedom.add(T.cursorh)))
                : "scroll" == M.autohidemode
                ? ((T.autohidedom = a().add(T.rail)),
                  T.railh && (T.autohidedom = T.autohidedom.add(T.railh)))
                : "cursor" == M.autohidemode
                ? ((T.autohidedom = a().add(T.cursor)),
                  T.railh && (T.autohidedom = T.autohidedom.add(T.cursorh)))
                : "hidden" == M.autohidemode &&
                  ((T.autohidedom = !1), T.hide(), (T.railslocked = !1)),
              P.cantouch || T.istouchcapable || M.emulatetouch || P.hasmstouch)
            ) {
              T.scrollmom = new S(T);
              (T.ontouchstart = function (e) {
                if (T.locked) return !1;
                if (
                  e.pointerType &&
                  ("mouse" === e.pointerType ||
                    e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                )
                  return !1;
                if (
                  ((T.hasmoving = !1),
                  T.scrollmom.timer &&
                    (T.triggerScrollEnd(), T.scrollmom.stop()),
                  !T.railslocked)
                ) {
                  var o = T.getTarget(e);
                  if (o) {
                    var t = /INPUT/i.test(o.nodeName) && /range/i.test(o.type);
                    if (t) return T.stopPropagation(e);
                  }
                  var r = "mousedown" === e.type;
                  if (
                    (!("clientX" in e) &&
                      "changedTouches" in e &&
                      ((e.clientX = e.changedTouches[0].clientX),
                      (e.clientY = e.changedTouches[0].clientY)),
                    T.forcescreen)
                  ) {
                    var i = e;
                    (e = { original: e.original ? e.original : e }),
                      (e.clientX = i.screenX),
                      (e.clientY = i.screenY);
                  }
                  if (
                    ((T.rail.drag = {
                      x: e.clientX,
                      y: e.clientY,
                      sx: T.scroll.x,
                      sy: T.scroll.y,
                      st: T.getScrollTop(),
                      sl: T.getScrollLeft(),
                      pt: 2,
                      dl: !1,
                      tg: o,
                    }),
                    T.ispage || !M.directionlockdeadzone)
                  )
                    T.rail.drag.dl = "f";
                  else {
                    var s = { w: u.width(), h: u.height() },
                      n = T.getContentSize(),
                      l = n.h - s.h,
                      c = n.w - s.w;
                    T.rail.scrollable && !T.railh.scrollable
                      ? (T.rail.drag.ck = l > 0 ? "v" : !1)
                      : !T.rail.scrollable && T.railh.scrollable
                      ? (T.rail.drag.ck = c > 0 ? "h" : !1)
                      : (T.rail.drag.ck = !1);
                  }
                  if (M.emulatetouch && T.isiframe && P.isie) {
                    var d = T.win.position();
                    (T.rail.drag.x += d.left), (T.rail.drag.y += d.top);
                  }
                  if (
                    ((T.hasmoving = !1),
                    (T.lastmouseup = !1),
                    T.scrollmom.reset(e.clientX, e.clientY),
                    o && r)
                  ) {
                    var h = /INPUT|SELECT|BUTTON|TEXTAREA/i.test(o.nodeName);
                    if (!h)
                      return (
                        P.hasmousecapture && o.setCapture(),
                        M.emulatetouch
                          ? (o.onclick &&
                              !o._onclick &&
                              ((o._onclick = o.onclick),
                              (o.onclick = function (e) {
                                return T.hasmoving
                                  ? !1
                                  : void o._onclick.call(this, e);
                              })),
                            T.cancelEvent(e))
                          : T.stopPropagation(e)
                      );
                    /SUBMIT|CANCEL|BUTTON/i.test(a(o).attr("type")) &&
                      (T.preventclick = { tg: o, click: !1 });
                  }
                }
              }),
                (T.ontouchend = function (e) {
                  if (!T.rail.drag) return !0;
                  if (2 == T.rail.drag.pt) {
                    if (
                      e.pointerType &&
                      ("mouse" === e.pointerType ||
                        e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                    )
                      return !1;
                    T.rail.drag = !1;
                    var o = "mouseup" === e.type;
                    if (
                      T.hasmoving &&
                      (T.scrollmom.doMomentum(),
                      (T.lastmouseup = !0),
                      T.hideCursor(),
                      P.hasmousecapture && c.releaseCapture(),
                      o)
                    )
                      return T.cancelEvent(e);
                  } else if (1 == T.rail.drag.pt) return T.onmouseup(e);
                });
              var z = M.emulatetouch && T.isiframe && !P.hasmousecapture,
                k = (0.3 * M.directionlockdeadzone) | 0;
              (T.ontouchmove = function (e, o) {
                if (!T.rail.drag) return !0;
                if (
                  e.targetTouches &&
                  M.preventmultitouchscrolling &&
                  e.targetTouches.length > 1
                )
                  return !0;
                if (
                  e.pointerType &&
                  ("mouse" === e.pointerType ||
                    e.pointerType === e.MSPOINTER_TYPE_MOUSE)
                )
                  return !0;
                if (2 == T.rail.drag.pt) {
                  "changedTouches" in e &&
                    ((e.clientX = e.changedTouches[0].clientX),
                    (e.clientY = e.changedTouches[0].clientY));
                  var t, r;
                  if (((r = t = 0), z && !o)) {
                    var i = T.win.position();
                    (r = -i.left), (t = -i.top);
                  }
                  var s = e.clientY + t,
                    n = s - T.rail.drag.y,
                    l = e.clientX + r,
                    a = l - T.rail.drag.x,
                    d = T.rail.drag.st - n;
                  if (T.ishwscroll && M.bouncescroll)
                    0 > d
                      ? (d = Math.round(d / 2))
                      : d > T.page.maxh &&
                        (d = T.page.maxh + Math.round((d - T.page.maxh) / 2));
                  else if (
                    (0 > d
                      ? ((d = 0), (s = 0))
                      : d > T.page.maxh && ((d = T.page.maxh), (s = 0)),
                    0 === s && !T.hasmoving)
                  )
                    return T.ispage || (T.rail.drag = !1), !0;
                  var u = T.getScrollLeft();
                  if (
                    (T.railh &&
                      T.railh.scrollable &&
                      ((u = T.isrtlmode
                        ? a - T.rail.drag.sl
                        : T.rail.drag.sl - a),
                      T.ishwscroll && M.bouncescroll
                        ? 0 > u
                          ? (u = Math.round(u / 2))
                          : u > T.page.maxw &&
                            (u =
                              T.page.maxw + Math.round((u - T.page.maxw) / 2))
                        : (0 > u && ((u = 0), (l = 0)),
                          u > T.page.maxw && ((u = T.page.maxw), (l = 0)))),
                    !T.hasmoving)
                  ) {
                    if (
                      T.rail.drag.y === e.clientY &&
                      T.rail.drag.x === e.clientX
                    )
                      return T.cancelEvent(e);
                    var h = Math.abs(n),
                      p = Math.abs(a),
                      m = M.directionlockdeadzone;
                    if (
                      (T.rail.drag.ck
                        ? "v" == T.rail.drag.ck
                          ? p > m && k >= h
                            ? (T.rail.drag = !1)
                            : h > m && (T.rail.drag.dl = "v")
                          : "h" == T.rail.drag.ck &&
                            (h > m && k >= p
                              ? (T.rail.drag = !1)
                              : p > m && (T.rail.drag.dl = "h"))
                        : h > m && p > m
                        ? (T.rail.drag.dl = "f")
                        : h > m
                        ? (T.rail.drag.dl = p > k ? "f" : "v")
                        : p > m && (T.rail.drag.dl = h > k ? "f" : "h"),
                      !T.rail.drag.dl)
                    )
                      return T.cancelEvent(e);
                    T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0),
                      (T.hasmoving = !0);
                  }
                  return (
                    T.preventclick &&
                      !T.preventclick.click &&
                      ((T.preventclick.click = T.preventclick.tg.onclick || !1),
                      (T.preventclick.tg.onclick = T.onpreventclick)),
                    T.rail.drag.dl &&
                      ("v" == T.rail.drag.dl
                        ? (u = T.rail.drag.sl)
                        : "h" == T.rail.drag.dl && (d = T.rail.drag.st)),
                    T.synched("touchmove", function () {
                      T.rail.drag &&
                        2 == T.rail.drag.pt &&
                        (T.prepareTransition && T.resetTransition(),
                        T.rail.scrollable && T.setScrollTop(d),
                        T.scrollmom.update(l, s),
                        T.railh && T.railh.scrollable
                          ? (T.setScrollLeft(u), T.showCursor(d, u))
                          : T.showCursor(d),
                        P.isie10 && c.selection.clear());
                    }),
                    T.cancelEvent(e)
                  );
                }
                return 1 == T.rail.drag.pt ? T.onmousemove(e) : void 0;
              }),
                (T.ontouchstartCursor = function (e, o) {
                  if (!T.rail.drag || 3 == T.rail.drag.pt) {
                    if (T.locked) return T.cancelEvent(e);
                    T.cancelScroll(),
                      (T.rail.drag = {
                        x: e.touches[0].clientX,
                        y: e.touches[0].clientY,
                        sx: T.scroll.x,
                        sy: T.scroll.y,
                        pt: 3,
                        hr: !!o,
                      });
                    var t = T.getTarget(e);
                    return (
                      !T.ispage && P.hasmousecapture && t.setCapture(),
                      T.isiframe &&
                        !P.hasmousecapture &&
                        ((T.saved.csspointerevents = T.doc.css(
                          "pointer-events"
                        )),
                        T.css(T.doc, { "pointer-events": "none" })),
                      T.cancelEvent(e)
                    );
                  }
                }),
                (T.ontouchendCursor = function (e) {
                  if (T.rail.drag) {
                    if (
                      (P.hasmousecapture && c.releaseCapture(),
                      T.isiframe &&
                        !P.hasmousecapture &&
                        T.doc.css("pointer-events", T.saved.csspointerevents),
                      3 != T.rail.drag.pt)
                    )
                      return;
                    return (T.rail.drag = !1), T.cancelEvent(e);
                  }
                }),
                (T.ontouchmoveCursor = function (e) {
                  if (T.rail.drag) {
                    if (3 != T.rail.drag.pt) return;
                    if (((T.cursorfreezed = !0), T.rail.drag.hr)) {
                      (T.scroll.x =
                        T.rail.drag.sx +
                        (e.touches[0].clientX - T.rail.drag.x)),
                        T.scroll.x < 0 && (T.scroll.x = 0);
                      var o = T.scrollvaluemaxw;
                      T.scroll.x > o && (T.scroll.x = o);
                    } else {
                      (T.scroll.y =
                        T.rail.drag.sy +
                        (e.touches[0].clientY - T.rail.drag.y)),
                        T.scroll.y < 0 && (T.scroll.y = 0);
                      var t = T.scrollvaluemax;
                      T.scroll.y > t && (T.scroll.y = t);
                    }
                    return (
                      T.synched("touchmove", function () {
                        T.rail.drag &&
                          3 == T.rail.drag.pt &&
                          (T.showCursor(),
                          T.rail.drag.hr
                            ? T.doScrollLeft(
                                Math.round(T.scroll.x * T.scrollratio.x),
                                M.cursordragspeed
                              )
                            : T.doScrollTop(
                                Math.round(T.scroll.y * T.scrollratio.y),
                                M.cursordragspeed
                              ));
                      }),
                      T.cancelEvent(e)
                    );
                  }
                });
            }
            if (
              ((T.onmousedown = function (e, o) {
                if (!T.rail.drag || 1 == T.rail.drag.pt) {
                  if (T.railslocked) return T.cancelEvent(e);
                  T.cancelScroll(),
                    (T.rail.drag = {
                      x: e.clientX,
                      y: e.clientY,
                      sx: T.scroll.x,
                      sy: T.scroll.y,
                      pt: 1,
                      hr: o || !1,
                    });
                  var t = T.getTarget(e);
                  return (
                    P.hasmousecapture && t.setCapture(),
                    T.isiframe &&
                      !P.hasmousecapture &&
                      ((T.saved.csspointerevents = T.doc.css("pointer-events")),
                      T.css(T.doc, { "pointer-events": "none" })),
                    (T.hasmoving = !1),
                    T.cancelEvent(e)
                  );
                }
              }),
              (T.onmouseup = function (e) {
                return T.rail.drag
                  ? 1 != T.rail.drag.pt
                    ? !0
                    : (P.hasmousecapture && c.releaseCapture(),
                      T.isiframe &&
                        !P.hasmousecapture &&
                        T.doc.css("pointer-events", T.saved.csspointerevents),
                      (T.rail.drag = !1),
                      (T.cursorfreezed = !1),
                      T.hasmoving && T.triggerScrollEnd(),
                      T.cancelEvent(e))
                  : void 0;
              }),
              (T.onmousemove = function (e) {
                if (T.rail.drag) {
                  if (1 !== T.rail.drag.pt) return;
                  if (P.ischrome && 0 === e.which) return T.onmouseup(e);
                  if (
                    ((T.cursorfreezed = !0),
                    T.hasmoving ||
                      T.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0),
                    (T.hasmoving = !0),
                    T.rail.drag.hr)
                  ) {
                    (T.scroll.x = T.rail.drag.sx + (e.clientX - T.rail.drag.x)),
                      T.scroll.x < 0 && (T.scroll.x = 0);
                    var o = T.scrollvaluemaxw;
                    T.scroll.x > o && (T.scroll.x = o);
                  } else {
                    (T.scroll.y = T.rail.drag.sy + (e.clientY - T.rail.drag.y)),
                      T.scroll.y < 0 && (T.scroll.y = 0);
                    var t = T.scrollvaluemax;
                    T.scroll.y > t && (T.scroll.y = t);
                  }
                  return (
                    T.synched("mousemove", function () {
                      T.cursorfreezed &&
                        (T.showCursor(),
                        T.rail.drag.hr
                          ? T.scrollLeft(
                              Math.round(T.scroll.x * T.scrollratio.x)
                            )
                          : T.scrollTop(
                              Math.round(T.scroll.y * T.scrollratio.y)
                            ));
                    }),
                    T.cancelEvent(e)
                  );
                }
                T.checkarea = 0;
              }),
              P.cantouch || M.emulatetouch)
            )
              (T.onpreventclick = function (e) {
                return T.preventclick
                  ? ((T.preventclick.tg.onclick = T.preventclick.click),
                    (T.preventclick = !1),
                    T.cancelEvent(e))
                  : void 0;
              }),
                (T.onclick = P.isios
                  ? !1
                  : function (e) {
                      return T.lastmouseup
                        ? ((T.lastmouseup = !1), T.cancelEvent(e))
                        : !0;
                    }),
                M.grabcursorenabled &&
                  P.cursorgrabvalue &&
                  (T.css(T.ispage ? T.doc : T.win, {
                    cursor: P.cursorgrabvalue,
                  }),
                  T.css(T.rail, { cursor: P.cursorgrabvalue }));
            else {
              var L = function (e) {
                if (T.selectiondrag) {
                  if (e) {
                    var o = T.win.outerHeight(),
                      t = e.pageY - T.selectiondrag.top;
                    t > 0 && o > t && (t = 0),
                      t >= o && (t -= o),
                      (T.selectiondrag.df = t);
                  }
                  if (0 !== T.selectiondrag.df) {
                    var r = 0 | -((2 * T.selectiondrag.df) / 6);
                    T.doScrollBy(r),
                      T.debounced(
                        "doselectionscroll",
                        function () {
                          L();
                        },
                        50
                      );
                  }
                }
              };
              "getSelection" in c
                ? (T.hasTextSelected = function () {
                    return c.getSelection().rangeCount > 0;
                  })
                : "selection" in c
                ? (T.hasTextSelected = function () {
                    return "None" != c.selection.type;
                  })
                : (T.hasTextSelected = function () {
                    return !1;
                  }),
                (T.onselectionstart = function () {
                  T.ispage || (T.selectiondrag = T.win.offset());
                }),
                (T.onselectionend = function () {
                  T.selectiondrag = !1;
                }),
                (T.onselectiondrag = function (e) {
                  T.selectiondrag &&
                    T.hasTextSelected() &&
                    T.debounced(
                      "selectionscroll",
                      function () {
                        L(e);
                      },
                      250
                    );
                });
            }
            if (
              (P.hasw3ctouch
                ? (T.css(T.ispage ? a("html") : T.win, {
                    "touch-action": "none",
                  }),
                  T.css(T.rail, { "touch-action": "none" }),
                  T.css(T.cursor, { "touch-action": "none" }),
                  T.bind(T.win, "pointerdown", T.ontouchstart),
                  T.bind(c, "pointerup", T.ontouchend),
                  T.delegate(c, "pointermove", T.ontouchmove))
                : P.hasmstouch
                ? (T.css(T.ispage ? a("html") : T.win, {
                    "-ms-touch-action": "none",
                  }),
                  T.css(T.rail, { "-ms-touch-action": "none" }),
                  T.css(T.cursor, { "-ms-touch-action": "none" }),
                  T.bind(T.win, "MSPointerDown", T.ontouchstart),
                  T.bind(c, "MSPointerUp", T.ontouchend),
                  T.delegate(c, "MSPointerMove", T.ontouchmove),
                  T.bind(T.cursor, "MSGestureHold", function (e) {
                    e.preventDefault();
                  }),
                  T.bind(T.cursor, "contextmenu", function (e) {
                    e.preventDefault();
                  }))
                : P.cantouch &&
                  (T.bind(T.win, "touchstart", T.ontouchstart, !1, !0),
                  T.bind(c, "touchend", T.ontouchend, !1, !0),
                  T.bind(c, "touchcancel", T.ontouchend, !1, !0),
                  T.delegate(c, "touchmove", T.ontouchmove, !1, !0)),
              M.emulatetouch &&
                (T.bind(T.win, "mousedown", T.ontouchstart, !1, !0),
                T.bind(c, "mouseup", T.ontouchend, !1, !0),
                T.bind(c, "mousemove", T.ontouchmove, !1, !0)),
              (M.cursordragontouch || (!P.cantouch && !M.emulatetouch)) &&
                (T.rail.css({ cursor: "default" }),
                T.railh && T.railh.css({ cursor: "default" }),
                T.jqbind(T.rail, "mouseenter", function () {
                  return T.ispage || T.win.is(":visible")
                    ? (T.canshowonmouseevent && T.showCursor(),
                      void (T.rail.active = !0))
                    : !1;
                }),
                T.jqbind(T.rail, "mouseleave", function () {
                  (T.rail.active = !1), T.rail.drag || T.hideCursor();
                }),
                M.sensitiverail &&
                  (T.bind(T.rail, "click", function (e) {
                    T.doRailClick(e, !1, !1);
                  }),
                  T.bind(T.rail, "dblclick", function (e) {
                    T.doRailClick(e, !0, !1);
                  }),
                  T.bind(T.cursor, "click", function (e) {
                    T.cancelEvent(e);
                  }),
                  T.bind(T.cursor, "dblclick", function (e) {
                    T.cancelEvent(e);
                  })),
                T.railh &&
                  (T.jqbind(T.railh, "mouseenter", function () {
                    return T.ispage || T.win.is(":visible")
                      ? (T.canshowonmouseevent && T.showCursor(),
                        void (T.rail.active = !0))
                      : !1;
                  }),
                  T.jqbind(T.railh, "mouseleave", function () {
                    (T.rail.active = !1), T.rail.drag || T.hideCursor();
                  }),
                  M.sensitiverail &&
                    (T.bind(T.railh, "click", function (e) {
                      T.doRailClick(e, !1, !0);
                    }),
                    T.bind(T.railh, "dblclick", function (e) {
                      T.doRailClick(e, !0, !0);
                    }),
                    T.bind(T.cursorh, "click", function (e) {
                      T.cancelEvent(e);
                    }),
                    T.bind(T.cursorh, "dblclick", function (e) {
                      T.cancelEvent(e);
                    })))),
              M.cursordragontouch &&
                (this.istouchcapable || P.cantouch) &&
                (T.bind(T.cursor, "touchstart", T.ontouchstartCursor),
                T.bind(T.cursor, "touchmove", T.ontouchmoveCursor),
                T.bind(T.cursor, "touchend", T.ontouchendCursor),
                T.cursorh &&
                  T.bind(T.cursorh, "touchstart", function (e) {
                    T.ontouchstartCursor(e, !0);
                  }),
                T.cursorh &&
                  T.bind(T.cursorh, "touchmove", T.ontouchmoveCursor),
                T.cursorh && T.bind(T.cursorh, "touchend", T.ontouchendCursor)),
              M.emulatetouch || P.isandroid || P.isios
                ? (T.bind(
                    P.hasmousecapture ? T.win : c,
                    "mouseup",
                    T.ontouchend
                  ),
                  T.onclick && T.bind(c, "click", T.onclick),
                  M.cursordragontouch
                    ? (T.bind(T.cursor, "mousedown", T.onmousedown),
                      T.bind(T.cursor, "mouseup", T.onmouseup),
                      T.cursorh &&
                        T.bind(T.cursorh, "mousedown", function (e) {
                          T.onmousedown(e, !0);
                        }),
                      T.cursorh && T.bind(T.cursorh, "mouseup", T.onmouseup))
                    : (T.bind(T.rail, "mousedown", function (e) {
                        e.preventDefault();
                      }),
                      T.railh &&
                        T.bind(T.railh, "mousedown", function (e) {
                          e.preventDefault();
                        })))
                : (T.bind(
                    P.hasmousecapture ? T.win : c,
                    "mouseup",
                    T.onmouseup
                  ),
                  T.bind(c, "mousemove", T.onmousemove),
                  T.onclick && T.bind(c, "click", T.onclick),
                  T.bind(T.cursor, "mousedown", T.onmousedown),
                  T.bind(T.cursor, "mouseup", T.onmouseup),
                  T.railh &&
                    (T.bind(T.cursorh, "mousedown", function (e) {
                      T.onmousedown(e, !0);
                    }),
                    T.bind(T.cursorh, "mouseup", T.onmouseup)),
                  !T.ispage &&
                    M.enablescrollonselection &&
                    (T.bind(T.win[0], "mousedown", T.onselectionstart),
                    T.bind(c, "mouseup", T.onselectionend),
                    T.bind(T.cursor, "mouseup", T.onselectionend),
                    T.cursorh && T.bind(T.cursorh, "mouseup", T.onselectionend),
                    T.bind(c, "mousemove", T.onselectiondrag)),
                  T.zoom &&
                    (T.jqbind(T.zoom, "mouseenter", function () {
                      T.canshowonmouseevent && T.showCursor(),
                        (T.rail.active = !0);
                    }),
                    T.jqbind(T.zoom, "mouseleave", function () {
                      (T.rail.active = !1), T.rail.drag || T.hideCursor();
                    }))),
              M.enablemousewheel &&
                (T.isiframe ||
                  T.mousewheel(P.isie && T.ispage ? c : T.win, T.onmousewheel),
                T.mousewheel(T.rail, T.onmousewheel),
                T.railh && T.mousewheel(T.railh, T.onmousewheelhr)),
              T.ispage ||
                P.cantouch ||
                /HTML|^BODY/.test(T.win[0].nodeName) ||
                (T.win.attr("tabindex") || T.win.attr({ tabindex: ++s }),
                T.bind(T.win, "focus", function (e) {
                  (r = T.getTarget(e).id || T.getTarget(e) || !1),
                    (T.hasfocus = !0),
                    T.canshowonmouseevent && T.noticeCursor();
                }),
                T.bind(T.win, "blur", function () {
                  (r = !1), (T.hasfocus = !1);
                }),
                T.bind(T.win, "mouseenter", function (e) {
                  (i = T.getTarget(e).id || T.getTarget(e) || !1),
                    (T.hasmousefocus = !0),
                    T.canshowonmouseevent && T.noticeCursor();
                }),
                T.bind(T.win, "mouseleave", function () {
                  (i = !1),
                    (T.hasmousefocus = !1),
                    T.rail.drag || T.hideCursor();
                })),
              (T.onkeypress = function (e) {
                if (T.railslocked && 0 === T.page.maxh) return !0;
                e = e || d.event;
                var o = T.getTarget(e);
                if (o && /INPUT|TEXTAREA|SELECT|OPTION/.test(o.nodeName)) {
                  var t = o.getAttribute("type") || o.type || !1;
                  if (!t || !/submit|button|cancel/i.tp) return !0;
                }
                if (a(o).attr("contenteditable")) return !0;
                if (
                  T.hasfocus ||
                  (T.hasmousefocus && !r) ||
                  (T.ispage && !r && !i)
                ) {
                  var s = e.keyCode;
                  if (T.railslocked && 27 != s) return T.cancelEvent(e);
                  var n = e.ctrlKey || !1,
                    l = e.shiftKey || !1,
                    c = !1;
                  switch (s) {
                    case 38:
                    case 63233:
                      T.doScrollBy(72), (c = !0);
                      break;
                    case 40:
                    case 63235:
                      T.doScrollBy(-72), (c = !0);
                      break;
                    case 37:
                    case 63232:
                      T.railh &&
                        (n ? T.doScrollLeft(0) : T.doScrollLeftBy(72),
                        (c = !0));
                      break;
                    case 39:
                    case 63234:
                      T.railh &&
                        (n
                          ? T.doScrollLeft(T.page.maxw)
                          : T.doScrollLeftBy(-72),
                        (c = !0));
                      break;
                    case 33:
                    case 63276:
                      T.doScrollBy(T.view.h), (c = !0);
                      break;
                    case 34:
                    case 63277:
                      T.doScrollBy(-T.view.h), (c = !0);
                      break;
                    case 36:
                    case 63273:
                      T.railh && n ? T.doScrollPos(0, 0) : T.doScrollTo(0),
                        (c = !0);
                      break;
                    case 35:
                    case 63275:
                      T.railh && n
                        ? T.doScrollPos(T.page.maxw, T.page.maxh)
                        : T.doScrollTo(T.page.maxh),
                        (c = !0);
                      break;
                    case 32:
                      M.spacebarenabled &&
                        (l ? T.doScrollBy(T.view.h) : T.doScrollBy(-T.view.h),
                        (c = !0));
                      break;
                    case 27:
                      T.zoomactive && (T.doZoom(), (c = !0));
                  }
                  if (c) return T.cancelEvent(e);
                }
              }),
              M.enablekeyboard &&
                T.bind(
                  c,
                  P.isopera && !P.isopera12 ? "keypress" : "keydown",
                  T.onkeypress
                ),
              T.bind(c, "keydown", function (e) {
                var o = e.ctrlKey || !1;
                o && (T.wheelprevented = !0);
              }),
              T.bind(c, "keyup", function (e) {
                var o = e.ctrlKey || !1;
                o || (T.wheelprevented = !1);
              }),
              T.bind(d, "blur", function () {
                T.wheelprevented = !1;
              }),
              T.bind(d, "resize", T.onscreenresize),
              T.bind(d, "orientationchange", T.onscreenresize),
              T.bind(d, "load", T.lazyResize),
              P.ischrome && !T.ispage && !T.haswrapper)
            ) {
              var C = T.win.attr("style"),
                N = parseFloat(T.win.css("width")) + 1;
              T.win.css("width", N),
                T.synched("chromefix", function () {
                  T.win.attr("style", C);
                });
            }
            if (
              ((T.onAttributeChange = function () {
                T.lazyResize(T.isieold ? 250 : 30);
              }),
              M.enableobserver &&
                (T.isie11 ||
                  g === !1 ||
                  ((T.observerbody = new g(function (e) {
                    return (
                      e.forEach(function (e) {
                        return "attributes" == e.type
                          ? E.hasClass("modal-open") &&
                            E.hasClass("modal-dialog") &&
                            !a.contains(a(".modal-dialog")[0], T.doc[0])
                            ? T.hide()
                            : T.show()
                          : void 0;
                      }),
                      T.me.clientWidth != T.page.width ||
                      T.me.clientHeight != T.page.height
                        ? T.lazyResize(30)
                        : void 0
                    );
                  })),
                  T.observerbody.observe(c.body, {
                    childList: !0,
                    subtree: !0,
                    characterData: !1,
                    attributes: !0,
                    attributeFilter: ["class"],
                  })),
                !T.ispage && !T.haswrapper))
            ) {
              var R = T.win[0];
              g !== !1
                ? ((T.observer = new g(function (e) {
                    e.forEach(T.onAttributeChange);
                  })),
                  T.observer.observe(R, {
                    childList: !0,
                    characterData: !1,
                    attributes: !0,
                    subtree: !1,
                  }),
                  (T.observerremover = new g(function (e) {
                    e.forEach(function (e) {
                      if (e.removedNodes.length > 0)
                        for (var o in e.removedNodes)
                          if (T && e.removedNodes[o] === R) return T.remove();
                    });
                  })),
                  T.observerremover.observe(R.parentNode, {
                    childList: !0,
                    characterData: !1,
                    attributes: !1,
                    subtree: !1,
                  }))
                : (T.bind(
                    R,
                    P.isie && !P.isie9 ? "propertychange" : "DOMAttrModified",
                    T.onAttributeChange
                  ),
                  P.isie9 &&
                    R.attachEvent("onpropertychange", T.onAttributeChange),
                  T.bind(R, "DOMNodeRemoved", function (e) {
                    e.target === R && T.remove();
                  }));
            }
            !T.ispage && M.boxzoom && T.bind(d, "resize", T.resizeZoom),
              T.istextarea &&
                (T.bind(T.win, "keydown", T.lazyResize),
                T.bind(T.win, "mouseup", T.lazyResize)),
              T.lazyResize(30);
          }
          if ("IFRAME" == this.doc[0].nodeName) {
            var _ = function () {
              T.iframexd = !1;
              var o;
              try {
                o =
                  "contentDocument" in this
                    ? this.contentDocument
                    : this.contentWindow._doc;
                o.domain;
              } catch (t) {
                (T.iframexd = !0), (o = !1);
              }
              if (T.iframexd)
                return (
                  "console" in d &&
                    console.log("NiceScroll error: policy restriced iframe"),
                  !0
                );
              if (
                ((T.forcescreen = !0),
                T.isiframe &&
                  ((T.iframe = {
                    doc: a(o),
                    html: T.doc.contents().find("html")[0],
                    body: T.doc.contents().find("body")[0],
                  }),
                  (T.getContentSize = function () {
                    return {
                      w: Math.max(
                        T.iframe.html.scrollWidth,
                        T.iframe.body.scrollWidth
                      ),
                      h: Math.max(
                        T.iframe.html.scrollHeight,
                        T.iframe.body.scrollHeight
                      ),
                    };
                  }),
                  (T.docscroll = a(T.iframe.body))),
                !P.isios && M.iframeautoresize && !T.isiframe)
              ) {
                T.win.scrollTop(0), T.doc.height("");
                var r = Math.max(
                  o.getElementsByTagName("html")[0].scrollHeight,
                  o.body.scrollHeight
                );
                T.doc.height(r);
              }
              T.lazyResize(30),
                T.css(a(T.iframe.body), e),
                P.isios &&
                  T.haswrapper &&
                  T.css(a(o.body), {
                    "-webkit-transform": "translate3d(0,0,0)",
                  }),
                "contentWindow" in this
                  ? T.bind(this.contentWindow, "scroll", T.onscroll)
                  : T.bind(o, "scroll", T.onscroll),
                M.enablemousewheel && T.mousewheel(o, T.onmousewheel),
                M.enablekeyboard &&
                  T.bind(o, P.isopera ? "keypress" : "keydown", T.onkeypress),
                P.cantouch
                  ? (T.bind(o, "touchstart", T.ontouchstart),
                    T.bind(o, "touchmove", T.ontouchmove))
                  : M.emulatetouch &&
                    (T.bind(o, "mousedown", T.ontouchstart),
                    T.bind(o, "mousemove", function (e) {
                      return T.ontouchmove(e, !0);
                    }),
                    M.grabcursorenabled &&
                      P.cursorgrabvalue &&
                      T.css(a(o.body), { cursor: P.cursorgrabvalue })),
                T.bind(o, "mouseup", T.ontouchend),
                T.zoom &&
                  (M.dblclickzoom && T.bind(o, "dblclick", T.doZoom),
                  T.ongesturezoom && T.bind(o, "gestureend", T.ongesturezoom));
            };
            this.doc[0].readyState &&
              "complete" === this.doc[0].readyState &&
              setTimeout(function () {
                _.call(T.doc[0], !1);
              }, 250),
              T.bind(this.doc, "load", _);
          }
        }),
        (this.showCursor = function (e, o) {
          if (
            (T.cursortimeout &&
              (clearTimeout(T.cursortimeout), (T.cursortimeout = 0)),
            T.rail)
          ) {
            if (
              (T.autohidedom &&
                (T.autohidedom.stop().css({ opacity: M.cursoropacitymax }),
                (T.cursoractive = !0)),
              (T.rail.drag && 1 == T.rail.drag.pt) ||
                (void 0 !== e &&
                  e !== !1 &&
                  (T.scroll.y = (e / T.scrollratio.y) | 0),
                void 0 !== o && (T.scroll.x = (o / T.scrollratio.x) | 0)),
              T.cursor.css({ height: T.cursorheight, top: T.scroll.y }),
              T.cursorh)
            ) {
              var t = T.hasreversehr
                ? T.scrollvaluemaxw - T.scroll.x
                : T.scroll.x;
              T.cursorh.css({
                width: T.cursorwidth,
                left: !T.rail.align && T.rail.visibility ? t + T.rail.width : t,
              }),
                (T.cursoractive = !0);
            }
            T.zoom && T.zoom.stop().css({ opacity: M.cursoropacitymax });
          }
        }),
        (this.hideCursor = function (e) {
          T.cursortimeout ||
            (T.rail &&
              T.autohidedom &&
              ((T.hasmousefocus && "leave" === M.autohidemode) ||
                (T.cursortimeout = setTimeout(function () {
                  (T.rail.active && T.showonmouseevent) ||
                    (T.autohidedom
                      .stop()
                      .animate({ opacity: M.cursoropacitymin }),
                    T.zoom &&
                      T.zoom.stop().animate({ opacity: M.cursoropacitymin }),
                    (T.cursoractive = !1)),
                    (T.cursortimeout = 0);
                }, e || M.hidecursordelay))));
        }),
        (this.noticeCursor = function (e, o, t) {
          T.showCursor(o, t), T.rail.active || T.hideCursor(e);
        }),
        (this.getContentSize = T.ispage
          ? function () {
              return {
                w: Math.max(c.body.scrollWidth, c.documentElement.scrollWidth),
                h: Math.max(
                  c.body.scrollHeight,
                  c.documentElement.scrollHeight
                ),
              };
            }
          : T.haswrapper
          ? function () {
              return { w: T.doc[0].offsetWidth, h: T.doc[0].offsetHeight };
            }
          : function () {
              return {
                w: T.docscroll[0].scrollWidth,
                h: T.docscroll[0].scrollHeight,
              };
            }),
        (this.onResize = function (e, o) {
          if (!T || !T.win) return !1;
          var t = T.page.maxh,
            r = T.page.maxw,
            i = T.view.h,
            s = T.view.w;
          if (
            ((T.view = {
              w: T.ispage ? T.win.width() : T.win[0].clientWidth,
              h: T.ispage ? T.win.height() : T.win[0].clientHeight,
            }),
            (T.page = o ? o : T.getContentSize()),
            (T.page.maxh = Math.max(0, T.page.h - T.view.h)),
            (T.page.maxw = Math.max(0, T.page.w - T.view.w)),
            T.page.maxh == t &&
              T.page.maxw == r &&
              T.view.w == s &&
              T.view.h == i)
          ) {
            if (T.ispage) return T;
            var n = T.win.offset();
            if (T.lastposition) {
              var l = T.lastposition;
              if (l.top == n.top && l.left == n.left) return T;
            }
            T.lastposition = n;
          }
          if (
            (0 === T.page.maxh
              ? (T.hideRail(),
                (T.scrollvaluemax = 0),
                (T.scroll.y = 0),
                (T.scrollratio.y = 0),
                (T.cursorheight = 0),
                T.setScrollTop(0),
                T.rail && (T.rail.scrollable = !1))
              : ((T.page.maxh -= M.railpadding.top + M.railpadding.bottom),
                (T.rail.scrollable = !0)),
            0 === T.page.maxw
              ? (T.hideRailHr(),
                (T.scrollvaluemaxw = 0),
                (T.scroll.x = 0),
                (T.scrollratio.x = 0),
                (T.cursorwidth = 0),
                T.setScrollLeft(0),
                T.railh && (T.railh.scrollable = !1))
              : ((T.page.maxw -= M.railpadding.left + M.railpadding.right),
                T.railh && (T.railh.scrollable = M.horizrailenabled)),
            (T.railslocked =
              T.locked || (0 === T.page.maxh && 0 === T.page.maxw)),
            T.railslocked)
          )
            return T.ispage || T.updateScrollBar(T.view), !1;
          T.hidden ||
            (T.rail.visibility || T.showRail(),
            T.railh && !T.railh.visibility && T.showRailHr()),
            T.istextarea &&
              T.win.css("resize") &&
              "none" != T.win.css("resize") &&
              (T.view.h -= 20),
            (T.cursorheight = Math.min(
              T.view.h,
              Math.round(T.view.h * (T.view.h / T.page.h))
            )),
            (T.cursorheight = M.cursorfixedheight
              ? M.cursorfixedheight
              : Math.max(M.cursorminheight, T.cursorheight)),
            (T.cursorwidth = Math.min(
              T.view.w,
              Math.round(T.view.w * (T.view.w / T.page.w))
            )),
            (T.cursorwidth = M.cursorfixedheight
              ? M.cursorfixedheight
              : Math.max(M.cursorminheight, T.cursorwidth)),
            (T.scrollvaluemax =
              T.view.h -
              T.cursorheight -
              (M.railpadding.top + M.railpadding.bottom)),
            T.hasborderbox ||
              (T.scrollvaluemax -=
                T.cursor[0].offsetHeight - T.cursor[0].clientHeight),
            T.railh &&
              ((T.railh.width = T.page.maxh > 0 ? T.rail.width : T.view.w),
              (T.scrollvaluemaxw =
                T.railh.width -
                T.cursorwidth -
                (M.railpadding.left + M.railpadding.right))),
            T.ispage || T.updateScrollBar(T.view),
            (T.scrollratio = {
              x: T.page.maxw / T.scrollvaluemaxw,
              y: T.page.maxh / T.scrollvaluemax,
            });
          var a = T.getScrollTop();
          return (
            a > T.page.maxh
              ? T.doScrollTop(T.page.maxh)
              : ((T.scroll.y = (T.getScrollTop() / T.scrollratio.y) | 0),
                (T.scroll.x = (T.getScrollLeft() / T.scrollratio.x) | 0),
                T.cursoractive && T.noticeCursor()),
            T.scroll.y &&
              0 === T.getScrollTop() &&
              T.doScrollTo((T.scroll.y * T.scrollratio.y) | 0),
            T
          );
        }),
        (this.resize = T.onResize);
      var O = 0;
      (this.onscreenresize = function () {
        clearTimeout(O);
        var e = !T.ispage && !T.haswrapper;
        e && T.hideRails(),
          (O = setTimeout(function () {
            T && (e && T.showRails(), T.resize()), (O = 0);
          }, 120));
      }),
        (this.lazyResize = function (e) {
          return (
            clearTimeout(O),
            (e = isNaN(e) ? 240 : e),
            (O = setTimeout(function () {
              T && T.resize(), (O = 0);
            }, e)),
            T
          );
        }),
        (this.jqbind = function (e, o, t) {
          T.events.push({ e: e, n: o, f: t, q: !0 }), a(e).on(o, t);
        }),
        (this.mousewheel = function (e, o, t) {
          var r = "jquery" in e ? e[0] : e;
          if ("onwheel" in c.createElement("div"))
            T._bind(r, "wheel", o, t || !1);
          else {
            var i = void 0 !== c.onmousewheel ? "mousewheel" : "DOMMouseScroll";
            x(r, i, o, t || !1),
              "DOMMouseScroll" == i && x(r, "MozMousePixelScroll", o, t || !1);
          }
        });
      var Y = !1;
      if (P.haseventlistener) {
        try {
          var H = Object.defineProperty({}, "passive", {
            get: function () {
              Y = !0;
            },
          });
          d.addEventListener("test", null, H);
        } catch (B) {}
        (this.stopPropagation = function (e) {
          return e
            ? ((e = e.original ? e.original : e), e.stopPropagation(), !1)
            : !1;
        }),
          (this.cancelEvent = function (e) {
            return (
              e.cancelable && e.preventDefault(),
              e.stopImmediatePropagation(),
              e.preventManipulation && e.preventManipulation(),
              !1
            );
          });
      } else
        (Event.prototype.preventDefault = function () {
          this.returnValue = !1;
        }),
          (Event.prototype.stopPropagation = function () {
            this.cancelBubble = !0;
          }),
          (d.constructor.prototype.addEventListener = c.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (
            e,
            o
          ) {
            this.attachEvent("on" + e, o);
          }),
          (d.constructor.prototype.removeEventListener = c.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (
            e,
            o
          ) {
            this.detachEvent("on" + e, o);
          }),
          (this.cancelEvent = function (e) {
            return (
              (e = e || d.event),
              e &&
                ((e.cancelBubble = !0), (e.cancel = !0), (e.returnValue = !1)),
              !1
            );
          }),
          (this.stopPropagation = function (e) {
            return (e = e || d.event), e && (e.cancelBubble = !0), !1;
          });
      (this.delegate = function (e, o, t, r, i) {
        var s = h[o] || !1;
        s ||
          ((s = {
            a: [],
            l: [],
            f: function (e) {
              for (var o = s.l, t = o.length - 1, r = !1, i = t; i >= 0; i--)
                if (((r = o[i].call(e.target, e)), r === !1)) return !1;
              return r;
            },
          }),
          T.bind(e, o, s.f, r, i),
          (h[o] = s)),
          T.ispage
            ? ((s.a = [T.id].concat(s.a)), (s.l = [t].concat(s.l)))
            : (s.a.push(T.id), s.l.push(t));
      }),
        (this.undelegate = function (e, o) {
          var t = h[o] || !1;
          if (t && t.l)
            for (var r = 0, i = t.l.length; i > r; r++)
              t.a[r] === T.id &&
                (t.a.splice(r),
                t.l.splice(r),
                0 === t.a.length && (T._unbind(e, o, t.l.f), (h[o] = null)));
        }),
        (this.bind = function (e, o, t, r, i) {
          var s = "jquery" in e ? e[0] : e;
          T._bind(s, o, t, r || !1, i || !1);
        }),
        (this._bind = function (e, o, t, r, i) {
          T.events.push({ e: e, n: o, f: t, b: r, q: !1 }),
            Y && i
              ? e.addEventListener(o, t, { passive: !1, capture: r })
              : e.addEventListener(o, t, r || !1);
        }),
        (this._unbind = function (e, o, t, r) {
          h[o] ? T.undelegate(e, o, t, r) : e.removeEventListener(o, t, r);
        }),
        (this.unbindAll = function () {
          for (var e = 0; e < T.events.length; e++) {
            var o = T.events[e];
            o.q ? o.e.unbind(o.n, o.f) : T._unbind(o.e, o.n, o.f, o.b);
          }
        }),
        (this.showRails = function () {
          return T.showRail().showRailHr();
        }),
        (this.showRail = function () {
          return (
            0 === T.page.maxh ||
              (!T.ispage && "none" == T.win.css("display")) ||
              ((T.rail.visibility = !0), T.rail.css("display", "block")),
            T
          );
        }),
        (this.showRailHr = function () {
          return (
            T.railh &&
              (0 === T.page.maxw ||
                (!T.ispage && "none" == T.win.css("display")) ||
                ((T.railh.visibility = !0), T.railh.css("display", "block"))),
            T
          );
        }),
        (this.hideRails = function () {
          return T.hideRail().hideRailHr();
        }),
        (this.hideRail = function () {
          return (T.rail.visibility = !1), T.rail.css("display", "none"), T;
        }),
        (this.hideRailHr = function () {
          return (
            T.railh &&
              ((T.railh.visibility = !1), T.railh.css("display", "none")),
            T
          );
        }),
        (this.show = function () {
          return (T.hidden = !1), (T.railslocked = !1), T.showRails();
        }),
        (this.hide = function () {
          return (T.hidden = !0), (T.railslocked = !0), T.hideRails();
        }),
        (this.toggle = function () {
          return T.hidden ? T.show() : T.hide();
        }),
        (this.remove = function () {
          T.stop(), T.cursortimeout && clearTimeout(T.cursortimeout);
          for (var e in T.delaylist) T.delaylist[e] && m(T.delaylist[e].h);
          T.doZoomOut(),
            T.unbindAll(),
            P.isie9 &&
              T.win[0].detachEvent("onpropertychange", T.onAttributeChange),
            T.observer !== !1 && T.observer.disconnect(),
            T.observerremover !== !1 && T.observerremover.disconnect(),
            T.observerbody !== !1 && T.observerbody.disconnect(),
            (T.events = null),
            T.cursor && T.cursor.remove(),
            T.cursorh && T.cursorh.remove(),
            T.rail && T.rail.remove(),
            T.railh && T.railh.remove(),
            T.zoom && T.zoom.remove();
          for (var o = 0; o < T.saved.css.length; o++) {
            var t = T.saved.css[o];
            t[0].css(t[1], void 0 === t[2] ? "" : t[2]);
          }
          (T.saved = !1), T.me.data("__nicescroll", "");
          var r = a.nicescroll;
          r.each(function (e) {
            if (this && this.id === T.id) {
              delete r[e];
              for (var o = ++e; o < r.length; o++, e++) r[e] = r[o];
              r.length--, r.length && delete r[r.length];
            }
          });
          for (var i in T) (T[i] = null), delete T[i];
          T = null;
        }),
        (this.scrollstart = function (e) {
          return (this.onscrollstart = e), T;
        }),
        (this.scrollend = function (e) {
          return (this.onscrollend = e), T;
        }),
        (this.scrollcancel = function (e) {
          return (this.onscrollcancel = e), T;
        }),
        (this.zoomin = function (e) {
          return (this.onzoomin = e), T;
        }),
        (this.zoomout = function (e) {
          return (this.onzoomout = e), T;
        }),
        (this.isScrollable = function (e) {
          var o = e.target ? e.target : e;
          if ("OPTION" == o.nodeName) return !0;
          for (
            ;
            o &&
            1 == o.nodeType &&
            o !== this.me[0] &&
            !/^BODY|HTML/.test(o.nodeName);

          ) {
            var t = a(o),
              r =
                t.css("overflowY") ||
                t.css("overflowX") ||
                t.css("overflow") ||
                "";
            if (/scroll|auto/.test(r)) return o.clientHeight != o.scrollHeight;
            o = o.parentNode ? o.parentNode : !1;
          }
          return !1;
        }),
        (this.getViewport = function (e) {
          for (
            var o = e && e.parentNode ? e.parentNode : !1;
            o && 1 == o.nodeType && !/^BODY|HTML/.test(o.nodeName);

          ) {
            var t = a(o);
            if (/fixed|absolute/.test(t.css("position"))) return t;
            var r =
              t.css("overflowY") ||
              t.css("overflowX") ||
              t.css("overflow") ||
              "";
            if (/scroll|auto/.test(r) && o.clientHeight != o.scrollHeight)
              return t;
            if (t.getNiceScroll().length > 0) return t;
            o = o.parentNode ? o.parentNode : !1;
          }
          return !1;
        }),
        (this.triggerScrollStart = function (e, o, t, r, i) {
          if (T.onscrollstart) {
            var s = {
              type: "scrollstart",
              current: { x: e, y: o },
              request: { x: t, y: r },
              end: { x: T.newscrollx, y: T.newscrolly },
              speed: i,
            };
            T.onscrollstart.call(T, s);
          }
        }),
        (this.triggerScrollEnd = function () {
          if (T.onscrollend) {
            var e = T.getScrollLeft(),
              o = T.getScrollTop(),
              t = {
                type: "scrollend",
                current: { x: e, y: o },
                end: { x: e, y: o },
              };
            T.onscrollend.call(T, t);
          }
        });
      var X = 0,
        D = 0,
        A = 0,
        q = 1,
        j = !1;
      if (
        ((this.onmousewheel = function (e) {
          if (T.wheelprevented || T.locked) return !1;
          if (T.railslocked)
            return T.debounced("checkunlock", T.resize, 250), !1;
          if (T.rail.drag) return T.cancelEvent(e);
          if (
            ("auto" === M.oneaxismousemode &&
              0 !== e.deltaX &&
              (M.oneaxismousemode = !1),
            M.oneaxismousemode && 0 === e.deltaX && !T.rail.scrollable)
          )
            return T.railh && T.railh.scrollable ? T.onmousewheelhr(e) : !0;
          var o = v(),
            t = !1;
          if (
            (M.preservenativescrolling &&
              T.checkarea + 600 < o &&
              ((T.nativescrollingarea = T.isScrollable(e)), (t = !0)),
            (T.checkarea = o),
            T.nativescrollingarea)
          )
            return !0;
          var r = k(e, !1, t);
          return r && (T.checkarea = 0), r;
        }),
        (this.onmousewheelhr = function (e) {
          if (!T.wheelprevented) {
            if (T.railslocked || !T.railh.scrollable) return !0;
            if (T.rail.drag) return T.cancelEvent(e);
            var o = v(),
              t = !1;
            return (
              M.preservenativescrolling &&
                T.checkarea + 600 < o &&
                ((T.nativescrollingarea = T.isScrollable(e)), (t = !0)),
              (T.checkarea = o),
              T.nativescrollingarea
                ? !0
                : T.railslocked
                ? T.cancelEvent(e)
                : k(e, !0, t)
            );
          }
        }),
        (this.stop = function () {
          return (
            T.cancelScroll(),
            T.scrollmon && T.scrollmon.stop(),
            (T.cursorfreezed = !1),
            (T.scroll.y = Math.round(T.getScrollTop() * (1 / T.scrollratio.y))),
            T.noticeCursor(),
            T
          );
        }),
        (this.getTransitionSpeed = function (e) {
          return (80 + (e / 72) * M.scrollspeed) | 0;
        }),
        M.smoothscroll)
      )
        if (
          T.ishwscroll &&
          P.hastransition &&
          M.usetransition &&
          M.smoothscroll
        ) {
          var F = "";
          (this.resetTransition = function () {
            (F = ""), T.doc.css(P.prefixstyle + "transition-duration", "0ms");
          }),
            (this.prepareTransition = function (e, o) {
              var t = o ? e : T.getTransitionSpeed(e),
                r = t + "ms";
              return (
                F !== r &&
                  ((F = r),
                  T.doc.css(P.prefixstyle + "transition-duration", r)),
                t
              );
            }),
            (this.doScrollLeft = function (e, o) {
              var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
              T.doScrollPos(e, t, o);
            }),
            (this.doScrollTop = function (e, o) {
              var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
              T.doScrollPos(t, e, o);
            }),
            (this.cursorupdate = {
              running: !1,
              start: function () {
                var e = this;
                if (!e.running) {
                  e.running = !0;
                  var o = function () {
                    e.running && p(o),
                      T.showCursor(T.getScrollTop(), T.getScrollLeft()),
                      T.notifyScrollEvent(T.win[0]);
                  };
                  p(o);
                }
              },
              stop: function () {
                this.running = !1;
              },
            }),
            (this.doScrollPos = function (e, o) {
              var t = T.getScrollTop(),
                r = T.getScrollLeft();
              if (
                (((T.newscrolly - t) * (o - t) < 0 ||
                  (T.newscrollx - r) * (e - r) < 0) &&
                  T.cancelScroll(),
                M.bouncescroll
                  ? (0 > o
                      ? (o = (o / 2) | 0)
                      : o > T.page.maxh &&
                        (o = (T.page.maxh + (o - T.page.maxh) / 2) | 0),
                    0 > e
                      ? (e = (e / 2) | 0)
                      : e > T.page.maxw &&
                        (e = (T.page.maxw + (e - T.page.maxw) / 2) | 0))
                  : (0 > o ? (o = 0) : o > T.page.maxh && (o = T.page.maxh),
                    0 > e ? (e = 0) : e > T.page.maxw && (e = T.page.maxw)),
                T.scrollrunning && e == T.newscrollx && o == T.newscrolly)
              )
                return !1;
              (T.newscrolly = o), (T.newscrollx = e);
              var i = T.getScrollTop(),
                s = T.getScrollLeft(),
                n = {};
              (n.x = e - s), (n.y = o - i);
              var l = 0 | Math.sqrt(n.x * n.x + n.y * n.y),
                a = T.prepareTransition(l);
              T.scrollrunning ||
                ((T.scrollrunning = !0),
                T.triggerScrollStart(s, i, e, o, a),
                T.cursorupdate.start()),
                (T.scrollendtrapped = !0),
                P.transitionend ||
                  (T.scrollendtrapped && clearTimeout(T.scrollendtrapped),
                  (T.scrollendtrapped = setTimeout(
                    T.onScrollTransitionEnd,
                    a
                  ))),
                T.setScrollTop(T.newscrolly),
                T.setScrollLeft(T.newscrollx);
            }),
            (this.cancelScroll = function () {
              if (!T.scrollendtrapped) return !0;
              var e = T.getScrollTop(),
                o = T.getScrollLeft();
              return (
                (T.scrollrunning = !1),
                P.transitionend || clearTimeout(P.transitionend),
                (T.scrollendtrapped = !1),
                T.resetTransition(),
                T.setScrollTop(e),
                T.railh && T.setScrollLeft(o),
                T.timerscroll &&
                  T.timerscroll.tm &&
                  clearInterval(T.timerscroll.tm),
                (T.timerscroll = !1),
                (T.cursorfreezed = !1),
                T.cursorupdate.stop(),
                T.showCursor(e, o),
                T
              );
            }),
            (this.onScrollTransitionEnd = function () {
              if (T.scrollendtrapped) {
                var e = T.getScrollTop(),
                  o = T.getScrollLeft();
                if (
                  (0 > e ? (e = 0) : e > T.page.maxh && (e = T.page.maxh),
                  0 > o ? (o = 0) : o > T.page.maxw && (o = T.page.maxw),
                  e != T.newscrolly || o != T.newscrollx)
                )
                  return T.doScrollPos(o, e, M.snapbackspeed);
                T.scrollrunning && T.triggerScrollEnd(),
                  (T.scrollrunning = !1),
                  (T.scrollendtrapped = !1),
                  T.resetTransition(),
                  (T.timerscroll = !1),
                  T.setScrollTop(e),
                  T.railh && T.setScrollLeft(o),
                  T.cursorupdate.stop(),
                  T.noticeCursor(!1, e, o),
                  (T.cursorfreezed = !1);
              }
            });
        } else
          (this.doScrollLeft = function (e, o) {
            var t = T.scrollrunning ? T.newscrolly : T.getScrollTop();
            T.doScrollPos(e, t, o);
          }),
            (this.doScrollTop = function (e, o) {
              var t = T.scrollrunning ? T.newscrollx : T.getScrollLeft();
              T.doScrollPos(t, e, o);
            }),
            (this.doScrollPos = function (e, o) {
              var t = T.getScrollTop(),
                r = T.getScrollLeft();
              ((T.newscrolly - t) * (o - t) < 0 ||
                (T.newscrollx - r) * (e - r) < 0) &&
                T.cancelScroll();
              var i = !1;
              if (
                ((T.bouncescroll && T.rail.visibility) ||
                  (0 > o
                    ? ((o = 0), (i = !0))
                    : o > T.page.maxh && ((o = T.page.maxh), (i = !0))),
                (T.bouncescroll && T.railh.visibility) ||
                  (0 > e
                    ? ((e = 0), (i = !0))
                    : e > T.page.maxw && ((e = T.page.maxw), (i = !0))),
                T.scrollrunning && T.newscrolly === o && T.newscrollx === e)
              )
                return !0;
              (T.newscrolly = o),
                (T.newscrollx = e),
                (T.dst = {}),
                (T.dst.x = e - r),
                (T.dst.y = o - t),
                (T.dst.px = r),
                (T.dst.py = t);
              var s = 0 | Math.sqrt(T.dst.x * T.dst.x + T.dst.y * T.dst.y),
                n = T.getTransitionSpeed(s);
              T.bzscroll = {};
              var l = i ? 1 : 0.58;
              (T.bzscroll.x = new R(r, T.newscrollx, n, 0, 0, l, 1)),
                (T.bzscroll.y = new R(t, T.newscrolly, n, 0, 0, l, 1));
              var a =
                (v(),
                function () {
                  if (T.scrollrunning) {
                    var e = T.bzscroll.y.getPos();
                    T.setScrollLeft(T.bzscroll.x.getNow()),
                      T.setScrollTop(T.bzscroll.y.getNow()),
                      1 >= e
                        ? (T.timer = p(a))
                        : ((T.scrollrunning = !1),
                          (T.timer = 0),
                          T.triggerScrollEnd());
                  }
                });
              T.scrollrunning ||
                (T.triggerScrollStart(r, t, e, o, n),
                (T.scrollrunning = !0),
                (T.timer = p(a)));
            }),
            (this.cancelScroll = function () {
              return (
                T.timer && m(T.timer),
                (T.timer = 0),
                (T.bzscroll = !1),
                (T.scrollrunning = !1),
                T
              );
            });
      else
        (this.doScrollLeft = function (e, o) {
          var t = T.getScrollTop();
          T.doScrollPos(e, t, o);
        }),
          (this.doScrollTop = function (e, o) {
            var t = T.getScrollLeft();
            T.doScrollPos(t, e, o);
          }),
          (this.doScrollPos = function (e, o) {
            var t = e > T.page.maxw ? T.page.maxw : e;
            0 > t && (t = 0);
            var r = o > T.page.maxh ? T.page.maxh : o;
            0 > r && (r = 0),
              T.synched("scroll", function () {
                T.setScrollTop(r), T.setScrollLeft(t);
              });
          }),
          (this.cancelScroll = function () {});
      (this.doScrollBy = function (e) {
        z(0, e);
      }),
        (this.doScrollLeftBy = function (e) {
          z(e, 0);
        }),
        (this.doScrollTo = function (e, o) {
          var t = o ? Math.round(e * T.scrollratio.y) : e;
          0 > t ? (t = 0) : t > T.page.maxh && (t = T.page.maxh),
            (T.cursorfreezed = !1),
            T.doScrollTop(e);
        }),
        (this.checkContentSize = function () {
          var e = T.getContentSize();
          (e.h == T.page.h && e.w == T.page.w) || T.resize(!1, e);
        }),
        (T.onscroll = function () {
          T.rail.drag ||
            T.cursorfreezed ||
            T.synched("scroll", function () {
              (T.scroll.y = Math.round(T.getScrollTop() / T.scrollratio.y)),
                T.railh &&
                  (T.scroll.x = Math.round(
                    T.getScrollLeft() / T.scrollratio.x
                  )),
                T.noticeCursor();
            });
        }),
        T.bind(T.docscroll, "scroll", T.onscroll),
        (this.doZoomIn = function (e) {
          if (!T.zoomactive) {
            (T.zoomactive = !0), (T.zoomrestore = { style: {} });
            var o = [
                "position",
                "top",
                "left",
                "zIndex",
                "backgroundColor",
                "marginTop",
                "marginBottom",
                "marginLeft",
                "marginRight",
              ],
              t = T.win[0].style;
            for (var r in o) {
              var i = o[r];
              T.zoomrestore.style[i] = void 0 !== t[i] ? t[i] : "";
            }
            (T.zoomrestore.style.width = T.win.css("width")),
              (T.zoomrestore.style.height = T.win.css("height")),
              (T.zoomrestore.padding = {
                w: T.win.outerWidth() - T.win.width(),
                h: T.win.outerHeight() - T.win.height(),
              }),
              P.isios4 &&
                ((T.zoomrestore.scrollTop = u.scrollTop()), u.scrollTop(0)),
              T.win.css({
                position: P.isios4 ? "absolute" : "fixed",
                top: 0,
                left: 0,
                zIndex: l + 100,
                margin: 0,
              });
            var s = T.win.css("backgroundColor");
            return (
              ("" === s ||
                /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(s)) &&
                T.win.css("backgroundColor", "#fff"),
              T.rail.css({ zIndex: l + 101 }),
              T.zoom.css({ zIndex: l + 102 }),
              T.zoom.css("backgroundPosition", "0 -18px"),
              T.resizeZoom(),
              T.onzoomin && T.onzoomin.call(T),
              T.cancelEvent(e)
            );
          }
        }),
        (this.doZoomOut = function (e) {
          return T.zoomactive
            ? ((T.zoomactive = !1),
              T.win.css("margin", ""),
              T.win.css(T.zoomrestore.style),
              P.isios4 && u.scrollTop(T.zoomrestore.scrollTop),
              T.rail.css({ "z-index": T.zindex }),
              T.zoom.css({ "z-index": T.zindex }),
              (T.zoomrestore = !1),
              T.zoom.css("backgroundPosition", "0 0"),
              T.onResize(),
              T.onzoomout && T.onzoomout.call(T),
              T.cancelEvent(e))
            : void 0;
        }),
        (this.doZoom = function (e) {
          return T.zoomactive ? T.doZoomOut(e) : T.doZoomIn(e);
        }),
        (this.resizeZoom = function () {
          if (T.zoomactive) {
            var e = T.getScrollTop();
            T.win.css({
              width: u.width() - T.zoomrestore.padding.w + "px",
              height: u.height() - T.zoomrestore.padding.h + "px",
            }),
              T.onResize(),
              T.setScrollTop(Math.min(T.page.maxh, e));
          }
        }),
        this.init(),
        a.nicescroll.push(this);
    },
    S = function (e) {
      var o = this;
      (this.nc = e),
        (this.lastx = 0),
        (this.lasty = 0),
        (this.speedx = 0),
        (this.speedy = 0),
        (this.lasttime = 0),
        (this.steptime = 0),
        (this.snapx = !1),
        (this.snapy = !1),
        (this.demulx = 0),
        (this.demuly = 0),
        (this.lastscrollx = -1),
        (this.lastscrolly = -1),
        (this.chkx = 0),
        (this.chky = 0),
        (this.timer = 0),
        (this.reset = function (e, t) {
          o.stop(),
            (o.steptime = 0),
            (o.lasttime = v()),
            (o.speedx = 0),
            (o.speedy = 0),
            (o.lastx = e),
            (o.lasty = t),
            (o.lastscrollx = -1),
            (o.lastscrolly = -1);
        }),
        (this.update = function (e, t) {
          var r = v();
          (o.steptime = r - o.lasttime), (o.lasttime = r);
          var i = t - o.lasty,
            s = e - o.lastx,
            n = o.nc.getScrollTop(),
            l = o.nc.getScrollLeft(),
            a = n + i,
            c = l + s;
          (o.snapx = 0 > c || c > o.nc.page.maxw),
            (o.snapy = 0 > a || a > o.nc.page.maxh),
            (o.speedx = s),
            (o.speedy = i),
            (o.lastx = e),
            (o.lasty = t);
        }),
        (this.stop = function () {
          o.nc.unsynched("domomentum2d"),
            o.timer && clearTimeout(o.timer),
            (o.timer = 0),
            (o.lastscrollx = -1),
            (o.lastscrolly = -1);
        }),
        (this.doSnapy = function (e, t) {
          var r = !1;
          0 > t
            ? ((t = 0), (r = !0))
            : t > o.nc.page.maxh && ((t = o.nc.page.maxh), (r = !0)),
            0 > e
              ? ((e = 0), (r = !0))
              : e > o.nc.page.maxw && ((e = o.nc.page.maxw), (r = !0)),
            r
              ? o.nc.doScrollPos(e, t, o.nc.opt.snapbackspeed)
              : o.nc.triggerScrollEnd();
        }),
        (this.doMomentum = function (e) {
          var t = v(),
            r = e ? t + e : o.lasttime,
            i = o.nc.getScrollLeft(),
            s = o.nc.getScrollTop(),
            n = o.nc.page.maxh,
            l = o.nc.page.maxw;
          (o.speedx = l > 0 ? Math.min(60, o.speedx) : 0),
            (o.speedy = n > 0 ? Math.min(60, o.speedy) : 0);
          var a = r && 60 >= t - r;
          (0 > s || s > n || 0 > i || i > l) && (a = !1);
          var c = o.speedy && a ? o.speedy : !1,
            d = o.speedx && a ? o.speedx : !1;
          if (c || d) {
            var u = Math.max(16, o.steptime);
            if (u > 50) {
              var h = u / 50;
              (o.speedx *= h), (o.speedy *= h), (u = 50);
            }
            (o.demulxy = 0),
              (o.lastscrollx = o.nc.getScrollLeft()),
              (o.chkx = o.lastscrollx),
              (o.lastscrolly = o.nc.getScrollTop()),
              (o.chky = o.lastscrolly);
            var p = o.lastscrollx,
              m = o.lastscrolly,
              f = function () {
                var e = v() - t > 600 ? 0.04 : 0.02;
                o.speedx &&
                  ((p = Math.floor(o.lastscrollx - o.speedx * (1 - o.demulxy))),
                  (o.lastscrollx = p),
                  (0 > p || p > l) && (e = 0.1)),
                  o.speedy &&
                    ((m = Math.floor(
                      o.lastscrolly - o.speedy * (1 - o.demulxy)
                    )),
                    (o.lastscrolly = m),
                    (0 > m || m > n) && (e = 0.1)),
                  (o.demulxy = Math.min(1, o.demulxy + e)),
                  o.nc.synched("domomentum2d", function () {
                    if (o.speedx) {
                      o.nc.getScrollLeft();
                      (o.chkx = p), o.nc.setScrollLeft(p);
                    }
                    if (o.speedy) {
                      o.nc.getScrollTop();
                      (o.chky = m), o.nc.setScrollTop(m);
                    }
                    o.timer || (o.nc.hideCursor(), o.doSnapy(p, m));
                  }),
                  o.demulxy < 1
                    ? (o.timer = setTimeout(f, u))
                    : (o.stop(), o.nc.hideCursor(), o.doSnapy(p, m));
              };
            f();
          } else o.doSnapy(o.nc.getScrollLeft(), o.nc.getScrollTop());
        });
    },
    z = e.fn.scrollTop;
  (e.cssHooks.pageYOffset = {
    get: function (e) {
      var o = a.data(e, "__nicescroll") || !1;
      return o && o.ishwscroll ? o.getScrollTop() : z.call(e);
    },
    set: function (e, o) {
      var t = a.data(e, "__nicescroll") || !1;
      return (
        t && t.ishwscroll ? t.setScrollTop(parseInt(o)) : z.call(e, o), this
      );
    },
  }),
    (e.fn.scrollTop = function (e) {
      if (void 0 === e) {
        var o = this[0] ? a.data(this[0], "__nicescroll") || !1 : !1;
        return o && o.ishwscroll ? o.getScrollTop() : z.call(this);
      }
      return this.each(function () {
        var o = a.data(this, "__nicescroll") || !1;
        o && o.ishwscroll ? o.setScrollTop(parseInt(e)) : z.call(a(this), e);
      });
    });
  var k = e.fn.scrollLeft;
  (a.cssHooks.pageXOffset = {
    get: function (e) {
      var o = a.data(e, "__nicescroll") || !1;
      return o && o.ishwscroll ? o.getScrollLeft() : k.call(e);
    },
    set: function (e, o) {
      var t = a.data(e, "__nicescroll") || !1;
      return (
        t && t.ishwscroll ? t.setScrollLeft(parseInt(o)) : k.call(e, o), this
      );
    },
  }),
    (e.fn.scrollLeft = function (e) {
      if (void 0 === e) {
        var o = this[0] ? a.data(this[0], "__nicescroll") || !1 : !1;
        return o && o.ishwscroll ? o.getScrollLeft() : k.call(this);
      }
      return this.each(function () {
        var o = a.data(this, "__nicescroll") || !1;
        o && o.ishwscroll ? o.setScrollLeft(parseInt(e)) : k.call(a(this), e);
      });
    });
  var T = function (e) {
    var o = this;
    if (
      ((this.length = 0),
      (this.name = "nicescrollarray"),
      (this.each = function (e) {
        return a.each(o, e), o;
      }),
      (this.push = function (e) {
        (o[o.length] = e), o.length++;
      }),
      (this.eq = function (e) {
        return o[e];
      }),
      e)
    )
      for (var t = 0; t < e.length; t++) {
        var r = a.data(e[t], "__nicescroll") || !1;
        r && ((this[this.length] = r), this.length++);
      }
    return this;
  };
  t(
    T.prototype,
    [
      "show",
      "hide",
      "toggle",
      "onResize",
      "resize",
      "remove",
      "stop",
      "doScrollPos",
    ],
    function (e, o) {
      e[o] = function () {
        var e = arguments;
        return this.each(function () {
          this[o].apply(this, e);
        });
      };
    }
  ),
    (e.fn.getNiceScroll = function (e) {
      return void 0 === e
        ? new T(this)
        : (this[e] && a.data(this[e], "__nicescroll")) || !1;
    });
  var E = e.expr.pseudos || e.expr[":"];
  (E.nicescroll = function (e) {
    return void 0 !== a.data(e, "__nicescroll");
  }),
    (a.fn.niceScroll = function (e, o) {
      void 0 !== o ||
        "object" != typeof e ||
        "jquery" in e ||
        ((o = e), (e = !1));
      var t = new T();
      return (
        this.each(function () {
          var r = a(this),
            i = a.extend({}, o);
          if (e) {
            var s = a(e);
            (i.doc = s.length > 1 ? a(e, r) : s), (i.win = r);
          }
          var n = !("doc" in i);
          n || "win" in i || (i.win = r);
          var l = r.data("__nicescroll") || !1;
          l ||
            ((i.doc = i.doc || r),
            (l = new x(i, r)),
            r.data("__nicescroll", l)),
            t.push(l);
        }),
        1 === t.length ? t[0] : t
      );
    }),
    (d.NiceScroll = {
      getjQuery: function () {
        return e;
      },
    }),
    a.nicescroll || ((a.nicescroll = new T()), (a.nicescroll.options = w));
});
