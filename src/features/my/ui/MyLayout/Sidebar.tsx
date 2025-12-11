// Sidebar.tsx (Tailwind 클래스 확인)
import Link from "next/link";

const menuItems = [
  { href: "/my", label: "마이 페이지" },
  { href: "/my/profile", label: "프로필" },
];

export const Sidebar = () => {
  return (
    // 이 w-64, border-r, min-h-screen 클래스가 있어야 영역을 확보합니다.
    <nav className="min-h-screen w-64 p-6">
      {menuItems.map((item) => (
        <Link key={item.href} href={item.href}>
          <h2 className="mb-6 cursor-pointer text-lg font-normal hover:font-medium">
            {item.label}
          </h2>
        </Link>
      ))}

      {/* ... 메뉴 내용 ... */}
    </nav>
  );
};
