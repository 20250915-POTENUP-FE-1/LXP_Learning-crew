import { postFetchRegister, postFetchLogin } from "../../apis/auth/_index";
import postFetchUser from "../../apis/users/postFetchUser";
import postFetchLogout from "../../apis/auth/postFetchLogout";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../constants/firebase";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const authState = onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });

      setIsLoggedIn(!!authState);
    })();
  }, []);

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
      await postFetchLogout();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { register, login, isLoggedIn, logout };
};

export default useAuth;
