"use client";

import AccordionView from "@/shared/components/AccordionView/AccordionView";
import { ActionButton } from "@/shared/components/ActionButton";
import { CourseCardProps } from "@/shared/components/CourseCard/CourseCard.type";
import CurriculumProvider from "@/shared/components/CurriculumProvider/CurriculumProvider";
import { CurriculumProviderProps } from "@/shared/components/CurriculumProvider/CurriculumProvider.type";
import InformationCard from "@/shared/components/InformationCard/InformationCard";
import InputField from "@/shared/components/InputField/InputField";
import TagList from "@/shared/components/TagList/TagList";
import TextAreaField from "@/shared/components/TextAreaField/TextAreaField";
import Thumbnail from "@/shared/components/Thumbnail/Thumbnail";
import { editCourseAction } from "../action/editFormAction";

const CourseEditView = ({
  courseId,
  title,
  thumbnailImageUrl,
  description,
  tags,
  sections,
}: CourseCardProps & CurriculumProviderProps) => {
  return (
    <div className="flex max-w-full flex-col">
      <form action={editCourseAction}>
        <input type="hidden" name="courseId" value={courseId} />
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex gap-4">
            <Thumbnail
              title={title}
              size={"large"}
              imageUrl={thumbnailImageUrl}
            />

            <div className="flex min-w-0 flex-1 flex-col justify-between py-5">
              <div className="flex flex-col gap-2">
                <InputField
                  name="title"
                  variant="edit"
                  defaultValue={title}
                  placeholder="제목"
                />

                <TextAreaField
                  name="description"
                  variant="edit"
                  rows={5}
                  placeholder="설명"
                  defaultValue={description}
                />
              </div>

              <TagList tags={tags} />
            </div>
          </div>

          {/* Information */}
          <div className="grid grid-cols-4 gap-4">
            <InformationCard
              title="2시간"
              description="강의시간"
              style="fill"
            />
            <InformationCard
              title="2시간"
              description="강의시간"
              style="fill"
            />
          </div>

          {/* Curriculum */}
          <div className="mt-2">
            <AccordionView
              title={"강좌 내용"}
              description="인기 강좌의 내용을 확인해보세요."
              isOpen
            >
              <CurriculumProvider sections={sections} mode="edit" />
            </AccordionView>
          </div>

          <div className="my-4 flex w-full justify-end gap-2">
            <ActionButton
              width={140}
              size="large"
              variant="primaryBorder"
              type="submit"
              value={"수정완료"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CourseEditView;
