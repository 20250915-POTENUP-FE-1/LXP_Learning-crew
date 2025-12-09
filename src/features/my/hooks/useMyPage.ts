import { useState, useEffect } from "react";
import type { Course } from "../model/my.types";

// 기존에 있었던 오류 라인 두 개를 제거합니다:
// import { useMyPage } from "@/features/my/hooks";
// import { useMyPage } from "@/features/my/hooks/useMyPage";

export const useMyPage = () => {
  const [inProgressCourses, setInProgressCourses] = useState<Course[]>([]);
  const [completedCourses, setCompletedCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Firebase에서 데이터 fetch
    // TODO: 구현
    setLoading(false);
  }, []);

  return { inProgressCourses, completedCourses, loading };
};
