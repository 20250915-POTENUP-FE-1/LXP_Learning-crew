import Link from "next/link";
import Badge from "../Badge/Badge";
import Thumbnail from "../Thumbnail/Thumbnail";
import {
  lectureCardStyle,
  titleStyle,
  subtitleStyle,
} from "./LectureCard.style";
import { LectureCardProps } from "./LectureCard.type";
import APP_ROUTES from "@/shared/constants/routes";

const LectureCard = ({
  lectureId,
  title,
  subtitle,
  tags,
  size,
  thumbnailImageUrl,
}: LectureCardProps) => {
  return (
    <Link href={`${APP_ROUTES.MAIN.LECTURE_DETAIL}/${lectureId}`}>
      <div className={lectureCardStyle({ size })}>
        <Thumbnail title={title} imageUrl={thumbnailImageUrl} size="medium" />

        <div className="flex flex-col gap-1 px-2 pb-2">
          <h2 className={titleStyle({ size })}>{title}</h2>
          <p className={subtitleStyle({ size })}>{subtitle}</p>

          <div className="flex gap-1 pt-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                content={tag.content}
                {...(tag.variant && { variant: tag.variant })}
                {...(tag.color && { color: tag.color })}
              />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LectureCard;
