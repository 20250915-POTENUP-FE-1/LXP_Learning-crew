import React from "react";
import { TagListProps } from "./TagList.type";
import Badge from "../Badge/Badge";

const TagList = ({ tags }: TagListProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags?.map((tag, index) => (
        <Badge key={index} {...tag} />
      ))}
    </div>
  );
};

export default TagList;
