import THUMBNAIL_IMAGE from "../../../../../assets/img/image.png";
import Badge from "../../../../Badge";
import { useContext, useState } from "react";
import LectureDetailContext from "../context/lectureDetailContext";
import { useDispatch } from "react-redux";
import {
  updateDescription,
  updateImage,
  updateTitle,
} from "../../../../../store/writePost/writePostReducer";

const DetailHeader = ({
  mode = "read",
  type = { text: "개발", variant: "blue" },
  title = "리액트 애플리케이션 OAuth2.0 구현하기",
  image,
  description = "리액트 애플리케이션 인가 코드 승인 리액트 쿼리 구조와 동작원리를 분석해보기",
  price = "99,000원",
}) => {
  const context = useContext(LectureDetailContext);
  // const imageRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreview(reader.result);

      const encode = reader.result;

      (async () => {
        dispatch(updateImage(encode));
      })();
    };
  };

  return (
    <div className="flex h-full">
      <div className="relative h-72 w-[500px] overflow-hidden rounded-2xl bg-black">
        <img
          className="h-full w-full object-cover"
          src={preview || image || THUMBNAIL_IMAGE}
          alt="강의사진"
        />
        {mode === "edit" ? (
          <>
            <img className="absolute top-0 left-0 h-full w-full object-cover" />
            <input
              className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </>
        ) : (
          // <div className="absolute top-0 flex h-full w-full bg-red-300 opacity-0"></div>
          <></>
        )}
      </div>

      <div className="flex flex-col justify-center gap-4 p-6">
        <div className="flex flex-col gap-2">
          {context.mode === "edit" ? (
            <></>
          ) : (
            <Badge text={type.text} variant={type.variant} />
          )}

          {context.mode === "edit" ? (
            <textarea
              className="h-auto w-full resize-none overflow-hidden rounded-xl bg-gray-100 p-2 text-2xl font-medium wrap-break-word outline-none"
              rows="auto"
              defaultValue={title}
              placeholder={title}
              onChange={(e) => {
                dispatch(updateTitle(e.target.value));
              }}
            />
          ) : (
            <h2 className="text-2xl font-medium text-gray-900">{title}</h2>
          )}
        </div>

        {context.mode === "edit" ? (
          <textarea
            className="w-full resize-none rounded-xl bg-gray-100 p-2 text-sm outline-none"
            defaultValue={description}
            placeholder={description}
            rows={3} // 기본 3줄
            onChange={(e) => {
              dispatch(updateDescription(e.target.value));
            }}
          />
        ) : (
          <p className="text-sm text-gray-500">{description}</p>
        )}

        <p className="text-lg font-semibold text-gray-900">{price}</p>
      </div>
    </div>
  );
};

export default DetailHeader;
