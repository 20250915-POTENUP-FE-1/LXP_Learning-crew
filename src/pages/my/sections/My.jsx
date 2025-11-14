import React from "react";
import useCountUp from "../hooks/useCountUp";

const statusData = [
  { value: 2454, label: "수강중인 인원", unit: "" },
  { value: 57, label: "총 강의 시간", unit: "시간" },
  { value: 4.5, label: "평균 평점", unit: "" },
];

const My = () => {
  const count1 = useCountUp(statusData[0].value, 1500);
  const count2 = useCountUp(statusData[1].value, 1500);
  const count3 = useCountUp(Math.ceil(statusData[2].value), 1500); // 소수점은 올림하여 전달

  // 3. 💡 데이터 조합: 렌더링 직전에 카운트된 값을 삽입합니다.
  const displayValues = [
    { ...statusData[0], displayValue: count1 },
    {
      ...statusData[1],
      displayValue: count2,
    },
    {
      ...statusData[2],
      // 💥 소수점 처리: 최종 값에 도달했거나 초과하면 실제 소수점 값을 사용합니다.
      displayValue:
        count3 >= statusData[2].value
          ? statusData[2].value.toFixed(1)
          : count3.toFixed(1),
    },
  ];

  return (
    <div>
      {/* 타이틀 영역 */}
      <h1 className="mb-2 text-xl font-semibold text-gray-900">학습 현황</h1>
      <p className="mb-8 text-gray-500">
        학습을 위한 관리 기능을 한 곳에서 확인해보세요
      </p>

      <div className="mb-12 grid grid-cols-3 gap-6">
        {displayValues.map(
          (
            item,
            index, // 💥 수정된 배열 사용
          ) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-100 bg-gray-100 p-4"
            >
              <p className="mb-1 text-2xl font-semibold text-gray-900">
                {/* toLocaleString()은 숫자형에서만 가능하므로, 문자열로 변환 후 사용합니다. */}
                {item.displayValue.toLocaleString()}
                {item.unit && <span className="ml-1">{item.unit}</span>}
              </p>
              <p className="text-xs font-medium text-gray-400">{item.label}</p>
            </div>
          ),
        )}
      </div>

      {/* 나의 강좌 영역 */}
      <h1 className="mb-2 text-xl font-semibold text-gray-900">나의 강좌</h1>
      <p className="mb-8 text-gray-500">현재 생성된 강좌들을 볼 수 있어요 </p>
    </div>
  );
};

export default My;
