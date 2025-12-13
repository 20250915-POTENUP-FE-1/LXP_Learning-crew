// src/features/my/api/myApi.ts

import { EnrollmentSummary, EnrollmentApiResponse } from "../model/my.types";

const BASE_URL = "/api/mock";

// ==========================================
// 🔍 [조회] 내 강좌 목록 가져오기 (핵심 기능)
// ==========================================

// 🟢 에러의 원인: 이 함수가 없어서 난 오류였습니다!
export const getMyEnrollments = async (
  userId: string,
  state: "ENROLLED" | "COMPLETED",
  page: number = 1,
): Promise<EnrollmentSummary[]> => {
  try {
    // 💡 백엔드 요청대로 쿼리 스트링 구성
    const query = new URLSearchParams({
      userId: userId,
      state: state,
      page: page.toString(),
      size: "6", // 한 번에 불러올 카드 개수 (임의 설정)
    }).toString();

    console.log(`[API 요청] ${BASE_URL}/enrollments?${query}`); // 요청 주소 확인용 로그

    const response = await fetch(`${BASE_URL}/enrollments?${query}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error(`목록 조회 실패: ${response.status}`);
    }

    const data: EnrollmentApiResponse = await response.json();
    return data.content || [];
  } catch (error) {
    console.error("Fetch Enrollments Error:", error);
    return []; // 에러 나면 빈 배열 반환
  }
};

// ==========================================
// ⚡️ [액션] 등록 및 취소 (문서 기반 구현 완료)
// ==========================================

// 1. 수강 신청하기
export const enrollCourse = async (userId: string, courseId: string) => {
  const response = await fetch(`${BASE_URL}/enrollments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, courseId }),
  });
  if (!response.ok) throw new Error("수강 신청 실패");
  return await response.json();
};

// 2. 수강 취소하기
export const cancelEnrollment = async (
  enrollmentId: number | string,
  reason: string = "단순 변심",
) => {
  const response = await fetch(
    `${BASE_URL}/enrollments/${enrollmentId}/cancel`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reason }),
    },
  );
  if (!response.ok) throw new Error("수강 취소 실패");
  return await response.json();
};

// 3. 내 프로필 정보 가져오기
export const getUserProfile = async (userId: string): Promise<UserProfile> => {
  // userId는 Mock이라 안 쓰지만, 나중을 위해 받아둡니다.
  const response = await fetch(`${BASE_URL}/user/me`);
  if (!response.ok) throw new Error("프로필 조회 실패");
  return await response.json();
};

// 4. 관심 태그 업데이트하기 (저장)
export const updateUserTags = async (newTags: Tag[]) => {
  const response = await fetch(`${BASE_URL}/user/me`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tags: newTags }),
  });
  if (!response.ok) throw new Error("태그 수정 실패");
  return await response.json();
};
