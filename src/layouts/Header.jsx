import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import useAuth from "../hooks/service/useAuth"; // 💡 경로는 프로젝트 구조에 따라 다를 수 있습니다.
import LogoIcon from "../components/LogoIcon/LogoIcon.jsx";

const Header = () => {
  const navigate = useNavigate();
  // 💡 Hook에서 isLoggedIn과 logout 함수를 가져옵니다.
  const { isLoggedIn, logout, isLoading } = useAuth();

  if (isLoading) {
    return <header>인증 정보 확인 중...</header>; // 💡 로딩 중 처리
  }

  return (
    // 💡 GNB의 너비는 mx-auto로 중앙정렬을 위해 max-w를 사용하거나,
    //    Layout에서 너비를 고정하는 것이 좋습니다. w-[1061px] 대신 w-full max-w-7xl 등을 고려해 보세요.
    <header className="z-20 flex h-16 w-full items-center justify-between bg-white/90 px-4 backdrop-blur-xs">
      <div className="flex items-center gap-[72px]">
        <Link to="/">
          <LogoIcon />
        </Link>
        <nav className="flex items-center gap-8">
          <Link to="/lectures">강의</Link>
          <Link to="/my">마이페이지</Link>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        {isLoggedIn ? (
          // 💡 1번 오류 수정: 비동기 로그아웃 처리
          <Button
            variant="default"
            onClick={async () => {
              try {
                await logout();
                navigate("/login");
              } catch (error) {
                console.error("로그아웃 오류:", error);
                alert("로그아웃 중 오류가 발생했습니다.");
              }
            }}
          >
            로그아웃
          </Button>
        ) : (
          <>
            {/* 💡 회원가입 버튼 추가 */}
            <Button variant="default" onClick={() => navigate("/register")}>
              회원가입
            </Button>
            <Button variant="default" onClick={() => navigate("/login")}>
              로그인
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
