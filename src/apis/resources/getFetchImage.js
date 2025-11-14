import { collection, getDoc } from "firebase/firestore";
import { API_ROUTES, db } from "../../constants/_index";

const getFetchImage = async (resourceId) => {
  return await getDoc(collection(db, API_ROUTES.IMAGES), resourceId);
};

export default getFetchImage;
