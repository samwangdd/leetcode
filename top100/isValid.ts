/**
 * 通过栈来存放正括号，一旦匹配到栈顶元素，则出栈；最后看栈中是否有剩余元素
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false

  // 使用 Map 映射
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ])

  // 使用栈来存放正括号
  let stack = []

  // 使用 for...of 循环，而不是 forEach
  for (let ch of s) {
    // TODO: 如果是反括号，拿来和栈中的括号比较，判断是否闭合
    if (map.has(ch)) {
      // 判断是否闭合
      if (!stack.length || stack[stack.length - 1] !== map.get(ch)) {
        return false
      }
      // 闭合则出栈
      stack.pop()
    } else {
      // 如果是正括号，入栈
      stack.push(ch)
    }
  }
  return !stack.length
}
