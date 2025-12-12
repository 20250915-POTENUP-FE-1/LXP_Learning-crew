import { COURSES_STORE, type StoreCourse } from "./store/courses";
type MockStore = {
  courses: StoreCourse[];
};

declare global {
  var __MOCK_STORE__: MockStore | undefined;
}

const MOCK_STORE: MockStore = globalThis.__MOCK_STORE__ || {
  courses: COURSES_STORE,
};

export default MOCK_STORE;
