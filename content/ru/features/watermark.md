---
title: "Водяной знак на ИИ-изображениях: как работает и как убрать"
description: "Как работает водяной знак на изображениях PixInLink: текст, позиция, шрифт. Как отключить watermark через привязку домена на платных тарифах."
slug: "features/watermark"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "WebPage"
---
<main class="container-wrap container-pages">

<!-- HERO -->
<div class="container mt-5 pt-5 mb-4" id="watermark-header">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="d-flex align-items-center mb-3">
        <a href="https://pixinlink.ru/features/" class="badge" style="background:#e8eaf6;color:#3949ab;border-radius:4px;padding:5px 10px;">Возможности</a>
        <span class="ml-2 text-muted" style="font-size:14px;">/</span>
        <span class="ml-2 text-muted" style="font-size:14px;">Водяной знак</span>
      </div>
      <h1 class="use-text-title2">Водяной знак на ИИ-изображениях</h1>
      <p class="use-text-subtitle2 text-muted" style="font-size:1.2rem;line-height:1.6;margin-bottom:24px;">
        Для анонимных пользователей: текст «Сгенерировано на PixInLink.ru» внизу по центру на тёмной подложке. Привяжите домен — и знак исчезнет.
      </p>
      <div class="card pa-4 mb-4" style="background:#f3f8ff;border:1px solid #bbdefb;border-radius:12px;">
        <h3 class="headline mb-3" style="font-size:18px;font-weight:700;color:#1976d2;">Как убрать водяной знак</h3>
        <ol class="body-1 m-0 mb-3" style="line-height:1.9;padding-left:20px;">
          <li>Зарегистрируйтесь в <a href="https://app.pixinlink.ru/register">личном кабинете</a> и выберите <strong>Starter (300 ₽/мес)</strong>.</li>
          <li>Привяжите домен вашего сайта в Dashboard → Settings.</li>
          <li>Запрашивайте изображения со своего домена — знак исчезнет автоматически.</li>
        </ol>
        <div class="d-flex align-items-center flex-wrap" style="gap:12px;">
          <a href="https://pixinlink.ru/pricing/" class="btn primary waves-effect"
             style="padding:2px 24px;font-weight:600;border-radius:8px;">
            Перейти на Starter — 300 ₽/мес
          </a>
          <span class="body-2 text-muted">Оплата через Kassa. Отмена в любой момент.</span>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ЗАЧЕМ НУЖЕН WATERMARK -->
<div class="container" id="watermark-why">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-3" style="font-size:24px;font-weight:700;">Зачем нужен водяной знак</h2>
      <p class="body-1 mb-3" style="line-height:1.85;">
        PixInLink предоставляет бесплатный доступ к генерации изображений через GigaChat. Водяной знак — способ обозначить авторство инфраструктуры для анонимных пользователей. Коммерческие проекты могут отключить его, оформив платный тариф и привязав домен.
      </p>
      <div class="card paper pa-4 mb-5" style="background:#fff8e1;border-left:4px solid #ffb300;">
        <p class="body-2 m-0" style="line-height:1.75;">
          <strong>Это не декоративный CSS-слой.</strong> Текст вшивается в пиксели на сервере через Pillow ImageDraw до кодирования в WebP. Браузер получает готовый файл — CSS-трюки и DevTools не помогут.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- ТАБЛИЦА ТАРИФОВ -->
<div class="container" id="watermark-pricing">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Watermark по тарифам</h2>
      <div class="card paper pa-0 mb-3 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Тариф</th><th>Цена</th><th>Watermark</th><th>Кастомный текст</th></tr>
            </thead>
            <tbody class="body-2">
              <tr>
                <td><strong>Free</strong></td>
                <td>0 ₽</td>
                <td style="color:#e53935;">«Сгенерировано на PixInLink.ru»</td>
                <td>❌</td>
              </tr>
              <tr style="background:#e8f5e9;">
                <td><strong>Starter</strong></td>
                <td>300 ₽/мес</td>
                <td style="color:#2e7d32;font-weight:700;">❌ нет (по Referer)</td>
                <td>❌</td>
              </tr>
              <tr style="background:#e8f5e9;">
                <td><strong>Pro</strong></td>
                <td>2 500 ₽/мес</td>
                <td style="color:#2e7d32;font-weight:700;">❌ нет</td>
                <td>❌</td>
              </tr>
              <tr style="background:#fff3e0;">
                <td><strong>Business</strong></td>
                <td>4 500 ₽/мес</td>
                <td style="color:#2e7d32;font-weight:700;">❌ нет</td>
                <td style="font-weight:700;">✅ до 50 символов</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p class="body-2 text-muted mb-5">Подробнее о квотах → <a href="https://pixinlink.ru/pricing/">/pricing</a></p>
<!-- ВНЕШНИЙ ВИД -->
      <h2 class="display-1 mb-3" style="font-size:24px;font-weight:700;">Как выглядит водяной знак</h2>
      <p class="body-1 mb-4" style="line-height:1.85;">
        Текст «Сгенерировано на PixInLink.ru» располагается <strong>по центру внизу</strong> изображения на тёмной скруглённой подложке. Шрифт — <strong>DejaVuSans</strong> (поддерживает кириллицу). Размер текста автоматически подбирается бинарным поиском так, чтобы надпись занимала не более 80% ширины изображения (минимум 8px). Рендеринг с antialiasing.
      </p>
      <div class="row mb-5">
        <div class="col-md-6 mb-3">
          <div class="card paper pa-3" style="height:100%;border-top:4px solid #9e9e9e;">
            <p class="body-2 mb-1 font-weight-bold">Free — со знаком</p>
            <div class="pa-2 mb-2" style="background:#1e1e1e;border-radius:4px;word-break:break-all;">
              <code style="color:#9cdcfe;font-size:11px;">https://pixinlink.ru/800x400/горы</code>
            </div>
            <p class="body-2 m-0 text-muted" style="font-size:11px;">Анонимный запрос — знак вшит автоматически</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-3" style="height:100%;border-top:4px solid #43a047;">
            <p class="body-2 mb-1 font-weight-bold">Starter+ — без знака</p>
            <div class="pa-2 mb-2" style="background:#1e1e1e;border-radius:4px;word-break:break-all;">
              <code style="color:#9cdcfe;font-size:11px;">https://pixinlink.ru/800x400/горы</code>
            </div>
            <p class="body-2 m-0 text-muted" style="font-size:11px;">Запрос с привязанного домена — знака нет</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- КАК ЭТО РАБОТАЕТ -->
<div class="container" id="watermark-howto">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Как работает отключение водяного знака</h2>
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #1976d2;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Через Referer, а не через URL-параметр</h4>
        <p class="body-2 m-0">Сервер определяет, нужно ли накладывать знак, по заголовку <strong>Referer</strong> браузера. Если запрос приходит с домена, привязанного к вашему аккаунту — знак не добавляется. Если домен не привязан или запрос анонимный — знак вшивается.</p>
      </div>
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #1976d2;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Шаг 1: Зарегистрируйтесь и оплатите тариф</h4>
        <p class="body-2 m-0">Выберите <strong>Starter (300 ₽/мес)</strong> или выше на <a href="https://pixinlink.ru/pricing/">/pricing</a>. Оплата через Kassa (Visa, МИР, СБП). Тариф активируется мгновенно.</p>
      </div>
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #1976d2;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Шаг 2: Привяжите домен</h4>
        <p class="body-2 m-0">В личном кабинете (Dashboard → Settings) добавьте домен вашего сайта. После привязки все запросы с этого домена будут обрабатываться без водяного знака.</p>
      </div>
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #1976d2;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Шаг 3: Используйте изображения со своего сайта</h4>
        <p class="body-2 m-0">Когда браузер посетителя запрашивает изображение с вашего сайта, заголовок Referer автоматически содержит ваш домен. Сервер видит привязанный домен и отдаёт изображение без знака. Никаких дополнительных параметров в URL не нужно.</p>
      </div>
      <div class="card paper pa-4 mb-5" style="border-left:4px solid #e53935;background:#ffebee;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;color:#c62828;">Важно: кеш старых изображений</h4>
        <p class="body-2 mb-2">Изображения, сгенерированные до оплаты тарифа, уже лежат в Redis-кеше со знаком. Чтобы перегенерировать их без знака — измените параметр <code>&seed=новое_число</code> в URL. Это создаст новый ключ кеша и запустит новую генерацию.</p>
      </div>
    </div>
  </div>
</div>
<!-- ПОЧЕМУ НЕЛЬЗЯ УБРАТЬ -->
<div class="container" id="watermark-technical">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Почему watermark нельзя убрать через CSS или DevTools</h2>
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #e53935;">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">Вшит в байты файла</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Накладывается через Pillow ImageDraw на сервере до WebP-кодирования. Браузер получает монолитный файл — знак является его частью.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #e53935;">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">CSS скрывает только визуально</h4>
            <p class="body-2 m-0" style="line-height:1.75;"><code>object-fit: cover</code> или <code>clip-path</code> скроют знак на сайте, но при сохранении файла на диск знак останется.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #e53935;">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">Нет URL-параметра для отключения</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Параметра <code>&watermark=false</code> не существует в backend. Отключение идёт исключительно через авторизацию по Referer.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- БИЗНЕС-ВОДЯНОЙ ЗНАК -->
<div class="container" id="watermark-business">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-3" style="font-size:24px;font-weight:700;">Кастомный watermark для Business</h2>
      <p class="body-1 mb-3" style="line-height:1.85;">
        На тарифе <strong>Business (4 500 ₽/мес)</strong> можно установить свой текст: название компании, домен или copyright до 50 символов. Настройка — в Dashboard → Settings → Watermark.
      </p>
      <div class="card paper pa-4 mb-5" style="background:#fff3e0;border:1px solid #ffcc80;border-radius:8px;">
        <p class="body-2 m-0" style="line-height:1.75;">
          <strong>Как настроить:</strong> зайдите в личный кабинет → Settings → Watermark → введите текст (до 50 символов) → сохраните. Изменения применяются для всех новых генераций. Ранее сгенерированные изображения в кеше не меняются — используйте новый <code>&seed</code> для перегенерации.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- FAQ -->
<div class="container" id="watermark-faq">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-1 mb-4" style="font-size:24px;font-weight:700;">Частые вопросы</h2>
      <div class="faq-style mb-5">
        <div class="root">
          <div class="accordion">
            <ul class="collapsible">
              <li class="accordion-content paper active">
                <div class="collapsible-header content">
                  <p class="heading">Я оплатил Starter, но watermark всё ещё виден. Почему?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Две возможные причины:<br>
                  1) Домен не привязан в Dashboard → Settings. Без привязанного домена сервер считает запрос анонимным.<br>
                  2) Изображение в кеше со старой генерацией. Добавьте <code>&seed=новое_число</code> для перегенерации без знака.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Можно ли отключить watermark через URL-параметр?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Нет. Параметр <code>&watermark=false</code> не обрабатывается сервером. Единственный способ отключить знак — привязать домен в личном кабинете и делать запросы с него (через Referer).</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Влияет ли watermark на качество изображения?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Минимально. Текст рендерится поверх готового изображения через Pillow, затем кодируется в WebP (quality=85). Для полностью чистых файлов без наложения нужен платный тариф с привязанным доменом.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Можно использовать Free-изображения на коммерческом сайте?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Технически можно, но текст «Сгенерировано на PixInLink.ru» будет на каждом изображении. По <a href="https://pixinlink.ru/legal/terms/">Terms of Service</a> Free-тариф предназначен для личного некоммерческого использования.</p>
                </div>
              </li>
              <li class="accordion-content paper">
                <div class="collapsible-header content">
                  <p class="heading">Можно ли поставить свой логотип картинкой?</p>
                  <i class="material-icons right arrow">expand_more</i>
                </div>
                <div class="collapsible-body detail">
                  <p>Пока поддерживается только текст (до 50 символов, DejaVuSans). Загрузка PNG-логотипа — в планах развития.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- CTA -->
<div class="container" id="watermark-cta">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="text-center mb-5 pa-5" style="background:linear-gradient(135deg,#e8f5e9 0%,#e3f2fd 100%);border-radius:16px;">
        <h3 class="display-1 mb-3" style="font-size:26px;font-weight:700;">Уберите водяной знак сегодня</h3>
        <p class="body-1 text-muted mb-4">Привяжите домен — знак исчезнет автоматически для всех запросов с вашего сайта.</p>
        <div class="d-flex justify-content-center flex-wrap" style="gap:16px;">
          <a href="https://app.pixinlink.ru/register?plan=starter" class="btn primary waves-effect"
             style="padding:2px 32px;font-size:16px;font-weight:600;border-radius:8px;">
            Starter — 300 ₽/мес
          </a>
          <a href="https://app.pixinlink.ru/register?plan=pro" class="btn secondary waves-effect"
             style="padding:2px 32px;font-size:16px;font-weight:600;border-radius:8px;">
            Pro — 2 500 ₽/мес
          </a>
          <a href="https://app.pixinlink.ru/register?plan=business" class="btn primary waves-effect"
             style="padding:2px 32px;font-size:16px;font-weight:600;border-radius:8px;">
            Business — 4 500 ₽/мес
          </a>
        </div>
        <p class="body-2 text-muted mt-4 mb-0">Все тарифы → <a href="https://pixinlink.ru/pricing/">/pricing</a></p>
      </div>
    </div>
  </div>
</div>
</main>
