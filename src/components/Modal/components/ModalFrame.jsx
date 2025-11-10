import image from "../../../assets/img/image.png";
const ModalFrame = () => {
  return (
    <div className="flex w-[800px] flex-row">
      <img
        src={image}
        alt="강의사진"
        className="h-[286px] w-[431px] rounded-2xl"
      />

      <div className="p-8">
        <div className="flex h-[23px] w-9 items-center justify-center rounded-lg bg-blue-100 text-sm font-medium text-blue-500 uppercase">
          개발
        </div>

        <h2 className="mt-2 h-[100px] w-[290px] text-3xl font-medium text-gray-900">
          리액트 애플리케이션 QAuth2.0 구현하기
        </h2>

        <p className="w-[280px] text-gray-500">
          리액트 애플리케이션 인가 코드 승인 리액트 쿼리 구조와 동작원리를
          분석해보기
        </p>

        <p className="mt-2 text-lg font-semibold text-gray-900">99,000원</p>
      </div>
    </div>
  );
};

export default ModalFrame;
