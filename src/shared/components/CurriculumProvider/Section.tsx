import Lecture from "./Lecture";
import { SectionProps } from "./CurriculumProvider.type";
import TextField from "../TextField/TextField";
import AccordionView from "../AccordionView/AccordionView";

const Section = ({
  section,
  index,
  mode = "view",
  onAddLecture,
}: SectionProps) => {
  const { sectionTitle, lectures } = section;
  const { sectionIndex } = index;

  const sectionTitleComponent = (
    <div className="flex flex-1 cursor-pointer select-none items-center justify-between rounded-xl border border-neutral-900 p-3">
      <TextField variant="body" style="semibold">
        {`${sectionIndex + 1}. ${sectionTitle}`}
      </TextField>
    </div>
  );

  const sectionEditTitleComponent = (
    <div className="flex w-full select-none items-center justify-between gap-2 rounded-xl border border-neutral-900 p-3">
      <TextField variant="body" style="semibold">
        {`${sectionIndex + 1}.`}
      </TextField>

      <input
        name={`section-${sectionIndex}-title`}
        className="flex-1 outline-none"
        defaultValue={sectionTitle}
        placeholder="섹션 제목"
      />
    </div>
  );

  return (
    <AccordionView
      title={
        mode === "view" ? sectionTitleComponent : sectionEditTitleComponent
      }
      isOpen
      isEnabled={mode === "view" ? true : false}
    >
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
            mode={mode}
          />
        ))}
        {mode === "edit" && (
          <div className="flex justify-end py-2">
            <button
              type="button"
              className="rounded-md border border-neutral-900 px-3 py-1 text-xs"
              onClick={() => onAddLecture?.(sectionIndex)}
            >
              강의 추가
            </button>
          </div>
        )}
      </div>
    </AccordionView>
  );
};

export default Section;
