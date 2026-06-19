---
title: "Seed-параметр в PixInLink: как зафиксировать изображение навсегда"
description: "Что такое seed в AI-генерации GigaChat и как использовать его в PixInLink URL API. Фиксация результата, A/B-тесты обложек, ротация, версионирование. 4 сценария с кодом."
slug: "seed-parametr"
date: "2026-06-18"
author: "PixInLink"
category: "Руководства"
tags: ["руководства", "seed", "api", "промпты"]
schema_type: "Article"
layout: "article"
cover_image: "https://pixinlink.ru/api/v1/1200x630/seed-parametr-pixinlink-fiksatsiya"
---
<main class="container-wrap">

<p>Сгенерировали идеальное изображение, а при следующей загрузке оно изменилось? GigaChat каждый раз создаёт новую вариацию — это особенность генеративных моделей. Seed-параметр помогает зафиксировать результат: один промпт + один seed = один и тот же визуальный результат при каждой генерации. Как это работает и 4 практических сценария — ниже.</p>

<div class="card paper pa-3 mb-4" style="background:#fff3cd;border:1px solid #ffc107;border-radius:8px">
  <p class="mb-0"><strong>⚠️ Важно:</strong> Параметр <code>?seed=</code> — это функциональность GigaChat API. Вы можете протестировать её через pixinlink.ru, но сервис <strong>не даёт гарантий работы</strong> этого параметра. Seed не является документированной частью API PixInLink и может измениться в любой момент без предупреждения.</p>
</div>

<h2 class="use-text-title2">Ключевые цифры</h2>

<div class="row spacing4">
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">2.14 млрд значений</h6>
    <p class="use-text-paragraph mb-0 small">Диапазон seed: 1 – 2 147 483 647. Каждое число — уникальная вариация одного и того же промпта.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">Детерминизм GigaChat</h6>
    <p class="use-text-paragraph mb-0 small">Один промпт + один seed = один результат при каждой генерации. GigaChat выдаёт стабильный output при фиксированном seed.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">365 дней кеша</h6>
    <p class="use-text-paragraph mb-0 small">Изображения с seed кешируются так же, как и без него. Повторные запросы — мгновенно из CDN.</p>
  </div>
</div>
</div>

<h2 class="use-text-title2">Как работает seed</h2>

<p>Seed — это число, которое GigaChat использует как отправную точку для генерации. Без seed каждый запрос запускает новый случайный процесс. С seed — процесс повторяется идентично:</p>

<div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:16px">
<div style="flex:1;min-width:280px">
  <div class="card paper pa-3" style="border-left:4px solid #e53935">
    <h6 class="use-text-subtitle mb-1" style="color:#e53935">❌ Без seed</h6>
    <pre style="margin:0;font-size:13px;line-height:1.8"><code>/pixinlink.ru/800x400/офис      → ВАРИАНТ А
/pixinlink.ru/800x400/офис      → ВАРИАНТ B
(может измениться!)</code></pre>
  </div>
</div>
<div style="flex:1;min-width:280px">
  <div class="card paper pa-3" style="border-left:4px solid #4CAF50">
    <h6 class="use-text-subtitle mb-1" style="color:#4CAF50">✅ С seed</h6>
    <pre style="margin:0;font-size:13px;line-height:1.8"><code>/800x400/офис?seed=42   → ВАРИАНТ X
/800x400/офис?seed=42   → ВАРИАНТ X
(всегда тот же!)
/800x400/офис?seed=100  → ВАРИАНТ Y
(новый)</code></pre>
  </div>
</div>
</div>

<h2 class="use-text-title2">4 практических сценария</h2>

<h3 class="use-text-subtitle">Сценарий 1: Карточка товара</h3>
<p>Хотите, чтобы карточка всегда показывала одно и то же изображение — даже через полгода:</p>
<pre><code>&lt;img src="https://pixinlink.ru/600x600/кожаный-диван-угловой-серый?seed=12345"&gt;</code></pre>

<h3 class="use-text-subtitle">Сценарий 2: A/B-тест обложки</h3>
<p>Генерируете 5 вариантов обложки с разными seed и выбираете лучший:</p>
<pre><code>/pixinlink.ru/1200x630/статья-про-seed?seed=1
/pixinlink.ru/1200x630/статья-про-seed?seed=2
/pixinlink.ru/1200x630/статья-про-seed?seed=3
/pixinlink.ru/1200x630/статья-про-seed?seed=4
/pixinlink.ru/1200x630/статья-про-seed?seed=5</code></pre>

<h3 class="use-text-subtitle">Сценарий 3: Ротация изображений</h3>
<p>Разная обложка для разных посетителей — случайный seed на клиенте:</p>
<pre><code>const seed = Math.floor(Math.random() * 1000) + 1;
const url = `https://pixinlink.ru/1200x630/промпт?seed=${seed}`;</code></pre>

<h3 class="use-text-subtitle">Сценарий 4: Версионирование бренда</h3>
<p>Меняете стиль сайта, сохраняя старые изображения доступными:</p>
<pre><code>?seed=2026Q1  → версия Q1 2026 (старый стиль)
?seed=2026Q2  → версия Q2 2026 (новый стиль)</code></pre>

<h2 class="use-text-title2">FAQ</h2>

<div class="accordion">
  <ul class="collapsible">
    <li class="accordion-content paper active">
      <div class="collapsible-header content">
        <p class="heading">Что будет, если указать seed без промпта?</p>
        <i class="material-icons right arrow">expand_more</i>
      </div>
      <div class="collapsible-body detail">
        <p>Промпт обязателен. Seed без промпта игнорируется — изображение не сгенерируется. Параметры работают только в комбинации с основным запросом.</p>
      </div>
    </li>
    <li class="accordion-content paper">
      <div class="collapsible-header content">
        <p class="heading">Гарантирует ли seed 100% идентичность на GigaChat?</p>
        <i class="material-icons right arrow">expand_more</i>
      </div>
      <div class="collapsible-body detail">
        <p>Технически — да. Одинаковые промпт + seed + стиль + размер дают идентичный результат при каждой генерации GigaChat. Однако PixInLink <strong>не гарантирует</strong> работу seed, так как это недокументированная функциональность GigaChat API, которая может измениться.</p>
      </div>
    </li>
    <li class="accordion-content paper">
      <div class="collapsible-header content">
        <p class="heading">Можно ли использовать один seed для разных размеров?</p>
        <i class="material-icons right arrow">expand_more</i>
      </div>
      <div class="collapsible-body detail">
        <p>Да, но изображения будут разными. Seed фиксирует композицию в рамках заданного размера. При изменении размера (например, с 800×400 на 1200×630) результат визуально отличается. Для каждого размера используйте свой seed.</p>
      </div>
    </li>
    <li class="accordion-content paper">
      <div class="collapsible-header content">
        <p class="heading">Как узнать seed существующего изображения?</p>
        <i class="material-icons right arrow">expand_more</i>
      </div>
      <div class="collapsible-body detail">
        <p>Seed указываете вы сами при создании URL. Если не указали при первой генерации — подберите значение перебором (1, 2, 3...) и найдите нужный вариант визуально. Готового способа «прочитать» seed из изображения нет.</p>
      </div>
    </li>
    <li class="accordion-content paper">
      <div class="collapsible-header content">
        <p class="heading">Что лучше: высокие или низкие значения seed?</p>
        <i class="material-icons right arrow">expand_more</i>
      </div>
      <div class="collapsible-body detail">
        <p>Разницы нет. Seed=1 и seed=2147483647 дают одинаково качественный, но визуально разный результат. Выбирайте любое число — 42, 777, 12345. Результат зависит только от самого значения, а не от его величины.</p>
      </div>
    </li>
  </ul>
</div>
<!-- @block: key-facts -->
**Seed — это «отпечаток» для GigaChat.** Экспериментальная функциональность: добавьте `&seed=42` в URL — и нейросеть выдаст стабильный результат для этого промпта. Меняйте seed для новой вариации. PixInLink НЕ гарантирует работу seed — это возможность GigaChat API, а не документированная часть сервиса.
<!-- @block: cta -->
<h2 class="use-text-title2">Попробуйте seed-параметр</h2>

<p>Скопируйте URL, замените промпт и seed — откройте в браузере:</p>

<pre><code>https://pixinlink.ru/800x400/ваш-промпт?seed=42</code></pre>

<a class="btn waves-effect button btn-large primary" style="color:#fff" href="https://app.pixinlink.ru/register">12 изображений бесплатно</a>

</main>
