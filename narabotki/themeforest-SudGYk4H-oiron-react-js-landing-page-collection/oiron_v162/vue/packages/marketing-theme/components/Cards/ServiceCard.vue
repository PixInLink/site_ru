<template>
  <v-card class="service-card">
    <figure>
      <img
        :src="img"
        alt="img"
      >
    </figure>
    <div class="content">
      <h6>{{ title }}</h6>
      <p>{{ desc }}</p>
      <v-btn
        :elevation="0"
        variant="outlined"
        block
        color="primary"
        class="button"
      >
        {{ button }}
      </v-btn>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './service-card.scss';
</style>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    button: {
      type: String,
      required: true,
    },
  },
};
</script>
