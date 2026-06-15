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
  const loadingEl = document.querySelector(".loading");
  if (loadingEl) loadingEl.style.display = "none";
  const $ = window.$;
  if ($?.fn?.slick) {
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";
    initSliders();
    initAccordions();
    try {
      const M = (window as unknown as Record<string, unknown>).M as { Waves?: { init: () => void } } | undefined;
      if (M?.Waves) M.Waves.init();
    } catch { /* materialize.js may not be loaded */ }
  } else {
    setTimeout(initWhenReady, 50);
  }
}

export function initSliders() {
  const $ = window.$;
  if (!$) return;
  // Destroy existing sliders to allow re-init on SPA navigation
  $(".slick-initialized").slick("unslick");

  const $deco = $("#slider_deco");
  const $banner = $("#banner_slider");
  if ($banner.length) {
    $banner.slick({
      dots: false,
      arrows: false,
      speed: 800,
      slidesToShow: 1,
      infinite: true,
      autoplay: false,
      cssEase: "ease-out",
      ...($deco.length ? { asNavFor: "#slider_deco" } : {}),
      responsive: [
        {
          breakpoint: 960,
          settings: { dots: true, fade: true },
        },
      ],
    });
    const $nav = $("#banner_nav a");
    $nav.off("click").on("click", function (this: HTMLElement) {
      const index = $(this).data("slide");
      $banner.slick("slickGoTo", index);
      return false;
    });
    $banner.off("afterChange").on(
      "afterChange",
      (_event: unknown, _slick: unknown, currentSlide: number) => {
        $nav.removeClass("active");
        $(`#banner_nav > a[data-slide=${currentSlide}]`).addClass("active");
      }
    );

    if ($deco.length) {
      $deco.slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        fade: true,
        cssEase: "ease-out",
        autoplay: false,
      });
    }
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

  const $services = $("#services_carousel");
  if ($services.length) {
    const showSlide = 4;
    if (window.innerWidth > 1200) {
      const prop = window.innerWidth > 1400 ? 0 : 1;
      const lastSlide = Math.floor(Number($services.data("length")) - showSlide + prop);
      setTimeout(() => $services.slick("slickGoTo", lastSlide), 100);
    }

    $services.slick({
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: showSlide,
      arrows: false,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        { breakpoint: 1100, settings: { slidesToShow: 3 } },
        { breakpoint: 800, settings: { slidesToShow: 2 } },
        { breakpoint: 600, settings: { slidesToShow: 1 } },
      ],
    });

    const sliderArt = $("#art_services");
    $services.on("afterChange", (_event: unknown, slick: { currentSlide: number }) => {
      const prop = window.innerWidth > 1400 ? 1 : 0;
      const edge = Math.floor(Number($services.data("length")) - showSlide - prop);
      if (slick.currentSlide <= edge) {
        sliderArt.addClass("faded");
      } else {
        sliderArt.removeClass("faded");
      }
    });

    $("#prev_services").on("click", () => $services.slick("slickPrev"));
    $("#next_services").on("click", () => $services.slick("slickNext"));
  }

  const $testi = $("#testimonial_carousel");
  if ($testi.length) {
    // Features page uses testi-card (agency theme cards, variableWidth),
    // homepage uses testimonial-card (quote style, fixed slidesToShow).
    const isAgencyCards = $testi.find(".testi-card").length > 0;
    const showSlide = isAgencyCards ? 4 : 2;

    if (window.innerWidth > 1279) {
      const len = Number($testi.data("length")) || 6;
      const limit = window.innerWidth > 1400 ? 0 : 1;
      const lastSlide = Math.floor(len - showSlide + limit);
      setTimeout(() => $testi.slick("slickGoTo", lastSlide), 100);
    }

    $testi.slick({
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: showSlide,
      arrows: false,
      slidesToScroll: 1,
      variableWidth: isAgencyCards,
      responsive: [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        { breakpoint: 600, settings: { slidesToShow: 1 } },
      ],
    });

    const sliderArt = $("#art_testimonials");
    $testi.on("afterChange", (_event: unknown, slick: { currentSlide: number }) => {
      const edge = Math.floor(Number($testi.data("length")) - showSlide - 1);
      if (slick.currentSlide <= edge) {
        sliderArt.addClass("faded");
      } else {
        sliderArt.removeClass("faded");
      }
    });

    $("#prev_testi").off("click").on("click", () => $testi.slick("slickPrev"));
    $("#next_testi").off("click").on("click", () => $testi.slick("slickNext"));
  }


  // Case Studies — tab switching
  $("#case_categories").on("click", "li.filter", function () {
    const $this = $(this);
    if ($this.hasClass("active")) return;
    $("#case_categories li.filter").removeClass("active");
    $this.addClass("active");

    const group = $this.data("group");
    $("#case_gallery .tab-pane").removeClass("active");
    $(`#tab-${group}`).addClass("active");
  });

  const $team = $("#about_team_carousel");
  if ($team.length) {
    $team.slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      variableWidth: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 5000,
      responsive: [
        { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    });
  }

  const $photo = $("#about_photo_carousel");
  if ($photo.length) {
    $photo.slick({
      dots: false,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
        { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    });

    $("#team_prev").off("click").on("click", () => $photo.slick("slickPrev"));
    $("#team_next").off("click").on("click", () => $photo.slick("slickNext"));
  }
}

export function initAccordions() {
  const $ = window.$;
  if (!$) return;
  $(".collapsible-header").off("click").on("click", function () {
    const $header = $(this);
    const $body = $header.next(".collapsible-body");
    const $item = $header.closest("li");
    const $parent = $header.closest(".collapsible");
    const allowMultiple = $parent.data("collapsible") === "expandable";

    if (!allowMultiple) {
      const $siblings = $item.siblings("li");
      $siblings.find(".collapsible-body").slideUp(200);
      $siblings.removeClass("active");
    }

    $body.slideToggle(200);
    $item.toggleClass("active");
  });

  $(".collapsible").each(function () {
    const $firstHeader = $(this).find(".collapsible-header").first();
    const $firstItem = $firstHeader.closest("li");
    if ($firstItem.length) {
      $firstItem.addClass("active");
      $firstItem.find(".collapsible-body").css("display", "block");
    }
  });
}
