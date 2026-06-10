<template>
  <basic v-if="type === 'basic'" :extend="extend" />
  <blog v-if="type === 'blog'" :extend="extend" />
  <contact-footer v-if="type === 'contact'" :extend="extend" />
  <site-map v-if="type === 'sitemap'" :extend="extend" />
</template>

<script>
import ui from '@/composables/uiTheme';
import Basic from './Basic';
import Blog from './Blog';
import Contact from './Contact';
import SiteMap from './SiteMap';

export default {
  components: {
    Basic,
    Blog,
    'contact-footer': Contact,
    SiteMap,
  },
  props: {
    extend: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const type = ui.footer();
    return {
      type,
    };
  },
};
</script>
