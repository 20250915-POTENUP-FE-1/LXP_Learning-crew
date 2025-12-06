const API_ROUTES = {
  COURSE: "/course/", // :courseId
  COURSES: {
    COURSE: "/courses",
    RECOMMENDED: "/courses/recommended",
  },
};

export type ApiRoutes = typeof API_ROUTES;
export default API_ROUTES;
