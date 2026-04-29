import { LabelHTMLAttributes } from "react";

type FieldLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export function FieldLabel({ className, ...props }: FieldLabelProps) {
  return <label className={["ui-label", className].filter(Boolean).join(" ")} {...props} />;
}
