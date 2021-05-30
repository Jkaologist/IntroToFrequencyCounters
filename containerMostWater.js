/**
  Container With Most Water

  Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

  You may not slant the container.

  Input: height = [1,8,6,2,5,4,8,3,7]
  Output: 49
  Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
  Example 2:

  Input: height = [1,1]
  Output: 1
  Example 3:

  Input: height = [4,3,2,1,4]
  Output: 16
  Example 4:

  Input: height = [1,2,1]
  Output: 2
  
  Constraints:

  n == height.length
  2 <= n <= 105
  0 <= height[i] <= 104
 * 
 * @param {number[]} height
 * @return {number}
 */

// // Brute force approach O(N^2) T.C. O(1) S.C.
// function maxArea(height) {
//   let maxArea = 0
//   for (let i = 0; i < height.length; i++) {
//     for (let j = height.length - 1; j > 0; j--) {
//       let y = Math.min(height[i], height[j])
//       let x = j - i
//       maxArea = Math.max(x * y, maxArea)
//     }
//   }
//   return maxArea
// }

// Double Pointer Method for O(N) T.C. O(1) S.C.
function maxArea(height) {
  let l = 0
  let r = height.length - 1 
  let maxArea = 0
  while (l < r) {
    let x = r - l
    let y = Math.min(height[l], height[r])
    maxArea = Math.max(maxArea, x * y) 
    if (height[l] < height[r]) {
      l++
    } else {
      r--
    }
  }
  return maxArea
}

module.exports = maxArea;