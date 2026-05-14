import { LandingSectionTransition } from "@/components/landing/LandingSectionTransition";
import { Card, FeatureItem, Section, SectionHeading } from "@/components/ui";

const problemPoints = [
  {
    title: "Слишком много разрозненных источников",
    text: "Гайды, шаблоны, советы и инструменты не складываются в один рабочий процесс.",
  },
  {
    title: "Техническая часть воспринимается барьером",
    text: "Когда доходит до GitHub, деплоя и структуры проекта, движение часто останавливается.",
  },
  {
    title: "Идея не переходит в опубликованный результат",
    text: "Есть наброски и частичные попытки, но нет стабильного пути от концепта к готовой странице.",
  },
];

export function ProblemContextSection() {
  return (
    <Section id="problem-context" className="landing-problem">
      <LandingSectionTransition text="После проверки соответствия — в чём обычно застревают без системного маршрута" />

      <div className="landing-problem__layout">
        <div className="landing-problem__intro">
          <SectionHeading
            eyebrow="STEP_03"
            title="Проблема и текущий контекст"
            description="Интерес к созданию страниц с AI уже есть, но процесс часто остаётся фрагментарным и плохо управляемым."
          />
          <Card className="landing-problem__context-card">
            <p className="landing-problem__context-title">Типичный тупик на старте</p>
            <p className="landing-problem__context-text">
              Попытки идут через отдельные инструменты и несвязанные шаги. В результате сложно удержать фокус, выстроить последовательность и довести
              работу до публикации.
            </p>
          </Card>
        </div>

        <div className="landing-problem__points">
          {problemPoints.map((item) => (
            <FeatureItem key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </Section>
  );
}
