function onlyItem(nums) {
    const numsGroup = nums.map(num => nums.filter(v => v === num));
    const res = numsGroup.find(num => num.length === 1)[0]
    return res;
}