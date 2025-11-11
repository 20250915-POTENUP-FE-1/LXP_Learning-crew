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
      <div className="flex items-center space-x-4">
        <div className="border-b-2 border-indigo-600 px-1 pb-1 font-mono text-3xl">
          000000
        </div>
        <button className="rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition duration-150 hover:bg-indigo-700">
          코드 발급하기
        </button>
      </div>
    </div>
  );
};

export default CodeGenerate;
