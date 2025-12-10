import { useRef, useEffect, useState } from "react";

interface UnderlineStyle {
  left: string;
  width: string;
}

export function useTabs(defaultTab: string) {
  const [active, setActive] = useState(defaultTab);
  const activeRef = useRef<HTMLDivElement>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>(["예시"]);
  const [underlineStyle, setUnderlineStyle] = useState<UnderlineStyle>({
    left: "0px",
    width: "0px",
  });

  useEffect(() => {
    if (activeRef.current) {
      const { offsetLeft, offsetWidth } = activeRef.current;
      setUnderlineStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [active]);

  const handleRemoveTag = (tagToRemove: string) => {
    setSelectedTags((prev) => prev.filter((tag) => tag !== tagToRemove));
  };

  const handleAddTag = (tagToAdd: string) => {
    if (selectedTags.length >= 5) {
      alert("최대 5개까지만 선택 가능합니다.");
      return;
    }
    if (!selectedTags.includes(tagToAdd)) {
      setSelectedTags((prev) => [...prev, tagToAdd]);
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
  };
}

export function useTagSearch() {
  const [searchQuery, setSearchQuery] = useState("");

  return {
    searchQuery,
    setSearchQuery,
  };
}
