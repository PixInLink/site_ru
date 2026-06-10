<template>
  <div class="main-feature">
    <v-container fixed>
      <div>
        <main-title
          :caption="$t('cloud.mainfeature_headtitle')"
          :text="$t('cloud.mainfeature_title')"
          align="center"
        />
        <v-row class="spacing6 grid">
          <v-col
            v-for="(item, index) in featureList"
            :key="index"
            sm="4"
            cols="12"
            class="pa-6"
          >
            <div
              :data-aos-delay="(200 + (100 * index))"
              data-aos-offset="260"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <div class="item">
                <figure>
                  <svg class="wave">
                    <use :xlink:href="item.img" />
                  </svg>
                </figure>
                <h6 class="use-text-subtitle2">
                  {{ $t('cloud.mainfeature_' + item.title) }}
                </h6>
                <p class="use-text-paragraph">
                  {{ $t('cloud.mainfeature_' + item.desc) }}
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
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

export default {
  components: {
    'main-title': Title,
  },
  data() {
    return {
      featureList: [
        {
          img: '/images/cloud/gear.svg#main',
          title: 'titleitem1',
          desc: 'descitem1',
        },
        {
          img: '/images/cloud/connection.svg#main',
          title: 'titleitem2',
          desc: 'descitem2',
        },
        {
          img: '/images/cloud/support.svg#main',
          title: 'titleitem3',
          desc: 'descitem3',
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
