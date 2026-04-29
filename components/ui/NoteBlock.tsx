import { ReactNode } from "react";

type NoteBlockProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export function NoteBlock({ title, children, className }: NoteBlockProps) {
  return (
    <aside className={["ui-note", className].filter(Boolean).join(" ")}>
      <p className="ui-note__title">{title}</p>
      <p className="ui-note__text">{children}</p>
    </aside>
  );
}
