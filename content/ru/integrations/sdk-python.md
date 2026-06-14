---
title: "Python SDK PixInLink"
description: "Python SDK PixInLink: pip install pixinlink — 5 строк кода до первого AI-изображения. AsyncPixInLink, generate_batch, quota. Python 3.10+."
slug: "integrations/sdk-python"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "WebPage"
---
<main class="container-wrap">

<!-- HERO -->
<div class="container mt-5 pt-5 mb-4" id="sdk-python-header">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="d-flex align-items-center mb-3">
        <a href="/integrations" class="badge" style="background:#e8f5e9;color:#2e7d32;border-radius:4px;padding:5px 10px;">Интеграции</a>
        <span class="ml-2 text-muted" style="font-size:14px;">/</span>
        <span class="ml-2 text-muted" style="font-size:14px;">Python SDK</span>
      </div>
      <p class="use-text-subtitle2 text-muted" style="font-size:1.2rem;line-height:1.6;margin-bottom:24px;">
        От <code>pip install</code> до первого изображения — всего 5 строк кода
      </p>
      <!-- Hero код -->
      <div class="card pa-0 mb-4" style="background:#1e1e1e;border-radius:12px;overflow:hidden;">
        <div class="pa-2 d-flex align-items-center" style="background:#2d2d2d;border-bottom:1px solid #3a3a3a;">
          <span style="color:#9cdcfe;font-size:12px;font-family:monospace;">Python</span>
          <span class="ml-auto" style="color:#6a9955;font-size:11px;">// 5 строк до готового изображения</span>
        </div>
        <div class="pa-4">
          <pre style="color:#9cdcfe;font-size:14px;line-height:1.8;margin:0;"><span style="color:#c586c0;">from</span> <span style="color:#4ec9b0;">pixinlink</span> <span style="color:#c586c0;">import</span> PixInLink
client = PixInLink(api_key=<span style="color:#ce9178;">"pk_live_..."</span>)  <span style="color:#6a9955;"># или без ключа для Free</span>
url = client.image_url(<span style="color:#ce9178;">"рыжая кошка на подоконнике"</span>, width=<span style="color:#b5cea8;">800</span>, height=<span style="color:#b5cea8;">400</span>)
client.download(url, <span style="color:#ce9178;">"cat.webp"</span>)</pre>
        </div>
      </div>
      <div class="mt-4 d-flex flex-wrap" style="gap:12px;">
        <a href="/docs/getting-started" class="btn-flat btn-rounded"
           style="background:#2e7d32;color:#fff;padding:10px 24px;font-weight:600;text-decoration:none;">
          Начать бесплатно
        </a>
        <a href="https://github.com/pixinlink/pixinlink-python" target="_blank" class="btn-flat btn-rounded"
           style="background:#e8f5e9;color:#2e7d32;padding:10px 24px;text-decoration:none;">
          GitHub →
        </a>
        <a href="/features/url-api" class="btn-flat btn-rounded"
           style="background:#f5f5f5;color:#555;padding:10px 24px;text-decoration:none;">
          URL API →
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
        <h3 class="headline mb-3" style="font-size:20px;color:#33691e;">TL;DR</h3>
        <p class="body-1 m-0" style="line-height:1.9;">
          <code>pip install pixinlink</code> → <code>from pixinlink import PixInLink</code> →
          3 метода на выбор: <strong>image_url()</strong> (ссылка), <strong>download()</strong> (файл на диск),
          <strong>generate()</strong> (байты в памяти).<br>
          Асинхронность: <strong>AsyncPixInLink</strong> для FastAPI / aiohttp.<br>
          Пакетная обработка: <strong>generate_batch()</strong> с auto rate-limit.<br>
          Python 3.10+. Единственная обязательная зависимость — <strong>httpx</strong>.<br>
          Free: 50 генераций/мес без ключа. Starter: 500 ген/мес, 490 ₽.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- KEY FACTS -->
<div class="container" id="sdk-python-keyfacts">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Ключевые факты</h2>
      <div class="row mb-5">
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #2e7d32;">
            <div style="font-size:28px;font-weight:700;color:#2e7d32;">5 строк</div>
            <p class="body-2 text-muted mb-0">минимальный рабочий код до сохранённого изображения на диске</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #1976d2;">
            <div style="font-size:28px;font-weight:700;color:#1976d2;">Python 3.10+</div>
            <p class="body-2 text-muted mb-0">минимальная версия; протестирован на 3.10, 3.11, 3.12, 3.13</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #fb8c00;">
            <div style="font-size:28px;font-weight:700;color:#fb8c00;">1 зависимость</div>
            <p class="body-2 text-muted mb-0">только <code>httpx</code>; Pillow — опционально для in-memory обработки</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #8e24aa;">
            <div style="font-size:28px;font-weight:700;color:#8e24aa;">v1.5.0</div>
            <p class="body-2 text-muted mb-0">актуальная версия — апрель 2026, поддержка Python 3.13 и uv</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #00838f;">
            <div style="font-size:28px;font-weight:700;color:#00838f;">5 поллингов</div>
            <p class="body-2 text-muted mb-0">клиент автоматически ждёт при Cache Miss, до 5 циклов опроса</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #e53935;">
            <div style="font-size:28px;font-weight:700;color:#e53935;">600 req/min</div>
            <p class="body-2 text-muted mb-0">rate limit на тарифе Business; Free — 5 req/min</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #3949ab;">
            <div style="font-size:28px;font-weight:700;color:#3949ab;">50 gen/мес</div>
            <p class="body-2 text-muted mb-0">бесплатно, без API-ключа — чтобы попробовать прямо сейчас</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #6a1b9a;">
            <div style="font-size:28px;font-weight:700;color:#6a1b9a;">crc32</div>
            <p class="body-2 text-muted mb-0"><code>seed_from_string(slug)</code> — детерминированный seed из строки</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ОПРЕДЕЛЕНИЕ -->
<div class="container" id="sdk-python-definition">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-3" style="font-size:24px;font-weight:700;">Что такое Python SDK PixInLink</h2>
      <p class="body-1 mb-4" style="line-height:1.85;">
        Python SDK PixInLink — официальная клиентская библиотека, которая инкапсулирует вызовы
        <a href="/features/url-api">URL API</a> в нативные Python-методы. Вместо ручного
        формирования ссылок, обработки 302-редиректов и парсинга SVG-плейсхолдеров — просто
        вызовите метод и получите готовый файл или байты.
      </p>
    </div>
  </div>
</div>
<!-- ВВЕДЕНИЕ -->
<div class="container" id="sdk-python-intro">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-3" style="font-size:24px;font-weight:700;">Зачем SDK, если есть requests?</h2>
      <p class="body-1 mb-3" style="line-height:1.85;">
        Прямой <code>requests.get()</code> требует самостоятельно обрабатывать: 302-редиректы
        при cache hit, поллинг SVG-плейсхолдера при cache miss (ждём 8–10 сек генерации),
        retry при <code>429 Too Many Requests</code>, кодирование кириллических промптов в URL,
        управление квотами и заголовками авторизации. SDK берёт всю эту рутину на себя.
      </p>
      <div class="card paper pa-3 mb-5" style="background:#e8f5e9;border-left:4px solid #43a047;">
        <p class="body-2 m-0">
          💡 <strong>Когда всё же нужен прямой requests:</strong> для одноразовых скриптов или
          когда SDK недоступен в вашей среде. Но для продакшна, FastAPI и Django — SDK экономит часы работы.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- УСТАНОВКА -->
<div class="container" id="sdk-python-install">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Установка</h2>
      <!-- Менеджеры пакетов -->
      <h3 class="headline mb-3" style="font-size:18px;font-weight:700;">Выберите менеджер пакетов</h3>
      <div class="row mb-4">
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #2e7d32;">
            <h4 class="headline mb-2" style="font-size:14px;font-weight:700;">pip</h4>
            <div class="pa-2" style="background:#1e1e1e;border-radius:6px;">
              <code style="color:#a5d6a7;font-size:13px;">pip install pixinlink</code>
            </div>
            <p class="body-2 mt-2 mb-0 text-muted">Базовая установка без опциональных зависимостей</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #1976d2;">
            <h4 class="headline mb-2" style="font-size:14px;font-weight:700;">poetry</h4>
            <div class="pa-2" style="background:#1e1e1e;border-radius:6px;">
              <code style="color:#a5d6a7;font-size:13px;">poetry add pixinlink</code>
            </div>
            <p class="body-2 mt-2 mb-0 text-muted">Для проектов с lock-файлом</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #8e24aa;">
            <h4 class="headline mb-2" style="font-size:14px;font-weight:700;">uv</h4>
            <div class="pa-2" style="background:#1e1e1e;border-radius:6px;">
              <code style="color:#a5d6a7;font-size:13px;">uv add pixinlink</code>
            </div>
            <p class="body-2 mt-2 mb-0 text-muted">Быстрый менеджер, поддержан с v1.5.0</p>
          </div>
        </div>
      </div>
      <!-- Опциональные зависимости -->
      <h3 class="headline mb-3" style="font-size:18px;font-weight:700;">С Pillow (для обработки в памяти)</h3>
      <div class="card pa-3 mb-4" style="background:#1e1e1e;border-radius:8px;">
        <code style="color:#a5d6a7;font-size:13px;">pip install pixinlink[pillow]</code>
      </div>
      <!-- Требования -->
      <div class="card paper pa-0 mb-5 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Зависимость</th><th>Версия</th><th>Обязательна?</th><th>Зачем</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td><strong>Python</strong></td><td>3.10+</td><td style="color:#2e7d32;font-weight:700;">Да</td><td>Минимальная версия интерпретатора</td></tr>
              <tr><td><strong>httpx</strong></td><td>0.25+</td><td style="color:#2e7d32;font-weight:700;">Да</td><td>HTTP-клиент, async из коробки</td></tr>
              <tr><td>Pillow</td><td>10+</td><td>Нет (extra)</td><td>In-memory обработка изображений</td></tr>
              <tr><td>httpx[asyncio]</td><td>—</td><td>Нет</td><td>Только для AsyncPixInLink</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- АУТЕНТИФИКАЦИЯ -->
<div class="container" id="sdk-python-auth">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Аутентификация</h2>
      <p class="body-1 mb-3" style="line-height:1.75;">
        Секретный ключ API всегда начинается с префикса <code>pk_live_</code>.
        Получить ключ: <a href="/dashboard/api-keys">Dashboard → API Keys</a>.
      </p>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Способ</th><th>Безопасность</th><th>Сценарий</th></tr>
            </thead>
            <tbody class="body-2">
              <tr>
                <td><code>PIXINLINK_API_KEY</code> (env var)</td>
                <td style="color:#2e7d32;font-weight:700;">Высокая</td>
                <td>Продакшн: Docker, CI/CD, Yandex Cloud Functions</td>
              </tr>
              <tr>
                <td>Файл <code>.env</code></td>
                <td style="color:#2e7d32;font-weight:700;">Высокая</td>
                <td>Разработка (добавить в <code>.gitignore</code>)</td>
              </tr>
              <tr>
                <td>Явный аргумент <code>api_key=</code></td>
                <td style="color:#e65100;">Низкая</td>
                <td>Только локальные тесты и прототипы</td>
              </tr>
              <tr>
                <td>Без ключа</td>
                <td>—</td>
                <td>Тариф Free: 50 генераций/мес</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-md-6 mb-3">
          <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">Через переменную окружения (рекомендуется)</h4>
          <div class="card pa-3" style="background:#1e1e1e;border-radius:8px;">
            <pre style="color:#9cdcfe;font-size:13px;margin:0;"><span style="color:#6a9955;"># .env</span>
PIXINLINK_API_KEY=pk_live_ваш_ключ
<span style="color:#6a9955;"># Python</span>
<span style="color:#c586c0;">import</span> os
client = PixInLink()  <span style="color:#6a9955;"># читает из env автоматически</span></pre>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">Явная передача (только для тестов)</h4>
          <div class="card pa-3" style="background:#1e1e1e;border-radius:8px;">
            <pre style="color:#9cdcfe;font-size:13px;margin:0;">client = PixInLink(api_key=<span style="color:#ce9178;">"pk_live_abc123"</span>)
<span style="color:#6a9955;"># ⚠️ Не коммитить в git!</span></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- СПРАВОЧНИК МЕТОДОВ -->
<div class="container" id="sdk-python-methods">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Полный справочник методов</h2>
      <!-- image_url() -->
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #2e7d32;">
        <div class="d-flex align-items-center mb-3">
          <div class="badge mr-2" style="background:#e8f5e9;color:#2e7d32;font-size:13px;padding:4px 10px;font-family:monospace;border-radius:4px;">image_url()</div>
          <span class="body-2 text-muted">Формирование URL — без сетевого запроса</span>
        </div>
        <p class="body-2 mb-3" style="line-height:1.75;">Конструирует и возвращает строку URL без реального HTTP-запроса. Идеально для генерации мета-тегов и <code>&lt;img src=&gt;</code> в HTML-шаблонах.</p>
        <div class="card pa-3 mb-2" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.7;">url: str = client.image_url(
    prompt=<span style="color:#ce9178;">"кофе на деревянном столе"</span>,
    width=<span style="color:#b5cea8;">1200</span>, height=<span style="color:#b5cea8;">630</span>,
    style=<span style="color:#ce9178;">"realistic"</span>,
    format=<span style="color:#ce9178;">"webp"</span>,
    seed=<span style="color:#b5cea8;">42</span>
)
<span style="color:#6a9955;"># → "https://pixinlink.ru/api/v1/1200x630?prompt=...&seed=42"</span></pre>
        </div>
        <p class="body-2 m-0 text-muted">Возвращает: <code>str</code>. Сетевые запросы не выполняются.</p>
      </div>
      <!-- download() -->
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #1976d2;">
        <div class="d-flex align-items-center mb-3">
          <div class="badge mr-2" style="background:#e3f2fd;color:#1976d2;font-size:13px;padding:4px 10px;font-family:monospace;border-radius:4px;">download()</div>
          <span class="body-2 text-muted">Скачивание на диск — с поллингом при cache miss</span>
        </div>
        <p class="body-2 mb-3" style="line-height:1.75;">Инициирует GET-запрос, автоматически обходит SVG-плейсхолдеры (до 5 попыток × 5 сек), сохраняет готовый файл по указанному пути.</p>
        <div class="card pa-3 mb-2" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.7;">path = client.download(
    <span style="color:#ce9178;">"рыжая кошка на подоконнике"</span>,
    output_path=<span style="color:#ce9178;">"images/cat.webp"</span>,
    width=<span style="color:#b5cea8;">800</span>, height=<span style="color:#b5cea8;">400</span>,
    seed=<span style="color:#b5cea8;">42</span>
)
print(f<span style="color:#ce9178;">"Сохранено: {path}"</span>)</pre>
        </div>
        <p class="body-2 m-0 text-muted">Возвращает: <code>pathlib.Path</code>. При Cache Miss ждёт генерацию автоматически.</p>
      </div>
      <!-- generate() -->
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #fb8c00;">
        <div class="d-flex align-items-center mb-3">
          <div class="badge mr-2" style="background:#fff8e1;color:#e65100;font-size:13px;padding:4px 10px;font-family:monospace;border-radius:4px;">generate()</div>
          <span class="body-2 text-muted">Генерация в памяти — байты без сохранения на диск</span>
        </div>
        <p class="body-2 mb-3" style="line-height:1.75;">Возвращает сырые байты изображения (<code>bytes</code>). Оптимально для немедленной передачи в Pillow, отправки в S3 или HTTP-ответа без промежуточного файла.</p>
        <div class="card pa-3 mb-2" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.7;">image_bytes: bytes = client.generate(
    <span style="color:#ce9178;">"современный офис в стиле минимализм"</span>,
    width=<span style="color:#b5cea8;">1200</span>, height=<span style="color:#b5cea8;">630</span>,
    style=<span style="color:#ce9178;">"realistic"</span>
)</pre>
        </div>
        <p class="body-2 m-0 text-muted">Возвращает: <code>bytes</code>. Pillow: <code>Image.open(io.BytesIO(image_bytes))</code></p>
      </div>
      <!-- generate_batch() -->
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #8e24aa;">
        <div class="d-flex align-items-center mb-3">
          <div class="badge mr-2" style="background:#f3e5f5;color:#6a1b9a;font-size:13px;padding:4px 10px;font-family:monospace;border-radius:4px;">generate_batch()</div>
          <span class="body-2 text-muted">Пакетная обработка — с авто-соблюдением Rate Limit</span>
        </div>
        <p class="body-2 mb-3" style="line-height:1.75;">Параллельная генерация списка промптов с автоматическим соблюдением Rate Limit. На Business: до 600 req/min. На Free: 5 req/min.</p>
        <div class="card pa-3 mb-2" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.7;">requests = [
    {<span style="color:#ce9178;">"prompt"</span>: <span style="color:#ce9178;">"закат в горах"</span>,    <span style="color:#ce9178;">"width"</span>: <span style="color:#b5cea8;">1200</span>, <span style="color:#ce9178;">"height"</span>: <span style="color:#b5cea8;">630</span>},
    {<span style="color:#ce9178;">"prompt"</span>: <span style="color:#ce9178;">"утренний кофе"</span>,   <span style="color:#ce9178;">"width"</span>: <span style="color:#b5cea8;">800</span>,  <span style="color:#ce9178;">"height"</span>: <span style="color:#b5cea8;">400</span>},
    {<span style="color:#ce9178;">"prompt"</span>: <span style="color:#ce9178;">"офис разработчиков"</span>, <span style="color:#ce9178;">"width"</span>: <span style="color:#b5cea8;">1200</span>, <span style="color:#ce9178;">"height"</span>: <span style="color:#b5cea8;">630</span>},
]
results = client.generate_batch(
    requests,
    output_dir=<span style="color:#ce9178;">"blog_images/"</span>,
    max_concurrent=<span style="color:#b5cea8;">3</span>
)
<span style="color:#6a9955;"># results: [{path: ..., status: "ok"}, ...]</span></pre>
        </div>
        <p class="body-2 m-0 text-muted">Возвращает: <code>list[dict]</code> с <code>path</code>, <code>status</code>, <code>url</code>.</p>
      </div>
      <!-- quota() -->
      <div class="card paper pa-4 mb-5" style="border-left:4px solid #00838f;">
        <div class="d-flex align-items-center mb-3">
          <div class="badge mr-2" style="background:#e0f7fa;color:#00695c;font-size:13px;padding:4px 10px;font-family:monospace;border-radius:4px;">quota()</div>
          <span class="body-2 text-muted">Остаток лимитов — <code>/api/v1/user/quota</code></span>
        </div>
        <div class="card pa-3 mb-2" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.7;">info = client.quota()
print(f<span style="color:#ce9178;">"Тариф: {info['plan']}"</span>)
print(f<span style="color:#ce9178;">"Использовано: {info['used']}/{info['limit']}"</span>)
print(f<span style="color:#ce9178;">"Сброс: {info['reset_at']}"</span>)</pre>
        </div>
        <p class="body-2 m-0 text-muted">Возвращает: <code>dict</code> с <code>plan</code>, <code>used</code>, <code>limit</code>, <code>reset_at</code>.</p>
      </div>
    </div>
  </div>
</div>
<!-- АСИНХРОННЫЙ КЛИЕНТ -->
<div class="container" id="sdk-python-async">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">AsyncPixInLink — асинхронный клиент</h2>
      <p class="body-1 mb-3" style="line-height:1.75;">
        Класс <code>AsyncPixInLink</code> разработан для <strong>FastAPI</strong>, <strong>aiohttp</strong>
        и любого asyncio-приложения. Не блокирует event loop во время генерации (~8 сек).
        Требует <code>httpx[asyncio]</code>.
      </p>
      <div class="card pa-3 mb-5" style="background:#1e1e1e;border-radius:10px;">
        <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.8;"><span style="color:#c586c0;">import</span> asyncio
<span style="color:#c586c0;">from</span> pixinlink <span style="color:#c586c0;">import</span> AsyncPixInLink
<span style="color:#c586c0;">async def</span> <span style="color:#dcdcaa;">main</span>():
    <span style="color:#c586c0;">async with</span> AsyncPixInLink(api_key=<span style="color:#ce9178;">"pk_live_..."</span>) <span style="color:#c586c0;">as</span> client:
        <span style="color:#6a9955;"># Параллельная генерация нескольких изображений</span>
        tasks = [
            client.generate(<span style="color:#ce9178;">"закат над горами"</span>,     width=<span style="color:#b5cea8;">1200</span>, height=<span style="color:#b5cea8;">630</span>),
            client.generate(<span style="color:#ce9178;">"утренний туман в лесу"</span>, width=<span style="color:#b5cea8;">1200</span>, height=<span style="color:#b5cea8;">630</span>),
            client.generate(<span style="color:#ce9178;">"киберпанк ночной город"</span>, width=<span style="color:#b5cea8;">800</span>,  height=<span style="color:#b5cea8;">400</span>),
        ]
        results = <span style="color:#c586c0;">await</span> asyncio.gather(*tasks)
        print(f<span style="color:#ce9178;">"Сгенерировано {len(results)} изображений"</span>)
asyncio.run(main())</pre>
      </div>
    </div>
  </div>
</div>
<!-- СЦЕНАРИИ ИНТЕГРАЦИИ -->
<div class="container" id="sdk-python-integrations">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Сценарии интеграции</h2>
      <!-- FastAPI -->
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #00897b;">
        <div class="d-flex align-items-center mb-3">
          <span style="font-size:22px;margin-right:10px;">⚡</span>
          <h3 class="headline mb-0" style="font-size:18px;font-weight:700;">FastAPI: динамический og:image для блога</h3>
        </div>
        <p class="body-2 mb-3" style="line-height:1.75;">Эндпоинт генерирует уникальный <code>og:image</code> для каждого slug. Изображение кешируется на CDN 1 год — повторные запросы мгновенны.</p>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.8;"><span style="color:#c586c0;">from</span> fastapi <span style="color:#c586c0;">import</span> FastAPI
<span style="color:#c586c0;">from</span> fastapi.responses <span style="color:#c586c0;">import</span> RedirectResponse
<span style="color:#c586c0;">from</span> pixinlink <span style="color:#c586c0;">import</span> AsyncPixInLink
<span style="color:#c586c0;">from</span> pixinlink.utils <span style="color:#c586c0;">import</span> seed_from_string
app = FastAPI()
pixinlink = AsyncPixInLink()
<span style="color:#dcdcaa;">@app.get</span>(<span style="color:#ce9178;">"/og-image/{slug}"</span>)
<span style="color:#c586c0;">async def</span> <span style="color:#dcdcaa;">og_image</span>(slug: str):
    prompt = slug.replace(<span style="color:#ce9178;">"-"</span>, <span style="color:#ce9178;">" "</span>)
    url = pixinlink.image_url(
        prompt,
        width=<span style="color:#b5cea8;">1200</span>, height=<span style="color:#b5cea8;">630</span>,
        seed=seed_from_string(slug)  <span style="color:#6a9955;"># один slug = стабильный seed</span>
    )
    <span style="color:#c586c0;">return</span> RedirectResponse(url=url, status_code=<span style="color:#b5cea8;">302</span>)</pre>
        </div>
      </div>
      <!-- Django -->
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #1976d2;">
        <div class="d-flex align-items-center mb-3">
          <span style="font-size:22px;margin-right:10px;">🟢</span>
          <h3 class="headline mb-0" style="font-size:18px;font-weight:700;">Django: template tag + прогрев кеша</h3>
        </div>
        <p class="body-2 mb-3" style="line-height:1.75;">Встроенный тег для шаблонизатора. Сигнал <code>post_save</code> прогревает CDN-кеш при публикации статьи.</p>
        <div class="card pa-3 mb-3" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.8;"><span style="color:#6a9955;">{# В шаблоне #}</span>
{% load pixinlink_tags %}
&lt;meta property=<span style="color:#ce9178;">"og:image"</span>
  content=<span style="color:#ce9178;">"{% pixinlink_url article.title width=1200 height=630 seed_key=article.slug %}"</span>&gt;
&lt;img src=<span style="color:#ce9178;">"{% pixinlink_url 'кофе на столе' width=800 height=400 seed_key=article.slug %}"</span>&gt;</pre>
        </div>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.8;"><span style="color:#6a9955;"># Прогрев CDN при публикации</span>
<span style="color:#c586c0;">from</span> django.db.models.signals <span style="color:#c586c0;">import</span> post_save
<span style="color:#c586c0;">from</span> django.dispatch <span style="color:#c586c0;">import</span> receiver
<span style="color:#c586c0;">from</span> pixinlink <span style="color:#c586c0;">import</span> PixInLink
client = PixInLink()
<span style="color:#dcdcaa;">@receiver</span>(post_save, sender=Article)
<span style="color:#c586c0;">def</span> <span style="color:#dcdcaa;">warmup_og_image</span>(sender, instance, created, **kwargs):
    <span style="color:#c586c0;">if</span> created:
        client.generate(instance.title, width=<span style="color:#b5cea8;">1200</span>, height=<span style="color:#b5cea8;">630</span>)</pre>
        </div>
      </div>
      <!-- Jupyter -->
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #f57f17;">
        <div class="d-flex align-items-center mb-3">
          <span style="font-size:22px;margin-right:10px;">📓</span>
          <h3 class="headline mb-0" style="font-size:18px;font-weight:700;">Jupyter Notebook: прототипирование и Data Science</h3>
        </div>
        <p class="body-2 mb-3" style="line-height:1.75;">Генерация прямо в ноутбуке. Комбинация с <code>ipywidgets</code> для сравнения стилей в реальном времени.</p>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.8;"><span style="color:#c586c0;">from</span> IPython.display <span style="color:#c586c0;">import</span> Image, display
<span style="color:#c586c0;">from</span> pixinlink <span style="color:#c586c0;">import</span> PixInLink
client = PixInLink()
<span style="color:#6a9955;"># Сравнение стилей для одного промпта</span>
<span style="color:#c586c0;">for</span> style <span style="color:#c586c0;">in</span> [<span style="color:#ce9178;">"realistic"</span>, <span style="color:#ce9178;">"artistic"</span>, <span style="color:#ce9178;">"sketch"</span>, <span style="color:#ce9178;">"3d-render"</span>]:
    img_bytes = client.generate(<span style="color:#ce9178;">"киберпанк ночной город"</span>, width=<span style="color:#b5cea8;">400</span>, height=<span style="color:#b5cea8;">250</span>, style=style)
    print(f<span style="color:#ce9178;">"\nСтиль: {style}"</span>)
    display(Image(data=img_bytes, width=<span style="color:#b5cea8;">400</span>))</pre>
        </div>
      </div>
      <!-- S3 / Yandex S3 -->
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #e53935;">
        <div class="d-flex align-items-center mb-3">
          <span style="font-size:22px;margin-right:10px;">☁️</span>
          <h3 class="headline mb-0" style="font-size:18px;font-weight:700;">Yandex S3 / AWS S3: сохранение в облачное хранилище</h3>
        </div>
        <p class="body-2 mb-3" style="line-height:1.75;">Комбинация <code>generate()</code> с <code>boto3</code> для прямой загрузки в S3 без промежуточного файла.</p>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.8;"><span style="color:#c586c0;">import</span> boto3
<span style="color:#c586c0;">from</span> pixinlink <span style="color:#c586c0;">import</span> PixInLink
client = PixInLink()
s3 = boto3.client(<span style="color:#ce9178;">"s3"</span>,
    endpoint_url=<span style="color:#ce9178;">"https://storage.yandexcloud.net"</span>,
    region_name=<span style="color:#ce9178;">"ru-central1"</span>
)
image_bytes = client.generate(<span style="color:#ce9178;">"утренний офис"</span>, width=<span style="color:#b5cea8;">1200</span>, height=<span style="color:#b5cea8;">630</span>)
s3.put_object(
    Bucket=<span style="color:#ce9178;">"my-media-bucket"</span>,
    Key=<span style="color:#ce9178;">"og/article-header.webp"</span>,
    Body=image_bytes,
    ContentType=<span style="color:#ce9178;">"image/webp"</span>,
    CacheControl=<span style="color:#ce9178;">"public, max-age=31536000, immutable"</span>
)</pre>
        </div>
      </div>
      <!-- CLI -->
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #6a1b9a;">
        <div class="d-flex align-items-center mb-3">
          <span style="font-size:22px;margin-right:10px;">💻</span>
          <h3 class="headline mb-0" style="font-size:18px;font-weight:700;">CLI: терминальный инструмент на argparse</h3>
        </div>
        <p class="body-2 mb-3" style="line-height:1.75;">Простой CLI-скрипт для генерации из командной строки. Удобен для CI/CD и bash-скриптов.</p>
        <div class="card pa-3 mb-2" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.8;"><span style="color:#6a9955;"># gen.py</span>
<span style="color:#c586c0;">import</span> argparse
<span style="color:#c586c0;">from</span> pixinlink <span style="color:#c586c0;">import</span> PixInLink
parser = argparse.ArgumentParser()
parser.add_argument(<span style="color:#ce9178;">"prompt"</span>)
parser.add_argument(<span style="color:#ce9178;">"-o"</span>, <span style="color:#ce9178;">"--output"</span>, default=<span style="color:#ce9178;">"image.webp"</span>)
parser.add_argument(<span style="color:#ce9178;">"--style"</span>, default=<span style="color:#ce9178;">"realistic"</span>)
parser.add_argument(<span style="color:#ce9178;">"--seed"</span>, type=int)
args = parser.parse_args()
client = PixInLink()
client.download(args.prompt, output_path=args.output, style=args.style, seed=args.seed)
print(f<span style="color:#ce9178;">"✅ Сохранено: {args.output}"</span>)</pre>
        </div>
        <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
          <code style="color:#a5d6a7;font-size:12px;">python gen.py "рыжая кошка на подоконнике" -o cat.webp --style realistic --seed 42</code>
        </div>
      </div>
      <!-- Пакетный прогрев блога -->
      <div class="card paper pa-4 mb-5" style="border-left:4px solid #2e7d32;">
        <div class="d-flex align-items-center mb-3">
          <span style="font-size:22px;margin-right:10px;">🔥</span>
          <h3 class="headline mb-0" style="font-size:18px;font-weight:700;">Batch-прогрев: 300 статей за один запуск</h3>
        </div>
        <p class="body-2 mb-3" style="line-height:1.75;">Один скрипт прогревает CDN-кеш для всех публикаций сайта. После запуска первый репост каждой статьи будет мгновенным.</p>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.8;"><span style="color:#c586c0;">from</span> pixinlink <span style="color:#c586c0;">import</span> PixInLink
<span style="color:#c586c0;">from</span> pixinlink.utils <span style="color:#c586c0;">import</span> seed_from_string
client = PixInLink(api_key=<span style="color:#ce9178;">"pk_live_..."</span>)
<span style="color:#6a9955;"># articles — ваш список slug + title</span>
requests = [
    {<span style="color:#ce9178;">"prompt"</span>: a.title, <span style="color:#ce9178;">"seed"</span>: seed_from_string(a.slug),
     <span style="color:#ce9178;">"width"</span>: <span style="color:#b5cea8;">1200</span>, <span style="color:#ce9178;">"height"</span>: <span style="color:#b5cea8;">630</span>}
    <span style="color:#c586c0;">for</span> a <span style="color:#c586c0;">in</span> articles
]
results = client.generate_batch(requests, output_dir=<span style="color:#ce9178;">"og_images/"</span>, max_concurrent=<span style="color:#b5cea8;">5</span>)
ok = sum(<span style="color:#b5cea8;">1</span> <span style="color:#c586c0;">for</span> r <span style="color:#c586c0;">in</span> results <span style="color:#c586c0;">if</span> r[<span style="color:#ce9178;">"status"</span>] == <span style="color:#ce9178;">"ok"</span>)
print(f<span style="color:#ce9178;">"✅ Прогрето {ok}/{len(results)} изображений"</span>)</pre>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- УТИЛИТЫ -->
<div class="container" id="sdk-python-utils">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Утилиты: <code>pixinlink.utils</code></h2>
      <div class="row mb-5">
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #00838f;">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;"><code>seed_from_string(text)</code></h4>
            <p class="body-2 mb-3" style="line-height:1.75;">Вычисляет детерминированный <code>int</code> из строки по алгоритму crc32. Один slug = всегда одинаковый seed = стабильный <code>og:image</code>.</p>
            <div class="card pa-3" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;">from pixinlink.utils import seed_from_string
seed = seed_from_string("kak-pravilno-pit-kofe")
# → 847392145 (всегда)</pre>
            </div>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #8e24aa;">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;"><code>ImageSize</code> — пресеты размеров</h4>
            <p class="body-2 mb-3" style="line-height:1.75;">Стандартизированные пресеты для часто используемых форматов. Исключает опечатки в размерах.</p>
            <div class="card pa-3" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;">from pixinlink.utils import ImageSize
# OG_IMAGE: 1200×630
# STORY:    1080×1920
# SQUARE:   1080×1080
# HEADER:   1600×900
url = client.image_url("промпт", **ImageSize.OG_IMAGE)</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ИСКЛЮЧЕНИЯ -->
<div class="container" id="sdk-python-exceptions">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Иерархия исключений</h2>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Исключение</th><th>Когда возникает</th><th>Как обработать</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td><code>PixInLinkError</code></td><td>Базовый класс, все ошибки SDK</td><td><code>except PixInLinkError as e</code></td></tr>
              <tr><td><code>QuotaExceededError</code></td><td>Исчерпан месячный лимит генераций</td><td>Обновить тариф или подождать сброса</td></tr>
              <tr><td><code>RateLimitError</code></td><td>Превышен rate limit (429)</td><td>Уменьшить <code>max_concurrent</code></td></tr>
              <tr><td><code>AIProviderError</code></td><td>Сбой на стороне Kandinsky / FLUX</td><td>Retry через 30–60 сек</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card pa-3 mb-5" style="background:#1e1e1e;border-radius:8px;">
        <pre style="color:#9cdcfe;font-size:13px;margin:0;line-height:1.8;"><span style="color:#c586c0;">from</span> pixinlink.exceptions <span style="color:#c586c0;">import</span> QuotaExceededError, RateLimitError, AIProviderError
<span style="color:#c586c0;">try</span>:
    img = client.generate(<span style="color:#ce9178;">"горный закат"</span>, width=<span style="color:#b5cea8;">1200</span>, height=<span style="color:#b5cea8;">630</span>)
<span style="color:#c586c0;">except</span> QuotaExceededError:
    print(<span style="color:#ce9178;">"Квота исчерпана. Обновите тариф: pixinlink.ru/pricing"</span>)
<span style="color:#c586c0;">except</span> RateLimitError <span style="color:#c586c0;">as</span> e:
    print(f<span style="color:#ce9178;">"Rate limit. Повтор через {e.retry_after} сек"</span>)
<span style="color:#c586c0;">except</span> AIProviderError:
    print(<span style="color:#ce9178;">"Сбой AI-провайдера. Попробуйте через 60 сек"</span>)</pre>
      </div>
    </div>
  </div>
</div>
<!-- CHANGELOG -->
<div class="container" id="sdk-python-changelog">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">История версий</h2>
      <div class="card paper pa-0 mb-5 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Версия</th><th>Дата</th><th>Что добавлено</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td><strong>1.5.0</strong></td><td>Апрель 2026</td><td>Python 3.13, совместимость с uv, формат AVIF</td></tr>
              <tr><td>1.4.0</td><td>Февраль 2026</td><td>Формат AVIF, коллбэки <code>on_progress</code></td></tr>
              <tr><td>1.3.0</td><td>Декабрь 2025</td><td>Проверка квоты <code>quota()</code>, строгая типизация исключений</td></tr>
              <tr><td>1.2.0</td><td>Сентябрь 2025</td><td><code>seed_from_string()</code>, пресеты <code>ImageSize</code>, Django-теги</td></tr>
              <tr><td>1.1.0</td><td>Май 2025</td><td>AsyncPixInLink, пакетная генерация <code>generate_batch()</code></td></tr>
              <tr><td>1.0.0</td><td>Февраль 2025</td><td>Базовый функционал: <code>image_url()</code>, <code>download()</code>, <code>generate()</code></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- FAQ -->
<div class="container" id="sdk-python-faq">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Частые вопросы</h2>
      <div class="faq-list mb-5">
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">SDK или прямой requests?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">SDK незаменим для продакшна: обрабатывает cache miss, повторные попытки при 429, кодирование кириллицы и управление квотой. Прямой <code>requests</code> подходит только для одноразовых скриптов без retry-логики.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Работает ли SDK в Serverless (AWS Lambda, Yandex Cloud Functions)?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Да. Но таймаут выполнения нужно увеличить минимум до <strong>60 секунд</strong> — генерация при cache miss занимает 8–10 сек, плюс поллинг. По умолчанию Lambda-таймаут = 3 сек.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как SDK обрабатывает SVG-placeholder?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Автоматически: читает заголовок <code>Content-Type</code>, при <code>image/svg+xml</code> ждёт 5 секунд и повторяет запрос — до 5 попыток. Вам не нужно писать эту логику самостоятельно.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Можно ли использовать SDK в многопоточном окружении?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Синхронный <code>PixInLink</code> — thread-safe для параллельных запросов. Для asyncio-приложений используйте <code>AsyncPixInLink</code> — он не блокирует event loop.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Pillow обязателен?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Нет. Pillow — опциональная зависимость. Нужна только если вы обрабатываете байты изображений в памяти: <code>Image.open(io.BytesIO(image_bytes))</code>. Для <code>download()</code> и <code>image_url()</code> Pillow не нужен.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как узнать остаток квоты из кода?</h4>
          <p class="body-1 m-0" style="line-height:1.75;"><code>info = client.quota()</code> возвращает <code>dict</code> с полями <code>plan</code>, <code>used</code>, <code>limit</code>, <code>reset_at</code>. Удобно для логирования в CI/CD и мониторинга в production.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- E-E-A-T -->
<div class="container" id="sdk-python-eeaat">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="card paper pa-4 mb-5" style="background:#fafafa;border:1px solid #e0e0e0;border-radius:8px;">
        <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">О документации</h4>
        <p class="body-2 mb-0" style="line-height:1.75;">
          SDK PixInLink разработан официальной командой платформы.
          Документация актуальна для версии <strong>1.5.0</strong> (апрель 2026).
          Исходный код: <a href="https://github.com/pixinlink/pixinlink-python" target="_blank">github.com/pixinlink/pixinlink-python</a>.
          Вопросы и issues: <a href="https://t.me/pixinlinkdev">@pixinlinkdev</a> · <a href="mailto:dev@pixinlink.ru">dev@pixinlink.ru</a>.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- CTA -->
<div class="container" id="sdk-python-cta">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="text-center mb-5 pa-5" style="background:linear-gradient(135deg,#e8f5e9 0%,#e3f2fd 100%);border-radius:16px;">
        <h3 class="display-2 mb-3" style="font-size:26px;font-weight:700;">Начните прямо сейчас</h3>
        <p class="body-1 text-muted mb-4">Одна команда в терминале:</p>
        <div class="pa-3 mb-4" style="background:#1e1e1e;border-radius:8px;display:inline-block;min-width:260px;">
          <code style="color:#a5d6a7;font-size:16px;">pip install pixinlink</code>
        </div>
        <p class="body-2 text-muted mb-4">50 генераций бесплатно. Нужно больше? Starter — 490 ₽/мес, 500 генераций.</p>
        <div class="d-flex justify-content-center flex-wrap" style="gap:16px;">
          <a href="/pricing/starter" class="btn-flat btn-rounded"
             style="background:#2e7d32;color:#fff;padding:12px 32px;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
            Starter — 490 ₽/мес
          </a>
          <a href="https://github.com/pixinlink/pixinlink-python" target="_blank"
             class="btn-flat btn-rounded"
             style="background:#24292e;color:#fff;padding:12px 32px;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
            GitHub →
          </a>
          <a href="/features/url-api" class="btn-flat btn-rounded"
             style="background:#e8f5e9;color:#2e7d32;padding:12px 32px;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
            URL API →
          </a>
        </div>
        <p class="body-2 text-muted mt-3 mb-0">Технические вопросы: <a href="https://t.me/pixinlinkdev">@pixinlinkdev</a> · <a href="mailto:dev@pixinlink.ru">dev@pixinlink.ru</a></p>
      </div>
      <!-- Смежные материалы -->
      <div class="row mb-5">
        <div class="col-md-3 mb-3">
          <a href="/features/url-api" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <p class="body-2 text-primary mb-1">→ Возможности</p>
            <p class="body-1 mb-0 font-weight-bold">URL API: полный справочник</p>
          </a>
        </div>
        <div class="col-md-3 mb-3">
          <a href="/features/kak-rabotaet-ai" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <p class="body-2 text-primary mb-1">→ Возможности</p>
            <p class="body-1 mb-0 font-weight-bold">Как работает ИИ-пайплайн</p>
          </a>
        </div>
        <div class="col-md-3 mb-3">
          <a href="/docs/getting-started" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <p class="body-2 text-primary mb-1">→ Документация</p>
            <p class="body-1 mb-0 font-weight-bold">Начало работы за 60 сек</p>
          </a>
        </div>
        <div class="col-md-3 mb-3">
          <a href="https://pixinlink.ru/pricing/" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <p class="body-2 text-primary mb-1">→ Тарифы</p>
            <p class="body-1 mb-0 font-weight-bold">Starter, Pro, Business</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
