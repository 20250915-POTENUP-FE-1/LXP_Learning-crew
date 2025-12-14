import CourseList from "@/features/main/ui/CourseList";
import OnboardingMessageWrapper from "@/features/main/ui/OnboardingMessageWrapper";
import RecommendedCourse from "@/features/main/ui/RecommendedCourse";
import { ComboBox } from "@/shared/components/ComboBox";
import { cookies, headers } from "next/headers";

const MainPage = async () => {
  let isLoggedIn = false;
  let displayName = "홍길동";

  try {
    const hdrs = await headers();
    const host = hdrs.get("host");
    const protocol = hdrs.get("x-forwarded-proto") ?? "http";
    const origin = host
      ? `${protocol}://${host}`
      : (process.env.NEXT_PUBLIC_API_URL ?? "");

    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    const res = await fetch(`${origin}/api/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...(cookieHeader ? { cookie: cookieHeader } : {}),
      },
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();
      isLoggedIn = true;
      displayName = data.user?.name ?? displayName;
    }

    console.log(isLoggedIn);
  } catch {
    // ignore and treat as not logged in
  }

  return (
    <div className="flex w-full flex-col items-center gap-20 py-5">
      <OnboardingMessageWrapper />
      {isLoggedIn && <RecommendedCourse name={displayName} />}
      <CourseList name={displayName} />
    </div>
  );
};

export default MainPage;
