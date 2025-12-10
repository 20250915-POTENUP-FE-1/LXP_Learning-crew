// // src/features/my/ui/Profile/Profile.tsx
// "use client";

// import InputField from "@/shared/components/InputField/InputField";
// import React from "react";

// export const Profile = () => {
//   return (
//     <div className="w-full">
//       <div className="mb-10">
//         <h1 className="mb-2 text-2xl font-bold text-gray-900">프로필</h1>
//         <p className="text-gray-500">나의 계정 정보를 볼 수 있어요</p>
//       </div>

//       {/* 1. 기본 정보 카드 */}
//       <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
//         <div className="mb-8 flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <span className="text-xl text-blue-600">👤</span>
//             <h2 className="text-lg font-bold text-gray-900">기본 정보</h2>
//           </div>
//           {/* 공통 Button 컴포넌트 사용 */}
//           <button className="rounded border border-red-200 px-3 py-1.5 text-xs font-medium text-red-500 transition-colors hover:bg-red-50">
//             회원 탈퇴
//           </button>
//         </div>

//         {/* 입력 필드 그룹 (공통 InputField 사용) */}
//         <div className="space-y-6">
//           <div>
//             <InputField
//               title="이름"
//               type="text"
//               defaultValue="홍길동"
//               readOnly
//             />
//           </div>

//           <div>
//             <InputField
//               title="이메일"
//               type="email"
//               defaultValue="hong@example.com"
//               disabled
//             />
//             <p className="mt-1 text-sm text-gray-400">
//               이메일은 변경할 수 없습니다
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 2. 강사 활동 카드 */}
//       <section className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
//         <div className="flex items-center gap-4">
//           <span className="text-2xl">📖</span>
//           <div>
//             <h2 className="text-lg font-bold text-gray-900">강사 활동 하기</h2>
//             <p className="mt-1 text-sm text-gray-500">
//               지금 강사로 등록하고 당신의 지식을 공유하세요!
//             </p>
//           </div>
//         </div>
//         {/* 공통 Button 컴포넌트 사용 */}

//         <button className="rounded border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50">
//           강사 등록 하러가기
//         </button>
//       </section>
//     </div>
//   );
// };

// src/features/my/ui/Profile/Profile.tsx

"use client";

import InputField from "@/shared/components/InputField/InputField";
import React, { useState } from "react";

// 💡 1. 더미 데이터: 카테고리별 추천 태그 목록
const TAG_DATA: Record<string, string[]> = {
  AI: ["ChatGPT", "LLM", "Midjourney", "Stable Diffusion", "Prompt", "AI 윤리"],
  개발: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "Frontend",
    "Backend",
    "DevOps",
  ],
  디자인: ["Figma", "UI/UX", "BX", "3D", "ProtoPie", "Design System"],
  서비스: [
    "프로덕트매니저",
    "PM",
    "PO",
    "서비스기획",
    "데이터분석",
    "GA4",
    "SQL",
  ],
};

const CATEGORIES = ["AI", "개발", "디자인", "서비스"];

export const Profile = () => {
  // 💡 2. 상태 관리 (State)
  // myTags: 회원이 선택한 관심 주제 (초기값: 가입 시 선택했던 태그들)
  const [myTags, setMyTags] = useState<string[]>(["프로덕트매니저", "PM"]);
  // activeTab: 현재 보고 있는 카테고리 탭
  const [activeTab, setActiveTab] = useState("개발");

  // ✅ 기능: 태그 삭제 (X 버튼 클릭 시)
  const removeTag = (tagToRemove: string) => {
    setMyTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  // ✅ 기능: 태그 추가 (아래 리스트 클릭 시)
  const addTag = (newTag: string) => {
    // 이미 선택된 태그라면 무시 (또는 삭제 로직으로 연결 가능)
    if (myTags.includes(newTag)) return;

    // 5개 제한 체크
    if (myTags.length >= 5) {
      alert("최대 5개까지 선택가능합니다");
      return;
    }

    setMyTags([...myTags, newTag]);
  };

  return (
    <div className="w-full">
      <div className="mb-10">
        <h1 className="mb-2 text-2xl font-bold text-gray-900">프로필</h1>
        <p className="text-gray-500">나의 계정 정보를 볼 수 있어요</p>
      </div>

      {/* 1. 기본 정보 카드 */}
      <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl text-blue-600">👤</span>
            <h2 className="text-lg font-bold text-gray-900">기본 정보</h2>
          </div>
          <button className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
            회원 탈퇴
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <InputField
              title="이름"
              type="text"
              defaultValue="홍길동"
              readOnly
            />
          </div>
          <div>
            <InputField
              title="이메일"
              type="email"
              defaultValue="hong@example.com"
              disabled
            />
            <p className="mt-1 text-sm text-gray-400">
              이메일은 변경할 수 없습니다
            </p>
          </div>
        </div>
      </section>

      {/* 2. 관심 주제 카드 (인터랙션 구현됨) */}
      <section className="mb-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <span className="text-xl text-blue-600">🏷️</span>
          <h2 className="text-lg font-bold text-gray-900">관심 주제</h2>
        </div>
        <p className="mb-6 text-gray-500">
          관심 있는 주제를 선택하면 맞춤 강좌를 추천받을 수 있습니다 *최대 5개
          설정 가능
        </p>

        {/* --- [A] 선택된 관심 주제 목록 (높이 고정 영역) --- */}
        {/* min-h-[52px]: 태그가 없어도 영역 높이를 유지하여 레이아웃 고정 */}
        <div className="mb-8 flex min-h-[52px] flex-wrap items-center gap-2 rounded-lg border border-dashed border-gray-100 bg-gray-50/50 p-2">
          {myTags.length === 0 && (
            <span className="px-2 text-sm text-gray-400">
              아래에서 관심 주제를 선택해주세요.
            </span>
          )}

          {myTags.map((tag) => (
            <button
              key={tag}
              onClick={() => removeTag(tag)}
              className="group inline-flex items-center gap-1 rounded-full border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
            >
              {tag}
              {/* X 아이콘: 평소엔 회색, 호버 시 빨간색 */}
              <span className="text-gray-400 group-hover:text-red-500">✕</span>
            </button>
          ))}
        </div>

        {/* --- [B] 카테고리 탭 --- */}
        <div className="mb-6 flex border-b border-gray-200">
          {CATEGORIES.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "font-bold text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab}
              {/* 활성화된 탭 하단 파란색 바 */}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 h-0.5 w-full translate-y-[1px] bg-blue-600"></div>
              )}
            </button>
          ))}
        </div>

        {/* --- [C] 선택 가능한 태그 목록 (탭에 따라 변경됨) --- */}
        <div className="flex flex-wrap gap-2">
          {TAG_DATA[activeTab]?.map((topic, index) => {
            // 이미 선택된 태그인지 확인
            const isSelected = myTags.includes(topic);

            return (
              <button
                key={index}
                onClick={() => (isSelected ? removeTag(topic) : addTag(topic))}
                className={`inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-sm transition ${
                  isSelected
                    ? "border-blue-500 bg-blue-50 font-medium text-blue-600" // 이미 선택됨
                    : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50" // 선택 안됨
                }`}
              >
                {topic}
                {isSelected ? (
                  // 선택된 상태면 파란색 체크 표시 등으로 변경 가능하나,
                  // 시안 통일성을 위해 X 표시 유지하되 색상만 다르게 처리
                  <span className="text-blue-500">✕</span>
                ) : (
                  // 선택 안 된 상태면 + 기호나 그냥 텍스트만 보여줘도 됨.
                  // 시안에 X가 있으므로 유지하되 회색 처리
                  <span className="rotate-45 transform text-gray-300">+</span>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. 강사 활동 카드 */}
      <section className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-4">
          <span className="text-2xl">📖</span>
          <div>
            <h2 className="text-lg font-bold text-gray-900">강사 활동 하기</h2>
            <p className="mt-1 text-sm text-gray-500">
              지금 강사로 등록하고 당신의 지식을 공유하세요!
            </p>
          </div>
        </div>
        <button className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
          강사 등록 하러가기
        </button>
      </section>
    </div>
  );
};
