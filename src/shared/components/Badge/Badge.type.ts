type BadgeVariant = "solid" | "border";
type BadgeColor = "green" | "blue" | "purple" | "orange";

interface BadgeProps {
  content: string;

  variant?: BadgeVariant;
  color?: BadgeColor;
}

export type { BadgeProps };
