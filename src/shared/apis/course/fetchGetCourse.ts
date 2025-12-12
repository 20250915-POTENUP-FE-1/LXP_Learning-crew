import API_ROUTES from "@/shared/constants/apiRoutes";
import type { CourseDto, ResponseGetCourse } from "@/shared/dtos";
import { FetchFailedMessage } from "@/shared/errors/status";

const ROUTE = API_ROUTES.COURSE;

const fetchGetCourse = async (courseId: string): Promise<CourseDto> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${ROUTE}${courseId}`,
  );

  if (!response.ok) {
    FetchFailedMessage(`${ROUTE}${courseId}`);
  }

  const json: ResponseGetCourse = await response.json();
  return json.course;
};

export default fetchGetCourse;
