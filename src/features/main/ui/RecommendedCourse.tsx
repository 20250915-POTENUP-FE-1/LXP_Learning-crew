import { CourseListProps } from "../model/props.type";
import CourseCard from "@/shared/components/CourseCard/CourseCard";
import Link from "next/link";
import APP_ROUTES from "@/shared/constants/appRoutes";
import getRecommendedCourses from "@/shared/services/courses/getRecommendedCourses";

const RecommendedCourse = async ({ name }: CourseListProps) => {
  const courses = await getRecommendedCourses();

  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center gap-3">
        <p className="text-2xl font-bold">👍 추천 강의</p>
        <p className="text-xs text-[#3b3b3b]">
          요즘 <b>{name}</b>님에게 잘 맞을 것 같은 강의를 모아봤어요
        </p>
      </div>

      <div className="flex gap-8 overflow-x-scroll py-4">
        {courses?.map((course, index) => (
          <Link
            key={index}
            href={`${APP_ROUTES.MAIN.COURSE_DETAIL}/${course.courseId}`}
          >
            <CourseCard
              key={index}
              courseId={course.courseId}
              title={course.title}
              description={course.description}
              tags={course.tags}
              thumbnailImageUrl={course.thumbnailImageUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCourse;
