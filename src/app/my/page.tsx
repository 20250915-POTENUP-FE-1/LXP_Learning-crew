"use client";

// import { CourseCard } from "@/features/my/ui";
// ...existing code...
// ... 기존 코드 ...
import { useMyPage } from "@/features/my/hooks/useMyPage"; // <-- 추가되어야 할 줄에 '+' 기호가 붙음
// ... 기존 코드 ...
// ...existing code...

const MyPage = () => {
  const { inProgressCourses, completedCourses, loading } = useMyPage();

  if (loading) return <div>로딩 중...</div>;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 헤더 */}
      <header className="border-b border-gray-200 px-6 py-4">
        {/* 헤더 내용 */}
      </header>

      {/* 가운데 컨텐츠 영역: flex-1로 늘어나서 footer를 하단으로 밀어냄 */}
      <div className="flex flex-1">
        {/* 사이드바 */}
        <aside className="w-48 border-r border-gray-200 p-6">
          {/* 사이드바 내용 */}
        </aside>

        {/* 메인 콘텐츠 */}
        <main className="flex-1 overflow-auto p-8">
          {/* CourseCard 컴포넌트만 사용 */}
        </main>
      </div>

      {/* 푸터 */}
      <footer className="border-t border-gray-200 px-6 py-4 text-center text-sm text-gray-500">
        러닝크루 ©2025
      </footer>
    </div>
  );
};

export default MyPage;
