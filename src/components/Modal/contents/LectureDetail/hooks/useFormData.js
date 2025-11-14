import useResource from "../../../../../hooks/service/useResource";
import postFetchCurriculums from "../../../../../apis/curriculums/postFetchCurriculums";
import postFetchLecture from "../../../../../apis/lectures/postFetchLecture";

const useFormData = () => {
  const { uploadImage } = useResource();

  const uploadEncodedImage = async (encodedImage) => {
    return await uploadImage(encodedImage);
  };

  const uploadLecture = async ({
    title,
    description,
    imageUrl,
    tag,
    level,
    price,
    curriculums,
  }) => {
    try {
      const curriculumsId = await postFetchCurriculums(curriculums);
      const lectureId = await postFetchLecture({
        title,
        description,
        imageUrl,
        tag,
        level,
        price,
        curriculums: curriculumsId.id,
      });

      return { success: true, data: lectureId };
    } catch (error) {
      return { success: false, error: error };
    }
  };

  return { uploadEncodedImage, uploadLecture };
};

export default useFormData;
