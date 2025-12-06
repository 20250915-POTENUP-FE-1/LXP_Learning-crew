import React from "react";
import { CourseListProps } from "../../model/page.type";
import CourseCard from "@/shared/components/CourseCard/CourseCard";
import Link from "next/link";
import APP_ROUTES from "@/shared/constants/appRoutes";

const CourseList = ({ name, courses }: CourseListProps) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <p className="text-2xl font-bold">📚 강의 목록</p>
        <p className="text-xs text-[#3b3b3b]">
          <b>{name}</b>님이 관심 있을만한 강의들을 천천히 둘러보세요
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8 py-4">
        {courses?.map((course, index) => (
          <Link
            key={index}
            href={`${APP_ROUTES.MAIN.COURSE_DETAIL}/${course.courseId}`}
          >
            <CourseCard
              key={index}
              courseId={course.courseId} // FIXME: 임시 lectureId
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

export default CourseList;
