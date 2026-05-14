import { Container } from "@/components/ui";

type LandingNavItem = {
  href: string;
  label: string;
};

type LandingHeaderProps = {
  items: LandingNavItem[];
};

export function LandingHeader({ items }: LandingHeaderProps) {
  return (
    <header className="landing-header">
      <Container className="landing-header__inner">
        <a href="#hero" className="landing-header__brand" aria-label="Перейти к началу страницы">
          AI Landing Course
        </a>

        <nav className="landing-header__nav" aria-label="Быстрая навигация по разделам">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="landing-header__link">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#final-cta"
          className="landing-header__cta ui-button ui-button--secondary"
          aria-label="Перейти к блоку заявки внизу страницы"
        >
          Подать заявку
        </a>
      </Container>
    </header>
  );
}
