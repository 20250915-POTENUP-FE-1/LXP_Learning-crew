// src/features/my/hooks/useMyPage.ts
import { useState, useEffect } from "react";
import { getMyEnrollments, getUserProfile } from "../api/myApi"; // getUserProfile 추가
import { EnrollmentSummary, UserProfile } from "../model/my.types";

export const useMyPage = () => {
  // 강의 목록 상태
  const [inProgressCourses, setInProgressCourses] = useState<
    EnrollmentSummary[]
  >([]);
  const [completedCourses, setCompletedCourses] = useState<EnrollmentSummary[]>(
    [],
  );

  // 🆕 프로필 상태 추가
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // 병렬로 동시에 요청 (속도 향상)
        const [enrolled, completed, userProfile] = await Promise.all([
          getMyEnrollments("test1234", "ENROLLED"),
          getMyEnrollments("test1234", "COMPLETED"),
          getUserProfile("test1234"), // 프로필 요청
        ]);

        setInProgressCourses(enrolled);
        setCompletedCourses(completed);
        setProfile(userProfile); // 프로필 저장
      } catch (err) {
        console.error("데이터 로딩 실패:", err);
        setError("데이터를 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    inProgressCourses,
    completedCourses,
    profile, // 리턴에 추가
    loading,
    error,
  };
};
