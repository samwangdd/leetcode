/**  
 * 数组，双指针
 * 看到双指针的标签，就有点虚了🥲 ，其实也就是两个变量。一个指针 i 循环所有元素，另一个指针 temp 记录非 0 值的个数。
 * 第一次循环♻️ ，将所有非0值移到左侧，即赋值给 temp，然后 temp 递增 1；**temp 值表示非 0 元素的个数，意味着有多少个 0 需要复原回来**，所以第二次循环 temp～nums.length ，并将这些元素赋值为 0
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            nums[temp] = nums[i]
            temp++
        }
    }
    for (let j = temp; j < nums.length; j++) {
        nums[j] = 0
    }
};

/**
 * 快速排序双指针
 * 
 * @param {*} nums
 */
var moveZeroes2 = function (nums) {
    let j = 0; // 中间指针，非零元素在它左边，零在右边
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) { // 如果非零就交换赋值
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j++] = temp;
        }
    }
};
/**
 * 方法二优化
 */
var moveZeroes3 = function (nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            if (i > j) {
                nums[j] = nums[i]
                nums[i] = 0
            }
            j++
        }
    }
};