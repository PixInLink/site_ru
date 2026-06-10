<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <detail />
      <description />
      <related-items />
      <comment-group />
    </div>
    <div id="footer">
      <footer-extend>
        <main-footer />
      </footer-extend>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/pages';
</style>

<script>
import brand from '@/assets/text/brand';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Detail from '@/components/List/Detail';
import Description from '@/components/List/Description';
import RelatedItems from '@/components/List/RelatedItems';
import Group from '@/components/Comment/Group';
import FooterExtend from '@/components/Footer/FooterExtend';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Detail,
    Description,
    RelatedItems,
    FooterExtend,
    'comment-group': Group,
  },
  head() {
    return {
      title: brand.fintech.name + ' - Detail Product',
    };
  },
});
</script>
