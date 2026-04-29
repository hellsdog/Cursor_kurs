import {
  Badge,
  Button,
  Card,
  Divider,
  FaqItemShell,
  FeatureItem,
  FieldLabel,
  Input,
  NoteBlock,
  Section,
  SectionHeading,
  StepItem,
  TextLink,
  Textarea,
} from "@/components/ui";

const palette = [
  { name: "Фон / Graphite", token: "--color-bg", value: "#0a1020" },
  { name: "Surface / Base", token: "--color-surface", value: "#111a2b" },
  { name: "Surface / Elevated", token: "--color-surface-elevated", value: "#1a2742" },
  { name: "Border / Base", token: "--color-border", value: "#2a3a5d" },
  { name: "Border / Strong", token: "--color-border-strong", value: "#3a4f77" },
  { name: "Text / Primary", token: "--color-text", value: "#e8efff" },
  { name: "Text / Muted", token: "--color-text-muted", value: "#a5b4d3" },
  { name: "Text / Caption", token: "--color-text-caption", value: "#8898bc" },
];

export default function StyleGuidePage() {
  return (
    <main>
      <Section>
        <div className="sg-stack">
          <SectionHeading
            eyebrow="Визуальная система"
            title="Structured tech / AI workflow"
            description="Современный product UI с маршрутной логикой обучения: ясная структура, спокойные поверхности и дозированные акценты без dashboard-эстетики."
          />

          <Divider variant="route" />

          <section className="sg-stack">
            <h3 className="sg-subtitle">Палитра и уровни поверхностей</h3>
            <p className="sg-caption">Система разделяет фон, базовую поверхность и приподнятую поверхность для более читаемой структуры блоков.</p>
            <div className="sg-grid-4">
              {palette.map((item) => (
                <Card key={item.token} className="sg-stack" style={{ padding: "var(--space-4)", gap: "var(--space-3)" }}>
                  <div
                    aria-hidden
                    style={{
                      height: "56px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-border-strong)",
                      backgroundColor: item.value,
                    }}
                  />
                  <div>
                    <p style={{ margin: 0, fontWeight: 600 }}>{item.name}</p>
                    <p style={{ margin: "0.25rem 0 0", color: "var(--color-text-muted)", fontFamily: "var(--font-mono-effective)", fontSize: "0.8rem" }}>
                      {item.token} / {item.value}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="sg-stack">
            <h3 className="sg-subtitle">Акцентные цвета и правила применения</h3>
            <div className="sg-grid-3">
              <Card className="sg-stack" style={{ padding: "var(--space-4)", gap: "var(--space-2)", borderColor: "rgba(59,130,246,0.5)" }}>
                <p className="sg-mono">Primary accent</p>
                <p style={{ margin: 0, fontWeight: 600 }}>Electric blue `--color-accent-primary`</p>
                <p className="sg-caption">Главный акцент для primary CTA, focus ring и ключевых маркеров маршрута.</p>
              </Card>
              <Card className="sg-stack" style={{ padding: "var(--space-4)", gap: "var(--space-2)", borderColor: "rgba(139,92,246,0.5)" }}>
                <p className="sg-mono" style={{ color: "var(--color-accent-violet)" }}>
                  Secondary accent
                </p>
                <p style={{ margin: 0, fontWeight: 600 }}>Soft violet `--color-accent-secondary`</p>
                <p className="sg-caption">Для вторичного акцента: route-линии, декоративные границы и мягкие градиенты.</p>
              </Card>
              <Card className="sg-stack" style={{ padding: "var(--space-4)", gap: "var(--space-2)", borderColor: "rgba(34,211,238,0.5)" }}>
                <p className="sg-mono">Tertiary accent</p>
                <p style={{ margin: 0, fontWeight: 600 }}>Cyan `--color-accent-tertiary`</p>
                <p className="sg-caption">Точечно для badge, инфо-блоков и служебных подписей. Не использовать как CTA.</p>
              </Card>
            </div>
          </section>

          <section className="sg-stack">
            <h3 className="sg-subtitle">Типографика и вторичная иерархия</h3>
            <Card className="sg-stack" style={{ padding: "var(--space-6)", gap: "var(--space-4)" }}>
              <p style={{ margin: 0, fontSize: "var(--text-display)", lineHeight: 1.12, fontWeight: 700 }}>
                Display / H1: Управляемый путь обучения
              </p>
              <p style={{ margin: 0, fontSize: "var(--text-h2)", lineHeight: 1.2, fontWeight: 600 }}>
                H2: Чёткая структура шагов и результатов
              </p>
              <p style={{ margin: 0, fontSize: "var(--text-h3)", lineHeight: 1.3, fontWeight: 600 }}>
                H3: Прозрачный рабочий процесс
              </p>
              <p style={{ margin: 0, fontSize: "var(--text-body)", color: "var(--color-text-muted)" }}>
                Обычный текст: система помогает двигаться последовательно, не перегружая интерфейс лишним визуальным шумом.
              </p>
              <p style={{ margin: 0, fontSize: "var(--text-caption)", color: "var(--color-text-caption)" }}>
                Small / Caption: короткие пояснения для второстепенной информации и подсказок.
              </p>
              <p className="sg-mono">Mono label / STEP_02 / В ПРОЦЕССЕ</p>
              <div className="sg-row">
                <Badge>badge label</Badge>
                <span className="ui-step__marker">03</span>
              </div>
            </Card>
          </section>

          <section className="sg-stack">
            <h3 className="sg-subtitle">Шрифты проекта</h3>
            <div className="sg-grid-2">
              <Card className="sg-stack" style={{ padding: "1.25rem", gap: "var(--space-3)" }}>
                <p className="sg-mono" style={{ color: "var(--color-accent-primary)" }}>
                  Основной шрифт
                </p>
                <p style={{ margin: 0, fontFamily: "var(--font-sans-effective)", fontWeight: 600 }}>Inter</p>
                <p className="sg-caption">Роли: заголовки, абзацы, кнопки, карточки, описания секций.</p>
                <p className="sg-caption">Fallback: Segoe UI, Roboto, Arial, sans-serif.</p>
              </Card>
              <Card className="sg-stack" style={{ padding: "1.25rem", gap: "var(--space-3)" }}>
                <p className="sg-mono">Моноширинный шрифт</p>
                <p style={{ margin: 0, fontFamily: "var(--font-mono-effective)", fontWeight: 600 }}>JetBrains Mono</p>
                <p className="sg-caption">Роли: eyebrow, step marker, токены, служебные подписи и badge.</p>
                <p className="sg-caption">Fallback: Cascadia Code, Consolas, monospace.</p>
              </Card>
            </div>
          </section>

          <section className="sg-stack">
            <h3 className="sg-subtitle">Кнопки и состояния</h3>
            <p className="sg-caption">Все варианты показывают default, hover/active-поведение, focus-visible и disabled.</p>
            <div className="sg-grid-3">
              <Card className="sg-stack" style={{ padding: "var(--space-4)", gap: "var(--space-3)" }}>
                <p className="sg-mono">Primary</p>
                <div className="sg-row">
                  <Button variant="primary" autoFocus>
                    Default
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                </div>
                <p className="sg-caption">Primary accent для ключевого CTA.</p>
              </Card>
              <Card className="sg-stack" style={{ padding: "var(--space-4)", gap: "var(--space-3)" }}>
                <p className="sg-mono" style={{ color: "var(--color-accent-violet)" }}>
                  Secondary
                </p>
                <div className="sg-row">
                  <Button variant="secondary">Default</Button>
                  <Button variant="secondary" disabled>
                    Disabled
                  </Button>
                </div>
                <p className="sg-caption">Для альтернативного действия в секции.</p>
              </Card>
              <Card className="sg-stack" style={{ padding: "var(--space-4)", gap: "var(--space-3)" }}>
                <p className="sg-mono">Ghost</p>
                <div className="sg-row">
                  <Button variant="ghost">Default</Button>
                  <Button variant="ghost" disabled>
                    Disabled
                  </Button>
                </div>
                <p className="sg-caption">Для вспомогательных и контекстных действий.</p>
              </Card>
            </div>
          </section>

          <section className="sg-stack">
            <h3 className="sg-subtitle">Базовые ссылки</h3>
            <Card className="sg-stack" style={{ padding: "1.25rem", gap: "var(--space-3)" }}>
              <p style={{ margin: 0 }}>
                Встроенная ссылка в тексте: <TextLink inline href="#">подробнее о формате обучения</TextLink>.
              </p>
              <div className="sg-row">
                <TextLink href="#">Открыть программу курса</TextLink>
                <TextLink href="#">Посмотреть структуру модулей</TextLink>
              </div>
              <p className="sg-caption">Focus state доступен через клавиатурную навигацию (`Tab`).</p>
            </Card>
          </section>

          <section className="sg-stack">
            <h3 className="sg-subtitle">Form elements</h3>
            <div className="sg-grid-2">
              <Card className="sg-stack" style={{ padding: "1.25rem", gap: "var(--space-4)" }}>
                <div>
                  <FieldLabel htmlFor="name">Имя участника</FieldLabel>
                  <Input id="name" placeholder="Введите имя" />
                  <p className="ui-helper">Используйте имя, которое хотите видеть в рабочем чате курса.</p>
                </div>
                <div>
                  <FieldLabel htmlFor="goal">Цель на ближайший спринт</FieldLabel>
                  <Textarea id="goal" placeholder="Кратко опишите, какой результат хотите получить" />
                  <p className="ui-helper">1-2 предложения достаточно для фиксации цели.</p>
                </div>
              </Card>
              <Card className="sg-stack" style={{ padding: "1.25rem", gap: "var(--space-4)" }}>
                <div>
                  <FieldLabel htmlFor="email">Контактный email</FieldLabel>
                  <Input id="email" defaultValue="name@domain" aria-invalid="true" />
                  <p className="ui-error">Проверьте формат email: ожидается пример `name@domain.com`.</p>
                </div>
                <NoteBlock title="Подсказка">
                  Для лендинговых форм используем чистые поля без dashboard-детализации и без перегруженной валидации в интерфейсе.
                </NoteBlock>
              </Card>
            </div>
          </section>

          <section className="sg-stack">
            <h3 className="sg-subtitle">Базовые элементы системы</h3>
            <div className="sg-grid-2">
              <Card className="sg-stack" style={{ padding: "1.25rem", gap: "var(--space-4)" }}>
                <p className="sg-mono">Divider variants</p>
                <Divider variant="route" />
                <Divider variant="soft" />
              </Card>
              <Card className="sg-stack" style={{ padding: "1.25rem", gap: "var(--space-4)" }}>
                <p className="sg-mono">List style</p>
                <ul className="ui-list">
                  <li>Основной контейнер: `--container-lg` 1120px.</li>
                  <li>Базовый вертикальный ритм секций: `--section-space-y`.</li>
                  <li>Карточки строятся на `surface + strong border + мягкая тень`.</li>
                </ul>
              </Card>
            </div>
          </section>

          <section className="sg-stack">
            <h3 className="sg-subtitle">Композиционные фрагменты</h3>
            <div className="sg-grid-3">
              <Card className="sg-stack" style={{ padding: "var(--space-6)", gap: "var(--space-3)" }}>
                <Badge>Structured flow</Badge>
                <h4 style={{ margin: 0, fontSize: "var(--text-h3)" }}>Hero-like fragment</h4>
                <p className="sg-caption">Собирается из heading, badge, CTA и короткого пояснения.</p>
                <div className="sg-row">
                  <Button variant="primary">Начать маршрут</Button>
                  <Button variant="ghost">Посмотреть этапы</Button>
                </div>
              </Card>
              <Card className="sg-stack" style={{ padding: "var(--space-6)", gap: "var(--space-3)" }}>
                <h4 style={{ margin: 0, fontSize: "var(--text-h3)" }}>CTA panel</h4>
                <p className="sg-caption">Компактная панель для вторичного CTA и поясняющей ссылки.</p>
                <div className="sg-row">
                  <Button variant="secondary">Запросить программу</Button>
                  <TextLink href="#">Подробнее о формате</TextLink>
                </div>
              </Card>
              <Card className="sg-stack" style={{ padding: "var(--space-6)", gap: "var(--space-3)" }}>
                <h4 style={{ margin: 0, fontSize: "var(--text-h3)" }}>Feature row</h4>
                <FeatureItem title="Прозрачный прогресс" text="Каждый шаг имеет цель, результат и следующий ориентир." />
              </Card>
            </div>
          </section>

          <section className="sg-stack">
            <h3 className="sg-subtitle">Learning path / route pattern</h3>
            <p className="sg-caption">Шаги связаны вертикальным route-коннектором и единым маркером прогрессии.</p>
            <div className="sg-stack" style={{ gap: "var(--space-4)" }}>
              <StepItem step="01" title="Определить цель спринта" text="Фиксируем ожидаемый результат, критерии готовности и приоритет текущей итерации." />
              <StepItem step="02" title="Собрать и проверить решение" text="Делаем небольшой, проверяемый шаг и сверяемся с визуальной системой проекта." />
              <StepItem step="03" title="Закрепить и масштабировать" text="Фиксируем паттерн как базовый блок для следующих секций лендинга." />
            </div>
          </section>

          <section className="sg-stack">
            <h3 className="sg-subtitle">FAQ shell и info block</h3>
            <div className="sg-grid-2">
              <FaqItemShell
                question="Как этот style guide использовать в следующей итерации?"
                answer="Собирайте новые секции только из базовых компонентов и токенов, не создавая локальные исключения по цветам и отступам."
              />
              <NoteBlock title="Info block">
                При расширении лендинга сначала добавляйте композиционные фрагменты в style guide, а затем переносите их в целевые секции.
              </NoteBlock>
            </div>
          </section>

          <section className="sg-stack">
            <h3 className="sg-subtitle">Базовые компоненты (актуальный набор)</h3>
            <div className="sg-row">
              <Button variant="primary">Primary кнопка</Button>
              <Button variant="secondary">Secondary кнопка</Button>
              <Button variant="ghost">Ghost кнопка</Button>
            </div>
            <div className="sg-row">
              <Badge>AI-assisted workflow</Badge>
              <Badge>Маршрут обучения</Badge>
            </div>
            <p className="sg-caption">Container: до 1120px, section spacing: `--section-space-y`, базовый шаг между блоками: `--space-8`.</p>
          </section>
        </div>
      </Section>
    </main>
  );
}
