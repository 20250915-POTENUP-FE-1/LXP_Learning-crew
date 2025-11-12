import React, { useRef, useState } from "react";
import { AddInput } from "../../../Input";
import imageFile from "../../../../assets/img/file.png";

const AddCourseHeader = () => {
  const [image, setImage] = useState(imageFile);
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex">
      <div className="mt-5 mr-8 ml-9 flex h-[286px] w-[431px] cursor-pointer flex-col rounded-2xl">
        <img
          src={image}
          alt="강의사진"
          className="h-full w-full rounded-2xl object-cover"
          onClick={() => inputRef.current && inputRef.current.click()}
        />
        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      <div className="mt-5 mr-9 flex w-[337px] flex-col justify-start gap-7">
        <AddInput
          type="text"
          placeholder="20자이내로 작성해주게요."
          title="강의 제목"
        />
        <AddInput
          type="text"
          placeholder="40자 이내로 작성해주세요"
          title="강의 설명"
        />
        <AddInput
          type="text"
          placeholder="금액을 입력해주세요"
          title="수강료"
        />
      </div>
    </div>
  );
};

export default AddCourseHeader;
