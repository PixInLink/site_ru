---
title: "Водяной знак на ИИ-изображениях: как работает и как убрать"
description: "Как работает водяной знак на ИИ-изображениях PixInLink. Пошаговая инструкция по отключению watermark на платных тарифах, сравнение тарифов."
slug: "features/watermark"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "WebPage"
---
<main class="container-wrap">

<!-- HERO -->
<div class="container mt-5 pt-5 mb-4" id="watermark-header">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="d-flex align-items-center mb-3">
        <a href="https://pixinlink.ru/features/" class="badge" style="background:#e8eaf6;color:#3949ab;border-radius:4px;padding:5px 10px;">Возможности</a>
        <span class="ml-2 text-muted" style="font-size:14px;">/</span>
        <span class="ml-2 text-muted" style="font-size:14px;">Водяной знак</span>
      </div>
      <p class="use-text-subtitle2 text-muted" style="font-size:1.2rem;line-height:1.6;margin-bottom:24px;">
        Free-тариф: знак «PixInLink.com» вшит в пиксели. Starter от 490 руб/мес — без знака. Business — ваш бренд.
      </p>
      <div class="card pa-4 mb-4" style="background:#f3f8ff;border:1px solid #bbdefb;border-radius:12px;">
        <h3 class="headline mb-3" style="font-size:18px;font-weight:700;color:#1976d2;">Как убрать водяной знак — 3 шага</h3>
        <ol class="body-1 m-0 mb-3" style="line-height:1.9;padding-left:20px;">
          <li>Перейди на <a href="https://pixinlink.ru/pricing/">/pricing</a> → выбери <strong>Starter (490 руб/мес)</strong>.</li>
          <li>Оплати через Kassa (Visa, МИР, СБП, SberPay).</li>
          <li>Добавь <code>&amp;watermark=false</code> к URL или измени параметр seed, чтобы сбросить кеш старой картинки.</li>
        </ol>
        <div class="d-flex align-items-center flex-wrap" style="gap:12px;">
          <a href="https://pixinlink.ru/pricing/starter/" class="btn-flat btn-rounded"
             style="background:#1976d2;color:#fff;padding:10px 24px;font-weight:600;text-decoration:none;border-radius:8px;">
            Перейти на Starter — 490 руб/мес
          </a>
          <span class="body-2 text-muted">Карта не нужна для Free. Апгрейд — через Kassa.</span>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ЗАЧЕМ НУЖЕН WATERMARK -->
<div class="container" id="watermark-why">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-3" style="font-size:24px;font-weight:700;">Зачем вообще водяной знак</h2>
      <p class="body-1 mb-3" style="line-height:1.85;">
        На Free-тарифе PixInLink полностью берет на себя все инфраструктурные расходы: оплату вызовов Kandinsky API, аренду GPU, обработку через Image Processor, загрузку в S3 и глобальную CDN-доставку. Водяной знак — это наш способ обозначить авторство ресурса и мотивировать коммерческие проекты переходить на платную модель.
      </p>
      <div class="card paper pa-4 mb-5" style="background:#fff8e1;border-left:4px solid #ffb300;">
        <p class="body-2 m-0" style="line-height:1.75;">
          <strong>Это не декоративный элемент.</strong> Он вшивается непосредственно в пиксели на стороне сервера с помощью библиотеки Pillow (до этапа кодирования в WebP/S3). Технически убрать его без апгрейда невозможно: в браузер приходит монолитный файл. CSS-трюки и DevTools не дадут результата.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- ТАБЛИЦА ТАРИФОВ -->
<div class="container" id="watermark-pricing">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Watermark по тарифам</h2>
      <div class="card paper pa-0 mb-3 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Тариф</th><th>Цена</th><th>Watermark</th><th>&amp;watermark=false</th><th>Кастомный текст</th></tr>
            </thead>
            <tbody class="body-2">
              <tr>
                <td><strong>Free</strong></td>
                <td>0 руб</td>
                <td style="color:#e53935;">PixInLink.com (принудительно)</td>
                <td>❌ игнорируется</td>
                <td>❌</td>
              </tr>
              <tr style="background:#e8f5e9;">
                <td><strong>Starter</strong></td>
                <td>490 руб/мес</td>
                <td style="color:#2e7d32;font-weight:700;">❌ нет</td>
                <td>✅ (по умолчанию)</td>
                <td>❌</td>
              </tr>
              <tr style="background:#e8f5e9;">
                <td><strong>Pro</strong></td>
                <td>1 490 руб/мес</td>
                <td style="color:#2e7d32;font-weight:700;">❌ нет</td>
                <td>✅</td>
                <td>❌</td>
              </tr>
              <tr style="background:#fff3e0;">
                <td><strong>Business</strong></td>
                <td>4 990 руб/мес</td>
                <td style="color:#2e7d32;font-weight:700;">❌ нет</td>
                <td>✅</td>
                <td style="font-weight:700;">✅ до 50 символов</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p class="body-2 text-muted mb-5">Подробнее о квотах каждого тарифа → <a href="https://pixinlink.ru/pricing/">/pricing</a></p>
<!-- ВНЕШНИЙ ВИД И ПРИМЕРЫ -->
      <h2 class="display-2 mb-3" style="font-size:24px;font-weight:700;">Как выглядит водяной знак</h2>
      <p class="body-1 mb-4" style="line-height:1.85;">
        Текст «PixInLink.com» всегда расположен в правом нижнем углу, отступ составляет ~5% от краев. Используется белый шрифт Arial, полупрозрачность (opacity) 50% и черная тень 1px для читаемости на любом фоне. Размер шрифта масштабируется: на картинке 800px высота текста составит ~20px. Рендеринг идёт с antialiasing.
      </p>
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <div class="card paper pa-3" style="height:100%;border-top:4px solid #9e9e9e;">
            <p class="body-2 mb-1 font-weight-bold">Free (со знаком)</p>
            <div class="pa-2 mb-2" style="background:#1e1e1e;border-radius:4px;word-break:break-all;">
              <code style="color:#9cdcfe;font-size:11px;">https://pixinlink.ru/800x400?prompt=горы</code>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-3" style="height:100%;border-top:4px solid #43a047;">
            <p class="body-2 mb-1 font-weight-bold">Starter/Pro (без знака)</p>
            <div class="pa-2 mb-2" style="background:#1e1e1e;border-radius:4px;word-break:break-all;">
              <code style="color:#9cdcfe;font-size:11px;">.../800x400?prompt=горы&amp;watermark=false</code>
            </div>
            <p class="body-2 m-0 text-muted" style="font-size:11px;">Нужен API-ключ в заголовке</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-3" style="height:100%;border-top:4px solid #fb8c00;">
            <p class="body-2 mb-1 font-weight-bold">Business (ваш бренд)</p>
            <div class="pa-2 mb-2" style="background:#1e1e1e;border-radius:4px;word-break:break-all;">
              <code style="color:#9cdcfe;font-size:11px;">.../800x400?prompt=горы&amp;watermark=МойБренд</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ПОШАГОВАЯ ИНСТРУКЦИЯ -->
<div class="container" id="watermark-howto">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Пошагово: как убрать водяной знак</h2>
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #1976d2;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Шаг 1. Перейди на страницу тарифов</h4>
        <p class="body-2 m-0">Открой <a href="https://pixinlink.ru/pricing/">/pricing</a> и выбери тариф Starter (490 руб/мес) или выше.</p>
      </div>
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #1976d2;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Шаг 2. Оплати через Kassa</h4>
        <p class="body-2 m-0">Доступны: Visa, Mastercard, МИР, СБП, SberPay, Pay-сервисы. Тариф активируется мгновенно. API-ключ обновляется автоматически (менять его не нужно).</p>
      </div>
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #1976d2;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Шаг 3. Обнови URL в своём коде</h4>
        <ul class="body-2 m-0 pl-3">
          <li><strong>Вариант А (самый явный):</strong> добавь параметр <code>&amp;watermark=false</code>.</li>
          <li><strong>Вариант Б:</strong> используй URL без параметра (поведение «без знака» включено на Starter по умолчанию).</li>
        </ul>
      </div>
      <div class="card paper pa-4 mb-5" style="border-left:4px solid #e53935;background:#ffebee;">
        <h4 class="headline mb-2" style="font-size:16px;font-weight:700;color:#c62828;">Шаг 4. Перегенерируй старые изображения (Важно)</h4>
        <p class="body-2 mb-2">Старые картинки лежат в CDN-кеше (TTL = 1 год). Оплата тарифа не удаляет знак с кешированных файлов. Принудительный сброс кеша:</p>
        <ul class="body-2 m-0 pl-3">
          <li>добавь <code>&amp;seed=любое_число</code></li>
          <li>или добавь <code>&amp;v=2</code></li>
        </ul>
        <p class="body-2 mt-2 m-0 text-muted"><em>Сервер сделает новую генерацию, которая пройдет без водяного знака.</em></p>
      </div>
    </div>
  </div>
</div>
<!-- ПОЧЕМУ НЕЛЬЗЯ УБРАТЬ -->
<div class="container" id="watermark-technical">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Почему watermark нельзя убрать через CSS или DevTools</h2>
      <p class="body-1 mb-4" style="line-height:1.85;">Не тратьте время на попытки обойти систему на бесплатном тарифе. Вот факты:</p>
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #e53935;">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">Вшит в байты файла</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Накладывается на сервере на сырой PNG до WebP-конвертации. В браузер приходит монолитный графический файл.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #e53935;">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">CSS скрывает только визуально</h4>
            <p class="body-2 m-0" style="line-height:1.75;"><code>object-fit: cover</code> или <code>clip-path</code> скроют знак на сайте, но если юзер сохранит файл на диск — знак будет виден.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #e53935;">
            <h4 class="headline mb-2" style="font-size:15px;font-weight:700;">API игнорирует URL-флаг</h4>
            <p class="body-2 m-0" style="line-height:1.75;">Передача <code>&amp;watermark=false</code> на Free-тарифе корректно принимается сервером, но игнорируется на этапе генерации.</p>
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
      <h2 class="display-2 mb-3" style="font-size:24px;font-weight:700;">Кастомный watermark для бизнеса</h2>
      <p class="body-1 mb-3" style="line-height:1.85;">
        На тарифе <strong>Business (4 990 руб/мес)</strong> вместо «PixInLink.com» вы можете установить свой текст: название компании, доменное имя или copyright. Максимум 50 символов (например: «© МояКомпания», «mysite.ru»).
      </p>
      <p class="body-1 mb-4" style="line-height:1.85;">
        Настройка доступна в интерфейсе (Dashboard → Settings → Watermark) или программно через REST API. Opacity повышена до 80% для лучшей читаемости бренда. В будущих обновлениях: загрузка PNG-логотипа.
      </p>
      <div class="card pa-4 mb-5" style="background:#1e1e1e;border-radius:8px;">
        <p class="body-2 mb-2" style="color:#fff;">Установить кастомный watermark через API (Business):</p>
        <pre style="color:#9cdcfe;font-size:13px;line-height:1.7;margin:0;">curl -X POST https://api.pixinlink.ru/api/v1/user/watermark \
  -H <span style="color:#ce9178;">"Authorization: Bearer pk_live_..."</span> \
  -H <span style="color:#ce9178;">"Content-Type: application/json"</span> \
  -d <span style="color:#ce9178;">'{"text": "МойСайт.ру"}'</span></pre>
      </div>
    </div>
  </div>
</div>
<!-- FAQ -->
<div class="container" id="watermark-faq">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Частые вопросы</h2>
      <div class="mb-5">
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Я оплатил Starter, но watermark всё ещё есть. Что делать?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">
            1) Вы забыли передать заголовок <code>X-API-Key: pk_live_...</code> (сервер думает, что вы Free).<br>
            2) Вы видите URL из CDN-кеша — добавьте <code>&amp;seed=2</code> для сброса.<br>
            3) В URL остался параметр <code>&amp;watermark=true</code>.
          </p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Влияет ли watermark на качество изображения?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Минимально. Текст рендерится с antialiasing поверх готового изображения, затем кодируется в WebP (quality=85). Для абсолютно чистых файлов (без артефактов наложения) нужен Starter.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Можно использовать Free-изображения на коммерческом сайте?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Технически можно, но знак «PixInLink.com» будет виден. По <a href="https://pixinlink.ru/legal/terms/">Terms of Service</a>, Free-тариф предназначен для личного некоммерческого использования.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Можно ли поставить свой логотип картинкой?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">Пока поддерживается только текст (до 50 символов). Загрузка PNG-логотипа запланирована в обновлениях — статус в <a href="https://pixinlink.ru/docs/changelog/">/docs/changelog</a>.</p>
        </div>
        <div class="card paper pa-4 mb-3">
          <h4 class="headline mb-2" style="font-size:16px;font-weight:700;">Мне нужно брендировать только половину картинок, как быть?</h4>
          <p class="body-1 m-0" style="line-height:1.75;">На Starter+ знак отключён по умолчанию. Для тех картинок, где он нужен, добавьте <code>&amp;watermark=true</code> (стандартный) или управляйте кастомным текстом через REST API (Business).</p>
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
        <h3 class="display-2 mb-3" style="font-size:26px;font-weight:700;">Водяной знак отсутствует на всех тарифах</h3>
          <p class="body-1 text-muted mb-4">Starter: 300 ₽/мес, 50 изображений. Business: кастомный логотип. Отмена в любой момент.</p>
          <div class="d-flex justify-content-center flex-wrap" style="gap:16px;">
            <a href="https://app.pixinlink.ru/register?plan=starter" class="btn-flat btn-rounded"
               style="background:#1976d2;color:#fff;padding:12px 32px;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
              Starter — 300 ₽/мес
            </a>
            <a href="https://app.pixinlink.ru/register?plan=pro" class="btn-flat btn-rounded"
               style="background:#00897b;color:#fff;padding:12px 32px;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
              Pro — 2 500 ₽/мес
            </a>
            <a href="https://app.pixinlink.ru/register?plan=business" class="btn-flat btn-rounded"
               style="background:#6a1b9a;color:#fff;padding:12px 32px;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
              Business — 4 500 ₽/мес
            </a>
          <a href="https://pixinlink.ru/pricing/pro/" class="btn-flat btn-rounded"
             style="background:#1976d2;color:#fff;padding:12px 32px;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
            Pro — 1 490 руб/мес
          </a>
          <a href="https://pixinlink.ru/pricing/business/" class="btn-flat btn-rounded"
             style="background:#6a1b9a;color:#fff;padding:12px 32px;font-size:16px;font-weight:600;text-decoration:none;border-radius:8px;">
            Business — 4 990 руб/мес
          </a>
        </div>
        <p class="body-2 text-muted mt-4 mb-0">Все тарифы → <a href="https://pixinlink.ru/pricing/">/pricing</a></p>
      </div>
    </div>
  </div>
</div>
</main>
