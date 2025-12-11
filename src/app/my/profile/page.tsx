// src/app/my/profile/page.tsx

// 1. features에서 만든 Profile 컴포넌트를 가져옵니다.
import { Profile } from "@/features/my/ui/Profile/Profile";

export default function ProfilePage() {
  // 🟢 핵심: 아무런 div도 감싸지 말고 컴포넌트만 딱 내보냅니다!
  // 부모 레이아웃(MyLayout)이 주는 넓은 공간을 그대로 쓰게 됩니다.
  return <Profile />;
}
