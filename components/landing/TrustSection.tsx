import { Card, Divider, FeatureItem, Section, SectionHeading } from "@/components/ui";

const trustPoints = [
  {
    title: "Метод важнее обещаний",
    text: "Опора — на пошаговом workflow и проверяемых артефактах в проекте, а не на громких формулировках результата.",
  },
  {
    title: "Прозрачный формат участия",
    text: "Cohort/live-логика, ритм спринтов и практика между встречами заранее обозначены: вы понимаете, что именно будет происходить.",
  },
  {
    title: "Серьёзность сборки страницы",
    text: "Маршрут ведёт к публикации рабочей страницы через Next.js, GitHub и Vercel — это измеримый финал, а не абстрактное «освоили тему».",
  },
  {
    title: "Честность про доказательства",
    text: "На старте нет большого пакета кейсов и отзывов — поэтому доверие предлагается строить на ясности процесса и взрослом тоне ожиданий.",
  },
];

export function TrustSection() {
  return (
    <Section id="trust" className="landing-trust">
      <div className="landing-trust__transition" aria-hidden="true">
        <Divider variant="soft" />
        <p className="landing-trust__transition-text">После описания формата — кто стоит за маршрутом и почему ему можно доверять</p>
      </div>

      <div className="landing-trust__layout">
        <div className="landing-trust__intro">
          <SectionHeading
            eyebrow="STEP_08"
            title="Доверие к подходу"
            description="Коротко о том, кто ведёт программу, зачем она устроена именно так и почему процессу можно доверять даже без большого пакета внешних доказательств."
          />

          <Card className="landing-trust__author-card">
            <p className="landing-trust__author-label">Кто ведёт программу</p>
            <p className="landing-trust__author-lead">
              Практический маршрут ведёт автор курса. Имя, фон и ссылка на профиль можно будет добавить сюда одним блоком — структура уже
              рассчитана на спокойное деловое представление без перегруза «личным брендом».
            </p>
            <p className="landing-trust__author-text">
              Фокус — на передаче воспроизводимого процесса: структура страницы, работа с AI-инструментами в контексте репозитория и доведение до
              деплоя.
            </p>
          </Card>

          <Card className="landing-trust__summary-card">
            <p className="landing-trust__summary-label">В двух словах</p>
            <p className="landing-trust__summary-text">
              Программа собрана как управляемый цикл с понятными этапами и честными рамками участия. Заявка дальше по странице — не украшение, а
              способ согласовать ожидания до старта.
            </p>
          </Card>
        </div>

        <div className="landing-trust__points">
          {trustPoints.map((item) => (
            <FeatureItem key={item.title} title={item.title} text={item.text} />
          ))}
        </div>
      </div>
    </Section>
  );
}
