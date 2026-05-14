import { Container, TextLink } from "@/components/ui";

export function LandingFooter() {
  return (
    <footer className="landing-footer">
      <Container className="landing-footer__inner">
        <p className="landing-footer__line">
          <span className="landing-footer__meta">Практический курс · structured tech / AI workflow</span>
          <TextLink href="#final-cta" inline className="landing-footer__cta">
            К заявке
          </TextLink>
        </p>
      </Container>
    </footer>
  );
}
