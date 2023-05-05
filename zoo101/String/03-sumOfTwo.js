function sumOfTwo(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const raw = target - element;
        if (hash[raw] !== undefined) {
            return [i, hash[raw]]
        }
        hash[raw] = i
    }

    return []
}