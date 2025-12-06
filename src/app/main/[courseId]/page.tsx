import Thumbnail from "@/shared/components/Thumbnail/Thumbnail";
import ThumbnailImage from "../../../../public/thumbnail.png";
import TagProvider from "@/shared/components/TagList/TagList";
import TextField from "@/shared/components/TextField/TextField";
import InformationCard from "@/shared/components/InformationCard/InformationCard";
import AccordionView from "@/shared/components/AccordionView/AccordionView";
import CurriculumProvider from "@/shared/components/CurriculumProvider/CurriculumProvider";
import getCourse from "@/shared/services/course/getCourse";

interface CourseDetailPageProps {
  params: {
    courseId: string;
  };
}

const CourseDetailPage = async ({ params }: CourseDetailPageProps) => {
  const { courseId } = await params;

  const { course } = await getCourse(courseId);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-8">
        <Thumbnail
          title={course.title}
          size={"large"}
          imageUrl={ThumbnailImage}
        />

        <div className="flex flex-col justify-between py-5">
          <div className="flex flex-col gap-2">
            <TextField variant="title" style="semibold">
              {course.title}
            </TextField>
            <div className="text-neutral-500">
              <TextField variant="caption" style="regular">
                {course.description}
              </TextField>
            </div>
          </div>

          <TagProvider tags={course.tags} />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <InformationCard title="2시간" description="강의시간" style="fill" />
        <InformationCard title="2시간" description="강의시간" style="fill" />
      </div>

      <div className="mt-2">
        <AccordionView
          title={"강좌 내용"}
          description="인기 강좌의 내용을 확인해보세요."
          isOpen
        >
          <CurriculumProvider sections={course.sections} />
        </AccordionView>
      </div>
    </div>
  );
};

export default CourseDetailPage;
