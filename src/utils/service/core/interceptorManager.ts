import type { Method, AlovaGenerics } from "alova";

// 请求拦截器
export function requestInterceptor<AG extends AlovaGenerics>(config: Method<AG>) {
  console.log(config);
}

const interceptorManager = {
  beforeRequest: <AG extends AlovaGenerics>(config: Method<AG>) => {
    console.log(config);
  },
  responded: {
    onSuccess: <AG extends AlovaGenerics>(response: AG['Response'], method: Method<AG>) => {
      console.log(response);
      console.log(method);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: <AG extends AlovaGenerics>(err: any, method: Method<AG>) => {
      console.log(err);
      console.log(method);
    },
    onComplete: <AG extends AlovaGenerics>(method: Method<AG>) => {
      console.log(method);
    }
  }
}

export default interceptorManager;