import { HTMLAttributes, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export function Card({ children, className, ...props }: CardProps) {
  return (
    <article className={["ui-card", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </article>
  );
}
