import Mock from 'mockjs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resultSuccess<T = any>(data: T, { message = 'ok' } = {}) {
  return Mock.mock({
    code: 200,
    data,
    message,
    type: 'success',
  })
}