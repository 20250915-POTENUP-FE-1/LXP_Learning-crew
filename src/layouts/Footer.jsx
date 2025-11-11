import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 flex h-[72px] w-[1061px] items-center justify-between border-t border-[#303030] bg-white">
      <p className="text-[15px] font-semibold text-black">러닝크루 ©2025</p>
      <nav>
        <ul className="flex items-center gap-2 text-[11px] text-black">
          <li>
            <a href="#">회사소개</a>
          </li>
          <li>
            <a href="#">개인정보보호</a>
          </li>
          <li>
            <a href="#">이용약관</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
