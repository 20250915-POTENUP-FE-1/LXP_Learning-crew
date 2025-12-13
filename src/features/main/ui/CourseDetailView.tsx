import AccordionView from "@/shared/components/AccordionView/AccordionView";
import CurriculumProvider from "@/shared/components/CurriculumProvider/CurriculumProvider";
import InformationCard from "@/shared/components/InformationCard/InformationCard";
import TextField from "@/shared/components/TextField/TextField";
import Thumbnail from "@/shared/components/Thumbnail/Thumbnail";
import TagList from "@/shared/components/TagList/TagList";
import getCourse from "@/shared/services/course/getCourse";
import { ActionButton } from "@/shared/components/ActionButton";
import Link from "next/link";

interface CourseDetailViewProps {
  courseId: string;
}

const CourseDetailView = async ({ courseId }: CourseDetailViewProps) => {
  const { title, description, thumbnailImageUrl, tags, sections } =
    await getCourse(courseId);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex gap-4">
          <Thumbnail
            title={title}
            size={"large"}
            imageUrl={thumbnailImageUrl}
          />

          <div className="flex flex-col justify-between py-5">
            <div className="flex flex-col gap-2">
              <TextField variant="title" style="semibold">
                {title}
              </TextField>
              <div className="text-neutral-500">
                <TextField variant="caption" style="regular">
                  {description}
                </TextField>
              </div>
            </div>

            <TagList tags={tags} />
          </div>
        </div>

        {/* Information */}
        <div className="grid grid-cols-4 gap-4">
          <InformationCard title="2시간" description="강의시간" style="fill" />
          <InformationCard title="2시간" description="강의시간" style="fill" />
          <InformationCard title="0/20" description="시청 강의" style="fill" />
        </div>

        {/* Curriculum */}
        <div className="mt-2">
          <AccordionView
            title={"강좌 내용"}
            description="인기 강좌의 내용을 확인해보세요."
            isOpen
          >
            <CurriculumProvider sections={sections} />
          </AccordionView>
        </div>

        <div className="relative bottom-0 my-4 flex w-full justify-end gap-2">
          {/* Action Button */}
          <Link href={`/main/${courseId}/edit`}>
            <ActionButton
              width={140}
              size="large"
              variant="primaryBorder"
              value={"수강하기"}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailView;
