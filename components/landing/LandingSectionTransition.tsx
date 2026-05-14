import { Divider } from "@/components/ui";

type LandingSectionTransitionProps = {
  text: string;
};

export function LandingSectionTransition({ text }: LandingSectionTransitionProps) {
  return (
    <div className="landing-section-transition" aria-hidden="true">
      <Divider variant="soft" />
      <p className="landing-section-transition__text">{text}</p>
    </div>
  );
}
