import Mock from 'mockjs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function resultSuccess<T = any>(result: T, { message = 'ok' } = {}) {
  return Mock.mock({
    code: 200,
    result,
    message,
    type: 'success',
  })
}