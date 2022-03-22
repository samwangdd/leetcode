/**
 * 数组、哈希表
 */
/**
 * 暴力求解
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (nums.length <= 2) return [0, 1]
  const length = nums.length
  for (let i = 0; i < length; i++) {
    const rest = target - nums[i]
    for (let j = i + 1; j < length; j++) {
      if (target - nums[i] === nums[j]) {
        return [i, j]
      }
    }
  }
}

/**
 * 利用 Map 作为哈希表
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  const hashMap = new Map()
  for (let i = 0, len = nums.length; i < len; i++) {
    const rest = target - nums[i]
    if (hashMap.has(rest)) {
      // has 检测 key 是否存在
      return [hashMap.get(rest), i]
    } else {
      hashMap.set(nums[i], i) // nums[i] 为 key
    }
  }
}
