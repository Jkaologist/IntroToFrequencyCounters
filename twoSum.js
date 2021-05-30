/**
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution,
 * and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * 
 */

// brute force approach O(N^2)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

// function twoSum(nums, target) {
//   const lookup = {}
//   for (let num of nums) {
//     lookup[num] = target - num
//   }
//   for (let num of nums)
// }

module.exports = twoSum