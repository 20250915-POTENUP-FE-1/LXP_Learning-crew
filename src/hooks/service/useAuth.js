import { postFetchRegister, postFetchLogin } from "../../apis/auth/_index";
import postFetchUser from "../../apis/users/postFetchUser";
import postFetchLogout from "../../apis/auth/postFetchLogout";
import { useEffect, useState } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../../constants/firebase";
// import { updateProfile } from "firebase/auth"; // 💡 상단에 import 추가

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged 리스너 등록 및 해제 로직 (정상)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const register = async (email, password, displayName, role) => {
    try {
      // 1. Auth 계정 생성
      const data = await postFetchRegister(email, password);
      const user = data.user;
      await updateProfile(user, {
        displayName: displayName,
      });

      console.log("Auth 등록 성공, UID:", user.uid);
      console.log("Firestore에 저장할 데이터:", displayName, role); 

      // 2. 💥 유저 정보 DB 저장 (핵심 로직 복구)
await postFetchUser(user.uid, displayName, role);

      return {
        success: true,
        userId: user.uid,
      };
    } catch (error) {
      console.error("회원가입 오류:", error);
      return { success: false, error: error.message };
    }
  };

  const login = async (email, password) => {
    try {
      const data = await postFetchLogin(email, password);

      return {
        success: true,
        userId: user.uid,
      };
    } catch (error) {
      console.error("로그인 시도 오류:", error);
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

  return { register, login, isLoggedIn, logout, isLoading };
};

export default useAuth;
