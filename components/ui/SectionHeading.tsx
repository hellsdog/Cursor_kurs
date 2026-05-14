type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Стабильный id заголовка секции (например для aria-labelledby у родительской section). */
  titleId?: string;
};

export function SectionHeading({ eyebrow, title, description, titleId }: SectionHeadingProps) {
  return (
    <header>
      {eyebrow ? <p className="ui-heading-eyebrow">{eyebrow}</p> : null}
      <h2 id={titleId} className="ui-heading-title">
        {title}
      </h2>
      {description ? <p className="ui-heading-description">{description}</p> : null}
    </header>
  );
}
