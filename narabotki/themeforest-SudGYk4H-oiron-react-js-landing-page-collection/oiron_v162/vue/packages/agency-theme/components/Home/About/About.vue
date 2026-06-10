<template>
  <div class="root">
    <v-container class="fixed-width">
      <div>
        <v-row>
          <v-col cols="12" md="5" class="py-6 ps-lg-15">
            <div class="ms-md-15">
              <title-deco :text="$t('agency.about_title')" />
              <div
                data-aos="zoom-in"
                data-aos-offset="280"
                data-aos-delay="100"
                data-aos-duration="300"
              >
                <div v-if="isDesktop" class="puzzle">
                  <div class="piece-small-top">
                    <span />
                  </div>
                  <div class="piece-small-bottom">
                    <span />
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-offset="280"
                data-aos-delay="300"
                data-aos-duration="500"
              >
                <div class="deco">
                  <div class="big" />
                  <div class="medium" />
                  <div class="small" />
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="7" class="px-6">
            <div>
              <h4 class="title-default use-text-subtitle">
                {{ $t('agency.about_subtitle') }}
              </h4>
              <counter />
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style';
@import '../../Title/title-style';
</style>

<script>
import AOS from 'aos';
import Counter from '../Counter';
import TitleDeco from '../../Title/WithDecoration';

export default {
  components: {
    Counter,
    TitleDeco,
  },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
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
