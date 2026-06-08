<script setup lang="ts">
import { siteConfig } from "../site.config";
import { t } from "../i18n";
</script>

<template>
  <div class="footer-wrapper">
    <footer class="footer-sitemap">
    <div class="container mq-sm-down" data-class="fixed-width">
      <div class="row">
        <div class="col-md-4 col-sm-12 pa-lg-4 logo-area">
          <div class="logo">
            <span class="logo-main landscape large">
              <img src="/images/logo-230x48.svg" alt="PixInLink" width="230" height="48">
            </span>
          </div>
          <p class="body-2">{{ siteConfig.description }}</p>
          <p class="body-2 hidden-sm-down">&copy; {{ new Date().getFullYear() }} {{ siteConfig.name }}</p>
        </div>
        <div class="col-md-5 col-sm-12 pa-4 site-map-item">
          <ul class="show-sm-down collapsible">
            <li class="accordion-content">
              <div class="collapsible-header">
                <h6 class="title">{{ t.footer.pages }}</h6>
                <i class="material-icons right arrow">expand_more</i>
              </div>
              <div class="collapsible-body">
                <ul>
                  <li><RouterLink to="/">{{ t.footer.home }}</RouterLink></li>
                  <li><RouterLink to="/features/">{{ t.nav.features }}</RouterLink></li>
                  <li><RouterLink to="/pricing/">{{ t.footer.pricing }}</RouterLink></li>
                  <li><RouterLink to="/use-cases/">{{ t.nav.useCases }}</RouterLink></li>
                  <li><RouterLink to="/integrations/">{{ t.nav.integrations }}</RouterLink></li>
                </ul>
              </div>
            </li>
            <li class="accordion-content">
              <div class="collapsible-header">
                <h6 class="title">{{ t.footer.more }}</h6>
                <i class="material-icons right arrow">expand_more</i>
              </div>
              <div class="collapsible-body">
                <ul>
                  <li><RouterLink to="/blog/">{{ t.footer.blog }}</RouterLink></li>
                  <li><RouterLink to="/docs/">{{ t.footer.docs }}</RouterLink></li>
                  <li><RouterLink to="/about/">{{ t.footer.about }}</RouterLink></li>
                  <li><RouterLink to="/contact/">{{ t.footer.contact }}</RouterLink></li>
                  <li><a href="/rss.xml">{{ t.footer.rss }}</a></li>
                </ul>
              </div>
            </li>
          </ul>
          <div class="row show-md-up justify-content-start">
            <div class="col pa-4">
              <h6 class="title mb-4">{{ t.footer.pages }}</h6>
              <ul>
                <li><RouterLink to="/">{{ t.footer.home }}</RouterLink></li>
                <li><RouterLink to="/features/">{{ t.nav.features }}</RouterLink></li>
                <li><RouterLink to="/pricing/">{{ t.footer.pricing }}</RouterLink></li>
                <li><RouterLink to="/use-cases/">{{ t.nav.useCases }}</RouterLink></li>
                <li><RouterLink to="/integrations/">{{ t.nav.integrations }}</RouterLink></li>
              </ul>
            </div>
            <div class="col pa-4">
              <h6 class="title mb-4">{{ t.footer.more }}</h6>
              <ul>
                <li><RouterLink to="/blog/">{{ t.footer.blog }}</RouterLink></li>
                <li><RouterLink to="/docs/">{{ t.footer.docs }}</RouterLink></li>
                <li><RouterLink to="/about/">{{ t.footer.about }}</RouterLink></li>
                <li><RouterLink to="/contact/">{{ t.footer.contact }}</RouterLink></li>
                <li><a href="/rss.xml">{{ t.footer.rss }}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-sm-12 pa-4">
          <p class="body-2 mt-5 text-center hidden-md-up">&copy; {{ new Date().getFullYear() }} {{ siteConfig.name }}</p>
        </div>
      </div>
    </div>
  </footer>
    <div class="building-deco-footer">
      <img class="img-2d3d img-left" src="/themes/oiron/images/cloud/building_deco_footer_side_3d@2x.png" data-2d="/themes/oiron" data-3d="/themes/oiron/images/cloud/building_deco_footer_side_3d@2x.png" alt="Офисное здание" loading="lazy" />
      <img class="img-2d3d img-center" src="/themes/oiron/images/cloud/building_deco_footer_center_3d@2x.png" data-2d="/themes/oiron" data-3d="/themes/oiron/images/cloud/building_deco_footer_center_3d@2x.png" alt="Центральное здание" loading="lazy" />
      <img class="img-2d3d img-left" src="/themes/oiron/images/cloud/building_deco_footer_side_3d@2x.png" data-2d="/themes/oiron" data-3d="/themes/oiron/images/cloud/building_deco_footer_side_3d@2x.png" alt="Офисное здание" loading="lazy" />
    </div>
  </div>
</template>

<style scoped>
.logo-main.large img {
  max-width: 230px;
  max-height: 48px;
  width: 230px;
  height: 48px;
}
.footer-sitemap {
  position: relative;
  z-index: 1;
}
.footer-sitemap .title {
  color: var(--color-accent-light);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}
.footer-sitemap ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.footer-sitemap ul li {
  margin-bottom: 4px;
}
.footer-sitemap ul li a {
  color: rgba(255,255,255,0.75);
  font-size: 14px;
  text-decoration: none;
}
.footer-sitemap ul li a:hover {
  color: #fff;
}
.footer-sitemap .body-2 {
  color: rgba(255,255,255,0.65);
  font-size: 14px;
}
.footer-sitemap .logo-main {
  color: #fff;
}
.footer-sitemap .socmed .btn {
  background: rgba(255,255,255,0.1);
  margin-right: 4px;
}
.footer-sitemap .socmed .icon {
  color: var(--color-accent-light);
}
</style>
