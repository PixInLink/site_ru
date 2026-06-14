---
title: "Документация PixInLink"
description: "Справочник по URL API, интеграциям, оплате и настройке PixInLink"
slug: "docs"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "WebPage"
---
<main class="container-wrap">

﻿  <!-- HERO: Поисковый баннер (Block 1C) -->
  <section class="search-banner page-section pb-3" style="background-color: #f5f5f5;">
    <div class="container max-md">
      <div class="row search-block align-items-center justify-content-center">
        <div class="col-sm-12">
          <h2 class="use-text-title2 text-center">Документация PixInLink</h2>
          <h3 class="use-text-subtitle2 text-center mb-4">Справочник по URL API, интеграциям, оплате и настройке.</h3>
          <!-- Строка поиска -->
          <div class="search mb-4">
            <div class="input-field" style="background: #fff; border-radius: 8px; padding: 5px 15px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
              <i class="material-icons prefix" style="color: #9e9e9e;">search</i>
              <input id="docs_search" type="text" placeholder="Поиск по документации... например: '429', 'og:image', 'watermark'" style="border: none; border-bottom: none; box-shadow: none; width: calc(100% - 40px); margin-left: 40px; margin-bottom: 0;">
            </div>
          </div>
          <!-- Alert: Новый пользователь -->
          <div class="alert alert-info text-left d-flex align-items-center" style="background-color: #e3f2fd; border-left: 4px solid #2196F3; padding: 16px; border-radius: 4px;">
            <i class="material-icons mr-3" style="color: #2196F3;">rocket_launch</i>
            <div>
              <strong>Новый пользователь?</strong> 
              Первое изображение за 60 секунд &rarr; <a href="/docs/getting-started" style="color: #1976d2; font-weight: bold;">[Начать здесь]</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- СЕТКА КАТЕГОРИЙ (Block 2A - 3 колонки) -->
  <div class="container page-section" id="docs-categories">
    <div class="row">
      <!-- Колонка 1: Начало работы -->
      <div class="col-md-4 pa-4 mb-4">
        <div class="card paper pa-4 h-100">
          <div class="d-flex align-items-center mb-3">
            <div class="icon primary material-icons mr-2" style="font-size: 28px;">menu_book</div>
            <h5 class="headline m-0">Начало работы</h5>
          </div>
          <ul class="body-1" style="list-style: none; padding-left: 0;">
            <li class="mb-3">
              <a href="/docs/getting-started" class="primary-text"><strong>Быстрый старт</strong></a><br>
              <span class="body-2 text-muted">Первое изображение за 60 секунд</span>
            </li>
            <li class="mb-3">
              <a href="/docs/url-api" class="primary-text"><strong>URL API справочник</strong></a><br>
              <span class="body-2 text-muted">Параметры: width, height, prompt...</span>
            </li>
            <li class="mb-3">
              <a href="/docs/examples" class="primary-text"><strong>Примеры кода</strong></a><br>
              <span class="body-2 text-muted">WordPress, Python, JS, cURL</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- Колонка 2: Аккаунт и оплата -->
      <div class="col-md-4 pa-4 mb-4">
        <div class="card paper pa-4 h-100">
          <div class="d-flex align-items-center mb-3">
            <div class="icon primary material-icons mr-2" style="font-size: 28px;">account_circle</div>
            <h5 class="headline m-0">Аккаунт и оплата</h5>
          </div>
          <ul class="body-1" style="list-style: none; padding-left: 0;">
            <li class="mb-3">
              <a href="/docs/billing" class="primary-text"><strong>Оплата и подписка</strong></a><br>
              <span class="body-2 text-muted">Kassa, Visa/СБП, счета, возврат</span>
            </li>
            <li class="mb-3">
              <a href="/docs/quotas-limits" class="primary-text"><strong>Квоты и лимиты</strong></a><br>
              <span class="body-2 text-muted">Rate limit, 429-ошибки, сброс лимитов</span>
            </li>
            <li class="mb-3">
              <a href="/docs/watermark" class="primary-text"><strong>Водяной знак</strong></a><br>
              <span class="body-2 text-muted">Как убрать через watermark=false</span>
            </li>
            <li class="mb-3">
              <a href="/docs/faq" class="primary-text"><strong>FAQ</strong></a><br>
              <span class="body-2 text-muted">30 вопросов: генерация, оплата, WP</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- Колонка 3: Для разработчиков -->
      <div class="col-md-4 pa-4 mb-4">
        <div class="card paper pa-4 h-100">
          <div class="d-flex align-items-center mb-3">
            <div class="icon primary material-icons mr-2" style="font-size: 28px;">code</div>
            <h5 class="headline m-0">Для разработчиков</h5>
          </div>
          <ul class="body-1" style="list-style: none; padding-left: 0;">
            <li class="mb-3">
              <a href="/docs/api-reference" class="primary-text"><strong>API Reference</strong></a><br>
              <span class="body-2 text-muted">OpenAPI: все /api/v1/* эндпоинты</span>
            </li>
            <li class="mb-3">
              <a href="/docs/webhooks" class="primary-text"><strong>Webhooks 🔜</strong></a><br>
              <span class="body-2 text-muted">image.ready, HMAC-подпись</span>
            </li>
            <li class="mb-3">
              <a href="/docs/changelog" class="primary-text"><strong>Changelog</strong></a><br>
              <span class="body-2 text-muted">История версий: v1.0 &rarr; v2.0</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- ЧАСТО ИЩУТ (Теги) -->
  <div class="container page-section pt-0" id="popular-searches">
    <div class="row mb-3">
      <div class="col-12">
        <h4 class="use-text-subtitle">Часто ищут</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="d-flex flex-wrap gap-2">
          <a href="/docs/watermark" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">Как убрать водяной знак</a>
          <a href="/docs/quotas-limits" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">Ошибка 429</a>
          <a href="/docs/examples#wordpress" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">og:image WordPress</a>
          <a href="/docs/billing" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">Как платить</a>
          <a href="/docs/url-api#seed" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">seed параметр</a>
          <a href="/integrations/api/errors" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">Коды ошибок</a>
          <a href="/docs/billing#cancel" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">Отменить подписку</a>
          <a href="/docs/faq#cache" class="btn btn-outlined primary waves-effect mr-2 mb-2" style="border-radius: 20px; text-transform: none;">Первый запрос медленный</a>
        </div>
      </div>
    </div>
  </div>
  <!-- ШПАРГАЛКА: СТРУКТУРА URL (Таблица) -->
  <div class="container page-section" id="url-cheatsheet">
    <div class="row mb-4">
      <div class="col-12">
        <h3 class="use-text-title2 mb-3">Шпаргалка: структура URL</h3>
        <!-- Пример полного URL -->
        <div class="card paper pa-3 mb-4" style="background: #1e1e1e; border-radius: 8px;">
          <code style="color: #ce9178; font-size: 15px; word-break: break-all;">
            https://pixinlink.ru/<span style="color:#569cd6">{width}x{height}</span>/<span style="color:#4ec9b0">{bg}</span>/<span style="color:#4ec9b0">{fg}</span>?prompt=<span style="color:#dcdcaa">{текст}</span>&amp;style=<span style="color:#dcdcaa">{стиль}</span>&amp;seed=<span style="color:#b5cea8">{число}</span>&amp;format=<span style="color:#dcdcaa">{webp|avif|png}</span>&amp;watermark=<span style="color:#569cd6">{true|false}</span>
          </code>
        </div>
      </div>
    </div>
    <div class="card paper pa-4">
      <div class="table-responsive">
        <table class="highlight striped responsive-table">
          <thead>
            <tr>
              <th>Параметр</th>
              <th>Пример</th>
              <th>По умолчанию</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>width &times; height</strong></td>
              <td style="font-family: monospace;">800x400</td>
              <td><span class="badge badge-warning text-dark">обязательный</span></td>
            </tr>
            <tr>
              <td><strong>bg / fg</strong></td>
              <td style="font-family: monospace;">ffffff / 000000</td>
              <td style="font-family: monospace;">ffffff / 000000</td>
            </tr>
            <tr>
              <td><strong>prompt</strong></td>
              <td style="font-family: monospace;">офис-разработчиков</td>
              <td><span class="badge badge-warning text-dark">обязательный</span></td>
            </tr>
            <tr>
              <td><strong>style</strong></td>
              <td style="font-family: monospace;">realistic</td>
              <td style="font-family: monospace;">realistic</td>
            </tr>
            <tr>
              <td><strong>seed</strong></td>
              <td style="font-family: monospace;">42</td>
              <td>случайный</td>
            </tr>
            <tr>
              <td><strong>format</strong></td>
              <td style="font-family: monospace;">webp</td>
              <td style="font-family: monospace;">webp</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="text-right mt-3">
        <a href="/docs/url-api" class="btn-flat primary-text waves-effect">Полный справочник параметров &rarr;</a>
      </div>
    </div>
  </div>
  <!-- НУЖНА ПОМОЩЬ? (Block 2A - Контакты) -->
  <div class="container page-section" id="help-support">
    <div class="row mb-5">
      <div class="col-12 text-center">
        <h3 class="use-text-title2">Нужна помощь?</h3>
        <p class="use-text-subtitle2">Мы всегда на связи, чтобы помочь с интеграцией</p>
      </div>
    </div>
    <div class="row">
      <!-- Email -->
      <div class="col-md-4 pa-4 text-center">
        <div class="feature-list card paper pa-4 h-100">
          <div class="icon primary material-icons mb-3" style="font-size: 48px;">email</div>
          <h5 class="headline">Email поддержка</h5>
          <p class="body-1 mb-3">Ответ в течение 24 часов.</p>
          <a href="mailto:support@pixinlink.ru" class="btn-flat primary-text waves-effect">support@pixinlink.ru</a>
        </div>
      </div>
      <!-- Telegram -->
      <div class="col-md-4 pa-4 text-center">
        <div class="feature-list card paper pa-4 h-100">
          <div class="icon primary material-icons mb-3" style="font-size: 48px;">group</div>
          <h5 class="headline">Комьюнити</h5>
          <p class="body-1 mb-3">Вопросы, советы, обмен опытом.</p>
          <a href="https://t.me/pixinlinkusers" target="_blank" class="btn-flat primary-text waves-effect">t.me/pixinlinkusers</a>
        </div>
      </div>
      <!-- Баги -->
      <div class="col-md-4 pa-4 text-center">
        <div class="feature-list card paper pa-4 h-100">
          <div class="icon primary material-icons mb-3" style="font-size: 48px;">bug_report</div>
          <h5 class="headline">Нашли ошибку?</h5>
          <p class="body-1 mb-3">Опишите проблему с <code>X-Request-ID</code>.</p>
          <a href="/support" class="btn-flat primary-text waves-effect">Написать тикет</a>
        </div>
      </div>
    </div>
  </div>
  <!-- JSON-LD SEO Разметка -->
</main>
