"use client";

import { ActionButton } from "@/shared/components/ActionButton";
import useAuth from "@/hooks/service/useAuth";
import Link from "next/link";
import { enrollCourse } from "@/shared/apis/enrollment";
import { useState } from "react";
import { useRouter } from "next/navigation";
import APP_ROUTES from "@/shared/constants/appRoutes";

interface CourseActionButtonProps {
  courseId: string;
  userId?: string;
}

const CourseActionButton: React.FC<CourseActionButtonProps> = ({
  courseId,
  userId,
}) => {
  const { user, isLoggedIn } = useAuth();
  const [isEnrolling, setIsEnrolling] = useState(false);
  const router = useRouter();

  // 로그인하지 않은 경우
  if (!isLoggedIn || !user) {
    return (
      <Link href="/login">
        <ActionButton
          width={140}
          size="large"
          variant="primaryBorder"
          value="로그인"
        />
      </Link>
    );
  }

  // 강의 생성자(instructor)인 경우 - 수정하기 버튼
  // userId는 instructorUserId를 의미
  if (userId && user.userId === userId) {
    return (
      <Link href={`/main/${courseId}/edit`}>
        <ActionButton
          width={140}
          size="large"
          variant="primaryBorder"
          value="수정하기"
        />
      </Link>
    );
  }

  // 수강 등록 핸들러
  const handleEnrollment = async () => {
    if (isEnrolling) return;

    try {
      setIsEnrolling(true);
      console.log("[CourseActionButton] Starting enrollment");
      console.log("[CourseActionButton] courseId type:", typeof courseId);
      console.log("[CourseActionButton] courseId value:", courseId);
      console.log("[CourseActionButton] courseId length:", courseId?.length);

      if (!courseId || typeof courseId !== "string") {
        throw new Error(`Invalid courseId: ${courseId}`);
      }

      const trimmedCourseId = courseId.trim();
      if (trimmedCourseId === "") {
        throw new Error("courseId cannot be empty");
      }

      console.log(
        "[CourseActionButton] Calling enrollCourse with:",
        trimmedCourseId,
      );
      const response = await enrollCourse(trimmedCourseId);

      console.log("[CourseActionButton] Enrollment successful:", response);

      alert(`수강 등록이 완료되었습니다!`);
      // 모달을 닫기 위해 이전 페이지로 이동한 뒤 마이페이지로 이동
      try {
        router.back();
      } catch {}
      setTimeout(() => {
        router.push(APP_ROUTES.MY);
      }, 300);
    } catch (error) {
      // console.error("[CourseActionButton] Error occurred:", error);
      // console.error(
      //   "[CourseActionButton] Error type:",
      //   error instanceof Error ? error.name : typeof error,
      // );
      // console.error(
      //   "[CourseActionButton] Error message:",
      //   error instanceof Error ? error.message : String(error),
      // );

      let errorMessage = "수강 등록 중 오류가 발생했습니다.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }

      alert(errorMessage);
    } finally {
      setIsEnrolling(false);
    }
  };

  // 일반 사용자(learner 또는 다른 instructor)인 경우 - 수강하기 버튼
  return (
    <ActionButton
      width={140}
      size="large"
      variant="primaryBorder"
      value={isEnrolling ? "등록 중..." : "수강하기"}
      onClick={handleEnrollment}
      disabled={isEnrolling}
    />
  );
};

export default CourseActionButton;
