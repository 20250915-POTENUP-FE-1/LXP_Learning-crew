import { CurriculumProviderProps } from "./CurriculumProvider.type";
import Section from "./Section";

const CurriculumProvider = ({
  sections,
  mode = "view",
}: CurriculumProviderProps) => {
  return (
    <div className="flex flex-1 flex-col gap-8">
      {sections.map((section, index) => (
        <Section
          key={index}
          index={{ sectionIndex: index }}
          section={section}
          mode={mode}
        />
      ))}
    </div>
  );
};

export default CurriculumProvider;
