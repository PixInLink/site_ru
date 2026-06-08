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
    await import("bootstrap/js/dist/collapse");
    // Vue hydration completes synchronously after this callback.
    // setTimeout(0) defers slider init until after hydration so Vue doesn't revert slick's DOM changes.
    setTimeout(initWhenReady, 100);
  }
});

function initWhenReady() {
  const $ = window.$;
  if ($?.fn?.slick) {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
    initSliders();
    try {
      const M = (window as unknown as Record<string, unknown>).M as { Waves?: { init: () => void } } | undefined;
      if (M?.Waves) M.Waves.init();
    } catch { /* materialize.js may not be loaded */ }
  } else {
    setTimeout(initWhenReady, 50);
  }
}

function initSliders() {
  const $ = window.$;
  if (!$) return;

  const $banner = $("#banner_slider");
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

    $("#benefit_prev").on("click", () => $benefit.slick("slickPrev"));
    $("#benefit_next").on("click", () => $benefit.slick("slickNext"));
  }
}
