"use client";

import { useCategoryTags } from "./useCategoryTags";
import { useRouter } from "next/navigation";
import { useTabs, useTagSearch } from "./useFormData";
import registerAction from "@/app/register/hooks/action";

const tabs = ["AI", "개발", "디자인", "서비스"];

export function useTagCategoryForm(formData?: FormData) {
  const router = useRouter();
  const {
    selectedTags,
    handleAddTag,
    handleRemoveTag,
    active,
    setActive,
    activeRef,
    underlineStyle,
    isButtonEnabled,
  } = useTabs("AI");

  const { groups: currentTabGroups } = useCategoryTags(active);
  const { searchQuery, setSearchQuery } = useTagSearch();

  const aiGroups = useCategoryTags("AI").groups;
  const devGroups = useCategoryTags("개발").groups;
  const designGroups = useCategoryTags("디자인").groups;
  const serviceGroups = useCategoryTags("서비스").groups;

  const allTabsGroups = [
    ...aiGroups,
    ...devGroups,
    ...designGroups,
    ...serviceGroups,
  ];

  const filteredGroups = searchQuery
    ? allTabsGroups
        .map((group) => ({
          ...group,
          tags: group.tags.filter((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((group) => group.tags.length > 0)
    : [];

  const displayGroups = searchQuery
    ? [
        {
          title: "검색 결과",
          tags: filteredGroups.flatMap((group) => group.tags),
        },
      ]
    : currentTabGroups;

  const handleSubmit = async () => {
    if (!isButtonEnabled) {
      alert("최소 4개의 태그를 선택해주세요.");
      return;
    }

    if (!formData) {
      console.error("회원가입 정보가 없습니다.");
      alert("회원가입 정보를 다시 입력해주세요.");
      return;
    }

    try {
      const result = await registerAction(formData, selectedTags);

      if (!result.success) {
        alert(result.message || "회원가입 실패");
        return;
      }

      alert("회원가입이 완료되었습니다!");
      router.push("/login");
    } catch (error) {
      console.error("태그 제출 오류:", error);
      const msg =
        error instanceof Error
          ? error.message
          : "회원가입 중 오류가 발생했습니다.";
      alert(msg);
    }
  };

  return {
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
  };
}
