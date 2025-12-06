import API_ROUTES, { ApiRoutes } from "@/shared/constants/apiRoutes";
import { ResponseGetRecommendedCourses } from "@/shared/dtos/courses.dto";
import { FetchFailedMessage } from "@/shared/errors/status";

const ROUTE = API_ROUTES.COURSES.RECOMMENDED;

const fetchGetRecommendCourses =
  async (): Promise<ResponseGetRecommendedCourses> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${ROUTE}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 204) {
      return {
        courses: [],
      };
    }

    if (!response.ok) {
      FetchFailedMessage(ROUTE);
    }

    return response.json() as Promise<ResponseGetRecommendedCourses>;
  };

export default fetchGetRecommendCourses;
