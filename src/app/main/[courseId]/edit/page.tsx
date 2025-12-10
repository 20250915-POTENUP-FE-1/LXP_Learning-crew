import CourseEditView from "@/features/main/ui/CourseEditView";
import getCourse from "@/shared/services/course/getCourse";

interface CourseEditPageProps {
  courseId: string;
}

const CourseEditPage = async ({ courseId }: CourseEditPageProps) => {
  const { course } = await getCourse(courseId);

  return <CourseEditView {...course} />;
};

export default CourseEditPage;
