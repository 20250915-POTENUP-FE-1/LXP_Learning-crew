// src/features/my/hooks/useMyPage.ts
import { useState, useEffect } from "react";
import { getMyEnrollments } from "../api/myApi";
import { EnrollmentSummary } from "../model/my.types";

export const useMyPage = () => {
  // 상태 관리: 수강중, 완료, 로딩중, 에러
  const [inProgressCourses, setInProgressCourses] = useState<
    EnrollmentSummary[]
  >([]);
  const [completedCourses, setCompletedCourses] = useState<EnrollmentSummary[]>(
    [],
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // 1. 수강중인 강의 가져오기 (API 호출)
        const enrolled = await getMyEnrollments("test1234", "ENROLLED");
        setInProgressCourses(enrolled);

        // 2. 완료된 강의 가져오기 (API 호출)
        const completed = await getMyEnrollments("test1234", "COMPLETED");
        setCompletedCourses(completed);
      } catch (err) {
        console.error("데이터 로딩 실패:", err);
        setError("강의 목록을 불러오지 못했습니다.");
      } finally {
        setLoading(false); // 로딩 끝
      }
    };

    fetchData();
  }, []);

  return {
    inProgressCourses,
    completedCourses,
    loading,
    error,
  };
};
