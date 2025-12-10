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
  isEnabled = true,
  children,
}: AccordionViewProps) => {
  const [isViewOpen, setIsViewOpen] = useState(isOpen);

  return (
    <div className="flex flex-col gap-2">
      {/* AccordionView Header */}
      <motion.div
        className="flex cursor-pointer items-center justify-between rounded-xl"
        initial={headerAnimation.initial}
        transition={headerAnimation.transition}
        onClick={() => isEnabled && setIsViewOpen(!isViewOpen)}
      >
        {/* title */}
        {typeof title === "string" ? (
          <div className="flex flex-col">
            <TextField variant="body" style="semibold">
              {title}
            </TextField>

            {description && (
              <div className="text-neutral-700">
                <TextField variant="caption">{description}</TextField>
              </div>
            )}
          </div>
        ) : (
          // ReactNode
          title
        )}
      </motion.div>

      {/* AccordionView Content */}
      <motion.div
        className="flex overflow-hidden"
        animate={isViewOpen ? contentAnimation.open : contentAnimation.close}
        transition={contentAnimation.transition}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AccordionView;
