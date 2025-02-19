// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ResponseData<T = any> {
  code: number;
  message: string;
  data: T;
  type: string;
};