import { NextRequest, NextResponse } from "next/server";
import type { EnrollmentSummaryResponse } from "@/shared/dtos/enrollment";
import MOCK_STORE from "@/app/mocks/store.mock";

/**
 * 요청 헤더에서 userId를 추출하는 함수
 * 실제 환경에서는 세션이나 JWT 토큰에서 가져와야 함
 */
const getUserIdFromRequest = async (request: NextRequest): Promise<string> => {
  try {
    // /api/auth/me 엔드포인트를 호출하여 사용자 정보 조회
    const cookieHeader = request.headers.get("cookie") || "";
    const baseUrl = request.nextUrl.origin;

    const authResponse = await fetch(`${baseUrl}/api/auth/me`, {
      method: "GET",
      headers: {
        cookie: cookieHeader,
      },
    });

    if (authResponse.ok) {
      const data = await authResponse.json();
      const userId = data.user?.userId || data.userId;
      if (userId) {
        console.log("[getUserIdFromRequest] Retrieved userId:", userId);
        return userId;
      }
    }
  } catch (error) {
    console.warn(
      "[getUserIdFromRequest] Failed to get userId from auth:",
      error,
    );
  }

  // 폴백: 임시 사용자 ID (개발 환경용)
  const tempUserId = "mock-user-id";
  console.log("[getUserIdFromRequest] Using fallback userId:", tempUserId);
  return tempUserId;
};

export const GET = async (request: NextRequest) => {
  try {
    const userId = await getUserIdFromRequest(request);

    // 해당 사용자의 모든 enrollment 조회
    const userEnrollments = MOCK_STORE.enrollments.filter(
      (e) => e.userId === userId,
    );

    console.log("[mypage/summary GET] Found enrollments:", userEnrollments);

    // enrollment와 course 정보를 병합
    const enrollmentSummaries: EnrollmentSummaryResponse[] = userEnrollments
      .map((enrollment) => {
        const course = MOCK_STORE.courses.find(
          (c) => c.courseId === enrollment.courseId,
        );

        if (!course) {
          return null; // 강의가 없으면 제외
        }

        return {
          id: enrollment.enrollmentId,
          courseId: enrollment.courseId,
          courseTitle: course.title,
          state: enrollment.state,
          enrolledAt: enrollment.enrolledAt,
          progress: 0, // 기본값으로 0% 설정
        };
      })
      .filter((item) => item !== null) as EnrollmentSummaryResponse[];

    // 상태별로 분류
    const recentEnrollments = enrollmentSummaries.filter(
      (e) => e.state === "ENROLLED",
    );
    const completedEnrollments = enrollmentSummaries.filter(
      (e) => e.state === "COMPLETED",
    );

    const response = {
      recentEnrollments,
      completedEnrollments,
    };

    console.log("[mypage/summary GET] Response:", response);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("[mypage/summary GET] Error:", error);

    let errorMessage = "마이페이지 요약 정보 조회 중 오류가 발생했습니다.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};
