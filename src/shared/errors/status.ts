import { ApiRoutes } from "../constants/apiRoutes";

const FetchFailedMessage = (route: string) => {
  throw new Error(`${route} API 호출에 실패했습니다.`);
};

export { FetchFailedMessage };
