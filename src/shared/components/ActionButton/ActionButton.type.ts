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
  type?: "button" | "submit" | "reset";
  isFull?: boolean;
  width?: number;
  size?: "medium" | "large";
}

export type { ActionButtonProps };
