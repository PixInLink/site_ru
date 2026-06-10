<template>
  <v-card class="facility-card">
    <figure>
      <img
        :src="img"
        alt="img"
      >
    </figure>
    <div class="text">
      <h6>{{ title }}</h6>
      <p>{{ desc }}</p>
    </div>
    <v-btn
      color="secondary"
      class="button"
    >
      {{ button }}
    </v-btn>
  </v-card>
</template>

<style lang="scss" scoped>
@import './facility-card.scss';
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
