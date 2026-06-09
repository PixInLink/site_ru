<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
import BackToTop from "./components/BackToTop.vue";
import CookieNotice from "./components/CookieNotice.vue";
import { initSliders } from "./main";

const route = useRoute();

// Re-init sliders when navigating back to home after SPA nav
watch(
  () => route.path,
  (to, from) => {
    if (to === "/" && from !== "/") {
      setTimeout(initSliders, 100);
    }
  }
);

onMounted(() => {
  const preloader = document.getElementById("preloader");
  if (preloader) preloader.style.display = "none";
});
</script>

<template>
  <div class="m-application theme--light transition-page" id="app-inner">
    <div class="loading"></div>
    <div class="m-content cloud cloud-var" id="main-wrap">
      <div class="main-wrap">
        <AppNavbar />
        <RouterView />
        <div class="footer-counter extend">
          <span class="round"></span>
          <div>
            <div class="counter-wrap">
              <div class="container max-md">
                <h3 class="use-text-title">12 изображений без вотермарка · за 10-30 сек через URL API</h3>
              </div>
            </div>
            <div class="action">
              <h4 class="use-text-title2">Готовы попробовать?</h4>
              <a class="btn btn-large secondary" href="/pricing/">Начать бесплатно</a>
            </div>
          </div>
          <div>
            <AppFooter />
          </div>
          <div class="building-deco-footer">
            <img class="img-left" src="/themes/oiron/images/cloud/building_deco_footer_side_3d@2x.png" alt="building">
            <img class="img-center" src="/themes/oiron/images/cloud/building_deco_footer_center_3d@2x.png" alt="building">
            <img class="img-right" src="/themes/oiron/images/cloud/building_deco_footer_side_3d@2x.png" alt="building">
          </div>
        </div>
        <BackToTop />
        <CookieNotice />
      </div>
    </div>
  </div>
</template>
