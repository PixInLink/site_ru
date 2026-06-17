---
title: "URL API PixInLink: полный справочник параметров"
description: "Полный справочник параметров URL API PixInLink. Path и query параметры, аутентификация, HTTP коды ошибок, rate limits и примеры кода."
slug: "features/url-api"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "WebPage"
---
<main class="container-wrap container-pages">

<!-- ХЕДЕР ДОКУМЕНТАЦИИ -->
  <div class="container mt-5 pt-5 mb-4" id="api-header">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1 text-left">
        <div class="d-flex align-items-center mb-3">
          <a href="https://pixinlink.ru/features/" class="badge" style="background: #e3f2fd; color: #1976d2; border-radius: 4px; padding: 5px 10px;">Features</a>
          <span class="ml-2 text-muted" style="font-size: 14px;">/</span>
          <span class="ml-2 text-muted" style="font-size: 14px;">URL API</span>
        </div>
        <h1 class="use-text-title2">URL API: справочник параметров</h1>
        <p class="use-text-subtitle2 text-muted" style="font-size: 1.3rem;">
          Генерируйте изображения одним HTTP GET-запросом — без SDK, без настройки и без бэкенда.
        </p>
        <p class="body-1 mt-3" style="font-size: 1.1rem; line-height: 1.6;">
          Достаточно вставить правильный URL в атрибут <code>&lt;img src="..."&gt;</code> вашего сайта — никаких токенов OAuth, никаких асинхронных POST-запросов и вебхуков для старта работы. Сервер мгновенно вернёт готовое изображение или placeholder.
        </p>
        <!-- Самый простой запрос -->
        <h6 class="use-text-subtitle2 mt-4 mb-2">Самый простой запрос:</h6>
        <div class="card paper pa-3 text-left mb-2" style="background: #1e1e1e; border-radius: 8px;">
          <code style="color: #ce9178; font-size: 15px; word-break: break-all;">
            https://pixinlink.ru/api/v1/800x400/кофе-на-столе-утром
          </code>
        </div>
        <p class="body-2 text-muted">→ Результат: готовое изображение 800×400px.</p>
      </div>
    </div>
  </div>
  <!-- КОНТЕНТ: TL;DR, Факты и Схема -->
  <div class="container" id="api-intro">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1">
        <!-- TL;DR -->
        <div class="card paper pa-4 mb-5" style="background: #f1f8e9; border-left: 4px solid #4CAF50; box-shadow: none;">
          <h5 class="headline mb-2" style="color: #2E7D32;">TL;DR</h5>
          <p class="body-1 m-0" style="line-height: 1.6;">
            URL API PixInLink = <strong>GET-запрос → изображение</strong> (или 302 редирект из CDN-кеша).<br>
            <strong>Обязательные параметры:</strong> <code>{width}x{height}</code> в пути и <code>/{prompt}</code> (текст описания изображения).<br>
            <strong>Ключевые опции:</strong> <code>style=</code> (6 значений), <code>seed=</code> (фиксация), <code>format=</code> (webp/avif/png).<br>
            <strong>Аутентификация:</strong> Bearer-токен для тарифов Starter+, без токена для Free.<br>
            Справочник ниже — всё для copy-paste.
          </p>
        </div>
        <!-- Ключевые факты (Key Facts) -->
        <h3 class="display-2 mb-4" style="font-size: 24px; font-weight: 700;">Ключевые факты</h3>
        <ul class="body-1 mb-5" style="line-height: 1.8; list-style: none; padding-left: 0;">
          <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>Один GET-запрос → изображение:</strong> POST не нужен, тело запроса не нужно.</li>
          <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>6 стилей:</strong> realistic, illustration, 3d, pixel-art, cyberpunk, anime.</li>
          <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>CDN-кеш 1 год:</strong> SHA256-хеш URL → immutable cache.</li>
          <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>500 символов:</strong> максимальная длина промпта (обрезается).</li>
          <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>Seed диапазон:</strong> 1–2 147 483 647 → для воспроизводимых результатов.</li>
          <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>5 форматов ответа HTTP:</strong> 302 (hit), 200 (miss), 400, 401, 429.</li>
          <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">done</i> <strong>Rate limit:</strong> Free: 5 req/min; Business: 600 req/min.</li>
        </ul>
        <!-- Что такое URL API -->
        <h3 class="display-2 mb-4" style="font-size: 24px; font-weight: 700;">Что такое URL API?</h3>
        <p class="body-1 mb-4" style="line-height: 1.8;">
          <strong>URL API (URL-based API)</strong> — это интерфейс, где все параметры запроса передаются непосредственно в URL-строке, а сервер возвращает готовый ресурс по HTTP GET-запросу. В отличие от стандартного REST API (POST → async job → polling → download), наш URL API можно вставить прямо в HTML, и всю сложную асинхронную работу под капотом выполнит наш сервер. Идеально для статических сайтов (Hugo, Next.js), мета-тегов <code>og:image</code> и email-рассылок.
        </p>
        <!-- Схема архитектуры (Cache Hit / Miss) -->
        <h3 class="display-1 mb-4 mt-5" style="font-size: 24px; font-weight: 700;">Как работает запрос (Архитектура)</h3>
        <div class="card paper pa-4 mb-5" style="background: #fdfdfd; border: 1px solid #eee;">
          <ol class="body-1 m-0" style="line-height: 1.8; padding-left: 20px;">
            <li class="mb-2"><strong>Шаг 1:</strong> Клиент отправляет GET-запрос к <code>pixinlink.ru</code>.</li>
            <li class="mb-2"><strong>Шаг 2:</strong> Мы вычисляем SHA256 хеш от всех переданных параметров и проверяем CDN.</li>
            <li class="mb-2 text-success">
              <strong>Шаг 3a (Cache Hit):</strong> Возвращаем HTTP <code>302 Found</code> на CDN URL. Клиент получает картинку мгновенно.
            </li>
            <li class="mb-0 text-warning" style="color: #ff9800 !important;">
              <strong>Шаг 3b (Cache Miss):</strong> Возвращаем HTTP <code>200 OK</code> с цветным SVG placeholder-ом ("Generating image..."). В фоне запускается AI-пайплайн (Перевод → Kandinsky → WebP → CDN). Следующий запрос (через 3–8 сек) вернёт 302 из шага 3a.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  <!-- КОНТЕНТ: Справочник параметров -->
  <div class="container" id="api-parameters">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1">
        <!-- PATH PARAMETERS -->
        <h3 class="display-1 mb-4 mt-5" style="font-size: 24px; font-weight: 700;">Path Parameters (обязательные)</h3>
        <p class="body-1 mb-4">Параметры пути передаются непосредственно в структуре URL до знака вопроса <code>?</code>. Порядок строгий: <code>/{width}x{height}/{background_hex}/{foreground_hex}</code>.</p>
        <div class="card paper pa-0 mb-4 overflow-hidden">
          <div class="table-responsive">
            <table class="highlight striped m-0">
              <thead style="background-color: #f5f5f5;">
                <tr>
                  <th>Параметр</th>
                  <th>Тип</th>
                  <th>Обязательный</th>
                  <th>Пример</th>
                  <th>Ограничения</th>
                </tr>
              </thead>
              <tbody class="body-2">
                <tr>
                  <td><code>width</code></td>
                  <td>integer</td>
                  <td><span class="text-success">✅ Да</span></td>
                  <td>1200</td>
                  <td>16–8192 px (clamped)</td>
                </tr>
                <tr>
                  <td><code>height</code></td>
                  <td>integer</td>
                  <td><span class="text-success">✅ Да</span></td>
                  <td>630</td>
                  <td>16–8192 px (clamped)</td>
                </tr>
                <tr>
                  <td><code>background_hex</code></td>
                  <td>string</td>
                  <td><span class="text-success">✅ Рекомендован</span></td>
                  <td>ffffff</td>
                  <td>6-знач. HEX без <code>#</code></td>
                </tr>
                <tr>
                  <td><code>foreground_hex</code></td>
                  <td>string</td>
                  <td><span class="text-success">✅ Рекомендован</span></td>
                  <td>000000</td>
                  <td>6-знач. HEX без <code>#</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <p class="body-2 text-muted mb-5">
          <strong>Примечание:</strong> Значения размеров вне диапазона «зажимаются» (clamped) без ошибки. Параметры цвета (bg/fg) — это визуальная подсказка для нейросети, а не жесткое правило.
        </p>
        <!-- QUERY PARAMETERS -->
        <h3 class="display-1 mb-4 mt-5" style="font-size: 24px; font-weight: 700;">Query Parameters (опциональные)</h3>
        <!-- 1. prompt -->
        <h5 class="headline mb-2 text-primary" id="param-prompt">1. prompt — Текстовое описание</h5>
        <p class="body-2 text-muted mb-3">Обязательный параметр (в строке запроса или в slug-пути). Максимум 500 символов (обрезается без ошибки).</p>
        <ul class="body-1 mb-4">
          <li><strong>Поведение:</strong> Если промпт короткий (1-3 слова), AI автоматически добавляет дескрипторы для улучшения качества. Русский язык (Kandinsky 3.1) поддерживается нативно.</li>
          <li><strong>Кодирование:</strong> Обязательно используйте URL-encode (пробелы = <code>%20</code> или <code>+</code>).</li>
        </ul>
        <!-- 2. style -->
        <h5 class="headline mb-2 text-primary mt-5" id="param-style">2. style — Художественный стиль</h5>
        <div class="card paper pa-0 mb-4 overflow-hidden">
          <div class="table-responsive">
            <table class="highlight striped m-0">
              <thead style="background-color: #f5f5f5;">
                <tr>
                  <th>Значение (enum)</th>
                  <th>Описание</th>
                  <th>Рекомендованный bg / fg</th>
                </tr>
              </thead>
              <tbody class="body-2">
                <tr><td><code>realistic</code> (default)</td><td>Фотореализм (люди, еда, интерьеры)</td><td>ffffff / 000000</td></tr>
                <tr><td><code>illustration</code></td><td>Цифровая живопись (персонажи)</td><td>fef9e7 / 2c3e50</td></tr>
                <tr><td><code>3d</code></td><td>Blender-стиль (продукты, техника)</td><td>f0f0f0 / 333333</td></tr>
                <tr><td><code>pixel-art</code></td><td>16/32-bit графика (ретро, игры)</td><td>0d0d0d / 39ff14</td></tr>
                <tr><td><code>cyberpunk</code></td><td>IT, sci-fi, неон</td><td>0d0d0d / ff2d78</td></tr>
                <tr><td><code>anime</code></td><td>Аниме/манга стиль</td><td>87ceeb / ffffff</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 3. seed -->
        <h5 class="headline mb-2 text-primary mt-5" id="param-seed">3. seed — Фиксация результата</h5>
        <p class="body-1 mb-3">Тип: <code>integer</code> (1–2 147 483 647). Если не передан — при каждом новом запросе (cache-miss) генерируется уникальное изображение. Если передан — комбинация «тот же prompt + тот же seed» всегда возвращает одну и ту же картинку. Незаменимо для <code>og:image</code>.</p>
        <div class="row">
          <div class="col-md-6">
            <h6 class="use-text-subtitle2 mt-2 mb-2">PHP (Алгоритм из slug)</h6>
            <div class="card paper pa-3 text-left mb-3" style="background: #1e1e1e; border-radius: 8px;">
              <pre style="margin: 0; white-space: pre-wrap;"><code style="color: #d4d4d4; font-size: 13px;"><span style="color: #569cd6;">function</span> <span style="color: #dcdcaa;">pixinlink_seed</span>(<span style="color: #4ec9b0;">string</span> <span style="color: #9cdcfe;">$slug</span>): <span style="color: #4ec9b0;">int</span> {
    <span style="color: #c586c0;">return</span> <span style="color: #dcdcaa;">abs</span>(<span style="color: #dcdcaa;">crc32</span>(<span style="color: #9cdcfe;">$slug</span>)) % <span style="color: #b5cea8;">2147483647</span>;
}</code></pre>
            </div>
          </div>
          <div class="col-md-6">
            <h6 class="use-text-subtitle2 mt-2 mb-2">JavaScript</h6>
            <div class="card paper pa-3 text-left mb-3" style="background: #1e1e1e; border-radius: 8px;">
              <pre style="margin: 0; white-space: pre-wrap;"><code style="color: #d4d4d4; font-size: 13px;"><span style="color: #569cd6;">function</span> <span style="color: #dcdcaa;">getSeed</span>(<span style="color: #9cdcfe;">slug</span>) {
  <span style="color: #569cd6;">let</span> hash = <span style="color: #b5cea8;">0</span>;
  <span style="color: #c586c0;">for</span> (<span style="color: #569cd6;">let</span> i=<span style="color: #b5cea8;">0</span>; i&lt;slug.<span style="color: #4ec9b0;">length</span>; i++) {
    hash = ((hash &lt;&lt; <span style="color: #b5cea8;">5</span>) - hash) + slug.<span style="color: #dcdcaa;">charCodeAt</span>(i);
  }
  <span style="color: #c586c0;">return</span> Math.<span style="color: #dcdcaa;">abs</span>(hash) % <span style="color: #b5cea8;">2147483647</span> || <span style="color: #b5cea8;">1</span>;
}</code></pre>
            </div>
          </div>
        </div>
        <!-- 4. format -->
        <h5 class="headline mb-2 text-primary mt-5" id="param-format">4. format — Формат вывода</h5>
        <div class="card paper pa-0 mb-4 overflow-hidden">
          <div class="table-responsive">
            <table class="highlight striped m-0">
              <thead style="background-color: #f5f5f5;">
                <tr>
                  <th>Формат</th>
                  <th>Сжатие</th>
                  <th>Поддержка</th>
                  <th>Когда использовать</th>
                </tr>
              </thead>
              <tbody class="body-2">
                <tr><td><code>webp</code> (default)</td><td>~80% vs JPEG</td><td>Все современные</td><td>Оптимальный выбор по умолчанию</td></tr>
                <tr><td><code>avif</code></td><td>~50% vs JPEG</td><td>Chrome 85+, Safari 16+</td><td>Для максимальной скорости LCP</td></tr>
                <tr><td><code>png</code></td><td>Lossless</td><td>Все браузеры</td><td>Для прозрачного фона (RGBA)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 5. watermark & callback -->
        <div class="row">
          <div class="col-md-6">
            <h5 class="headline mb-2 text-primary mt-5" id="param-watermark">5. watermark</h5>
            <p class="body-2 mb-3">Управление водяным знаком (boolean). На тарифе Free игнорируется (всегда <code>true</code>). На Starter, Pro и Business по умолчанию <code>false</code>.</p>
            <p class="body-2"><code>&amp;watermark=false</code> — убрать (Starter+).</p>
          </div>
          <div class="col-md-6">
            <h5 class="headline mb-2 text-primary mt-5" id="param-callback">6. callback (Webhook)</h5>
            <p class="body-2 mb-3">Тип: URL. Доступно для Pro+. Сервер отправит POST-запрос с JSON-payload, когда генерация завершится. Идеально для прогрева кеша.</p>
          </div>
        </div>
        <div class="card paper pa-3 text-left mb-5" style="background: #1e1e1e; border-radius: 8px;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="color: #ce9178; font-size: 13px;"><span style="color: #6a9955;">// Пример payload на ваш callback URL</span>
{
  <span style="color: #9cdcfe;">"job_id"</span>: <span style="color: #ce9178;">"job_abc123"</span>,
  <span style="color: #9cdcfe;">"status"</span>: <span style="color: #ce9178;">"done"</span>,
  <span style="color: #9cdcfe;">"url"</span>: <span style="color: #ce9178;">"https://cdn.pixinlink.ru/images/ab/cd/ef123.webp"</span>,
  <span style="color: #9cdcfe;">"prompt"</span>: <span style="color: #ce9178;">"офис разработчиков"</span>
}</code></pre>
        </div>
      </div>
    </div>
  </div>
  <!-- КОНТЕНТ: Аутентификация и Коды ответов -->
  <div class="container" id="api-auth-errors">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1">
        <!-- Аутентификация -->
        <h3 class="display-1 mb-4 mt-5" style="font-size: 24px; font-weight: 700;">Аутентификация</h3>
        <p class="body-1 mb-3">API поддерживает две схемы работы: анонимную (Free-тариф) и авторизованную (Starter+). Для авторизации используется стандартный заголовок <code>Authorization: Bearer</code>.</p>
        <div class="row mb-5">
          <div class="col-md-6">
            <h6 class="use-text-subtitle2 mb-2">1. Free тариф (Без токена)</h6>
            <div class="card paper pa-3 text-left mb-2" style="background: #1e1e1e; border-radius: 8px;">
              <code style="color: #ce9178; font-size: 13px;">GET https://pixinlink.ru/800x400/офис</code>
            </div>
            <p class="body-2 text-muted">Лимит 50 генераций/мес. Водяной знак.</p>
          </div>
          <div class="col-md-6">
            <h6 class="use-text-subtitle2 mb-2">2. Starter+ (Bearer Token)</h6>
            <div class="card paper pa-3 text-left mb-2" style="background: #1e1e1e; border-radius: 8px;">
              <pre style="margin: 0; white-space: pre-wrap;"><code style="color: #ce9178; font-size: 13px;">GET https://pixinlink.ru/800x400/офис
Authorization: Bearer pk_live_вашключ</code></pre>
            </div>
            <p class="body-2 text-muted">Полные права, без watermark.</p>
          </div>
        </div>
        <!-- Коды ответов HTTP -->
        <h3 class="display-1 mb-4 mt-5" style="font-size: 24px; font-weight: 700;">Коды ответов HTTP</h3>
        <p class="body-1 mb-4">API использует стандартные HTTP-коды. При успешном попадании в кэш возвращается <code>302 Found</code>, при промахе — <code>200 OK</code> с временным SVG (и запускается фоновая генерация).</p>
        <div class="card paper pa-0 mb-4 overflow-hidden">
          <div class="table-responsive">
            <table class="highlight striped m-0">
              <thead style="background-color: #f5f5f5;">
                <tr>
                  <th>Код</th>
                  <th>Статус</th>
                  <th>Описание</th>
                  <th>Как обработать</th>
                </tr>
              </thead>
              <tbody class="body-2">
                <tr>
                  <td><span class="badge" style="background: #4CAF50; color: white;">200</span></td>
                  <td>OK</td>
                  <td>Cache miss: отдаётся placeholder SVG</td>
                  <td>Показать placeholder, img перезагрузится</td>
                </tr>
                <tr>
                  <td><span class="badge" style="background: #2196F3; color: white;">302</span></td>
                  <td>Found</td>
                  <td>Cache hit: редирект на CDN-ссылку</td>
                  <td>Браузер автоматически следует редиректу</td>
                </tr>
                <tr>
                  <td><span class="badge" style="background: #FF9800; color: white;">400</span></td>
                  <td>Bad Request</td>
                  <td>Ошибка в параметрах запроса</td>
                  <td>Проверить JSON, поле <code>field</code></td>
                </tr>
                <tr>
                  <td><span class="badge" style="background: #f44336; color: white;">401</span></td>
                  <td>Unauthorized</td>
                  <td>Неверный или отсутствующий API-ключ</td>
                  <td>Проверить заголовок Authorization</td>
                </tr>
                <tr>
                  <td><span class="badge" style="background: #f44336; color: white;">429</span></td>
                  <td>Too Many Req.</td>
                  <td>Превышен Rate Limit или месячная квота</td>
                  <td>Ждать <code>retry_after</code> или сброса квоты</td>
                </tr>
                <tr>
                  <td><span class="badge" style="background: #9C27B0; color: white;">502</span></td>
                  <td>Bad Gateway</td>
                  <td>AI провайдер временно недоступен</td>
                  <td>Повторить запрос через 10-20 сек</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- Пример 400 Bad Request -->
        <h6 class="use-text-subtitle2 mt-4 mb-2">Пример тела ответа (400 Bad Request):</h6>
        <div class="card paper pa-3 text-left mb-5" style="background: #1e1e1e; border-radius: 8px;">
          <pre style="margin: 0; white-space: pre-wrap;"><code style="color: #9cdcfe; font-size: 13px;">{
  <span style="color: #ce9178;">"error"</span>: <span style="color: #ce9178;">"invalid_parameter"</span>,
  <span style="color: #ce9178;">"detail"</span>: <span style="color: #ce9178;">"width must be between 16 and 8192"</span>,
  <span style="color: #ce9178;">"field"</span>: <span style="color: #ce9178;">"width"</span>
}</code></pre>
        </div>
        <!-- Rate Limits и квоты -->
        <h3 class="display-1 mb-4 mt-5" style="font-size: 24px; font-weight: 700;">Rate Limits и квоты</h3>
        <p class="body-1 mb-4">Cache hit (302) не считается генерацией — квота не расходуется. Списание происходит только при Cache miss (200).</p>
        <div class="card paper pa-0 mb-5 overflow-hidden">
          <div class="table-responsive">
            <table class="highlight striped m-0">
              <thead style="background-color: #f5f5f5;">
                <tr>
                  <th>Тариф</th>
                  <th>Rate Limit (req/min)</th>
                  <th>Квота (генераций/мес)</th>
                  <th>Сброс квоты</th>
                </tr>
              </thead>
              <tbody class="body-2">
                <tr><td>Free</td><td>5</td><td>50</td><td>1-го числа UTC</td></tr>
                <tr><td>Starter</td><td>30</td><td>500</td><td>1-го числа UTC</td></tr>
                <tr><td>Pro</td><td>120</td><td>2 000</td><td>1-го числа UTC</td></tr>
                <tr><td>Business</td><td>600</td><td>10 000</td><td>1-го числа UTC</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- Полный пример URL -->
        <h3 class="display-1 mb-4 mt-5" style="font-size: 24px; font-weight: 700;">Полный пример API-запроса</h3>
        <div class="card paper pa-4 mb-4 text-left" style="background: #1e1e1e; border-radius: 8px;">
          <pre style="margin: 0; white-space: pre-wrap; font-family: monospace; color: #ce9178; font-size: 14px; line-height: 1.5;">GET https://pixinlink.ru/1200x630/{промпт}
<span style="color: #9cdcfe;">?prompt</span>=современный%20офис%20разработчиков%20вечер
<span style="color: #9cdcfe;">&amp;style</span>=realistic
<span style="color: #9cdcfe;">&amp;seed</span>=20260515
<span style="color: #9cdcfe;">&amp;format</span>=webp
<span style="color: #9cdcfe;">&amp;watermark</span>=false
<span style="color: #9cdcfe;">&amp;callback</span>=https%3A%2F%2Fmysite.ru%2Fhook
<span style="color: #569cd6;">Authorization:</span> Bearer pk_live_вашключздесь</pre>
        </div>
      </div>
    </div>
  </div>
  <!-- CALL TO ACTION -->
  <div class="container mb-5" id="cta-block">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1 text-center">
        <div class="card paper pa-5" style="border-radius: 12px; background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);">
          <h3 class="use-text-title2 mb-3">Попробуйте прямо сейчас</h3>
          <p class="use-text-subtitle2 mb-4">50 бесплатных генераций. Вставьте URL прямо в браузер.</p>
          <a href="https://pixinlink.ru/pricing/" class="btn primary waves-effect px-5 py-2 mr-3 mb-2" style="border-radius: 30px; font-size: 1rem;">Получить API-ключ</a>
          <a href="https://github.com/pixinlink/api-examples" target="_blank" class="btn outline primary waves-effect px-5 py-2 mb-2" style="border-radius: 30px; font-size: 1rem;">Примеры кода GitHub</a>
        </div>
      </div>
    </div>
  </div>
</main>
