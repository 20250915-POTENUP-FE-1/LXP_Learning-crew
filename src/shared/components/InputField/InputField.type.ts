import type { InputHTMLAttributes, Ref } from "react";

type InputFieldVariant = "primary" | "disabled" | "black";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;

  title?: string;
  variant?: InputFieldVariant;
}

export type { InputFieldProps };
