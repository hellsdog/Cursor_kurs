import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant = "primary", className, type = "button", ...props }: ButtonProps) {
  const variantClass = {
    primary: "ui-button--primary",
    secondary: "ui-button--secondary",
    ghost: "ui-button--ghost",
  }[variant];

  return (
    <button type={type} className={["ui-button", variantClass, className].filter(Boolean).join(" ")} {...props}>
      {children}
    </button>
  );
}
