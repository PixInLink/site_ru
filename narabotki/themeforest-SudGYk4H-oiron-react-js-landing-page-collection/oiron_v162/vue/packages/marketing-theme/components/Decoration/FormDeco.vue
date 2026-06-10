<template>
  <div class="form-deco">
    <div class="left-deco">
      <pizza-deco />
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
import PizzaDeco from '../Home/Deco/Pizza';
import StairDeco from '../Home/Deco/Stair';

export default {
  components: {
    StairDeco,
    PizzaDeco,
  },
};
</script>
