<template>
  <div
    class="book"
    :class="[expand ? 'expanded' : 'collapsed']"
    :style="{ border: expand ? '2px solid ' + color : 'none' }"
  >
    <figure>
      <img :src="img" :alt="title">
      <figcaption :style="'background:' + color">
        <span>
          {{ title }}
        </span>
      </figcaption>
    </figure>
    <div class="desc">
      <div class="text">
        <h6 class="use-text-subtitle2 pb-2 text-truncate">
          {{ title }}
        </h6>
        <p class="use-text-paragraph">
          {{ desc }}
        </p>
      </div>
      <div>
        <div class="property">
          <div v-if="rating > 0" class="rating">
            <v-icon
              v-for="index in rating"
              :key="index"
              class="star-icon"
            >
              mdi-star
            </v-icon>
            <v-icon
              v-for="index in 5 - rating"
              :key="'inactive' + index"
              class="star-icon-disable"
            >
              mdi-star
            </v-icon>
          </div>
          <strong v-if="price > 0">${{ price }}</strong>
        </div>
        <v-btn :href="href" block class="button" outlined color="primary">
          {{ $t('common.btn_detail') }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './book-style.scss';
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
    rating: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    href: {
      type: String,
      default: '#',
    },
    color: {
      type: String,
      default: '#6DB4A7',
    },
    expand: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
