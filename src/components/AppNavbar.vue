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
const isHeaderFixed = ref(false);

const submenuSections = [
  {
    parentPath: "/features/",
    icon: "auto_awesome",
    label: t.nav.features,
    items: [
      { to: "/features/kak-rabotaet-ai/", label: t.nav.submenu.features.kakRabotaetAi },
      { to: "/features/webp-optimization/", label: t.nav.submenu.features.webpOptimization },
      { to: "/features/watermark/", label: t.nav.submenu.features.watermark },
      { to: "/features/url-api/", label: t.nav.submenu.features.urlApi },
    ],
  },
  {
    parentPath: "/use-cases/",
    icon: "work",
    label: t.nav.useCases,
    items: [
      { to: "/use-cases/blog-headers/", label: t.nav.submenu.useCases.blogHeaders },
      { to: "/use-cases/og-image/", label: t.nav.submenu.useCases.ogImage },
      { to: "/use-cases/social-media/", label: t.nav.submenu.useCases.socialMedia },
    ],
  },
  {
    parentPath: "/integrations/",
    icon: "extension",
    label: t.nav.integrations,
    items: [
      { to: "/integrations/wordpress/", label: t.nav.submenu.integrations.wordpress },
      { to: "/integrations/sdk-python/", label: t.nav.submenu.integrations.sdkPython },
    ],
  },
  {
    parentPath: "/docs/",
    icon: "menu_book",
    label: t.nav.docs,
    items: [
      { to: "/docs/getting-started/", label: t.nav.submenu.docs.gettingStarted },
    ],
  },
];

function isCurrent(path: string) {
  if (path === "/") return route.path === "/";
  return route.path.startsWith(path);
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
                    <li class="collection-item side-group-link"><a class="waves-effect text-truncate menu-list" href="/pricing/" @click.prevent="closeMenu(); $router.push('/pricing/')">{{ t.nav.pricing }}</a></li>
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
                      <li v-for="section in submenuSections" :key="section.parentPath" class="has-submenu" tabindex="0">
                        <RouterLink class="menu-list menu-list--parent" :to="section.parentPath">
                          <span class="menu-list__label"><i class="material-icons">{{ section.icon }}</i> {{ section.label }}</span>
                          <i class="material-icons arrow-icon">keyboard_arrow_right</i>
                        </RouterLink>
                        <ul class="submenu">
                          <li v-for="item in section.items" :key="item.to">
                            <RouterLink class="menu-list" :to="item.to">{{ item.label }}</RouterLink>
                          </li>
                        </ul>
                      </li>
                      <li class="waves-effect">
                        <RouterLink class="menu-list" to="/pricing/"><i class="material-icons">monetization_on</i> {{ t.nav.pricing }}</RouterLink>
                      </li>
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
                  <ul>
                    <li class="waves-effect"><a :href="siteConfig.ruDomain" class="menu-list">Русский</a></li>
                    <li class="waves-effect"><a :href="siteConfig.enDomain" class="menu-list">English</a></li>
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
.mega-menu-root .menu-list .material-icons {
  font-size: 18px;
  vertical-align: middle;
  margin-right: 8px;
  display: inline;
  line-height: 1;
  float: none;
  width: auto;
  height: auto;
}
.mega-menu-root .menu-list:hover {
  background: #f5f5f5;
  color: var(--color-accent);
}
.has-submenu {
  position: relative;
  display: block;
  width: 100%;
}
.menu-list--parent {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px !important;
}
.menu-list--parent .menu-list__label {
  display: flex;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.menu-list--parent .menu-list__label .material-icons {
  margin-right: 8px;
}
.menu-list--parent .arrow-icon {
  font-size: 18px;
  flex-shrink: 0;
  margin-right: 0 !important;
  transition: transform 0.2s ease;
}
.has-submenu:hover > .menu-list--parent .arrow-icon {
  transform: rotate(90deg);
}
.submenu {
  display: none;
  position: absolute;
  top: 0;
  left: 100%;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0,0,0,0.12);
  border-radius: 6px;
  min-width: 280px;
  list-style: none;
  margin: 0;
  padding: 4px 0;
  z-index: 1002;
}
.has-submenu:hover > .submenu,
.has-submenu:focus-within > .submenu {
  display: block;
}
.submenu .menu-list {
  display: block;
  width: 100%;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  font-size: 13px;
  color: #444;
  text-decoration: none;
  white-space: nowrap;
  box-sizing: border-box;
}
.submenu .menu-list:hover {
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
  min-width: 180px;
  padding: 0;
}
.setting-panel ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.setting-panel li {
  display: block;
}
.setting-panel .menu-list {
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
.setting-panel .menu-list:hover {
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
  min-width: 180px;
  padding: 0;
}
.header-content,
.nav-menu,
.scrollactive-nav,
.main-menu {
  overflow: visible;
}
</style>
