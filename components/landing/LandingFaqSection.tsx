import { Divider, FaqDisclosure, Section, SectionHeading } from "@/components/ui";

const faqEntries = [
  {
    question: "Кому подойдёт этот курс?",
    answer:
      "Тем, кто хочет собрать и опубликовать лендинг или веб-страницу в связке ChatGPT, Cursor, GitHub, Vercel и Next.js и готов работать руками в проекте, а не ждать готового результата из одного запроса.",
  },
  {
    question: "Нужен ли опыт в разработке?",
    answer:
      "Базовая цифровая грамотность и готовность следовать инструкциям в терминале и интерфейсах — ожидаемы. Глубокий бэкенд-опыт не требуется: маршрут выстроен как практический workflow с опорой на инструменты и шаблоны.",
  },
  {
    question: "Сколько времени это займёт?",
    answer:
      "Точные часы зависят от темпа потока и вашего проекта, но формат рассчитан на регулярную вовлечённость: живые точки синхронизации и самостоятельная работа между ними. Детали ритма совпадают с блоком формата участия выше по странице.",
  },
  {
    question: "Как устроены live и cohort?",
    answer:
      "Вы идёте в общем потоке с этапами и разборами, а не как полностью асинхронный набор записей. Это помогает удерживать дедлайны по шагам и получать обратную связь в контексте вашей страницы.",
  },
  {
    question: "Что будет сразу после заявки?",
    answer:
      "Короткий сценарий обработки заявки и принятия решения описан в следующей секции — там же поясняется, зачем нужна форма и чего от неё ждать.",
  },
  {
    question: "Насколько это интенсивно?",
    answer:
      "Участие предполагает последовательную работу: между встречами есть конкретные шаги по проекту. Это не «фоновый» курс: без включения в практику сложно дойти до публикации.",
  },
];

export function LandingFaqSection() {
  return (
    <Section id="faq" className="landing-faq" aria-labelledby="faq-heading">
      <div className="landing-faq__transition" aria-hidden="true">
        <Divider variant="soft" />
        <p className="landing-faq__transition-text">Практические вопросы перед тем, как перейти к заявке</p>
      </div>

      <div className="landing-faq__layout">
        <SectionHeading
          titleId="faq-heading"
          eyebrow="STEP_09"
          title="FAQ"
          description="Сжатые ответы на типичные сомнения. Если чего-то нет в списке — это можно уточнить на этапе после заявки."
        />

        <ul className="landing-faq__list" aria-label="Ответы на частые вопросы">
          {faqEntries.map((item) => (
            <li key={item.question} className="landing-faq__item">
              <FaqDisclosure question={item.question} answer={item.answer} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
