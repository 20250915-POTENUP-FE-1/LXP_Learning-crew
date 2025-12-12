import fetchGetCourse from "@/shared/apis/course/fetchGetCourse";

const getCourse = async (courseId: string) => {
  const data = await fetchGetCourse(courseId);

  return data;
};

export default getCourse;
