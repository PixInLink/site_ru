<template>
  <vue-easy-lightbox
    v-if="loaded"
    :visible="visible"
    :imgs="imgs"
    :index="index"
    @hide="handleHide"
  />
  <div class="root">
    <v-container>
      <v-row>
        <v-col cols="12" md="3" class="px-sm-10 pt-10 pb-sm-10">
          <div
            data-aos="fade-left"
            data-aos-offset="-100"
            data-aos-delay="200"
            data-aos-duration="300"
          >
            <div class="side-filter">
              <h4 class="title-primary">
                {{ $t('agency.case_title') }}
              </h4>
              <v-list class="nav" item-value="corporate">
                <div>
                  <v-list-item
                    v-for="(item, index) in categories"
                    :key="index"
                    :class="{'v-list-item--active text-primary': item === value }"
                    class="filter"
                    @click="value = item"
                  >
                    <v-list-item-title class="text-capitalize">
                      {{ item }}
                    </v-list-item-title>
                  </v-list-item>
                </div>
              </v-list>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="9" class="pa-6">
          <div class="massonry">
            <v-row>
              <v-col cols="12" sm="6" class="pa-3">
                <div
                  data-aos="fade-up"
                  data-aos-offset="-100"
                  data-aos-delay="600"
                  data-aos-duration="400"
                >
                  <div
                    v-for="(item, index) in caseData"
                    :key="index"
                  >
                    <template v-if="item.size === 'big'">
                      <case-card
                        :bg="item.bg || ''"
                        :logo="item.logo"
                        :title="item.title"
                        :desc="item.desc"
                        :size="item.size"
                        :simple="item.simple || false"
                        :show-img="() => showImg(index)"
                      />
                    </template>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="5" sm="6" class="pa-3">
                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  data-aos-duration="400"
                >
                  <div
                    v-for="(item, index) in caseData"
                    :key="index"
                  >
                    <template v-if="item.size === 'medium'">
                      <case-card
                        :bg="item.bg || ''"
                        :logo="item.logo"
                        :title="item.title"
                        :desc="item.desc"
                        :size="item.size"
                        :simple="item.simple || false"
                        :show-img="() => showImg(index)"
                      />
                    </template>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './case-study-style.scss';
@import '../../Title/title-style.scss';
</style>

<script>
import AOS from 'aos';
import imgApi from '@/assets/images/imgAPI';
import CaseCard from '../../Cards/CaseCard';

export default {
  components: {
    CaseCard,
  },
  data() {
    return {
      visible: false,
      index: 0,
      loaded: false,
      item: 0,
      value: 'corporate',
      categories: [
        'corporate',
        'advertising',
        'marketing',
        'government',
        'creative',
      ],
      caseData: [
        {
          bg: imgApi.agency[9],
          logo: '/images/logos/cloud.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'big',
        },
        {
          bg: imgApi.agency[8],
          logo: '/images/logos/fashion.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'big',
        },
        {
          bg: imgApi.agency[5],
          logo: '/images/logos/mobile.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium',
        },
        {
          bg: imgApi.agency[6],
          logo: '/images/logos/profile.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium',
        },
        {
          bg: imgApi.agency[7],
          logo: '/images/logos/architect.png',
          title: 'Donec commodo convallis ligula',
          desc: 'Vestibulum consequat hendrerit',
          size: 'medium',
        },
      ],
    };
  },
  computed: {
    mdUp() {
      return this.$vuetify.display.mdAndUp;
    },
    imgs() {
      const arr = [];
      this.caseData.map((item) => {
        arr.push(item.bg || item.logo);
        return arr;
      });
      return arr;
    },
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
  methods: {
    showImg(index) {
      this.index = index;
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
  },
};
</script>
