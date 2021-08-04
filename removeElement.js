/**
Given an integer array nums and an integer val, 
remove all occurrences of val in nums in-place. 
The relative order of the elements may be changed.

Since it is impossible to change the length of the array in some languages, 
you must instead have the result be placed in the first part of the array nums. 
More formally, if there are k elements after removing the duplicates, 
then the first k elements of nums should hold the final result. 
It does not matter what you leave beyond the first k elements.

Return k after placing the final result in the first k slots of nums.

Do not allocate extra space for another array. 
You must do this by modifying the input array in-place with O(1) extra memory.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
// It is sorted with no values equaling val.
                      
int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) { assert nums[i] == expectedNums[i] }
If all assertions pass, then your solution will be accepted.
*/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// // takes in an array of numbers
// // only work on the nums array
// // need to output a the variable that counts 
// // the size of the vals
// function removeElement(nums, val) {
//   let counter = 0
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === val) {
//       nums[i] = undefined
//       counter ++
//     }
//   }
//   for (let j = nums.length - 1; j >= 0; j--) {
//     if (counter === 0) {
//       break
//     }
//     if (nums[j] !== undefined) {
//       continue
//     } 
//     else {
//       [nums[j], nums[nums.length - 1]] = [nums[nums.length - 1], nums[j]]
//       nums.pop()
//       counter --
//     }
//   }
//   return nums.length
// }

// simple o(n) TC o(1) SC
function removeElement(nums, val) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i]
      j++
    }
  }
  return j
}

module.exports = removeElement
