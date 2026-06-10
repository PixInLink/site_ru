<template>
  <div class="more-feature">
    <v-container :class="{ fixed: isDesktop }">
      <div class="item">
        <v-row class="spacing6">
          <v-col md="6" cols="12">
            <div class="text" :class="{'text-center': isMobile}">
              <span class="ion-ios-analytics-outline" />
              <main-title
                :text="$t('crypto.morefeature_title2')"
                :align="isMobile ? 'center' : 'left'"
              />
              <div :class="{ 'text-center': isMobile }">
                <p
                  :class="{'text-center': isMobile}"
                  class="use-text-subtitle2"
                >
                  {{ $t('crypto.morefeature_subtitle2') }}
                </p>
              </div>
            </div>
          </v-col>
          <v-col md="6" cols="12">
            <div
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="300"
            >
              <figure class="illustration">
                <img
                  class="img-2d3d"
                  :src="imgAPI.crypto[17]"
                  :data-2d="imgAPI.crypto[16]"
                  :data-3d="imgAPI.crypto[17]"
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
          <v-col md="6" cols="12" class="pa-6">
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="400"
              data-aos-duration="300"
            >
              <figure class="illustration">
                <img
                  class="img-2d3d"
                  :src="imgAPI.crypto[19]"
                  :data-2d="imgAPI.crypto[18]"
                  :data-3d="imgAPI.crypto[19]"
                  alt="feature"
                >
              </figure>
            </div>
          </v-col>
          <v-col md="6" cols="12" class="pa-6">
            <div class="text" :class="{'text-center': isMobile}">
              <span class="ion-ios-lock-outline" />
              <main-title
                :text="$t('crypto.morefeature_title1')"
                :align="isMobile ? 'center' : 'left'"
              />
              <div :class="{ 'text-center': isMobile }">
                <p class="use-text-subtitle2" :class="isMobile ? 'text-center' : 'text-start'">
                  {{ $t('crypto.morefeature_subtitle1') }}
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
              <span class="ion-ios-flash-outline" />
              <main-title
                :text="$t('crypto.morefeature_title3')"
                align="center"
              />
              <p class="text-center use-text-subtitle2">
                {{ $t('crypto.morefeature_subtitle3') }}
              </p>
            </div>
            <v-container class="max-md">
              <ul class="chart-wrap">
                <li
                  v-for="(item, index) in coinData"
                  :key="index"
                >
                  <div class="coin">
                    <v-avatar class="logo">
                      <img :src="item.logo" :alt="item.name">
                    </v-avatar>
                    <h5>
                      {{ item.name }}
                    </h5>
                  </div>
                  <div class="price">
                    <h6>$ {{ item.price }}</h6>
                    <div v-if="item.status === 'down'" class="down">
                      <i>▼</i>{{ item.percent }}%
                    </div>
                    <div v-if="item.status === 'up'" class="up">
                      <i>▲</i>{{ item.percent }}%
                    </div>
                    <div v-if="item.status === 'stay'" class="stay">
                      <i>-</i>{{ item.percent }}%
                    </div>
                  </div>
                  <div class="progress">
                    <line-chart
                      :chart-id="'chart'+index"
                      :height="60"
                      :options="chartOpt"
                      :chart-data="item.dataCollection"
                      :labels="dataLabels"
                      :type="item.status"
                    />
                  </div>
                </li>
              </ul>
            </v-container>
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
import imgAPI from '@/assets/images/imgAPI';
import LineChart from './LineChart';

const coinData = [
  {
    name: 'BTC',
    logo: '/images/crypto/btc.png',
    status: 'up',
    price: 1234,
    percent: 3,
    dataCollection: [11, 13, 10, 4, 10, 12, 13, 16, 17, 20, 16, 16, 13, 10, 4, 6, 8, 9, 13, 16, 17, 20, 14, 16] // eslint-disable-line
  },
  {
    name: 'DASH',
    logo: '/images/crypto/dash.png',
    status: 'up',
    price: 1234,
    percent: 2,
    dataCollection: [13, 16, 17, 20, 16, 16, 13, 10, 11, 29, 10, 4, 10, 12, 4, 17, 20, 16, 6, 8, 9, 13, 16, 17] // eslint-disable-line
  },
  {
    name: 'NAN',
    logo: '/images/crypto/nan.png',
    status: 'down',
    price: 1234,
    percent: 10,
    dataCollection: [10, 12, 13, 16, 17, 20, 16, 16, 13, 11, 8, 10, 4, 10, 4, 6, 8, 9, 13, 16, 17, 20, 16, 6] // eslint-disable-line
  },
  {
    name: 'MNR',
    logo: '/images/crypto/mnr.png',
    status: 'up',
    price: 1234,
    percent: 6,
    dataCollection: [11, 10, 10, 16, 16, 13, 10, 4, 6, 8, 9, 13, 16, 17, 20, 16, 16, 4, 10, 12, 13, 16, 17, 20] // eslint-disable-line
  },
  {
    name: 'IOT',
    logo: '/images/crypto/iot.png',
    status: 'down',
    price: 1234,
    percent: 3,
    dataCollection: [11, 9, 10, 4, 10, 12, 13, 16, 17, 20, 16, 16, 13, 10, 4, 6, 8, 9, 13, 16, 17, 20, 16, 16] // eslint-disable-line
  },
];

export default {
  components: {
    'main-title': Title,
    LineChart,
  },
  data() {
    return {
      imgAPI,
      coinData,
      play: false,
      chartOpt: {
        gradientBackground: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        elements: {
          line: {
            tension: 0,
          },
          point: {
            radius: 1,
          },
        },
        scales: {
          x: {
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
      },
      dataLabels: ['1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '00AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM'] // eslint-disable-line
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
    offsetTop() {
      const elm = document.getElementById('statistic');
      return elm.getBoundingClientRect().y;
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
