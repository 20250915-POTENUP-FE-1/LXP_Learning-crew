// src/features/my/model/my.types.ts

// 1. 태그 정보 (백엔드 TagResponse)
export interface Tag {
  tagId: number;
  content: string;
  color?: string; // 백엔드에서 컬러값을 줍니다!
  variant?: string;
}

// 2. 수강 이력 요약 정보 (백엔드 EnrollmentSummaryResponse)
export interface EnrollmentSummary {
  enrollmentId: number; // 수강 고유 번호
  state: "ENROLLED" | "COMPLETED" | "CANCELLED";
  courseId: string;
  thumbnailUrl: string; // 썸네일
  totalProgress: number; // 진도율
  courseTitle: string; // 강의 제목
  courseDescription: string;
  instructorName: string;
  level: "JUNIOR" | "MIDDLE" | "SENIOR" | "EXPERT";
  tags: Tag[]; // 태그 리스트
}

// 3. API 응답 껍데기 (페이징 포함)
export interface EnrollmentApiResponse {
  content: EnrollmentSummary[]; // 실제 강의 리스트는 여기에 들어있음
  totalElements: number;
  totalPage: number;
  size: number;
}
