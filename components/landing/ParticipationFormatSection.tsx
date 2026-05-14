import { Card, Divider, FeatureItem, Section, SectionHeading } from "@/components/ui";

const formatHighlights = [
  {
    title: "Cohort/live логика",
    text: "Вы проходите маршрут в общем потоке с живыми разборами и синхронизацией по этапам.",
  },
  {
    title: "Ритм коротких спринтов",
    text: "Работа делится на управляемые итерации, чтобы удерживать прогресс и не терять фокус.",
  },
  {
    title: "Практика между встречами",
    text: "Между созвонами есть конкретные шаги по проекту, которые закрепляют результат в коде.",
  },
  {
    title: "Понятная вовлеченность",
    text: "Формат предполагает участие и выполнение задач, а не пассивный просмотр материалов.",
  },
];

export function ParticipationFormatSection() {
  return (
    <Section id="participation-format" className="landing-format">
      <div className="landing-format__transition" aria-hidden="true">
        <Divider variant="soft" />
        <p className="landing-format__transition-text">После структуры программы — как этот путь проходит в реальном участии</p>
      </div>

      <div className="landing-format__layout">
        <div className="landing-format__intro">
          <SectionHeading
            eyebrow="STEP_07"
            title="Формат участия / как проходит обучение"
            description="Обучение организовано как живой и управляемый процесс: с ритмом, практикой и движением по этапам, а не как набор разрозненных уроков."
          />
          <Card className="landing-format__summary-card">
            <p className="landing-format__summary-label">Что важно понимать до старта</p>
            <p className="landing-format__summary-text">
              Формат рассчитан на практику. От участника нужна регулярная вовлеченность и готовность шаг за шагом собирать собственную страницу до
              публикации.
            </p>
          </Card>
        </div>

        <div className="landing-format__highlights">
          {formatHighlights.map((item) => (
            <FeatureItem key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </Section>
  );
}
