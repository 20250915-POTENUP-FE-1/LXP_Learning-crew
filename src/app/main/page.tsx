import CourseList from "@/features/main/ui/CourseList";
import RecommendedCourse from "@/features/main/ui/RecommendedCourse";
import { ComboBox } from "@/shared/components/ComboBox";

const MainPage = async () => {
  return (
    <div className="flex w-full flex-col gap-20">
      <ComboBox
        options={[
          { label: "option 1", value: "1" },
          { label: "option 2", value: "2" },
          { label: "option 3", value: "3" },
        ]}
      />
      <RecommendedCourse name="홍길동" />
      <CourseList name="홍길동" />
    </div>
  );
};

export default MainPage;
