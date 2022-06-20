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
var inorderTraversal = function (root) {
  const result = []
  // 递归返回的结果是啥？
  const middleSequence = (root) => {
    if (!root) return
    const { left, right, val } = root

    left && middleSequence(left)
    val && result.push(val)
    right && middleSequence(right)
  }
  middleSequence(root)
  return result
}
