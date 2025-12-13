// src/app/api/mock/user/me/route.ts
import { NextResponse } from "next/server";

// 📝 1. 가짜 유저 데이터 (DB 대용)
// 서버가 켜져있는 동안은 이 변수의 값이 변합니다! (태그 추가/삭제 가능)
let MOCK_USER_DB = {
  id: "test1234",
  name: "홍길동",
  email: "hong@learningcrew.com",
  role: "STUDENT",
  // 초기 관심 태그
  learnerLevel: "JUNIOR",
  tags: [
    { tagId: 10, content: "프로덕트매니저", color: "blue" },
    { tagId: 11, content: "PM", color: "blue" },
  ],
};

// 📡 2. [GET] 내 프로필 조회
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 300)); // 로딩 흉내
  return NextResponse.json(MOCK_USER_DB);
}

// 📡 3. [PATCH] 내 프로필 수정 (관심 태그 변경용)
export async function PATCH(request: Request) {
  const body = await request.json();

  // 요청 온 데이터로 DB 업데이트 (태그 변경 등)
  if (body.tags) {
    MOCK_USER_DB.tags = body.tags;
  }

  await new Promise((resolve) => setTimeout(resolve, 300));

  return NextResponse.json({
    message: "수정 성공",
    result: MOCK_USER_DB,
  });
}
