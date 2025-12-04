import LectureList from "@/features/main/components/LectureList/LectureList";
import RecommendedLecture from "@/features/main/components/RecommendedLecture/RecommendedLecture";
import { ActionButton } from "@/shared/components/ActionButton";
import LectureCard from "@/shared/components/LectureCard/LectureCard";
import { LectureCardProps } from "@/shared/components/LectureCard/LectureCard.type";

const LECTURE_DUMMY = [
  {
    title: "리액트 기초부터 심화까지",
    subtitle: "초보자를 위한 리액트 강의",
    tags: [
      { content: "React", color: "blue" },
      { content: "JavaScript", color: "orange" },
    ],
    // thumbnailImageUrl: "",
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    // thumbnailImageUrl: "",
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    // thumbnailImageUrl: "",
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    // thumbnailImageUrl: "",
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    // thumbnailImageUrl: "",
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    // thumbnailImageUrl: "",
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    // thumbnailImageUrl: "",
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    // thumbnailImageUrl: "",
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    // thumbnailImageUrl: "",
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    // thumbnailImageUrl: "",
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    // thumbnailImageUrl: "",
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    // thumbnailImageUrl: "",
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    // thumbnailImageUrl: "",
  },
  {
    title: "타입스크립트 완전 정복",
    subtitle: "타입스크립트의 모든 것",
    tags: [
      { content: "TypeScript", color: "blue" },
      { content: "Programming", color: "green" },
    ],
    // thumbnailImageUrl: "",
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
