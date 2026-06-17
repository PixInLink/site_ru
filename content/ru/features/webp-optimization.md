---
title: "WebP и AVIF из коробки: каждое изображение оптимизируется автоматически"
description: "PixInLink генерирует изображения сразу в WebP (quality=85, ~50 KB) и AVIF (quality=50). Автоматически, без плагинов и ручной конвертации."
slug: "features/webp-optimization"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "WebPage"
---
<main class="container-wrap container-pages">

<!-- HERO -->
<div class="container mt-5 pt-5 mb-4" id="webp-header">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="d-flex align-items-center mb-3">
        <a href="https://pixinlink.ru/features/" class="badge" style="background:#e8eaf6;color:#3949ab;border-radius:4px;padding:5px 10px;">Возможности</a>
        <span class="ml-2 text-muted" style="font-size:14px;">/</span>
        <span class="ml-2 text-muted" style="font-size:14px;">WebP-оптимизация</span>
      </div>
      <h1 class="use-text-title2">WebP и AVIF из коробки</h1>
      <p class="use-text-subtitle2 text-muted" style="font-size:1.2rem;line-height:1.6;margin-bottom:24px;">
        PixInLink генерирует изображения сразу в WebP (quality=85). ~50 KB вместо ~300 KB PNG — без плагинов, без ручной конвертации, без нагрузки на ваш сервер.
      </p>
      <div class="card pa-0 mb-4" style="background:#1e1e1e;border-radius:12px;overflow:hidden;">
        <div class="pa-2 d-flex align-items-center" style="background:#2d2d2d;border-bottom:1px solid #3a3a3a;">
          <span style="color:#9cdcfe;font-size:12px;font-family:monospace;">HTML</span>
          <span class="ml-auto" style="color:#6a9955;font-size:11px;">По умолчанию отдаётся WebP, экономя 85% веса</span>
        </div>
        <div class="pa-4">
          <pre style="color:#9cdcfe;font-size:14px;line-height:1.8;margin:0;">&lt;img src=<span style="color:#ce9178;">"https://pixinlink.ru/800x400/офис-разработчиков"</span>
     alt=<span style="color:#ce9178;">"Офис разработчиков"</span>
     loading=<span style="color:#ce9178;">"lazy"</span>&gt;</pre>
        </div>
      </div>
      <div class="mt-4 d-flex flex-wrap" style="gap:12px;">
        <a href="https://pixinlink.ru/docs/getting-started/" class="btn primary waves-effect"
           style="padding:2px 24px;font-weight:600;border-radius:8px;">
          Начать бесплатно — 12 изображений
        </a>
        <a href="https://pixinlink.ru/features/" class="btn btn-outlined primary waves-effect"
           style="padding:2px 24px;border-radius:8px;">
          Смотреть все возможности →
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
          PixInLink автоматически генерирует изображения в формате <strong>WebP</strong> (quality=85, method=6) — это стандарт по умолчанию. Формат <strong>AVIF</strong> доступен через параметр <code>&format=avif</code>. Размер файла падает с ~300 KB (PNG) до <strong>~50 KB</strong>. Конвертация происходит на сервере PixInLink, не нагружая ваш хостинг. Включено во все тарифы.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- KEY FACTS -->
<div class="container" id="webp-keyfacts">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Ключевые факты</h2>
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
            <p class="body-2 text-muted mb-0">Параметры quality для WebP (85) и AVIF (50) — оптимальный баланс</p>
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
            <div style="font-size:28px;font-weight:700;color:#8e24aa;">12 шт</div>
            <p class="body-2 text-muted mb-0">Бесплатно без регистрации — включено на всех тарифах</p>
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
      <h2 class="display-1 mb-3" style="font-size:24px;font-weight:700;">Почему PNG замедляет сайт</h2>
      <p class="body-1 mb-3" style="line-height:1.85;">
        Google PageSpeed Insights пессимизирует страницы за устаревшие форматы. Аудит
        <strong>«Serve images in next-gen formats»</strong> требует отдавать WebP или AVIF.
        Типичная иллюстрация 800×400 в PNG весит <strong>~300 KB</strong>. На мобильном 4G это ~1.2 секунды загрузки. WebP: <strong>~50 KB</strong> — в 6 раз быстрее.
      </p>
      <div class="card paper pa-4 mb-5" style="background:#fff8e1;border-left:4px solid #ffb300;">
        <p class="body-2 m-0" style="line-height:1.75;">
          При ИИ-генерации каждое изображение уникально — ручная конвертация ломает автоматизацию.
          <strong>PixInLink решает это на уровне архитектуры:</strong> конвертация в WebP происходит автоматически при каждой генерации, результат сохраняется в Redis-кеш для мгновенной отдачи.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- ТРИ ФОРМАТА -->
<div class="container" id="webp-formats">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Три формата: когда что использовать</h2>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Формат</th><th>Как запросить</th><th>Размер (800×400)</th><th>Поддержка</th><th>Когда использовать</th></tr>
            </thead>
            <tbody class="body-2">
              <tr style="background:#e8f5e9;">
                <td><strong>WebP</strong></td>
                <td>— (по умолчанию)</td>
                <td style="color:#2e7d32;font-weight:700;">~50 KB</td>
                <td>97%</td>
                <td>Основной формат, лучший баланс вес/качество</td>
              </tr>
              <tr>
                <td><strong>AVIF</strong></td>
                <td><code>&format=avif</code></td>
                <td style="color:#2e7d32;font-weight:700;">~35 KB</td>
                <td>~85%</td>
                <td>Максимальная оптимизация, нужен WebP-fallback</td>
              </tr>
              <tr>
                <td><strong>PNG</strong></td>
                <td><code>&format=png</code></td>
                <td style="color:#e53935;">~300 KB</td>
                <td>100%</td>
                <td>Только если нужна прозрачность или lossless</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p class="body-2 text-muted mb-5">WebP — правильный выбор по умолчанию. AVIF на ~30% легче WebP, но требует тега <code>&lt;picture&gt;</code> с WebP-fallback для старых браузеров.</p>
    </div>
  </div>
</div>
<!-- ПРИМЕРЫ КОДА -->
<div class="container" id="webp-code">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Примеры использования</h2>
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #3949ab;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Базовый сценарий (WebP по умолчанию)</h4>
        <p class="body-2 mb-2">Ничего указывать не нужно — сервер автоматически вернёт WebP.</p>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:6px;">
          <pre style="color:#9cdcfe;font-size:13px;line-height:1.7;margin:0;">&lt;img src=<span style="color:#ce9178;">"https://pixinlink.ru/800x400/офис-разработчиков"</span>
     alt=<span style="color:#ce9178;">"Офис разработчиков"</span>
     loading=<span style="color:#ce9178;">"lazy"</span>&gt;</pre>
        </div>
      </div>
      <div class="card paper pa-4 mb-4" style="border-left:4px solid #43a047;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Оптимально для продакшена (&lt;picture&gt;)</h4>
        <p class="body-2 mb-2">AVIF для современных браузеров, WebP для остальных.</p>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:6px;">
          <pre style="color:#9cdcfe;font-size:13px;line-height:1.7;margin:0;">&lt;picture&gt;
  &lt;source srcset=<span style="color:#ce9178;">"https://pixinlink.ru/800x400/офис?format=avif"</span>
          type=<span style="color:#ce9178;">"image/avif"</span>&gt;
  &lt;source srcset=<span style="color:#ce9178;">"https://pixinlink.ru/800x400/офис?format=webp"</span>
          type=<span style="color:#ce9178;">"image/webp"</span>&gt;
  &lt;img src=<span style="color:#ce9178;">"https://pixinlink.ru/800x400/офис"</span>
       alt=<span style="color:#ce9178;">"Офис"</span> loading=<span style="color:#ce9178;">"lazy"</span>&gt;
&lt;/picture&gt;</pre>
        </div>
      </div>
      <div class="card paper pa-4 mb-5" style="border-left:4px solid #e65100;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">LCP-элемент (Hero баннер)</h4>
        <p class="body-2 mb-2">Предзагрузка AVIF без <code>loading="lazy"</code> для критического контента.</p>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:6px;">
          <pre style="color:#9cdcfe;font-size:13px;line-height:1.7;margin:0;">&lt;link rel=<span style="color:#ce9178;">"preload"</span> as=<span style="color:#ce9178;">"image"</span>
      href=<span style="color:#ce9178;">"https://pixinlink.ru/1200x630/баннер?format=avif"</span>&gt;
&lt;picture&gt;
  &lt;source srcset=<span style="color:#ce9178;">".../1200x630/баннер?format=avif"</span> type=<span style="color:#ce9178;">"image/avif"</span>&gt;
  &lt;img src=<span style="color:#ce9178;">".../1200x630/баннер"</span> alt=<span style="color:#ce9178;">"Баннер"</span> fetchpriority=<span style="color:#ce9178;">"high"</span>&gt;
&lt;/picture&gt;</pre>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ПАЙПЛАЙН КОНВЕРТАЦИИ -->
<div class="container" id="webp-pipeline">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Что происходит внутри: от генерации до WebP</h2>
      <div class="card paper pa-4 mb-5" style="border:1px solid #e0e0e0;border-radius:10px;">
        <ol class="body-1 m-0" style="line-height:1.9;padding-left:20px;">
          <li class="mb-2"><strong>Генерация:</strong> GigaChat генерирует изображение в формате JPEG (сырой вывод нейросети).</li>
          <li class="mb-2"><strong>Конвертация:</strong> JPEG → sRGB для корректного отображения в вебе.</li>
          <li class="mb-2"><strong>Масштабирование:</strong> Resize и center-crop до точных размеров width×height через LANCZOS.</li>
          <li class="mb-2"><strong>Watermark:</strong> Наложение водяного знака для анонимных пользователей через PIL ImageDraw.</li>
          <li class="mb-2"><strong>Кодирование в WebP:</strong> Pillow, quality=85, method=6 → ~50 KB. AVIF: quality=50. PNG: optimize=True.</li>
          <li><strong>Очистка и кеш:</strong> Удаление EXIF/IPTC метаданных. Результат сохраняется в Redis-кеш для мгновенной отдачи при повторных запросах.</li>
        </ol>
        <div class="pa-3 mt-4" style="background:#e8f5e9;border-left:4px solid #2e7d32;border-radius:4px;">
          <p class="body-2 m-0"><strong>Важно:</strong> Оптимизация происходит один раз при первой генерации. Повторные запросы отдаются из Redis-кеша и <strong>не расходуют</strong> квоту.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ВЛИЯНИЕ НА CWV -->
<div class="container" id="webp-cwv">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Как WebP влияет на Core Web Vitals</h2>
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #43a047;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Аудит «Next-gen formats»</h4>
            <p class="body-2 m-0" style="line-height:1.75;">WebP по умолчанию автоматически закрывает этот аудит в Google PageSpeed. Performance Score повышается без локальной настройки обработчиков статики.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #1976d2;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">LCP (Largest Contentful Paint)</h4>
            <p class="body-2 m-0" style="line-height:1.75;">50 KB вместо 300 KB для hero-баннера — основной вклад в «зелёную зону» (&lt; 2.5 сек). Конвертация не нагружает ваш сервер.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #8e24aa;">
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Аудит «Properly size images»</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Размеры width×height задаются в URL — изображение кадрируется до точных размеров. Исключает штрафы за oversized images.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- FAQ -->
<div class="container" id="webp-faq">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Частые вопросы</h2>
      <div class="faq-style mb-5">
        <div class="root">
          <div class="accordion">
            <ul class="collapsible">
              <li class="accordion-content paper active">
                <div class="collapsible-header content">
                  <p class="heading">WebP отдаётся автоматически или нужно что-то указывать?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Автоматически. Все изображения генерируются в WebP по умолчанию (quality=85, method=6). Формат AVIF нужно запросить явно через <code>&format=avif</code>.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Теряется ли качество при конвертации в WebP?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>При quality=85 визуальная разница с исходным изображением практически незаметна. Это стандарт индустрии — Google PageSpeed рекомендует значения 70–85 как оптимальный баланс.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Можно ли получить PNG, если нужна прозрачность?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Да. Добавьте <code>&format=png</code> в URL. PNG отдаётся lossless (optimize=True) — файл будет больше, но без потерь.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">AVIF работает во всех браузерах?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>AVIF поддерживается в ~85% браузеров (2026). Для полной совместимости используйте тег <code>&lt;picture&gt;</code> с WebP-fallback, как показано в примерах выше.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Оптимизация тратит дополнительную квоту?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Нет. Квота списывается один раз при первичной генерации. Конвертация в WebP/AVIF включена в стоимость. Повторные запросы из Redis-кеша — бесплатно.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ИНТЕРАКТИВНЫЙ ТЕСТ -->
<div class="container" id="test-difference">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Проверьте разницу прямо сейчас</h2>
      <div class="card paper pa-5 mb-5" style="background:#f3f8ff;border:1px solid #bbdefb;border-radius:10px;">
        <p class="body-1 mb-4" style="line-height:1.75;">
          Откройте эти два URL в браузере и сравните размер файла во вкладке <strong>Network</strong> DevTools.
        </p>
        <div class="row">
          <div class="col-md-6 mb-3">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;color:#2e7d32;">✅ WebP (по умолчанию)</h4>
            <div class="pa-2" style="background:#fff;border:1px solid #e0e0e0;border-radius:6px;word-break:break-all;">
              <a href="https://pixinlink.ru/800x400/современный-офис?style=realistic" target="_blank" style="font-size:13px;font-family:monospace;">
                https://pixinlink.ru/800x400/современный-офис?style=realistic
              </a>
            </div>
            <p class="body-2 mt-2 mb-0 text-muted">Ожидаемый вес: <strong>~45–55 KB</strong></p>
          </div>
          <div class="col-md-6 mb-3">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;color:#c62828;">❌ PNG (для сравнения)</h4>
            <div class="pa-2" style="background:#fff;border:1px solid #e0e0e0;border-radius:6px;word-break:break-all;">
              <a href="https://pixinlink.ru/800x400/современный-офис?style=realistic&format=png" target="_blank" style="font-size:13px;font-family:monospace;">
                https://pixinlink.ru/800x400/современный-офис?style=realistic&format=png
              </a>
            </div>
            <p class="body-2 mt-2 mb-0 text-muted">Ожидаемый вес: <strong>~280–320 KB</strong></p>
          </div>
        </div>
        <p class="body-2 m-0 mt-3 text-muted"><em>Как проверить: DevTools (F12) → Network → обновите страницу → смотрите колонку Size.</em></p>
      </div>
    </div>
  </div>
</div>
<!-- CTA -->
<div class="container" id="webp-cta">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="text-center mb-5 pa-5" style="background:linear-gradient(135deg,#e8eaf6 0%,#e3f2fd 100%);border-radius:16px;">
        <h3 class="display-1 mb-3" style="font-size:26px;font-weight:700;">Ускорьте свой сайт сегодня</h3>
        <p class="body-1 text-muted mb-4">Начните генерировать WebP-изображения из URL без плагинов и ручной конвертации.</p>
        <div class="d-flex justify-content-center flex-wrap" style="gap:16px;">
          <a href="https://pixinlink.ru/docs/getting-started/" class="btn primary waves-effect"
             style="padding:2px 32px;font-size:16px;font-weight:600;border-radius:8px;">
            Начать бесплатно — 12 изображений
          </a>
          <a href="https://pixinlink.ru/features/" class="btn btn-outlined primary waves-effect"
             style="padding:2px 32px;font-size:16px;font-weight:600;border-radius:8px;">
            Смотреть все возможности →
          </a>
        </div>
      </div>
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
            <p class="body-1 mb-0 font-weight-bold">URL API: format, quality</p>
          </a>
        </div>
        <div class="col-md-4 mb-3">
          <a href="https://pixinlink.ru/pricing/" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <p class="body-2 text-primary mb-1">→ Тарифы</p>
            <p class="body-1 mb-0 font-weight-bold">Выбрать подходящий план</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
