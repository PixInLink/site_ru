<template>
  <div class="action">
    <h4 class="use-text-title2">
      {{ $t('social.footer_text') }}
    </h4>
    <div class="btn-area">
      <nuxt-link to="/">
        <img src="/images/social/app-store.png" alt="app store">
      </nuxt-link>
      <nuxt-link to="/">
        <img src="/images/social/play-store.png" alt="play store">
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './action-style.scss';
</style>
