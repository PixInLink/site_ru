<script setup lang="ts">
import { computed, onMounted, watch, nextTick } from "vue";
import { useSeo } from "../composables/useSeo";
import { findPageBySlug } from "../content/pages";
import PageBanner from "../components/PageBanner.vue";
import { t } from "../i18n";
import { initAccordions } from "../main";

const props = defineProps<{
  slug: string;
}>();

const page = computed(() => findPageBySlug(props.slug));

const isRawHtml = computed(() => {
  const h = page.value?.html?.trim() ?? "";
  return h.startsWith("<section") || h.startsWith("<div class=") || h.length > 5000;
});

useSeo(() => {
  const currentPage = page.value;
  if (!currentPage) {
    return {
      title: t.pageView.notFound,
      description: "",
      path: `/${props.slug}/`,
      type: "website",
    };
  }
  const canonicalPath = currentPage.isIndex ? "/" : `/${currentPage.frontmatter.slug}/`;
  return {
    title: currentPage.frontmatter.title,
    description: currentPage.frontmatter.description,
    path: canonicalPath,
    type: "website",
  };
});

onMounted(() => {
  nextTick(() => nextTick(() => initAccordions()));
});

watch(page, (newPage) => {
  if (newPage?.rawHtml || (newPage?.html?.trim() ?? "").startsWith("<section") || (newPage?.html?.trim() ?? "").startsWith("<div class=") || (newPage?.html?.length ?? 0) > 5000) {
    nextTick(() => nextTick(() => initAccordions()));
  }
});
</script>

<template>
  <template v-if="page">
    <template v-if="page.rawHtml">
      <div v-html="page.rawHtml" />
    </template>
    <template v-else-if="isRawHtml">
      <div v-html="page.html" />
    </template>
    <template v-else>
      <PageBanner :pageTitle="page.frontmatter.title" />
      <main class="container-wrap container-pages">
        <div class="container">
        <article class="article">
          <div v-html="page.html"></div>
        </article>
        </div>
      </main>
    </template>
  </template>
  <template v-else>
    <PageBanner :pageTitle="t.pageView.notFound" />
    <main class="container-wrap container-pages">
      <div class="container">
      <p>{{ t.pageView.notFound }}</p>
      <RouterLink to="/">{{ t.pageView.backToHome }}</RouterLink>
      </div>
    </main>
  </template>
</template>
