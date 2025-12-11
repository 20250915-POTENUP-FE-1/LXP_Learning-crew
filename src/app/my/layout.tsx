// src/app/my/layout.tsx
import { Sidebar } from "@/features/my/ui/MyLayout/Sidebar";

export default function MyLayout({ children }: { children: React.ReactNode }) {
  return (
    // 🟢 1. max-w-[1200px] mx-auto: 컨텐츠를 화면 중앙에 모아줍니다.
    // 🟢 2. min-h-screen: 높이를 꽉 채웁니다.
    <div className="mx-auto flex min-h-screen w-full max-w-[1200px]">
      {/* 🟢 3. aside 태그 사용: 시맨틱 태그 적용 및 w-64로 너비 고정 */}
      {/* hidden md:block: 모바일에서는 숨기고, PC에서는 보이게 처리 */}
      <aside className="hidden w-64 flex-shrink-0 md:block">
        <Sidebar />
      </aside>

      {/* 메인 컨텐츠 */}
      <main className="flex-1 bg-white p-10">{children}</main>
    </div>
  );
}
