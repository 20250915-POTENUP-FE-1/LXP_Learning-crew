import { useState, useEffect, useCallback } from "react";
import type { EnrollmentSummary } from "../model/my.types";

const API_SUMMARY = "/api/v1/mypage/summary";

export const useMyPage = () => {
  const [inProgressCourses, setInProgressCourses] = useState<
    EnrollmentSummary[]
  >([]);
  const [completedCourses, setCompletedCourses] = useState<EnrollmentSummary[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSummary = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(API_SUMMARY, { credentials: "include" });
      if (!res.ok) throw new Error("summary fetch failed");
      const data = await res.json();

      // 예상 응답: { recentEnrollments: EnrollmentSummary[], completedEnrollments: EnrollmentSummary[] }
      setInProgressCourses(data.recentEnrollments || []);
      setCompletedCourses(data.completedEnrollments || []);
    } catch (e: any) {
      // 실패 시 데모 데이터로 폴백
      console.warn("useMyPage: fetch failed, using demo data", e?.message ?? e);
      const demo = [1, 2, 3].map((i) => ({
        enrollmentId: String(i),
        title: `Title1/SB ${i}`,
        description: "샘플 설명 샘플 설명 샘플 설명",
        thumbnail: "/images/sample-course.jpg",
        progress: 20 * i,
      }));
      setInProgressCourses(demo);
      setCompletedCourses([demo[0]]);
      setError(e?.message ?? String(e));
    } finally {
      setLoading(false);
    }
  }, []);

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
