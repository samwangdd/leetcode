/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  // 二分法如何确定中间位置？奇偶性如何解决
  const mid = Math.floor((nums.length + 1) / 2)
  const tree = new TreeNode()
  tree.val = nums[mid]
  // 如何遍历数组?
  // 左指针
  for (let i = 0; i < mid; i++) {
    tree.left = nums[i]
  }
  for (let j = nums.length - 1; j > mid; j--) {
    // 如何改变 tree? -- 递归 recurrence
    tree.right = nums[j]
  }
  return tree
}

/**
 * 二分法 + 递归
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  return initTreeNodes(nums, nums.length - 1, 0)
}

const initTreeNodes = (arr, end, start) => {
  if (start <= end) {
    // 找到中间元素
    const mid = start + parseInt((end - start) / 2, 10)
    const root = new TreeNode(arr[mid])
    // 因为是有序数组，所以左节点在 0 ～ mid
    root.left = initTreeNodes(arr, mid - 1, start)
    // 右节点在 mid ~ end
    root.right = initTreeNodes(arr, end, mid + 1)
    return root
  } else {
    return null
  }
}
