# Visual System Iteration

Текущая итерация проекта фиксирует базовую визуальную систему будущего лендинга без сборки полноценных маркетинговых блоков.

## Выбранное направление

**Structured tech / AI workflow**

Ключевая идея: современный и структурный product UI с ощущением маршрута, этапов и управляемого процесса обучения.

## Ключевые визуальные принципы

- Тёмная база (graphite / deep navy / charcoal), светлый контрастный текст.
- Акценты: electric blue, soft violet, cyan, с дозированным применением.
- Сильная типографическая иерархия, спокойный читаемый body-текст, точечный mono для micro-элементов.
- Компоненты как системные блоки: чистые кнопки, product-like карточки, мягкие border/glow и route-like разделители.
- Без heavy neon, cyberpunk и декоративного перегруза.

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

## Токены и как использовать дальше

Базовые токены/переменные находятся в `app/globals.css`:

- цвета (bg, surface, border, text, muted, accent);
- типографическая шкала;
- spacing/radius;
- shadow/subtle glow;
- container widths и section spacing.

Следующие итерации лендинга собираются поверх этих компонентов и токенов: новые секции стоит строить из `Section`, `SectionHeading`, `Card`, `Button`, сохраняя текущую иерархию и контраст.

## Локальный запуск

```bash
npm install
npm run dev
```
