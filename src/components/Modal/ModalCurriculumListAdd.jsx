import Button from "../Button/Button";
import AddCourseHeader from "./components/AddModal/AddCourseHeader";
import { CurriculumInput } from "../Input";
import { useCurriculum } from "./hooks/useCurriculum";

const ModalCurriculumListAdd = () => {
  const {
    mainUnits,
    addMainUnit,
    deleteMainUnit,
    updateMainUnit,
    addSubModule,
    deleteSubModule,
    updateSubModule,
  } = useCurriculum();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="relative flex max-h-[95vh] w-full max-w-[960px] flex-col rounded-3xl bg-white p-8 shadow-2xl">
        <Button
          type="button"
          variant="closer"
          className="absolute top-6 right-6 text-2xl text-gray-400 hover:text-gray-700"
        >
          X
        </Button>

        <div className="flex-1 overflow-y-auto pr-2 pb-10">
          <div className="mt-10 mb-10 flex w-full flex-row items-start justify-between">
            <AddCourseHeader />
          </div>

          <h2 className="mt-4 mb-6 ml-9 text-xl font-medium text-gray-900">
            강좌 내용
          </h2>
          <p className="mb-4 ml-9 text-gray-500">
            대 단원과 중 단원의 강좌 내용을 작성해주세요
          </p>

          <div className="ml-9">
            {mainUnits.length > 0 &&
              mainUnits.map((unit, mainIndex) => (
                <div key={mainIndex} className="mb-6">
                  <div className="mb-2 flex w-[800px] items-center justify-between rounded-xl border-2 border-gray-300 pr-3 pl-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <CurriculumInput
                      type="text"
                      placeholder="대 단원 내용을 입력해주세요."
                      value={unit.title}
                      onChange={(e) =>
                        updateMainUnit(mainIndex, e.target.value)
                      }
                      className="flex h-12 border-none focus:outline-none"
                    />
                    <Button
                      type="button"
                      variant="delete"
                      onClick={() => deleteMainUnit(mainIndex)}
                    >
                      삭제
                    </Button>
                  </div>

                  <div className="mt-2 w-[800px]">
                    <ul className="max-h-56 overflow-y-auto rounded-xl border border-gray-300 bg-white">
                      {unit.subModules.map((sub, subIndex) => (
                        <li
                          key={subIndex}
                          className="flex h-[54px] min-w-3xl items-center justify-between px-3 pr-6 text-[15px]"
                        >
                          <input
                            type="text"
                            placeholder="중 단원의 내용을 입력해주세요."
                            value={sub.title}
                            onChange={(e) =>
                              updateSubModule(
                                mainIndex,
                                subIndex,
                                "title",
                                e.target.value,
                              )
                            }
                            className="mr-2 flex-1 focus:ring-0 focus:outline-none"
                          />
                          <div className="flex items-center">
                            <input
                              type="text"
                              placeholder="00:00"
                              value={sub.time}
                              onChange={(e) =>
                                updateSubModule(
                                  mainIndex,
                                  subIndex,
                                  "time",
                                  e.target.value,
                                )
                              }
                              className="mr-4 w-[41px]"
                            />
                            <button
                              className="mr-2 text-gray-400 hover:text-black"
                              onClick={() =>
                                deleteSubModule(mainIndex, subIndex)
                              }
                            >
                              X
                            </button>
                            <button
                              className="mr-2 text-gray-400 hover:text-black"
                              onClick={() => addSubModule(mainIndex)}
                            >
                              +
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

            <div className="mt-3 flex justify-center text-gray-400 hover:text-black">
              <button
                type="button"
                className="cursor-pointer"
                onClick={addMainUnit}
              >
                +단원 추가
              </button>
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
