import type { Method, AlovaGenerics } from "alova";

// 请求拦截器
export function requestInterceptor<AG extends AlovaGenerics>(config: Method<AG>) {
  console.log(config);
}