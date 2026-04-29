import { Badge, Button, Card, Divider, Section, SectionHeading, StepItem } from "@/components/ui";

const palette = [
  { name: "Background / Graphite", token: "--color-bg", value: "#0b1120" },
  { name: "Surface / Deep navy", token: "--color-surface", value: "#111a2e" },
  { name: "Border / Structural", token: "--color-border", value: "#233250" },
  { name: "Text / Primary", token: "--color-text", value: "#e8efff" },
  { name: "Text / Muted", token: "--color-text-muted", value: "#9cadcf" },
  { name: "Accent / Electric blue", token: "--color-accent-blue", value: "#3b82f6" },
  { name: "Accent / Soft violet", token: "--color-accent-violet", value: "#8b5cf6" },
  { name: "Accent / Cyan", token: "--color-accent-cyan", value: "#22d3ee" },
];

export default function StyleGuidePage() {
  return (
    <main>
      <Section>
        <div className="sg-stack">
          <SectionHeading
            eyebrow="Визуальная система"
            title="Structured tech / AI workflow"
            description="Направление фиксирует ощущение современного product UI: структурный маршрут обучения, спокойная технологичность и управляемый процесс без перегруженных эффектов."
          />

          <Divider />

          <section className="sg-stack">
            <h3 style={{ margin: 0, fontSize: "var(--text-h2)" }}>Палитра проекта</h3>
            <div className="sg-grid-3">
              {palette.map((item) => (
                <Card key={item.token} className="sg-stack" style={{ padding: "var(--space-4)", gap: "var(--space-3)" }}>
                  <div
                    aria-hidden
                    style={{
                      height: "56px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-border)",
                      backgroundColor: item.value,
                    }}
                  />
                  <div>
                    <p style={{ margin: 0, fontWeight: 600 }}>{item.name}</p>
                    <p style={{ margin: "0.25rem 0 0", color: "var(--color-text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
                      {item.token} / {item.value}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          <section className="sg-stack">
            <h3 style={{ margin: 0, fontSize: "var(--text-h2)" }}>Типографика</h3>
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
              <p style={{ margin: 0, fontSize: "var(--text-caption)", color: "var(--color-text-muted)" }}>
                Small / Caption: короткие пояснения для второстепенной информации и подсказок.
              </p>
              <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--color-accent-cyan)" }}>
                MONO LABEL / STEP_02 / IN PROGRESS
              </p>
            </Card>
          </section>

          <section className="sg-stack">
            <h3 style={{ margin: 0, fontSize: "var(--text-h2)" }}>Базовые компоненты</h3>
            <div className="sg-row">
              <Button variant="primary">Primary кнопка</Button>
              <Button variant="secondary">Secondary кнопка</Button>
              <Button variant="ghost">Ghost кнопка</Button>
            </div>
            <div className="sg-row">
              <Badge>AI-assisted workflow</Badge>
              <Badge>Маршрут обучения</Badge>
            </div>
            <Divider />
            <div className="sg-grid-2">
              <Card className="sg-stack" style={{ padding: "var(--space-6)", gap: "var(--space-3)" }}>
                <h4 style={{ margin: 0, fontSize: "var(--text-h3)" }}>Surface card / Основная панель</h4>
                <p style={{ margin: 0, color: "var(--color-text-muted)" }}>
                  Карточка работает как базовый продуктовый блок для контента, преимуществ и этапов.
                </p>
              </Card>
              <Card className="sg-stack" style={{ padding: "var(--space-6)", gap: "var(--space-3)" }}>
                <h4 style={{ margin: 0, fontSize: "var(--text-h3)" }}>Section heading</h4>
                <p style={{ margin: 0, color: "var(--color-text-muted)" }}>
                  Заголовки задают иерархию и удерживают фокус на последовательности шагов.
                </p>
              </Card>
            </div>
          </section>

          <section className="sg-stack">
            <h3 style={{ margin: 0, fontSize: "var(--text-h2)" }}>Learning path / 3 шага</h3>
            <div className="sg-stack" style={{ gap: "var(--space-4)" }}>
              <StepItem step="01" title="Определить цель спринта" text="Фиксируем ожидаемый результат, критерии готовности и приоритет текущей итерации." />
              <StepItem step="02" title="Собрать и проверить решение" text="Делаем небольшой, проверяемый шаг и сверяемся с визуальной системой проекта." />
              <StepItem step="03" title="Закрепить и масштабировать" text="Фиксируем паттерн как базовый блок для следующих секций лендинга." />
            </div>
          </section>
        </div>
      </Section>
    </main>
  );
}
