import API_ROUTES from "@/shared/constants/apiRoutes";
import { ResponseGetCourses } from "@/shared/dtos/course/courses.dto";

const fetchGetCourses = async (): Promise<ResponseGetCourses> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${API_ROUTES.COURSES.COURSE}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }

  return response.json();
};

export default fetchGetCourses;
