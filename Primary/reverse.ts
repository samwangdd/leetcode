/**
 * https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnx13t/
 * 整数反转，转化为字符串反转
 *
 * 判断小于0，需要加负号；判断数值是否溢出
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let isNegative = false
  if (x === 0) return 0
  if (x < 0) {
    isNegative = true
    x = Math.abs(x)
  }
  let arr = String(x).split("")
  let length = arr.length
  for (let i = 0, j = length - 1; i < j; i++, j--) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  const res = arr.filter((i) => Boolean(i)).join("")
  if (Number(res) < Math.pow(-2, 31) || Number(res) > Math.pow(2, 31) - 1)
    return 0
  return isNegative ? `-${res}` : res
}

/**
 * 使用取模运算
 * @param {number} x
 * @return {number}
 */
var reverse2 = function (x) {
  let res = 0
  while (x !== 0) {
    // 弹出：数字最后一位
    let digit = x % 10
    // 数字 x 变小
    x = ~~(x / 10)
    // 推入
    res = res * 10 + digit
    if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
      return 0
    }
  }
  return res
}
