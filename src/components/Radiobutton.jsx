import React from "react";

const RadioButton = ({ id, name, value, checked, onChange, label }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      <label htmlFor={id} className="flex cursor-pointer items-center">
        <div
          className={`h-5 w-5 rounded-full border-2 transition duration-150 ease-in-out ${
            checked
              ? "relative border-blue-600 bg-white" // 선택 시: 파란색 테두리, 흰색 배경, 내부 점을 위한 relative
              : "border-gray-400 bg-white" // 미선택 시: 회색 테두리
          } `}
        >
          {/* 선택되었을 때만 표시되는 내부 파란색 점 */}
          {checked && (
            <div className="/* 중앙 정렬 */ /* 파란색 점 */ absolute top-1/2 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600" />
          )}
        </div>

        {/* 3. 레이블 텍스트 */}
        {label && <span className="ml-2 text-gray-700">{label}</span>}
      </label>
    </div>
  );
};

export default RadioButton;
