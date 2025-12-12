import fetchGetCourses from "@/shared/apis/courses/fetchGetCourses";

const getCourses = async () => {
  const data = await fetchGetCourses();

  return data.contents;
};

export default getCourses;
