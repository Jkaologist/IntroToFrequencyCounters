/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or
 * undefined if a pair does not exist.
 */

// O(N^2)
// function sumZero(arr) {
//   for (let num of arr) {
//     if (num === 0) continue
//     if (arr.indexOf(num * -1) !== -1) {
//       return [num, -num]
//     }
//   }
// }

// O(N^2)
// function sumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

function sumZero(arr) {
  let l = 0
  let r = arr.length - 1
  while (l < r) {
    let sum = arr[l] + arr[r]
    if (sum === 0) return [arr[l], arr[r]]
    if (sum > 0) r--
    else l++
  }
}

module.exports = sumZero