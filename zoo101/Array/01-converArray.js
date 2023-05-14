function converArray(nums, k) {
    const len = nums.length;
    const step = k % len;
    nums.unshift(...nums.splice(len - step, step))
}