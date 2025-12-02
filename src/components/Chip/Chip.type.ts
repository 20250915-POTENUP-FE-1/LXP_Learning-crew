type ChipVariant = "solid" | "border";
type ChipColor = "green" | "blue" | "purple" | "orange";

interface ChipProps {
  content: string;

  variant?: ChipVariant;
  color?: ChipColor;
}

export type { ChipProps };
