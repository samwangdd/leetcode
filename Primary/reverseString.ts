/**
 * https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/xnhbqj/
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  const length = s.length
  for (let i = 0, j = length - 1; i < j; ++i, --j) {
    ;[s[i], s[j]] = [s[j], s[i]]
  }
  return s
}

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString2 = function (s) {
  let i = 0
  let j = s.length - 1

  while (i < j) {
    const temp = s[i]
    s[i] = s[j]
    s[i] = temp
    i++
    j--
  }

  return s
}
