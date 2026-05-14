type FaqDisclosureProps = {
  question: string;
  answer: string;
};

export function FaqDisclosure({ question, answer }: FaqDisclosureProps) {
  return (
    <details className="ui-faq-disclosure">
      <summary className="ui-faq-disclosure__summary">{question}</summary>
      <div className="ui-faq-disclosure__answer">
        <p className="ui-faq-disclosure__answer-text">{answer}</p>
      </div>
    </details>
  );
}
