import React from "react";
import TotalLectureCount from "./TotalLectureCount";
import ComboBox from "../../../../components/ComboBox/ComboBox";
import clsx from "clsx";
import SearchField from "../../../../components/SearchField/SearchField";

const LectureListToolBar = () => {
  return (
    <div
      className={clsx(
        "flex h-12 w-full place-items-center justify-between font-semibold",
        "text-xs",
        "md:text-sm",
      )}
    >
      <TotalLectureCount count={32} />

      <div className="flex gap-2">
        <ComboBox items={["최신 순", "오래된 순"]} />
        <SearchField />
      </div>
    </div>
  );
};

export default LectureListToolBar;
