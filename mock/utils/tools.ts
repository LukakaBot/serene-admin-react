/**
 * @param {Number} times 回调函数需要执行的次数
 * @param {Function} callback 回调函数
 */
export function doCustomTimes(
  times: number,
  callback: (index: number) => void,
) {
  let i = -1;
  while (++i < times) {
    callback(i);
  }
}
