import { Card, Divider, Section, SectionHeading } from "@/components/ui";

const outcomes = [
  "Понимание полной последовательности: от идеи страницы до опубликованного результата.",
  "Рабочий подход к сборке лендинга через структуру секций, а не через случайные эксперименты.",
  "Практика с ChatGPT и Cursor как с управляемым процессом, который можно повторять.",
  "Опубликованная страница на GitHub и Vercel как подтверждённый итог работы.",
];

export function ResultTransformationSection() {
  return (
    <Section id="result-transformation" className="landing-result">
      <div className="landing-result__transition" aria-hidden="true">
        <Divider variant="soft" />
        <p className="landing-result__transition-text">Переход от текущего тупика к предсказуемому рабочему ритму</p>
      </div>

      <div className="landing-result__layout">
        <div className="landing-result__intro">
          <SectionHeading
            eyebrow="STEP_04"
            title="Результат и трансформация"
            description="Программа переводит процесс из фрагментарного режима в понятную систему действий с прикладным итогом."
          />
          <Card className="landing-result__shift-card">
            <p className="landing-result__shift-label">Сдвиг</p>
            <p className="landing-result__shift-text">
              <strong>От:</strong> разрозненных попыток и перегруженности.
            </p>
            <p className="landing-result__shift-text">
              <strong>К:</strong> структурному AI-assisted workflow и собранному опубликованному лендингу.
            </p>
          </Card>
        </div>

        <Card className="landing-result__outcomes-card">
          <p className="landing-result__outcomes-title">Что меняется на практике</p>
          <ul className="ui-list">
            {outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
