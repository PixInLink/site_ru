<template>
  <footer class="footer" :class="{'has-bg': bg}">
    <decoration :bg="bg" />
    <v-container class="max-lg">
      <nav>
        <ul>
          <li
            v-for="(item, index) in menu"
            :key="index"
          >
            <a :href="'#' + item">
              {{ $t('saas.header_'+item) }}
            </a>
          </li>
        </ul>
      </nav>
      <div class="socmed">
        <v-btn icon variant="text" size="small" class="icon">
          <i class="ion-logo-twitter" />
        </v-btn>
        <v-btn icon variant="text" size="small" class="icon">
          <i class="ion-logo-facebook" />
        </v-btn>
        <v-btn icon variant="text" size="small" class="icon">
          <i class="ion-logo-instagram" />
        </v-btn>
      </div>
    </v-container>
    <div class="copyright">
      <p class="body-2 text-center">
        &copy;
        {{ brand.saas.footerText }}
      </p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import './footer-basic';
</style>

<script>
import brand from '@/assets/text/brand';
import menu from '../Header/data/single';
import Decoration from './Decoration';

export default {
  components: {
    Decoration,
  },
  props: {
    bg: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    brand,
    menu,
  }),
};
</script>
