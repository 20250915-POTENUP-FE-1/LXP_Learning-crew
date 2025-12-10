import React from "react";
import { LectureListProps } from "../../model/page.type";

const LectureList = ({ name, lectures }: LectureListProps) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <p className="text-2xl font-bold">👍 추천 강의</p>
        <p className="text-xs text-[#545454]">
          요즘 {name}님에게 잘 맞을 것 같은 강의를 모아봤어요
        </p>
      </div>
    </div>
  );
};

export default LectureList;
