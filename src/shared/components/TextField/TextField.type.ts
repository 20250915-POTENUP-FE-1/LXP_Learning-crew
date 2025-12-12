import { ReactNode } from "react";

type TextFieldType = "title" | "heading" | "body" | "caption";
type TextFieldStyle = "semibold" | "regular";

interface TextFieldProps {
  children: string;
  variant?: TextFieldType;
  style?: TextFieldStyle;
}

export type { TextFieldProps, TextFieldType, TextFieldStyle };
