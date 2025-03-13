// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ResponseData<T = any> {
  code: number;
  message: string;
  data: T;
  type: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface ResponsePageData<T = any> {
  /** 页码 */
  page: number;
  /** 页数 */
  pageSize: number;
  /** 总条数 */
  total: number;
  /** 列表数据 */
  list: T;
}
