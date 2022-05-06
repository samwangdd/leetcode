/**
 * 1. 判断空格，返回 0
 * 2. 使用双指针，一个指针指向 haystack，一个指针指向 needle
 * 3. 使用变量 count，如果命中 count + 1
 * 4. 比较 count 与 needle 长度
 *
 * @param {*} haystack
 * @param {*} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const n = haystack.length,
    m = needle.length
  // 为什么 i+m<=n？因为只比较子字符串
  for (let i = 0; i + m <= n; i++) {
    let flag = true
    for (let j = 0; j < m; j++) {
      // 为什么 i+j？因为从 i 开始比较子串
      if (haystack[i + j] !== needle[j]) {
        flag = false
        break
      }
    }
    if (flag) {
      return i
    }
  }
  return -1
}
