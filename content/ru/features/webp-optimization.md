---
title: "WebP и AVIF из коробки: каждое изображение оптимизируется автоматически"
description: "Как PixInLink автоматически конвертирует изображения в WebP и AVIF, влияние на PageSpeed и LCP, сравнение с ручной конвертацией, примеры кода."
slug: "features/webp-optimization"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "WebPage"
---
<main class="container-wrap">

<!-- HERO -->
<div class="container mt-5 pt-5 mb-4" id="webp-header">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="d-flex align-items-center mb-3">
        <a href="https://pixinlink.ru/features/" class="badge" style="background:#e8eaf6;color:#3949ab;border-radius:4px;padding:5px 10px;">Возможности</a>
        <span class="ml-2 text-muted" style="font-size:14px;">/</span>
        <span class="ml-2 text-muted" style="font-size:14px;">WebP-оптимизация</span>
      </div>
      <p class="use-text-subtitle2 text-muted" style="font-size:1.2rem;line-height:1.6;margin-bottom:24px;">
        Не нужно конвертировать вручную или ставить плагины — PixInLink генерирует изображение сразу в WebP (50 KB вместо 300 KB PNG) и доставляет через геораспределенный CDN.
      </p>
      <div class="card pa-0 mb-4" style="background:#1e1e1e;border-radius:12px;overflow:hidden;">
        <div class="pa-2 d-flex align-items-center" style="background:#2d2d2d;border-bottom:1px solid #3a3a3a;">
          <span style="color:#9cdcfe;font-size:12px;font-family:monospace;">HTML</span>
          <span class="ml-auto" style="color:#6a9955;font-size:11px;">&lt;!-- По умолчанию отдаётся WebP, экономя 85% веса --&gt;</span>
        </div>
        <div class="pa-4">
          <pre style="color:#9cdcfe;font-size:14px;line-height:1.8;margin:0;">&lt;img src=<span style="color:#ce9178;">"https://pixinlink.ru/800x400?prompt=офис-разработчиков"</span>
     alt=<span style="color:#ce9178;">"Офис разработчиков"</span>
     loading=<span style="color:#ce9178;">"lazy"</span>&gt;</pre>
        </div>
      </div>
      <div class="mt-4 d-flex flex-wrap" style="gap:12px;">
        <a href="#test-difference" class="btn-flat btn-rounded"
           style="background:#3949ab;color:#fff;padding:10px 24px;font-weight:600;text-decoration:none;">
          Проверить разницу ↓
        </a>
        <a href="https://pixinlink.ru/docs/getting-started/" class="btn-flat btn-rounded"
           style="background:#e8eaf6;color:#3949ab;padding:10px 24px;text-decoration:none;">
          Начать бесплатно →
        </a>
      </div>
    </div>
  </div>
</div>
<!-- TL;DR -->
<div class="container" id="webp-tldr">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="card paper pa-4 mb-5" style="background:#f8fff7;border-left:4px solid #43a047;box-shadow:none;">
        <h3 class="headline mb-3" style="font-size:20px;color:#2e7d32;">TL;DR</h3>
        <p class="body-1 m-0" style="line-height:1.9;">
          PixInLink автоматически генерирует и отдаёт изображения в формате <strong>WebP</strong> (quality=85). Это закрывает аудит <em>«Serve images in next-gen formats»</em> в Google PageSpeed. Формат <strong>AVIF</strong> доступен через параметр <code>&amp;format=avif</code>. Размер файла падает с ~300 KB (PNG) до <strong>~50 KB</strong>, ускоряя загрузку (LCP) в 6 раз. Дополнительная квота за оптимизацию <strong>не списывается</strong>.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- KEY FACTS -->
<div class="container" id="webp-keyfacts">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Ключевые факты</h2>
      <div class="row mb-5">
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #43a047;">
            <div style="font-size:28px;font-weight:700;color:#43a047;">÷6</div>
            <p class="body-2 text-muted mb-0">WebP легче PNG: ~50 KB вместо ~300 KB при разрешении 800×400</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #1976d2;">
            <div style="font-size:28px;font-weight:700;color:#1976d2;">85 / 50</div>
            <p class="body-2 text-muted mb-0">Параметры <code>quality</code> для WebP (85) и AVIF (50) — оптимальный баланс</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #fb8c00;">
            <div style="font-size:28px;font-weight:700;color:#fb8c00;">97%</div>
            <p class="body-2 text-muted mb-0">Браузерная поддержка WebP (Chrome, Firefox, Safari 14+)</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #8e24aa;">
            <div style="font-size:28px;font-weight:700;color:#8e24aa;">0 руб</div>
            <p class="body-2 text-muted mb-0">Скрытых платежей за оптимизацию — включено во все тарифы (даже Free)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ВВЕДЕНИЕ: Почему PNG убивает PageSpeed -->
<div class="container" id="webp-intro">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-3" style="font-size:24px;font-weight:700;">Почему PNG «убивает» PageSpeed</h2>
      <p class="body-1 mb-3" style="line-height:1.85;">
        Google PageSpeed Insights жестко пессимизирует страницы за устаревшие форматы графики. Аудит
        <strong>«Serve images in next-gen formats»</strong> требует отдавать пользователям WebP или AVIF.
        Несоответствие этому правилу напрямую снижает Performance Score и увеличивает время отрисовки контента.
      </p>
      <p class="body-1 mb-3" style="line-height:1.85;">
        Типичная иллюстрация для статьи в формате PNG при разрешении 800×400 пикселей весит около <strong>300 KB</strong>.
        На мобильном 4G-соединении загрузка такого файла занимает примерно <strong>1.2 секунды</strong>.
        Аналогичное изображение в формате WebP с параметром <code>quality=85</code> весит около <strong>50 KB</strong>,
        что сокращает время скачивания до <strong>0.2 секунды</strong>.
      </p>
      <div class="card paper pa-4 mb-5" style="background:#fff8e1;border-left:4px solid #ffb300;">
        <p class="body-2 m-0" style="line-height:1.75;">
          Большинство разработчиков решают эту проблему локальной конвертацией или тяжелыми плагинами.
          Но при ИИ-генерации каждое изображение уникально. Ручная конвертация ломает автоматизацию.
          <strong>PixInLink решает это на уровне архитектуры:</strong> конвертация происходит автоматически до записи в S3.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- ТРИ ФОРМАТА -->
<div class="container" id="webp-formats">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Три формата — когда что использовать</h2>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Формат</th><th>Как запросить</th><th>Размер (800×400)</th><th>Поддержка</th><th>Когда использовать</th></tr>
            </thead>
            <tbody class="body-2">
              <tr style="background:#e8f5e9;">
                <td><strong>WebP</strong> (по умолчанию)</td>
                <td>—</td>
                <td style="color:#2e7d32;font-weight:700;">~50 KB</td>
                <td>97% (Safari 14+)</td>
                <td>Основной формат для всего сайта, лучший баланс</td>
              </tr>
              <tr>
                <td><strong>AVIF</strong></td>
                <td><code>&amp;format=avif</code></td>
                <td style="color:#2e7d32;font-weight:700;">~35 KB</td>
                <td>~85% (Safari 17+)</td>
                <td>Максимальная оптимизация для LCP (нужен fallback)</td>
              </tr>
              <tr>
                <td><strong>PNG</strong></td>
                <td><code>&amp;format=png</code></td>
                <td style="color:#e53935;">~300 KB</td>
                <td>100%</td>
                <td>Только если прозрачность или алгоритмы с потерями недопустимы</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p class="body-2 text-muted mb-5">WebP — правильный выбор по умолчанию. AVIF на 30% легче WebP, но требует тега <code>&lt;picture&gt;</code> с PNG-fallback для старых браузеров.</p>
    </div>
  </div>
</div>
<!-- ПРИМЕРЫ КОДА -->
<div class="container" id="webp-code">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Примеры использования</h2>
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #3949ab;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Базовый сценарий</h4>
        <p class="body-2 mb-2">Ничего указывать не нужно, сервер вернёт <strong>WebP</strong>.</p>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:6px;">
          <pre style="color:#9cdcfe;font-size:13px;line-height:1.7;margin:0;">&lt;!-- WebP отдаётся автоматически --&gt;
&lt;img src=<span style="color:#ce9178;">"https://pixinlink.ru/800x400?prompt=офис-разработчиков"</span>
     alt=<span style="color:#ce9178;">"Офис разработчиков"</span>
     loading=<span style="color:#ce9178;">"lazy"</span>&gt;</pre>
        </div>
      </div>
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #43a047;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Оптимально для продакшена</h4>
        <p class="body-2 mb-2">Тег <code>&lt;picture&gt;</code>: <strong>AVIF</strong> для современных браузеров, <strong>WebP</strong> для остальных.</p>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:6px;">
          <pre style="color:#9cdcfe;font-size:13px;line-height:1.7;margin:0;">&lt;picture&gt;
  &lt;source srcset=<span style="color:#ce9178;">"https://pixinlink.ru/800x400?prompt=офис&amp;format=avif"</span>
          type=<span style="color:#ce9178;">"image/avif"</span>&gt;
  &lt;source srcset=<span style="color:#ce9178;">"https://pixinlink.ru/800x400?prompt=офис&amp;format=webp"</span>
          type=<span style="color:#ce9178;">"image/webp"</span>&gt;
  &lt;img src=<span style="color:#ce9178;">"https://pixinlink.ru/800x400?prompt=офис"</span>
       alt=<span style="color:#ce9178;">"Офис"</span> loading=<span style="color:#ce9178;">"lazy"</span>&gt;
&lt;/picture&gt;</pre>
        </div>
      </div>
      <div class="card paper pa-4 mb-5" style="border-left:4px solid #e65100;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">LCP-элемент (Hero баннер)</h4>
        <p class="body-2 mb-2">Предварительная загрузка сверхлегкого AVIF без <code>loading="lazy"</code>.</p>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:6px;">
          <pre style="color:#9cdcfe;font-size:13px;line-height:1.7;margin:0;">&lt;!-- В &lt;head&gt; --&gt;
&lt;link rel=<span style="color:#ce9178;">"preload"</span> as=<span style="color:#ce9178;">"image"</span>
      href=<span style="color:#ce9178;">"https://pixinlink.ru/1200x630?prompt=баннер&amp;format=avif"</span>
      imagesrcset=<span style="color:#ce9178;">"https://pixinlink.ru/1200x630?prompt=баннер&amp;format=avif"</span>&gt;
&lt;!-- В &lt;body&gt; --&gt;
&lt;picture&gt;
  &lt;source srcset=<span style="color:#ce9178;">"https://pixinlink.ru/1200x630?prompt=баннер&amp;format=avif"</span>
          type=<span style="color:#ce9178;">"image/avif"</span>&gt;
  &lt;img src=<span style="color:#ce9178;">"https://pixinlink.ru/1200x630?prompt=баннер"</span>
       alt=<span style="color:#ce9178;">"Главный баннер"</span> fetchpriority=<span style="color:#ce9178;">"high"</span>&gt;
&lt;/picture&gt;</pre>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ЧТО ПРОИСХОДИТ ВНУТРИ -->
<div class="container" id="webp-pipeline">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Что происходит внутри: от генерации до WebP</h2>
      <div class="card paper pa-4 mb-5" style="border:1px solid #e0e0e0;border-radius:10px;">
        <ol class="body-1 m-0" style="line-height:1.9;padding-left:20px;">
          <li class="mb-2"><strong>Генерация:</strong> Kandinsky 3.1 или FLUX.1 генерирует изображение в формате PNG (сырой вывод AI-модели).</li>
          <li class="mb-2"><strong>Процессинг:</strong> Конвертация цветового пространства в sRGB для корректного отображения в вебе.</li>
          <li class="mb-2"><strong>Масштабирование:</strong> Resize и center-crop до точных запрошенных размеров (<code>width×height</code>) с использованием LANCZOS-ресемплирования.</li>
          <li class="mb-2"><strong>Watermark:</strong> Накладывается водяной знак (только для пользователей Free-тарифа).</li>
          <li class="mb-2"><strong>Кодирование:</strong> WebP (Pillow, <code>quality=85</code>, <code>method=6</code>); AVIF (pyavif, <code>quality=50</code>); PNG (lossless, <code>optimize=True</code>).</li>
          <li><strong>Очистка и кеш:</strong> Удаляются EXIF/IPTC метаданные для приватности, файл загружается в Yandex S3 и кешируется в CDN на 1 год.</li>
        </ol>
        <div class="pa-3 mt-4" style="background:#e8f5e9;border-left:4px solid #2e7d32;border-radius:4px;">
          <p class="body-2 m-0"><strong>Важно:</strong> Оптимизация происходит ровно один раз. Все повторные запросы отдаются из CDN без кодирования и <strong>не расходуют</strong> квоту генераций.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ВЛИЯНИЕ НА CWV -->
<div class="container" id="webp-cwv">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Как WebP влияет на Core Web Vitals</h2>
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #43a047;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Аудит «Next-gen formats»</h4>
            <p class="body-2 m-0" style="line-height:1.75;">API PixInLink <strong>автоматически закрывает</strong> этот аудит в Google PageSpeed. Ваш Performance Score повышается без настройки локальных обработчиков статики.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #1976d2;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">LCP (Largest Contentful Paint)</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Уменьшение файла Hero-баннера с 300 KB до 50 KB сокращает время передачи по 4G с 1.2 сек до 0.2 сек. Это основной вклад для попадания в «зеленую зону» (&lt; 2.5 сек).</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #8e24aa;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Аудит «Properly size images»</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Передача габаритов в URL гарантирует файл <strong>ровно</strong> запрошенного размера, исключая штрафы Google за oversized images (когда большая картинка сжимается через CSS).</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- СРАВНЕНИЕ С ПЛАГИНАМИ -->
<div class="container" id="webp-compare">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Сравнение: PixInLink vs ручная конвертация</h2>
      <div class="card paper pa-0 mb-5 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr>
                <th>Функция</th>
                <th>PixInLink</th>
                <th>Плагины (ShortPixel, Imagify)</th>
                <th>Вручную (squoosh.app)</th>
              </tr>
            </thead>
            <tbody class="body-2">
              <tr style="background:#e8f5e9;">
                <td><strong>Автоматически</strong></td>
                <td style="color:#2e7d32;font-weight:700;">При генерации (сразу)</td>
                <td>После загрузки</td>
                <td>Каждый файл отдельно</td>
              </tr>
              <tr>
                <td><strong>Работает с ИИ-генерацией</strong></td>
                <td style="color:#2e7d32;font-weight:700;">Нативно</td>
                <td>Отдельный шаг</td>
                <td>Отдельный шаг</td>
              </tr>
              <tr>
                <td><strong>Нагрузка на сервер (хостинг)</strong></td>
                <td style="color:#2e7d32;font-weight:700;">Нет (0 CPU / 0 MB)</td>
                <td style="color:#e53935;">Да (Конвертация грузит CPU)</td>
                <td>Нет</td>
              </tr>
              <tr>
                <td><strong>AVIF-поддержка</strong></td>
                <td style="color:#2e7d32;font-weight:700;">Да <code>&amp;format=avif</code></td>
                <td>Только у части плагинов</td>
                <td>Да</td>
              </tr>
              <tr>
                <td><strong>Стоимость оптимизации</strong></td>
                <td style="color:#2e7d32;font-weight:700;">Включена в тариф (0 руб)</td>
                <td style="color:#e53935;">$5–15/мес отдельно</td>
                <td>Бесплатно, но ручной труд</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- FAQ -->
<div class="container" id="webp-faq">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Частые вопросы</h2>
      <div class="mb-5">
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">WebP отдаётся автоматически или нужно что-то указывать?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Автоматически. Все изображения генерируются в WebP по умолчанию. Формат AVIF нужно запросить явно через параметр <code>&amp;format=avif</code>.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Теряется ли качество при конвертации в WebP?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">При <code>quality=85</code> визуальная разница с исходным PNG практически незаметна. Это стандарт индустрии — Google PageSpeed рекомендует значения от 70 до 85 как оптимальный баланс веса и детализации.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Можно ли получить PNG, если нужна прозрачность?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Да. Добавьте <code>&amp;format=png</code> в URL. Формат PNG отдается без сжатия (lossless) — файл будет большего размера, но полностью без потерь.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">AVIF работает во всех браузерах?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">AVIF поддерживается примерно в 85% браузеров (2026 год). Для полной совместимости используйте HTML-тег <code>&lt;picture&gt;</code> с WebP-fallback, как показано в примерах кода выше.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Оптимизация тратит дополнительную квоту?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Нет. Квота списывается <strong>ровно один раз</strong> при первичной генерации. Конвертация включена в стоимость. Все повторные запросы идут из CDN-кеша бесплатно.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ИНТЕРАКТИВНЫЙ ТЕСТ -->
<div class="container" id="test-difference">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Проверьте разницу прямо сейчас</h2>
      <div class="card paper pa-5 mb-5" style="background:#f3f8ff;border:1px solid #bbdefb;border-radius:10px;">
        <p class="body-1 mb-4" style="line-height:1.75;">
          Откройте эти два URL в браузере и сравните размер загруженного файла во вкладке <strong>Network</strong>
          в инструментах разработчика (DevTools).
        </p>
        <div class="row">
          <div class="col-md-6 mb-3">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;color:#2e7d32;">✅ WebP (по умолчанию)</h4>
            <div class="pa-2" style="background:#fff;border:1px solid #e0e0e0;border-radius:6px;word-break:break-all;">
              <a href="https://pixinlink.ru/api/v1/800x400/современный-офис?style=realistic" target="_blank" style="font-size:13px;font-family:monospace;">
                https://pixinlink.ru/api/v1/800x400/современный-офис?style=realistic
              </a>
            </div>
            <p class="body-2 mt-2 mb-0 text-muted">Ожидаемый вес: <strong>~45–55 KB</strong></p>
          </div>
          <div class="col-md-6 mb-3">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;color:#c62828;">❌ PNG (для сравнения)</h4>
            <div class="pa-2" style="background:#fff;border:1px solid #e0e0e0;border-radius:6px;word-break:break-all;">
              <a href="https://pixinlink.ru/api/v1/800x400/современный-офис?style=realistic&amp;format=png" target="_blank" style="font-size:13px;font-family:monospace;">
                https://pixinlink.ru/api/v1/800x400/современный-офис?style=realistic&amp;format=png
              </a>
            </div>
            <p class="body-2 mt-2 mb-0 text-muted">Ожидаемый вес: <strong>~280–320 KB</strong></p>
          </div>
        </div>
        <p class="body-2 m-0 mt-3 text-muted"><em>Как проверить: DevTools (F12) → Network → обновите страницу → посмотрите колонку Size.</em></p>
      </div>
    </div>
  </div>
</div>
<!-- CTA И СМЕЖНЫЕ МАТЕРИАЛЫ -->
<div class="container" id="webp-cta">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="text-center mb-5 pa-5" style="background:linear-gradient(135deg,#e8eaf6 0%,#e3f2fd 100%);border-radius:16px;">
        <h3 class="display-2 mb-3" style="font-size:26px;font-weight:700;">Ускорьте свой сайт сегодня</h3>
        <p class="body-1 text-muted mb-4">Начните генерировать WebP-изображения из URL без сложных плагинов.</p>
        <div class="d-flex justify-content-center flex-wrap" style="gap:16px;">
          <a href="https://pixinlink.ru/docs/getting-started/" class="btn-flat btn-rounded"
             style="background:#3949ab;color:#fff;padding:12px 32px;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
            Начать бесплатно — 50 генераций
          </a>
          <a href="https://pixinlink.ru/features/" class="btn-flat btn-rounded"
             style="background:#fff;color:#3949ab;border:1px solid #c5cae9;padding:12px 32px;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
            Смотреть все возможности →
          </a>
        </div>
      </div>
      <!-- Карточки навигации -->
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <a href="https://pixinlink.ru/features/kak-rabotaet-ai/" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <p class="body-2 text-primary mb-1">→ Архитектура</p>
            <p class="body-1 mb-0 font-weight-bold">Как работает AI-пайплайн</p>
          </a>
        </div>
        <div class="col-md-4 mb-3">
          <a href="https://pixinlink.ru/features/url-api/" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <p class="body-2 text-primary mb-1">→ Документация</p>
            <p class="body-1 mb-0 font-weight-bold">URL API параметры (format, quality)</p>
          </a>
        </div>
        <div class="col-md-4 mb-3">
          <a href="https://pixinlink.ru/integrations/wordpress/" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <p class="body-2 text-primary mb-1">→ CMS интеграция</p>
            <p class="body-1 mb-0 font-weight-bold">WebP в WordPress</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
