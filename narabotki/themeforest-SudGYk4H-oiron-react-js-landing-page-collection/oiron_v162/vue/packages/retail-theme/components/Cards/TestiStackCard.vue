<template>
  <div class="testimonial">
    <v-card class="paper" :class="{ active: active }">
      <v-avatar class="avatar" width="80" height="80" min-width="80">
        <img :src="avatar" alt="avatar">
      </v-avatar>
      <h5 class="use-text-subtitle2">
        {{ name }}
      </h5>
      <p class="caption-name">
        {{ title }}
      </p>
      <p class="text">
        {{ text }}
      </p>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-stack-card.scss';
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
    avatar: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
