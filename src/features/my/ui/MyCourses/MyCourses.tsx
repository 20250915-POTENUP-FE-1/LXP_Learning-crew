// src/features/my/ui/MyCourses/MyCourses.tsx

"use client";

import React from "react";
import { useMyPage } from "@/features/my/hooks"; // 훅 경로 확인
import CourseCard from "@/shared/components/CourseCard/CourseCard";
// import { LectureCard } from "@/shared/components/LectureCard/LectureCard"; // LectureCard 경로 확인

export const MyCourses = () => {
  const { inProgressCourses, completedCourses, loading } = useMyPage();

  // 1. 데모 데이터 정의 (여기는 '데이터'니까 : 콜론을 씁니다)
  const demo = [1, 2, 3].map((i) => ({
    id: i,
    title: `실무 Next.js 프로젝트 ${i}`,
    description: "상세한 강의 설명이 들어갑니다.",
    thumbnailUrl: "/images/sample-course.jpg",
    level: "MIDDLE",
    // 🟢 수정됨: 여기는 데이터 영역이므로 tags: [...] 형태여야 합니다.
    // LectureCard가 content 속성을 원하므로 content로 넣어줍니다.
    tags: [
      { id: 1, content: "Next.js" },
      { id: 2, content: "FrontEnd" },
    ],
  }));

  if (loading) return <div>로딩 중...</div>;

  // 데이터가 있으면 쓰고, 없으면 데모 데이터를 씁니다.
  const inCourses = inProgressCourses?.length ? inProgressCourses : demo;
  const doneCourses = completedCourses?.length ? completedCourses : [demo[0]];

  return (
    <div className="w-full">
      {/* -------------------- 1. 수강중인 강의 -------------------- */}
      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-bold">수강중인 강의</h2>
        <p className="mb-6 text-sm text-gray-500">
          내 학습 현황과 활동 내역을 확인하세요.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {inCourses.map((course: any) => (
            <CourseCard
              key={course.id || course.enrollmentId}
              {...course}
              // 🟢 수정됨: 여기는 컴포넌트 영역이므로 tags={...} 형태가 맞습니다.
              // 데이터가 없을 때를 대비해 빈 배열([])을 넣어줍니다.
              tags={course.tags || []}
            />
          ))}
        </div>
      </section>

      {/* -------------------- 2. 완료된 강의 -------------------- */}
      <section>
        <h2 className="mb-2 text-2xl font-bold">완료된 강의</h2>
        <p className="mb-6 text-sm text-gray-500">
          지난 강의 내역을 확인 할 수 있습니다.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doneCourses.map((course: any) => (
            <CourseCard
              key={course.id || course.enrollmentId}
              {...course}
              // 🟢 수정됨: 안전장치 추가
              tags={course.tags || []}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
