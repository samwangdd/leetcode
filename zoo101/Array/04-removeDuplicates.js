function removeDuplicates(nums) {
  for (let i = 1; i < nums.length; i++) {
    // 相邻元素相同，则删除
    if (nums[i - 1] === nums[i]) {
      nums.splice(i - 1, 1);
      // 删除数组元素后，长度变短，故 i 减一
      i--;
    }
  }

  return nums.length;
}

function removeDuplicates(nums) {
  let count = 0; // 通过 count 统计不重复的元素
  for (let i = 1; i < nums.length; i++) {
    // 若 i 不等于最后一个元素，则将 i 添加到数组末尾
    if (nums[count] !== nums[i]) {
      nums[count + 1] = nums[i];
      count++;
    }
  }

  return count + 1;
}
