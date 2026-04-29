import { AnchorHTMLAttributes, ReactNode } from "react";

type TextLinkProps = {
  children: ReactNode;
  inline?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function TextLink({ children, inline = false, className, ...props }: TextLinkProps) {
  return (
    <a className={["ui-link", inline ? "ui-link--inline" : "ui-link--action", className].filter(Boolean).join(" ")} {...props}>
      {children}
    </a>
  );
}
