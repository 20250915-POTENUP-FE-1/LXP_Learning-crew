"use client";

import Lecture from "./Lecture";
import { SectionProps } from "./CurriculumProvider.type";
import TextField from "../TextField/TextField";
import { motion } from "motion/react";
import AccordionView from "../AccordionView/AccordionView";

const Section = ({ section, index }: SectionProps) => {
  const { sectionTitle, lectures } = section;
  const { sectionIndex } = index;

  const sectionTitleComponent = (
    <div className="flex flex-1 cursor-pointer select-none items-center justify-between rounded-xl border border-neutral-900 p-3">
      <TextField variant="body" style="semibold">
        {`${sectionIndex + 1}. ${sectionTitle}`}
      </TextField>
    </div>
  );

  return (
    // <motion.div className="flex flex-col gap-2">
    <AccordionView title={sectionTitleComponent} isOpen>
      {/* Lecture List */}

      <div className="flex-1 gap-2 rounded-xl border border-[#D9D9D9] px-4 py-1">
        {lectures.map((lecture, index) => (
          <Lecture
            key={index}
            lecture={lecture}
            index={{
              sectionIndex: sectionIndex + 1,
              lectureIndex: index + 1,
            }}
          />
        ))}
      </div>
    </AccordionView>
    // </motion.div>
  );
};

export default Section;
