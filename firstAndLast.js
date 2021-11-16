/**
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 *
 * If target is not found in the array, return [-1, -1].
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */
/**
 *
 * [5, 7, 7, 8, 8, 10]
 *  s     h        e
 *
 */
const searchRange = (nums, target) => {
  let lower = findBound(nums, target, true);
  if (lower === -1) {
    return [-1, -1];
  }
  let upper = findBound(nums, target, false);
  return [lower, upper];
};

const findBound = (nums, target, isFirst) => {
  let s = 0;
  let e = nums.length - 1;
  while (s <= e) {
    let m = Math.floor((s + e) / 2);
    if (nums[m] === target) {
      if (isFirst) {
        if (m === s || nums[m - 1] < target) return m;
        e = e - 1;
      } else {
        if (m === e || nums[m + 1] > target) return m;
        s = m + 1;
      }
    } else if (nums[m] > target) {
      e = m - 1;
    } else {
      s = s + 1;
    }
  }
  return -1;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
