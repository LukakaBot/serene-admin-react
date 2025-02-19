import type { Method, AlovaGenerics } from "alova";
import type { ResponseData } from '../types';

// 请求拦截器
export function requestInterceptor<AG extends AlovaGenerics>(config: Method<AG>) {
  console.log(config);
}

const interceptorManager = {
  beforeRequest: <AG extends AlovaGenerics>(config: Method<AG>) => {
    console.log(config);
  },
  responded: {
    onSuccess: <AG extends AlovaGenerics>(response: AG['Response']) => {
      console.log(response);
      const json: ResponseData = response.json();
      return json.data;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (err: any) => {
      console.log(err);
    },
    onComplete: () => {
    }
  }
}

export default interceptorManager;