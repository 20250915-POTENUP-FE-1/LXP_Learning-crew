// src/features/my/api/myApi.ts
import { EnrollmentSummary, UserProfile } from "../model/my.types";

// 실제 백엔드 주소 (나중에 환경변수로 관리)
const BASE_URL = "http://localhost:8080/api/v1";

// 1. 수강 중인 강의 목록 가져오기
// Endpoint: /enrollments?userId={id}&state=ENROLLED&page=1&size=3
export const getEnrolledCourses = async (
  userId: string,
): Promise<EnrollmentSummary[]> => {
  // 실제 연동 시 코드:
  // const response = await fetch(`${BASE_URL}/enrollments?userId=${userId}&state=ENROLLED&page=1&size=3`);
  // const data = await response.json();
  // return data.result;

  console.log(`[API] 수강 중인 강의 요청: userId=${userId}`);
  return []; // 지금은 빈 배열 리턴 (더미 데이터 연결 가능)
};

// 2. 완료된 강의 목록 가져오기
// Endpoint: /enrollments?userId={id}&state=COMPLETED&page=1&size=3
export const getCompletedCourses = async (
  userId: string,
): Promise<EnrollmentSummary[]> => {
  // 실제 연동 시 코드:
  // const response = await fetch(`${BASE_URL}/enrollments?userId=${userId}&state=COMPLETED&page=1&size=3`);

  console.log(`[API] 완료된 강의 요청: userId=${userId}`);
  return [];
};

// 3. 내 프로필 정보 가져오기
export const getUserProfile = async (userId: string): Promise<UserProfile> => {
  // 예: GET /users/{userId}/profile
  console.log(`[API] 프로필 요청: userId=${userId}`);

  // 임시 리턴
  return {
    id: userId,
    name: "홍길동",
    role: "STUDENT",
    tags: [
      { tagId: 1, content: "PM" },
      { tagId: 2, content: "Figma" },
    ],
  };
};

// 4. 강사 등록 요청하기 (강사 활동 시작)
export const registerInstructor = async (userId: string): Promise<boolean> => {
  // 예: POST /instructors/register
  // body: { userId: ... }
  console.log(`[API] 강사 등록 요청: userId=${userId}`);
  return true; // 성공 가정
};
