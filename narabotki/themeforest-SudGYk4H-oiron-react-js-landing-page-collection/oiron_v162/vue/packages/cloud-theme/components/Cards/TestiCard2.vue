<template>
  <div class="testimonial">
    <div class="icon">
      <v-icon>mdi-format-quote-close</v-icon>
    </div>
    <p class="text">
      {{ text }}
    </p>
    <h6 class="use-text-subtitle2 title">
      {{ name }}
    </h6>
    <p class="caption-title">
      {{ title }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-card2.scss';
</style>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
