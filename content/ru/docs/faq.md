---
title: "FAQ PixInLink — ответы на частые вопросы"
description: "Частые вопросы о PixInLink: регистрация, водяной знак, тарифы, промпты, URL API, WordPress и CMS, квоты и ошибки. 43 ответа в 6 разделах."
slug: "docs/faq"
date: "2026-06-17"
author: "PixInLink"
layout: "page"
schema_type: "FAQPage"
---
<main class="container-wrap container-pages">
<!-- HERO -->
<div class="container mt-5 pt-5 mb-4" id="faq-header">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="d-flex align-items-center mb-3">
        <a href="/docs/" class="badge" style="background:#e3f2fd;color:#1976d2;border-radius:4px;padding:5px 10px;">Документация</a>
        <span class="ml-2 text-muted" style="font-size:14px;">/</span>
        <span class="ml-2 text-muted" style="font-size:14px;">FAQ</span>
      </div>
      <h1 class="use-text-title2" style="font-size:2.6rem;line-height:1.2;margin-bottom:18px;">
        Частые вопросы о PixInLink
      </h1>
      <p class="use-text-subtitle2 text-muted" style="font-size:1.2rem;line-height:1.6;">
        43 ответа в 6 разделах: от первого изображения до API и квот.
      </p>
      <!-- Навигация по разделам -->
      <div class="row mt-4 mb-3">
        <div class="col-md-4 mb-2">
          <a href="#faq-start" class="card paper pa-3 d-block text-left" style="text-decoration:none;color:inherit;border-left:4px solid #1976d2;">
            <strong>1. Начало работы</strong><br>
            <span class="body-2 text-muted">Первое изображение, регистрация, сервис</span>
          </a>
        </div>
        <div class="col-md-4 mb-2">
          <a href="#faq-watermark" class="card paper pa-3 d-block text-left" style="text-decoration:none;color:inherit;border-left:4px solid #43a047;">
            <strong>2. Водяной знак и тарифы</strong><br>
            <span class="body-2 text-muted">Как убрать WM, цены, смена плана</span>
          </a>
        </div>
        <div class="col-md-4 mb-2">
          <a href="#faq-prompts" class="card paper pa-3 d-block text-left" style="text-decoration:none;color:inherit;border-left:4px solid #fb8c00;">
            <strong>3. Промпты и стили</strong><br>
            <span class="body-2 text-muted">Как писать, стили, seed</span>
          </a>
        </div>
        <div class="col-md-4 mb-2">
          <a href="#faq-url" class="card paper pa-3 d-block text-left" style="text-decoration:none;color:inherit;border-left:4px solid #8e24aa;">
            <strong>4. Параметры URL</strong><br>
            <span class="body-2 text-muted">Размеры, цвета, формат, кэш</span>
          </a>
        </div>
        <div class="col-md-4 mb-2">
          <a href="#faq-cms" class="card paper pa-3 d-block text-left" style="text-decoration:none;color:inherit;border-left:4px solid #00838f;">
            <strong>5. WordPress и CMS</strong><br>
            <span class="body-2 text-muted">WP, Hugo, Next.js, Django</span>
          </a>
        </div>
        <div class="col-md-4 mb-2">
          <a href="#faq-quotas" class="card paper pa-3 d-block text-left" style="text-decoration:none;color:inherit;border-left:4px solid #e53935;">
            <strong>6. Квоты и ошибки</strong><br>
            <span class="body-2 text-muted">429, 502, лимиты, rate limit</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ============================================================ -->
<!-- РАЗДЕЛ 1: НАЧАЛО РАБОТЫ -->
<!-- ============================================================ -->
<div class="container" id="faq-start">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">
        <span style="background:#1976d2;color:#fff;padding:3px 12px;border-radius:4px;font-size:18px;">1</span>
        &nbsp; Как начать и первый запрос
      </h2>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Нужна ли регистрация для первой генерации?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Нет. Вы можете сгенерировать изображение без регистрации — просто откройте ссылку вида
          <code>pixinlink.ru/800x600/ваш-промпт</code> в браузере. Без регистрации действует лимит
          <strong>30 изображений в месяц с одного домена</strong> (определяется по заголовку Referer).
          Для постоянного использования рекомендуем зарегистрироваться: Free-тариф даёт
          <strong>12 генераций/мес</strong>, платные тарифы — от 50 до 2 000 генераций/мес без водяного знака.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Какой самый простой способ получить первое изображение?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Откройте в браузере URL вида <code>https://pixinlink.ru/800x600/красивый-закат-над-горами</code>.
          Это всё — никаких SDK, регистраций, установок. Через 10–30 секунд вы увидите готовое изображение.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Почему при первом открытии ссылки появляется надпись «Генерируется...»?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Это нормально — сервер не имеет готового изображения и запускает генерацию (10–30 секунд).
           <strong>Обновите страницу через 15–20 секунд</strong> —
           вы увидите результат. Все последующие запросы отдают изображение мгновенно из кеша.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Можно ли использовать русский язык в промпте?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Да. PixInLink автоматически транслитерирует кириллицу в латиницу перед отправкой в AI-модель.
          Промпт «рыжая кошка на подоконнике» будет преобразован в «ryzhaya koshka na podokonnike».
          Это не полноценный перевод, а транслитерация — для лучшего результата рекомендуем писать
          конкретные существительные и избегать сложных грамматических конструкций.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Где хранятся сгенерированные изображения?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Все изображения хранятся в кеше PixInLink (Yandex Cloud, серверы в РФ).
           Они <strong>не загружаются в вашу медиабиблиотеку WordPress</strong> и не занимают место на вашем хостинге.
           Вы просто вставляете URL в тег <code>&lt;img&gt;</code> — и изображение загружается напрямую с нашего CDN.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как долго изображение будет доступно по ссылке?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          CDN кеширует изображение на <strong>1 год</strong> (<code>max-age=31536000</code>).
           После первого запроса изображение записывается в Redis, CDN и базу данных.
           В течение года оно гарантированно доступно. При сбросе кеша — перегенерируется по тому же URL.
        </p>
      </div>
      <div class="card paper pa-4 mb-5">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Можно ли скачать изображение на компьютер?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
Да. Откройте URL в браузере → ПКМ → «Сохранить изображение как». Или используйте
           <code>GET</code>-запрос к catch-all endpoint: ссылка уже даёт готовый файл.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- ============================================================ -->
<!-- РАЗДЕЛ 2: ВОДЯНОЙ ЗНАК И ТАРИФЫ -->
<!-- ============================================================ -->
<div class="container" id="faq-watermark">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">
        <span style="background:#43a047;color:#fff;padding:3px 12px;border-radius:4px;font-size:18px;">2</span>
        &nbsp; Водяной знак и тарифы
      </h2>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Почему на моём изображении есть водяной знак?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Водяной знак «Сгенерировано на PixInLink.ru» накладывается на все изображения, созданные
          <strong>без авторизации</strong> (анонимный доступ) или на <strong>Free-тарифе</strong>.
          Он вшивается непосредственно в пиксели изображения на сервере с помощью Pillow
          до WebP-кодирования. CSS-трюки и DevTools не помогут его убрать — в браузер приходит
          монолитный файл с текстом внутри.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как убрать водяной знак?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Зарегистрируйтесь и перейдите на платный тариф — <strong>Starter (300 ₽/мес) или выше</strong>.
          После оплаты водяной знак автоматически исчезает со всех новых генераций.
          Аутентификация платного пользователя происходит через привязку домена
          (заголовок Referer) — добавьте ваш домен в настройках профиля, и все изображения,
          запрошенные с этого домена, будут без водяного знака.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Какие тарифы есть и сколько они стоят?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
        </p>
        <div class="table-responsive mt-2">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Тариф</th><th>Цена</th><th>Изображений/мес</th><th>Водяной знак</th></tr>
            </thead>
            <tbody class="body-2">
              <tr>
                <td><strong>Free</strong></td>
                <td>0 ₽</td>
                <td>12</td>
                <td style="color:#e53935;">✅ есть</td>
              </tr>
              <tr style="background:#e8f5e9;">
                <td><strong>Starter</strong></td>
                <td>300 ₽/мес</td>
                <td>50</td>
                <td style="color:#2e7d32;font-weight:700;">❌ нет</td>
              </tr>
              <tr style="background:#e8f5e9;">
                <td><strong>Pro</strong></td>
                <td>2 500 ₽/мес</td>
                <td>500</td>
                <td style="color:#2e7d32;font-weight:700;">❌ нет</td>
              </tr>
              <tr style="background:#fff3e0;">
                <td><strong>Business</strong></td>
                <td>4 500 ₽/мес</td>
                <td>1 000</td>
                <td style="color:#2e7d32;font-weight:700;">❌ нет (кастомный доступен)</td>
              </tr>
              <tr>
                <td><strong>Enterprise</strong></td>
                <td>9 990 ₽/мес</td>
                <td>2 000</td>
                <td style="color:#2e7d32;font-weight:700;">❌ нет (полная кастомизация)</td>
              </tr>
            </tbody>
          </table>
        </div>
          <p class="body-2 mt-2">Подробнее на <a href="/pricing/">/pricing</a>.</p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Что ещё даёт каждый тариф кроме квоты?</h4>
        <div class="table-responsive mt-2">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Возможность</th><th>Free</th><th>Starter</th><th>Pro</th><th>Business</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td>Без водяного знака</td><td>❌</td><td>✅</td><td>✅</td><td>✅</td></tr>
              <tr><td>Коммерческое использование</td><td>❌</td><td>✅</td><td>✅</td><td>✅</td></tr>
              <tr><td>API-ключи</td><td>0</td><td>1</td><td>3</td><td>10</td></tr>
              <tr><td>Привязка доменов</td><td>❌</td><td>✅</td><td>✅</td><td>✅</td></tr>
              <tr><td>Webhook</td><td>❌</td><td>❌</td><td>✅</td><td>✅</td></tr>
              <tr><td>Кастомный водяной знак</td><td>❌</td><td>❌</td><td>❌</td><td>✅</td></tr>
              <tr><td>Формат AVIF</td><td>❌</td><td>❌</td><td>✅</td><td>✅</td></tr>
              <tr><td>REST API (POST /generate)</td><td>❌</td><td>✅</td><td>✅</td><td>✅</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как сменить тариф?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Личный кабинет → Billing → выбрать тариф → оплатить через T-Bank.
          Доступны карты Visa, Mastercard, МИР, СБП, SberPay. Тариф активируется мгновенно после оплаты.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Можно ли отменить подписку?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Да, в любой момент. При отмене тариф возвращается на Free: квота — 12 генераций/мес,
          водяной знак включается. Сгенерированные ранее изображения остаются на CDN.
        </p>
      </div>
      <div class="card paper pa-4 mb-5">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Что будет со старыми изображениями при апгрейде тарифа?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Ранее сгенерированные изображения (с водяным знаком) остаются в CDN-кеше без изменений.
          Чтобы получить версию без водяного знака, <strong>измените URL</strong> — добавьте
          <code>?seed=новое_число</code>. Это вызовет перегенерацию: сервер увидит новый seed,
          создаст изображение заново, и поскольку теперь вы на платном тарифе — водяной знак
          не будет наложен.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- ============================================================ -->
<!-- РАЗДЕЛ 3: ПРОМПТЫ И СТИЛИ -->
<!-- ============================================================ -->
<div class="container" id="faq-prompts">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">
        <span style="background:#fb8c00;color:#fff;padding:3px 12px;border-radius:4px;font-size:18px;">3</span>
        &nbsp; Промпты и стили
      </h2>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как написать хороший промпт?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Формула: <strong>[Субъект] + [Детали] + [Сцена] + [Свет/Атмосфера]</strong>.<br>
          Плохо: «еда». Хорошо: «тирамису крем ягоды вид сверху деревянный стол».<br>
          Оптимальная длина — <strong>3–7 слов</strong>. Будьте конкретны: не «город», а «вечерний мегаполис неоновые огни дождь».
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Сколько символов максимум в промпте?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          <strong>500 символов.</strong> Всё, что длиннее, обрезается без ошибки. Сервер нормализует
          промпт: убирает лишние пробелы, приводит к Unicode NFKC, удаляет спецсимволы.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Какие стили доступны?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
        </p>
        <div class="table-responsive mt-2">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Стиль</th><th>Описание</th><th>Для чего</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td><code>default</code></td><td>Фотореализм (по умолчанию)</td><td>Универсальный: люди, еда, интерьеры</td></tr>
              <tr><td><code>3d</code></td><td>UHD 3D-рендер</td><td>Продукты, техника, изометрия</td></tr>
              <tr><td><code>illustration</code></td><td>Цифровая живопись</td><td>Персонажи, арты, концепты</td></tr>
              <tr><td><code>anime</code></td><td>Аниме / манга</td><td>Иллюстрации в японском стиле</td></tr>
              <tr><td><code>photographic</code></td><td>Фотографический</td><td>Максимальный реализм, как фото</td></tr>
              <tr><td><code>minimal</code></td><td>Минимализм</td><td>Чистые линии, лаконичный дизайн</td></tr>
              <tr><td><code>dark</code></td><td>Тёмная эстетика</td><td>Мрачные, атмосферные сцены</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Чем стили отличаются друг от друга на практике?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          <strong>default/photographic</strong> — фотореализм без стилизации.
          <strong>illustration</strong> — ручная цифровая живопись (подходит для обложек книг, артов).
          <strong>3d</strong> — Blender-подобный рендер (идеален для товаров и архитектуры).
          <strong>anime</strong> — манга-стиль с характерной штриховкой.
          <strong>minimal</strong> — чистый фон, минимум деталей.
          <strong>dark</strong> — тёмная палитра, высокая контрастность.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Можно ли генерировать в стиле pixel-art или cyberpunk?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Пока нет. Стили <code>pixel-art</code> и <code>cyberpunk</code> отсутствуют в текущей версии.
          Если передать неизвестный стиль, сервер использует <code>default</code>.
          Добавление новых стилей — в roadmap. Актуальный список всегда в документации
          <a href="/features/url-api/">URL API</a>.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Поддерживается ли negative prompt (что НЕ рисовать)?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Напрямую — нет. Сервер автоматически добавляет исключения через встроенный prompt processor:
          «blurry, low quality, watermark, text, distorted». Вы не можете передать свой список
          запрещённых элементов через URL. Для продвинутого контроля используйте REST API.
        </p>
      </div>
      <div class="card paper pa-4 mb-5">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как зафиксировать результат, чтобы он не менялся?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Добавьте <code>?seed=любое_число</code> к URL. Одинаковая комбинация
          <strong>prompt + style + seed</strong> всегда возвращает одно и то же изображение.
          Пример: <code>pixinlink.ru/800x400/кофе-стол?seed=42</code>.
          Без seed каждый новый cache-miss создаёт уникальную картинку.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- ============================================================ -->
<!-- РАЗДЕЛ 4: ПАРАМЕТРЫ URL -->
<!-- ============================================================ -->
<div class="container" id="faq-url">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">
        <span style="background:#8e24aa;color:#fff;padding:3px 12px;border-radius:4px;font-size:18px;">4</span>
        &nbsp; Технические параметры URL
      </h2>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Какие размеры изображений поддерживаются?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          От <strong>16×16 до 4096×4096 пикселей</strong>. Значения вне диапазона обрезаются
          (clamped) без ошибки: 5000 → 4096, 10 → 16. Формат в URL: <code>/WIDTHxHEIGHT/</code>.
          Примеры: <code>/1200x630/</code>, <code>/1080x1920/</code>, <code>/800x400/</code>.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Можно ли задать цветовую тему?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Цветовая палитра управляется через <strong>промпт</strong>. Укажите цвета в описании:
          <code>.../800x400/тёмно-синий-фон-неоново-зелёный-текст</code>.
          AI-модель учтёт цветовую гамму из контекста промпта. Для точного указания цветов
          через bg/fg в пути — см. документацию REST API.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Какие форматы файлов доступны?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          URL API (catch-all <code>GET /{path}</code>) всегда возвращает <strong>WebP</strong>
          с качеством 85% и методом сжатия 6. Формат задать нельзя — он оптимален для веба.
          AVIF и PNG доступны только через <strong>REST API</strong> (<code>POST /api/v1/images/generate</code>,
          параметр <code>format</code> в теле запроса). Для 99% случаев WebP — лучший выбор:
          на 25–34% легче JPEG при том же качестве.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Что означает ?seed= и когда его использовать?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Seed — это число, фиксирующее генерацию. Одинаковый prompt + одинаковый seed = всегда
          одинаковое изображение. Используйте когда:
          <br>— Настраиваете <code>og:image</code> для страницы (привязка к ID страницы)
          <br>— Хотите зафиксировать понравившийся результат после экспериментов
          <br>— Меняете тариф и хотите перегенерировать старые изображения (новый seed)
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как работает кэширование изображений?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Три уровня кеша:
          <br><strong>1. Redis gen-кеш</strong> — само изображение в бинарном виде (TTL 24ч). Попадание → HTTP 200.
          <br><strong>2. Redis CDN-кеш</strong> — URL редиректа на CDN (TTL 30 дней). Попадание → HTTP 302.
          <br><strong>3. PostgreSQL</strong> — перманентная запись в БД.
          <br><br>
          Первый запрос (cache miss): 10–30 сек генерации.
          Повторный запрос (cache hit): менее 100 мс.
          Квота расходуется только при cache miss — повторные запросы бесплатны.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Есть ли ограничение на количество запросов?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Да. <strong>Rate limit: 50 запросов в минуту</strong> для всех пользователей на URL API.
          Месячная квота (генераций при cache miss) зависит от тарифа: 12/50/500/1 000/2 000.
          Cache hit (повторные запросы) не расходуют квоту и не учитываются в rate limit.
        </p>
      </div>
      <div class="card paper pa-4 mb-5">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как передать API-ключ в URL?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          <strong>Никак.</strong> URL API (catch-all <code>GET /{path}</code>) не принимает API-ключ
          в параметрах URL. Аутентификация работает через <strong>заголовок Referer</strong>:
          привяжите ваш домен в настройках профиля, и все запросы с этого домена автоматически
          считаются авторизованными (без водяного знака, с вашей квотой).
          <br><br>
          Для REST API используйте заголовок <code>X-API-Key: ваш_ключ</code> или
          <code>Authorization: Bearer ваш_ключ</code>. Формат ключа: <code>imgeshub_...</code>.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- ============================================================ -->
<!-- РАЗДЕЛ 5: WORDPRESS И CMS -->
<!-- ============================================================ -->
<div class="container" id="faq-cms">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">
        <span style="background:#00838f;color:#fff;padding:3px 12px;border-radius:4px;font-size:18px;">5</span>
        &nbsp; WordPress и CMS
      </h2>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как вставить изображение в WordPress без плагина?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          В редакторе Gutenberg: добавьте блок «Пользовательский HTML» и вставьте:
        </p>
        <div class="pa-3 mt-2" style="background:#1e1e1e;border-radius:8px;">
          <code style="color:#9cdcfe;font-size:13px;">&lt;img src="https://pixinlink.ru/800x400/офис-разработчиков" alt="Офис" loading="lazy" width="800" height="400"&gt;</code>
        </div>
        <p class="body-2 mt-2 text-muted">Изображение загрузится напрямую с CDN PixInLink, не занимая место в медиабиблиотеке WordPress.</p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как автоматизировать featured image для всех постов?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Добавьте фильтр в <code>functions.php</code> вашей child theme. 5 строк PHP:
        </p>
        <div class="pa-3 mt-2" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;"><span style="color:#6a9955;">// Автоматический featured image для постов без картинки</span>
add_filter('post_thumbnail_html', function($html, $post_id) {
  if (empty($html)) {
    $title = sanitize_title(get_the_title($post_id));
    return '&lt;img src="https://pixinlink.ru/1200x630/'.$title.'" loading="lazy"&gt;';
  }
  return $html;
}, 10, 2);</pre>
        </div>
        <p class="body-2 mt-2 text-muted">Этот код срабатывает только когда featured image не задан вручную — ваши собственные обложки не перезаписываются.</p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как настроить og:image для Yoast SEO?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
        </p>
        <div class="pa-3 mt-2" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;margin:0;">add_filter('wpseo_opengraph_image', function($img) {
  if (empty($img)) {
    $title = sanitize_title(get_the_title());
    return "https://pixinlink.ru/1200x630/{$title}";
  }
  return $img;
});</pre>
        </div>
        <p class="body-2 mt-2 text-muted">Yoast будет использовать сгенерированное AI-изображение как og:image для всех постов без заданной вручную обложки.</p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Поддерживаются ли RankMath и AIOSEO?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Да. Для <strong>RankMath</strong> используйте фильтр <code>rank_math/opengraph/facebook/image</code>.
          Для <strong>AIOSEO</strong> — <code>aioseo_opengraph_image</code>. Логика та же: подставить URL
          PixInLink с заголовком поста, если изображение не задано вручную.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Работает ли PixInLink с Elementor и Divi?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Да. В <strong>Elementor</strong>: Image Widget → вкладка «Содержание» → поле «Image URL»
          (External Image URL) → вставить ссылку PixInLink.
          В <strong>Divi</strong>: Image Module → поле URL → вставить ссылку PixInLink.
          В обоих случаях изображение загружается с CDN без сохранения в медиабиблиотеку.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Есть ли готовый WordPress-плагин?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Полноценный плагин с визуальным интерфейсом и блоком Gutenberg — в разработке (Q3 2026).
          На данный момент доступен базовый shortcode <code>[imgeshub prompt="..." width="800" height="400"]</code>
          через установку <code>imageshub</code> из репозитория WordPress.
          Рекомендуемый способ — PHP-код в <code>functions.php</code> (5–10 строк), описанный выше.
        </p>
      </div>
      <div class="card paper pa-4 mb-5">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как вставить изображение в Hugo / Next.js / Django?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          <strong>Hugo:</strong> <code>&lt;meta property="og:image" content="https://pixinlink.ru/1200x630/{{ .Title | urlize }}"&gt;</code>
          <br><strong>Next.js:</strong> <code>`https://pixinlink.ru/1200x630/${encodeURIComponent(title)}?seed=${id}`</code>
          <br><strong>Django:</strong> <code>f"https://pixinlink.ru/1200x630/{slugify(post.title)}?seed={post.id}"</code>
          <br><br>
          Для всех CMS принцип один: заголовок/название → slug/sanitize → часть URL PixInLink.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- ============================================================ -->
<!-- РАЗДЕЛ 6: КВОТЫ, RATE LIMITS И ОШИБКИ -->
<!-- ============================================================ -->
<div class="container" id="faq-quotas">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">
        <span style="background:#e53935;color:#fff;padding:3px 12px;border-radius:4px;font-size:18px;">6</span>
        &nbsp; Квоты, rate limits и ошибки
      </h2>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Почему я получил ошибку 429 Too Many Requests?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Причин две:
          <br><strong>1. Rate limit:</strong> больше 50 запросов в минуту с одного IP. Решение: уменьшить частоту.
          <br><strong>2. Месячная квота исчерпана:</strong> вы достигли лимита генераций по тарифу
          (12/50/500/1 000/2 000). Решение: дождаться сброса 1-го числа или перейти на тариф выше.
          <br><br>
          Для анонимных пользователей 429 также означает превышение лимита 30 изображений в месяц с домена.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Чем отличается rate limit от месячной квоты?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          <strong>Rate limit</strong> — максимальное число запросов <strong>в минуту</strong>.
          Действует на все запросы (и cache hit, и cache miss). Сбрасывается каждую минуту.
          <br><strong>Месячная квота</strong> — максимальное число <strong>генераций</strong> в месяц.
          Расходуется только при cache miss (новых генерациях). Сбрасывается 1-го числа (UTC).
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Расходуется ли квота при повторных запросах к тому же URL?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          <strong>Нет.</strong> Cache hit (HTTP 302 редирект на CDN) не расходует месячную квоту.
          Квота списывается только один раз — при первой генерации (cache miss).
          Если 1 000 посетителей вашего сайта увидят одну и ту же картинку, вы заплатите квотой только за
          <strong>один cache miss</strong>. Это делает PixInLink экономичным для сайтов с высокой посещаемостью.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Когда сбрасывается месячная квота?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          <strong>1-го числа каждого месяца в 00:00 UTC</strong> (03:00 МСК). Счётчик
          <code>monthly_generations</code> обнуляется для всех пользователей одновременно,
          независимо от даты регистрации или оплаты.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Что делать при ошибке 502 Bad Gateway?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Ошибка 502 означает, что AI-провайдер временно недоступен.
          <strong>Повторите запрос через 10–20 секунд.</strong> Сервер автоматически делает до 3 retry
          с экспоненциальной задержкой. Если ошибка повторяется — проверьте
          <a href="https://status.pixinlink.ru">status.pixinlink.ru</a>.
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Почему изображение показывает ошибку 400 Bad Request?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Неверный формат URL. Проверьте:
          <br>— Размеры: формат <code>WIDTHxHEIGHT</code>, числа 16–4096
          <br>— HEX-цвета: ровно 6 символов (0–9, a–f), без #
          <br>— Промпт: не пустой, URL-кодированный (пробелы как %20)
          <br>— Пример ошибки: <code>/800x630/</code> — width=800, height=630 (не hex), должно быть <code>/800x400/</code>
        </p>
      </div>
      <div class="card paper pa-4 mb-3">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Как узнать остаток квоты?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          <strong>Через API:</strong> <code>GET /api/v1/user/quota</code> (требуется авторизация).
          Ответ: <code>{"plan": "starter", "used": 23, "limit": 50, "reset_at": "2026-07-01T00:00:00Z"}</code>.
          <br><strong>В личном кабинете:</strong> Dashboard → секция Usage → текущий остаток и график.
        </p>
      </div>
      <div class="card paper pa-4 mb-5">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Что будет при превышении анонимного лимита?</h4>
        <p class="body-1 m-0" style="line-height:1.75;">
          Анонимные пользователи (без регистрации) ограничены <strong>30 изображениями в месяц
          с одного домена</strong> (определяется по заголовку Referer). При превышении — HTTP 429
          с сообщением «Monthly limit of 30 images reached for ...».
          Зарегистрируйтесь на Free (12/мес) или платный тариф (50+), чтобы снять это ограничение.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- CTA -->
<div class="container mb-5" id="faq-cta">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1 text-center">
      <div class="pa-5" style="background:linear-gradient(135deg,#e3f2fd 0%,#e8f5e9 100%);border-radius:16px;">
        <h3 class="display-1 mb-3" style="font-size:24px;font-weight:700;">Не нашли ответ?</h3>
        <p class="body-1 text-muted mb-4">
          Поддержка 24/7 в Telegram: <a href="https://t.me/pixinlinksupport">@pixinlinksupport</a><br>
          Email: <a href="mailto:support@pixinlink.ru">support@pixinlink.ru</a><br>
          Статус сервиса: <a href="https://status.pixinlink.ru">status.pixinlink.ru</a>
        </p>
        <div class="d-flex justify-content-center flex-wrap" style="gap:16px;">
          <a href="/docs/getting-started/" class="btn primary waves-effect"
             style="padding:2px 24px;font-weight:600;border-radius:8px;">
            Начало работы
          </a>
          <a href="/pricing/" class="btn secondary waves-effect"
             style="padding:2px 24px;font-weight:600;border-radius:8px;">
            Выбрать тариф
          </a>
          <a href="/features/url-api/" class="btn btn-outlined primary waves-effect"
             style="padding:2px 24px;font-weight:600;border-radius:8px;">
            URL API
          </a>
        </div>
      </div>
      <!-- Смежные материалы -->
      <div class="row mt-4">
        <div class="col-md-3 mb-2">
          <a href="/use-cases/blog-headers/" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <span class="d-block body-2 text-primary mb-1">→ Кейс</span>
            <p class="body-1 mb-0 font-weight-bold">Изображения для блога</p>
          </a>
        </div>
        <div class="col-md-3 mb-2">
          <a href="/use-cases/og-image/" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <span class="d-block body-2 text-primary mb-1">→ Кейс</span>
            <p class="body-1 mb-0 font-weight-bold">Авто-og:image для соцсетей</p>
          </a>
        </div>
        <div class="col-md-3 mb-2">
          <a href="/use-cases/social-media/" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <span class="d-block body-2 text-primary mb-1">→ Кейс</span>
            <p class="body-1 mb-0 font-weight-bold">Изображения для соцсетей</p>
          </a>
        </div>
        <div class="col-md-3 mb-2">
          <a href="/integrations/wordpress/" class="card paper pa-3 d-block" style="text-decoration:none;color:inherit;">
            <span class="d-block body-2 text-primary mb-1">→ Интеграция</span>
            <p class="body-1 mb-0 font-weight-bold">WordPress</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
