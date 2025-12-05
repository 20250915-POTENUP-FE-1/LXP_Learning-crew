import React from "react";
import { LectureListProps } from "../../model/page.type";
import LectureCard from "@/shared/components/LectureCard/LectureCard";

const LectureList = ({ name, lectures }: LectureListProps) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <p className="text-2xl font-bold">📚 강의 목록</p>
        <p className="text-xs text-[#3b3b3b]">
          <b>{name}</b>님이 관심 있을만한 강의들을 천천히 둘러보세요
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8 py-4">
        {lectures?.map((lecture, index) => (
          <LectureCard
            key={index}
            lectureId={index} // FIXME: 임시 lectureId
            title={lecture.title}
            subtitle={lecture.subtitle}
            tags={lecture.tags}
            thumbnailImageUrl={lecture.thumbnailImageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default LectureList;
