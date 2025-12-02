import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const myPageMenus = [
  { name: "마이페이지", path: "/my" },
  { name: "프로필", path: "/my/profile" },
  { name: "강사 코드 발급", path: "/my/code" },
];

const MyPage = () => {
  const location = useLocation();
  return (
    <div className="mx-auto w-full max-w-[1060px] py-8">
      <div className="grid grid-cols-12 gap-x-5">
        {/* 3. LNB 영역: 3컬럼 할당 */}
        <nav className="col-span-3 pl-4">
          {/* <h2 className="mb-4 text-xl font-bold">마이페이지</h2> */}

          {/* LNB 메뉴 스타일링 */}
          <div className="space-y-1">
            {myPageMenus.map((menu) => (
              <Link
                key={menu.name}
                to={menu.path}
                className={`block rounded-lg p-2 transition-colors duration-200 ${
                  location.pathname === menu.path
                    ? "bg-indigo-50 font-semibold text-indigo-700"
                    : "text-gray-600 hover:bg-gray-50"
                } `}
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* 4. 콘텐츠 영역 (Outlet) - 9컬럼 할당 */}
        <section className="col-span-9 min-w-0 rounded-lg p-8">
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default MyPage;
