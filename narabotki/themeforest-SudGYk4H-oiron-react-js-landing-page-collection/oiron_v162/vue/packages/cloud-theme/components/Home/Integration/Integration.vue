<template>
  <div class="root">
    <v-container>
      <div>
        <v-row>
          <div class="dashed-divider" />
          <v-col cols="12" md="6">
            <div
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-offset="100"
              data-aos-duration="500"
            >
              <div>
                <figure class="illustration">
                  <svg class="droplet secondary-color">
                    <use xlink:href="/images/cloud/droplet.svg#main" />
                  </svg>
                  <img
                    class="img-2d3d"
                    :src="imgAPI.cloud[21]"
                    :data-2d="imgAPI.cloud[20]"
                    :data-3d="imgAPI.cloud[21]"
                    alt="background"
                  >
                </figure>
                <main-title
                  :caption="$t('cloud.mainfeature_titleitem2')"
                  :text="$t('cloud.mainfeature_titleitem1')"
                  align="center"
                />
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-offset="100"
              data-aos-duration="500"
            >
              <div>
                <figure class="illustration">
                  <svg class="droplet primary-color">
                    <use xlink:href="/images/cloud/droplet.svg#main" />
                  </svg>
                  <img
                    class="img-2d3d"
                    :src="imgAPI.cloud[23]"
                    :data-2d="imgAPI.cloud[22]"
                    :data-3d="imgAPI.cloud[23]"
                    alt="background"
                  >
                </figure>
                <main-title
                  :caption="$t('cloud.morefeature_headtitle2')"
                  :text="$t('cloud.benefit_title')"
                  align="center"
                />
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="timeline">
        <div class="solid-divider" />
        <div>
          <v-row>
            <v-col sm="6" cols="12" class="px-lg-10">
              <ul class="left-side">
                <li
                  v-for="(item, index) in integration1"
                  :key="index"
                  :class="'type-' + item.color"
                >
                  <div
                    data-aos="fade-left"
                    :data-aos-delay="(200 + (100 * index))"
                    data-aos-offset="100"
                    data-aos-duration="500"
                  >
                    <div class="item">
                      <div class="text">
                        <strong class="use-text-subtitle2">{{ item.title }}</strong>
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
            <v-col sm="6" cols="12" class="px-lg-10">
              <ul class="right-side">
                <li
                  v-for="(item, index) in integration2"
                  :key="index"
                  :class="'type-' + item.color"
                >
                  <div
                    data-aos="fade-right"
                    :data-aos-delay="(200 + (200 * index))"
                    data-aos-offset="100"
                    data-aos-duration="500"
                  >
                    <div class="item">
                      <div class="icon">
                        <i :class="item.icon" />
                      </div>
                      <div class="text">
                        <strong class="use-text-subtitle2">{{ item.title }}</strong>
                        <p>{{ item.subtitle }}</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </v-col>
          </v-row>
        </div>
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
    'main-title': Title,
  },
  data() {
    return {
      imgAPI,
      integration1: [
        {
          color: 'secondary',
          icon: 'ion-ios-flash',
          title: 'Nam vitae scelerisque lorem',
          subtitle: 'Quis tempus libero proin varius',
        },
        {
          color: 'secondary',
          icon: 'ion-ios-folder-open',
          title: 'Nam vitae scelerisque lorem',
          subtitle: 'Quis tempus libero proin varius',
        },
        {
          color: 'secondary',
          icon: 'ion-ios-lock',
          title: 'Nam vitae scelerisque lorem',
          subtitle: 'Quis tempus libero proin varius',
        },
      ],
      integration2: [
        {
          color: 'primary',
          icon: 'ion-md-git-merge',
          title: 'Nam vitae scelerisque lorem',
          subtitle: 'Quis tempus libero proin varius',
        },
        {
          color: 'primary',
          icon: 'ion-logo-buffer',
          title: 'Nam vitae scelerisque lorem',
          subtitle: 'Quis tempus libero proin varius',
        },
        {
          color: 'primary',
          icon: 'ion-md-cloud-upload',
          title: 'Nam vitae scelerisque lorem',
          subtitle: 'Quis tempus libero proin varius',
        },
      ],
    };
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
