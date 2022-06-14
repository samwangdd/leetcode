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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = []
  // 根节点为空与子节点为空，处理方式不同
  if (!root) {
    return res
  }

  res = [[root], getNode(root)]
  return res
}

var getNode = function (node) {
  let res
  if (!node) {
    return
  }
  // 节点有值、节点的子节点是否存在
  if (node.left || node.right) {
    res = [
      [node.left, node.right],
      [getNode(node.left), getNode(node.right)],
    ]
  }

  return res
}

// 递归
var levelOrder = function (root) {
  let levels = []
  // 根节点为空与子节点为空，处理方式如何不同？
  if (!root) {
    return levels
  }

  var helper = function (node, level) {
    if (levels.length === level) {
      levels.push([])
    }
    levels[level].push(node.val)
    if (node.left) {
      helper(node.left, level + 1)
    }
    if (node.right) {
      helper(node.right, level + 1)
    }
  }

  helper(root, 0)
  return levels
}

// 迭代
var levelOrder = function (root) {
  let levels = []

  if (!root) {
    return levels
  }
  const queue = [root]
  let level = 0 // 表示树节点的第几层

  while (queue.length) {
    levels.push([])
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      // 给当前 level 添加值
      levels[level].push(node.val)
      // 将子节点放入下一层 level
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    level += 1
  }

  return levels
}
