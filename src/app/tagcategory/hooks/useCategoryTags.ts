import { useEffect, useMemo, useState } from "react";

interface ApiTag {
  tagId: number;
  content: string;
  color: string;
  variant: string;
  state: "ACTIVE" | "INACTIVE";
}

interface ApiCategory {
  tagCategoryId: number;
  name: string;
  state: "ACTIVE" | "INACTIVE";
  tags: ApiTag[];
}

interface TagGroup {
  title: string;
  tags: string[];
}

interface UseCategoryTagsResult {
  groups: TagGroup[];
  allGroups: TagGroup[];
  loading: boolean;
  error: string | null;
}

export function useCategoryTags(active: string): UseCategoryTagsResult {
  const [categories, setCategories] = useState<ApiCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchTags = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch("/api/auth/tag", { cache: "no-store" });
        if (!res.ok) {
          throw new Error(`태그 API 오류: ${res.status}`);
        }

        const json = await res.json();
        const content = json?.data?.content as ApiCategory[] | undefined;
        if (!content || !Array.isArray(content)) {
          throw new Error("태그 데이터가 올바르지 않습니다.");
        }

        if (mounted) {
          setCategories(content);
        }
      } catch (e) {
        const message = e instanceof Error ? e.message : "알 수 없는 오류";
        if (mounted) {
          setError(message);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchTags();

    return () => {
      mounted = false;
    };
  }, []);

  const toGroup = (category: ApiCategory): TagGroup => ({
    title: category.name,
    tags: category.tags
      .filter((tag) => tag.state === "ACTIVE")
      .map((tag) => tag.content),
  });

  const groups = useMemo(() => {
    return categories
      .filter((category) => category.name === active)
      .map(toGroup);
  }, [active, categories]);

  const allGroups = useMemo(() => categories.map(toGroup), [categories]);

  return {
    groups,
    allGroups,
    loading,
    error,
  };
}
