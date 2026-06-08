<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { siteConfig } from "../site.config";
import { t } from "../i18n";

const route = useRoute();
const isRu = siteConfig.locale === "ru";
const menuOpen = ref(false);
const serviceOpen = ref(false);
const settingsOpen = ref(false);
const isDark = ref(false);
const isHeaderFixed = ref(false);

function isCurrent(path: string) {
  if (path === "/") return route.path === "/";
  return route.path.startsWith(path);
}

function toggleTheme() {
  isDark.value = !isDark.value;
  document.documentElement.setAttribute("data-theme", isDark.value ? "dark" : "");
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}

function closeMenu() {
  menuOpen.value = false;
}

function toggleService() {
  serviceOpen.value = !serviceOpen.value;
}

function toggleSettings() {
  settingsOpen.value = !settingsOpen.value;
}

function onDocClick(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (!target.closest("#dropdown_config") && !target.closest(".dropdown-trigger")) {
    settingsOpen.value = false;
  }
  if (!target.closest("#sample-page") && !target.closest(".megamenu-trigger-click")) {
    serviceOpen.value = false;
  }
}

function onScroll() {
  isHeaderFixed.value = window.scrollY > 20;
}

onMounted(() => {
  document.addEventListener("click", onDocClick);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    isDark.value = true;
    document.documentElement.setAttribute("data-theme", "dark");
  }
});

onUnmounted(() => {
  document.removeEventListener("click", onDocClick);
  window.removeEventListener("scroll", onScroll);
});
</script>

<template>
  <div>
    <div class="sidenav mobile-nav" :class="{ 'show-sidenav': menuOpen }" id="slide_menu">
      <div class="side-multilv">
        <div class="collection side-multilv">
          <ul class="collapsible expandable">
            <li class="collection-item"><a class="waves-effect menu-list" href="/" @click.prevent="closeMenu(); $router.push('/')">{{ t.nav.home }}</a></li>
            <li class="collection-item"><a class="waves-effect menu-list" href="/about/" @click.prevent="closeMenu(); $router.push('/about/')">{{ t.nav.about }}</a></li>
            <li class="collection-item group-child has-child">
              <div class="collapsible-header" @click="toggleService">
                <a class="waves-effect text-truncate menu-list" href="#!">
                  {{ t.nav.serviceTitle }}
                  <i class="material-icons right">keyboard_arrow_down</i>
                </a>
              </div>
              <div class="collapsible-body" :style="{ display: serviceOpen ? 'block' : 'none' }">
                <div class="collection side-group">
                  <ul class="group-child">
                    <li class="collection-item side-group-link"><a class="waves-effect text-truncate menu-list" href="/features/" @click.prevent="closeMenu(); $router.push('/features/')">{{ t.nav.features }}</a></li>
                    <li class="collection-item side-group-link"><a class="waves-effect text-truncate menu-list" href="/use-cases/" @click.prevent="closeMenu(); $router.push('/use-cases/')">{{ t.nav.useCases }}</a></li>
                    <li class="collection-item side-group-link"><a class="waves-effect text-truncate menu-list" href="/integrations/" @click.prevent="closeMenu(); $router.push('/integrations/')">{{ t.nav.integrations }}</a></li>
                    <li class="collection-item side-group-link"><a class="waves-effect text-truncate menu-list" href="/docs/" @click.prevent="closeMenu(); $router.push('/docs/')">{{ t.nav.docs }}</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="collection-item"><a class="waves-effect menu-list" href="/blog/" @click.prevent="closeMenu(); $router.push('/blog/')">{{ t.nav.blog }}</a></li>
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

    <header class="app-bar header" id="header" :class="{ fixed: isHeaderFixed }">
      <div class="container">
        <div class="header-content">
          <nav class="nav-menu">
            <button class="btn-icon waves-effect hamburger hamburger--spin show-md-down" type="button" :class="{ 'is-active': menuOpen }" @click="menuOpen = !menuOpen">
              <span class="hamburger-box"><span class="bar hamburger-inner"></span></span>
            </button>
            <div class="logo">
              <RouterLink to="/">
                <span class="logo-main landscape large">
                  <img src="/images/logo-230x48.svg" alt="PixInLink" width="230" height="48">
                </span>
              </RouterLink>
            </div>
            <div class="scrollactive-nav show-lg-up multi-menu scrollnav">
              <ul class="main-menu">
                <li :class="{ current: isCurrent('/') }"><RouterLink class="btn btn-flat anchor-link waves-effect" to="/">{{ t.nav.home }}</RouterLink></li>
                <li :class="{ current: isCurrent('/about/') }"><RouterLink class="btn btn-flat anchor-link waves-effect" to="/about/">{{ t.nav.about }}</RouterLink></li>
                <li class="has-mega-menu" :class="{ current: isCurrent('/features/') || isCurrent('/use-cases/') || isCurrent('/integrations/') || isCurrent('/docs/') }">
                  <button class="btn btn-flat megamenu-trigger-click waves-effect" type="button" @click="serviceOpen = !serviceOpen">
                    {{ t.nav.serviceTitle }}
                    <i class="material-icons right icon">keyboard_arrow_down</i>
                  </button>
                  <div v-if="serviceOpen" class="mega-menu-root" id="sample-page" @click.stop>
                    <ul>
                      <li class="waves-effect"><RouterLink class="menu-list" to="/features/">{{ t.nav.features }}</RouterLink></li>
                      <li class="waves-effect"><RouterLink class="menu-list" to="/use-cases/">{{ t.nav.useCases }}</RouterLink></li>
                      <li class="waves-effect"><RouterLink class="menu-list" to="/integrations/">{{ t.nav.integrations }}</RouterLink></li>
                      <li class="waves-effect"><RouterLink class="menu-list" to="/docs/">{{ t.nav.docs }}</RouterLink></li>
                    </ul>
                  </div>
                  <div v-if="serviceOpen" class="mega-menu-backdrop" @click="serviceOpen = false"></div>
                </li>
                <li :class="{ current: isCurrent('/blog/') }"><RouterLink class="btn btn-flat anchor-link waves-effect" to="/blog/">{{ t.nav.blog }}</RouterLink></li>
                <li :class="{ current: isCurrent('/contact/') }"><RouterLink class="btn btn-flat anchor-link waves-effect" to="/contact/">{{ t.nav.contact }}</RouterLink></li>
              </ul>
            </div>
          </nav>
          <nav class="user-menu">
            <a class="btn btn-flat waves-effect show-sm-up" href="https://app.pixinlink.ru">{{ t.nav.signIn }}</a>
            <a class="btn waves-effect primary show-sm-up" href="https://app.pixinlink.ru/register">Регистрация</a>
            <span class="spacer vertical-divider show-lg-up"></span>
            <div class="menu-setting">
              <div class="setting">
                <button class="btn btn-icon waves-effect btn-small dropdown-trigger ma-1" type="button" @click.stop="toggleSettings">
                  <i class="icon material-icons" id="setting_icon">settings</i>
                </button>
                <div v-show="settingsOpen" class="setting-panel" id="dropdown_config">
                  <ul class="collection with-header">
                    <li class="collection-header">{{ isDark ? t.nav.themeDark : t.nav.themeLight }}</li>
                    <li class="collection-item no-hover pl-4">
                      <div class="flex-menu">
                        <div class="switch">
                          <label>
                            light
                            <input type="checkbox" :checked="isDark" @change="toggleTheme"><span class="lever"></span>
                            dark
                          </label>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="dropdown-divider"></div>
                  <ul class="collection with-header lang-menu" id="lang_menu">
                    <li class="collection-header">language</li>
                    <li class="collection-item lang-list waves-effect avatar">
                      <a :href="siteConfig.ruDomain">
                        <div class="flag circle"><i class="ar"></i></div>
                        <span class="content lang-opt text-truncate">Русский</span>
                      </a>
                    </li>
                    <li class="collection-item lang-list waves-effect avatar">
                      <a :href="siteConfig.enDomain">
                        <div class="flag circle"><i class="en"></i></div>
                        <span class="content lang-opt text-truncate">English</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
.logo-main.large img {
  max-width: 230px;
  max-height: 48px;
  width: 230px;
  height: 48px;
}
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
  width: 280px;
  z-index: 999;
  transform: translateX(-105%);
  transition: transform 0.3s ease;
  overflow-y: auto;
  background: #fff;
  padding: 16px 0;
}
.sidenav .collapsible-body {
  display: none;
  padding: 0;
}
.has-mega-menu {
  position: relative;
}
.mega-menu-backdrop {
  position: fixed;
  inset: 0;
  z-index: 999;
}
.mega-menu-root {
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 1000;
  overflow: visible;
  border-radius: 6px;
  min-width: 180px;
}
.mega-menu-root .menu-list {
  display: block;
  padding: 8px 16px;
  font-size: 14px;
  line-height: 1.3;
  color: #333;
  text-decoration: none;
  white-space: nowrap;
}
.mega-menu-root .menu-list:hover {
  background: #f5f5f5;
  color: var(--color-accent);
}
.mega-menu-root ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.mega-menu-root li {
  margin: 0;
  padding: 0;
  display: block;
  width: 100%;
  overflow: visible;
}
.mega-menu-root li.waves-effect {
  display: block;
  width: 100%;
}
.mega-menu-root .menu-list {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 16px;
  font-size: 14px;
  color: #333;
  text-decoration: none;
  white-space: nowrap;
  box-sizing: border-box;
}
.mega-menu-root .menu-list:hover {
  background: #f5f5f5;
  color: var(--color-accent);
}
.setting-panel {
  position: absolute;
  top: 100%;
  right: 0;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  z-index: 1000;
  border-radius: 4px;
  min-width: 200px;
  padding: 8px 0;
}
.header-content,
.nav-menu,
.scrollactive-nav,
.main-menu {
  overflow: visible;
}
</style>
