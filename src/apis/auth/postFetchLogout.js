import { signOut } from "firebase/auth";
import { auth } from "../../constants/firebase";

const postFetchLogout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default postFetchLogout;
