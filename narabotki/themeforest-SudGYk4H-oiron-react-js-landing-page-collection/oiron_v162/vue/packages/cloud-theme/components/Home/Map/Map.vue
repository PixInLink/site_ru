<template>
  <div class="root">
    <v-container>
      <main-title
        :caption="$t('cloud.mainfeature_title')"
        :text="$t('cloud.morefeature_title2')"
        align="center"
      />
      <v-row>
        <v-col md="7" cols="12" class="map-wrap">
          <div class="world-map">
            <div class="location-wrap">
              <div
                v-for="(item, index) in locationsData"
                :key="index"
                :style="{ left: item.x + 'px', top: item.y + 'px'}"
                class="location-item"
              >
                <v-tooltip top>
                  <template #activator="{ props }">
                    <v-btn variant="text" v-bind="props" icon>
                      <location-buble :color="item.color" />
                    </v-btn>
                  </template>
                  <span>{{ item.name }}</span>
                </v-tooltip>
              </div>
            </div>
          </div>
        </v-col>
        <v-col md="5" cols="12">
          <div class="text">
            <div>
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-offset="100"
                data-aos-duration="300"
              >
                <div class="px-4">
                  <h3 class="use-text-subtitle title-primary">
                    <span />
                    Region A
                  </h3>
                  <p class="use-text-paragraph">
                    Aliquam nec ex aliquet, aliquam neque non, gravida est. Vestibulum nec mi suscipit, dapibus purus a, imperdiet tellus.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-offset="100"
                data-aos-duration="300"
              >
                <div class="px-4">
                  <h3 class="use-text-subtitle title-secondary">
                    <span />
                    Region B
                  </h3>
                  <p class="use-text-paragraph">
                    Aliquam nec ex aliquet, aliquam neque non, gravida est. Vestibulum nec mi suscipit, dapibus purus a, imperdiet tellus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './map-style.scss';
</style>

<script>
import AOS from 'aos';
import LocationBuble from './LocationBuble';
import locationsData from './locations-data';
import Title from '../../Title';

export default {
  components: {
    'main-title': Title,
    LocationBuble,
  },
  data() {
    return {
      loaded: false,
      locationsData,
      popupData: {},
    };
  },
  computed: {
    firsthChar() {
      return txt => txt.charAt(0);
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
