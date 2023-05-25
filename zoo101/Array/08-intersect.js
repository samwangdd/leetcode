function intersect(nums1, nums2) {
  const hashObject = {};
  for (let i = 0; i < nums1.length; i++) {
    if (hashObject[nums1[i]]) {
      hashObject[nums1[i]] += 1;
    } else {
      hashObject[nums1[i]] = 1;
    }
  }

  const result = [];
  for (let j = 0; j < nums2.length; j++) {
    if (hashObject[nums2[j]]) {
      result.push(hashObject[nums2[i]]);
      hashObject[nums2[i]] -= 1;
    }
  }

  return result;
}
