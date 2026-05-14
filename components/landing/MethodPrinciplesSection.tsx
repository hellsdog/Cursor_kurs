import { LandingSectionTransition } from "@/components/landing/LandingSectionTransition";
import { Card, FeatureItem, Section, SectionHeading } from "@/components/ui";

const principles = [
  {
    title: "Пошаговая структура вместо хаотичных действий",
    text: "Работа идёт по понятной последовательности: цель, структура, реализация, проверка и публикация.",
  },
  {
    title: "AI как инструмент процесса",
    text: "ChatGPT и Cursor применяются внутри рабочего контура, а не как попытка получить результат одной командой.",
  },
  {
    title: "Связка решения и фиксации изменений",
    text: "Каждый шаг закрепляется в проекте: вы видите, что именно изменилось и как это двигает страницу к готовности.",
  },
  {
    title: "Финал не в теории, а в публикации",
    text: "Маршрут заканчивается рабочей страницей в продакшене, а не набором заметок и фрагментов.",
  },
];

export function MethodPrinciplesSection() {
  return (
    <Section id="why-this-path" className="landing-method">
      <LandingSectionTransition text="От образа результата — к принципам метода, который этот результат удерживает" />

      <div className="landing-method__layout">
        <div className="landing-method__intro">
          <SectionHeading
            eyebrow="STEP_05"
            title="Почему работает именно этот путь"
            description="Подход строится как управляемый workflow: каждое действие имеет цель, место в маршруте и проверяемый результат."
          />
          <Card className="landing-method__summary-card">
            <p className="landing-method__summary-label">Опорная логика метода</p>
            <p className="landing-method__summary-text">
              Программа не обещает "магическую кнопку". Она даёт систему, в которой AI, структура страницы и техническая реализация соединяются в
              последовательный процесс.
            </p>
          </Card>
        </div>

        <div className="landing-method__principles">
          {principles.map((item) => (
            <FeatureItem key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </Section>
  );
}
