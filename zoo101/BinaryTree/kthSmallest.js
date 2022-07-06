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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // 二叉搜索树，左子树比根节点小，右子树比根节点大
  const res = []
  // 使用中序遍历
  function travels(node) {
    // 遍历结束条件
    if (res.length >= k) return
    if (node.left) {
      travels(node.left)
    }
    res.push(node.val)
    if (node.right) {
      travels(node.right)
    }
  }
  travels(root)

  return result[k - 1]
}
