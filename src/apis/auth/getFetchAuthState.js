import { auth } from "../../constants/firebase";

const getFetchAuthState = () => {
  return auth.currentUser;
};

export default getFetchAuthState;
