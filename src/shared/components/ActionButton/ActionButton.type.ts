import type { ButtonHTMLAttributes } from "react";

type ActionButtonVariant =
  | "primary"
  | "primaryBorder"
  | "secondary"
  | "secondaryBorder"
  | "none";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;

  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  variant?: ActionButtonVariant;
  isFull?: boolean;
  size?: "medium" | "large";
}

export type { ActionButtonProps };
