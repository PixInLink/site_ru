<template>
  <hero-banner>
    <section class="search-banner">
      <v-container class="max-md">
        <v-row align="center" class="search-block">
          <v-col sm="12">
            <h2 class="use-text-title2 text-center use-text-primary">
              {{ $t('common.list_title') }}
            </h2>
            <h3 class="use-text-subtitle2 text-center">
              {{ $t('common.list_subtitle') }}
            </h3>
            <div class="search">
              <v-text-field
                :placeholder="$t('common.list_search')"
                variant="outlined"
                color="primary"
                single-line
              />
              <v-icon class="search-icon">
                mdi-magnify
              </v-icon>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </hero-banner>
</template>

<style scoped lang="scss">
@import './filter';
</style>

<script>
import HeroBanner from '../HeroBanner';

export default {
  components: {
    HeroBanner,
  },
};
</script>
