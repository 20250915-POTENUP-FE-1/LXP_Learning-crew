// src/app/my/profile/page.tsx

// 1. features에서 만든 Profile 컴포넌트를 가져옵니다.
import { Profile } from "@/features/my/ui/Profile/Profile";

// 서버에서 사용자 정보를 받아와 클라이언트 컴포넌트로 넘겨줍니다.
export default async function ProfilePage() {
  // 개발용 mock API에서 프로필을 가져옵니다.
  const res = await fetch("http://localhost:3000/api/mock/user/me", {
    cache: "no-store",
  });

  // 실패 시 널을 전달하여 클라이언트 컴포넌트가 로딩/오류 처리하게 합니다.
  let data = null;
  try {
    if (res.ok) data = await res.json();
  } catch (e) {
    // noop
  }

  return <Profile data={data} />;
}
