---
title: "Первое AI-изображение за 60 секунд"
description: "Без регистрации, без установки библиотек. Просто вставьте URL в тег img."
slug: "docs/getting-started"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "WebPage"
---
<main class="container-wrap container-pages">

﻿  <!-- ХЕДЕР ДОКУМЕНТАЦИИ (GETTING STARTED) -->
  <div class="container mt-5 pt-5 mb-4" id="docs-header">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1 text-left">
        <div class="d-flex align-items-center mb-3">
          <a href="/docs" class="badge" style="background: #e3f2fd; color: #1976d2; border-radius: 4px; padding: 5px 10px;">Документация</a>
          <span class="ml-2 text-muted" style="font-size: 14px;">/</span>
          <span class="ml-2 text-muted" style="font-size: 14px;">Начало работы</span>
        </div>
        <h1 class="use-text-title2" style="font-size: 2.8rem; line-height: 1.2; margin-bottom: 20px;">
          Первое AI-изображение за 60 секунд
        </h1>
        <p class="use-text-subtitle2 text-muted" style="font-size: 1.3rem;">
          Без регистрации, без установки библиотек. Просто вставьте URL в тег <code>img</code>.
        </p>
        <div class="card paper pa-4 mt-4" style="background: #f1f8e9; border: 1px solid #c5e1a5; border-radius: 8px;">
          <p class="body-1 m-0" style="color: #2e7d32;">
            <strong>🔥 Попробуйте прямо сейчас:</strong> Откройте эту ссылку в новой вкладке браузера — и получите первое изображение:
            <br>
            <a href="https://pixinlink.ru/800x600/красивый-закат-над-горами" target="_blank" style="word-break: break-all; font-weight: bold; margin-top: 8px; display: inline-block;">https://pixinlink.ru/800x600/красивый-закат-над-горами</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- КОНТЕНТ: Введение и TL;DR -->
  <div class="container" id="docs-intro">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1">
        <h3 class="display-2 mb-3 mt-4" style="font-size: 24px; font-weight: 700;">Почему PixInLink меняет правила игры</h3>
        <p class="body-1 mb-4" style="line-height: 1.8;">
          Обычно создание иллюстрации для блога — это процесс из 5 шагов: открыть Canva, создать дизайн, скачать файл, загрузить на сервер, вставить на страницу. Это занимает 10–15 минут. С <strong>PixInLink</strong> вы просто пишете URL прямо в атрибут <code>src</code> тега картинки — это занимает 60 секунд. 
        </p>
        <!-- Проблема - Решение -->
        <div class="row mb-5">
          <div class="col-md-6">
            <div class="card paper pa-4" style="height: 100%; border-top: 4px solid #f44336;">
              <h5 class="headline mb-2" style="color: #d32f2f;">🔴 Обычный подход</h5>
              <p class="body-2 text-muted">Поиск на стоке (10 мин) &rarr; Canva (10 мин) &rarr; скачивание &rarr; загрузка. <br><br><strong>Итог:</strong> 20 минут на 1 картинку. 50 статей = 16 часов рутины.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card paper pa-4" style="height: 100%; border-top: 4px solid #4CAF50;">
              <h5 class="headline mb-2" style="color: #2e7d32;">✅ Подход PixInLink</h5>
              <p class="body-2 text-muted">Вставляете URL в HTML. Промпт пишется прямо в ссылке. CDN кеширует изображение навсегда. <br><br><strong>Итог:</strong> 60 секунд на картинку. Полная автоматизация.</p>
            </div>
          </div>
        </div>
        <h3 class="display-2 mb-3" style="font-size: 24px; font-weight: 700;">Ключевые факты</h3>
        <ul class="body-1 mb-5" style="line-height: 1.8; list-style: none; padding-left: 0;">
          <li class="mb-2 d-flex"><i class="material-icons mr-2" style="color: #2196F3;">check_circle</i> <strong>0 ₽ для старта:</strong> 50 генераций/мес бесплатно (с водяным знаком).</li>
          <li class="mb-2 d-flex"><i class="material-icons mr-2" style="color: #2196F3;">check_circle</i> <strong>Русский язык:</strong> Нативно поддерживается (встроенный переводчик и Kandinsky).</li>
          <li class="mb-2 d-flex"><i class="material-icons mr-2" style="color: #2196F3;">check_circle</i> <strong>CDN-кеш:</strong> Первая генерация 10–30 сек. Повторные запросы — <strong>менее 100 мс</strong>.</li>
          <li class="mb-2 d-flex"><i class="material-icons mr-2" style="color: #2196F3;">check_circle</i> <strong>Форматы:</strong> Автоматическая отдача в WebP для ускорения LCP.</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- КОНТЕНТ: Пошаговая инструкция (Как работает) -->
  <div class="container" id="docs-step-by-step">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1">
        <h3 class="display-2 mb-4 mt-4" style="font-size: 24px; font-weight: 700;">Пошаговая инструкция (Первый запрос)</h3>
        <div class="card paper pa-4 mb-3" style="border-left: 4px solid #2196F3;">
          <h5 class="headline mb-2">Шаг 1: Откройте браузер (0–5 сек)</h5>
          <p class="body-2 mb-2">Вставьте в адресную строку следующую ссылку и нажмите Enter:</p>
          <code style="background: #f5f5f5; padding: 4px 8px; border-radius: 4px; word-break: break-all;">https://pixinlink.ru/800x600/современный-офис-программистов</code>
        </div>
        <div class="card paper pa-4 mb-3" style="border-left: 4px solid #FF9800;">
          <h5 class="headline mb-2">Шаг 2: Дождитесь генерации (5–30 сек)</h5>
          <p class="body-2 mb-0">При первом запросе вы увидите серый плейсхолдер <em>«Generating image...»</em>. Это нормально — нейросеть рисует картинку. <strong>Обновите страницу через 15–20 секунд</strong>, и вы увидите готовый результат.</p>
        </div>
        <div class="card paper pa-4 mb-3" style="border-left: 4px solid #4CAF50;">
          <h5 class="headline mb-2">Шаг 3: Вставьте в свой HTML (30–40 сек)</h5>
          <p class="body-2 mb-2">Теперь просто скопируйте URL и вставьте его в код вашего сайта (или поста в CMS):</p>
          <div class="card paper pa-2 text-left mb-0" style="background: #1e1e1e; border-radius: 8px;">
            <pre style="margin: 0; white-space: pre-wrap;"><code style="color: #d4d4d4; font-size: 13px;"><span style="color: #569cd6;">&lt;img</span> <span style="color: #9cdcfe;">src=</span><span style="color: #ce9178;">"https://pixinlink.ru/800x600/современный-офис-программистов"</span>
     <span style="color: #9cdcfe;">alt=</span><span style="color: #ce9178;">"Офис программистов"</span> <span style="color: #9cdcfe;">loading=</span><span style="color: #ce9178;">"lazy"</span> <span style="color: #9cdcfe;">width=</span><span style="color: #ce9178;">"800"</span> <span style="color: #9cdcfe;">height=</span><span style="color: #ce9178;">"600"</span><span style="color: #569cd6;">&gt;</span></code></pre>
          </div>
        </div>
        <div class="card paper pa-4 mb-5" style="border-left: 4px solid #9C27B0;">
          <h5 class="headline mb-2">Шаг 4: Зафиксируйте картинку (Опционально)</h5>
          <p class="body-2 mb-0">Чтобы при очистке кеша картинка не сгенерировалась заново, добавьте параметр <code>&amp;seed=12345</code> (любое число). Это гарантирует, что изображение навсегда останется неизменным.</p>
        </div>
        <!-- Жизненный цикл (Архитектура) -->
        <h3 class="display-2 mb-3 mt-5" style="font-size: 20px; font-weight: 700;">Как это работает под капотом (Жизненный цикл)</h3>
        <div class="card paper pa-3 text-left mb-5" style="background: #1e1e1e; border-radius: 8px;">
          <pre style="margin: 0; white-space: pre-wrap; font-family: monospace; color: #ce9178; font-size: 13px; line-height: 1.5;">Браузер &rarr; запрашивает img src=pixinlink.ru/...
  &rarr; <span style="color: #569cd6;">PixInLink:</span> проверка CDN-кэша
      &rarr; <span style="color: #4CAF50;">HIT (302)</span>: редирект на CDN (&lt;100 мс)
      &rarr; <span style="color: #FF9800;">MISS (200)</span>: отдача placeholder SVG + фоновая генерация (10-30 сек)
              &rarr; AI (Kandinsky) &rarr; сжатие в WebP &rarr; загрузка в CDN
              &rarr; повторный запрос &rarr; <span style="color: #4CAF50;">HIT (302)</span></pre>
        </div>
      </div>
    </div>
  </div>
  <!-- КОНТЕНТ: Интеграции по платформам -->
  <div class="container" id="docs-integrations">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1">
        <h3 class="display-2 mb-4 mt-5" style="font-size: 24px; font-weight: 700;">Интеграция в вашу платформу</h3>
        <p class="body-1 mb-4">Выберите платформу, чтобы увидеть готовый пример кода для копирования.</p>
        <!-- Имитация Tabs -->
        <div class="card paper pa-0 mb-5 overflow-hidden">
          <div class="card-content" style="padding: 0;">
            <div style="background: #f5f5f5; padding: 10px 20px; border-bottom: 1px solid #ddd; font-weight: 600;">
              Примеры кода (WordPress, React, Python)
            </div>
            <div style="padding: 20px;">
              <h6 class="use-text-subtitle2 mb-2 text-primary">1. WordPress (без плагина, Custom HTML)</h6>
              <p class="body-2 text-muted mb-2">В редакторе Gutenberg нажмите «+» &rarr; «Пользовательский HTML»:</p>
              <div class="card paper pa-3 text-left mb-4" style="background: #1e1e1e; border-radius: 8px;">
                <pre style="margin: 0; white-space: pre-wrap;"><code style="color: #d4d4d4; font-size: 13px;"><span style="color: #569cd6;">&lt;img</span> <span style="color: #9cdcfe;">src=</span><span style="color: #ce9178;">"https://pixinlink.ru/800x400/офис"</span>
     <span style="color: #9cdcfe;">alt=</span><span style="color: #ce9178;">"Офис"</span> <span style="color: #9cdcfe;">loading=</span><span style="color: #ce9178;">"lazy"</span> <span style="color: #9cdcfe;">width=</span><span style="color: #ce9178;">"800"</span> <span style="color: #9cdcfe;">height=</span><span style="color: #ce9178;">"400"</span><span style="color: #569cd6;">&gt;</span></code></pre>
              </div>
              <h6 class="use-text-subtitle2 mb-2 text-primary">2. React / Next.js (Компонент)</h6>
              <div class="card paper pa-3 text-left mb-4" style="background: #1e1e1e; border-radius: 8px;">
                <pre style="margin: 0; white-space: pre-wrap;"><code style="color: #d4d4d4; font-size: 13px;"><span style="color: #569cd6;">export function</span> <span style="color: #dcdcaa;">PixInLinkImage</span>({ prompt, width = <span style="color: #b5cea8;">800</span>, height = <span style="color: #b5cea8;">600</span>, seed = <span style="color: #ce9178;">''</span> }) {
  <span style="color: #569cd6;">let</span> url = <span style="color: #ce9178;">`https://pixinlink.ru/</span><span style="color: #569cd6;">${</span>width<span style="color: #569cd6;">}</span><span style="color: #ce9178;">x</span><span style="color: #569cd6;">${</span>height<span style="color: #569cd6;">}</span><span style="color: #ce9178;">/</span><span style="color: #569cd6;">${</span><span style="color: #dcdcaa;">encodeURIComponent</span>(prompt)<span style="color: #569cd6;">}</span><span style="color: #ce9178;">`</span>;
  <span style="color: #c586c0;">if</span> (seed) url += <span style="color: #ce9178;">`&amp;seed=</span><span style="color: #569cd6;">${</span>seed<span style="color: #569cd6;">}</span><span style="color: #ce9178;">`</span>;
  <span style="color: #c586c0;">return</span> (
    <span style="color: #569cd6;">&lt;img</span> <span style="color: #9cdcfe;">src=</span>{url} <span style="color: #9cdcfe;">alt=</span>{prompt} <span style="color: #9cdcfe;">loading=</span><span style="color: #ce9178;">"lazy"</span> <span style="color: #9cdcfe;">width=</span>{width} <span style="color: #9cdcfe;">height=</span>{height} <span style="color: #569cd6;">/&gt;</span>
  );
}</code></pre>
              </div>
              <h6 class="use-text-subtitle2 mb-2 text-primary">3. Python (Django Template Tag)</h6>
              <div class="card paper pa-3 text-left mb-0" style="background: #1e1e1e; border-radius: 8px;">
                <pre style="margin: 0; white-space: pre-wrap;"><code style="color: #d4d4d4; font-size: 13px;"><span style="color: #c586c0;">from</span> django <span style="color: #c586c0;">import</span> template
<span style="color: #c586c0;">from</span> urllib.parse <span style="color: #c586c0;">import</span> quote
register = template.Library()
<span style="color: #569cd6;">@register.simple_tag</span>
<span style="color: #569cd6;">def</span> <span style="color: #dcdcaa;">pixinlink_img</span>(prompt, width=<span style="color: #b5cea8;">800</span>, height=<span style="color: #b5cea8;">600</span>, seed=<span style="color: #ce9178;">''</span>):
    url = <span style="color: #ce9178;">f"https://pixinlink.ru/{width}x{height}/{quote(prompt)}"</span>
    <span style="color: #c586c0;">if</span> seed: url += <span style="color: #ce9178;">f"&amp;seed={seed}"</span>
    <span style="color: #c586c0;">return</span> <span style="color: #ce9178;">f'&lt;img src="{url}" alt="{prompt}" loading="lazy" width="{width}" height="{height}"&gt;'</span></code></pre>
              </div>
            </div>
          </div>
        </div>
        <!-- ИНТЕРАКТИВНЫЙ ГЕНЕРАТОР -->
        <h3 class="display-2 mb-4 mt-5" style="font-size: 24px; font-weight: 700;">Интерактивный конструктор URL</h3>
        <p class="body-1 mb-4">Сгенерируйте код прямо здесь. Заполните форму, и мы соберем для вас готовый тег.</p>
        <div class="card paper pa-4 mb-5" style="background: #fafafa; border: 1px solid #e0e0e0;">
          <form id="url-generator-form">
            <div class="row">
              <div class="col-md-12 mb-3">
                <label style="font-weight: 600;">Что нарисовать? (Prompt)</label>
                <input type="text" id="gen-prompt" class="form-control" placeholder="Например: кофе на столе утром" value="офис разработчиков, неон" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
              </div>
              <div class="col-md-4 mb-3">
                <label style="font-weight: 600;">Ширина (px)</label>
                <input type="number" id="gen-width" value="800" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
              </div>
              <div class="col-md-4 mb-3">
                <label style="font-weight: 600;">Высота (px)</label>
                <input type="number" id="gen-height" value="600" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px;">
              </div>
              <div class="col-md-4 mb-3">
                <label style="font-weight: 600;">Стиль</label>
                <select id="gen-style" style="width: 100%; padding: 8px; border: 1px solid #ccc; border-radius: 4px; display: block;">
                  <option value="realistic">realistic</option>
                  <option value="cyberpunk" selected>cyberpunk</option>
                  <option value="3d">3d</option>
                  <option value="anime">anime</option>
                </select>
              </div>
              <div class="col-12 mt-2 text-center">
                <button type="button" class="btn primary waves-effect" onclick="generateDemoUrl()" style="border-radius: 30px; padding: 0 30px;">Сгенерировать код</button>
              </div>
            </div>
          </form>
          <div id="gen-result" style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e0e0e0; display: block;">
            <p class="mb-1"><strong>Готовый тег для вставки:</strong></p>
            <div class="card paper pa-2 text-left mb-2" style="background: #1e1e1e; border-radius: 8px;">
              <code id="res-html" style="color: #9cdcfe; font-size: 13px; word-break: break-all;">
                &lt;img src="https://pixinlink.ru/800x600/офис-разработчиков-неон?style=cyberpunk" alt="AI Image" loading="lazy" width="800" height="600"&gt;
              </code>
            </div>
          </div>
        </div>
        <!-- JS для формы -->
        <!-- КЕЙСЫ (Как используют PixInLink) -->
        <h3 class="display-2 mb-4 mt-5" style="font-size: 24px; font-weight: 700;">3 реальных кейса использования</h3>
        <div class="row mb-5">
          <div class="col-md-4 mb-3">
            <div class="card paper pa-4" style="height: 100%;">
              <h6 class="use-text-subtitle2 mb-2 text-primary">Блогер на WordPress</h6>
              <p class="body-2 mb-2 text-muted"><strong>До:</strong> 15 минут на поиск фото в Canva.<br><strong>После:</strong> Шорткод генерирует уникальную обложку за 60 секунд.</p>
              <p class="body-2 m-0 mt-auto" style="font-weight: 600;">Тариф: Starter (490 ₽)</p>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card paper pa-4" style="height: 100%;">
              <h6 class="use-text-subtitle2 mb-2 text-primary">SaaS Frontend-разраб</h6>
              <p class="body-2 mb-2 text-muted"><strong>До:</strong> Хранение файлов на S3, сложный бэкенд.<br><strong>После:</strong> 1 React-компонент загружает картинки через CDN PixInLink.</p>
              <p class="body-2 m-0 mt-auto" style="font-weight: 600;">Тариф: Pro (1 490 ₽)</p>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card paper pa-4" style="height: 100%;">
              <h6 class="use-text-subtitle2 mb-2 text-primary">SEO-специалист</h6>
              <p class="body-2 mb-2 text-muted"><strong>До:</strong> Одинаковый og:image у всех 300 страниц.<br><strong>После:</strong> Python-скрипт автоматически делает og:image из title страницы.</p>
              <p class="body-2 m-0 mt-auto" style="font-weight: 600;">Тариф: Business (4 990 ₽)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- FAQ АГРЕГАТОР (Аккордеон) -->
  <div class="faq-style page-section mb-5 mt-5" id="faq">
    <div class="root">
      <div class="container max-md">
        <h3 class="display-2 mb-4 text-center" style="font-size: 24px; font-weight: 700;">Частые вопросы</h3>
        <div class="accordion">
          <ul class="collapsible">
            <li class="accordion-content paper active">
              <div class="collapsible-header content">
                <p class="heading">Нужна ли регистрация для первой генерации?</p>
                <i class="material-icons right arrow">expand_more</i>
              </div>
              <div class="collapsible-body detail">
                <p>Нет. Первые 50 изображений — без регистрации и без кредитной карты. Вы можете тестировать прямо сейчас. Для коммерческого использования (убрать водяной знак) нужна регистрация и тариф от 490 ₽/мес.</p>
              </div>
            </li>
            <li class="accordion-content paper">
              <div class="collapsible-header content">
                <p class="heading">Почему изображение грузится долго в первый раз?</p>
                <i class="material-icons right arrow">expand_more</i>
              </div>
              <div class="collapsible-body detail">
                <p>Первый запрос — это физическая генерация: 10–30 секунд работы AI (Kandinsky 3.1) и сжатия в WebP. Все последующие запросы отдаются мгновенно из CDN-кеша (менее 100 мс). Если вы видите текст «Generating image...» — просто обновите страницу чуть позже.</p>
              </div>
            </li>
            <li class="accordion-content paper">
              <div class="collapsible-header content">
                <p class="heading">Можно ли писать промпт на русском языке?</p>
                <i class="material-icons right arrow">expand_more</i>
              </div>
              <div class="collapsible-body detail">
                <p>Да. PixInLink автоматически переводит промпт через встроенный Yandex Translate API (RU &rarr; EN) перед отправкой в нейросеть. Поддерживается любой язык.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- ИСТОЧНИКИ И МЕТОДОЛОГИЯ -->
  <div class="container mb-5" id="docs-sources">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1">
        <div class="card paper pa-4" style="background: #fafafa; border: 1px solid #e0e0e0; font-size: 14px;">
          <h5 class="headline mb-2" style="font-size: 16px;">Источники и методология</h5>
          <ol class="text-muted m-0 pl-3">
            <li>RFC 8246, HTTP Immutable Responses, IETF, 2017</li>
            <li>MDN Web Docs, <code>&lt;img&gt;</code>: loading attribute, Mozilla, 2024</li>
            <li>Google Web Vitals, Cumulative Layout Shift (CLS), 2024</li>
          </ol>
          <p class="text-muted mt-2 mb-0"><strong>Как мы считаем данные:</strong> Время генерации 10–30 сек — медианное значение по 10 000 запросов к Kandinsky при нормальной нагрузке. CDN TTL 1 год основан на стандарте RFC 8246.</p>
        </div>
      </div>
    </div>
  </div>
  <!-- CALL TO ACTION (СЛЕДУЮЩИЕ ШАГИ) -->
  <div class="container mb-5" id="cta-block">
    <div class="row">
      <div class="col-12 col-md-10 offset-md-1 text-center">
        <h3 class="display-2 mb-4" style="font-size: 24px; font-weight: 700;">Что дальше?</h3>
        <div class="row text-left mb-4">
          <div class="col-md-6 mb-3">
            <div class="card paper pa-4" style="border: 1px solid #2196F3; height: 100%;">
              <h6 class="use-text-subtitle2 mb-2">Для разработчиков</h6>
              <p class="body-2 text-muted mb-3">Изучите все параметры (seed, style, размеры) и коды ответов.</p>
              <a href="/docs/url-api" class="btn outline primary waves-effect" style="border-radius: 20px;">Справочник API &rarr;</a>
            </div>
          </div>
          <div class="col-md-6 mb-3">
            <div class="card paper pa-4" style="border: 1px solid #4CAF50; height: 100%;">
              <h6 class="use-text-subtitle2 mb-2">Для WordPress</h6>
              <p class="body-2 text-muted mb-3">Узнайте, как автоматизировать og:image для блога без программирования.</p>
              <a href="/integrations/wordpress" class="btn outline primary waves-effect" style="border-radius: 20px;">Интеграция с WP &rarr;</a>
            </div>
          </div>
        </div>
        <div class="card paper pa-5" style="border-radius: 12px; background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);">
          <h3 class="use-text-title2 mb-3">Готовы к полноценной работе?</h3>
          <p class="use-text-subtitle2 mb-4">Выберите тариф для коммерческого использования без водяных знаков.</p>
          <a href="/pricing" class="btn primary waves-effect px-5 py-2 mr-3 mb-2" style="border-radius: 30px; font-size: 1rem;">Выбрать тариф</a>
          <a href="https://pixinlink.ru/800x600/первое-изображение-с-pixinlink" target="_blank" class="btn outline primary waves-effect px-5 py-2 mb-2" style="border-radius: 30px; font-size: 1rem;">Тестовый URL</a>
        </div>
      </div>
    </div>
  </div>
  <!-- JSON-LD SEO Разметка (HowTo + BreadcrumbList) -->
</main>
