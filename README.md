# Visual System Iteration

Текущая итерация фиксирует рабочую визуальную систему для будущей сборки лендинга: читаемые поверхности, понятная иерархия, базовые UI-компоненты и демонстрационные композиции.

## Выбранное направление

**Structured tech / AI workflow**

Ключевая идея: современный и структурный product UI с ощущением маршрута, этапов и управляемого процесса обучения.

## Ключевые визуальные принципы

- Тёмная база (graphite / deep navy / charcoal), с разделением уровней `background / surface / elevated surface`.
- Границы и разделители заметные, но мягкие: `border` и `border-strong`, route/soft divider.
- Сильная типографическая иерархия: display/h1, h2, h3, body, caption, mono-служебные метки.
- Компоненты как системные блоки: чистые кнопки, структурные карточки, route-паттерн шагов.
- Без heavy neon, cyberpunk и декоративного перегруза.

## Шрифты и роли

- **Inter** (через `next/font/google`) — основной шрифт интерфейса:
  заголовки, текст, кнопки, карточки, секции.
- **JetBrains Mono** (через `next/font/google`) — точечный служебный:
  eyebrow, step marker, token labels, badge/meta.
- Fallback:
  - sans: `Segoe UI`, `Roboto`, `Arial`, `sans-serif`
  - mono: `Cascadia Code`, `Consolas`, `monospace`

## Правила акцентных цветов

- **Primary accent**: electric blue (`--color-accent-primary`) — primary CTA, focus ring, ключевые маркеры.
- **Secondary accent**: soft violet (`--color-accent-secondary`) — вторичный emphasis, route/divider-акценты.
- **Tertiary accent**: cyan (`--color-accent-tertiary`) — только точечно: badge, info-block, micro-label.
- Для сборки лендинга не смешивать акценты равноправно внутри одного блока: один доминирующий + один поддерживающий максимум.

## Где смотреть style guide

- Страница визуальной системы: `http://localhost:3000/style-guide`
- Route в проекте: `app/style-guide/page.tsx`

## Базовые компоненты

Созданы переиспользуемые блоки в `components/ui`:

- `Container`
- `Section`
- `SectionHeading`
- `Button`
- `Card`
- `Badge`
- `Divider`
- `StepItem`
- `Input`
- `Textarea`
- `FieldLabel`
- `TextLink`
- `NoteBlock`
- `FeatureItem`
- `FaqItemShell`

## Состояния кнопок и формы

- Кнопки (`primary`, `secondary`, `ghost`) имеют состояния:
  `default`, `hover`, `focus-visible`, `disabled`.
- Добавлены базовые form-elements:
  `label`, `text input`, `textarea`, `helper text`, `error text`.
- Добавлены базовые стили ссылок:
  inline text link и standalone action link с `hover/focus`.

## Токены и как использовать дальше

Базовые токены/переменные находятся в `app/globals.css`:

- цвета (bg, surface, elevated surface, border/base/strong, text/muted/caption, accent roles);
- типографическая шкала;
- spacing/radius;
- shadow/subtle glow;
- container widths и section spacing.

Следующие итерации лендинга собираются поверх этих компонентов и токенов:
- сначала проверка композиции в `style guide`;
- затем перенос в целевые секции;
- без локальных цветовых и типографических исключений.

## Локальный запуск

```bash
npm install
npm run dev
```
