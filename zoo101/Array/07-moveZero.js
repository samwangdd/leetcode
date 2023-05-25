function moveZero(nums) {
  // 双指针
  let j = 0; // j 用来记录非零的数
  
  for (let i = 0; i < nums.length; i++) {
  
    // i 不等于0，则赋值给 j
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  return nums.fill(0, j, nums.length);
}
