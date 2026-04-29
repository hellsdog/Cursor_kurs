import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  withContainer?: boolean;
};

export function Section({ children, className, withContainer = true }: SectionProps) {
  const content = withContainer ? <Container>{children}</Container> : children;

  return <section className={["ui-section", className].filter(Boolean).join(" ")}>{content}</section>;
}
