// src/features/my/ui/MyCourses/MyCourses.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useMyPage } from "@/features/my/hooks/useMyPage"; // 🟢 훅 가져오기
import LectureCard from "@/shared/components/LectureCard/LectureCard";

const DEFAULT_THUMBNAIL =
  "https://via.placeholder.com/320x180.png?text=Learning+Crew";

export const MyCourses = () => {
  // 🟢 훅 사용: 이제 여기서 데이터를 받아옵니다!
  const { inProgressCourses, completedCourses, loading, error } = useMyPage();

  // 로딩 중일 때 보여줄 UI (스켈레톤 대신 간단히 텍스트로)
  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        강의 목록을 불러오는 중입니다...
      </div>
    );
  }

  // 에러 났을 때 보여줄 UI
  if (error) {
    return <div className="p-10 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="w-full">
      {/* -------------------- 1. 수강중인 강의 목록 -------------------- */}
      <section className="mb-12">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">수강중인 강의</h2>
        <p className="mb-6 text-sm text-gray-500">
          내 학습 현황과 활동 내역을 확인하세요.
        </p>

        {/* 강의가 없을 때 안내 문구 */}
        {inProgressCourses.length === 0 ? (
          <div className="rounded-lg border border-dashed bg-gray-50 py-10 text-center text-gray-400">
            수강 중인 강의가 없습니다. 새로운 강의를 신청해보세요!
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inProgressCourses.map((course) => (
              <Link
                key={course.enrollmentId}
                href={`/courses/${course.courseId}`}
                className="group block"
              >
                <LectureCard
                  title={course.courseTitle}
                  subtitle={course.courseDescription || "강의 설명이 없습니다."}
                  imageUrl={course.thumbnailUrl || DEFAULT_THUMBNAIL}
                  // 🛡️ 방어 코드: 태그가 없으면 빈 배열
                  tags={course.tags || []}
                />
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* -------------------- 2. 완료된 강의 목록 -------------------- */}
      <section>
        <h2 className="mb-2 text-2xl font-bold text-gray-900">완료된 강의</h2>
        <p className="mb-6 text-sm text-gray-500">
          지난 강의 내역을 확인 할 수 있습니다.
        </p>

        {completedCourses.length === 0 ? (
          <div className="rounded-lg border border-dashed bg-gray-50 py-10 text-center text-gray-400">
            아직 완료된 강의가 없습니다. 힘내세요! 💪
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {completedCourses.map((course) => (
              <Link
                key={course.enrollmentId}
                href={`/courses/${course.courseId}`}
                className="group block"
              >
                <LectureCard
                  title={course.courseTitle}
                  description={course.courseDescription || ""}
                  level={course.level}
                  thumbnailUrl={course.thumbnailUrl || DEFAULT_THUMBNAIL}
                  tags={course.tags || []}
                />
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
