# AI Prompt: Cloud SaaS Landing Page

**Role:** Ты — AI-дизайнер лендингов для облачного SaaS-продукта. Ты создаёшь одностраничный лендинг, который ведёт посетителя по воронке: осведомлённость → интерес → желание → действие.

**Tone:** Уверенный, сфокусированный на результате. Минимум технического жаргона — максимум бизнес-выгод. Целевая аудитория: `{{target_audience}}`.

**Output format:** Markdown с GitHub CMS-совместимыми блоками (`<!-- @block:имя -->`). Файл сохраняется в `content/{locale}/pages/{{slug}}.md`.

---

## LANDING PAGE PARAMETERS

```
site_name: {{site_name}}
hero_title: {{hero_title}}
hero_subtitle: {{hero_subtitle}}
primary_keyword: {{primary_keyword}}
target_audience: {{target_audience}}
primary_cta: {{primary_cta}}
pricing_tiers: {{pricing_tiers}}
```

---

## BLOCK STRUCTURE

Создай лендинг из следующих блоков **строго по порядку**:

### Block: hero
`<!-- @block:hero -->`

- H1: `{{hero_title}}` (45-60 символов, энергичный, с выгодой)
- Подзаголовок: `{{hero_subtitle}}`
- Две кнопки: основная `{{primary_cta}}` (primary) + второстепенная "Узнать больше" (outline, якорь на #feature-grid)
- Бейджи под кнопками: 3-4 коротких факта (например: "Бесплатный пробный период 14 дней", "Настройка за 5 минут", "99.9% uptime SLA")
- Визуальный тон: небесно-синий градиент, технологичный, облачный

### Block: feature-grid
`<!-- @block:feature-grid -->`

- 6 карточек функций продукта
- Каждая: material-icon-name, заголовок (2-4 слова), описание (15-25 слов)
- Группировка: 3 карточки на "возможности", 3 на "бизнес-результаты"
- Формат карточки:
  ```
  - icon: cloud_done
    title: Быстрое развёртывание
    desc: Запустите продуктивную среду за 5 минут без DevOps-инженера.
  ```

### Block: benefits
`<!-- @block:benefits -->`

- 3 секции чередующейся вёрстки
- Каждая: H3 (4-7 слов-выгод), параграф (3-4 предложения), ссылка на изображение (pixinlink placeholder)
- Темы: скорость разработки, безопасность данных, масштабируемость
- Последняя секция завершается мягким мостом к CTA

### Block: stats
`<!-- @block:stats -->`

- 4 ключевых метрики продукта в формате счётчиков
- Каждая: число (крупно), подпись (что измеряем), иконка
- Примеры метрик: активные пользователи, время безотказной работы, обработано данных, стран присутствия

### Block: testimonials
`<!-- @block:testimonials -->`

- 4 отзыва клиентов
- Каждый: фото (pixinlink placeholder URL), цитата (20-40 слов), имя, должность, компания
- 2 отзыва от enterprise-клиентов, 2 от стартапов/SMB — показать широту применения

### Block: cta
`<!-- @block:cta -->`

- H2: 5-8 слов с глаголом и главной выгодой
- 2 предложения поддержки
- Основная кнопка `{{primary_cta}}`
- Строка доверия под кнопкой: "Без кредитной карты • Отмена в любой момент • SLA 99.9%"

---

## FRONTMATTER

Лендинг должен начинаться с GitHub CMS frontmatter:

```yaml
---
title: "{{site_name}} — {{hero_title}}"
description: "{{hero_subtitle}}"
slug: "{{slug}}"
layout: landing
schema_type: WebPage
image: "https://pixinlink.ru/api/v1/1200x630/cloud-landing-{{slug}}"
---
```

---

## QUALITY CHECKLIST

- [ ] H1 находится в hero-блоке, 45-60 символов, содержит главную выгоду
- [ ] Все 6 блоков в правильном порядке: hero → feature-grid → benefits → stats → testimonials → cta
- [ ] Каждый блок обёрнут в `<!-- @block:имя -->` ... `<!-- /@block:имя -->`
- [ ] Цены из `{{pricing_tiers}}` упомянуты в cta (но не дублируют pricing-страницу)
- [ ] Frontmatter валидный YAML, layout: landing
- [ ] Тон: уверенный, сфокусированный на результате. Без пассивного залога
- [ ] Длина: 800-1200 слов (лендинг, не статья)
- [ ] Все изображения используют pixinlink placeholders

Выведи готовый лендинг полностью, начиная с frontmatter.
