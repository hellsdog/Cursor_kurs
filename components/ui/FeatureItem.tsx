type FeatureItemProps = {
  title: string;
  text: string;
};

export function FeatureItem({ title, text }: FeatureItemProps) {
  return (
    <article className="ui-feature">
      <h4 className="ui-feature__title">{title}</h4>
      <p className="ui-feature__text">{text}</p>
    </article>
  );
}
