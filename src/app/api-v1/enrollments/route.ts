import { NextRequest, NextResponse } from "next/server";
import type {
  EnrollCourseRequest,
  EnrollCourseResponse,
  EnrollmentSummaryResponse,
} from "@/shared/dtos/enrollment";
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

// GET: 사용자의 수강 등록 목록 조회
export const GET = async (request: NextRequest) => {
  try {
    const userId = await getUserIdFromRequest(request);

    // 해당 사용자의 모든 enrollment 조회
    const userEnrollments = MOCK_STORE.enrollments.filter(
      (e) => e.userId === userId,
    );

    console.log("[enrollments GET] Found enrollments:", userEnrollments);

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

    return NextResponse.json(enrollmentSummaries, { status: 200 });
  } catch (error) {
    console.error("[enrollments GET] Error:", error);

    let errorMessage = "수강 목록 조회 중 오류가 발생했습니다.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    // 사용자 ID 가져오기
    const userId = await getUserIdFromRequest(request);

    const body: EnrollCourseRequest = await request.json();
    let { courseId } = body;

    console.log("[enrollments POST] Received body:", body);
    console.log("[enrollments POST] userId:", userId);

    // courseId를 문자열로 변환 (숫자로 전달된 경우 대응)
    if (!courseId) {
      console.error("[enrollments POST] courseId is missing");
      return NextResponse.json(
        { error: "courseId is required" },
        { status: 400 },
      );
    }

    courseId = String(courseId).trim();

    // courseId 형식 검증
    if (!courseId || courseId === "" || courseId === "undefined") {
      console.error("[enrollments POST] Invalid courseId format:", courseId);
      return NextResponse.json(
        { error: "courseId must be a valid non-empty string" },
        { status: 400 },
      );
    }

    // 코스가 존재하는지 확인
    const course = MOCK_STORE.courses.find((c) => c.courseId === courseId);
    if (!course) {
      console.error("[enrollments POST] Course not found:", courseId);
      return NextResponse.json(
        { error: `Course with ID ${courseId} not found` },
        { status: 404 },
      );
    }

    // 이미 등록되어 있는지 확인 (선택적)
    const existingEnrollment = MOCK_STORE.enrollments.find(
      (e) => e.courseId === courseId && e.userId === userId,
    );

    if (existingEnrollment) {
      // console.error("[enrollments POST] Already enrolled:", courseId);
      return NextResponse.json(
        { error: "이미 수강 등록된 강의입니다." },
        { status: 409 },
      );
    }

    // 새로운 enrollment 생성
    const enrollmentId = `enrollment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const newEnrollment = {
      enrollmentId,
      courseId,
      userId, // 인증된 사용자 ID 사용
      state: "ENROLLED" as const,
      enrolledAt: new Date().toISOString(),
    };

    MOCK_STORE.enrollments.push(newEnrollment);
    console.log("[enrollments POST] New enrollment created:", newEnrollment);

    const response: EnrollCourseResponse = {
      enrollmentId,
      courseId,
      message: "수강 등록이 완료되었습니다.",
    };

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error("[enrollments POST] Error:", error);

    // 에러 메시지 추출
    let errorMessage = "수강 등록 중 오류가 발생했습니다.";
    if (error instanceof SyntaxError) {
      errorMessage = "요청 형식이 잘못되었습니다.";
      console.error("[enrollments POST] SyntaxError:", error.message);
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};
