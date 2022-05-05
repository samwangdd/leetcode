/**
 * @param {string} s
 * @return {number}
 */
/**
 * 1. 判断空格
 * 2. 判断正负
 * 3. 读入数字，考虑溢出
 * 4. 非数字时停止读入
 * 
 * O(n) O(1)
 */
var myAtoi = function (s) {
  let num = 0
  let sign = 1
  let i = 0
  while (i < s.length && s[i] === " ") {
    i++
  }
  if (i < s.length && (s[i] === "-" || s[i] === "+")) {
    sign = s[i] === "-" ? -1 : 1
    i++
  }
  // 判断数字，注意空格会被转换为 0
  // ' ' === 0，满足 s[i] <= '9'，但是不满足 s[i] >= '0'
  while (i < s.length && s[i] >= "0" && s[i] <= "9" && s[i] !== " ") {
    num = num * 10 + (s[i] - "0")
    i++
  }
  const res = sign * num
  if (res <= -2147483648) {
    return -2147483648
  } else if (res >= 2147483647) {
    return 2147483647
  } else {
    return res
  }
}
