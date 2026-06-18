---
title: "WordPress og:image через URL — пошаговая инструкция"
description: "Как настроить автоматические og:image для WordPress через PixInLink URL API. Плагин, шорткод, functions.php. Готовый код для Open Graph и Twitter Cards."
slug: "wordpress-og-image-url"
date: "2026-06-16"
author: "PixInLink"
category: "Вебмастерам"
tags: ["вебмастерам", "wordpress", "og-image", "seo"]
schema_type: "Article"
layout: "article"
cover_image: "https://pixinlink.ru/api/v1/1200x630/wordpress-og-image-url-pixinlink"
---
<main class="container-wrap">

<p>Стандартная проблема WordPress-блогера: написал статью — нет обложки для соцсетей. Без og:image Telegram и VK показывают пустой превью. Без Twitter Card — ссылка выглядит как спам. Решение: PixInLink генерирует og:image автоматически по URL. В этой инструкции — три способа настройки: от плагина до чистого кода в functions.php.</p>
<!-- @block: answer-first -->
**Настройте og:image в WordPress за 5 минут.** Установите официальный плагин PixInLink — и каждая запись автоматически получит уникальную обложку 1200×630. Или добавьте 5 строк в functions.php — без плагина. Или используйте шорткод `[pixinlink]` для ручного управления.
<!-- @block: key-facts -->
## Ключевые факты
- **1200×630 px** — стандартный размер og:image для всех соцсетей (Telegram, VK, Twitter, Facebook).
- **Автоматическая генерация:** og:image создаётся на основе заголовка статьи.
- **Кеш на год:** изображение не перегенерируется при каждом просмотре.
- **Без нагрузки на хостинг:** PixInLink отдаёт картинки со своего CDN.
- **WebP + AVIF:** современные форматы, которые принимают все соцсети.

## Способ 1: Официальный плагин (рекомендуемый)

1. Установите плагин из каталога WordPress: `Плагины → Добавить новый → "PixInLink"`.
2. Активируйте плагин.
3. Перейдите в `Настройки → PixInLink` и введите API-ключ (из личного кабинета app.pixinlink.ru).
4. Готово. Теперь каждая запись автоматически получает `<meta property="og:image">`.

Плагин также добавляет Gutenberg-блок «PixInLink Image» для вставки AI-изображений прямо в контент статьи.

## Способ 2: functions.php (без плагина)

Добавьте этот код в `functions.php` вашей темы:

```php
add_action('wp_head', 'pixinlink_og_image');
function pixinlink_og_image() {
    if (!is_single()) return;
    $title = urlencode(get_the_title());
    $url = "https://pixinlink.ru/1200x630/{$title}";
    echo '<meta property="og:image" content="' . esc_url($url) . '">' . "\n";
    echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
    echo '<meta name="twitter:image" content="' . esc_url($url) . '">' . "\n";
}
```

5 строк — и каждая статья получает уникальную обложку для Telegram, VK и Twitter.

## Способ 3: Шорткод [pixinlink]

Плагин добавляет шорткод. Используйте его в тексте записи:

```
[pixinlink width="800" height="400" prompt="офис-разработчиков"]
```

Или в шаблоне темы:

```php
echo do_shortcode('[pixinlink width="1200" height="630" prompt="' . get_the_title() . '"]');
```

## Проверка og:image

После настройки проверьте результат:
1. Установите расширение [Telegram Instant View](https://t.me/iv) или откройте [VK Share Debugger](https://vk.com/dev/pages.clearCache).
2. Вставьте URL вашей статьи.
3. Убедитесь, что появилась обложка 1200×630.

Либо проверьте через curl:
```bash
curl -s https://ваш-сайт.ru/статья/ | grep og:image
```
<!-- @block: cta -->
## Начните с бесплатных 50 генераций
Установите плагин или скопируйте код в functions.php — первая обложка появится через 30 секунд.
[Зарегистрироваться бесплатно](https://app.pixinlink.ru/register)

</div>
</main>