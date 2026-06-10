<template>
  <div class="page-deco">
    <div class="left-deco">
      <gun-deco />
    </div>
    <div class="right-deco">
      <stair-deco />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './decoration-style.scss';
</style>

<script>
import GunDeco from '../Home/Deco/Gun';
import StairDeco from '../Home/Deco/Stair';

export default {
  components: {
    StairDeco,
    GunDeco,
  },
};
</script>
