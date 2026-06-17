---
title: "Плагин PixInLink для WordPress — AI-изображения в каждом посте автоматически"
description: "PixInLink для WordPress: автоматический featured image и og:image из заголовка поста. 5 строк PHP в functions.php, 10 минут настройки, от 0 ₽."
slug: "integrations/wordpress"
date: "2026-05-21"
author: "PixInLink"
layout: "page"
schema_type: "WebPage"
---
<main class="container-wrap container-pages">

<!-- HERO -->
<div class="container mt-5 pt-5 mb-4" id="wp-header">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="d-flex align-items-center mb-3">
        <a href="/integrations" class="badge" style="background:#e8f5e9;color:#2e7d32;border-radius:4px;padding:5px 10px;">Интеграции</a>
        <span class="ml-2 text-muted" style="font-size:14px;">/</span>
        <span class="ml-2 text-muted" style="font-size:14px;">WordPress</span>
      </div>
      <h1 class="use-text-title2">Плагин PixInLink для WordPress</h1>
      <p class="use-text-subtitle2 text-muted" style="font-size:1.2rem;line-height:1.6;margin-bottom:24px;">
        Уникальный featured image и og:image для каждой публикации без Photoshop, стоков и ручной работы
      </p>
      <!-- Hero-сниппет -->
      <div class="card pa-0 mb-4" style="background:#1e1e1e;border-radius:12px;overflow:hidden;">
        <div class="pa-2 d-flex align-items-center" style="background:#2d2d2d;border-bottom:1px solid #3a3a3a;">
          <span style="color:#9cdcfe;font-size:12px;font-family:monospace;">functions.php</span>
          <span class="ml-auto" style="color:#6a9955;font-size:11px;">// featured image из заголовка поста — 5 строк</span>
        </div>
        <div class="pa-4">
          <pre style="color:#9cdcfe;font-size:13px;line-height:1.8;margin:0;">add_filter(<span style="color:#ce9178;">'post_thumbnail_html'</span>, <span style="color:#c586c0;">function</span>($html, $post_id) {
  <span style="color:#c586c0;">if</span> (empty($html)) {
    $title = sanitize_title(get_the_title($post_id));
    <span style="color:#c586c0;">return</span> <span style="color:#ce9178;">'&lt;img src="https://pixinlink.ru/api/v1/1200x630/'</span> . $title . <span style="color:#ce9178;">'" loading="lazy"&gt;'</span>;
  }
  <span style="color:#c586c0;">return</span> $html;
}, <span style="color:#b5cea8;">10</span>, <span style="color:#b5cea8;">2</span>);</pre>
        </div>
      </div>
      <p class="body-1 text-muted mb-4" style="line-height:1.75;">
        Настройте автоматическую генерацию прямо сейчас с помощью PHP-кода.
        Полноценный плагин с визуальным интерфейсом — в <strong>Q2 2026</strong>.
        Попробуйте: <a href="https://pixinlink.ru/api/v1/1200x630/рецепт-тирамису" target="_blank">pixinlink.ru/api/v1/1200x630/рецепт-тирамису</a>
      </p>
      <div class="d-flex flex-wrap" style="gap:12px;">
        <a href="#wp-howto" class="btn-flat btn-rounded"
           style="background:#2e7d32;color:#fff;padding:10px 24px;font-weight:600;text-decoration:none;">
          Инструкция за 10 минут ↓
        </a>
        <a href="#wp-snippets" class="btn-flat btn-rounded"
           style="background:#e8f5e9;color:#2e7d32;padding:10px 24px;text-decoration:none;">
          Готовые сниппеты ↓
        </a>
        <a href="https://pixinlink.ru/pricing/" class="btn-flat btn-rounded"
           style="background:#f5f5f5;color:#555;padding:10px 24px;text-decoration:none;">
          50 изображений бесплатно →
        </a>
      </div>
    </div>
  </div>
</div>
<!-- TL;DR -->
<div class="container" id="wp-tldr">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <div class="card paper pa-4 mb-5" style="background:#f1f8e9;border-left:4px solid #7cb342;box-shadow:none;">
        <h3 class="headline mb-2" style="font-size:20px;color:#33691e;">TL;DR</h3>
        <p class="body-1 m-0" style="line-height:1.9;">
          PixInLink генерирует <strong>featured image</strong> и <strong>og:image</strong> для постов WordPress автоматически из заголовка.<br>
          Текущее решение: <strong>5–10 строк PHP</strong> в functions.php child theme, 10 минут настройки.<br>
          Плагин с визуальным интерфейсом — <strong>Q2 2026</strong>.<br>
          Поддержка: <strong>Yoast SEO, RankMath, AIOSEO, Gutenberg, Elementor, Divi</strong>.<br>
          <strong>Free: 50 изображений/мес</strong> без ключа. <strong>Starter: 490 ₽/мес</strong> — без водяного знака.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- KEY FACTS -->
<div class="container" id="wp-keyfacts">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Ключевые факты</h2>
      <div class="row mb-5">
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #1976d2;">
            <div style="font-size:28px;font-weight:700;color:#1976d2;">43%</div>
            <p class="body-2 text-muted mb-0">всех сайтов в интернете работают на WordPress <em>[W3Techs, 2026]</em></p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #e53935;">
            <div style="font-size:28px;font-weight:700;color:#e53935;">80%</div>
            <p class="body-2 text-muted mb-0">постов WordPress публикуются без featured image <em>[оценка PixInLink]</em></p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #2e7d32;">
            <div style="font-size:28px;font-weight:700;color:#2e7d32;">+94%</div>
            <p class="body-2 text-muted mb-0">просмотров получают посты с featured image <em>[HubSpot, 2024]</em></p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #fb8c00;">
            <div style="font-size:28px;font-weight:700;color:#fb8c00;">10 мин</div>
            <p class="body-2 text-muted mb-0">интеграция без плагина — 5 строк PHP в functions.php</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #8e24aa;">
            <div style="font-size:28px;font-weight:700;color:#8e24aa;">+56%</div>
            <p class="body-2 text-muted mb-0">трафика из соцсетей у сайтов с правильным og:image <em>[Ahrefs, 2023]</em></p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #00838f;">
            <div style="font-size:28px;font-weight:700;color:#00838f;">0 MB</div>
            <p class="body-2 text-muted mb-0">на хостинге — изображения хранятся на CDN PixInLink, не в медиабиблиотеке</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #3949ab;">
            <div style="font-size:28px;font-weight:700;color:#3949ab;">1 год</div>
            <p class="body-2 text-muted mb-0">CDN-кеш — повторные просмотры не расходуют лимит генераций</p>
          </div>
        </div>
        <div class="col-md-6 col-lg-3 mb-3">
          <div class="card paper pa-4 text-center" style="height:100%;border-top:4px solid #e65100;">
            <div style="font-size:28px;font-weight:700;color:#e65100;">3 SEO</div>
            <p class="body-2 text-muted mb-0">плагина: Yoast SEO, RankMath, AIOSEO — все поддержаны</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- ОПРЕДЕЛЕНИЕ -->
<div class="container" id="wp-definition">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-3" style="font-size:24px;font-weight:700;">Что такое featured image в WordPress</h2>
      <div class="card paper pa-4 mb-5" style="background:#fafafa;border-left:4px solid #9e9e9e;">
        <p class="body-1 m-0" style="line-height:1.85;">
          <strong>Featured image</strong> (миниатюра записи) — главное изображение поста, которое выводится в начале статьи,
          в архивах блога и используется как превью (<code>og:image</code>) при репостах в ВКонтакте, Telegram и других соцсетях.
          Без него пост выглядит незавершённым: снижается кликабельность (CTR), а в лентах соцсетей
          вместо картинки отображается серый плейсхолдер или, хуже, логотип сайта.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- ВВЕДЕНИЕ -->
<div class="container" id="wp-intro">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-3" style="font-size:24px;font-weight:700;">Почему 80% постов без изображений?</h2>
      <p class="body-1 mb-3" style="line-height:1.85;">
        Каждый WordPress-блогер сталкивается с одной и той же проблемой: вы публикуете 20 постов в месяц,
        и каждому нужен featured image. Варианты, доступные сейчас, отнимают время или деньги:
        Unsplash даёт тиражные картинки, Canva — 10–15 минут ручной работы на пост, дизайнер — дорого.
      </p>
      <p class="body-1 mb-4" style="line-height:1.85;">
        PixInLink работает иначе: вы один раз добавляете короткий код в <code>functions.php</code>,
        и все посты — включая 800 архивных — автоматически получают уникальные AI-изображения из заголовка.
        Никаких файлов в медиабиблиотеке, никакой нагрузки на хостинг.
      </p>
    </div>
  </div>
</div>
<!-- FEATURED SNIPPET -->
<div class="container" id="wp-snippet">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-3" style="font-size:24px;font-weight:700;">Как автоматически добавить featured image в WordPress через PixInLink?</h2>
      <div class="card paper pa-4 mb-3" style="background:#f3f8ff;border:1px solid #bbdefb;border-radius:10px;">
        <p class="body-1 mb-3" style="line-height:1.75;">
          Добавьте фильтр в <code>functions.php</code> вашей child theme — featured image будет генерироваться
          автоматически для постов без изображения. Фильтр срабатывает только когда featured image не задан вручную,
          предотвращая перезапись ваших собственных обложек.
        </p>
        <div class="card pa-3 mb-3" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;line-height:1.8;margin:0;"><span style="color:#6a9955;">// Автоматический featured image через PixInLink</span>
add_filter(<span style="color:#ce9178;">'post_thumbnail_html'</span>, <span style="color:#c586c0;">function</span>($html, $post_id) {
  <span style="color:#c586c0;">if</span> (empty($html)) {
    $title = sanitize_title(get_the_title($post_id));
    <span style="color:#c586c0;">return</span> <span style="color:#ce9178;">'&lt;img src="https://pixinlink.ru/api/v1/1200x630/'</span>
        . $title .
        <span style="color:#ce9178;">'" alt="'</span> . get_the_title($post_id) . <span style="color:#ce9178;">'" loading="lazy"&gt;'</span>;
  }
  <span style="color:#c586c0;">return</span> $html;
}, <span style="color:#b5cea8;">10</span>, <span style="color:#b5cea8;">2</span>);</pre>
        </div>
        <p class="body-2 m-0 text-muted">Добавить в: <code>/wp-content/themes/ВАША-ТЕМА-child/functions.php</code></p>
      </div>
      <!-- Проблема → Решение → Результат -->
      <div class="row mb-5">
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #e53935;">
            <div style="font-size:24px;margin-bottom:8px;">🔴</div>
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;color:#c62828;">Проблема</h4>
            <p class="body-2 m-0" style="line-height:1.75;">50 постов, 40 из них без featured image. В соцсетях — серый плейсхолдер или логотип сайта. Ретроспективно решить: 40 × 15 мин в Canva = <strong>10 часов ручной работы</strong>.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #fb8c00;">
            <div style="font-size:24px;margin-bottom:8px;">✅</div>
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;color:#e65100;">Решение</h4>
            <p class="body-2 m-0" style="line-height:1.75;">10 строк PHP в functions.php: фильтр featured image + фильтр og:image для Yoast/RankMath. <strong>Все 50 постов</strong> получают уникальные изображения автоматически.</p>
          </div>
        </div>
        <div class="col-md-4 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #2e7d32;">
            <div style="font-size:24px;margin-bottom:8px;">📊</div>
            <h4 class="headline mb-2" style="font-size:16px;font-weight:700;color:#1b5e20;">Результат</h4>
            <ul class="body-2 m-0 pl-3" style="line-height:1.9;">
              <li>10 мин настройки вместо 10 ч работы</li>
              <li>Красивые превью в Telegram и ВКонтакте</li>
              <li>0 MB на хостинге — всё на CDN</li>
              <li>От 0 ₽ (Free) до 490 ₽/мес (Starter)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- СОВМЕСТИМОСТЬ -->
<div class="container" id="wp-compatibility">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Совместимость с WordPress-экосистемой</h2>
      <!-- Таблица 1: Совместимость -->
      <h3 class="headline mb-3" style="font-size:18px;font-weight:700;">Поддерживаемые компоненты</h3>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Компонент</th><th>Версия</th><th>Статус</th><th>Примечание</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td><strong>WordPress</strong></td><td>5.0+</td><td style="color:#2e7d32;">✅</td><td>Gutenberg обязателен для блока</td></tr>
              <tr><td><strong>WordPress</strong></td><td>6.5</td><td style="color:#2e7d32;">✅</td><td>Протестировано</td></tr>
              <tr><td><strong>PHP</strong></td><td>7.4+</td><td style="color:#2e7d32;">✅</td><td></td></tr>
              <tr><td>Elementor</td><td>3.x</td><td style="color:#2e7d32;">✅</td><td>External Image URL</td></tr>
              <tr><td>Divi</td><td>4.x</td><td style="color:#2e7d32;">✅</td><td>Image Module → URL</td></tr>
              <tr><td>Astra</td><td>любая</td><td style="color:#2e7d32;">✅</td><td>featured image через код</td></tr>
              <tr><td>GeneratePress</td><td>любая</td><td style="color:#2e7d32;">✅</td><td></td></tr>
              <tr><td><strong>Yoast SEO</strong></td><td>21+</td><td style="color:#2e7d32;">✅</td><td>фильтр <code>wpseo_opengraph_image</code></td></tr>
              <tr><td><strong>RankMath</strong></td><td>1.0+</td><td style="color:#2e7d32;">✅</td><td>фильтр <code>rank_math/opengraph/...</code></td></tr>
              <tr><td><strong>AIOSEO</strong></td><td>4.x</td><td style="color:#2e7d32;">✅</td><td>фильтр <code>aioseo_opengraph_image</code></td></tr>
              <tr><td>WooCommerce</td><td>8.x</td><td style="color:#e65100;">⚠️</td><td>В разработке — плагин Q3 2026</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Таблица 2: Методы интеграции -->
      <h3 class="headline mb-3" style="font-size:18px;font-weight:700;">Методы интеграции — выберите свой</h3>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Метод</th><th>Сложность</th><th>Время</th><th>Плагин?</th><th>Для кого</th></tr>
            </thead>
            <tbody class="body-2">
              <tr>
                <td><strong>functions.php код</strong></td>
                <td>Средняя</td><td>10 мин</td><td>❌</td><td>Разработчики</td>
              </tr>
              <tr>
                <td>Gutenberg HTML-блок</td>
                <td>Низкая</td><td>2 мин/пост</td><td>❌</td><td>Блогеры</td>
              </tr>
              <tr>
                <td>Elementor External URL</td>
                <td>Низкая</td><td>1 мин/блок</td><td>❌</td><td>Дизайнеры</td>
              </tr>
              <tr>
                <td>Child theme</td>
                <td>Средняя</td><td>15 мин</td><td>❌</td><td>Разработчики</td>
              </tr>
              <tr style="background:#e8f5e9;">
                <td><strong>PixInLink Plugin (Q2 2026)</strong></td>
                <td style="color:#2e7d32;font-weight:700;">Минимальная</td>
                <td><strong>2 мин total</strong></td>
                <td>✅</td>
                <td><strong>Все</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Таблица 3: Параметры URL -->
      <h3 class="headline mb-3" style="font-size:18px;font-weight:700;">Рекомендуемые параметры URL для WordPress</h3>
      <div class="card paper pa-0 mb-5 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Параметр</th><th>Рекомендация для WP</th><th>Пример</th></tr>
            </thead>
            <tbody class="body-2">
              <tr><td>Размер featured</td><td><strong>1200×630</strong></td><td><code>/1200x630/промпт</code></td></tr>
              <tr><td>Размер inline</td><td><strong>800×400</strong></td><td><code>/800x400/промпт</code></td></tr>
              <tr><td>Стиль</td><td>realistic (по умолчанию)</td><td><code>?style=realistic</code></td></tr>
              <tr><td>Seed</td><td><strong>ID поста</strong> (стабильность)</td><td><code>?seed=&lt;?php echo get_the_ID(); ?&gt;</code></td></tr>
              <tr><td>Формат</td><td>webp</td><td><code>?format=webp</code></td></tr>
              <tr><td>Водяной знак</td><td>нет на Starter+</td><td><a href="https://pixinlink.ru/pricing/">→ Тарифы</a></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- СРАВНЕНИЕ С АНАЛОГАМИ -->
<div class="container" id="wp-compare">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">PixInLink vs другие способы добавить изображения</h2>
      <div class="card paper pa-0 mb-4 overflow-hidden">
        <div class="table-responsive">
          <table class="highlight striped m-0">
            <thead style="background:#f5f5f5;">
              <tr><th>Метод</th><th>Автоматизация</th><th>Уникальность</th><th>Стоимость</th><th>CDN</th><th>Нагрузка на хостинг</th></tr>
            </thead>
            <tbody class="body-2">
              <tr style="background:#e8f5e9;">
                <td><strong>PixInLink (код)</strong></td>
                <td style="color:#2e7d32;font-weight:700;">Авто</td>
                <td style="color:#2e7d32;">Уникально</td>
                <td>От 0 ₽</td>
                <td>✅ 140 POP</td>
                <td style="color:#2e7d32;font-weight:700;">Нет</td>
              </tr>
              <tr style="background:#e8f5e9;">
                <td><strong>PixInLink Plugin (Q2)</strong></td>
                <td style="color:#2e7d32;font-weight:700;">Авто</td>
                <td style="color:#2e7d32;">Уникально</td>
                <td>От 0 ₽</td>
                <td>✅ 140 POP</td>
                <td style="color:#2e7d32;font-weight:700;">Нет</td>
              </tr>
              <tr>
                <td>Ручная загрузка (Unsplash)</td>
                <td>Ручная</td>
                <td style="color:#e53935;">Не уникально</td>
                <td>0 ₽</td>
                <td>❌</td>
                <td style="color:#e53935;">Да</td>
              </tr>
              <tr>
                <td>Jetpack AI Image</td>
                <td>Полуавтомат</td>
                <td>Уникально</td>
                <td>Платно</td>
                <td>✅</td>
                <td>Нет</td>
              </tr>
              <tr>
                <td>DALL-E плагин для WP</td>
                <td>Полуавтомат</td>
                <td>Уникально</td>
                <td>Платно (API)</td>
                <td>❌</td>
                <td style="color:#e53935;">Да</td>
              </tr>
              <tr>
                <td>Ручная Canva + upload</td>
                <td style="color:#e53935;">Ручная</td>
                <td>Уникально</td>
                <td>Подписка</td>
                <td>❌</td>
                <td style="color:#e53935;">Да</td>
              </tr>
              <tr>
                <td>Стоковые плагины</td>
                <td>Полуавтомат</td>
                <td style="color:#e53935;">Не уникально</td>
                <td>0 ₽</td>
                <td>❌</td>
                <td style="color:#e53935;">Да</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="card paper pa-3 mb-5" style="background:#e8f5e9;border-left:4px solid #43a047;">
        <p class="body-1 m-0" style="line-height:1.75;">
          <strong>Ключевое преимущество:</strong> PixInLink работает напрямую с URL — изображения не хранятся
          в медиабиблиотеке WordPress, полностью снимая нагрузку с хостинга.
          100 постов × 500 KB = <strong>50 MB</strong> на сервере с обычным методом.
          С PixInLink: <strong>0 MB</strong>.
        </p>
      </div>
    </div>
  </div>
</div>
<!-- СТАТИСТИКА -->
<div class="container" id="wp-stats">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Данные и исследования</h2>
      <div class="row mb-5">
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #1976d2;">
            <p class="body-1 mb-1" style="font-size:22px;font-weight:700;color:#1976d2;">43%</p>
            <p class="body-1 mb-1" style="font-weight:600;">всех сайтов работают на WordPress</p>
            <p class="body-2 m-0 text-muted">W3Techs, Web Technology Surveys, 2026</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #2e7d32;">
            <p class="body-1 mb-1" style="font-size:22px;font-weight:700;color:#2e7d32;">+94%</p>
            <p class="body-1 mb-1" style="font-weight:600;">просмотров у постов с featured image</p>
            <p class="body-2 m-0 text-muted">HubSpot, Visual Content Statistics, 2024</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #fb8c00;">
            <p class="body-1 mb-1" style="font-size:22px;font-weight:700;color:#e65100;">60–70%</p>
            <p class="body-1 mb-1" style="font-weight:600;">дискового пространства хостинга занимают медиафайлы WP</p>
            <p class="body-2 m-0 text-muted">WP Engine, WordPress Hosting Study, 2024</p>
          </div>
        </div>
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-left:4px solid #8e24aa;">
            <p class="body-1 mb-1" style="font-size:22px;font-weight:700;color:#8e24aa;">+56%</p>
            <p class="body-1 mb-1" style="font-weight:600;">трафика из соцсетей при правильном og:image</p>
            <p class="body-2 m-0 text-muted">Ahrefs, Content Marketing Study, 2023</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- СХЕМЫ АРХИТЕКТУРЫ -->
<div class="container" id="wp-architecture">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Как это работает: архитектура</h2>
      <div class="row mb-5">
        <!-- Без плагина -->
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #3949ab;">
            <h4 class="headline mb-3" style="font-size:15px;font-weight:700;">🔧 Сейчас (без плагина)</h4>
            <div style="font-size:13px;line-height:2.2;">
              <div class="pa-2 mb-1" style="background:#e8eaf6;border-radius:6px;">📝 Редактор публикует пост</div>
              <div class="text-center text-muted" style="font-size:10px;">↓ при отображении страницы</div>
              <div class="pa-2 mb-1" style="background:#e8eaf6;border-radius:6px;">⚙️ <code>functions.php</code> срабатывает</div>
              <div class="text-center text-muted" style="font-size:10px;">↓</div>
              <div class="pa-2 mb-1" style="background:#e8eaf6;border-radius:6px;">🔤 <code>sanitize_title(get_the_title())</code></div>
              <div class="text-center text-muted" style="font-size:10px;">↓</div>
              <div class="pa-2 mb-1" style="background:#e8eaf6;border-radius:6px;">🔗 URL PixInLink → <code>img src</code></div>
              <div class="text-center text-muted" style="font-size:10px;">↓</div>
              <div class="pa-2" style="background:#c5cae9;border-radius:6px;font-weight:700;">🌍 CDN → готовое изображение</div>
            </div>
          </div>
        </div>
        <!-- С плагином -->
        <div class="col-md-6 mb-3">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #2e7d32;">
            <h4 class="headline mb-3" style="font-size:15px;font-weight:700;">✨ Q2 2026 (с плагином)</h4>
            <div style="font-size:13px;line-height:2.2;">
              <div class="pa-2 mb-1" style="background:#e8f5e9;border-radius:6px;">📝 Редактор нажимает «Опубликовать»</div>
              <div class="text-center text-muted" style="font-size:10px;">↓ мгновенно</div>
              <div class="pa-2 mb-1" style="background:#e8f5e9;border-radius:6px;">🔌 Плагин: URL из заголовка</div>
              <div class="text-center text-muted" style="font-size:10px;">↓</div>
              <div class="pa-2 mb-1" style="background:#e8f5e9;border-radius:6px;">💾 Сохранение в post meta</div>
              <div class="text-center text-muted" style="font-size:10px;">↓</div>
              <div class="pa-2 mb-1" style="background:#e8f5e9;border-radius:6px;">🔍 Авто-заполнение Yoast/RankMath</div>
              <div class="text-center text-muted" style="font-size:10px;">↓</div>
              <div class="pa-2" style="background:#a5d6a7;border-radius:6px;font-weight:700;">👁 Gutenberg: превью в редакторе</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- 8-ШАГОВЫЙ HOWTO -->
<div class="container" id="wp-howto">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-4" style="font-size:24px;font-weight:700;">Как интегрировать PixInLink в WordPress — 8 шагов</h2>
      <!-- Шаг 1 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #3949ab;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#3949ab;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">1</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Создайте child theme</h3>
            <span class="body-2 text-muted">Зачем: изменения в functions.php родительской темы сотрутся при обновлении</span>
          </div>
        </div>
        <p class="body-2 mb-0">Создайте папку <code>/wp-content/themes/ВАША-ТЕМА-child/</code> с двумя файлами: <code>style.css</code> и <code>functions.php</code>. Это безопасное место для всего кода PixInLink.</p>
      </div>
      <!-- Шаг 2 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #1976d2;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#1976d2;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">2</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Получите API-ключ (для Starter+)</h3>
            <span class="body-2 text-muted">Free-тариф: ключ не нужен</span>
          </div>
        </div>
        <p class="body-2 mb-0">Зарегистрируйтесь на pixinlink.ru → личный кабинет → API Keys → создать ключ. Ключ имеет вид <code>pixl_xxxxxxxxxxxx</code>. На Free-тарифе ключ не нужен — работает по IP, 50 изображений/мес.</p>
      </div>
      <!-- Шаг 3 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #2e7d32;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#2e7d32;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">3</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Добавьте автоматический featured image</h3>
            <span class="body-2 text-muted">Результат: все посты без featured image получают изображение</span>
          </div>
        </div>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;line-height:1.8;margin:0;"><span style="color:#6a9955;">/**
 * PixInLink: автоматический featured image
 * Срабатывает только для постов БЕЗ featured image
 */</span>
add_filter(<span style="color:#ce9178;">'post_thumbnail_html'</span>, <span style="color:#c586c0;">function</span>($html, $post_id) {
  <span style="color:#c586c0;">if</span> (!empty($html)) <span style="color:#c586c0;">return</span> $html;
  $title = sanitize_title(get_the_title($post_id));
  $api_key = <span style="color:#ce9178;">'ВАШ_API_КЛЮЧ'</span>; <span style="color:#6a9955;">// или '' для Free</span>
  $url = <span style="color:#ce9178;">"https://pixinlink.ru/api/v1/1200x630/{$title}"</span>;
  <span style="color:#c586c0;">if</span> ($api_key) $url .= <span style="color:#ce9178;">"?key={$api_key}"</span>;
  <span style="color:#c586c0;">return</span> sprintf(
    <span style="color:#ce9178;">'&lt;img src="%s" alt="%s" loading="lazy" width="1200" height="630"&gt;'</span>,
    esc_url($url),
    esc_attr(get_the_title($post_id))
  );
}, <span style="color:#b5cea8;">10</span>, <span style="color:#b5cea8;">2</span>);</pre>
        </div>
      </div>
      <!-- Шаг 4 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #fb8c00;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#fb8c00;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">4</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Настройте og:image для SEO-плагина</h3>
            <span class="body-2 text-muted">Выберите ваш SEO-плагин ↓</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 mb-3">
            <h5 class="body-1 mb-1" style="font-weight:700;">Yoast SEO</h5>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">add_filter(<span style="color:#ce9178;">'wpseo_opengraph_image'</span>, <span style="color:#c586c0;">function</span>($img) {
  <span style="color:#c586c0;">if</span> (empty($img)) {
    $title = sanitize_title(get_the_title());
    <span style="color:#c586c0;">return</span> <span style="color:#ce9178;">"https://pixinlink.ru/api/v1/1200x630/{$title}"</span>;
  }
  <span style="color:#c586c0;">return</span> $img;
});</pre>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <h5 class="body-1 mb-1" style="font-weight:700;">RankMath</h5>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">add_filter(<span style="color:#ce9178;">'rank_math/opengraph/facebook/image'</span>, <span style="color:#c586c0;">function</span>($img) {
  <span style="color:#c586c0;">if</span> (empty($img)) {
    $title = sanitize_title(get_the_title());
    <span style="color:#c586c0;">return</span> <span style="color:#ce9178;">"https://pixinlink.ru/api/v1/1200x630/{$title}"</span>;
  }
  <span style="color:#c586c0;">return</span> $img;
});</pre>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <h5 class="body-1 mb-1" style="font-weight:700;">AIOSEO</h5>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">add_filter(<span style="color:#ce9178;">'aioseo_opengraph_image'</span>, <span style="color:#c586c0;">function</span>($img) {
  <span style="color:#c586c0;">if</span> (empty($img)) {
    $title = sanitize_title(get_the_title());
    <span style="color:#c586c0;">return</span> <span style="color:#ce9178;">"https://pixinlink.ru/api/v1/1200x630/{$title}"</span>;
  }
  <span style="color:#c586c0;">return</span> $img;
});</pre>
            </div>
          </div>
        </div>
      </div>
      <!-- Шаг 5 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #8e24aa;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#8e24aa;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">5</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Добавьте seed для стабильности (рекомендуется)</h3>
            <span class="body-2 text-muted">Гарантирует: пост 42 всегда показывает одно изображение</span>
          </div>
        </div>
        <div class="card pa-3" style="background:#1e1e1e;border-radius:8px;">
          <pre style="color:#9cdcfe;font-size:13px;line-height:1.8;margin:0;"><span style="color:#6a9955;">// В URL добавить seed = ID поста</span>
$url = <span style="color:#ce9178;">"https://pixinlink.ru/api/v1/1200x630/{$title}?seed="</span> . $post_id;</pre>
        </div>
        <p class="body-2 mt-2 mb-0 text-muted">Без seed изображение может незначительно меняться при смене CDN-кеша. С seed — стабильно на весь срок жизни поста.</p>
      </div>
      <!-- Шаг 6 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #00838f;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#00838f;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">6</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Вставьте изображение в тело поста (опционально)</h3>
            <span class="body-2 text-muted">Gutenberg, Elementor, Divi</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 mb-2">
            <h5 class="body-2 mb-1" style="font-weight:700;">Gutenberg HTML-блок:</h5>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">&lt;figure class=<span style="color:#ce9178;">"wp-block-image size-large"</span>&gt;
  &lt;img
    src=<span style="color:#ce9178;">"https://pixinlink.ru/api/v1/800x400/ПРОМПТ"</span>
    alt=<span style="color:#ce9178;">"Описание"</span>
    loading=<span style="color:#ce9178;">"lazy"</span>
    width=<span style="color:#ce9178;">"800"</span> height=<span style="color:#ce9178;">"400"</span>
  &gt;
  &lt;figcaption&gt;Иллюстрация: PixInLink AI&lt;/figcaption&gt;
&lt;/figure&gt;</pre>
            </div>
          </div>
          <div class="col-md-6 mb-2">
            <h5 class="body-2 mb-1" style="font-weight:700;">Elementor:</h5>
            <p class="body-2" style="line-height:1.75;">Image Widget → <strong>Image URL</strong> → вставить URL PixInLink. Поддерживает External Image URL из коробки.</p>
            <h5 class="body-2 mb-1" style="font-weight:700;">Divi:</h5>
            <p class="body-2 mb-0" style="line-height:1.75;">Image Module → поле URL → вставить ссылку PixInLink.</p>
          </div>
        </div>
      </div>
      <!-- Шаг 7 -->
      <div class="card paper pa-4 mb-3" style="border-left:4px solid #e53935;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#e53935;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">7</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Проверьте результат</h3>
            <span class="body-2 text-muted">Тестирование og:image в соцсетях</span>
          </div>
        </div>
        <ul class="body-2 mb-0" style="line-height:1.9;padding-left:20px;">
          <li>Откройте любой пост → должен появиться featured image</li>
          <li><strong>Facebook:</strong> <a href="https://developers.facebook.com/tools/debug/" target="_blank">developers.facebook.com/tools/debug/</a></li>
          <li><strong>ВКонтакте:</strong> <a href="https://vk.com/dev/pages.clearCache" target="_blank">vk.com/dev/pages.clearCache</a></li>
          <li><strong>Telegram:</strong> написать боту <a href="https://t.me/WebpageBot" target="_blank">@WebpageBot</a></li>
        </ul>
      </div>
      <!-- Шаг 8 -->
      <div class="card paper pa-4 mb-5" style="border-left:4px solid #1976d2;">
        <div class="d-flex align-items-center mb-2">
          <div style="background:#1976d2;color:#fff;font-weight:700;width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:12px;flex-shrink:0;font-size:14px;">8</div>
          <div>
            <h3 class="headline mb-0" style="font-size:16px;font-weight:700;">Следите за лимитами</h3>
            <span class="body-2 text-muted">CDN-кеш 1 год: повторные просмотры не расходуют лимит</span>
          </div>
        </div>
        <p class="body-2 mb-0">Зайдите в <a href="/dashboard">личный кабинет PixInLink</a> → дашборд → статистика генераций. CDN-кеш действует 1 год: повторные просмотры поста лимит не расходуют. Приближаетесь к лимиту — апгрейд в один клик прямо из дашборда.</p>
      </div>
    </div>
  </div>
</div>
<!-- 8 СНИППЕТОВ -->
<div class="container" id="wp-snippets">
  <div class="row">
    <div class="col-12 col-md-10 offset-md-1">
      <h2 class="display-2 mb-2" style="font-size:24px;font-weight:700;">Готовые сниппеты — скопируйте и вставьте</h2>
      <p class="body-1 text-muted mb-4">Всегда используйте <strong>child theme</strong>. Перед работой проверьте параметры в <a href="/features/url-api">URL API документации</a>.</p>
      <div class="row">
        <!-- Сниппет 1 -->
        <div class="col-md-6 mb-4">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #3949ab;">
            <div class="d-flex align-items-center mb-2">
              <div class="badge mr-2" style="background:#e8eaf6;color:#3949ab;font-family:monospace;font-size:12px;border-radius:4px;padding:3px 8px;">#1</div>
              <h4 class="body-1 mb-0" style="font-weight:700;">Минимальный — Free</h4>
            </div>
            <p class="body-2 mb-2 text-muted">Для базовой настройки без подписки</p>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">add_filter(<span style="color:#ce9178;">'post_thumbnail_html'</span>, <span style="color:#c586c0;">function</span>($html, $post_id) {
  <span style="color:#c586c0;">if</span> (empty($html)) {
    $t = sanitize_title(get_the_title($post_id));
    <span style="color:#c586c0;">return</span> <span style="color:#ce9178;">'&lt;img src="https://pixinlink.ru/api/v1/1200x630/'</span>.$t.<span style="color:#ce9178;">'" loading="lazy"&gt;'</span>;
  }
  <span style="color:#c586c0;">return</span> $html;
}, <span style="color:#b5cea8;">10</span>, <span style="color:#b5cea8;">2</span>);</pre>
            </div>
          </div>
        </div>
        <!-- Сниппет 2 -->
        <div class="col-md-6 mb-4">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #2e7d32;">
            <div class="d-flex align-items-center mb-2">
              <div class="badge mr-2" style="background:#e8f5e9;color:#2e7d32;font-family:monospace;font-size:12px;border-radius:4px;padding:3px 8px;">#2</div>
              <h4 class="body-1 mb-0" style="font-weight:700;">С API-ключом — Starter+</h4>
            </div>
            <p class="body-2 mb-2 text-muted">Без водяного знака</p>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">add_filter(<span style="color:#ce9178;">'post_thumbnail_html'</span>, <span style="color:#c586c0;">function</span>($html, $post_id) {
  <span style="color:#c586c0;">if</span> (empty($html)) {
    $t = sanitize_title(get_the_title($post_id));
    <span style="color:#c586c0;">return</span> <span style="color:#ce9178;">'&lt;img src="https://pixinlink.ru/api/v1/1200x630/'</span>
        .$t.<span style="color:#ce9178;">'?key=pixl_ВАШ_КЛЮЧ" loading="lazy"&gt;'</span>;
  }
  <span style="color:#c586c0;">return</span> $html;
}, <span style="color:#b5cea8;">10</span>, <span style="color:#b5cea8;">2</span>);</pre>
            </div>
          </div>
        </div>
        <!-- Сниппет 3 -->
        <div class="col-md-6 mb-4">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #8e24aa;">
            <div class="d-flex align-items-center mb-2">
              <div class="badge mr-2" style="background:#f3e5f5;color:#6a1b9a;font-family:monospace;font-size:12px;border-radius:4px;padding:3px 8px;">#3</div>
              <h4 class="body-1 mb-0" style="font-weight:700;">С seed — стабильное изображение</h4>
            </div>
            <p class="body-2 mb-2 text-muted">Картинка поста не меняется никогда</p>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">add_filter(<span style="color:#ce9178;">'post_thumbnail_html'</span>, <span style="color:#c586c0;">function</span>($html, $post_id) {
  <span style="color:#c586c0;">if</span> (empty($html)) {
    $t = sanitize_title(get_the_title($post_id));
    <span style="color:#c586c0;">return</span> <span style="color:#ce9178;">'&lt;img src="https://pixinlink.ru/api/v1/1200x630/'</span>
        .$t.<span style="color:#ce9178;">'?seed='</span>.$post_id.<span style="color:#ce9178;">'" loading="lazy"&gt;'</span>;
  }
  <span style="color:#c586c0;">return</span> $html;
}, <span style="color:#b5cea8;">10</span>, <span style="color:#b5cea8;">2</span>);</pre>
            </div>
          </div>
        </div>
        <!-- Сниппет 4 -->
        <div class="col-md-6 mb-4">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #fb8c00;">
            <div class="d-flex align-items-center mb-2">
              <div class="badge mr-2" style="background:#fff8e1;color:#e65100;font-family:monospace;font-size:12px;border-radius:4px;padding:3px 8px;">#4</div>
              <h4 class="body-1 mb-0" style="font-weight:700;">Разные стили по категории</h4>
            </div>
            <p class="body-2 mb-2 text-muted">news → photo, всё остальное → realistic</p>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">add_filter(<span style="color:#ce9178;">'post_thumbnail_html'</span>, <span style="color:#c586c0;">function</span>($html, $post_id) {
  <span style="color:#c586c0;">if</span> (empty($html)) {
    $t = sanitize_title(get_the_title($post_id));
    $style = has_category(<span style="color:#ce9178;">'news'</span>, $post_id) ? <span style="color:#ce9178;">'photo'</span> : <span style="color:#ce9178;">'realistic'</span>;
    <span style="color:#c586c0;">return</span> <span style="color:#ce9178;">'&lt;img src="https://pixinlink.ru/api/v1/1200x630/'</span>
        .$t.<span style="color:#ce9178;">'?style='</span>.$style.<span style="color:#ce9178;">'" loading="lazy"&gt;'</span>;
  }
  <span style="color:#c586c0;">return</span> $html;
}, <span style="color:#b5cea8;">10</span>, <span style="color:#b5cea8;">2</span>);</pre>
            </div>
          </div>
        </div>
        <!-- Сниппет 5 -->
        <div class="col-md-6 mb-4">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #00838f;">
            <div class="d-flex align-items-center mb-2">
              <div class="badge mr-2" style="background:#e0f7fa;color:#00695c;font-family:monospace;font-size:12px;border-radius:4px;padding:3px 8px;">#5</div>
              <h4 class="body-1 mb-0" style="font-weight:700;">Yoast SEO — og:image</h4>
            </div>
            <p class="body-2 mb-2 text-muted">Автозаполнение og:image для Yoast</p>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">add_filter(<span style="color:#ce9178;">'wpseo_opengraph_image'</span>, <span style="color:#c586c0;">function</span>($img) {
  <span style="color:#c586c0;">if</span> (empty($img)) {
    $t = sanitize_title(get_the_title());
    <span style="color:#c586c0;">return</span> <span style="color:#ce9178;">"https://pixinlink.ru/api/v1/1200x630/{$t}"</span>;
  }
  <span style="color:#c586c0;">return</span> $img;
});</pre>
            </div>
          </div>
        </div>
        <!-- Сниппет 6 -->
        <div class="col-md-6 mb-4">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #e53935;">
            <div class="d-flex align-items-center mb-2">
              <div class="badge mr-2" style="background:#ffebee;color:#c62828;font-family:monospace;font-size:12px;border-radius:4px;padding:3px 8px;">#6</div>
              <h4 class="body-1 mb-0" style="font-weight:700;">RankMath — og:image</h4>
            </div>
            <p class="body-2 mb-2 text-muted">Автозаполнение og:image для RankMath</p>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">add_filter(<span style="color:#ce9178;">'rank_math/opengraph/facebook/image'</span>, <span style="color:#c586c0;">function</span>($img) {
  <span style="color:#c586c0;">if</span> (empty($img)) {
    $t = sanitize_title(get_the_title());
    <span style="color:#c586c0;">return</span> <span style="color:#ce9178;">"https://pixinlink.ru/api/v1/1200x630/{$t}"</span>;
  }
  <span style="color:#c586c0;">return</span> $img;
});</pre>
            </div>
          </div>
        </div>
        <!-- Сниппет 7 -->
        <div class="col-md-6 mb-4">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #1976d2;">
            <div class="d-flex align-items-center mb-2">
              <div class="badge mr-2" style="background:#e3f2fd;color:#1565c0;font-family:monospace;font-size:12px;border-radius:4px;padding:3px 8px;">#7</div>
              <h4 class="body-1 mb-0" style="font-weight:700;">Gutenberg HTML-блок</h4>
            </div>
            <p class="body-2 mb-2 text-muted">Вставка изображения в тело поста</p>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">&lt;figure class=<span style="color:#ce9178;">"wp-block-image size-large"</span>&gt;
  &lt;img
    src=<span style="color:#ce9178;">"https://pixinlink.ru/api/v1/800x400/ПРОМПТ"</span>
    alt=<span style="color:#ce9178;">"Описание"</span>
    loading=<span style="color:#ce9178;">"lazy"</span>
    width=<span style="color:#b5cea8;">"800"</span> height=<span style="color:#b5cea8;">"400"</span>
  &gt;
&lt;/figure&gt;</pre>
            </div>
          </div>
        </div>
        <!-- Сниппет 8 -->
        <div class="col-md-6 mb-4">
          <div class="card paper pa-4" style="height:100%;border-top:4px solid #6a1b9a;">
            <div class="d-flex align-items-center mb-2">
              <div class="badge mr-2" style="background:#ede7f6;color:#4527a0;font-family:monospace;font-size:12px;border-radius:4px;padding:3px 8px;">#8</div>
              <h4 class="body-1 mb-0" style="font-weight:700;">Только для категории food</h4>
            </div>
            <p class="body-2 mb-2 text-muted">Выборочная генерация по категории</p>
            <div class="card pa-2" style="background:#1e1e1e;border-radius:6px;">
              <pre style="color:#9cdcfe;font-size:12px;margin:0;line-height:1.7;">add_filter(<span style="color:#ce9178;">'post_thumbnail_html'</span>, <span style="color:#c586c0;">function</span>($html, $post_id) {
  <span style="color:#c586c0;">if</span> (empty($html) && has_category(<span style="color:#ce9178;">'food'</span>, $post_id)) {
    $t = sanitize_title(get_the_title($post_id));
    <span style="color:#c586c0;">return</span> <span style="color:#ce9178;">'&lt;img src="https://pixinlink.ru/api/v1/1200x630/'</span>.$t.<span style="color:#ce9178;">'" loading="lazy"&gt;'</span>;
  }
  <span style="color:#c586c0;">return</span> $html;
}, <span style="color:#b5cea8;">10</span>, <span style="color:#b5cea8;">2</span>);</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</main>
