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
                <img class="img-2d3d" src="https://pixinlink.ru/800x500/документация-api-промпт-url-шпаргалка-интеграция" data-2d="/themes/oiron" data-3d="https://pixinlink.ru/800x500/документация-api-промпт-url-шпаргалка-интеграция" alt="Документация PixInLink — шпаргалка по URL API" />
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
<div class="container page-section" id="quickstart">
  <div class="row align-items-center">
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

<!-- ##### ПАРАМЕТРЫ #####-->
<div class="container page-section" id="parameters">
  <div class="row mb-5">
    <div class="col-12 text-center">
      <h3 class="use-text-title2">Дополнительные параметры</h3>
      <p class="use-text-subtitle2">Тонкая настройка через query-параметры после описания</p>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-4 col-sm-6 pa-4">
      <div class="feature-list card paper pa-4 h-100">
        <div class="icon primary material-icons">palette</div>
        <h5 class="headline"><code>style</code></h5>
        <p class="body-2 mb-2">Стиль генерации. Доступны: <code>realistic</code>, <code>cartoon</code>, <code>oil</code>, <code>sketch</code>, <code>cyberpunk</code>, <code>watercolor</code>.</p>
        <p class="body-2 text-muted">Пример: <code>?style=oil</code></p>
        <p class="body-2 text-muted">По умолчанию: <code>realistic</code></p>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6 pa-4">
      <div class="feature-list card paper pa-4 h-100">
        <div class="icon primary material-icons">tag</div>
        <h5 class="headline"><code>seed</code></h5>
        <p class="body-2 mb-2">Число для воспроизводимости. Одинаковый seed + prompt = одинаковое изображение.</p>
        <p class="body-2 text-muted">Пример: <code>?seed=42</code></p>
        <p class="body-2 text-muted">По умолчанию: случайный</p>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6 pa-4">
      <div class="feature-list card paper pa-4 h-100">
        <div class="icon primary material-icons">photo</div>
        <h5 class="headline"><code>format</code></h5>
        <p class="body-2 mb-2">Формат выходного изображения.</p>
        <p class="body-2 text-muted">Пример: <code>?format=webp</code></p>
        <p class="body-2 text-muted">Значения: <code>webp</code>, <code>png</code>, <code>avif</code>. По умолчанию: <code>webp</code></p>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6 pa-4">
      <div class="feature-list card paper pa-4 h-100">
        <div class="icon primary material-icons">branding_watermark</div>
        <h5 class="headline"><code>watermark</code></h5>
        <p class="body-2 mb-2">Водяной знак на изображении.</p>
        <p class="body-2 text-muted">Пример: <code>?watermark=false</code></p>
        <p class="body-2 text-muted">Значения: <code>true</code>, <code>false</code>. Убрать водяной знак можно на тарифе Starter и выше.</p>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6 pa-4">
      <div class="feature-list card paper pa-4 h-100">
        <div class="icon primary material-icons">color_lens</div>
        <h5 class="headline"><code>bg</code> / <code>fg</code></h5>
        <p class="body-2 mb-2">Цвет фона и текста (HEX без #).</p>
        <p class="body-2 text-muted">Пример: <code>?bg=ffffff&fg=333333</code></p>
        <p class="body-2 text-muted">По умолчанию: <code>ffffff</code> / <code>000000</code></p>
      </div>
    </div>
    <div class="col-lg-4 col-sm-6 pa-4">
      <div class="feature-list card paper pa-4 h-100">
        <div class="icon primary material-icons">link</div>
        <h5 class="headline">Полный пример</h5>
        <div class="card paper pa-3 mt-2" style="background: #1e1e1e; border-radius: 4px;">
          <code style="color: #ce9178; font-size: 12px; word-break: break-all;">
            /800x400/офис?style=oil&amp;seed=42&amp;format=webp
          </code>
        </div>
        <p class="body-2 text-muted mt-2">Параметры можно комбинировать через <code>&amp;</code></p>
      </div>
    </div>
  </div>
</div>
<!-- ##### END ПАРАМЕТРЫ #####-->

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

<!-- ##### КАТЕГОРИИ ДОКУМЕНТАЦИИ #####-->
<div class="container page-section" id="docs-categories">
  <div class="row mb-5">
    <div class="col-12 text-center">
      <h3 class="use-text-title2">Разделы документации</h3>
      <p class="use-text-subtitle2">Основные темы, которые помогут начать работу</p>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4 pa-4 mb-4">
      <div class="card product-card portrait over">
        <figure>
          <img src="https://pixinlink.ru/600x400/документация-быстрый-старт-pixinlink-url-api" alt="Быстрый старт PixInLink" />
        </figure>
        <div class="desc">
          <div class="text">
            <h6 class="use-text-subtitle2">Быстрый старт</h6>
            <p class="body-2">Первое изображение за 60 секунд. Пошаговая инструкция: от URL до вставки на сайт.</p>
          </div>
          <a class="btn btn-flat primary-text waves-effect" href="/docs/getting-started/">Читать</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 pa-4 mb-4">
      <div class="card product-card portrait over">
        <figure>
          <img src="https://pixinlink.ru/600x400/интеграции-api-wordpress-modx-python-sdk-подключение" alt="Интеграции PixInLink" />
        </figure>
        <div class="desc">
          <div class="text">
            <h6 class="use-text-subtitle2">Интеграции</h6>
            <p class="body-2">Плагины для WordPress и MODX, SDK для Python и JavaScript, REST API и прямая вставка URL.</p>
          </div>
          <a class="btn btn-flat primary-text waves-effect" href="/integrations/">Все интеграции</a>
        </div>
      </div>
    </div>
    <div class="col-md-4 pa-4 mb-4">
      <div class="card product-card portrait over">
        <figure>
          <img src="https://pixinlink.ru/600x400/возможности-url-api-генерация-webp-водяной-знак" alt="Возможности PixInLink" />
        </figure>
        <div class="desc">
          <div class="text">
            <h6 class="use-text-subtitle2">Возможности</h6>
            <p class="body-2">URL API, WebP-оптимизация, водяные знаки, CDN-доставка, AI-генерация и параметры запросов.</p>
          </div>
          <a class="btn btn-flat primary-text waves-effect" href="/features/">Все возможности</a>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ##### END КАТЕГОРИИ ДОКУМЕНТАЦИИ #####-->

<!-- ##### ПОДДЕРЖКА #####-->
<div class="call-to-action page-section pb-5">
  <div class="container fixed-width-md-up">
    <div class="root">
      <div class="card paper">
        <div class="row align-items-center mb-0">
          <div class="col-md-8 pa-4">
            <h4 class="use-text-title2 pb-2">Нужна помощь?</h4>
            <p class="use-text-subtitle2 mb-0">Если вы не нашли ответа в документации — напишите нам. Мы отвечаем в течение 24 часов. Так же приглашаем в комьюнити в Telegram.</p>
          </div>
          <div class="col-md-4 pa-4 text-md-right">
            <a class="waves-effect btn-large secondary button mr-2" href="mailto:support@pixinlink.ru">Email</a>
            <a class="waves-effect btn-large primary button" href="https://t.me/pixinlinkusers" target="_blank">Telegram</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ##### END ПОДДЕРЖКА #####-->

</main>
