"use server";

import { revalidatePath } from "next/cache";
import API_ROUTES from "@/shared/constants/apiRoutes";
import type { CourseDto } from "@/shared/dtos";

export async function writeCourseAction(
  formData: FormData,
): Promise<CourseDto> {
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
      `${process.env.NEXT_PUBLIC_API_URL}${API_ROUTES.COURSES.COURSE}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
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
