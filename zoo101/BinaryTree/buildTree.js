// https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// 从中序和前序遍历序列构造二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  // preorder 及 inorder 里面节点是什么关系？
  // 如何把它们的关系用代码描述出来:
  // 前序遍历首先出现的数(即3)为根结点
  // 3 在中序遍历中的位置之前的结点 9 必定为根结点的左子树;
  // 在前序遍历中 9 之后的结点为根结点的右子树;
  if (preorder.length === 0 || inorder.length === 0) {
    return null
  }
  return constructorNewNode(
    preorder,
    inorder,
    0,
    preorder.length,
    0,
    inorder.length,
  )
}

function findInorderIndex(list, target) {
  if (list.length === 0) {
    return undefined
  }
  let index
  list.forEach((item, i) => {
    if (item === target) {
      index = i
    }
  })
  return index
}

function constructorNewNode(
  preorder,
  inorder,
  preStart,
  preLength,
  inStart,
  inLength,
) {
  const root = preorder[preStart]
  const inOrderIndex = findInorderIndex(inorder, root) // 根节点的索引
  const rootNode = new TreeNode(root)

  // 若中序遍历中，根节点之前有值，表示存在左子树
  if (inOrderIndex - inStart >= 1) {
    rootNode.left = constructorNewNode(
      preorder,
      inorder,
      preStart + 1,
      preStart + (inOrderIndex - inStart),
      inStart,
      inOrderIndex - 1,
    )
  }

  // 若中序遍历中，根节点之后有值，表示存在右子树
  if (inLength - inOrderIndex >= 1) {
    rootNode.right = constructorNewNode(
      preorder,
      inorder,
      preStart + (inOrderIndex - inStart) + 1,
      preLength,
      inOrderIndex + 1,
      inLength,
    )
  }

  return root || root === 0 ? rootNode : null
}
