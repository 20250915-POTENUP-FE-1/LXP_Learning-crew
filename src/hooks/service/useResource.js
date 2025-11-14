import postFetchImage from "../../apis/resources/postFetchImage";

const useResource = () => {
  const uploadImage = async (encodedImage) => {
    try {
      const data = await postFetchImage(encodedImage);

      return {
        success: true,
        data: data.id,
      };
    } catch (error) {
      return { success: false, error: error };
    }
  };

  return { uploadImage };
};

export default useResource;
