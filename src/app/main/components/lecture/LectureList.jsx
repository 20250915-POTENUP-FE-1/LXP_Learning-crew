import React from "react";
import LectureListToolBar from "../toolbar/LectureListToolBar";

const LectureList = ({ children }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <LectureListToolBar />

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {children}
      </div>
    </div>
  );
};

export default LectureList;
