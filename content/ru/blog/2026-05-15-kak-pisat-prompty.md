---
title: "Как писать промпты для нейросети: формула идеального запроса от 5 слов до 300"
description: "Разбираем 5-элементную формулу промпта для PixInLink URL API. Как из «еда» сделать «тарелка пасты карбонара, студийный свет, food photo». С примерами до и после, таблицей ниш и частыми ошибками."
slug: "kak-pisat-prompty"
date: "2026-05-15"
author: "PixInLink"
category: "Руководства"
tags: ["руководства", "промпты", "api", "стили"]
schema_type: "Article"
layout: "article"
cover_image: "https://pixinlink.ru/api/v1/1200x630/человек-пишет-промпт-на-клавиатуре"
---
<main class="container-wrap">

<p>Пять слов или пятьдесят — разница в качестве AI-изображения колоссальна. Односложный промпт «программирование» даёт абстрактную кашу, а «разработчик за ноутбуком в тёмном офисе, мониторы с кодом, синяя подсветка, cyberpunk» — готовую обложку для IT-блога. Разбираем формулу, которую Kandinsky 3.1 понимает безошибочно: от субъекта до стиля, с конкретными URL-примерами, таблицей ниш и частыми ошибками.</p>

<h2 class="use-text-title2">Ключевые цифры</h2>

<div class="row spacing4">
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">500 символов</h6>
    <p class="use-text-paragraph mb-0 small">Максимальная длина промпта. Всё, что больше, обрезается автоматически. Оптимум: 100–300 символов.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">3–5× точнее</h6>
    <p class="use-text-paragraph mb-0 small">Настолько результат точнее при 10 словах промпта вместо одного. Каждое новое слово сужает пространство вариантов.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">6 стилей</h6>
    <p class="use-text-paragraph mb-0 small">realistic, illustration, 3d, pixel-art, cyberpunk, anime. + 50+ дополнительных. Передаются параметром <code>?style=</code>.</p>
  </div>
</div>
</div>

<div class="row spacing4" style="margin-top:0">
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">0 секунд на поиск</h6>
    <p class="use-text-paragraph mb-0 small">Время на «поиск» AI-изображения — ноль. Пишете промпт, вставляете URL в img src. Против 15 минут на стоке.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">Кириллица — native</h6>
    <p class="use-text-paragraph mb-0 small">Kandinsky 3.1 обучен на масштабных русскоязычных наборах. Русский промпт даёт лучший результат, чем английский.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">10–30 секунд</h6>
    <p class="use-text-paragraph mb-0 small">Время первой генерации. Все последующие загрузки — мгновенно из кеша CDN. 30 генераций бесплатно без регистрации.</p>
  </div>
</div>
</div>

<h2 class="use-text-title2">Формула промпта: 5 элементов</h2>

<p>Промпт строится по строгой последовательности: <strong>субъект → детали → сцена → освещение → стиль</strong>. Порядок важен: нейросеть распределяет «вес» слов — то, что в начале, получает приоритет в композиции. Стиль выносится в параметр URL, а не пишется в тексте промпта.</p>

<h3 class="use-text-subtitle">1. Субъект — что в кадре</h3>

<p>Главный объект. Нейросеть строит композицию вокруг него. Самая важная часть промпта — если субъект размыт, всё изображение будет размытым.</p>

<table class="highlight striped">
  <thead>
    <tr><th>❌ Плохо</th><th>✅ Хорошо</th></tr>
  </thead>
  <tbody>
    <tr><td>«изображение для статьи»</td><td>«ноутбук на деревянном столе»</td></tr>
    <tr><td>«кошка»</td><td>«рыжая пушистая кошка, зелёные глаза, сидит»</td></tr>
    <tr><td>«офис»</td><td>«open-space офис, программисты за мониторами»</td></tr>
  </tbody>
</table>

<h3 class="use-text-subtitle">2. Детали — цвет, размер, материал</h3>

<p>2–3 атрибута. Не перегружайте: 10+ деталей размывают результат, нейросеть не может удержать всё одновременно. Золотая середина: укажите цвет, материал и одну ключевую характеристику.</p>

<h3 class="use-text-subtitle">3. Сцена — где происходит</h3>

<p>Контекст и окружение. Определяет фон, пространство и атмосферу. Без сцены субъект «висит в воздухе».</p>

<table class="highlight striped">
  <thead>
    <tr><th>❌ Плохо</th><th>✅ Хорошо</th></tr>
  </thead>
  <tbody>
    <tr><td>«офис»</td><td>«современный open-space, панорамные окна, вечер»</td></tr>
    <tr><td>«кухня»</td><td>«светлая кухня в скандинавском стиле, мраморная столешница»</td></tr>
  </tbody>
</table>

<h3 class="use-text-subtitle">4. Освещение — настроение кадра</h3>

<p>Главный фактор качества. Освещение меняет всё: цветовую температуру, тени, объём. Обязательно указывайте в каждом промпте.</p>

<div class="row spacing4">
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-2" style="text-align:center">
    <p class="use-text-paragraph mb-0"><strong>Утро</strong></p>
    <p class="use-text-paragraph mb-0 small">«мягкий утренний свет из окна, длинные тени»</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-2" style="text-align:center">
    <p class="use-text-paragraph mb-0"><strong>Студия</strong></p>
    <p class="use-text-paragraph mb-0 small">«студийное освещение, белый фон, без теней»</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-2" style="text-align:center">
    <p class="use-text-paragraph mb-0"><strong>Неон</strong></p>
    <p class="use-text-paragraph mb-0 small">«неоновая подсветка, синий и розовый свет»</p>
  </div>
</div>
</div>

<div class="row spacing4" style="margin-top:0">
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-2" style="text-align:center">
    <p class="use-text-paragraph mb-0"><strong>Вечер</strong></p>
    <p class="use-text-paragraph mb-0 small">«тёплый вечерний свет, золотой час»</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-2" style="text-align:center">
    <p class="use-text-paragraph mb-0"><strong>Драма</strong></p>
    <p class="use-text-paragraph mb-0 small">«контрастный свет, глубокие тени, кинематографичный»</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-2" style="text-align:center">
    <p class="use-text-paragraph mb-0"><strong>Тьма</strong></p>
    <p class="use-text-paragraph mb-0 small">«тёмный фон, один источник света сверху»</p>
  </div>
</div>
</div>

<h3 class="use-text-subtitle">5. Стиль — параметр `&style=`</h3>

<p>Передаётся <strong>отдельным параметром URL</strong>, не в тексте промпта. Это не фильтр — нейросеть заново интерпретирует сцену в заданной художественной системе координат.</p>

```
https://pixinlink.ru/800x400/рыжая-кошка-на-подоконнике?style=realistic
```

<p>Доступные стили: <code>realistic</code>, <code>illustration</code>, <code>3d</code>, <code>pixel-art</code>, <code>cyberpunk</code>, <code>anime</code> — и 50+ дополнительных (импрессионизм, акварель, Ван Гог, Studio Ghibli). Подробный обзор — в статье <a href="/blog/style-vizualnoe-napravlenie/">«Стиль через ?style=»</a>.</p>

<h2 class="use-text-title2">Примеры: до и после доработки промпта</h2>

<p>Одна и та же сцена с плохим и хорошим промптом даёт принципиально разный результат. Ниже — реальные URL, которые можно открыть в браузере.</p>

<table class="highlight striped">
  <thead>
    <tr><th>Ниша</th><th>❌ Плохой промпт</th><th>✅ Хороший промпт</th><th>Стиль</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Блог IT</strong></td>
      <td>«программирование»</td>
      <td>«разработчик за ноутбуком в тёмном офисе, мониторы с кодом, синяя подсветка»</td>
      <td><code>cyberpunk</code></td>
    </tr>
    <tr>
      <td><strong>Кулинария</strong></td>
      <td>«еда»</td>
      <td>«тарелка пасты карбонара, сыр пармезан сверху, белая тарелка, студийное освещение, food photo»</td>
      <td><code>realistic</code></td>
    </tr>
    <tr>
      <td><strong>E-commerce</strong></td>
      <td>«товар»</td>
      <td>«кожаная коричневая сумка-шоппер, белый фон, студийный свет, e-commerce product shot»</td>
      <td><code>realistic</code></td>
    </tr>
    <tr>
      <td><strong>Недвижимость</strong></td>
      <td>«квартира»</td>
      <td>«светлая квартира-студия, скандинавский интерьер, панорамные окна, дневной свет»</td>
      <td><code>realistic</code></td>
    </tr>
    <tr>
      <td><strong>SaaS-стартап</strong></td>
      <td>«команда»</td>
      <td>«команда разработчиков обсуждает продукт, open-space, стикеры на стене, мониторы с графиками»</td>
      <td><code>illustration</code></td>
    </tr>
    <tr>
      <td><strong>Игровой сайт</strong></td>
      <td>«город»</td>
      <td>«футуристический город, летающие машины, неоновые вывески, дождь, тёмный фон»</td>
      <td><code>cyberpunk</code></td>
    </tr>
  </tbody>
</table>

<h2 class="use-text-title2">Параметры bg и fg: управление цветом</h2>

<p><code>bg</code> задаёт цветовую подсказку для фона, <code>fg</code> — для объектов переднего плана. Значения — HEX без <code>#</code>. Комбинируются со стилем и промптом.</p>

<table class="highlight striped">
  <thead>
    <tr><th>bg</th><th>Эффект</th><th>fg</th><th>Эффект</th></tr>
  </thead>
  <tbody>
    <tr><td><code>ffffff</code></td><td>Белый/светлый фон</td><td><code>333333</code></td><td>Тёмный текст/объекты</td></tr>
    <tr><td><code>f5f5f5</code></td><td>Светло-серый</td><td><code>000000</code></td><td>Чёрные объекты</td></tr>
    <tr><td><code>eeeeee</code></td><td>Нейтральный серый</td><td><code>e91e63</code></td><td>Розовые акценты</td></tr>
    <tr><td><code>000000</code></td><td>Чёрный (для cyberpunk)</td><td><code>ffffff</code></td><td>Белые объекты</td></tr>
  </tbody>
</table>

<p>Пример URL с bg/fg:</p>

```
https://pixinlink.ru/800x400/ночной-город?style=cyberpunk&bg=0d0d0d&fg=00ffcc
```

<h2 class="use-text-title2">Промпт под задачу: шпаргалка по нишам</h2>

<table class="highlight striped">
  <thead>
    <tr><th>Задача</th><th>Оптимальная длина</th><th>Рекомендуемый стиль</th><th>Пример промпта</th></tr>
  </thead>
  <tbody>
    <tr><td>Карточка товара</td><td>50–100 симв.</td><td><code>realistic</code></td><td>«кожаная сумка, белый фон, студийный свет»</td></tr>
    <tr><td>Обложка статьи</td><td>100–200 симв.</td><td><code>illustration</code></td><td>«ноутбук на столе, кофе, блокнот, утренний свет из окна»</td></tr>
    <tr><td>OG-изображение</td><td>80–150 симв.</td><td><code>realistic</code></td><td>«заголовок-статьи-в-одну-строку, минимализм, тёмный фон»</td></tr>
    <tr><td>Хедер лендинга</td><td>150–300 симв.</td><td><code>3d</code></td><td>«3d-рендер облачной платформы, серверы, синие акценты, изометрия»</td></tr>
    <tr><td>Пост в Telegram</td><td>50–100 симв.</td><td><code>anime</code></td><td>«девушка с ноутбуком в кофейне, аниме, тёплые тона»</td></tr>
    <tr><td>Баннер Email</td><td>50–100 симв.</td><td><code>flat</code></td><td>«плоский дизайн, иконка подарка, синий и белый»</td></tr>
  </tbody>
</table>

<h2 class="use-text-title2">Частые ошибки</h2>

<div class="row spacing4">
<div class="col-md-6 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid #e53935">
    <h6 class="use-text-subtitle mb-1">❌ Слишком короткий промпт</h6>
    <p class="use-text-paragraph mb-0 small">1–2 слова не дают нейросети зацепок. Результат — случайная абстракция. Минимум: 5–7 слов с субъектом и сценой.</p>
  </div>
</div>
<div class="col-md-6 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid #e53935">
    <h6 class="use-text-subtitle mb-1">❌ Противоречивые детали</h6>
    <p class="use-text-paragraph mb-0 small">«солнечный день» и «ночное небо» в одном промпте ломают композицию. Каждое слово должно согласовываться с остальными.</p>
  </div>
</div>
</div>

<div class="row spacing4" style="margin-top:0">
<div class="col-md-6 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid #e53935">
    <h6 class="use-text-subtitle mb-1">❌ Стиль в тексте вместо параметра</h6>
    <p class="use-text-paragraph mb-0 small">Не пишите «в стиле аниме» в промпте. Используйте <code>?style=anime</code> в URL. Промпт — для сцены, стиль — для нейросети.</p>
  </div>
</div>
<div class="col-md-6 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid #e53935">
    <h6 class="use-text-subtitle mb-1">❌ Английский вместо русского</h6>
    <p class="use-text-paragraph mb-0 small">Kandinsky 3.1 обучен на русском. Английский промпт даёт менее точный результат. Пишите на кириллице.</p>
  </div>
</div>
</div>

<div class="row spacing4" style="margin-top:0">
<div class="col-md-6 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid #e53935">
    <h6 class="use-text-subtitle mb-1">❌ Слишком много деталей</h6>
    <p class="use-text-paragraph mb-0 small">10+ атрибутов размывают композицию. Нейросеть не может удержать всё. 2–3 ключевых атрибута — золотая середина.</p>
  </div>
</div>
<div class="col-md-6 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid #e53935">
    <h6 class="use-text-subtitle mb-1">❌ Промпт > 500 символов</h6>
    <p class="use-text-paragraph mb-0 small">Всё, что длиннее 500 символов, обрезается. Проверяйте длину перед отправкой. Оптимум: 100–300 символов.</p>
  </div>
</div>
</div>

<h2 class="use-text-title2">FAQ: короткие ответы</h2>

<h3 class="use-text-subtitle">Можно ли писать промпты на русском?</h3>
<p>Да, Kandinsky 3.1 отлично работает с русским языком. Кириллица — родная для модели, результат точнее, чем с английским промптом.</p>

<h3 class="use-text-subtitle">Почему изображение получилось не таким, как я ожидал?</h3>
<p>Проверьте запрос на противоречивые детали, укажите конкретный стиль через <code>?style=</code> и убедитесь, что субъект описан чётко, а не абстрактно.</p>

<h3 class="use-text-subtitle">Как сделать промпт для og:image?</h3>
<p>Используйте заголовок статьи как основу промпта, добавьте <code>?seed=</code> для фиксации результата и укажите стиль. Формат: <code>/1200x630/заголовок-статьи?style=illustration&amp;seed=42</code>.</p>

<h3 class="use-text-subtitle">Какой длины должен быть идеальный промпт?</h3>
<p>5–7 слов — минимум для осмысленного результата. 50–100 слов — хороший баланс точности и простоты. 100–300 слов — для максимально точного попадания. Более 500 символов — обрезается.</p>

<h3 class="use-text-subtitle">Нужно ли указывать стиль в тексте промпта?</h3>
<p>Нет. Стиль передаётся параметром <code>?style=</code> в URL. Промпт описывает сцену (субъект, детали, освещение), стиль задаёт художественное направление. Это два независимых измерения.</p>

<h3 class="use-text-subtitle">Как зафиксировать результат, чтобы он не менялся?</h3>
<p>Добавьте параметр <code>&amp;seed=</code> с любым числом от 1 до 2 147 483 647. Одно и то же значение seed всегда даёт одно и то же изображение. Подробнее — в статье <a href="/blog/seed-parametr/">про seed-параметр</a>.</p>

<!-- @block: key-facts -->
**Промпт = субъект + детали + сцена + освещение + стиль.** 5 слов — случайный результат, 50–100 — предсказуемый, 100–300 — идеальный. Кириллица для Kandinsky 3.1 родная. Параметр `?style=` выносится из текста промпта в URL.
<!-- @block: cta -->
<h2 class="use-text-title2">Хватит читать — пора тестировать</h2>

<p>Скопируйте URL ниже, подставьте свой промпт — и откройте в браузере. 30 генераций бесплатно, без регистрации. Результат через 15 секунд.</p>

```
https://pixinlink.ru/800x400/ваш-промпт-здесь?style=realistic
```

<a class="btn waves-effect button btn-large primary" style="color:#fff" href="https://app.pixinlink.ru/register">30 изображений бесплатно</a>

</main>
