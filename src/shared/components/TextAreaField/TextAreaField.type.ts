import { TextareaHTMLAttributes } from "react";

type TextAreaFieldVariant = "primary" | "disabled" | "black" | "edit";

interface TextAreaFieldProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant: TextAreaFieldVariant;
}

export type { TextAreaFieldProps };
