<template>
  <div class="testimonial">
    <div class="deco" />
    <div class="text">
      <p class="content">
        <span>
          {{ text }}
        </span>
      </p>
      <h6 class="title">
        {{ name }}
      </h6>
      <p class="caption-title">
        {{ title }}
      </p>
    </div>
    <figure>
      <img :src="img" alt="testimonial">
    </figure>
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
    img: {
      type: String,
      default: '',
    },
  },
};
</script>
