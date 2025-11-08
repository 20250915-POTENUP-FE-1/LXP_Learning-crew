import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex h-[72px] w-[1061px] items-center justify-between border-t border-r-0 border-b-0 border-l-0 border-[#303030] bg-white">
        <div className="flex w-[1061px] flex-shrink-0 flex-grow-0 items-center justify-between">
          <div className="flex flex-grow items-center justify-between">
            <div className="flex flex-shrink-0 flex-grow-0 items-center justify-start gap-2">
              <div className="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5">
                <p className="flex-shrink-0 flex-grow-0 text-left text-[15px] font-semibold text-black">
                  러닝크루 ©2025{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-shrink-0 flex-grow-0 items-center justify-start gap-2">
              <div className="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5">
                <p className="flex-shrink-0 flex-grow-0 text-left text-[11px] text-black">
                  회사소개
                </p>
              </div>
              <div className="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5">
                <p className="flex-shrink-0 flex-grow-0 text-left text-[11px] text-black">
                  개인정보호호
                </p>
              </div>
              <div className="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5">
                <p className="flex-shrink-0 flex-grow-0 text-left text-[11px] text-black">
                  이용약관
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
