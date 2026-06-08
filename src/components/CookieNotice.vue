<script setup lang="ts">
import { ref, onMounted } from "vue";

const visible = ref(false);

onMounted(() => {
  if (!localStorage.getItem("cookie-accepted")) {
    visible.value = true;
  }
});

function accept() {
  localStorage.setItem("cookie-accepted", "1");
  visible.value = false;
}
</script>

<template>
  <div v-if="visible" class="cookie-notice">
    <div class="wrapper">
      <div class="content">
        <p class="text">Наш сайт использует cookies, включая сервисы веб-аналитики (файлы с данными о прошлых посещениях сайта). Продолжая пользоваться сайтом, вы соглашаетесь с <a href="/legal/privacy/">политикой конфиденциальности</a>.</p>
        <button class="btn secondary waves-effect" type="button" @click="accept">Принять</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cookie-notice {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #1a237e;
  color: #fff;
  padding: 16px 0;
}
.cookie-notice .wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
.cookie-notice .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.cookie-notice .text {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  flex: 1;
}
.cookie-notice .text a {
  color: #82b1ff;
  text-decoration: underline;
}
.cookie-notice .btn {
  flex-shrink: 0;
}
@media (max-width: 600px) {
  .cookie-notice .content {
    flex-direction: column;
    text-align: center;
  }
}
</style>
