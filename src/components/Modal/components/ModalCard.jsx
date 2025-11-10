import React from "react";

const ModalCard = () => {
  return (
    <div className="mt-4 grid grid-cols-4 gap-1 text-left text-sm text-gray-600">
      <div className="flex h-[65px] w-[182px] flex-col items-start justify-center rounded-md bg-gray-100 pl-4 text-[20px] font-bold">
        2,457
        <span className="text-[10px] font-normal">수강중인 인원</span>
      </div>
      <div className="flex h-[65px] w-[182px] flex-col items-start justify-center rounded-md bg-gray-100 pl-4 text-[20px] font-bold">
        2시간
        <span className="text-[10px] font-normal">강의시간</span>
      </div>
      <div className="flex h-[65px] w-[182px] flex-col items-start justify-center rounded-md bg-gray-100 pl-4 text-[20px] font-bold">
        4.5
        <span className="text-[10px] font-normal">평점</span>
      </div>
      <div className="flex h-[65px] w-[182px] flex-col items-start justify-center rounded-md bg-gray-100 pl-4 text-[20px] font-bold">
        초급
        <span className="text-[10px] font-normal">난이도</span>
      </div>
    </div>
  );
};

export default ModalCard;
