// src/features/my/ui/MyCourses/MyCourses.tsx

"use client";

import React from "react";
import { useMyPage } from "@/features/my/hooks"; // 훅 경로 확인
import CourseCard from "@/shared/components/CourseCard/CourseCard";

export const MyCourses = () => {
  const { inProgressCourses, completedCourses, loading, error } = useMyPage();

  if (loading) return <div className="py-8 text-center">로딩 중...</div>;

  if (error) {
    console.warn("MyCourses: Error occurred:", error);
  }

  // 수강중인 강의가 없으면 빈 상태 표시
  const hasInProgressCourses =
    inProgressCourses && inProgressCourses.length > 0;
  const hasCompletedCourses = completedCourses && completedCourses.length > 0;

  return (
    <div className="w-full">
      {/* -------------------- 1. 수강중인 강의 -------------------- */}
      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-bold">수강중인 강의</h2>
        <p className="mb-6 text-sm text-gray-500">
          내 학습 현황과 활동 내역을 확인하세요.
        </p>

        {hasInProgressCourses ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inProgressCourses.map((course) => (
              <CourseCard
                key={course.enrollmentId}
                courseId={course.courseId || ""}
                title={course.title}
                description={course.description ?? ""}
                thumbnailImageUrl={course.thumbnail ?? ""}
                tags={[]}
              />
            ))}
          </div>
        ) : (
          <div className="py-8 text-center text-gray-400">
            수강중인 강의가 없습니다.
          </div>
        )}
      </section>

      {/* -------------------- 2. 완료된 강의 -------------------- */}
      <section>
        <h2 className="mb-2 text-2xl font-bold">완료된 강의</h2>
        <p className="mb-6 text-sm text-gray-500">
          지난 강의 내역을 확인 할 수 있습니다.
        </p>

        {hasCompletedCourses ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {completedCourses.map((course) => (
              <CourseCard
                key={course.enrollmentId}
                courseId={course.courseId || ""}
                title={course.title}
                description={course.description ?? ""}
                thumbnailImageUrl={course.thumbnail ?? ""}
                tags={[]}
              />
            ))}
          </div>
        ) : (
          <div className="py-8 text-center text-gray-400">
            완료된 강의가 없습니다.
          </div>
        )}
      </section>
    </div>
  );
};
