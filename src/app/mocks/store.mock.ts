import COURSES_STORE from "./store/courses";

type MockStore = {
  courses: Array<{
    courseId: string;
    title: string;
    description: string;
    tags: string[];
    thumbnailImageUrl: string;
  }>;
};

declare global {
  var __MOCK_STORE__: MockStore;
}

const MOCK_STORE: MockStore = globalThis.__MOCK_STORE__ || {
  courses: COURSES_STORE,
};

export default MOCK_STORE;
