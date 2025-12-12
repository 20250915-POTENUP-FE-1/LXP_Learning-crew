import React from "react";
import TextField from "../TextField/TextField";
import { InformationCardProps } from "./InformationCard.type";
import { informationCardStyle } from "./InformationCard.style";

const InformationCard = ({
  title,
  description,
  style = "fit",
}: InformationCardProps) => {
  return (
    <div className={informationCardStyle({ style })}>
      <TextField variant="heading" style="semibold">
        {title}
      </TextField>

      <div className="text-[#757575]">
        <TextField variant="caption">{description}</TextField>
      </div>
    </div>
  );
};

export default InformationCard;
