/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const isNil = (val) => {
  const falsy = [null, undefined]
  if (falsy.includes(val)) {
    return true
  }
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 迭代
var inorderTraversal = function (root) {
  const result = []
  // 递归返回的结果是啥？
  const middleSequence = (root) => {
    if (!root) return
    const { left, right, val } = root

    left && middleSequence(left)
    !isNil(val) && result.push(val)
    right && middleSequence(right)
  }
  middleSequence(root)
  return result
}

// 递归
var inorderTraversal = function (root) {
  const result = []
  const stack = []
  let node = root
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node)
      node = node.left
      continue
    }
    node = stack.pop()
    result.push(node.val)
    node = node.right
  }
  return result
}
