import { LandingSectionTransition } from "@/components/landing/LandingSectionTransition";
import { Card, Section, SectionHeading } from "@/components/ui";

export function AudienceQualification() {
  return (
    <Section id="fit" className="landing-fit">
      <LandingSectionTransition text="С первого экрана — к быстрой проверке: подходит ли вам программа" />

      <SectionHeading
        eyebrow="STEP_02"
        title="Кому подходит / кому не подходит"
        description="Блок помогает быстро соотнести задачи и формат программы с вашей текущей ситуацией."
      />

      <div className="landing-fit__grid">
        <Card className="landing-fit__card">
          <h3 className="landing-fit__card-title">Подходит, если вы</h3>
          <ul className="ui-list">
            <li>Ведёте проект, практику или продукт и хотите делать страницы под свои задачи.</li>
            <li>Хотите перейти от фрагментов и идей к управляемому процессу сборки.</li>
            <li>Готовы работать по шагам и довести результат до публикации.</li>
          </ul>
        </Card>

        <Card className="landing-fit__card">
          <h3 className="landing-fit__card-title">Не подходит, если вы</h3>
          <ul className="ui-list">
            <li>Ищете мгновенный результат в формате «нажал кнопку и готово».</li>
            <li>Не планируете выделять время на практику и итеративную доработку.</li>
            <li>Ожидаете только теорию без сборки реальной страницы.</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}
