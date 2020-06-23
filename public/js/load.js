function RanDom(e, t) {
  return Math.max(Math.random() * (0.2 + t - e) + e);
}
function changeUrl(e, t, a, i, o, n, r) {
  if (void 0 !== window.history.pushState) {
    var s = document.URL;
    s != e &&
      "" != e &&
      window.history.pushState(
        {
          path: e,
          dataName: o,
          title: t,
          keyword: i,
          description: a,
          titleog: n,
          descriptionog: r,
        },
        "",
        e
      );
  }
  "" != t &&
    ($("#hdtitle").html(t),
    $('meta[property="og:description"]').remove(),
    $("#hdtitle").after('<meta property="og:description" content="' + r + '">'),
    $('meta[property="og:title"]').remove(),
    $("#hdtitle").after('<meta property="og:title" content="' + n + '">'),
    $('meta[property="og:url"]').remove(),
    $("#hdtitle").after('<meta property="og:url" content="' + e + '">'),
    $("meta[name=keywords]").remove(),
    $("#hdtitle").after('<meta name="keywords" content="' + i + '">'),
    $("meta[name=description]").remove(),
    $("#hdtitle").after('<meta name="description" content="' + a + '">')),
    $("#changlanguage_redirect").val(e);
}
function ResizeWindows() {
  var e =
      ($(window).height() > $(window).width(),
      $(window).height() <= $(window).width()),
    t = $(window).width(),
    a = $(window).height(),
    i = t / 2400,
    o = a / 1300,
    n = t / 1550;
  if (440 >= t) var r = t / 1150;
  else var r = t / 1300;
  if (440 >= t) var s = t / 1200;
  else var s = t / 1300;
  if (
    ($("#news-page").length &&
      $(".grid").each(function (e, t) {
        var a = $(t).find(".group").length;
        a >= 2 && $(".group").addClass("after-group");
      }),
    1100 >= t)
  )
    $(".scrollA, .scrollB,.scrollC").length &&
      $(".scrollA, .scrollB,.scrollC").getNiceScroll().remove(),
      $(".news-text img, .pic-library img, .box-image img").addClass(
        "zoom-pic"
      ),
      1 == e
        ? ($(".facilities-map").css({
            height: $(".facilities-bg").height() * n,
          }),
          $(".facilities-bg").scale(n),
          $(".apartment-map").css({ height: $(".apartment-bg").height() * n }),
          $(".apartment-bg").scale(n))
        : ($(".facilities-map").css({
            height: $(".facilities-bg").height() * r,
          }),
          $(".facilities-bg").scale(r),
          $(".apartment-map").css({ height: $(".apartment-bg").height() * s }),
          $(".apartment-bg").scale(s)),
      440 >= t
        ? ($(".apartment-bg").css({
            left: t / 2 - 1200,
            top: $(".apartment-map").height() / 2 - 700,
          }),
          $(".facilities-bg").css({
            left: t / 2 - 1210,
            top: $(".facilities-map").height() / 2 - 700,
          }))
        : ($(".apartment-bg").css({
            left: t / 2 - 1230,
            top: $(".apartment-map").height() / 2 - 700,
          }),
          $(".facilities-bg").css({
            left: t / 2 - 1230,
            top: $(".facilities-map").height() / 2 - 700,
          }));
  else if (t > 1100) {
    if (
      (a / t > 0.54
        ? ($(".facilities-bg,  .apartment-bg").scale(o),
          $(".apartment-bg").css({ left: t / 2 - 1200, top: a / 2 - 700 }))
        : ($(".facilities-bg,  .apartment-bg").scale(i),
          $(".apartment-bg").css({ left: t / 2 - 1200, top: a / 2 - 680 })),
      $(".facilities-map, .apartment-map").height(a),
      t > 1100 && 750 > a
        ? $(".facilities-bg").css({ left: t / 2 - 1200, top: a / 2 - 720 })
        : $(".facilities-bg").css({ left: t / 2 - 1200, top: a / 2 - 700 }),
      $(".content-house").length)
    ) {
      var l = $(".content-house").offset().left;
      $(".logo.center").css({ left: l - 10 });
    }
    $(".news-text img, .pic-library img, .box-image img").removeClass(
      "zoom-pic"
    );
  }
}
function NavAni() {
  function e() {
    $(".nav-click").addClass("show-line");
  }
  var t = new TimelineLite({ delay: 0.5, onComplete: e });
  t.staggerTo(
    $(".open-click span"),
    0.4,
    { opacity: 1, ease: Power0.easeOut },
    -0.1,
    0.15
  );
}
function MenuWave() {
  var e = new TimelineLite({ paused: !1 });
  (Paths = $(".animation path")),
    $(Paths).each(function (t, a) {
      var i = $(a).attr("pathdata");
      e.to($(a), RanDom(1.5, 2.8), {
        attr: { d: i },
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: !0,
      }),
        $(".play-wave").on("click", function (t) {
          t.preventDefault(), e.play();
        }),
        $(".stop-wave").on("click", function (t) {
          t.preventDefault(), e.pause();
        });
    });
}
function DrawLoad() {
  var e = $(".load-present");
  (Paths = $(e).find("path")),
    $(Paths).each(function () {
      var e = this.getTotalLength();
      isIE9 || isIE10 || isIE11
        ? ($(this).css({ "stroke-dasharray": e + " " + e }),
          $(this).css({
            "stroke-dashoffset": e,
            "stroke-dasharray": e + " " + e,
          }),
          $(this)
            .stop()
            .animate({ "stroke-dashoffset": 0 }, 1800, "linear", function () {
              $(this)
                .stop()
                .animate({ "stroke-dashoffset": e }, 1800, "linear");
            }),
          setTimeout(function () {
            $(".loadicon").addClass("show");
          }, 1500))
        : setTimeout(function () {
            $(".loadicon").addClass("show");
          }, 1500);
    });
}
function Done() {
  ResizeWindows(),
    SlidePicture(),
    $(window).width() > 1100 && BoxSlide(),
    $(".title-page > h1")
      .lettering("words")
      .children("span")
      .lettering()
      .children("span")
      .lettering(),
    $(
      ".nav li a, .open-click, .close-click small, .title-main h2, .title-pic h3"
    ).lettering(),
    $(".container")
      .stop()
      .animate({ opacity: 1 }, 300, "linear", function () {
        $(".loadicon").addClass("blur"),
          requestAnimationFrame(HideMask),
          $(".loadicon")
            .stop()
            .animate({ scale: 0.5, opacity: 0 }, 1e3, "linear", function () {
              ContentLoad(),
                cancelAnimationFrame(HideMask),
                $(".loadicon").remove();
            });
      }),
    $(".grid-item-bg").length && $(window).width() > 1100 && BgEffect(),
    $(".viewer").length && $(window).width() > 1100 && ScaleMap(),
    Loadpic();
}
function Loadpic() {
  $(".pic-img, .pic-thumb, .pic-progress").each(function (e, t) {
    var a = $(t).find("img").attr("src");
    if (a) {
      var i = a.replace(/(^url\()|(\)$|[\"\'])/g, "");
      $(t).css({ "background-image": "url(" + i + ")" });
    }
  });
}
function ScaleMap() {
  $(".panzoom").css({
    "-webkit-transform": "matrix(1, 0, 0, 1, 0, 0)",
    transform: "matrix(1, 0, 0, 1, 0, 0)",
  });
  var e = $(window).height() / 950;
  $(".map-img").scale(e);
}
function PicEffect() {
  Array.from(document.querySelectorAll(".grid-item-img")).forEach(function (e) {
    var t = Array.from(e.querySelectorAll("img"));
    new hoverEffect({
      parent: e,
      intensity: 0.1,
      speedIn: 0.5,
      speedOut: 0.5,
      easing: Power2.easeOut,
      hover: !0,
      image1: t[0].getAttribute("src"),
      image2: t[1].getAttribute("src"),
      displacementImage: httptemplate + "default/images/effect/2.jpg",
    });
  });
}
function onYouTubePlayerAPIReady() {
  player = new YT.Player("VYT", {
    events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange },
  });
}
function onPlayerStateChange(e) {
  switch (e.data) {
    case YT.PlayerState.PLAYING:
      (0 != TouchLenght && isTouchDevice) || $(".control").removeClass("show"),
        $(".bg-video").addClass("hide"),
        $(".play-button").removeClass("show"),
        $("#playpause").attr("data-state", "pause");
      break;
    case YT.PlayerState.PAUSED:
      (0 != TouchLenght && isTouchDevice) || $(".control").addClass("show"),
        $(".bg-video").removeClass("hide"),
        $(".play-button").addClass("show"),
        $("#playpause").attr("data-state", "play");
      break;
    case YT.PlayerState.ENDED:
  }
}
function cleanTime() {
  return Math.round(player.getCurrentTime());
}
function onPlayerReady(e) {
  e.target.mute(),
    $("#mutetoggle").attr("data-state", "unmute"),
    updateTimerDisplay(),
    updateProgressBar(),
    player.pauseVideo(),
    $(".play-button").addClass("show"),
    $("#playpause").attr("data-state", "pause");
}
function updateTimerDisplay() {
  $("#current-time").text(formatTime(player.getCurrentTime())),
    $("#duration").text(formatTime(player.getDuration()));
}
function formatTime(e) {
  e = Math.round(e);
  var t = Math.floor(e / 60),
    a = e - 60 * t;
  return (a = 10 > a ? "0" + a : a), t + ":" + a;
}
function updateProgressBar() {
  $("#progress-bar").val(
    (player.getCurrentTime() / player.getDuration()) * 100
  );
}
var ua = navigator.userAgent,
  match = ua.match("MSIE (.)"),
  versions = match && match.length > 1 ? match[1] : "unknown",
  isTouchDevice =
    "ontouchstart" in window ||
    (window.DocumentTouch && document instanceof DocumentTouch) ||
    navigator.msMaxTouchPoints > 0 ||
    navigator.maxTouchPoints > 0,
  isDesktop = 0 != $(window).width() && !isTouchDevice,
  IEMobile = ua.match(/IEMobile/i),
  isIE9 = /MSIE 9/i.test(ua),
  isIE10 = /MSIE 10/i.test(ua),
  isIE11 = !(!/rv:11.0/i.test(ua) || IEMobile),
  isEge = /Edge\/12./i.test(navigator.userAgent),
  isOpera =
    (!!window.opr && !!opr.addons) ||
    !!window.opera ||
    ua.indexOf(" OPR/") >= 0,
  isFirefox = "undefined" != typeof InstallTrigger,
  isIE = !!document.documentMode,
  isEdge = !isIE && !!window.StyleMedia && !isIE11,
  isChrome = !!window.chrome && !!window.chrome.webstore,
  isBlink = (isChrome || isOpera) && !!window.CSS,
  isSafari =
    Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") >
      0 ||
    (!isChrome && !isOpera && void 0 !== window.webkitAudioContext),
  AndroidVersion = parseFloat(ua.slice(ua.indexOf("Android") + 8)),
  Version = ua.match(/Android\s([0-9\.]*)/i),
  ios,
  android,
  blackBerry,
  UCBrowser,
  Operamini,
  firefox,
  windows,
  smartphone,
  tablet,
  touchscreen,
  all,
  isMobile = {
    ios: (function () {
      return ua.match(/iPhone|iPad|iPod/i);
    })(),
    android: (function () {
      return ua.match(/Android/i);
    })(),
    blackBerry: (function () {
      return ua.match(/BB10|Tablet|Mobile/i);
    })(),
    UCBrowser: (function () {
      return ua.match(/UCBrowser/i);
    })(),
    Operamini: (function () {
      return ua.match(/Opera Mini/i);
    })(),
    windows: (function () {
      return ua.match(/IEMobile/i);
    })(),
    smartphone: (function () {
      return (
        ua.match(
          /Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i
        ) &&
        window.innerWidth <= 440 &&
        window.innerHeight <= 740
      );
    })(),
    tablet: (function () {
      return (
        ua.match(
          /Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i
        ) &&
        window.innerWidth <= 1366 &&
        window.innerHeight <= 800
      );
    })(),
    all: (function () {
      return ua.match(
        /Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i
      );
    })(),
  };
if (isTouchDevice && null !== isMobile.all) var TouchLenght = !0;
else if ((isMobile.tablet && isFirefox) || (isMobile.smartphone && isFirefox))
  var TouchLenght = !0;
else var TouchLenght = !1;
isMobile.Operamini && alert("Please disable Data Savings Mode");
var iOS = isMobile.ios,
  Loadx = 0,
  Paths = {},
  timex,
  News = 0,
  Details = 0,
  doWheel = !0,
  doTouch = !0,
  windscroll = $(document).scrollTop(),
  timer,
  httpserver = $(".httpserver").text(),
  httptemplate = $(".httptemplate").text(),
  Expand = function e() {
    $("html, body").addClass("no-scroll"),
      $(".navigation").addClass("show"),
      $(".nav-click").removeClass("show-line"),
      $(".youtube-video iframe").length && $(".pause-button").trigger("click"),
      $(".wave-ani").hasClass("in-play") && $(".stop-svg").trigger("click");
    var t = new TimelineLite();
    TweenLite.set($(".nav li a span"), { opacity: 0 }),
      $(".nav li a span").each(function (e, t) {
        TweenLite.to($(t), 0.6, {
          opacity: 1,
          delay: RanDom(0.5, 0.75),
          ease: Power0.easeOut,
          onComplete: function () {
            $(".logo-bg").addClass("show"),
              $(".bg-wave").addClass("show-text"),
              $(".play-wave").trigger("click"),
              $(".nav-click").addClass("toclick");
          },
        });
      }),
      $(".gradient path").each(function (e, a) {
        var i = $(a).attr("pathshow");
        t.to(
          $(a),
          1,
          { attr: { d: i }, opacity: 1, ease: Power2.easeInOut },
          -0.1,
          0.55
        );
      }),
      t.staggerTo(
        $(".open-click span"),
        0.3,
        { opacity: 0, ease: Power0.easeOut },
        -0.1,
        0.15
      ),
      t.staggerTo(
        $(".close-click small span"),
        0.4,
        { opacity: 1, ease: Power0.easeOut },
        -0.1,
        0.15
      ),
      t.call(
        function () {
          $(".nav-click").addClass("active");
        },
        null,
        null,
        0.6
      ),
      cancelAnimationFrame(e);
  },
  Collapse = function t() {
    $(".logo-bg").removeClass("show"),
      $(".bg-wave").removeClass("show-text"),
      $(".stop-wave").trigger("click");
    var e = new TimelineLite();
    e.staggerTo(
      $(".open-click span"),
      0.4,
      { opacity: 1, delay: 0.4, ease: Power0.easeOut },
      -0.1,
      0.15
    ),
      e.staggerTo(
        $(".close-click small span"),
        0.3,
        { opacity: 0, ease: Power0.easeOut },
        -0.1,
        0.15
      ),
      e.call(
        function () {
          $(".nav-click").removeClass("active toclick").addClass("show-line");
        },
        null,
        null,
        0.4
      ),
      TweenLite.to($(".nav li a span"), 0.4, {
        opacity: 0,
        delay: 0,
        ease: Power0.easeOut,
        onComplete: function () {
          $(".navigation").removeClass("show"),
            $("html, body").removeClass("no-scroll"),
            $(".show-text .wave-ani").length && $(".play-svg").trigger("click"),
            $(".youtube-video iframe").length &&
              $('.group-central[data-name="video-home"]').hasClass(
                "show-text"
              ) &&
              $(".play-button").trigger("click");
        },
      }),
      $(".gradient path").each(function (t, a) {
        var i = $(a).attr("pathhide");
        e.to(
          $(a),
          0.8,
          { attr: { d: i }, opacity: 0, delay: 0.4, ease: Power2.easeInOut },
          -0.1,
          0.55
        );
      }),
      cancelAnimationFrame(t);
  },
  SvgExpand = function () {
    function e() {
      t.pause(), $(".bg-house").addClass("show");
    }
    if ($(window).width() > 1100) {
      var t = new TimelineLite({ paused: !1, onComplete: e });
      $(".box-svg path").each(function (e, a) {
        var i = $(a).attr("datashow");
        t.to(
          $(a),
          1.6,
          { attr: { d: i }, opacity: 1, ease: Power4.easeInOut },
          RanDom(0.6, 0.95)
        );
      });
    }
  },
  SvgCollapse = function () {
    function e() {
      t.pause(), $(".bg-house").removeClass("show");
    }
    if ($(window).width() > 1100) {
      var t = new TimelineLite({ paused: !1, onComplete: e });
      $(".box-svg path").each(function (e, a) {
        var i = $(a).attr("datahide");
        t.to(
          $(a),
          0.6,
          { attr: { d: i }, opacity: 0, ease: Power4.easeInOut },
          0.1,
          0.15
        );
      });
    }
  };
if (
  ($(".animation").length && (MenuWave(), $(".stop-wave").trigger("click")),
  $(".wave-ani").length)
) {
  var AniBG = function (e) {
    var t = new TimelineLite({ paused: !1 });
    (Paths = $(".in-play[data-id='" + e + "'] path")),
      $(Paths).each(function (e, a) {
        var i = $(a).attr("pathdata");
        t.to($(a), RanDom(1.5, 2.8), {
          attr: { d: i },
          ease: Power1.easeInOut,
          repeat: -1,
          yoyo: !0,
        });
      }),
      $(".stop-svg").on("click", function (e) {
        e.preventDefault(),
          t.pause(),
          $("#about-page, #location-page").length ? t.reverse() : t.progress(0),
          $(".wave-ani").removeClass("in-play");
      });
  };
  $(".play-svg").on("click", function (e) {
    e.preventDefault(), $(".show-text .wave-ani").addClass("in-play");
    var t = $(".show-text .wave-ani").attr("data-id");
    requestAnimationFrame(function () {
      AniBG(t);
    });
  });
}
var BgEffect = function () {
    var e = document.querySelector(".grid-item-bg"),
      t = Array.from(e.querySelectorAll("img")),
      a = document.querySelector(".grid-item-bg canvas");
    a
      ? (bgAni.previous({ hover: e.dataset.hover }),
        setTimeout(function () {
          $(".grid-item-bg canvas").addClass("show"),
            requestAnimationFrame(function () {
              bgAni.next({ hover: e.dataset.hover });
            });
        }, 150))
      : (bgAni = new hoverEffect({
          parent: e,
          intensity: 0.3,
          speedIn: 1.2,
          speedOut: 0,
          easing: Circ.easeOut,
          hover: !1,
          image1: t[0].getAttribute("src"),
          image2: t[1].getAttribute("src"),
          displacementImage: httptemplate + "default/images/effect/7.jpg",
        }));
  },
  HideMask = function () {
    var e = $(".shape-svg path").attr("pathdata"),
      t = new TimelineLite({ paused: !1 });
    t.to($(".shape-svg path"), RanDom(0.1, 0.6), {
      attr: { d: e },
      repeat: -1,
      yoyo: !0,
      ease: Power2.easeInOut,
    }),
      TweenLite.to($(".mask"), 2, {
        y: "-100%",
        ease: Quad.easeOut,
        onComplete: function () {
          t.pause();
        },
      });
  };
if (
  ($(document).ready(function () {
    if (
      (ResizeWindows(),
      $(".loadicon").hasClass("loading") ||
        ($(".loadicon").show(), $(".loadicon").addClass("loading"), DrawLoad()),
      isIE10 || isIE11
        ? $("body").addClass("is-IE")
        : isEdge
        ? $("body").addClass("is-Edge")
        : iOS
        ? $("body").addClass("is-IOS")
        : isSafari
        ? $("body").addClass("is-Safari")
        : isChrome && $("body").addClass("is-Chrome"),
      $(".box-nav li").length <= 1 &&
        ($(".box-nav").css({ display: "none" }),
        $(".box-slider").addClass("single")),
      $(window).width() > 1100 && $("img.map").length && $(".map").maphilight(),
      $(".youtube-video, .player").length)
    ) {
      var e = document.createElement("script");
      e.src = "https://www.youtube.com/player_api";
      var t = document.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(e, t);
    }
  }),
  $(window).on("beforeunload", function () {
    $(window).scrollTop(0);
  }),
  $(".youtube-video").length)
) {
  var youTubeUrl = $(".youtube-video").attr("data-embed"),
    youTubeId,
    regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
    match = youTubeUrl.match(regExp);
  youTubeId = match && 11 == match[2].length ? match[2] : "no video found";
  var youTube = $(".youtube-video"),
    Source = "https://img.youtube.com/vi/" + youTubeId + "/sddefault.jpg";
  if (iOS)
    var SRC =
      '<iframe id="VYT" src="https://www.youtube.com/embed/' +
      youTubeId +
      "?autoplay=1&enablejsapi=1&controls=1&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" +
      youTubeId +
      '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
  else
    var SRC =
      '<iframe id="VYT" src="https://www.youtube.com/embed/' +
      youTubeId +
      "?autoplay=1&enablejsapi=1&controls=0&loop=0&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" +
      youTubeId +
      '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
  $(youTube).append(SRC);
  var player,
    time_update = 0,
    timer;
  $("#progress-bar").on("mouseup touchend", function (e) {
    var t = player.getDuration() * (e.target.value / 100);
    player.seekTo(t),
      $(".bg-video").hasClass("hide") || $(".bg-video").addClass("hide");
  }),
    $("#playpause").bind("click", function () {
      var e = $(this).attr("data-state");
      "play" == e
        ? (player.playVideo(),
          $(this).attr("data-state", "pause"),
          $(".bg-video").addClass("hide"),
          $(".play-button").removeClass("show"))
        : (player.pauseVideo(),
          $(this).attr("data-state", "play"),
          $(".play-button").addClass("show"),
          $(".bg-video").removeClass("hide"));
    }),
    $("#mutetoggle").bind("click", function () {
      var e = $(this).attr("data-state");
      "unmute" == e
        ? (player.unMute(), $(this).attr("data-state", "mute"))
        : (player.mute(), $(this).attr("data-state", "unmute"));
    }),
    $("#fullscreen").bind("click", function () {
      var e = $(this).attr("data-state");
      "go-fullscreen" == e
        ? ($(this).attr("data-state", "cancel-fullscreen"),
          $(".video-youtube-full").addClass("full-frame"),
          $("html, body").addClass("no-scroll fullscreen"),
          iOS
            ? ($('.group-central[data-name="video-home"]').addClass("fullmode"),
              $(".header, .go-top, .footer").addClass("level-index-out"))
            : screenfull.request($(".video-youtube-full")[0]))
        : ($(this).attr("data-state", "go-fullscreen"),
          $(".video-youtube-full").removeClass("full-frame"),
          $("html, body").removeClass("no-scroll fullscreen"),
          iOS
            ? ($('.group-central[data-name="video-home"]').removeClass(
                "fullmode"
              ),
              $(".header, .go-top, .footer").removeClass("level-index-out"))
            : screenfull.exit());
    }),
    $(".play-button").on("click", function (e) {
      e.preventDefault(),
        player.playVideo(),
        $(this).removeClass("show"),
        $("#playpause").attr("data-state", "pause"),
        $(".bg-video").addClass("hide"),
        $(".control").addClass("show"),
        $(".video-youtube-full").addClass("playing"),
        clearInterval(time_update),
        (time_update = setInterval(function () {
          updateTimerDisplay(), updateProgressBar();
        }, 500)),
        clearInterval(timer),
        (timer = setInterval(function () {
          (0 != TouchLenght && isTouchDevice) ||
            $(".control").removeClass("show");
        }, 5e3));
    }),
    $(".pause-button").on("click", function (e) {
      e.preventDefault(),
        $(".play-button").addClass("show"),
        $("#playpause").attr("data-state", "play"),
        $(".bg-video, .slogan").removeClass("hide"),
        clearInterval(timer),
        (0 != TouchLenght && isTouchDevice) || $(".control").addClass("show"),
        player.pauseVideo();
    }),
    $(".youtube-video").on("click", function (e) {
      e.preventDefault(), $("#playpause").trigger("click");
    }),
    $(".youtube-video, .control").on("mouseenter mousemove", function (e) {
      e.preventDefault(),
        (0 != TouchLenght && isTouchDevice) ||
          $(".control").hasClass("show") ||
          $(".control").addClass("show");
    });
}
var WEBGL = {
    isWebGLAvailable: function () {
      try {
        var e = document.createElement("canvas");
        return !(
          !window.WebGLRenderingContext ||
          (!e.getContext("webgl") && !e.getContext("experimental-webgl"))
        );
      } catch (t) {
        return !1;
      }
    },
    isWebGL2Available: function () {
      try {
        var e = document.createElement("canvas");
        return !(!window.WebGL2RenderingContext || !e.getContext("webgl2"));
      } catch (t) {
        return !1;
      }
    },
  },
  hoverEffect = function (e) {
    function t() {
      for (var e = 0; e < arguments.length; e++)
        if (void 0 !== arguments[e]) return arguments[e];
    }
    var a =
        "\nvarying vec2 vUv;\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n",
      i =
        "\nvarying vec2 vUv;\n\nuniform float dispFactor;\nuniform sampler2D disp;\n\nuniform sampler2D texture1;\nuniform sampler2D texture2;\nuniform float angle1;\nuniform float angle2;\nuniform float intensity1;\nuniform float intensity2;\n\nmat2 getRotM(float angle) {\n  float s = sin(angle);\n  float c = cos(angle);\n  return mat2(c, -s, s, c);\n}\n\nvoid main() {\n  vec4 disp = texture2D(disp, vUv);\n  vec2 dispVec = vec2(disp.r, disp.g);\n  vec2 distortedPosition1 = vUv + getRotM(angle1) * dispVec * intensity1 * dispFactor;\n  vec2 distortedPosition2 = vUv + getRotM(angle2) * dispVec * intensity2 * (1.0 - dispFactor);\n  vec4 _texture1 = texture2D(texture1, distortedPosition1);\n  vec4 _texture2 = texture2D(texture2, distortedPosition2);\n  gl_FragColor = mix(_texture1, _texture2, dispFactor);\n}\n",
      o = e.parent,
      n = e.displacementImage,
      r = e.image1,
      s = e.image2,
      l = t(e.intensity1, e.intensity, 1),
      d = t(e.intensity2, e.intensity, 1),
      c = t(e.angle, Math.PI / 4),
      u = t(e.angle1, c),
      h = t(e.angle2, 3 * -c),
      p = t(e.speedIn, e.speed, 1.6),
      m = t(e.speedOut, e.speed, 1.2),
      f = t(e.hover, !0),
      g = t(e.easing, Expo.easeOut);
    if (!o) return void console.warn("Parent missing");
    if (!(r && s && n))
      return void console.warn("One or more images are missing");
    var v = new THREE.Scene(),
      w = new THREE.OrthographicCamera(
        o.offsetWidth / -2,
        o.offsetWidth / 2,
        o.offsetHeight / 2,
        o.offsetHeight / -2,
        1,
        1e3
      );
    w.position.z = 1;
    var y = new THREE.WebGLRenderer({ antialias: !1, alpha: !0 });
    y.setPixelRatio(window.devicePixelRatio),
      y.setClearColor(16777215, 0),
      y.setSize(o.offsetWidth, o.offsetHeight),
      o.appendChild(y.domElement);
    var $ = function () {
        y.render(v, w);
      },
      b = new THREE.TextureLoader();
    b.crossOrigin = "";
    var C = b.load(n, $);
    C.wrapS = C.wrapT = THREE.RepeatWrapping;
    var T = b.load(r, $),
      x = b.load(s, $);
    (T.magFilter = x.magFilter = THREE.LinearFilter),
      (T.minFilter = x.minFilter = THREE.LinearFilter);
    var k = new THREE.ShaderMaterial({
        uniforms: {
          intensity1: { type: "f", value: l },
          intensity2: { type: "f", value: d },
          dispFactor: { type: "f", value: 0 },
          angle1: { type: "f", value: u },
          angle2: { type: "f", value: h },
          texture1: { type: "t", value: T },
          texture2: { type: "t", value: x },
          disp: { type: "t", value: C },
        },
        vertexShader: a,
        fragmentShader: i,
        transparent: !0,
        opacity: 1,
      }),
      E = new THREE.PlaneBufferGeometry(o.offsetWidth, o.offsetHeight, 1),
      P = new THREE.Mesh(E, k);
    v.add(P);
    var O = function () {
      var e = "mouseenter",
        t = "mouseleave";
      o.addEventListener(e, function () {
        TweenMax.to(k.uniforms.dispFactor, p, { value: 1, ease: g });
      }),
        o.addEventListener(t, function () {
          TweenMax.to(k.uniforms.dispFactor, m, { value: 0, ease: g });
        });
    };
    f && O(),
      (this.next = function () {
        TweenMax.to(k.uniforms.dispFactor, p, { value: 1, ease: g });
      }),
      (this.previous = function () {
        TweenMax.to(k.uniforms.dispFactor, m, { value: 0, ease: g });
      }),
      window.addEventListener("resize", function () {
        y.setSize(o.offsetWidth, o.offsetHeight);
      });
    var M = function I() {
      $(), requestAnimationFrame(I);
    };
    WEBGL.isWebGLAvailable() && (o.classList.add("three"), M());
  };
!(function (e, t) {
  "function" == typeof define && define.amd
    ? define(["jquery"], t)
    : t(e.jQuery);
})(this, function (e) {
  var t, a, o, n, r, s, l, d, c, u, h;
  if (
    ((a = !!document.createElement("canvas").getContext),
    (t = (function () {
      var e = document.createElement("div");
      e.innerHTML = '<v:shape id="vml_flag1" adj="1" />';
      var t = e.firstChild;
      return (
        (t.style.behavior = "url(#default#VML)"),
        t ? "object" == typeof t.adj : !0
      );
    })()),
    !a && !t)
  )
    return void (e.fn.maphilight = function () {
      return this;
    });
  if (a) {
    (d = function (e) {
      return Math.max(0, Math.min(parseInt(e, 16), 255));
    }),
      (c = function (e, t) {
        return (
          "rgba(" +
          d(e.substr(0, 2)) +
          "," +
          d(e.substr(2, 2)) +
          "," +
          d(e.substr(4, 2)) +
          "," +
          t +
          ")"
        );
      }),
      (o = function (t) {
        var a = e(
          '<canvas style="width:' +
            e(t).width() +
            "px;height:" +
            e(t).height() +
            'px;"></canvas>'
        ).get(0);
        return (
          a.getContext("2d").clearRect(0, 0, e(t).width(), e(t).height()), a
        );
      });
    var p = function (e, t, a, o, n) {
      if (((o = o || 0), (n = n || 0), e.beginPath(), "rect" == t))
        e.rect(a[0] + o, a[1] + n, a[2] - a[0], a[3] - a[1]);
      else if ("poly" == t)
        for (e.moveTo(a[0] + o, a[1] + n), i = 2; i < a.length; i += 2)
          e.lineTo(a[i] + o, a[i + 1] + n);
      else "circ" == t && e.arc(a[0] + o, a[1] + n, a[2], 0, 2 * Math.PI, !1);
      e.closePath();
    };
    (n = function (t, a, i, o) {
      var n = t.getContext("2d");
      if (o.shadow) {
        n.save(), "inside" == o.shadowPosition && n.clip();
        var r = 100 * t.width,
          s = 100 * t.height;
        p(n, a, i, r, s),
          (n.shadowOffsetX = o.shadowX - r),
          (n.shadowOffsetY = o.shadowY - s),
          (n.shadowBlur = o.shadowRadius),
          (n.shadowColor = c(o.shadowColor, o.shadowOpacity));
        var l = o.shadowFrom;
        l || (l = "outside" == o.shadowPosition ? "fill" : "stroke"),
          "stroke" == l
            ? ((n.strokeStyle = "rgba(0,0,0,1)"), n.stroke())
            : "fill" == l && ((n.fillStyle = "rgba(0,0,0,1)"), n.fill()),
          n.restore(),
          "outside" == o.shadowPosition &&
            (n.save(),
            p(n, a, i),
            (n.globalCompositeOperation = "destination-out"),
            (n.fillStyle = "rgba(0,0,0,1);"),
            n.fill(),
            n.restore());
      }
      n.save(),
        p(n, a, i),
        o.fill && ((n.fillStyle = c(o.fillColor, o.fillOpacity)), n.fill()),
        o.stroke &&
          ((n.strokeStyle = c(o.strokeColor, o.strokeOpacity)),
          (n.lineWidth = o.strokeWidth),
          n.stroke()),
        n.restore(),
        o.fade &&
          e(t).css("opacity", 0).stop().animate({ opacity: 1 }, 300, "linear");
    }),
      (r = function (e) {
        e.getContext("2d").clearRect(0, 0, e.width, e.height);
      });
  } else
    (o = function (t) {
      return e(
        '<var style="zoom:1;overflow:hidden;display:block;width:' +
          t.width +
          "px;height:" +
          t.height +
          'px;"></var>'
      ).get(0);
    }),
      (n = function (t, a, i, o, n) {
        var r, s, l, d;
        for (var c in i) i[c] = parseInt(i[c], 10);
        (r =
          '<v:fill color="#' +
          o.fillColor +
          '" opacity="' +
          (o.fill ? o.fillOpacity : 0) +
          '" />'),
          (s = o.stroke
            ? 'strokeweight="' +
              o.strokeWidth +
              '" stroked="t" strokecolor="#' +
              o.strokeColor +
              '"'
            : 'stroked="f"'),
          (l = '<v:stroke opacity="' + o.strokeOpacity + '"/>'),
          "rect" == a
            ? (d = e(
                '<v:rect name="' +
                  n +
                  '" filled="t" ' +
                  s +
                  ' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:' +
                  i[0] +
                  "px;top:" +
                  i[1] +
                  "px;width:" +
                  (i[2] - i[0]) +
                  "px;height:" +
                  (i[3] - i[1]) +
                  'px;"></v:rect>'
              ))
            : "poly" == a
            ? (d = e(
                '<v:shape name="' +
                  n +
                  '" filled="t" ' +
                  s +
                  ' coordorigin="0,0" coordsize="' +
                  t.width +
                  "," +
                  t.height +
                  '" path="m ' +
                  i[0] +
                  "," +
                  i[1] +
                  " l " +
                  i.join(",") +
                  ' x e" style="zoom:1;margin:0;padding:0;display:block;position:absolute;top:0px;left:0px;width:' +
                  t.width +
                  "px;height:" +
                  t.height +
                  'px;"></v:shape>'
              ))
            : "circ" == a &&
              (d = e(
                '<v:oval name="' +
                  n +
                  '" filled="t" ' +
                  s +
                  ' style="zoom:1;margin:0;padding:0;display:block;position:absolute;left:' +
                  (i[0] - i[2]) +
                  "px;top:" +
                  (i[1] - i[2]) +
                  "px;width:" +
                  2 * i[2] +
                  "px;height:" +
                  2 * i[2] +
                  'px;"></v:oval>'
              )),
          (d.get(0).innerHTML = r + l),
          e(t).append(d);
      }),
      (r = function (t) {
        var a = e("<div>" + t.innerHTML + "</div>");
        a.children("[name=highlighted]").remove(), (t.innerHTML = a.html());
      });
  (s = function (e) {
    var t,
      a = e.getAttribute("coords").split(",");
    for (t = 0; t < a.length; t++) a[t] = parseFloat(a[t]);
    return [e.getAttribute("shape").toLowerCase().substr(0, 4), a];
  }),
    (h = function (t, a) {
      var i = e(t);
      return e.extend(
        {},
        a,
        e.metadata ? i.metadata() : !1,
        i.data("maphilight")
      );
    }),
    (u = function (e) {
      return e.complete
        ? "undefined" == typeof e.naturalWidth || 0 !== e.naturalWidth
        : !1;
    }),
    (l = {});
  var m = !1;
  (e.fn.maphilight = function (i) {
    return (
      (i = e.extend({}, e.fn.maphilight.defaults, i)),
      a ||
        m ||
        (e(window).ready(function () {
          document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
          var t = document.createStyleSheet(),
            a = [
              "shape",
              "rect",
              "oval",
              "circ",
              "fill",
              "stroke",
              "imagedata",
              "group",
              "textbox",
            ];
          e.each(a, function () {
            t.addRule(
              "v\\:" + this,
              "behavior: url(#default#VML); antialias:true"
            );
          });
        }),
        (m = !0)),
      this.each(function () {
        var l, d, c, p, m, f, g;
        if (((l = e(this)), !u(this)))
          return window.setTimeout(function () {
            l.maphilight(i);
          }, 200);
        if (
          ((c = e.extend(
            {},
            i,
            e.metadata ? l.metadata() : !1,
            l.data("maphilight")
          )),
          (g = l.get(0).getAttribute("usemap")),
          g &&
            ((p = e('map[name="' + g.substr(1) + '"]')),
            l.is('img,input[type="image"]') && g && p.length > 0))
        ) {
          if (l.hasClass("area")) {
            var v = l.parent();
            l.insertBefore(v), v.remove(), e(p).unbind(".maphilight");
          }
          (d = e('<div class="map-background"></div>').css({
            backgroundImage: 'url("' + this.src + '")',
          })),
            c.wrapClass &&
              (c.wrapClass === !0
                ? d.addClass(e(this).attr("class"))
                : d.addClass(c.wrapClass)),
            l.before(d),
            t && l.css("filter", "Alpha(opacity=0)"),
            d.append(l),
            (m = o(this)),
            (m.height = this.height),
            (m.width = this.width),
            e(p)
              .bind("alwaysOn.maphilight", function () {
                f && r(f),
                  a || e(m).empty(),
                  e(p)
                    .find("area[coords]")
                    .each(function () {
                      var e, t;
                      (t = h(this, c)),
                        t.alwaysOn &&
                          (!f &&
                            a &&
                            ((f = o(l[0])),
                            (f.width = l[0].width),
                            (f.height = l[0].height),
                            l.before(f)),
                          (t.fade = t.alwaysOnFade),
                          (e = s(this)),
                          a
                            ? n(f, e[0], e[1], t, "")
                            : n(m, e[0], e[1], t, ""));
                    });
              })
              .trigger("alwaysOn.maphilight")
              .bind("mouseover.maphilight, focus.maphilight", function (t) {
                var i,
                  o,
                  r = t.target;
                if (((o = h(r, c)), !o.neverOn && !o.alwaysOn)) {
                  if (
                    ((i = s(r)), n(m, i[0], i[1], o, "highlighted"), o.groupBy)
                  ) {
                    var l;
                    l = /^[a-zA-Z][\-a-zA-Z]+$/.test(o.groupBy)
                      ? p.find(
                          "area[" +
                            o.groupBy +
                            '="' +
                            e(r).attr(o.groupBy) +
                            '"]'
                        )
                      : p.find(o.groupBy);
                    var d = r;
                    l.each(function () {
                      if (this != d) {
                        var e = h(this, c);
                        if (!e.neverOn && !e.alwaysOn) {
                          var t = s(this);
                          n(m, t[0], t[1], e, "highlighted");
                        }
                      }
                    });
                  }
                  a || e(m).append("<v:rect></v:rect>");
                }
              })
              .bind("mouseout.maphilight, blur.maphilight", function () {
                r(m);
              }),
            l.before(m),
            l.addClass("area");
        }
      })
    );
  }),
    (e.fn.maphilight.defaults = {
      fill: !0,
      fillColor: "000000",
      fillOpacity: 0.3,
      stroke: !0,
      strokeColor: "ffffff",
      strokeOpacity: 1,
      strokeWidth: 8,
      fade: !0,
      alwaysOn: !1,
      neverOn: !1,
      groupBy: !1,
      wrapClass: !1,
      shadow: !0,
      shadowX: 5,
      shadowY: 5,
      shadowRadius: 10,
      shadowColor: "000000",
      shadowOpacity: 0.8,
      shadowPosition: "outside",
      shadowFrom: !1,
    });
});
