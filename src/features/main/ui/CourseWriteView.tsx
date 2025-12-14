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
import { writeCourseAction } from "../action/writeFormAction";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CourseWriteView = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const courseData = await writeCourseAction(formData);

      // POST 완료 후 해당 course의 modal로 이동
      router.push(`/main/${courseData.courseId}`);
    } catch (error) {
      console.error("강의 등록 실패:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex max-w-full flex-col">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex gap-4">
            <Thumbnail title={""} size={"large"} imageUrl={null} />

            <div className="flex min-w-0 flex-1 flex-col justify-between py-5">
              <div className="flex flex-col gap-2">
                <InputField name="title" variant="edit" placeholder="제목" />

                <TextAreaField
                  name="description"
                  variant="edit"
                  rows={5}
                  placeholder="설명"
                />
              </div>

              <TagList tags={[]} />
            </div>
          </div>

          {/* Information */}
          <div className="grid grid-cols-4 gap-4">
            {/* <InformationCard
              title="2시간"
              description="강의시간"
              style="fill"
            />
            <InformationCard
              title="2시간"
              description="강의시간"
              style="fill"
            /> */}
          </div>

          {/* Curriculum */}
          <div className="mt-2">
            <AccordionView
              title={"강좌 내용"}
              description="인기 강좌의 내용을 확인해보세요."
              isOpen
            >
              <CurriculumProvider sections={[]} mode="edit" />
            </AccordionView>
          </div>

          <div className="my-4 flex w-full justify-end gap-2">
            <ActionButton
              width={140}
              size="large"
              variant="primaryBorder"
              type="submit"
              value={isLoading ? "등록 중..." : "강의등록"}
              disabled={isLoading}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default CourseWriteView;
