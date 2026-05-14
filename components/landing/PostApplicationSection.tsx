import { Card, Divider, NoteBlock, Section, SectionHeading, StepItem } from "@/components/ui";

const steps = [
  {
    step: "01",
    title: "Заявка фиксирует интерес и контекст",
    text: "Форма — это не «лишний барьер», а способ коротко описать задачу и ограничения: что хотите собрать, какой у вас фон, чего ожидаете от участия.",
  },
  {
    step: "02",
    title: "После отправки — ручной разбор и ответ",
    text: "Заявки просматриваются не автоматическим скриптом ради чисел, а в логике подбора потока: при необходимости возможны уточняющие вопросы по почте или в согласованном канале.",
  },
  {
    step: "03",
    title: "Решение и следующий шаг",
    text: "Вы получите понятный ответ: приглашение в поток, перенос на следующий набор или честный отказ, если ожидания и формат не совпали. Никаких скрытых условий в этой части процесса не заложено.",
  },
];

export function PostApplicationSection() {
  return (
    <Section id="after-application" className="landing-after-app">
      <div className="landing-after-app__transition" aria-hidden="true">
        <Divider variant="soft" />
        <p className="landing-after-app__transition-text">Что происходит после отправки формы — перед финальным блоком заявки</p>
      </div>

      <div className="landing-after-app__layout">
        <div className="landing-after-app__intro">
          <SectionHeading
            eyebrow="STEP_10"
            title="Что происходит после заявки"
            description="Прозрачная механика следующего шага: что означает отправка формы, как принимается решение и почему это нормальная часть отбора, а не давление."
          />

          <NoteBlock title="Спокойный ориентир">
            Подача заявки не обязывает к оплате и не «продаёт» место автоматически. Это точка согласования ожиданий с реальным форматом курса перед
            тем, как вы перейдёте к финальному блоку с целевым действием страницы.
          </NoteBlock>
        </div>

        <Card className="landing-after-app__steps-card">
          <p className="landing-after-app__steps-label">Три шага процесса</p>
          <div className="landing-after-app__steps">
            {steps.map((item) => (
              <StepItem key={item.step} step={item.step} title={item.title} text={item.text} />
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
