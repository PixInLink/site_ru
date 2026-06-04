<script setup lang="ts">
import { onMounted } from "vue";
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";
import BackToTop from "./components/BackToTop.vue";

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
                <h3 class="use-text-title">12&nbsp;бесплатно&nbsp;·&nbsp;10-30&nbsp;сек&nbsp;·&nbsp;50+&nbsp;стилей</h3>
                <p class="use-text-subtitle2">Изображений через URL API</p>
              </div>
            </div>
            <div class="action">
              <h4 class="use-text-title2">Готовы попробовать?</h4>
              <a class="btn btn-large secondary" href="/pricing/">Начать бесплатно</a>
            </div>
          </div>
          <div class="building-deco-footer">
            <img class="img-left" src="/themes/oiron/images/cloud/building_deco_footer_side_3d@2x.png" alt="building">
            <img class="img-center" src="/themes/oiron/images/cloud/building_deco_footer_center_3d@2x.png" alt="building">
            <img class="img-right" src="/themes/oiron/images/cloud/building_deco_footer_side_3d@2x.png" alt="building">
          </div>
        </div>
        <AppFooter />
        <BackToTop />
      </div>
    </div>
  </div>
</template>
