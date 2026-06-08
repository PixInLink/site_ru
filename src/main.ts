import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "./routes";
import "./assets/main.scss";

declare global {
  interface Window {
    $: typeof import("jquery");
    jQuery: typeof import("jquery");
  }
}

export const createApp = ViteSSG(App, { routes }, async () => {
  if (!import.meta.env.SSR) {
    window.onerror = (msg, src, line, col, err) => {
      console.error("[PixInLink] JS error:", msg, src, line, col, err?.stack);
    };
    console.log("[PixInLink] module loaded, $=", !!window.$, "$.fn.slick=", !!(window.$ && window.$.fn && window.$.fn.slick));
    await import("bootstrap/js/dist/collapse");
    initWhenReady();
  }
});

function initWhenReady() {
  const $ = window.$;
  if ($?.fn?.slick) {
    console.log("[PixInLink] jQuery+slick OK, initializing sliders");
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
    initSliders();
    initWaves();
  } else {
    console.log("[PixInLink] waiting for slick... $=", !!$, "$.fn=", !!($ && $.fn), "$.fn.slick=", !!($ && $.fn && $.fn.slick));
    setTimeout(initWhenReady, 50);
  }
}

function initSliders() {
  try {
  const $ = window.$;
  if (!$) { console.log("[PixInLink] initSliders: no jQuery"); return; }

  const $banner = $("#banner_slider");
  console.log("[PixInLink] banner_slider found:", !!$banner.length);
  if ($banner.length) {
    $banner.slick({
      dots: false,
      arrows: false,
      speed: 800,
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 7000,
      cssEase: "ease-out",
      responsive: [
        {
          breakpoint: 960,
          settings: { dots: true, fade: true },
        },
      ],
    });
    console.log("[PixInLink] banner_slider initialized");

    const $nav = $("#banner_nav a");
    $nav.on("click", function (this: HTMLElement) {
      const index = $(this).data("slide");
      $banner.slick("slickGoTo", index);
      return false;
    });

    $banner.on(
      "afterChange",
      (_event: unknown, _slick: unknown, currentSlide: number) => {
        $nav.removeClass("active");
        $(`#banner_nav > a[data-slide=${currentSlide}]`).addClass("active");
      }
    );
  }

  const $promo = $("#promotion_slider");
  if ($promo.length) {
    $promo.slick({
      dots: false,
      arrows: false,
      speed: 800,
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      cssEase: "ease-out",
      responsive: [
        {
          breakpoint: 800,
          settings: { dots: true },
        },
      ],
    });
    console.log("[PixInLink] promotion_slider initialized, found:", !!$promo.length);

    $("#promotion_prev").on("click", () => $promo.slick("slickPrev"));
    $("#promotion_next").on("click", () => $promo.slick("slickNext"));
  }

  const $benefit = $("#benefit_slider");
  if ($benefit.length) {
    $benefit.slick({
      dots: true,
      arrows: false,
      speed: 800,
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
      fade: true,
      autoplaySpeed: 10000,
    });
    console.log("[PixInLink] benefit_slider initialized, found:", !!$benefit.length);

    $("#benefit_prev").on("click", () => $benefit.slick("slickPrev"));
    $("#benefit_next").on("click", () => $benefit.slick("slickNext"));
  }
  } catch (e) {
    console.error("[PixInLink] slider init error:", e);
  }
}
