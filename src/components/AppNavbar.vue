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
  <header class="app-navbar">
    <div class="container">
      <nav class="navbar navbar-expand-md">
        <RouterLink class="navbar-brand d-flex align-items-center gap-2" to="/">
          <img src="/images/logo-40x40.png" alt="" width="32" height="32" style="border-radius:4px">
          {{ siteConfig.name }}
        </RouterLink>

        <button class="navbar-toggler" type="button" :aria-expanded="menuOpen" @click="menuOpen = !menuOpen">
          <span class="navbar-toggler-icon" />
        </button>

        <div class="navbar-collapse" :class="{ show: menuOpen }">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><RouterLink class="nav-link" to="/">{{ t.nav.home }}</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" to="/features/">{{ t.nav.features }}</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" to="/pricing/">{{ t.nav.pricing }}</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" to="/use-cases/">{{ t.nav.useCases }}</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" to="/integrations/">{{ t.nav.integrations }}</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" to="/docs/">{{ t.nav.docs }}</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" to="/blog/">{{ t.nav.blog }}</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" to="/about/">{{ t.nav.about }}</RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" to="/contact/">{{ t.nav.contact }}</RouterLink></li>
          </ul>
          <button class="theme-toggle" type="button" :aria-label="isDark ? t.nav.themeLight : t.nav.themeDark" @click="toggleTheme">
            {{ isDark ? '☀' : '☾' }}
          </button>

          <div class="lang-switch-group">
            <a v-if="isRu" class="lang-btn active">RU</a>
            <a v-else :href="siteConfig.ruDomain" class="lang-btn">RU</a>
            <a v-if="!isRu" class="lang-btn active">EN</a>
            <a v-else :href="siteConfig.enDomain" class="lang-btn">EN</a>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-navbar { background: var(--color-surface); border-bottom: 1px solid var(--color-border); position: sticky; top: 0; z-index: 1000; }
.navbar { padding: 12px 0; }
.navbar-brand { color: var(--color-text); font-size: 20px; font-weight: 700; text-decoration: none; }
.theme-toggle { background: none; border: 1px solid var(--color-border); border-radius: 6px; color: var(--color-text); cursor: pointer; font-size: 16px; margin-left: 8px; padding: 4px 10px; }
.theme-toggle:hover { background: var(--color-tag-bg); }
.lang-switch-group { display: inline-flex; border: 1px solid var(--color-border); border-radius: 6px; margin-left: 6px; overflow: hidden; }
.lang-btn { color: var(--color-text-muted); cursor: pointer; font-size: 12px; font-weight: 600; padding: 4px 10px; text-decoration: none; }
.lang-btn:hover { background: var(--color-tag-bg); color: var(--color-accent); }
.lang-btn.active { background: var(--color-accent); color: #fff; }

@media (max-width: 767px) {
  .navbar-collapse { display: none; }
  .navbar-collapse.show { display: block; }
}
</style>
