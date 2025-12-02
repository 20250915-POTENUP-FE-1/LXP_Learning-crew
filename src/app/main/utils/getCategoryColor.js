import LECTURE_CATEGORIES from "../../../constants/lectureCategories";

const getCategoryColor = (categoryName) => {
  const category = LECTURE_CATEGORIES.find(
    (category) => category.category === categoryName,
  );

  return category ? category.variant : "solid";
};

export default getCategoryColor;
