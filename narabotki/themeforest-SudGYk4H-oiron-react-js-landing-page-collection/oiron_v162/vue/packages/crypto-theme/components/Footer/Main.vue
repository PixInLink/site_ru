<template>
  <basic v-if="type === 'basic'" :bg="bg" />
  <blog v-if="type === 'blog'" :bg="bg" />
  <contact-footer v-if="type === 'contact'" :bg="bg" />
  <site-map v-if="type === 'sitemap'" :bg="bg" />
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
    bg: {
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
