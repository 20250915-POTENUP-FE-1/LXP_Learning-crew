"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import API_ROUTES from "@/shared/constants/apiRoutes";
import type { CourseDto } from "@/shared/dtos";
import { getSession } from "@/app/api/auth/shared/sessionStore";
import getCourse from "@/shared/services/course/getCourse";

export async function editCourseAction(formData: FormData) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const session = getSession(accessToken);

  if (!session) {
    throw new Error("로그인이 필요합니다.");
  }

  const courseId = formData.get("courseId") as string;

  // 권한 확인: 코스 소유자인지 검증
  const course = await getCourse(courseId);
  if (course.instructorUserId !== session.user.userId) {
    throw new Error("수정 권한이 없습니다.");
  }

  const title = formData.get("title") as string;
  const description = formData.get("description") as string;

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
    sections,
  };

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}${API_ROUTES.COURSE}/${courseId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );

    if (!response.ok) {
      throw new Error("강의 수정에 실패했습니다.");
    }

    revalidatePath(`/main/${courseId}`);
    revalidatePath(`/main`);
  } catch (error) {
    console.error("강의 수정 중 오류:", error);
    throw error;
  }

  redirect(`/main/${courseId}`);
}
