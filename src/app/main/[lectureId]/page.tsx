import Thumbnail from "@/shared/components/Thumbnail/Thumbnail";
import ThumbnailImage from "../../../../public/thumbnail.png";
import TagProvider from "@/shared/components/TagList/TagList";
import TextField from "@/shared/components/TextField/TextField";
import InformationCard from "@/shared/components/InformationCard/InformationCard";
import AccordionView from "@/shared/components/AccordionView/AccordionView";
import CurriculumProvider from "@/shared/components/CurriculumProvider/CurriculumProvider";

const LectureDetailPage = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-8">
        <Thumbnail
          title={"ㅁㄴㅇㄹ"}
          size={"large"}
          imageUrl={ThumbnailImage}
        />

        <div className="flex flex-col justify-between py-5">
          <div className="flex flex-col gap-2">
            <TextField variant="title" style="semibold">
              안녕하세요 자바와 자바스크립트의 차이를 알려드리겠습니다.
            </TextField>
            <TextField variant="caption" style="regular">
              초보자를 위한 리액트 강의입니다. 리액트의 기본 개념부터 심화
              내용까지 다룹니다.
            </TextField>
          </div>

          <TagProvider
            tags={[
              { content: "React", color: "blue" },
              { content: "JavaScript", color: "orange" },
              { content: "JavaScript", color: "orange" },
              { content: "JavaScript", color: "orange" },
              { content: "JavaScript", color: "orange" },
              { content: "JavaScript", color: "orange" },
            ]}
          />
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
          <CurriculumProvider
            sections={[
              {
                sectionTitle: "Section 1",
                lectures: [
                  { lectureTitle: "asdf", duration: 123 },
                  { lectureTitle: "asdfsd", duration: 12313 },
                ],
              },
              {
                sectionTitle: "Section 2",
                lectures: [
                  { lectureTitle: "asdfsdfsd", duration: 444 },
                  { lectureTitle: "adsfvvv", duration: 123 },
                  { lectureTitle: "avvvvasdvcxxx", duration: 555 },
                ],
              },
            ]}
          />
        </AccordionView>
      </div>
    </div>
  );
};

export default LectureDetailPage;
