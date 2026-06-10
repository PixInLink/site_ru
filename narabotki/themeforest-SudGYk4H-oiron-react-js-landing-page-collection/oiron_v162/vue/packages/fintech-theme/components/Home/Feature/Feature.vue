<template>
  <div class="more-feature">
    <v-container :class="{ fixed: isDesktop }">
      <div>
        <div class="item">
          <v-row class="spacing6">
            <v-col md="6" cols="12">
              <div class="text">
                <main-title
                  :text="$t('fintech.morefeature_title1')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <div :class="{ 'text-center': isMobile }">
                  <p
                    :class="{'text-center': isMobile}"
                    class="use-text-subtitle2"
                  >
                    {{ $t('fintech.morefeature_subtitle1') }}
                  </p>
                </div>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="py-0">
              <div
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="300"
              >
                <figure class="illustration">
                  <img
                    class="img-2d3d"
                    :src="imgAPI.fintech[11]"
                    :data-2d="imgAPI.fintech[10]"
                    :data-3d="imgAPI.fintech[11]"
                    alt="feature"
                  >
                </figure>
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="item">
          <v-row
            :class="[isMobile ? 'column-reverse' : 'row']"
            class="spacing6"
          >
            <v-col md="6" cols="12" class="py-0">
              <div
                data-aos-offset="100"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="300"
              >
                <figure class="illustration">
                  <img
                    class="img-2d3d"
                    :src="imgAPI.fintech[13]"
                    :data-2d="imgAPI.fintech[12]"
                    :data-3d="imgAPI.fintech[13]"
                    alt="feature"
                  >
                </figure>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="pa-sm-6">
              <div class="text">
                <main-title
                  :text="$t('fintech.morefeature_title2')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <div :class="{ 'text-center': isMobile }">
                  <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-start'">
                    {{ $t('fintech.morefeature_subtitle2') }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
        <div id="statistic" class="item">
          <v-row>
            <v-col cols="12">
              <div class="text text-center">
                <main-title
                  :text="$t('fintech.morefeature_title3')"
                  align="center"
                />
                <p class="text-center use-text-subtitle2">
                  {{ $t('fintech.morefeature_subtitle3') }}
                </p>
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-delay="400"
                data-aos-duration="300"
              >
                <figure class="illustration horizontal">
                  <img
                    class="img-2d3d"
                    :src="imgAPI.fintech[15]"
                    :data-2d="imgAPI.fintech[14]"
                    :data-3d="imgAPI.fintech[15]"
                    alt="feature"
                  >
                </figure>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './feature-style.scss';
</style>

<script>
import AOS from 'aos';
import Title from '../../Title';
import imgAPI from '@/assets/images/imgAPI';

export default {
  components: {
    'main-title': Title,
  },
  data() {
    return {
      imgAPI,
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
    isMobile() {
      const smDown = this.$vuetify.display.smAndDown;
      return smDown;
    },
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
};
</script>
