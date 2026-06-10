<template>
  <div class="hero-banner-wrap">
    <div class="inner-deco">
      <div class="deco-wrap">
        <div class="cloud-deco" />
      </div>
    </div>
    <v-container>
      <slot />
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './hero-banner-style.scss';
</style>
