// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resultSuccess<T = any>(data: T) {
  return {
    code: 200,
    data,
    message: "Request success",
    type: "success",
  };
}

export function resultError() {
  return {
    code: 500,
    data: null,
    message: "Request failed",
    type: "error",
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function pagination<T = any>(
  pageNo: number,
  pageSize: number,
  array: T[],
): T[] {
  const offset = (pageNo - 1) * Number(pageSize);
  const ret =
    offset + Number(pageSize) >= array.length
      ? array.slice(offset, array.length)
      : array.slice(offset, offset + Number(pageSize));
  return ret;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resultPageSuccess<T = any>(
  page: number,
  pageSize: number,
  data: T[],
) {
  const pageData = pagination(page, pageSize, data);

  return {
    ...resultSuccess({
      page,
      pageSize,
      total: data.length,
      list: pageData,
    }),
    message: "Request success",
  };
}
