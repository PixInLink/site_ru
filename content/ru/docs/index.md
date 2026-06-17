---
title: "Документация PixInLink — URL API, интеграции, тарифы"
description: "Справочник по URL API PixInLink: структура ссылки, параметры, размеры, форматы. Быстрый старт, интеграции с WordPress и MODX, SDK для Python и JavaScript."
slug: "docs"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "WebPage"
raw_html: true
---
<main class="container-wrap">

<!-- ##### HERO #####-->
<div class="hero-banner-wrap">
  <div class="inner-deco">
    <div class="deco-wrap">
      <div class="cloud-deco"></div>
    </div>
  </div>
  <div class="container">
    <div class="banner-basic">
      <div class="banner-wrap">
        <div class="inner">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-md-6 col-sm-12 px-sm-5 px-0 py-4">
              <div class="text">
                <h1 class="use-text-title2">Документация PixInLink</h1>
                <h5 class="use-text-subtitle2">Всё, что нужно для работы с URL API: структура ссылки, параметры, размеры, форматы. Быстрый старт, интеграции с CMS и SDK для разработчиков.</h5>
              </div>
            </div>
            <div class="col-md-6 col-sm-12 px-sm-5 py-4">
              <div class="img">
                <img class="img-2d3d" src="/themes/oiron/images/agency/about_3d@2x.png" data-2d="/themes/oiron/images/agency/about_2d@2x.png" data-3d="/themes/oiron/images/agency/about_3d@2x.png" alt="Документация PixInLink — справочник по URL API" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ##### END HERO #####-->

<!-- ##### БЫСТРЫЙ СТАРТ #####-->
<div class="container page-section space-top-short" id="quickstart" style="margin-top: 40px;">
  <div class="row align-items-center" style="padding-top: 40px;">
    <div class="col-md-6 px-4">
      <h3 class="use-text-title2 mb-3">Быстрый старт</h3>
      <p class="body-1 mb-2">Первое изображение — за 60 секунд. Вам не нужен API-ключ, регистрация или плагин.</p>
      <ol class="body-1 mb-4" style="padding-left: 1.2em;">
        <li class="mb-2">Придумайте описание изображения на русском — например, <code>офис-разработчиков-смотрит-в-монитор</code></li>
        <li class="mb-2">Подставьте в URL: <code>https://pixinlink.ru/800x400/офис-разработчиков-смотрит-в-монитор</code></li>
        <li class="mb-2">Вставьте в тег <code>&lt;img src="..."&gt;</code> на своём сайте</li>
      </ol>
      <a href="/docs/getting-started/" class="btn btn-large primary waves-effect mr-3">Подробная инструкция</a>
      <a href="/integrations/" class="btn btn-large btn-outlined secondary waves-effect">Интеграции</a>
    </div>
    <div class="col-md-6 px-4">
      <div class="card paper pa-4" style="background: #1e1e1e; color: #d4d4d4; border-radius: 8px;">
        <p class="mb-1" style="color:#569cd6; font-size:12px;">Готовый URL для вставки</p>
<pre class="m-0" style="font-family: monospace; white-space: pre-wrap; word-break: break-all;">
<span style="color: #ce9178;">https://pixinlink.ru/</span><span style="color:#569cd6">800x400</span><span style="color: #ce9178;">/</span><span style="color:#dcdcaa">офис-разработчиков-смотрит-в-монитор</span>
</pre>
      </div>
    </div>
  </div>
</div>
<!-- ##### END БЫСТРЫЙ СТАРТ #####-->

<!-- ##### СТРУКТУРА URL #####-->
<div class="container page-section" id="url-structure">
  <div class="row mb-5">
    <div class="col-12 text-center">
      <h3 class="use-text-title2">Структура URL</h3>
      <p class="use-text-subtitle2">Простая схема: домен, размер и описание через слеш</p>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="card paper pa-4 mb-4" style="background: #1e1e1e; border-radius: 8px;">
<pre class="m-0" style="font-family: monospace; white-space: pre-wrap; word-break: break-all;">
<span style="color: #ce9178;">https://pixinlink.ru/</span><span style="color:#569cd6">{ширина}</span><span style="color: #ce9178;">x</span><span style="color:#569cd6">{высота}</span><span style="color: #ce9178;">/</span><span style="color:#dcdcaa">{описание-изображения}</span>
</pre>
      </div>
      <div class="card paper pa-4">
        <div class="table-responsive">
          <table class="highlight striped responsive-table">
            <thead>
              <tr>
                <th>Часть URL</th>
                <th>Пример</th>
                <th>Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Размер</strong></td>
                <td style="font-family: monospace;">800x400</td>
                <td>Ширина и высота в пикселях. Максимум 4096x4096. Обязательный параметр.</td>
              </tr>
              <tr>
                <td><strong>Описание</strong></td>
                <td style="font-family: monospace;">офис-разработчиков</td>
                <td>Текстовое описание изображения на русском. Слова разделяются дефисом. Обязательный параметр.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ##### END СТРУКТУРА URL #####-->

<!-- ##### СЕТКА КАТЕГОРИЙ #####-->
<div class="container page-section" id="docs-categories">
  <div class="row">
    <!-- Колонка 1: Начало работы -->
    <div class="col-md-4 pa-4 mb-4">
      <div class="card paper pa-4 h-100">
        <div class="d-flex align-items-center mb-3">
          <div class="icon primary material-icons mr-2" style="font-size: 28px;">menu_book</div>
          <h5 class="headline m-0">Начало работы</h5>
        </div>
        <ul class="body-1" style="list-style: none; padding-left: 0;">
          <li class="mb-3">
            <a href="/docs/getting-started/" class="primary-text"><strong>Быстрый старт</strong></a><br>
            <span class="body-2 text-muted">Первое изображение за 60 секунд</span>
          </li>
          <li class="mb-3">
            <a href="/features/url-api/" class="primary-text"><strong>URL API справочник</strong></a><br>
            <span class="body-2 text-muted">Параметры: width, height, prompt...</span>
          </li>
          <li class="mb-3">
            <a href="/integrations/" class="primary-text"><strong>Примеры кода</strong></a><br>
            <span class="body-2 text-muted">WordPress, Python, JS, cURL</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- Колонка 2: Аккаунт и оплата -->
    <div class="col-md-4 pa-4 mb-4">
      <div class="card paper pa-4 h-100">
        <div class="d-flex align-items-center mb-3">
          <div class="icon primary material-icons mr-2" style="font-size: 28px;">account_circle</div>
          <h5 class="headline m-0">Аккаунт и оплата</h5>
        </div>
        <ul class="body-1" style="list-style: none; padding-left: 0;">
          <li class="mb-3">
            <a href="/pricing/" class="primary-text"><strong>Оплата и подписка</strong></a><br>
            <span class="body-2 text-muted">Kassa, Visa/СБП, счета, возврат</span>
          </li>
          <li class="mb-3">
            <a href="/pricing/" class="primary-text"><strong>Квоты и лимиты</strong></a><br>
            <span class="body-2 text-muted">Rate limit, 429-ошибки, сброс лимитов</span>
          </li>
          <li class="mb-3">
            <a href="/features/watermark/" class="primary-text"><strong>Водяной знак</strong></a><br>
            <span class="body-2 text-muted">Привязка домена — автоматически без знака</span>
          </li>
          <li class="mb-3">
            <a href="/docs/faq/" class="primary-text"><strong>FAQ</strong></a><br>
            <span class="body-2 text-muted">43 ответа на вопросы: генерация, оплата, WP</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- Колонка 3: Для разработчиков -->
    <div class="col-md-4 pa-4 mb-4">
      <div class="card paper pa-4 h-100">
        <div class="d-flex align-items-center mb-3">
          <div class="icon primary material-icons mr-2" style="font-size: 28px;">code</div>
          <h5 class="headline m-0">Для разработчиков</h5>
        </div>
        <ul class="body-1" style="list-style: none; padding-left: 0;">
          <li class="mb-3">
            <a href="/integrations/" class="primary-text"><strong>API Reference</strong></a><br>
            <span class="body-2 text-muted">OpenAPI: все /api/v1/* эндпоинты</span>
          </li>
          <li class="mb-3">
            <a href="/integrations/" class="primary-text"><strong>Webhooks 🔜</strong></a><br>
            <span class="body-2 text-muted">image.ready, HMAC-подпись</span>
          </li>
          <li class="mb-3">
            <a href="/docs/getting-started/" class="primary-text"><strong>Changelog</strong></a><br>
            <span class="body-2 text-muted">История версий: v1.0 &rarr; v2.0</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
<!-- ##### END СЕТКА КАТЕГОРИЙ #####-->

<!-- ##### ЧАСТО ИЩУТ #####-->
<div class="container page-section pt-0" id="popular-searches">
  <div class="row mb-3">
    <div class="col-12 text-center">
      <h3 class="use-text-title2">Быстрые ответы</h3>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <div class="d-flex flex-wrap justify-content-center gap-2">
        <a href="/docs/getting-started/" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">Первое изображение за 60 секунд</a>
        <a href="/features/url-api/" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">Как работает URL API</a>
        <a href="/features/watermark/" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">Как убрать водяной знак</a>
        <a href="/features/webp-optimization/" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">WebP-оптимизация</a>
        <a href="/integrations/wordpress/" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">WordPress og:image</a>
        <a href="/pricing/" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">Тарифы и лимиты</a>
        <a href="/integrations/sdk-python/" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">Python SDK</a>
        <a href="/integrations/" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">Все интеграции</a>
      </div>
    </div>
  </div>
</div>
<!-- ##### END ЧАСТО ИЩУТ #####-->

<!-- ##### НУЖНА ПОМОЩЬ? #####-->
<div class="container page-section" id="help-support">
  <div class="row mb-5">
    <div class="col-12 text-center">
      <h3 class="use-text-title2">Нужна помощь?</h3>
      <p class="use-text-subtitle2">Мы всегда на связи, чтобы помочь с интеграцией</p>
    </div>
  </div>
  <div class="row">
    <!-- Email -->
    <div class="col-md-4 pa-4 text-center">
      <div class="feature-list card paper pa-4 h-100">
        <div class="icon primary material-icons mb-3" style="font-size: 48px;">email</div>
        <h5 class="headline">Email поддержка</h5>
        <p class="body-1 mb-3">Ответ в течение 24 часов.</p>
        <a href="mailto:support@pixinlink.ru" class="btn btn-outlined primary waves-effect">support@pixinlink.ru</a>
      </div>
    </div>
    <!-- Telegram -->
    <div class="col-md-4 pa-4 text-center">
      <div class="feature-list card paper pa-4 h-100">
        <div class="icon primary material-icons mb-3" style="font-size: 48px;">group</div>
        <h5 class="headline">Комьюнити</h5>
        <p class="body-1 mb-3">Вопросы, советы, обмен опытом.</p>
        <a href="https://t.me/pixinlinkusers" target="_blank" class="btn btn-outlined primary waves-effect">t.me/pixinlinkusers</a>
      </div>
    </div>
    <!-- Баги -->
    <div class="col-md-4 pa-4 text-center">
      <div class="feature-list card paper pa-4 h-100">
        <div class="icon primary material-icons mb-3" style="font-size: 48px;">bug_report</div>
        <h5 class="headline">Нашли ошибку?</h5>
        <p class="body-1 mb-3">Опишите проблему с <code>X-Request-ID</code>.</p>
        <a href="mailto:support@pixinlink.ru" class="btn btn-outlined primary waves-effect">Написать тикет</a>
      </div>
    </div>
  </div>
</div>
<!-- ##### END НУЖНА ПОМОЩЬ? #####-->

</main>
