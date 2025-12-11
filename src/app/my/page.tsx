// src/app/my/page.tsx

// 방금 만든 컴포넌트를 가져옵니다.
import { MyCourses } from "@/features/my/ui/MyCourses/MyCourses";

export default function MyPage() {
  // 레이아웃(헤더, 사이드바, 푸터) 코드는 모두 제거했습니다!
  // MyLayout이 이미 그 역할을 하고 있기 때문입니다.

  return <MyCourses />;
}
