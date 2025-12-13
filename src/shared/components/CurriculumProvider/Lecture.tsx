import { LectureProps } from "./CurriculumProvider.type";
import { secondsToTimeUnit } from "./utils/time";
import TextField from "../TextField/TextField";

const Lecture = ({ lecture, index, mode = "view" }: LectureProps) => {
  const { lectureTitle, duration } = lecture;
  const { sectionIndex, lectureIndex } = index;

  const { hours, minutes, seconds } = secondsToTimeUnit(duration);

  const lectureTitleComponent = (
    <TextField variant="body">{`${sectionIndex}-${lectureIndex}. ${lectureTitle}`}</TextField>
  );

  const lectureEditTitleComponent = (
    <>
      <div className="flex flex-1 gap-1">
        <TextField variant="body">{`${sectionIndex}-${lectureIndex}.`}</TextField>
        <input
          name={`section-${sectionIndex - 1}-lecture-${lectureIndex - 1}-title`}
          className="flex-1 outline-none"
          defaultValue={lectureTitle}
          placeholder="강의 제목"
        />
        <input
          type="hidden"
          name={`section-${sectionIndex - 1}-lecture-${lectureIndex - 1}-duration`}
          value={duration}
        />
      </div>
    </>
  );

  return (
    <div className="flex justify-between py-4">
      {mode === "view" ? lectureTitleComponent : lectureEditTitleComponent}

      <div className="flex text-gray-400">
        <TextField variant="caption">
          {`${hours}시간 ${minutes}분 ${seconds}초`}
        </TextField>
      </div>
    </div>
  );
};

export default Lecture;
