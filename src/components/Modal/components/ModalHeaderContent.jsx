import image from "../../../assets/img/image.png";
import Badge from "../../Badge";

const ModalHeader = ({
  type = { text: "개발", variant: "blue" },
  title = "리액트 애플리케이션 OAuth2.0 구현하기",
  description = "리액트 애플리케이션 인가 코드 승인 리액트 쿼리 구조와 동작원리를 분석해보기",
  price = "99,000원",
}) => {
  return (
    <div className="flex h-full">
      <div className="aspect-4/2.5 w-full">
        <img
          src={image}
          alt="강의사진"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-4 p-6">
        <div className="flex flex-col gap-2">
          <Badge text={type.text} variant={type.variant} />

          <h2 className="text-2xl font-medium text-gray-900">{title}</h2>
        </div>

        <p className="text-sm text-gray-500">{description}</p>

        <p className="text-lg font-semibold text-gray-900">{price}</p>
      </div>
    </div>
  );
};

export default ModalHeader;
