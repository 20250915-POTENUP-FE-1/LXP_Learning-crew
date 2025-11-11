import React, { useState } from "react";

const ModalList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="flex flex-col">
        <h2 className="pt-14 text-[20px] font-medium text-gray-900">
          강좌 내용
        </h2>
        <p className="mt-2 text-gray-500">인기 강좌의 내용을 확인해보세요.</p>
      </div>
      <div className="mt-6 w-[800px]">
        <div className="flex h-12 w-[800px] items-center justify-between rounded-xl border-2 pr-3 pl-3">
          <span>1.리액트 시작하기와 기본 개념</span>
          <button onClick={toggleList} className="cursor-pointer text-lg">
            {isOpen ? "▽" : "▲"}
          </button>
        </div>
        <div
          className={`${isOpen ? "flex " : "hidden"} h-56 w-[800px] justify-center pt-2`}
        >
          <ul className="overflow-hidden rounded-xl border border-gray-300 bg-white">
            <li className="flex h-[54px] min-w-3xl items-center justify-between pr-6 pl-4 text-[15px]">
              1-1 리액트 시작하기와 개념
              <span>05:00</span>
            </li>
            <li className="flex h-[54px] min-w-3xl items-center justify-between pr-6 pl-4 text-[15px]">
              1-2 리액트 시작하기와 기본 개념
              <span>05:00</span>
            </li>
            <li className="flex h-[54px] min-w-3xl items-center justify-between pr-6 pl-4 text-[15px]">
              1-3 리액트 시작하기와 기본 개념
              <span>05:00</span>
            </li>
            <li className="flex h-[54px] min-w-3xl items-center justify-between pr-6 pl-4 text-[15px]">
              1-3 리액트 시작하기와 기본 개념
              <span>05:00</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 w-[800px]">
        <div className="flex h-12 w-[800px] items-center justify-between rounded-xl border-2 pr-3 pl-3">
          <span>1.리액트 시작하기와 기본 개념</span>
          <button onClick={toggleList} className="cursor-pointer text-lg">
            {isOpen ? "▽" : "▲"}
          </button>
        </div>
        <div
          className={`${isOpen ? "flex " : "hidden"} h-56 w-[800px] justify-center pt-2`}
        >
          <ul className="overflow-hidden rounded-xl border border-gray-300 bg-white">
            <li className="flex h-[54px] min-w-3xl items-center justify-between pr-6 pl-4 text-[15px]">
              1-1 리액트 시작하기와 개념
              <span>05:00</span>
            </li>
            <li className="flex h-[54px] min-w-3xl items-center justify-between pr-6 pl-4 text-[15px]">
              1-2 리액트 시작하기와 기본 개념
              <span>05:00</span>
            </li>
            <li className="flex h-[54px] min-w-3xl items-center justify-between pr-6 pl-4 text-[15px]">
              1-3 리액트 시작하기와 기본 개념
              <span>05:00</span>
            </li>
            <li className="flex h-[54px] min-w-3xl items-center justify-between pr-6 pl-4 text-[15px]">
              1-3 리액트 시작하기와 기본 개념
              <span>05:00</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalList;
