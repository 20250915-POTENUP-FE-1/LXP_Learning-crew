import React from "react";

const CodeGenerate = () => {
  return (
    <div>
      {/* 타이틀 및 설명 영역 */}
      <div>
        <h1 className="mb-2 text-xl font-semibold text-gray-900">
          강사 코드 발급
        </h1>
        <p className="mb-8 text-gray-500">
          가입에 필요한 코드를 발급 가능해요.
        </p>
      </div>

      {/* 코드 표시 및 버튼 영역 */}

      <div className="flex w-60 items-center justify-center space-x-4 rounded-2xl bg-[#f8f8f8] p-4">
        <div className="text-xl font-semibold text-[#005EEB]">000000</div>

        <button className="rounded-lg border border-[#B2B2B2] bg-white px-4 py-2 text-xs font-semibold text-black">
          코드 발급하기
        </button>
      </div>
    </div>
  );
};

export default CodeGenerate;
