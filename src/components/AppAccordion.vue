<script setup lang="ts">
import { provide, reactive } from "vue";

const state = reactive({
  count: 0,
  active: 0,
});

provide("accordion", state);
</script>

<template>
  <div class="app-accordion">
    <slot />
  </div>
</template>
