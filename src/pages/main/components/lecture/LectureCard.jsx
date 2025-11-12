import React from "react";
import Badge from "../../../../components/Badge";
import getCategoryColor from "../../utils/getCategoryColor";

const LectureCard = ({
  image,
  title,
  description,
  level,
  category,
  onClick,
}) => {
  const categoryStyle = getCategoryColor(category);

  return (
    <div
      className="flex h-[280px] w-[250px] cursor-pointer flex-col gap-2.5 overflow-hidden rounded-[10px] bg-[#ffffff] shadow-[0_1px_2px_rgba(0,0,0,0.12)]"
      onClick={onClick}
    >
      <img src={image} alt={title} className="h-40 w-full object-cover" />

      <div className="flex flex-1 flex-col justify-between px-2 pb-2">
        <div className="flex flex-col">
          <h3 className="text-[20px] font-semibold">{title}</h3>
          <p className="text-[11px] text-gray-600">{description}</p>
        </div>

        <div className="flex gap-1">
          <Badge text={level} variant="solid" />
          <Badge text={category} variant={categoryStyle} />
        </div>
      </div>
    </div>
  );
};

export default LectureCard;
