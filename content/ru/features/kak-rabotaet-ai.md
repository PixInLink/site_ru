---
title: "Как работает ИИ-генерация в PixInLink: от URL до изображения"
description: "Разбор пайплайна PixInLink: GigaChat, синхронная генерация, Redis-кеш, WebP-оптимизация, seed и водяной знак. Инфраструктура в РФ — 152-ФЗ."
slug: "features/kak-rabotaet-ai"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "WebPage"
---
<main class="container-wrap container-pages">

<!-- HERO -->
<div class="container mt-5 pt-5 mb-4" id="how-ai-works-header">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="d-flex align-items-center mb-3">
        <a href="https://pixinlink.ru/features/" class="badge" style="background:#e8eaf6;color:#3949ab;border-radius:4px;padding:5px 10px;">Возможности</a>
        <span class="ml-2 text-muted" style="font-size:14px;">/</span>
        <span class="ml-2 text-muted" style="font-size:14px;">Как работает ИИ-генерация</span>
      </div>
      <h1 class="use-text-title2">Как работает ИИ-генерация в PixInLink</h1>
      <p class="use-text-subtitle2 text-muted" style="font-size:1.2rem;line-height:1.6;">
        Разбор реального пайплайна: GigaChat, синхронная генерация, Redis-кеш, WebP-оптимизация
      </p>
      <div class="card paper pa-4 mt-4" style="background:linear-gradient(135deg,#e8eaf6 0%,#e3f2fd 100%);border:1px solid #c5cae9;border-radius:12px;">
        <p class="body-1 mb-0" style="line-height:1.85;">
          Когда вы вставляете
          <code>pixinlink.ru/800x400/офис-программисты</code> в <code>img src</code>,
          происходит следующее: API принимает URL → проверяет Redis-кеш →
          если изображения нет — генерирует синхронно через <strong>GigaChat</strong> →
          оптимизирует WebP → сохраняет в Redis-кеш.
          <strong>Первый запрос: 10–30 секунд.</strong> Все последующие: <strong>менее 100 мс.</strong>
        </p>
      </div>
      <div class="mt-4 d-flex flex-wrap" style="gap:12px;">
        <a href="https://pixinlink.ru/docs/getting-started/" class="btn primary waves-effect"
           style="padding:2px 24px;font-weight:600;border-radius:8px;">
          Начать за 60 секунд
        </a>
        <a href="https://pixinlink.ru/features/url-api/" class="btn btn-outlined primary waves-effect"
           style="padding:2px 24px;border-radius:8px;">
          Документация URL API →
        </a>
      </div>
    </div>
  </div>
</div>
<!-- TL;DR -->
<div class="container" id="how-ai-works-tldr">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="card paper pa-4 mb-5" style="background:#f8fff7;border-left:4px solid #43a047;box-shadow:none;">
        <h3 class="headline mb-3" style="font-size:20px;color:#2e7d32;">TL;DR</h3>
        <p class="body-1 m-0" style="line-height:1.9;font-family:monospace;font-size:14px;">
          URL → проверка Redis-кеша →<br>
          &nbsp;&nbsp;• Кеш есть (cache hit): изображение отдаётся мгновенно, квота не тратится<br>
          &nbsp;&nbsp;• Кеша нет (cache miss): синхронная генерация через GigaChat<br>
          &nbsp;&nbsp;&nbsp;&nbsp;→ оптимизация WebP → запись в Redis-кеш → возврат<br>
          Первый запрос = <strong>10–30 секунд</strong> (генерация GigaChat).<br>
          Все повторные = <strong>менее 100 мс</strong> (Redis-кеш).<br>
          Инфраструктура: <strong>Yandex Cloud + SberCloud</strong>, 152-ФЗ, Россия.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- КЛЮЧЕВЫЕ ПОНЯТИЯ -->
<div class="container" id="how-ai-works-definitions">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Ключевые понятия</h2>
      <div class="row mb-5">
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #e53935;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">GigaChat</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Российская нейросеть от Сбера для генерации изображений по текстовому описанию. Вызывается синхронно через HTTP API. Хостинг: SberCloud, Россия (152-ФЗ).</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #3949ab;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Синхронная генерация</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Когда изображения нет в кеше, запрос ожидает ответа от GigaChat напрямую — без очередей и отложенной обработки. Это простой и надёжный подход: один HTTP-запрос → один ответ.</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #e53935;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Redis-кеш</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Сгенерированное изображение (base64) сохраняется в Redis. При повторном запросе того же URL изображение отдаётся из кеша мгновенно — без вызова GigaChat и без расхода квоты.</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #43a047;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Cache miss / Cache hit</h4>
            <p class="body-2 m-0" style="line-height:1.75;"><strong>Cache miss:</strong> изображения нет в Redis → синхронная генерация через GigaChat (10–30 сек). <strong>Cache hit:</strong> изображение найдено в Redis → отдаётся мгновенно (&lt;100 мс), квота не расходуется.</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #00838f;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Transliteration</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Кириллический промпт побуквенно преобразуется в латиницу: «офис» → «ofis». Простая и быстрая операция без внешних API — выполняется в prompt.py перед отправкой в GigaChat.</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #8e24aa;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">WebP-оптимизация</h4>
            <p class="body-2 m-0" style="line-height:1.75;">После генерации изображение сжимается в WebP (quality=85). Типичный размер: ~50 KB вместо ~300 KB PNG — в 6 раз меньше. Быстрее загрузка, лучше PageSpeed.</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #1976d2;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Диффузионная модель</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Класс нейросетей, обученных генерировать изображения из случайного шума под управлением текста. GigaChat не хранит готовые фото — он создаёт их заново каждый раз. Аналогия: не библиотека, а художник, который рисует по описанию.</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #fb8c00;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Водяной знак</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Для пользователей без регистрации на изображение накладывается текст «Made with PixInLink.com» через PIL ImageDraw. Вшивается в пиксели — нельзя убрать через CSS или DevTools. На платных тарифах водяной знак отсутствует.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ВВЕДЕНИЕ -->
<div class="container" id="how-ai-works-intro">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-3" style="font-size:24px;font-weight:700;">Как работает «магия»?</h2>
      <p class="body-1 mb-4" style="line-height:1.85;">
        Вы вставляете URL в HTML, а браузер получает уникальное изображение. Откуда оно берётся?
        <strong>Это не стоковое фото.</strong> Это не шаблон из базы данных.
        Это генерация искусственным интеллектом — специально для вашего запроса, в реальном времени.
      </p>
      <p class="body-1 mb-4" style="line-height:1.85;">
        Если вы впервые запрашиваете изображение, нейросеть GigaChat рисует его синхронно —
        вы получите ответ через <strong>10–30 секунд</strong>. Это холодный старт.
        После генерации изображение сохраняется в Redis-кеш — все последующие запросы отдаются мгновенно (&lt;100 мс).
      </p>
      <div class="card paper pa-4 mb-5" style="background:#fff8e1;border-left:4px solid #ffb300;">
        <p class="body-1 m-0" style="line-height:1.75;">
          <strong>Почему это важно:</strong> запросы о «медленности» и «стоковости» — самые частые
          у новых пользователей. Эта страница отвечает на оба: медленность — это первый запрос к нейросети,
          уникальность — это диффузионная модель, а не база фотографий.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- FEATURED SNIPPET -->
<div class="container" id="how-ai-works-snippet">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-3" style="font-size:24px;font-weight:700;">Как PixInLink генерирует изображения из URL?</h2>
      <div class="card paper pa-4 mb-5" style="background:#f3f8ff;border:1px solid #bbdefb;border-radius:10px;">
        <p class="body-1 m-0" style="line-height:1.85;">
          PixInLink принимает URL вида <code>pixinlink.ru/800x400/офис-разработчиков</code>,
          проверяет Redis-кеш. Если изображение уже генерировалось
          — возвращает его мгновенно (<strong>&lt;100 мс</strong>), квота не тратится. Если нет —
          промпт проходит побуквенную транслитерацию и отправляется в
          <strong>GigaChat</strong> (Сбер).
          Результат оптимизируется в WebP (quality=85, ~50 KB),
          сохраняется в Redis-кеш и возвращается браузеру.
          Первый запрос: <strong>10–30 секунд</strong>. Повторные: <strong>менее 100 мс</strong>.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- ПАЙПЛАЙН ПО ШАГАМ -->
<div class="container" id="how-ai-works-pipeline">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Пайплайн: что происходит при запросе</h2>
      <!-- Шаг 1 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #3949ab;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#3949ab;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">1</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Браузер → API</h3>
            <span class="body-2 text-muted">0–5 мс</span>
          </div>
        </div>
        <p class="body-2 mb-2">Браузер отправляет GET-запрос. API на <strong>FastAPI</strong> принимает и парсит URL.</p>
        <div class="pa-3" style="background:#1e1e1e;border-radius:6px;">
          <code style="color:#9cdcfe;font-size:12px;">GET /800x400/офис-программисты?style=realistic&seed=42</code>
        </div>
        <p class="body-2 mt-2 mb-0 text-muted">Валидация: width/height в допустимых пределах, prompt не пустой.</p>
      </div>
      <!-- Шаг 2 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #43a047;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#43a047;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">2</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Проверка Redis-кеша</h3>
            <span class="body-2 text-muted">1–3 мс</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="pa-2 mb-2" style="background:#e8f5e9;border-radius:6px;">
              <p class="body-2 mb-0"><strong style="color:#2e7d32;">✅ Cache HIT:</strong> изображение найдено в Redis → мгновенный возврат (&lt;100 мс). <strong>Квота не тратится.</strong></p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pa-2 mb-2" style="background:#ffebee;border-radius:6px;">
              <p class="body-2 mb-0"><strong style="color:#c62828;">🔴 Cache MISS:</strong> изображения нет → переходим к шагу 3.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Шаг 3 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #fb8c00;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#fb8c00;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">3</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Transliteration — подготовка промпта</h3>
            <span class="body-2 text-muted"><1 мс</span>
          </div>
        </div>
        <p class="body-2 mb-2">Кириллический промпт побуквенно заменяется на латиницу: «офис разработчиков» → «ofis razrabotchikov». Простая функция в <code>prompt.py</code> без внешних API.</p>
        <p class="body-2 mb-0 text-muted">Это всё, что нужно GigaChat для понимания русского промпта — нейросеть обучена на русскоязычных данных и корректно интерпретирует транслитерацию.</p>
      </div>
      <!-- Шаг 4 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #e53935;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#e53935;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">4</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Генерация через GigaChat</h3>
            <span class="body-2 text-muted">8–25 сек</span>
          </div>
        </div>
        <div class="pa-3 mb-2" style="background:#e8eaf6;border-radius:8px;">
          <p class="body-2 mb-1"><strong>GigaChat — российская нейросеть от Сбера</strong></p>
          <p class="body-2 mb-0">Генерация изображений по текстовому промпту через HTTP API. Запрос отправляется синхронно — API ожидает ответа и возвращает его браузеру. Хостинг: SberCloud (Россия, 152-ФЗ).</p>
        </div>
        <div class="mt-2 pa-2" style="background:#fff8e1;border-radius:6px;">
          <p class="body-2 m-0">💡 <strong>Fallback:</strong> при таймауте или ошибке GigaChat запрос повторяется автоматически. Если и это не помогло — возвращается ошибка.</p>
        </div>
      </div>
      <!-- Шаг 5 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #00838f;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#00838f;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">5</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Постобработка: WebP + водяной знак</h3>
            <span class="body-2 text-muted">0.3–0.5 сек</span>
          </div>
        </div>
        <ol class="body-2 mb-0" style="line-height:1.9;padding-left:20px;">
          <li><strong>Decode:</strong> base64 ответ GigaChat → PIL Image</li>
          <li><strong>Resize:</strong> точное кадрирование до запрошенных width×height</li>
          <li><strong>Watermark (только анонимы):</strong> текст «Made with PixInLink.com» накладывается через PIL ImageDraw. Вшивается в пиксели — нельзя убрать через CSS</li>
          <li><strong>WebP:</strong> сжатие quality=85, метод 6 → ~50 KB вместо ~300 KB PNG</li>
          <li><strong>Очистка метаданных:</strong> все EXIF/IPTC удаляются</li>
        </ol>
      </div>
      <!-- Шаг 6 -->
      <div class="card paper pa-4 mb-5" style="border-left:4px solid #43a047;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#43a047;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">6</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Сохранение в Redis-кеш и возврат</h3>
            <span class="body-2 text-muted">1–3 мс</span>
          </div>
        </div>
        <p class="body-2 mb-2">Готовое изображение сохраняется в Redis-кеш для мгновенной отдачи при повторных запросах. HTTP-ответ возвращается браузеру с заголовками кеширования.</p>
        <p class="body-2 mb-0 text-muted">Ключ кеша формируется из размеров и наличия водяного знака: <code>gen:800x400</code>. Квота списывается однократно при первой генерации. Все повторные запросы того же URL идут из кеша — без расхода квоты.</p>
      </div>
    </div>
  </div>
</div>
<!-- CACHE MISS vs CACHE HIT -->
<div class="container" id="how-ai-works-cache">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Почему первый запрос медленный, а повторный мгновенный?</h2>
      <div class="card paper pa-4 mb-4" style="background:#fff8e1;border-left:4px solid #ffb300;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">🎂 Аналогия: кондитерская</h4>
        <p class="body-1 m-0" style="line-height:1.85;">
          Представьте, что вы заказываете торт в кондитерской. Первый раз — кондитер печёт его
          специально для вас (10–30 минут). Но умный кондитер знает: если кто-то закажет такой же —
          он уже есть в витрине. Следующий покупатель получит его мгновенно.
          PixInLink работает так же: первая генерация — приготовление,
          все последующие — готовое изображение в Redis-кеше.
        </p>
      </div>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Параметр</th><th style="background:#ffebee;">Cache MISS</th><th style="background:#e8f5e9;">Cache HIT</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td>Время ответа</td><td>10–30 секунд</td><td style="color:#2e7d32;font-weight:700;">&lt;100 мс</td></tr>
              <tr><td>Что происходит</td><td>Генерация GigaChat</td><td>Выдача из Redis-кеша</td></tr>
              <tr><td>Расход квоты</td><td>Да, 1 генерация</td><td style="color:#2e7d32;font-weight:700;">Нет</td></tr>
              <tr><td>Когда происходит</td><td>Первый запрос</td><td>Все повторные</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card paper pa-3 mb-5" style="background:#e8f5e9;border-left:4px solid #43a047;">
        <p class="body-2 m-0">
          💡 <strong>500 генераций на Starter</strong> — это 500 уникальных URL.
          Один и тот же URL можно запрашивать любое количество раз — квота тратится 1 раз при первой генерации.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- УНИКАЛЬНОСТЬ -->
<div class="container" id="how-ai-works-uniqueness">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Гарантия уникальности: это не стоковые фото</h2>
      <p class="body-1 mb-4" style="line-height:1.85;">
        Каждое изображение — новая нейросетевая генерация. GigaChat — диффузионная модель:
        она не хранит готовые фотографии, а создаёт изображения из случайного шума,
        управляемого текстовым описанием.
      </p>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Миф</th><th>Факт</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td>❌ PixInLink берёт фото из стоков</td><td>✅ Генерация через GigaChat (диффузионная нейросеть)</td></tr>
              <tr><td>❌ Изображения совпадут у разных пользователей</td><td>✅ seed=random → каждый раз разные</td></tr>
              <tr><td>❌ Нарушаются авторские права</td><td>✅ GigaChat обучен на лицензионных данных Сбера</td></tr>
              <tr><td>❌ Изображение изменится со временем</td><td>✅ Redis-кеш хранит стабильную копию</td></tr>
              <tr><td>❌ Первый медленный запрос — это баг</td><td>✅ Синхронная генерация: нейросеть рисует впервые для этого промпта</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ИНФРАСТРУКТУРА -->
<div class="container" id="how-ai-works-infra">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Инфраструктура: всё в России</h2>
      <p class="body-1 mb-4" style="line-height:1.85;">
        Вся инфраструктура PixInLink размещена на территории РФ в соответствии с 152-ФЗ.
        Данные не передаются за рубеж.
      </p>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#e8eaf6;">
              <tr><th>Компонент</th><th>Провайдер</th><th>Локация</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td>API Gateway</td><td>Yandex Cloud</td><td>Москва / Ярославль</td></tr>
              <tr><td>Redis (кеш изображений)</td><td>Yandex Managed Redis</td><td>Россия</td></tr>
              <tr><td>PostgreSQL</td><td>Yandex Managed PostgreSQL</td><td>Россия</td></tr>
              <tr><td>AI-модель</td><td>GigaChat (Сбер)</td><td>SberCloud, Россия</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card paper pa-3 mb-5" style="background:#e8f5e9;border:1px solid #a5d6a7;border-radius:8px;">
        <p class="body-2 m-0">
          <strong>Надёжность:</strong> при таймауте или ошибке GigaChat запрос повторяется.
          Базовая обработка ошибок с retry — без сложной fallback-архитектуры, просто и надёжно.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- SEED -->
<div class="container" id="how-ai-works-seed">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Seed: воспроизводимые изображения для og:image</h2>
      <p class="body-1 mb-3" style="line-height:1.85;">
        <strong>Seed</strong> — это «рецепт» изображения. Добавьте <code>&seed=42</code> в URL — и PixInLink
        всегда сгенерирует одно и то же изображение для одного промпта. Без seed — каждый раз разное.
        С seed — всегда одинаковое.
      </p>
      <div class="card paper pa-4 mb-4" style="background:#f3f8ff;border:1px solid #bbdefb;border-radius:8px;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как это работает в GigaChat</h4>
        <p class="body-2 mb-2">Параметр <code>&seed={число}</code> задаёт начальное значение для генератора случайных чисел. Представьте, что генерация изображения — это бросок кубиков. <code>&seed</code> — это «запись» того, как именно кубики упали.</p>
        <p class="body-2 mb-2"><strong>Воспроизводимость:</strong> один и тот же промпт + один и тот же seed = всегда идентичное изображение. Можно вернуться к результату в любой момент.</p>
        <p class="body-2 mb-0"><strong>Контролируемые вариации:</strong> если нравится композиция, но хотите изменить деталь — оставьте тот же seed и поменяйте часть промпта. GigaChat сохранит общую структуру, изменив только указанный аспект.</p>
      </div>
      <p class="body-1 mb-3" style="line-height:1.75;">
        Для <code>og:image</code> стабильность критична: если сегодня у статьи один og:image,
        а завтра другой — соцсети покажут старую версию из своего кеша. Решение: зафиксируй seed.
      </p>
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #e53935;">
            <h4 class="headline mb-2" style="font-size:14px;font-weight:700;">Без seed</h4>
            <div class="pa-2" style="background:#1e1e1e;border-radius:6px;margin-bottom:8px;">
              <code style="color:#9cdcfe;font-size:11px;">pixinlink.ru/1200x630/кот</code>
            </div>
            <p class="body-2 mb-0">Random seed каждый раз → разные изображения. Подходит для декоративных элементов.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #43a047;">
            <h4 class="headline mb-2" style="font-size:14px;font-weight:700;">С фиксированным seed</h4>
            <div class="pa-2" style="background:#1e1e1e;border-radius:6px;margin-bottom:8px;">
              <code style="color:#a5d6a7;font-size:11px;">pixinlink.ru/1200x630/кот?seed=42</code>
            </div>
            <p class="body-2 mb-0">Стабильный результат. Идеально для og:image и заголовков статей.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #1976d2;">
            <h4 class="headline mb-2" style="font-size:14px;font-weight:700;">Seed из slug (паттерн)</h4>
            <div class="pa-2" style="background:#1e1e1e;border-radius:6px;margin-bottom:8px;">
              <pre style="color:#9cdcfe;font-size:10px;margin:0;">slug = "kak-pit-kofe"
seed = crc32(slug) % 2147483647</pre>
            </div>
            <p class="body-2 mb-0">CRC32 slug → детерминированное число. Каждый slug = уникальное, но стабильное изображение.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- FAQ -->
<div class="container" id="how-ai-works-faq">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Частые вопросы</h2>
      <div class="faq-style mb-5">
        <div class="root">
          <div class="accordion">
            <ul class="collapsible">
              <li class="accordion-content paper active">
                <div class="collapsible-header content">
                  <p class="heading">Почему первое изображение генерируется медленнее?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Cache miss — нейросеть GigaChat синхронно рисует изображение для этого запроса. Обычно 10–30 секунд. Все повторные запросы отдаются из Redis-кеша мгновенно (&lt;100 мс), квота не расходуется.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Расходуется ли квота при повторном запросе?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Нет. Cache hit не расходует квоту. 500 генераций на Starter — это 500 уникальных URL. Один URL можно запрашивать любое количество раз — квота тратится 1 раз при первой генерации.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Что такое GigaChat и почему именно он?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>GigaChat — российская нейросеть от Сбера для генерации изображений. Обучена на русскоязычных данных, лучше понимает кириллические промпты. Хостится в России (152-ФЗ). Вызывается через HTTP API синхронно.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Где хранятся сгенерированные изображения?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>В Redis-кеше. При повторном запросе того же URL изображение отдаётся из кеша мгновенно. Срок хранения в кеше ограничен TTL Redis. При очистке кеша следующее обращение вызовет новую генерацию.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Могут ли два пользователя получить одинаковое изображение?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>При одинаковом prompt + seed — да, Redis-кеш отдаст тот же результат. Изображение уникально создано для этого промпта. Хотите гарантированную уникальность — не указывайте seed (random каждый раз).</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Как обрабатываются запрещённые промпты?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>GigaChat имеет встроенный content policy filter. Запросы с недопустимым контентом отклоняются. PixInLink дополнительно проверяет на уровне API Gateway.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Можно ли использовать изображения коммерчески?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Да, на платных тарифах (без watermark) — полные коммерческие права. На Free (с watermark) — личное использование с указанием PixInLink. Подробнее: <a href="https://pixinlink.ru/terms/">pixinlink.ru/terms</a>.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Сколько изображений доступно бесплатно?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>12 изображений бесплатно — без регистрации и кредитной карты. С водяным знаком. Для коммерческого использования без водяного знака — тариф Starter (490 ₽/мес, 500 генераций).</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ФИНАЛЬНЫЙ CTA -->
<div class="container" id="how-ai-works-cta">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="text-center mb-5 pa-5" style="background:linear-gradient(135deg,#e8eaf6 0%,#e3f2fd 100%);border-radius:16px;">
        <h3 class="display-1 mb-3" style="font-size:26px;font-weight:700;">
          Попробуйте пайплайн в действии
        </h3>
        <p class="body-1 text-muted mb-4">12 изображений бесплатно. Без регистрации и кредитной карты.</p>
        <div class="d-flex justify-content-center flex-wrap" style="gap:16px;">
          <a href="https://pixinlink.ru/docs/getting-started/" class="btn primary waves-effect"
             style="padding:2px 32px;font-size:16px;font-weight:600;border-radius:8px;">
            Начать за 60 секунд
          </a>
          <a href="https://pixinlink.ru/pricing/" class="btn secondary waves-effect"
             style="padding:2px 32px;font-size:16px;font-weight:600;border-radius:8px;">
            Starter — 490 ₽/мес
          </a>
        </div>
      </div>
      <!-- Смежные материалы -->
      <div class="row mb-5">
        <div class="col-md-3 mb-3">
          <a href="https://pixinlink.ru/features/url-api/" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <p class="body-2 text-primary mb-1">→ Возможности</p>
            <p class="body-1 mb-0 font-weight-bold">URL API: полный справочник</p>
          </a>
        </div>
        <div class="col-md-3 mb-3">
          <a href="https://pixinlink.ru/docs/getting-started/" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <p class="body-2 text-primary mb-1">→ Документация</p>
            <p class="body-1 mb-0 font-weight-bold">Начало работы за 60 сек</p>
          </a>
        </div>
        <div class="col-md-3 mb-3">
          <a href="https://pixinlink.ru/blog/sravnenie-generatorov/" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <p class="body-2 text-primary mb-1">→ Блог</p>
            <p class="body-1 mb-0 font-weight-bold">PixInLink vs Midjourney vs DALL-E</p>
          </a>
        </div>
        <div class="col-md-3 mb-3">
          <a href="https://pixinlink.ru/integrations/sdk-python/" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <p class="body-2 text-primary mb-1">→ Интеграции</p>
            <p class="body-1 mb-0 font-weight-bold">SDK Python</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
