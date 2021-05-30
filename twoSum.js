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
// function twoSum(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// }

// // double hash table solution O(N)
// // lookup times reduced to O(1) by trading space for time
// function twoSum(nums, target) {
//   const lookup = {}
//   // iterate through the nums arr
//   for (let i = 0; i< nums.length;i ++ ) {
//     lookup[nums[i]] = i // {1:0, 2:1, 3:2}
//   }
//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i] // 4
//     if (complement in lookup && lookup[complement] !== i) {
//       return [i, lookup[complement]]
//     }
//   }
// }

// Single pass hash method O(N) TC O(1) Lookup O(N) SC
function twoSum(nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (complement in obj) {
      return [obj[complement], i]
    }
    obj[nums[i]] = i
  }
}

module.exports = twoSum