// implement a function called countUniqueValues,
// which accepts a sorted array, and counts the
// unique values in the array. There can be negative
// numbers in the array, but it will always be sorted.

// function countUniqueValues(arr) {
//   if (!arr.length) return 0
//   let first = 0
//   let second = 1
//   let count = 1
//   while (second < arr.length) {
//     if (arr[first] !== arr[second]) {
//       count++
//       first++
//       second++
//     } else {
//       first++
//       second++
//     }      
//   }
//   return count
// }

function countUniqueValues(arr) {
  if (!arr.length) return 0
  let i = 0
  let j = 1
  while (j < arr.length) {
    if (arr[j] > arr[i]) {
      i++
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    j++
  }
  return i+1
}

module.exports = countUniqueValues