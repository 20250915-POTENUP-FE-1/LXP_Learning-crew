import { LectureProps } from "./CurriculumProvider.type";
import { secondsToTimeUnit } from "./utils/time";
import TextField from "../TextField/TextField";

const Lecture = ({ lecture, index }: LectureProps) => {
  const { lectureTitle, duration } = lecture;
  const { sectionIndex, lectureIndex } = index;

  const { hours, minutes, seconds } = secondsToTimeUnit(duration);

  return (
    <div className="flex justify-between py-4">
      <TextField variant="body">{`${sectionIndex}-${lectureIndex}. ${lectureTitle}`}</TextField>

      <div className="text-gray-400">
        <TextField variant="caption">
          {`${hours}시간 ${minutes}분 ${seconds}초`}
        </TextField>
      </div>
    </div>
  );
};

export default Lecture;
