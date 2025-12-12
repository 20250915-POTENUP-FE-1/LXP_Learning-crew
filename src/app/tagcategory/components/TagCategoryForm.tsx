"use client";

import { ActionButton } from "@/shared/components/ActionButton";
import { useTagCategoryForm } from "../hooks/useTagCategoryFrom";

type TagCategoryFormProps = {
  formData: FormData | null;
  onPrevious?: () => void;
};

export default function TagCategoryForm({
  formData,
  onPrevious,
}: TagCategoryFormProps) {
  const {
    selectedTags,
    handleAddTag,
    handleRemoveTag,
    active,
    setActive,
    activeRef,
    underlineStyle,
    searchQuery,
    setSearchQuery,
    displayGroups,
    tabs,
    isButtonEnabled,
    handleSubmit,
  } = useTagCategoryForm(formData || undefined);

  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-[782px]">
        <div className="flex items-center gap-2">
          <svg
            className="mb-4"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_866_13295)">
              <path
                d="M10.4882 2.15533C10.1757 1.84274 9.75183 1.66709 9.30984 1.66699H3.33317C2.89114 1.66699 2.46722 1.84259 2.15466 2.15515C1.8421 2.46771 1.6665 2.89163 1.6665 3.33366V9.31033C1.6666 9.75232 1.84225 10.1762 2.15484 10.4887L9.40817 17.742C9.78693 18.1184 10.2992 18.3296 10.8332 18.3296C11.3671 18.3296 11.8794 18.1184 12.2582 17.742L17.7415 12.2587C18.1179 11.8799 18.3291 11.3676 18.3291 10.8337C18.3291 10.2997 18.1179 9.78742 17.7415 9.40866L10.4882 2.15533Z"
                stroke="#155DFC"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.25016 6.66634C6.48028 6.66634 6.66683 6.47979 6.66683 6.24967C6.66683 6.01956 6.48028 5.83301 6.25016 5.83301C6.02004 5.83301 5.8335 6.01956 5.8335 6.24967C5.8335 6.47979 6.02004 6.66634 6.25016 6.66634Z"
                fill="#155DFC"
                stroke="#155DFC"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_866_13295">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h1 className="mb-4 text-base text-black">관심 주제</h1>
        </div>
        <p className="mb-4 text-base text-gray-700">
          관심 있는 주제를 선택하면 맞춤 강좌를 추천받을 수 있습니다 *최소
          3개에서 최대 5개 설정가능
        </p>

        <div className="mb-6 flex min-h-[38px] flex-row flex-wrap gap-2">
          {selectedTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleRemoveTag(tag)}
              className="flex h-[38px] cursor-pointer items-center gap-2 rounded-full border px-4 hover:bg-gray-200"
              aria-label={`${tag} 태그 제거`}
            >
              <span>{tag}</span>
              <span className="text-sm font-bold">✖</span>
            </button>
          ))}
        </div>

        <div className="w-full pb-4">
          <div
            className="relative flex gap-8 pb-2 pl-1 text-base text-gray-600"
            role="tablist"
          >
            {tabs.map((tab) => (
              <div
                key={tab}
                ref={active === tab ? activeRef : null}
                onClick={() => setActive(tab)}
                className={`cursor-pointer pb-2 transition-colors ${
                  active === tab
                    ? "font-semibold text-blue-600"
                    : "hover:text-black"
                }`}
                role="tab"
                aria-selected={active === tab}
                tabIndex={active === tab ? 0 : -1}
              >
                {tab}
              </div>
            ))}

            <div
              className="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
              }}
            />
          </div>
        </div>

        <form className="mb-4 flex justify-center">
          <div className="flex w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-[42px] w-full rounded-lg border border-gray-300 p-4"
              placeholder="관심있는 태그를 검색해보세요."
            />
          </div>
        </form>

        <div className="mb-6 h-[280px] overflow-y-auto">
          {displayGroups.map((group) => (
            <div key={group.title} className="mb-6">
              <h2 className="mb-3 text-lg font-semibold">{group.title}</h2>

              <div className="flex min-h-[38px] flex-wrap gap-2">
                {group.tags.length > 0
                  ? group.tags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleAddTag(tag)}
                        disabled={selectedTags.includes(tag)}
                        className={`flex h-[38px] cursor-pointer items-center rounded-full border px-4 transition-colors ${
                          selectedTags.includes(tag)
                            ? "border-blue-300 bg-blue-100 text-blue-600"
                            : "hover:bg-gray-200"
                        }`}
                        aria-label={`${tag} 태그 추가`}
                      >
                        {tag}
                      </button>
                    ))
                  : null}
              </div>
            </div>
          ))}

          {displayGroups.length === 0 && (
            <div className="flex h-[280px] items-center justify-center gap-3">
              <p className="text-center text-gray-500">검색 결과가 없습니다.</p>
            </div>
          )}
        </div>

        <div className="flex w-full flex-col gap-4">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!isButtonEnabled}
            className={`h-9 w-full rounded-lg text-base font-medium transition-colors ${
              isButtonEnabled
                ? "cursor-pointer bg-blue-600 text-white hover:bg-blue-700"
                : "cursor-not-allowed bg-gray-300 text-gray-500"
            } `}
          >
            가입하기
          </button>
          <ActionButton
            value="이전"
            variant="secondary"
            size="medium"
            type="button"
            onClick={onPrevious}
          />
        </div>
      </div>
    </div>
  );
}
