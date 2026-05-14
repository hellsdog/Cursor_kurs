import { Card, Divider, Section, SectionHeading, StepItem } from "@/components/ui";

const pathSteps = [
  {
    step: "01",
    title: "Идея и стратегическая рамка",
    text: "Формулируем задачу страницы, целевое действие и критерии готового результата.",
  },
  {
    step: "02",
    title: "Структура и логика секций",
    text: "Собираем маршрут лендинга: от первого экрана до понятного следующего шага пользователя.",
  },
  {
    step: "03",
    title: "Визуальная система и согласование UI",
    text: "Применяем токены, компоненты и ритм, чтобы интерфейс был цельным и управляемым.",
  },
  {
    step: "04",
    title: "Сборка и итерации в проекте",
    text: "Реализуем секции в Next.js через ChatGPT + Cursor, фиксируя рабочие решения по шагам.",
  },
  {
    step: "05",
    title: "Публикация и рабочий цикл",
    text: "Доводим страницу до деплоя через GitHub и Vercel и закрепляем повторяемый workflow.",
  },
];

export function LearningPathSection() {
  return (
    <Section id="learning-path" className="landing-path">
      <div className="landing-path__transition" aria-hidden="true">
        <Divider variant="soft" />
        <p className="landing-path__transition-text">Принцип становится конкретным маршрутом прохождения</p>
      </div>

      <div className="landing-path__layout">
        <div className="landing-path__intro">
          <SectionHeading
            eyebrow="STEP_06"
            title="Маршрут / learning path / структура программы"
            description="Программа показывает последовательность этапов, где каждый следующий шаг опирается на предыдущий и двигает к публикации."
          />
          <Card className="landing-path__summary-card">
            <p className="landing-path__summary-label">Формат маршрута</p>
            <p className="landing-path__summary-text">
              Это не перегруженный syllabus, а компактная цепочка ключевых этапов, которую можно пройти, проверить и повторить в следующих проектах.
            </p>
          </Card>
        </div>

        <div className="landing-path__steps">
          {pathSteps.map((item) => (
            <StepItem key={item.step} step={item.step} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </Section>
  );
}
