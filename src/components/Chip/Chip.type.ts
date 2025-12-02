type ChipVariant = "solid" | "border";
type ChipSize = "small" | "medium" | "large";
type ChipColor = "green" | "blue" | "purple" | "orange";

interface ChipProps {
  content: string;

  variant?: ChipVariant;
  size?: ChipSize;
  color?: ChipColor;
}

export type { ChipProps };
