import { CurriculumProviderProps } from "./CurriculumProvider.type";
import Section from "./Section";

const CurriculumProvider = ({ sections }: CurriculumProviderProps) => {
  return (
    <div className="flex flex-1 flex-col gap-8">
      {sections.map((section, index) => (
        <Section
          key={index}
          index={{ sectionIndex: index }}
          section={section}
        />
      ))}
    </div>
  );
};

export default CurriculumProvider;
