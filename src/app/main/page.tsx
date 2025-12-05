import LectureList from "@/features/main/components/LectureList/LectureList";
import RecommendedLecture from "@/features/main/components/RecommendedLecture/RecommendedLecture";
import { ActionButton } from "@/shared/components/ActionButton";
import LectureCard from "@/shared/components/LectureCard/LectureCard";
import { LectureCardProps } from "@/shared/components/LectureCard/LectureCard.type";
import Link from "next/link";
import ThumbnailImage from "../../../public/thumbnail.png";

const LECTURE_DUMMY = [
  {
    title: "리액트 기초부터 심화까지",
    subtitle: "초보자를 위한 리액트 강의",
    tags: [
      { content: "React", color: "blue" },
      { content: "JavaScript", color: "orange" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "자바스크립트 완전 정복",
    subtitle: "기초 문법부터 ES 최신 문법까지 배우는 과정",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "타입스크립트 실전 마스터",
    subtitle: "현업에서 바로 쓰는 타입 시스템 이해",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "리액트 컴포넌트 아키텍처",
    subtitle: "재사용성과 확장성을 높이는 컴포넌트 설계",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "Next.js로 만드는 현대 웹",
    subtitle: "SSR·SSG·ISR을 활용한 실전 웹 개발",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "리액트 훅 완벽 가이드",
    subtitle: "useState부터 커스텀 훅까지 실전 활용",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "프론트엔드 상태관리 총정리",
    subtitle: "Redux, Zustand, Jotai를 비교하며 배우기",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "웹 성능 최적화 실전편",
    subtitle: "Lighthouse 점수 올리는 테크닉",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "CSS 깊이 이해하기",
    subtitle: "레이아웃부터 최신 CSS 기능까지",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "Tailwind CSS 실전 활용",
    subtitle: "유틸리티 기반 스타일링 완전 공략",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "React Query로 데이터 관리하기",
    subtitle: "서버 상태 관리의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "Node.js 백엔드 기본기",
    subtitle: "API 서버 구축을 위한 필수 개념",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "프론트엔드를 위한 Git & GitHub",
    subtitle: "협업과 버전 관리를 위한 실전 가이드",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "REST API 설계 원칙",
    subtitle: "표준을 지키는 API 구조 만들기",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "GraphQL 기초부터 활용까지",
    subtitle: "쿼리 언어 기반 API 구축",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "프론트엔드 테스트 입문",
    subtitle: "Jest·RTL로 안정적인 UI 만들기",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "실용적인 리액트 애니메이션",
    subtitle: "Framer Motion으로 인터랙션 구현",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "Next.js 앱 라우터 완전 이해",
    subtitle: "라우팅·레이아웃·서버 액션까지",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "웹 접근성 기본기",
    subtitle: "모든 사용자를 위한 UI 구축",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "Firebase로 만드는 간단한 서비스",
    subtitle: "Auth·DB·Storage를 활용한 올인원 개발",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
  {
    title: "프론트엔드 배포 전략",
    subtitle: "Vercel·Netlify·AWS로 배포 자동화하기",
    tags: [
      { content: "Java", color: "orange" },
      { content: "Programming", color: "green" },
    ],
    thumbnailImageUrl: ThumbnailImage,
  },
] as LectureCardProps[];

const MainPage = () => {
  return (
    <div className="flex w-full flex-col gap-20">
      <RecommendedLecture name="홍길동" lectures={LECTURE_DUMMY} />
      <LectureList name="홍길동" lectures={LECTURE_DUMMY} />
    </div>
  );
};

export default MainPage;
