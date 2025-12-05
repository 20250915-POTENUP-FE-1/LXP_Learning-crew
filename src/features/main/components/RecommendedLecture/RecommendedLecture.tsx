import React from "react";
import { LectureListProps } from "../../model/page.type";
import LectureCard from "@/shared/components/LectureCard/LectureCard";
import Link from "next/link";
import APP_ROUTES from "@/shared/constants/routes";

const RecommendedLecture = ({ name, lectures }: LectureListProps) => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center gap-3">
        <p className="text-2xl font-bold">👍 추천 강의</p>
        <p className="text-xs text-[#3b3b3b]">
          요즘 <b>{name}</b>님에게 잘 맞을 것 같은 강의를 모아봤어요
        </p>
      </div>

      <div className="flex gap-8 overflow-x-scroll py-4">
        {lectures?.map((lecture, index) => (
          <Link
            key={index}
            href={`${APP_ROUTES.MAIN.LECTURE_DETAIL}/${lecture.lectureId}`}
          >
            <LectureCard
              key={index}
              lectureId={index} // FIXME: 임시 lectureId
              title={lecture.title}
              subtitle={lecture.subtitle}
              tags={lecture.tags}
              thumbnailImageUrl={lecture.thumbnailImageUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecommendedLecture;
