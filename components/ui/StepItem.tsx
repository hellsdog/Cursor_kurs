type StepItemProps = {
  step: string;
  title: string;
  text: string;
};

export function StepItem({ step, title, text }: StepItemProps) {
  return (
    <article className="ui-step">
      <span className="ui-step__marker">{step}</span>
      <div>
        <h3 className="ui-step__title">{title}</h3>
        <p className="ui-step__text">{text}</p>
      </div>
    </article>
  );
}
