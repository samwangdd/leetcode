/**
 * 打乱数组
 * https://leetcode.cn/problems/shuffle-an-array/submissions/
 */

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = nums
  this.copy = [...nums]
}

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = this.copy
  this.copy = this.copy.slice(0)
  return this.copy
}

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const arr = []
  const nums = this.nums.slice(0)
  const len = nums.length
  for (let i = 0; i < len; i += 1) {
    const random = Math.floor(Math.random() * len)
    arr[i] = nums[random]
    nums.splice(random, 1)
  }
  return arr
}

Solution.prototype.shuffleFast = function () {
  const nums = this.nums.slice(0)
  const len = nums.length
  for (let i = len - 1; i > 0; i -= 1) {
    const targetIndex = Math.floor(Math.random() * (i + 1))
    ;[nums[i], nums[targetIndex]] = [nums[targetIndex], nums[i]]
  }
  return nums
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
