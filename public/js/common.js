!(function (t) {
  "undefined" == typeof module ? (this.charming = t) : (module.exports = t);
})(function (t, e) {
  "use strict";
  e = e || {};
  var n = e.tagName || "span",
    i = null != e.classPrefix ? e.classPrefix : "char",
    o = 1,
    s = function (t) {
      for (
        var e = t.parentNode, s = t.nodeValue, a = s.length, r = -1;
        ++r < a;

      ) {
        var h = document.createElement(n);
        i && ((h.className = i + o), o++),
          h.appendChild(document.createTextNode(s[r])),
          e.insertBefore(h, t);
      }
      e.removeChild(t);
    };
  return (
    (function a(t) {
      for (var e = [].slice.call(t.childNodes), n = e.length, i = -1; ++i < n; )
        a(e[i]);
      t.nodeType === Node.TEXT_NODE && s(t);
    })(t),
    t
  );
}),
  (function (t) {
    function e(e, n, i, o) {
      var s = e.text().split(n),
        a = "";
      s.length &&
        (t(s).each(function (t, e) {
          a += '<span class="' + i + (t + 1) + '">' + e + "</span>" + o;
        }),
        e.empty().append(a));
    }
    var n = {
      init: function () {
        return this.each(function () {
          e(t(this), "", "char", "");
        });
      },
      words: function () {
        return this.each(function () {
          e(t(this), " ", "word", " ");
        });
      },
      lines: function () {
        return this.each(function () {
          var n = "eefec303079ad17405c889e092e105b0";
          e(t(this).children("br").replaceWith(n).end(), n, "line", "");
        });
      },
    };
    t.fn.lettering = function (e) {
      return e && n[e]
        ? n[e].apply(this, [].slice.call(arguments, 1))
        : "letters" !== e && e
        ? (t.error("Method " + e + " does not exist on jQuery.lettering"), this)
        : n.init.apply(this, [].slice.call(arguments, 0));
    };
  })(jQuery),
  (function (t) {
    (t.easing.jswing = t.easing.swing),
      t.extend(t.easing, {
        def: "easeOutQuad",
        swing: function (e, n, i, o, s) {
          return t.easing[t.easing.def](e, n, i, o, s);
        },
        easeInQuad: function (t, e, n, i, o) {
          return i * (e /= o) * e + n;
        },
        easeOutQuad: function (t, e, n, i, o) {
          return -i * (e /= o) * (e - 2) + n;
        },
        easeInOutQuad: function (t, e, n, i, o) {
          return (e /= o / 2) < 1
            ? (i / 2) * e * e + n
            : (-i / 2) * (--e * (e - 2) - 1) + n;
        },
        easeInCubic: function (t, e, n, i, o) {
          return i * (e /= o) * e * e + n;
        },
        easeOutCubic: function (t, e, n, i, o) {
          return i * ((e = e / o - 1) * e * e + 1) + n;
        },
        easeInOutCubic: function (t, e, n, i, o) {
          return (e /= o / 2) < 1
            ? (i / 2) * e * e * e + n
            : (i / 2) * ((e -= 2) * e * e + 2) + n;
        },
        easeInQuart: function (t, e, n, i, o) {
          return i * (e /= o) * e * e * e + n;
        },
        easeOutQuart: function (t, e, n, i, o) {
          return -i * ((e = e / o - 1) * e * e * e - 1) + n;
        },
        easeInOutQuart: function (t, e, n, i, o) {
          return (e /= o / 2) < 1
            ? (i / 2) * e * e * e * e + n
            : (-i / 2) * ((e -= 2) * e * e * e - 2) + n;
        },
        easeInQuint: function (t, e, n, i, o) {
          return i * (e /= o) * e * e * e * e + n;
        },
        easeOutQuint: function (t, e, n, i, o) {
          return i * ((e = e / o - 1) * e * e * e * e + 1) + n;
        },
        easeInOutQuint: function (t, e, n, i, o) {
          return (e /= o / 2) < 1
            ? (i / 2) * e * e * e * e * e + n
            : (i / 2) * ((e -= 2) * e * e * e * e + 2) + n;
        },
        easeInSine: function (t, e, n, i, o) {
          return -i * Math.cos((e / o) * (Math.PI / 2)) + i + n;
        },
        easeOutSine: function (t, e, n, i, o) {
          return i * Math.sin((e / o) * (Math.PI / 2)) + n;
        },
        easeInOutSine: function (t, e, n, i, o) {
          return (-i / 2) * (Math.cos((Math.PI * e) / o) - 1) + n;
        },
        easeInExpo: function (t, e, n, i, o) {
          return 0 == e ? n : i * Math.pow(2, 10 * (e / o - 1)) + n;
        },
        easeOutExpo: function (t, e, n, i, o) {
          return e == o ? n + i : i * (-Math.pow(2, (-10 * e) / o) + 1) + n;
        },
        easeInOutExpo: function (t, e, n, i, o) {
          return 0 == e
            ? n
            : e == o
            ? n + i
            : (e /= o / 2) < 1
            ? (i / 2) * Math.pow(2, 10 * (e - 1)) + n
            : (i / 2) * (-Math.pow(2, -10 * --e) + 2) + n;
        },
        easeInCirc: function (t, e, n, i, o) {
          return -i * (Math.sqrt(1 - (e /= o) * e) - 1) + n;
        },
        easeOutCirc: function (t, e, n, i, o) {
          return i * Math.sqrt(1 - (e = e / o - 1) * e) + n;
        },
        easeInOutCirc: function (t, e, n, i, o) {
          return (e /= o / 2) < 1
            ? (-i / 2) * (Math.sqrt(1 - e * e) - 1) + n
            : (i / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + n;
        },
        easeInElastic: function (t, e, n, i, o) {
          var s = 1.70158,
            a = 0,
            r = i;
          if (0 == e) return n;
          if (1 == (e /= o)) return n + i;
          if ((a || (a = 0.3 * o), r < Math.abs(i))) {
            r = i;
            var s = a / 4;
          } else var s = (a / (2 * Math.PI)) * Math.asin(i / r);
          return (
            -(
              r *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e * o - s) * (2 * Math.PI)) / a)
            ) + n
          );
        },
        easeOutElastic: function (t, e, n, i, o) {
          var s = 1.70158,
            a = 0,
            r = i;
          if (0 == e) return n;
          if (1 == (e /= o)) return n + i;
          if ((a || (a = 0.3 * o), r < Math.abs(i))) {
            r = i;
            var s = a / 4;
          } else var s = (a / (2 * Math.PI)) * Math.asin(i / r);
          return (
            r *
              Math.pow(2, -10 * e) *
              Math.sin(((e * o - s) * (2 * Math.PI)) / a) +
            i +
            n
          );
        },
        easeInOutElastic: function (t, e, n, i, o) {
          var s = 1.70158,
            a = 0,
            r = i;
          if (0 == e) return n;
          if (2 == (e /= o / 2)) return n + i;
          if ((a || (a = o * (0.3 * 1.5)), r < Math.abs(i))) {
            r = i;
            var s = a / 4;
          } else var s = (a / (2 * Math.PI)) * Math.asin(i / r);
          return 1 > e
            ? -0.5 *
                (r *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin(((e * o - s) * (2 * Math.PI)) / a)) +
                n
            : r *
                Math.pow(2, -10 * (e -= 1)) *
                Math.sin(((e * o - s) * (2 * Math.PI)) / a) *
                0.5 +
                i +
                n;
        },
        easeInBack: function (t, e, n, i, o, s) {
          return (
            void 0 == s && (s = 1.70158),
            i * (e /= o) * e * ((s + 1) * e - s) + n
          );
        },
        easeOutBack: function (t, e, n, i, o, s) {
          return (
            void 0 == s && (s = 1.70158),
            i * ((e = e / o - 1) * e * ((s + 1) * e + s) + 1) + n
          );
        },
        easeInOutBack: function (t, e, n, i, o, s) {
          return (
            void 0 == s && (s = 1.70158),
            (e /= o / 2) < 1
              ? (i / 2) * (e * e * (((s *= 1.525) + 1) * e - s)) + n
              : (i / 2) * ((e -= 2) * e * (((s *= 1.525) + 1) * e + s) + 2) + n
          );
        },
        easeInBounce: function (e, n, i, o, s) {
          return o - t.easing.easeOutBounce(e, s - n, 0, o, s) + i;
        },
        easeOutBounce: function (t, e, n, i, o) {
          return (e /= o) < 1 / 2.75
            ? i * (7.5625 * e * e) + n
            : 2 / 2.75 > e
            ? i * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + n
            : 2.5 / 2.75 > e
            ? i * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + n
            : i * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + n;
        },
        easeInOutBounce: function (e, n, i, o, s) {
          return s / 2 > n
            ? 0.5 * t.easing.easeInBounce(e, 2 * n, 0, o, s) + i
            : 0.5 * t.easing.easeOutBounce(e, 2 * n - s, 0, o, s) + 0.5 * o + i;
        },
      });
  })(jQuery),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof exports
      ? (module.exports = t)
      : t(jQuery);
  })(function (t) {
    function e(e) {
      var a = e || window.event,
        r = h.call(arguments, 1),
        c = 0,
        l = 0,
        u = 0,
        f = 0;
      if (
        ((e = t.event.fix(a)),
        (e.type = "mousewheel"),
        "detail" in a && (u = -1 * a.detail),
        "wheelDelta" in a && (u = a.wheelDelta),
        "wheelDeltaY" in a && (u = a.wheelDeltaY),
        "wheelDeltaX" in a && (l = -1 * a.wheelDeltaX),
        "axis" in a && a.axis === a.HORIZONTAL_AXIS && ((l = -1 * u), (u = 0)),
        (c = 0 === u ? l : u),
        "deltaY" in a && ((u = -1 * a.deltaY), (c = u)),
        "deltaX" in a && ((l = a.deltaX), 0 === u && (c = -1 * l)),
        0 !== u || 0 !== l)
      ) {
        if (1 === a.deltaMode) {
          var d = t.data(this, "mousewheel-line-height");
          (c *= d), (u *= d), (l *= d);
        } else if (2 === a.deltaMode) {
          var p = t.data(this, "mousewheel-page-height");
          (c *= p), (u *= p), (l *= p);
        }
        return (
          (f = Math.max(Math.abs(u), Math.abs(l))),
          (!s || s > f) && ((s = f), i(a, f) && (s /= 40)),
          i(a, f) && ((c /= 40), (l /= 40), (u /= 40)),
          (c = Math[c >= 1 ? "floor" : "ceil"](c / s)),
          (l = Math[l >= 1 ? "floor" : "ceil"](l / s)),
          (u = Math[u >= 1 ? "floor" : "ceil"](u / s)),
          (e.deltaX = l),
          (e.deltaY = u),
          (e.deltaFactor = s),
          (e.deltaMode = 0),
          r.unshift(e, c, l, u),
          o && clearTimeout(o),
          (o = setTimeout(n, 200)),
          (t.event.dispatch || t.event.handle).apply(this, r)
        );
      }
    }
    function n() {
      s = null;
    }
    function i(t, e) {
      return (
        l.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 === 0
      );
    }
    var o,
      s,
      a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
      r =
        "onwheel" in document || document.documentMode >= 9
          ? ["wheel"]
          : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
      h = Array.prototype.slice;
    if (t.event.fixHooks)
      for (var c = a.length; c; ) t.event.fixHooks[a[--c]] = t.event.mouseHooks;
    var l = (t.event.special.mousewheel = {
      version: "3.1.9",
      setup: function () {
        if (this.addEventListener)
          for (var n = r.length; n; ) this.addEventListener(r[--n], e, !1);
        else this.onmousewheel = e;
        t.data(this, "mousewheel-line-height", l.getLineHeight(this)),
          t.data(this, "mousewheel-page-height", l.getPageHeight(this));
      },
      teardown: function () {
        if (this.removeEventListener)
          for (var t = r.length; t; ) this.removeEventListener(r[--t], e, !1);
        else this.onmousewheel = null;
      },
      getLineHeight: function (e) {
        return parseInt(
          t(e)
            ["offsetParent" in t.fn ? "offsetParent" : "parent"]()
            .css("fontSize"),
          10
        );
      },
      getPageHeight: function (e) {
        return t(e).height();
      },
      settings: { adjustOldDeltas: !0 },
    });
    t.fn.extend({
      mousewheel: function (t) {
        return t ? this.bind("mousewheel", t) : this.trigger("mousewheel");
      },
      unmousewheel: function (t) {
        return this.unbind("mousewheel", t);
      },
    });
  }),
  (function (t) {
    function e(t) {
      var e = t.data("_ARS_data");
      return (
        e ||
          ((e = { rotateUnits: "deg", scale: 1, rotate: 0 }),
          t.data("_ARS_data", e)),
        e
      );
    }
    function n(t, e) {
      t.css(
        "transform",
        "rotate(" +
          e.rotate +
          e.rotateUnits +
          ") scale(" +
          e.scale +
          "," +
          e.scale +
          ")"
      );
    }
    (t.fn.rotate = function (i) {
      var o,
        s = t(this),
        a = e(s);
      return "undefined" == typeof i
        ? a.rotate + a.rotateUnits
        : ((o = i.toString().match(/^(-?\d+(\.\d+)?)(.+)?$/)),
          o && (o[3] && (a.rotateUnits = o[3]), (a.rotate = o[1]), n(s, a)),
          this);
    }),
      (t.fn.scale = function (i) {
        var o = t(this),
          s = e(o);
        return "undefined" == typeof i
          ? s.scale
          : ((s.scale = i), n(o, s), this);
      });
    var i = t.fx.prototype.cur;
    (t.fx.prototype.cur = function () {
      return "rotate" == this.prop
        ? parseFloat(t(this.elem).rotate())
        : "scale" == this.prop
        ? parseFloat(t(this.elem).scale())
        : i.apply(this, arguments);
    }),
      (t.fx.step.rotate = function (n) {
        var i = e(t(n.elem));
        t(n.elem).rotate(n.now + i.rotateUnits);
      }),
      (t.fx.step.scale = function (e) {
        t(e.elem).scale(e.now);
      });
    var o = t.fn.animate;
    t.fn.animate = function (n) {
      if ("undefined" != typeof n.rotate) {
        var i,
          s,
          a = n.rotate.toString().match(/^(([+-]=)?(-?\d+(\.\d+)?))(.+)?$/);
        a && a[5] && ((i = t(this)), (s = e(i)), (s.rotateUnits = a[5])),
          (n.rotate = a[1]);
      }
      return o.apply(this, arguments);
    };
  })(jQuery),
  (function (t) {
    "use strict";
    var e = "draptouch-active";
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = (function () {
        return (
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function (t) {
            window.setTimeout(t, 1e3 / 60);
          }
        );
      })()),
      (t.support = t.support || {}),
      t.extend(t.support, { touch: "ontouchend" in document });
    var n = function () {
        return !1;
      },
      i = function (e, n) {
        return (
          (this.settings = n),
          (this.el = e),
          (this.$el = t(e)),
          this._initElements(),
          this
        );
      };
    (i.DATA_KEY = "draptouch"),
      (i.DEFAULTS = {
        cursor: "",
        decelerate: !0,
        triggerHardware: !0,
        threshold: 0,
        y: !0,
        x: !0,
        slowdown: 0.9,
        maxvelocity: 60,
        throttleFPS: 80,
        movingClass: {
          up: "draptouch-moving-up",
          down: "draptouch-moving-down",
          left: "draptouch-moving-left",
          right: "draptouch-moving-right",
        },
        deceleratingClass: {
          up: "draptouch-decelerating-up",
          down: "draptouch-decelerating-down",
          left: "draptouch-decelerating-left",
          right: "draptouch-decelerating-right",
        },
      }),
      (i.prototype.start = function (e) {
        (this.settings = t.extend(this.settings, e)),
          (this.velocity = e.velocity || this.velocity),
          (this.velocityY = e.velocityY || this.velocityY),
          (this.settings.decelerate = !1),
          this._move();
      }),
      (i.prototype.end = function () {
        this.settings.decelerate = !0;
      }),
      (i.prototype.stop = function () {
        (this.velocity = 0),
          (this.velocityY = 0),
          (this.settings.decelerate = !0),
          t.isFunction(this.settings.stopped) &&
            this.settings.stopped.call(this);
      }),
      (i.prototype.detach = function () {
        this._detachListeners(), this.$el.removeClass(e).css("cursor", "");
      }),
      (i.prototype.attach = function () {
        this.$el.hasClass(e) ||
          (this._attachListeners(this.$el),
          this.$el.addClass(e).css("cursor", this.settings.cursor));
      }),
      (i.prototype._initElements = function () {
        this.$el.addClass(e),
          t.extend(this, {
            xpos: null,
            prevXPos: !1,
            ypos: null,
            prevYPos: !1,
            mouseDown: !1,
            throttleTimeout: 1e3 / this.settings.throttleFPS,
            lastMove: null,
            elementFocused: null,
          }),
          (this.velocity = 0),
          (this.velocityY = 0),
          t(document)
            .mouseup(t.proxy(this._resetMouse, this))
            .click(t.proxy(this._resetMouse, this)),
          this._initEvents(),
          this.$el.css("cursor", this.settings.cursor),
          this.settings.triggerHardware &&
            this.$el.css({
              "-webkit-transform": "translate3d(0,0,0)",
              "-webkit-perspective": "1000",
              "-webkit-backface-visibility": "hidden",
            });
      }),
      (i.prototype._initEvents = function () {
        var e = this;
        (this.settings.events = {
          touchStart: function (t) {
            var n;
            e._useTarget(t.target, t) &&
              ((n = t.originalEvent.touches[0]),
              (e.threshold = e._threshold(t.target, t)),
              e._start(n.clientX, n.clientY),
              t.stopPropagation());
          },
          touchMove: function (t) {
            var n;
            e.mouseDown &&
              ((n = t.originalEvent.touches[0]),
              e._inputmove(n.clientX, n.clientY),
              t.preventDefault && t.preventDefault());
          },
          inputDown: function (t) {
            e._useTarget(t.target, t) &&
              ((e.threshold = e._threshold(t.target, t)),
              e._start(t.clientX, t.clientY),
              (e.elementFocused = t.target),
              "IMG" === t.target.nodeName && t.preventDefault(),
              t.stopPropagation());
          },
          inputEnd: function (t) {
            e._useTarget(t.target, t) &&
              (e._end(),
              (e.elementFocused = null),
              t.preventDefault && t.preventDefault());
          },
          inputMove: function (t) {
            e.mouseDown &&
              (e._inputmove(t.clientX, t.clientY),
              t.preventDefault && t.preventDefault());
          },
          scroll: function (n) {
            t.isFunction(e.settings.moved) &&
              e.settings.moved.call(e, e.settings),
              n.preventDefault && n.preventDefault();
          },
          inputClick: function (t) {
            return Math.abs(e.velocity) > 0 ? (t.preventDefault(), !1) : void 0;
          },
          dragStart: function (t) {
            return e._useTarget(t.target, t) && e.elementFocused ? !1 : void 0;
          },
        }),
          this._attachListeners(this.$el, this.settings);
      }),
      (i.prototype._inputmove = function (e, n) {
        var i = this.$el;
        this.el;
        if (
          (!this.lastMove ||
            new Date() >
              new Date(this.lastMove.getTime() + this.throttleTimeout)) &&
          ((this.lastMove = new Date()),
          this.mouseDown && (this.xpos || this.ypos))
        ) {
          var o = e - this.xpos,
            s = n - this.ypos;
          if (this.threshold > 0) {
            var a = Math.sqrt(o * o + s * s);
            if (this.threshold > a) return;
            this.threshold = 0;
          }
          this.elementFocused &&
            (t(this.elementFocused).blur(),
            (this.elementFocused = null),
            i.focus()),
            (this.settings.decelerate = !1),
            (this.velocity = this.velocityY = 0);
          var r = this.scrollLeft(),
            h = this.scrollTop();
          this.scrollLeft(this.settings.x ? r - o : r),
            this.scrollTop(this.settings.y ? h - s : h),
            (this.prevXPos = this.xpos),
            (this.prevYPos = this.ypos),
            (this.xpos = e),
            (this.ypos = n),
            this._calculateVelocities(),
            this._setMoveClasses(this.settings.movingClass),
            t.isFunction(this.settings.moved) &&
              this.settings.moved.call(this, this.settings);
        }
      }),
      (i.prototype._calculateVelocities = function () {
        (this.velocity = this._capVelocity(
          this.prevXPos - this.xpos,
          this.settings.maxvelocity
        )),
          (this.velocityY = this._capVelocity(
            this.prevYPos - this.ypos,
            this.settings.maxvelocity
          ));
      }),
      (i.prototype._end = function () {
        this.xpos &&
          this.prevXPos &&
          this.settings.decelerate === !1 &&
          ((this.settings.decelerate = !0),
          this._calculateVelocities(),
          (this.xpos = this.prevXPos = this.mouseDown = !1),
          this._move());
      }),
      (i.prototype._useTarget = function (e, n) {
        return t.isFunction(this.settings.filterTarget)
          ? this.settings.filterTarget.call(this, e, n) !== !1
          : !0;
      }),
      (i.prototype._threshold = function (e, n) {
        return t.isFunction(this.settings.threshold)
          ? this.settings.threshold.call(this, e, n)
          : this.settings.threshold;
      }),
      (i.prototype._start = function (t, e) {
        (this.mouseDown = !0),
          (this.velocity = this.prevXPos = 0),
          (this.velocityY = this.prevYPos = 0),
          (this.xpos = t),
          (this.ypos = e);
      }),
      (i.prototype._resetMouse = function () {
        (this.xpos = !1), (this.ypos = !1), (this.mouseDown = !1);
      }),
      (i.prototype._decelerateVelocity = function (t, e) {
        return 0 === Math.floor(Math.abs(t)) ? 0 : t * e;
      }),
      (i.prototype._capVelocity = function (t, e) {
        var n = t;
        return t > 0 ? t > e && (n = e) : 0 - e > t && (n = 0 - e), n;
      }),
      (i.prototype._setMoveClasses = function (t) {
        var e = this.settings,
          n = this.$el;
        n
          .removeClass(e.movingClass.up)
          .removeClass(e.movingClass.down)
          .removeClass(e.movingClass.left)
          .removeClass(e.movingClass.right)
          .removeClass(e.deceleratingClass.up)
          .removeClass(e.deceleratingClass.down)
          .removeClass(e.deceleratingClass.left)
          .removeClass(e.deceleratingClass.right),
          this.velocity > 0 && n.addClass(t.right),
          this.velocity < 0 && n.addClass(t.left),
          this.velocityY > 0 && n.addClass(t.down),
          this.velocityY < 0 && n.addClass(t.up);
      }),
      (i.prototype._move = function () {
        var e = (this.$el, this.el),
          n = this,
          i = n.settings;
        i.x && e.scrollWidth > 0
          ? (this.scrollLeft(this.scrollLeft() + this.velocity),
            Math.abs(this.velocity) > 0 &&
              (this.velocity = i.decelerate
                ? n._decelerateVelocity(this.velocity, i.slowdown)
                : this.velocity))
          : (this.velocity = 0),
          i.y && e.scrollHeight > 0
            ? (this.scrollTop(this.scrollTop() + this.velocityY),
              Math.abs(this.velocityY) > 0 &&
                (this.velocityY = i.decelerate
                  ? n._decelerateVelocity(this.velocityY, i.slowdown)
                  : this.velocityY))
            : (this.velocityY = 0),
          n._setMoveClasses(i.deceleratingClass),
          t.isFunction(i.moved) && i.moved.call(this, i),
          Math.abs(this.velocity) > 0 || Math.abs(this.velocityY) > 0
            ? this.moving ||
              ((this.moving = !0),
              window.requestAnimationFrame(function () {
                (n.moving = !1), n._move();
              }))
            : n.stop();
      }),
      (i.prototype._getScroller = function () {
        var e = this.$el;
        return (
          (this.$el.is("body") || this.$el.is("html")) && (e = t(window)), e
        );
      }),
      (i.prototype.scrollLeft = function (t) {
        var e = this._getScroller();
        return "number" != typeof t
          ? e.scrollLeft()
          : (e.scrollLeft(t), void (this.settings.scrollLeft = t));
      }),
      (i.prototype.scrollTop = function (t) {
        var e = this._getScroller();
        return "number" != typeof t
          ? e.scrollTop()
          : (e.scrollTop(t), void (this.settings.scrollTop = t));
      }),
      (i.prototype._attachListeners = function () {
        var e = this.$el,
          i = this.settings;
        t.support.touch &&
          e
            .bind("touchstart", i.events.touchStart)
            .bind("touchend", i.events.inputEnd)
            .bind("touchmove", i.events.touchMove),
          e
            .mousedown(i.events.inputDown)
            .mouseup(i.events.inputEnd)
            .mousemove(i.events.inputMove),
          e
            .click(i.events.inputClick)
            .scroll(i.events.scroll)
            .bind("selectstart", n)
            .bind("dragstart", i.events.dragStart);
      }),
      (i.prototype._detachListeners = function () {
        var e = this.$el,
          i = this.settings;
        t.support.touch &&
          e
            .unbind("touchstart", i.events.touchStart)
            .unbind("touchend", i.events.inputEnd)
            .unbind("touchmove", i.events.touchMove),
          e
            .unbind("mousedown", i.events.inputDown)
            .unbind("mouseup", i.events.inputEnd)
            .unbind("mousemove", i.events.inputMove),
          e
            .unbind("click", i.events.inputClick)
            .unbind("scroll", i.events.scroll)
            .unbind("selectstart", n)
            .unbind("dragstart", i.events.dragStart);
      }),
      (t.DrapTouch = i),
      (t.fn.draptouch = function (e, n) {
        return this.each(function () {
          var o = t(this),
            s = o.data(i.DATA_KEY),
            a = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
          s || o.data(i.DATA_KEY, (s = new i(this, a))),
            "string" == typeof e && s[e](n);
        });
      });
  })(window.jQuery || window.Zepto),
  (function (t, e) {
    if ("function" == typeof define && define.amd) define(["exports"], e);
    else if ("undefined" != typeof exports) e(exports);
    else {
      var n = { exports: {} };
      e(n.exports), (t.PinchZoom = n.exports);
    }
  })(this, function (t) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }),
      "function" != typeof Object.assign &&
        Object.defineProperty(Object, "assign", {
          value: function (t) {
            if (null == t)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), n = 1; n < arguments.length; n++) {
              var i = arguments[n];
              if (null != i)
                for (var o in i)
                  Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
            }
            return e;
          },
          writable: !0,
          configurable: !0,
        }),
      "function" != typeof Array.from &&
        (Array.from = function (t) {
          return [].slice.call(t);
        });
    var e = function (t) {
        var e = document.implementation.createHTMLDocument("");
        return (e.body.innerHTML = t), Array.from(e.body.children)[0];
      },
      n = function (t, e) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(e, !0, !1), t.dispatchEvent(n);
      },
      i = function () {
        var t = function (t, e) {
            (this.el = t),
              (this.zoomFactor = 1),
              (this.lastScale = 1),
              (this.offset = { x: 0, y: 0 }),
              (this.initialOffset = { x: 0, y: 0 }),
              (this.options = Object.assign({}, this.defaults, e)),
              this.setupMarkup(),
              this.bindEvents(),
              this.update(),
              this.isImageLoaded(this.el) &&
                (this.updateAspectRatio(), this.setupInitialOffset()),
              this.enable();
          },
          i = function (t, e) {
            return t + e;
          },
          o = function (t, e) {
            return t > e - 0.01 && e + 0.01 > t;
          };
        t.prototype = {
          defaults: {
            tapZoomFactor: 2,
            zoomOutFactor: 1.3,
            animationDuration: 300,
            maxZoom: 6,
            minZoom: 0.5,
            draggableUnzoomed: !0,
            lockDragAxis: !1,
            use2d: !0,
            zoomStartEventName: "pz_zoomstart",
            zoomUpdateEventName: "pz_zoomupdate",
            zoomEndEventName: "pz_zoomend",
            dragStartEventName: "pz_dragstart",
            dragUpdateEventName: "pz_dragupdate",
            dragEndEventName: "pz_dragend",
            doubleTapEventName: "pz_doubletap",
            verticalPadding: 0,
            horizontalPadding: 0,
          },
          handleDragStart: function (t) {
            n(this.el, this.options.dragStartEventName),
              this.stopAnimation(),
              (this.lastDragPosition = !1),
              (this.hasInteraction = !0),
              this.handleDrag(t);
          },
          handleDrag: function (t) {
            var e = this.getTouches(t)[0];
            this.drag(e, this.lastDragPosition),
              (this.offset = this.sanitizeOffset(this.offset)),
              (this.lastDragPosition = e);
          },
          handleDragEnd: function () {
            n(this.el, this.options.dragEndEventName), this.end();
          },
          handleZoomStart: function () {
            n(this.el, this.options.zoomStartEventName),
              this.stopAnimation(),
              (this.lastScale = 1),
              (this.nthZoom = 0),
              (this.lastZoomCenter = !1),
              (this.hasInteraction = !0);
          },
          handleZoom: function (t, e) {
            var n = this.getTouchCenter(this.getTouches(t)),
              i = e / this.lastScale;
            (this.lastScale = e),
              (this.nthZoom += 1),
              this.nthZoom > 3 &&
                (this.scale(i, n), this.drag(n, this.lastZoomCenter)),
              (this.lastZoomCenter = n);
          },
          handleZoomEnd: function () {
            n(this.el, this.options.zoomEndEventName), this.end();
          },
          handleDoubleTap: function (t) {
            var e = this.getTouches(t)[0],
              i = this.zoomFactor > 1 ? 1 : this.options.tapZoomFactor,
              o = this.zoomFactor,
              s = function (t) {
                this.scaleTo(o + t * (i - o), e);
              }.bind(this);
            this.hasInteraction ||
              ((this.isDoubleTap = !0),
              o > i && (e = this.getCurrentZoomCenter()),
              this.animate(this.options.animationDuration, s, this.swing),
              n(this.el, this.options.doubleTapEventName));
          },
          computeInitialOffset: function () {
            this.initialOffset = {
              x:
                -Math.abs(
                  this.el.offsetWidth * this.getInitialZoomFactor() -
                    this.container.offsetWidth
                ) / 2,
              y:
                -Math.abs(
                  this.el.offsetHeight * this.getInitialZoomFactor() -
                    this.container.offsetHeight
                ) / 2,
            };
          },
          isImageLoaded: function (t) {
            return "IMG" === t.nodeName
              ? t.complete && 0 !== t.naturalHeight
              : Array.from(t.querySelectorAll("img")).every(this.isImageLoaded);
          },
          setupInitialOffset: function () {
            this._initialOffsetSetup ||
              ((this._initialOffsetSetup = !0),
              this.computeInitialOffset(),
              (this.offset.x = this.initialOffset.x),
              (this.offset.y = this.initialOffset.y));
          },
          sanitizeOffset: function (t) {
            var e =
                this.el.offsetWidth *
                this.getInitialZoomFactor() *
                this.zoomFactor,
              n =
                this.el.offsetHeight *
                this.getInitialZoomFactor() *
                this.zoomFactor,
              i = e - this.getContainerX() + this.options.horizontalPadding,
              o = n - this.getContainerY() + this.options.verticalPadding,
              s = Math.max(i, 0),
              a = Math.max(o, 0),
              r = Math.min(i, 0) - this.options.horizontalPadding,
              h = Math.min(o, 0) - this.options.verticalPadding;
            return {
              x: Math.min(Math.max(t.x, r), s),
              y: Math.min(Math.max(t.y, h), a),
            };
          },
          scaleTo: function (t, e) {
            this.scale(t / this.zoomFactor, e);
          },
          scale: function (t, e) {
            (t = this.scaleZoomFactor(t)),
              this.addOffset({
                x: (t - 1) * (e.x + this.offset.x),
                y: (t - 1) * (e.y + this.offset.y),
              }),
              n(this.el, this.options.zoomUpdateEventName);
          },
          scaleZoomFactor: function (t) {
            var e = this.zoomFactor;
            return (
              (this.zoomFactor *= t),
              (this.zoomFactor = Math.min(
                this.options.maxZoom,
                Math.max(this.zoomFactor, this.options.minZoom)
              )),
              this.zoomFactor / e
            );
          },
          canDrag: function () {
            return this.options.draggableUnzoomed || !o(this.zoomFactor, 1);
          },
          drag: function (t, e) {
            e &&
              (this.options.lockDragAxis
                ? Math.abs(t.x - e.x) > Math.abs(t.y - e.y)
                  ? this.addOffset({ x: -(t.x - e.x), y: 0 })
                  : this.addOffset({ y: -(t.y - e.y), x: 0 })
                : this.addOffset({ y: -(t.y - e.y), x: -(t.x - e.x) }),
              n(this.el, this.options.dragUpdateEventName));
          },
          getTouchCenter: function (t) {
            return this.getVectorAvg(t);
          },
          getVectorAvg: function (t) {
            return {
              x:
                t
                  .map(function (t) {
                    return t.x;
                  })
                  .reduce(i) / t.length,
              y:
                t
                  .map(function (t) {
                    return t.y;
                  })
                  .reduce(i) / t.length,
            };
          },
          addOffset: function (t) {
            this.offset = { x: this.offset.x + t.x, y: this.offset.y + t.y };
          },
          sanitize: function () {
            this.zoomFactor < this.options.zoomOutFactor
              ? this.zoomOutAnimation()
              : this.isInsaneOffset(this.offset) &&
                this.sanitizeOffsetAnimation();
          },
          isInsaneOffset: function (t) {
            var e = this.sanitizeOffset(t);
            return e.x !== t.x || e.y !== t.y;
          },
          sanitizeOffsetAnimation: function () {
            var t = this.sanitizeOffset(this.offset),
              e = { x: this.offset.x, y: this.offset.y },
              n = function (n) {
                (this.offset.x = e.x + n * (t.x - e.x)),
                  (this.offset.y = e.y + n * (t.y - e.y)),
                  this.update();
              }.bind(this);
            this.animate(this.options.animationDuration, n, this.swing);
          },
          zoomOutAnimation: function () {
            if (1 !== this.zoomFactor) {
              var t = this.zoomFactor,
                e = 1,
                n = this.getCurrentZoomCenter(),
                i = function (i) {
                  this.scaleTo(t + i * (e - t), n);
                }.bind(this);
              this.animate(this.options.animationDuration, i, this.swing);
            }
          },
          updateAspectRatio: function () {
            this.setContainerY(this.container.parentElement.offsetHeight);
          },
          getInitialZoomFactor: function () {
            var t = this.container.offsetWidth / this.el.offsetWidth,
              e = this.container.offsetHeight / this.el.offsetHeight;
            return Math.min(t, e);
          },
          getAspectRatio: function () {
            return this.el.offsetWidth / this.el.offsetHeight;
          },
          getCurrentZoomCenter: function () {
            var t = this.offset.x - this.initialOffset.x,
              e = -1 * this.offset.x - t / (1 / this.zoomFactor - 1),
              n = this.offset.y - this.initialOffset.y,
              i = -1 * this.offset.y - n / (1 / this.zoomFactor - 1);
            return { x: e, y: i };
          },
          getTouches: function (t) {
            var e = this.container.getBoundingClientRect(),
              n = document.documentElement.scrollTop || document.body.scrollTop,
              i =
                document.documentElement.scrollLeft || document.body.scrollLeft,
              o = e.top + n,
              s = e.left + i;
            return Array.prototype.slice.call(t.touches).map(function (t) {
              return { x: t.pageX - s, y: t.pageY - o };
            });
          },
          animate: function (t, e, n, i) {
            var o = new Date().getTime(),
              s = function () {
                if (this.inAnimation) {
                  var a = new Date().getTime() - o,
                    r = a / t;
                  a >= t
                    ? (e(1),
                      i && i(),
                      this.update(),
                      this.stopAnimation(),
                      this.update())
                    : (n && (r = n(r)),
                      e(r),
                      this.update(),
                      requestAnimationFrame(s));
                }
              }.bind(this);
            (this.inAnimation = !0), requestAnimationFrame(s);
          },
          stopAnimation: function () {
            this.inAnimation = !1;
          },
          swing: function (t) {
            return -Math.cos(t * Math.PI) / 2 + 0.5;
          },
          getContainerX: function () {
            return this.container.offsetWidth;
          },
          getContainerY: function () {
            return this.container.offsetHeight;
          },
          setContainerY: function (t) {
            return (this.container.style.height = t + "px");
          },
          setupMarkup: function () {
            (this.container = e('<div class="pinch-zoom-container"></div>')),
              this.el.parentNode.insertBefore(this.container, this.el),
              this.container.appendChild(this.el),
              (this.container.style.overflow = "hidden"),
              (this.container.style.position = "relative"),
              (this.el.style.webkitTransformOrigin = "0% 0%"),
              (this.el.style.mozTransformOrigin = "0% 0%"),
              (this.el.style.msTransformOrigin = "0% 0%"),
              (this.el.style.oTransformOrigin = "0% 0%"),
              (this.el.style.transformOrigin = "0% 0%"),
              (this.el.style.position = "absolute");
          },
          end: function () {
            (this.hasInteraction = !1), this.sanitize(), this.update();
          },
          bindEvents: function () {
            var t = this;
            s(this.container, this),
              window.addEventListener("resize", this.update.bind(this)),
              Array.from(this.el.querySelectorAll("img")).forEach(function (e) {
                e.addEventListener("load", t.update.bind(t));
              }),
              "IMG" === this.el.nodeName &&
                this.el.addEventListener("load", this.update.bind(this));
          },
          update: function (t) {
            this.updatePlaned ||
              ((this.updatePlaned = !0),
              window.setTimeout(
                function () {
                  (this.updatePlaned = !1),
                    this.updateAspectRatio(),
                    t && "resize" === t.type && this.computeInitialOffset(),
                    t && "load" === t.type && this.setupInitialOffset();
                  var e = this.getInitialZoomFactor() * this.zoomFactor,
                    n = -this.offset.x / e,
                    i = -this.offset.y / e,
                    o =
                      "scale3d(" +
                      e +
                      ", " +
                      e +
                      ",1) translate3d(" +
                      n +
                      "px," +
                      i +
                      "px,0px)",
                    s =
                      "scale(" +
                      e +
                      ", " +
                      e +
                      ") translate(" +
                      n +
                      "px," +
                      i +
                      "px)",
                    a = function () {
                      this.clone &&
                        (this.clone.parentNode.removeChild(this.clone),
                        delete this.clone);
                    }.bind(this);
                  !this.options.use2d || this.hasInteraction || this.inAnimation
                    ? ((this.is3d = !0),
                      a(),
                      (this.el.style.webkitTransform = o),
                      (this.el.style.mozTransform = s),
                      (this.el.style.msTransform = s),
                      (this.el.style.oTransform = s),
                      (this.el.style.transform = o))
                    : (this.is3d &&
                        ((this.clone = this.el.cloneNode(!0)),
                        (this.clone.style.pointerEvents = "none"),
                        (this.clone.style.display = "none"),
                        this.container.appendChild(this.clone),
                        window.setTimeout(a, 200)),
                      (this.el.style.webkitTransform = s),
                      (this.el.style.mozTransform = s),
                      (this.el.style.msTransform = s),
                      (this.el.style.oTransform = s),
                      (this.el.style.transform = s),
                      (this.is3d = !1));
                }.bind(this),
                0
              ));
          },
          enable: function () {
            this.enabled = !0;
          },
          disable: function () {
            this.enabled = !1;
          },
        };
        var s = function (t, e) {
          var n = null,
            i = 0,
            o = null,
            s = null,
            a = function (t, i) {
              if (n !== t) {
                if (n && !t)
                  switch (n) {
                    case "zoom":
                      e.handleZoomEnd(i);
                      break;
                    case "drag":
                      e.handleDragEnd(i);
                  }
                switch (t) {
                  case "zoom":
                    e.handleZoomStart(i);
                    break;
                  case "drag":
                    e.handleDragStart(i);
                }
              }
              n = t;
            },
            r = function (t) {
              2 === i
                ? a("zoom")
                : 1 === i && e.canDrag()
                ? a("drag", t)
                : a(null, t);
            },
            h = function (t) {
              return Array.from(t).map(function (t) {
                return { x: t.pageX, y: t.pageY };
              });
            },
            c = function (t, e) {
              var n, i;
              return (n = t.x - e.x), (i = t.y - e.y), Math.sqrt(n * n + i * i);
            },
            l = function (t, e) {
              var n = c(t[0], t[1]),
                i = c(e[0], e[1]);
              return i / n;
            },
            u = function (t) {
              t.stopPropagation(), t.preventDefault();
            },
            f = function (t) {
              var s = new Date().getTime();
              if ((i > 1 && (o = null), 300 > s - o))
                switch ((u(t), e.handleDoubleTap(t), n)) {
                  case "zoom":
                    e.handleZoomEnd(t);
                    break;
                  case "drag":
                    e.handleDragEnd(t);
                }
              else e.isDoubleTap = !1;
              1 === i && (o = s);
            },
            d = !0;
          t.addEventListener("touchstart", function (t) {
            e.enabled && ((d = !0), (i = t.touches.length), f(t));
          }),
            t.addEventListener("touchmove", function (t) {
              if (e.enabled && !e.isDoubleTap) {
                if (d) r(t), n && u(t), (s = h(t.touches));
                else {
                  switch (n) {
                    case "zoom":
                      e.handleZoom(t, l(s, h(t.touches)));
                      break;
                    case "drag":
                      e.handleDrag(t);
                  }
                  n && (u(t), e.update());
                }
                d = !1;
              }
            }),
            t.addEventListener("touchend", function (t) {
              e.enabled && ((i = t.touches.length), r(t));
            });
        };
        return t;
      },
      o = i();
    t["default"] = o;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], function (n) {
          return e(t, n);
        })
      : "object" == typeof exports
      ? e(t, require("jquery"))
      : e(t, t.jQuery);
  })("undefined" != typeof window ? window : this, function (t, e) {
    "use strict";
    function n(t, e) {
      for (var n = t.length; --n; )
        if (Math.round(+t[n]) !== Math.round(+e[n])) return !1;
      return !0;
    }
    function i(t) {
      var n = { range: !0, animate: !0 };
      return "boolean" == typeof t ? (n.animate = t) : e.extend(n, t), n;
    }
    function o(t, n, i, o, s, a, r, h, c) {
      "array" === e.type(t)
        ? (this.elements = [+t[0], +t[2], +t[4], +t[1], +t[3], +t[5], 0, 0, 1])
        : (this.elements = [t, n, i, o, s, a, r || 0, h || 0, c || 1]);
    }
    function s(t, e, n) {
      this.elements = [t, e, n];
    }
    function a(t, n) {
      if (!(this instanceof a)) return new a(t, n);
      1 !== t.nodeType && e.error("Panzoom called on non-Element node"),
        e.contains(r, t) ||
          e.error("Panzoom element must be attached to the document");
      var i = e.data(t, h);
      if (i) return i;
      (this.options = n = e.extend({}, a.defaults, n)), (this.elem = t);
      var o = (this.$elem = e(t));
      (this.$set = n.$set && n.$set.length ? n.$set : o),
        (this.$doc = e(t.ownerDocument || r)),
        (this.$parent = o.parent()),
        (this.parent = this.$parent[0]),
        (this.isSVG =
          d.test(t.namespaceURI) && "svg" !== t.nodeName.toLowerCase()),
        (this.panning = !1),
        this._buildTransform(),
        (this._transform = e.cssProps.transform
          ? e.cssProps.transform.replace(f, "-$1").toLowerCase()
          : "transform"),
        this._buildTransition(),
        this.resetDimensions();
      var s = e(),
        c = this;
      e.each(["$zoomIn", "$zoomOut", "$zoomRange", "$reset"], function (t, e) {
        c[e] = n[e] || s;
      }),
        this.enable(),
        (this.scale = this.getMatrix()[0]),
        this._checkPanWhenZoomed(),
        e.data(t, h, this);
    }
    var r = t.document,
      h = "__pz__",
      c = Array.prototype.slice,
      l = /trident\/7./i,
      u = (function () {
        if (l.test(navigator.userAgent)) return !1;
        var t = r.createElement("input");
        return (
          t.setAttribute("oninput", "return"), "function" == typeof t.oninput
        );
      })(),
      f = /([A-Z])/g,
      d = /^http:[\w\.\/]+svg$/,
      p = "(\\-?\\d[\\d\\.e-]*)",
      g = "\\,?\\s*",
      m = new RegExp(
        "^matrix\\(" + p + g + p + g + p + g + p + g + p + g + p + "\\)$"
      );
    return (
      (o.prototype = {
        x: function (t) {
          var e = t instanceof s,
            n = this.elements,
            i = t.elements;
          return e && 3 === i.length
            ? new s(
                n[0] * i[0] + n[1] * i[1] + n[2] * i[2],
                n[3] * i[0] + n[4] * i[1] + n[5] * i[2],
                n[6] * i[0] + n[7] * i[1] + n[8] * i[2]
              )
            : i.length === n.length
            ? new o(
                n[0] * i[0] + n[1] * i[3] + n[2] * i[6],
                n[0] * i[1] + n[1] * i[4] + n[2] * i[7],
                n[0] * i[2] + n[1] * i[5] + n[2] * i[8],
                n[3] * i[0] + n[4] * i[3] + n[5] * i[6],
                n[3] * i[1] + n[4] * i[4] + n[5] * i[7],
                n[3] * i[2] + n[4] * i[5] + n[5] * i[8],
                n[6] * i[0] + n[7] * i[3] + n[8] * i[6],
                n[6] * i[1] + n[7] * i[4] + n[8] * i[7],
                n[6] * i[2] + n[7] * i[5] + n[8] * i[8]
              )
            : !1;
        },
        inverse: function () {
          var t = 1 / this.determinant(),
            e = this.elements;
          return new o(
            t * (e[8] * e[4] - e[7] * e[5]),
            t * -(e[8] * e[1] - e[7] * e[2]),
            t * (e[5] * e[1] - e[4] * e[2]),
            t * -(e[8] * e[3] - e[6] * e[5]),
            t * (e[8] * e[0] - e[6] * e[2]),
            t * -(e[5] * e[0] - e[3] * e[2]),
            t * (e[7] * e[3] - e[6] * e[4]),
            t * -(e[7] * e[0] - e[6] * e[1]),
            t * (e[4] * e[0] - e[3] * e[1])
          );
        },
        determinant: function () {
          var t = this.elements;
          return (
            t[0] * (t[8] * t[4] - t[7] * t[5]) -
            t[3] * (t[8] * t[1] - t[7] * t[2]) +
            t[6] * (t[5] * t[1] - t[4] * t[2])
          );
        },
      }),
      (s.prototype.e = o.prototype.e = function (t) {
        return this.elements[t];
      }),
      (a.rmatrix = m),
      (a.defaults = {
        eventNamespace: ".panzoom",
        transition: !0,
        cursor: "",
        disablePan: !1,
        disableZoom: !1,
        disableXAxis: !1,
        disableYAxis: !1,
        which: 1,
        increment: 0.3,
        linearZoom: !1,
        panOnlyWhenZoomed: !1,
        minScale: 0.3,
        maxScale: 6,
        rangeStep: 0.05,
        duration: 200,
        easing: "ease-in-out",
        contain: !1,
      }),
      (a.prototype = {
        constructor: a,
        instance: function () {
          return this;
        },
        enable: function () {
          this._initStyle(), this._bind(), (this.disabled = !1);
        },
        disable: function () {
          (this.disabled = !0), this._resetStyle(), this._unbind();
        },
        isDisabled: function () {
          return this.disabled;
        },
        destroy: function () {
          this.disable(), e.removeData(this.elem, h);
        },
        resetDimensions: function () {
          this.container = this.parent.getBoundingClientRect();
          var t = this.elem,
            n = t.getBoundingClientRect(),
            i = Math.abs(this.scale);
          this.dimensions = {
            width: n.width,
            height: n.height,
            left: e.css(t, "left", !0) || 0,
            top: e.css(t, "top", !0) || 0,
            border: {
              top: e.css(t, "borderTopWidth", !0) * i || 0,
              bottom: e.css(t, "borderBottomWidth", !0) * i || 0,
              left: e.css(t, "borderLeftWidth", !0) * i || 0,
              right: e.css(t, "borderRightWidth", !0) * i || 0,
            },
            margin: {
              top: e.css(t, "marginTop", !0) * i || 0,
              left: e.css(t, "marginLeft", !0) * i || 0,
            },
          };
        },
        reset: function (t) {
          t = i(t);
          var e = this.setMatrix(this._origTransform, t);
          t.silent || this._trigger("reset", e);
        },
        resetZoom: function (t) {
          t = i(t);
          var e = this.getMatrix(this._origTransform);
          (t.dValue = e[3]), this.zoom(e[0], t);
        },
        resetPan: function (t) {
          var e = this.getMatrix(this._origTransform);
          this.pan(e[4], e[5], i(t));
        },
        setTransform: function (t) {
          for (var n = this.$set, i = n.length; i--; )
            e.style(n[i], "transform", t),
              this.isSVG && n[i].setAttribute("transform", t);
        },
        getTransform: function (t) {
          var n = this.$set,
            i = n[0];
          return (
            t
              ? this.setTransform(t)
              : ((t = e.style(i, "transform")),
                !this.isSVG ||
                  (t && "none" !== t) ||
                  (t = e.attr(i, "transform") || "none")),
            "none" === t ||
              m.test(t) ||
              this.setTransform((t = e.css(i, "transform"))),
            t || "none"
          );
        },
        getMatrix: function (t) {
          var e = m.exec(t || this.getTransform());
          return e && e.shift(), e || [1, 0, 0, 1, 0, 0];
        },
        setMatrix: function (t, n) {
          if (!this.disabled) {
            n || (n = {}), "string" == typeof t && (t = this.getMatrix(t));
            var i = +t[0],
              o =
                "undefined" != typeof n.contain
                  ? n.contain
                  : this.options.contain;
            if (o) {
              var s = n.dims;
              s || (this.resetDimensions(), (s = this.dimensions));
              var a,
                r,
                h,
                c = this.container,
                l = s.width,
                u = s.height,
                f = c.width,
                d = c.height,
                p = f / l,
                g = d / u;
              "center" !== this.$parent.css("textAlign") ||
              "inline" !== e.css(this.elem, "display")
                ? ((h = (l - this.elem.offsetWidth) / 2),
                  (a = h - s.border.left),
                  (r = l - f - h + s.border.right))
                : (a = r = (l - f) / 2);
              var m = (u - d) / 2 + s.border.top,
                v = (u - d) / 2 - s.border.top - s.border.bottom;
              "invert" === o || ("automatic" === o && 1.01 > p)
                ? (t[4] = Math.max(Math.min(t[4], a - s.border.left), -r))
                : (t[4] = Math.min(Math.max(t[4], a), -r)),
                "invert" === o || ("automatic" === o && 1.01 > g)
                  ? (t[5] = Math.max(Math.min(t[5], m - s.border.top), -v))
                  : (t[5] = Math.min(Math.max(t[5], m), -v));
            }
            if (
              ("skip" !== n.animate && this.transition(!n.animate),
              n.range && this.$zoomRange.val(i),
              this.options.disableXAxis || this.options.disableYAxis)
            ) {
              var y = this.getMatrix();
              this.options.disableXAxis && (t[4] = y[4]),
                this.options.disableYAxis && (t[5] = y[5]);
            }
            return (
              this.setTransform("matrix(" + t.join(",") + ")"),
              (this.scale = i),
              this._checkPanWhenZoomed(i),
              n.silent || this._trigger("change", t),
              t
            );
          }
        },
        isPanning: function () {
          return this.panning;
        },
        transition: function (t) {
          if (this._transition)
            for (
              var n = t || !this.options.transition ? "none" : this._transition,
                i = this.$set,
                o = i.length;
              o--;

            )
              e.style(i[o], "transition") !== n &&
                e.style(i[o], "transition", n);
        },
        pan: function (t, e, n) {
          if (!this.options.disablePan) {
            n || (n = {});
            var i = n.matrix;
            i || (i = this.getMatrix()),
              n.relative && ((t += +i[4]), (e += +i[5])),
              (i[4] = t),
              (i[5] = e),
              this.setMatrix(i, n),
              n.silent || this._trigger("pan", i[4], i[5]);
          }
        },
        zoom: function (t, n) {
          "object" == typeof t ? ((n = t), (t = null)) : n || (n = {});
          var i = e.extend({}, this.options, n);
          if (!i.disableZoom) {
            var a = !1,
              r = i.matrix || this.getMatrix(),
              h = +r[0];
            "number" != typeof t &&
              ((t = i.linearZoom
                ? h + i.increment * (t ? -1 : 1)
                : t
                ? h / (1 + i.increment)
                : h * (1 + i.increment)),
              (a = !0)),
              (t = Math.max(Math.min(t, i.maxScale), i.minScale));
            var c = i.focal;
            if (c && !i.disablePan) {
              this.resetDimensions();
              var l = (i.dims = this.dimensions),
                u = c.clientX,
                f = c.clientY;
              this.isSVG || ((u -= l.width / h / 2), (f -= l.height / h / 2));
              var d = new s(u, f, 1),
                p = new o(r),
                g = this.parentOffset || this.$parent.offset(),
                m = new o(
                  1,
                  0,
                  g.left - this.$doc.scrollLeft(),
                  0,
                  1,
                  g.top - this.$doc.scrollTop()
                ),
                v = p.inverse().x(m.inverse().x(d)),
                y = t / r[0];
              (p = p.x(new o([y, 0, 0, y, 0, 0]))),
                (d = m.x(p.x(v))),
                (r[4] = +r[4] + (u - d.e(0))),
                (r[5] = +r[5] + (f - d.e(1)));
            }
            (r[0] = t),
              (r[3] = "number" == typeof i.dValue ? i.dValue : t),
              this.setMatrix(r, {
                animate: "undefined" != typeof i.animate ? i.animate : a,
                range: !i.noSetRange,
              }),
              i.silent || this._trigger("zoom", r[0], i);
          }
        },
        option: function (t, n) {
          var i;
          if (!t) return e.extend({}, this.options);
          if ("string" == typeof t) {
            if (1 === arguments.length)
              return void 0 !== this.options[t] ? this.options[t] : null;
            (i = {}), (i[t] = n);
          } else i = t;
          this._setOptions(i);
        },
        _setOptions: function (t) {
          e.each(
            t,
            e.proxy(function (t, n) {
              switch (t) {
                case "disablePan":
                  this._resetStyle();
                case "$zoomIn":
                case "$zoomOut":
                case "$zoomRange":
                case "$reset":
                case "disableZoom":
                case "onStart":
                case "onChange":
                case "onZoom":
                case "onPan":
                case "onEnd":
                case "onReset":
                case "eventNamespace":
                  this._unbind();
              }
              switch (((this.options[t] = n), t)) {
                case "disablePan":
                  this._initStyle();
                case "$zoomIn":
                case "$zoomOut":
                case "$zoomRange":
                case "$reset":
                  this[t] = n;
                case "disableZoom":
                case "onStart":
                case "onChange":
                case "onZoom":
                case "onPan":
                case "onEnd":
                case "onReset":
                case "eventNamespace":
                  this._bind();
                  break;
                case "cursor":
                  e.style(this.elem, "cursor", n);
                  break;
                case "minScale":
                  this.$zoomRange.attr("min", n);
                  break;
                case "maxScale":
                  this.$zoomRange.attr("max", n);
                  break;
                case "rangeStep":
                  this.$zoomRange.attr("step", n);
                  break;
                case "startTransform":
                  this._buildTransform();
                  break;
                case "duration":
                case "easing":
                  this._buildTransition();
                case "transition":
                  this.transition();
                  break;
                case "panOnlyWhenZoomed":
                  this._checkPanWhenZoomed();
                  break;
                case "$set":
                  n instanceof e &&
                    n.length &&
                    ((this.$set = n),
                    this._initStyle(),
                    this._buildTransform());
              }
            }, this)
          );
        },
        _checkPanWhenZoomed: function (t) {
          var e = this.options;
          if (e.panOnlyWhenZoomed) {
            t || (t = this.getMatrix()[0]);
            var n = t <= e.minScale;
            e.disablePan !== n && this.option("disablePan", n);
          }
        },
        _initStyle: function () {
          var t = { "transform-origin": this.isSVG ? "0 0" : "50% 50%" };
          this.options.disablePan || (t.cursor = this.options.cursor),
            this.$set.css(t);
          var n = this.$parent;
          n.length &&
            !e.nodeName(this.parent, "body") &&
            ((t = { overflow: "hidden" }),
            "static" === n.css("position") && (t.position = "relative"),
            n.css(t));
        },
        _resetStyle: function () {
          this.$elem.css({ cursor: "", transition: "" }),
            this.$parent.css({ overflow: "", position: "" });
        },
        _bind: function () {
          var t = this,
            n = this.options,
            i = n.eventNamespace,
            o = "mousedown" + i + " pointerdown" + i + " MSPointerDown" + i,
            s = "touchstart" + i + " " + o,
            r =
              "touchend" +
              i +
              " click" +
              i +
              " pointerup" +
              i +
              " MSPointerUp" +
              i,
            h = {},
            c = this.$reset,
            l = this.$zoomRange;
          if (
            (e.each(
              ["Start", "Change", "Zoom", "Pan", "End", "Reset"],
              function () {
                var t = n["on" + this];
                e.isFunction(t) && (h["panzoom" + this.toLowerCase() + i] = t);
              }
            ),
            (n.disablePan && n.disableZoom) ||
              ((h[s] = function (e) {
                var i;
                ("touchstart" === e.type
                  ? !(i = e.touches || e.originalEvent.touches) ||
                    ((1 !== i.length || n.disablePan) && 2 !== i.length)
                  : n.disablePan ||
                    (e.which || e.originalEvent.which) !== n.which) ||
                  (e.preventDefault(), e.stopPropagation(), t._startMove(e, i));
              }),
              3 === n.which && (h.contextmenu = !1)),
            this.$elem.on(h),
            c.length &&
              c.on(r, function (e) {
                e.preventDefault(), t.reset();
              }),
            l.length &&
              l
                .attr({
                  step:
                    (n.rangeStep === a.defaults.rangeStep && l.attr("step")) ||
                    n.rangeStep,
                  min: n.minScale,
                  max: n.maxScale,
                })
                .prop({ value: this.getMatrix()[0] }),
            !n.disableZoom)
          ) {
            var f = this.$zoomIn,
              d = this.$zoomOut;
            f.length &&
              d.length &&
              (f.on(r, function (e) {
                e.preventDefault(), t.zoom();
              }),
              d.on(r, function (e) {
                e.preventDefault(), t.zoom(!0);
              })),
              l.length &&
                ((h = {}),
                (h[o] = function () {
                  t.transition(!0);
                }),
                (h[(u ? "input" : "change") + i] = function () {
                  t.zoom(+this.value, { noSetRange: !0 });
                }),
                l.on(h));
          }
        },
        _unbind: function () {
          this.$elem
            .add(this.$zoomIn)
            .add(this.$zoomOut)
            .add(this.$reset)
            .off(this.options.eventNamespace);
        },
        _buildTransform: function () {
          return (this._origTransform = this.getTransform(
            this.options.startTransform
          ));
        },
        _buildTransition: function () {
          if (this._transform) {
            var t = this.options;
            this._transition =
              this._transform + " " + t.duration + "ms " + t.easing;
          }
        },
        _getDistance: function (t) {
          var e = t[0],
            n = t[1];
          return Math.sqrt(
            Math.pow(Math.abs(n.clientX - e.clientX), 2) +
              Math.pow(Math.abs(n.clientY - e.clientY), 2)
          );
        },
        _getMiddle: function (t) {
          var e = t[0],
            n = t[1];
          return {
            clientX: (n.clientX - e.clientX) / 2 + e.clientX,
            clientY: (n.clientY - e.clientY) / 2 + e.clientY,
          };
        },
        _trigger: function (t) {
          "string" == typeof t && (t = "panzoom" + t),
            this.$elem.triggerHandler(t, [this].concat(c.call(arguments, 1)));
        },
        _startMove: function (t, i) {
          if (!this.panning) {
            var o,
              s,
              a,
              h,
              c,
              l,
              u,
              f,
              d = this,
              p = this.options,
              g = p.eventNamespace,
              m = this.getMatrix(),
              v = m.slice(0),
              y = +v[4],
              w = +v[5],
              b = { matrix: m, animate: "skip" },
              x = t.type;
            "pointerdown" === x
              ? ((o = "pointermove"), (s = "pointerup"))
              : "touchstart" === x
              ? ((o = "touchmove"), (s = "touchend"))
              : "MSPointerDown" === x
              ? ((o = "MSPointerMove"), (s = "MSPointerUp"))
              : ((o = "mousemove"), (s = "mouseup")),
              (o += g),
              (s += g),
              this.transition(!0),
              (this.panning = !0),
              this._trigger("start", t, i);
            var _ = function (t, e) {
              if (e) {
                if (2 === e.length) {
                  if (null != a) return;
                  return (
                    (a = d._getDistance(e)),
                    (h = +m[0]),
                    void (c = d._getMiddle(e))
                  );
                }
                if (null != l) return;
                (f = e[0]) && ((l = f.pageX), (u = f.pageY));
              }
              null == l && ((l = t.pageX), (u = t.pageY));
            };
            _(t, i);
            var M = function (t) {
              var e;
              if (
                (t.preventDefault(),
                (i = t.touches || t.originalEvent.touches),
                _(t, i),
                i)
              ) {
                if (2 === i.length) {
                  var n = d._getMiddle(i),
                    o = d._getDistance(i) - a;
                  return (
                    d.zoom(o * (p.increment / 100) + h, {
                      focal: n,
                      matrix: m,
                      animate: "skip",
                    }),
                    d.pan(
                      +m[4] + n.clientX - c.clientX,
                      +m[5] + n.clientY - c.clientY,
                      b
                    ),
                    void (c = n)
                  );
                }
                e = i[0] || { pageX: 0, pageY: 0 };
              }
              e || (e = t), d.pan(y + e.pageX - l, w + e.pageY - u, b);
            };
            e(r)
              .off(g)
              .on(o, M)
              .on(s, function (t) {
                t.preventDefault(),
                  e(this).off(g),
                  (d.panning = !1),
                  (t.type = "panzoomend"),
                  d._trigger(t, m, !n(m, v));
              });
          }
        },
      }),
      (e.Panzoom = a),
      (e.fn.panzoom = function (t) {
        var n, i, o, s;
        return "string" == typeof t
          ? ((s = []),
            (i = c.call(arguments, 1)),
            this.each(function () {
              (n = e.data(this, h)),
                n
                  ? "_" !== t.charAt(0) &&
                    "function" == typeof (o = n[t]) &&
                    void 0 !== (o = o.apply(n, i)) &&
                    s.push(o)
                  : s.push(void 0);
            }),
            s.length ? (1 === s.length ? s[0] : s) : this)
          : this.each(function () {
              new a(this, t);
            });
      }),
      a
    );
  }),
  (function (t) {
    "use strict";
    function e() {
      var t = a();
      t !== r && ((r = t), l.trigger("orientationchange"));
    }
    function n(e, n, i, o) {
      var s = i.type;
      (i.type = n), t.event.dispatch.call(e, i, o), (i.type = s);
    }
    t.attrFn = t.attrFn || {};
    var i = "ontouchstart" in window,
      o = {
        tap_pixel_range: 5,
        swipe_h_threshold: 50,
        swipe_v_threshold: 50,
        taphold_threshold: 750,
        doubletap_int: 500,
        touch_capable: i,
        orientation_support:
          "orientation" in window && "onorientationchange" in window,
        startevent: i ? "touchstart" : "mousedown",
        endevent: i ? "touchend" : "mouseup",
        moveevent: i ? "touchmove" : "mousemove",
        tapevent: i ? "tap" : "click",
        scrollevent: i ? "touchmove" : "scroll",
        hold_timer: null,
        tap_timer: null,
      };
    (t.isTouchCapable = function () {
      return o.touch_capable;
    }),
      (t.getStartEvent = function () {
        return o.startevent;
      }),
      (t.getEndEvent = function () {
        return o.endevent;
      }),
      (t.getMoveEvent = function () {
        return o.moveevent;
      }),
      (t.getTapEvent = function () {
        return o.tapevent;
      }),
      (t.getScrollEvent = function () {
        return o.scrollevent;
      }),
      t.each(
        [
          "tapstart",
          "tapend",
          "tapmove",
          "tap",
          "tap2",
          "tap3",
          "tap4",
          "singletap",
          "doubletap",
          "taphold",
          "swipe",
          "swipeup",
          "swiperight",
          "swipedown",
          "swipeleft",
          "swipeend",
          "scrollstart",
          "scrollend",
          "orientationchange",
        ],
        function (e, n) {
          (t.fn[n] = function (t) {
            return t ? this.on(n, t) : this.trigger(n);
          }),
            (t.attrFn[n] = !0);
        }
      ),
      (t.event.special.tapstart = {
        setup: function () {
          var e = this,
            i = t(e);
          i.on(o.startevent, function s(t) {
            if ((i.data("callee", s), t.which && 1 !== t.which)) return !1;
            var a = t.originalEvent,
              r = {
                position: {
                  x: o.touch_capable ? a.touches[0].screenX : t.screenX,
                  y: o.touch_capable ? a.touches[0].screenY : t.screenY,
                },
                offset: {
                  x: o.touch_capable
                    ? Math.round(
                        a.changedTouches[0].pageX -
                          (i.offset() ? i.offset().left : 0)
                      )
                    : Math.round(t.pageX - (i.offset() ? i.offset().left : 0)),
                  y: o.touch_capable
                    ? Math.round(
                        a.changedTouches[0].pageY -
                          (i.offset() ? i.offset().top : 0)
                      )
                    : Math.round(t.pageY - (i.offset() ? i.offset().top : 0)),
                },
                time: Date.now(),
                target: t.target,
              };
            return n(e, "tapstart", t, r), !0;
          });
        },
        remove: function () {
          t(this).off(o.startevent, t(this).data.callee);
        },
      }),
      (t.event.special.tapmove = {
        setup: function () {
          var e = this,
            i = t(e);
          i.on(o.moveevent, function s(t) {
            i.data("callee", s);
            var a = t.originalEvent,
              r = {
                position: {
                  x: o.touch_capable ? a.touches[0].screenX : t.screenX,
                  y: o.touch_capable ? a.touches[0].screenY : t.screenY,
                },
                offset: {
                  x: o.touch_capable
                    ? Math.round(
                        a.changedTouches[0].pageX -
                          (i.offset() ? i.offset().left : 0)
                      )
                    : Math.round(t.pageX - (i.offset() ? i.offset().left : 0)),
                  y: o.touch_capable
                    ? Math.round(
                        a.changedTouches[0].pageY -
                          (i.offset() ? i.offset().top : 0)
                      )
                    : Math.round(t.pageY - (i.offset() ? i.offset().top : 0)),
                },
                time: Date.now(),
                target: t.target,
              };
            return n(e, "tapmove", t, r), !0;
          });
        },
        remove: function () {
          t(this).off(o.moveevent, t(this).data.callee);
        },
      }),
      (t.event.special.tapend = {
        setup: function () {
          var e = this,
            i = t(e);
          i.on(o.endevent, function s(t) {
            i.data("callee", s);
            var a = t.originalEvent,
              r = {
                position: {
                  x: o.touch_capable ? a.changedTouches[0].screenX : t.screenX,
                  y: o.touch_capable ? a.changedTouches[0].screenY : t.screenY,
                },
                offset: {
                  x: o.touch_capable
                    ? Math.round(
                        a.changedTouches[0].pageX -
                          (i.offset() ? i.offset().left : 0)
                      )
                    : Math.round(t.pageX - (i.offset() ? i.offset().left : 0)),
                  y: o.touch_capable
                    ? Math.round(
                        a.changedTouches[0].pageY -
                          (i.offset() ? i.offset().top : 0)
                      )
                    : Math.round(t.pageY - (i.offset() ? i.offset().top : 0)),
                },
                time: Date.now(),
                target: t.target,
              };
            return n(e, "tapend", t, r), !0;
          });
        },
        remove: function () {
          t(this).off(o.endevent, t(this).data.callee);
        },
      }),
      (t.event.special.taphold = {
        setup: function () {
          var e,
            i = this,
            s = t(i),
            a = { x: 0, y: 0 },
            r = 0,
            h = 0;
          s.on(o.startevent, function c(t) {
            if (t.which && 1 !== t.which) return !1;
            s.data("tapheld", !1), (e = t.target);
            var l = t.originalEvent,
              u = Date.now(),
              f = {
                x: o.touch_capable ? l.touches[0].screenX : t.screenX,
                y: o.touch_capable ? l.touches[0].screenY : t.screenY,
              },
              d = {
                x: o.touch_capable
                  ? l.touches[0].pageX - l.touches[0].target.offsetLeft
                  : t.offsetX,
                y: o.touch_capable
                  ? l.touches[0].pageY - l.touches[0].target.offsetTop
                  : t.offsetY,
              };
            (a.x = t.originalEvent.targetTouches
              ? t.originalEvent.targetTouches[0].pageX
              : t.pageX),
              (a.y = t.originalEvent.targetTouches
                ? t.originalEvent.targetTouches[0].pageY
                : t.pageY),
              (r = a.x),
              (h = a.y);
            var p = s.parent().data("threshold")
                ? s.parent().data("threshold")
                : s.data("threshold"),
              g =
                "undefined" != typeof p && p !== !1 && parseInt(p)
                  ? parseInt(p)
                  : o.taphold_threshold;
            return (
              (o.hold_timer = window.setTimeout(function () {
                var p = a.x - r,
                  g = a.y - h;
                if (
                  t.target == e &&
                  ((a.x == r && a.y == h) ||
                    (p >= -o.tap_pixel_range &&
                      p <= o.tap_pixel_range &&
                      g >= -o.tap_pixel_range &&
                      g <= o.tap_pixel_range))
                ) {
                  s.data("tapheld", !0);
                  var m = Date.now(),
                    v = {
                      x: o.touch_capable ? l.touches[0].screenX : t.screenX,
                      y: o.touch_capable ? l.touches[0].screenY : t.screenY,
                    },
                    y = {
                      x: o.touch_capable
                        ? Math.round(
                            l.changedTouches[0].pageX -
                              (s.offset() ? s.offset().left : 0)
                          )
                        : Math.round(
                            t.pageX - (s.offset() ? s.offset().left : 0)
                          ),
                      y: o.touch_capable
                        ? Math.round(
                            l.changedTouches[0].pageY -
                              (s.offset() ? s.offset().top : 0)
                          )
                        : Math.round(
                            t.pageY - (s.offset() ? s.offset().top : 0)
                          ),
                    },
                    w = m - u,
                    b = {
                      startTime: u,
                      endTime: m,
                      startPosition: f,
                      startOffset: d,
                      endPosition: v,
                      endOffset: y,
                      duration: w,
                      target: t.target,
                    };
                  s.data("callee1", c), n(i, "taphold", t, b);
                }
              }, g)),
              !0
            );
          })
            .on(o.endevent, function l() {
              s.data("callee2", l),
                s.data("tapheld", !1),
                window.clearTimeout(o.hold_timer);
            })
            .on(o.moveevent, function u(t) {
              s.data("callee3", u),
                (r = t.originalEvent.targetTouches
                  ? t.originalEvent.targetTouches[0].pageX
                  : t.pageX),
                (h = t.originalEvent.targetTouches
                  ? t.originalEvent.targetTouches[0].pageY
                  : t.pageY);
            });
        },
        remove: function () {
          t(this)
            .off(o.startevent, t(this).data.callee1)
            .off(o.endevent, t(this).data.callee2)
            .off(o.moveevent, t(this).data.callee3);
        },
      }),
      (t.event.special.doubletap = {
        setup: function () {
          var e,
            i,
            s,
            a,
            r = this,
            h = t(r),
            c = null,
            l = !1;
          h.on(o.startevent, function u(n) {
            return n.which && 1 !== n.which
              ? !1
              : (h.data("doubletapped", !1),
                (e = n.target),
                h.data("callee1", u),
                (s = n.originalEvent),
                c ||
                  (c = {
                    position: {
                      x: o.touch_capable ? s.touches[0].screenX : n.screenX,
                      y: o.touch_capable ? s.touches[0].screenY : n.screenY,
                    },
                    offset: {
                      x: o.touch_capable
                        ? Math.round(
                            s.changedTouches[0].pageX -
                              (h.offset() ? h.offset().left : 0)
                          )
                        : Math.round(
                            n.pageX - (h.offset() ? h.offset().left : 0)
                          ),
                      y: o.touch_capable
                        ? Math.round(
                            s.changedTouches[0].pageY -
                              (h.offset() ? h.offset().top : 0)
                          )
                        : Math.round(
                            n.pageY - (h.offset() ? h.offset().top : 0)
                          ),
                    },
                    time: Date.now(),
                    target: n.target,
                    element: n.originalEvent.srcElement,
                    index: t(n.target).index(),
                  }),
                !0);
          }).on(o.endevent, function f(e) {
            var u = Date.now(),
              d = h.data("lastTouch") || u + 1,
              p = u - d;
            if (
              (window.clearTimeout(i),
              h.data("callee2", f),
              p < o.doubletap_int && t(e.target).index() == c.index && p > 100)
            ) {
              h.data("doubletapped", !0), window.clearTimeout(o.tap_timer);
              var g = {
                  position: {
                    x: o.touch_capable
                      ? e.originalEvent.changedTouches[0].screenX
                      : e.screenX,
                    y: o.touch_capable
                      ? e.originalEvent.changedTouches[0].screenY
                      : e.screenY,
                  },
                  offset: {
                    x: o.touch_capable
                      ? Math.round(
                          s.changedTouches[0].pageX -
                            (h.offset() ? h.offset().left : 0)
                        )
                      : Math.round(
                          e.pageX - (h.offset() ? h.offset().left : 0)
                        ),
                    y: o.touch_capable
                      ? Math.round(
                          s.changedTouches[0].pageY -
                            (h.offset() ? h.offset().top : 0)
                        )
                      : Math.round(e.pageY - (h.offset() ? h.offset().top : 0)),
                  },
                  time: Date.now(),
                  target: e.target,
                  element: e.originalEvent.srcElement,
                  index: t(e.target).index(),
                },
                m = { firstTap: c, secondTap: g, interval: g.time - c.time };
              l || (n(r, "doubletap", e, m), (c = null)),
                (l = !0),
                (a = window.setTimeout(function () {
                  l = !1;
                }, o.doubletap_int));
            } else
              h.data("lastTouch", u),
                (i = window.setTimeout(
                  function () {
                    (c = null), window.clearTimeout(i);
                  },
                  o.doubletap_int,
                  [e]
                ));
            h.data("lastTouch", u);
          });
        },
        remove: function () {
          t(this)
            .off(o.startevent, t(this).data.callee1)
            .off(o.endevent, t(this).data.callee2);
        },
      }),
      (t.event.special.singletap = {
        setup: function () {
          var e = this,
            i = t(e),
            s = null,
            a = null,
            r = { x: 0, y: 0 };
          i.on(o.startevent, function h(t) {
            return t.which && 1 !== t.which
              ? !1
              : ((a = Date.now()),
                (s = t.target),
                i.data("callee1", h),
                (r.x = t.originalEvent.targetTouches
                  ? t.originalEvent.targetTouches[0].pageX
                  : t.pageX),
                (r.y = t.originalEvent.targetTouches
                  ? t.originalEvent.targetTouches[0].pageY
                  : t.pageY),
                !0);
          }).on(o.endevent, function c(t) {
            if ((i.data("callee2", c), t.target == s)) {
              var h = t.originalEvent.changedTouches
                  ? t.originalEvent.changedTouches[0].pageX
                  : t.pageX,
                l = t.originalEvent.changedTouches
                  ? t.originalEvent.changedTouches[0].pageY
                  : t.pageY;
              o.tap_timer = window.setTimeout(function () {
                var s = r.x - h,
                  c = r.y - l;
                if (
                  !i.data("doubletapped") &&
                  !i.data("tapheld") &&
                  ((r.x == h && r.y == l) ||
                    (s >= -o.tap_pixel_range &&
                      s <= o.tap_pixel_range &&
                      c >= -o.tap_pixel_range &&
                      c <= o.tap_pixel_range))
                ) {
                  var u = t.originalEvent,
                    f = {
                      position: {
                        x: o.touch_capable
                          ? u.changedTouches[0].screenX
                          : t.screenX,
                        y: o.touch_capable
                          ? u.changedTouches[0].screenY
                          : t.screenY,
                      },
                      offset: {
                        x: o.touch_capable
                          ? Math.round(
                              u.changedTouches[0].pageX -
                                (i.offset() ? i.offset().left : 0)
                            )
                          : Math.round(
                              t.pageX - (i.offset() ? i.offset().left : 0)
                            ),
                        y: o.touch_capable
                          ? Math.round(
                              u.changedTouches[0].pageY -
                                (i.offset() ? i.offset().top : 0)
                            )
                          : Math.round(
                              t.pageY - (i.offset() ? i.offset().top : 0)
                            ),
                      },
                      time: Date.now(),
                      target: t.target,
                    };
                  f.time - a < o.taphold_threshold && n(e, "singletap", t, f);
                }
              }, o.doubletap_int);
            }
          });
        },
        remove: function () {
          t(this)
            .off(o.startevent, t(this).data.callee1)
            .off(o.endevent, t(this).data.callee2);
        },
      }),
      (t.event.special.tap = {
        setup: function () {
          var e,
            i,
            s = this,
            a = t(s),
            r = !1,
            h = null,
            c = { x: 0, y: 0 };
          a.on(o.startevent, function l(t) {
            return (
              a.data("callee1", l),
              t.which && 1 !== t.which
                ? !1
                : ((r = !0),
                  (c.x = t.originalEvent.targetTouches
                    ? t.originalEvent.targetTouches[0].pageX
                    : t.pageX),
                  (c.y = t.originalEvent.targetTouches
                    ? t.originalEvent.targetTouches[0].pageY
                    : t.pageY),
                  (e = Date.now()),
                  (h = t.target),
                  (i = t.originalEvent.targetTouches
                    ? t.originalEvent.targetTouches
                    : [t]),
                  !0)
            );
          }).on(o.endevent, function u(t) {
            a.data("callee2", u);
            var l = t.originalEvent.targetTouches
                ? t.originalEvent.changedTouches[0].pageX
                : t.pageX,
              f = t.originalEvent.targetTouches
                ? t.originalEvent.changedTouches[0].pageY
                : t.pageY,
              d = c.x - l,
              p = c.y - f;
            if (
              h == t.target &&
              r &&
              Date.now() - e < o.taphold_threshold &&
              ((c.x == l && c.y == f) ||
                (d >= -o.tap_pixel_range &&
                  d <= o.tap_pixel_range &&
                  p >= -o.tap_pixel_range &&
                  p <= o.tap_pixel_range))
            ) {
              for (var g = t.originalEvent, m = [], v = 0; v < i.length; v++) {
                var y = {
                  position: {
                    x: o.touch_capable
                      ? g.changedTouches[v].screenX
                      : t.screenX,
                    y: o.touch_capable
                      ? g.changedTouches[v].screenY
                      : t.screenY,
                  },
                  offset: {
                    x: o.touch_capable
                      ? Math.round(
                          g.changedTouches[v].pageX -
                            (a.offset() ? a.offset().left : 0)
                        )
                      : Math.round(
                          t.pageX - (a.offset() ? a.offset().left : 0)
                        ),
                    y: o.touch_capable
                      ? Math.round(
                          g.changedTouches[v].pageY -
                            (a.offset() ? a.offset().top : 0)
                        )
                      : Math.round(t.pageY - (a.offset() ? a.offset().top : 0)),
                  },
                  time: Date.now(),
                  target: t.target,
                };
                m.push(y);
              }
              n(s, "tap", t, m);
            }
          });
        },
        remove: function () {
          t(this)
            .off(o.startevent, t(this).data.callee1)
            .off(o.endevent, t(this).data.callee2);
        },
      }),
      (t.event.special.swipe = {
        setup: function () {
          function e(n) {
            (r = t(n.currentTarget)),
              r.data("callee1", e),
              (l.x = n.originalEvent.targetTouches
                ? n.originalEvent.targetTouches[0].pageX
                : n.pageX),
              (l.y = n.originalEvent.targetTouches
                ? n.originalEvent.targetTouches[0].pageY
                : n.pageY),
              (u.x = l.x),
              (u.y = l.y),
              (h = !0);
            var i = n.originalEvent;
            s = {
              position: {
                x: o.touch_capable ? i.touches[0].screenX : n.screenX,
                y: o.touch_capable ? i.touches[0].screenY : n.screenY,
              },
              offset: {
                x: o.touch_capable
                  ? Math.round(
                      i.changedTouches[0].pageX -
                        (r.offset() ? r.offset().left : 0)
                    )
                  : Math.round(n.pageX - (r.offset() ? r.offset().left : 0)),
                y: o.touch_capable
                  ? Math.round(
                      i.changedTouches[0].pageY -
                        (r.offset() ? r.offset().top : 0)
                    )
                  : Math.round(n.pageY - (r.offset() ? r.offset().top : 0)),
              },
              time: Date.now(),
              target: n.target,
            };
          }
          function n(e) {
            (r = t(e.currentTarget)),
              r.data("callee2", n),
              (u.x = e.originalEvent.targetTouches
                ? e.originalEvent.targetTouches[0].pageX
                : e.pageX),
              (u.y = e.originalEvent.targetTouches
                ? e.originalEvent.targetTouches[0].pageY
                : e.pageY);
            var i,
              a = r.parent().data("xthreshold")
                ? r.parent().data("xthreshold")
                : r.data("xthreshold"),
              f = r.parent().data("ythreshold")
                ? r.parent().data("ythreshold")
                : r.data("ythreshold"),
              d =
                "undefined" != typeof a && a !== !1 && parseInt(a)
                  ? parseInt(a)
                  : o.swipe_h_threshold,
              p =
                "undefined" != typeof f && f !== !1 && parseInt(f)
                  ? parseInt(f)
                  : o.swipe_v_threshold;
            if (
              (l.y > u.y && l.y - u.y > p && (i = "swipeup"),
              l.x < u.x && u.x - l.x > d && (i = "swiperight"),
              l.y < u.y && u.y - l.y > p && (i = "swipedown"),
              l.x > u.x && l.x - u.x > d && (i = "swipeleft"),
              void 0 != i && h)
            ) {
              (l.x = 0), (l.y = 0), (u.x = 0), (u.y = 0), (h = !1);
              var g = e.originalEvent,
                m = {
                  position: {
                    x: o.touch_capable ? g.touches[0].screenX : e.screenX,
                    y: o.touch_capable ? g.touches[0].screenY : e.screenY,
                  },
                  offset: {
                    x: o.touch_capable
                      ? Math.round(
                          g.changedTouches[0].pageX -
                            (r.offset() ? r.offset().left : 0)
                        )
                      : Math.round(
                          e.pageX - (r.offset() ? r.offset().left : 0)
                        ),
                    y: o.touch_capable
                      ? Math.round(
                          g.changedTouches[0].pageY -
                            (r.offset() ? r.offset().top : 0)
                        )
                      : Math.round(e.pageY - (r.offset() ? r.offset().top : 0)),
                  },
                  time: Date.now(),
                  target: e.target,
                },
                v = Math.abs(s.position.x - m.position.x),
                y = Math.abs(s.position.y - m.position.y),
                w = {
                  startEvnt: s,
                  endEvnt: m,
                  direction: i.replace("swipe", ""),
                  xAmount: v,
                  yAmount: y,
                  duration: m.time - s.time,
                };
              (c = !0), r.trigger("swipe", w).trigger(i, w);
            }
          }
          function i(e) {
            r = t(e.currentTarget);
            var n = "";
            if ((r.data("callee3", i), c)) {
              var a = r.data("xthreshold"),
                l = r.data("ythreshold"),
                u =
                  "undefined" != typeof a && a !== !1 && parseInt(a)
                    ? parseInt(a)
                    : o.swipe_h_threshold,
                f =
                  "undefined" != typeof l && l !== !1 && parseInt(l)
                    ? parseInt(l)
                    : o.swipe_v_threshold,
                d = e.originalEvent,
                p = {
                  position: {
                    x: o.touch_capable
                      ? d.changedTouches[0].screenX
                      : e.screenX,
                    y: o.touch_capable
                      ? d.changedTouches[0].screenY
                      : e.screenY,
                  },
                  offset: {
                    x: o.touch_capable
                      ? Math.round(
                          d.changedTouches[0].pageX -
                            (r.offset() ? r.offset().left : 0)
                        )
                      : Math.round(
                          e.pageX - (r.offset() ? r.offset().left : 0)
                        ),
                    y: o.touch_capable
                      ? Math.round(
                          d.changedTouches[0].pageY -
                            (r.offset() ? r.offset().top : 0)
                        )
                      : Math.round(e.pageY - (r.offset() ? r.offset().top : 0)),
                  },
                  time: Date.now(),
                  target: e.target,
                };
              s.position.y > p.position.y &&
                s.position.y - p.position.y > f &&
                (n = "swipeup"),
                s.position.x < p.position.x &&
                  p.position.x - s.position.x > u &&
                  (n = "swiperight"),
                s.position.y < p.position.y &&
                  p.position.y - s.position.y > f &&
                  (n = "swipedown"),
                s.position.x > p.position.x &&
                  s.position.x - p.position.x > u &&
                  (n = "swipeleft");
              var g = Math.abs(s.position.x - p.position.x),
                m = Math.abs(s.position.y - p.position.y),
                v = {
                  startEvnt: s,
                  endEvnt: p,
                  direction: n.replace("swipe", ""),
                  xAmount: g,
                  yAmount: m,
                  duration: p.time - s.time,
                };
              r.trigger("swipeend", v);
            }
            (h = !1), (c = !1);
          }
          var s,
            a = this,
            r = t(a),
            h = !1,
            c = !1,
            l = { x: 0, y: 0 },
            u = { x: 0, y: 0 };
          r.on(o.startevent, e), r.on(o.moveevent, n), r.on(o.endevent, i);
        },
        remove: function () {
          t(this)
            .off(o.startevent, t(this).data.callee1)
            .off(o.moveevent, t(this).data.callee2)
            .off(o.endevent, t(this).data.callee3);
        },
      }),
      (t.event.special.scrollstart = {
        setup: function () {
          function e(t, e) {
            (i = e), n(a, i ? "scrollstart" : "scrollend", t);
          }
          var i,
            s,
            a = this,
            r = t(a);
          r.on(o.scrollevent, function h(t) {
            r.data("callee", h),
              i || e(t, !0),
              clearTimeout(s),
              (s = setTimeout(function () {
                e(t, !1);
              }, 50));
          });
        },
        remove: function () {
          t(this).off(o.scrollevent, t(this).data.callee);
        },
      });
    var s,
      a,
      r,
      h,
      c,
      l = t(window),
      u = { 0: !0, 180: !0 };
    if (o.orientation_support) {
      var f = window.innerWidth || l.width(),
        d = window.innerHeight || l.height(),
        p = 50;
      (h = f > d && f - d > p),
        (c = u[window.orientation]),
        ((h && c) || (!h && !c)) && (u = { "-90": !0, 90: !0 });
    }
    (t.event.special.orientationchange = s = {
      setup: function () {
        return o.orientation_support
          ? !1
          : ((r = a()), l.on("throttledresize", e), !0);
      },
      teardown: function () {
        return o.orientation_support ? !1 : (l.off("throttledresize", e), !0);
      },
      add: function (t) {
        var e = t.handler;
        t.handler = function (t) {
          return (t.orientation = a()), e.apply(this, arguments);
        };
      },
    }),
      (t.event.special.orientationchange.orientation = a = function () {
        var t = !0,
          e = document.documentElement;
        return (
          (t = o.orientation_support
            ? u[window.orientation]
            : e && e.clientWidth / e.clientHeight < 1.1),
          t ? "portrait" : "landscape"
        );
      }),
      (t.event.special.throttledresize = {
        setup: function () {
          t(this).on("resize", w);
        },
        teardown: function () {
          t(this).off("resize", w);
        },
      });
    var g,
      m,
      v,
      y = 250,
      w = function () {
        (m = Date.now()),
          (v = m - b),
          v >= y
            ? ((b = m), t(this).trigger("throttledresize"))
            : (g && window.clearTimeout(g), (g = window.setTimeout(e, y - v)));
      },
      b = 0;
    t.each(
      {
        scrollend: "scrollstart",
        swipeup: "swipe",
        swiperight: "swipe",
        swipedown: "swipe",
        swipeleft: "swipe",
        swipeend: "swipe",
        tap2: "tap",
      },
      function (e, n) {
        t.event.special[e] = {
          setup: function () {
            t(this).on(n, t.noop);
          },
        };
      }
    );
  })(jQuery),
  (function () {
    "use strict";
    var t =
        "undefined" != typeof window && "undefined" != typeof window.document
          ? window.document
          : {},
      e = "undefined" != typeof module && module.exports,
      n = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
      i = (function () {
        for (
          var e,
            n = [
              [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror",
              ],
              [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror",
              ],
              [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror",
              ],
              [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError",
              ],
            ],
            i = 0,
            o = n.length,
            s = {};
          o > i;
          i++
        )
          if (((e = n[i]), e && e[1] in t)) {
            for (i = 0; i < e.length; i++) s[n[0][i]] = e[i];
            return s;
          }
        return !1;
      })(),
      o = { change: i.fullscreenchange, error: i.fullscreenerror },
      s = {
        request: function (e) {
          var o = i.requestFullscreen;
          (e = e || t.documentElement),
            / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)
              ? e[o]()
              : e[o](n ? Element.ALLOW_KEYBOARD_INPUT : {});
        },
        exit: function () {
          t[i.exitFullscreen]();
        },
        toggle: function (t) {
          this.isFullscreen ? this.exit() : this.request(t);
        },
        onchange: function (t) {
          this.on("change", t);
        },
        onerror: function (t) {
          this.on("error", t);
        },
        on: function (e, n) {
          var i = o[e];
          i && t.addEventListener(i, n, !1);
        },
        off: function (e, n) {
          var i = o[e];
          i && t.removeEventListener(i, n, !1);
        },
        raw: i,
      };
    return i
      ? (Object.defineProperties(s, {
          isFullscreen: {
            get: function () {
              return Boolean(t[i.fullscreenElement]);
            },
          },
          element: {
            enumerable: !0,
            get: function () {
              return t[i.fullscreenElement];
            },
          },
          enabled: {
            enumerable: !0,
            get: function () {
              return Boolean(t[i.fullscreenEnabled]);
            },
          },
        }),
        void (e ? (module.exports = s) : (window.screenfull = s)))
      : void (e ? (module.exports = !1) : (window.screenfull = !1));
  })();
