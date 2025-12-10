import { ReactNode } from "react";

interface AccordionViewProps {
  title: string | ReactNode;
  description?: string;
  isOpen?: boolean;
  isEnabled?: boolean;

  children: ReactNode;
}

export type { AccordionViewProps };
