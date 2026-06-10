<template>
  <div class="more-feature">
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <div>
          <v-row
            :class="[isMobile ? 'column-reverse' : 'row']"
            class="spacing6"
          >
            <v-col md="6" cols="12" class="pa-sm-6">
              <div
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-delay="400"
                data-aos-duration="300"
              >
                <figure class="illustration">
                  <img
                    class="img-2d3d"
                    :src="imgAPI.cloud[17]"
                    :data-2d="imgAPI.cloud[16]"
                    :data-3d="imgAPI.cloud[17]"
                    alt="feature"
                  >
                </figure>
              </div>
            </v-col>
            <v-col md="6" cols="12" class="pa-sm-6">
              <div class="text">
                <main-title
                  :caption="$t('cloud.morefeature_headtitle1')"
                  :text="$t('cloud.morefeature_title1')"
                  :align="isMobile ? 'center' : 'left'"
                />
                <div :class="{ 'text-center': isMobile }">
                  <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-start'">
                    {{ $t('cloud.morefeature_desc1') }}
                  </p>
                  <v-btn size="large" color="primary">
                    {{ $t('cloud.learnmore') }}
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
      <v-divider class="divider" />
      <div class="item">
        <div>
          <v-row class="spacing6">
            <v-col md="6" cols="12">
              <div class="text text-end">
                <main-title
                  :caption="$t('cloud.morefeature_headtitle2')"
                  :text="$t('cloud.morefeature_title2')"
                  :align="isMobile ? 'center' : 'right'"
                />
                <div :class="{ 'text-center': isMobile }">
                  <p
                    :class="isMobile ? 'text-center' : 'text-end'"
                    class="use-text-subtitle2"
                  >
                    {{ $t('cloud.morefeature_desc2') }}
                  </p>
                  <v-btn size="large" color="primary">
                    {{ $t('cloud.learnmore') }}
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col md="6" cols="12">
              <div
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="300"
              >
                <figure class="illustration">
                  <img
                    class="img-2d3d"
                    :src="imgAPI.cloud[19]"
                    :data-2d="imgAPI.cloud[18]"
                    :data-3d="imgAPI.cloud[19]"
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
    AOS.init({
      once: true,
    });
  },
};
</script>
