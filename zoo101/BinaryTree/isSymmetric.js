/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 递归实现
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  // n 和 n-1 的关系是什么？
  if (!root) {
    return true
  }
  return isSameTree(root.left, root.right)
}

function isSameTree(rl, rr) {
  if (rl === null) return rr === null
  if (rr === null) return rl === null

  if (rl.val !== rr.val) {
    return false
  }

  // 子节点很多如何解决它们之间的关系？
  return isSameTree(rl.left, rr.right) && isSameTree(rl.right, rr.left)
}
