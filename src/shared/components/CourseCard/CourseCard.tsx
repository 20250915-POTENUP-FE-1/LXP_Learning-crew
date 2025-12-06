import Badge from "../Badge/Badge";
import Thumbnail from "../Thumbnail/Thumbnail";
import { courseCardStyle, titleStyle, subtitleStyle } from "./CourseCard.style";
import { CourseCardProps } from "./CourseCard.type";

const CourseCard = ({
  courseId,
  title,
  subtitle,
  tags,
  size,
  thumbnailImageUrl,
}: CourseCardProps) => {
  return (
    <div className={courseCardStyle({ size })}>
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
  );
};

export default CourseCard;
