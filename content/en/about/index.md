---
title: "About PixInLink — AI Image Generator by URL"
description: "PixInLink — Russian image generation service via URL API. Kandinsky 3.1, CDN delivery across Russia, WordPress and MODX integration. 152-FZ compliant."
slug: "about"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "AboutPage"
cover_image: "https://pixinlink.ru/images/logo-saas.png"
---
<div class="banner-basic mb-5">
  <div class="banner-wrap">
    <div class="inner">
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-lg-8 col-sm-12 px-md-5 px-0 text-center">
            <div class="text">
              <h4 class="text-h4">О PixInLink</h4>
              <h5 class="text-h5 mt-3">Российский SaaS-сервис генерации изображений по URL для бизнеса</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="container page-section max-md">
  <div class="row">
    <div class="col-12">
      <h3>Кто мы</h3>
      <p>PixInLink — российский сервис генерации изображений по URL. Наша миссия: избавить разработчиков, блогеров и владельцев сайтов от зависимости от стоковых фотографий, дизайнеров и сложного бэкенда для создания визуального контента.</p>
      <p>Мы построили платформу, где изображение — это просто URL. Вы формируете ссылку вида <code>pixinlink.ru/800x400/описание</code>, вставляете её в тег <code>&lt;img src=""&gt;</code>, и сервис автоматически генерирует уникальное AI-изображение, конвертирует в WebP и доставляет через CDN.</p>
      <h3 class="mt-5">Технологический стек</h3>
      <div class="row mt-4">
        <div class="col-md-6 mb-4">
          <div class="card paper pa-4 h-100" style="border-top: 4px solid #2196F3;">
            <h5>Kandinsky 3.1</h5>
            <p>Основная модель генерации. Обучена на русскоязычных наборах данных. Понимает кириллицу нативно — без перевода промптов на английский. Создаёт фотореалистичные и художественные изображения до 8192×8192 px.</p>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card paper pa-4 h-100" style="border-top: 4px solid #9C27B0;">
            <h5>FLUX.1 (резерв)</h5>
            <p>Модель глубокого обучения для генерации изображений. Используется как fallback при недоступности основного генератора. Обеспечивает отказоустойчивость 99.9%.</p>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card paper pa-4 h-100" style="border-top: 4px solid #4CAF50;">
            <h5>CDN на 140 узлах</h5>
            <p>Yandex Cloud CDN с геораспределёнными точками присутствия по всей России и СНГ. WebP-файлы кешируются на 1 год с заголовками immutable. Время отдачи с кеша: менее 100 мс.</p>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="card paper pa-4 h-100" style="border-top: 4px solid #FF9800;">
            <h5>152-ФЗ и безопасность</h5>
            <p>Инфраструктура полностью расположена на территории РФ (Yandex Cloud, Selectel). Все данные обрабатываются в российских ЦОД. Соответствие требованиям Роскомнадзора и законодательству о персональных данных.</p>
          </div>
        </div>
      </div>
      <h3 class="mt-5">Ключевые цифры</h3>
      <div class="row mt-4 text-center">
        <div class="col-sm-3 col-6 mb-4">
          <h4 style="color: #2196F3; font-size: 2.5rem; font-weight: 700;">12</h4>
          <p class="body-2 text-muted">бесплатных изображений в месяц</p>
        </div>
        <div class="col-sm-3 col-6 mb-4">
          <h4 style="color: #2196F3; font-size: 2.5rem; font-weight: 700;">10–30</h4>
          <p class="body-2 text-muted">секунд — время генерации</p>
        </div>
        <div class="col-sm-3 col-6 mb-4">
          <h4 style="color: #2196F3; font-size: 2.5rem; font-weight: 700;">6</h4>
          <p class="body-2 text-muted">стилей генерации</p>
        </div>
        <div class="col-sm-3 col-6 mb-4">
          <h4 style="color: #2196F3; font-size: 2.5rem; font-weight: 700;">1 год</h4>
          <p class="body-2 text-muted">кеширования в CDN</p>
        </div>
      </div>
      <h3 class="mt-5">Интеграции</h3>
      <p>PixInLink интегрируется с основными CMS и платформами:</p>
      <ul>
        <li><strong>WordPress</strong> — официальный плагин, вставка URL в блоки Gutenberg</li>
        <li><strong>MODX</strong> — сниппет для генерации изображений в шаблонах</li>
        <li><strong>Python SDK</strong> — <code>pip install pixinlink</code>, 5 строк до первого изображения</li>
        <li><strong>REST API</strong> — прямое HTTP-взаимодействие, токен-авторизация, bulk-генерация</li>
        <li><strong>Make.com / Zapier</strong> — no-code автоматизация через webhook-интеграцию</li>
      </ul>
      <h3 class="mt-5">Юридическая информация</h3>
      <p>Юридическое лицо: ООО «ПиксИнЛинк». Платформа зарегистрирована в соответствии с законодательством РФ. Все серверы расположены на территории России.</p>
      <p>Подробнее: <a href="https://pixinlink.ru/legal/terms/">Пользовательское соглашение</a> и <a href="https://pixinlink.ru/legal/privacy/">Политика конфиденциальности</a>.</p>
    </div>
  </div>
</div>
(блок: cta)
## Присоединяйтесь к PixInLink
12 изображений бесплатно — без регистрации и кредитной карты. [Начать сейчас](https://app.pixinlink.ru/register)
