<script setup lang="ts">
import { t } from "../i18n";

defineProps<{
  pageTitle: string;
}>();
</script>

<template>
  <div class="page-banner">
    <div class="container">
      <h1>{{ pageTitle }}</h1>
      <nav class="breadcrumb">
        <RouterLink to="/">{{ t.pageBanner.home }}</RouterLink>
        <span class="separator">/</span>
        <span>{{ pageTitle }}</span>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.page-banner {
  background: #e3f2fd;
  color: #000000;
  padding: 32px 0;
  padding-top: calc(32px + 64px);
}

.page-banner h1 {
  font-size: 28px;
  margin: 0 0 8px;
}

.breadcrumb {
  font-size: 14px;
}

.breadcrumb a {
  color: rgba(0, 0, 0, 0.65);
  text-decoration: none;
}

.breadcrumb a:hover {
  color: #000000;
}

.separator {
  margin: 0 8px;
  opacity: 0.4;
}
</style>
