/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 遍历 traversal
 *
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

  return res[k - 1]
}

/**
 * 循环 circulate
 *
 * @param {*} root
 * @param {*} k
 * @return {*}
 */
var kthSmallest = function (root, k) {
  const result = []
  let current = root
  const stack = []
  // 循环终止
  while (result.length < k && (current || stack.length > 0)) {
    if (current) {
      if (current.left) {
        stack.push(current)
        current = current.left
      } else {
        result.push(current.val)
        current = current.right
      }
    } else {
      current = stack.pop()
      result.push(current.val)
      current = current.right
    }
  }

  return result[k - 1]
}
