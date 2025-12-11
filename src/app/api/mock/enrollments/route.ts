// src/app/api/mock/enrollments/route.ts
import { NextResponse } from "next/server";

// 📝 Mock Data: 강의 설명(courseDescription)을 길게 추가했습니다.
const MOCK_DB = [
  {
    enrollmentId: 1,
    state: "ENROLLED",
    courseId: "c-101",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    totalProgress: 45,
    courseTitle: "실무에서 바로 쓰는 Next.js 14",
    // 🟢 확인 포인트: 여기에 설명이 들어있어야 합니다!
    courseDescription:
      "App Router부터 배포까지, 현업에서 사용하는 Next.js의 모든 기술을 깊이 있게 다룹니다. 서버 컴포넌트의 개념을 완벽하게 이해해보세요.",
    instructorName: "김토스",
    level: "MIDDLE",
    tags: [
      { tagId: 1, content: "Next.js", color: "blue" },
      { tagId: 2, content: "Frontend", color: "gray" },
    ],
  },
  {
    enrollmentId: 2,
    state: "ENROLLED",
    courseId: "c-102",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    totalProgress: 10,
    courseTitle: "디자이너를 위한 Figma 마스터",
    // 🟢 확인 포인트
    courseDescription:
      "오토레이아웃 정복부터 프로토타이핑, 개발자 핸드오프까지! 효율적인 디자인 시스템 구축 방법을 배워봅니다.",
    instructorName: "이디자인",
    level: "JUNIOR",
    tags: [{ tagId: 3, content: "Figma", color: "purple" }],
  },
  {
    enrollmentId: 3,
    state: "COMPLETED",
    courseId: "c-201",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
    totalProgress: 100,
    courseTitle: "TypeScript 핸드북",
    // 🟢 확인 포인트
    courseDescription:
      "타입스크립트의 기초 문법부터 제네릭, 유틸리티 타입 등 고급 기능까지 한 권으로 끝내는 실전 가이드입니다.",
    instructorName: "박타입",
    level: "SENIOR",
    tags: [{ tagId: 4, content: "TypeScript", color: "blue" }],
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const state = searchParams.get("state");

  await new Promise((resolve) => setTimeout(resolve, 300)); // 로딩 속도 살짝 빠르게 (0.3초)

  const filteredData = MOCK_DB.filter((item) => item.state === state);

  return NextResponse.json({
    content: filteredData,
    totalElements: filteredData.length,
    totalPage: 1,
    size: 6,
  });
}

export async function POST() {
  return NextResponse.json({ enrollmentId: Date.now(), state: "ENROLLED" });
}
