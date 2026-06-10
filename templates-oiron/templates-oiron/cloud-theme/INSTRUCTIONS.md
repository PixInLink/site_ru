# Oiron Cloud Pro — Инструкция по развёртыванию на GitHub CMS

> **Время установки:** ~10 минут  
> **Сложность:** базовая (копирование файлов + 1 строка в конфиге)  
> **Для кого:** разработчик с уже установленной GitHub CMS

---

## 1. Что это за шаблон

**Oiron Cloud Pro** — адаптация профессионального SaaS-шаблона с ThemeForest (Oiron — Cloud Theme, v1.6.2) для GitHub CMS.

| Характеристика | Значение |
|---|---|
| Источник | ThemeForest Oiron — Cloud Theme |
| Палитра | Небесно-синяя: `#03A9F4` (primary), `#1A237E` (text), `#FF9800` (accent) |
| Типографика | Montserrat 400/500/600 |
| Карточки | Glass-эффект (backdrop-filter: blur) |
| Иконки | Material Icons + Ionicons (CDN) |
| CSS-фреймворк | Bootstrap 5.3 (SCSS) |
| Совместимость | GitHub CMS ≥ 0.1.0, все редакции (Free/Pro) |

### Что в пакете

```
templates-oiron/cloud-theme/
├── template.json              # Манифест Template Pack
├── theme.scss                 # Полная дизайн-система (500+ строк)
├── INSTRUCTIONS.md            # ← этот файл
├── README.md                  # Обзор
├── prompts/
│   ├── prompt-pack.json       # Манифест промптов
│   ├── article-cloud-seo.md   # Промпт для SEO-статей
│   └── landing-cloud.md       # Промпт для лендингов
├── geo/
│   ├── blocks.json            # GEO-блоки (8 шт.)
│   └── schema-map.json        # Блоки → Schema.org
└── demo-content/
    ├── home-cloud.md           # Демо-главная
    └── about-cloud.md          # Демо "О компании"
```

---

## 2. Требования

- GitHub CMS установлен и собирается (`npm run build` — без ошибок)
- Node.js 18+
- Доступ к терминалу
- Интернет (для Google Fonts и иконок — опционально можно установить локально)

---

## 3. Пошаговая установка

### Шаг 1. Копируем тему в проект

Скопируйте `theme.scss` в папку тем вашего проекта GitHub CMS:

```bash
# Из корня вашего GitHub CMS-проекта:
mkdir -p src/assets/themes/oiron-cloud
cp templates-oiron/cloud-theme/theme.scss src/assets/themes/oiron-cloud/theme.scss
```

### Шаг 2. Подключаем тему в main.scss

Откройте `src/assets/main.scss` и замените строку активной темы:

```scss
/* === ACTIVE THEME === */
@import "themes/oiron-cloud/theme.scss";
```

> Если хотите быстро переключаться между темами — закомментируйте старую строку, добавьте новую:
> ```scss
> /* @import "themes/purple-geo-lite/theme.scss"; */
> @import "themes/oiron-cloud/theme.scss";
> ```

### Шаг 3. Подключаем шрифты и иконки

Откройте `index.html` в корне проекта и добавьте в `<head>` перед `</head>`:

```html
<!-- Cloud Theme: Fonts & Icons -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://unpkg.com/ionicons@3.0.0/dist/css/ionicons.min.css">
```

**Если проект работает без интернета (офлайн-сборка):**

1. Скачайте Montserrat с Google Fonts
2. Положите `.woff2` файлы в `public/fonts/`
3. Добавьте `@font-face` в `theme.scss`:
   ```scss
   @font-face {
     font-family: 'Montserrat';
     src: url('/fonts/Montserrat-Regular.woff2') format('woff2');
     font-weight: 400;
   }
   /* ... аналогично для 500 и 600 */
   ```
4. Для иконок — скачайте Material Icons с GitHub и положите в `public/icons/`

### Шаг 4. Копируем AI-промпты

```bash
# Копируем промпты в контентную директорию (русская версия)
mkdir -p content/ru/templates/oiron-cloud
cp templates-oiron/cloud-theme/prompts/article-cloud-seo.md content/ru/templates/oiron-cloud/
cp templates-oiron/cloud-theme/prompts/landing-cloud.md content/ru/templates/oiron-cloud/
cp templates-oiron/cloud-theme/prompts/prompt-pack.json content/ru/templates/oiron-cloud/

# Для английской версии:
mkdir -p content/en/templates/oiron-cloud
cp templates-oiron/cloud-theme/prompts/article-cloud-seo.md content/en/templates/oiron-cloud/
cp templates-oiron/cloud-theme/prompts/landing-cloud.md content/en/templates/oiron-cloud/
cp templates-oiron/cloud-theme/prompts/prompt-pack.json content/en/templates/oiron-cloud/
```

### Шаг 5. Собираем сайт

```bash
npm run build
```

Ожидаемый результат:
- Сборка без ошибок SCSS
- Сайт с небесно-синей палитрой, шрифтом Montserrat
- Hero-секция с облачным градиентом
- Карточки со стеклянным эффектом

### Шаг 6. Проверяем локально

```bash
npm run preview
```

Откройте `http://localhost:4173` (или порт из вывода команды) и проверьте:
- [ ] Главная страница: синий градиент в hero, Montserrat-шрифт
- [ ] Блог: карточки статей со стилями cloud-темы
- [ ] Страница статьи: блок answer-first с синим градиентом, faq с голубыми акцентами
- [ ] Навигация: navbar с backdrop-filter (полупрозрачный)
- [ ] Footer: тёмно-синий градиент
- [ ] Адаптив: мобильная вёрстка не разваливается

### Шаг 7. (Опционально) Регистрируем в template-реестре

Если хотите управлять темой через `npm run template:install`:

```bash
# Отредактируйте templates/registry.json, добавьте запись:
# {
#   "id": "oiron-cloud-pro",
#   "path": "templates-oiron/cloud-theme/template.json",
#   "edition": "pro",
#   "visibility": "marketplace"
# }
```

После этого:
```bash
npm run template:install -- --id oiron-cloud-pro --yes
npm run template:activate -- --id oiron-cloud-pro --yes
```

---

## 4. Адаптация под свой бренд

Все цвета и шрифты управляются через CSS-переменные в `theme.scss`. Меняйте их — и весь сайт перекрасится.

### Таблица CSS-переменных

| Переменная | Назначение | По умолчанию |
|---|---|---|
| `--color-bg` | Фон страницы | `#fafafa` |
| `--color-surface` | Фон карточек, панелей | `#ffffff` |
| `--color-text` | Основной текст | `#1A237E` |
| `--color-text-secondary` | Второстепенный текст | `#3949AB` |
| `--color-text-muted` | Приглушённый текст | `#5C6BC0` |
| `--color-border` | Границы | `#B3E5FC` |
| `--color-accent` | Акцентный цвет (ссылки, кнопки) | `#03A9F4` |
| `--color-accent-hover` | Акцент при наведении | `#01579B` |
| `--color-bg-muted` | Приглушённый фон | `#E1F5FE` |
| `--color-tag-bg` | Фон тегов | `#B3E5FC` |
| `--color-secondary` | Второй акцент (кнопки CTA) | `#FF9800` |
| `--color-secondary-hover` | Второй акцент при наведении | `#E65100` |
| `--color-answer-bg` | Градиент блока answer-first | `linear-gradient(135deg, #01579B, #03A9F4)` |
| `--color-cta-bg` | Градиент CTA-секции | `linear-gradient(135deg, #1A237E, #03A9F4)` |
| `--font-primary` | Основной шрифт | `'Montserrat', ui-sans-serif, system-ui, ...` |
| `--font-heading` | Шрифт заголовков | `'Montserrat', ...` |

### Быстрая смена цветовой схемы

Хотите зелёную тему вместо синей? Замените три переменных:

```scss
--color-accent: #009688;         /* teal вместо sky-blue */
--color-accent-hover: #00695C;
--color-bg-muted: #E0F2F1;
--color-border: #B2DFDB;
--color-tag-bg: #B2DFDB;
--color-answer-bg: linear-gradient(135deg, #00695C, #009688);
--color-cta-bg: linear-gradient(135deg, #004D40, #009688);
```

### Смена шрифта

```scss
--font-primary: 'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif;
--font-heading: 'Inter', ui-sans-serif, system-ui, sans-serif;
```
Не забудьте заменить Google Fonts ссылку в `index.html`.

### Замена логотипа

Логотип управляется компонентом `AppNavbar.vue` в вашем проекте GitHub CMS. Для замены:
1. Положите логотип в `public/images/logo.png`
2. Отредактируйте `src/components/AppNavbar.vue` — найдите `<img>` или текст бренда

---

## 5. Структура файлов (что куда копировать)

```
ВАШ_ПРОЕКТ_GITHUBCMS/
├── src/assets/main.scss               ← Шаг 2: меняем @import
├── src/assets/themes/oiron-cloud/
│   └── theme.scss                     ← Шаг 1: копируем сюда
├── content/ru/templates/oiron-cloud/  ← Шаг 4: промпты (RU)
│   ├── article-cloud-seo.md
│   ├── landing-cloud.md
│   └── prompt-pack.json
├── content/en/templates/oiron-cloud/  ← Шаг 4: промпты (EN)
│   └── ...
└── index.html                         ← Шаг 3: добавляем Google Fonts
```

---

## 6. Решение проблем

### "Сайт не собирается после подключения темы"

```
Error: Can't find stylesheet to import.
```

Причина: Bootstrap не установлен или путь неверен.

Решение:
```bash
npm ls bootstrap   # Должен показать bootstrap@5.x
```
Если не установлен:
```bash
npm install bootstrap@^5.3.8
```

### "Шрифты не загружаются"

Проверьте, что ссылка на Google Fonts добавлена в `index.html` и интернет доступен. Для офлайн-сборки — см. Шаг 3 (альтернативный вариант).

### "Иконки Material Icons / Ionicons не отображаются"

1. Проверьте, что CDN-ссылки есть в `index.html`
2. Убедитесь, что нет блокировщиков рекламы/трекеров (некоторые блокируют Google Fonts CDN)
3. Как альтернативу — установите иконки локально (см. Шаг 3)

### "Карточки выглядят не как в оригинале (нет стеклянного эффекта)"

Свойство `backdrop-filter` не работает в Firefox без флага. В Firefox карточки будут просто полупрозрачными — это штатное поведение. Для полной поддержки используйте Chrome/Edge/Safari.

### "После подключения темы сломался тёмный режим"

Тема Oiron Cloud Pro поставляется только в светлом варианте. Тёмная тема — отдельная доработка. Если в вашем проекте есть переключатель dark/light — оберните переменные в `[data-theme="dark"]` селектор.

---

## 7. Ссылки

- **Исходный шаблон:** ThemeForest — [Oiron — React JS Landing Page Collection](https://themeforest.net/) (Cloud Theme, v1.6.2)
- **GitHub CMS:** [githubcms.com](https://githubcms.com) / [githubcms.ru](https://githubcms.ru)
- **Документация GitHub CMS:** `docs/` в корне проекта
- **Полный список переменных:** см. `theme.scss`, секция `:root`
