import {
  lectureCardStyle,
  subtitleStyle,
  titleStyle,
} from "./LectureCard.style.ts";
import Thumbnail from "./Thumbnail.tsx";
import type { LectureCardProps } from "./LectureCard.type.ts";
import Chip from "../Chip/Chip.tsx";

const LectureCard = ({ title, subtitle, tags, size }: LectureCardProps) => {
  return (
    <div className={lectureCardStyle({ size })}>
      <Thumbnail />

      <div className="flex flex-col gap-1.5 px-2 pb-2">
        <h2 className={titleStyle({ size })}>{title}</h2>
        <p className={subtitleStyle({ size })}>{subtitle}</p>

        <div className="flex gap-1">
          {tags.map((tag, index) => (
            <Chip
              key={index}
              content={tag.content}
              {...(tag.variant && { variant: tag.variant })}
              {...(tag.color && { color: tag.color })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LectureCard;
