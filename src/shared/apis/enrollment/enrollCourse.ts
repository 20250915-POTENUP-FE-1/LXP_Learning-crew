import type {
  EnrollCourseRequest,
  EnrollCourseResponse,
} from "@/shared/dtos/enrollment";

const enrollCourse = async (
  courseId: string,
): Promise<EnrollCourseResponse> => {
  // courseId 검증
  if (!courseId || typeof courseId !== "string" || courseId.trim() === "") {
    throw new Error(`Invalid courseId: ${courseId}`);
  }

  const trimmedCourseId = courseId.trim();

  const requestBody: EnrollCourseRequest = {
    courseId: trimmedCourseId,
  };

  console.log("[enrollCourse] Request:", {
    url: `/api-v1/enrollments`,
    body: requestBody,
  });

  try {
    const response = await fetch(`/api-v1/enrollments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // 쿠키 포함하여 인증 정보 전송
      body: JSON.stringify(requestBody),
    });

    console.log("[enrollCourse] Response status:", response.status);

    if (!response.ok) {
      let errorMessage = `수강 등록 실패: ${response.statusText}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.message || errorData.error || errorMessage;
      } catch (e) {
        console.error("[enrollCourse] Error parsing error response:", e);
      }
      throw new Error(errorMessage);
    }

    const data: EnrollCourseResponse = await response.json();
    console.log("[enrollCourse] Success response:", data);
    return data;
  } catch (error) {
    console.error("[enrollCourse] Fetch error:", error);
    throw error;
  }
};

export default enrollCourse;
