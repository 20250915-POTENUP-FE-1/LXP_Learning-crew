import { useState, useEffect, useCallback } from "react";
import type { EnrollmentSummary } from "../model/my.types";
import type { EnrollmentSummaryResponse } from "@/shared/dtos/enrollment";
import MOCK_STORE from "@/app/mocks/store.mock";
import useAuth from "@/hooks/service/useAuth";

const API_SUMMARY = "/api/v1/mypage/summary";

export const useMyPage = () => {
  const { user } = useAuth(); // 사용자 정보 가져오기
  const [inProgressCourses, setInProgressCourses] = useState<
    EnrollmentSummary[]
  >([]);
  const [completedCourses, setCompletedCourses] = useState<EnrollmentSummary[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // EnrollmentSummaryResponse를 EnrollmentSummary로 변환하는 함수
  const mapToEnrollmentSummary = (
    enrollment: EnrollmentSummaryResponse,
    course?: any,
  ): EnrollmentSummary => {
    return {
      enrollmentId: enrollment.id,
      courseId: enrollment.courseId,
      title: enrollment.courseTitle,
      description: course?.description || "강의 설명",
      thumbnail: course?.thumbnailImageUrl,
      progress: enrollment.progress || 0,
    };
  };

  const fetchSummary = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_SUMMARY, { credentials: "include" });
      if (!res.ok) throw new Error("summary fetch failed");
      const data = await res.json();

      console.log("[useMyPage] API response:", data);

      // API에서 받은 데이터 처리
      const recentEnrollments = (data.recentEnrollments || []).map(
        (enrollment: EnrollmentSummaryResponse) => {
          // 강의 정보 조회
          const course = MOCK_STORE.courses.find(
            (c) => c.courseId === enrollment.courseId,
          );
          return mapToEnrollmentSummary(enrollment, course);
        },
      );

      const completedEnrollments = (data.completedEnrollments || []).map(
        (enrollment: EnrollmentSummaryResponse) => {
          // 강의 정보 조회
          const course = MOCK_STORE.courses.find(
            (c) => c.courseId === enrollment.courseId,
          );
          return mapToEnrollmentSummary(enrollment, course);
        },
      );

      setInProgressCourses(recentEnrollments);
      setCompletedCourses(completedEnrollments);
    } catch (e: any) {
      // 실패 시 현재 enrollments 스토어에서 데이터 직접 조회
      console.warn(
        "useMyPage: fetch failed, using mock store data",
        e?.message ?? e,
      );

      // useAuth에서 가져온 사용자 ID 사용, 없으면 기본값 사용
      const userId = user?.userId || "mock-user-id";
      console.log("[useMyPage] Using userId:", userId);

      const userEnrollments = MOCK_STORE.enrollments.filter(
        (e) => e.userId === userId,
      );

      const enrolledCourses = userEnrollments
        .filter((e) => e.state === "ENROLLED")
        .map((enrollment) => {
          const course = MOCK_STORE.courses.find(
            (c) => c.courseId === enrollment.courseId,
          );
          return {
            enrollmentId: enrollment.enrollmentId,
            courseId: enrollment.courseId,
            title: course?.title || "Unknown Course",
            description: course?.description || "강의 설명",
            thumbnail: course?.thumbnailImageUrl || undefined,
            progress: 0,
          };
        });

      const completedCourses = userEnrollments
        .filter((e) => e.state === "COMPLETED")
        .map((enrollment) => {
          const course = MOCK_STORE.courses.find(
            (c) => c.courseId === enrollment.courseId,
          );
          return {
            enrollmentId: enrollment.enrollmentId,
            courseId: enrollment.courseId,
            title: course?.title || "Unknown Course",
            description: course?.description || "강의 설명",
            thumbnail: course?.thumbnailImageUrl || undefined,
            progress: 100,
          };
        });

      setInProgressCourses(enrolledCourses);
      setCompletedCourses(completedCourses);
      setError(e?.message ?? String(e));
    } finally {
      setLoading(false);
    }
  }, [user?.userId]);

  useEffect(() => {
    void fetchSummary();
  }, [fetchSummary]);

  return {
    inProgressCourses,
    completedCourses,
    loading,
    error,
    refetch: fetchSummary,
  };
};
