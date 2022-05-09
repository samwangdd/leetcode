/**
 * @param {string[]} strs
 * @return {string}
 */

function longestCommonPrefix(strs) {
  if (strs.length === 0) {
    return ""
  }
  // 获取第一个字符串，作为基准
  const minItem = strs.slice(0, 1)[0]
  // 如何循环剩下的字符串，比较每个字符串的前 len 个字符？？
  let right = minItem.length

  while (right > 0) {
    const prefix = minItem.slice(0, right)
    if (strs.every((str) => str.indexOf(prefix) === 0)) {
      return prefix
    }
    right--
  }
  return ""
}

// 我的解法，未通过测试
var longestCommonPrefix = function (strs) {
  // 获取第一个字符串，作为基准
  const firstStr = strs.slice(0, 1)
  const len = firstStr.length
  // 如何循环剩下的字符串，比较每个字符串的前 len 个字符？？
  let j = 0
  let res = ""
  while (j < len) {
    for (let i = 1; i < strs.length; i++) {
      if (firstStr[j] !== strs[i][j]) return res
      if (i === strs.length - 1) {
        j++
        res = firstStr.slice(0, j)
      }
    }
  }
  return res
}
