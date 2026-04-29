type DividerProps = {
  className?: string;
  variant?: "route" | "soft";
};

export function Divider({ className, variant = "route" }: DividerProps) {
  return <hr className={["ui-divider", `ui-divider--${variant}`, className].filter(Boolean).join(" ")} />;
}
