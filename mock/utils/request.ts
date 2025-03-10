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
