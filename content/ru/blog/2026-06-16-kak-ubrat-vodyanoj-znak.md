---
title: "Как убрать водяной знак PixInLink: привязка домена за 5 минут"
description: "Пошаговая инструкция: отключение водяного знака на AI-изображениях через привязку домена в личном кабинете. Без кода, без плагинов, без изменения URL. Starter от 490 ₽/мес."
slug: "kak-ubrat-vodyanoj-znak"
date: "2026-06-16"
author: "PixInLink"
category: "Вебмастерам"
tags: ["вебмастерам", "водяной-знак", "домен", "тарифы"]
schema_type: "Article"
layout: "article"
cover_image: "https://pixinlink.ru/api/v1/1200x630/kak-ubrat-vodyanoj-znak-pixinlink"
---
<main class="container-wrap">

<p>50 бесплатных генераций даются с водяным знаком — это честный freemium. Когда вы решаете использовать PixInLink на своём сайте, подключаете тариф Starter (490 ₽/мес), привязываете домен в личном кабинете — и водяной знак исчезает автоматически для всего сайта. Без изменения URL, без правки HTML, без перегенерации старых изображений. 5 минут на настройку, мгновенный результат.</p>

<h2 class="use-text-title2">Ключевые факты</h2>

<div class="row spacing4">
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">1 домен = 1 правило</h6>
    <p class="use-text-paragraph mb-0 small">Привязали домен — все URL на нём отдаются без водяного знака. Правило применяется на уровне CDN.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">Без изменения URL</h6>
    <p class="use-text-paragraph mb-0 small">Те же ссылки, которые работали с водяным знаком, продолжают работать. Менять ничего не нужно.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">Мгновенно</h6>
    <p class="use-text-paragraph mb-0 small">После привязки домена изменения применяются сразу. Без задержки, без очистки кеша, без ожидания.</p>
  </div>
</div>
</div>

<div class="row spacing4" style="margin-top:0">
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">До 3 доменов</h6>
    <p class="use-text-paragraph mb-0 small">Тариф Starter позволяет привязать до 3 доменов. Pro — до 10, Business — до 50.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="border-left:4px solid var(--color-accent)">
    <h6 class="use-text-subtitle mb-1">Referer-проверка</h6>
    <p class="use-text-paragraph mb-0 small">Сервер проверяет HTTP-заголовок Referer. Совпал с привязанным доменом — чистая версия. Нет — водяной знак.</p>
  </div>
</div>
<div class="col-md-4 col-sm-12 pa-2">
  <h6 class="use-text-subtitle mb-1">490 ₽/мес</h6>
    <p class="use-text-paragraph mb-0 small">Starter: 500 изображений без водяного знака. 0.98 ₽ за шт. Против 290 ₽ за стоковое фото.</p>
  </div>
</div>

<h2 class="use-text-title2">Пошаговая инструкция</h2>

<div class="row spacing4">

<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="text-align:center">
    <div style="font-size:32px;font-weight:700;color:var(--color-accent);margin-bottom:8px">1</div>
    <h6 class="use-text-subtitle mb-1">Регистрация</h6>
    <p class="use-text-paragraph mb-0 small">Перейдите на <a href="https://app.pixinlink.ru/register">app.pixinlink.ru/register</a>, создайте аккаунт и подключите тариф Starter — 490 ₽/мес, 500 изображений.</p>
  </div>
</div>

<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="text-align:center">
    <div style="font-size:32px;font-weight:700;color:var(--color-accent);margin-bottom:8px">2</div>
    <h6 class="use-text-subtitle mb-1">Привязка домена</h6>
    <p class="use-text-paragraph mb-0 small">Личный кабинет → Домены → Добавить домен. Введите ваш домен: <code>moysite.ru</code>. Подтвердите.</p>
  </div>
</div>

<div class="col-md-4 col-sm-12 pa-2">
  <div class="card paper pa-3" style="text-align:center">
    <div style="font-size:32px;font-weight:700;color:var(--color-accent);margin-bottom:8px">3</div>
    <h6 class="use-text-subtitle mb-1">Проверка</h6>
    <p class="use-text-paragraph mb-0 small">Откройте любую страницу сайта с PixInLink URL. Водяной знак исчез. Ничего менять не нужно.</p>
  </div>
</div>

</div>

<h2 class="use-text-title2">Как это работает технически</h2>

<p>Браузер запрашивает изображение и отправляет HTTP-заголовок <code>Referer</code> с адресом вашего сайта. Сервер PixInLink проверяет: если домен в Referer совпадает с привязанным — отдаёт чистую версию. Если нет — с водяным знаком.</p>

<p>Из этого следует:</p>
<ul>
  <li><strong>Прямая вставка URL в браузер</strong> (без Referer) — водяной знак будет. Браузер не отправляет Referer при ручном вводе.</li>
  <li><strong>Вставка в img на привязанном сайте</strong> — без водяного знака. Referer отправляется автоматически.</li>
  <li><strong>DevTools / curl без Referer</strong> — с водяным знаком. Нужно явно передать заголовок.</li>
  <li><strong>Поддомены</strong> считаются разными доменами. <code>blog.moysite.ru</code> ≠ <code>moysite.ru</code>.</li>
</ul>

<h2 class="use-text-title2">Тарифы и лимиты</h2>

<table class="highlight striped">
  <thead>
    <tr><th>Тариф</th><th>Генераций/мес</th><th>Доменов</th><th>Водяной знак</th><th>Цена</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Free</strong></td><td>50</td><td>0</td><td>✅ Есть</td><td>0 ₽</td></tr>
    <tr><td><strong>Starter</strong></td><td>500</td><td>до 3</td><td>❌ Нет</td><td>490 ₽/мес</td></tr>
    <tr><td><strong>Pro</strong></td><td>5 000</td><td>до 10</td><td>❌ Нет</td><td>1 990 ₽/мес</td></tr>
    <tr><td><strong>Business</strong></td><td>20 000</td><td>до 50</td><td>❌ Нет</td><td>4 990 ₽/мес</td></tr>
  </tbody>
</table>

<h2 class="use-text-title2">FAQ</h2>

<h3 class="use-text-subtitle">Что будет, если отключить тариф Starter?</h3>
<p>Водяной знак вернётся. Изображения продолжат работать, но с водяным знаком. Кеш CDN не сбрасывается — старые запросы без знака продолжат отдаваться из кеша до его истечения.</p>

<h3 class="use-text-subtitle">Можно ли привязать поддомен?</h3>
<p>Да. <code>blog.moysite.ru</code> и <code>moysite.ru</code> — разные домены. Каждый занимает один слот из лимита вашего тарифа.</p>

<h3 class="use-text-subtitle">Работает ли на localhost?</h3>
<p>Нет. Referer с localhost не проходит проверку. Используйте реальный домен для отключения водяного знака. Для тестирования на localhost — бесплатный тариф с водяным знаком.</p>

<h3 class="use-text-subtitle">Нужно ли подтверждать владение доменом?</h3>
<p>Да. При добавлении домена система попросит подтвердить владение через DNS-запись (TXT) или файл на сервере. Это стандартная процедура, занимает 2–3 минуты.</p>

<h3 class="use-text-subtitle">Что если сайт на нескольких доменах (зеркала)?</h3>
<p>Привяжите все домены, с которых идут запросы. Starter позволяет до 3 доменов — достаточно для основного домена, www-версии и одного зеркала.</p>
<!-- @block: key-facts -->
**Привяжите домен в личном кабинете — и водяной знак исчезнет для всего сайта мгновенно.** Без изменения URL, без правки img src, без перегенерации. Сервер проверяет Referer и отдаёт чистую версию для привязанных доменов.
<!-- @block: cta -->
<h2 class="use-text-title2">Отключите водяной знак за 5 минут</h2>

<p>3 шага: регистрация → привязка домена → готово. Первые 50 генераций — бесплатно.</p>

<a class="btn waves-effect button btn-large primary" style="color:#fff" href="https://app.pixinlink.ru/register">Зарегистрироваться и подключить Starter</a>

</main>
