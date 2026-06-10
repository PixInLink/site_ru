<template>
  <div class="promo-card">
    <v-card>
      <figure>
        <v-img
          :src="img"
          height="205px"
          alt="promotion"
        />
      </figure>
      <div class="property">
        <v-card-title class="promo-title">
          {{ title }}
        </v-card-title>
        <v-card-subtitle class="date-line">
          {{ periode }}
        </v-card-subtitle>
      </div>
    </v-card>
  </div>
</template>

<style scoped lang="scss">
@import 'promo-card.scss';
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
    periode: {
      type: String,
      required: true,
    },
  },
};
</script>
