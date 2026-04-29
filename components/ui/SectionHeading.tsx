type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header>
      {eyebrow ? <p className="ui-heading-eyebrow">{eyebrow}</p> : null}
      <h2 className="ui-heading-title">{title}</h2>
      {description ? <p className="ui-heading-description">{description}</p> : null}
    </header>
  );
}
