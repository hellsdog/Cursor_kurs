import type { Metadata } from "next";
import { AudienceQualification } from "@/components/landing/AudienceQualification";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { LandingFaqSection } from "@/components/landing/LandingFaqSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingHeader } from "@/components/landing/LandingHeader";
import { LandingHero } from "@/components/landing/LandingHero";
import { LearningPathSection } from "@/components/landing/LearningPathSection";
import { MethodPrinciplesSection } from "@/components/landing/MethodPrinciplesSection";
import { ParticipationFormatSection } from "@/components/landing/ParticipationFormatSection";
import { PostApplicationSection } from "@/components/landing/PostApplicationSection";
import { ProblemContextSection } from "@/components/landing/ProblemContextSection";
import { ResultTransformationSection } from "@/components/landing/ResultTransformationSection";
import { TrustSection } from "@/components/landing/TrustSection";
import { Section } from "@/components/ui";

const pageTitle = "Практический курс: лендинг и веб-страницы с ChatGPT, Cursor и Next.js";

const pageDescription =
  "Соберите и опубликуйте лендинг через управляемый AI workflow: структура страницы, Cursor, GitHub и Vercel. Cohort/live формат, прозрачные шаги после заявки.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: pageDescription,
  },
  alternates: process.env.NEXT_PUBLIC_SITE_URL
    ? { canonical: new URL("/", process.env.NEXT_PUBLIC_SITE_URL).toString() }
    : undefined,
};

const headerItems = [
  { href: "#hero", label: "Старт" },
  { href: "#problem-context", label: "Контекст" },
  { href: "#learning-path", label: "Маршрут" },
  { href: "#participation-format", label: "Формат" },
  { href: "#trust", label: "Доверие" },
  { href: "#faq", label: "FAQ" },
  { href: "#final-cta", label: "Заявка" },
];

export default function Home() {
  return (
    <>
      <LandingHeader items={headerItems} />

      <main className="landing-page">
        <Section
          id="landing-route-overview"
          className="landing-route-overview"
          aria-label="Краткий обзор последовательности разделов страницы"
        >
          <p className="landing-route-overview__label">Structured tech / AI workflow</p>
          <p className="landing-route-overview__caption">
            Одна линия маршрута страницы: ценность → соответствие → контекст → сдвиг → метод → программа → формат → доверие → вопросы → шаги после
            заявки → заявка.
          </p>
        </Section>

        <LandingHero />
        <AudienceQualification />
        <ProblemContextSection />
        <ResultTransformationSection />
        <MethodPrinciplesSection />
        <LearningPathSection />
        <ParticipationFormatSection />

        <TrustSection />
        <LandingFaqSection />
        <PostApplicationSection />

        <FinalCTASection />
      </main>

      <LandingFooter />
    </>
  );
}
