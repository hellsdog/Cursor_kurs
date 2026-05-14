import { LandingSectionTransition } from "@/components/landing/LandingSectionTransition";
import { Card, Section, SectionHeading } from "@/components/ui";

export function FinalCTASection() {
  return (
    <Section id="final-cta" className="landing-final-cta">
      <LandingSectionTransition text="После прозрачности по шагам — финальная точка маршрута: заявка" />

      <div className="landing-final-cta__panel">
        <Card className="landing-final-cta__card">
          <SectionHeading
            eyebrow="STEP_11"
            title="Следующий шаг — заявка"
            description="Кратко: программа даёт управляемый путь от идеи страницы до публикации через ChatGPT, Cursor, Next.js, GitHub и Vercel. Если контекст, ритм и честные рамки участия вам подходят, остаётся зафиксировать интерес — без обязательства до ответа по заявке."
          />

          <div className="landing-final-cta__actions">
            <a href="#application-form" className="ui-button ui-button--primary landing-final-cta__primary">
              Подать заявку
            </a>
            <p className="landing-final-cta__hint">
              Кнопка ведёт к форме ниже на этой странице. После отправки сработает описанный выше сценарий: короткий разбор и понятный ответ по итогам.
            </p>
          </div>

          <div id="application-form" className="landing-final-cta__form-slot" role="region" aria-label="Форма заявки на участие">
            <p className="landing-final-cta__form-slot-label">Место под форму заявки</p>
            <p className="landing-final-cta__form-slot-text">
              Здесь будет короткая форма или встраивание внешней формы: задача страницы, ваш фон и ожидания по участию. Подключение ссылки или полей — на этапе запуска конкретного набора.
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
}
