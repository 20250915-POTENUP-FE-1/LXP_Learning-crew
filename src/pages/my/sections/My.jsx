import React from "react";

const statusData = [
  { value: "2,454", label: "수강중인 인원" },
  { value: "57시간", label: "총 강의 시간" },
  { value: "4.5", label: "평균 평점" },
];

const My = () => {
  return (
    <div>
      {/* 타이틀 영역 */}
      <h1 className="mb-2 text-xl font-semibold text-gray-900">학습 현황</h1>
      <p className="mb-8 text-gray-500">
        학습을 위한 관리 기능을 한 곳에서 확인해보세요
      </p>

      <div className="mb-12 grid grid-cols-3 gap-6">
        {statusData.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl border border-gray-100 bg-gray-100 p-4"
          >
            <p className="mb-1 text-2xl font-semibold text-gray-900">
              {item.value}
            </p>
            <p className="text-xs font-medium text-gray-400">{item.label}</p>
          </div>
        ))}
      </div>

      {/* 나의 강좌 영역 */}
      <h1 className="mb-2 text-xl font-semibold text-gray-900">나의 강좌</h1>
      <p className="mb-8 text-gray-500">현재 생성된 강좌들을 볼 수 있어요 </p>
    </div>
  );
};

export default My;
