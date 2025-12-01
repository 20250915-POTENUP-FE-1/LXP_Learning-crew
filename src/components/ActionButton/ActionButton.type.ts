import type { ButtonHTMLAttributes } from "react";

type ActionButtonVariant = "primary" | "secondary" | "none";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;

  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  variant?: ActionButtonVariant;
  size?: "medium" | "large";
}

export type { ActionButtonVariant, ActionButtonProps };
