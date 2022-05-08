/**
 * @param {number} n
 * @return {string}
 * 使用递归
 */
var countAndSay = function (n) {
  if (n === 1) return "1"
  const s = countAndSay(n - 1)

  let string = ""
  let count = 1
  let item = s[0]
  // 为什么 i = 1？因为 item 从 0 开始取的
  for (let i = 1; i < s.length; i++) {
    if (item === s[i]) {
      count++
    } else {
      string += `${count}${item}`
      count = 1
      item = s[i]
    }
  }
  return `${string}${count}${item}`
}
