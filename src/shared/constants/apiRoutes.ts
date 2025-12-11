interface ApiRoutesType {
  COURSE: string; // :courseId
  COURSES: {
    COURSE: string;
    RECOMMENDED: string;
  };
}

let API_ROUTES: ApiRoutesType;

if (process.env.NODE_ENV === "development") {
  API_ROUTES = {
    COURSE: "/courses/", // [courseId]
    COURSES: {
      COURSE: "/courses",
      RECOMMENDED: "/courses",
    },
  };
} else {
  API_ROUTES = {
    COURSE: "https://api.example.com/course/", // [courseId]
    COURSES: {
      COURSE: "https://api.example.com/courses",
      RECOMMENDED: "https://api.example.com/courses/recommended",
    },
  };
}

export type ApiRoutes = typeof API_ROUTES;
export default API_ROUTES;
