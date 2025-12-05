import Thumbnail from "@/shared/components/Thumbnail/Thumbnail";
import ThumbnailImage from "../../../../public/thumbnail.png";
import TagProvider from "@/shared/components/TagList/TagList";
import TextField from "@/shared/components/TextField/TextField";

const LectureDetailPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-8">
        <Thumbnail
          title={"ㅁㄴㅇㄹ"}
          size={"large"}
          imageUrl={ThumbnailImage}
        />

        <div className="flex flex-col justify-between py-5">
          <div className="flex flex-col gap-2">
            <TextField variant="title" style="semibold">
              asdf
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
    </div>
  );
};

export default LectureDetailPage;
