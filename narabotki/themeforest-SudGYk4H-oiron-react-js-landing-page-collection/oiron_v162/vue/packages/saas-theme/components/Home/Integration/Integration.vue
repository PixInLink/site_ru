<template>
  <div class="root">
    <div class="decoration-bg">
      <svg class="wave">
        <use xlink:href="/images/saas/deco-bg2.svg#main" />
      </svg>
    </div>
    <v-container>
      <v-row>
        <div class="dashed-divider" />
        <v-col
          :class="{'mb-10': isMobile}"
          class="px-sm-10"
          md="6"
          cols="12"
        >
          <div
            data-aos="fade-up"
            data-aos-offset="-100"
            data-aos-delay="500"
            data-aos-duration="500"
          >
            <div>
              <figure class="illustration">
                <img
                  class="img-2d3d"
                  :src="imgAPI.saas[16]"
                  :data-2d="imgAPI.saas[15]"
                  :data-3d="imgAPI.saas[16]"
                  alt="background"
                >
              </figure>
              <title-main align="center">
                <span>
                  {{ $t('saas.feature_title1') }}
                </span>
              </title-main>
              <h6 class="use-text-subtitle2 text-center">
                {{ $t('saas.feature_desc1') }}
              </h6>
            </div>
          </div>
        </v-col>
        <v-col md="6" cols="12" class="px-sm-10">
          <div
            data-aos="fade-up"
            data-aos-offset="-100"
            data-aos-delay="800"
            data-aos-duration="500"
          >
            <div>
              <figure class="illustration">
                <img
                  class="img-2d3d"
                  :src="imgAPI.saas[18]"
                  :data-2d="imgAPI.saas[17]"
                  :data-3d="imgAPI.saas[18]"
                  alt="background"
                >
              </figure>
              <title-main align="center">
                <span>
                  {{ $t('saas.feature_title3') }}
                </span>
              </title-main>
              <h6 class="use-text-subtitle2 text-center">
                {{ $t('saas.feature_desc2') }}
              </h6>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <div class="timeline">
        <div class="solid-divider" />
        <v-row>
          <v-col sm="6" cols="12" class="py-0 px-md-10">
            <ul class="left-side">
              <li
                v-for="(item, index) in integration1"
                :key="index"
                :class="'type-' + item.color"
              >
                <div
                  data-aos="fade-left"
                  :data-aos-delay="(200 + (100 * index))"
                  data-aos-offset="500"
                  data-aos-duration="500"
                >
                  <div class="item">
                    <div class="text">
                      <strong>{{ item.title }}</strong>
                      <p>{{ item.subtitle }}</p>
                    </div>
                    <div class="icon">
                      <i :class="item.icon" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </v-col>
          <v-col sm="6" cols="12" class="py-0 px-md-10">
            <ul class="right-side">
              <li
                v-for="(item, index) in integration2"
                :key="index"
                :class="'type-' + item.color"
              >
                <div
                  data-aos="fade-right"
                  :data-aos-delay="(200 + (100 * index))"
                  data-aos-offset="500"
                  data-aos-duration="500"
                >
                  <div class="item">
                    <div class="icon">
                      <i :class="item.icon" />
                    </div>
                    <div class="text">
                      <strong>{{ item.title }}</strong>
                      <p>{{ item.subtitle }}</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import 'integration-style.scss';
</style>

<script>
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import Title from '../../Title';

export default {
  components: {
    'title-main': Title,
  },
  data() {
    return {
      imgAPI,
      integration1: [
        {
          color: 'primary',
          icon: 'ion-md-time',
          title: 'Nam vitae scelerisque lorem',
          subtitle: 'Quis tempus libero proin varius',
        },
        {
          color: 'accent',
          icon: 'ion-ios-bulb-outline',
          title: 'Nam vitae scelerisque lorem',
          subtitle: 'Quis tempus libero proin varius',
        },
        {
          color: 'secondary',
          icon: 'ion-ios-globe',
          title: 'Nam vitae scelerisque lorem',
          subtitle: 'Quis tempus libero proin varius',
        },
      ],
      integration2: [
        {
          color: 'secondary',
          icon: 'ion-ios-flask-outline',
          title: 'Nam vitae scelerisque lorem',
          subtitle: 'Quis tempus libero proin varius',
        },
        {
          color: 'primary',
          icon: 'ion-ios-navigate-outline',
          title: 'Nam vitae scelerisque lorem',
          subtitle: 'Quis tempus libero proin varius',
        },
        {
          color: 'accent',
          icon: 'ion-ios-color-wand',
          title: 'Nam vitae scelerisque lorem',
          subtitle: 'Quis tempus libero proin varius',
        },
      ],
    };
  },
  computed: {
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
