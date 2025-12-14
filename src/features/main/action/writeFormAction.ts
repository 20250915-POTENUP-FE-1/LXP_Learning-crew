"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import API_ROUTES from "@/shared/constants/apiRoutes";
import type { CourseDto } from "@/shared/dtos";
import { getSession } from "@/app/api/auth/shared/sessionStore";

export async function writeCourseAction(
  formData: FormData,
): Promise<CourseDto> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  console.log("[writeCourseAction] accessToken:", accessToken);

  const session = getSession(accessToken);

  console.log("[writeCourseAction] session:", session);

  if (!session) {
    throw new Error("로그인이 필요합니다.");
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const instructorId = session.user.userId || session.user.email;
  const instructorUserId = session.user.userId;

  // sections 데이터 수집
  const sections: CourseDto["sections"] = [];
  let sectionIndex = 0;

  while (formData.has(`section-${sectionIndex}-title`)) {
    const sectionTitle = formData.get(
      `section-${sectionIndex}-title`,
    ) as string;
    const lectures: Array<{ lectureTitle: string; duration: number }> = [];
    let lectureIndex = 0;

    while (
      formData.has(`section-${sectionIndex}-lecture-${lectureIndex}-title`)
    ) {
      const lectureTitle = formData.get(
        `section-${sectionIndex}-lecture-${lectureIndex}-title`,
      ) as string;
      const duration = parseInt(
        formData.get(
          `section-${sectionIndex}-lecture-${lectureIndex}-duration`,
        ) as string,
        10,
      );

      lectures.push({ lectureTitle, duration });
      lectureIndex++;
    }

    sections.push({
      sectionTitle,
      lectures,
    });
    sectionIndex++;
  }

  // PUT 요청 body 구성
  const body: Partial<CourseDto> = {
    title,
    description,
    instructorUserId,
    sections,
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ROUTES.COURSES.COURSE}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: `access_token=${accessToken}`,
        },
        body: JSON.stringify(body),
        credentials: "include",
      },
    );

    if (!response.ok) {
      throw new Error("강의 등록에 실패했습니다.");
    }

    const courseData: CourseDto = await response.json();
    revalidatePath(`/main`);

    return courseData;
  } catch (error) {
    console.error("강의 등록 중 오류:", error);
    throw error;
  }
}
