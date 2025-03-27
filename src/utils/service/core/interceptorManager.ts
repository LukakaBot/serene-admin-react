import type { Method, AlovaGenerics } from "alova";
import type { ResponseData } from "../types";

const interceptorManager = {
  beforeRequest: <AG extends AlovaGenerics>(method: Method<AG>) => {
    const token = window.$bucket?.get("token");

    if (token) {
      method.config.headers.Authorization = `Bearer ${token}`;
    }
  },
  responded: {
    onSuccess: async <AG extends AlovaGenerics>(response: AG["Response"]) => {
      const json: ResponseData = await response.json();
      return json.data;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.error(error);
    },
    onComplete: () => {
      console.log("请求完成");
    },
  },
};

export default interceptorManager;
