/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let layer = 0;
  if (!root.val) return root;
  const generateNext = (root) => {
    if (!root.left || !root.right) return;
  };
  generateNext(root);
};

// 递归
var connect = function (root) {
  // 1. 找到递归出口
  if (root === null) return root;
  // 2. 找到节点之间的规律
  if (!!root.left && !!root.right) {
    root.left.next = root.right;
  }
  if (!!root.right && !!root.next && !!root.next.left) {
    root.right.next = root.next.left;
  }
  connect(root.left);
  connect(root.right);

  return root;
};

// 双指针
var connect = function (root) {
  if (root === null) {
    return root;
  }
  // start 为每一层的起始节点
  let start = root;
  // current 为遍历的当前节点
  let current = null;
  // 如果有子节点
  while (start.left) {
    current = start;
    while (current) {
      current.left.next = current.right;
      if (current.next) {
        current.right.next = current.next.left;
      }
      current = current.next;
    }
    start = start.left;
  }
  return root;
};
