import { addDoc, collection } from "firebase/firestore";
import { API_ROUTES, db } from "../../constants/_index";

const postFetchImage = async (encodedImage) => {
  return await addDoc(collection(db, API_ROUTES.RESOURCES), {
    resource: encodedImage,
  });
};

export default postFetchImage;
