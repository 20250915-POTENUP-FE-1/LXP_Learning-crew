import { postFetchRegister, postFetchLogin } from "../../apis/auth/_index";
import postFetchUser from "../../apis/users/postFetchUser";

const useAuth = () => {
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
        uid: data.user.uid,
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
        uid: data.user.uid,
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  return { register, login };
};

export default useAuth;
