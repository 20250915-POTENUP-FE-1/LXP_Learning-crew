import CourseList from "@/features/main/ui/CourseList";
import OnBoardingMessage from "@/features/main/ui/OnBoardingMessage";
import RecommendedCourse from "@/features/main/ui/RecommendedCourse";
import { ComboBox } from "@/shared/components/ComboBox";
import APP_ROUTES from "@/shared/constants/appRoutes";
import Link from "next/link";

const MainPage = async () => {
  return (
    <div className="flex w-full flex-col items-center gap-20 py-5">
      <Link href={`${APP_ROUTES.MAIN.COURSE_WRITE}`}>
        <OnBoardingMessage message="안녕하세요 🥳 {name}님 새로운 강의를 등록해보세요" />
      </Link>
      <RecommendedCourse name="홍길동" />
      <CourseList name="홍길동" />
    </div>
  );
};

export default MainPage;
