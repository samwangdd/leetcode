function singleNum(nums) {
    return nums.reduce((acc, cur) => acc ^ cur)
}