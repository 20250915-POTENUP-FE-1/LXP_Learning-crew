import fetchGetRecommendCourses from "@/shared/apis/courses/fetchGetRecommendCourses";

const getRecommendedCourses = async () => {
  const data = await fetchGetRecommendCourses();

  return data.courses;
};

export default getRecommendedCourses;
