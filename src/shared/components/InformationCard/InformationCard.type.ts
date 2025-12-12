type InformationCardStyle = "fit" | "fill";

interface InformationCardProps {
  title: string;
  description: string;

  style?: InformationCardStyle;
}

export type { InformationCardProps };
