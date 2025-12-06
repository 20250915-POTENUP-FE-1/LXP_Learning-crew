import { ReactNode } from "react";

interface AccordionViewProps {
  title: string | ReactNode;
  description?: string;
  isOpen?: boolean;

  children: ReactNode;
}

export type { AccordionViewProps };
