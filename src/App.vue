<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
import BackToTop from "./components/BackToTop.vue";
import CookieNotice from "./components/CookieNotice.vue";
import { initSliders } from "./main";

const route = useRoute();

// Re-init sliders after SPA navigation
watch(
  () => route.path,
  () => {
    setTimeout(initSliders, 100);
  }
);

onMounted(() => {
  const loadingEl = document.querySelector<HTMLElement>(".loading");
  if (loadingEl) {
    loadingEl.style.setProperty("display", "none", "important");
  }
  const preloaderEl = document.getElementById("preloader");
  if (preloaderEl) {
    preloaderEl.style.setProperty("display", "none", "important");
  }
});
</script>

<template>
  <div class="m-application theme--light transition-page" id="app-inner">
    <div class="m-content cloud cloud-var" id="main-wrap">
      <div class="main-wrap">
        <AppNavbar />
        <RouterView />
        <div class="footer-counter extend">
          <span class="round"></span>
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
