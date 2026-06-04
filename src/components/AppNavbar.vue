<script setup lang="ts">
import { ref, onMounted } from "vue";
import { siteConfig } from "../site.config";
import { t } from "../i18n";

const isRu = siteConfig.locale === "ru";
const menuOpen = ref(false);
const isDark = ref(false);

function toggleTheme() {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute("data-theme", isDark.value ? "dark" : "");
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}

onMounted(() => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    isDark.value = true;
    document.documentElement.setAttribute("data-theme", "dark");
  }
});
</script>

<template>
  <header class="app-bar" id="header">
    <div class="container">
      <div class="header-content">
        <nav class="nav-menu">
          <div class="logo">
            <RouterLink to="/">
              <span class="logo-main landscape large">
                <img src="/images/logo-40x40.png" alt="" width="40" height="40">
                {{ siteConfig.name }}
              </span>
            </RouterLink>
          </div>
          <div class="scrollactive-nav show-lg-up multi-menu scrollnav">
            <ul class="main-menu">
              <li><RouterLink class="btn btn-flat anchor-link waves-effect" to="/">{{ t.nav.home }}</RouterLink></li>
              <li><RouterLink class="btn btn-flat anchor-link waves-effect" to="/features/">{{ t.nav.features }}</RouterLink></li>
              <li><RouterLink class="btn btn-flat anchor-link waves-effect" to="/pricing/">{{ t.nav.pricing }}</RouterLink></li>
              <li><RouterLink class="btn btn-flat anchor-link waves-effect" to="/use-cases/">{{ t.nav.useCases }}</RouterLink></li>
              <li><RouterLink class="btn btn-flat anchor-link waves-effect" to="/integrations/">{{ t.nav.integrations }}</RouterLink></li>
              <li><RouterLink class="btn btn-flat anchor-link waves-effect" to="/docs/">{{ t.nav.docs }}</RouterLink></li>
              <li><RouterLink class="btn btn-flat anchor-link waves-effect" to="/blog/">{{ t.nav.blog }}</RouterLink></li>
              <li><RouterLink class="btn btn-flat anchor-link waves-effect" to="/about/">{{ t.nav.about }}</RouterLink></li>
              <li><RouterLink class="btn btn-flat anchor-link waves-effect" to="/contact/">{{ t.nav.contact }}</RouterLink></li>
            </ul>
          </div>
          <button class="btn-icon waves-effect hamburger hamburger--spin show-md-down mobile-menu" type="button" :class="{ 'is-active': menuOpen }" @click="menuOpen = !menuOpen">
            <span class="hamburger-box"><span class="bar hamburger-inner"></span></span>
          </button>
        </nav>
        <nav class="user-menu">
          <button class="btn btn-icon waves-effect" type="button" :aria-label="isDark ? t.nav.themeLight : t.nav.themeDark" @click="toggleTheme">
            <i class="material-icons">{{ isDark ? 'light_mode' : 'dark_mode' }}</i>
          </button>
          <span class="spacer vertical-divider show-md-up"></span>
          <a v-if="isRu" class="btn btn-flat waves-effect active">RU</a>
          <a v-else :href="siteConfig.ruDomain" class="btn btn-flat waves-effect">RU</a>
          <span class="lang-sep">|</span>
          <a v-if="!isRu" class="btn btn-flat waves-effect active">EN</a>
          <a v-else :href="siteConfig.enDomain" class="btn btn-flat waves-effect">EN</a>
        </nav>
      </div>
    </div>
    <div v-if="menuOpen" class="mobile-nav-overlay" @click="menuOpen = false">
      <div class="mobile-nav-panel show-md-down" @click.stop>
        <ul class="collapsible expandable">
          <li class="collection-item"><RouterLink class="waves-effect menu-list" to="/" @click="menuOpen = false">{{ t.nav.home }}</RouterLink></li>
          <li class="collection-item"><RouterLink class="waves-effect menu-list" to="/features/" @click="menuOpen = false">{{ t.nav.features }}</RouterLink></li>
          <li class="collection-item"><RouterLink class="waves-effect menu-list" to="/pricing/" @click="menuOpen = false">{{ t.nav.pricing }}</RouterLink></li>
          <li class="collection-item"><RouterLink class="waves-effect menu-list" to="/use-cases/" @click="menuOpen = false">{{ t.nav.useCases }}</RouterLink></li>
          <li class="collection-item"><RouterLink class="waves-effect menu-list" to="/integrations/" @click="menuOpen = false">{{ t.nav.integrations }}</RouterLink></li>
          <li class="collection-item"><RouterLink class="waves-effect menu-list" to="/docs/" @click="menuOpen = false">{{ t.nav.docs }}</RouterLink></li>
          <li class="collection-item"><RouterLink class="waves-effect menu-list" to="/blog/" @click="menuOpen = false">{{ t.nav.blog }}</RouterLink></li>
          <li class="collection-item"><RouterLink class="waves-effect menu-list" to="/about/" @click="menuOpen = false">{{ t.nav.about }}</RouterLink></li>
          <li class="collection-item"><RouterLink class="waves-effect menu-list" to="/contact/" @click="menuOpen = false">{{ t.nav.contact }}</RouterLink></li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-bar {
  background: #fff;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 1000;
}
.mobile-nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 2000;
}
.mobile-nav-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background: #fff;
  overflow-y: auto;
  padding: 16px 0;
}
.mobile-nav-panel .collection-item {
  display: block;
  padding: 0;
}
.mobile-nav-panel .menu-list {
  display: block;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
}
.mobile-nav-panel .menu-list:hover {
  background: #f5f5f5;
}
.lang-sep {
  color: #999;
  font-size: 14px;
}
</style>
