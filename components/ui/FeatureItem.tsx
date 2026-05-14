type FeatureItemProps = {
  title: string;
  text: string;
};

export function FeatureItem({ title, text }: FeatureItemProps) {
  return (
    <article className="ui-feature">
      <h3 className="ui-feature__title">{title}</h3>
      <p className="ui-feature__text">{text}</p>
    </article>
  );
}
