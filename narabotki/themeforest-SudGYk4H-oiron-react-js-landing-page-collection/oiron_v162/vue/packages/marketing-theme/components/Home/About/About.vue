<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row>
        <v-col cols="12" md="6" class="pa-sm-6">
          <div class="puzzle">
            <div class="deco deco-1" />
            <div class="deco deco-2" />
            <figure class="img big">
              <img :src="imgAPI.marketing[20]" alt="gallery">
            </figure>
            <figure class="img medium">
              <img :src="imgAPI.marketing[19]" alt="gallery">
            </figure>
            <figure class="img small">
              <img :src="imgAPI.marketing[18]" alt="gallery">
            </figure>
            <div class="deco deco-3" />
            <div class="deco deco-4" />
            <div class="deco deco-5" />
          </div>
        </v-col>
        <v-col cols="12" md="5" class="px-sm-0">
          <h4 class="title-default use-text-subtitle">
            {{ $t('marketing.about_subtitle') }}
          </h4>
          <p>
            Vestibulum sit amet tortor libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper ultrices. Aenean facilisis vitae purus facilisis semper.
          </p>
          <counter />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';
import Counter from '../Counter';

export default {
  components: {
    Counter,
  },
  data() {
    return {
      imgAPI,
    };
  },
};
</script>
