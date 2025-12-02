import {
  lectureCardStyle,
  subtitleStyle,
  titleStyle,
} from "./LectureCard.style.js";
import Thumbnail from "./Thumbnail.js";
import type { LectureCardProps } from "./LectureCard.type.js";
import Chip from "../Badge/Badge.js";

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
