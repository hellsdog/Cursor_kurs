type FaqItemShellProps = {
  question: string;
  answer: string;
};

export function FaqItemShell({ question, answer }: FaqItemShellProps) {
  return (
    <article className="ui-faq-item">
      <p className="ui-faq-item__question">{question}</p>
      <p className="ui-faq-item__answer">{answer}</p>
    </article>
  );
}
