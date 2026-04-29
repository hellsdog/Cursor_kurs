import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return <span className={["ui-badge", className].filter(Boolean).join(" ")}>{children}</span>;
}
