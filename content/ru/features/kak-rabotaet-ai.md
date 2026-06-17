---
title: "Как работает ИИ-генерация в PixInLink: от URL до изображения за 8 секунд"
description: "Полный технический разбор пайплайна PixInLink: Kandinsky 3.1, FLUX.1, Yandex Translate, WebP-оптимизация, CDN-кеш 1 год, fallback-архитектура и 152-ФЗ."
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
        Полный разбор пайплайна: Kandinsky 3.1, CDN-кеш, fallback FLUX и 152-ФЗ
      </p>
      <div class="card paper pa-4 mt-4" style="background:linear-gradient(135deg,#e8eaf6 0%,#e3f2fd 100%);border:1px solid #c5cae9;border-radius:12px;">
        <p class="body-1 mb-0" style="line-height:1.85;">
          Когда вы вставляете
          <code>pixinlink.ru/800x400/офис-программисты</code> в <code>img src</code>,
          происходит следующее: API принимает URL → вычисляет SHA-256 хеш параметров →
          проверяет кеш → если изображения нет, отправляет задачу в очередь Celery →
          переводит промпт через Yandex Translate → генерирует через <strong>Kandinsky 3.1</strong>
          (или FLUX.1 как резервный) → оптимизирует WebP → сохраняет в Yandex Object Storage →
          кеширует на <strong>1 год</strong> в CDN с 140 точками присутствия.<br><br>
          <strong>Первый запрос: 8–10 секунд.</strong> Все последующие: <strong>менее 100 мс.</strong>
        </p>
      </div>
      <div class="mt-4 d-flex flex-wrap" style="gap:12px;">
        <a href="https://pixinlink.ru/docs/getting-started/" class="btn-flat btn-rounded"
           style="background:#3949ab;color:#fff;padding:10px 24px;font-weight:600;">
          Начать за 60 секунд
        </a>
        <a href="https://pixinlink.ru/features/url-api/" class="btn-flat btn-rounded"
           style="background:#e8eaf6;color:#3949ab;padding:10px 24px;">
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
          URL → SHA-256 хеш → Redis проверка →<br>
          &nbsp;&nbsp;• Кеш есть: 302 CDN URL, <strong>&lt;100 мс</strong>, квота не тратится<br>
          &nbsp;&nbsp;• Кеша нет: SVG placeholder → Celery → Yandex Translate → Kandinsky 3.1<br>
          &nbsp;&nbsp;&nbsp;&nbsp;→ WebP → S3 → CDN (140 POP) → Redis<br>
          Первый запрос = <strong>8 секунд</strong> (генерация).<br>
          Все повторные = <strong>мгновенно</strong> (кеш).<br>
          Инфраструктура: <strong>Yandex Cloud + Selectel</strong>, 152-ФЗ, Россия.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- KEY FACTS -->
<div class="container" id="how-ai-works-keyfacts">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Ключевые факты</h2>
      <div class="row mb-5">
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #3949ab;">
            <div style="font-size:28px;font-weight:700;color:#3949ab;">8 сек</div>
            <p class="body-2 text-muted mb-0">P95 latency первой генерации через Kandinsky 3.1</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #43a047;">
            <div style="font-size:28px;font-weight:700;color:#43a047;">&lt;100 мс</div>
            <p class="body-2 text-muted mb-0">TTFB для кешированного изображения — CDN edge</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #fb8c00;">
            <div style="font-size:28px;font-weight:700;color:#fb8c00;">140 POP</div>
            <p class="body-2 text-muted mb-0">точек присутствия Yandex Cloud CDN в РФ и СНГ</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #8e24aa;">
            <div style="font-size:28px;font-weight:700;color:#8e24aa;">11 девяток</div>
            <p class="body-2 text-muted mb-0">durability Yandex Object Storage — 99.999999999%</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #00838f;">
            <div style="font-size:28px;font-weight:700;color:#00838f;">SHA-256</div>
            <p class="body-2 text-muted mb-0">хеш параметров URL — immutable-кеш, никогда не перезаписывается</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #e53935;">
            <div style="font-size:28px;font-weight:700;color:#e53935;">2 AI</div>
            <p class="body-2 text-muted mb-0">Kandinsky 3.1 primary + FLUX.1-schnell fallback</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #1976d2;">
            <div style="font-size:28px;font-weight:700;color:#1976d2;">0</div>
            <p class="body-2 text-muted mb-0">перезаписей S3-объектов — immutable, новый хеш = новый объект</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #ffb300;">
            <div style="font-size:28px;font-weight:700;color:#e65100;">30%</div>
            <p class="body-2 text-muted mb-0">opacity watermark на Free — вшит в пиксели, не CSS-слой</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ОПРЕДЕЛЕНИЯ -->
<div class="container" id="how-ai-works-definitions">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Ключевые понятия</h2>
      <div class="row mb-5">
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #3949ab;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">AI-пайплайн</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Цепочка обработки запроса: от текстового промпта до готового изображения. Включает трансляцию, улучшение промпта, нейросетевую генерацию, постобработку, загрузку в хранилище и CDN-доставку. В PixInLink — автоматический, асинхронный, с fallback-моделью.</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #e53935;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Kandinsky 3.1</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Российская диффузионная нейросеть от Sber (SberCloud). Обучена на русскоязычных данных — лучше понимает кириллические промпты, чем Midjourney или DALL-E. Первичная AI-модель в PixInLink. FLUX.1 — резервная.</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #fb8c00;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">CDN (Content Delivery Network)</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Сеть серверов в разных городах, каждый хранит копию изображения. Yandex Cloud CDN: 140 точек присутствия в РФ и СНГ. Пользователь получает изображение с ближайшего сервера — скорость &lt;100 мс.</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #43a047;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Immutable кеш</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Изображение записывается в S3 один раз и никогда не изменяется. URL содержит SHA-256 хеш всех параметров — любое изменение создаёт новый объект. Это гарантирует, что ваш <code>og:image</code> не изменится неожиданно.</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #00838f;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Cache miss / Cache hit</h4>
            <p class="body-2 m-0" style="line-height:1.75;"><strong>Cache miss:</strong> изображения нет в кеше → нужна генерация (~8 сек). <strong>Cache hit:</strong> изображение уже создано → CDN отдаёт мгновенно (&lt;100 мс), квота не расходуется. После первой генерации все повторные запросы — cache hit.</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #8e24aa;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Диффузионная модель</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Класс нейросетей, обученных генерировать изображения из случайного шума под управлением текста. Kandinsky не хранит готовые фото — он создаёт их заново каждый раз. Аналогия: не библиотека, а художник, который рисует по описанию.</p>
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
      <h2 class="display-2 mb-3" style="font-size:24px;font-weight:700;">Как работает «магия»?</h2>
      <p class="body-1 mb-4" style="line-height:1.85;">
        Вы вставляете URL в HTML, а браузер получает уникальное изображение. Откуда оно берётся?
        <strong>Это не стоковое фото.</strong> Это не шаблон из базы данных.
        Это генерация искусственным интеллектом — специально для вашего запроса, в реальном времени.
      </p>
      <p class="body-1 mb-4" style="line-height:1.85;">
        Если вы впервые запрашиваете изображение, браузер покажет SVG-заглушку на 8–10 секунд,
        пока нейросеть Kandinsky 3.1 рисует картинку. Это нормально: <strong>холодный старт</strong>.
        После первой генерации изображение кешируется на 1 год — все последующие запросы мгновенны.
      </p>
      <div class="card paper pa-4 mb-5" style="background:#fff8e1;border-left:4px solid #ffb300;">
        <p class="body-1 m-0" style="line-height:1.75;">
          <strong>Почему это важно:</strong> запросы о «медленности» и «стоковости» — самые частые
          у новых пользователей. Эта страница отвечает на оба: медленность — это холодный старт CDN,
          уникальность — это диффузионная нейросеть, а не база фотографий.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- FEATURED SNIPPET -->
<div class="container" id="how-ai-works-snippet">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-3" style="font-size:24px;font-weight:700;">Как PixInLink генерирует изображения из URL?</h2>
      <div class="card paper pa-4 mb-5" style="background:#f3f8ff;border:1px solid #bbdefb;border-radius:10px;">
        <p class="body-1 m-0" style="line-height:1.85;">
          PixInLink принимает URL вида <code>pixinlink.ru/800x400/офис-разработчиков</code>,
          вычисляет SHA-256 хеш параметров и проверяет CDN-кеш. Если изображение уже генерировалось
          — возвращает его мгновенно (<strong>&lt;100 мс</strong>). Если нет — создаёт задачу:
          переводит промпт на английский (Yandex Translate), генерирует через
          <strong>Kandinsky 3.1</strong> или <strong>FLUX.1</strong>,
          оптимизирует в WebP, сохраняет в Yandex Object Storage и кеширует на
          <strong>1 год</strong> через CDN (140 POP).
          Первый запрос: <strong>8–10 секунд</strong>. Повторные: <strong>менее 100 мс</strong>.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- 10 ШАГОВ ПАЙПЛАЙНА -->
<div class="container" id="how-ai-works-pipeline">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">10 шагов от URL до изображения: полный пайплайн</h2>
      <!-- Шаг 1 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #3949ab;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#3949ab;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">1</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Браузер → API Gateway (FastAPI)</h3>
            <span class="body-2 text-muted">0–5 мс</span>
          </div>
        </div>
        <p class="body-2 mb-2">Браузер отправляет GET-запрос. API на <strong>FastAPI (Python 3.12)</strong> принимает и парсит URL.</p>
        <div class="pa-3" style="background:#1e1e1e;border-radius:6px;">
          <code style="color:#9cdcfe;font-size:12px;">GET /800x400/ffffff/000000?prompt=офис-программисты&style=realistic&seed=42</code>
        </div>
        <p class="body-2 mt-2 mb-0 text-muted">Валидация: width/height 16–8192, HEX 6 символов, prompt не пустой. Если что-то не так → <code>400 Bad Request</code>.</p>
      </div>
      <!-- Шаг 2 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #1976d2;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#1976d2;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">2</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">SHA-256 хеш — уникальный отпечаток запроса</h3>
            <span class="body-2 text-muted">&lt;1 мс</span>
          </div>
        </div>
        <p class="body-2 mb-2">API вычисляет SHA-256 от нормализованных параметров. Каждая уникальная комбинация = уникальный ассет:</p>
        <div class="pa-3" style="background:#1e1e1e;border-radius:6px;">
          <pre style="color:#9cdcfe;font-size:12px;margin:0;">hash = SHA256("800x400/ffffff/000000?prompt=office&style=realistic&seed=42")
→ abc123def456...</pre>
        </div>
        <p class="body-2 mt-2 mb-0 text-muted">Одинаковый prompt + seed = одинаковый хеш = тот же кешированный файл. Изменили seed — новый хеш — новое изображение.</p>
      </div>
      <!-- Шаг 3 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #43a047;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#43a047;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">3</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Проверка кеша — Redis</h3>
            <span class="body-2 text-muted">1–3 мс</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="pa-2 mb-2" style="background:#e8f5e9;border-radius:6px;">
              <p class="body-2 mb-0"><strong style="color:#2e7d32;">✅ Cache HIT:</strong> CDN URL найден → <code>302 Redirect</code> на CDN. <strong>Квота не тратится. Конец.</strong></p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pa-2 mb-2" style="background:#ffebee;border-radius:6px;">
              <p class="body-2 mb-0"><strong style="color:#c62828;">🔴 Cache MISS:</strong> URL не найден → переходим к шагу 4.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Шаг 4 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #00838f;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#00838f;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">4</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">SVG Placeholder — немедленный ответ браузеру</h3>
            <span class="body-2 text-muted">5–10 мс</span>
          </div>
        </div>
        <p class="body-2 mb-0">API сразу возвращает SVG-заглушку (200 OK, ~200 байт) с заголовком <code>X-Job-Id</code>. SVG показывает фон цвета <code>bg=</code> с текстом «Generating image...». Браузер не ждёт 8 секунд — видит заглушку немедленно. Параллельно API создаёт запись в PostgreSQL (<code>status=pending</code>) и отправляет задачу в очередь Celery.</p>
      </div>
      <!-- Шаг 5 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #8e24aa;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#8e24aa;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">5</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Celery Queue — асинхронная очередь задач</h3>
            <span class="body-2 text-muted">0–2 сек ожидания</span>
          </div>
        </div>
        <p class="body-2 mb-0">Задача появляется в Redis-очереди. <strong>Celery Worker</strong> берёт её. Приоритеты: <code>high</code> — Enterprise/Pro, <code>default</code> — обычные, <code>bulk</code> — batch. Пул: 3 GPU-воркера × concurrency=2 = <strong>6 параллельных генераций</strong> одновременно. При длине очереди &gt;50 → auto-scale добавляет воркер.</p>
      </div>
      <!-- Шаг 6 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #fb8c00;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#fb8c00;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">6</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Улучшение промпта: Yandex Translate + Style Augmentation</h3>
            <span class="body-2 text-muted">0.5–1 сек</span>
          </div>
        </div>
        <p class="body-2 mb-2">Три операции подряд:</p>
        <ol class="body-2 mb-0" style="line-height:1.9;padding-left:20px;">
          <li><strong>Transliteration:</strong> «офис разработчиков» → Yandex Translate → <code>"office of developers"</code></li>
          <li><strong>Style Augmentation:</strong> добавляется <code>", photorealistic, 8k, high detail"</code></li>
          <li><strong>Negative prompt:</strong> <code>"blurry, low quality, distorted"</code></li>
        </ol>
        <p class="body-2 mt-2 mb-0 text-muted">Диффузионные модели обучены преимущественно на английских данных. Yandex Translate + нативная RU-обучка Kandinsky = лучшее качество для кириллических промптов.</p>
      </div>
      <!-- Шаг 7 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #e53935;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#e53935;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">7</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">AI-генерация: Kandinsky 3.1 или FLUX.1-schnell</h3>
            <span class="body-2 text-muted">5–8 сек (Kandinsky) / 2–4 сек (FLUX)</span>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-md-6">
            <div class="pa-3 mb-2" style="background:#e8eaf6;border-radius:8px;">
              <p class="body-2 mb-1"><strong>PRIMARY: Kandinsky 3.1</strong></p>
              <p class="body-2 mb-0"><code>POST /v1/generate</code> → <code>{model: "kandinsky-3.1", prompt, width, height, seed}</code><br>
              Ответ: base64-encoded PNG.<br>
              Обучен на RU-данных. Хостинг: SberCloud (Россия, 152-ФЗ).</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="pa-3 mb-2" style="background:#fff8e1;border-radius:8px;">
              <p class="body-2 mb-1"><strong>FALLBACK: FLUX.1-schnell</strong></p>
              <p class="body-2 mb-0">Self-hosted на <strong>Selectel RTX 4090</strong> (Россия).<br>
              diffusers pipeline, 4 inference steps.<br>
              Переключение автоматическое: если Kandinsky → 5xx или timeout.</p>
            </div>
          </div>
        </div>
        <div class="mt-2 pa-2" style="background:#e8f5e9;border-radius:6px;">
          <p class="body-2 m-0">💡 <strong>Для вас это невидимо:</strong> даже если Kandinsky недоступен, изображение всё равно будет сгенерировано — через FLUX, автоматически.</p>
        </div>
      </div>
      <!-- Шаг 8 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #00838f;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#00838f;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">8</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Постобработка: Image Processor (Pillow + libvips)</h3>
            <span class="body-2 text-muted">0.3–0.5 сек</span>
          </div>
        </div>
        <ol class="body-2 mb-0" style="line-height:1.9;padding-left:20px;">
          <li><strong>Decode:</strong> base64 → PIL Image</li>
          <li><strong>Resize:</strong> <code>ImageOps.fit(width, height, LANCZOS)</code> — точное кадрирование</li>
          <li><strong>Watermark (только Free):</strong> текст «Made with PixInLink.com», bottom-right, 30% opacity. Вшивается в пиксели — нельзя убрать через CSS или DevTools</li>
          <li><strong>Format:</strong> WebP quality=85, метод 6 → ~50KB vs ~300KB PNG. В 6 раз меньше → лучше PageSpeed</li>
          <li><strong>Strip EXIF/IPTC:</strong> все метаданные удаляются. Ваши промпты не хранятся в файле</li>
        </ol>
      </div>
      <!-- Шаг 9 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #1976d2;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#1976d2;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">9</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Загрузка в Yandex Object Storage (S3)</h3>
            <span class="body-2 text-muted">0.2–0.5 сек</span>
          </div>
        </div>
        <div class="pa-3" style="background:#1e1e1e;border-radius:6px;">
          <pre style="color:#9cdcfe;font-size:12px;margin:0;">Key: images/{sha256_hash}.webp
Cache-Control: public, max-age=31536000, immutable
x-amz-acl: public-read
Durability: 99.999999999%</pre>
        </div>
        <p class="body-2 mt-2 mb-0 text-muted">Объект никогда не перезаписывается. Новые параметры → новый хеш → новый объект. Ваш <code>og:image</code> не изменится неожиданно.</p>
      </div>
      <!-- Шаг 10 -->
      <div class="card paper pa-4 mb-5" style="border-left:4px solid #43a047;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#43a047;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">10</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">CDN-кеш и финал</h3>
            <span class="body-2 text-muted">async (CDN кеширует при первом запросе к Origin)</span>
          </div>
        </div>
        <ul class="body-2 mb-0" style="line-height:1.9;padding-left:16px;">
          <li>CDN: Yandex Cloud CDN, 140 POP по России и СНГ</li>
          <li>Redis: <code>SET image:{hash} cdn_url EX 2592000</code> (30 дней)</li>
          <li>PostgreSQL: <code>status=ready, cdnurl=..., generated_at=now()</code></li>
          <li><strong>Следующий запрос с тем же URL → CDN edge → &lt;100 мс ✅</strong></li>
        </ul>
      </div>
      <!-- MERMAID ДИАГРАММА -->
      <h3 class="headline mb-3" style="font-size:18px;font-weight:700;">Схема пайплайна: от URL до изображения</h3>
      <div class="card paper pa-4 mb-5" style="background:#1e1e1e;border-radius:10px;overflow-x:auto;">
        <pre class="language-mermaid" style="color:#9cdcfe;font-size:12px;line-height:1.7;margin:0;">flowchart TD
    A["Браузер: GET /800x400/офис"] --> B["API Gateway — FastAPI"]
    B --> C{"Redis Cache Check"}
    C -->|"Cache HIT"| D["302 CDN URL &lt;100 мс ✅"]
    C -->|"Cache MISS"| E["SVG Placeholder 200 OK"]
    E --> F["Celery Queue — Redis Broker"]
    F --> G["Celery Worker"]
    G --> H["Yandex Translate RU → EN"]
    H --> I{"AI Provider"}
    I -->|"Primary"| J["Kandinsky 3.1 SberCloud ~8 сек"]
    I -->|"Fallback"| K["FLUX.1-schnell Selectel RTX 4090 ~4 сек"]
    J --> L["Image Processor Pillow: resize, WebP, watermark"]
    K --> L
    L --> M["Yandex Object Storage S3 immutable"]
    M --> N["Yandex CDN 140 POP"]
    N --> O["Redis UPDATE image:{hash}"]
    O --> P["Следующий запрос → Cache HIT &lt;100 мс ✅"]</pre>
      </div>
    </div>
  </div>
</div>
<!-- CACHE MISS vs CACHE HIT -->
<div class="container" id="how-ai-works-cache">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Почему первый запрос медленный, а повторный мгновенный?</h2>
      <div class="card paper pa-4 mb-4" style="background:#fff8e1;border-left:4px solid #ffb300;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">🎂 Аналогия: кондитерская</h4>
        <p class="body-1 m-0" style="line-height:1.85;">
          Представьте, что вы заказываете торт в кондитерской. Первый раз — кондитер печёт его
          специально для вас (8–10 минут). Но умный кондитер знает: если кто-то закажет такой же —
          он уже есть в витрине. Следующий покупатель получит его мгновенно.
          PixInLink работает так же: первая генерация — кулинарный процесс,
          все последующие — готовый торт в витрине CDN.
        </p>
      </div>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Параметр</th><th style="background:#ffebee;">Cache MISS</th><th style="background:#e8f5e9;">Cache HIT</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td>Время ответа</td><td>8–10 секунд</td><td style="color:#2e7d32;font-weight:700;">&lt;100 мс</td></tr>
              <tr><td>Что возвращает API</td><td>200 SVG placeholder</td><td>302 CDN URL</td></tr>
              <tr><td>Расход квоты</td><td>Да, 1 кредит</td><td style="color:#2e7d32;font-weight:700;">Нет</td></tr>
              <tr><td>Когда происходит</td><td>Первый запрос</td><td>Все повторные</td></tr>
              <tr><td>CDN задействован</td><td>Нет (идёт генерация)</td><td>Да (edge cache)</td></tr>
              <tr><td>GPU используется</td><td>Да</td><td>Нет</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card paper pa-3 mb-5" style="background:#e8f5e9;border-left:4px solid #43a047;">
        <p class="body-2 m-0">
          💡 <strong>500 генераций на Starter</strong> — это 500 уникальных промптов.
          Один промпт можно запрашивать миллион раз — квота тратится 1 раз при первой генерации.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- УНИКАЛЬНОСТЬ -->
<div class="container" id="how-ai-works-uniqueness">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Гарантия уникальности: это не стоковые фото</h2>
      <p class="body-1 mb-4" style="line-height:1.85;">
        Каждое изображение — новая нейросетевая генерация. Kandinsky 3.1 — диффузионная модель:
        она не хранит готовые фотографии, а создаёт изображения из случайного шума,
        управляемого текстовым описанием. Kandinsky не «выбирает» — он «рисует».
      </p>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Миф</th><th>Факт</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td>❌ PixInLink берёт фото из стоков</td><td>✅ Генерация через Kandinsky 3.1 (диффузионная нейросеть)</td></tr>
              <tr><td>❌ Изображения совпадут у разных пользователей</td><td>✅ seed=random → каждый раз разные</td></tr>
              <tr><td>❌ Нарушаются авторские права</td><td>✅ Kandinsky обучен на лицензионных данных SberCloud</td></tr>
              <tr><td>❌ Изображение изменится через месяц</td><td>✅ Immutable CDN-кеш, hash-based URLs</td></tr>
              <tr><td>❌ Первый медленный запрос — это баг</td><td>✅ Cold start: нейросеть рисует впервые для этого промпта</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- FALLBACK АРХИТЕКТУРА -->
<div class="container" id="how-ai-works-fallback">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Надёжность: что происходит, если AI недоступен?</h2>
      <div class="row mb-4">
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #3949ab;text-align:center;">
            <div style="font-size:24px;font-weight:700;color:#3949ab;margin-bottom:8px;">Уровень 1</div>
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">Kandinsky 3.1 (primary)</h4>
            <p class="body-2 m-0">SberCloud API, Россия. При 5xx или timeout → автоматический переход на FLUX.1.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #fb8c00;text-align:center;">
            <div style="font-size:24px;font-weight:700;color:#fb8c00;margin-bottom:8px;">Уровень 2</div>
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">FLUX.1-schnell (fallback)</h4>
            <p class="body-2 m-0">Self-hosted на Selectel RTX 4090, Россия. Если Kandinsky упал — FLUX генерирует напрямую.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #e53935;text-align:center;">
            <div style="font-size:24px;font-weight:700;color:#e53935;margin-bottom:8px;">Уровень 3</div>
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">Retry с backoff</h4>
            <p class="body-2 m-0">Celery max_retries=3, задержка 60 сек. Если все попытки исчерпаны → email-уведомление.</p>
          </div>
        </div>
      </div>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Компонент</th><th>Сбой</th><th>Реакция системы</th><th>Видимость для вас</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td>Kandinsky API</td><td>502/503/timeout</td><td>Auto-switch → FLUX.1</td><td style="color:#2e7d32;">Нет (чуть медленнее)</td></tr>
              <tr><td>FLUX.1 worker</td><td>OOM/crash</td><td>Retry → другой GPU</td><td style="color:#2e7d32;">Нет</td></tr>
              <tr><td>Redis</td><td>Connection error</td><td>API → 503, retry</td><td>Заглушка дольше</td></tr>
              <tr><td>PostgreSQL</td><td>Unavailable</td><td>Circuit breaker, 503</td><td>Страница ошибки 503</td></tr>
              <tr><td>CDN</td><td>Edge node down</td><td>Yandex CDN → другой POP</td><td style="color:#2e7d32;">Нет</td></tr>
              <tr><td>S3</td><td>Upload fail</td><td>Worker retry × 3</td><td>Задержка +1–2 мин</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card paper pa-3 mb-5" style="background:#f3f8ff;border:1px solid #bbdefb;border-radius:8px;">
        <p class="body-2 m-0">
          <strong>Circuit Breaker:</strong> при 5 подряд ошибках Kandinsky → Circuit Breaker открывается на 60 сек.
          Все запросы идут прямо в FLUX. После 60 сек — пробный запрос к Kandinsky. Если OK — Circuit Breaker закрывается.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- 152-ФЗ -->
<div class="container" id="how-ai-works-152fz">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Российская инфраструктура: соответствие 152-ФЗ</h2>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#e8eaf6;">
              <tr><th>Компонент</th><th>Провайдер</th><th>Локация</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td>API Gateway</td><td>Yandex Serverless Functions</td><td>ru-central1 (Москва/Ярославль)</td></tr>
              <tr><td>Redis Cache</td><td>Yandex Managed Redis Lighthouse</td><td>ru-central1</td></tr>
              <tr><td>PostgreSQL</td><td>Yandex Managed PostgreSQL 16</td><td>ru-central1</td></tr>
              <tr><td>Object Storage</td><td>Yandex Object Storage</td><td>ru-central1</td></tr>
              <tr><td>CDN</td><td>Yandex Cloud CDN</td><td>140 POP РФ + СНГ</td></tr>
              <tr><td>AI Primary</td><td>Kandinsky 3.1</td><td>SberCloud, Россия</td></tr>
              <tr><td>AI Fallback</td><td>FLUX.1-schnell</td><td>Selectel, Россия</td></tr>
              <tr><td>GPU Workers</td><td>Selectel RTX 4090</td><td>Санкт-Петербург, Россия</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <ul class="body-1 mb-5" style="line-height:2.0;list-style:none;padding:0;">
        <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">lock</i><span><strong>S3 at-rest encryption:</strong> AES-256</span></li>
        <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">lock</i><span><strong>HTTPS everywhere:</strong> TLS 1.3, managed certificates</span></li>
        <li class="mb-2 d-flex"><i class="material-icons mr-2 text-primary">lock</i><span><strong>EXIF stripping:</strong> метаданные удаляются из каждого изображения</span></li>
        <li class="mb-0 d-flex"><i class="material-icons mr-2 text-primary">lock</i><span><strong>Данные за рубеж не передаются:</strong> вся инфраструктура в РФ</span></li>
      </ul>
    </div>
  </div>
</div>
<!-- SEED И ВОСПРОИЗВОДИМОСТЬ -->
<div class="container" id="how-ai-works-seed">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Seed: воспроизводимые изображения для og:image</h2>
      <p class="body-1 mb-3" style="line-height:1.85;">
        <strong>Seed</strong> — это «рецепт» изображения. Добавьте <code>&seed=42</code> в URL — и PixInLink
        всегда нарисует одно и то же изображение для одного промпта. Без seed — каждый раз разное.
        С seed — всегда одинаковое.
      </p>
      <p class="body-1 mb-3" style="line-height:1.75;">
        Для <code>og:image</code> стабильность критична: если сегодня у статьи один og:image,
        а завтра другой — соцсети покажут старую версию из своего кеша. Решение: зафиксируй seed.
      </p>
      <div class="row mb-4">
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #e53935;">
            <h4 class="headline mb-2" style="font-size:14px;font-weight:700;">Без seed</h4>
            <div class="pa-2" style="background:#1e1e1e;border-radius:6px;margin-bottom:8px;">
              <code style="color:#9cdcfe;font-size:11px;">pixinlink.ru/1200x630?prompt=кот</code>
            </div>
            <p class="body-2 mb-0">Random seed каждый раз → разные изображения → не кешируется. Подходит для декоративных элементов.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #43a047;">
            <h4 class="headline mb-2" style="font-size:14px;font-weight:700;">С фиксированным seed</h4>
            <div class="pa-2" style="background:#1e1e1e;border-radius:6px;margin-bottom:8px;">
              <code style="color:#a5d6a7;font-size:11px;">pixinlink.ru/1200x630?prompt=кот&seed=42</code>
            </div>
            <p class="body-2 mb-0">Стабильный CDN-кеш. Идеально для og:image и заголовков статей.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #1976d2;">
            <h4 class="headline mb-2" style="font-size:14px;font-weight:700;">Seed из slug (идеальный паттерн)</h4>
            <div class="pa-2" style="background:#1e1e1e;border-radius:6px;margin-bottom:8px;">
              <pre style="color:#9cdcfe;font-size:10px;margin:0;">slug = "kak-pit-kofe"
seed = crc32(slug) % 2147483647
# seed=847392145</pre>
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
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Частые вопросы</h2>
      <div class="faq-list mb-5">
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Почему первое изображение генерируется медленнее?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Cache miss — нейросеть Kandinsky 3.1 рисует специально для этого запроса. P95 = 8 секунд. Все повторные запросы отдаются из CDN: &lt;100 мс. Квота при cache hit не расходуется.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Расходуется ли квота при повторном запросе?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Нет. Cache hit не расходует квоту. 500 генераций на Starter — это 500 уникальных промптов. Один промпт можно запрашивать любое количество раз — квота тратится 1 раз при первой генерации.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Kandinsky или FLUX.1 — какую модель выбрать?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Выбор происходит автоматически. Kandinsky 3.1 — первичная модель, лучше для русских промптов (8 сек). FLUX.1 — резервная, немного быстрее (4 сек). Принудительный выбор модели доступен в REST API для тарифа Pro.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Изображения хранятся вечно?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">CDN-кеш = 1 год. В Yandex Object Storage: 180 дней → Cold Storage, 365 дней → удаление (lifecycle policy). После удаления следующий запрос = новая генерация.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Могут ли два пользователя получить одинаковое изображение?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">При одинаковом prompt + seed — да, CDN отдаст тот же кешированный файл. Изображение уникально создано для этого промпта. Хотите гарантированную уникальность — не указывайте seed (random каждый раз).</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как обрабатываются запрещённые промпты?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Kandinsky 3.1 имеет встроенный content policy filter. Запросы с NSFW, насилием и запрещённым контентом отклоняются. PixInLink дополнительно проверяет на уровне API Gateway.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Можно ли использовать изображения коммерчески?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Да, на платных тарифах (без watermark) — полные коммерческие права. На Free (с watermark) — личное использование. Подробнее: <a href="https://pixinlink.ru/terms/">pixinlink.ru/terms</a>.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Сколько GPU-ресурсов на одну генерацию?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Kandinsky 3.1 API — GPU на стороне SberCloud. FLUX.1 self-hosted: RTX 4090, 24 GB VRAM, concurrency=2 на worker. При высокой нагрузке (utilization &gt;85%) auto-scale добавляет GPU-воркеры автоматически.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- E-E-A-T -->
<div class="container" id="how-ai-works-eeaat">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Об этом материале</h2>
      <div class="card paper pa-4 mb-5" style="background:#fafafa;border:1px solid #e0e0e0;border-radius:8px;">
        <p class="body-1 mb-3" style="line-height:1.85;">
          Архитектура PixInLink разработана командой с опытом в SaaS, distributed systems и computer vision.
          Все решения задокументированы в Architecture Decision Records (ADR):
          ADR-007 (Kandinsky/FLUX fallback), ADR-010 (Watermark). Мониторинг 24/7 через Grafana + Telegram-алерты.
        </p>
        <ul class="body-2 mb-0" style="line-height:1.9;list-style:none;padding:0;">
          <li class="mb-1 d-flex"><i class="material-icons mr-2 text-primary" style="font-size:18px;">verified</i>Кодовые примеры актуальны для FastAPI 0.115, Celery 5.4, Python 3.12</li>
          <li class="mb-1 d-flex"><i class="material-icons mr-2 text-primary" style="font-size:18px;">verified</i>Технические данные взяты из architecture/components.md и ADR-документов</li>
          <li class="mb-1 d-flex"><i class="material-icons mr-2 text-primary" style="font-size:18px;">verified</i>Дата обновления: май 2026</li>
          <li class="mb-0 d-flex"><i class="material-icons mr-2 text-primary" style="font-size:18px;">verified</i>Поддержка: <a href="mailto:dev@pixinlink.ru">dev@pixinlink.ru</a> · <a href="https://t.me/pixinlinksupport">@pixinlinksupport</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<!-- ФИНАЛЬНЫЙ CTA -->
<div class="container" id="how-ai-works-cta">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="text-center mb-5 pa-5" style="background:linear-gradient(135deg,#e8eaf6 0%,#e3f2fd 100%);border-radius:16px;">
        <h3 class="display-2 mb-3" style="font-size:26px;font-weight:700;">
          Попробуйте пайплайн в действии
        </h3>
        <p class="body-1 text-muted mb-4">Первые 50 генераций бесплатно. Без регистрации и кредитной карты.</p>
        <div class="d-flex justify-content-center flex-wrap" style="gap:16px;">
          <a href="https://pixinlink.ru/docs/getting-started/" class="btn-flat btn-rounded"
             style="background:#3949ab;color:#fff;padding:12px 32px;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
            Начать за 60 секунд
          </a>
          <a href="https://pixinlink.ru/pricing/" class="btn-flat btn-rounded"
             style="background:#43a047;color:#fff;padding:12px 32px;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
            Starter — 490 ₽/мес
          </a>
        </div>
        <p class="body-2 text-muted mt-3 mb-0">Вопросы по архитектуре: <a href="mailto:dev@pixinlink.ru">dev@pixinlink.ru</a></p>
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
