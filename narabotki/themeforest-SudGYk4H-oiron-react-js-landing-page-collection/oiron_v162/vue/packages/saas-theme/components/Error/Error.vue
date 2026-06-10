<template>
  <div class="error-wrap violeta">
    <v-container class="max-md">
      <v-row align="center">
        <v-col cols="12" md="5">
          <div class="flex">
            <div class="illustration">
              <img
                :src="imgAPI.saasInner[9]"
                :data-2d="imgAPI.saasInner[8]"
                :data-3d="imgAPI.saasInner[9]"
                class="img-2d3d"
                alt="error"
              >
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <div class="text">
            <h3 class="use-text-primary font-weight-bold">
              {{ errCode }}
            </h3>
            <h4 class="use-text-title2">
              {{ text }}
            </h4>
            <p>
              {{ $t('common.404_subtitle') }}
            </p>
            <v-btn
              :href="link.saas.home"
              variant="outlined"
              color="primary"
              size="large"
              class="button"
            >
              {{ $t('common.back') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './error-style.scss';
</style>

<script>
import link from '@/assets/text/link';
import imgAPI from '@/assets/images/imgAPI';

export default {
  props: {
    errCode: {
      type: Number,
      default: 404,
    },
    text: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      link,
      imgAPI,
    };
  },
};
</script>
