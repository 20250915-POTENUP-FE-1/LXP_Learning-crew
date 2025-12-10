import getCourse from "@/shared/services/course/getCourse";
import CourseView from "@/features/main/ui/CourseDetailView";

interface CourseDetailPageProps {
  params: Promise<{
    courseId: string;
  }>;
}

const CourseDetailPage = async ({ params }: CourseDetailPageProps) => {
  const { courseId } = await params;

  const { course } = await getCourse(courseId);

  return (
    <CourseView
      instructorName={""}
      thumbnailUrl={null}
      level={undefined}
      {...course}
    />
  );
};

export default CourseDetailPage;
