---
title: "Python SDK PixInLink — генерация URL изображений из кода (Alpha)"
description: "Python-пакет imageshub: формирование URL для img src из Python-кода. Два метода, без зависимостей. Roadmap: HTTP-клиент, async, batch-generate."
slug: "integrations/sdk-python"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "WebPage"
---
<main class="container-wrap container-pages">

<!-- HERO -->
<div class="container mt-5 pt-5 mb-4" id="sdk-python-header">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="d-flex align-items-center mb-3">
        <a href="/integrations" class="badge" style="background:#e8f5e9;color:#2e7d32;border-radius:4px;padding:5px 10px;">Интеграции</a>
        <span class="ml-2 text-muted" style="font-size:14px;">/</span>
        <span class="ml-2 text-muted" style="font-size:14px;">Python SDK</span>
      </div>
      <h1 class="use-text-title2">Python SDK PixInLink</h1>
      <p class="use-text-subtitle2 text-muted" style="font-size:1.2rem;line-height:1.6;margin-bottom:24px;">
        Python-пакет <code>imageshub</code> для формирования URL изображений прямо из кода. Сейчас: конструктор URL. Скоро: HTTP-клиент с async/batch/generate.
      </p>
      <div class="card pa-0 mb-4" style="background:#1e1e1e;border-radius:12px;overflow:hidden;">
        <div class="pa-2 d-flex align-items-center" style="background:#2d2d2d;border-bottom:1px solid #3a3a3a;">
          <span style="color:#9cdcfe;font-size:12px;font-family:monospace;">Python REPL</span>
          <span class="ml-auto" style="color:#4ec9b0;font-size:11px;">v0.1.0 (Alpha)</span>
        </div>
        <div class="pa-4">
          <pre style="color:#d4d4d4;font-size:14px;line-height:1.8;margin:0;"><span style="color:#569cd6;">from</span> imageshub <span style="color:#569cd6;">import</span> ImgesHub
ih = ImgesHub(domain=<span style="color:#ce9178;">"pixinlink.ru"</span>)
url = ih.generate_url(width=<span style="color:#b5cea8;">1200</span>, height=<span style="color:#b5cea8;">630</span>, prompt=<span style="color:#ce9178;">"офис-разработчиков"</span>, seed=<span style="color:#b5cea8;">42</span>)
<span style="color:#6a9955;"># -> "https://pixinlink.ru/1200x630/офис-разработчиков?seed=42"</span></pre>
        </div>
      </div>
      <div class="mt-4 d-flex flex-wrap" style="gap:12px;">
        <a href="https://github.com/pixinlink/imageshub" target="_blank" class="btn primary waves-effect"
           style="padding:2px 24px;font-weight:600;border-radius:8px;">
          GitHub &rarr;
        </a>
        <a href="/features/url-api" class="btn btn-outlined primary waves-effect"
           style="padding:2px 24px;border-radius:8px;">
          URL API справочник
        </a>
      </div>
    </div>
  </div>
</div>
<!-- TL;DR -->
<div class="container" id="sdk-python-tldr">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="card paper pa-4 mb-5" style="background:#f1f8e9;border-left:4px solid #7cb342;box-shadow:none;">
        <h3 class="headline mb-2" style="font-size:20px;color:#33691e;">TL;DR</h3>
        <p class="body-1 m-0" style="line-height:1.9;">
          <strong>Сейчас:</strong> пакет <code>imageshub</code>, версия 0.1.0 (Alpha), Python 3.9+. Два метода: <code>generate_url()</code> для построения URL и <code>generate_html()</code> для готового тега <code>&lt;img&gt;</code>. Без зависимостей, без HTTP-клиента — только правильное формирование ссылок из параметров.<br>
          <strong>Скоро (Roadmap):</strong> методы <code>generate()</code> (синхронная генерация с ожиданием ответа), <code>generate_batch()</code> (пакетная обработка), <code>AsyncPixInLink</code> (async/await), CLI, утилиты для seed и размеров.<br>
          <strong>Прямо сейчас:</strong> вставляйте сформированный URL в <code>&lt;img src&gt;</code> или HTTP-запрос вашего фреймворка — PixInLink примет его на catch-all endpoint без SDK.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- ЧТО УЖЕ РАБОТАЕТ -->
<div class="container" id="sdk-python-current">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Что уже работает (v0.1.0 Alpha)</h2>
      <div class="row mb-4">
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #3949ab;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">generate_url()</h4>
            <p class="body-2 mb-2">Формирует URL изображения из параметров. Валидирует width/height, кодирует prompt. Поддерживает seed и style.</p>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">url = ih.generate_url(
    width=800, height=400,
    prompt="офис",
    style="illustration",
    seed=42
)
<span style="color:#6a9955;"># -> ...800x400/офис?style=illustration&seed=42</span></pre>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #2e7d32;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">generate_html()</h4>
            <p class="body-2 mb-2">Возвращает готовый тег <code>&lt;img&gt;</code>. Можно сразу вставить в HTML-шаблон или Markdown.</p>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">tag = ih.generate_html(
    width=1200, height=630,
    prompt="тирамису",
    alt="Тирамису",
    lazy=True
)
<span style="color:#6a9955;"># -> &lt;img src="..."&gt;</span></pre>
            </div>
          </div>
        </div>
      </div>
      <div class="card paper pa-0 mb-5 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Метод</th><th>Параметры</th><th>Возвращает</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td><code>generate_url()</code></td><td>width, height, prompt, style, seed, format</td><td>str — URL изображения</td></tr>
              <tr><td><code>generate_html()</code></td><td>width, height, prompt, alt, lazy, style, seed</td><td>str — тег &lt;img&gt;</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ СЕЙЧАС -->
<div class="container" id="sdk-python-examples">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Как использовать прямо сейчас</h2>
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #3949ab;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Оглавление статьи с изображением из заголовка</h4>
        <p class="body-2 mb-2">Python-код формирует URL — вы вставляете его в шаблон. Без HTTP-клиента, без ожидания генерации.</p>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:6px;">
          <pre style="color:#9cdcfe;font-size:13px;line-height:1.7;margin:0;"><span style="color:#569cd6;">from</span> imageshub <span style="color:#569cd6;">import</span> ImgesHub

ih = ImgesHub(domain=<span style="color:#ce9178;">"pixinlink.ru"</span>)

<span style="color:#c586c0;">def</span> <span style="color:#dcdcaa;">og_image_for_article</span>(title: <span style="color:#4ec9b0;">str</span>, post_id: <span style="color:#4ec9b0;">int</span>) -> <span style="color:#4ec9b0;">str</span>:
    <span style="color:#569cd6;">return</span> ih.generate_url(
        width=<span style="color:#b5cea8;">1200</span>, height=<span style="color:#b5cea8;">630</span>,
        prompt=title.replace(<span style="color:#ce9178;">" "</span>, <span style="color:#ce9178;">"-"</span>),
        seed=post_id
    )

<span style="color:#6a9955;"># Использование в шаблоне Jinja2/Django</span>
<span style="color:#6a9955;"># &lt;meta property="og:image" content="{{ og_image_url }}"&gt;</span></pre>
        </div>
      </div>
      <div class="card paper pa-4 mb-5" style="border-left:4px solid #fb8c00;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Вставка в Markdown (Hugo, Jekyll, Pelican)</h4>
        <p class="body-2 mb-2">Формируете URL или готовый тег через SDK и вставляете в контент.</p>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:6px;">
          <pre style="color:#9cdcfe;font-size:13px;line-height:1.7;margin:0;"><span style="color:#6a9955;"># Генерация Markdown-вставки для статического сайта</span>
img_tag = ih.generate_html(
    width=<span style="color:#b5cea8;">800</span>, height=<span style="color:#b5cea8;">400</span>,
    prompt=<span style="color:#ce9178;">"архитектура-микросервисов"</span>,
    alt=<span style="color:#ce9178;">"Архитектура микросервисов"</span>,
    lazy=<span style="color:#569cd6;">True</span>
)
<span style="color:#6a9955;"># Вставьте img_tag в .md или .html файл</span></pre>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- А СЕЙЧАС БЕЗ SDK -->
<div class="container" id="sdk-python-now">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Генерация без SDK — прямо сейчас</h2>
      <p class="body-1 mb-3" style="line-height:1.85;">
        SDK формирует URL, но вы можете обойтись и без него. Catch-all endpoint <code>pixinlink.ru/800x400/промпт</code> принимает запросы от любого HTTP-клиента. Работает с <code>httpx</code>, <code>requests</code>, <code>aiohttp</code> или curl.
      </p>
      <div class="row mb-5">
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #1976d2;">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">Синхронный (requests)</h4>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;"><span style="color:#569cd6;">import</span> requests
<span style="color:#569cd6;">from</span> urllib.parse <span style="color:#569cd6;">import</span> quote

url = <span style="color:#ce9178;">f"https://pixinlink.ru/800x400/</span>{quote(<span style="color:#ce9178;">'офис'</span>)}<span style="color:#ce9178;">?seed=42"</span>
resp = requests.get(url, allow_redirects=<span style="color:#569cd6;">True</span>)
<span style="color:#6a9955;"># resp.content — байты WebP-изображения</span></pre>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #43a047;">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">Асинхронный (httpx)</h4>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;"><span style="color:#569cd6;">import</span> httpx
<span style="color:#569cd6;">from</span> urllib.parse <span style="color:#569cd6;">import</span> quote

async <span style="color:#569cd6;">def</span> <span style="color:#dcdcaa;">get_image</span>(prompt):
    url = <span style="color:#ce9178;">f"https://pixinlink.ru/800x400/</span>{quote(prompt)}<span style="color:#ce9178;">"</span>
    async <span style="color:#569cd6;">with</span> httpx.AsyncClient(timeout=<span style="color:#b5cea8;">60</span>) <span style="color:#569cd6;">as</span> client:
        resp = <span style="color:#569cd6;">await</span> client.get(url)
        <span style="color:#569cd6;">return</span> resp.content</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ROADMAP -->
<div class="container" id="sdk-python-roadmap">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Roadmap: что будет в следующих версиях</h2>
      <div class="card paper pa-0 mb-5 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Версия</th><th>Функционал</th><th>Описание</th></tr>
            </thead>
            <tbody class="body-2">
              <tr style="background:#e8f5e9;">
                <td><strong>0.1.0</strong></td>
                <td>generate_url() + generate_html()</td>
                <td>✅ Уже доступно. Формирование URL и HTML-тегов.</td>
              </tr>
              <tr>
                <td><strong>0.2.0</strong></td>
                <td>generate() — синхронная генерация</td>
                <td>HTTP-клиент, отправляет запрос к catch-all endpoint, ожидает изображение. Таймаут 60 сек, retry при ошибках.</td>
              </tr>
              <tr>
                <td><strong>0.3.0</strong></td>
                <td>generate_batch() — пакетная генерация</td>
                <td>Список промптов → список URL. Автоматический rate-limit (50/min). Идеально для массовой подготовки контента.</td>
              </tr>
              <tr>
                <td><strong>0.4.0</strong></td>
                <td>AsyncPixInLink — async/await</td>
                <td>Асинхронный клиент на httpx. Полная совместимость с FastAPI, Django async, asyncio-скриптами.</td>
              </tr>
              <tr>
                <td><strong>0.5.0</strong></td>
                <td>CLI и утилиты</td>
                <td>Командная строка: <code>imageshub --width 800 --height 400 "промпт"</code>. Утилиты: seed_from_string(), ImageSize presets (OG_IMAGE, SQUARE, STORY).</td>
              </tr>
              <tr>
                <td><strong>1.0.0</strong></td>
                <td>Pillow extra + стабильный релиз</td>
                <td>Опциональная зависимость Pillow для локального сохранения. Полная документация, стабильный API, обратная совместимость.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card paper pa-3 mb-5" style="background:#f3f8ff;border:1px solid #bbdefb;border-radius:8px;">
        <p class="body-2 m-0">
          💡 <strong>Хотите ускорить roadmap?</strong> Пишите в <a href="https://t.me/pixinlinksupport">@pixinlinksupport</a> — какие методы нужны в первую очередь. SDK с открытым исходным кодом: <a href="https://github.com/pixinlink/imageshub" target="_blank">github.com/pixinlink/imageshub</a>.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- FAQ -->
<div class="container" id="sdk-python-faq">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Частые вопросы</h2>
      <div class="faq-style mb-5">
        <div class="root">
          <div class="accordion">
            <ul class="collapsible">
              <li class="accordion-content paper active">
                <div class="collapsible-header content">
                  <p class="heading">Нужен ли SDK для работы с PixInLink?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Нет. Catch-all endpoint принимает прямые GET-запросы. SDK удобнее для кодогенерации URL, но не обязателен. Любой HTTP-клиент (requests, httpx, curl) работает напрямую: <code>https://pixinlink.ru/800x400/промпт</code>.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Почему пакет называется imageshub, а не pixinlink?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Backend-код проекта использует неймспейс <code>imageshub</code>. SDK следует этому соглашению. В будущем возможно переименование в <code>pixinlink</code> при достижении стабильной версии 1.0.0.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">SDK умеет скачивать изображения на диск?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Пока нет. Сейчас SDK только формирует URL. Для скачивания используйте requests/httpx напрямую (см. примеры выше). Метод <code>generate()</code> с сохранением появится в версии 0.2.0.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Поддерживается ли асинхронность (async/await)?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>В текущей версии (0.1.0) — нет. Методы generate_url() и generate_html() формируют URL синхронно (это не требует async). Async-клиент (<code>AsyncImgesHub</code>) запланирован в версии 0.4.0.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Какие стили поддерживает SDK?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>SDK передаёт параметр <code>style</code> в URL как есть. Доступные стили: default, illustration, 3d, anime, photographic, minimal, dark. Неизвестные значения падают на default на стороне GigaChat.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Нужен ли API-ключ для SDK?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>В текущей версии SDK не работает с API-ключами — он только формирует URL. Аутентификация для catch-all endpoint идёт через Referer (привязка домена). API-ключ формата <code>imgeshub_...</code> используется в REST API (<code>POST /api/v1/images/generate</code>).</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
