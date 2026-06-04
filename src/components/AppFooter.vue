<script setup lang="ts">
import { siteConfig } from "../site.config";
import { t } from "../i18n";
</script>

<template>
  <footer class="footer-sitemap">
    <div class="container">
      <div class="row">
        <div class="col-md-4 logo-area">
          <div class="logo">
            <span class="logo-main landscape large">
              <img src="/images/logo-40x40.png" alt="" width="40" height="40">
              {{ siteConfig.name }}
            </span>
          </div>
          <p class="body-2">{{ siteConfig.description }}</p>
          <div class="socmed">
            <a
              v-for="link in siteConfig.socialLinks"
              :key="link"
              :href="link"
              :title="link"
              target="_blank"
              rel="noopener noreferrer"
              class="social-link"
            >
              <span class="ion-link icon"></span>
              {{ link.replace('https://', '').split('/')[0] }}
            </a>
          </div>
        </div>
        <div class="col-md-4 site-map-item">
          <div class="row">
            <div class="col-6 pa-4">
              <h6 class="title mb-4">{{ t.footer.pages }}</h6>
              <ul>
                <li><RouterLink to="/">{{ t.footer.home }}</RouterLink></li>
                <li><RouterLink to="/pricing/">{{ t.footer.pricing }}</RouterLink></li>
                <li><RouterLink to="/features/">{{ t.nav.features }}</RouterLink></li>
                <li><RouterLink to="/blog/">{{ t.footer.blog }}</RouterLink></li>
                <li><RouterLink to="/about/">{{ t.footer.about }}</RouterLink></li>
              </ul>
            </div>
            <div class="col-6 pa-4">
              <h6 class="title mb-4">{{ t.footer.more }}</h6>
              <ul>
                <li><RouterLink to="/docs/">{{ t.footer.docs }}</RouterLink></li>
                <li><RouterLink to="/contact/">{{ t.footer.contact }}</RouterLink></li>
                <li><a href="/rss.xml">{{ t.footer.rss }}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-4 site-map-item">
          <h6 class="title mb-4">{{ t.footer.more }}</h6>
          <ul>
            <li><RouterLink to="/use-cases/">{{ t.nav.useCases }}</RouterLink></li>
            <li><RouterLink to="/integrations/">{{ t.nav.integrations }}</RouterLink></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="body-2 text-center">&copy; {{ new Date().getFullYear() }} {{ siteConfig.name }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-sitemap {
  background: var(--color-text);
  color: #fff;
}
.footer-sitemap .title {
  color: var(--color-accent-light);
}
.footer-sitemap ul li a {
  color: rgba(255,255,255,0.75);
}
.footer-sitemap ul li a:hover {
  color: #fff;
}
.footer-sitemap .body-2 {
  color: rgba(255,255,255,0.65);
}
.footer-sitemap .logo-main {
  color: #fff;
}
.footer-sitemap .socmed .btn {
  background: rgba(255,255,255,0.1);
}
.footer-sitemap .socmed .icon {
  color: var(--color-accent-light);
}
.social-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: rgba(255,255,255,0.75);
  font-size: 13px;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  background: rgba(255,255,255,0.1);
  transition: background 0.2s;
}
.social-link:hover {
  background: rgba(255,255,255,0.2);
  color: #fff;
}
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.1);
  margin-top: 32px;
  padding-top: 16px;
}
</style>
