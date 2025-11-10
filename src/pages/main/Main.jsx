import LectureCard from "./components/lecture/LectureCard";
import LectureList from "./components/lecture/LectureList";
import OnboardingMessage from "./components/onboarding/OnboardingMessage";

const Main = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="my-18">
        <OnboardingMessage name={"종원"} />
      </div>

      <LectureList>
        {Array.from({ length: 8 }).map((_, index) => (
          <LectureCard
            key={index}
            text="Sample Lecture"
            image="https://via.placeholder.com/250x140"
            title="Sample Lecture"
            description="This is a description of the sample lecture."
            level="초급"
            category="개발"
          />
        ))}
      </LectureList>
    </div>
  );
};

export default Main;
