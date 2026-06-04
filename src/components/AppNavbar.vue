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

function closeMenu() {
  menuOpen.value = false;
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
  <div>
    <div class="sidenav mobile-nav" :class="{ 'show-sidenav': menuOpen }" id="slide_menu">
      <div class="side-multilv">
        <div class="collection side-multilv">
          <ul class="collapsible expandable">
            <li class="collection-item"><a class="waves-effect menu-list" href="/" @click.prevent="closeMenu(); $router.push('/')">{{ t.nav.home }}</a></li>
            <li class="collection-item"><a class="waves-effect menu-list" href="/features/" @click.prevent="closeMenu(); $router.push('/features/')">{{ t.nav.features }}</a></li>
            <li class="collection-item"><a class="waves-effect menu-list" href="/pricing/" @click.prevent="closeMenu(); $router.push('/pricing/')">{{ t.nav.pricing }}</a></li>
            <li class="collection-item"><a class="waves-effect menu-list" href="/use-cases/" @click.prevent="closeMenu(); $router.push('/use-cases/')">{{ t.nav.useCases }}</a></li>
            <li class="collection-item"><a class="waves-effect menu-list" href="/integrations/" @click.prevent="closeMenu(); $router.push('/integrations/')">{{ t.nav.integrations }}</a></li>
            <li class="collection-item"><a class="waves-effect menu-list" href="/docs/" @click.prevent="closeMenu(); $router.push('/docs/')">{{ t.nav.docs }}</a></li>
            <li class="collection-item"><a class="waves-effect menu-list" href="/blog/" @click.prevent="closeMenu(); $router.push('/blog/')">{{ t.nav.blog }}</a></li>
            <li class="collection-item"><a class="waves-effect menu-list" href="/about/" @click.prevent="closeMenu(); $router.push('/about/')">{{ t.nav.about }}</a></li>
            <li class="collection-item"><a class="waves-effect menu-list" href="/contact/" @click.prevent="closeMenu(); $router.push('/contact/')">{{ t.nav.contact }}</a></li>
          </ul>
        </div>
        <div class="dropdown-divider"></div>
        <div class="collection">
          <ul>
            <li class="collection-item">
              <a v-if="!isRu" class="waves-effect menu-list" :href="siteConfig.ruDomain">RU</a>
              <a v-if="isRu" class="waves-effect menu-list" :href="siteConfig.enDomain">EN</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="menuOpen" class="sidenav-overlay" @click="closeMenu()"></div>

    <header class="app-bar header" id="header">
      <div class="container">
        <div class="header-content">
          <nav class="nav-menu">
            <button class="btn-icon waves-effect hamburger hamburger--spin show-md-down" type="button" :class="{ 'is-active': menuOpen }" @click="menuOpen = !menuOpen">
              <span class="hamburger-box"><span class="bar hamburger-inner"></span></span>
            </button>
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
    </header>
  </div>
</template>

<style scoped>
.show-sidenav {
  transform: translateX(0) !important;
}
.sidenav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 997;
}
.sidenav.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 999;
  transform: translateX(-105%);
  transition: transform 0.3s ease;
  overflow-y: auto;
}
.lang-sep {
  color: #999;
  font-size: 14px;
}
</style>
