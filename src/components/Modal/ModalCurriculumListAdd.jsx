import image from "../../assets/img/file.png";
import Button from "../Button/Button";

const ModalCurriculumListAdd = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="relative flex max-h-[95vh] w-full max-w-[950px] flex-col rounded-3xl bg-white p-8 shadow-2xl">
        <Button
          type="button"
          variant="closer"
          className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-gray-700"
        >
          X
        </Button>

        <div className="flex-1 overflow-y-auto pr-2 pb-10">
          <div className="mt-10 mb-10 flex w-full flex-row items-start justify-between">
            <div className="mt-5 mr-8 ml-9 flex h-[286px] w-[431px] flex-col rounded-2xl">
              <img
                src={image}
                alt="강의사진"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

            <div className="mt-5 mr-9 flex w-[337px] flex-col justify-start gap-7">
              <div className="flex w-full flex-col">
                <label className="mb-2 text-sm font-medium text-gray-700">
                  강의 제목
                </label>
                <input
                  type="text"
                  placeholder="20자 이내로 작성해주세요"
                  className="h-12 rounded-xl border border-gray-300 px-4 py-3 text-gray-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex w-full flex-col">
                <label className="mb-2 text-sm font-medium text-gray-700">
                  강의 설명
                </label>
                <input
                  type="text"
                  placeholder="40자 이내로 작성해주세요"
                  className="h-12 rounded-xl border border-gray-300 px-4 py-3 text-gray-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex w-full flex-col">
                <label className="mb-2 text-sm font-medium text-gray-700">
                  수강료
                </label>
                <input
                  type="text"
                  placeholder="금액을 입력해주세요"
                  className="h-12 rounded-xl border border-gray-300 px-4 py-3 text-gray-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <h2 className="mt-4 mb-6 ml-9 text-xl font-medium text-gray-900">
            강좌 내용
          </h2>
          <p className="mb-4 ml-9 text-gray-500">
            대 단원과 중 단원의 강좌 내용을 작성해주세요
          </p>

          <div className="ml-9">
            <div>
              <div className="mt-6 w-[800px]">
                <div className="flex h-12 w-[800px] items-center justify-between rounded-xl border-2 border-gray-300 pr-3 pl-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                  <input
                    type="text"
                    placeholder="대 단원의 내용을 입력해주세요."
                    className="focus:ring-0 focus:outline-none"
                  />
                  <button className="mr-8 cursor-pointer text-lg text-gray-400 hover:text-black">
                    삭제
                  </button>
                </div>
                <div className="h-56 w-[800px] justify-center pt-2">
                  <ul className="overflow-hidden rounded-xl border border-gray-300 bg-white">
                    <li className="flex h-[54px] min-w-3xl items-center justify-between pr-6 pl-4 text-[15px]">
                      <input
                        type="text"
                        placeholder="중 단원의 내용을 입력해주세요."
                        className="focus:ring-0 focus:outline-none"
                      />
                      <div className="flex justify-end">
                        <input
                          type="text"
                          placeholder="00:00"
                          className="mr-4 w-[41px]"
                        />
                        <button className="mr-2 text-gray-400 hover:text-black">
                          X
                        </button>
                        <button className="mr-2 text-gray-400 hover:text-black">
                          +
                        </button>
                      </div>
                    </li>
                    <li className="flex h-[54px] min-w-3xl items-center justify-between pr-6 pl-4 text-[15px]">
                      <input
                        type="text"
                        placeholder="중 단원의 내용을 입력해주세요."
                        className="focus:ring-0 focus:outline-none"
                      />
                      <div className="flex justify-end">
                        <input
                          type="text"
                          placeholder="00:00"
                          className="mr-4 w-[41px]"
                        />
                        <button className="mr-2 text-gray-400 hover:text-black">
                          X
                        </button>
                        <button className="mr-2 text-gray-400 hover:text-black">
                          +
                        </button>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-3 flex justify-center text-gray-400 hover:text-black">
                    <button type="button" className="cursor-pointer">
                      +단원 추가
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-6">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-6">
              <span className="w-[60px] text-base font-medium text-gray-900">
                카테고리
              </span>
              <div className="flex space-x-2">
                <Button
                  variant="tag-default"
                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  AI
                </Button>
                <Button
                  variant="tag-selected"
                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  개발
                </Button>
                <Button
                  variant="tag-default"
                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  디자인
                </Button>
                <Button
                  variant="tag-default"
                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  서비스
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <span className="w-[60px] text-base font-medium text-gray-900">
                난이도
              </span>
              <div className="flex space-x-2">
                <Button
                  variant="tag-selected"
                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  초급
                </Button>
                <Button
                  variant="tag-default"
                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  중급
                </Button>
                <Button
                  variant="tag-default"
                  className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  고급
                </Button>
              </div>
            </div>
          </div>

          <div className="self-end pr-13">
            <Button
              variant="outline"
              className="h-12 border-2 border-blue-500 px-8 py-3 font-medium text-blue-500 hover:bg-blue-500 hover:text-white"
            >
              등록하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCurriculumListAdd;
