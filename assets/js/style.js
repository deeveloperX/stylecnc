(function (a) {
  for (
    var y = document.querySelectorAll(".youtube"), k = 0;
    k < y.length;
    k++
  ) {
    var m =
        "https://img.youtube.com/vi/" +
        y[k].dataset.embed +
        "/maxresdefault.jpg",
      B = new Image();
    B.src = m;
    m = B;
    var K = m.addEventListener;
    y[k].appendChild(B);
    K.call(m, "load", void 0);
    y[k].addEventListener("click", function () {
      var d = document.createElement("iframe");
      d.setAttribute("frameborder", "0");
      d.setAttribute("allowfullscreen", "");
      d.setAttribute(
        "src",
        "https://www.youtube.com/embed/" +
          this.dataset.embed +
          "?rel=0&showinfo=0&autoplay=1"
      );
      this.innerHTML = "";
      this.appendChild(d);
    });
  }
  ("use strict");
  var G = "";
  a(window).on("scroll", function () {
    var d = a(".sticky-header"),
      h = a(window).scrollTop();
    600 < a(window).scrollTop()
      ? h > G
        ? d.removeClass("active")
        : d.addClass("active")
      : d.removeClass("active");
    G = h;
    200 < a(this).scrollTop()
      ? a(".scrollToTop").addClass("show")
      : a(".scrollToTop").removeClass("show");
  });
  a(".scrollToTop").on("click", function (d) {
    d.preventDefault();
    a("html, body").animate({ scrollTop: 0 }, 4e3);
    return !1;
  });
  a(".counter").counterUp({ delay: 10, time: 1e3 });
  a(".hero-slider-active").layerSlider({
    pauseOnHover: !1,
    navPrevNext: !1,
    navStartStop: !1,
    hoverPrevNext: !0,
    hoverBottomNav: !0,
    navButtons: !0,
    thumbnailNavigation: "disabled",
    loop: !0,
    autostart: !1,
    height: 1e3,
    responsiveUnder: 1480,
    layersContainer: 1480,
    skinsPath: "/assets/css/skins/",
    showCircleTimer: !1,
  });
  a(".select2").select2();
  a(".latvideos-slider-active").slick({
    dots: !1,
    arrows: !0,
    prevArrow:
      '<button type="button" class="slick-prev" title="Prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next" title="Next"><i class="fal fa-chevron-right"></i></button>',
    infinite: !0,
    speed: 300,
    autoplay: !0,
    autoplaySpeed: 6e3,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 480, settings: { arrows: !1 } },
      { breakpoint: 480, settings: { arrows: !1 } },
    ],
  });
  a(".service-slider1-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    speed: 300,
    fade: !1,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1350, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
  a(".service-slider2-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !0,
    prevArrow:
      '<button type="button" class="slick-prev skew type2" title="Prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next skew type2" title="Next"><i class="fal fa-chevron-right"></i></button>',
    autoplay: !0,
    autoplaySpeed: 6e3,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1670, settings: { arrows: !1 } },
      { breakpoint: 1200, settings: { arrows: !1, slidesToShow: 3 } },
      { breakpoint: 992, settings: { arrows: !1, slidesToShow: 2 } },
      { breakpoint: 768, settings: { arrows: !1, slidesToShow: 1 } },
    ],
  });
  a(".service-slider3-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    speed: 300,
    centerMode: !0,
    centerPadding: "0",
    focusOnSelect: !0,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1670, settings: { slidesToShow: 3 } },
      { breakpoint: 1200, settings: { slidesToShow: 2, centerMode: !1 } },
      { breakpoint: 992, settings: { slidesToShow: 2, centerMode: !1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: !1 } },
    ],
  });
  a(".featured-slider-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !0,
    prevArrow:
      '<button type="button" class="slick-prev" title="Prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next" title="Next"><i class="fal fa-chevron-right"></i></button>',
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !1,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
  a(".testomonal-slider1").slick({
    dots: !1,
    infinite: !0,
    arrows: !0,
    prevArrow:
      '<button type="button" class="slick-prev" title="Prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next" title="Next"><i class="fal fa-chevron-right"></i></button>',
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !0,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1670, settings: { arrows: !1 } },
      { breakpoint: 768, settings: { arrows: !1, speed: 1e3 } },
    ],
  });
  a(".testomonial-slider2-active").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    pauseOnHover: !1,
    pauseOnFocus: !1,
    speed: 500,
    fade: !0,
    dots: !1,
    infinite: !0,
    asNavFor: ".testomonial-avatar-nav",
  });
  a(".testomonial-avatar-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    pauseOnHover: !1,
    pauseOnFocus: !1,
    speed: 500,
    asNavFor: ".testomonial-slider2-active",
    dots: !1,
    centerMode: !0,
    focusOnSelect: !0,
    centerPadding: "0",
    arrows: !1,
    infinite: !0,
    variableWidth: !0,
  });
  a(".testomonial-slider3-active").slick({
    dots: !0,
    infinite: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !1,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  a(".testomonal-slider4-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !0,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  a(".testomonal-slider5-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !0,
    speed: 1e3,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  a(".blog-slider1-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !0,
    prevArrow:
      '<button type="button" class="slick-prev" title="Prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next" title="Next"><i class="fal fa-chevron-right"></i></button>',
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !1,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 3 } },
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  });
  a(".videos-slider-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !1,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 3 } },
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  });
  a(".popular-blog").slick({
    dots: !1,
    infinite: !0,
    arrows: !0,
    prevArrow:
      '<button type="button" class="slick-prev skew type2" title="Prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next skew type2" title="Next"><i class="fal fa-chevron-right"></i></button>',
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !1,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: ".latest-blog-area",
    responsive: [
      { breakpoint: 1670, settings: { arrows: !1 } },
      { breakpoint: 1200, settings: { arrows: !1, slidesToShow: 1 } },
      { breakpoint: 992, settings: { arrows: !1, slidesToShow: 1 } },
      { breakpoint: 768, settings: { arrows: !1, slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1, arrows: !1 } },
    ],
  });
  a(".latest-blog-area").slick({
    dots: !1,
    infinite: !0,
    arrows: !0,
    prevArrow:
      '<button type="button" class="slick-prev skew type2" title="Prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next skew type2" title="Next"><i class="fal fa-chevron-right"></i></button>',
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !1,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".popular-blog",
    responsive: [
      { breakpoint: 1670, settings: { arrows: !1 } },
      { breakpoint: 1200, settings: { slidesToShow: 1, arrows: !1 } },
      { breakpoint: 992, settings: { slidesToShow: 1, arrows: !1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: !1 } },
    ],
  });
  a(".blog-slider3-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !1,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1670, settings: { arrows: !1 } },
      { breakpoint: 1200, settings: { slidesToShow: 1, arrows: !1 } },
      { breakpoint: 992, settings: { slidesToShow: 1, arrows: !1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: !1 } },
    ],
  });
  a(".blog-slider4-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !1,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1670, settings: { arrows: !1 } },
      { breakpoint: 1200, settings: { slidesToShow: 1, arrows: !1 } },
      { breakpoint: 992, settings: { slidesToShow: 1, arrows: !1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: !1 } },
    ],
  });
  a(".blog-img-slider").slick({
    dots: !1,
    infinite: !0,
    arrows: !0,
    prevArrow:
      '<button type="button" class="slick-prev" title="Prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next" title="Next"><i class="fal fa-chevron-right"></i></button>',
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !1,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 1, arrows: !1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: !1 } },
    ],
  });
  a(".brand-slider1-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !1,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 5 } },
      { breakpoint: 1350, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  });
  a(".brand-slider2-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !1,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 3 } },
      { breakpoint: 1350, settings: { slidesToShow: 2 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  });
  a(".solution-slider1-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !0,
    prevArrow:
      '<button type="button" class="slick-prev skew type2" title="Prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next skew type2" title="Next"><i class="fal fa-chevron-right"></i></button>',
    autoplay: !0,
    autoplaySpeed: 6e3,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1670, settings: { arrows: !1 } },
      { breakpoint: 1200, settings: { arrows: !1, slidesToShow: 3 } },
      { breakpoint: 992, settings: { arrows: !1, slidesToShow: 2 } },
      { breakpoint: 768, settings: { arrows: !1, slidesToShow: 1 } },
    ],
  });
  a(".solution-slider2-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !0,
    prevArrow:
      '<button type="button" class="slick-prev" title="Prev"><i class="fal fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next" title="Next"><i class="fal fa-chevron-right"></i></button>',
    autoplay: !0,
    autoplaySpeed: 6e3,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1670, settings: { arrows: !0, slidesToShow: 3 } },
      { breakpoint: 1200, settings: { arrows: !0, slidesToShow: 2 } },
      { breakpoint: 992, settings: { arrows: !0, slidesToShow: 2 } },
      { breakpoint: 768, settings: { arrows: !0, slidesToShow: 1 } },
    ],
  });
  a(".gallery-slider1-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 700,
    fade: !1,
    pauseOnHover: !1,
    pauseOnFocus: !1,
    speed: 4e3,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      {
        breakpoint: 768,
        settings: { autoplaySpeed: 5e3, slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  });
  a(".blogimg-wid-slide").slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    autoplay: !0,
    autoplaySpeed: 6e3,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  a(".comment-widget-slide").slick({
    dots: !1,
    arrows: !1,
    infinite: !0,
    autoplay: !0,
    autoplaySpeed: 6e3,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  (function () {
    a(".scroll-down").each(function () {
      a(this).on("click", function (d) {
        var h = a(this.getAttribute("href"));
        h.length &&
          (d.preventDefault(),
          a("html, body")
            .stop()
            .animate({ scrollTop: h.offset().top - 100 }, 1500));
      });
    });
  })();
  a(".contactForm-slide-active").slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    fade: !0,
    pauseOnHover: !1,
    autoplay: !0,
    autoplaySpeed: 3e3,
    speed: 1e3,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 1670, settings: { dots: !1 } }],
  });
  a(".mission-slider-active").slick({
    dots: !1,
    infinite: !0,
    arrows: !1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    fade: !1,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
  (function () {
    a(".faq-title button").each(function () {
      a(this).on("click", function () {
        var d = a(this).parent().parent().parent();
        d.hasClass("open")
          ? d.removeClass("open")
          : (a(".single-faq.open").removeClass("open"), d.addClass("open"));
      });
    });
  })();
  (function () {
    a(".product-index-title button").each(function () {
      a(this).on("click", function () {
        var d = a(this).parent().parent().parent();
        d.hasClass("open")
          ? d.removeClass("open")
          : (a(".category-info.open").removeClass("open"), d.addClass("open"));
      });
    });
  })();
  a(".branchInfo-slider-active").slick({
    dots: !0,
    arrows: !1,
    infinite: !0,
    fade: !0,
    pauseOnHover: !1,
    pauseOnFocus: !0,
    autoplay: !0,
    autoplaySpeed: 6e3,
    speed: 1e3,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  a(".branchInfo-slider-active").on("beforeChange", function (d, h, r, n) {
    a(".officer-info-box.show").removeClass("show");
  });
  (function () {
    a(".officer-info-toggler").each(function () {
      a(this).on("click", function (d) {
        d.preventDefault();
        d = a(this).next(".officer-info-box");
        d.hasClass("show")
          ? d.removeClass("show")
          : (a(".officer-info-box.show").removeClass("show"),
            d.addClass("show"));
      });
    });
  })();
  (function () {
    var d = 146,
      h = 8;
    768 > a(window).width() ? ((d = 100), (h = 4)) : ((d = 146), (h = 8));
    a(".circle-progress")
      .circleProgress({
        size: d,
        thickness: h,
        startAngle: -1.6,
        fill: "#002255",
        emptyFill: "#c7d8ff",
      })
      .on("circle-animation-progress", function (r, n, C) {
        a(this)
          .find("span")
          .text(C.toFixed(2).substr(2) + "%");
      });
  })();
  a(".bar-progress .progress-value").each(function () {
    var d = a(this).attr("data-value");
    a(this).css("width", d + "%");
  });
  a(".solution-img-slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !1,
    fade: !0,
    autoplay: !0,
    autoplaySpeed: 6e3,
    dots: !1,
    asNavFor: ".solution-img-slide-nav",
  });
  a(".solution-img-slide-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: ".solution-img-slide",
    autoplay: !0,
    autoplaySpeed: 6e3,
    dots: !1,
    centerMode: !1,
    arrows: !1,
    focusOnSelect: !0,
    responsive: [
      { breakpoint: 1500, settings: { slidesToShow: 4, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    ],
  });
  (function (d) {
    a(d).each(function () {
      var h = a(this).html();
      a(this).html("");
      a(this).prepend(h);
    });
    0 < a(d).length &&
      (a(d).on("mouseenter", function (h) {
        var r = a(this).offset(),
          n = h.pageX - r.left;
        h = h.pageY - r.top;
        a(this).find("span.btn-bg") &&
          a(this).find("span.btn-bg").css({ top: h, left: n });
      }),
      a(d).on("mouseout", function (h) {
        var r = a(this).offset(),
          n = h.pageX - r.left;
        h = h.pageY - r.top;
        a(this).find("span.btn-bg") &&
          a(this).find("span.btn-bg").css({ top: h, left: n });
      }));
  })(".primary-btn");
  a(".product-img-slide").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !0,
    fade: !0,
    autoplay: !0,
    autoplaySpeed: 6e3,
    dots: !0,
    speed: 700,
    prevArrow:
      '<button type="button" class="slick-prev" title="Prev"><i class="far fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next" title="Next"><i class="far fa-chevron-right"></i></button>',
  });
  a(".product-details-img").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: !0,
    fade: !0,
    autoplay: !0,
    autoplaySpeed: 6e3,
    dots: !1,
    speed: 700,
    prevArrow:
      '<button type="button" class="slick-prev" title="Prev"><i class="far fa-chevron-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next" title="Next"><i class="far fa-chevron-right"></i></button>',
    asNavFor: ".product-details-thumb",
  });
  a(".product-details-thumb").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: !1,
    arrows: !1,
    fade: !1,
    autoplay: !0,
    autoplaySpeed: 6e3,
    speed: 700,
    focusOnSelect: !0,
    asNavFor: ".product-details-img",
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 3 } }],
  });
  0 < a(".vs-rating-input").length &&
    a(".vs-rating-input").each(function () {
      a(this)
        .find("span")
        .on("click", function () {
          a(".vs-rating-input span").addClass("active");
          a(this).nextAll("span").removeClass("active");
        });
    });
  a("#buyerShipAnother").on("change", function () {
    a(this).is(":checked")
      ? a(".vs-billing-differentAddress").slideDown()
      : a(".vs-billing-differentAddress").slideUp();
  });
  document.onkeydown = function (d) {
    if (
      123 == event.keyCode ||
      (d.ctrlKey && d.shiftKey && 73 == d.keyCode) ||
      (d.ctrlKey && d.shiftKey && 67 == d.keyCode) ||
      (d.ctrlKey && d.shiftKey && 74 == d.keyCode) ||
      (d.ctrlKey && 85 == d.keyCode)
    )
      return !1;
  };
})(jQuery);
!(function (a) {
  var y = (function (k, m, B) {
    function K(b, c) {
      return (
        ha[c] || (ha[c] = new RegExp("(\\s|^)" + c + "(\\s|$)")),
        ha[c].test(b[t]("class") || "") && ha[c]
      );
    }
    function G(b, c) {
      K(b, c) ||
        b.setAttribute("class", (b[t]("class") || "").trim() + " " + c);
    }
    function d(b, c) {
      (c = K(b, c)) &&
        b.setAttribute("class", (b[t]("class") || "").replace(c, " "));
    }
    function h(b, c, e, g, p) {
      var l = m.createEvent("Event");
      return (
        ((e = e || {}).instance = H),
        l.initEvent(c, !g, !p),
        (l.detail = e),
        b.dispatchEvent(l),
        l
      );
    }
    function r(b, c) {
      var e;
      !Ta && (e = k.picturefill || f.pf)
        ? (c && c.src && !b[t]("srcset") && b.setAttribute("srcset", c.src),
          e({ reevaluate: !0, elements: [b] }))
        : c && c.src && (b.src = c.src);
    }
    function n(b, c, e) {
      for (e = e || b.offsetWidth; e < f.minSize && c && !b._lazysizesWidth; )
        (e = c.offsetWidth), (c = c.parentNode);
      return e;
    }
    function C(b, c) {
      return c
        ? function () {
            U(b);
          }
        : function () {
            var e = this,
              g = arguments;
            U(function () {
              b.apply(e, g);
            });
          };
    }
    function S(b) {
      function c() {
        e = null;
        b();
      }
      var e,
        g,
        p = function () {
          var l = B.now() - g;
          99 > l ? A(p, 99 - l) : (na || c)(c);
        };
      return function () {
        g = B.now();
        e = e || A(p, 99);
      };
    }
    function F(b, c, e) {
      var g = b.parentNode;
      g &&
        ((e = n(b, g, e)),
        (c = h(b, "lazybeforesizes", { width: e, dataAttr: !!c }))
          .defaultPrevented ||
          ((e = c.detail.width) && e !== b._lazysizesWidth && ya(b, g, c, e)));
    }
    function ea(b) {
      w--;
      (b && !(0 > w) && b.target) || (w = 0);
    }
    function T(b) {
      return (
        null == ia &&
          (ia = "hidden" == (getComputedStyle(m.body, null) || {}).visibility),
        ia ||
          !(
            "hidden" ==
              (getComputedStyle(b.parentNode, null) || {}).visibility &&
            "hidden" == (getComputedStyle(b, null) || {}).visibility
          )
      );
    }
    function L() {
      var b,
        c,
        e,
        g,
        p,
        l,
        I,
        J,
        x,
        E,
        q = H.elements;
      if ((V = f.loadMode) && 8 > w && (b = q.length)) {
        var u = 0;
        for (M++; u < b; u++)
          if (q[u] && !q[u]._lazyRace)
            if (!za || (H.prematureUnveil && H.prematureUnveil(q[u]))) W(q[u]);
            else {
              ((l = q[u][t]("data-expand")) && (g = +l)) || (g = X);
              J ||
                ((J =
                  !f.expand || 1 > f.expand
                    ? 500 < Q.clientHeight && 500 < Q.clientWidth
                      ? 500
                      : 370
                    : f.expand),
                (x = (H._defEx = J) * f.expFactor),
                (E = f.hFac),
                (ia = null),
                X < x && 1 > w && 2 < M && 2 < V && !m.hidden
                  ? ((X = x), (M = 0))
                  : (X = 1 < V && 1 < M && 6 > w ? J : 0));
              I !== g &&
                ((Aa = innerWidth + g * E),
                (Ba = innerHeight + g),
                (p = -1 * g),
                (I = g));
              x = q[u].getBoundingClientRect();
              var D;
              if (
                (D =
                  (Y = x.bottom) >= p &&
                  (Z = x.top) <= Ba &&
                  (aa = x.right) >= p * E &&
                  (ba = x.left) <= Aa &&
                  (Y || aa || ba || Z) &&
                  (f.loadHidden || T(q[u]))) &&
                !(D = ca && 3 > w && !l && (3 > V || 4 > M))
              ) {
                D = void 0;
                var N = q[u],
                  ja = g,
                  O = N;
                N = T(N);
                Z -= ja;
                Y += ja;
                ba -= ja;
                for (
                  aa += ja;
                  N && (O = O.offsetParent) && O != m.body && O != Q;

                )
                  (N = 0 < ((getComputedStyle(O, null) || {}).opacity || 1)) &&
                    "visible" != (getComputedStyle(O, null) || {}).overflow &&
                    ((D = O.getBoundingClientRect()),
                    (N =
                      aa > D.left &&
                      ba < D.right &&
                      Y > D.top - 1 &&
                      Z < D.bottom + 1));
                D = N;
              }
              if (D) {
                if ((W(q[u]), (e = !0), 9 < w)) break;
              } else
                !e &&
                  ca &&
                  !c &&
                  4 > w &&
                  4 > M &&
                  2 < V &&
                  (ka[0] || f.preloadAfterLoad) &&
                  (ka[0] ||
                    (!l &&
                      (Y ||
                        aa ||
                        ba ||
                        Z ||
                        "auto" != q[u][t](f.sizesAttr)))) &&
                  (c = ka[0] || q[u]);
            }
        c && !e && W(c);
      }
    }
    function fa() {
      oa = !1;
      pa = B.now();
      Ca();
    }
    function z(b) {
      var c = b.target;
      c._lazyCache
        ? delete c._lazyCache
        : (ea(b),
          G(c, f.loadedClass),
          d(c, f.loadingClass),
          qa(c, ra),
          h(c, "lazyloaded"));
    }
    function Ua(b) {
      var c,
        e = b[t](f.srcsetAttr);
      (c = f.customMedia[b[t]("data-media") || b[t]("media")]) &&
        b.setAttribute("media", c);
      e && b.setAttribute("srcset", e);
    }
    function Da() {
      3 == f.loadMode && (f.loadMode = 2);
      Ea();
    }
    function Fa() {
      var b = la;
      la = sa.length ? Ga : sa;
      for (ta = !(ua = !0); b.length; ) b.shift()();
      ua = !1;
    }
    function Ha(b, c) {
      ua && !c
        ? b.apply(this, arguments)
        : (la.push(b), ta || ((ta = !0), (m.hidden ? A : Ia)(Fa)));
    }
    var H, f;
    if (
      ((function () {
        var b,
          c = {
            lazyClass: "lazyload",
            loadedClass: "lazyloaded",
            loadingClass: "lazyloading",
            preloadClass: "lazypreload",
            errorClass: "lazyerror",
            autosizesClass: "lazyautosizes",
            fastLoadedClass: "ls-is-cached",
            iframeLoadMode: 0,
            srcAttr: "data-src",
            srcsetAttr: "data-srcset",
            sizesAttr: "data-sizes",
            minSize: 40,
            customMedia: {},
            init: !0,
            expFactor: 1.5,
            hFac: 0.8,
            loadMode: 2,
            loadHidden: !0,
            ricTimeout: 0,
            throttleDelay: 125,
          };
        for (b in ((f = k.lazySizesConfig || k.lazysizesConfig || {}), c))
          b in f || (f[b] = c[b]);
      })(),
      !m || !m.getElementsByClassName)
    )
      return { init: function () {}, cfg: f, noSupport: !0 };
    var va,
      ya,
      Ja,
      ka,
      ca,
      Ka,
      V,
      La,
      Aa,
      Ba,
      Z,
      ba,
      aa,
      Y,
      ia,
      Ca,
      oa,
      pa,
      Ma,
      R,
      wa,
      Na,
      Oa,
      za,
      X,
      w,
      M,
      v,
      Pa,
      ra,
      Qa,
      W,
      Ea,
      da,
      ua,
      ta,
      sa,
      Ga,
      la,
      Q = m.documentElement,
      Ta = k.HTMLPictureElement,
      t = "getAttribute",
      P = k.addEventListener.bind(k),
      A = k.setTimeout,
      Ia = k.requestAnimationFrame || A,
      na = k.requestIdleCallback,
      Ra = /^picture$/i,
      Va = ["load", "error", "lazyincluded", "_lazyloaded"],
      ha = {},
      Wa = Array.prototype.forEach,
      qa = function (b, c, e) {
        var g = e ? "addEventListener" : "removeEventListener";
        e && qa(b, c);
        Va.forEach(function (p) {
          b[g](p, c);
        });
      },
      U = ((Ga = []), (la = sa = []), (Ha._lsFlush = Fa), Ha),
      Sa =
        ((Na = /^img$/i),
        (Oa = /^iframe$/i),
        (za = "onscroll" in k && !/(gle|ing)bot/.test(navigator.userAgent)),
        (M = -1),
        (Ca = L),
        (pa = w = X = 0),
        (Ma = f.throttleDelay),
        (R = f.ricTimeout),
        (wa =
          na && 49 < R
            ? function () {
                na(fa, { timeout: R });
                R !== f.ricTimeout && (R = f.ricTimeout);
              }
            : C(function () {
                A(fa);
              }, !0)),
        (Pa = C(z)),
        (ra = function (b) {
          Pa({ target: b.target });
        }),
        (Qa = C(function (b, c, e, g, p) {
          var l, I, J, x, E;
          (J = h(b, "lazybeforeunveil", c)).defaultPrevented ||
            (g && (e ? G(b, f.autosizesClass) : b.setAttribute("sizes", g)),
            (l = b[t](f.srcsetAttr)),
            (e = b[t](f.srcAttr)),
            p && (I = (E = b.parentNode) && Ra.test(E.nodeName || "")),
            (x = c.firesLoad || ("src" in b && (l || e || I))),
            (J = { target: b }),
            G(b, f.loadingClass),
            x && (clearTimeout(Ka), (Ka = A(ea, 2500)), qa(b, ra, !0)),
            I && Wa.call(E.getElementsByTagName("source"), Ua),
            l
              ? b.setAttribute("srcset", l)
              : e &&
                !I &&
                (Oa.test(b.nodeName)
                  ? ((g = e),
                    0 ==
                    (E =
                      (c = b).getAttribute("data-load-mode") ||
                      f.iframeLoadMode)
                      ? c.contentWindow.location.replace(g)
                      : 1 == E && (c.src = g))
                  : (b.src = e)),
            p && (l || I) && r(b, { src: e }));
          b._lazyRace && delete b._lazyRace;
          d(b, f.lazyClass);
          U(function () {
            var q = b.complete && 1 < b.naturalWidth;
            (x && !q) ||
              (q && G(b, f.fastLoadedClass),
              z(J),
              (b._lazyCache = !0),
              A(function () {
                "_lazyCache" in b && delete b._lazyCache;
              }, 9));
            "lazy" == b.loading && w--;
          }, !0);
        })),
        (Ea = S(function () {
          f.loadMode = 3;
          v();
        })),
        (da = function () {
          ca ||
            (999 > B.now() - La
              ? A(da, 999)
              : ((ca = !0), (f.loadMode = 3), v(), P("scroll", Da, !0)));
        }),
        {
          _: function () {
            La = B.now();
            H.elements = m.getElementsByClassName(f.lazyClass);
            ka = m.getElementsByClassName(f.lazyClass + " " + f.preloadClass);
            P("scroll", v, !0);
            P("resize", v, !0);
            P("pageshow", function (b) {
              var c;
              !b.persisted ||
                ((c = m.querySelectorAll("." + f.loadingClass)).length &&
                  c.forEach &&
                  Ia(function () {
                    c.forEach(function (e) {
                      e.complete && W(e);
                    });
                  }));
            });
            k.MutationObserver
              ? new MutationObserver(v).observe(Q, {
                  childList: !0,
                  subtree: !0,
                  attributes: !0,
                })
              : (Q.addEventListener("DOMNodeInserted", v, !0),
                Q.addEventListener("DOMAttrModified", v, !0),
                setInterval(v, 999));
            P("hashchange", v, !0);
            "focus mouseover click load transitionend animationend"
              .split(" ")
              .forEach(function (b) {
                m.addEventListener(b, v, !0);
              });
            /d$|^c/.test(m.readyState)
              ? da()
              : (P("load", da),
                m.addEventListener("DOMContentLoaded", v),
                A(da, 2e4));
            H.elements.length ? (L(), U._lsFlush()) : v();
          },
          checkElems: (v = function (b) {
            var c;
            (b = !0 === b) && (R = 33);
            oa ||
              ((oa = !0),
              0 > (c = Ma - (B.now() - pa)) && (c = 0),
              b || 9 > c ? wa() : A(wa, c));
          }),
          unveil: (W = function (b) {
            var c, e, g, p;
            b._lazyRace ||
              (((!(p =
                "auto" ==
                (g =
                  (e = Na.test(b.nodeName)) &&
                  (b[t](f.sizesAttr) || b[t]("sizes")))) &&
                ca) ||
                !e ||
                (!b[t]("src") && !b.srcset) ||
                b.complete ||
                K(b, f.errorClass) ||
                !K(b, f.lazyClass)) &&
                ((c = h(b, "lazyunveilread").detail),
                p && xa.updateElem(b, !0, b.offsetWidth),
                (b._lazyRace = !0),
                w++,
                Qa(b, c, p, g, e)));
          }),
          _aLSL: Da,
        }),
      xa =
        ((ya = C(function (b, c, e, g) {
          var p;
          if (
            ((b._lazysizesWidth = g),
            (g += "px"),
            b.setAttribute("sizes", g),
            Ra.test(c.nodeName || ""))
          ) {
            var l = 0;
            for (p = (c = c.getElementsByTagName("source")).length; l < p; l++)
              c[l].setAttribute("sizes", g);
          }
          e.detail.dataAttr || r(b, e.detail);
        })),
        {
          _: function () {
            va = m.getElementsByClassName(f.autosizesClass);
            P("resize", Ja);
          },
          checkElems: (Ja = S(function () {
            var b,
              c = va.length;
            if (c) for (b = 0; b < c; b++) F(va[b]);
          })),
          updateElem: F,
        }),
      ma = function () {
        !ma.i && m.getElementsByClassName && ((ma.i = !0), xa._(), Sa._());
      };
    return (
      A(function () {
        f.init && ma();
      }),
      (H = {
        cfg: f,
        autoSizer: xa,
        loader: Sa,
        init: ma,
        uP: r,
        aC: G,
        rC: d,
        hC: K,
        fire: h,
        gW: n,
        rAF: U,
      })
    );
  })(a, a.document, Date);
  a.lazySizes = y;
  "object" == typeof module && module.exports && (module.exports = y);
})("undefined" != typeof window ? window : {});
