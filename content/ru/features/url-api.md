---
title: "URL API PixInLink: полный справочник параметров"
description: "Справочник параметров URL API PixInLink: формат /WxH/prompt, стили, seed, квоты и аутентификация через привязку домена."
slug: "features/url-api"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "WebPage"
---
<main class="container-wrap container-pages">

<!-- HERO -->
<div class="container mt-5 pt-5 mb-4" id="api-header">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1 text-left">
      <div class="d-flex align-items-center mb-3">
        <a href="https://pixinlink.ru/features/" class="badge" style="background:#e3f2fd;color:#1976d2;border-radius:4px;padding:5px 10px;">Возможности</a>
        <span class="ml-2 text-muted" style="font-size:14px;">/</span>
        <span class="ml-2 text-muted" style="font-size:14px;">URL API</span>
      </div>
      <h1 class="use-text-title2">URL API: справочник параметров</h1>
      <p class="use-text-subtitle2 text-muted" style="font-size:1.3rem;">
        Генерируйте изображения одним HTTP GET-запросом — без SDK, без настройки и без бэкенда.
      </p>
      <p class="body-1 mt-3" style="font-size:1.1rem;line-height:1.6;">
        Достаточно вставить URL в <code>&lt;img src="..."&gt;</code> вашего сайта. Сервер примет запрос, проверит Redis-кеш и вернёт готовое изображение.
      </p>
      <h6 class="use-text-subtitle2 mt-4 mb-2">Самый простой запрос:</h6>
      <div class="card paper pa-3 text-left mb-2" style="background:#1e1e1e;border-radius:8px;">
        <code style="color:#ce9178;font-size:15px;word-break:break-all;">
          https://pixinlink.ru/800x400/кофе-на-столе-утром
        </code>
      </div>
      <p class="body-2 text-muted">→ Готовое изображение 800×400px в формате WebP.</p>
    </div>
  </div>
</div>
<!-- TL;DR + Ключевые факты -->
<div class="container" id="api-intro">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="card paper pa-4 mb-5" style="background:#f1f8e9;border-left:4px solid #4CAF50;box-shadow:none;">
        <h5 class="headline mb-2" style="color:#2E7D32;">TL;DR</h5>
        <p class="body-1 m-0" style="line-height:1.6;">
          URL API = <strong>GET-запрос → изображение</strong> (или 302 редирект на CDN URL).<br>
          <strong>Формат:</strong> <code>/{width}x{height}/{prompt}?style=...&seed=...</code><br>
          <strong>Параметры:</strong> prompt, seed, style — читаются из URL.<br>
          <strong>Аутентификация:</strong> привязка домена через Referer (не API-ключ).<br>
          Справочник ниже — всё для copy-paste.
        </p>
      </div>
      <h3 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Ключевые факты</h3>
      <ul class="body-1 mb-5" style="line-height:1.8;list-style:none;padding-left:0;">
        <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>Один GET-запрос → изображение:</strong> POST не нужен, тело запроса не нужно.</li>
        <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>Два пути:</strong> <code>pixinlink.ru/800x400/...</code> (основной) и <code>/api/v1/800x400/...</code> (альтернативный).</li>
        <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>Аутентификация по домену:</strong> Referer-заголовок определяет, привязан ли домен. Без привязки — анонимный тариф.</li>
        <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>Стили:</strong> default, illustration, 3d, anime, photographic, minimal, dark.</li>
        <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>Redis-кеш:</strong> ключ — url_path. Cache hit = 200 OK. CDN-кеш = 302 редирект.</li>
        <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>500 символов:</strong> максимальная длина промпта (обрезается).</li>
        <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>12 изображений бесплатно:</strong> без регистрации, без карты.</li>
        <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>Rate limit:</strong> 50 запросов/минуту для всех.</li>
      </ul>
    </div>
  </div>
</div>
<!-- АРХИТЕКТУРА ЗАПРОСА -->
<div class="container" id="api-architecture">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h3 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Как работает запрос (Архитектура)</h3>
      <div class="card paper pa-4 mb-5" style="background:#fdfdfd;border:1px solid #eee;">
        <ol class="body-1 m-0" style="line-height:1.8;padding-left:20px;">
          <li class="mb-2"><strong>Шаг 1:</strong> Клиент отправляет GET-запрос к <code>pixinlink.ru/800x400/промпт</code>.</li>
          <li class="mb-2"><strong>Шаг 2:</strong> Сервер проверяет заголовок Referer → определяет домен → ищет пользователя с привязанным доменом → устанавливает add_wm и лимиты.</li>
          <li class="mb-2 text-success">
            <strong>Шаг 3a (Redis Cache Hit):</strong> Изображение найдено в Redis (ключ: <code>gen:800x400</code>) → HTTP <code>200 OK</code> с готовым файлом. Квота не тратится.
          </li>
          <li class="mb-2 text-success">
            <strong>Шаг 3b (CDN Cache Hit):</strong> Изображение в CDN-кеше → HTTP <code>302 Found</code> редирект на CDN URL.
          </li>
          <li class="mb-0" style="color:#ff9800;">
            <strong>Шаг 3c (Cache Miss):</strong> Изображения нет в кеше → синхронная генерация через GigaChat (10–30 сек) → WebP → сохранение в Redis-кеш → возврат.
          </li>
        </ol>
      </div>
    </div>
  </div>
</div>
<!-- ПАРАМЕТРЫ -->
<div class="container" id="api-parameters">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h3 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Параметры URL</h3>
      <p class="body-1 mb-4">Формат: <code>/{width}x{height}/{prompt}?style=...&seed=...</code></p>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background-color:#f5f5f5;">
              <tr><th>Параметр</th><th>Тип</th><th>Где</th><th>Пример</th><th>Ограничения</th></tr>
            </thead>
            <tbody class="body-2">
              <tr>
                <td><code>width</code></td>
                <td>integer</td>
                <td>path</td>
                <td>800</td>
                <td>16–4096 px (clamped)</td>
              </tr>
              <tr>
                <td><code>height</code></td>
                <td>integer</td>
                <td>path</td>
                <td>400</td>
                <td>16–4096 px (clamped)</td>
              </tr>
              <tr>
                <td><code>prompt</code></td>
                <td>string</td>
                <td>path или query</td>
                <td>офис-разработчиков</td>
                <td>Макс 500 символов (обрезается). URL-encode для пробелов.</td>
              </tr>
              <tr>
                <td><code>style</code></td>
                <td>string</td>
                <td>query</td>
                <td>illustration</td>
                <td>default (по умолчанию). Неизвестные → default.</td>
              </tr>
              <tr>
                <td><code>seed</code></td>
                <td>integer</td>
                <td>query</td>
                <td>42</td>
                <td>Без явной валидации диапазона. Фиксирует результат.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p class="body-2 text-muted mb-5">
        <strong>Примечание:</strong> значения размеров вне диапазона «зажимаются» (clamped) до 4096 без ошибки. Параметры <code>watermark</code>, <code>format</code> и <code>callback</code> не обрабатываются catch-all endpoint — они работают только в REST API (<code>POST /images/generate</code>).
      </p>
      <!-- СТИЛИ -->
      <h3 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Стили (style)</h3>
      <p class="body-1 mb-3">Параметр <code>&style=</code> управляет художественным стилем генерации. Неизвестные значения падают на <code>default</code>.</p>
      <div class="card paper pa-0 mb-5 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background-color:#f5f5f5;">
              <tr><th>Значение</th><th>Описание</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td><code>default</code></td><td>Фотореализм (по умолчанию)</td></tr>
              <tr><td><code>illustration</code></td><td>Цифровая живопись (персонажи, концепт-арт)</td></tr>
              <tr><td><code>3d</code></td><td>3D-рендер (продукты, техника)</td></tr>
              <tr><td><code>anime</code></td><td>Аниме/манга стиль</td></tr>
              <tr><td><code>photographic</code></td><td>Фотографический (аналог default)</td></tr>
              <tr><td><code>minimal</code></td><td>Минималистичный (аналог default)</td></tr>
              <tr><td><code>dark</code></td><td>Тёмная стилистика (аналог default)</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- SEED -->
      <h3 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Seed: воспроизводимые результаты</h3>
      <p class="body-1 mb-3">Тип: integer. Если не передан — каждый cache miss генерирует уникальное изображение. Если передан — одинаковый prompt + seed всегда дают одинаковый результат. Идеально для <code>og:image</code>.</p>
      <div class="row mb-5">
        <div class="col-md-6">
          <h6 class="use-text-subtitle2 mt-2 mb-2">PHP (crc32 из slug)</h6>
          <div class="card paper pa-3 text-left mb-3" style="background:#1e1e1e;border-radius:8px;">
            <pre style="margin:0;white-space:pre-wrap;"><code style="color:#d4d4d4;font-size:13px;"><span style="color:#569cd6;">function</span> <span style="color:#dcdcaa;">pixinlink_seed</span>(<span style="color:#4ec9b0;">string</span> <span style="color:#9cdcfe;">$slug</span>): <span style="color:#4ec9b0;">int</span> {
    <span style="color:#c586c0;">return</span> <span style="color:#dcdcaa;">abs</span>(<span style="color:#dcdcaa;">crc32</span>(<span style="color:#9cdcfe;">$slug</span>)) % <span style="color:#b5cea8;">2147483647</span>;
}</code></pre>
          </div>
        </div>
        <div class="col-md-6">
          <h6 class="use-text-subtitle2 mt-2 mb-2">JavaScript</h6>
          <div class="card paper pa-3 text-left mb-3" style="background:#1e1e1e;border-radius:8px;">
            <pre style="margin:0;white-space:pre-wrap;"><code style="color:#d4d4d4;font-size:13px;"><span style="color:#569cd6;">function</span> <span style="color:#dcdcaa;">getSeed</span>(<span style="color:#9cdcfe;">slug</span>) {
  <span style="color:#569cd6;">let</span> hash = <span style="color:#b5cea8;">0</span>;
  <span style="color:#c586c0;">for</span> (<span style="color:#569cd6;">let</span> i=<span style="color:#b5cea8;">0</span>; i&lt;slug.<span style="color:#4ec9b0;">length</span>; i++) {
    hash = ((hash &lt;&lt; <span style="color:#b5cea8;">5</span>) - hash) + slug.<span style="color:#dcdcaa;">charCodeAt</span>(i);
  }
  <span style="color:#c586c0;">return</span> Math.<span style="color:#dcdcaa;">abs</span>(hash) % <span style="color:#b5cea8;">2147483647</span> || <span style="color:#b5cea8;">1</span>;
}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- АУТЕНТИФИКАЦИЯ -->
<div class="container" id="api-auth">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h3 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Аутентификация</h3>
      <p class="body-1 mb-3">URL API использует <strong>аутентификацию по домену</strong> через заголовок <strong>Referer</strong> — не Bearer-токен. Сервер извлекает домен из Referer и ищет пользователя с привязанным доменом.</p>
      <div class="row mb-5">
        <div class="col-md-6">
          <h6 class="use-text-subtitle2 mb-2">Анонимный доступ (Free)</h6>
          <div class="card paper pa-3 text-left mb-2" style="background:#1e1e1e;border-radius:8px;">
            <code style="color:#ce9178;font-size:13px;">GET https://pixinlink.ru/800x400/офис</code>
          </div>
          <p class="body-2 text-muted">12 генераций/мес. Водяной знак. Без регистрации.</p>
        </div>
        <div class="col-md-6">
          <h6 class="use-text-subtitle2 mb-2">С привязанным доменом (Starter+)</h6>
          <div class="card paper pa-3 text-left mb-2" style="background:#1e1e1e;border-radius:8px;">
            <code style="color:#ce9178;font-size:13px;">GET https://pixinlink.ru/800x400/офис</code>
          </div>
          <p class="body-2 text-muted">Referer: ваш-сайт.ru → сервер определяет домен → без знака, полная квота.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- КОДЫ ОТВЕТОВ -->
<div class="container" id="api-codes">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h3 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Коды ответов HTTP</h3>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background-color:#f5f5f5;">
              <tr><th>Код</th><th>Статус</th><th>Описание</th></tr>
            </thead>
            <tbody class="body-2">
              <tr>
                <td><span style="background:#4CAF50;color:#fff;padding:2px 8px;border-radius:4px;">200</span></td>
                <td>OK</td>
                <td>Redis cache hit — изображение отдано из кеша</td>
              </tr>
              <tr>
                <td><span style="background:#2196F3;color:#fff;padding:2px 8px;border-radius:4px;">302</span></td>
                <td>Found</td>
                <td>CDN cache hit — редирект на CDN URL</td>
              </tr>
              <tr>
                <td><span style="background:#FF9800;color:#fff;padding:2px 8px;border-radius:4px;">400</span></td>
                <td>Bad Request</td>
                <td>Ошибка в параметрах запроса</td>
              </tr>
              <tr>
                <td><span style="background:#f44336;color:#fff;padding:2px 8px;border-radius:4px;">429</span></td>
                <td>Too Many Requests</td>
                <td>Превышен rate limit или месячная квота</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- КВОТЫ -->
<div class="container" id="api-quotas">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h3 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Квоты и лимиты</h3>
      <p class="body-1 mb-4">Rate limit для catch-all endpoint — <strong>50 запросов/минуту для всех</strong> (единый лимит). Cache hit (200/302) не считается генерацией — квота не расходуется. Списание только при cache miss.</p>
      <div class="card paper pa-0 mb-5 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background-color:#f5f5f5;">
              <tr><th>Тариф</th><th>Квота (генераций/мес)</th><th>Сброс квоты</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td><strong>Free</strong></td><td>12</td><td>Календарный месяц</td></tr>
              <tr style="background:#e8f5e9;"><td><strong>Starter</strong></td><td>50</td><td>Календарный месяц</td></tr>
              <tr style="background:#e8f5e9;"><td><strong>Pro</strong></td><td>500</td><td>Календарный месяц</td></tr>
              <tr style="background:#e8f5e9;"><td><strong>Business</strong></td><td>1 000</td><td>Календарный месяц</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ПОЛНЫЙ ПРИМЕР -->
<div class="container" id="api-example">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h3 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Полный пример запроса</h3>
      <div class="card paper pa-4 mb-4 text-left" style="background:#1e1e1e;border-radius:8px;">
        <pre style="margin:0;white-space:pre-wrap;font-family:monospace;color:#ce9178;font-size:14px;line-height:1.5;">GET https://pixinlink.ru/1200x630/современный-офис-разработчиков
<span style="color:#9cdcfe;">?style</span>=illustration
<span style="color:#9cdcfe;">&amp;seed</span>=20260515
<span style="color:#9cdcfe;">Referer:</span> https://мой-сайт.ru/blog/post</pre>
      </div>
      <p class="body-2 text-muted mb-5">Если домен «мой-сайт.ru» привязан к аккаунту — изображение будет без водяного знака. Если нет — со знаком.</p>
    </div>
  </div>
</div>
<!-- CTA -->
<div class="container mb-5" id="cta-block">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1 text-center">
      <div class="card paper pa-5" style="border-radius:12px;background:linear-gradient(135deg,#e3f2fd 0%,#bbdefb 100%);">
        <h3 class="use-text-title2 mb-3">Попробуйте прямо сейчас</h3>
        <p class="use-text-subtitle2 mb-4">12 бесплатных генераций. Без регистрации, без карты.</p>
        <a href="https://pixinlink.ru/pricing/" class="btn primary waves-effect" style="padding:2px 24px;font-weight:600;border-radius:8px;font-size:1rem;margin-right:12px;margin-bottom:8px;">Выбрать тариф</a>
        <a href="https://pixinlink.ru/docs/getting-started/" class="btn btn-outlined primary waves-effect" style="padding:2px 24px;border-radius:8px;font-size:1rem;margin-bottom:8px;">Начало работы →</a>
      </div>
    </div>
  </div>
</div>
</main>
