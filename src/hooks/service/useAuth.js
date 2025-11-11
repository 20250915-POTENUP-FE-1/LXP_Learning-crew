import { postFetchRegister, postFetchLogin } from "../../apis/auth/_index";
import postFetchUser from "../../apis/users/postFetchUser";
import postFetchLogout from "../../apis/auth/postFetchLogout";
import getFetchAuthState from "../../apis/auth/getFetchAuthState";

const useAuth = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(() => {
  //   const savedAuthState = localStorage.getItem("isLoggedIn");
  //   return savedAuthState === "true";
  // });

  // const [user, setUser] = useState(() => {
  //   const savedUser = localStorage.getItem("user");
  //   return savedUser ? JSON.parse(savedUser) : null;
  // });

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       // 로그인 상태
  //       setIsLoggedIn(true);
  //       setUser(currentUser);
  //       localStorage.setItem("isLoggedIn", "true");
  //       localStorage.setItem(
  //         "user",
  //         JSON.stringify({
  //           uid: currentUser.uid,
  //           email: currentUser.email,
  //           displayName: currentUser.displayName,
  //         }),
  //       );
  //     } else {
  //       // 로그아웃 상태
  //       setIsLoggedIn(false);
  //       setUser(null);
  //       localStorage.setItem("isLoggedIn", "false");
  //       localStorage.removeItem("user");
  //     }
  //   });

  //   return () => unsubscribe();
  // }, []);
  // const user = useMemo(() => {
  //   const unsubscribe = getFetchAuthState().then((userId) => {
  //     return userId;
  //   });

  //   return unsubscribe;
  // }, []);

  /**
   * 새로운 계정을 생성합니다.
   * @param {string} email 계정이 사용할 이메일
   * @param {string} password 계정이 사용할 비밀번호
   * @param {string} displayName 계정이 사용할 사용자 이름
   * @param {"user" | "creator"} role 계정의 역할
   * @returns
   */
  const register = async (email, password, displayName, role) => {
    try {
      const data = await postFetchRegister(email, password);

      await postFetchUser(data.user.uid, displayName, role);

      return {
        success: true,
        userId: data.user.uid,
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const login = async (email, password) => {
    try {
      const data = await postFetchLogin(email, password);

      return {
        success: true,
        userId: data.user.uid,
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    try {
      const result = await postFetchLogout();

      console.log(result);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const isLoggedIn = getFetchAuthState() ? true : false;

  return { register, login, isLoggedIn, logout };
};

export default useAuth;
