<script setup lang="ts">
</script>

<template>
  <main class="container-wrap">
    <div class="error-style">
      <div class="error-wrap">
        <div class="container container-front max-md">
          <div class="row align-items-center">
            <div class="col-md-5 col-sm-12">
              <div class="flex">
                <div class="illustration">
                  <img class="img-2d3d" src="/themes/oiron/images/cloud/error_3d@2x.png" data-2d="/themes/oiron" data-3d="/themes/oiron/images/cloud/error_3d@2x.png" alt="404">
                </div>
              </div>
            </div>
            <div class="col-md-7 col-sm-12">
              <div class="text">
                <h3 class="use-text-primary">404</h3>
                <h4 class="use-text-subtitle">Страница не найдена</h4>
                <p class="use-text-paragraph">Вы можете остаться здесь или вернуться на главную.</p>
                <RouterLink class="btn primary waves-effect btn-large button" to="/">На главную</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
