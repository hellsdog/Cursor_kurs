import { HTMLAttributes, ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  children: ReactNode;
  withContainer?: boolean;
} & HTMLAttributes<HTMLElement>;

export function Section({ children, className, withContainer = true, ...props }: SectionProps) {
  const content = withContainer ? <Container>{children}</Container> : children;

  return (
    <section className={["ui-section", className].filter(Boolean).join(" ")} {...props}>
      {content}
    </section>
  );
}
