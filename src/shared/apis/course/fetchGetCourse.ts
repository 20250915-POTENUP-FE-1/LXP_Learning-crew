import API_ROUTES from "@/shared/constants/apiRoutes";
import { CourseDto, ResponseGetCourse } from "@/shared/dtos/course.dto";
import { FetchFailedMessage } from "@/shared/errors/status";

const ROUTE = API_ROUTES.COURSE;

const fetchGetCourse = async (courseId: string): Promise<CourseDto> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${ROUTE}${courseId}`,
  );

  if (!response.ok) {
    FetchFailedMessage(`${ROUTE}${courseId}`);
  }

  return response.json();
};

export default fetchGetCourse;
