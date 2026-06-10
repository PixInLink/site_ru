<template>
  <div class="hero-banner-wrap">
    <v-container>
      <slot />
    </v-container>
    <div class="deco-wrap">
      <div class="deco bottom">
        <svg class="wave">
          <use xlink:href="/images/saas2/deco-wave.svg#main" />
        </svg>
      </div>
      <div class="deco top">
        <div class="wave wave-cover" />
      </div>
    </div>
    <div class="wave wave-cover" />
  </div>
</template>

<style scoped lang="scss">
@import './hero-banner-style.scss';
</style>
