import CourseList from "@/features/main/ui/CourseList";
import RecommendedCourse from "@/features/main/ui/RecommendedCourse";
import getRecommendCourses from "@/shared/services/courses/getRecommendedCourses";
import getCourses from "@/shared/services/courses/getCourses";

const MainPage = async () => {
  const recommendedCoursesData = await getRecommendCourses();
  // const coursesData = await getCourses();

  // console.log(coursesData);

  return (
    <div className="flex w-full flex-col gap-20">
      <RecommendedCourse name="홍길동" courses={recommendedCoursesData} />
      <CourseList name="홍길동" />
    </div>
  );
};

export default MainPage;
