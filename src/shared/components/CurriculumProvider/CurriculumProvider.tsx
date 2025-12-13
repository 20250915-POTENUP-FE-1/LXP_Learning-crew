"use client";

import { useState } from "react";
import { CurriculumProviderProps } from "./CurriculumProvider.type";
import Section from "./Section";

const CurriculumProvider = ({
  sections,
  mode = "view",
}: CurriculumProviderProps) => {
  const [sectionList, setSectionList] = useState(sections);

  return (
    <div className="flex flex-1 flex-col gap-8">
      {sectionList.map((section, index) => (
        <Section
          key={index}
          index={{ sectionIndex: index }}
          section={section}
          mode={mode}
        />
      ))}
      <button
        type="button"
        onClick={() => {
          setSectionList([
            ...sectionList,
            {
              sectionTitle: "",
              index: sectionList.length,
              lectures: [
                {
                  lectureTitle: "",
                  duration: 0,
                },
              ],
            },
          ]);
        }}
      >
        asdf
      </button>
    </div>
  );
};

export default CurriculumProvider;
