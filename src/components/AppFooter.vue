<script setup lang="ts">
import { siteConfig } from "../site.config";
import { t } from "../i18n";
</script>

<template>
  <footer class="footer-sitemap">
    <div class="container mq-sm-down" data-class="fixed-width">
      <div class="row">
        <div class="col-md-3 col-sm-12 pa-lg-4 logo-area">
          <div class="logo">
            <span class="logo-main landscape large">
              <img src="/images/logo-230x48.svg" alt="PixInLink" width="230" height="48">
            </span>
          </div>
          <p class="body-2">{{ siteConfig.description }}</p>
          <p class="body-2 hidden-sm-down">&copy; {{ new Date().getFullYear() }} {{ siteConfig.name }}</p>
        </div>
        <div class="col-md-2 col-sm-12 pa-4 site-map-item">
          <h6 class="title mb-4">{{ t.footer.pages }}</h6>
          <ul>
            <li><RouterLink to="/">{{ t.footer.home }}</RouterLink></li>
            <li><RouterLink to="/features/">{{ t.nav.features }}</RouterLink></li>
            <li><RouterLink to="/pricing/">{{ t.footer.pricing }}</RouterLink></li>
            <li><RouterLink to="/use-cases/">{{ t.nav.useCases }}</RouterLink></li>
            <li><RouterLink to="/integrations/">{{ t.nav.integrations }}</RouterLink></li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-12 pa-4 site-map-item">
          <h6 class="title mb-4">{{ t.footer.more }}</h6>
          <ul>
            <li><RouterLink to="/blog/">{{ t.footer.blog }}</RouterLink></li>
            <li><RouterLink to="/docs/">{{ t.footer.docs }}</RouterLink></li>
            <li><RouterLink to="/about/">{{ t.footer.about }}</RouterLink></li>
            <li><RouterLink to="/contact/">{{ t.footer.contact }}</RouterLink></li>
            <li><a href="/rss.xml">{{ t.footer.rss }}</a></li>
          </ul>
        </div>
        <div class="col-md-2 col-sm-12 pa-4 site-map-item">
          <h6 class="title mb-4">{{ t.footer.legal }}</h6>
          <ul>
            <li><RouterLink to="/legal/privacy/">{{ t.footer.privacy }}</RouterLink></li>
            <li><RouterLink to="/legal/terms/">{{ t.footer.terms }}</RouterLink></li>
            <li><RouterLink to="/legal/refund/">Возврат и отмена</RouterLink></li>
          </ul>
        </div>
        <div class="col-md-3 col-sm-12 pa-4">
          <div class="socmed">
            <a class="btn btn-icon waves-effect"><span class="ion-social-facebook icon"></span></a>
            <a class="btn btn-icon waves-effect"><span class="ion-social-twitter icon"></span></a>
            <a class="btn btn-icon waves-effect"><span class="ion-social-instagram icon"></span></a>
            <a class="btn btn-icon waves-effect"><span class="ion-social-linkedin icon"></span></a>
          </div>
          <div class="select-lang select-outlined">
            <select class="select" id="lang_select" onchange="window.location.href = this.value">
              <option value="https://pixinlink.ru/" selected>Русский</option>
              <option value="https://pixinlink.com/">&lrm;English</option>
            </select>
          </div>
          <p class="body-2 mt-5 text-center hidden-md-up">&copy; {{ new Date().getFullYear() }} {{ siteConfig.name }}</p>
        </div>
      </div>
      <div class="row mt-4 pt-3" style="border-top:1px solid rgba(0,0,0,0.08)">
        <div class="col-12">
          <div class="payment-methods">
            <span class="payment-label">Принимаем к оплате:</span>
            <span class="payment-badge" title="МИР">МИР</span>
            <span class="payment-badge" title="Visa">Visa</span>
            <span class="payment-badge" title="SberPay">SberPay</span>
            <a href="https://tbank.ru" target="_blank" rel="noopener" class="payment-badge payment-link" title="T-Pay — платёжный партнёр">T-Pay</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
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
  color: rgba(0, 0, 0, 0.75);
  font-size: 14px;
  text-decoration: none;
}
.footer-sitemap ul li a:hover {
  color: #000;
}
.footer-sitemap .body-2 {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}
.footer-sitemap .logo-main {
  color: #fff;
}
.footer-sitemap .socmed .btn {
  background: rgba(0, 0, 0, 0.05);
  margin-right: 4px;
}
.footer-sitemap .socmed .icon {
  color: var(--color-accent-light);
}
.footer-sitemap .select-lang {
  margin-top: 16px;
}
.footer-sitemap .select-lang select {
  display: block;
  width: auto;
  min-width: 140px;
  background: rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 8px 32px 8px 12px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.75);
  cursor: pointer;
  appearance: auto;
  -webkit-appearance: auto;
  -moz-appearance: auto;
}

.payment-methods {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.payment-label {
  color: rgba(0, 0, 0, 0.55);
  font-size: 12px;
  margin-right: 4px;
}

.payment-badge {
  align-items: center;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.55);
  display: inline-flex;
  font-size: 11px;
  font-weight: 600;
  height: 24px;
  justify-content: center;
  letter-spacing: 0.5px;
  min-width: 48px;
  padding: 0 8px;
  text-transform: uppercase;
}

.payment-link {
  color: rgba(0, 0, 0, 0.55);
  text-decoration: none;
}

.payment-link:hover {
  background: rgba(0, 0, 0, 0.08);
  color: rgba(0, 0, 0, 0.75);
}
</style>
