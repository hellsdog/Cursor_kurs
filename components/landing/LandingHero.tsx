import { Badge, Card, Section, TextLink } from "@/components/ui";

export function LandingHero() {
  return (
    <Section id="hero" className="landing-hero">
      <div className="landing-hero__layout">
        <div className="landing-hero__content">
          <Badge>Практический курс: ChatGPT + Cursor + Next.js</Badge>
          <h1 className="landing-hero__title">Соберите и опубликуйте свой лендинг через управляемый AI workflow</h1>
          <p className="landing-hero__description">
            Курс помогает пройти путь от идеи до рабочей страницы без технического хаоса: с понятной структурой, последовательными этапами и
            поддержкой на каждом шаге.
          </p>
          <div className="landing-hero__actions">
            <a
              href="#final-cta"
              className="ui-button ui-button--primary landing-hero__cta-link"
              aria-label="Перейти к блоку заявки внизу страницы"
            >
              Подать заявку на участие
            </a>
            <p className="landing-hero__meta">Cohort/live формат: короткие спринты, практика и итог в виде опубликованной страницы.</p>
          </div>
          <TextLink href="#fit">Проверить, подходит ли программа</TextLink>
        </div>

        <Card className="landing-hero__summary">
          <p id="hero-outcomes-label" className="landing-hero__summary-label">
            Что вы получите на выходе
          </p>
          <ul className="ui-list" aria-labelledby="hero-outcomes-label">
            <li>Собранный лендинг на Next.js с понятной структурой секций.</li>
            <li>Навык работы с ChatGPT и Cursor как с рабочим процессом, а не набором хаотичных промптов.</li>
            <li>Публикацию результата на GitHub и Vercel.</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
