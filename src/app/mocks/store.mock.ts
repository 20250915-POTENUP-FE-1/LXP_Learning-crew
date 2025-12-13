import { COURSES_STORE, type StoreCourse } from "./store/courses";
type MockStore = {
  courses: StoreCourse[];
};

declare global {
  var __MOCK_STORE__: MockStore | undefined;
}

if (!globalThis.__MOCK_STORE__) {
  globalThis.__MOCK_STORE__ = {
    courses: [...COURSES_STORE], // 복사본 사용
  };
}

const MOCK_STORE: MockStore = globalThis.__MOCK_STORE__;

export default MOCK_STORE;
