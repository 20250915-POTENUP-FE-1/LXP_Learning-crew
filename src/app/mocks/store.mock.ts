import { COURSES_STORE, type StoreCourse } from "./store/courses";
import { ENROLLMENTS_STORE, type StoreEnrollment } from "./store/enrollments";

type MockStore = {
  courses: StoreCourse[];
  enrollments: StoreEnrollment[];
};

declare global {
  var __MOCK_STORE__: MockStore | undefined;
}

if (!globalThis.__MOCK_STORE__) {
  globalThis.__MOCK_STORE__ = {
    courses: [...COURSES_STORE], // 복사본 사용
    enrollments: [...ENROLLMENTS_STORE], // 복사본 사용
  };
}

const MOCK_STORE: MockStore = globalThis.__MOCK_STORE__;

export default MOCK_STORE;
