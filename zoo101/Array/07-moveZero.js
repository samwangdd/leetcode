function moveZero(nums) {
    const lens = nums.length;
    for (let i = 0; i < lens; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
            len --;
        }
    }

    return nums;
}