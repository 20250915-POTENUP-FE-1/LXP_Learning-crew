"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { AccordionViewProps } from "./AccordionView.type";
import TextField from "../TextField/TextField";
import headerAnimation from "./animations/header";
import contentAnimation from "./animations/content";

const AccordionView = ({
  title,
  description,
  isOpen = false,
  children,
}: AccordionViewProps) => {
  const [isViewOpen, setIsViewOpen] = useState(isOpen);

  return (
    <div className="flex flex-col gap-2">
      {/* AccordionView Header */}
      <motion.div
        className="flex cursor-pointer items-center justify-between rounded-xl"
        initial={headerAnimation.initial}
        // whileHover={headerAnimation.whileHover}
        transition={headerAnimation.transition}
        onClick={() => setIsViewOpen(!isViewOpen)}
      >
        <div className="flex flex-col">
          {/* title */}
          {typeof title === "string" ? (
            // string
            <TextField variant="body" style="semibold">
              {title}
            </TextField>
          ) : (
            // ReactNode
            title
          )}

          {/* description */}
          {description && (
            <div className="text-neutral-700">
              <TextField variant="caption">{description}</TextField>
            </div>
          )}
        </div>
      </motion.div>

      {/* AccordionView Content */}
      <motion.div
        className="flex items-end overflow-hidden"
        animate={isViewOpen ? contentAnimation.open : contentAnimation.close}
        transition={contentAnimation.transition}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AccordionView;
