---
title: "WordPress og:image через URL: автообложки для соцсетей за 5 минут"
description: "Как настроить автоматические og:image для WordPress через PixInLink URL API. Плагин, functions.php, шорткод. Готовый код для Open Graph и Twitter Cards."
slug: "wordpress-og-image-url"
date: "2026-06-16"
author: "PixInLink"
category: "Вебмастерам"
tags: ["вебмастерам", "wordpress", "og-image", "seo"]
schema_type: "Article"
layout: "article"
cover_image: "https://pixinlink.ru/api/v1/1200x630/wordpress-og-image-url-pixinlink"
---
<main class="container-wrap">

<p>Написали статью — нет обложки для соцсетей. Без og:image Telegram и VK показывают пустой превью. Без Twitter Card — ссылка выглядит как спам. Решение: PixInLink генерирует og:image автоматически по URL. Три способа настройки: от плагина в один клик до чистого кода в functions.php.</p>

<h2 class="use-text-title2">Ключевые цифры</h2>

<div class="row spacing4">
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">1200×630 px</h6>
    <p class="use-text-paragraph mb-0 small">Стандартный размер og:image для Telegram, VK, Twitter, Facebook, WhatsApp. Оптимальный компромисс качество/скорость.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">Автоматически</h6>
    <p class="use-text-paragraph mb-0 small">og:image создаётся из заголовка поста. Написали статью — обложка готова. Без ручного экспорта и загрузки.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">Кеш 365 дней</h6>
    <p class="use-text-paragraph mb-0 small">Изображение не перегенерируется при каждом просмотре. CDN раздаёт мгновенно. Нагрузка на хостинг: ноль.</p>
  </div>
</div>
</div>

<div class="row spacing4" style="margin-top:0">
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">WebP + AVIF</h6>
    <p class="use-text-paragraph mb-0 small">Современные форматы, которые принимают все соцсети. ~50 КБ вместо 300+ КБ PNG — ускорение в 6 раз.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">5 строк PHP</h6>
    <p class="use-text-paragraph mb-0 small">Минимум кода для интеграции. Или 0 строк с официальным плагином WordPress.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">50 бесплатно</h6>
    <p class="use-text-paragraph mb-0 small">50 генераций og:image без регистрации. Для регулярного использования — Starter 490 ₽/мес.</p>
  </div>
</div>
</div>

<h2 class="use-text-title2">Три способа настройки</h2>

<h3 class="use-text-subtitle">Способ 1: Официальный плагин — без кода</h3>

<ol>
  <li>Установите плагин: <code>Плагины → Добавить новый → "PixInLink"</code></li>
  <li>Активируйте и введите API-ключ из <a href="https://app.pixinlink.ru">личного кабинета</a></li>
  <li>Готово — каждая запись получает <code>&lt;meta property="og:image"&gt;</code></li>
</ol>

<p>Плагин также добавляет Gutenberg-блок «PixInLink Image» для вставки AI-изображений в контент.</p>

<h3 class="use-text-subtitle">Способ 2: functions.php — 5 строк</h3>

<p>Без плагина. Добавьте в <code>functions.php</code> вашей темы:</p>

<pre><code>add_action('wp_head', 'pixinlink_og_image');
function pixinlink_og_image() {
    if (!is_single()) return;
    $title = urlencode(get_the_title());
    $url = "https://pixinlink.ru/1200x630/{$title}";
    echo '&lt;meta property="og:image" content="' . esc_url($url) . '"&gt;' . "\n";
    echo '&lt;meta name="twitter:card" content="summary_large_image"&gt;' . "\n";
    echo '&lt;meta name="twitter:image" content="' . esc_url($url) . '"&gt;' . "\n";
}</code></pre>

<h3 class="use-text-subtitle">Способ 3: Шорткод [pixinlink]</h3>

<p>В тексте записи:</p>
<pre><code>[pixinlink width="800" height="400" prompt="офис-разработчиков"]</code></pre>

<p>В шаблоне темы:</p>
<pre><code>echo do_shortcode('[pixinlink width="1200" height="630" prompt="' . get_the_title() . '"]');</code></pre>

<h2 class="use-text-title2">Проверка результата</h2>

<table class="highlight striped">
  <thead>
    <tr><th>Инструмент</th><th>Как проверить</th></tr>
  </thead>
  <tbody>
    <tr><td>Telegram</td><td>Бот <a href="https://t.me/WebpageBot">@WebpageBot</a> — отправьте URL</td></tr>
    <tr><td>VK</td><td><a href="https://vk.com/dev/pages.clearCache">VK Share Debugger</a> — очистка кеша</td></tr>
    <tr><td>Facebook</td><td><a href="https://developers.facebook.com/tools/debug/">Sharing Debugger</a></td></tr>
    <tr><td>Twitter</td><td><a href="https://cards-dev.twitter.com/validator">Card Validator</a></td></tr>
    <tr><td>curl</td><td><code>curl -s https://ваш-сайт.ru/статья/ | grep og:image</code></td></tr>
  </tbody>
</table>

<h2 class="use-text-title2">FAQ</h2>

<h3 class="use-text-subtitle">Что если заголовок статьи содержит спецсимволы?</h3>
<p>Используйте <code>urlencode()</code> в PHP или <code>encodeURIComponent()</code> в JavaScript. Промпт автоматически нормализуется: спецсимволы заменяются на дефисы.</p>

<h3 class="use-text-subtitle">Можно ли использовать og:image на нескольких доменах?</h3>
<p>Да. Привяжите все домены в личном кабинете (до 3 на Starter). og:image будет работать на каждом из них без водяного знака.</p>

<h3 class="use-text-subtitle">Нужно ли обновлять og:image при изменении заголовка?</h3>
<p>Если URL (включая промпт) изменился — сгенерируется новое изображение. Старое останется в кеше CDN на 365 дней. Для принудительного обновления используйте новый seed.</p>

<h3 class="use-text-subtitle">Работает ли с кастомными типами записей (CPT)?</h3>
<p>Да. В functions.php замените <code>is_single()</code> на <code>is_singular()</code> — og:image будет генерироваться для любых типов записей.</p>
<!-- @block: key-facts -->
**Настройте og:image в WordPress за 5 минут.** Плагин в один клик, 5 строк в functions.php или шорткод — три способа, ноль сложностей. Каждая запись автоматически получает уникальную обложку 1200×630.
<!-- @block: cta -->
<h2 class="use-text-title2">Начните с бесплатных 50 генераций</h2>

<p>Установите плагин или скопируйте код в functions.php. Первая обложка появится через 30 секунд.</p>

<a class="btn waves-effect button btn-large primary" style="color:#fff" href="https://app.pixinlink.ru/register">12 изображений бесплатно</a>

</main>
