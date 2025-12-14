"use client";

import { useState } from "react";
import { CurriculumProviderProps } from "./CurriculumProvider.type";
import Section from "./Section";

const CurriculumProvider = ({
  sections,
  mode = "view",
}: CurriculumProviderProps) => {
  const [sectionList, setSectionList] = useState(sections);

  const addSection = () => {
    setSectionList((prev) => [
      ...prev,
      {
        sectionTitle: "",
        lectures: [
          {
            lectureTitle: "",
            duration: 0,
          },
        ],
      },
    ]);
  };

  const addLecture = (sectionIdx: number) => {
    setSectionList((prev) =>
      prev.map((sec, idx) =>
        idx === sectionIdx
          ? {
              ...sec,
              lectures: [...sec.lectures, { lectureTitle: "", duration: 0 }],
            }
          : sec,
      ),
    );
  };

  return (
    <div className="flex flex-1 flex-col gap-8">
      {sectionList.map((section, index) => (
        <Section
          key={index}
          index={{ sectionIndex: index }}
          section={section}
          mode={mode}
          onAddLecture={addLecture}
        />
      ))}
      {mode === "edit" && (
        <div className="flex justify-end">
          <button
            type="button"
            className="rounded-lg border border-neutral-900 px-4 py-2 text-sm"
            onClick={addSection}
          >
            섹션 추가
          </button>
        </div>
      )}
    </div>
  );
};

export default CurriculumProvider;
